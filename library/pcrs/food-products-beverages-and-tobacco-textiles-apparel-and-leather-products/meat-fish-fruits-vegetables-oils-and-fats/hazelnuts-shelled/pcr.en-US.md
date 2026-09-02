---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.hazelnuts-shelled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Hazelnuts, shelled

## 1. Scope and Applicability

This PCR covers foreground production of raw hazelnut kernels obtained by removing shells from in-shell hazelnuts, from receipt of the in-shell material at the shelling facility through release of bulk or packed shelled kernels at the facility gate. It applies to whole and broken kernels sold as shelled hazelnuts when the incoming condition, kernel form, quality designation, size or calibre, moisture basis, route, and packaging state are declared.

Cultivation, harvest, operations completed before receipt, and inbound transport are represented by linked upstream datasets. Roasting, blanching, slicing, grinding, flavouring, chocolate or confectionery manufacture, retail, use, and end-of-life after the facility gate are outside the category. This PCR does not supply default LCI quantities from a commercial quality standard.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.hazelnuts-shelled |
| classification_refs | CPC 3.0 subclass 21423, Hazelnuts, shelled (`unsd-cpc-3-0-21423`) |
| covered_products | Raw whole or broken hazelnut kernels marketed after shell removal, including bulk and packed kernels whose grade and condition are declared |
| excluded_products | In-shell hazelnuts; roasted, blanched, sliced, ground, flavoured, coated, or formulated hazelnut products; hazelnut oil and meal |
| representative_product | Raw shelled hazelnut kernels at the shelling or packing facility gate |
| production_route | Receipt and preparation of in-shell hazelnuts; shelling and kernel sorting; one declared final route followed by release or packing |
| market_state | Bulk or packed raw kernels, with kernel form, commercial type or variety where declared, origin, crop year or lot period, quality designation, size or calibre, moisture basis, final-treatment route, and packaging state reported |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Make shelled hazelnut kernels available at the facility gate for further food distribution or processing |
| How much | 1 kg net mass of shelled hazelnut kernels, excluding packaging |
| How well | Conforming to the declared kernel form, commercial type or variety where declared, quality designation, size or calibre, moisture basis, defect-screening criteria, and packaging state |
| How long or cycle | One identified production lot or campaign through facility-gate release; no service life is assigned |
| reference_flow_link | Output row `shelled_hazelnuts_reference` of process `final_conditioning_and_packing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Hazelnuts, shelled `310457e0-388d-4c3a-9090-b4bbc5288d05` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | raw kernel state; whole, broken, or declared mixture; commercial type or variety where declared; origin; crop year or lot period; quality designation; size or calibre; moisture content and measurement basis; shell-fragment, foreign-matter, and defect-screening criteria; `dry_route` or `wet_route`; bulk or packaging specification |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net kernel mass after tare and packaging deduction at the facility-gate measurement point. |
| `consistent_moisture_basis` | Incoming nuts, intermediate kernels, outputs, and losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record moisture content, sampling point, method, and wet- or dry-basis convention. Convert masses between moisture bases only with the recorded measurements and an explicit equation. |
| `lot_mass_balance` | Each foreground process | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated scale records for input, product, co-product, and waste masses over the same lot or reconciled reporting period; disclose inventory change and moisture correction separately. |
| `route_exclusivity` | Final conditioning | Route declaration | dry_route or wet_route | Select exactly one final-treatment route per represented lot: `dry_route` has no intentional kernel washing, while `wet_route` includes intentional washing and the consequent drying step. Do not apply both routes to the same product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | In-shell hazelnuts accepted at the shelling-facility gate, with origin, lot period, incoming moisture basis, storage condition, and any prior drying or treatment declared |
| starting_condition_role | Upstream product input to the foreground shelling system |
| product_classification_scope | Shelled hazelnut kernels corresponding semantically to CPC 3.0 subclass 21423; the classification reference does not own PCR identity |
| recursive_input_rule | Purchased shelled hazelnut kernels entering blending or packing are represented by a separate upstream shelled-hazelnut dataset and bypass receipt and shelling in this foreground system; their mass share and attributes are disclosed and are not regenerated through this process chain |
| upstream_dataset_requirement | Link cultivation, harvest, pre-receipt conditioning, and inbound transport datasets appropriate to the declared origin, crop period, incoming condition, and logistics |
| disclosure | Report facility location, reporting period, source regions, incoming condition, included on-site preparation, selected final route, packaging state, co-product destinations, waste treatment, and all exclusions |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground system | Include receipt, on-site preparation, shelling, separation, sorting, the one selected final route, release or packing, direct utilities, direct elementary releases, wastes, and co-products from acceptance through facility-gate output. | eu-pef-2021-2279 |
| `boundary_upstream_linkage` | Upstream inputs | Represent in-shell hazelnuts, pre-receipt operations, inbound transport, energy, water, and packaging by traceable upstream datasets consistent with the declared geography, period, and technology. | eu-pef-2021-2279 |
| `boundary_route_choice` | Final conditioning | Apply either `dry_route` or `wet_route` to a represented lot. Water-contact washing and consequential drying belong only to `wet_route`; never add them to `dry_route`. |  |
| `boundary_direct_releases` | Each foreground process | Record each measured, calculated, permitted, or otherwise reportable direct elementary release as an individual flow; do not use a generic unspecified emission as a substitute. | eu-pef-2021-2279 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | Receipt and preparation of in-shell hazelnuts | `required` | Always included; record only preparation actually performed after facility-gate acceptance | Establish the declared starting condition, remove extraneous material, and condition the in-shell feed where needed | Per 1 kg prepared in-shell hazelnuts transferred to shelling |
| `shelling_and_sorting` | Shelling, separation, and kernel sorting | `required` | Always included | Remove shells, separate kernel fractions, and classify each shell or kernel fraction once as product or waste | Per 1 kg sorted kernel intermediate transferred to final conditioning |
| `final_conditioning_and_packing` | Final conditioning, release, and packing | `required` | Always included; exactly one of `dry_route` or `wet_route` applies to each represented lot | Apply the declared route, verify release attributes, and produce bulk or packed reference product | Per 1 kg net shelled hazelnut reference product |

### Process: Receipt and preparation of in-shell hazelnuts (`receipt_and_preparation`)

#### Inputs

##### Product flows

###### Incoming in-shell hazelnuts (`in_shell_hazelnuts_input`)

The accepted lot crossing the facility gate is recorded separately by origin, lot period, incoming moisture basis, and prior treatment.

- Selected flow: In-shell hazelnuts; resolve a Tiangong product-flow UUID in the produced dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net mass accepted into the represented lot or reconciled campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net shelled hazelnut reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_mass_and_identity`
- Sources:
- Range: Temporary conditional material-input screen; use only when a receipt record is unavailable and replace when the first verified lot mass or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net shelled hazelnut reference product; candidate-only fallback subject to replacement before reviewed release
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for receipt and preparation (`receipt_electricity`)

