---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.raisins
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Raisins

## 1. Scope and Applicability

This PCR covers food-grade raisins made by drying sound grapes of *Vitis vinifera* L. for direct consumption, catering, or repacking. It covers seedless and seed-bearing raisins, seeded or unseeded forms, and cluster raisins. The foreground boundary begins with received grapes at the raisin-producing facility and ends with declared net mass of packaged raisins at the packaging-facility gate.

The data package shall preserve grape identity and declare the drying technique, any dipping, sulphuring, bleaching, seed removal, washing, moisture adjustment, pasteurization, coating, or other conditioning actually used. Natural, treated, preserved, coated, seedless, seeded, cluster, and similar claims shall be used only when supported by the batch records and applicable food requirements. Dried currants, other dried fruit species, fried fruit, confectionery whose identity is no longer raisins, grape cultivation, distribution, retail, use, and packaging end of life are outside this foreground scope. Upstream and downstream datasets remain necessary when the study goal requires a full life cycle.

Batch linkage shall maintain the same declared grape lot or documented blend identity through all four foreground processes and shall not replace that identity with a generic dried-fruit flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.raisins |
| classification_refs | CPC 3.0: 21411 Raisins |
| covered_products | Marketable food-grade raisins from sound dried grapes of *Vitis vinifera* L., excluding currant types; seedless or seed-bearing; seeded, unseeded, or cluster form; untreated, treated, preserved, or coated when declared |
| excluded_products | Dried currants; dried fruit from other species; fried fruit; raisin-containing confectionery or mixtures not sold as raisins; grapes intended only for wine, juice, or fresh consumption |
| representative_product | One kilogram net mass of food-grade raisins, with the actual grape identity, drying route, moisture class, conditioning, treatment, style, and package declared |
| production_route | Receipt and pre-treatment of sound grapes; one declared primary drying technique or a documented sequential hybrid; moisture conditioning, cleaning and grading; net-mass packaging |
| market_state | Packaged bulk or retail raisins at the packaging-facility gate, fit for the declared food use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Food-grade raisins that preserve dried-grape identity and provide edible dried fruit |
| How much | 1 kg net edible product mass, excluding packaging |
| How well | Sound dried *Vitis vinifera* L. grapes, excluding currant types, meeting the declared moisture, style, treatment, coating, cleanliness, and food-grade specifications |
| How long or cycle | One released production batch at the packaging-facility gate; storage duration is not part of the functional unit and shall be declared separately when modelled |
| reference_flow_link | 1 kg of the reference product flow realizes the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Raisins `e2741aa4-2dfe-487f-a0fe-fd5d6dd3302d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | grape species and variety or varietal group; seed type and form; drying technique; untreated, treated, or preserved status; dipping, sulphuring, bleaching, pasteurization, coating, and seed-removal status; release moisture content and test method; conditioning method; net-mass basis; bulk or retail package format and packaging materials; food-grade specification; production geography and period |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use released net edible raisin mass after conditioning and before or at packaging; exclude all packaging and tare. |
| `batch_mass_consistency` | grapes, intermediate dried grapes, raisins, residues, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured batch masses and normalize only after closing the process-level mass balance; do not treat moisture loss as missing mass. |
| `release_moisture` | packaged raisins | Mass fraction | % by mass | Record the measured release moisture and method. For Codex CXS 360-2020 conformity, the maximum is 31% for Malaga Muscatel, 19% for Monukka and seed-bearing varieties, and 18% for all other styles or types; apply the limit matching the declared product. |
| `energy_carrier_separation` | drying, finishing, and packaging energy | Energy | kWh or MJ | Keep purchased electricity, each fuel, and recovered or on-site energy separate in their native units; state conversions and do not count solar drying energy as purchased heat. |
| `packaging_mass_separation` | primary, secondary, and transport packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging material separately and report its mass per kilogram net raisins; package gross mass shall not replace net product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sound grapes received at the raisin-producing facility, with supplier, grape identity, origin, received mass, and incoming moisture or equivalent condition declared |
| starting_condition_role | Upstream product input to the foreground raisin-production system |
| product_classification_scope | Raisins as a semantic product category, with CPC 3.0 code 21411 retained only as an external classification reference |
| recursive_input_rule | Purchased raisins or partly dried grapes used as an input shall remain a separate upstream product exchange with origin and processing state declared; do not relabel them as fresh grapes or recreate their upstream burdens inside the receiving process |
| upstream_dataset_requirement | Link representative grape-cultivation and other purchased-input datasets matching geography, technology, period, and declared treatment; disclose proxies and data gaps |
| disclosure | Declare grape identity, drying route and any sequential hybrid, treatment and conditioning steps, release moisture, yield, allocation, packaging configuration, temporal and geographic coverage, exclusions, and upstream dataset choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_chain` | foreground raisin production | Include receipt and actual pre-treatment, the declared drying route, finishing and moisture conditioning, and packaging, together with all material, water, energy, waste, and direct elementary flows that cross those process boundaries. | `codex-cxs-360-2020`, `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | drying techniques | Model the technique actually used. Sun or solar drying and heated dehydration are alternatives unless batch evidence shows a sequential hybrid; a hybrid shall state sequence and meter each energy input without duplicate drying burden. | `codex-cxs-360-2020` |
| `boundary_upstream_grapes` | received grapes and partly processed grape inputs | Keep cultivation and any supplier-side drying or treatment in linked upstream datasets, while preserving grape identity and received processing state at the foreground boundary. | `eu-pef-2021-2279` |
| `boundary_downstream` | distribution, storage, use, and end of life | Exclude these stages from the packaging-gate foreground dataset, identify the exclusion, and add representative downstream stages when a full life-cycle result is produced. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

All amounts are collected for the same production batch and normalized to 1 kg net packaged raisins. Every range marked `reasoned_estimate` is a deliberately broad, temporary screening guardrail applicable only when representative foreground or reviewed external evidence is unavailable. It is not a default inventory value. Replace it when representative batch measurements, audited supplier records, or reviewed transferable evidence become available; values outside it are permitted when documented and verified.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `grape_receiving_pretreatment` | Grape receipt and route-specific pre-treatment | `required` | Always; include only the washing, dipping, sulphuring, bleaching, seed-related, or other preparation operations actually performed | foreground preparation | kg prepared grapes transferred to drying |
| `grape_drying` | Declared grape drying route | `required` | Exactly one primary technique, or one documented sequential hybrid, per represented batch | foreground dehydration | kg dried grapes leaving the drying step |
| `raisin_finishing` | Moisture conditioning, cleaning, sorting, and optional coating | `required` | Always; optional unit operations and inputs only when performed | foreground finishing | kg conditioned raisins released to packaging |
| `raisin_packaging` | Net-mass filling and packaging | `required` | Always for the declared bulk or retail market state | foreground packaging | 1 kg net packaged raisins |

### Process: Grape receipt and route-specific pre-treatment (`grape_receiving_pretreatment`)

#### Inputs

##### Product flows

###### Received sound grapes (`received_grapes`)

Record grapes by supplier lot, *Vitis vinifera* identity, origin, received mass, and incoming condition. Do not substitute generic fruit or already dried raisins for fresh grapes without declaring the changed starting condition.

- Selected flow: Sound grapes, declared variety or varietal group
- Flow property / unit: Mass / kg
- Amount rule: measured received mass assigned to the represented batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxs-360-2020`
- Range: Temporary fresh-grape input screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 10
  - Unit: kg/kg net packaged raisins
  - Basis: received fresh-grape mass per 1 kg net packaged raisins; temporary until representative batch yield evidence is available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pre-treatment water (`pretreatment_water`)

