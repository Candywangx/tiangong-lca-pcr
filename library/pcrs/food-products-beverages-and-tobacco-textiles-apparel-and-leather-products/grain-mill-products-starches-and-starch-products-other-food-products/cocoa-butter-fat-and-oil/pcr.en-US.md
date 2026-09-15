---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-butter-fat-and-oil
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cocoa butter, fat and oil

## 1. Scope and Applicability

This PCR applies to foreground production of cocoa butter, cocoa fat, or cocoa oil obtained from cocoa beans, cocoa nibs, or cocoa mass/liquor and released as a business-to-business ingredient at the producing facility gate. It covers press routes and other declared recovery routes, followed by the actual filtration, conditioning, optional deodorization or refining, storage, and packaging operations performed before dispatch.

The foreground data package shall declare whether its starting material is fermented and dried cocoa beans, cocoa nibs, cocoa mass/liquor, or another technically justified cocoa-derived intermediate. Bean cleaning, roasting, breaking, winnowing, and nib grinding are included only when performed within the reporting facility or otherwise controlled as foreground operations. Purchased starting materials require upstream datasets that end at the declared receiving condition.

This PCR excludes cocoa mass/liquor sold as the reference product, cocoa cake and cocoa powder as reference products, chocolate and confectionery manufacture, and cocoa-butter equivalents or compound fats made from non-cocoa oils. Farm cultivation, fermentation, drying, external transport, downstream food manufacture, use, and end of life are outside the gate-to-gate foreground boundary unless a broader study explicitly adds them with separate datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-butter-fat-and-oil |
| classification_refs | CPC 3.0: 23620, Cocoa butter, fat and oil |
| covered_products | Cocoa butter, press cocoa butter, deodorized cocoa butter, and cocoa fat or oil obtained exclusively from cocoa beans or cocoa-derived mass/liquor |
| excluded_products | Cocoa mass/liquor, cocoa cake, cocoa powder, chocolate, confectionery, mixed vegetable fats, cocoa-butter equivalents from non-cocoa feedstocks, and products without traceable cocoa origin |
| representative_product | Bulk cocoa butter after recovery, filtration or conditioning, and any declared deodorization, ready for dispatch from the producing facility |
| production_route | Declared route from received cocoa beans, nibs, or cocoa mass/liquor through pressing or another documented fat-recovery operation, followed by finishing and factory-gate release |
| market_state | Business-to-business ingredient; liquid, semi-solid, or solid at the declared dispatch temperature; packaged or bulk |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible cocoa butter, fat, or oil derived exclusively from cocoa beans and supplied as an ingredient for cocoa, chocolate, or other declared food manufacture |
| How much | 1 kg net mass of factory-gate product |
| How well | Meets the declared commercial specification and product name; when conformance to Codex CXS 86-1981 is claimed, free fatty acids expressed as oleic acid are no more than 1.75% m/m and unsaponifiable matter is no more than 0.7% m/m, or no more than 0.35% m/m for press cocoa butter |
| How long or cycle | One production batch or campaign at factory-gate release; no service life is assigned to this intermediate ingredient |
| reference_flow_link | Output `cocoa_butter_product` from process `butter_finishing_and_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cocoa butter, fat and oil `402dbf23-610a-4be9-a34f-333ec03580a9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | starting material; recovery route; press or non-press designation; refining or deodorization state; grade or specification; physical state and dispatch temperature; production geography; data period; packaging state |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference cocoa butter product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net cocoa butter, fat, or oil at the declared factory-gate condition; exclude container tare and separately report packaging. |
| `wet_dry_basis_disclosure` | Cocoa beans, nibs, liquor, cake, and product | Mass | kg | Record the measured as-received mass and declare moisture or dry-matter basis whenever a conversion or mass balance uses a dry basis. |
| `energy_carrier_separation` | Electricity, fuels, and purchased heat | Energy or carrier-specific property | kWh, MJ, or carrier mass/volume | Preserve metered electricity, purchased heat, and each fuel carrier as separate records; document all conversion factors and do not merge them into an unsupported generic energy amount. |
| `solvent_accounting` | Extraction route, when used | Mass | kg | Record solvent make-up, recovered solvent, solvent in product, solvent sent to treatment, and direct releases separately on a consistent batch mass basis. |
| `product_quality_basis` | Product specification | Mass fraction | % m/m or kg/kg | State analytical method, sampling point, and mass basis for free fatty acids, unsaponifiable matter, residual solvent, moisture, or other claimed release specifications. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground cocoa butter production | Include all controlled operations from the declared received starting condition through recovery, finishing, storage, and factory-gate release, including utilities, processing aids, packaging, wastes, co-products, and direct emissions. | `icco-processing-cocoa`; `eu-pef-method-2021` |
| `boundary_route_disclosure` | route-specific process selection | Declare the starting material and include cleaning, roasting, winnowing, grinding, alkalization, pressing, extraction, filtration, deodorization, or packaging only when the operation is actually performed for the represented product. | `icco-processing-cocoa`; `codex-cxs-86-1981` |
| `boundary_purchased_inputs` | purchased cocoa intermediates and utilities | Model purchased cocoa beans, nibs, liquor, energy, water, solvent, processing aids, and packaging with separate upstream datasets ending at the facility receiving condition. | `eu-pef-method-2021` |
| `boundary_same_category_recursion` | cocoa butter used as rework, blend component, or purchased input | Record externally supplied cocoa butter as a separate technosphere input with its own upstream dataset; do not recursively absorb it into this foreground product output. | `eu-pef-method-2021` |
| `boundary_direct_releases` | direct emissions and wastes | Record measured releases to air, water, and soil, as well as wastewater, shells, cake, spent filter media, solvent losses, off-spec material, and packaging waste, with destination and treatment route. | `eu-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received fermented and dried cocoa beans, cocoa nibs, cocoa mass/liquor, or another justified cocoa-derived intermediate, with moisture, quality state, ownership boundary, and receiving location declared |
| starting_condition_role | Foreground entry point; upstream cultivation, fermentation, drying, and external transport remain in linked upstream datasets unless explicitly added to the study |
| product_classification_scope | Cocoa butter, fat, and oil obtained exclusively from cocoa feedstock; classification references provide mapping context but do not replace the semantic product boundary |
| recursive_input_rule | Externally supplied cocoa butter or same-category rework crossing the reporting boundary is a distinct input and requires a separate source dataset and non-duplicative mass accounting |
| upstream_dataset_requirement | Every purchased starting material, utility, solvent, processing aid, and packaging material requires an upstream dataset representative of its supplier, geography, technology, and time period |
| disclosure | Declare starting material, recovery technology, process sequence, allocation method, co-product destinations, energy and water basis, solvent use, product specification, packaging state, geography, data period, and exclusions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cocoa_material_preparation` | Cocoa material preparation | `conditional` | Include when beans or nibs are cleaned, roasted, broken, winnowed, alkalized, or ground within the foreground facility | Convert received cocoa material to press-ready cocoa liquor or another declared recovery feed | kg prepared recovery feed |
| `cocoa_fat_recovery` | Cocoa fat recovery and separation | `required` | Always include the actual pressing, expelling, or documented extraction route used to recover cocoa fat | Separate cocoa butter/fat/oil from cocoa solids | kg crude or press cocoa fat recovered |
| `butter_finishing_and_release` | Cocoa butter finishing and factory-gate release | `required` | Always include filtration or conditioning and release; include deodorization, refining, storage, and packaging when performed | Produce the released reference product | 1 kg released cocoa butter, fat, or oil |

