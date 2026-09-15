---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.animal-fats-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-ester-b1928cc5
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Animal fats and their fractions, partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared

## 1. Scope and Applicability

This PCR governs foreground data packages for bulk animal fats or animal-fat fractions whose triglyceride or fatty-acid structure has been modified by partial or complete hydrogenation, chemical or enzymatic interesterification, re-esterification, elaidinisation, or a declared combination of these routes. The product may be refined after modification but must not be a further-prepared formulation.

The PCR applies to food-, feed-, or technical-grade output only when the grade, animal species or source-fat family, modification route, degree of hydrogenation where applicable, refining status, product specification, and jurisdiction are declared. It covers facility-gate production from a qualified rendered or refined animal-fat input through route-specific modification, catalyst or reagent separation, optional bleaching or deodorisation, and bulk product dispatch.

The PCR does not cover unmodified rendered animal fats, vegetable or microbial fats, formulated shortenings, margarines, spreads, emulsions, finished foods, soaps, surfactants, lubricants, fatty acids produced by hydrolysis, biodiesel or hydrotreated fuels, packaging manufacture, distribution, use, or end of life. Slaughter, rendering, and prior refining are upstream unless they occur in the same controlled facility and are explicitly added as separately inventoried unit processes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.animal-fats-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-ester-b1928cc5` |
| classification_refs | CPC 3.0: 21590 (exact mapping context; classification does not own PCR identity) |
| covered_products | Bulk animal fats and animal-fat fractions that are partly or wholly hydrogenated, chemically or enzymatically interesterified, re-esterified, elaidinised, or modified by a declared combination of those routes; refined forms remain covered when not further prepared. |
| excluded_products | Unmodified rendered fats; vegetable or microbial fats; mixed or formulated shortenings, margarines, spreads, emulsions, finished foods, soaps, surfactants, lubricants, fatty-acid products, biodiesel, hydrotreated fuels, and products whose animal origin or modification route is not substantiated. |
| representative_product | Bulk modified animal fat at the production facility gate, represented by hydrogenated or interesterified rendered animal fat meeting a declared specification. |
| production_route | Receipt and conditioning of qualified rendered or refined animal fat; one or more declared hydrogenation, interesterification, re-esterification, or elaidinisation steps; catalyst or reagent separation; optional bleaching, deodorisation, polishing, and bulk dispatch. |
| market_state | Bulk liquid, semi-solid, solid, flaked, or block product at the facility gate; food, feed, or technical grade and delivery temperature are declared. Packaging is excluded unless explicitly inventoried. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished bulk animal fat or fraction modified by a declared covered route and delivered at the production facility gate. |
| How much | 1 kg net mass of conforming product, excluding packaging. |
| How well | Meets the declared product specification for source animal, modification route and degree, refining status, grade, moisture and impurities, fatty-acid or solid-fat profile where relevant, and applicable legal or customer limits. |
| How long or cycle | One representative production campaign or the declared reporting period, normalized to 1 kg of conforming output. |
| reference_flow_link | Reference product output of `finishing_and_dispatch`; internal intermediate flows are not additional functional units. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Animal fats and their fractions, partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared `d4cec444-0873-445d-b0ef-04e9c796eced` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source animal species or source-fat family; source-fat rendering and refining status; modification route or route sequence; partial or complete hydrogenation and degree where applicable; chemical or enzymatic interesterification; re-esterification or elaidinisation details where applicable; food, feed, or technical grade; fatty-acid, trans-fatty-acid, iodine-value, solid-fat, melting, moisture, impurity, and residual-catalyst specifications as applicable; geography; technology; reporting period; delivery form and temperature; allocation method; included post-treatment; packaging inclusion status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comments, product descriptions, or an equivalent data package field. A qualifier that is not applicable must be marked not applicable with a reason; silent omission makes the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | final reference product and mass-based material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass at the declared delivery state. Normalize all foreground amounts to 1,000 kg before projection to the 1 kg reference flow; exclude packaging mass unless packaging is explicitly in scope. |
| `energy_conversion` | electricity and process heat | Energy property carried by the selected Tiangong flow | MJ | Retain metered kWh and fuel or steam records. Convert electricity with 1 kWh = 3.6 MJ; for steam, retain pressure, temperature, condensate return, and the enthalpy method used instead of treating steam mass as energy. |
| `water_state` | process water and wastewater | Mass or volume carried by the selected Tiangong flow | kg or m3 | Do not combine mass and volume without a documented density and state. Distinguish once-through, recirculated, evaporated, incorporated, and discharged water. |
| `chemical_basis` | catalysts, enzymes, reagents, filter aids, and bleaching earth | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received product mass and active content or supported-catalyst composition. Report fresh makeup, recovered quantity, reuse cycles, and final disposition separately. |
| `product_quality_basis` | final product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product quantity is conforming net output. Off-spec material, rework, inventory change, and internal recycle remain visible and are not counted twice as reference product. |

## 5. System Boundary

The foreground boundary begins when qualified rendered or refined animal fat is received at the modification facility and ends when conforming bulk modified animal fat is ready for dispatch at the same facility gate. It includes receipt, heated storage where needed, conditioning, the declared modification reaction, catalyst or reagent recovery, filtration, optional bleaching or deodorisation, product finishing, directly controlled utilities, process water, wastewater, residues, off-gas, and fugitive releases.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_included_operations` | foreground facility | Include every directly controlled operation from received qualified animal-fat feedstock through conforming bulk product, including route-specific reaction, separation, filtration, optional bleaching or deodorisation, and directly controlled waste and wastewater handling. | `ec-jrc-fdm-bref-2019` |
| `boundary_upstream_inputs` | purchased inputs | Link rendered or refined source fat, electricity, steam or heat, hydrogen, catalysts, enzymes, reagents, water, filter aids, and treatment services to representative upstream datasets; do not assign zero upstream burden merely because they are purchased. | `eu-environmental-footprint-2021-2279` |
| `boundary_recursive_inputs` | same-category rework or purchased modified fat | Record same-category rework or purchased modified animal fat as an explicit product input. Internal recycle stays inside the foreground mass balance; purchased same-category material requires an upstream dataset and must not recursively invoke this PCR without termination. | `eu-environmental-footprint-2021-2279` |
| `boundary_source_fat` | slaughter and rendering | Treat slaughter, rendering, and prior refining as upstream unless they are under the same data-control boundary and separately inventoried. For food-grade source fat, preserve evidence of eligible animal origin and hygienic raw-material handling. | `codex-cxs-211-1999`; `eu-regulation-853-2004` |
| `boundary_exclusions` | downstream life cycle | Exclude packaging, distribution, use, formulation into further-prepared products, and end of life unless the study explicitly expands the boundary and reports those additions separately from the gate-to-gate PCR result. | `eu-environmental-footprint-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified rendered or refined animal fat is received at the modification facility gate with source species or source-fat family, prior rendering and refining status, grade, quantity, quality specification, and supplier lot declared. |
| starting_condition_role | Upstream product input to the foreground modification system; it is not a burden-free waste by default. |
| product_classification_scope | Semantic category of animal fats and their fractions modified by the covered routes; CPC 3.0 code 21590 is mapping context only. |
| recursive_input_rule | Internal rework is tracked within the foreground balance. Purchased modified animal fat is an explicit same-category product input linked once to an upstream dataset; no silent recursion or burden-free substitution is allowed. |
| upstream_dataset_requirement | Use representative upstream datasets for source animal fat, purchased energy, hydrogen, catalysts, enzymes, reagents, water, filter aids, transport included by the study, and off-site treatment. Record geography, technology, period, grade, and allocation compatibility. |
| disclosure | Declare source animal, feedstock route, grade, modification route sequence, reaction and post-treatment technology, upstream boundary, allocation decisions, internal recycle, co-products, waste destinations, included utilities, packaging status, jurisdiction, reporting period, and data gaps. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt_conditioning` | Feedstock receipt and conditioning | required | Always included from receipt of qualified source fat; zero-activity conditioning is explicitly declared. | foreground feedstock receipt, storage, clarification, drying, and preparation | 1,000 kg conforming final product |
| `hydrogenation` | Catalytic hydrogenation | conditional | Include when any part of the product is partly or wholly hydrogenated. | foreground route-specific reaction and catalyst separation | 1,000 kg hydrogenated intermediate |
| `non_hydrogenation_modification` | Interesterification, re-esterification, or elaidinisation | conditional | Include each applicable chemical, enzymatic, re-esterification, or elaidinisation route; split materially different routes into child unit processes. | foreground route-specific modification | 1,000 kg route-modified intermediate |
| `finishing_and_dispatch` | Finishing and bulk dispatch | required | Always include product recovery and conformity release; optional filtration, bleaching, deodorisation, or polishing is declared. | foreground catalyst or reagent removal, refining, finishing, and reference product release | 1,000 kg conforming final product |

