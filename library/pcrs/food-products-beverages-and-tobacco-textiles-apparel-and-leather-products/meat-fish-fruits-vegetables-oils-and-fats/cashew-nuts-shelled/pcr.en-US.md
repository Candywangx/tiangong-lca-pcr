---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cashew-nuts-shelled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cashew nuts, shelled

## 1. Scope and Applicability

This PCR covers foreground production of edible cashew kernels from received cashew nuts in shell through kernel release, shelling, drying or conditioning as needed, peeling, grading, and packing at the production-site gate. It applies to whole, broken, or otherwise graded shelled cashew kernels whose lot identity, quality state, and packing form are declared.

It excludes cashew cultivation and harvest, manufacture of purchased utilities and packaging, transport before receipt and after the site gate, retail, consumer preparation, and end-of-life. These excluded stages may enter a downstream life-cycle model through separately referenced datasets. Flavoured, coated, formulated, or further-roasted snack products and cashew paste, butter, flour, oil, and beverages are outside the category. The UNECE source supports kernel identity and quality, measurement, and packing qualifiers only; it does not provide default LCI amounts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cashew-nuts-shelled |
| classification_refs | CPC 3.0: 21424, Cashew nuts, shelled (`unsd-cpc-3-0-21424`) |
| covered_products | Edible cashew kernels separated from the shell and supplied whole, broken, or in a declared kernel grade, including raw or process-conditioned kernels that have not been formulated with other food ingredients |
| excluded_products | Cashew nuts in shell; flavoured, coated, formulated, or snack-roasted products; cashew paste, butter, flour, oil, beverages, and non-edible shell-derived products |
| representative_product | Packed edible cashew kernels meeting the producer's declared commercial grade and lot specification |
| production_route | Received in-shell nuts -> one declared kernel-release conditioning route -> shelling and separation -> drying/peeling/grading -> packing |
| market_state | Factory-gate packed kernels; kernel form, grade, moisture or conditioning state, packing material, pack size, and atmosphere treatment declared |

