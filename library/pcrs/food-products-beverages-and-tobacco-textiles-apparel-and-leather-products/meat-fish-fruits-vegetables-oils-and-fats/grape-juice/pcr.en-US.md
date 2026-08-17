---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.grape-juice
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Grape juice

## 1. Scope and Applicability

This PCR covers unfermented but fermentable grape juice made solely from grapes, either directly expressed or reconstituted from grape-juice concentrate, at the declared factory-gate market state. Clear and cloudy products, bulk and consumer-packed products, and ambient, chilled, or frozen market states are included when the route and state are declared.

The PCR excludes grape nectar, mixed-fruit juice, grape purée sold as such, grape-juice concentrate sold as the reference product, wine and other fermented beverages, grape must intended for fermentation, vinegar, syrups, and drinks whose identity is not grape juice. Vineyard cultivation, distribution after the factory gate, retail refrigeration, consumer use, and end-of-life are outside the foreground boundary unless separately modelled and linked.

Product identity, composition, permitted processing, preservation, and safety controls shall follow the rules applicable to the declared market. Codex CXS 247-2005 is the international identity baseline. EU Directive 2001/112/EC and 21 CFR Part 120 are applied only when their jurisdictions or an explicitly adopted equivalent specification are relevant.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.grape-juice |
| classification_refs | CPC 3.0: 21434 Grape juice |
| covered_products | Directly expressed grape juice and grape juice from concentrate; clear or cloudy; bulk or consumer packed; declared ambient, chilled, or frozen factory-gate state |
| excluded_products | Grape nectar; mixed-fruit juice; grape purée; grape-juice concentrate sold as the reference product; grape must for fermentation; wine and other fermented beverages; vinegar; syrup; grape-flavoured drinks |
| representative_product | Unfermented, fermentable single-fruit grape juice conforming to the declared route and market specification |
| production_route | Receipt of sound grapes, preparation, mechanical extraction, optional clarification or stabilization, preservation and filling; or receipt of grape-juice concentrate, controlled reconstitution, preservation and filling; concentration is included only when performed inside the declared foreground system |
| market_state | Net grape juice at the factory gate, excluding packaging mass, with route, clear/cloudy state, preservation method, packaging format, storage condition and concentrate status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Grape juice that satisfies the declared product identity, composition, safety and release specification |
| How much | 1 kg net grape juice, excluding packaging mass |
| How well | Conforming released product with declared route, soluble-solids basis, clear/cloudy state, preservation method, packaging format and storage condition |
| How long or cycle | One production and release cycle ending at the factory gate; no service duration is assigned to the beverage |
| reference_flow_link | `rf_grape_juice` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net as-received grape juice at the factory gate |
| Reference product flow | Grape juice `d030caf4-ad0f-4371-8e04-b15ce67cc4fb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | directly expressed or from concentrate; fraction from concentrate if blended; clear or cloudy; grape species or declared product specification; soluble-solids or concentration basis; preservation method; packaging format; ambient, chilled or frozen state; factory location; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the foreground inventory to exactly 1 kg of released net grape juice after all in-scope processing losses and before packaging mass is added. |
| `material_mass_state` | Grapes, juice intermediates, concentrate, ingredients, processing aids, packaging, wastes and co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual mass and the measured material state. Wet mass, dry mass, concentrate mass and diluted mass shall not be mixed without a documented conversion. |
| `soluble_solids_separate` | Juice and concentrate streams | Route-specific concentration measurement | declared method and unit | Record soluble solids or the legally applicable concentration indicator separately from mass. Do not convert volume to mass or infer concentrate dilution from nominal labels without measured density or batch formulation evidence. |
| `water_mass_by_use` | Ingredient, reconstitution, process and cleaning water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record water by use. Reconstitution water shall remain separate from extraction, cleaning and utility water. |
| `energy_carrier_preservation` | Electricity, fuels, steam, heat, cooling and compressed utilities | Carrier-specific energy property | kWh, MJ or metered carrier unit | Preserve the metered carrier and unit, document lower/higher heating value where relevant, and convert only with a stated factor. Do not combine electricity and thermal energy before impact calculation. |
| `packaging_mass_separate` | Primary, secondary and transport packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure packaging material by type and include it when inside the declared factory-gate product system, but exclude packaging mass from the 1 kg reference amount. |
| `batch_mass_balance` | Each route and production period | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile recorded mass inputs with product, intermediates, co-products, wastes, wastewater and measured or calculated water losses; disclose the residual and investigation threshold. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | For directly expressed juice, sound grapes measured at the processing-facility receiving point; for juice from concentrate, grape-juice concentrate and reconstitution water measured at the reconstitution facility receiving point; identify any upstream step brought into the foreground. |
| starting_condition_role | The declared starting material is the first foreground technosphere input; its upstream production remains represented by a linked dataset rather than being recreated inside this PCR. |
| product_classification_scope | Single-fruit grape juice corresponding to CPC 3.0 code 21434; classification is mapping context and does not override the semantic exclusions in this PCR. |
| recursive_input_rule | When grape juice or grape-juice concentrate enters from outside the foreground system, record it as a purchased intermediate with route, concentration, origin and supplier-dataset reference; do not recursively model it as the same foreground output. |
| upstream_dataset_requirement | Use representative upstream datasets for grapes, purchased concentrate or juice intermediates, water, energy carriers, processing aids, cleaning materials and packaging. Disclose geography, technology, time, allocation and data-quality mismatches. |
| disclosure | Declare route, starting material, included unit operations, outsourced operations, concentration/reconstitution steps, preservation and filling method, storage condition, product and packaging state, cut-offs, co-product destinations and excluded life-cycle stages. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_identity` | Product scope | Include only unfermented grape juice made by a declared directly expressed or from-concentrate route. Keep nectars, mixed juices, fermented products and concentrate sold as the reference product outside this PCR. | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `boundary_factory_gate` | Foreground processes | Include receipt and preparation, juice recovery or reconstitution, all site clarification/stabilization operations, preservation, filling, in-scope storage, cleaning, utilities, wastewater generation, product losses and packaging used before the declared factory gate. | `codex-cxs-247-2005` |
| `boundary_route_specificity` | Direct and from-concentrate routes | Model only operations actually performed. If concentrate or an intermediate is purchased, link its upstream dataset and do not add a fictitious concentration step at the reconstitution site. | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `boundary_food_safety_controls` | Safety-related operations | Record the actual preservation or pathogen-control operation and its monitored parameters. Apply jurisdiction-specific HACCP and pathogen-reduction requirements only where legally or contractually applicable. | `codex-cxs-247-2005`; `us-ecfr-21-cfr-120` |
| `boundary_excluded_life_cycle` | Upstream and downstream stages | Vineyard cultivation, off-site production of purchased inputs, distribution after the factory gate, retail, use and end-of-life require linked datasets or explicit scope extension; they are not silently absorbed into the foreground inventory. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `grape_receipt_preparation` | Grape receipt and preparation | `conditional` | Required when fresh grapes enter the foreground system | Receive, inspect, sort, wash when used, destem or crush, and transfer grapes | kg grapes received and accepted |
| `juice_extraction_conditioning` | Juice extraction and conditioning | `conditional` | Required for directly expressed juice or when extraction occurs in the declared foreground | Mechanically recover juice and perform route-specific settling, clarification, filtration or stabilization | kg extracted juice intermediate |
| `juice_concentration` | Juice concentration | `conditional` | Include only when concentration occurs in the declared foreground system | Remove water physically and recover declared concentrate and condensate streams | kg concentrate produced |
| `juice_reconstitution` | Juice reconstitution | `conditional` | Required when grape juice is made from purchased or foreground concentrate | Combine concentrate, measured water and permitted restored components to the declared specification | kg reconstituted juice |
| `preservation_filling` | Preservation and filling | `required` | Always required; record the actual preservation and packaging configuration | Apply the validated preservation step, finish, fill, close and release product | 1 kg released net grape juice |
| `finished_storage` | Finished-product storage | `conditional` | Include when ambient, chilled or frozen storage occurs before the factory gate | Maintain declared storage conditions until dispatch | kg grape juice dispatched |

