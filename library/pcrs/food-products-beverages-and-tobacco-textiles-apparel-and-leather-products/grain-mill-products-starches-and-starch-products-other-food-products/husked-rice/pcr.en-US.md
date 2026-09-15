---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.husked-rice
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Husked rice

## 1. Scope and Applicability

This PCR applies to foreground data packages for non-parboiled husked rice produced by cleaning paddy rice and removing the husk while retaining the bran layer as the normal product condition. It covers receipt and cleaning of paddy, dehusking and product separation, and any declared conditioning, storage, or packaging performed before the selected mill or factory gate. Upstream rice cultivation and delivery to the declared starting gate are represented by linked upstream datasets rather than recreated inside the foreground process.

The PCR does not cover paddy rice with the husk retained, semi-milled or wholly milled white rice from which bran or germ is intentionally removed, parboiled rice, cooked rice, rice flour, or other processed rice foods. Accidental minor bran loss during husking and handling does not by itself convert the product to milled rice, but intentional whitening or polishing is outside this PCR.

### Product and Technical Description

The normative Chinese product name in this library is **去壳稻米**. The selected Tiangong reference product flow uses the localized Chinese name **“去壳的稻谷”**; that database wording is bound to the same UUID-backed `Husked rice` identity and must not be interpreted as paddy rice with the husk retained. Codex CXS 198-1995 defines husked rice as paddy rice from which only the husk has been removed and distinguishes it from both paddy rice and milled rice. A conforming data package must therefore declare the dehusking state and must not broaden the reference product to unhusked paddy or to semi-/wholly milled rice.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.husked-rice |
| classification_refs | CPC 3.0: 23162 — Husked rice |
| covered_products | Non-parboiled rice kernels obtained from paddy by removal of the husk only; brown rice or cargo rice with the bran layer normally retained; bulk or packaged product at a declared mill/factory gate |
| excluded_products | Paddy rice with husk retained; semi-milled or wholly milled white rice; intentionally polished rice; parboiled rice; cooked rice; rice flour and further-processed rice foods |
| representative_product | Marketable non-parboiled husked rice (去壳稻米), corresponding to Tiangong Chinese flow name “去壳的稻谷” |
| production_route | Paddy receipt and cleaning → mechanical dehusking → separation of husked rice and rice husk → conditional conditioning/storage → conditional packaging |
| market_state | Declared mill or factory gate; bulk or packaged; moisture, grain class/variety, origin, grade, conditioning status, and packaging status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of marketable non-parboiled husked rice with the husk removed and the bran layer normally retained |
| How much | 1 kg net husked rice |
| How well | Meets the declared product specification and applicable legal/contract quality limits; moisture and impurity basis declared; not intentionally whitened or polished |
| How long or cycle | One production lot at the declared mill/factory gate; no use-duration function applies to this mass product |
| reference_flow_link | One kilogram of net conforming output from `dehusking_and_separation`, or from the last included conditioning/packaging process when that later gate is declared |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Husked rice `f762700e-8463-40fa-a164-0ecd28c744d6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dehusking state; declared gate; moisture content and measurement basis; rice species/variety or grain class when known; geographic origin; production technology; conditioning/drying status; bulk or packaging status; product grade and applicable specification; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net husked-rice mass excluding packaging and normalize the foreground inventory to exactly 1 kg of conforming reference product. |
| `moisture_declaration` | reference product and paddy input | Mass fraction | % m/m | Measure or document moisture on the as-received basis for paddy and the as-produced basis for husked rice. Do not silently convert the commercial reference mass to dry matter; provide a separate dry-matter conversion only when comparison requires it. |
| `codex_quality_basis` | direct-human-consumption product claiming Codex conformity | Mass fraction | % m/m | Apply the Codex maximum moisture content of 15% m/m and the applicable husked-rice extraneous-matter limits only when the dataset claims this product/specification basis; otherwise declare the controlling market specification. |
| `energy_conversion` | electricity and thermal energy | Energy | kWh or MJ | Preserve metered units and conversion factors. Use 1 kWh = 3.6 MJ only for unit conversion, without treating electricity and fuel as environmentally equivalent. |
| `mass_balance_basis` | paddy, husked rice, husk, rejects, dust, and stock change | Mass | kg | Use measurements on a consistent moisture and time basis. Record opening/closing stocks and moisture change where they materially affect process mass balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Paddy rice received at the selected mill/factory gate with husk retained; supplier/origin, receipt mass, moisture, impurity status, and delivery period declared |
| starting_condition_role | Upstream product input to the foreground transformation; cultivation and off-site delivery burdens are supplied by linked upstream datasets |
| product_classification_scope | The output reference product is CPC 3.0 23162 Husked rice; the classification reference does not include paddy rice or milled/whitened rice in this PCR |
| recursive_input_rule | Purchased or transferred husked rice entering an included conditioning, storage, blending, or packaging step is recorded as a separate upstream product input and is not recursively regenerated by the dehusking inventory |
| upstream_dataset_requirement | Link a geographically and temporally representative paddy-rice supply dataset and separate datasets for purchased electricity, fuels, packaging, transport, and waste treatment where those flows cross the selected boundary |
| disclosure | Declare starting gate, output gate, included operations, outsourced operations, internal transfers, moisture basis, stock change, co-product destinations, packaging status, and any deviation from the default route |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_paddy_start` | foreground starting boundary | Begin the foreground transformation with received paddy that retains its husk; keep upstream cultivation and off-site paddy delivery in linked upstream datasets. | `codex-cxs-198-1995-rice` |
| `boundary_required_operations` | required foreground operations | Include paddy receipt/cleaning and dehusking/separation. Include all on-site energy, material inputs, husk, rejects, dust, and directly measured emissions attributable to those operations. |  |
| `boundary_conditional_operations` | conditioning, storage, and packaging | Include drying, aeration, storage, blending, and packaging only when performed before the declared output gate; disclose omitted or outsourced operations and link their datasets when they remain within the study boundary. |  |
| `boundary_product_exclusions` | product identity | Exclude intentional bran/germ removal, whitening, polishing, parboiling, cooking, and flour production from the reference-product process. | `codex-cxs-198-1995-rice` |
| `boundary_recursive_input` | same-category product inputs | Record externally supplied husked rice as an upstream input to the applicable downstream step and prevent recursive re-creation of its dehusking burdens. |  |
| `boundary_coproducts_and_waste` | husk, recovered rice, rejects, and dust | Measure all output fractions and classify each destination as co-product, waste, internal recycle, treatment, or disposal; do not omit a fraction because it has no revenue. | `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `paddy_receipt_and_cleaning` | Paddy receipt and cleaning | `required` | Always included for a dehusking route starting from paddy | Foreground receipt, weighing, screening, aspiration, and removal of foreign material | kg cleaned paddy transferred to dehusking |
| `dehusking_and_separation` | Dehusking and separation | `required` | Always included | Foreground removal of rice husk and separation of husked rice, husk, and rejects | 1 kg net conforming husked rice output |
| `conditioning_and_storage` | Conditioning and storage | `conditional` | Included when drying, aeration, tempering, storage, or blending occurs before the declared output gate | Foreground conditioning and inventory holding | kg conditioned husked rice released |
| `packaging` | Packaging | `conditional` | Included when product is packed before the declared output gate | Foreground packing into the declared market form | 1 kg net packaged husked rice, packaging excluded from reference mass |

### Process: Paddy receipt and cleaning (`paddy_receipt_and_cleaning`)

#### Inputs

##### Product flows

###### Paddy rice received with husk retained (`paddy_rice_input`)

Record all paddy entering the foreground, including supplier/origin, lot, receipt moisture, measured mass, and stock transfers. The flow is not the reference product.

- Selected flow: Paddy rice
- Flow property / unit: Mass / kg
- Amount rule: measured net receipt mass adjusted for documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net husked rice reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paddy_receipts`
- Range: Provisional paddy-to-husked-rice mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.10
  - Upper: 1.70
  - Unit: kg paddy/kg husked rice
  - Basis: received paddy mass per 1 kg net husked rice output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity for receipt and cleaning (`cleaning_electricity`)