### Process: Feedstock receipt and conditioning (`feedstock_receipt_conditioning`)

#### Inputs

##### Product flows

###### Qualified rendered or refined animal fat feedstock (`source_animal_fat`)

Record each source-fat lot separately when animal species, rendering route, refining status, grade, supplier, or allocation differs. The selected Tiangong flow is a generic rendered-animal-fat candidate and must be replaced when a more specific source-fat identity is available.

- Selected flow: Other animal fats, rendered `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass received plus opening inventory minus closing inventory, excluding rejected lots transferred outside the product system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Sources: `codex-cxs-211-1999`; `eu-regulation-853-2004`
- Range: Provisional source-fat requirement
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1000
  - Upper: 1150
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity`)

Record electricity used for unloading, heated storage, pumping, clarification, drying, and controls when these activities occur.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: submetered electricity or justified allocation from facility meters; retain original kWh and convert to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Range: Provisional conditioning electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning process water (`conditioning_water`)

Record only water crossing the process boundary for washing, cleaning attributable to the batch, cooling makeup, or aqueous conditioning; do not record recirculation repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered intake or tank-level balance minus documented recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Range: Provisional conditioning water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

No default elementary flow is imposed. Record measured or legally reportable direct releases with the correct receiving compartment and a confirmed Tiangong elementary-flow UUID.

