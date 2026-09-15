---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-aquatic-invertebrates-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other aquatic invertebrates, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers the foreground preservation of organisms declared as other aquatic invertebrates into a frozen, smoked, dried, salted, or brined product represented by CPC 3.0 code 21269. The Tiangong reference product flow is the exact generic CPC 21269 product flow; it does not assert a species, origin, edible status, recipe, or preservation route that the foreground data package has not declared.

The foreground boundary begins when raw or previously chilled aquatic-invertebrate material is received by the preserving facility and ends when conforming bulk or packaged product leaves that facility. Upstream capture, culture, landing, primary slaughter where relevant, and inbound transport are represented by linked upstream datasets rather than recreated in the foreground process. Distribution, retail, preparation by the user, consumption, and end-of-life are outside the default boundary.

Fish, crustaceans, molluscs, aquatic mammals, terrestrial invertebrates, and products preserved by another method are excluded. A product declared for food use applies Codex controls where relevant. A product declared non-edible, feed, bait, research, or technical grade shall remain in a non-food boundary and shall not inherit food-safety performance claims or be converted to a food product without a separately documented qualifying process and product identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-aquatic-invertebrates-frozen-smoked-dried-salted-or-in-brine` |
| classification_refs | CPC 3.0 `21269`, exact scope |
| covered_products | Other aquatic invertebrates supplied frozen, smoked, dried, salted, or in brine, with organism identity, intended use, and preservation state declared |
| excluded_products | Fish; crustaceans; molluscs; aquatic mammals; terrestrial invertebrates; otherwise prepared or preserved products; undeclared mixtures whose CPC identity cannot be demonstrated |
| representative_product | One declared lot of preserved other aquatic invertebrates represented by the exact generic Tiangong CPC 21269 product flow |
| production_route | Common receiving and preparation followed by exactly one terminal route: `frozen`, `smoked`, `dried`, `salted`, or `in_brine`; the alternatives are mutually exclusive for one reference flow |
| market_state | Bulk or packaged product at the preserving-facility gate; temperature, packaging inclusion, edible or non-food status, and route-specific mass basis declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a declared frozen, smoked, dried, salted, or brined other-aquatic-invertebrate product at the preserving-facility gate |
| How much | 1 kg of conforming product on the route-specific net-mass basis below |
| How well | Product meets the declared organism identity, intended-use class, preservation route, moisture or salt condition, temperature where relevant, and acceptance specification |
| How long or cycle | One production lot at facility gate; no storage-service duration is included unless separately declared |
| reference_flow_link | One-to-one with the exact generic Tiangong CPC 21269 product flow and the selected mutually exclusive terminal route |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg conforming product, excluding packaging |
| Reference product flow | Other aquatic invertebrates, frozen, smoked, dried, salted or in brine `026ea2a8-cdc9-469d-9eb5-10a7d33efab6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | organism or taxonomic identity; preservation route; edible, feed, bait, research, or technical intended use; product acceptance specification; net-mass method; moisture content or dry-matter basis where relevant; salt content or brine salinity where relevant; glaze fraction and deglazed mass for frozen product where applicable; drained mass and retained-brine treatment for product in brine; temperature at gate where relevant; packaging inclusion |