Record metered or equipment-submetered electricity used for intake, conveying, screening, aspiration, and cleaning.

- Selected flow: Electricity, supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity attributable to receipt and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net husked rice reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_cleaning`
- Range: Provisional cleaning-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kWh/kg husked rice
  - Basis: electricity per 1 kg net husked rice output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned paddy transferred to dehusking (`cleaned_paddy_output`)

Calculate the internal transfer from measured receipts, removed foreign matter, dust, moisture change, and stock change. Do not count this internal transfer as a co-product.

- Selected flow: Cleaned paddy rice
- Flow property / unit: Mass / kg
- Amount rule: calculated mass transferred to `dehusking_and_separation`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net husked rice reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paddy_receipts`
- Sources: `mass-balance-identity`
- Range: Provisional cleaned-paddy yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.85
  - Upper: 1.00
  - Unit: kg/kg paddy received
  - Basis: cleaned paddy transferred per kg paddy received
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed stones, straw, soil, and other foreign matter (`cleaning_rejects`)

Measure rejects removed by screens, destoners, magnets, or manual sorting and record treatment or disposal destination.

- Selected flow: Grain-cleaning rejects
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg paddy received
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_outputs_cleaning`
- Range: Provisional cleaning-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg paddy received
  - Basis: cleaning rejects per kg paddy received
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Dehusking and separation (`dehusking_and_separation`)

#### Inputs

##### Product flows

###### Cleaned paddy input (`cleaned_paddy_input`)

Record the measured internal transfer from cleaning, reconciled to the preceding process output.

- Selected flow: Cleaned paddy rice
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled internal-transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net husked rice reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dehusking_mass_outputs`
- Range: Provisional cleaned-paddy input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.10
  - Upper: 1.70
  - Unit: kg/kg husked rice
  - Basis: cleaned paddy input per 1 kg net husked rice output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity for dehusking and separation (`dehusking_electricity`)

