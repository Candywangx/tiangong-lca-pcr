---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.green-tea-not-fermented-black-tea-fermented-and-partly-fermented-tea-in-immediate-packi-1fac4f77
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Green tea (not fermented), black tea (fermented) and partly fermented tea, in immediate packings of a content not exceeding 3 kg

## 1. Scope and Applicability

This PCR covers dry green, black, and partly fermented tea placed on the market in immediate packings whose declared net content does not exceed 3 kg. It supports foreground data packages for tea manufacture, finishing or blending when performed, and immediate packaging. The producer shall declare the specific tea form, oxidation or fermentation state, processing route, ingredients or treatments, and packaging configuration represented by the dataset.

Herbal infusions, maté, tea extracts, essences, concentrates, instant tea preparations, ready-to-drink beverages, and immediate packings above 3 kg are outside the category. Flavoured, scented, decaffeinated, roasted, or blended products are covered only when the declared product remains classified in CPC 3.0 code 23913; all additional ingredients and processing steps shall then be included and disclosed.

The Tiangong reference product flow selected below is an exact category-labelled representative for CPC 23913. It is not evidence that every concrete green, black, partly fermented, loose-leaf, broken-leaf, or tea-bag product has the same identity. A data producer shall use a more specific real Tiangong product flow when one matches the actual product form and shall never silently reuse the representative UUID for a different form.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.green-tea-not-fermented-black-tea-fermented-and-partly-fermented-tea-in-immediate-packi-1fac4f77 |
| classification_refs | CPC 3.0: 23913 |
| covered_products | Green tea (not fermented), black tea (fermented), and partly fermented tea in immediate packings with declared net content not exceeding 3 kg; route-specific flavoured, scented, decaffeinated, roasted, or blended variants only when classified in CPC 23913 |
| excluded_products | Herbal infusions; maté; tea extracts, essences, concentrates, and instant tea preparations; ready-to-drink tea beverages; immediate packings above 3 kg; products classified outside CPC 23913 |
| representative_product | Exact category-labelled dry tea in an immediate package up to 3 kg; the concrete dataset shall identify green, black, or partly fermented tea and its actual form |
| production_route | Route-specific conversion of received fresh tea material or purchased made tea, followed by applicable finishing or blending and immediate packaging |
| market_state | Dry tea ready for sale in a declared immediate packaging configuration with net content not exceeding 3 kg |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dry green, black, or partly fermented tea supplied in its declared immediate packaging configuration |
| How much | 1 kg net tea content, excluding the mass of packaging |
| How well | Conforming to the declared tea identity, processing route, commercial specification, ingredient declaration, and packaging configuration |
| How long or cycle | One delivery of a non-durable food product at the packaging output gate; no service duration is assigned |
| reference_flow_link | The reference flow is the net conforming packaged-tea output needed to provide the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net tea content at the immediate-packaging output gate |
| Reference product flow | Green tea (not fermented), black tea (fermented) and partly fermented tea, in immediate packings of a content not exceeding 3 kg `549f6c0d-6dd6-488d-a7c4-b1d5821fe309` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | specific tea form; fermentation state (green / black / partly fermented); presentation (loose / bagged / other); net content per immediate package; packaging material and component configuration; fresh-leaf or made-tea starting condition; processing and finishing route; ingredients and treatments; production geography; reporting period; moisture basis; allocation method |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete. Before assigning the representative UUID, search for and use a more specific real product flow when it matches the declared tea form; if the representative is retained, state that it is a category-level proxy and do not imply a narrower product identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference packaged-tea output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the dataset to 1 kg of net conforming tea content at the packaging output gate; exclude all packaging mass from the reference amount. |
| `packaging_mass_separation` | Immediate packaging components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate each packaging component separately from net tea mass and report it per 1 kg reference flow. |
| `package_content_limit` | Each immediate package represented | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Verify from production or label records that the declared net content of every immediate packaging format represented is not greater than 3 kg. |
| `moisture_basis` | Tea material inputs, intermediates, and output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured or specification-based moisture for material mass comparisons and disclose whether values are as-received or dry-matter based; do not convert between bases without the recorded moisture values. |
| `energy_conversion` | Metered electricity and fuels | Declared energy or fuel property | Declared source unit and MJ or kWh when converted | Preserve raw meter or purchase units and document every conversion factor; do not replace route-specific measurements with an uncited generic energy intensity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Reception of fresh tea shoots or leaves when primary manufacture is controlled, or reception of purchased made tea when the foreground operator begins with made tea |
| starting_condition_role | The first physically measured tea-material input to the controlled foreground system |
| product_classification_scope | CPC 3.0 code 23913 output: green, black, or partly fermented tea in immediate packings with net content not exceeding 3 kg |
| recursive_input_rule | If an input is itself a CPC 23913 packaged-tea product, record it as a separate technosphere input with its upstream dataset and disclose repacking or further processing; do not recursively recreate its prior production inside the same process or relabel it as newly manufactured tea. |
| upstream_dataset_requirement | Every fresh-leaf, purchased made-tea, ingredient, packaging, energy, water, transport, and waste-treatment input originating outside the controlled foreground shall carry a geographically and temporally representative upstream dataset or an explicit documented data gap. |
| disclosure | Declare the starting material state, controlled process steps, excluded steps, tea type and form, packaging format and net content, geography, reporting period, supplier-data coverage, and all substitutions or proxies. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_steps` | controlled tea manufacture | Include every route step actually performed between the declared starting condition and made tea, including route-applicable withering or heat treatment, rolling or maceration, oxidation or fermentation, drying, grading, and handling; mark steps that do not apply rather than assuming one route for all tea forms. | `fao-tea-processing-2005` |
| `boundary_packaging` | immediate packaged product | Include filling, tea-bag or inner-pack formation when applicable, immediate container components, labels and closures, attributable secondary or tertiary packaging, packaging losses, and packaging-line energy needed to place the reference product on the market. | `eu-pef-2021`; `iso-3720-2011`; `iso-11287-2011` |
| `boundary_upstream_links` | inputs outside foreground control | Link excluded upstream production, inbound transport, utilities, ingredients, packaging manufacture, and waste treatment through explicit upstream datasets; justify and disclose any omitted process. | `eu-pef-2021` |
| `boundary_outputs` | foreground outputs | Identify the reference packaged tea, saleable co-products, recoverable by-products, off-grade tea, tea residues, packaging scrap, wastewater, dust, and direct combustion or process emissions when they occur. | `eu-pef-2021` |
| `boundary_no_silent_scope_shift` | product identity and starting condition | Do not use the category representative flow to conceal a different tea form, a package above 3 kg, an extract or beverage, or a gate-to-gate starting condition that lacks the required upstream dataset links. | `un-cpc-v3-23913` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tea_primary_manufacture` | Route-specific tea manufacture | `conditional` | Include when the foreground system receives fresh tea shoots or leaves and controls their conversion to made tea. | Foreground manufacture | kg made tea leaving primary manufacture |
| `tea_finishing_blending` | Tea finishing, grading, or blending | `conditional` | Include when sorting, grading, blending, roasting, decaffeination, scenting, flavouring, or another finishing operation is performed within the declared CPC 23913 product route. | Foreground finishing | kg finished tea sent to packaging |
| `tea_immediate_packaging` | Immediate packaging of tea | `required` | Always include for the category output. | Foreground packaging and quantitative-reference process | 1 kg net conforming packaged tea output |