#### Outputs

##### Product flows

###### Conditioned animal-fat intermediate (`conditioned_animal_fat`)

Calculate the transferred intermediate from measured tank or batch quantities and retain moisture, impurities, off-spec, and inventory-change records.

- Selected flow: Other animal fats, rendered `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer to the next foreground process, reconciled with input, residues, wastewater, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_records`
- Range: Provisional conditioned-intermediate screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 850
  - Upper: 1150
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning residues (`conditioning_residues`)

Record screenings, settled solids, off-spec source fat sent to treatment, and cleaning residues by destination. Select a route-specific Tiangong waste flow when the concrete residue is known.

- Selected flow: Route-specific conditioning residue; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured shipment, container mass difference, or mass-balance residual supported by records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Range: Provisional conditioning-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater`)

Record discharged water by treatment destination and preserve pollutant measurements; do not equate water intake with wastewater without a water balance.

- Selected flow: Wastewater `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered discharge or documented water balance, separated by on-site and off-site treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Range: Provisional conditioning-wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Catalytic hydrogenation (`hydrogenation`)

#### Inputs

##### Product flows

###### Conditioned animal-fat feed (`hydrogenation_fat_feed`)

Record the measured mass transferred to each hydrogenation batch and the pre-reaction quality profile used to define the target degree of hydrogenation.

- Selected flow: Other animal fats, rendered `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured batch charge adjusted for tank inventory changes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg hydrogenated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_records`

###### Purchased hydrogen (`hydrogen_input`)

Record hydrogen supply by meter or cylinder and tank inventory. Select a Tiangong product-flow UUID whose production route and delivery state match the actual supply; the confirmed coal-route Hydrogen flow is not a generic default.

- Selected flow: Hydrogen; route-appropriate Tiangong product-flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: opening inventory plus purchases minus closing inventory, recovered hydrogen, and documented transfers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg hydrogenated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Provisional hydrogen-consumption screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per 1,000 kg hydrogenated intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hydrogenation catalyst (`hydrogenation_catalyst`)

Record the actual catalyst chemistry, support, active content, fresh makeup, reuse, recovery, and disposal. The selected flow represents a nickel-based fat-hydrogenation catalyst and is used only when that identity matches.

- Selected flow: Nickel hydrogenation catalyst `33ee71d1-f1f9-4a85-857e-d3e009330523`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fresh catalyst charged minus recovered unused catalyst, with reused catalyst cycles reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg hydrogenated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Official-technique catalyst QA ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1,000 kg hydrogenated fat product for the nickel-catalysed technique described by the source
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ec-jrc-fdm-bref-2019`

###### Hydrogenation electricity (`hydrogenation_electricity`)

Record electricity for agitation, compression, vacuum, pumping, cooling, controls, and filtration attributable to hydrogenation.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: submetered kWh or justified allocation from facility meters, converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hydrogenated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_records`
- Range: Provisional hydrogenation-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kWh
  - Basis: per 1,000 kg hydrogenated intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hydrogenation steam (`hydrogenation_steam`)

Record purchased steam when it provides reaction heat, drying, or vacuum service; preserve pressure, temperature, condensate return, and enthalpy calculation.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered steam mass corrected for condensate return; also calculate useful heat from declared steam state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hydrogenated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Provisional hydrogenation-steam screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg hydrogenated intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hydrogenated animal-fat intermediate (`hydrogenated_intermediate`)

Record reactor and post-separation output with the achieved degree of hydrogenation and product-quality results.