For frozen product, the 1 kg reference amount is deglazed net product mass and glaze water is inventoried separately. For smoked or dried product it is as-sold net product mass with moisture declared. For salted product it is as-sold net product mass with moisture and salt content declared. For product in brine it is drained product mass; supplied brine is reported separately. Another commercial mass convention may be disclosed only with measured conversion to this reference basis.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize inventory to 1 kg conforming reference product; exclude packaging mass from the reference amount and report packaging as an input. |
| `net_mass_basis` | All routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross measured mass, deductions, and resulting net product mass for each lot so the reference amount is auditable. |
| `moisture_salt_basis` | Smoked, dried, salted, and brined routes | Mass and mass fraction | kg; kg/kg | Report product moisture and, for salted or brined product, salt content or brine salinity on a declared wet or dry basis; do not compare values reported on different bases without conversion. |
| `glaze_drain_basis` | Frozen or brined route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Frozen product uses deglazed mass and separately measured glaze; brined product uses drained mass and separately records brine retained, recovered, or discarded. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | foreground_system_boundary | Include receiving, preparation, exactly one terminal preservation route, route-integrated packing, on-site utilities, direct emissions, wastes, and wastewater from raw-material receipt through product at the preserving-facility gate. | `eu-pef-2021-2279`; `codex-cxc-52-2003` |
| `boundary_upstream_inputs` | upstream_product_inputs | Represent raw aquatic-invertebrate material, electricity, fuels, water, salt, smoke-generating material, refrigerants, and packaging with the most representative upstream datasets; do not recreate their production inside the foreground process. | `eu-pef-2021-2279` |
| `boundary_route_condition` | route_selection | Include only the declared terminal route and its actual equipment and consumables; the `frozen`, `smoked`, `dried`, `salted`, and `in_brine` routes are mutually exclusive for one reference flow. | `unsd-cpc-3-0-21269`; `codex-cxc-52-2003` |
| `boundary_intended_use` | intended_use | Apply relevant Codex handling controls only to food-intended product. Preserve a declared non-food boundary for feed, bait, research, or technical product and disclose any later qualifying transformation separately. | `codex-cxc-52-2003` |
| `boundary_downstream_exclusion` | downstream_stages | Exclude distribution, retail, user preparation, consumption, and end-of-life unless the study goal explicitly adds them and reports them separately from the default foreground result. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw or previously chilled other aquatic invertebrates at preserving-facility receipt, with organism identity, source lot, temperature or preservation condition, edible or non-food status, and upstream dataset reference declared |
| starting_condition_role | Upstream product input to the common receiving and preparation process |
| product_classification_scope | Exact CPC 3.0 `21269` output scope; input material may be in another CPC state and shall retain its own identity |
| recursive_input_rule | If an input already uses the exact CPC 21269 product flow, treat it as a purchased preserved intermediate with an upstream dataset and do not recursively remodel its earlier preservation; disclose mass and route state |
| upstream_dataset_requirement | Use representative datasets for raw material and all material or energy inputs, including geography, technology, temporal coverage, and intended-use compatibility |
| disclosure | Declare the starting material state, upstream boundary, selected route, excluded stages, intended-use class, mass basis, and any missing upstream dataset |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving and preparation | `required` | All datasets | Verify identity and intended use; sort, clean, trim, and prepare material as actually performed | kg prepared material |
| `freezing_route` | Freezing and glazing route | `conditional` | Include only when route is `frozen` | Freeze, optionally glaze, and pack the product | 1 kg deglazed frozen reference product |
| `smoking_drying_route` | Smoking or drying route | `conditional` | Include only when route is `smoked` or `dried`; select exactly one mode | Smoke or dry, condition, cool, and pack the product | 1 kg as-sold product with moisture declared |
| `salting_brining_route` | Salting or brining route | `conditional` | Include only when route is `salted` or `in_brine`; select exactly one mode | Apply dry salt or brine, condition, drain as applicable, and pack the product | 1 kg salted net product or drained brined product |

### Process: Receiving and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Raw aquatic-invertebrate material (`raw_material_input`)

Record the actual received material under its own product identity; do not label it with the CPC 21269 reference flow unless it is already a purchased preserved intermediate.

- Selected flow: Most specific raw or chilled other-aquatic-invertebrate product flow available
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipt mass accepted into the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation`
- Sources: `unsd-cpc-3-0-21269`

###### Preparation water (`preparation_water`)

Record water crossing the facility boundary for washing, thawing, or preparation only when used.

- Selected flow: Process water appropriate to the declared quality
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Metered, batch-tank, or invoice-allocated use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation`
- Sources: `codex-cxc-52-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared aquatic-invertebrate intermediate (`prepared_intermediate`)

Calculate accepted prepared material from batch measurements before it enters the selected terminal route.

- Selected flow: Prepared other-aquatic-invertebrate intermediate
- Flow property / unit: Mass / kg
- Amount rule: Accepted prepared mass from the lot mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_preparation`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Rejected material and preparation residues (`preparation_residues`)

Record sorting rejects, trimmings, and other residues by actual management route; do not assume they are food co-products.

- Selected flow: Most specific residue or waste flow available
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balance-derived quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared material output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation`

##### Elementary flows

### Process: Freezing and glazing route (`freezing_route`)

#### Inputs

##### Product flows

###### Prepared intermediate for freezing (`freezing_material_input`)

The prepared intermediate crosses into the selected freezing lot and is the material basis for route yield.

- Selected flow: Prepared other-aquatic-invertebrate intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed prepared mass charged to the freezer lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg deglazed frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_route`

