---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapple-juice
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pineapple juice

## 1. Scope and Applicability

This PCR applies to unfermented but fermentable pineapple juice made from the edible part of sound, appropriately mature pineapple (`Ananas comosus`) and delivered as a finished product at the manufacturing plant gate. It covers directly expressed juice and juice reconstituted from pineapple juice concentrate, whether clear or cloudy, provided the route, soluble-solids basis, preservation technology, and packaging format are declared.

The PCR excludes pineapple nectar, mixed-fruit juice, fruit drinks, fermented pineapple beverages, concentrated pineapple juice sold as the reference product, pineapple purée, and syrup from canned-fruit manufacture unless the material independently meets the declared pineapple-juice identity. It also excludes downstream distribution, retail refrigeration, consumer use, and packaging end-of-life from the default plant-gate dataset; those stages may be added only as separately declared scenarios.

The default product system is cradle-to-final-manufacturing-gate. Foreground production begins at fruit or concentrate receipt and covers route-specific preparation, extraction or reconstitution, product treatment, filling, packaging, cleaning, wastewater, residues, rejects, and on-site utilities. Upstream datasets are required for pineapple cultivation, concentrate production when applicable, incoming transport, energy carriers, water supply, packaging materials, treatment chemicals, and off-site waste or wastewater treatment.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapple-juice |
| classification_refs | CPC 3.0: 21433, Pineapple juice (exact mapping context) |
| covered_products | Directly expressed or reconstituted single-fruit pineapple juice; clear or cloudy; ambient, chilled, hot-filled, aseptically filled, or otherwise preserved when the route is declared |
| excluded_products | Pineapple nectar; mixed juice; fruit drinks; fermented beverages; pineapple concentrate as the sold reference product; purée; syrup; products whose added water or sweetener changes the identity from juice to another beverage category |
| representative_product | Market-ready, single-fruit pineapple juice, net of packaging, at the final manufacturing plant gate |
| production_route | Direct route: receive, sort, wash, prepare, extract, finish, treat, preserve, and fill; from-concentrate route: receive concentrate, reconstitute with potable water, restore permitted same-fruit components where used, treat, preserve, and fill |
| market_state | Finished manufactured juice at plant gate; preservation state and storage-temperature requirement declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Market-ready, single-fruit pineapple juice that preserves the declared compositional and sensory identity of pineapple juice |
| How much | 1 kg net pineapple juice, excluding primary, secondary, and tertiary packaging |
| How well | Unfermented but fermentable; direct juice retains the soluble-solids level of the extracted juice except permitted same-species blending; reconstituted juice targets at least 12.8 degrees Brix at 20 degrees C unless a documented applicable authenticity provision permits another value |
| How long or cycle | One released production lot at the final manufacturing plant gate after the declared preservation and filling steps; no use duration is assigned |
| reference_flow_link | Final product output row `pineapple_juice_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Pineapple juice `3d2b95ad-8673-4718-a728-e1e7d17b4271` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production route: direct or from concentrate; pineapple species or commercial variety when known; juice form: clear or cloudy; measured degrees Brix and measurement temperature; preservation technology; packaging format and net fill; storage-temperature requirement; production geography; production period; allocation treatment for pineapple residues and other co-products |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | final pineapple juice | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure conforming net juice after final treatment and filling. Exclude all packaging mass from the 1 kg reference amount and inventory packaging separately. |
| `brix_measurement` | direct and reconstituted juice | Soluble solids | degrees Brix | Record the instrument, calibration record, sample temperature, temperature correction, and lot result. Report values on a 20 degrees C basis when comparing with the 12.8 degrees Brix reconstitution reference. |
| `reconstitution_mass` | from-concentrate route | Mass | kg | Record concentrate, incorporated water, restored pulp or aroma, permitted ingredients, samples, spills, and product output by lot. Do not infer incorporated water only from a generic recipe when metered or batch records exist. |
| `water_by_use` | washing, incorporated water, cooling, and cleaning | Mass or volume | kg or m3 | Keep incorporated water separate from process water and wastewater. Convert volume to mass only with a declared density and measurement temperature. |
| `energy_by_carrier` | electricity, steam, heat, refrigeration, and fuel | Energy plus original purchase unit | kWh, MJ, and supplier unit | Preserve metered or invoiced carrier quantities and the conversion factor used. Do not combine electricity and thermal energy into one unqualified amount. |
| `packaging_by_material` | primary, secondary, and tertiary packaging | Mass | kg | Record each packaging material and component separately per net kg of juice; identify reusable packaging and the reuse assumption. |
| `transport_service` | incoming pineapple, concentrate, packaging, chemicals, and wastes | Transport service | tkm | Calculate transported mass in tonnes multiplied by one-way loaded distance in kilometres; declare mode, capacity or load factor, and empty-return treatment. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sound mature pineapples received at the processing plant for the direct route, or pineapple juice concentrate and potable reconstitution water received for the from-concentrate route |
| starting_condition_role | Foreground collection gate; upstream burdens remain connected through supplier-specific or representative datasets |
| product_classification_scope | Single-fruit pineapple juice independent of external classification-tree ownership; CPC 3.0 code 21433 is mapping context only |
| recursive_input_rule | Pineapple juice used as an input to another pineapple-juice dataset is represented by a separately identified upstream dataset and is not recursively expanded inside the current foreground package |
| upstream_dataset_requirement | Link pineapple cultivation or concentrate manufacture, incoming transport, electricity and fuels, water supply, packaging production, treatment chemicals, and off-site treatment; disclose geography, technology, time period, and any proxy |
| disclosure | Declare route, starting material condition, excluded downstream stages, packaging boundary, internal recycling, waste or co-product status, allocation method, data gaps, and every provisional `reasoned_estimate` used for screening |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | all datasets | Include upstream production and transport of the route-defining pineapple or concentrate and all material foreground processing through conforming packaged product at the final manufacturing gate. | `iso-14044-2006`; `del-rio-2020-pineapple-lca`; `environdec-pcr-2019-10` |
| `boundary_route_specific` | direct and from-concentrate routes | Do not combine direct extraction and from-concentrate reconstitution into an undeclared generic recipe. Report route shares when a production mix is modelled. | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `boundary_foreground_operations` | processing plant | Include receipt and sorting, washing and preparation, extraction and finishing when applicable, reconstitution or blending when applicable, preservation, filling, packaging, cleaning, wastewater, rejects, residues, and on-site utilities. | `fao-fruit-processing-1995`; `fao-fruit-juice-processing-2001`; `walker-et-al-2018` |
| `boundary_downstream_exclusion` | default plant-gate dataset | Exclude distribution, retail, consumer storage or use, and packaging end-of-life unless the study explicitly adds and labels those scenarios. | `iso-14044-2006`; `environdec-pcr-2019-10` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fruit_or_concentrate_receipt` | Fruit or concentrate receipt and preparation | `required` | Always; record the route-specific starting material and reject handling | Foreground receipt, sorting, washing, and preparation | per mass accepted for processing and per 1 kg final juice |
| `juice_extraction` | Pineapple preparation, juice extraction, and finishing | `conditional` | Required for the direct route or whenever fruit solids are mechanically processed on site | Foreground extraction and solid-liquid separation | per mass of raw juice leaving finishing |
| `reconstitution_and_blending` | Reconstitution, blending, and standardization | `conditional` | Required for from-concentrate juice and whenever permitted ingredients or same-fruit components are blended on site | Foreground formulation and batch standardization | per mass of standardized juice |
| `preservation_and_packaging` | Product preservation, filling, cooling, and packaging | `required` | Always; technology-specific steps may be zero only with documented evidence | Foreground final processing and reference-product production | 1 kg net conforming pineapple juice |
| `cleaning_and_residuals` | Cleaning, wastewater, residues, rejects, and on-site treatment | `required` | Always; record zero only when verified for the reporting period | Foreground support and residual-flow management | allocated per process or per 1 kg final juice |

