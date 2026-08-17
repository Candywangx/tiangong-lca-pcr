---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetables-pulses-and-potatoes-preserved-by-vinegar-or-acetic-acid
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Vegetables, pulses and potatoes, preserved by vinegar or acetic acid

## 1. Scope and Applicability

This PCR covers factory-gate production of vegetables, pulses, and potatoes preserved primarily by vinegar or acetic acid, including whole, cut, or otherwise prepared products in an acidic packing medium. It covers direct acidulation of fresh prepared material and a separately declared route in which curing or fermentation precedes final acid adjustment. The foreground boundary begins with receipt of the declared raw or cured material and ends with the stabilized, filled, and sealed product at the preserving facility gate.

Products preserved primarily by freezing, drying, sugar, oil, or salt without vinegar or acetic-acid preservation are excluded. Relishes, kimchi, sauerkraut, table olives, and products whose principal transformation belongs to another product category are excluded. Agricultural production, production of vinegar and other ingredients, inbound transport, distribution, use, and end-of-life remain upstream or downstream linked systems rather than foreground operations in this PCR.

The Tiangong flow Cucumbers `54b947e7-ab56-45c8-8210-9c91b85eb845` is a narrower CPC-21340 representative and may identify only cucumber datasets. A dataset for another vegetable, pulse, or potato must select a semantically appropriate product flow before publication; the cucumber UUID must not be reused merely because the broader category shares CPC 21340.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetables-pulses-and-potatoes-preserved-by-vinegar-or-acetic-acid |
| classification_refs | CPC 3.0: 21340 — Vegetables, pulses and potatoes, preserved by vinegar or acetic acid |
| covered_products | Whole, cut, or prepared vegetables, pulses, and potatoes preserved primarily through vinegar or acetic-acid acidulation; fresh-pack and declared cured or fermented routes; retail, food-service, or repacking packs |
| excluded_products | Raw, frozen, dried, sugar-preserved, oil-preserved, or salt-only products; relishes; kimchi; sauerkraut; table olives; products intended for a materially different principal transformation |
| representative_product | Acid-preserved cucumber represented by Tiangong flow Cucumbers; this is narrower than the full category and is not a generic flow for other vegetables, pulses, or potatoes |
| production_route | Exactly one route per foreground dataset: direct acidulation of prepared fresh material, or curing/fermentation followed by acid adjustment; filling, sealing, and stabilization follow the selected route |
| market_state | Stabilized product at the preserving facility gate, with product species, presentation, packing medium, preservation route, package format, net mass, and drained mass where relevant declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible vegetable, pulse, or potato product preserved primarily by vinegar or acetic acid and delivered at the preserving facility gate |
| How much | 1 kg net product mass, including edible packing medium where sold with the product and excluding primary, secondary, and tertiary packaging |
| How well | Conforming to the declared product identity, route, presentation, packing medium, legally applicable quality and safety specification, and an equilibrium pH of 4.6 or less for products modelled under the cited Codex acid-preserved product definitions |
| How long or cycle | One production lot at the factory gate after stabilization; no use-duration service is claimed |
| reference_flow_link | 1 kg of final preserved product output from `filling_sealing_stabilization` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product mass |
| Reference product flow | Cucumbers `54b947e7-ab56-45c8-8210-9c91b85eb845` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | biological product identity; cucumber versus non-cucumber status; direct-acidulation or cured/fermented route; fresh or cured starting condition; whole or cut presentation; vinegar or acetic-acid medium; formulation and relevant salt or soluble-solids specification; equilibrium pH test basis; net mass; drained mass where applicable; package material and size; stabilization method; production geography; reference period |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, the reference flow comment, the product description, or an equivalent data-package field. The selected Tiangong UUID does not resolve the broader category identity: it may be used only for cucumber datasets. A non-cucumber dataset is incomplete until a semantically appropriate product flow has been selected and documented.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net edible product mass on a calibrated mass basis. Include edible packing medium sold with the product and exclude all packaging mass. Normalize the inventory to exactly 1 kg. |
| `batch_material_mass` | Raw material, ingredients, packing medium, product, rejects, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross, tare, and net mass or a documented equivalent for each production lot; do not mix volume and mass without a measured lot-specific density and conversion record. |
| `equilibrium_ph` | Stabilized product and packing medium | Dimensionless pH | pH units | Measure equilibrium pH after the declared equilibration or stabilization condition using a calibrated method, identify the sampled phase and lot, and retain the test result and calibration evidence. |
| `utility_conversion` | Electricity, fuels, steam, heat, refrigeration, and compressed air | Energy or metered service | kWh, MJ, kg steam, or declared service unit | Preserve the metered unit and conversion factor; allocate shared utilities only under section 7 and report normalized energy in a consistent unit without treating energy conversion as a mass conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh accepted material for the direct-acidulation route, or cured/fermented material for the cured route, at receipt by the preserving facility; species, prior treatment, moisture or packing condition, and supplier state are declared |
| starting_condition_role | Foreground gate for receiving and preparation; agricultural production, prior curing performed by a supplier, ingredient manufacture, and inbound transport are linked upstream datasets |
| product_classification_scope | The semantic scope is vegetables, pulses, and potatoes preserved by vinegar or acetic acid; CPC 3.0 code 21340 is classification context and does not broaden the Cucumbers UUID |
| recursive_input_rule | If an acid-preserved input already belongs to this same product category, record it once as a purchased product input and link its independently produced upstream dataset; do not recreate its preservation operations inside the consuming foreground package |
| upstream_dataset_requirement | Link representative datasets for cultivation or primary production, any supplier curing, vinegar or acetic acid, water, salt and other ingredients, energy carriers, packaging materials, treatment of wastes and wastewater, and inbound transport according to actual sourcing |
| disclosure | Declare product species, cucumber/non-cucumber status, selected route, supplier starting condition, process and storage geography, reference period, stabilization method, packaging, excluded operations, cut-offs, allocation, data gaps, and whether the selected product-flow UUID is semantically valid for the product |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_completeness` | Facility foreground | Include receiving, preparation, the one selected preservation route, filling, sealing, stabilization, utilities, cleaning, product losses, rejects, wastewater, packaging scrap, and known direct emissions from those operations. | `eu-pef-2021-2279`; `codex-cxs-260-2007` |
| `sb_route_exclusivity` | Preservation route | Model exactly one of `direct_acidulation` or `curing_fermentation_acid_adjustment` for a product lot. If a reporting period contains both routes, build separate route inventories and combine only after route-specific normalization using documented output mass shares. | `codex-cxs-115-1981`; `codex-cxs-260-2007` |
| `sb_upstream_and_downstream` | Linked life-cycle stages | Connect representative upstream datasets for all purchased inputs and services. Distribution, retail, consumer use, and end-of-life are outside this factory-gate foreground dataset and must be added for a cradle-to-grave study. | `eu-pef-2021-2279` |
| `sb_exclusion_disclosure` | Cut-offs and exclusions | Do not apply an unlisted cut-off. Justify and document any exclusion and its potential significance; packaging and treatment of foreground wastes must not be silently omitted. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving and preparation | required | Always | Receive, inspect, sort, wash, trim, cut, and prepare the declared product material | kg prepared material transferred |
| `direct_acidulation` | Direct acidulation and formulation | conditional | Include only when fresh or otherwise uncured prepared material is directly acidulated; exclude when the cured/fermented route is selected | Formulate prepared material with vinegar or acetic-acid medium and declared ingredients | kg acidulated lot transferred |
| `curing_fermentation_acid_adjustment` | Curing or fermentation and acid adjustment | conditional | Include only when curing or fermentation occurs within the foreground boundary; exclude when direct acidulation is selected, and treat supplier curing as upstream if received already cured | Cure or ferment material, then adjust with vinegar or acetic acid as declared | kg cured and acid-adjusted lot transferred |
| `filling_sealing_stabilization` | Filling, sealing, and stabilization | required | Always; use the output of the one selected preservation route | Fill product and medium, close the package, apply the declared heat or non-heat stabilization, cool if needed, and release the finished product | 1 kg net preserved product |

All ranges below are deliberately broad candidate-stage QA screens based on reasoned estimates, not industry averages or publication defaults. They apply only to the stated process and normalization basis. Each range must be replaced before publication by representative foreground batches or reviewed transferable quantitative evidence; a value outside a provisional range is investigated and documented rather than automatically rejected.

### Process: Receiving and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Accepted vegetable, pulse, or potato material (`accepted_product_material`)

Record the actual biological material crossing the facility gate, including its species, fresh or cured state, supplier, lot, and prior treatment. Do not assign the Cucumbers UUID to non-cucumber material.

- Selected flow: Facility-specific vegetable, pulse, or potato material
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass issued to receiving and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources: `unsd-cpc-3-0-21340`; `codex-cxs-260-2007`; `codex-cxs-115-1981`
- Range: Provisional accepted-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.4
  - Upper: 5
  - Unit: kg
  - Basis: per kg prepared material transferred; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record metered or batch-derived water entering washing, rinsing, soaking, or preparation and keep recycled internal water from being double counted.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Net make-up water entering the preparation boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared material transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources: `eu-pef-2021-2279`; `codex-cxs-260-2007`
- Range: Provisional preparation-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per kg prepared material transferred; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation energy (`preparation_energy`)

Record metered electricity and other energy services used for sorting, washing, trimming, cutting, pumping, and internal handling.

- Selected flow: Facility-specific electricity and energy carriers
- Flow property / unit: Energy / kWh or MJ by carrier
- Amount rule: Metered process energy or documented share of a submetered total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared material transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional preparation-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh
  - Basis: per kg prepared material transferred; candidate screening only after converting carriers consistently
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared product material (`prepared_product_material`)

Record the net mass of inspected, washed, trimmed, and cut material transferred to the selected preservation route.

- Selected flow: Prepared vegetable, pulse, or potato material
- Flow property / unit: Mass / kg
- Amount rule: Net transfer mass accepted by the preservation process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process transfer mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources: `codex-cxs-260-2007`; `codex-cxs-115-1981`
- Range: Provisional preparation-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 1
  - Unit: kg
  - Basis: per kg accepted product material; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation rejects and trimmings (`preparation_rejects`)

Record separately weighed rejected product, peel, stems, damaged units, and trimmings leaving the process, with destination and moisture condition.

- Selected flow: Product-specific organic preparation waste
- Flow property / unit: Mass / kg
- Amount rule: Net waste mass leaving preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared material transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional preparation-waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg
  - Basis: per kg prepared material transferred; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater discharged from washing, rinsing, soaking, and cleaning, net of internally reused water, with destination and treatment route.

- Selected flow: Preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or documented water-balance result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared material transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_preparation_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional preparation-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per kg prepared material transferred; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Direct acidulation and formulation (`direct_acidulation`)

#### Inputs

##### Product flows

###### Prepared material for direct acidulation (`direct_route_prepared_material`)

Use only prepared material assigned to the direct-acidulation route and preserve its product and lot identity.

- Selected flow: Prepared vegetable, pulse, or potato material
- Flow property / unit: Mass / kg
- Amount rule: Net prepared mass charged to the direct-acidulation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg acidulated lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_acidulation_records`
- Sources: `codex-cxs-260-2007`; `codex-cxs-115-1981`
- Range: Provisional direct-route material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 1.2
  - Unit: kg
  - Basis: per kg acidulated lot transferred; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Vinegar or acetic-acid medium (`direct_route_acid_medium`)

