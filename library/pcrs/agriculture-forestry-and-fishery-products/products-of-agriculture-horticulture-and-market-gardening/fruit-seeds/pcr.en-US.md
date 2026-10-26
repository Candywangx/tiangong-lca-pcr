---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fruit Seeds for Sowing at the Declared Seed Gate

## 1. Scope and Applicability

This PCR guides foreground data-package construction for fruit seeds intended for sowing. It covers seed production or multiplication, harvest of seed-bearing fruit or dry fruit structures, species-dependent seed extraction, primary conditioning, grading and quality release, optional treatment, packaging, and storage to a declared seed gate. The category is intentionally route-flexible because fruit seeds may be recovered from fleshy fruits, dry fruits, pods, stones, or similar reproductive structures, and may be produced in annual field crops, protected cultivation, orchards, or seed gardens.

The PCR applies only when the output is an identifiable seed lot with a declared crop or plant identity and sowing purpose. It does not prescribe one cultivar, seed class, extraction technology, storage temperature, moisture target, quality threshold, fertilizer programme, or emission factor. Those values are foreground records or declared, source-backed choices.

Excluded are fruit harvested only for food, feed, processing, or oil when the seed is not an intended sowing product; seedlings, transplants, grafted plants, rootstocks, cuttings, and living planting material; breeding or parental material that remains an internal input and is not the reference output; manufacture of fertilizers, pesticides, treatment products, packaging, or equipment; downstream crop cultivation using the seed; retail and consumer use; and distribution after the declared gate unless a delivered gate is explicitly modelled.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds |
| classification_refs | CPC 3.0 `01360`, Fruit seeds; mapping relation: exact |
| covered_products | Identifiable fruit-crop or fruit-tree seed lots intended for sowing, including seed extracted from fleshy fruits, dry fruits, pods, stones, or comparable reproductive structures; open-pollinated, hybrid, certified, commercial, farm-saved, and comparable lots when their identity and quality basis are declared |
| excluded_products | Food or feed fruit with incidental seed; fruit-processing residues not intended as sowing seed; seedlings, transplants, grafted plants, rootstocks, cuttings, and other living planting material; internal breeding stock not sold as seed; downstream cultivation and post-gate distribution |
| representative_product | Net accepted, identifiable fruit seed lot released for sowing at the declared gate, with declared crop or plant identity, seed class, moisture or viability state, physical purity, germination or viability result, treatment status, and package state |
| production_route | Managed field, protected-cultivation, orchard, or seed-garden production followed by harvest, wet/fleshy or dry-fruit extraction as applicable, drying and primary conditioning, grading/testing, optional treatment, packaging, and storage |
| market_state | Accepted seed lot at a declared conditioning-facility, seed-store, or other named gate; bulk and packaged states are allowed when package, storage, moisture, quality, and hand-off qualifiers are declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net accepted fruit seed for sowing at the declared seed gate |
| How much | 1 kg |
| How well | Crop or plant identity; cultivar, line, or hybrid status; seed class; production geography; annual or perennial route; fleshy-fruit or dry-fruit route; extraction and treatment status; moisture or viability basis; physical purity; germination or viability result; packaging state; storage duration where included; and declared gate |
| How long or cycle | One declared seed production cycle and harvest campaign. For perennial orchards or mother plants, record the relevant establishment, productive, replacement, and termination periods and the allocation basis used to assign them to the seed lot. |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fruit seeds, production mix, at farm gate, seed-grade cleaned for sowing |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Reference identity status | Actual handoff-state UUID unresolved; prior UUID evidence applies only to its original documented state. |
| Required qualifiers | crop or plant species; cultivar, line, or hybrid status; seed class; production geography; production unit type; annual or perennial cycle; fleshy-fruit, dry-fruit, pod, stone, or other reproductive structure; wet or dry extraction route; moisture basis or recalcitrant-seed status; physical purity; germination or viability result and test method; treatment status; packaging state; storage duration; declared gate; intended co-products; residue, reject, and rework fates |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. A reference flow without these qualifiers is incomplete. The actual reference-product flow UUID remains unresolved and must be verified before final TIDAS process publication. The mass-property and unit-group UUIDs declared above remain the measurement support identities; they do not establish the reference-product identity.

Measurement basis qualifier: 1 kg net accepted seed

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_seed_mass` | reference product and final lot reconciliation | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) | kg | Express the reference as net accepted seed at the declared gate. Preserve gross, tare, moisture basis, accepted, downgraded, rejected, sample, residue, and unexplained-loss masses separately. |
| `seed_count_conversion` | count-based seed records | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) | kg; seeds or item count as supporting data | Convert seed counts to mass only with a measured thousand-seed mass, average seed mass, or other transparent lot-specific conversion. Do not replace a mass reference with an unqualified seed count. |
| `seed_moisture_basis` | harvest, extraction, conditioning, storage, and delivery | Mass and moisture | kg; percent wet basis or declared dry basis | Declare whether each mass is as-received, wet-basis, dry-basis, or recalcitrant-seed basis. Convert only from recorded mass and moisture; do not apply a universal moisture target across species. |
| `nutrient_product_and_element_basis` | fertilizer and soil-amendment inputs | Product mass and nutrient mass | kg product; kg N, P, or K as declared | Record only products actually used. Preserve product mass and the declared nutrient basis from the label, supplier specification, nutrient plan, or laboratory result. Do not infer a fertilizer type or concentration. |
| `water_separation` | irrigation, source withdrawal, extraction, washing, and discharge | Volume or mass | m3 or kg | Keep source withdrawal, delivered irrigation, extraction or washing water, recirculated water, evaporation, retained water, and discharged water distinct. Do not count the same water as both product input and elementary withdrawal. |
| `energy_carrier_conversion` | field, harvest, extraction, conditioning, testing, treatment, packaging, and storage | Energy or carrier quantity | kWh, MJ, L, kg, or declared carrier unit | Preserve measured carrier, operation, equipment or service, time period, and factor source. Convert carriers only with a declared factor and retain the original activity data. |
| `quality_attribute_reporting` | released seed lots | Quality attribute | percent, result per test method, or declared categorical state | Report physical purity, germination or viability, health or treatment status, and moisture or recalcitrant state with the test method, sample date, lot id, and acceptance decision. These attributes qualify the reference flow; they are not silently converted to mass. |
| `packaging_reuse_basis` | packaging and reusable containers | Mass or item count | kg, item, or declared package unit | Record packaging mass or count, capacity, material role, lot assignment, reuse cycles, return rate, and end-of-use hand-off when packaging is inside the declared boundary. |

Seed quality ranges are not universal defaults for this category. As a screening aid, an orthodox, storable seed lot may use a provisional QA moisture interval of 4–14 percent wet basis, but the interval is replaceable by the species-specific release specification; recalcitrant or intermediate seeds must use a species-specific moisture and viability protocol. FAO guidance distinguishes fleshy-fruit soaking and cleaning, dry-fruit drying and separation, and species that should not be dried for long storage (`fao-tree-seed-handling`; `fao-local-vegetable-seed-production`).

## 5. System Boundary

The default foreground boundary starts with a declared source seed or parental material and a prepared production unit, and ends when the accepted seed lot crosses the declared seed gate. It includes managed seed production, harvest, applicable extraction, primary drying and cleaning, grading, testing and lot release, optional seed treatment, packaging, and storage needed to reach the gate. It includes actual nutrient products and soil amendments, crop-protection products, irrigation and water withdrawal, field and processing energy, land occupation, direct managed-soil emissions where modelled, packaging, treatment products, quality testing, and documented rejects or residues. Transport is outside the boundary unless it is required to reach a delivered gate selected in the data package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `source_seed_or_parental_material_and_prepared_production_unit` |
| starting_condition_role | identity_and_reproduction_condition |
| product_classification_scope | current CPC 3.0 `01360`, Fruit seeds; the PCR identity remains semantic and is not created from the classification leaf alone |
| recursive_input_rule | A same-category seed input that would recursively trace the product system is recorded as the declared source seed or parental-material starting condition, with lot identity, mass, treatment, and origin disclosure rather than a second recursive seed process. |
| upstream_dataset_requirement | Disclose the source lot or parental-material identity, lot or field origin, mass, seed class, treatment status, moisture basis, and evidence of the upstream boundary. If upstream burdens are included, link the upstream dataset explicitly and do not also treat the same source lot as a zero-burden starting condition. |
| disclosure | Declare the starting production-unit condition, land-use and infrastructure exclusions, annual or perennial period, route variant, intended outputs, quality-release state, gate, and all source-lot and reject fates. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_seed_gate` | all default datasets | Include source or parental seed, managed seed production, harvest, applicable extraction, drying and conditioning, grading/testing, optional treatment, packaging, and storage needed to reach the declared seed gate. Exclude downstream crop cultivation and post-gate distribution. | `fao-seed-production-manual`; `fao-seed-systems` |
| `boundary_route_variants` | annual, protected, orchard, seed-garden, fleshy-fruit, and dry-fruit routes | Select one or more evidenced route variants and disclose their changed topology, inventory categories, calculation requirements, or validation requirements. Do not combine mutually exclusive wet and dry extraction operations for a lot without a process record. | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling` |
| `boundary_recursive_seed_input` | source seed and parental material | Use the declared starting-condition abstraction for a same-category input that would recurse. Preserve lot identity and disclose the upstream dataset requirement; do not silently assign the source lot a generic zero burden. | `fao-seed-systems`; `mass-balance-identity` |
| `boundary_input_completeness` | production, extraction, conditioning, and presentation | Provide a collected value, justified zero, or documented exclusion for actual nutrients and amendments, crop protection, irrigation, water withdrawal, field energy, land, extraction and conditioning energy, treatment, packaging, storage, direct emissions, and residues when they are in scope. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o`; `fao-seed-production-manual` |
| `boundary_output_fate` | all product, waste, and residue outputs | Separate accepted seed, seed-bearing fruit or pods, fruit flesh or pulp, downgraded seed, screenings, empty or damaged seed, crop residue, wash residue, dust, packaging waste, storage loss, and unexplained loss, and record a destination or documented boundary exit for each. | `fao-seed-production-manual`; `mass-balance-identity` |
| `boundary_quality_gate` | accepted reference flow | The product crosses the boundary only after the declared identity, seed class, moisture or viability state, physical purity, germination or viability result, treatment status, package state, and lot-release decision are available. | `oecd-seed-schemes`; `ista-international-rules` |