###### Freezing electricity (`freezing_electricity`)

Record electricity consumed by the included freezing route equipment and route-integrated handling.

- Selected flow: Site electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered freezer, cold-room, glazing, and route-integrated packing electricity allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg deglazed frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_route`
- Range: Provisional screening value used only when metered or invoice data are unavailable; replace when representative foreground data or reviewed route evidence becomes available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh/kg deglazed frozen product
  - Basis: broad screening range per kg route output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

Record water applied as ice glaze separately from the deglazed reference product mass.

- Selected flow: Water of the declared quality
- Flow property / unit: Mass / kg
- Amount rule: Measured glaze water applied, conditional on glazing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg deglazed frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_route`
- Sources: `codex-cxc-52-2003`

###### Frozen-route packaging (`freezing_packaging`)

Record packaging that crosses the facility boundary with the frozen product without adding it to reference mass.

- Selected flow: Actual primary and secondary packaging materials by material type
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued packaging mass attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg deglazed frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_route`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming frozen reference product (`frozen_reference_product`)

This output realizes the reference flow only for the declared `frozen` route and deglazed mass convention.

- Selected flow: Other aquatic invertebrates, frozen, smoked, dried, salted or in brine `026ea2a8-cdc9-469d-9eb5-10a7d33efab6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg deglazed conforming frozen product after conversion from measured gross and glaze masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_route`
- Sources: `unsd-cpc-3-0-21269`; `codex-cxc-52-2003`

##### Waste flows

###### Freezing-route wastewater and rejects (`freezing_route_waste`)

Record wastewater and rejected material leaving the freezing route by their actual treatment destinations.

- Selected flow: Wastewater and rejected-product flows by actual treatment destination
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measured or mass-balance-derived quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg deglazed frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_route`

##### Elementary flows

###### Refrigerant loss to air (`freezing_refrigerant_loss`)

Record substance-specific refrigerant released from included equipment when a loss is demonstrated.

- Selected flow: Refrigerant elementary flow matching the charged substance
- Flow property / unit: Mass / kg
- Amount rule: Measured recharge less documented recovery, allocated to the lot; include only for equipment within the boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg deglazed frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_route`

### Process: Smoking or drying route (`smoking_drying_route`)

#### Inputs

##### Product flows

###### Prepared intermediate for smoking or drying (`smoke_dry_material_input`)

The prepared intermediate crosses into exactly one selected smoking or drying mode and anchors route yield.

- Selected flow: Prepared other-aquatic-invertebrate intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed prepared mass charged to the selected route mode
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg as-sold smoked or dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_drying_route`

###### Smoking or drying energy (`smoke_dry_energy`)

Record each energy carrier consumed by the selected smoking or drying equipment and route-integrated handling.

- Selected flow: Actual electricity, fuel, or thermal-energy supplies recorded separately
- Flow property / unit: Energy or mass / kWh, MJ, or kg
- Amount rule: Metered or invoice-allocated energy for the selected `smoked` or `dried` mode
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg as-sold smoked or dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_drying_route`
- Range: Provisional screening energy used only when route-specific records are unavailable; replace when metered records or reviewed technology evidence becomes available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 30
  - Unit: kWh-equivalent/kg as-sold output
  - Basis: broad screening range spanning smoking and drying technologies
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smoke-generating material (`smoking_material`)

Record smoke-generating material only for a `smoked` route with direct smoke generation inside the boundary.

- Selected flow: Actual wood or other smoke-generating material
- Flow property / unit: Mass / kg
- Amount rule: Measured consumption; include only when route mode is `smoked` and direct smoke generation occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg smoked output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_drying_route`
- Sources: `codex-cxc-52-2003`

###### Smoking-or-drying packaging (`smoke_dry_packaging`)

Record packaging leaving with the smoked or dried product without adding it to reference mass.

- Selected flow: Actual primary and secondary packaging materials by material type
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued packaging mass attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg as-sold smoked or dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_drying_route`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming smoked or dried reference product (`smoke_dry_reference_product`)

This output realizes the reference flow only for the declared `smoked` or `dried` mode and moisture basis.

- Selected flow: Other aquatic invertebrates, frozen, smoked, dried, salted or in brine `026ea2a8-cdc9-469d-9eb5-10a7d33efab6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg as-sold conforming product with route mode and measured moisture declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoking_drying_route`
- Sources: `unsd-cpc-3-0-21269`; `codex-cxc-52-2003`

##### Waste flows

###### Smoking-or-drying residues (`smoke_dry_waste`)

Record route-specific solid and liquid residues separately by composition and destination where practicable.

- Selected flow: Product rejects, ash, condensate, and wastewater flows by actual route and destination
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measured or mass-balance-derived quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg as-sold smoked or dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_drying_route`