Record the actual vinegar or food-grade acetic-acid solution, concentration, supplier, and mass added; do not infer acid mass from final pH alone.

- Selected flow: Product-specific vinegar or food-grade acetic-acid solution
- Flow property / unit: Mass / kg
- Amount rule: Net mass charged from batch formulation records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg acidulated lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_acidulation_records`
- Sources: `codex-cxs-260-2007`; `codex-cxs-115-1981`
- Range: Provisional acid-medium QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 2
  - Unit: kg
  - Basis: per kg acidulated lot transferred; candidate screening only and concentration-specific
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formulation water, salt, and other ingredients (`direct_route_other_ingredients`)

Record each formulation input individually in the foreground dataset even though this compact PCR card groups their collection rule. Preserve ingredient identity, concentration, and mass.

- Selected flow: Product-specific formulation water, salt, sweetener, herbs, spices, and permitted ingredients
- Flow property / unit: Mass / kg for each ingredient
- Amount rule: Individual net ingredient mass from approved batch formulation and issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg acidulated lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_acidulation_records`
- Sources: `codex-cxs-260-2007`; `codex-cxs-115-1981`
- Range: Provisional other-ingredient QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg
  - Basis: sum per kg acidulated lot transferred; candidate screening only, while publication retains separate ingredient rows
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct-acidulation energy (`direct_route_energy`)