### Process: Fruit or concentrate receipt and preparation (`fruit_or_concentrate_receipt`)

#### Inputs

##### Product flows

###### Route-defining pineapple material (`route_starting_material`)

Record fresh pineapple accepted for the direct route or pineapple juice concentrate accepted for the from-concentrate route. Keep the two route identities and quantities separate.

- Selected flow: Fresh pineapple or pineapple juice concentrate; Tiangong UUID unresolved for this non-reference row
- Flow property / unit: Mass / kg
- Amount rule: weigh accepted starting material by lot and subtract documented receiving rejects from gross receipt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxs-247-2005`; `eu-directive-2012-12`; `fao-fruit-processing-1995`
- Range: Provisional starting-material screening estimate, not a default recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 4.0
  - Unit: kg
  - Basis: per 1 kg final pineapple juice; lower values represent concentrated input and upper values low-yield fruit processing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incoming transport service (`incoming_transport`)

Record transport from the supplier dispatch point to the processing plant for starting material and other major supplies.

- Selected flow: Freight transport service; Tiangong UUID unresolved
- Flow property / unit: Transport service / tkm
- Amount rule: transported mass in tonnes multiplied by route distance in kilometres
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Sources: `del-rio-2020-pineapple-lca`
- Range: Provisional transport screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: tkm
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Receipt and washing water (`receipt_washing_water`)

Record potable or otherwise specification-compliant water supplied for fruit washing and receiving-area operations; this row is zero for a concentrate route without fruit washing.

- Selected flow: Process water; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: metered withdrawal minus separately metered recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `fao-fruit-processing-1995`; `walker-et-al-2018`
- Range: Provisional washing-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted prepared material (`accepted_material`)

Record the mass transferred to extraction or reconstitution after receiving losses and rejects.

- Selected flow: Accepted pineapple material; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `fao-fruit-processing-1995`

##### Waste flows

###### Receiving rejects (`receiving_rejects`)

Record damaged, immature, contaminated, or otherwise nonconforming material by its actual fate.

- Selected flow: Rejected pineapple material; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed rejects by destination and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_records`
- Sources: `fao-fruit-processing-1995`
- Range: Provisional reject-fraction screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per kg gross starting material received
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Pineapple preparation, juice extraction, and finishing (`juice_extraction`)