Record electricity used by huskers, separators, aspiration, conveying, and associated controls.

- Selected flow: Electricity, supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity attributable to dehusking and separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net husked rice reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_dehusking`
- Range: Provisional dehusking-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.20
  - Unit: kWh/kg husked rice
  - Basis: electricity per 1 kg net husked rice output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Husked rice reference product (`husked_rice_output`)

Record net conforming husked rice after separation. The product has only the husk removed; intentional bran or germ removal is excluded.

- Selected flow: Husked rice `f762700e-8463-40fa-a164-0ecd28c744d6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming reference product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-198-1995-rice`
- Range: Reference-flow normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: net conforming husked rice per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Separated rice husk (`rice_husk_output`)

Measure separated husk and declare whether it is sold, used internally, transferred without value, treated, or disposed. Classification as co-product or waste follows the documented destination and governing study rules.

- Selected flow: Rice husk
- Flow property / unit: Mass / kg
- Amount rule: measured husk mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net husked rice reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_outputs_dehusking`
- Range: Provisional husk-output mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.10
  - Upper: 0.50
  - Unit: kg/kg husked rice
  - Basis: separated husk per 1 kg net husked rice output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Broken kernels, fines, and off-specification rice (`rice_fines_and_rejects`)

Measure non-conforming rice fractions separately from husk and record recovery, reprocessing, feed use, treatment, or disposal.

- Selected flow: Rice fines and off-specification kernels
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net husked rice reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_outputs_dehusking`
- Range: Provisional fines-and-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg husked rice
  - Basis: fines and rejects per 1 kg net husked rice output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured particulate matter released to air (`particulate_to_air`)

Include this row when dehusking or aspiration vents directly to air. Use stack/ambient measurements or an explicitly documented emission calculation; material captured in filters remains a waste output, not an elementary emission.

- Selected flow: Particulate matter, to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated release from collected operating records and a declared factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net husked rice reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Range: Provisional particulate-release screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg husked rice
  - Basis: uncaptured particulate release per 1 kg net husked rice output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Conditioning and storage (`conditioning_and_storage`)

#### Inputs

##### Product flows

###### Husked rice entering conditioning or storage (`conditioning_rice_input`)

Record the internal transfer or separately purchased husked rice. Purchased same-category input must retain its upstream dataset and must not be treated as internally produced.

- Selected flow: Husked rice
- Flow property / unit: Mass / kg
- Amount rule: measured input mass and origin by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned husked rice released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_and_moisture`

###### Electricity for drying, aeration, conveying, and storage (`conditioning_electricity`)

Include when conditioning or storage occurs before the declared output gate.