Record mixing, pumping, heating, cooling, holding, and other route-specific energy without including the later filling and stabilization stage.

- Selected flow: Facility-specific electricity and energy carriers
- Flow property / unit: Energy / kWh or MJ by carrier
- Amount rule: Metered route energy or documented share of submetered energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg acidulated lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_acidulation_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional direct-route energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh
  - Basis: per kg acidulated lot transferred; candidate screening only after consistent carrier conversion
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Directly acidulated lot (`direct_acidulated_lot`)

Record the total product-and-medium mass transferred to filling and retain formulation, time, temperature, and equilibrium-pH links.

- Selected flow: Directly acidulated vegetable, pulse, or potato lot
- Flow property / unit: Mass / kg
- Amount rule: Net transfer mass to filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process transfer mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_acidulation_records`
- Sources: `codex-cxs-260-2007`; `codex-cxs-115-1981`
- Range: Provisional direct-route transfer QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.5
  - Unit: kg
  - Basis: per kg total measured process inputs; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Direct-route effluent and off-specification product (`direct_route_waste`)

Record off-specification mixture and discharged acid or brine separately in the foreground dataset, with treatment or recovery destination.

- Selected flow: Product-specific off-specification mixture and process effluent
- Flow property / unit: Mass / kg for each waste stream
- Amount rule: Measured or mass-balance-verified waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg acidulated lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_acidulation_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional direct-route waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: sum per kg acidulated lot transferred; candidate screening only, while publication retains separate waste rows
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Curing or fermentation and acid adjustment (`curing_fermentation_acid_adjustment`)

#### Inputs

##### Product flows

###### Prepared material for curing or fermentation (`cured_route_prepared_material`)

Use only material assigned to the cured or fermented route. If curing occurred at a supplier, receive the cured input in `receiving_preparation` and link the supplier operation upstream instead of repeating it here.

- Selected flow: Prepared vegetable, pulse, or potato material
- Flow property / unit: Mass / kg
- Amount rule: Net prepared mass charged to the foreground curing or fermentation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cured and acid-adjusted lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cured_route_records`
- Sources: `codex-cxs-115-1981`
- Range: Provisional cured-route material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 2
  - Unit: kg
  - Basis: per kg cured and acid-adjusted lot transferred; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Curing brine, salt, and process water (`curing_brine_inputs`)