### Process: Cocoa material preparation (`cocoa_material_preparation`)

#### Inputs

##### Product flows

###### Received cocoa material (`received_cocoa_material`)

Record the cocoa beans or nibs entering foreground preparation. Cocoa liquor purchased as a ready recovery feed bypasses this process and is recorded directly in `cocoa_fat_recovery`.

- Selected flow: Cocoa beans or cocoa nibs; route-specific Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass accepted into the represented batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared recovery feed and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `icco-processing-cocoa`; `codex-cxs-141-1983`

###### Preparation electricity (`preparation_electricity`)

Record metered electricity for conveying, cleaning, roasting auxiliaries, winnowing, grinding, and dust control assigned to the represented preparation route.

- Selected flow: Electricity supplied to the facility; Tiangong flow UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: metered or sub-metered electricity attributable to cocoa material preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared recovery feed and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Range: Provisional preparation-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh/kg prepared recovery feed
  - Basis: broad first-pass equipment-energy screen; replace with route-specific reviewed evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation thermal energy (`preparation_thermal_energy`)

Record purchased heat or each fuel used for roasting and thermal conditioning without combining unlike carriers.

- Selected flow: Purchased heat or route-specific fuel; Tiangong flow UUID unresolved
- Flow property / unit: Energy / MJ, or carrier-specific mass or volume
- Amount rule: metered heat or fuel consumption attributable to cocoa material preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared recovery feed and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Range: Provisional preparation-heat screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 30
  - Unit: MJ/kg prepared recovery feed
  - Basis: broad first-pass thermal-energy screen; replace with route-specific reviewed evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Prepared cocoa recovery feed (`prepared_cocoa_feed`)