Metered or allocated electricity covers receiving, conveying, pre-cleaning, ventilation, and conditioning equipment actually operated in this process.

- Selected flow: Electricity supply appropriate to the facility; resolve the product flow in the produced dataset
- Flow property / unit: Energy / kWh
- Amount rule: Metered use, or documented allocation from a facility meter to the represented equipment and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared in-shell hazelnuts transferred to shelling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources:
- Range: Temporary conditional electricity screen; use only when metering or a documented allocation is unavailable and replace when such records or reviewed quantitative evidence become available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh
  - Basis: per 1 kg prepared in-shell hazelnuts; broad candidate-only screen, not an LCI default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy for on-site conditioning (`receipt_conditioning_heat`)

This input is recorded only when heating or drying occurs after facility-gate acceptance and before shelling; pre-receipt drying remains upstream.

- Selected flow: Site-specific heat or fuel supply; resolve each energy carrier separately in the produced dataset
- Flow property / unit: Energy / MJ
- Amount rule: Metered or purchase-record energy attributed to the on-site conditioning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg prepared in-shell hazelnuts transferred to shelling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources:
- Range: Temporary conditional heat screen; applies only when on-site conditioning occurs and records are unavailable, and is replaced when the first verified energy record or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ
  - Basis: per 1 kg prepared in-shell hazelnuts; broad candidate-only screen, not an LCI default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

No default elementary-flow amount is prescribed. Record reportable releases separately under `boundary_direct_releases`.

#### Outputs

##### Product flows