Record make-up water, salt, reused brine, and other curing-medium inputs separately, with concentration and reuse cycle documented.

- Selected flow: Product-specific curing brine, salt, and water
- Flow property / unit: Mass / kg for each input
- Amount rule: Individual net charge from batch and tank records, excluding internal recirculation from repeated input counting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cured and acid-adjusted lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cured_route_records`
- Sources: `codex-cxs-115-1981`
- Range: Provisional curing-medium QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: sum per kg cured and acid-adjusted lot transferred; candidate screening only, while publication retains separate input rows
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Acid-adjustment medium and formulation ingredients (`cured_route_acid_and_ingredients`)

Record vinegar or food-grade acetic-acid solution and each ingredient added after or during curing, including concentration and actual mass.

- Selected flow: Product-specific vinegar or acetic-acid medium and formulation ingredients
- Flow property / unit: Mass / kg for each input
- Amount rule: Individual net mass from approved formulation and issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cured and acid-adjusted lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cured_route_records`
- Sources: `codex-cxs-115-1981`; `codex-cxs-260-2007`
- Range: Provisional cured-route acid-and-ingredient QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 3
  - Unit: kg
  - Basis: sum per kg cured and acid-adjusted lot transferred; candidate screening only, while publication retains separate input rows
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Curing and fermentation energy (`cured_route_energy`)

Record pumping, agitation, temperature control, refrigeration, heating, and holding energy attributable to the foreground curing or fermentation tanks and acid adjustment.