### Process: Route-specific tea manufacture (`tea_primary_manufacture`)

#### Inputs

##### Product flows

###### Fresh tea shoots and leaves received (`fresh_tea_shoots_leaves`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Fresh Camellia sinensis tea shoots and leaves
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tea_material_receipts`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Green tea purchased for primary manufacture (`primary_purchased_green_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when green tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged green tea, not fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tea_material_receipts`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Black tea purchased for primary manufacture (`primary_purchased_black_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when black tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged black tea, fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tea_material_receipts`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Partly fermented tea purchased for primary manufacture (`primary_purchased_partly_fermented_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when partly fermented tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged partly fermented tea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tea_material_receipts`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### High-voltage electricity for tea manufacture (`primary_electricity_high_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered 35–330 kV grid supply point; do not duplicate the same supply under another voltage card.
- Selected flow: High-voltage alternating current, 35–330 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Medium-voltage electricity for tea manufacture (`primary_electricity_medium_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered 1–35 kV grid supply point; do not duplicate the same supply under another voltage card.
- Selected flow: Medium-voltage alternating current, 1–35 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Low-voltage electricity for tea manufacture (`primary_electricity_low_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered grid supply point below 1 kV; do not duplicate the same supply under another voltage card.
- Selected flow: Low-voltage alternating current, below 1 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### On-site photovoltaic electricity for tea manufacture (`primary_electricity_onsite_photovoltaic`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use only for photovoltaic electricity generated and consumed within the declared foreground boundary; exclude exported electricity.
- Selected flow: On-site photovoltaic alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam heat for tea manufacture (`primary_purchased_steam`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when steam heat crosses the foreground boundary; omit when on-site fuel rows fully represent heat generation.
- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased hot-water heat for tea manufacture (`primary_purchased_hot_water`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when hot water supplied as heat crosses the foreground boundary; keep steam heat separate.
- Selected flow: Purchased hot-water heat
- Flow property / unit: Energy / MJ
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for tea manufacture (`primary_natural_gas`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when gaseous natural gas is consumed for the declared process.
- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas for tea manufacture (`primary_lpg`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when liquefied petroleum gas is consumed for the declared process.
- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel oil for tea manufacture (`primary_diesel`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when diesel oil is consumed for the declared process.
- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Heavy fuel oil for tea manufacture (`primary_heavy_fuel_oil`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when heavy fuel oil with the stated sulfur grade is consumed; represent a different grade in a separately reviewed row.
- Selected flow: Heavy fuel oil, 1.0 wt.% sulfur `53afe53a-7bbc-4b82-8e39-df2c6bbb2c46`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hard coal for tea manufacture (`primary_hard_coal`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when the declared hard-coal grade is consumed; do not use this row for another coal grade.
- Selected flow: Hard coal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biomass briquette fuel for tea manufacture (`primary_biomass_briquette`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when biomass briquettes are consumed; preserve feedstock and moisture grade in exchange documentation.
- Selected flow: Biomass briquette fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biogas for tea manufacture (`primary_biogas`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when biogas of the stated methane range is consumed; document reference temperature and pressure.
- Selected flow: Biogas, 50–80% methane
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Compressed air for tea manufacture (`primary_compressed_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when compressed air crosses the declared process boundary; document pressure and reference conditions.
- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-134a refrigerant make-up for tea manufacture (`primary_r134a_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when R-134a is added to in-scope cooling equipment.
- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-404A refrigerant make-up for tea manufacture (`primary_r404a_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when R-404A is added to in-scope cooling equipment.
- Selected flow: Refrigerant, R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia refrigerant make-up for tea manufacture (`primary_ammonia_refrigerant_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when anhydrous ammonia is added as refrigerant to in-scope equipment.
- Selected flow: Anhydrous ammonia refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Groundwater-derived drinking water for tea manufacture (`primary_groundwater_drinking_water`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for treated water derived from groundwater; do not duplicate the same water under the surface-water card.
- Selected flow: Drinking water, from groundwater `4f197bf2-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Surface-water-derived drinking water for tea manufacture (`primary_surface_water_drinking_water`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for treated water derived from surface water; do not duplicate the same water under the groundwater card.
- Selected flow: Drinking water, from surface water `4f197bf3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Deionised water for tea manufacture (`primary_deionized_water`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when deionised water crosses the process boundary; keep it separate from drinking-water supplies.
- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Green tea leaving primary manufacture (`made_green_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when green tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged green tea, not fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Black tea leaving primary manufacture (`made_black_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when black tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged black tea, fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Partly fermented tea leaving primary manufacture (`made_partly_fermented_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when partly fermented tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged partly fermented tea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Tea stalk waste from manufacture (`primary_tea_stalk_waste`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Tea stalk waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Tea fibre waste from manufacture (`primary_tea_fibre_waste`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Tea fibre waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-grade tea waste from manufacture (`primary_offgrade_tea_waste`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Off-grade tea waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Captured tea dust waste from manufacture (`primary_captured_tea_dust_waste`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Captured tea dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Tea-process wastewater from manufacture (`primary_tea_process_wastewater`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Tea-processing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide to air (`primary_carbon_dioxide_fossil_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Carbon dioxide, fossil, emission to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biogenic carbon dioxide to air (`primary_carbon_dioxide_biogenic_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Carbon dioxide, biogenic, emission to air, unspecified `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fossil carbon monoxide to air (`primary_carbon_monoxide_fossil_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Carbon monoxide, fossil, emission to air, unspecified `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen dioxide to air (`primary_nitrogen_dioxide_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Nitrogen dioxide, emission to air, unspecified `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen monoxide to air (`primary_nitrogen_monoxide_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Nitrogen monoxide, emission to air, unspecified `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulfur dioxide to air (`primary_sulfur_dioxide_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Sulfur dioxide, emission to air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fossil methane to air (`primary_methane_fossil_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Methane, fossil, emission to air, unspecified `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide to air (`primary_nitrous_oxide_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Nitrous oxide, emission to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### PM10 particles to air (`primary_particles_pm10_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Particles, PM10, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### PM2.5 particles to air (`primary_particles_pm25_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Particles, PM2.5, emission to air, unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### HFC-134a to air (`primary_hfc134a_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: HFC-134a, emission to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-404A to air (`primary_r404a_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: R-404A refrigerant, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`primary_ammonia_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Ammonia, emission to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured made tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured made tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Tea finishing, grading, or blending (`tea_finishing_blending`)

#### Inputs

##### Product flows

###### Green tea received for finishing (`finishing_input_green_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when green tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged green tea, not fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tea_material_receipts`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Black tea received for finishing (`finishing_input_black_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when black tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged black tea, fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tea_material_receipts`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Partly fermented tea received for finishing (`finishing_input_partly_fermented_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when partly fermented tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged partly fermented tea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tea_material_receipts`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Jasmine flowers for scenting (`finishing_jasmine_flowers`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Food-grade jasmine flowers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_route_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bergamot essential oil for flavouring (`finishing_bergamot_oil`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Food-grade bergamot essential oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_route_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ethyl acetate for decaffeination (`finishing_ethyl_acetate`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Food-grade ethyl acetate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_route_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Food-grade carbon dioxide for decaffeination (`finishing_food_grade_carbon_dioxide`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Food-grade carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_and_route_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### High-voltage electricity for tea finishing (`finishing_electricity_high_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered 35–330 kV grid supply point; do not duplicate the same supply under another voltage card.
- Selected flow: High-voltage alternating current, 35–330 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Medium-voltage electricity for tea finishing (`finishing_electricity_medium_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered 1–35 kV grid supply point; do not duplicate the same supply under another voltage card.
- Selected flow: Medium-voltage alternating current, 1–35 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Low-voltage electricity for tea finishing (`finishing_electricity_low_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered grid supply point below 1 kV; do not duplicate the same supply under another voltage card.
- Selected flow: Low-voltage alternating current, below 1 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### On-site photovoltaic electricity for tea finishing (`finishing_electricity_onsite_photovoltaic`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use only for photovoltaic electricity generated and consumed within the declared foreground boundary; exclude exported electricity.
- Selected flow: On-site photovoltaic alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam heat for tea finishing (`finishing_purchased_steam`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when steam heat crosses the foreground boundary; omit when on-site fuel rows fully represent heat generation.
- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased hot-water heat for tea finishing (`finishing_purchased_hot_water`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when hot water supplied as heat crosses the foreground boundary; keep steam heat separate.
- Selected flow: Purchased hot-water heat
- Flow property / unit: Energy / MJ
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for tea finishing (`finishing_natural_gas`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when gaseous natural gas is consumed for the declared process.
- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas for tea finishing (`finishing_lpg`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when liquefied petroleum gas is consumed for the declared process.
- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel oil for tea finishing (`finishing_diesel`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when diesel oil is consumed for the declared process.
- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Heavy fuel oil for tea finishing (`finishing_heavy_fuel_oil`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when heavy fuel oil with the stated sulfur grade is consumed; represent a different grade in a separately reviewed row.
- Selected flow: Heavy fuel oil, 1.0 wt.% sulfur `53afe53a-7bbc-4b82-8e39-df2c6bbb2c46`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hard coal for tea finishing (`finishing_hard_coal`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when the declared hard-coal grade is consumed; do not use this row for another coal grade.
- Selected flow: Hard coal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biomass briquette fuel for tea finishing (`finishing_biomass_briquette`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when biomass briquettes are consumed; preserve feedstock and moisture grade in exchange documentation.
- Selected flow: Biomass briquette fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biogas for tea finishing (`finishing_biogas`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when biogas of the stated methane range is consumed; document reference temperature and pressure.
- Selected flow: Biogas, 50–80% methane
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Compressed air for tea finishing (`finishing_compressed_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when compressed air crosses the declared process boundary; document pressure and reference conditions.
- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-134a refrigerant make-up for tea finishing (`finishing_r134a_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when R-134a is added to in-scope cooling equipment.
- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-404A refrigerant make-up for tea finishing (`finishing_r404a_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when R-404A is added to in-scope cooling equipment.
- Selected flow: Refrigerant, R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia refrigerant make-up for tea finishing (`finishing_ammonia_refrigerant_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when anhydrous ammonia is added as refrigerant to in-scope equipment.
- Selected flow: Anhydrous ammonia refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Green tea sent to packaging (`finished_green_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when green tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged green tea, not fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Black tea sent to packaging (`finished_black_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when black tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged black tea, fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Partly fermented tea sent to packaging (`finished_partly_fermented_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when partly fermented tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged partly fermented tea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent jasmine flowers from scenting (`finishing_spent_jasmine_flowers`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Spent jasmine flowers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-grade tea waste from finishing (`finishing_offgrade_tea_waste`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Off-grade tea waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Captured tea dust waste from finishing (`finishing_captured_tea_dust_waste`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Captured tea dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Decaffeination wastewater (`finishing_decaffeination_wastewater`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Decaffeination wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent ethyl acetate from decaffeination (`finishing_spent_ethyl_acetate`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Spent ethyl acetate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### PM10 particles to air (`finishing_particles_pm10_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Particles, PM10, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### PM2.5 particles to air (`finishing_particles_pm25_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Particles, PM2.5, emission to air, unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### HFC-134a to air (`finishing_hfc134a_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: HFC-134a, emission to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-404A to air (`finishing_r404a_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: R-404A refrigerant, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`finishing_ammonia_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Ammonia, emission to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of measured finished tea output from this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per kg of measured finished tea output from this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Immediate packaging of tea (`tea_immediate_packaging`)

#### Inputs

##### Product flows

###### Green tea supplied to immediate packaging (`packaging_input_green_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when green tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged green tea, not fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Black tea supplied to immediate packaging (`packaging_input_black_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when black tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged black tea, fermented
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Partly fermented tea supplied to immediate packaging (`packaging_input_partly_fermented_tea`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when partly fermented tea is present in this transfer; preserve form and moisture basis.
- Selected flow: Unpackaged partly fermented tea
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_inventory_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Tea-bag filter paper (`packaging_tea_bag_filter_paper`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Tea-bag filter paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cotton tea-bag thread (`packaging_cotton_thread`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Cotton tea-bag thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Aluminium staple wire (`packaging_aluminium_staple_wire`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Aluminium wire `89db8507-09bd-45f8-ba96-4e459058412c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polypropylene immediate-packaging film (`packaging_polypropylene_film`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Polypropylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polyethylene immediate-packaging film (`packaging_polyethylene_film`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Aluminium foil (`packaging_aluminium_foil`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Aluminium foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Paperboard immediate carton (`packaging_paperboard_carton`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Paperboard packing box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Steel tea can (`packaging_steel_food_can`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Steel food can `f09b782f-b3db-4b1e-8473-597edcc5b6d7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glass tea jar (`packaging_glass_jar`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Glass jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Paper packaging label (`packaging_paper_label`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a China production mix matching the verified label flow; use a separately reviewed atomic row for another supply geography.
- Selected flow: Paper packaging label `d5890643-6859-42b5-9e05-556b072c6a8c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water-based food-packaging adhesive (`packaging_water_based_adhesive`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Water-based food-packaging adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Food-contact packaging printing ink (`packaging_food_contact_printing_ink`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Food-contact packaging printing ink
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Plastic package closure (`packaging_plastic_closure`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a China production mix matching the verified plastic-closure flow; use a separately reviewed atomic row for another supply geography.
- Selected flow: Primary packaging, plastic closure `0161e346-2ac3-48be-b61d-e94ebb6f4b0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated-board distribution packaging (`distribution_corrugated_board`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### LDPE stretch film (`distribution_ldpe_stretch_film`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wooden distribution pallet (`distribution_wooden_pallet`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Wooden pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Moulded-pulp packaging insert (`distribution_moulded_pulp_insert`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a China production mix matching the verified moulded-pulp insert flow; use a separately reviewed atomic row for another supply geography.
- Selected flow: Moulded pulp packaging insert `2452c680-7e60-4e7d-b170-fb98ac7a9fe2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### High-voltage electricity for immediate packaging (`packaging_electricity_high_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered 35–330 kV grid supply point; do not duplicate the same supply under another voltage card.
- Selected flow: High-voltage alternating current, 35–330 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Medium-voltage electricity for immediate packaging (`packaging_electricity_medium_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered 1–35 kV grid supply point; do not duplicate the same supply under another voltage card.
- Selected flow: Medium-voltage alternating current, 1–35 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Low-voltage electricity for immediate packaging (`packaging_electricity_low_voltage`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use for a metered grid supply point below 1 kV; do not duplicate the same supply under another voltage card.
- Selected flow: Low-voltage alternating current, below 1 kV, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### On-site photovoltaic electricity for immediate packaging (`packaging_electricity_onsite_photovoltaic`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use only for photovoltaic electricity generated and consumed within the declared foreground boundary; exclude exported electricity.
- Selected flow: On-site photovoltaic alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam heat for immediate packaging (`packaging_purchased_steam`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when steam heat crosses the foreground boundary; omit when on-site fuel rows fully represent heat generation.
- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased hot-water heat for immediate packaging (`packaging_purchased_hot_water`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when hot water supplied as heat crosses the foreground boundary; keep steam heat separate.
- Selected flow: Purchased hot-water heat
- Flow property / unit: Energy / MJ
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for immediate packaging (`packaging_natural_gas`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when gaseous natural gas is consumed for the declared process.
- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas for immediate packaging (`packaging_lpg`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when liquefied petroleum gas is consumed for the declared process.
- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel oil for immediate packaging (`packaging_diesel`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when diesel oil is consumed for the declared process.
- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Heavy fuel oil for immediate packaging (`packaging_heavy_fuel_oil`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when heavy fuel oil with the stated sulfur grade is consumed; represent a different grade in a separately reviewed row.
- Selected flow: Heavy fuel oil, 1.0 wt.% sulfur `53afe53a-7bbc-4b82-8e39-df2c6bbb2c46`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hard coal for immediate packaging (`packaging_hard_coal`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when the declared hard-coal grade is consumed; do not use this row for another coal grade.
- Selected flow: Hard coal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biomass briquette fuel for immediate packaging (`packaging_biomass_briquette`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when biomass briquettes are consumed; preserve feedstock and moisture grade in exchange documentation.
- Selected flow: Biomass briquette fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Biogas for immediate packaging (`packaging_biogas`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when biogas of the stated methane range is consumed; document reference temperature and pressure.
- Selected flow: Biogas, 50–80% methane
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Compressed air for immediate packaging (`packaging_compressed_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when compressed air crosses the declared process boundary; document pressure and reference conditions.
- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-134a refrigerant make-up for immediate packaging (`packaging_r134a_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when R-134a is added to in-scope cooling equipment.
- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-404A refrigerant make-up for immediate packaging (`packaging_r404a_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when R-404A is added to in-scope cooling equipment.
- Selected flow: Refrigerant, R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia refrigerant make-up for immediate packaging (`packaging_ammonia_refrigerant_makeup`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only when anhydrous ammonia is added as refrigerant to in-scope equipment.
- Selected flow: Anhydrous ammonia refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming tea in immediate packaging (`packaged_tea_output`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Required quantitative-reference output for every conforming data package.
- Selected flow: Green tea (not fermented), black tea (fermented) and partly fermented tea, in immediate packings of a content not exceeding 3 kg `549f6c0d-6dd6-488d-a7c4-b1d5821fe309`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net conforming tea content, excluding packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:
- Range: Broad provisional screening range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Discarded tea-bag filter paper (`packaging_waste_filter_paper`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Discarded tea-bag filter paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded polyethylene packaging (`packaging_waste_polyethylene`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use this flow only for discarded polyethylene packaging sent to the cleaned mechanical-recycling route; do not apply this UUID to any other route, which remains an unresolved identity gap.
- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded polypropylene packaging (`packaging_waste_polypropylene`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use this flow only for discarded polypropylene packaging sent to the mechanical-recycling route; do not apply this UUID to any other route, which remains an unresolved identity gap.
- Selected flow: Polypropylene waste `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded cardboard packaging (`packaging_waste_cardboard`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded aluminium packaging (`packaging_waste_aluminium`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use this flow only for discarded aluminium packaging sent to the aluminium-scrap recycling route; do not apply this UUID to any other route, which remains an unresolved identity gap.
- Selected flow: Aluminium scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded tinplate steel packaging (`packaging_waste_tinplate_steel`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Use this flow only for discarded tinplate-steel packaging sent to the documented steel-scrap sorting route; do not apply this UUID to any other route, which remains an unresolved identity gap.
- Selected flow: Tinplate steel scrap `8a2f76f2-95c1-4c2c-8997-e84be2114a87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded glass packaging (`packaging_waste_glass`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Glass packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded wooden pallet (`packaging_waste_wooden_pallet`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected tea waste from packaging (`packaging_rejected_tea_waste`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include when this atomic exchange is present in the declared route; omit only with documented absence.
- Selected flow: Rejected tea waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### PM10 particles to air (`packaging_particles_pm10_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Particles, PM10, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### PM2.5 particles to air (`packaging_particles_pm25_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Particles, PM2.5, emission to air, unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### HFC-134a to air (`packaging_hfc134a_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: HFC-134a, emission to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-404A to air (`packaging_r404a_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: R-404A refrigerant, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`packaging_ammonia_air`)

Record this exchange separately so one row identifies one physical or chemical flow.

- Applicability: Include only for a measured release or a release calculated from collected activity data under a cited factor method.
- Selected flow: Ammonia, emission to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured, reconciled, or calculated quantity of this atomic exchange from the cited foreground protocol
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming packaged tea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
- Range: Broad provisional screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net conforming packaged tea output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared foreground processes | Avoid allocation first by separately metering and subdividing route, product, and packaging operations; use system expansion only when the substituted function and dataset are explicit and justified. | `eu-pef-2021` |
| `allocation_physical` | unavoidable shared burdens | When subdivision or justified system expansion is not possible, use a measurable physical relationship that reflects how the shared input or process burden changes with the products, and document the factor and period. | `eu-pef-2021` |
| `allocation_other_relationship` | shared burdens lacking a defensible physical relationship | Use another relationship, including economic allocation only as a last resort, with product values, reference period, currency, factor calculation, and a sensitivity check disclosed. | `eu-pef-2021` |
| `allocation_residue_status` | tea residues, off-grade tea, recovered dust, rework, and packaging scrap | Determine and document whether each output is a co-product, by-product, rework, recyclable material, or waste before applying allocation or credit; do not assign avoided burden merely because an output leaves the site. | `eu-pef-2021` |
| `allocation_consistency` | multi-product reporting period | Apply one declared allocation hierarchy consistently to all shared foreground utilities, cleaning, storage, and packaging-area burdens and reconcile allocated totals to the unallocated facility total. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_and_route_records` | `tea_primary_manufacture`; `tea_finishing_blending` | Tea identity, recipe, and route | Batch route sheet and approved product specification | batch_id; tea_type; material_form; oxidation_or_fermentation_state; process_steps; ingredient_ids; ingredient_quantities; treatment; moisture_basis | Reconcile approved recipe and executed batch route; retain deviations and release decision | kg and declared route fields | Every batch | Same period as foreground inventory | Every represented site and product route | Mass-weight route records by conforming net output; do not combine undeclared tea forms | Signed route sheet; approved specification; batch release record |
| `cp_tea_material_receipts` | `tea_primary_manufacture`; `tea_finishing_blending` | Fresh leaf, made tea, and ingredients received | Calibrated scale ticket, goods receipt, supplier lot record | date; supplier; lot_id; material_identity; origin; gross_mass; tare; net_mass; moisture; accepted_mass; rejected_mass; upstream_dataset_id | Reconcile scale tickets to goods receipts and lot inventory | kg as received; moisture in declared basis | Every receipt or batch | Same period as foreground inventory | All suppliers and sites represented | Sum accepted mass by material identity and route; preserve supplier coverage | Scale calibration; receipt reconciliation; supplier certificate where applicable |
| `cp_energy_and_fuel_records` | `tea_primary_manufacture`; `tea_finishing_blending`; `tea_immediate_packaging` | Electricity, fuel, and purchased heat | Submeter, main meter, fuel receipt, run-time allocation record | meter_id; opening; closing; unit; fuel_identity; purchased_quantity; stock_change; process_time; allocation_key; conversion_factor | Prefer process submetering; reconcile allocated values to site meters and purchases | Raw meter or purchase unit; converted kWh or MJ when needed | Per batch, shift, or meter interval | At least one representative year or the full shorter campaign | Every represented site | Sum by energy carrier; allocate only residual shared use under section 7 | Meter calibration; invoice reconciliation; allocation worksheet |
| `cp_water_records` | `tea_primary_manufacture`; `tea_finishing_blending` | Supplied water and wastewater | Water meter, discharge meter, cleaning log, treatment record | source; opening; closing; use_area; discharge_volume; stock_or_evaporation_basis; destination; treatment | Meter process and cleaning water where possible; otherwise reconcile a documented water balance | m3 or kg | Per meter interval and cleaning event | Same period as foreground inventory | Every represented site | Sum supply and discharge by source and destination; normalize to process output | Meter calibration; water balance; treatment invoice or log |
| `cp_packaging_bom_records` | `tea_immediate_packaging` | Immediate, secondary, and tertiary packaging | Approved BOM, component specification, unit-mass test, issue and return record | sku; package_net_content; component_id; material; unit_mass; units_issued; units_returned; conforming_packs; rejects; shipment_allocation | Verify component unit mass and reconcile BOM issues, returns, output, and waste | g or kg per component; package content in kg | Every SKU and production campaign | Same period as foreground inventory | All packaging formats represented | Calculate component mass per net kg output; keep components and materials separate | Approved BOM; calibrated unit-mass test; inventory reconciliation; label record |
| `cp_output_and_inventory_records` | `tea_primary_manufacture`; `tea_finishing_blending`; `tea_immediate_packaging` | Intermediate and final product output | Calibrated scale, production count, stock and release record | batch_id; product_identity; gross_mass; tare; net_tea_mass; packaging_mass; pack_count; net_content_per_pack; moisture; stock_change; disposition | Reconcile weighed output and pack count to released stock and declared net content | kg net tea; kg packaging; count | Every batch | Same period as foreground inventory | Every represented product and site | Sum conforming net output; keep packaging mass and nonconforming dispositions separate | Scale calibration; legal metrology or label check; release and stock reconciliation |
| `cp_waste_and_emission_records` | `tea_primary_manufacture`; `tea_finishing_blending`; `tea_immediate_packaging` | Residues, rejects, packaging waste, wastewater, and direct emissions | Waste scale ticket, transfer note, treatment invoice, emissions monitor, fuel calculation record | material_or_substance; mass_or_volume; origin_process; disposition; treatment; compartment; monitor_result; activity_data; factor_source | Measure transferred material; calculate emissions only from collected activity data and a cited factor method | kg, m3, or measured concentration and flow | Every transfer or monitoring interval | Same period as foreground inventory | Every represented site | Sum separately by identity, disposition, treatment, and environmental compartment | Scale ticket; transfer note; treatment receipt; monitor calibration; cited calculation sheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_output` | Packaged-tea output | Net reference output = sum of conforming pack count multiplied by verified net tea content per pack; cross-check against released net product mass and exclude all packaging mass. | conforming_packs; net_content_per_pack; released_net_tea_mass | kg net conforming packaged tea | `un-cpc-v3-23913` |
| `calc_packaging_component_mass` | Each packaging component | Component mass per kg reference flow = (units issued minus units returned minus separately recorded unused stock) multiplied by verified unit mass, divided by net conforming packaged-tea output. | units_issued; units_returned; unused_stock; unit_mass; net_reference_output | kg component per kg net packaged tea | |
| `calc_flow_normalization` | Foreground input and output rows | Normalized amount = reporting-period amount attributable to the product divided by net conforming reference output in the same period. | attributable_flow_amount; net_reference_output | flow amount per kg net packaged tea | |
| `calc_tea_mass_balance` | Each controlled tea process | Mass-balance discrepancy = tea-material inputs plus applicable ingredients minus conforming tea outputs minus separately recorded co-products, rework transfers, samples, waste, and stock change; investigate and disclose unexplained discrepancy rather than forcing it to zero. | tea_material_inputs; ingredient_inputs; product_outputs; co_products; rework; samples; waste; stock_change | kg discrepancy and percentage of tea-material input | |
| `calc_shared_burden_allocation` | Shared foreground utilities and services | Allocated amount = reconciled shared total multiplied by the documented allocation factor selected under section 7; the sum over products shall equal the shared total subject only to disclosed rounding. | shared_total; allocation_basis_by_product; selected_method | allocated amount by product | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and tea inputs | Preserve tea type, form, route, ingredient or treatment status, origin, moisture basis, package configuration, and CPC eligibility at batch or SKU level. | Approved specification, route sheet, label, supplier lot record, and `iso-3720-2011` or `iso-11287-2011` where applicable |
| `dq_temporal_coverage` | All foreground quantities | Use a continuous representative reporting period, normally at least 12 months; if a shorter campaign is used, disclose seasonality, start and end dates, and why it represents the product. | Meter intervals, production calendar, batch register, and coverage statement |
| `dq_site_supplier_coverage` | Multi-site and purchased-material datasets | State represented production share by site and supplier; identify gaps and do not present uncovered routes as measured. | Site output totals, purchase ledger, supplier dataset register, and coverage calculation |
| `dq_measurement_traceability` | Mass, water, energy, packaging, and emission records | Retain instrument identity, calibration status, raw unit, conversion factors, and reconciliation to independent totals. | Calibration certificates, raw exports, invoices, scale tickets, BOM tests, and reconciliation worksheets |
| `dq_background_representativeness` | Upstream datasets | Select datasets matching the declared geography, technology, material identity, and time as closely as available; disclose every proxy and material data gap. | Dataset references, selection rationale, proxy log, and `eu-pef-2021` data-quality assessment |
| `dq_completeness` | Foreground inventory | Demonstrate coverage of all controlled route and packaging steps, all mass-bearing tea and packaging flows, energy and water, wastes, and relevant direct emissions; quantify or justify exclusions. | Process map, mass and energy reconciliation, waste register, boundary diagram, and exclusion log |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_scope` | declared reference product | Confirm that the product is green, black, or partly fermented tea in an immediate packing whose net content is not greater than 3 kg and is not an excluded extract, instant preparation, beverage, herbal infusion, or maté product. | `un-cpc-v3-23913` |
| `validate_specific_form` | product identity | Require the concrete tea form, fermentation or oxidation state, presentation, processing route, ingredients or treatments, and packaging configuration; reject an unspecified category-only identity. | `iso-3720-2011`; `iso-11287-2011` |
| `validate_representative_flow_use` | Tiangong reference flow | Require a documented search for a more specific real product flow; when the category-labelled UUID is retained, label it as representative and reject any claim that it silently identifies a different narrower tea form. | |
| `validate_reference_mass` | quantitative reference | Confirm that the reference amount is exactly 1 kg net conforming tea content and that all immediate and distribution packaging masses are excluded from that amount and inventoried separately. | |
| `validate_starting_condition` | foreground boundary | Require the declared fresh-leaf or made-tea starting condition and upstream dataset links for all production outside foreground control; reject an undisclosed gate-to-gate scope shift. | `eu-pef-2021` |
| `validate_route_coverage` | process inventory | Confirm that every controlled, route-applicable manufacture, finishing, and packaging step is represented and that non-applicable steps are explicitly marked. | `fao-tea-processing-2005`; `eu-pef-2021` |
| `validate_packaging_bom` | packaging inventory | Reconcile immediate, secondary, and tertiary packaging component quantities to BOM, issue and return records, pack counts, waste, and net output for every represented format. | `eu-pef-2021` |
| `validate_mass_balance` | tea-material inventory | Calculate and report process-level tea mass-balance discrepancy; investigate unexplained loss and never force a balance by inserting an undocumented flow. | |
| `validate_allocation` | shared foreground burdens | Confirm that subdivision or system expansion was considered first, all residual allocation factors are documented, and allocated totals reconcile to facility totals. | `eu-pef-2021` |
| `validate_data_quality` | reporting-period dataset | Report temporal, geographical, technological, site, supplier, and measurement coverage; list proxies, exclusions, missing upstream datasets, and incomplete checks as limitations. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground packaged-tea production dataset built from measured or reconciled records, with explicit upstream dataset links |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA process and lifecycle-model projections for the declared tea form, route, geography, reporting period, and packaging configuration; comparison only after checking equivalent functional unit, scope, data quality, and allocation |
| excluded_use | Silent substitution for another tea form or package size; use for herbal infusions, maté, extracts, instant tea, or ready-to-drink beverages; claims beyond the represented sites, suppliers, routes, or period; use of the representative UUID as proof of a narrower product identity |
| required_metadata | PCR id and version state; CPC eligibility; specific tea form and route; starting condition; geography; reporting period; site and supplier coverage; net content and complete packaging BOM; moisture basis; upstream datasets and proxies; allocation method; reference-flow identity decision |
| required_quality_disclosure | Raw-record coverage; calibration and reconciliation status; mass-balance discrepancy; temporal, geographical, and technological representativeness; exclusions; missing upstream links; allocation sensitivity; use of category representative flow; unresolved data gaps |
| update_trigger | Change in tea type or form, starting material, route or technology, ingredient or treatment, packaging format or net content, site or supplier mix, energy system, waste treatment, allocation basis, Tiangong identity availability, or a material shift in measured inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-23913` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Ver. 3.0 Structure (30 June 2025), code 23913, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (repository source retrieval 2026-06-23) | Exact category wording, included fermentation states, immediate-packaging condition, and 3 kg limit |
| `eu-pef-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, ELI http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-10) | Functional-unit framing, supply-chain system boundary, packaging inclusion, multi-functionality hierarchy, company-specific data, exclusions, and data-quality rules |
| `fao-tea-processing-2005` | Official guidance (`official_guidance`) | FAO/WHO Joint Meeting on Pesticide Residues, CCP: TE 05/7, Processing of Tea, https://www.fao.org/tempref/docrep/fao/meeting/009/j5314e.pdf (retrieved 2026-08-10) | Evidence that green- and black-tea routes differ and for route-applicable rolling, withering, oxidation or fermentation, and drying process decomposition; no residue factor or timing is adopted |
| `iso-3720-2011` | Standard (`standard`) | ISO 3720:2011, Black tea - Definition and basic requirements, https://www.iso.org/standard/51541.html (retrieved 2026-08-10) | Black-tea product identity and the need to retain applicable product, packing, and marking specifications; no proprietary numerical requirement is reproduced |
| `iso-11287-2011` | Standard (`standard`) | ISO 11287:2011, Green tea - Definition and basic requirements, https://www.iso.org/standard/51540.html (retrieved 2026-08-10) | Green-tea product identity and the need to retain applicable product, packing, and marking specifications; no proprietary numerical requirement is reproduced |