###### Prepared in-shell hazelnuts (`prepared_in_shell_hazelnuts`)

The measured transfer to shelling preserves lot identity and reports any moisture correction separately.

- Selected flow: Prepared in-shell hazelnuts; internal product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass to `shelling_and_sorting`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared in-shell hazelnuts transferred to shelling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_mass_and_identity`
- Sources:

##### Waste flows

###### Removed extraneous material and unusable in-shell fraction (`receipt_removed_fraction`)

Extraneous material and rejected incoming nuts leaving foreground control are recorded by actual destination and are not netted from utility records.

- Selected flow: Site-specific waste flow resolved by material and treatment route in the produced dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass sent to each waste treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted in-shell hazelnuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_mass_and_identity`
- Sources:
- Range: Temporary conditional mass-balance screen; use only when waste weighing is unavailable and replace when the first verified waste record or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg accepted in-shell hazelnuts; physically bounded candidate-only screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary-flow amount is prescribed. Record reportable releases separately under `boundary_direct_releases`.

### Process: Shelling, separation, and kernel sorting (`shelling_and_sorting`)

#### Inputs

##### Product flows

###### Prepared in-shell hazelnuts transferred to shelling (`prepared_in_shell_hazelnuts_input`)

This internal product input equals the measured output of `receipt_and_preparation` after any disclosed inventory change.

- Selected flow: Prepared in-shell hazelnuts; internal product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched transfer mass from `prepared_in_shell_hazelnuts`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg sorted kernel intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shelling_mass_balance`
- Sources:

###### Electricity for shelling and sorting (`shelling_electricity`)

Electricity covers shell cracking, separation, aspiration, conveying, inspection, and sorting equipment actually used.

- Selected flow: Electricity supply appropriate to the facility; resolve the product flow in the produced dataset
- Flow property / unit: Energy / kWh
- Amount rule: Metered use, or documented allocation from a facility meter to the represented equipment and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg sorted kernel intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shelling_utilities`
- Sources:
- Range: Temporary conditional electricity screen; use only when metering or documented allocation is unavailable and replace when records or reviewed quantitative evidence become available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg sorted kernel intermediate; broad candidate-only screen, not an LCI default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

No default elementary-flow amount is prescribed. Record reportable releases separately under `boundary_direct_releases`.

#### Outputs

##### Product flows

###### Sorted kernel intermediate (`sorted_kernel_intermediate`)

The kernel stream transferred to final conditioning is measured after shell and defect separation and before any final route-specific operation.

- Selected flow: Hazelnut kernel intermediate; internal product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass to `final_conditioning_and_packing`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg sorted kernel intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shelling_mass_balance`
- Sources:

###### Marketed hazelnut shells (`marketed_hazelnut_shells`)

Record shells here only when they meet the documented destination's product acceptance criteria and leave as a co-product. The same shell mass must not also be reported as waste.

- Selected flow: Hazelnut shells as a site-specific co-product; resolve the product flow in the produced dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass delivered for a documented beneficial use or sale
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg sorted kernel intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shelling_mass_balance`
- Sources:

###### Other usable kernel fractions (`usable_kernel_fractions`)

Record off-grade or broken kernels here only when transferred as a product with a documented use or customer; otherwise use the waste row below, never both.

- Selected flow: Site-specific usable hazelnut kernel fraction; resolve the product flow in the produced dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass transferred as a product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg sorted kernel intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shelling_mass_balance`
- Sources:

##### Waste flows

###### Discarded shells (`discarded_hazelnut_shells`)

Shells sent to waste treatment are recorded here by destination. Shells reported as `marketed_hazelnut_shells` are excluded from this row.

- Selected flow: Hazelnut shell waste resolved by treatment route in the produced dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass sent to each waste treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared in-shell hazelnuts entering shelling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shelling_mass_balance`
- Sources:
- Range: Temporary conditional mass-balance screen; use only when waste weighing is unavailable and replace when the first verified shell disposition record or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg prepared in-shell hazelnuts; physically bounded candidate-only screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded kernel fractions and foreign matter (`discarded_kernel_fraction`)

Kernel fractions and foreign matter without a documented product destination are reported by treatment route and are not counted as co-products.