- Selected flow: Facility-specific electricity and energy carriers
- Flow property / unit: Energy / kWh or MJ by carrier
- Amount rule: Metered route energy or documented share based on equipment use and holding time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cured and acid-adjusted lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cured_route_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional cured-route energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh
  - Basis: per kg cured and acid-adjusted lot transferred; candidate screening only after consistent carrier conversion
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cured and acid-adjusted lot (`cured_acid_adjusted_lot`)

Record the total product-and-medium mass transferred to filling and retain links to tank, fermentation or curing duration, formulation, and equilibrium-pH records.

- Selected flow: Cured and acid-adjusted vegetable, pulse, or potato lot
- Flow property / unit: Mass / kg
- Amount rule: Net transfer mass to filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process transfer mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cured_route_records`
- Sources: `codex-cxs-115-1981`; `codex-cxs-260-2007`
- Range: Provisional cured-route transfer QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.5
  - Unit: kg
  - Basis: per kg total measured process inputs; candidate screening only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent brine, wastewater, and off-specification product (`cured_route_waste`)

Record spent brine, wash or desalting wastewater, tank residues, and off-specification product as separate streams in the foreground dataset, with recovery or treatment destination.

- Selected flow: Product-specific spent brine, wastewater, residues, and off-specification product
- Flow property / unit: Mass / kg for each waste stream
- Amount rule: Measured or mass-balance-verified waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cured and acid-adjusted lot transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cured_route_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional cured-route waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg
  - Basis: sum per kg cured and acid-adjusted lot transferred; candidate screening only, while publication retains separate waste rows
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Filling, sealing, and stabilization (`filling_sealing_stabilization`)

#### Inputs

##### Product flows

###### Acid-preserved lot from selected route (`preserved_lot_to_filling`)

Receive output from exactly one route for each product lot and preserve the route identifier through filling and release.

- Selected flow: Directly acidulated or cured and acid-adjusted product lot
- Flow property / unit: Mass / kg
- Amount rule: Net product-and-medium mass issued to filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg final net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_stabilization_records`
- Sources: `codex-cxs-260-2007`; `codex-cxs-115-1981`
- Range: Provisional filling-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg
  - Basis: per kg final net product; candidate screening only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary container, closure, seal, label, and attributable secondary and tertiary packaging separately by material and mass.

- Selected flow: Facility-specific packaging components by material
- Flow property / unit: Mass / kg
- Amount rule: Issued packaging less verified returns, divided by conforming net product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg final net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_stabilization_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 2
  - Unit: kg
  - Basis: per kg final net product; candidate screening only and package-format specific
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filling and stabilization energy (`filling_stabilization_energy`)

Record filling, closing, pasteurization or other stabilization, cooling, refrigeration, conveyors, and line-support energy by carrier.

- Selected flow: Facility-specific electricity and energy carriers
- Flow property / unit: Energy / kWh or MJ by carrier
- Amount rule: Metered line energy or documented share of submetered equipment energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg final net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_stabilization_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional filling-and-stabilization energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh
  - Basis: per kg final net product; candidate screening only after consistent carrier conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filling and cleaning water (`filling_cleaning_water`)

Record make-up water used for package rinsing, stabilization, cooling, and cleaning, net of documented internal recirculation.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered or water-balance-derived make-up water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_stabilization_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional filling-and-cleaning water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg
  - Basis: per kg final net product; candidate screening only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Final preserved product (`final_preserved_product`)

This is the quantitative reference. The net edible mass includes sold packing medium and excludes packaging.