##### Elementary flows

###### Direct smoking or drying emissions (`smoke_dry_direct_emissions`)

Record substance-specific emissions released directly by included combustion or smoke generation.

- Selected flow: Substance-specific emissions to air from on-site combustion or smoke generation
- Flow property / unit: Mass / kg
- Amount rule: Measured emissions or calculated fuel-specific emissions; omit only when no direct-emission source is inside the boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg as-sold smoked or dried output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoking_drying_route`

### Process: Salting or brining route (`salting_brining_route`)

#### Inputs

##### Product flows

###### Prepared intermediate for salting or brining (`salt_brine_material_input`)

The prepared intermediate crosses into exactly one selected dry-salting or brining mode and anchors route yield.

- Selected flow: Prepared other-aquatic-invertebrate intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed prepared mass charged to the selected route mode
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg salted net product or drained brined output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_brining_route`

###### Salt input (`salt_input`)

Record all salt charged directly or through prepared brine so product and spent-brine salt can be reconciled.

- Selected flow: Food-grade or declared non-food-grade salt matching intended use
- Flow property / unit: Mass / kg
- Amount rule: Weighed salt charged directly or contained in prepared brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg salted net product or drained brined output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_brining_route`
- Sources: `codex-cxc-52-2003`
- Range: Provisional screening salt input used only when recipe and purchase records are unavailable; replace when batch recipe records or reviewed product-specific evidence becomes available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.005
  - Upper: 1.5
  - Unit: kg salt/kg route output
  - Basis: broad screening range spanning dry salting and brining
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brine water (`brine_water`)

Record water used to prepare or replenish brine separately from the drained reference product mass.

- Selected flow: Water of the declared quality
- Flow property / unit: Mass / kg
- Amount rule: Measured water charged to make or replenish brine; include only for `in_brine` mode
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg drained brined product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_brining_route`
- Sources: `codex-cxc-52-2003`

###### Salting-or-brining energy (`salt_brine_energy`)

Record each energy carrier consumed by the selected salting or brining equipment and route-integrated handling.

- Selected flow: Actual electricity, fuel, or thermal-energy supplies recorded separately
- Flow property / unit: Energy or mass / kWh, MJ, or kg
- Amount rule: Metered or invoice-allocated energy for mixing, pumping, conditioning, cooling, and route-integrated packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg salted net product or drained brined output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_brining_route`

###### Salting-or-brining packaging (`salt_brine_packaging`)

Record packaging leaving with the salted or brined product without adding it to reference mass.

- Selected flow: Actual primary and secondary packaging materials by material type
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued packaging mass attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg salted net product or drained brined output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_brining_route`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming salted or brined reference product (`salt_brine_reference_product`)

This output realizes the reference flow only for the declared `salted` or `in_brine` mode and applicable mass convention.

- Selected flow: Other aquatic invertebrates, frozen, smoked, dried, salted or in brine `026ea2a8-cdc9-469d-9eb5-10a7d33efab6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg conforming salted net product or drained brined product with moisture, salt condition, and retained-brine treatment declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_salting_brining_route`
- Sources: `unsd-cpc-3-0-21269`; `codex-cxc-52-2003`

##### Waste flows

###### Spent brine, wastewater, and rejects (`salt_brine_waste`)

Record spent brine, wastewater, and rejected material separately by composition and actual treatment destination.