- Selected flow: Site-specific food-processing waste resolved by material and treatment route in the produced dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass sent to each waste treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared in-shell hazelnuts entering shelling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shelling_mass_balance`
- Sources:
- Range: Temporary conditional mass-balance screen; use only when waste weighing is unavailable and replace when the first verified disposition record or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg prepared in-shell hazelnuts; physically bounded candidate-only screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary-flow amount is prescribed. Record reportable releases separately under `boundary_direct_releases`.

### Process: Final conditioning, release, and packing (`final_conditioning_and_packing`)

#### Inputs

##### Product flows

###### Sorted kernel intermediate transferred to final conditioning (`sorted_kernel_input`)

This internal product input equals the measured output `sorted_kernel_intermediate` after disclosed inventory change.

- Selected flow: Hazelnut kernel intermediate; internal product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched transfer mass from `sorted_kernel_intermediate`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net shelled hazelnut reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_mass_and_release`
- Sources:

###### Electricity for final conditioning and packing (`final_electricity`)

Electricity covers route-specific handling, final inspection, conveying, and packing equipment actually operated.

- Selected flow: Electricity supply appropriate to the facility; resolve the product flow in the produced dataset
- Flow property / unit: Energy / kWh
- Amount rule: Metered use, or documented allocation from a facility meter to the represented equipment and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net shelled hazelnut reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_utilities_and_route`
- Sources:
- Range: Temporary conditional electricity screen; use only when metering or documented allocation is unavailable and replace when records or reviewed quantitative evidence become available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg net shelled hazelnut reference product; broad candidate-only screen, not an LCI default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Processing water for the wet route (`wet_route_water`)

Record water only for a declared `wet_route`; it is not present in the `dry_route` inventory.

- Selected flow: Process water appropriate to the facility; resolve the product flow in the produced dataset
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-record water entering intentional kernel washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net shelled hazelnut reference product from `wet_route`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_utilities_and_route`
- Sources:
- Range: Temporary conditional water screen; applies only to `wet_route` when metering is unavailable and is replaced when the first verified batch record or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg net shelled hazelnut reference product from `wet_route`; broad candidate-only screen, not an LCI default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy for wet-route drying (`wet_route_drying_energy`)

Record thermal energy only when washing is followed by drying in the declared `wet_route`; resolve each carrier separately.

- Selected flow: Site-specific heat or fuel supply; resolve each energy carrier in the produced dataset
- Flow property / unit: Energy / MJ
- Amount rule: Metered or purchase-record energy attributed to post-washing drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net shelled hazelnut reference product from `wet_route`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_utilities_and_route`
- Sources:
- Range: Temporary conditional heat screen; applies only to `wet_route` when energy records are unavailable and is replaced when the first verified record or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ
  - Basis: per 1 kg net shelled hazelnut reference product from `wet_route`; broad candidate-only screen, not an LCI default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Packaging entering with the released product is recorded by material and component; the amount is zero only for a documented unpackaged bulk transfer.

- Selected flow: Each packaging material and component resolved separately in the produced dataset
- Flow property / unit: Mass / kg
- Amount rule: Purchase or bill-of-material mass reconciled to packed output, with reusable packaging identified separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net shelled hazelnut reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Temporary conditional packaging screen; use only when a packaging bill is unavailable and replace when the first verified bill of materials or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg net shelled hazelnut reference product; broad candidate-only screen covering bulk-to-packed states
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

No default elementary-flow amount is prescribed. Record reportable releases separately under `boundary_direct_releases`.

#### Outputs

##### Product flows

###### Shelled hazelnut reference product (`shelled_hazelnuts_reference`)

The reference output is released only after its required qualifiers and selected route are recorded.

- Selected flow: Hazelnuts, shelled `310457e0-388d-4c3a-9090-b4bbc5288d05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net product after normalization under `calc_reference_normalization`
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg net shelled hazelnut reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: eu-pef-2021-2279
- Range: Exact normalized reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg net shelled hazelnut reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: eu-pef-2021-2279

##### Waste flows

###### Wet-route wastewater (`wet_route_wastewater`)

Record wastewater only for `wet_route`, net of separately measured water retained in product or evaporated; resolve each treatment destination separately.