#### Inputs

##### Product flows

###### Accepted pineapple for extraction (`pineapple_to_extraction`)

Transfer the accepted direct-route fruit mass without adding another upstream burden.

- Selected flow: Accepted pineapple material; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured transfer from `accepted_material`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per extraction-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `fao-fruit-processing-1995`; `fao-fruit-juice-processing-2001`

###### Extraction electricity (`extraction_electricity`)

Record electricity for conveyors, peeling or preparation, crushers, extractors, finishers, pumps, and associated controls.

- Selected flow: Electricity; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated facility meter data for the extraction process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `walker-et-al-2018`; `del-rio-2020-pineapple-lca`
- Range: Provisional extraction-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Raw finished juice (`raw_finished_juice`)

Record juice leaving mechanical extraction and finishing before final formulation or preservation.

- Selected flow: Raw pineapple juice intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured tank transfer or mass-balance calculation from calibrated vessel levels and density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per extraction-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `fao-fruit-processing-1995`; `codex-cxs-247-2005`

##### Waste flows

###### Pineapple crowns, peels, cores, pulp, and press residue (`pineapple_residues`)

Measure each separable residue stream and declare whether it is waste, a co-product, animal-feed material, an energy feedstock, or internally recycled material.

- Selected flow: Pineapple processing residue; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed wet mass by residue type and destination; record dry matter when used for allocation or sale
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_records`
- Sources: `fao-fruit-processing-1995`; `iso-14044-2006`
- Range: Provisional residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg wet mass
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Reconstitution, blending, and standardization (`reconstitution_and_blending`)

#### Inputs

##### Product flows

###### Route-specific juice base (`juice_base_input`)

Record raw finished juice for the direct route or pineapple juice concentrate for the from-concentrate route; never merge the two without route-share metadata.

- Selected flow: Raw pineapple juice intermediate or pineapple juice concentrate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured batch addition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_formulation`
- Sources: `codex-cxs-247-2005`; `eu-directive-2012-12`