- Selected flow: Electricity, supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity attributable to the included lot and storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned husked rice released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_conditioning`
- Range: Provisional conditioning-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kWh/kg conditioned husked rice
  - Basis: conditioning and storage electricity per kg product released
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased thermal energy or fuel (`conditioning_thermal_energy`)

Include when thermal drying is used. Preserve the purchased energy-carrier identity and link its supply dataset; if fuel is combusted on-site, add fuel-specific direct emissions using documented factors or measurements in the concrete dataset.

- Selected flow: Thermal energy carrier or fuel, technology-specific
- Flow property / unit: Energy / MJ
- Amount rule: measured purchased energy or fuel converted to lower/heating-value energy with the declared basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned husked rice released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_conditioning`
- Range: Provisional thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg conditioned husked rice
  - Basis: purchased thermal energy per kg product released
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned husked rice (`conditioned_husked_rice_output`)

Record product released from conditioning/storage with mass, moisture, release date, and storage loss reconciled.

- Selected flow: Husked rice
- Flow property / unit: Mass / kg
- Amount rule: measured net released mass; use as the reference output when this is the declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned husked rice released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_and_moisture`
- Sources: `codex-cxs-198-1995-rice`

##### Waste flows

###### Storage loss and removed off-specification product (`conditioning_loss`)

Record measured mass lost or removed during conditioning/storage and its destination.

- Selected flow: Off-specification husked rice or storage loss
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured input, output, stock change, sampling removals, and moisture change; reconcile with physical records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned husked rice released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass_and_moisture`
- Sources: `mass-balance-identity`
- Range: Provisional conditioning-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg conditioned husked rice
  - Basis: storage and conditioning loss per kg product released
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Packaging (`packaging`)

#### Inputs

##### Product flows

###### Husked rice entering packaging (`packaging_rice_input`)

Record the measured product mass entering the packaging line and reconcile it with packaged output, spills, samples, and stock change.

- Selected flow: Husked rice
- Flow property / unit: Mass / kg
- Amount rule: measured net product input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged husked rice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-line rice-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.00
  - Upper: 1.10
  - Unit: kg/kg net packaged husked rice
  - Basis: rice input per 1 kg net packaged product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary and secondary packaging materials (`packaging_materials`)

Record each material and component separately, including bags, liners, labels, closures, cartons, and pallets when within the declared gate.

- Selected flow: Packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued mass less documented unused return, normalized to packed product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged husked rice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg net packaged husked rice
  - Basis: packaging materials per kg net product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged husked rice (`packaged_husked_rice_output`)

Record net rice mass separately from packaging mass. Use this as the reference output when the declared gate is packaged product.

- Selected flow: Husked rice `f762700e-8463-40fa-a164-0ecd28c744d6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net husked rice after normalization; packaging excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-198-1995-rice`
- Range: Reference-flow normalization identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: net packaged husked rice per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Packaging scrap and spilled product (`packaging_scrap`)

Record packaging offcuts, damaged containers, and spilled rice separately by material and destination.

- Selected flow: Packaging scrap and spilled product, material-specific
- Flow property / unit: Mass / kg
- Amount rule: measured scrap and spill mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged husked rice
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-scrap screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg/kg net packaged husked rice
  - Basis: packaging scrap and spilled product per kg net product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all multifunctional foreground operations | First avoid allocation through process subdivision, separate metering, and physical tracking of husked rice, husk, recovered kernels, and waste destinations. | `iso-14044-2006` |