- Selected flow: Animal fats and their fractions, partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared `d4cec444-0873-445d-b0ef-04e9c796eced`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured intermediate transferred to finishing, excluding retained catalyst, filter residue, vented material, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg hydrogenated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_records`
- Range: Provisional hydrogenation yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg conditioned animal-fat feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent hydrogenation catalyst (`spent_hydrogenation_catalyst`)

Record recovered catalyst as a product output only when it is transferred for verified recovery; otherwise select the correct waste-flow identity and treatment route.

- Selected flow: Spent catalyst `234379c3-585e-479e-8512-d647e4be69a2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured recovered or discarded catalyst plus catalyst retained in filter media, reconciled with fresh and reused catalyst
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg hydrogenated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydrogenation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Catalyst recovery and loss QA ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1,000 kg hydrogenated intermediate for the nickel-catalysed technique described by the source
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ec-jrc-fdm-bref-2019`

##### Elementary flows

###### Fugitive or vented hydrogen to air (`hydrogen_to_air`)

Record only measured or balance-supported releases to the declared air compartment; do not assume purchased hydrogen is fully consumed.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured vent release or hydrogen balance residual after consumption, recovery, inventory change, and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hydrogenated intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydrogenation_records`
- Range: Provisional hydrogen-release screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per 1,000 kg hydrogenated intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Interesterification, re-esterification, or elaidinisation (`non_hydrogenation_modification`)

#### Inputs

##### Product flows

###### Animal-fat feed and compatible co-feed (`non_hydrogenation_fat_feed`)

Record each animal-fat feed, fatty-acid or glyceride co-feed, and internal blend component separately. Select route-specific Tiangong UUIDs in a concrete dataset.

- Selected flow: Other animal fats, rendered `42e4d7de-ef5e-4dd5-96f9-8680da80c5db` for the main animal-fat feed; co-feed UUIDs unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured batch charges adjusted for inventory and internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg route-modified intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_non_hydrogenation_records`
- Range: Provisional total fat-feed requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1150
  - Unit: kg
  - Basis: per 1,000 kg route-modified intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route catalyst, enzyme, or reagent (`route_reagent`)

Record the chemical catalyst, immobilised enzyme, alcohol, glycerol, fatty acid, or other route reagent actually used. Keep active content, carrier, recovery, and reuse explicit; no generic UUID is assigned by this PCR.

- Selected flow: Route-specific catalyst, enzyme, or reagent; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured fresh charge minus recovered reusable material, with active content reported
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg route-modified intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_non_hydrogenation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Provisional route-reagent screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg route-modified intermediate; excludes separately recorded fat or fatty-acid co-feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Modification electricity (`non_hydrogenation_electricity`)

Record electricity for reaction, agitation, pumping, temperature control, vacuum, separation, and enzyme-bed operation as applicable.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: submetered kWh or justified allocation from facility meters, converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg route-modified intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_non_hydrogenation_records`
- Range: Provisional modification-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg route-modified intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Modification steam (`non_hydrogenation_steam`)

Record steam used for heating, drying, catalyst inactivation, or vacuum generation and preserve steam-state data.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered steam mass corrected for condensate return and converted to useful heat with a declared method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg route-modified intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_non_hydrogenation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Provisional modification-steam screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg route-modified intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Modification process water (`non_hydrogenation_water`)

Record water used for catalyst inactivation, cleaning attributable to the route, cooling makeup, or aqueous separation; avoid double-counting recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered intake or batch charge minus documented recirculation and recovered water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg route-modified intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_non_hydrogenation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Provisional modification-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1700
  - Unit: kg
  - Basis: per 1,000 kg route-modified intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

No default direct-emission profile is imposed. Record monitored releases with the correct substance and compartment.

#### Outputs

##### Product flows

###### Route-modified animal-fat intermediate (`non_hydrogenation_intermediate`)

Record the measured route output with the declared product composition, route chemistry, and quality results.

- Selected flow: Animal fats and their fractions, partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared `d4cec444-0873-445d-b0ef-04e9c796eced`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured intermediate transferred to finishing, reconciled with residues, wastewater, recovered material, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg route-modified intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_non_hydrogenation_records`
- Range: Provisional modification-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg total fat and fatty-acid feed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent route catalyst or residue (`spent_route_material`)

Record spent catalyst, enzyme carrier, salts, soapstock, aqueous phase, or reaction residue separately by composition and destination.

- Selected flow: Route-specific spent material; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured shipment or container balance reconciled with fresh and recovered route material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg route-modified intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_non_hydrogenation_records`
- Range: Provisional spent-route-material screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per 1,000 kg route-modified intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Modification wastewater (`non_hydrogenation_wastewater`)

Separate aqueous catalyst-inactivation streams, cleaning water, and vacuum-system wastewater when their treatment differs.