Record cocoa liquor or another declared press-ready or extraction-ready cocoa feed leaving material preparation.

- Selected flow: Cocoa mass or cocoa liquor; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured prepared feed transferred to cocoa fat recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `icco-processing-cocoa`; `codex-cxs-141-1983`

##### Waste flows

###### Shells, foreign material, and preparation rejects (`preparation_rejects`)

Record separated shells, foreign material, dust collector solids, and rejected cocoa material by destination; classify as co-product only when a documented economic use exists.

- Selected flow: Cocoa preparation residues; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass by residue type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared recovery feed and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`

##### Elementary flows

###### Direct preparation air emissions (`preparation_air_emissions`)

Record measured particulate matter and other directly emitted substances from roasting, cooling, breaking, winnowing, grinding, and onsite combustion after control equipment.

- Selected flow: Substance-specific emissions to air; Tiangong elementary-flow UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: stack measurement, validated emission calculation, or mass balance by emitted substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared recovery feed and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emissions`

### Process: Cocoa fat recovery and separation (`cocoa_fat_recovery`)

#### Inputs

##### Product flows

###### Cocoa recovery feed (`cocoa_recovery_feed`)

Record purchased cocoa liquor, internally prepared liquor, nibs, or other declared cocoa feed entering the selected pressing or extraction route.

- Selected flow: Cocoa mass, cocoa liquor, nibs, or declared cocoa-derived recovery feed; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass entering recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg crude cocoa fat recovered and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `icco-processing-cocoa`; `codex-cxs-141-1983`
- Range: Cocoa-butter content QA range for cocoa mass or liquor conforming to CXS 141-1983
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.47
  - Upper: 0.60
  - Unit: kg cocoa butter/kg cocoa mass or liquor
  - Basis: measured or supplier-declared cocoa-butter mass fraction in qualifying cocoa mass or liquor; not a recovery-yield default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `codex-cxs-141-1983`

###### Recovery electricity (`recovery_electricity`)

Record electricity for pumping, hydraulic pressing, expelling, extraction, separation, cooling, and solvent recovery assigned to the selected route.

- Selected flow: Electricity supplied to the facility; Tiangong flow UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: metered or sub-metered electricity attributable to cocoa fat recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg crude cocoa fat recovered and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Range: Provisional recovery-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh/kg crude cocoa fat
  - Basis: broad first-pass equipment-energy screen; replace with route-specific reviewed evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovery thermal energy (`recovery_thermal_energy`)

Record heat or fuel used to maintain liquor flow, support extraction or solvent recovery, and condition the press or separation line.

- Selected flow: Purchased heat or route-specific fuel; Tiangong flow UUID unresolved
- Flow property / unit: Energy / MJ, or carrier-specific mass or volume
- Amount rule: metered heat or fuel attributable to cocoa fat recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg crude cocoa fat recovered and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Range: Provisional recovery-heat screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 30
  - Unit: MJ/kg crude cocoa fat
  - Basis: broad first-pass thermal-energy screen; replace with route-specific reviewed evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Extraction solvent make-up (`extraction_solvent_makeup`)

Record solvent make-up only when a non-press extraction route is used; preserve solvent identity and separate recovered solvent from new input.

- Selected flow: Route-specific extraction solvent; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured solvent delivered to the recovery system minus separately inventoried returned or recovered solvent, without netting direct releases
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg crude cocoa fat recovered and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `codex-cxs-86-1981`

##### Waste flows

#### Outputs

##### Product flows

###### Crude or press cocoa fat (`crude_cocoa_fat`)

Record the recovered cocoa fat transferred to finishing, before any finishing losses are applied.