Verify the identity of each actual exchange using its product or substance, physical state, property and unit; keep unconfirmed identities unresolved.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fruit_seed_multiplication` | Managed fruit-seed multiplication | required | Include the production unit and management operations that generate the seed-bearing reproductive material. | foreground biological production | crop-cycle inputs and mature seed-bearing material |
| `fruit_seed_harvest_capture` | Harvest and capture of seed-bearing material | required | Include harvest or collection as a distinct node when removal from the production unit is separately recorded. | foreground harvest/capture | harvested seed-bearing material and field losses |
| `fleshy_seed_extraction` | Fleshy-fruit seed extraction | conditional | Include for fleshy fruits requiring maceration, soaking, fermentation, pulping, washing, or flotation before seed drying or conditioning. | alternative extraction and biochemical treatment | wet seed intermediate and pulp/residual streams |
| `dry_seed_extraction` | Dry-fruit or pod seed extraction | conditional | Include for pods, dry fruits, stones, or similar structures that require drying, threshing, shelling, or mechanical separation. | alternative extraction and material treatment | dry-extracted seed intermediate and husk/residual streams |
| `seed_drying_primary_conditioning` | Seed drying and primary conditioning | required | Include drying, cleaning, washing, winnowing, sieving, separation, or stabilization needed to create a prepared seed lot. | foreground conditioning | conditioned seed, screenings, and conditioning losses |
| `seed_grading_testing_lot_release` | Grading, testing, and lot release | required | Include classification into declared quality or destination states and the testing/release decision. | foreground grading and quality release | accepted, downgraded, rejected, and sample streams |
| `seed_treatment_packaging_storage` | Treatment, presentation, and storage | conditional | Include only when treatment, portioning, packaging, or storage is inside the declared gate. | foreground presentation and stabilization | packaged reference seed and storage losses |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

Annual open-field, protected, orchard, and seed-garden production routes may coexist when their records are separated. A protected or controlled-pollination route is an alternative production or technology route only when it changes the process topology, inventory categories, calculation, data requirements, or validation; a label alone is insufficient. Fleshy-fruit extraction and dry-fruit extraction are mutually exclusive for a given lot unless separate lots are reconciled.

### Process: Managed fruit-seed multiplication (`fruit_seed_multiplication`)

#### Inputs

##### Product flows

###### Source seed or parental material (`source_seed_material`)

The declared source lot or parental material enters the multiplication process as the reproductive starting condition. It is not recursively expanded when it is in the same product category.

- Selected flow: fruit seed or parental reproductive material (unmapped; resolve the actual lot identity during foreground data generation)
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass at the declared starting condition, with moisture and treatment basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot`
- Sources: `fao-seed-systems`
- Range: Provisional source-lot screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg source lot/kg accepted reference seed
  - Basis: broad first-pass interval across low-yield seed multiplication routes; replace with lot records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Urea fertilizer (`fruit_seed_multiplication_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for fruit_seed_multiplication_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1 kg net accepted reference seed.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_field_management_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_management_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`fruit_seed_multiplication_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_field_management_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_management_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`fruit_seed_multiplication_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_field_management_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_management_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`fruit_seed_multiplication_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_field_management_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_management_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`fruit_seed_multiplication_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_field_management_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_management_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`fruit_seed_multiplication_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_field_management_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_management_inputs`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-organic-nutrients`

##### Waste flows

#### Outputs

##### Product flows

###### Mature seed-bearing fruit, pod, stone, or reproductive structure (`mature_seed_bearing_material`)

The multiplication process hands off the mature seed-bearing material to harvest/capture. The material may be a fleshy fruit, dry fruit, pod, stone, or another declared reproductive structure; it is not yet the reference seed lot.

- Selected flow: mature fruit seed-bearing material (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured harvested-ready mass by production unit and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

##### Waste flows


###### Crop residues and non-seed biomass leaving the production unit (`crop_residues`)

Record leaves, stems, fruit skins, uncollected reproductive material, and other non-seed biomass removed from or returned within the production unit. The fate must distinguish field return, composting, feed or other intended use, burning, treatment, and disposal.

- Selected flow: crop residue or non-seed biomass (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled residue mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`


###### Uncollected or field-lost seed-bearing material (`field_harvest_loss`)

Material that reaches maturity but is not collected as an intended output is recorded as a field loss or residue, with its fate and moisture basis.

- Selected flow: Fruit seed-bearing biomass lost in the field
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled field-loss mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Direct managed-soil nitrous oxide (`field_nitrous_oxide`)

Include direct soil N2O only when the declared package models managed-soil emissions. Use the nutrient and residue records from this process and one declared, geographically applicable method tier.

- Selected flow: nitrous oxide to air, receiving medium and reported substance to be resolved (unmapped within applicable emission function)
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply one selected IPCC or regionally accepted tier to actual mineral and organic nutrient inputs, residue returns, volatilization, leaching, soil, climate, and management context; convert reported N2O-N, NH3-N, or nitrate-N only once and retain the original basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_context`
- Sources: `ipcc-2019-managed-soils-n2o`

Calculation method corresponds to Section 8 rules: `calc_managed_soil_emissions`.

The final exchange is kg N2O. Keep species-specific elemental-N activity and any N-based factor/range in a separate calculation ledger. Convert that species-specific N mass by 44/28 exactly once before normalization; never reconvert compound mass or apply an N-based range directly to compound mass. A total nitrogen-loss pool is not this species without a supported split. Retain the actual receiving compartment and method boundaries; unknown identity or activity is not zero.

###### Ammonia to air from managed nutrient inputs (`field_ammonia_to_air`)

Record volatilized ammonia only when it is included by the selected method and supported by actual nutrient, soil, climate, and application records.

- Selected flow: ammonia to air (unmapped within applicable emission function)
- Flow property / unit: Mass / kg NH3
- Amount rule: calculated from declared nutrient inputs and the selected method factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_context`
- Sources: `ipcc-2019-managed-soils-n2o`

Final exchange mass is kg NH3; retain N-based activity, factors and screens in a separate ledger. Convert only the mass of N attributed to this chemical species by 17/14 exactly once, then normalize once to the accepted reference output. Do not treat total nutrient balance, soil retention or unexplained deficit as this release. Record each actual receiving compartment separately. Any gas-volume record requires its measured temperature, pressure and a supported mass conversion; it is not interchangeable with compound mass.

###### Nitrate loss to water or soil (`field_nitrate_loss`)

Record nitrate leaching or runoff only when the selected method and field records support it, and retain the receiving compartment and reported substance.

- Selected flow: nitrate to water or soil (unmapped within applicable emission function)
- Flow property / unit: Mass / kg NO3-
- Amount rule: calculated from actual nutrient, irrigation, soil, climate, and drainage or runoff records under the selected method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_context`
- Sources: `ipcc-2019-managed-soils-n2o`

The final exchange is kg NO3-. Keep species-specific elemental-N activity and any N-based factor/range in a separate calculation ledger. Convert that species-specific N mass by 62/14 exactly once before normalization; never reconvert compound mass or apply an N-based range directly to compound mass. A total nitrogen-loss pool is not this species without a supported split. Retain the actual receiving compartment and method boundaries; unknown identity or activity is not zero.

### Process: Harvest and capture of seed-bearing material (`fruit_seed_harvest_capture`)

#### Inputs

##### Product flows

###### Mature seed-bearing material received for harvest (`mature_seed_bearing_material_for_harvest`)

This is the production hand-off into the distinct harvest/capture node. Its lot id and receiving mass must match the multiplication output record.

- Selected flow: mature fruit seed-bearing material (unmapped; resolve the same lot identity as the multiplication output)
- Flow property / unit: Mass / kg
- Amount rule: received mass linked to the production-unit and harvest-lot record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lot`
- Sources: `mass-balance-identity`

###### Diesel fuel (`harvest_machinery_fuel_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `harvest_machinery_fuel_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_field_energy` for `fruit_seed_harvest_capture`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_energy`
- Sources: `route-energy-fao`

###### Harvest and collection electricity (`harvest_electricity`)

Record electricity for powered harvest, sorting at collection, elevators, fans, or on-site transfer when it belongs to this process.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: metered or supplier-recorded electricity by harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy`
- Sources: `ipcc-2019-cropland`

#### Outputs

##### Product flows

###### Harvested seed-bearing material (`harvested_seed_bearing_material`)

Harvested material is handed to the applicable fleshy-fruit or dry-fruit extraction route, or directly to primary conditioning where no separate extraction is needed.

- Selected flow: harvested fruit seed-bearing material (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighbridge, bin, crate, or lot record after tare subtraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lot`
- Sources: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### Whole seed-bearing fruit at its documented product handover (`harvested_whole_fruit_coproduct`)

Conditional on this exact material being independently intended and actually handed over inside the existing process boundary. Record actual species/material, physical form, grade, moisture/composition where relevant, lot, recipient, quantity and gate. A named example does not establish actual production or a default recipe. Keep each physical lot and destination separate; do not count an internal transfer or a selected reference-output lot again as a co-product. For a genuinely mixed screenings/offcut stream, retain measured physical composition rather than inventing separation or also counting its components.

Collection and handover scope: When a seed-bearing fruit is intentionally sold or transferred for food, feed, processing, or another documented function, record that stream as an intended co-product rather than as waste. If the fruit has no documented recipient or function, classify the stream as residue or waste instead. Raw activity or stage basis: per 1 kg net accepted reference seed.

- Selected flow: Whole seed-bearing fruit at its documented product handover
- Flow property / unit: Mass / kg
- Amount rule: Measure the mass of this specific product at its unique actual handover; retain the original process/lot/period basis and use the existing throughput-linkage and normalization rules exactly once. Keep the unallocated physical quantity ledger separate from Section 7 shared-burden allocation.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-local-vegetable-seed-production`; `iso-14044-2006`

No numerical range is transferred from the retired collection card. Use compatible measured quantities and identity-specific evidence; missing evidence remains a completeness gap, not zero. The UUID remains unresolved until a compatible exact identity is confirmed.

###### Separated fruit pulp at its documented product handover (`harvested_fruit_pulp_coproduct`)

Conditional on this exact material being independently intended and actually handed over inside the existing process boundary. Record actual species/material, physical form, grade, moisture/composition where relevant, lot, recipient, quantity and gate. A named example does not establish actual production or a default recipe. Keep each physical lot and destination separate; do not count an internal transfer or a selected reference-output lot again as a co-product. For a genuinely mixed screenings/offcut stream, retain measured physical composition rather than inventing separation or also counting its components.

Collection and handover scope: When a seed-bearing fruit is intentionally sold or transferred for food, feed, processing, or another documented function, record that stream as an intended co-product rather than as waste. If the fruit has no documented recipient or function, classify the stream as residue or waste instead. Raw activity or stage basis: per 1 kg net accepted reference seed.

- Selected flow: Separated fruit pulp at its documented product handover
- Flow property / unit: Mass / kg
- Amount rule: Measure the mass of this specific product at its unique actual handover; retain the original process/lot/period basis and use the existing throughput-linkage and normalization rules exactly once. Keep the unallocated physical quantity ledger separate from Section 7 shared-burden allocation.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-local-vegetable-seed-production`; `iso-14044-2006`

No numerical range is transferred from the retired collection card. Use compatible measured quantities and identity-specific evidence; missing evidence remains a completeness gap, not zero. The UUID remains unresolved until a compatible exact identity is confirmed.

##### Waste flows

###### Harvest loss and damaged reproductive material (`harvested_material_loss`)

Separate material dropped, damaged, diseased, overripe, or otherwise rejected during harvest from the intended harvested material. Record treatment, return, recovery, or disposal.

- Selected flow: Damaged harvested fruit seed-bearing biomass
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled harvest loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `mass-balance-identity`

###### Removed field residue at harvest (`harvest_removed_residue`)

Record stems, leaves, pods, fruit covers, and other non-seed material removed with the harvested lot when it leaves the production boundary.

- Selected flow: removed field residue (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass or a documented crop-residue balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`

### Process: Fleshy-fruit seed extraction (`fleshy_seed_extraction`)

#### Inputs

##### Product flows

###### Harvested fleshy seed-bearing fruit (`harvested_fleshy_seed_material`)

Use this conditional route for fleshy fruits whose pulp must be softened, macerated, fermented, washed, or otherwise separated before the seed is dried or conditioned.

- Selected flow: harvested fleshy fruit containing seed (unmapped; resolve actual species and lot identity)
- Flow property / unit: Mass / kg
- Amount rule: received lot mass with moisture and receiving date
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### Extraction and washing water (`extraction_process_water`)

Record process water used for soaking, maceration, fermentation, washing, flotation, or rinsing only when it crosses the foreground boundary. Keep source withdrawal and discharge separate.

- Selected flow: process-water supply function (specific water identity unresolved)
- Flow property / unit: Mass / kg or volume / m3
- Amount rule: metered, batch-recorded, or supplier-recorded water use by extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`
- Range: Provisional extraction-water screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/kg accepted reference seed
  - Basis: broad first-pass interval across pulpy fruit extraction; replace with batch records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fleshy-fruit extraction electricity (`fleshy_extraction_electricity`)

Record electricity for pulping, agitation, pumps, separation, fans, and transfer when used by the wet extraction batch.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: meter or equipment log by extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `mass-balance-identity`

#### Outputs

##### Product flows

###### Wet extracted seed intermediate (`wet_seed_intermediate`)

The changed composition and physical state after pulp separation are recorded as a wet seed intermediate handed to drying or primary conditioning. Where fermentation is used, the residence time, inoculation or natural-fermentation condition, temperature, and termination criterion are collected; no default fermentation yield is prescribed.

- Selected flow: wet extracted fruit seed intermediate (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg and moisture percent
- Amount rule: batch mass and moisture after seed separation and before drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### Fruit pulp or edible flesh co-product (`fleshy_pulp_co_product`)

Record pulp or flesh as a co-product only when it has an intended use, recipient, quality basis, and hand-off. Otherwise route it to the residual or wastewater record and do not grant a co-product credit.

- Selected flow: fruit pulp or edible flesh co-product (unmapped; resolve recipient-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured separated mass and documented recipient or use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-local-vegetable-seed-production`; `iso-14044-2006`

##### Waste flows

###### Floaters, empty seeds, and foreign material (`fleshy_extraction_rejects`)

Record floaters, empty or visibly damaged seeds, foreign material, and material discarded during flotation or manual separation. State whether it is reworked, downgraded, recovered, composted, treated, or discarded.

- Selected flow: Fruit-seed extraction residues
- Flow property / unit: Mass / kg
- Amount rule: weighed reject stream or reconciled batch difference
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

###### Pulp, wash, and fermentation residual (`fleshy_extraction_residual`)

Residual pulp and wash solids that do not have a documented co-product function are recorded as waste with the selected treatment or boundary-exit destination.

- Selected flow: pulp, wash, or fermentation residual (unmapped; resolve waste identity and destination)
- Flow property / unit: Mass / kg
- Amount rule: measured residual mass, including retained moisture, with wastewater or solids split where available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

### Process: Dry-fruit or pod seed extraction (`dry_seed_extraction`)

#### Inputs

##### Product flows

###### Harvested dry fruit, pod, stone, or seed structure (`harvested_dry_seed_material`)

Use this conditional route for dry fruits, pods, stones, or similar structures that are dried, opened, threshed, shelled, or mechanically separated before primary conditioning.

- Selected flow: harvested dry fruit, pod, stone, or seed structure (unmapped; resolve actual species and lot identity)
- Flow property / unit: Mass / kg
- Amount rule: received lot mass and moisture or dry-state record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `fao-local-vegetable-seed-production`

###### Dry extraction electricity (`dry_extraction_electricity`)

Record electricity used by shelling, threshing, dehulling, tumbling, winnowing, conveying, or other independent dry extraction operations.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: meter or equipment log by dry extraction batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

#### Outputs

##### Product flows

###### Dry-extracted seed intermediate (`dry_extracted_seed_intermediate`)

The separated dry seed intermediate is handed to primary conditioning. Its mass, moisture, and lot identity must reconcile to the received structure and residual streams.

- Selected flow: dry-extracted fruit seed intermediate (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg and moisture percent
- Amount rule: measured batch output mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

##### Waste flows

###### Pod, husk, shell, or fruit-cover residue (`dry_extraction_residue`)

Record the structural residue separated from the seed and its documented field return, co-product, treatment, or disposal fate.

- Selected flow: pod, husk, shell, or fruit-cover residue (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighed residual stream or reconciled dry-extraction balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_co_product_and_residue_fate`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

###### Empty, cracked, or damaged seed from dry separation (`dry_extraction_rejects`)

Record empty, cracked, damaged, or otherwise rejected seed separately from husk and structural residue. Rework or downgrade must be linked to the next process.

- Selected flow: empty, cracked, or damaged seed (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighed reject stream and quality disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_batch`
- Sources: `fao-tree-seed-handling`; `mass-balance-identity`

### Process: Seed drying and primary conditioning (`seed_drying_primary_conditioning`)

#### Inputs

##### Product flows

###### Raw or extracted seed for conditioning (`raw_seed_for_conditioning`)

This node receives wet extracted seed, dry-extracted seed, or a raw seed-bearing material when extraction was not separated. The selected state, moisture, and lot identity must be explicit.

- Selected flow: raw or extracted fruit seed (unmapped; resolve the upstream lot and state)
- Flow property / unit: Mass / kg and moisture percent
- Amount rule: receiving mass and moisture by conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-tree-seed-handling`; `fao-seed-production-manual`

###### Conditioning and washing water (`conditioning_process_water`)

Record water used for washing, rinsing, flotation, or conditioning only when it crosses this process boundary.

- Selected flow: process-water supply function (specific water identity unresolved)
- Flow property / unit: Mass / kg or volume / m3
- Amount rule: measured or batch-recorded water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-tree-seed-handling`

###### Conditioning electricity (`conditioning_electricity`)

Record electricity used by dryers, fans, screens, aspirators, graders, pumps, and conveyors in the conditioning node.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: metered or equipment-recorded electricity by conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-seed-drying-storage-2024`; `mass-balance-identity`
- Range: Provisional conditioning-electricity screening interval
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg accepted reference seed
  - Basis: broad first-pass interval across drying and cleaning technologies; replace with batch meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Conditioned seed lot (`conditioned_seed_lot`)

The prepared seed lot leaves primary conditioning with a declared moisture or recalcitrant state, cleanliness, and lot identity and enters grading/testing.

- Selected flow: conditioned fruit seed lot (unmapped; resolve species- and state-specific identity)
- Flow property / unit: Mass / kg and moisture percent
- Amount rule: measured output mass and quality-relevant moisture result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`

##### Waste flows

###### Screenings and foreign matter (`conditioning_screenings`)

Record weed seed, soil, fruit fragments, empty seed, and other material separated by sieving, winnowing, aspiration, or cleaning. A useful intended output requires a documented destination and function; otherwise it is waste.

- Selected flow: seed screenings and foreign matter (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: weighed screening fraction and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-seed-production-manual`; `mass-balance-identity`

###### Seed dust and fine conditioning residue (`conditioning_dust_residue`)

Record dust and fine residue removed from the product stream, including its containment, collection, and downstream fate.

- Selected flow: seed dust and fine conditioning residue (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured collection mass or documented reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Sources: `fao-seed-production-manual`; `mass-balance-identity`

##### Elementary flows

### Process: Grading, testing, and lot release (`seed_grading_testing_lot_release`)

#### Inputs

##### Product flows

###### Conditioned seed received for grading (`conditioned_seed_for_grading`)

The conditioned lot enters grading and testing with a lot id, mass, moisture basis, and prior process release record.

- Selected flow: conditioned fruit seed lot (unmapped; resolve the same upstream lot identity)
- Flow property / unit: Mass / kg
- Amount rule: receiving mass linked to the conditioning batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality_testing`
- Sources: `ista-international-rules`; `mass-balance-identity`

###### Grading and testing electricity (`quality_testing_electricity`)

Record electricity used for cleaning final passes, grading, sampling, laboratory testing, and lot-release activities when it is inside the declared boundary.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: meter or equipment log allocated to the tested lot or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_testing`
- Sources: `ista-international-rules`

#### Outputs

##### Product flows

###### Accepted seed lot before treatment or presentation (`accepted_seed_lot_before_presentation`)

This is the accepted sowing-seed state after grading and lot release. It is the reference-equivalent hand-off when no treatment, packaging, or storage is included in the declared boundary.

- Selected flow: accepted fruit seed lot for sowing (unmapped; resolve final species- and lot-specific identity)
- Flow property/unit: Mass / kg

Original reference-state unit annotation: Mass / kg and declared moisture or viability basis

Raw output measurement and reconciliation: net accepted mass after test samples, rejected seed, downgraded lots, and tare are separated

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality_testing`
- Sources: `oecd-seed-schemes`; `ista-international-rules`; `mass-balance-identity`
- Range: Provisional storable-seed moisture QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 4
  - Upper: 14
  - Unit: percent wet basis
  - Basis: provisional screening interval for orthodox storable seeds only; replace with species-specific release specification and do not apply to recalcitrant seed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded but intentionally transferred seed lot (`downgraded_seed_lot`)

Record a lower-grade or non-certified seed lot as an intended product only when it has a declared sowing use, recipient, quality state, and hand-off. Otherwise classify it as rejected seed or waste.

- Selected flow: downgraded fruit seed lot for declared sowing use (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: measured mass and documented downgrade decision
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_testing`
- Sources: `oecd-seed-schemes`; `iso-14044-2006`

##### Waste flows

###### Rejected seed and laboratory test samples (`rejected_seed_and_test_samples`)

Record rejected seed, retained samples, and non-returnable test material with their downstream path. A sample returned to the lot is not an additional output and must be reconciled once.

- Selected flow: Rejected fruit seeds
- Flow property / unit: Mass / kg
- Amount rule: weighed reject and sample mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_testing`
- Sources: `ista-international-rules`; `mass-balance-identity`

### Process: Treatment, presentation, and storage (`seed_treatment_packaging_storage`)

#### Inputs

##### Product flows

###### Accepted seed received for presentation (`accepted_seed_for_presentation`)

The accepted seed lot enters treatment, filling/portioning, packaging, and storage only when these activities are inside the declared gate.

- Selected flow: accepted fruit seed lot for sowing (unmapped; resolve the same lot identity as the quality-release output)
- Flow property / unit: Mass / kg
- Amount rule: received net accepted mass by lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `mass-balance-identity`

###### Presentation and storage electricity (`presentation_storage_electricity`)

Record electricity for filling, sealing, labelling, ventilation, temperature or humidity control, and storage handling when included in the gate.

- Selected flow: electricity supply function (specific electricity identity unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity allocated to the lot or storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-drying-storage-2024`; `fao-seed-production-manual`

#### Outputs

##### Product flows

###### Packaged or stored fruit seed reference flow (`fruit_seed_reference_flow`)

This is the reference product output when treatment, filling/portioning, packaging, or storage is included. When this process is omitted, `accepted_seed_lot_before_presentation` is the equivalent gate output.

- Selected flow: fruit seeds for sowing at the declared gate (unmapped; resolve final reference product identity)
- Flow property/unit: Mass / kg

Original reference-state unit annotation: Mass / kg and declared moisture or viability basis

Raw output measurement and reconciliation: net accepted packaged or stored seed mass after packaging tare and storage losses

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: reference amount of 1 kg net accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-seed-production-manual`; `ista-international-rules`; `mass-balance-identity`

##### Waste flows

###### Storage loss or viability-rejected seed (`storage_loss`)

Record mass lost, spoiled, infested, moisture-damaged, or rejected during the included storage period. A lot returned upstream for reconditioning is a rework loop, not a final waste output.

- Selected flow: storage loss or viability-rejected seed (unmapped; resolve destination-specific identity)
- Flow property / unit: Mass / kg
- Amount rule: Measure the actual damaged/rejected/lost stream by lot and destination, with mutually exclusive material quantities. Reconcile opening stock + receipts = accepted dispatch + other external transfers + rejected removals + independently evidenced physical loss + closing stock on matched moisture/component bases. Rework returned across this node is one paired transfer, or retained in closing stock if still held; it is not another final output. An unexplained balance difference is an investigation item, not automatically a physical waste or emission. Do not add removed lots to receipts, omit closing stock, or subtract a loss again when it is already part of this reported stream. Attribute and normalize each supported exported quantity once to accepted final output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg net accepted reference seed.

- Normalization basis: per declared reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_packaging_storage`
- Sources: `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`; `mass-balance-identity`


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Fruit seeds, production mix, at farm gate, seed-grade cleaned for sowing
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass at the actual handoff, normalized to the reference quantity; do not sum preceding-stage quantities, other routes or co-products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`
- Range: Handoff quantity normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg net handoff mass of the same state
  - Basis: normalization of the measured net mass of the same handoff state; not a physical-operation yield
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `declared-handoff-measurement-definition`

##### Waste flows
This measurement node adds no waste inputs.
##### Elementary flows
This measurement node adds no resource inputs.
#### Outputs
##### Product flows
###### Reference product at declared handoff (`reference_product_at_declared_handoff`)
- Selected flow: Fruit seeds, production mix, at farm gate, seed-grade cleaned for sowing
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`
Confirm the product UUID independently for the actual state. Until confirmed, retain unresolved identity instead of inheriting a UUID from a preceding stage or another route.
- Range: Handoff quantity normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg net handoff mass of the same state
  - Basis: normalization of the measured net mass of the same handoff state; not a physical-operation yield
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `declared-handoff-measurement-definition`

##### Waste flows
Record actual losses at the operation where they occur; do not duplicate them here.
##### Elementary flows
Record actual emissions at the operation where they occur; do not duplicate them here.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_process_subdivision` | shared production, harvest, extraction, conditioning, and storage burdens | Prefer process subdivision and direct lot records. Attribute operation-specific inputs and outputs directly to the seed lot whenever the records allow it. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_fruit_co_product` | edible fruit, pulp, flesh, or another intended co-product | First classify the stream as intended co-product, residue, or waste from recipient, function, quality, and hand-off evidence. If co-product allocation is necessary, use the declared physical or economic relationship selected by the data package, document the basis and sensitivity, and do not credit an undocumented use. | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `allocation_seed_grade_outputs` | accepted and downgraded seed lots | Treat accepted and downgraded seed as separate intended outputs only when both have declared sowing functions and hand-offs. Allocate shared burdens using the declared physical, mass, or economic basis and keep rejected seed outside the accepted reference output. | `iso-14044-2006`; `oecd-seed-schemes` |
| `allocation_cross_period_mother_plants` | orchards, perennial mother plants, and multi-year seed gardens | Link establishment, productive, replacement, and termination events to reporting periods. Attribute shared perennial inputs to the seed outputs of the same declared period using a documented period basis; do not count establishment or termination burdens in more than one period. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_rejected_and_rework` | rejects, returns, reconditioning, and storage losses | Keep rejects and rework linked to their producing node. Retain burdens on material sent back for rework, add the rework operation once, and do not count reworked material as a second accepted output. Discarded material receives no product credit. | `fao-seed-production-manual`; `mass-balance-identity` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `crop_protection_products_specific_input` | `cp_field_management_inputs` | Operation fruit_seed_multiplication: Record each actual herbicide, insecticide, fungicide, biological product, or other crop-protection input when it is used in seed production. The product identity, formulation, active ingredient, dose, application, and fate are not inferred from a generic crop name. Original quantity method: measured product mass and declared active-ingredient basis |
| `harvest_machinery_fuel_specific_input` | `cp_field_energy` | Operation fruit_seed_harvest_capture: Record fuel used by harvest machinery, collection vehicles, or on-site handling equipment when it crosses the foreground boundary. Original quantity method: measured fuel or carrier quantity by harvest lot and operation |
| `seed_treatment_product_specific_input` | `cp_treatment_packaging_storage` | Operation seed_treatment_packaging_storage: Record each actual biological, chemical, coating, inoculant, or other treatment product applied to the lot. The card is conditional and does not require treatment when the lot is untreated. Original quantity method: measured application quantity and active-ingredient or formulation basis |
| `flexible_package_material_specific_input` | `cp_treatment_packaging_storage` | Operation seed_treatment_packaging_storage: Record flexible bags, films, sachets, labels integrated with flexible packaging, or equivalent packaging actually used for the seed lot. Original quantity method: `packaging mass per lot = package mass assigned to lot / documented service cycles`, adjusted only by the documented return or loss rate. If service cycles are unknown, report the full assigned mass and the uncertainty. |
| `rigid_container_material_specific_input` | `cp_treatment_packaging_storage` | Operation seed_treatment_packaging_storage: Record rigid jars, cans, buckets, or other rigid containers only when actually used. Original quantity method: measured or supplier-recorded container mass assigned to the lot |
| `carton_box_material_specific_input` | `cp_treatment_packaging_storage` | Operation seed_treatment_packaging_storage: Record cartons and boxes only when they are part of the declared product presentation or gate. Original quantity method: measured or supplier-recorded carton mass assigned to the lot |
| `pallet_crate_material_specific_input` | `cp_treatment_packaging_storage` | Operation seed_treatment_packaging_storage: Record reusable or single-use pallets and crates only when they cross the declared gate boundary and are assigned to the seed lot. Original quantity method: measured item count or mass with capacity and reuse record |


### Route-specific energy identification requirements

Select energy exchanges from the actual product state, operation, equipment and supply records. The conditional cards below are not a mandatory or exhaustive fuel list. For each requirement, document applicability and the used carrier, supplier, service period, native quantity and allocation; add a separate physically specific card and verify its UUID for any actual input not yet represented. An unidentified input remains an explicit completeness gap, never a zero or a generic energy exchange. Evidence of manual work, ambient drying or a bypass can justify non-use only for the affected operation. Preserve every required operation even when no example card is supplied.

Separate purchased supply from on-site conversion. Link self-generated electricity internally to the foreground generator and count its actual fuel and emissions there once; do not also charge a purchased-electricity supply for the same internal transfer. Likewise do not count supplier-side fuel again with purchased heat. Reconcile shared meters and contractor-included energy against existing cards, with one physical quantity assigned once. Retain source quantities, output throughput, shared-service allocation and excluded post-gate activities. For each carrier, apply period/output attribution once and scale to the declared reference quantity using matched accepted final output in the same product unit; do not normalize an already normalized amount again. Process-native intensities require a measured throughput link to that final output. These requirements do not set a consumption default or certify dataset completeness.

| requirement_id | collection_protocol_id | Required operation and evidence |
| --- | --- | --- |
| `conditioning_stationary_fuel_identification` | `cp_conditioning_batch` | Actual stationary conditioning/drying heater: determine direct fuel combustion versus purchased heat and its delivery specification before selecting an identity. Do not duplicate existing electricity. Raw activity or stage basis: per 1 kg net accepted reference seed. (`route-energy-fao`) |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot` | `fruit_seed_multiplication` | source seed or parental material | lot register, invoice, seed certificate, or internal transfer record | lot id; species; cultivar or line; class; supplier or origin; mass; moisture; treatment; date | transcribe primary lot record and verify against receipt; Raw aggregation and attribution: retain one record per source lot; aggregate only after identity reconciliation | kg; percent; declared categorical fields | every source lot | each production cycle | each production unit and source lot | per declared reference flow | lot record, label, certificate, receiving check |
| `cp_field_management_inputs` | `fruit_seed_multiplication` | nutrients, amendments, crop protection | purchase, application, and farm-management records | product; formulation; nutrient or active basis; quantity; date; area; method; lot; fate | reconcile purchase and application records to the production unit; Raw aggregation and attribution: sum actual applications by production unit and period `crop_protection_products_specific_input`: Operation fruit_seed_multiplication: Record each actual herbicide, insecticide, fungicide, biological product, or other crop-protection input when it is used in seed production. The product identity, formulation, active ingredient, dose, application, and fate are not inferred from a generic crop name. Original quantity method: measured product mass and declared active-ingredient basis Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg product; kg nutrient or active ingredient; ha | every application | full crop cycle or perennial reporting period | each field, greenhouse, orchard block, or seed garden | per declared reference flow | invoice, label, nutrient plan, application log |
| `cp_irrigation_and_withdrawal` | `fruit_seed_multiplication` | irrigation and water withdrawal | meter, pump log, source record, drainage or discharge record | source; meter start/end; delivered volume; recirculation; drainage; rainfall or other declared water; date | read meters and reconcile source withdrawal to delivery and discharge; Raw aggregation and attribution: aggregate by source and production unit; keep withdrawal and delivery separate | m3 or kg | each irrigation event or monthly meter | full crop cycle or reporting period | each water source and production unit | per declared reference flow | calibrated meter, pump log, water record |
| `cp_field_energy` | `fruit_seed_multiplication` | field energy | fuel issue, machine log, electricity meter, contractor invoice | operation; carrier; quantity; machine; area or lot; date; factor reference | collect primary carrier records and contractor activity data; Raw aggregation and attribution: allocate only documented operations to the seed route `harvest_machinery_fuel_specific_input`: Operation fruit_seed_harvest_capture: Record fuel used by harvest machinery, collection vehicles, or on-site handling equipment when it crosses the foreground boundary. Original quantity method: measured fuel or carrier quantity by harvest lot and operation Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | L, kg, MJ, or kWh | every operation or monthly | full crop cycle or reporting period | each production unit and operation | per declared reference flow | meter, fuel issue, contractor record |
| `cp_land_and_period` | `fruit_seed_multiplication` | land occupation and periods | field register, map, lease, planting and removal records | area; production-unit id; land-use class; planting and termination dates; productive periods; replacement events | verify area and dates against field or orchard register; Raw aggregation and attribution: calculate area-time by declared period and output basis | ha; m2; ha a; date | each planting, replacement, or termination event | full productive life for perennial units | each field, orchard block, greenhouse, or seed garden | per declared reference flow | map, register, dated field record |
| `cp_harvest_lot` | `fruit_seed_harvest_capture` | harvest, field loss, residue, and hand-off | harvest sheet, weighbridge, bin or crate record, field-loss log | lot id; production unit; harvest date; gross and tare; mature material; loss; residue; co-product; destination | weigh or estimate with documented method at harvest; Raw aggregation and attribution: aggregate only after lot and moisture reconciliation | kg; percent moisture | every harvest or collection event | full harvest campaign | each production unit and lot | per declared reference flow | weighbridge, tare record, harvest log |
| `cp_extraction_batch` | `fleshy_seed_extraction` or `dry_seed_extraction` | extraction inputs, intermediates, rejects, and energy | batch sheet, equipment log, meter, moisture and residence-time record | input lot; route; method; water; energy; time; temperature where relevant; input/output mass; moisture; rejects; residuals; hand-off | record each extraction batch and link to lot ids; Raw aggregation and attribution: reconcile each batch before campaign aggregation | kg; m3; kWh; MJ; percent; hours or days | every batch | full extraction campaign | each extraction line and lot | per declared reference flow | batch sheet, meter, moisture test, equipment log |
| `cp_conditioning_batch` | `seed_drying_primary_conditioning` | drying, washing, cleaning, energy, output, and rejects | conditioning batch sheet, dryer or cleaner log, meter, moisture record | input lot; method; input/output mass; moisture; water; electricity; fuel or heat; screenings; dust; disposition | record each conditioning batch and verify output state; Raw aggregation and attribution: aggregate by lot and declared moisture basis Route-specific requirements: `conditioning_stationary_fuel_identification`: Actual stationary conditioning/drying heater: determine direct fuel combustion versus purchased heat and its delivery specification before selecting an identity. Do not duplicate existing electricity. Raw activity or stage basis: per 1 kg net accepted reference seed. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. | kg; m3; kWh; MJ; percent | every batch | full conditioning campaign | each line, facility, and lot | per declared reference flow | batch sheet, meter, moisture test, waste ticket |
| `cp_quality_testing` | `seed_grading_testing_lot_release` | grade, sample, testing, and release | laboratory report, sampling record, grade sheet, release decision | lot id; sample id; sample mass; purity; germination or viability; health; moisture; method; date; grade; disposition | use documented sampling and test methods and retain the release decision; Raw aggregation and attribution: weight or reconcile lots only after test method and lot identity match | kg; percent; categorical result | every lot and required retest | each lot and release period | each facility and laboratory | per declared reference flow | laboratory report, sampler record, certificate, release sign-off |
| `cp_treatment_packaging_storage` | `seed_treatment_packaging_storage` | treatment, package, storage, and presentation | treatment log, package specification, issue record, inventory ledger, storage log | lot id; treatment product and dose; package type and mass; fill count; reuse; opening and closing stock; temperature or humidity where relevant; loss; dispatch; stream material/product identity; composition and contamination state; native quantity and unit; item-mass/density conversion evidence; lot; net product and packaging mass; reuse/rework; recipient; treatment route; matched reference output ; opening and closing stock; receipts; dispatch; other external transfers; measured rejects; independently evidenced losses; paired rework; moisture/component basis; unexplained balance| Measure each actual stream and reconcile opening stock + receipts = accepted dispatch + other external transfers + rejected removals + independently evidenced physical losses + closing stock on matching moisture/component bases. Pair rework/returns and keep retained material in stocks. Unexplained residual is an evidence gap, not an automatic waste or release. Preserve attribution and normalize once to matched accepted final output. | kg; item; kWh; percent; date; storage duration; kg separately for each stream; native liquid volume separately; count and mass distinct | every treatment, packaging run, inventory movement, or monthly storage record | included treatment and storage period | each facility, storage room, and lot | per declared reference flow | treatment record, package spec, meter, inventory ledger |
| `cp_co_product_and_residue_fate` | `fruit_seed_harvest_capture` or extraction/conditioning process | co-product, residue, reject, and waste destination | sales or transfer record, recipient confirmation, compost or disposal ticket | stream; mass; moisture; intended use; recipient; quality; hand-off; treatment; date |link the output stream to a durable destination record; Raw aggregation and attribution: never aggregate distinct destinations without retaining stream identity harvested_fruit_co_product_specific_output: Preserve every actual intended output previously collected under harvested_fruit_co_product, including products not represented by the conditional examples. This is a mandatory identification requirement, not an exchange. Before dataset completeness, instantiate a separate physically specific card for each actual product with material/species, physical state, native property/unit, measured quantity, recipient, gate and compatible UUID or exact unresolved identity. Keep original lot/period/throughput and Section 7 allocation duties; count a physical sale once and exclude products already in the selected reference-output denominator. Do not infer a product recipe, separation, numerical range or zero from missing records. | kg; percent; categorical fate | every output stream | full production and processing campaign | each production unit and receiving destination | per declared reference flow | invoice, transfer note, waste ticket, recipient record |
| `cp_emission_context` | `fruit_seed_multiplication` or `seed_drying_primary_conditioning` | elementary emissions and method context | soil, climate, nutrient, drainage, emission, dust, and factor record | substance; receiving medium; soil; climate; nutrient input; residue fate; irrigation; drainage; method tier; factor; measurement; date | collect method inputs and calculated result with source and unit; Raw aggregation and attribution: calculate once per declared method and reconcile to activity data `conditioning_particulate_to_air_specific_emission`: Record particulate emissions only when the conditioning equipment and measurement or selected emission method support them. Report particle or substance detail and receiving medium with the final resolved identity. measured or method-calculated particulate emission from conditioning operations This is a mandatory emission-identification requirement, not an aggregate elementary exchange. Identify every applicable substance and actual receiving compartment separately, with compatible units, measured activity or justified calculation method, parameter applicability and uncertainty. Preserve the original operation, period, allocation and final-reference normalization. Reconcile direct and indirect pathways and upstream coverage once; do not substitute total nitrogen, total combustion emissions or a generic pollutant for a named compound. Separately document actual environmental returns, with their material and destination, if relevant. Before dataset completeness create each required specific exchange, confirm a compatible UUID or explicitly retain its unresolved identity. Missing records do not establish zero or inapplicability. `fao-seed-production-manual` | kg substance; kg N; ha; m3; factor unit | each application, event, or reporting period | full crop cycle, batch, or period | each production unit and emission source | per declared reference flow | method sheet, laboratory or meter record, factor citation |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | `normalized amount = recorded or calculated amount × 1 kg / net accepted reference seed at the same gate and declared moisture basis` | process amount; net accepted reference seed; moisture basis | amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_seed_dry_matter_conversion` | harvest, extraction, conditioning, storage, and delivery | `dry matter = as-received mass × (1 − moisture fraction)`; `mass at target basis = dry matter / (1 − target moisture fraction)`; use a species-specific rule or retain as-received mass for recalcitrant seed | as-received mass; measured moisture; declared target basis; recalcitrant status | comparable mass and moisture-basis conversion | `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_managed_soil_emissions` | field nutrient and residue emissions | Apply one selected IPCC or regionally accepted tier to actual mineral and organic nutrient inputs, residue returns, volatilization, leaching, soil, climate, and management context; convert reported N2O-N, NH3-N, or nitrate-N only once and retain the original basis. | nutrient records; residue fate; soil and climate; method tier and factors | declared elementary emissions by substance and receiving medium | `ipcc-2019-managed-soils-n2o` |
| `calc_land_occupation` | productive land | `area-time = production-unit area × declared occupation time`; normalize by `calc_reference_normalization`; for perennial units use the declared productive, replacement, and termination periods. | area; dates; production period; accepted seed output | ha a or m2 a per reference flow | `ipcc-2019-cropland`; `mass-balance-identity` |
| `calc_water_balance` | irrigation, extraction, conditioning, and discharge | Reconcile source withdrawal, delivered water, recirculation, evaporation, retained water, and discharge. Do not count source withdrawal and supplied process water as the same exchange. | source and process-water records; meter readings; discharge and recirculation | water inputs, withdrawal, and discharge by process | `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_extraction_yield` | fleshy and dry extraction | `extraction recovery = seed intermediate mass on declared basis / received seed-bearing material mass on the same basis`; retain co-products, residuals, rejects, and unexplained fraction separately. | input/output masses; moisture; co-product and reject records | recovery ratio and reconciled extraction outputs | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_conditioning_yield` | primary conditioning | `conditioning recovery = conditioned seed mass / raw or extracted seed input mass` after moisture conversion; reconcile accepted seed, screenings, dust, rejects, moisture loss, and unexplained fraction. | conditioning input/output; moisture; screening and loss records | conditioning recovery and mass balance | `fao-seed-production-manual`; `mass-balance-identity` |
| `calc_quality_lot_aggregation` | lot release and campaign aggregation | Aggregate only lots with matching identity, route, moisture basis, test method, and declared quality class. Report mass-weighted quality values only when the test method permits; otherwise retain lot results separately. | lot mass; quality results; test method; lot identity | accepted lot set and quality disclosure | `ista-international-rules`; `oecd-seed-schemes` |
| `calc_co_product_attribution` | fruit, pulp, flesh, or other intended co-products | Prefer subdivision. When shared burdens remain, apply the declared physical or economic allocation basis to the evidenced intended outputs and disclose sensitivity; residues and wastes receive no co-product credit. | shared process burdens; output masses or values; intended-use evidence | attributed seed burden and co-product burden | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `calc_period_attribution` | perennial orchards, mother plants, seed gardens, and multi-period storage | Link each input, asset, output, replacement, termination, and storage event to one period. Attribute shared burdens once to the declared output basis of that period and reconcile period opening and closing records. | period records; output; establishment/replacement/termination; storage records | period-attributed inventory and no-double-counting check | `iso-14044-2006`; `mass-balance-identity` |
| `calc_reusable_packaging_mass` | reusable packaging | `packaging mass per lot = package mass assigned to lot / documented service cycles`, adjusted only by the documented return or loss rate. If service cycles are unknown, report the full assigned mass and the uncertainty. | package mass; capacity; service cycles; return/loss rate; lot assignment | packaging mass per reference flow | `fao-seed-production-manual`; `mass-balance-identity` |
| `calc_storage_reconciliation` | included storage | Measure the actual damaged/rejected/lost stream by lot and destination, with mutually exclusive material quantities. Reconcile opening stock + receipts = accepted dispatch + other external transfers + rejected removals + independently evidenced physical loss + closing stock on matched moisture/component bases. Rework returned across this node is one paired transfer, or retained in closing stock if still held; it is not another final output. An unexplained balance difference is an investigation item, not automatically a physical waste or emission. Do not add removed lots to receipts, omit closing stock, or subtract a loss again when it is already part of this reported stream. Attribute and normalize each supported exported quantity once to accepted final output. | opening/closing inventory; receipts; dispatch; loss; rework records | storage loss and delivered reference amount | `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`; `mass-balance-identity` |
| `packaging_rejects_specific_output` | `seed_treatment_packaging_storage` | For fruit-seed treatment, packaging and presentation, identify off-spec packets, seal failures, labels, films, damaged containers and other actual discarded items by their evidenced materials and contamination state. Weigh each actual stream, or convert item counts using documented item mass and its uncertainty; count is not mass by itself. Reusable items returned to service remain in their reuse ledger and are not automatically end-of-life waste. Preserve seed-lot contamination controls, original accepted-reference-seed basis, stock movements, destinations and treatment responsibilities. This is a mandatory collection and calculation requirement, not an inventory exchange. Before dataset completeness, create one physically specific card for each actual exported stream, including composition, state, native quantity/property, destination and evidenced product/waste role. Use only a compatible verified UUID, or explicitly register the concrete unresolved identity. Do not invent a packaging recipe, assume segregation, infer zero from missing evidence or omit a required stream. A real single mixed stream may remain one composition-defined identity only with collection/transfer evidence and compatible treatment; never duplicate it with its component exports. Keep separately handled liquid and solid streams distinct. Preserve original attribution, period, mass/water balances, reference denominator and treatment/service boundaries; link existing matching exchanges rather than count duplicates. Former aggregate ranges are not individual-stream defaults or limits. | `cp_treatment_packaging_storage` | actual stream-specific exchanges, destinations and nonduplicated mass balance | `fao-seed-production-manual`; `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_emission_context`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_lot_traceability` | reference flow and all product rows | Maintain species or plant identity, cultivar/line or hybrid status, seed class, lot id, production unit, route, and hand-off for every product state. Resolve all fixed UUIDs before final process publication. | `fao-seed-systems`; `ista-international-rules` |
| `dq_measurement_and_tare` | mass, water, energy, packaging, and emissions | Retain instrument, invoice, meter, tare, conversion factor, moisture method, unit, and uncertainty or estimation basis. Distinguish measured, calculated, modelled, and provisional values. | `mass-balance-identity`; `ista-international-rules` |
| `dq_temporal_and_period_coverage` | annual, perennial, storage, and campaign records | Cover the complete seed production cycle or declared reporting period, all harvest rounds, storage movements, replacements, terminations, and retests. Link each record to one period. | `iso-14044-2006`; `mass-balance-identity` |
| `dq_input_completeness` | production and processing inputs | Provide a collected value, justified zero, or documented exclusion for each actual nutrient/amendment, crop-protection product, water, energy carrier, land, treatment, packaging, and storage service. | `ipcc-2019-cropland`; `fao-seed-production-manual` |
| `dq_quality_release_evidence` | accepted, downgraded, rejected, and reference seed | Retain sampling plan, test method, sample date, physical purity, germination or viability, moisture, health/treatment state, grade, and release decision. | `ista-international-rules`; `oecd-seed-schemes` |
| `dq_co_product_and_fate_evidence` | intended co-products, residues, rejects, and wastes | Retain recipient, function, quality, mass, hand-off, and destination evidence. Do not treat an undocumented residue or rejected stream as a co-product. | `iso-14044-2006`; `fao-seed-production-manual` |
| `dq_flow_binding_coordinates` | all parameterized and unmapped flows | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | `mass-balance-identity` |
| `dq_method_and_factor_provenance` | elementary emissions and conversions | Retain the source, version, applicable geography, year and method for emission, energy, water and mass-conversion factors. Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland` |
| `dq_mass_balance_and_uncertainty` | field, extraction, conditioning, grading, packaging, and storage | Reconcile incoming, accepted, downgraded, co-product, waste, sample, moisture, and unexplained streams. Report the residual and uncertainty; do not silently force a zero residual. | `mass-balance-identity`; `fao-tree-seed-handling` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm the final species or plant identity, sowing purpose, lot qualifiers, mass property, unit, moisture or viability basis, and declared gate. A final TIDAS process must replace the unresolved reference identity with a verified UUID. | `fao-seed-systems`; `ista-international-rules` |
| `validation_scope` | dataset boundary | Confirm the dataset is fruit seed for sowing and does not silently include food fruit, commodity fruit, seedlings, transplants, grafted plants, downstream cultivation, or post-gate distribution. | `fao-seed-production-manual`; `fao-seed-systems` |
| `validation_route_choice` | process map | Confirm the selected annual/perennial and field/protected/orchard route, and select fleshy or dry extraction only from current lot evidence. A route delta must change topology, inventory, calculation, data, or validation, not only the label. | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling` |
| `validation_process_map` | all processes | Confirm multiplication, harvest/capture, applicable extraction, conditioning, grading/testing, and included presentation/storage are distinct nodes with explicit product hand-offs. | `fao-seed-production-manual`; `fao-tree-seed-handling` |
| `validation_flow_binding` | all inventory rows | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | `mass-balance-identity` |
| `validation_nutrient_basis` | nutrient and soil-emission rows | Confirm only actually used products are present, with product mass, nutrient basis, application record, soil context, and one declared emission method. Do not force every fertilizer type. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_land` | water and land rows | Keep irrigation product input, natural water withdrawal, process water, discharge, and land occupation distinct; verify meter or area-time records and prevent double counting. | `ipcc-2019-cropland`; `mass-balance-identity` |
| `validation_quality_release` | accepted and reference seed | Confirm identity, class, physical purity, germination or viability, moisture or recalcitrant state, health/treatment status, sampling method, test date, grade, and lot release. | `ista-international-rules`; `oecd-seed-schemes` |
| `validation_co_product_outputs` | fruit, pulp, flesh, and downgraded seed | Enumerate every intended output and hand-off. Apply allocation only when output function and recipient are evidenced; distinguish co-products from residues and waste. | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `validation_period_attribution` | perennial or multi-period routes | Require period/phase boundaries, link inputs and outputs to one period, record establishment/replacement/termination treatment, and prevent double attribution. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_reject_rework_paths` | rejects, downgraded seed, returns, and losses | Every rejected state must be reworked, downgraded, recovered, treated, or discarded with a declared path. Rework must link to the upstream node and cannot be counted as an accepted output twice. | `fao-seed-production-manual`; `mass-balance-identity` |
| `validation_mass_balance` | all process outputs | Reconcile production, harvest, extraction, conditioning, grading, packaging, and storage balances on the declared moisture basis and report any unexplained residual. | `mass-balance-identity`; `fao-tree-seed-handling` |
| `validation_storage_and_gate` | included storage and final gate | Verify opening and closing inventory, storage duration, loss or rework, final moisture/viability state, packaging state, and gate hand-off. | `fao-tree-seed-handling`; `fao-seed-drying-storage-2024` |
| `validation_dataset_disclosure` | published dataset profile | Verify disclosure of location, period, route, quality attributes, evidence level, estimates, factors and unresolved identities. Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | `ista-international-rules`; `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground secondary dataset for fruit-seed production and conditioning; it may be projected to a TIDAS `flow`, `process`, `lifecyclemodel`, and dataset package after all identities and exchanges are resolved. |
| downstream_use | Use as a seed-production and seed-gate dataset in agricultural, horticultural, forestry, nursery, and product-system models where the seed lot and gate qualifiers match. |
| allowed_use | Comparative or attributional modelling that preserves the declared functional unit, route, gate, quality attributes, moisture basis, period, allocation, and documented co-product and reject treatment. |
| excluded_use | Do not use as a generic fruit crop, fruit-processing, transplant, nursery-plant, or downstream cultivation dataset; do not transfer a route-specific factor or quality threshold to another species without evidence. |
| required_metadata | reference flow; CPC scope; crop or plant identity; cultivar/line or hybrid status; seed class; geography; production-unit type; annual/perennial period; extraction route; moisture or recalcitrant state; purity; germination/viability and test method; treatment; packaging; storage; gate; concrete flow identity verification; UUID status; collection coverage; allocation; and DQR |
| required_quality_disclosure | lot and production-unit coverage, temporal and period coverage, meters and measurement methods, quality-release evidence, calculation and emission methods, concrete flow identity verification, unresolved identities, fixed-UUID resolution status, exclusions, mass balances, co-product decisions, reject fates, uncertainty, and data-quality limitations |
| update_trigger | material change in crop or plant scope, seed class, production route, extraction technology, treatment, packaging, storage, gate, concrete flow identity verification|

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-production-manual` | official_guidance | FAO, Seed Production Manual, <https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf> | seed-lot identity, contamination prevention, processing, packaging, storage, reject and residue handling |
| `fao-seed-systems` | official_guidance | FAO, What are seed systems?, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/> | seed-system boundary, seed identity, source material, quality, and downstream seed use |
| `fao-local-vegetable-seed-production` | official_guidance | FAO, Home Garden Technology Leaflet 17: Seed Production, <https://www.fao.org/4/X3996E/x3996e41.htm> | fruit and vegetable seed selection, fleshy-fruit fermentation, drying, cleaning, storage, and intended seed production |
| `fao-tree-seed-handling` | official_guidance | FAO, Collection, Storage and Treatment of Tree Seeds, <https://www.fao.org/4/ad226e/AD226E05.htm> | fleshy and dry fruit extraction, soaking, flotation, cleaning, drying, recalcitrant-seed exceptions, and storage |
| `fao-seed-drying-storage-2024` | official_guidance | Groot, Gudinchet and Klaedtke, Practical Guide for drying and storing vegetable seeds in organic small-scale and on-farm seed production, FAO/LiveSeeding, 2024, <https://orgprints.org/id/eprint/52128/2/LiveSeeding_HandBook_SeedDryingAndStorage_050524_final-EN.pdf> | drying, storage, viability, and data-collection questions for vegetable seed lots |
| `oecd-seed-schemes` | official_guidance | OECD, Seeds and OECD Seed Schemes, <https://www.oecd.org/en/topics/seeds.html> | varietal identity, purity, field inspection, certification, and seed-lot quality governance |
| `ista-international-rules` | standard | International Seed Testing Association, International Rules for Seed Testing, 2026, <https://www.seedtest.org/en/publications/international-rules-seed-testing.html> | sampling, purity, germination, seed-health testing, moisture methods, and reporting consistency |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, <https://www.iso.org/standard/38498.html> | functional-unit consistency, allocation hierarchy, co-product treatment, and disclosure |
| `ipcc-2019-cropland` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | crop-management, land, residue, and agricultural activity-data method context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Chapter 11 N2O and CO2 emissions from managed soils, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | nutrient, residue, volatilization, leaching, and managed-soil emission method selection |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for production, extraction, conditioning, quality release, packaging, storage, rejects, losses, and reference-flow reconciliation. | normalization, yield, allocation, output reconciliation, and QA guardrails |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