- Selected flow: Spent brine, wastewater, and rejected-product flows by actual treatment destination
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measured discharge or mass-balance-derived quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg salted net product or drained brined output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_brining_route`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared_processes | Avoid allocation by subdividing routes, lots, meters, and unit operations or by using a documented physical causal relationship. | `eu-pef-2021-2279` |
| `allocation_residual_products` | co_products_and_residues | Classify each secondary output as product, co-product, recyclable material, or waste according to its actual destination and applicable study rules; do not assign avoided burdens without a separately declared substitution model. | `eu-pef-2021-2279` |
| `allocation_fallback` | inseparable_multioutput_process | If subdivision and physical causality are not feasible, apply an economic or other justified PEF-consistent allocation basis using representative values, disclose the formula and data period, and report sensitivity when the choice can materially change results. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_preparation` | `receiving_preparation` | Received mass, preparation water, accepted intermediate, and residues | Batch records and measurements | lot_id; organism_identity; intended_use; input_mass; water_use; prepared_mass; residue_mass; destination | Calibrated scales, meters or tank records, and lot reconciliation | kg; m3 | Each lot, with utilities reconciled at least monthly | Declared representative production period including seasonal campaigns | All included receiving and preparation operations | Sum records by lot, reconcile mass, then divide by prepared output | Calibration records; invoices or meter logs; lot sheets; residue transfer records |
| `cp_freezing_route` | `freezing_route` | Material, energy, glaze, packaging, output, wastes, and refrigerant | Batch, meter, invoice, and maintenance records | lot_id; prepared_mass; electricity; glaze_water; packaging_mass; gross_frozen_mass; glaze_mass; deglazed_mass; waste; refrigerant_charge; refrigerant_recovery | Lot weighing, submetering or allocation, packaging issue records, deglazing test, and refrigerant service balance | kg; kWh; m3 | Each lot; utilities and refrigerant reconciled over the declared period | Declared representative freezing period | All included freezing, glazing, cold holding, and route-integrated packing equipment | Convert output to deglazed mass, allocate shared utilities by documented causal driver, and normalize to 1 kg output | Scale and meter calibration; deglazing test; invoices; service records; lot reconciliation |
| `cp_smoking_drying_route` | `smoking_drying_route` | Material, energy, smoke material, packaging, output, residues, and direct emissions | Batch, meter, recipe, fuel, and emissions records | lot_id; route_mode; prepared_mass; energy_by_carrier; smoke_material; packaging_mass; product_mass; moisture; waste_by_destination; emission_factor_or_measurement | Lot weighing, meters or invoices, recipe records, moisture test, and measured or factor-based emissions | kg; kWh; MJ | Each lot, with utilities reconciled over the declared period | Declared representative smoking or drying period | Only the selected smoking or drying equipment and route-integrated packing | Keep energy carriers separate, calculate direct emissions where applicable, and normalize to 1 kg as-sold output | Calibration; invoices; recipe and moisture tests; emissions method record; lot reconciliation |
| `cp_salting_brining_route` | `salting_brining_route` | Material, salt, brine water, energy, packaging, output, spent brine, and rejects | Batch, recipe, meter, invoice, and product-test records | lot_id; route_mode; prepared_mass; salt_mass; brine_water; brine_salinity; energy_by_carrier; packaging_mass; gross_product_mass; drained_mass; moisture; product_salt; spent_brine; waste | Lot weighing, recipe sheets, salinity and moisture tests, meters, invoices, and draining protocol | kg; kWh; MJ | Each lot, with utilities reconciled over the declared period | Declared representative salting or brining period | Only the selected dry-salting or brining equipment and route-integrated packing | Reconcile salt and water, calculate drained product mass for brined output, and normalize to 1 kg route output | Scale and meter calibration; recipe sheets; salinity/moisture tests; draining record; lot reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | Reference output | Frozen net mass = gross frozen mass minus measured glaze mass; brined net mass = measured drained product mass; other routes use as-sold product mass excluding packaging, with moisture and salt basis declared. | gross_product_mass; glaze_mass; drained_mass; packaging_mass; moisture; product_salt | conforming_reference_mass_kg | `codex-cxc-52-2003` |
| `calc_normalization` | All inventory rows | normalized quantity = period or lot quantity divided by conforming reference product mass in kg. | inventory_quantity; conforming_reference_mass_kg | quantity_per_kg_reference_product | `eu-pef-2021-2279` |
| `calc_mass_balance` | Each included process | Reconcile measured material inputs with product, co-product, waste, retained brine or glaze, and quantified mass transfer or loss; investigate and disclose material imbalance. | input_masses; product_masses; waste_masses; retained_or_removed_water; measured_losses | process_mass_balance | `eu-pef-2021-2279` |
| `calc_route_selection` | Process map | Set exactly one terminal route flag true for each reference flow and exclude inventories from all non-selected route processes. | preservation_route; route_mode | selected_route_inventory | `unsd-cpc-3-0-21269` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and starting material | Retain organism identity at the practicable taxonomic level, lot, origin, intended-use class, preservation route, and acceptance specification; document why the generic CPC 21269 identity applies. | Supplier specification, receiving record, lot code, product specification, and CPC scope check |
| `dq_measurement` | Mass, energy, water, salt, brine, glaze, moisture, and emissions | Use calibrated measurements or traceable business records; state conversion factors, allocation drivers, test methods, and uncertainty or known gaps. | Calibration certificates, meter and invoice records, laboratory or production tests, and calculation workbook |
| `dq_temporal_coverage` | Foreground dataset | Cover a representative declared operating period, including seasonal or campaign variation where material, and disclose shutdowns, abnormal lots, and exclusions. | Production calendar, lot coverage summary, and representativeness assessment |
| `dq_completeness` | Included processes | Account for material and energy inputs, packaging, reference product, secondary outputs, wastes, wastewater, and direct emissions for the common process and selected terminal route. | Flow checklist, mass balance, utility reconciliation, and waste records |
| `dq_estimate_replacement` | `reasoned_estimate` ranges | Treat provisional ranges only as screening defaults. Replace them with representative foreground records or reviewed source evidence before active review, or document why the estimate remains, its uncertainty, and a sensitivity test. | Estimate register, replacement evidence, or documented sensitivity analysis |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | product_identity | Confirm the canonical PCR id, CPC 3.0 code `21269`, exact generic product-flow UUID `026ea2a8-cdc9-469d-9eb5-10a7d33efab6`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg unit. | `unsd-cpc-3-0-21269` |
| `validation_qualifiers` | reference_flow | Reject an incomplete reference flow when preservation route, organism identity, intended-use class, net-mass method, applicable moisture or salt condition, applicable glaze or drained-mass treatment, temperature where relevant, or packaging inclusion is missing. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validation_route_exclusivity` | process_inventory | Require `receiving_preparation` and exactly one terminal route. For `smoking_drying_route` select one of `smoked` or `dried`; for `salting_brining_route` select one of `salted` or `in_brine`. | `unsd-cpc-3-0-21269` |
| `validation_mass_and_inventory` | foreground_dataset | Require a route-specific reference-mass calculation, process mass balances, collection-protocol links for collected or calculated rows, upstream datasets for product inputs, and disclosure of missing flows or data. | `eu-pef-2021-2279` |
| `validation_nonfood_boundary` | intended_use | Reject a dataset that treats non-edible, feed, bait, research, or technical product as food or claims Codex food conformity without a documented qualifying process and food-product identity. | `codex-cxc-52-2003` |
| `validation_reasoned_estimates` | provisional_ranges | Flag every `reasoned_estimate`; before active review require replacement by representative records or reviewed source evidence, or a documented justification, uncertainty statement, and sensitivity analysis. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for one preserving facility, declared product, and mutually exclusive terminal route |
| downstream_use | May be published after review as a `secondary_dataset` or `background_dataset` and projected to `process` or `lifecyclemodel` entities |
| allowed_use | Comparative or attributional modelling within the declared CPC scope, route, geography, time, technology, intended-use class, and reference-mass convention |
| excluded_use | Species-specific, nutrition, food-safety, shelf-life, non-food-to-food, or alternate-route claims not supported by the dataset; use outside CPC 21269 without a documented mapping decision |
| required_metadata | Canonical PCR id; CPC code; organism identity; intended use; route and route mode; facility geography; period; technology; net-mass method; moisture and salt basis; glaze or drained-mass treatment; packaging boundary; upstream datasets; allocation; estimate status |
| required_quality_disclosure | Data sources and collection coverage; representativeness; mass and utility reconciliation; missing UUIDs or flows; reasoned estimates; allocation sensitivity; exclusions; uncertainty |
| update_trigger | Material change in organism mix, intended-use class, preservation route, technology, recipe, energy supply, product mass convention, source rule, upstream dataset, or evidence replacing a provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21269` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21269, “Other aquatic invertebrates, frozen, smoked, dried, salted or in brine.” | Product-category identity, exact classification scope, and mutually exclusive preservation-state declaration |
| `codex-cxc-52-2003` | Standard (`standard`) | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, as currently applicable to the declared organism and process. | Conditional food-intended handling, preparation, freezing, smoking, drying, salting, brining, process controls, and route-specific product measurements |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method; ELI `http://data.europa.eu/eli/reco/2021/2279/oj`. | Functional and reference-flow framing, system boundary, inventory completeness, allocation hierarchy, normalization, data quality, and disclosure |