- Selected flow: Cucumbers `54b947e7-ab56-45c8-8210-9c91b85eb845`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg reference product after batch normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021-2279`
- Range: Exact normalized reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Packaging scrap and rejected packages (`packaging_scrap`)

Record broken containers, closure and seal losses, label and film scrap, and rejected filled packages separately by material and destination.

- Selected flow: Packaging scrap by material
- Flow property / unit: Mass / kg
- Amount rule: Net measured packaging waste leaving the line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg final net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_stabilization_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-scrap QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per kg final net product; candidate screening only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Product loss and off-specification packages (`filling_product_loss`)

Record spilled product, start-up and shutdown losses, samples not returned, and off-specification packages by recovery or treatment route.

- Selected flow: Product-specific filling and stabilization waste
- Flow property / unit: Mass / kg
- Amount rule: Net measured product waste leaving the line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_stabilization_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional product-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per kg final net product; candidate screening only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filling and cleaning wastewater (`filling_wastewater`)

Record package-rinse, cooling, and cleaning wastewater leaving the process, net of recirculated water, with treatment destination.

- Selected flow: Filling and cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or documented water-balance result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg final net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_stabilization_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional filling-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg
  - Basis: per kg final net product; candidate screening only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output or shared operations | Avoid allocation where possible by subdividing route-, line-, or product-specific records or by expanding the system when a justified substituted function is demonstrated. | `eu-pef-2021-2279` |
| `allocation_route_separation` | Direct and cured/fermented routes | Treat the two preservation routes as mutually exclusive at lot level. For a reporting period containing both, normalize each route separately and aggregate using measured conforming product mass; do not charge both route inventories to every kilogram. | `eu-pef-2021-2279`; `codex-cxs-115-1981` |
| `allocation_residual` | Inseparable co-products and shared utilities | After subdivision and system expansion are demonstrably impracticable, use an underlying physical relationship when one can be established. Otherwise use a documented economic relationship with consistent prices and reference period, and report the method, factor, affected flows, and sensitivity. Waste treatment receives burdens and credits only according to the selected life-cycle method and documented destination. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_preparation_records` | `receiving_preparation` | All received material, preparation water and energy, prepared output, rejects, and wastewater | Lot, scale, meter, issue, transfer, and waste records | product identity; supplier and lot; fresh or cured state; gross, tare, and net mass; water meter; energy meter and carrier; prepared transfer mass; reject mass; wastewater volume or mass; destination; timestamps | Reconcile calibrated scale tickets, batch sheets, utility meters, and waste manifests to the same lot or declared allocation period | kg; m3 with measured density conversion; kWh; MJ | Each lot for materials and outputs; meter interval aligned to production | Declared representative production period covering normal product and operating variation | All facilities and lines included in the dataset | Sum lot records by product and route, subtract documented returns and internal reuse, then normalize through `calc_reference_normalization` | Scale and meter calibration; signed batch record; supplier specification; reconciliation and exception log |
| `cp_direct_acidulation_records` | `direct_acidulation` | Prepared material, acid medium, every formulation ingredient, energy, transfer output, pH, and waste | Lot formulation, issue, meter, transfer, laboratory, and waste records | route id; product lot; ingredient id and concentration; individual charge mass; energy by carrier; transfer mass; equilibrium pH, sample phase and time; waste stream and destination | Link approved formulation and actual issues to calibrated masses, submetered utilities, transfer records, and lot test results | kg; kWh; MJ; pH units | Each lot; continuous or interval utility data allocated to documented equipment operation | Declared representative period for the direct route | All direct-acidulation lines in scope | Keep ingredient rows separate, reconcile input and output mass, and normalize only direct-route output | Approved formulation; calibration; laboratory method and calibration; batch release; mass-balance review |
| `cp_cured_route_records` | `curing_fermentation_acid_adjustment` | Prepared material, brine and salt, acid and ingredients, energy, tank output, duration, pH, spent brine, wastewater, and product waste | Lot, tank, formulation, issue, meter, laboratory, transfer, and waste records | route id; product lot; tank id; charge and discharge mass; brine concentration and reuse; ingredient concentration and mass; start and end time; temperature; energy by carrier; equilibrium pH; each waste stream and destination | Reconcile tank logs, approved formulation, actual issues, calibrated masses, meters, laboratory results, and waste records | kg; h; degrees C; kWh; MJ; pH units | Each lot or tank; interval utilities aligned to occupied tank time | Declared representative period for the cured or fermented route | All curing or fermentation tanks and acid-adjustment lines in scope | Exclude internal brine recirculation from repeated inputs, keep waste streams separate, reconcile mass, and normalize route output | Tank and batch record; calibration; laboratory method and calibration; release record; mass-balance and reuse log |
| `cp_filling_stabilization_records` | `filling_sealing_stabilization` | Preserved lot, packaging, water, energy, finished product, package scrap, product loss, wastewater, pH, and stabilization conditions | Lot, package bill, issue, meter, process-control, release, waste, and laboratory records | source route and lot; product-and-medium mass; package component and issue mass; conforming unit count; net mass; drained mass where applicable; time and temperature or other stabilization parameter; water and energy; equilibrium pH; each waste mass and destination | Link route transfer to package issues, calibrated checkweigher or scale, process controls, utility meters, waste records, and release tests | kg; count; kWh; MJ; degrees C and time; pH units | Each lot; utility and process-control intervals aligned to the filling campaign | Declared representative period covering package and stabilization variants | All filling and stabilization lines in scope | Calculate conforming net product mass, separate packaging mass, reconcile product and package losses, and normalize to 1 kg | Package specification; scale and meter calibration; process-control record; release record; laboratory evidence; reconciliation log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory amount | q_normalized = q_attributable / conforming_net_product_mass_kg; report q_normalized per 1 kg reference product. Keep packaging mass outside the denominator and edible sold packing medium inside it. | attributable flow amount; conforming net product mass; package tare | normalized amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_route_exclusivity` | Preservation-route inventories | Assign each lot to exactly one route id. Aggregate route results only as sum(route-normalized amount × route conforming product mass) / total conforming product mass. | lot route id; route-specific flow totals; route-specific conforming product mass | reporting-period route-weighted inventory | `codex-cxs-115-1981`; `codex-cxs-260-2007`; `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | Each process and production lot | mass_balance_gap = total measured mass inputs − total measured product, waste, recovered material, retained inventory change, and measured discharges. Investigate and disclose material gaps; do not create an elementary emission solely to force closure. | input masses; product and waste masses; inventory change; discharge masses | process mass-balance gap and reconciliation status | `eu-pef-2021-2279` |
| `calc_shared_utility` | Shared metered utilities | Allocate only after attempted subdivision. Use measured equipment consumption or a causal driver such as operating time and rated load; document the driver and reconcile allocated shares to the meter total. | meter total; equipment measurement or causal driver; production records | attributable utility amount by process and route | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all product flows | Preserve biological product identity, preservation route, starting condition, presentation, and packing medium. The Cucumbers UUID is acceptable only for cucumber datasets; another vegetable, pulse, or potato requires a semantically appropriate flow before publication. | Product specification, label, supplier record, batch record, and product-flow review |
| `dq_primary_records` | Foreground facility processes | Use facility-specific records for all known material, water, energy, product, waste, and direct-emission flows. Document proxies and the reason direct records were unavailable. | Records required by the four collection protocols and `eu-pef-2021-2279` |
| `dq_representativeness` | Dataset reference period | Select and disclose a period that represents the declared product, route, technology, geography, package format, and normal operating variation; disclose abnormal campaigns and excluded downtime. | Production schedule, route and product mix, facility scope, reference-period rationale, and PEF representativeness assessment |
| `dq_completeness` | Inventory and linked datasets | Reconcile known inputs and outputs, link upstream datasets for purchased inputs and waste treatment, and disclose cut-offs, data gaps, allocation, and mass-balance gaps. | Mass and utility reconciliation, source list, exclusion register, and `eu-pef-2021-2279` |
| `dq_provisional_ranges` | All `reasoned_estimate` ranges | Treat ranges as temporary QA screens only. Before publication replace them with ranges from representative foreground batches or reviewed transferable evidence, record applicability, and revise the PCR when evidence materially changes a guardrail. | Range replacement register, representative batch summary or reviewed source, approval record, and update log |
| `dq_test_and_calibration` | Mass, pH, temperature, time, concentration, and utility measurements | Retain instrument identity, method, calibration or verification status, sample timing, sampled phase, and corrective action for failed checks. | Calibration certificates, laboratory method, quality-control results, process-control logs, and batch release record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_and_flow` | Reference product | Verify the declared product is within the semantic category and that Cucumbers `54b947e7-ab56-45c8-8210-9c91b85eb845` is used only for cucumber datasets. Fail publication of another vegetable, pulse, or potato until a semantically appropriate product flow is selected. | `unsd-cpc-3-0-21340`; `codex-cxs-115-1981`; `codex-cxs-260-2007` |
| `val_route_exclusive` | Process map and each lot | Verify exactly one preservation route is active for each lot, that route-specific inputs and wastes remain in that route, and that any period aggregation uses measured conforming product mass shares. | `codex-cxs-115-1981`; `codex-cxs-260-2007` |
| `val_reference_mass` | Quantitative reference | Verify the denominator is exactly 1 kg net edible product including sold packing medium and excluding packaging; check tare removal and lot normalization. | `eu-pef-2021-2279`; `codex-cxs-260-2007` |
| `val_equilibrium_ph` | Released acid-preserved product | Verify a calibrated, lot-linked equilibrium-pH result of 4.6 or less for products modelled under the cited Codex product definitions, together with sample phase, timing, method, and release decision. | `codex-cxs-115-1981`; `codex-cxs-260-2007` |
| `val_foreground_completeness` | All four foreground processes | Verify all known material, water, energy, product, waste, packaging, wastewater, and direct-emission records are represented or explicitly justified as absent; verify linked upstream datasets and waste destinations. | `eu-pef-2021-2279` |
| `val_mass_and_utility_reconciliation` | Each process and reporting period | Verify process mass-balance gaps are investigated and shared utilities reconcile to meters without double counting or arbitrary closure flows. | `eu-pef-2021-2279` |
| `val_provisional_range_replacement` | Candidate quantitative guidance | Fail publication while any `reasoned_estimate` range is being used as a default amount or lacks a documented replacement assessment based on representative batches or reviewed evidence. Values outside a provisional QA range require investigation and disclosure, not automatic substitution. | `eu-pef-2021-2279` |
| `val_allocation_and_exclusions` | Allocation, cut-offs, and reporting | Verify subdivision was attempted, the chosen residual allocation is documented and reproducible, packaging is included, exclusions are justified, and limitations prevent unsupported comparison or comparative assertion. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Facility-specific foreground data package and factory-gate product dataset for the declared acid-preserved vegetable, pulse, or potato |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and publication |
| allowed_use | Product-specific process and lifecycle-model construction for the declared species, route, formulation, geography, period, package, and stabilization technology; aggregation across routes only by the prescribed rule |
| excluded_use | Non-cucumber modelling with the Cucumbers UUID; unqualified generic modelling of all CPC 21340 products; direct comparison or comparative assertion without aligned function, product flow, route, system boundary, data quality, and review |
| required_metadata | Product species and common name; selected product-flow UUID; CPC context; cucumber/non-cucumber status; route; fresh or cured starting condition; presentation; packing medium and formulation; pH method and result; net and drained mass basis; package components; stabilization method; facility geography; technology; reference period; allocation; cut-offs; upstream dataset choices |
| required_quality_disclosure | Foreground coverage; route and product representativeness; calibration and release evidence; mass and utility reconciliation; shared-service allocation; waste and wastewater destinations; proxy and data-gap register; provisional-range replacement status; limitations of the narrower cucumber representative |
| update_trigger | A change in product-flow semantics or UUID; modelling of another vegetable, pulse, or potato; material formulation, route, stabilization, package, technology, geography, or supplier change; revised CPC, Codex, or PEF source; representative batch evidence that replaces or materially changes a provisional range; review finding affecting boundary, allocation, or validation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21340` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21340, “Vegetables, pulses and potatoes, preserved by vinegar or acetic acid,” official structure file: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Product-category title and classification context; not quantitative process evidence |
| `codex-cxs-260-2007` | Standard (`standard`) | FAO/WHO Codex Alimentarius, CXS 260-2007, Standard for Pickled Fruits and Vegetables, amended 2023: https://workspace.fao.org/sites/codex/Standards/CXS%20260-2007/CXS_260e.pdf (retrieved 2026-08-11) | Broad product definition, process decomposition, acidified packing medium, equilibrium pH, quality, filling, labelling, and hygiene context; excludes pickled cucumbers from its own scope |
| `codex-cxs-115-1981` | Standard (`standard`) | FAO/WHO Codex Alimentarius, CXS 115-1981, Standard for Pickled Cucumbers (Cucumber Pickles), amended 2025: https://openknowledge.fao.org/handle/20.500.14283/cd8998en (retrieved 2026-08-11) | Cucumber-specific fresh-pack and cured/fermented routes, acidulation, equilibrium pH, ingredients, product quality, fill, and the narrower representative-product boundary |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method, consolidated text: https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-11) | Functional-unit and reference-flow logic, life-cycle and foreground boundary, company-specific inventory, allocation hierarchy, exclusions, data quality, documentation, and validation |