- Selected flow: Wastewater to the documented treatment route in the produced dataset
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or calculated batch balance using collected water and retention records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net shelled hazelnut reference product from `wet_route`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_utilities_and_route`
- Sources:
- Range: Temporary conditional wastewater screen; applies only to `wet_route` when discharge records are unavailable and is replaced when the first verified discharge or water-balance record is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg net shelled hazelnut reference product from `wet_route`; broad candidate-only screen, not an LCI default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging preparation waste (`packaging_preparation_waste`)

Record damaged, trimmed, or rejected packaging by material and treatment route; use zero only when verified by the packaging record.

- Selected flow: Packaging waste resolved by material and treatment route in the produced dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured waste or reconciled packaging input minus packed and returned components
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net shelled hazelnut reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Temporary conditional packaging-waste screen; use only when waste records are unavailable and replace when the first verified packaging balance or reviewed quantitative source is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg net shelled hazelnut reference product; broad candidate-only screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary-flow amount is prescribed. Record reportable releases separately under `boundary_direct_releases`.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | Shared operations | First avoid allocation by separately metering or subdividing operations for different lots, routes, and product fractions where practicable. | eu-pef-2021-2279 |
| `alloc_shell_and_kernel_status` | Shells and non-reference kernel fractions | Classify each physical fraction exactly once: as a product only with a documented product destination and acceptance, otherwise as waste to its treatment route. Do not report the same mass in both product and waste rows. | eu-pef-2021-2279 |
| `alloc_remaining_joint_inputs` | Reference kernels and co-products after subdivision | If allocation remains necessary, use a documented physical relationship that reflects the underlying process relationship. Use economic allocation only when a defensible physical relationship is unavailable; align values to the reporting period, disclose the method and inputs, and test sensitivity. | eu-pef-2021-2279 |
| `alloc_no_unstated_credit` | Waste treatment and beneficial use | Do not subtract an avoided-burden credit inside the foreground inventory unless the governing study method explicitly requires it; disclose any downstream substitution or recycling treatment separately. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_mass_and_identity` | `receipt_and_preparation` | Incoming, prepared, and removed material mass and identity | Scale ticket, intake record, moisture test, and disposition record | lot_id; origin; crop_or_lot_period; gross_mass; tare_mass; accepted_mass; prepared_mass; removed_mass; moisture_value; moisture_basis; prior_treatment; destination | Calibrated scales plus representative moisture sampling and lot reconciliation | kg; moisture unit as reported | Each lot; aggregate over the declared reporting period | All represented receipt lots | Each included facility | Sum compatible masses; keep moisture corrections and inventory changes separate; normalize only after reconciliation | Scale calibration; sampling method; lot trace; signed disposition record |
| `cp_receipt_utilities` | `receipt_and_preparation` | Electricity and conditional on-site heat | Meter, sub-meter, invoice, fuel receipt, and equipment log | period; meter_start; meter_end; purchased_quantity; carrier; equipment_hours; allocation_driver; conditioned_mass | Direct metering preferred; otherwise documented allocation to operated equipment and period | kWh by electricity; MJ by heat or fuel energy | Meter interval and each conditioning campaign | Same period as represented prepared output | Each included facility and energy carrier | Subtract documented non-process use; allocate residual by a disclosed causal driver; normalize to prepared mass | Meter identity; invoice; equipment log; allocation worksheet |
| `cp_shelling_mass_balance` | `shelling_and_sorting` | Prepared input, sorted kernels, shells, usable fractions, and discarded fractions | Batch scale and destination record | batch_id; prepared_input_mass; sorted_kernel_mass; marketed_shell_mass; discarded_shell_mass; usable_fraction_mass; discarded_kernel_mass; inventory_change; moisture_value; destination | Calibrated batch scales with fraction-specific destination reconciliation | kg | Each batch or lot | All represented shelling batches | Each included shelling line | Reconcile all outputs and inventory change to input on a consistent moisture basis; do not duplicate product and waste fractions | Scale calibration; batch sheet; destination acceptance; waste receipt; moisture record |
| `cp_shelling_utilities` | `shelling_and_sorting` | Electricity | Meter, sub-meter, invoice, and equipment log | period; meter_start; meter_end; electricity_quantity; equipment_hours; allocation_driver; sorted_kernel_mass | Direct metering preferred; otherwise documented allocation to shelling and sorting equipment | kWh | Meter interval and each production campaign | Same period as represented sorted-kernel output | Each included shelling line | Subtract documented non-process use and normalize to sorted kernel mass | Meter identity; invoice; equipment log; allocation worksheet |
| `cp_final_mass_and_release` | `final_conditioning_and_packing` | Kernel input, reference output, route, and release attributes | Batch scale, release test, and lot record | lot_id; sorted_kernel_input_mass; gross_output_mass; tare_mass; net_output_mass; route; kernel_form; commercial_type_or_variety; origin; crop_or_lot_period; quality_designation; size_or_calibre; moisture_value; moisture_basis; defect_criteria; packaging_state | Calibrated scales and documented release inspection or test | kg; attribute-specific units | Each released lot | All represented released lots | Each included final line | Calculate net output after tare; preserve lot attributes and route; aggregate only compatible product states | Scale calibration; release authorization; sampling and test method; lot trace |
| `cp_final_utilities_and_route` | `final_conditioning_and_packing` | Electricity, wet-route water and heat, and wastewater | Meter, sub-meter, invoice, batch record, and discharge record | period; lot_id; route; electricity_quantity; wash_water_quantity; heat_quantity; energy_carrier; wastewater_quantity; retained_water; allocation_driver; net_output_mass | Direct batch metering preferred; otherwise documented meter allocation and water balance | kWh; kg water; MJ; kg wastewater | Meter interval and each final-treatment batch | Same period as represented released output | Each included final line and utility | Assign washing water, drying heat, and wastewater only to `wet_route`; normalize to compatible route output | Meter identity; invoice; batch route record; water balance; discharge record; allocation worksheet |
| `cp_packaging_records` | `final_conditioning_and_packing` | Packaging input and preparation waste | Bill of materials, purchase record, pack count, and waste record | packaging_material; component_mass; units_used; reusable_status; packed_output_mass; waste_mass; returned_mass; bulk_transfer_flag | Reconcile packaging purchases or bill of materials to packed output, returns, and waste | kg | Each packaging specification and reporting period | Same period as represented packed output | Each included packing line | Sum by material; allocate shared components by pack count or measured mass; report documented bulk transfer separately | Supplier specification; bill of materials; purchase record; waste receipt; reconciliation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Reference product and all normalized rows | net reference mass = gross released mass - tare and included packaging mass; divide each reconciled inventory quantity by net reference mass in kg | gross_output_mass; tare_mass; included_packaging_mass; reconciled_inventory_quantity | kg net reference product and inventory amount per kg reference product | eu-pef-2021-2279 |
| `calc_moisture_conversion` | Masses compared at different moisture contents | dry matter = wet mass × (1 - moisture fraction on wet basis); convert only from recorded measurements and retain the original values and equation | wet_mass; moisture_fraction; stated_basis | dry-matter-equivalent mass and disclosed conversion |  |
| `calc_process_mass_balance` | Each foreground process | reconciled input = products + co-products + wastes + net inventory change + separately quantified moisture loss or gain; investigate and disclose unresolved residuals rather than forcing closure | input masses; output masses; waste masses; inventory change; moisture measurements | process balance and unresolved residual | eu-pef-2021-2279 |
| `calc_utility_intensity` | Each utility row | normalized utility = reconciled process utility divided by the compatible process output mass; keep carrier and route separate | metered_or_allocated_utility; compatible_output_mass; carrier; route | utility per process output or reference flow | eu-pef-2021-2279 |
| `calc_wet_route_water_balance` | `wet_route` | wastewater = measured discharge when available; otherwise wash-water input - separately measured retained water - separately measured evaporation or other documented output | wash_water_quantity; measured_discharge; retained_water; evaporation_or_other_output | wet-route wastewater quantity with method flag |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | All lots and reference flow | Preserve supplier or origin, crop year or lot period, incoming condition, commercial type or variety where declared, kernel form, release designation, and Tiangong reference UUID through the data package. | Lot trace, release record, and reference-flow metadata; product qualifiers informed by `unsd-cpc-3-0-21423` and `unece-ddp-04-2010` |
| `dq_measurement_consistency` | Mass, moisture, utility, and route records | Use calibrated or verified instruments, retain raw readings and allocation worksheets, and compare masses only on a declared moisture basis and compatible route. | Calibration evidence, meter records, moisture method, and calculation worksheet |
| `dq_temporal_and_site_coverage` | Foreground data | Cover every included site and the declared representative lots or campaigns in the reporting period; disclose shutdowns, missing intervals, substitutions, and exclusions. | Site list, production calendar, completeness reconciliation, and gap log |
| `dq_fraction_destination` | Shells and non-reference kernel fractions | Retain evidence for product acceptance or waste treatment and reconcile each fraction once without product-waste duplication. | Customer acceptance, transfer record, waste receipt, and mass balance |
| `dq_reasoned_estimate_replacement` | Every `reasoned_estimate` interval | Use the interval only conditionally when the named record is unavailable. Replace it when the first verified foreground record or reviewed quantitative source becomes available and before advancing this PCR to reviewed methodology; if retained for a study, label it provisional and report sensitivity. | Estimate register, replacement review, supporting record or source, and sensitivity result |
| `dq_pef_disclosure` | Published dataset profile | Document boundary, allocation, data sources, data quality, limitations, and modelling choices needed to interpret downstream use. | Dataset documentation aligned with `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | The output must use Hazelnuts, shelled UUID `310457e0-388d-4c3a-9090-b4bbc5288d05`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, with every required qualifier populated. | unsd-cpc-3-0-21423; unece-ddp-04-2010 |
| `val_reference_amount` | Reference flow | Net reference output after tare and packaging deduction must normalize to exactly 1 kg. | eu-pef-2021-2279 |
| `val_route_exclusivity` | Final conditioning | Each represented lot must declare exactly one of `dry_route` or `wet_route`; washing water, wet-route drying energy, and wastewater must be absent from `dry_route` and linked only to `wet_route`. |  |
| `val_process_completeness` | Foreground system | All three required processes must be represented, and any excluded on-site operation must be stated with evidence that it did not occur. |  |
| `val_mass_and_moisture_balance` | Each foreground process | Inputs, products, co-products, wastes, inventory change, and quantified moisture change must be reconciled on a consistent basis; unresolved residuals must be disclosed. | eu-pef-2021-2279 |
| `val_fraction_exclusivity` | Shells and other kernel fractions | A physical fraction must occur in either a product row or a waste row for its destination, never both. | eu-pef-2021-2279 |
| `val_estimate_status` | Provisional ranges | Every `reasoned_estimate` must carry its condition and replacement trigger; validation is inconclusive for reviewed use until it is replaced by verified foreground or reviewed source evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review; candidate foreground package before review |
| downstream_use | Product-footprint, process, and lifecycle-model studies needing facility-gate shelled hazelnut production, subject to geographic, temporal, route, and quality representativeness checks |
| allowed_use | Use when the incoming condition, source region, technology, final route, kernel form, quality designation, moisture basis, co-product handling, and packaging state match or are transparently adjusted |
| excluded_use | Direct representation of cultivation, in-shell hazelnuts, roasted or otherwise further-processed hazelnut products, retail, consumption, or an undeclared mixture of dry and wet final routes |
| required_metadata | PCR id and status; Tiangong reference UUIDs; facility and geography; reporting period; source regions; crop or lot period; incoming condition; kernel and quality qualifiers; moisture method and basis; route; process coverage; co-product and waste destinations; allocation; packaging; data sources |
| required_quality_disclosure | Foreground versus upstream data shares; meter and scale coverage; allocation method; mass-balance residuals; missing records; provisional estimates and sensitivities; source age; technological, geographic, and temporal limitations |
| update_trigger | New verified foreground records; replacement of any `reasoned_estimate`; changed origin mix, crop period, incoming moisture, equipment, route, quality designation, packaging, co-product destination, allocation basis, regulation, official standard, or source; or a material validation finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21423` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21423, “Hazelnuts, shelled” | Classification context and category identity only |
| `unece-ddp-04-2010` | Standard (`standard`) | United Nations Economic Commission for Europe, UNECE Standard DDP-04 concerning the marketing and commercial quality control of hazelnut kernels, 2010 edition, current adopted text | Kernel identity and quality or measurement qualifiers only; not LCI default amounts |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method | Functional-unit normalization, boundary linkage, allocation hierarchy, data quality, disclosure, and validation principles |