Kernel identity and the quality, measurement, and packing descriptors are based on `unece-ddp-17-cashew-kernels-2023`. They are product qualifiers, not quantitative inventory defaults.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production and packing of edible shelled cashew kernels with a declared kernel form and commercial quality state |
| How much | 1 kg net mass of packed cashew kernels, excluding transport packaging not sold with the product |
| How well | Conforming to the producer's declared grade and lot specification, with defects, moisture or conditioning state, and packing condition reported |
| How long or cycle | One identified production lot or campaign; no storage service duration is included beyond on-site processing and packing |
| reference_flow_link | Net conforming packed-kernel output from `kernel_packing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cashew nuts, shelled `8e888f2c-671c-44bf-8607-1bde41ac66b8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | kernel form and grade; lot or campaign identifier; origin and supplier-lot traceability of received nuts; kernel-release conditioning route; moisture or conditioning state and measurement basis; defect and reject basis; packing material and pack size; vacuum or protective-atmosphere treatment; net-mass basis; co-product and waste disposition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `MU-01` | reference product and all mass-balance rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net mass on the stated as-supplied basis. Exclude pallets and transport packaging from the reference amount, and report their masses as separate inputs. |
| `MU-02` | received nuts, kernels, rejects, and residues | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain weighed mass, measurement time, and moisture or conditioning state. Do not convert between as-received and dry-matter mass unless measured moisture and the conversion formula are reported. |
| `MU-03` | electricity, fuel, purchased heat, and generated steam | Energy appropriate to the selected flow | kWh or MJ | Preserve the invoiced or metered energy unit and conversion factor. Do not add steam, fuel input, and derived useful heat as simultaneous energy inputs for the same route unless each represents a distinct, non-overlapping boundary crossing. |
| `MU-04` | packaging reported by item count | Mass for inventory normalization | kg | Convert item counts to packaging mass using lot-specific item count and verified unit mass; retain both raw fields and identify primary, secondary, and transport packaging separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received cashew nuts in shell, identified by supplier lot and recorded mass and moisture or conditioning state |
| starting_condition_role | Upstream agricultural and post-harvest production is represented by the linked input dataset; the foreground starts at production-site receipt |
| product_classification_scope | Edible cashew kernels within the semantic scope of CPC 3.0 subclass 21424; the CPC reference is classification context, not canonical identity |
| recursive_input_rule | Purchased shelled kernels or returned same-category kernels must remain explicit inputs. Reworked on-site kernels are tracked by lot and netted from gross intermediate output so the same material is not counted recursively. |
| upstream_dataset_requirement | Link received in-shell nuts, utilities, auxiliary materials, and packaging to representative upstream datasets with geography, technology, time, and allocation compatibility disclosed |
| disclosure | Declare site, period, lot aggregation, input origin, conditioning route, on-site combustion, drying and peeling technology, grade, packing configuration, storage included within the gate, co-product disposition, waste treatment, allocation, and all provisional-estimate replacements |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `SB-01` | foreground system | Include receipt through packed conforming kernel at the production-site gate, including internal handling, kernel-release conditioning, shelling, separation, drying or conditioning, peeling, grading, and packing when performed for the declared lot. | `eu-pef-2021-2279` |
| `SB-02` | upstream and downstream stages | Represent purchased inputs by linked upstream datasets. Exclude cultivation, off-site transport after the gate, retail, use, and end-of-life from this foreground unit process and disclose any downstream model that adds them. | `eu-pef-2021-2279` |
| `SB-03` | kernel-release conditioning | Assign each lot to exactly one primary conditioning branch: steam/wet-heat, dry-heat/roasting, hot-oil, or another documented route. If a site uses multiple routes, split their records and outputs into separate unit processes or route-specific datasets; do not apply mutually exclusive branches simultaneously to one lot. |  |
| `SB-04` | emissions and waste treatment | Include on-site emissions and waste treatment within the gate when generated or operated on site; otherwise link the exported waste or treatment service and disclose the receiving route. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `kernel_release_shelling` | Kernel-release conditioning, shelling, and separation | required | Apply one and only one declared conditioning branch to each lot; route-specific inputs not used by that branch are zero and omitted | foreground production | mass of separated edible kernel leaving the process |
| `kernel_finishing` | Kernel drying or conditioning, peeling, and grading | required | Include each operation actually performed; record bypassed unit operations as not applicable rather than simultaneous alternative routes | foreground production and quality finishing | mass of conforming graded kernel leaving the process |
| `kernel_packing` | Kernel packing | required | Include the declared pack configuration; vacuum and protective-atmosphere branches are mutually exclusive unless distinct packs are modelled separately | foreground packing | 1 kg net packed conforming kernel |

### Process: Kernel-release conditioning, shelling, and separation (`kernel_release_shelling`)

#### Inputs

##### Product flows

###### Received cashew nuts in shell (`received_in_shell_nuts`)

Received in-shell nuts cross the foreground gate as the principal material input. Their supplier lot, origin, measured mass, and moisture or conditioning state are retained.

- Selected flow: Cashew nuts in shell
- Flow property / unit: Mass / kg
- Amount rule: measured received mass assigned to the processed lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Range: Conditional provisional screening range; use only for candidate QA and replace when a complete representative campaign provides reviewed mass-balance evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 10
  - Unit: kg/kg net packed kernel
  - Basis: received in-shell nut mass per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route-specific conditioning utilities (`conditioning_utilities`)

Record the actual electricity, fuel, purchased heat, steam, or hot oil crossing the boundary for the selected conditioning branch. Create separate inventory exchanges for distinct carriers; the normalized row is a compact role pattern and never authorizes simultaneous mutually exclusive branches.

- Selected flow: Site-selected energy carrier, purchased heat, or process utility
- Flow property / unit: Energy / MJ, preserving original kWh or fuel-unit records and conversions
- Amount rule: metered, invoiced, or stock-balance use assigned only to the declared conditioning route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg separated edible kernel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Conditional provisional screening range; use only when route records are incomplete and replace when route-specific metering or reconciled purchase records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg separated kernel
  - Basis: aggregate purchased energy crossing the boundary per 1 kg separated edible kernel, without double counting derived heat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water (`conditioning_water`)

Include water only for the selected branch when it is supplied to soaking, steaming, cleaning, or other documented conditioning. A route with no water input records the row as not applicable.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured or metered water assigned to the lot and selected route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg separated edible kernel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Conditional provisional screening range; use only for candidate QA and replace when route-specific water measurements are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg separated kernel
  - Basis: water supplied per 1 kg separated edible kernel
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separated edible kernels (`separated_kernel_output`)