### Process: Grape receipt and preparation (`grape_receipt_preparation`)

#### Inputs

##### Product flows

###### Fresh grapes received for juice manufacture (`fresh_grapes_input`)

Record accepted and rejected grape lots at the facility gate, including origin, variety or species declaration, maturity or soluble-solids evidence, and measured as-received mass.

- Selected flow: Fresh grapes (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-received grape mass allocated to conforming grape-juice production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxs-247-2005`
- Range: Provisional grape-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg grapes/kg released grape juice
  - Basis: broad screening interval pending route-specific foreground yield evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation and washing water (`preparation_water_input`)

Record metered water used for grape washing and preparation separately from sanitation water and any reconstitution water.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured water supplied to grape preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Provisional preparation-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water/kg released grape juice
  - Basis: broad screening interval pending metered site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for preparation equipment (`preparation_electricity_input`)

Record metered or sub-metered electricity for receiving, conveying, washing, sorting, destemming and crushing.

- Selected flow: Electricity supplied at facility gate (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh (Tiangong flow-property UUID unresolved)
- Amount rule: measured electricity attributable to grape preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional preparation-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg released grape juice
  - Basis: broad screening interval pending metered site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is expected as a routine foreground flow; disclose any imported waste used by an unusual route.

##### Elementary flows

Record direct resource withdrawals only when they cross from the environment; purchased water is a product flow.

#### Outputs

##### Product flows

###### Prepared grapes transferred to extraction (`prepared_grapes_output`)

Measure the mass transferred after sorting and preparation and retain the link to the receiving lot.

- Selected flow: Prepared grapes for extraction (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted grapes or per 1 kg released net grape juice, with basis declared
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_batch_records`
- Sources:

##### Waste flows

###### Rejected grapes and preparation residues (`preparation_rejects_output`)

Record rejected grapes, stems, leaves and foreign material by destination and by whether the stream is waste, internally reused material or a saleable co-product.

- Selected flow: Rejected grapes and preparation residues (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources:
- Range: Provisional preparation-reject QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg released grape juice
  - Basis: broad screening interval pending foreground sorting and destination records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater_output`)

Measure wastewater sent to on-site treatment, sewer, off-site treatment or another destination; retain route and solids information when available.

- Selected flow: Wastewater (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or calculated discharge mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources:
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg wastewater/kg released grape juice
  - Basis: broad screening interval pending site water-balance evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record direct emissions only when measured or calculated for this step and not already represented in a wastewater or waste treatment dataset.

### Process: Juice extraction and conditioning (`juice_extraction_conditioning`)

#### Inputs

##### Product flows

###### Prepared grapes or grape pulp (`prepared_grapes_input`)

Link the measured prepared-grape transfer from the preceding process and preserve lot identity.

- Selected flow: Prepared grapes for extraction (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass entering extraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg extracted juice intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_batch_records`
- Sources: `codex-cxs-247-2005`

###### Extraction, clarification and cleaning water (`extraction_water_input`)

Record water by use and do not merge it with water used for concentrate reconstitution.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured water supplied to extraction and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Provisional extraction-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water/kg released grape juice
  - Basis: broad screening interval pending metered site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route-specific processing aids (`processing_aids_input`)

Record each enzyme, clarifying, filtration, stabilization or other aid actually used, including concentration, lot, mass and disposition. The PCR does not assume a particular aid.

- Selected flow: Route-specific processing aid (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-used mass of each processing aid
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxs-247-2005`
- Range: Provisional processing-aid QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg released grape juice
  - Basis: broad screening interval; replace with aid-specific reviewed evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for extraction and conditioning (`extraction_electricity_input`)

Record electricity for pressing, pumping, settling, separation, filtration and stabilization actually performed.

- Selected flow: Electricity supplied at facility gate (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh (Tiangong flow-property UUID unresolved)
- Amount rule: measured electricity attributable to extraction and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional extraction-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg released grape juice
  - Basis: broad screening interval pending metered site evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is expected.

##### Elementary flows

Record direct resource withdrawals only when they cross from the environment.

#### Outputs

##### Product flows

###### Extracted grape juice intermediate (`extracted_juice_output`)

Measure intermediate juice mass and concentration after the declared extraction and conditioning steps.

- Selected flow: Grape juice intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured intermediate mass with separately recorded soluble-solids or concentration result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per extraction batch and per 1 kg released net grape juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_batch_records`
- Sources: `codex-cxs-247-2005`

##### Waste flows

###### Grape pomace, lees and filtration residues (`pomace_lees_output`)

Record each stream by measured wet or dry mass, moisture basis, composition category and actual destination. Classification as waste or co-product follows the documented destination and applicable rules.

- Selected flow: Grape pomace, lees and filtration residues (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by stream, state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources:
- Range: Provisional pomace-and-residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg released grape juice
  - Basis: broad screening interval pending route-specific foreground mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Extraction and conditioning wastewater (`extraction_wastewater_output`)

Record wastewater by treatment destination and avoid double counting water retained in pomace or product.

- Selected flow: Wastewater (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or water-balance-derived discharge mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources:
- Range: Provisional extraction-wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg wastewater/kg released grape juice
  - Basis: broad screening interval pending site water balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record only direct releases not already represented through a waste or wastewater treatment flow.

### Process: Juice concentration (`juice_concentration`)

#### Inputs

##### Product flows

###### Juice feed to concentration (`juice_feed_input`)

Record feed mass and concentration immediately before concentration.

- Selected flow: Grape juice intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured feed mass with measured soluble-solids or concentration result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg concentrate produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_batch_records`
- Sources: `codex-cxs-247-2005`

###### Thermal energy for concentration (`concentration_heat_input`)

Record metered steam, fuel or heat by carrier and preserve the carrier-specific unit.

- Selected flow: Thermal energy carrier (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ (Tiangong flow-property UUID unresolved)
- Amount rule: measured carrier use or calculated delivered heat from metered carrier records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional concentration-heat QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg released grape juice
  - Basis: broad screening interval pending technology-specific metering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is expected.

##### Elementary flows

Record direct fuel combustion emissions only when combustion occurs inside the foreground and is not represented by an upstream heat dataset.

#### Outputs

##### Product flows

###### Grape-juice concentrate (`grape_concentrate_output`)

Measure concentrate mass and final concentration; record recovered aroma or components separately where relevant.

- Selected flow: Grape-juice concentrate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured concentrate mass with measured concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per concentration batch and per 1 kg released net grape juice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_batch_records`
- Sources: `codex-cxs-247-2005`; `eu-directive-2001-112-ec`

##### Waste flows

###### Condensate and concentration losses (`concentration_water_loss_output`)

Record recovered condensate, discharged condensate and uncollected water loss separately when data permit.

- Selected flow: Condensate or water loss (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured condensate plus mass-balance-derived uncollected water loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_batch_records`
- Sources:
- Range: Provisional concentration-water-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg released grape juice
  - Basis: broad screening interval pending feed and concentrate concentration measurements
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record direct releases only when they cross the environmental boundary.

### Process: Juice reconstitution (`juice_reconstitution`)

#### Inputs

##### Product flows

###### Grape-juice concentrate received (`grape_concentrate_input`)

Record supplier, origin, mass, concentration and linked upstream dataset for each concentrate lot.

- Selected flow: Grape-juice concentrate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured concentrate mass used in each reconstitution batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxs-247-2005`; `eu-directive-2001-112-ec`
- Range: Provisional concentrate-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg concentrate/kg released grape juice
  - Basis: broad screening interval pending lot concentration and formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reconstitution water (`reconstitution_water_input`)

Record water mass and the applicable chemical, microbiological and organoleptic quality evidence.

- Selected flow: Potable reconstitution water (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured batch water added for reconstitution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxs-247-2005`; `eu-directive-2001-112-ec`
- Range: Provisional reconstitution-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg water/kg released grape juice
  - Basis: broad screening interval pending concentrate composition and batch formulation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is expected.

##### Elementary flows

No routine elementary input is expected; disclose direct resource withdrawal if used.

#### Outputs

##### Product flows

###### Reconstituted grape juice intermediate (`reconstituted_juice_output`)

Measure output mass and verify the route-specific product specification without assuming a fixed formulation across concentrate lots.

- Selected flow: Reconstituted grape juice intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculated batch mass reconciled to measured transfer mass and concentration result
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reconstitution batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_batch_records`
- Sources: `codex-cxs-247-2005`; `eu-directive-2001-112-ec`

##### Waste flows

###### Reconstitution losses and wastewater (`reconstitution_loss_output`)

Record spills, line losses, cleaning wastewater and off-spec batches by destination.

- Selected flow: Reconstitution loss and wastewater (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-derived loss by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources:
- Range: Provisional reconstitution-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg released grape juice
  - Basis: broad screening interval pending batch reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record only direct releases not represented through waste treatment.

### Process: Preservation and filling (`preservation_filling`)

#### Inputs

##### Product flows

###### Route-specific grape juice before final preservation (`juice_before_preservation_input`)

Record the mass, route, concentration, clear/cloudy state and transfer source of juice entering the final preservation and filling system.

- Selected flow: Grape juice intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per filling batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_batch_records`
- Sources: `codex-cxs-247-2005`

###### Electricity and thermal utilities for preservation and filling (`preservation_energy_input`)

Record electricity and each thermal carrier separately for pasteurization or other validated preservation, cooling, pumping and filling.

- Selected flow: Electricity and thermal utilities (Tiangong UUID unresolved)
- Flow property / unit: carrier-specific Energy / kWh or MJ (Tiangong flow-property UUID unresolved)
- Amount rule: measured carrier-specific use attributable to preservation and filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `us-ecfr-21-cfr-120`
- Range: Provisional preservation-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ-equivalent screening value/kg released grape juice
  - Basis: broad screening only; preserve carrier-specific foreground values rather than using this combined value in the inventory
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_material_input`)

Record primary, secondary and transport packaging by material, component and actual mass.

- Selected flow: Packaging material by type (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or bill-of-material mass by packaging material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources:
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg packaging/kg released grape juice
  - Basis: broad screening interval pending product-specific bill of materials
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation materials (`sanitation_material_input`)

Record cleaning water and each cleaning or sanitation chemical separately; do not treat chemical solution mass as active-ingredient mass without concentration evidence.

- Selected flow: Cleaning and sanitation material (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-used material mass allocated by documented cleaning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources:
- Range: Provisional sanitation-material QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg as-used material/kg released grape juice
  - Basis: broad screening interval pending cleaning-campaign records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is expected.

##### Elementary flows

Record direct fuel combustion or refrigerant releases only where they occur inside the foreground boundary and are supported by records or a stated calculation.

#### Outputs

##### Product flows

###### Released grape juice (`released_grape_juice_output`)

This is the reference product. Record accepted net product mass after all in-scope losses and keep packaging mass separate.

- Selected flow: Grape juice `d030caf4-ad0f-4371-8e04-b15ce67cc4fb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net released grape juice after normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-247-2005`

##### Waste flows

###### Off-spec juice, filling loss and final wastewater (`filling_loss_wastewater_output`)

Record off-spec product, spills, start-up or changeover losses, packaging scrap and wastewater separately by destination.

- Selected flow: Filling loss and wastewater by destination (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or reconciled mass by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net grape juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources:
- Range: Provisional filling-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg released grape juice
  - Basis: broad screening interval pending filling and wastewater records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record direct emissions only when they cross the environment boundary and are not double counted in utility or treatment datasets.

### Process: Finished-product storage (`finished_storage`)

#### Inputs

##### Product flows

###### Released product entering storage (`stored_product_input`)

Record product mass, packaging configuration, storage temperature class and storage duration before factory-gate dispatch.

- Selected flow: Grape juice `d030caf4-ad0f-4371-8e04-b15ce67cc4fb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net product entering storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg grape juice dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources:

###### Storage electricity (`storage_electricity_input`)

Record metered or allocated electricity for chilled or frozen storage and material-handling equipment before dispatch.

- Selected flow: Electricity supplied at facility gate (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh (Tiangong flow-property UUID unresolved)
- Amount rule: measured electricity multiplied by documented storage allocation share
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg grape juice dispatched
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources:
- Range: Provisional storage-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg grape juice dispatched
  - Basis: broad screening interval pending temperature, duration and metered load evidence
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No routine waste input is expected.

##### Elementary flows

Record refrigerant leakage only from charge and service records or a documented calculation.

#### Outputs

##### Product flows

###### Dispatch-ready grape juice (`dispatch_ready_output`)

Record accepted net mass leaving storage and any storage loss before the declared factory gate.

- Selected flow: Grape juice `d030caf4-ad0f-4371-8e04-b15ce67cc4fb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured dispatch mass normalized to 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch_records`
- Sources:

##### Waste flows

Record storage-damaged or expired product by mass and destination when present.

##### Elementary flows

Record direct releases only when supported by foreground evidence.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Multi-output foreground processes | First avoid allocation by separately measuring and subdividing processes or by expanding the system only when the substituted function and linked dataset are explicitly justified. | `iso-14044-2006` |
| `allocation_residue_status` | Pomace, seeds, stems, lees, recovered aroma, concentrate by-products and off-spec juice | Determine from the actual destination and applicable rules whether each output is waste, internal reuse or a co-product. Do not assign an avoided burden or co-product credit merely because a stream has a possible use. | `iso-14044-2006` |
| `allocation_physical_then_other` | Unavoidable allocation | Use a documented causal physical relation where it represents the joint process. If no defensible physical relation exists, use another declared relation such as economic value with geography, period, prices, sensitivity and zero-value treatment disclosed. | `iso-14044-2006` |
| `allocation_internal_recycling` | Internal juice recirculation, rework, water recovery and recovered heat | Keep internal loops inside the foreground process and count only net external inputs and outputs. Disclose loop losses and do not credit the same recovery twice. | `iso-14044-2006` |
| `allocation_route_mix` | Datasets representing more than one production route or product configuration | Calculate route-specific inventories first and weight them by actual released net product mass for the declared production period. Do not average directly expressed and from-concentrate routes without route shares. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `grape_receipt_preparation`; `juice_extraction_conditioning`; `juice_reconstitution`; `preservation_filling` | Grapes, concentrate, processing aids and cleaning materials | Weighbridge, receiving, formulation, stock issue and lot records | material identity; supplier; lot; origin; route; gross/tare/net mass; concentration; moisture or active basis; timestamp; batch | Calibrated scale or verified inventory issue reconciled to production batch | kg and declared concentration basis | Each lot or batch | Entire representative production period | Each foreground facility and outsourced operation included in scope | Sum net material by batch and route; subtract documented returns; normalize to released net product mass | Scale calibration; supplier certificate where relevant; lot traceability; reconciliation sign-off |
| `cp_water_records` | all applicable processes | Ingredient, reconstitution, process, cleaning and utility water | Meter, batch formulation and quality-test records | meter start/end; water use; batch; source; treatment; quality result; timestamp | Calibrated meter preferred; batch tank or engineering calculation only when documented | kg or m3 with measured density/conversion | Each batch or meter interval | Entire representative production period | Each facility; separate major use and reconstitution water | Convert to mass with documented density when needed; allocate shared use by a recorded causal driver | Meter calibration; water-quality result; completeness reconciliation |
| `cp_energy_records` | all applicable processes | Electricity, fuels, steam, heat, cooling and compressed utilities | Meter, sub-meter, invoice and equipment-log records | carrier; meter start/end; quantity; unit; heating-value basis; batch or period; equipment; allocation driver | Direct metering preferred; documented allocation from facility meter where sub-metering is unavailable | carrier unit, kWh or MJ | Continuous, batch or billing interval | Entire representative production period including seasonal operation | Each facility and in-scope utility system | Preserve carriers; subtract unrelated loads; allocate shared utilities by metered time, mass throughput or documented engineering driver | Meter calibration; invoice reconciliation; conversion-factor source; allocation review |
| `cp_intermediate_batch_records` | `grape_receipt_preparation`; `juice_extraction_conditioning`; `juice_concentration`; `juice_reconstitution`; `preservation_filling` | Prepared grapes, juice, concentrate, condensate and transfers | Batch sheet, tank level, scale, flow meter and laboratory records | batch; input/output mass or volume; density; soluble solids or concentration; route; tank; timestamp; recovered components | Calibrated mass or flow measurement linked to representative sampling | kg plus declared analytical unit | Each batch and transfer | Entire representative production period | Each relevant process line | Reconcile transfers and calculate route-specific yields from measured states | Calibration; sampling method; laboratory QA; batch sign-off |
| `cp_residue_wastewater_records` | all applicable processes | Rejects, pomace, lees, off-spec product, packaging scrap, wastewater and treatment outputs | Scale, container, manifest, meter, treatment and destination records | stream; mass or volume; density; moisture; composition; destination; waste/co-product status; date; batch | Direct weighing or metering; documented water balance only for unmetered wastewater | kg or m3 with conversion | Each shipment, batch or meter interval | Entire representative production period | Each facility and destination | Aggregate separately by stream, state and destination; do not net co-products against inputs | Scale/meter calibration; transfer document; treatment record; destination confirmation |
| `cp_packaging_release_records` | `preservation_filling` | Packaging and released product | Packaging bill of materials, filling counter, net-content, scale, QA release and rejection records | SKU; packaging component; material; component mass; units filled; net content; accepted/rejected quantity; batch; release status | Verified bill of materials plus calibrated net-mass and line-count records | kg and item count | Each SKU and batch | Entire representative production period | Each filling line and product configuration | Convert counts to mass by verified component mass; normalize accepted net juice separately from packaging | Scale calibration; bill-of-material revision; release certificate; reconciliation |
| `cp_storage_dispatch_records` | `finished_storage` | Stored product, storage energy, loss and dispatch | Warehouse inventory, temperature, time, meter and dispatch records | batch; mass; entry/exit time; temperature class; meter quantity; loss; destination | Inventory transaction linked to monitored storage condition and meter period | kg, h or day, temperature and kWh | Each lot and meter interval | Entire in-scope storage period | Each ambient, chilled or frozen zone | Allocate energy by occupied mass-time or another documented causal driver; reconcile entry, dispatch and loss | Temperature log; meter evidence; inventory reconciliation; dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | normalized amount = route-specific amount / released net grape-juice mass; packaging mass is excluded from the denominator | measured row amount; accepted released net product mass | amount per 1 kg grape juice | `iso-14044-2006` |
| `calc_direct_route_yield` | Directly expressed route | yield = measured extracted or released juice mass / accepted grape mass, with material states and soluble-solids basis reported | accepted grape mass; intermediate and product mass; concentration results | route yield and reconciliation evidence | `codex-cxs-247-2005` |
| `calc_reconstitution_balance` | From-concentrate route | reconcile concentrate, reconstitution water, restored components and losses to measured reconstituted output; use measured lot concentration rather than a universal factor | concentrate mass and concentration; water; restored components; output mass and concentration; losses | reconstituted batch balance | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `calc_mass_balance` | Each process and route | residual = total measured mass inputs - total measured mass outputs - separately quantified transfer or water loss; report residual and signed review | input masses; product and co-product masses; waste; wastewater; measured/calculated loss | mass-balance residual |  |
| `calc_shared_utility_allocation` | Shared utilities | allocate only the measured shared total using a documented causal driver; preserve carrier and unit | shared meter quantity; sub-meter data if any; operating time, throughput or engineering driver | process-specific utility amount | `iso-14044-2006` |
| `calc_route_weighted_result` | Multi-route dataset | total normalized inventory = sum(route normalized inventory × route released-mass share) | route inventories; released product mass by route | production-weighted dataset inventory | `iso-14044-2006` |
| `calc_packaging_mass` | Packaging | packaging mass = verified component mass × accepted packed units, reconciled to issued and scrapped packaging | component mass; accepted units; issued material; scrap | packaging mass per kg net juice |  |
| `calc_storage_energy` | In-scope storage | storage energy allocated to product = metered zone energy × documented product mass-time share | zone meter; product mass; residence time; total occupied mass-time | storage electricity per kg dispatched product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Product and route | Retain product specification, route declaration, grape identity, concentrate status, clear/cloudy state, preservation method, packaging and storage state for every represented product configuration. | Batch specification, label or bulk specification, formulation and release record; `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `dq_temporal_coverage` | Foreground data | Cover a representative continuous production period or all relevant campaigns and disclose shutdowns, vintage or harvest effects, seasonal storage and exceptional batches. | Dated production, meter and dispatch records with coverage statement |
| `dq_mass_and_energy_measurement` | Material and utility rows | Use calibrated or verified measurement where material; disclose estimated shares, conversion factors, missing intervals and allocation drivers. | Calibration, invoices, meter reconciliation and uncertainty note |
| `dq_route_separation` | Direct, concentrated and reconstituted routes | Keep route-specific input, yield, energy, water, waste and product records separate until route weighting. | Route-coded batch and production records |
| `dq_completeness` | All foreground processes | Include major raw materials, water by use, electricity, thermal carriers, processing aids, cleaning, packaging, residues, wastewater, losses and direct emissions or document why a category is zero or not applicable. | Signed completeness checklist and process mass/energy reconciliation |
| `dq_safety_and_quality_controls` | Preservation and release | Retain actual monitored parameters, deviations, corrective actions and validation evidence for the applied preservation and legally applicable juice-safety controls. | HACCP or equivalent plan and records when applicable; process validation; release tests; `codex-cxs-247-2005`; `us-ecfr-21-cfr-120` |
| `dq_upstream_links` | Purchased inputs | Record supplier, geography, technology, time, concentration basis and dataset reference for grapes, concentrate, water, energy, aids and packaging; disclose proxy use. | Supplier and dataset metadata with representativeness review |
| `dq_reasoned_ranges` | Provisional QA guardrails | Treat every `reasoned_estimate` range only as a screening flag. Replace it with foreground distributions or reviewed external evidence before publication-critical use. | Review record showing replacement, acceptance or removal of each provisional range |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The selected reference product must resolve to Grape juice `d030caf4-ad0f-4371-8e04-b15ce67cc4fb`, a public state-100 Product flow classified as CPC 21434, with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg as the reference unit. |  |
| `validate_product_scope` | Product identity | Reject datasets for grape nectar, mixed juice, concentrate sold as the product, fermented products or other excluded products; require the declared direct or from-concentrate route. | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `validate_reference_quantity` | Reference amount | Confirm exactly 1 kg net released grape juice after in-scope loss, with packaging mass excluded and all required qualifiers present. |  |
| `validate_route_processes` | Process map | Require preservation and filling and every route-triggered conditional process; prohibit a fictitious concentration or extraction step when the corresponding intermediate is purchased. | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `validate_concentration_reconstitution` | Concentrated and from-concentrate routes | Require measured mass and concentration evidence for feed, concentrate, water, restored components, output and losses; do not accept an unsupported universal dilution factor. | `codex-cxs-247-2005`; `eu-directive-2001-112-ec` |
| `validate_inventory_completeness` | Foreground inventory | Check grapes or concentrate, water by use, electricity, thermal carriers, processing aids, cleaning, packaging, products, residues, wastewater, losses and direct emissions; every omission must be explicitly zero, not applicable or outside scope. |  |
| `validate_mass_balance` | Each route and process | Require a disclosed mass-balance residual, investigation threshold and reviewer decision; wet, dry, concentrated and diluted states shall be traceably converted. |  |
| `validate_safety_control` | Preservation and release | Require actual preservation or pathogen-control parameters and release evidence. Where 21 CFR Part 120 applies, require the facility-specific hazard analysis, HACCP records and applicable pathogen-reduction evidence rather than assuming a generic treatment. | `codex-cxs-247-2005`; `us-ecfr-21-cfr-120` |
| `validate_allocation` | Co-products and shared processes | Require output destination and waste/co-product status, allocation-avoidance review, selected allocation relation, parameters and sensitivity; reject automatic credits for possible but unverified uses. | `iso-14044-2006` |
| `validate_route_weighting` | Multi-route or multi-SKU dataset | Require actual released-mass shares and route-specific inventories before aggregation; packaging and storage configurations must remain traceable. | `iso-14044-2006` |
| `validate_uuid_resolution` | Inventory identity | The reference product and Mass support chain are resolved. Every other Tiangong inventory flow or property UUID remains unresolved until independently confirmed; no semantic candidate may be presented as an exact database identity. |  |
| `validate_provisional_ranges` | QA ranges | Flag values outside a provisional guardrail for review, but do not substitute the guardrail for foreground data. Publication review must replace, explicitly accept, or remove each `reasoned_estimate` range. |  |
| `validate_source_traceability` | Evidence | Every externally constrained boundary, identity, safety, quality or allocation rule must reference a listed source; web retrieval notes and Tiangong command traces must remain outside the PCR. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for grape juice at the declared factory gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, source review and resolution or explicit acceptance of identity and quantitative gaps |
| allowed_use | Route- and market-state-matched LCA studies, supply-chain models and downstream products when geography, time, technology, concentration route, packaging and storage are representative |
| excluded_use | Grape nectar, mixed juice, concentrate as the reference product, fermented products, vineyard cultivation by itself, or another route/geography/market state without documented representativeness review |
| required_metadata | PCR id and version; reference-flow UUID and unit support chain; geography; production period; direct/from-concentrate route and shares; grape or concentrate origin; soluble-solids basis; clear/cloudy state; preservation method; packaging; storage condition; process coverage; allocation; upstream datasets; unresolved identities; data owners and review status |
| required_quality_disclosure | Foreground versus proxy shares; meter and scale coverage; route separation; concentration and mass balance; data gaps; provisional ranges; allocation choices; safety-control applicability; upstream representativeness; uncertainty and reviewer decisions |
| update_trigger | Change in product identity or law; route, formulation, grape or concentrate sourcing, technology, preservation, packaging or storage change; new material co-product destination; material data-quality change; resolved Tiangong UUID; replacement of provisional evidence; or expiry of the declared representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-247-2005` | `standard` | Codex Alimentarius, General Standard for Fruit Juices and Nectars, CXS 247-2005, amended 2025, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+247-2005%2FCXS_247e.pdf (retrieved 2026-08-11) | Grape-juice identity, direct and from-concentrate routes, composition and authenticity checks, processing-aid context, hygiene and labelling-related route disclosure |
| `eu-directive-2001-112-ec` | `official_guidance` | Council Directive 2001/112/EC relating to fruit juices and certain similar products intended for human consumption, current EUR-Lex record, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32001L0112 (retrieved 2026-08-11) | Product and route definitions, concentrate and reconstitution distinction, permitted-process and route-disclosure context for applicable EU markets |
| `us-ecfr-21-cfr-120` | `official_guidance` | Electronic Code of Federal Regulations, Title 21, Part 120, Hazard Analysis and Critical Control Point (HACCP) Systems, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-120 (retrieved 2026-08-11) | Conditional US-market hazard analysis, monitoring, validation, recordkeeping and pathogen-reduction control evidence |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | LCI scope, inventory normalization, allocation hierarchy, reporting, interpretation and review framework |