| `allocation_husk` | rice husk and any other co-product leaving the system | When subdivision cannot resolve shared burdens, use a documented physical relationship that reflects the underlying process. Mass allocation may be used only when justified for the declared goal and scope; record wet/dry basis and moisture. | `iso-14044-2006` |
| `allocation_waste` | outputs classified as waste | Do not assign co-product credit solely because a waste is transferred. Model treatment and any accepted recycling, recovery, or substitution convention consistently with the governing study method and disclose it. | `iso-14044-2006` |
| `allocation_internal_use` | husk or fines used on-site | Keep internal use visible: record the material output and its receiving process input, then prevent double counting of avoided purchased energy or material. | `mass-balance-identity` |
| `allocation_sensitivity` | material allocation choices | Report allocation method, allocated shares, co-product status and destination, and a sensitivity case when a plausible alternative materially changes the reference-product result. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_paddy_receipts` | `paddy_receipt_and_cleaning` | paddy input and cleaned-paddy transfer | weighbridge, scale, lot, moisture, impurity, and stock records | timestamp; supplier/origin; lot_id; gross_mass; tare_mass; net_mass; moisture_percent; impurity_percent; opening_stock; closing_stock | calibrated weighbridge/scale plus representative moisture and impurity sampling | kg; % m/m | each receipt and each internal transfer | full reporting period, with seasonal campaigns represented | every included facility and outsourced cleaning operation | sum net mass by lot and period; reconcile transfers and stock change; normalize to net reference output | calibration certificate; sampling plan; weigh tickets; stock reconciliation |
| `cp_process_energy_cleaning` | `paddy_receipt_and_cleaning` | cleaning electricity | utility meter, submeter, and equipment log | meter_id; opening_reading; closing_reading; unit; allocation_driver; operating_hours | prefer process submetering; otherwise reconcile facility totals and document allocation | kWh | each batch/campaign or at least monthly | full reporting period | every included receipt and cleaning line | subtract non-production uses; allocate only documented shared energy; normalize to reference output | meter calibration; invoices; meter photos/exports; allocation worksheet |
| `cp_residue_outputs_cleaning` | `paddy_receipt_and_cleaning` | cleaning rejects | scale tickets, container counts with verified mass, transfer notes, and treatment records | date; lot_id; material_class; gross_mass; tare_mass; net_mass; moisture_percent_if_material; destination; disposition | weigh each cleaning-reject stream or use verified container mass and periodic checks | kg; % m/m | each transfer or batch | full reporting period | all included cleaning-residue collection points | sum by material and destination; reconcile to cleaning mass balance | scale calibration; transfer receipt; treatment record; photographs or sampling record where relevant |
| `cp_process_energy_dehusking` | `dehusking_and_separation` | dehusking electricity | utility meter, submeter, and equipment log | meter_id; opening_reading; closing_reading; unit; allocation_driver; operating_hours | prefer process submetering; otherwise reconcile facility totals and document allocation | kWh | each batch/campaign or at least monthly | full reporting period | every included dehusking and separation line | subtract non-production uses; allocate only documented shared energy; normalize to reference output | meter calibration; invoices; meter photos/exports; allocation worksheet |
| `cp_residue_outputs_dehusking` | `dehusking_and_separation` | husk, fines, and off-spec product | scale tickets, container counts with verified mass, transfer notes, sales/treatment records | date; lot_id; material_class; gross_mass; tare_mass; net_mass; moisture_percent_if_material; destination; disposition | weigh each dehusking residue stream or use verified container mass and periodic checks | kg; % m/m | each transfer or batch | full reporting period | all included dehusking-residue collection points | sum by material and destination; reconcile to dehusking mass balance | scale calibration; transfer receipt; buyer/treatment record; photographs or sampling record where relevant |
| `cp_dehusking_mass_outputs` | `dehusking_and_separation` | cleaned paddy input and husked-rice output | inlet/outlet scale, production log, laboratory quality result, and stock record | batch_id; input_mass; output_mass; moisture_in; moisture_out; bran_removal_or_milling_state; start_time; end_time; opening_stock; closing_stock | calibrated mass measurement and lot-linked quality sampling | kg; % m/m | each production batch or continuous-run shift | full reporting period | every included dehusking line | reconcile input/output and stocks; normalize net conforming output to 1 kg | calibration; batch log; moisture result; product specification/inspection record |
| `cp_air_emissions` | `dehusking_and_separation` | particulate released to air | stack test, dust-collector record, operating hours, material throughput, and factor documentation | emission_point; pollutant_identity; measured_concentration_or_factor; gas_flow_or_throughput; operating_time; control_efficiency; method | direct compliant measurement preferred; otherwise documented calculation tied to collected activity | kg pollutant; method-native units | per test and operating period | representative operating conditions within reporting period | every material emission point | calculate released mass by emission point and normalize to reference output; keep captured dust in waste outputs | test report; instrument calibration; factor provenance; control-device maintenance log |
| `cp_conditioning_mass_and_moisture` | `conditioning_and_storage` | conditioned product and storage loss | batch mass, moisture tests, silo/bin stock, temperature/aeration, and release records | lot_id; input_mass; output_mass; moisture_in; moisture_out; opening_stock; closing_stock; storage_days; rejected_mass | calibrated mass measurement, representative moisture sampling, and stock reconciliation | kg; % m/m; day | each lot transfer; stock at least monthly | entire included storage/conditioning interval | each included dryer, bin, warehouse, or contractor | reconcile product, moisture change, removals, and stock; normalize to released product | calibration; laboratory/moisture-meter checks; inventory count; release certificate |
| `cp_process_energy_conditioning` | `conditioning_and_storage` | conditioning electricity and purchased thermal energy | utility meter, submeter, fuel invoice, tank/stock, and equipment log | meter_id; opening_reading; closing_reading; fuel_quantity; unit; heating_value_basis; allocation_driver; operating_hours | prefer process submetering; otherwise reconcile facility totals and document allocation | kWh; MJ; fuel-native unit | each batch/campaign or at least monthly | entire included storage/conditioning interval | each included dryer, bin, warehouse, or contractor | subtract non-production uses; allocate only documented shared energy; normalize to conditioned product | meter calibration; invoices; meter photos/exports; allocation worksheet |
| `cp_packaging_records` | `packaging` | rice input/output, packaging material, and scrap | packaging bill of materials, issue/return records, packed-unit count, net-content checks, scrap and spill logs | package_type; material; unit_mass; units_used; unused_return; product_input; net_product_output; scrap_mass; spill_mass | verified BOM plus scale/count records and periodic net-content checks | kg; item | each packaging run | full reporting period | every included packaging line | calculate actual packaging consumption and reconcile rice input/output; exclude packaging from reference mass | supplier specification; scale calibration; issue/return record; net-content inspection |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period flow amount / net conforming husked-rice mass at the declared output gate | period flow amount; net conforming output mass | amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_stock_adjusted_input` | paddy and intermediate product transfers | consumed input = receipts + opening stock − closing stock − documented transfers out | receipts; opening stock; closing stock; transfers | stock-adjusted process input | `mass-balance-identity` |
| `calc_dry_matter` | optional moisture-normalized comparison | dry mass = as-received mass × (1 − moisture_percent/100); report alongside, never instead of, the commercial 1 kg reference mass unless the study explicitly changes the functional basis | mass; moisture_percent | dry matter mass | `mass-balance-identity` |
| `calc_process_mass_balance` | cleaning, dehusking, conditioning, and packaging | reconcile measured mass inputs with products, co-products, wastes, moisture change, and stock change; investigate and disclose unexplained imbalance rather than forcing closure | measured inputs; outputs; moisture; stocks | mass-balance statement and unexplained difference | `mass-balance-identity` |
| `calc_energy_normalization` | purchased electricity and thermal energy | energy per reference flow = attributable metered energy / net conforming output mass; retain original carrier and conversion basis | meter/invoice values; allocation driver; output mass | kWh or MJ per kg reference flow | `mass-balance-identity` |
| `calc_allocation_share` | unavoidable shared burdens | allocated burden = shared burden × documented allocation share; shares across all co-products must sum to 1 on the same physical and moisture basis | shared burden; co-product quantities; selected physical relation | burden assigned to husked rice and each co-product | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate that only the husk is intentionally removed; record any whitening/polishing equipment or operation as out of scope and do not label its output as this reference product. | process flow diagram; equipment list; product specification; lot inspection; `codex-cxs-198-1995-rice` |
| `dq_measurement` | mass, moisture, and energy | Use calibrated or verified instruments, retain raw readings, and document sampling and unit conversions. | calibration certificates; meter records; laboratory or moisture-meter checks |
| `dq_temporal` | foreground reporting period | Cover a representative production period including material seasonal or campaign variation; if less than a full operating year is used, justify representativeness and disclose exclusions. | production calendar; monthly/batch coverage table; representativeness statement |
| `dq_geographic_technology` | paddy supply and processing | Declare country/region, facility, dehusking technology, conditioning route, energy supply, and outsourced operations. | supplier records; facility description; equipment records; dataset metadata |
| `dq_completeness` | all included processes | Reconcile paddy, product, husk, rejects, dust, moisture effects, and stock change; list missing flows and estimation methods explicitly. | mass-balance worksheet; completeness checklist; exception log |
| `dq_source_provenance` | secondary data and calculated emissions | Record dataset/factor identity, version/date, geography, technology, unit basis, and replacement rationale. | source register; calculation workbook; review record |
| `dq_provisional_ranges` | all `reasoned_estimate` ranges | Treat provisional ranges only as QA screens. Replace them with representative measured values and reviewed source-backed evidence; do not use them as automatic substitutions without disclosure. | foreground records; source update; methodology review decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | product identity and scope | Confirm the product is husked rice with the husk removed and bran normally retained. Reject paddy rice, intentionally milled/whitened rice, parboiled rice, and further-processed rice products. | `codex-cxs-198-1995-rice` |
| `validation_reference_flow` | quantitative reference | Require exactly 1 kg net husked rice using product-flow UUID `f762700e-8463-40fa-a164-0ecd28c744d6`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validation_qualifiers` | reference product metadata | Require every reference-flow qualifier, including dehusking state, gate, moisture basis, origin, technology, conditioning/packaging status, grade/specification, and production period. | `codex-cxs-198-1995-rice` |
| `validation_process_completeness` | process inventory | Require `paddy_receipt_and_cleaning` and `dehusking_and_separation`; require conditional process sections when those operations occur before the declared gate. |  |
| `validation_mass_balance` | each foreground process and reporting period | Require a documented mass balance including inputs, products, husk, wastes, moisture change, and stock change; unresolved imbalance must be quantified and disclosed. | `mass-balance-identity` |
| `validation_moisture_and_quality` | direct-human-consumption product claiming Codex conformity | Verify moisture is no more than 15% m/m and check applicable extraneous-matter limits for husked rice; otherwise verify and disclose the controlling market specification. | `codex-cxs-198-1995-rice` |
| `validation_allocation` | multifunctional operations | Require subdivision evidence or a justified allocation method, same-basis shares summing to 1, co-product destinations, and sensitivity disclosure when material. | `iso-14044-2006` |
| `validation_provisional_ranges` | provisional QA screens | Flag values outside a `reasoned_estimate` QA guardrail for review, but do not replace measured data or fail conformance solely because a provisional unsourced range is exceeded. |  |
| `validation_source_traceability` | non-foreground factors and datasets | Require stable identity, version/date, geography, technology, unit basis, and calculation linkage for each external dataset or factor used by the completed data package. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for husked rice at a declared mill/factory gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, quality review, and publication |
| allowed_use | LCI/LCA studies requiring non-parboiled husked rice with compatible geography, period, technology, moisture basis, product specification, gate, and allocation method |
| excluded_use | Proxy for paddy cultivation alone; proxy for semi-/wholly milled, whitened, polished, parboiled, cooked, or flour products; unqualified substitution across materially different moisture, technology, or co-product allocation conditions |
| required_metadata | PCR id/version; Tiangong flow UUID; CPC reference; normative and Tiangong Chinese names; declared gates; geography; period; facility/technology; paddy origin; moisture and impurity basis; grain class/variety when known; grade/specification; conditioning and packaging status; allocation method; co-product destinations; upstream dataset identities |
| required_quality_disclosure | Measurement and calibration coverage; temporal/geographic/technology representativeness; mass-balance result; missing or estimated flows; provisional-range exceedances; secondary-data provenance; allocation sensitivity; review status |
| update_trigger | Material change in paddy source, product definition, dehusking/conditioning technology, output gate, energy supply, co-product destination or allocation, packaging, applicable specification, or a new reviewed source replacing a provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-198-1995-rice` | `standard` | Codex Alimentarius, CXS 198-1995, *Standard for Rice*, official PDF: https://www.fao.org/input/download/standards/61/CXS_198e.pdf (retrieved 2026-08-11) | Product definition; distinction among paddy, husked, and milled rice; direct-human-consumption moisture and extraneous-matter quality basis |
| `iso-14044-2006` | `standard` | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, official record: https://www.iso.org/standard/38498.html (confirmed current in 2022; retrieved 2026-08-11) | LCA/LCI goal and scope, inventory, allocation, reporting, limitations, and review framework |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass identity applied to measured process inputs, outputs, moisture change, and stock change; no external numeric factor | Process reconciliation, stock adjustment, internal transfers, normalization, and co-product share checks |