- Selected flow: Wastewater `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered discharge or documented water balance, with treatment route and key pollutant measurements
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg route-modified intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_non_hydrogenation_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Water-ring-vacuum wastewater QA ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.7
  - Unit: m3
  - Basis: per 1,000 kg unrefined oil or fat only when the documented water-ring-vacuum technique is comparable
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ec-jrc-fdm-bref-2019`

##### Elementary flows

### Process: Finishing and bulk dispatch (`finishing_and_dispatch`)

#### Inputs

##### Product flows

###### Modified animal-fat intermediate (`finishing_intermediate`)

Record each internal intermediate entering filtration, bleaching, deodorisation, polishing, blending of covered intermediates, or bulk finishing.

- Selected flow: Animal fats and their fractions, partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared `d4cec444-0873-445d-b0ef-04e9c796eced`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer to finishing adjusted for internal recycle and tank inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Range: Provisional finishing-input requirement
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1150
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bleaching earth (`bleaching_earth`)

Record only when bleaching is performed and verify that the selected flow identity matches the supplied adsorbent.

- Selected flow: Bleaching earth `68d5c9c4-5b4b-419d-a1ca-245d8673eda0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fresh material issued to the batch minus unused returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Provisional bleaching-earth screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing electricity (`finishing_electricity`)

Record electricity for pumps, filters, vacuum, cooling, deodorisation auxiliaries, product forming, and bulk dispatch.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: submetered kWh or justified allocation from facility meters, converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Range: Provisional finishing-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kWh
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing steam (`finishing_steam`)

Record steam used for drying, deodorisation, vacuum, heated storage, or product forming and retain its state and condensate return.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered steam mass corrected for condensate return and converted to useful heat with a declared method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Provisional finishing-steam screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

Record monitored air releases from deodorisation, vacuum, heating, or product handling with the correct receiving compartment. Combustion emissions belong to on-site fuel combustion only when combustion is inside the foreground boundary.

#### Outputs

##### Product flows

###### Conforming modified animal fat (`reference_product`)

This is the sole reference product output. Report the final route, quality, grade, and delivery state and exclude off-spec, rework, and packaging mass.

- Selected flow: Animal fats and their fractions, partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared `d4cec444-0873-445d-b0ef-04e9c796eced`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1,000 kg conforming net product after batch normalization; project to 1 kg for the PCR reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `unsd-cpc-3-0-21590`
- Range: Reference-flow normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Recovered fat distillate or other co-product (`recovered_fat_coproduct`)

Record saleable or internally reused distillate, recovered fat, or other co-product separately with composition, quantity, destination, and market status. Do not label a residue as a co-product solely to avoid waste treatment.

- Selected flow: Route-specific recovered co-product; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer or shipment quantity adjusted for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Range: Provisional recovered-co-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent filter media and bleaching earth (`spent_filter_media`)

Record spent filter aid, bleaching earth, retained oil, and catalyst by composition and treatment or recovery destination. Select a route-specific waste-flow UUID in the concrete dataset.

- Selected flow: Spent filter media or bleaching earth; Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured shipment or container balance, including retained oil and catalyst where analytically or operationally determined
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Provisional spent-filter-media screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: per 1,000 kg conforming final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing wastewater (`finishing_wastewater`)

Record condensate or wastewater from vacuum, washing, or cleaning by treatment route and preserve COD or other applicable pollutant measurements.

- Selected flow: Wastewater `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered discharge or documented water balance, separated by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `ec-jrc-fdm-bref-2019`
- Range: Water-ring-vacuum wastewater QA ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.7
  - Unit: m3
  - Basis: per 1,000 kg unrefined oil or fat only when the documented water-ring-vacuum technique is comparable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ec-jrc-fdm-bref-2019`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separable processes, batches, meters, and product lines | Avoid allocation by subdividing unit processes and collecting directly attributable material, energy, emission, and waste records for the covered product. | `eu-environmental-footprint-2021-2279` |
| `allocation_system_expansion` | multifunctional outputs with a defensible substituted function | If subdivision is not possible, evaluate system expansion before partitioning burdens and document the substituted function and dataset. | `eu-environmental-footprint-2021-2279` |
| `allocation_physical` | remaining shared inputs and outputs | If allocation cannot be avoided, use a relevant quantifiable physical relationship that reflects the function provided; simple mass allocation is allowed only when mass is demonstrably relevant. | `eu-environmental-footprint-2021-2279` |
| `allocation_other_relationship` | cases without a defensible physical relationship | Use another relationship such as economic value only after documenting why subdivision, system expansion, and physical allocation are not applicable; prices must match the process stage and reporting period. | `eu-environmental-footprint-2021-2279` |
| `allocation_internal_recycle` | internal rework, recovered catalyst, recovered fat, and solvent or water recycle | Keep internal recycle inside the foreground balance and count only net purchased inputs and net outputs crossing the boundary. Do not assign avoided burdens to internal recycle. | `eu-environmental-footprint-2021-2279` |
| `allocation_residue_status` | recovered fat, distillate, spent catalyst, filter media, and other residues | Classify an output as co-product, recoverable material, or waste from documented destination and market function. Disclose the allocation or treatment applied and test sensitivity when the choice is material. | `eu-environmental-footprint-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_records` | `feedstock_receipt_conditioning` | source fat, utilities, conditioned intermediate, residues, wastewater | weighbridge, tank, meter, batch, supplier, laboratory, and waste-shipment records | lot id; species/source-fat family; supplier; rendering/refining status; grade; opening/closing inventory; gross/tare/net mass; moisture; impurities; electricity; water; conditioned output; residues; wastewater; timestamps | calibrated scales and tanks, utility meters, supplier documents, laboratory results, and signed waste records | kg; kWh; MJ; m3 | each lot and batch; utility meters at least monthly or per campaign | complete representative campaign and the declared reporting period | all receipt, storage, and conditioning equipment in the foreground facility | reconcile inventory and batch transfers; normalize by conforming final-product mass; keep unlike species, grades, or routes separate | calibration status; meter coverage; supplier traceability; lab method; inventory reconciliation; missing-data log |
| `cp_hydrogenation_records` | `hydrogenation` | fat feed, hydrogen, catalyst, electricity, steam, intermediate, spent catalyst, and vented hydrogen | batch sheet, gas meter, cylinder or tank inventory, catalyst issue/return, utility meter, product test, recovery and waste records | batch id; feed mass and quality; hydrogen opening/purchase/closing/recovery/vent; catalyst composition and active content; fresh/reused/recovered mass; kWh; steam state and mass; output mass and quality; spent catalyst; timestamps | calibrated mass and gas measurement, inventory reconciliation, batch control system, utility meters, laboratory results, and shipment records | kg; kWh; MJ | every batch with monthly or campaign reconciliation | complete representative hydrogenation campaign and declared reporting period | all hydrogenation reactors, gas systems, separation, and directly controlled utilities | calculate net hydrogen and catalyst use; reconcile mass and hydrogen balance; normalize by hydrogenated intermediate and final product | meter calibration; gas purity record; catalyst certificate; batch genealogy; product analysis; balance residual and investigation |
| `cp_non_hydrogenation_records` | `non_hydrogenation_modification` | fat and co-feed, route reagent, enzyme or catalyst, utilities, intermediate, residue, and wastewater | batch sheet, material issue/return, utility meter, enzyme-bed or reactor log, lab, recovery and waste records | route id; feed and co-feed mass; catalyst/enzyme/reagent identity, concentration and mass; reuse and recovery; kWh; steam; water; output mass and quality; residue; wastewater; timestamps | calibrated scales and meters, batch control records, supplier certificates, laboratory tests, and shipment records | kg; kWh; MJ; m3 | every batch with monthly or campaign reconciliation | complete representative route campaign and declared reporting period | each chemically or enzymatically distinct route in the foreground facility | keep routes separate; calculate net reagent use and route yield; normalize by route output and final product | calibration; supplier certificate; route conditions; enzyme activity where applicable; lab method; mass-balance residual |
| `cp_finishing_records` | `finishing_and_dispatch` | intermediate, bleaching earth, utilities, reference product, co-products, filter media, wastewater, and quality | tank and batch records, filter and deodoriser logs, material issue, utility meter, lab release, shipment and waste records | intermediate mass; inventory; bleaching-earth or filter-aid mass; kWh; steam state and mass; wastewater; condensate; filter residue; recovered fraction; final product net mass; grade; route; quality results; delivery state; timestamps | calibrated scales, tanks and meters, process logs, laboratory release records, dispatch documents, and signed waste records | kg; kWh; MJ; m3 | every batch and shipment with monthly or campaign reconciliation | complete representative finishing campaign and declared reporting period | all finishing, storage, forming, and bulk dispatch equipment inside the boundary | count only conforming output as reference product; reconcile inputs, outputs, recycle, residues, inventory, and wastewater; normalize to 1,000 kg | calibration; batch genealogy; lab release; dispatch mass; treatment destination; balance residual and corrective action |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_normalization` | every foreground amount | normalized amount per 1,000 kg = recorded amount divided by conforming final-product mass from the same coherent period, multiplied by 1,000 | recorded amount; conforming final-product mass; aligned time and batch scope | normalized inventory amount |  |
| `calc_inventory_change` | tanks, cylinders, warehouses, catalyst, and reusable materials | net consumption = opening inventory + purchases or receipts - closing inventory - verified transfers out; internal transfers cancel within the boundary | opening inventory; receipts; closing inventory; transfers | net input crossing the boundary |  |
| `calc_route_yield` | each conditioning, modification, and finishing process | yield = conforming process output divided by total relevant feed input; report rework, co-product, waste, evaporation, and inventory change separately | process feed; process output; rework; co-product; waste; inventory change | route yield and reconciled mass table |  |
| `calc_hydrogen_balance` | hydrogenation | hydrogen consumed or unaccounted = opening inventory + purchases - closing inventory - recovered hydrogen - measured transfers - measured vent; investigate unexplained residual | hydrogen inventory; purchases; recovery; transfer; vent measurements | hydrogen use, release, and balance residual | `ec-jrc-fdm-bref-2019` |
| `calc_shared_utility` | shared electricity, steam, heat, water, vacuum, and treatment | use direct metering first; if unavailable, allocate only by a documented relevant physical driver and report the basis and sensitivity | facility utility total; direct meter data; operating time; throughput; equipment duty | product-attributed utility amount | `eu-environmental-footprint-2021-2279` |
| `calc_steam_energy` | steam inputs | calculate useful heat from steam and condensate enthalpy at declared pressure and temperature; do not substitute steam mass for energy | steam mass; pressure; temperature; condensate state and return | useful heat in MJ and retained steam mass record |  |
| `calc_water_balance` | each water-using process | water input = discharged wastewater + evaporation + water in products and residues + inventory change + documented losses; retain recirculation separately | water intake; discharge; evaporation; product/residue water; inventory; recycle | water balance and unexplained residual | `ec-jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | source and reference products | Preserve batch-level source animal or source-fat family, origin, rendering/refining status, grade, modification route sequence, and final product specification; do not merge materially different routes without separate results. | supplier records; batch genealogy; final certificate; `codex-cxs-211-1999`; `unsd-cpc-3-0-21590` |
| `dq_measurement` | mass, gas, energy, water, and quality data | Use calibrated or verified measurement systems; record method, unit, resolution, calibration status, missing values, substitutions, and uncertainty. | calibration certificates; meter register; laboratory method; `eu-environmental-footprint-2021-2279` |
| `dq_temporal` | reporting period | Cover a complete representative production campaign and the declared reporting period. When annual representativeness is claimed, include the relevant operating and shutdown periods or justify exclusions. | production calendar; batch list; meter coverage; downtime log |
| `dq_completeness` | inventory | Include all environmentally relevant material, energy, water, waste, and elementary flows inside the declared boundary. Identify every omission and its reason; do not use an undisclosed cut-off during initial screening. | completeness checklist; mass, hydrogen, energy, and water balances; `eu-environmental-footprint-2021-2279` |
| `dq_representativeness` | foreground and linked upstream datasets | Assess technological, geographical, and time representativeness and precision; document dataset substitutions and why they are the best available match. | data-quality assessment; dataset metadata; `eu-environmental-footprint-2021-2279` |
| `dq_allocation` | multifunctional operations | Retain direct-meter and process-separation evidence and document the complete allocation hierarchy, factors, prices or physical relationships, and sensitivity where material. | allocation worksheet; meter map; product and co-product records; `eu-environmental-footprint-2021-2279` |
| `dq_provisional_ranges` | every `reasoned_estimate` range | Treat provisional ranges only as QA or authoring screens. A value inside a range is not evidence; replace publication-critical provisional ranges with reviewed foreground or external evidence. | manifest review metadata; foreground records; reviewer decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product category and reference flow | The canonical PCR id, reference flow UUID, mass property UUID, unit-group UUID, CPC context, product name, and required qualifiers are present and mutually consistent. | `unsd-cpc-3-0-21590` |
| `validate_reference_mass` | final dataset | Exactly one reference product is normalized to 1 kg conforming net output; packaging, off-spec material, rework, and co-products are not counted as reference product. | `eu-environmental-footprint-2021-2279` |
| `validate_route_processes` | process map | `feedstock_receipt_conditioning` and `finishing_and_dispatch` are present; every declared hydrogenation, interesterification, re-esterification, or elaidinisation route has a matching process inventory and collection protocol. | `ec-jrc-fdm-bref-2019` |
| `validate_uuid_integrity` | all UUID-bearing rows | Every stored UUID is confirmed without a dataset version and its flow type, property, unit, route, and compartment match the row. Unresolved route-specific identities remain explicit blockers and are never replaced by a semantically wrong proxy. |  |
| `validate_mass_balance` | each process and full foreground | Inputs, outputs, wastes, elementary releases, recycle, and inventory change reconcile; every unexplained residual is quantified, investigated, and disclosed. | `eu-environmental-footprint-2021-2279` |
| `validate_hydrogenation` | hydrogenation route | Hydrogen supply route, net use, vent or fugitive release, catalyst identity, active content, reuse, recovery, spent-catalyst destination, and achieved product modification are reported. | `ec-jrc-fdm-bref-2019` |
| `validate_water_and_waste` | water, wastewater, catalyst, filter media, and residues | Intake, recirculation, discharge, treatment destination, pollutant data, recovered materials, and waste status are consistent with water and mass balances. | `ec-jrc-fdm-bref-2019` |
| `validate_allocation` | shared and multifunctional operations | Allocation is avoided by subdivision or system expansion where possible; any physical or other allocation is justified, reproducible, and disclosed with sensitivity when material. | `eu-environmental-footprint-2021-2279` |
| `validate_grade_and_law` | food-, feed-, or technical-grade output | The declared grade, jurisdiction, source-fat eligibility, quality specification, and applicable legal or customer limits are supported by current records; this PCR does not convert Codex or EU examples into universal limits. | `codex-cxs-211-1999`; `eu-regulation-853-2004` |
| `validate_data_quality` | foreground and upstream data | Coverage, calibration, technological, geographical and time representativeness, precision, substitutions, missing data, and every provisional estimate are reported. | `eu-environmental-footprint-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` produced from a reviewed foreground data package; the role is declared. |
| downstream_use | Construction of foreground `process` datasets and downstream `lifecyclemodel` projections for modified animal fats matching the declared source, route, grade, geography, technology, and period. |
| allowed_use | Gate-to-gate modelling of bulk covered modified animal fats when reference-flow qualifiers, boundary, allocation, upstream datasets, and data-quality disclosures match the intended study. |
| excluded_use | Unmodified animal fat; vegetable or microbial fat; slaughter or rendering without added unit processes; further-prepared formulations or foods; biodiesel or fuels; another species, route, grade, jurisdiction, geography, technology, or period without representativeness review; cradle-to-grave claims from this gate-to-gate dataset alone. |
| required_metadata | canonical PCR id and version when published; source species or source-fat family; source-fat route; modification route sequence and degree; catalyst, enzyme, or reagent identity; refining and post-treatment; grade; product specification; reference amount and UUIDs; geography; technology; reporting period; boundary; allocation; upstream datasets; co-products; wastes; water; data sources; collection protocols; unresolved identities; reasoned estimates. |
| required_quality_disclosure | measurement and calibration coverage; batch and temporal coverage; mass, hydrogen, energy, and water balance residuals; missing data; substitutions; allocation factors and sensitivity; upstream dataset representativeness; uncertainty; provisional ranges; legal and product-specification applicability. |
| update_trigger | Material change in source species or feedstock route, modification chemistry or degree, catalyst or enzyme, process equipment, product grade or specification, energy or water supply, recovery or waste route, allocation, jurisdictional requirement, reporting period representativeness, Tiangong identity, or authoritative evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21590` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, class 21590, https://unstats.un.org/unsd/classifications/cpc/version3 (retrieved 2026-08-07); official structure evidence extracted from https://unstats.un.org/UNSDWebsite/statcom/session_55/documents/BG-4e-draft-CPC-structure-E.pdf | Classification context and the external category wording used to test, but not own, the semantic product boundary. |
| `codex-cxs-211-1999` | Standard (`standard`) | Codex Alimentarius, Standard for Named Animal Fats, CXS 211-1999, https://www.fao.org/input/download/standards/337/CXS_211e_2015.pdf (retrieved 2026-08-07) | Food-grade animal-fat source identities, eligible rendered fats, processing and labelling context, and input-quality disclosure. |
| `eu-regulation-853-2004` | Standard (`standard`) | Regulation (EC) No 853/2004, Annex III, Section XII, rendered animal fats and greaves, consolidated official text https://eur-lex.europa.eu/eli/reg/2004/853/2023-02-15/eng (retrieved 2026-08-07) | Food-grade raw-material eligibility, hygienic transport and storage, rendering and refining context, and upstream evidence requirements. |
| `ec-jrc-fdm-bref-2019` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-07) | Oil-and-fat process decomposition: hydrogen, nickel catalyst, filtration, light bleaching, deodorisation, vacuum, interesterification-related water use, catalyst recovery, wastewater, and technique-specific QA ceilings. |
| `eu-environmental-footprint-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated official text https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-07) | Functional-unit completeness, foreground and secondary data, data quality, cut-off disclosure, system boundary, and the allocation hierarchy. |