- Selected flow: Cocoa butter, fat and oil `402dbf23-610a-4be9-a34f-333ec03580a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured crude or press cocoa fat transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `icco-processing-cocoa`; `codex-cxs-86-1981`

###### Cocoa cake or defatted cocoa solids (`cocoa_cake_coproduct`)

Record cake or defatted solids as a co-product when it has an economic use; otherwise record it as waste with its treatment destination. Codex defines cocoa cake as the product obtained by partial or complete removal of fat from cocoa nib or cocoa mass.

- Selected flow: Cocoa cake or route-specific defatted cocoa solids; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured co-product mass at the recovery-process exit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg crude cocoa fat recovered and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `codex-cxs-141-1983`; `icco-processing-cocoa`

##### Waste flows

###### Recovery wastes and off-spec material (`recovery_wastes`)

Record unrecoverable solids, spent treatment media, spills, and off-spec material not internally reworked, with treatment destination and any recovered value.

- Selected flow: Route-specific cocoa recovery waste; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude cocoa fat recovered and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`

##### Elementary flows

###### Direct solvent and recovery emissions (`recovery_direct_emissions`)

Record direct substance-specific releases from extraction, solvent recovery, pressing, onsite combustion, and wastewater treatment after controls.

- Selected flow: Substance-specific emissions to air, water, or soil; Tiangong elementary-flow UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured release or validated calculation from solvent, fuel, discharge, and control-device records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg crude cocoa fat recovered and normalized to 1 kg released cocoa butter
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emissions`

### Process: Cocoa butter finishing and factory-gate release (`butter_finishing_and_release`)

#### Inputs

##### Product flows

###### Crude or press cocoa fat received for finishing (`finishing_cocoa_fat_input`)

Record crude or press cocoa fat entering filtration, conditioning, optional deodorization or refining, storage, and release.

- Selected flow: Cocoa butter, fat and oil `402dbf23-610a-4be9-a34f-333ec03580a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured cocoa fat mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released cocoa butter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `codex-cxs-86-1981`

###### Finishing electricity (`finishing_electricity`)

Record electricity for filtration, pumping, cooling, deodorization or refining auxiliaries, storage, filling, and factory-gate handling.

- Selected flow: Electricity supplied to the facility; Tiangong flow UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: metered or sub-metered electricity attributable to finishing and release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released cocoa butter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Range: Provisional finishing-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 3
  - Unit: kWh/kg released cocoa butter
  - Basis: broad first-pass equipment-energy screen; replace with route-specific reviewed evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing thermal energy (`finishing_thermal_energy`)

Record purchased heat or fuel for melting, conditioning, deodorization or refining, and heated storage when performed.

- Selected flow: Purchased heat or route-specific fuel; Tiangong flow UUID unresolved
- Flow property / unit: Energy / MJ, or carrier-specific mass or volume
- Amount rule: metered heat or fuel attributable to finishing and release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released cocoa butter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Range: Provisional finishing-heat screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg released cocoa butter
  - Basis: broad first-pass thermal-energy screen including an unheated route; replace with route-specific reviewed evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`finishing_process_water`)

Record water that crosses the process boundary for cleaning, cooling losses, steam generation, or direct product-contact operations; do not count closed-loop recirculation repeatedly.

- Selected flow: Process water; Tiangong flow UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered make-up water attributable to finishing and release by use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released cocoa butter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Range: Provisional process-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg released cocoa butter
  - Basis: broad first-pass make-up-water screen including a dry or fully recirculating route; replace with route-specific reviewed evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filter media, processing aids, and packaging (`finishing_aids_and_packaging`)

Record each consumed filter aid, refining or deodorization aid, inert gas, and packaging material separately; packaging is omitted only for genuinely unpackaged bulk dispatch.

- Selected flow: Material-specific processing aid or packaging flow; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: purchased inventory adjusted for stock change and measured recovery or return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released cocoa butter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_materials`

##### Waste flows

#### Outputs

##### Product flows

###### Released cocoa butter, fat, or oil (`cocoa_butter_product`)

This is the PCR reference product at the declared dispatch condition and shall carry every required qualifier.

- Selected flow: Cocoa butter, fat and oil `402dbf23-610a-4be9-a34f-333ec03580a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net product after finishing losses and before container tare
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg released cocoa butter, fat, or oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-86-1981`

##### Waste flows

###### Finishing wastes and wastewater (`finishing_wastes`)

Record spent filter media, refining residues, product losses, off-spec product not reworked, packaging waste, and wastewater by treatment destination.

- Selected flow: Route-specific finishing waste or wastewater; Tiangong flow UUID unresolved
- Flow property / unit: Mass / kg or Volume / m3, kept as separate rows in a concrete dataset
- Amount rule: measured waste or discharge quantity by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released cocoa butter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`