Record metered or reconciled water that contacts grapes during washing, dipping, rinsing, or solution preparation. Report zero only when no such water crosses the foreground boundary.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled water supplied to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Range: Temporary pre-treatment-water screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net packaged raisins
  - Basis: water entering pre-treatment per 1 kg net packaged raisins; temporary until representative metered batches are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route-specific food-grade pre-treatment materials (`pretreatment_materials`)

Create a separate exchange for every alkaline dipping material, oil, sulphuring or bleaching material, or other processing aid actually used. Preserve food-grade specification and concentration; do not add mutually exclusive route inputs to batches where they were not used.

- Selected flow: Declared food-grade pre-treatment material, one exchange per material
- Flow property / unit: Mass / kg
- Amount rule: measured material mass in supplied form; record zero or omit only with documented non-use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxs-360-2020`
- Range: Temporary pre-treatment-material screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg supplied material/kg net packaged raisins
  - Basis: total supplied route-specific pre-treatment materials per 1 kg net packaged raisins; temporary until representative formulation records are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared grapes transferred to drying (`prepared_grapes`)

Record the actual mass transferred after separation of removed stems, rejected fruit, and drained treatment liquid.

- Selected flow: Prepared grapes for drying
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Range: Temporary prepared-grape transfer screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.5
  - Upper: 10
  - Unit: kg/kg net packaged raisins
  - Basis: prepared grapes transferred per 1 kg net packaged raisins; temporary until representative batch balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-treatment residues and wastewater (`pretreatment_residues`)

Record wastewater, removed stems, rejected grapes, and spent treatment solution as separate waste exchanges in the produced dataset, retaining treatment destination and hazardous or food-process classification where applicable.

- Selected flow: Declared pre-treatment residue or wastewater, one exchange per waste type
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity sent to each treatment or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Range: Temporary pre-treatment-residue screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6
  - Unit: kg/kg net packaged raisins
  - Basis: combined screening total before separation into individual waste exchanges; temporary until representative batch balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Declared grape drying route (`grape_drying`)

#### Inputs

##### Product flows

###### Prepared grapes entering drying (`drying_grape_input`)

Use the measured transfer from `prepared_grapes`; batch and grape identity shall remain unchanged.

- Selected flow: Prepared grapes for drying
- Flow property / unit: Mass / kg
- Amount rule: linked measured output of `grape_receiving_pretreatment`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch`
- Range: Temporary drying-input screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.5
  - Upper: 10
  - Unit: kg/kg net packaged raisins
  - Basis: prepared grapes entering the declared drying route per 1 kg net packaged raisins; temporary until representative batch balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying energy carriers (`drying_energy`)