This intermediate is the weighed kernel mass transferred to finishing, before final grading and packing.

- Selected flow: Cashew kernel, ungraded intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to the lot mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed lot-level kernel-yield records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg net packed kernel
  - Basis: separated edible kernel transferred per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shells and testa recovered as co-product (`shell_residue_coproduct`)

Record only the measured fraction intentionally sold or supplied for a documented beneficial use. The same mass must not also appear as waste.

- Selected flow: Cashew shells and testa, declared co-product
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched co-product mass by lot and receiving use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_disposition`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed disposition and mass-balance records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 9
  - Unit: kg/kg net packed kernel
  - Basis: co-product shell and testa mass per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shells and testa sent as waste (`shell_residue_waste`)

Record only the measured fraction transferred to waste management. For each residue fraction, co-product and waste dispositions are mutually exclusive.

- Selected flow: Cashew shells and testa waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by lot and documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_disposition`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed disposition and mass-balance records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 9
  - Unit: kg/kg net packed kernel
  - Basis: waste shell and testa mass per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Route-specific direct emissions (`conditioning_direct_emissions`)

When fuel or hot-oil systems produce emissions on site, report each elementary flow separately using a reviewed factor or direct measurement. Omit this pattern only when no direct release occurs within the foreground boundary.

- Selected flow: Pollutant-specific elementary flow selected for the declared route
- Flow property / unit: Mass / kg
- Amount rule: measured release or actual fuel use multiplied by a disclosed, reviewed pollutant-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg separated edible kernel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Range: Conditional provisional screening range; use only to flag candidate records and replace when route-specific measurements or reviewed factors are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg per pollutant/kg separated kernel
  - Basis: each pollutant is screened separately per 1 kg separated edible kernel
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Kernel drying or conditioning, peeling, and grading (`kernel_finishing`)

#### Inputs

##### Product flows

###### Separated edible kernels received for finishing (`finishing_kernel_input`)

Record the weighed transfer from shelling to avoid treating internal output as newly produced material.

- Selected flow: Cashew kernel, ungraded intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass matched to `separated_kernel_output`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed lot-level transfer records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg net packed kernel
  - Basis: finishing input per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing utilities (`finishing_utilities`)

Record electricity, fuel, purchased heat, compressed air, or other material utilities actually used for drying or conditioning, peeling, sorting, and grading. Separate distinct carriers in the implemented inventory.

- Selected flow: Site-selected electricity, energy carrier, purchased heat, or material utility
- Flow property / unit: Energy / MJ for energy; carrier-specific unit for non-energy utilities
- Amount rule: metered, invoiced, or stock-balance use assigned to the finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming graded kernel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Conditional provisional screening range; use only when finishing records are incomplete and replace when process-specific metering or reconciled purchase records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ/kg conforming graded kernel
  - Basis: aggregate purchased energy crossing the boundary per 1 kg conforming graded kernel, without double counting derived energy
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming graded kernels (`graded_kernel_output`)

Record kernels accepted for the declared form and grade and transferred to packing.

- Selected flow: Cashew nuts, shelled `8e888f2c-671c-44bf-8607-1bde41ac66b8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass after grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_output_records`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed grade-yield records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg net packed kernel
  - Basis: conforming graded kernel transferred per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-grade kernels recovered as co-product (`off_grade_kernel_coproduct`)

Record the measured off-grade fraction as a co-product only when it is intentionally sold or transferred for a documented product use. Do not also record the same fraction as waste.

- Selected flow: Off-grade cashew kernel, declared co-product
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass by lot and receiving use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_disposition`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed disposition and grade-yield records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net packed kernel
  - Basis: off-grade kernel co-product per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Off-grade kernels and peelings sent as waste (`finishing_reject_waste`)

Record measured rejects and peelings sent to waste treatment. Any recovered product fraction is excluded from this row and recorded under its product disposition.

- Selected flow: Cashew kernel reject and peeling waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by lot and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_disposition`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed disposition and grade-yield records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net packed kernel
  - Basis: finishing reject and peeling waste per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Kernel packing (`kernel_packing`)

#### Inputs

##### Product flows

###### Conforming graded kernel input (`packing_kernel_input`)

Record the weighed kernel transfer into the declared packing configuration.