###### Incorporated reconstitution water (`reconstitution_water`)

Record potable water incorporated into from-concentrate juice. Set this row to zero for directly expressed juice unless water addition is legally permitted and does not change product identity.

- Selected flow: Potable water; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-weighed water actually incorporated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_formulation`
- Sources: `codex-cxs-247-2005`; `eu-directive-2012-12`
- Range: Provisional reconstitution-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.95
  - Unit: kg
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Permitted same-fruit components and formulation aids (`permitted_formulation_inputs`)

Record restored pineapple aroma, pulp or cells and every permitted ingredient or processing aid separately; do not use this row to conceal sweetener or water addition that changes the product category.

- Selected flow: Route-specific formulation input; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: batch-weighed amount by named material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_formulation`
- Sources: `codex-cxs-247-2005`; `eu-directive-2012-12`

#### Outputs

##### Product flows

###### Standardized pineapple juice (`standardized_juice`)

Record the released batch transferred to preservation after formulation and Brix verification.

- Selected flow: Standardized pineapple juice intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured batch output after samples, spills, and hold-up losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per blending-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_formulation`
- Sources: `codex-cxs-247-2005`; `eu-directive-2012-12`

### Process: Product preservation, filling, cooling, and packaging (`preservation_and_packaging`)

#### Inputs

##### Product flows

###### Electricity for preservation and packaging (`preservation_electricity`)

Record electricity for pumps, heat exchangers, chillers, aseptic equipment, fillers, conveyors, and packaging equipment.

- Selected flow: Electricity; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation of facility meter data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `walker-et-al-2018`; `fao-fruit-juice-processing-2001`
- Range: Provisional preservation-and-packaging electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy and fuel (`preservation_thermal_energy`)

Record steam, hot water, direct fuel, or other thermal supply for pasteurization, sterilization, hot filling, and container preparation.

- Selected flow: Route-specific thermal energy carrier; Tiangong UUID unresolved
- Flow property / unit: Energy / MJ, with original carrier unit retained
- Amount rule: metered thermal energy or fuel quantity converted with a declared factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fruit-juice-processing-2001`; `walker-et-al-2018`
- Range: Provisional thermal-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: MJ
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary container, closure, label, secondary carton or film, pallet share, and other packaging components separately by material.

- Selected flow: Packaging material by component; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging less documented unused returns, divided by conforming net juice output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `environdec-pcr-2019-10`; `del-rio-2020-pineapple-lca`
- Range: Provisional packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg net pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conforming pineapple juice at plant gate (`pineapple_juice_output`)

This is the reference product after declared preservation and filling. Packaging is inventoried separately and excluded from the reference mass.

- Selected flow: Pineapple juice `3d2b95ad-8673-4718-a728-e1e7d17b4271`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg conforming net juice after normalization from collected production records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_product_release`
- Sources: `codex-cxs-247-2005`; `eu-directive-2012-12`; `iso-14044-2006`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: exactly one PCR reference flow after normalization
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Packaging rejects and product losses (`packaging_and_product_losses`)

Record damaged containers, start-up and changeover losses, off-specification filled product, spills, and recovered product by actual fate.

- Selected flow: Packaging waste and off-specification juice; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced quantity by material and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_records`
- Sources: `walker-et-al-2018`
- Range: Provisional final-process loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cleaning, wastewater, residues, rejects, and on-site treatment (`cleaning_and_residuals`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`cleaning_water`)

Record clean-in-place, clean-out-of-place, floor, container, and equipment-rinse water net of measured internal reuse.

- Selected flow: Process water; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: metered water by cleaning circuit or allocated from facility records using documented cleaning schedules
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `walker-et-al-2018`; `fao-fruit-juice-processing-2001`
- Range: Provisional cleaning-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation chemicals (`cleaning_chemicals`)

Record each detergent, disinfectant, acid, alkali, or sanitation agent by active formulation and concentration.

- Selected flow: Cleaning chemical by formulation; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: issued quantity corrected for inventory change and unused returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `walker-et-al-2018`
- Range: Provisional cleaning-chemical screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg formulated product
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