Record purchased electricity and each fuel separately. For sun or solar drying, record only measured auxiliary energy. For heated dehydration, record the actual heat source and efficiency basis. A sequential hybrid shall meter each stage and state the sequence.

- Selected flow: Declared electricity or fuel, one exchange per energy carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered, invoiced, or equipment-log energy assigned to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Temporary purchased drying-energy screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ equivalent/kg net packaged raisins
  - Basis: purchased electricity and fuels converted without counting ambient solar energy; temporary until route-representative metered batches are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Dried grapes leaving the declared route (`dried_grapes`)

Record dried-grape mass and moisture at dryer exit before subsequent moisture conditioning. Preserve the declared drying technique and treatment history.

- Selected flow: Dried grapes for raisin finishing
- Flow property / unit: Mass / kg
- Amount rule: measured dryer-exit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `codex-cxs-360-2020`
- Range: Temporary dryer-output screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg net packaged raisins
  - Basis: dried grapes before finishing per 1 kg net packaged raisins; temporary until representative batch balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed to air during drying (`drying_water_to_air`)

Calculate water removed from the batch mass-and-moisture balance. Report measured liquid drainage or wastewater separately and do not classify it as water to air.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: calculated by `calc_drying_water_balance`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch`
- Range: Temporary evaporated-water screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 9
  - Unit: kg/kg net packaged raisins
  - Basis: calculated water removed to air per 1 kg net packaged raisins; temporary until representative batch moisture balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Moisture conditioning, cleaning, sorting, and optional coating (`raisin_finishing`)

#### Inputs

##### Product flows

###### Dried grapes entering finishing (`finishing_dried_grapes`)

Use the measured output of `grape_drying`; keep batch, grape, treatment, and drying-route identity linked.

- Selected flow: Dried grapes for raisin finishing
- Flow property / unit: Mass / kg
- Amount rule: linked measured output of `grape_drying`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_batch`
- Range: Temporary finishing-input screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg net packaged raisins
  - Basis: dried grapes entering finishing per 1 kg net packaged raisins; temporary until representative batch balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water and food-grade finishing materials (`finishing_materials`)

Record added water, edible oil, flour, or other food-grade coating or conditioning material separately. Declare the purpose, concentration, and supplier specification; record only materials actually applied.

- Selected flow: Declared conditioning water or food-grade finishing material, one exchange per material
- Flow property / unit: Mass / kg
- Amount rule: measured applied mass in supplied form
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `codex-cxs-360-2020`
- Range: Temporary finishing-material screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net packaged raisins
  - Basis: total added conditioning water and food-grade materials before separation into individual exchanges; temporary until representative formulation records are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing energy (`finishing_energy`)

Record electricity and heat for cleaning, stem or seed removal, moisture conditioning, pasteurization, sorting, grading, and coating only when those operations occur.

- Selected flow: Declared electricity or fuel, one exchange per energy carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered or equipment-log energy assigned to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Range: Temporary finishing-energy screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ equivalent/kg net packaged raisins
  - Basis: purchased finishing energy per 1 kg net packaged raisins; temporary until representative metered batches are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned food-grade raisins (`conditioned_raisins`)