- Selected flow: Cashew nuts, shelled `8e888f2c-671c-44bf-8607-1bde41ac66b8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass entering packing, reconciled with packed output and packing-stage losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_output_records`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed packing mass-balance records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg net packed kernel
  - Basis: graded kernel entering packing per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material separately from verified purchase, issue, or item-count records. Transport packaging is included only when it crosses the declared factory gate with the product and is reported separately.

- Selected flow: Material-specific packaging flow
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass or item count multiplied by verified unit mass for each packaging layer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Range: Conditional provisional screening range; use only for candidate QA and replace when reviewed pack-specific issue and unit-mass records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg/kg net packed kernel
  - Basis: total packaging material mass per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packing electricity and atmosphere gas (`packing_utilities`)

Record packing electricity and, only for the selected pack branch, vacuum-system use or protective-atmosphere gas. Vacuum and protective-atmosphere gas are not applied simultaneously unless separate pack outputs are modelled.

- Selected flow: Electricity and declared packing-atmosphere gas as separate implemented exchanges
- Flow property / unit: Energy / MJ for electricity; Mass / kg for atmosphere gas
- Amount rule: metered or allocated electricity and purchased gas stock balance assigned by pack output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Conditional provisional screening range; use only when packing utility records are incomplete and replace when pack-line metering or reconciled purchase records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: MJ-equivalent/kg net packed kernel
  - Basis: separately reported packing electricity and gas normalized to 1 kg net packed conforming kernel; do not sum unlike physical flows in the implemented inventory
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed shelled cashew kernels (`packed_kernel_reference_output`)

This is the declared reference product after net-mass verification and release against the stated lot and grade specification.

- Selected flow: Cashew nuts, shelled `8e888f2c-671c-44bf-8607-1bde41ac66b8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming packed product for the normalized dataset
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021-2279`
- Range: Declared reference equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: normalized reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Packing rejects and packaging scrap (`packing_waste`)

Record kernels rejected at packing and packaging material discarded on site, separated by actual material and treatment destination.