##### Elementary flows

###### Direct finishing emissions (`finishing_direct_emissions`)

Record substance-specific releases from deodorization, refining, heated storage, onsite combustion, and wastewater treatment after control equipment.

- Selected flow: Substance-specific emissions to air, water, or soil; Tiangong elementary-flow UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured release or validated calculation from operational and control-device records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released cocoa butter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emissions`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | cocoa butter and cocoa cake common processes | Avoid allocation where feasible by sub-metering or engineering subdivision of preparation, recovery, finishing, storage, and packaging operations; assign butter-only finishing directly to cocoa butter and cake-only handling directly to cocoa cake. | `ghg-protocol-product-standard-2011` |
| `allocation_physical_then_economic` | inseparable pressing or extraction burdens | If common burdens remain after subdivision, use a documented physical relationship that reflects causal demand. When no defensible physical relationship exists, use economic allocation based on consistent prices at the common-process exit. | `ghg-protocol-product-standard-2011` |
| `allocation_waste_status` | shells, cake, residues, and off-spec outputs | Treat an output as waste only when it has no economic value and is sent to treatment; if it is sold or used as a product, record it as a co-product and apply the selected allocation rule. | `ghg-protocol-product-standard-2011` |
| `allocation_internal_rework` | internally reworked cocoa fat | Do not allocate a second burden to internal rework that never crosses the system boundary; preserve mass and energy records and prevent double counting in product output. | `ghg-protocol-product-standard-2011` |
| `allocation_disclosure` | all multi-output datasets | Report subdivision boundaries, allocation formula, physical parameter or price basis, price period and currency where relevant, output quantities, and a sensitivity case when economic allocation materially affects results. | `ghg-protocol-product-standard-2011`; `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `cocoa_material_preparation`; `cocoa_fat_recovery`; `butter_finishing_and_release` | cocoa materials entering each process | weighbridge, calibrated scale, batch ticket, supplier certificate | material identity; lot; gross mass; tare; net mass; moisture or dry matter when used; fat fraction when measured; origin; timestamp | reconcile receiving and batch records to physical inventory | kg; % m/m | each lot or batch | representative production year or justified campaign | all facilities and lines represented | sum accepted net mass by material and batch; reconcile opening and closing stock | calibration record; lot certificate; stock reconciliation; rejected-lot record |
| `cp_energy_and_fuel` | all included processes | electricity, heat, and fuel | meter, sub-meter, invoice, fuel issue, runtime record | meter start/end; fuel quantity; unit; heating value source; equipment hours; batch assignment | direct sub-metering preferred; otherwise documented engineering allocation | kWh; MJ; carrier mass or volume | continuous or each batch; monthly reconciliation | same period as production output | all included meters, boilers, and lines | subtract non-production loads; allocate shared utilities with documented causal driver | meter calibration; invoices; fuel specification; allocation worksheet |
| `cp_process_outputs` | `cocoa_material_preparation`; `cocoa_fat_recovery` | prepared feed, crude fat, cake, and other outputs | batch scale, tank gauge, production log | output identity; net mass; moisture; fat content where relevant; destination; timestamp | measure each transfer or batch and reconcile tanks and stock | kg; % m/m | each batch | same period as input data | every represented recovery line | sum by product and destination; retain internal-transfer links | calibration; laboratory certificate; batch reconciliation |
| `cp_solvent_balance` | `cocoa_fat_recovery` | solvent make-up, recovery, residue, and release | purchase and stock records, recovery meter, product test, waste manifest, emission monitor | solvent identity; opening stock; purchases; closing stock; recovered quantity; product residue; waste; direct release | complete solvent mass balance for each reporting period | kg; mg/kg product | each batch plus period reconciliation | same period as extraction production | every solvent-using line and recovery system | make-up plus opening stock equals recovered, closing stock, product residue, waste, and release within disclosed balance closure | inventory reconciliation; laboratory result; monitor calibration; waste manifest |
| `cp_water_records` | all included processes | make-up water and wastewater | water meter, sub-meter, discharge meter, cleaning log | source; meter readings; use; recirculation; discharge volume; treatment route; batch assignment | meter make-up and discharge separately; do not count recirculated volume as repeated input | m3 | continuous or each cleaning event; monthly reconciliation | same period as production output | all included water systems | sum net make-up and discharge by use and normalize to product | meter calibration; utility bill; discharge record; cleaning log |
| `cp_finishing_materials` | `butter_finishing_and_release` | filter media, aids, inert gas, and packaging | purchase, issue, return, stock, and batch records | material identity; lot; opening stock; receipts; issues; returns; closing stock; recovered amount; batch | inventory difference cross-checked to batch issues | kg or material-specific unit | each batch; monthly reconciliation | same period as production output | all finishing and packaging lines | opening plus receipts minus closing, returns, and recovered amount; allocate to batches by documented use | invoices; stock count; issue ticket; supplier specification |
| `cp_waste_and_emissions` | all included processes | wastes and direct releases | scale, waste manifest, discharge sample, stack test, continuous monitor, validated calculation input | substance or waste identity; quantity; medium; destination; treatment; concentration; flow rate; operating time; control efficiency | direct measurement preferred; calculation retains formula and measured inputs | kg; m3; concentration and flow units | each shipment or sampling event; continuous where monitored | same period as production output | all included release points and waste destinations | calculate substance mass from concentration and flow where required; sum by medium and destination | calibration; laboratory report; manifest; formula review; control-device record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period or batch amount × allocation share ÷ released cocoa butter net mass | measured amount; allocation share; released product mass | amount per 1 kg reference product | `eu-pef-method-2021` |
| `calc_route_yield` | recovery and finishing | route yield = released cocoa butter mass ÷ measured cocoa feed mass; report feed identity, moisture basis, and whether the denominator is beans, nibs, or liquor | released product mass; recovery feed mass; moisture basis | kg product/kg declared feed | `icco-processing-cocoa`; `codex-cxs-141-1983` |
| `calc_mass_balance` | each process and reporting period | inputs plus opening stock = products plus co-products plus wastes plus direct mass releases plus closing stock; report balance closure and unexplained difference without forcing it to zero | all measured mass flows and stock changes | mass-balance closure and unexplained difference | `eu-pef-method-2021` |
| `calc_liquor_fat_check` | cocoa mass or liquor feed | compare measured or supplier-declared cocoa-butter fraction with 0.47–0.60 kg/kg only when CXS 141-1983 conformity is applicable; do not use that interval as a default recovery yield | cocoa liquor mass; cocoa-butter fraction; product conformity claim | composition QA finding | `codex-cxs-141-1983` |
| `calc_solvent_balance` | solvent extraction route | solvent loss = opening stock + purchases − closing stock − recovered solvent − solvent in products − solvent in wastes; negative or unexplained results require reconciliation | solvent inventory, purchase, recovery, product-test, waste, and release records | kg solvent loss per kg product and closure finding | `codex-cxs-86-1981` |
| `calc_allocation_share` | shared preparation and recovery burdens | calculate the cocoa-butter share using the disclosed subdivision and allocation hierarchy; allocated shares across co-products shall sum to one | sub-process records; output quantities; physical parameter or prices | allocation share by output | `ghg-protocol-product-standard-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product and material rows | Preserve lot-level material identity, starting condition, recovery route, product designation, and required qualifiers; do not merge press and non-press routes without a justified representative average. | lot certificates; batch records; route map; product specification |
| `dq_measurement` | mass, energy, water, solvent, and emission data | Use calibrated or verified measurement systems; retain units, conversion factors, sampling methods, detection limits, and uncertainty or data limitations. | calibration certificates; meter register; laboratory reports; conversion worksheet |
| `dq_temporal` | foreground period | Use a representative production year where available; a shorter campaign requires justification, coverage of material operating states, and disclosure of seasonal or batch limitations. | production calendar; downtime and campaign records; representativeness statement |
| `dq_completeness` | process inventory | Reconcile material, solvent, and product balances and document every excluded flow, missing measurement, proxy, and cut-off; absence of a measured release is not evidence of zero. | balance worksheets; gap log; exclusion register; source-to-row trace |
| `dq_technology_geography` | foreground and upstream datasets | Match represented technology, site geography, supplier region, energy system, and data period, or document the proxy and expected direction of bias. | dataset metadata; supplier records; proxy justification |
| `dq_allocation` | multi-output processes | Retain the data and rationale needed to reproduce subdivision and allocation, including quantities and contemporaneous prices when economic allocation is used. | allocation workbook; meter map; quantity and price records; sensitivity result |
| `dq_source_traceability` | external rules and estimates | Link every source-backed constraint to a listed source id and label every unsourced broad range as a replaceable `reasoned_estimate`. | source register; projection source_ids; review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm flow UUID `402dbf23-610a-4be9-a34f-333ec03580a9`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, reference unit kg, fixed amount 1, and all required qualifiers. | `codex-cxs-86-1981` |
| `validate_scope_route` | process map and boundary | Confirm the declared starting material and actual route match included process sections, and that omitted preparation, extraction, deodorization, or packaging steps are explicitly not performed or lie in linked upstream/downstream datasets. | `icco-processing-cocoa`; `eu-pef-method-2021` |
| `validate_mass_and_solvent_balance` | each process and solvent-using route | Recalculate mass and solvent balances from raw records; unresolved differences, negative solvent losses, or product output exceeding physically available feed fat are errors or documented inconclusive findings. | `codex-cxs-141-1983`; `codex-cxs-86-1981` |
| `validate_coproduct_allocation` | cocoa cake and other valuable outputs | Confirm valuable outputs are treated as co-products, allocation is avoided where feasible, the remaining method follows the stated hierarchy, and shares sum to one without double counting internal rework. | `ghg-protocol-product-standard-2011` |
| `validate_product_specification` | released cocoa butter | When CXS 86-1981 conformity is claimed, verify product designation, analytical results, applicable free-fatty-acid and unsaponifiable-matter limits, and residual hexane limit for non-press cocoa butter. | `codex-cxs-86-1981` |
| `validate_data_quality` | foreground data package | Check measurement calibration, temporal coverage, completeness, technological and geographical representativeness, source traceability, proxy disclosure, and replacement status of provisional estimates. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate unit-process dataset for factory-gate cocoa butter, fat, or oil production |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Route-, site-, geography-, period-, and specification-matched LCA models for cocoa butter and downstream products, with upstream datasets linked at the declared starting condition |
| excluded_use | Unsupported product comparisons; substitution among press, extracted, refined, or deodorized products without qualifier alignment; representation of non-cocoa fats; use as a cradle-to-gate dataset when upstream cocoa production is absent |
| required_metadata | PCR id and version state; reference-flow UUID; starting material; route and process map; product designation and specification; plant geography; data period; technology; allocation method; co-product destinations; packaging state; source ids; data owner and review status |
| required_quality_disclosure | Measurement coverage and calibration; mass and solvent balance closure; temporal, technological, and geographical representativeness; missing UUIDs and flows; proxies; allocation sensitivity; cut-offs; provisional `reasoned_estimate` ranges; limitations |
| update_trigger | Material change in starting-material mix, recovery or finishing technology, energy or water supply, solvent system, product specification, co-product use or prices, allocation method, packaging, emissions control, site coverage, or data period; replacement of provisional estimates or unresolved flow identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-86-1981` | `standard` | Codex Alimentarius, CXS 86-1981, Standard for Cocoa Butter, amended 2025, https://workspace.fao.org/sites/codex/Standards/CXS%2086-1981/CXS_086e.pdf (retrieved 2026-08-10) | Product definition and designation; quality limits; non-press hexane-residue criterion; release-specification validation |
| `codex-cxs-141-1983` | `standard` | Codex Alimentarius, CXS 141-1983, Standard for Cocoa (Cacao) Mass (Cocoa/Chocolate Liquor) and Cocoa Cake, amended 2025, https://workspace.fao.org/sites/codex/Standards/CXS%20141-1983/CXS_141e.pdf (retrieved 2026-08-10) | Cocoa liquor and cake identity; 47–60% cocoa-butter composition QA range; process mass-balance interpretation |
| `icco-processing-cocoa` | `official_guidance` | International Cocoa Organization, Processing Cocoa, https://www.icco.org/processing-cocoa/ (retrieved 2026-08-10) | Cocoa process decomposition; cleaning, roasting, winnowing, grinding, liquor pressing, cake, and cocoa-butter outputs |
| `ghg-protocol-product-standard-2011` | `standard` | WRI and WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-08-10) | Co-product classification and allocation hierarchy: subdivision, physical relationship, then economic or other justified relationship |
| `eu-pef-method-2021` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279, Annex I: Product Environmental Footprint Method, 2021, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes%201%20to%202.pdf (retrieved 2026-08-10) | Functional-unit framing; system boundary; foreground and upstream data separation; activity-data normalization; completeness and data-quality requirements |