Record release mass, moisture, style, treatment, coating, and food-grade disposition after sorting and before packaging.

- Selected flow: Raisins `e2741aa4-2dfe-487f-a0fe-fd5d6dd3302d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass released to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: `codex-cxs-360-2020`
- Range: Temporary finishing-yield screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg net packaged raisins
  - Basis: accepted raisins released to packaging per 1 kg net packaged raisins; temporary until representative batch balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Finishing rejects and wastewater (`finishing_residues`)

Record removed stems, seeds, off-specification raisins, dust, wastewater, and spent materials as separate exchanges with their actual treatment or recovery destinations.

- Selected flow: Declared finishing residue or wastewater, one exchange per waste type
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled quantity to each destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Range: Temporary finishing-residue screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net packaged raisins
  - Basis: combined screening total before separation into individual waste exchanges; temporary until representative batch balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Net-mass filling and packaging (`raisin_packaging`)

#### Inputs

##### Product flows

###### Conditioned raisins supplied to packaging (`packaging_raisin_input`)

Use the measured accepted output of `raisin_finishing`; retain batch and all required product qualifiers.

- Selected flow: Raisins `e2741aa4-2dfe-487f-a0fe-fd5d6dd3302d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: linked measured output of `raisin_finishing`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_batch`
- Range: Temporary packaging-input screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg net packaged raisins
  - Basis: conditioned raisins supplied to packaging per 1 kg net packaged raisins; temporary until representative filling balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and transport packaging separately by material and actual package configuration. Include labels, closures, liners, and pallets when they cross the declared boundary.

- Selected flow: Declared packaging material, one exchange per material
- Flow property / unit: Mass / kg
- Amount rule: measured, bill-of-materials, or purchase-reconciled packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxs-360-2020`, `eu-pef-2021-2279`
- Range: Temporary packaging-mass screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg net packaged raisins
  - Basis: total packaging supplied per 1 kg net packaged raisins; temporary until representative bills of materials are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging energy (`packaging_energy`)

Record metered or equipment-log electricity and other energy for filling, sealing, coding, check-weighing, and pallet preparation.

- Selected flow: Declared electricity or fuel, one exchange per energy carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered or equipment-log energy assigned to packaged output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Range: Temporary packaging-energy screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ equivalent/kg net packaged raisins
  - Basis: purchased packaging energy per 1 kg net packaged raisins; temporary until representative metered batches are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Net packaged raisins (`packaged_raisins`)

The reference output is the verified net edible mass of released raisins. Packaging mass and tare remain separate inputs.

- Selected flow: Raisins `e2741aa4-2dfe-487f-a0fe-fd5d6dd3302d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed normalization output of 1 kg verified net raisins
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021-2279`
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: exact normalized net product output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Packaging scrap and rejected packs (`packaging_scrap`)

Record trim, damaged packaging, rejected packs, and recovered raisins separately; do not combine recovered product with packaging waste.