- Selected flow: Material-specific packing waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packed conforming kernel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_disposition`
- Range: Conditional provisional screening range; use only for candidate QA and replace after reviewed packing loss and waste records are available
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg net packed kernel
  - Basis: packing reject and packaging scrap mass per 1 kg net packed conforming kernel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `AL-01` | all shared operations | Prefer process subdivision, route-separated metering, and direct assignment of inputs, emissions, and wastes to lots or product grades before allocation. | `eu-pef-2021-2279` |
| `AL-02` | shells, testa, off-grade kernels, and peelings | Classify each measured fraction once as internal reuse, product/co-product, or waste according to documented disposition. Never report the same mass simultaneously as co-product and waste. |  |
| `AL-03` | unavoidable shared burdens with co-products | Use a documented physical causal relationship when it represents the process. If no defensible physical relationship exists, use contemporaneous net economic values and disclose prices, period, geography, and sensitivity. No default allocation factor is prescribed. | `eu-pef-2021-2279` |
| `AL-04` | waste and exported residues | Assign on-site handling and treatment burdens to the foreground process. Do not claim avoided-product or recycling credits unless a separately declared downstream modelling method and substitution evidence are provided. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `kernel_release_shelling`; `kernel_finishing` | received material, internal transfers, kernels, shells, peelings, and rejects | weighbridge, calibrated scale, batch sheet | lot_id; route_id; timestamp; gross_mass; tare_mass; net_mass; moisture_or_conditioning_state; destination | weigh every received lot and material transfer; reconcile transfers and stock change | kg | each lot and transfer | representative production campaign covering normal route operation | each production site and route | sum net masses by lot and route; retain opening and closing stock before normalization | scale calibration; signed batch record; lot traceability; reconciliation record |
| `cp_utility_records` | all processes | electricity, fuels, purchased heat, steam, water, compressed air, atmosphere gas | submeter, invoice, tank or cylinder stock balance, operating log | meter_start; meter_end; purchase_quantity; opening_stock; closing_stock; route_id; operating_hours; allocation_driver | prefer route or line metering; otherwise reconcile purchases and stock and allocate with a disclosed causal driver | original unit plus MJ for energy and kg for mass | meter reading each shift or lot; invoice and stock reconciliation monthly | same period as production output, covering normal operation and material start-up or shutdown events | each site, route, and packing line | subtract closing from opening plus purchases; assign to route; convert units once; normalize to matching process output | meter calibration; invoices; conversion factors; allocation worksheet |
| `cp_residue_disposition` | all processes | co-products, internal reuse, rejects, waste, and treatment routes | scale ticket, dispatch note, waste manifest, internal transfer record | lot_id; material_type; mass; disposition_class; recipient; treatment; date | weigh each disposition and link it to the originating lot or campaign | kg | each dispatch or internal transfer | same campaign as product mass balance | each site and receiving route | aggregate by material and mutually exclusive disposition; reconcile with mass balance | scale calibration; dispatch or waste document; recipient evidence |
| `cp_quality_and_output_records` | `kernel_finishing`; `kernel_packing` | conforming grade, moisture or conditioning state, defects, pack release, and net output | laboratory or production quality record, packing check, calibrated scale | lot_id; kernel_form; grade; test_method; sample_plan; moisture_or_conditioning_result; defect_result; pack_size; net_mass; release_status | sample and assess the lot under the declared specification; weigh released output | kg plus method-specific quality units | each released lot | all lots included in the dataset period | each site, grade, and packing configuration | retain lot results; sum released net mass only; do not merge incompatible grades or states without disclosure | test method; sampling record; instrument calibration; release authorization |
| `cp_packaging_records` | `kernel_packing` | primary, secondary, and transport packaging | purchase or issue record, bill of materials, item count and unit-mass test | material_id; layer; item_count; unit_mass; issued_mass; returned_mass; pack_output_mass | weigh issued material or multiply counted items by verified unit mass; reconcile returns and scrap | kg | each packaging batch or production campaign | same period as packed output | each packing configuration | issued minus returns, separated by material and layer, normalized to packed net output | supplier specification; unit-mass test; issue and return record |
| `cp_direct_emissions` | `kernel_release_shelling` | on-site pollutant release from route-specific combustion or process equipment | direct measurement or calculated emission record | route_id; fuel_quantity; fuel_property; pollutant; factor; factor_source; control_efficiency; measured_release | measure each release or calculate from collected fuel using a reviewed pollutant-specific factor | kg per pollutant | each monitoring period or fuel batch | same period as route output | each on-site emission source | calculate each pollutant separately; aggregate only identical elementary flows; normalize to separated kernel output | monitoring report or fuel record; factor citation; calculation sheet; control record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `CAL-01` | all inventory rows | normalized amount = lot- or campaign-assigned amount / net conforming packed-kernel output; preserve the process-output basis where a row is explicitly process-normalized | assigned quantity; net conforming packed output; process output when applicable | quantity per reference flow or declared process output | `eu-pef-2021-2279` |
| `CAL-02` | as-received and dry-matter reporting | dry mass = as-received mass x (1 - measured moisture fraction); perform this conversion only when moisture fraction and method are available, and retain the original as-received mass | weighed mass; measured moisture fraction; test method | separately labelled dry mass and conversion record | `unece-ddp-17-cashew-kernels-2023` |
| `CAL-03` | route and pack alternatives | keep each mutually exclusive conditioning or packing branch separate; aggregate only after weighting route-specific inventories by measured conforming output, never by adding full alternative inventories to one lot | route identifier; branch-specific inputs and outputs; conforming output | route-specific inventory and any disclosed production-weighted aggregate |  |
| `CAL-04` | packaging by count | packaging mass = issued item count x verified unit mass, adjusted for returned unused items and separately measured scrap | item count; unit mass; returns; scrap | packaging input and packing waste by material |  |
| `CAL-05` | mass balance | balance difference = received material inputs - product outputs - co-product outputs - waste outputs - documented stock change; investigate rather than force an unexplained difference into a product or waste row | all measured material masses; opening and closing stock | disclosed mass-balance reconciliation and unresolved difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `DQ-01` | product identity | Preserve the CPC classification context, Tiangong product-flow UUID, kernel form, grade, lot, origin, moisture or conditioning state, and packing qualifiers. | product specification; `unsd-cpc-3-0-21424`; `unece-ddp-17-cashew-kernels-2023` |
| `DQ-02` | representativeness | Cover normal operation for each declared site, technology, conditioning route, grade, and pack configuration; disclose excluded lots, disruptions, start-ups, shutdowns, and seasonal limitations. | production schedule; route register; completeness statement; `eu-pef-2021-2279` |
| `DQ-03` | measurements and calculations | Use calibrated mass measurements, retain original utility units and conversion factors, document allocation drivers, and keep raw records traceable to normalized rows. | calibration records; invoices; batch sheets; calculation and allocation workbooks |
| `DQ-04` | provisional ranges | Treat every `reasoned_estimate` range as conditional candidate QA guidance, not as a default LCI amount. Replace it when the first complete representative campaign, reviewed supplier data, or source-backed range for the same route and basis becomes available. | replacement log; reviewed foreground dataset or external source record |
| `DQ-05` | completeness | Reconcile product, co-product, waste, and stock-change masses and document all exclusions, missing meters, proxy datasets, unquantified emissions, and data gaps. | mass-balance report; data-gap register; `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `VAL-01` | reference flow | Confirm that the reference output is exactly 1 kg net packed conforming kernel and uses product-flow UUID `8e888f2c-671c-44bf-8607-1bde41ac66b8`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| `VAL-02` | product and lot metadata | Reject an incomplete data package when any required qualifier is missing or when product scope includes in-shell nuts or a formulated or further-processed excluded product. | `unsd-cpc-3-0-21424`; `unece-ddp-17-cashew-kernels-2023` |
| `VAL-03` | route exclusivity | Confirm one primary kernel-release conditioning route per lot and one packing-atmosphere branch per pack output. When alternatives occur, require separate route records or production-weighted aggregation; reject simultaneous full-route inventories for one lot. |  |
| `VAL-04` | co-product and waste disposition | Confirm that every residue mass has one disposition and that no shell, testa, peeling, reject, or off-grade kernel mass is counted both as product/co-product and waste. |  |
| `VAL-05` | inventory evidence | Confirm collection-protocol linkage for collected and calculated rows, source identifiers for external or method evidence, original-unit retention, route-specific normalization, and disclosure of all substituted datasets and allocation choices. | `eu-pef-2021-2279` |
| `VAL-06` | provisional estimates | Flag every `reasoned_estimate` as candidate-only and verify its stated replacement trigger. Do not accept such a range as a publication-critical allowed range without explicit methodology review and source-backed replacement or documented acceptance. |  |
| `VAL-07` | mass balance and completeness | Confirm reconciliation of received nuts, kernels, co-products, wastes, and stock change; report the unexplained difference and all skipped checks rather than silently balancing it. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process data package for shelled cashew-kernel production and packing; eligible for publication as a secondary_dataset or background_dataset only after review |
| downstream_use | Construction of TianGong `process` records and `lifecyclemodel` systems requiring a factory-gate shelled-cashew-kernel input |
| allowed_use | Route-, site-, period-, grade-, and pack-specific gate-to-gate modelling with representative upstream datasets linked for received nuts, utilities, auxiliary materials, and packaging |
| excluded_use | Agricultural production, post-gate distribution, retail, consumption, or end-of-life without added datasets; formulated or further-processed cashew foods; combining mutually exclusive full routes; using provisional ranges as unqualified default LCI amounts |
| required_metadata | canonical PCR id; CPC context; Tiangong flow UUIDs; site and period; supplier-lot origin; conditioning route; kernel form and grade; moisture or conditioning state and test basis; defect and reject basis; pack material, size, and atmosphere; co-product and waste dispositions; allocation; upstream dataset references |
| required_quality_disclosure | lot coverage and exclusions; calibration; mass-balance difference; utility allocation; on-site emissions; representativeness; data gaps; proxy datasets; provisional estimates and replacement status; source and method versions |
| update_trigger | Material change in supplier origin, product specification, route, equipment, utility mix, yield or reject pattern, residue disposition, allocation, pack configuration, measurement method, dataset representativeness, or availability of evidence that replaces a provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21424` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC), Version 3.0, subclass 21424, “Cashew nuts, shelled” | Classification context and category label only |
| `unece-ddp-17-cashew-kernels-2023` | standard | UNECE Standard DDP-17 concerning the marketing and commercial quality control of cashew kernels, current WP.7 listing (2023) | Kernel identity and quality, measurement, and packing qualifiers; not LCI default amounts |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods to measure and communicate life-cycle environmental performance | Boundary, inventory, allocation, data-quality, normalization, and disclosure method framework |