###### Process wastewater to treatment (`process_wastewater`)

Record wastewater from washing, extraction, formulation, cooling, cleaning, and spills by treatment destination; do not equate withdrawal with discharge when water is incorporated or evaporated.

- Selected flow: Wastewater to treatment; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or water balance, with measured concentration or load data retained separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `walker-et-al-2018`; `del-rio-2020-pineapple-lca`
- Range: Provisional wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Treatment sludge and separated solids (`treatment_residuals`)

Record sludge, screenings, and separated solids by wet mass, dry matter when available, and final treatment route.

- Selected flow: Wastewater-treatment residual; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed removal or calculated from measured volume and solids concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final pineapple juice
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `del-rio-2020-pineapple-lca`
- Range: Provisional treatment-residual screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg wet mass
  - Basis: per 1 kg final pineapple juice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared processes and utilities | First avoid allocation through process subdivision, separate metering, batch records, and route-specific mass and energy balances. | `iso-14044-2006`; `walker-et-al-2018` |
| `allocation_internal_recycling` | internally reused juice, water, or residues | Keep internal recycling within the foreground system. Record any additional treatment, pumping, and losses, but do not create a second saleable output or avoided burden. | `iso-14044-2006`; `walker-et-al-2018` |
| `allocation_residue_status` | crowns, peels, cores, pulp, rejects, and sludge | Declare each stream as waste, co-product, or internally recycled material using its actual legal and commercial status and treatment route. Do not assign co-product credit to an unmarketed waste stream. | `iso-14044-2006`; `del-rio-2020-pineapple-lca` |
| `allocation_physical_then_economic` | unavoidable multi-output processes | When subdivision cannot resolve shared burdens, use a documented physical causal relation where one exists. If no defensible physical relation exists, use a documented economic relation based on a representative reporting-period average and report a sensitivity case. | `iso-14044-2006` |
| `allocation_route_mix` | production-mix datasets | Calculate direct-route and from-concentrate-route inventories separately, then combine them using measured conforming output shares for the declared period. | `codex-cxs-247-2005`; `eu-directive-2012-12` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `fruit_or_concentrate_receipt`; `juice_extraction` | starting material, accepted material, intermediates, and residues | weighbridge, calibrated scale, tank, and batch records | lot id; route; material name; gross mass; reject mass; transfer mass; density and temperature if volume-derived | direct weighing or calibrated tank measurement | kg | each lot or batch | full declared production period | every included site and route | sum by material and route; reconcile opening and closing inventories | calibration records; batch tickets; inventory reconciliation |
| `cp_transport_records` | `fruit_or_concentrate_receipt` | incoming transport | supplier dispatch and freight records | material; shipped mass; origin; destination; distance; mode; vehicle; load factor; empty return | document review and route calculation | kg, km, tkm | each shipment or representative route with coverage stated | full declared production period | all material incoming routes | mass-weighted tkm by material and mode | invoices; delivery notes; route evidence |
| `cp_water_records` | `fruit_or_concentrate_receipt`; `cleaning_and_residuals` | washing, cleaning, cooling, and incorporated water | meters, tank records, and utility bills | meter id; opening and closing readings; reuse; purpose; downtime; production output | calibrated meter preferred; documented balance otherwise | kg or m3 | continuous or each shift; monthly reconciliation | full declared production period | each site and major water circuit | withdrawal minus measured reuse, normalized to conforming output | meter calibration; bill reconciliation; water balance |
| `cp_energy_records` | `juice_extraction`; `preservation_and_packaging` | electricity, fuel, steam, heat, and refrigeration | submeters, main meters, fuel invoices, and equipment logs | carrier; quantity; unit; meter; process; operating time; conversion factor; losses | submetering preferred; documented allocation if shared | kWh, MJ, and supplier unit | continuous or each shift; monthly reconciliation | full declared production period | each site and route | sum by carrier and process; normalize to conforming output | meter calibration; invoices; conversion-factor source |
| `cp_batch_formulation` | `reconstitution_and_blending` | juice base, water, permitted inputs, samples, and output | formulation sheet and batch tank records | batch id; route; ingredient identity; input mass; Brix; temperature; output mass; samples; spills; hold-up | batch weighing and quality-control measurement | kg and degrees Brix | every batch | full declared production period | all formulation tanks and routes | reconcile batch inputs, output, losses, and inventory | signed batch sheet; refractometer calibration; release result |
| `cp_packaging_records` | `preservation_and_packaging` | packaging components | issue, purchase, return, and production records | component; material; unit mass; issued count; returned count; rejected count; net product mass | component weighing plus inventory reconciliation | kg and count | each packaging run; monthly reconciliation | full declared production period | every packaging format and site | net component mass divided by conforming net juice | supplier specification; scale calibration; stock reconciliation |
| `cp_final_product_release` | `preservation_and_packaging` | conforming final juice | filler, checkweigher, tank, and release records | lot; package count; net fill; bulk mass; nonconforming mass; route; Brix; preservation; storage requirement | calibrated mass measurement and quality release | kg | each lot | full declared production period | every included line, route, and format | sum only conforming net juice; exclude packaging | checkweigher and scale calibration; signed release record |
| `cp_cleaning_records` | `cleaning_and_residuals` | cleaning chemicals and cycles | chemical issue, concentration, and cleaning schedule records | chemical; formulation; concentration; issued quantity; return; cycle; equipment; date | inventory difference and dosing records | kg | each cleaning cycle; monthly reconciliation | full declared production period | all included cleaning circuits | sum net chemical use by process; normalize to conforming output | stock reconciliation; dosing calibration; sanitation log |
| `cp_wastewater_records` | `cleaning_and_residuals` | wastewater and treatment residuals | discharge meter, laboratory analysis, hauler, and treatment records | volume or mass; source; destination; COD or other measured load; sludge mass; dry matter; treatment | direct meter and laboratory measurement preferred; documented water balance otherwise | kg, m3, and concentration unit | continuous or each discharge; periodic analysis | full declared production period | each outfall and treatment route | sum by destination; retain concentration and load separately | meter calibration; laboratory report; treatment or hauler receipt |
| `cp_residual_records` | all foreground processes | rejects, residues, spills, and packaging waste | scales, bins, stock movement, sale, and waste transfer records | stream; source process; wet mass; dry matter; destination; legal status; revenue if co-product | direct weighing and destination documentation | kg | each removal or shift; monthly reconciliation | full declared production period | all included sites and residual routes | sum by stream and destination; prevent double counting | scale calibration; transfer note; sale or treatment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every foreground inventory amount | normalized amount = reporting-period amount / reporting-period conforming net pineapple juice mass | collected amount; conforming net juice mass | amount per 1 kg reference flow | `iso-14044-2006` |
| `calc_transport_tkm` | incoming and outgoing transport | tkm = transported mass in tonnes x loaded one-way distance in kilometres, plus separately modelled empty return when applicable | shipment mass; distance; mode; return assumption | tkm per 1 kg reference flow | `del-rio-2020-pineapple-lca` |
| `calc_route_mix` | production-mix dataset | mixed inventory = sum of route-specific normalized inventories x measured route share of conforming output | direct-route output; from-concentrate output; route inventories | declared production-mix inventory | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `calc_batch_mass_balance` | extraction and formulation | input mass + opening inventory = output mass + closing inventory + measured residues + rejects + samples + spills + other losses | batch and inventory records | closure ratio and unexplained loss | `walker-et-al-2018` |
| `calc_water_balance` | plant water | withdrawal + water in inputs = incorporated water + wastewater + evaporation + water in products and residues + inventory change; report unresolved difference | water meters; formulation; wastewater; evaporation estimate; output mass | water balance per period and normalized water rows | `walker-et-al-2018` |
| `calc_shared_utility_allocation` | shared energy and water | allocate only after subdivision and metering have been attempted; use a measured causal driver such as operating time, throughput, or thermal duty and disclose the driver | facility total; submeter data; operating driver; route output | process- and route-specific utility amount | `iso-14044-2006`; `walker-et-al-2018` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | every released lot | Retain product name, pineapple identity, direct or from-concentrate route, juice form, preservation technology, packaging format, measured Brix, and storage requirement. | release specification; batch record; label or product description |
| `dq_temporal` | foreground inventory | Cover a representative continuous production period or complete seasonal campaign and disclose shutdowns, start-ups, abnormal batches, and any extrapolation. | dated meter, production, purchase, and waste records |
| `dq_geography` | upstream and foreground data | Identify plant location, pineapple or concentrate origin, transport routes, electricity market, water source, and treatment destinations. | supplier record; route evidence; utility contract; treatment receipt |
| `dq_technology` | process and utilities | Identify extraction, finishing, preservation, filling, cooling, refrigeration, water-reuse, and wastewater-treatment technologies that materially affect flows. | equipment list; process diagram; operating records |
| `dq_completeness` | required process map | Provide records for every required process and every applicable conditional process; explain verified zeros and all gaps. | process-to-record coverage matrix |
| `dq_mass_balance` | fruit, concentrate, juice, residues, and packaging | Reconcile inputs, outputs, inventories, samples, spills, rejects, and residues. Treat any screening tolerance as provisional until reviewed against site measurement uncertainty. | signed mass-balance worksheet; calibration evidence |
| `dq_source_traceability` | secondary and proxy data | Record dataset identity, geography, technology, time, version, mapping rationale, and substitution limits. | dataset metadata and source register |
| `dq_reasoned_estimates` | all provisional ranges | Use `reasoned_estimate` ranges only for screening. Do not silently replace foreground records, and list each estimate remaining in a shared or published dataset. | validation report and unresolved-evidence register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require the exact pineapple-juice product UUID, Mass flow-property UUID, Units-of-mass UUID, 1 kg net reference amount, and all required qualifiers. | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `validate_route_declaration` | all datasets | Require exactly one declared route or a measured route mix with separately calculated direct and from-concentrate inventories. | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `validate_brix` | released product | Require lot-level Brix result, measurement temperature or correction, instrument calibration, and comparison with the applicable product specification. For reconstituted juice use 12.8 degrees Brix at 20 degrees C unless a documented applicable authenticity provision applies. | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `validate_process_coverage` | process map | Require all required processes and every applicable conditional process; a zero flow needs a record-backed explanation. | `fao-fruit-processing-1995`; `walker-et-al-2018` |
| `validate_mass_and_water_balance` | foreground package | Require route-specific material and water balances with all inventory changes, residues, samples, spills, incorporated water, wastewater, and unexplained differences disclosed. | `walker-et-al-2018` |
| `validate_energy_separation` | utilities | Require electricity and thermal carriers to remain separate, with original units, conversion factors, meter coverage, and allocation drivers disclosed. | `walker-et-al-2018` |
| `validate_packaging` | packaged product | Require packaging by component and material while excluding packaging from the 1 kg net reference mass. | `environdec-pcr-2019-10`; `del-rio-2020-pineapple-lca` |
| `validate_residual_fate` | rejects, pineapple residues, wastewater, and sludge | Require mass, destination, treatment, internal recycling, and waste or co-product status; prohibit simultaneous waste treatment and co-product credit for the same quantity. | `iso-14044-2006`; `del-rio-2020-pineapple-lca` |
| `validate_allocation` | shared or multi-output processes | Require evidence that subdivision or direct measurement was attempted, the chosen relation and reporting period, route-share basis, and a sensitivity case when economic allocation is used. | `iso-14044-2006`; `walker-et-al-2018` |
| `validate_evidence_status` | quantitative guidance | Reject an unlabeled inferred range. Preserve `reasoned_estimate` as provisional screening guidance and list unresolved identity or range-evidence gaps. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-system data package for pineapple juice production at the final manufacturing plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and data-quality review |
| allowed_use | Route-specific or measured production-mix cradle-to-gate LCI; supply-chain hotspot analysis; verified environmental declarations when the applicable programme rules and downstream stages are also satisfied |
| excluded_use | Pineapple nectar, mixed juice, fruit drinks, fermented beverages, concentrate as the sold product, or a consumer/distribution claim without explicit downstream modelling |
| required_metadata | Reference UUIDs; route and route share; variety or source identity; Brix and measurement basis; preservation and packaging technology; net fill; storage requirement; geography; period; upstream dataset identities; allocation; waste and co-product fates |
| required_quality_disclosure | Meter and record coverage; calibration; mass and water balance; shared-utility allocation; proxy datasets; data gaps; verified zeros; every remaining `reasoned_estimate`; review status |
| update_trigger | Material change in fruit or concentrate sourcing, route share, formulation, extraction yield, preservation or filling technology, energy or water system, packaging, waste or co-product fate, allocation basis, product specification, or governing source |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-247-2005` | `standard` | FAO and WHO, Codex Alimentarius Commission. General Standard for Fruit Juices and Nectars, CXS 247-2005, adopted 2005 and amended through 2025. https://openknowledge.fao.org/handle/20.500.14283/cd9081en (retrieved 2026-08-11) | Pineapple-juice identity; direct and reconstituted routes; permitted processing and components; authenticity and quality verification; 12.8 degrees Brix pineapple reference |
| `eu-directive-2012-12` | `standard` | Directive 2012/12/EU amending Directive 2001/112/EC relating to fruit juices and certain similar products. CELEX 32012L0012. https://eur-lex.europa.eu/eli/dir/2012/12/oj/eng (retrieved 2026-08-11) | Legal juice and from-concentrate definitions; permitted ingredients and treatments; direct-juice Brix rule; 12.8 degrees Brix for reconstituted pineapple juice |
| `fao-fruit-processing-1995` | `handbook` | FAO. Fruit and Vegetable Processing, Appendix I: Fruit and vegetable processing flow-sheets, Agricultural Services Bulletin 119, 1995. https://www.fao.org/4/V5030E/V5030E0y.htm (retrieved 2026-08-11) | Pineapple-juice process decomposition; pineapple starting materials; shredding, extraction, finishing, blending, pasteurization, filling, cooling, and packaging |
| `fao-fruit-juice-processing-2001` | `handbook` | Bates, R.P., Morris, J.R., and Crandall, P.G. Principles and Practices of Small- and Medium-scale Fruit Juice Processing. FAO Agricultural Services Bulletin 146, 2001. https://www.fao.org/4/y2515e/y2515e00.htm (retrieved 2026-08-11) | Fruit selection and washing; extraction and finishing; pasteurization; filling; cooling; packaging; cleaning and process design |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, with Amendments 1:2017 and 2:2020; confirmed current in 2022. https://www.iso.org/standard/38498.html (retrieved 2026-08-11) | Goal and scope, inventory, interpretation, reporting, review, allocation hierarchy, and source-traceability framework |
| `walker-et-al-2018` | `literature` | Walker, C., Beretta, C., Sanjuan, N., and Hellweg, S. Calculating the energy and water use in food processing and assessing the resulting impacts. International Journal of Life Cycle Assessment 23 (2018), 824-839. DOI: 10.1007/s11367-017-1327-6 | Process-specific energy and water measurement; food-loss and operating data; cleaning records; facility reconciliation; documented allocation of shared facility data |
| `del-rio-2020-pineapple-lca` | `literature` | Del Rio, D.D.F. et al. Environmental Impacts Associated to Different Stages Spanning from Harvesting to Industrialization of Pineapple through Life Cycle Assessment. Applied Sciences 10 (2020), 7007. DOI: 10.3390/app10197007 | Cradle-to-gate pineapple boundary; fruit receipt, washing, preparation and packaging; electricity, water, fuel, transport, residual, effluent, and supplier/foreground-data collection needs |
| `environdec-pcr-2019-10` | `official_guidance` | International EPD System. PCR 2019:10, Prepared and preserved vegetable and fruit products, including juice, version 2.0, valid until 2027-03-29. https://www.environdec.com/pcr-library/pcr2019-10 (retrieved 2026-08-11) | Category applicability to CPC 214 products including juice; packaging and downstream environmental-declaration context; no inaccessible document text used as a quantitative source |