- Selected flow: Declared packaging scrap or rejected-pack component, one exchange per waste type
- Flow property / unit: Mass / kg
- Amount rule: measured or material-balance-reconciled quantity to each treatment or recovery destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged raisins
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Range: Temporary packaging-scrap screening guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg net packaged raisins
  - Basis: combined packaging scrap before separation into individual waste exchanges; temporary until representative packaging balances are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared receiving, drying, finishing, and packaging operations | Avoid allocation by subdividing batches, lines, or metered operations whenever separate records are available. | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | unavoidable multi-functional operations | When subdivision is not possible, use and document a relevant causal physical relationship. Use another relationship, such as economic value, only when no defensible physical relationship exists; disclose quantities, prices, period, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_residue_status` | rejected grapes, stems, seeds, recovered raisins, and other outputs | Treat an output sent for disposal as waste and assign its treatment to the process. If an output is sold or used as a co-product, preserve its mass and destination and apply the declared allocation hierarchy; do not award an undocumented avoided-burden credit. | `eu-pef-2021-2279` |
| `allocation_packaging_line` | shared packaging utilities | Allocate shared packaging energy and consumables using a measured driver that reflects causality, such as machine time, filled net mass, or package count; state the driver and ensure all line outputs are covered. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_batch` | `grape_receiving_pretreatment` | received grapes, water, treatment materials, prepared grapes, and residues | batch record | batch_id; supplier_lot; grape_species; variety_group; origin; received_mass_kg; incoming_condition; water_kg; material_name; material_mass_kg; prepared_mass_kg; residue_type; residue_mass_kg; destination | calibrated scales, meters, formulation sheets, and waste records reconciled to one batch | kg | every batch | all batches in represented production period | all included receiving and pre-treatment operations | sum by identified flow and batch, then divide by verified net packaged output | calibration records; supplier certificates; formulation records; batch mass balance; waste transfer records |
| `cp_drying_batch` | `grape_drying` | grape input, energy carriers, dried output, moisture, and water removed | batch and meter record | batch_id; drying_technique; sequence; grape_input_kg; input_moisture_pct; energy_carrier; energy_quantity; energy_unit; dried_output_kg; exit_moisture_pct; liquid_loss_kg; drying_time | batch-linked scales, moisture tests, utility meters, invoices, and equipment logs | kg; % by mass; kWh; MJ; h | every batch and meter period | all represented drying batches, covering seasonal variation | all declared drying equipment and stages | reconcile energy to batch; calculate output-weighted moisture and batch mass balance; normalize to net packaged output | scale and moisture-method records; meter reconciliation; route log; mass-balance closure |
| `cp_finishing_batch` | `raisin_finishing` | dried input, conditioning materials, energy, accepted raisins, and residues | batch record | batch_id; dried_input_kg; operation; water_added_kg; material_name; material_mass_kg; energy_quantity; energy_unit; accepted_mass_kg; release_moisture_pct; style; treatment_status; residue_type; residue_mass_kg; destination | calibrated scales, laboratory or validated moisture method, formulation sheets, meters, and disposition records | kg; % by mass; kWh; MJ | every batch | all finishing batches in represented period | all included conditioning, cleaning, sorting, coating, and pasteurization operations | sum separately by flow; mass-weight moisture results; normalize to net packaged output | calibration and test records; food-grade supplier specification; batch release; residue reconciliation |
| `cp_packaging_batch` | `raisin_packaging` | raisin input, net output, packaging materials, energy, and scrap | packaging run record | batch_id; package_format; units_filled; declared_net_mass_kg; verified_net_mass_kg; tare_kg; material_name; material_mass_kg; energy_quantity; energy_unit; scrap_type; scrap_mass_kg; destination | check-weigher or calibrated scales, packaging bill of materials, stock reconciliation, meters, and scrap records | kg; kWh; MJ; count | every packaging run | all runs associated with represented raisin batches | all included bulk and retail packaging configurations | calculate verified net output; sum each packaging material and waste route separately; normalize to net output | scale checks; legal-metrology or internal verification record; bill of materials; stock and scrap reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every foreground flow | normalized amount = batch-assigned flow quantity / verified net packaged raisin mass | batch flow quantity; verified net packaged raisin mass | amount per 1 kg net packaged raisins | `eu-pef-2021-2279` |
| `calc_drying_water_balance` | water removed to air | water to air = prepared-grape input mass + added drying-stage materials - dried-grape output mass - separately measured liquid and solid outputs; compare with moisture-basis calculation and investigate material discrepancy | input and output masses; input and exit moisture; liquid and solid losses | kg water to air and mass-balance closure |  |
| `calc_net_packaged_mass` | packaged reference output | verified net mass = gross filled-package mass - measured tare, or sum of independently verified net contents; packaging mass shall not enter the reference output | gross mass; tare; check-weigher or net-content records | kg net packaged raisins | `codex-cxs-360-2020` |
| `calc_shared_operation_assignment` | unavoidable shared utilities | assigned amount = total shared quantity × documented causal driver share; shares across all outputs shall sum to one | total shared quantity; driver for each output | assigned batch utility or material amount | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | all represented batches | Trace the output to *Vitis vinifera* grape lots and retain variety or varietal group, seed type and form, drying technique, treatment history, conditioning, coating, moisture class, food-grade release, and package format. | supplier lot records; route and formulation logs; batch release certificate |
| `dq_measurement` | mass, moisture, water, material, and energy records | Use calibrated or verified instruments and retain test methods, unit conversions, meter allocation, tare determination, and missing-data treatment. | calibration certificates; moisture-method record; meter and scale checks; conversion worksheet |
| `dq_temporal_coverage` | represented production period | Cover all batches or a justified representative sample spanning relevant grape origins, drying routes, seasonal conditions, and package formats; state exclusions. | production schedule; batch list; sampling rationale; coverage calculation |
| `dq_completeness` | each foreground process | Reconcile product inputs, product outputs, residues, wastewater, water to air, treatment materials, energy carriers, and packaging. Explain material mass-balance gaps and disclose unmeasured direct elementary flows. | process mass balances; utility reconciliation; waste records; completeness checklist |
| `dq_representativeness` | foreground and linked upstream data | Assess and disclose technological, geographical, time-related representativeness, and precision for important datasets and flows. | data-quality assessment following `eu-pef-2021-2279`; proxy justification |
| `dq_provisional_ranges` | every `reasoned_estimate` range | Treat the range only as a temporary QA screen when stronger evidence is unavailable. Do not substitute its midpoint for foreground data. Replace or retire it when representative batch measurements, audited supplier data, or reviewed transferable evidence are obtained, and document the replacement decision. | range register; data-improvement plan; reviewed replacement evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Confirm the exact Raisins product-flow UUID, Mass property UUID, Units of mass UUID, 1 kg net amount, and every required qualifier; reject a gross-package-mass reference. | `unsd-cpc-3-21411`, `codex-cxs-360-2020` |
| `validation_grape_identity` | product and inputs | Confirm sound dried *Vitis vinifera* grape identity and exclusion of currant types and other dried fruits; verify that upstream starting condition matches fresh, partly dried, or purchased-raisin inputs actually used. | `codex-cxs-360-2020` |
| `validation_route_exclusivity` | drying inventory | Confirm one declared primary drying technique per batch, or a documented sequential hybrid. Reject simultaneous sun/solar and heated-route burdens when no hybrid evidence exists. | `codex-cxs-360-2020` |
| `validation_moisture_and_conditioning` | released raisins | Confirm the release moisture result, applicable product style, test method, and all water addition, further drying, pasteurization, treatment, or coating records; apply the Codex maximum corresponding to the declared type. | `codex-cxs-360-2020` |
| `validation_mass_balance` | all four processes | Confirm linked intermediate masses and investigate unexplained mass-balance gaps; moisture removed to air, wastewater, residues, recovered product, and packaging scrap shall not be silently omitted or double counted. | `eu-pef-2021-2279` |
| `validation_packaging_net_mass` | packaged output | Confirm package format, packaging material masses, tare, verified net edible raisin mass, and separate packaging scrap; normalized net output shall equal exactly 1 kg. | `codex-cxs-360-2020`, `eu-pef-2021-2279` |
| `validation_foreground_priority` | important inventory flows | Confirm that actual batch records produce inventory values. Flag any retained `reasoned_estimate` as provisional and require its applicability, temporary status, and replacement trigger to remain disclosed. | `eu-pef-2021-2279` |
| `validation_allocation` | shared or multi-output operations | Confirm subdivision first, documented causal allocation when unavoidable, full coverage of outputs, and disclosure of any non-physical relationship and sensitivity. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground raisin-production dataset from received grapes to packaged raisins at the packaging-facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` when independently reviewed and sufficiently representative for reuse |
| allowed_use | Foreground food-production modelling, supply-chain inventories, packaging-gate comparisons within equivalent scope, and full life-cycle studies that add representative upstream and downstream stages |
| excluded_use | Claims about grape cultivation, consumer storage or use, packaging end of life, other dried fruits, or comparative assertions across unmatched drying routes, moisture classes, treatments, grape identities, or package formats without additional modelling and review |
| required_metadata | canonical PCR id and version used; product-flow UUID; grape and batch identity; geography and period; drying technique and sequence; treatment and conditioning; release moisture and method; seed type and form; coating; net mass and package format; foreground boundary; upstream datasets; allocation; exclusions |
| required_quality_disclosure | data coverage; scale, meter, and moisture-method quality; mass-balance closure; technological, geographical, and temporal representativeness; precision; proxies; missing flows; provisional reasoned estimates and replacement status |
| update_trigger | new reviewed Codex or classification scope; changed product-flow identity; material route, treatment, moisture, packaging, or allocation change; representative batch evidence that replaces a provisional range; audit finding; or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21411` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21411 “Raisins”, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-11) | external classification reference and product-category naming |
| `codex-cxs-360-2020` | `standard` | FAO/WHO Codex Alimentarius, CXS 360-2020, General Standard for Dried Fruits, including Annex C Raisins, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B360-2020%2FCXS_360e.pdf (retrieved 2026-08-11) | raisin identity, grape species, drying and treatment variants, food-grade quality, moisture limits, conditioning, packaging, and labelling qualifiers |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method and Annex II PEFCR requirements, ELI http://data.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-11) | functional unit, reference flow, system boundary, inventory completeness, multi-functionality hierarchy, foreground data quality, representativeness, and dataset disclosure |
