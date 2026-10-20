---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.soya-beans-seed-for-planting
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---
# Soya Bean Seed for Planting
## 1. Scope and Applicability
This PCR guides a foreground data package for soya bean seed intended for sowing under CPC 3.0 `01411`. It covers seed multiplication or controlled seed production, harvest, seed conditioning, grading, quality testing, optional treatment, packaging, and optional storage to a declared seed gate. The reference identity uses the farm gate with the qualifier Seed-grade, cleaned for sowing; a delivery gate is allowed only when storage and delivery records are included.
It applies to open-pollinated, cultivar, foundation, registered, certified, or comparable soya bean sowing-seed routes when seed class, production route, quality status, geography, and gate are declared. Parental-line isolation, variety isolation and field production controls, and certification activities are included when inside the foreground boundary, but this PCR supplies no universal breeding facts, quantities, factors, UUIDs, or certification results.
Commodity soya bean grain, forage or silage soya bean, vegetable soybeans sold as a vegetable, food or feed processing, starch or ethanol conversion, downstream cultivation, retail distribution, and consumer use are excluded. Breeding research and capital goods are excluded unless the data package explicitly includes them.
## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.soya-beans-seed-for-planting` |
| classification_refs | CPC 3.0 `01411`, `Soya beans, seed for planting`; mapping relation: exact |
| covered_products | Cleaned, graded, quality-controlled soya bean seed intended for sowing, including declared cultivar and seed class seed classes |
| excluded_products | Commodity soya bean grain; forage or silage soya bean; vegetable soybeans; processed soya bean products; downstream crop production; unqualified breeding research |
| representative_product | Accepted soya bean sowing seed at declared moisture basis, quality class, treatment status, packaging state, and gate |
| production_route | Managed soya bean seed multiplication or controlled seed production followed by harvest, conditioning, quality testing, optional treatment, and packaging |
| market_state | Seed lot accepted for sowing and transferred at the declared farm or delivery gate |
## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Accepted soya bean seed for sowing at the declared seed gate |
| How much | 1 kg net accepted seed |
| How well | Seed class or certification class, cultivar and seed class, variety or source-lot identity where applicable, moisture basis, physical purity, germination or viability, treatment status, packaging state, geography, and gate |
| How long or cycle | One single-period declared seed production crop cycle; no storage is included unless the data package explicitly extends the gate |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Soya beans, seed for planting |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | seed class or certification class; cultivar and seed class; variety or source-lot identity where applicable; treatment status; moisture basis; physical purity; germination or viability; geography; crop cycle; declared gate; packaging state |
The required qualifiers must be present in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Mass is the reference basis. Seed count is allowed only with thousand-kernel weight or another transparent count-to-mass conversion.
Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference as net accepted soya bean sowing seed at the declared gate and exclude container tare. |
| `seed_count_conversion` | seed count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and seeds | Convert count to mass only with recorded thousand-kernel weight, lot count, or an equivalent transparent factor. |
| `seed_quality_attributes` | accepted seed | declared quality property | percent or declared unit | Retain moisture, physical purity, germination or viability, and treatment status as lot attributes; do not replace them with a universal default. |
| `moisture_basis` | field and conditioning mass | Mass and moisture content | kg and declared mass fraction | Preserve as-received mass and moisture basis. Convert only with measured moisture and an explicit mass-and-water equation. |
| `fertilizer_n_basis` | nutrient inputs and soil emissions | Mass | kg product and kg nutrient | Record formulated product mass and nutrient mass separately; nitrogen calculations use declared kg N input. |
| `water_basis` | irrigation and withdrawal | Volume or Mass | m3 or kg | Distinguish supplied irrigation water, natural-resource withdrawal, and any separately reported consumption indicator. |
| `energy_inventory` | field and conditioning energy | Mass, Volume, or Energy | kg, L, MJ, or kWh | Preserve energy carrier, measured unit, operation, process, and conversion basis. |
| `packaging_count` | count-based packaging | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item and kg | Count-based packaging records must state bag capacity or material mass when conversion to mass is required. |
| `land_basis` | land occupation | Area-time | ha·crop cycle or declared area-time unit | Record planted area and crop-cycle occupation; do not use land occupation as a proxy for land transformation. |
## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | source seed lot, source seed lot, or declared seed-production starting material |
| starting_condition_role | reproduction identity and crop-production starting condition |
| product_classification_scope | CPC 3.0 `01411`, soya bean seed for sowing; commodity grain, forage or silage soya bean, and downstream soya bean products are outside this PCR |
| recursive_input_rule | A same-category seed input used to establish the crop is a declared starting input and is not current-cycle accepted output. A seed lot entering conditioning is an intermediate hand-off, not a second reference output. |
| upstream_dataset_requirement | Source seed, nutrient products, crop-protection products, irrigation-water supply, energy carriers, packaging materials, and waste-treatment services require representative upstream datasets or a documented exclusion. |
| disclosure | seed class; cultivar and seed-class route; variety or source-lot identity; field and geography; crop cycle; irrigation; nutrient and crop-protection records; harvest mass and moisture; conditioning, testing, treatment, packaging, storage, rejects, and gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_seed_gate` | foreground boundary | Include seed production, harvest, conditioning, quality testing, optional treatment, packaging, and only storage or delivery needed to reach the declared seed gate. | `fao-soya-seed-production`; `fao-soya-drying-handling` |
| `boundary_gate_definition` | reference product | Use the farm gate by default. A delivered-seed gate requires storage or delivery records, losses, and gate hand-off. | `fao-soya-seed-production`; `mass-balance-identity` |
| `boundary_seed_quality` | accepted seed | Include grading, quality testing, treatment status, and lot acceptance when they determine whether the output is accepted sowing seed. | `fao-soya-seed-production`; `usda-seed-cleaning-handling` |
| `boundary_input_completeness` | field and conditioning | Provide a collected value, justified zero, or documented exclusion for source seed, nutrients, crop protection, irrigation, field energy, land, conditioning energy, packaging, rejects, and treatment. | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | all outputs | Separate accepted seed, intermediate harvested seed crop, rejects, screenings, dust, residues, packaging waste, and unexplained loss by measured mass and fate. | `mass-balance-identity`; `fao-soya-drying-handling` |
## 6. Process Inventory Structure
The annual seed route is measured by crop cycle and lot. No default storage or stock retention is assumed; use a single-period crop-cycle basis unless storage is explicitly included. Intended co-products, downgraded streams, and rejects are separate outputs with declared hand-offs.
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_soya_bean_seed_multiplication` | Field Soya bean Seed Multiplication | required |  | foreground | crop-cycle inputs and harvested seed crop before conditioning |
| `seed_conditioning_treatment_and_packaging` | Seed Conditioning, Treatment, and Packaging | required |  | foreground | accepted cleaned and packaged soya bean sowing seed |
| `seed_storage` | Seed Storage | conditional | include when storage occurs before the declared gate or materially changes the delivered reference flow | foreground | stored and delivered accepted seed |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |
### Process: Field Soya bean Seed Multiplication (`field_soya_bean_seed_multiplication`)
#### Inputs
##### Product flows
###### Source seed or source seed lot (`source_seed_or_parental_line_lot`)
Record the source lot that establishes the declared soya bean seed route. Identity, class, treatment, mass, and source field are separate from current-cycle accepted output.
- Selected flow: soya bean source seed or source seed lot used for sowing dc436b03-e044-43a2-be71-c229dce5b901
- Flow property / unit: Mass / kg
- Amount rule: measured source-lot mass by field or source-lot unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg harvested seed crop.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_seed_lot_records`
- Sources: `fao-soya-seed-production`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Urea fertilizer (`field_soya_bean_seed_multiplication_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for field_soya_bean_seed_multiplication_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1,000 kg harvested seed crop.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`field_soya_bean_seed_multiplication_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`field_soya_bean_seed_multiplication_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`field_soya_bean_seed_multiplication_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`field_soya_bean_seed_multiplication_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`field_soya_bean_seed_multiplication_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`; `fao-organic-nutrients`

###### Irrigation water supplied (`irrigation_water_supplied`)
Record delivered irrigation water from each declared source. A verified rain-fed route records a justified zero with supporting evidence.
- Selected flow: irrigation water supplied to the seed-production field
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered or evidenced delivered irrigation by field and source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg harvested seed crop.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Electricity at the equipment supply point (`field_combustion_energy_electricity`)

**Collection scope and applicability for field_combustion_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record fuel or directly supplied combustion energy used by field equipment, including pumping when the carrier is combusted on site. Keep mobile transport fuel outside this row.
Raw activity or stage basis: per 1,000 kg harvested seed crop.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_field_energy_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`; `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`field_combustion_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_field_energy_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`; `fao-agricultural-energy`

###### Irrigation pumping electricity (`irrigation_pumping_electricity`)
Record purchased electricity used for irrigation pumping or electrically driven field equipment at the field boundary.
- Selected flow: purchased electricity for irrigation pumping
- Flow property / unit: Energy / kWh or MJ
- Amount rule: meter, utility bill, or supplier record allocated to the declared field route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg harvested seed crop.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
##### Elementary flows
###### Cultivated land occupation (`cultivated_land_occupation`)
Record cultivated land occupation for the declared seed crop cycle. Verify the exact elementary-flow UUID at data-package generation.
- Selected flow: Cultivated land occupation (UUID unresolved; occupation only)
Land occupation is area multiplied by actual occupied duration. Land transformation, if included, is a separate from/to land-state area event with date, previous use, accounting period and attribution; never give it an area-time quantity or repeat it each crop cycle.
- Flow property / unit: Area-time / ha·crop cycle
- Amount rule: planted area multiplied by the declared crop-cycle occupation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted seed output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_land_use_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Natural water withdrawal (`natural_water_withdrawal`)
Keep natural-resource withdrawal distinct from delivered irrigation-water product input.
- Selected flow: water resource withdrawn from the declared natural source
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: source-specific withdrawal measured or calculated from pumping records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted seed output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-cropland`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
#### Outputs
##### Product flows
###### Harvested soya bean seed crop for conditioning (`harvested_soya_bean_seed_crop_for_conditioning`)
This intermediate product leaves field multiplication and enters seed conditioning; it is not an additional final reference output.
- Selected flow: harvested soya bean seed crop for conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured harvested seed-crop mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: process output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvested_seed_mass`
- Sources: `fao-soya-seed-production`; `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
###### Field residues and non-seed material (`field_residues_and_non_seed_material`)
Record residue, non-seed plant material, damaged seed, or other field material as waste unless it crosses the boundary as an intentionally sold or transferred product.
- Selected flow: field residue or non-seed material by declared fate
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg harvested seed crop.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_residue_records`
- Sources: `ipcc-2019-cropland`; `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Elementary flows
###### Fossil carbon dioxide from field energy (`fossil_carbon_dioxide_from_field_energy`)
Calculate only the fossil CO2 physically released by fuel combustion inside this foreground operation. For each actually burned fuel, use measured fuel mass or volume converted by documented density and net calorific value to the activity unit of its compatible combustion-only kg CO2 factor; sum fuel-specific releases, attribute once and normalize once to matched accepted final output. Preserve fossil versus biogenic carbon. Purchased electricity, purchased heat and inclusive transport or machinery-service life-cycle factors are upstream burdens, not local elementary CO2 releases. Link those supply/service datasets once; if combustion is explicitly disaggregated, exclude that same combustion from the linked dataset boundary. Do not add supply-chain CO2 or CO2-equivalent totals to this substance-mass card. Demonstrated absence of local fossil combustion makes this card inapplicable; missing records do not establish zero.

- Selected flow: fossil carbon dioxide emitted to air from field energy
- Flow property / unit: Mass / kg
- Amount rule: Calculate only the fossil CO2 physically released by fuel combustion inside this foreground operation. For each actually burned fuel, use measured fuel mass or volume converted by documented density and net calorific value to the activity unit of its compatible combustion-only kg CO2 factor; sum fuel-specific releases, attribute once and normalize once to matched accepted final output. Preserve fossil versus biogenic carbon. Purchased electricity, purchased heat and inclusive transport or machinery-service life-cycle factors are upstream burdens, not local elementary CO2 releases. Link those supply/service datasets once; if combustion is explicitly disaggregated, exclude that same combustion from the linked dataset boundary. Do not add supply-chain CO2 or CO2-equivalent totals to this substance-mass card. Demonstrated absence of local fossil combustion makes this card inapplicable; missing records do not establish zero.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted seed output.

- Normalization basis: per declared reference flow
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_energy_records`
- Sources: `ipcc-2019-cropland`; `ipcc-2006-energy-combustion-boundary`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
### Process: Seed Conditioning, Treatment, and Packaging (`seed_conditioning_treatment_and_packaging`)
#### Inputs
##### Product flows
###### Harvested seed crop input (`harvested_seed_crop_input`)
Record the field output received by conditioning as a separate intermediate input, retaining lot, moisture, and source-field identity.
- Selected flow: Harvested unconditioned soya bean seed crop at measured receiving moisture (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured receiving mass at declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted packaged seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_input_records`
- Sources: `mass-balance-identity`; `fao-soya-drying-handling`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

This receiving intermediate has not yet been established as cleaned, quality-released sowing seed. Confirm its actual physical state and identity independently; the final cleaned-for-sowing UUID is not its default. A lot already cleaned upstream requires evidence and the corresponding non-overlapping conditioning boundary, not assumed equivalence.

###### Conditioning and drying electricity (`conditioning_and_drying_electricity`)
Record electricity for drying, shelling, cleaning, grading, testing, treatment, and packaging when it crosses the conditioning boundary.
- Selected flow: purchased electricity for seed conditioning and packaging
- Flow property / unit: Energy / kWh or MJ
- Amount rule: meter, utility bill, or equipment log by conditioning campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1 kg accepted packaged seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`
- Sources: `fao-soya-drying-handling`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Wooden crate (`seed_packaging_function_wood_crate`)

**Collection scope and applicability for seed_packaging_function.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record bags, liners, closures, labels, or other packaging functions used before the declared gate. Packaging remains separate from seed material.
Raw activity or stage basis: per 1 kg packaged seed.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `usda-seed-cleaning-handling`; `fao-package-identities`

###### Corrugated fibreboard box (`seed_packaging_function_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `usda-seed-cleaning-handling`; `fao-package-identities`

###### Polyethylene wrapping film (`seed_packaging_function_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_input_records`
- Sources: `usda-seed-cleaning-handling`; `fao-package-identities`

##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows
###### Accepted soya bean sowing seed (`accepted_soya_bean_sowing_seed`)
Accepted cleaned, graded, tested, optionally treated, and packaged seed is the intended output and final reference product at the declared seed gate.
- Selected flow: Soya beans, seed for planting `dc436b03-e044-43a2-be71-c229dce5b901`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: measured accepted output after quality release and packaging

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: reference flow.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_seed_mass`
- Sources: `fao-soya-seed-production`; `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Intended co-product or downgraded seed stream (`intended_seed_coproduct_or_downgrade`)
Record this product output only when screenings, downgraded seed, or another separated stream is intentionally transferred across the boundary as a documented co-product or independent product. Identify its destination and do not count it as accepted sowing seed.
- Selected flow: intentionally transferred downgraded or co-product seed stream
- Flow property / unit: Mass / kg
- Amount rule: measured output by batch and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_mass_records`
- Sources: `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
##### Elementary flows
### Process: Seed Storage (`seed_storage`)
#### Inputs
##### Product flows
###### Accepted seed entering storage (`accepted_seed_entering_storage`)
Include only when storage is inside the declared gate. Track lot identity and stored mass separately from delivered output.
- Selected flow: Soya beans, seed for planting `dc436b03-e044-43a2-be71-c229dce5b901`
- Flow property / unit: Mass / kg
- Amount rule: measured stored seed mass by lot and storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_lot_records`
- Sources: `fao-soya-seed-production`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
###### Storage electricity (`storage_electricity`)
Record electricity for storage climate control, handling, or monitoring when material and inside the boundary.
- Selected flow: purchased electricity for seed storage
- Flow property / unit: Energy / kWh or MJ
- Amount rule: meter or utility record allocated by stored mass and duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_energy_records`
- Sources: `fao-soya-seed-production`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows
###### Delivered accepted soya bean seed (`delivered_accepted_soya_bean_seed`)
Use only when the declared gate is after storage. It remains the same reference-product function and must not be counted with farm-gate output.
- Selected flow: Soya beans, seed for planting `dc436b03-e044-43a2-be71-c229dce5b901`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: measured delivered mass after storage reconciliation

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: reference flow.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivered_seed_mass`
- Sources: `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
##### Waste flows

###### Storage loss or damaged seed (`storage_loss_or_damaged_seed`)
Record storage loss, damaged lots, and destinations.
- Selected flow: storage loss or damaged seed by declared fate
- Flow property / unit: Mass / kg
- Amount rule: inventory reconciliation or weighed loss by lot and storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loss_records`
- Sources: `mass-balance-identity`
- Range: Candidate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit
  - Basis: declared process or reference-flow basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Soya beans, seed for planting
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
- Selected flow: Soya beans, seed for planting
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
| `allocation_avoid_subdivision` | field and conditioning processes | Avoid allocation by separately recording seed multiplication, conditioning, treatment, packaging, rejects, and fate-specific handling whenever the processes can be subdivided. | `iso-14044-2006` |
| `allocation_intended_outputs` | intentional product outputs | If a residue or off-grade stream is intentionally sold or transferred as a product, identify its destination and apply a declared attribution method only after product status is evidenced. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_seed_quality` | accepted seed and downgraded lots | Do not allocate seed-quality burdens to commodity grain or a downgraded stream unless the alternate output is intentionally produced, separately identified, and included in the declared gate. | `iso-14044-2006` |
| `allocation_fallback` | multiple intended outputs | If subdivision is not possible, use a declared mass, physical-property, economic, or other defensible method, disclose the rationale, and test a materially different method as sensitivity. | `iso-14044-2006` |
| `allocation_reject_fate` | rejects and waste | Keep field residue, conditioning rejects, packaging waste, storage losses, treatment, recovery, and disposal distinct; do not credit a displaced product without destination and substitution evidence. | `mass-balance-identity` |

Every rejected or off-spec seed state is explicitly routed as reworked, downgraded, recovered, or discarded. A rework loop or boundary exit is linked to the producing conditioning node, and rejected material is excluded from accepted output until a new documented quality-release event occurs.
Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `crop_protection_products_specific_input` | `cp_crop_protection_records` | Operation field_soya_bean_seed_multiplication: Record named formulated products and active substances used for weeds, pests, or diseases. Product identity and active-substance content remain distinct. Original quantity method: measured application by product and active substance |


### Route-specific energy identification requirements

Select energy exchanges from the actual product state, operation, equipment and supply records. The conditional cards below are not a mandatory or exhaustive fuel list. For each requirement, document applicability and the used carrier, supplier, service period, native quantity and allocation; add a separate physically specific card and verify its UUID for any actual input not yet represented. An unidentified input remains an explicit completeness gap, never a zero or a generic energy exchange. Evidence of manual work, ambient drying or a bypass can justify non-use only for the affected operation. Preserve every required operation even when no example card is supplied.

Separate purchased supply from on-site conversion. Link self-generated electricity internally to the foreground generator and count its actual fuel and emissions there once; do not also charge a purchased-electricity supply for the same internal transfer. Likewise do not count supplier-side fuel again with purchased heat. Reconcile shared meters and contractor-included energy against existing cards, with one physical quantity assigned once. Retain source quantities, output throughput, shared-service allocation and excluded post-gate activities. For each carrier, apply period/output attribution once and scale to the declared reference quantity using matched accepted final output in the same product unit; do not normalize an already normalized amount again. Process-native intensities require a measured throughput link to that final output. These requirements do not set a consumption default or certify dataset completeness.

| requirement_id | collection_protocol_id | Required operation and evidence |
| --- | --- | --- |
| `conditioning_combustion_energy_identification` | `cp_conditioning_energy_records` | Actual seed-drying heat supply, with the burner fuel or purchased-heat state identified from equipment and supplier records. Keep existing conditioning electricity separate; neither drying nor combustion is mandatory. Raw activity or stage basis: per 1 kg accepted packaged seed. (`route-energy-fao`) |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.

### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `field_soya_bean_seed_multiplication` | source seed or source seed lot | seed lot record | lot; class; cultivar or source-lot role; treatment; mass; moisture; supplier or source field | lot certificate, receiving record, calibrated scale; Raw aggregation and attribution: sum by field or source-lot unit and normalize to harvested seed crop | kg and declared attributes | per lot | crop cycle | field or production unit | per declared reference flow | certificate, receiving record, scale |
| `cp_nutrient_input_records` | `field_soya_bean_seed_multiplication` | nutrient and amendment inputs; required specific-emission identification and calculation | application record | product; formulation; nutrient content; mass; date; field; method; substance name; receiving compartment; reported unit and elemental/compound basis; method and factor source; actual activity; period; quantity uncertainty; related existing exchanges | invoice, label, application log, service record; Raw aggregation and attribution: sum product and nutrient mass by field; managed_soil_nitrogen_emissions_to_air_specific_emission: Identify each applicable gaseous nitrogen species emitted from managed soil in the actual soya-bean seed field. Preserve nutrient-input records, method tier, direct/indirect pathways and soil/climate applicability. Retain the original accepted-seed denominator and nitrogen-input calculation basis. The former 0 to 1000 screen in an unspecified flow unit does not define a valid species amount or default. This is a mandatory identification and calculation requirement, not an exchange. Before dataset completeness, instantiate one concrete elementary card per actual substance and receiving compartment. Retain kg substance separately from kg elemental N; convert only from the method-reported basis using the documented composition or stoichiometric fraction of the identified species. Never equate all nitrogen with a chosen compound or add elemental-N and compound masses as separate releases. Preserve source activity, factor units, period, uncertainty, boundary and original normalization; link to an existing matching card instead of counting a duplicate. Verify a compatible UUID or explicitly register the concrete unresolved identity. Missing identity, method or activity evidence does not establish zero or justify omission. | kg product and kg nutrient; kg of each identified substance and kg N recorded separately | per application | crop cycle | field | per declared reference flow | invoice, label, application record |
| `cp_irrigation_records` | `field_soya_bean_seed_multiplication` | irrigation and withdrawal | meter or source record | source; meter; reading; volume; date; field; pumping energy | calibrated meter, pump log, water record; Raw aggregation and attribution: sum by source and distinguish delivered water from withdrawal | m3, kg, kWh | event or month | crop cycle | field and source | per declared reference flow | calibration, readings, source record |
| `cp_field_energy_records` | `field_soya_bean_seed_multiplication` | field fuel and electricity | fuel or utility record | operation; carrier; quantity; machine or supplier; date; field ; actual locally burned fuel, fuel quantity/unit, density and net calorific value, fossil/biogenic fraction, combustion-only factor and unit, supplier/service boundary, existing combustion coverage | fuel log, meter, invoice, contractor record; Raw aggregation and attribution: attribute energy without double counting ; Apply the combustion-only boundary in the energy-emission calculation rule; purchased power or inclusive services remain separate upstream burdens. | L, kg, MJ, kWh | operation or billing interval | crop cycle | field or unit | per declared reference flow | meter, invoice, log |
| `cp_crop_protection_records` | `field_soya_bean_seed_multiplication` | crop protection | application record | product; active substance; dose; area; date; field; target | label and application log; Raw aggregation and attribution: sum by product and active substance `crop_protection_products_specific_input`: Operation field_soya_bean_seed_multiplication: Record named formulated products and active substances used for weeds, pests, or diseases. Product identity and active-substance content remain distinct. Original quantity method: measured application by product and active substance Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg product, kg active substance, ha | per application | crop cycle | field | per declared reference flow | label, applicator record |
| `cp_land_use_records` | `field_soya_bean_seed_multiplication` | land occupation | field area record | field; planted area; dates; crop duration | field record, GIS, farm register; Raw aggregation and attribution: calculate area-time and normalize | ha and crop cycle | per cycle | crop cycle | field | per declared reference flow | field map, GIS, farm record |
| `cp_harvested_seed_mass` | `field_soya_bean_seed_multiplication` | harvested seed crop | harvest record | field; date; mass; moisture; seed route; rejects | calibrated scale and harvest record; Raw aggregation and attribution: reconcile before conditioning | kg and moisture fraction | per harvest | crop cycle | field and receiving point | per declared reference flow | scale, harvest record |
| `cp_field_residue_records` | `field_soya_bean_seed_multiplication` | field residue | residue record | stream; mass; fate; date; field | scale, baling ticket, field log; Raw aggregation and attribution: sum by fate and boundary crossing | kg | per event | crop cycle | field | per declared reference flow | scale, ticket, field log |
| `cp_conditioning_input_records` | `seed_conditioning_treatment_and_packaging` | harvested seed input | batch receiving record | batch; input mass; moisture; source; date | batch sheet and calibrated scale; Raw aggregation and attribution: reconcile received mass to outputs | kg and moisture fraction | per batch | conditioning campaign | facility | per declared reference flow | batch sheet, scale |
| `cp_conditioning_energy_records` | `seed_conditioning_treatment_and_packaging` | conditioning energy | meter or equipment record | campaign; energy type; quantity; operation; period | meter, utility bill, equipment log; Raw aggregation and attribution: sum by operation and normalize Route-specific requirements: `conditioning_combustion_energy_identification`: Actual seed-drying heat supply, with the burner fuel or purchased-heat state identified from equipment and supplier records. Keep existing conditioning electricity separate; neither drying nor combustion is mandatory. Raw activity or stage basis: per 1 kg accepted packaged seed. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. | kWh, MJ, kg, L | campaign or interval | conditioning campaign | facility | per declared reference flow | meter, bill, equipment log |
| `cp_seed_treatment_records` | `seed_conditioning_treatment_and_packaging` | treatment material | treatment record | product; active substance; dose; treated mass; lot | treatment log, label, supplier certificate; Raw aggregation and attribution: sum by product and treated lot `seed_treatment_material_specific_input`: Record treatment products and active substances applied to accepted seed lots, including dose, treated mass, and treatment status. measured treatment product and active-substance mass by lot This is a mandatory specific-input collection requirement, not a selected exchange. Identify every actual formulation, carrier or independently supplied service from primary records, with physical identity, state, native quantity and supplier specifications. Create a separate concrete card for each actual input before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. Product mass and contained active-substance mass are different ledgers: convert only using documented composition and never count both as two purchases. Finished feed and separately added ingredients must not duplicate its recipe. Distinguish fuel purchase, purchased electricity/heat and inclusive machinery services; charge only their actual boundaries once. Preserve the original operation, period, attribution and final-output normalization. Missing identity or records do not establish zero use; no universal component range or invented recipe is supplied. `fao-soya-seed-production` | kg product, kg active substance, kg seed | per batch | conditioning campaign | facility | per declared reference flow | log, label |
| `cp_packaging_input_records` | `seed_conditioning_treatment_and_packaging` | packaging | packaging issue record | type; item count; capacity; mass; batch | inventory record or packing log; Raw aggregation and attribution: convert count only with declared capacity or mass | item and kg | per batch | conditioning campaign | facility | per declared reference flow | packing log, inventory record |
| `cp_accepted_seed_mass` | `seed_conditioning_treatment_and_packaging` | accepted seed | release record | batch; mass; moisture; purity; germination; treatment; gate | calibrated scale and quality test; Raw aggregation and attribution: sum released lots at declared basis | kg and attributes | per batch | conditioning campaign | facility and gate | per declared reference flow | scale, test, release record |
| `cp_reject_mass_records` | `seed_conditioning_treatment_and_packaging` | rejects and screenings | reject record | batch; stream; mass; fate | scale or batch mass balance; Raw aggregation and attribution: sum by stream and fate | kg | per batch | conditioning campaign | facility | per declared reference flow | scale, reject log, fate |
| `cp_packaging_waste_records` | `seed_conditioning_treatment_and_packaging` | packaging waste | waste record | material; mass; fate; period | scale or contractor record; Raw aggregation and attribution: sum by material and fate `packaging_waste_specific_output`: Record packaging losses and discarded packaging by material and fate. weighed packaging waste or inventory reconciliation by batch This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `usda-seed-cleaning-handling` | kg | per shipment or campaign | conditioning campaign | facility | per declared reference flow | scale ticket, contractor record |
| `cp_conditioning_emission_records` | `seed_conditioning_treatment_and_packaging` | conditioning emissions | emission record | substance; compartment; mass or factor; campaign | dust log, maintenance record, calculation; Raw aggregation and attribution: sum by species and compartment `conditioning_dust_and_combustion_emissions_specific_emission`: Record particulate or combustion species emitted from cleaning and drying according to the selected compartment and method. measured, collected, or calculated emission by campaign This is a mandatory emission-identification requirement, not an aggregate elementary exchange. Identify every applicable substance and actual receiving compartment separately, with compatible units, measured activity or justified calculation method, parameter applicability and uncertainty. Preserve the original operation, period, allocation and final-reference normalization. Reconcile direct and indirect pathways and upstream coverage once; do not substitute total nitrogen, total combustion emissions or a generic pollutant for a named compound. Separately document actual environmental returns, with their material and destination, if relevant. Before dataset completeness create each required specific exchange, confirm a compatible UUID or explicitly retain its unresolved identity. Missing records do not establish zero or inapplicability. `fao-soya-drying-handling` | kg | campaign or period | conditioning campaign | facility | per declared reference flow | log, calculation |
| `cp_storage_lot_records` | `seed_storage` | accepted seed in storage | inventory record | lot; mass; start and end dates; moisture; location | inventory reconciliation and scale; Raw aggregation and attribution: sum stored mass and retain duration | kg and days | per lot | storage period | storage site | per declared reference flow | inventory, scale |
| `cp_storage_energy_records` | `seed_storage` | storage electricity | meter or utility record | meter; quantity; period; stored mass | meter or utility bill; Raw aggregation and attribution: allocate by mass and duration | kWh or MJ | period | storage duration | storage site | per declared reference flow | meter, bill |
| `cp_storage_loss_records` | `seed_storage` | storage loss | loss record | lot; loss mass; category; fate; period | inventory reconciliation and scale; Raw aggregation and attribution: sum by fate | kg | per lot or period | storage period | storage site | per declared reference flow | inventory, disposal record |
| `cp_delivered_seed_mass` | `seed_storage` | delivered seed | delivery record | lot; mass; date; gate; receiver; moisture | dispatch record and calibrated scale; Raw aggregation and attribution: sum delivered lots without double count | kg and moisture fraction | per shipment | delivery period | declared gate | per declared reference flow | dispatch, scale |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_seed` | all foreground rows | divide each measured or calculated amount by net accepted seed at the same declared gate and basis | output records; input records | amount per 1 kg reference flow | `mass-balance-identity` |
| `convert_seed_moisture_basis` | field and conditioning mass | convert only from recorded mass and moisture using an explicit water-and-dry-matter equation | harvest; receiving; quality records | declared-basis mass | `mass-balance-identity`; `fao-soya-drying-handling` |
| `calculate_seed_conditioning_yield` | conditioning output | accepted seed mass divided by received harvested seed-crop mass, retaining rejects and moisture change separately | conditioning input; accepted mass; reject mass | yield, reject fraction, unexplained fraction | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `calculate_land_occupation` | land occupation | planted area multiplied by declared crop-cycle occupation and normalized to accepted seed | land records; accepted seed mass | area-time per reference flow | `ipcc-2019-cropland` |
| `calculate_water_withdrawal` | water withdrawal | convert metered volume where needed and keep source withdrawal separate from delivered irrigation | irrigation records | resource withdrawal per reference flow | `ipcc-2019-cropland` |
| `calculate_managed_soil_emissions` | nitrogen emissions | apply the selected method tier to nutrient inputs and declared soil, climate, and management context; disclose species conversion | nutrient records; method factors | species-specific emissions | `ipcc-2019-managed-soils-n2o` |
| `calculate_field_energy_emissions` | field energy | Calculate only the fossil CO2 physically released by fuel combustion inside this foreground operation. For each actually burned fuel, use measured fuel mass or volume converted by documented density and net calorific value to the activity unit of its compatible combustion-only kg CO2 factor; sum fuel-specific releases, attribute once and normalize once to matched accepted final output. Preserve fossil versus biogenic carbon. Purchased electricity, purchased heat and inclusive transport or machinery-service life-cycle factors are upstream burdens, not local elementary CO2 releases. Link those supply/service datasets once; if combustion is explicitly disaggregated, exclude that same combustion from the linked dataset boundary. Do not add supply-chain CO2 or CO2-equivalent totals to this substance-mass card. Demonstrated absence of local fossil combustion makes this card inapplicable; missing records do not establish zero. | field energy; factor | field-energy emissions | `ipcc-2006-energy-combustion-boundary` |
| `calculate_conditioning_energy_emissions` | conditioning energy | Calculate only the fossil CO2 physically released by fuel combustion inside this foreground operation. For each actually burned fuel, use measured fuel mass or volume converted by documented density and net calorific value to the activity unit of its compatible combustion-only kg CO2 factor; sum fuel-specific releases, attribute once and normalize once to matched accepted final output. Preserve fossil versus biogenic carbon. Purchased electricity, purchased heat and inclusive transport or machinery-service life-cycle factors are upstream burdens, not local elementary CO2 releases. Link those supply/service datasets once; if combustion is explicitly disaggregated, exclude that same combustion from the linked dataset boundary. Do not add supply-chain CO2 or CO2-equivalent totals to this substance-mass card. Demonstrated absence of local fossil combustion makes this card inapplicable; missing records do not establish zero. | conditioning energy; factor | conditioning emissions | `ipcc-2006-energy-combustion-boundary` |
| `reconcile_field_outputs` | field production | harvested seed crop plus residue, non-seed material, and documented loss reconcile to the harvest record within declared tolerance | harvest; residue records | field output balance | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | conditioning | received mass and moisture reconcile to accepted seed, rejects, packaging waste, emissions, and documented loss | conditioning input; accepted seed; rejects | conditioning balance | `mass-balance-identity`; `fao-soya-drying-handling` |
| `reconcile_storage_outputs` | storage | stored mass reconciles to delivered seed, storage loss, and closing inventory for the declared period | storage; delivery; loss records | storage balance | `mass-balance-identity` |
| `managed_soil_nitrogen_emissions_to_air_specific_emission` | `field_soya_bean_seed_multiplication` | Identify each applicable gaseous nitrogen species emitted from managed soil in the actual soya-bean seed field. Preserve nutrient-input records, method tier, direct/indirect pathways and soil/climate applicability. Retain the original accepted-seed denominator and nitrogen-input calculation basis. The former 0 to 1000 screen in an unspecified flow unit does not define a valid species amount or default. This is a mandatory identification and calculation requirement, not an exchange. Before dataset completeness, instantiate one concrete elementary card per actual substance and receiving compartment. Retain kg substance separately from kg elemental N; convert only from the method-reported basis using the documented composition or stoichiometric fraction of the identified species. Never equate all nitrogen with a chosen compound or add elemental-N and compound masses as separate releases. Preserve source activity, factor units, period, uncertainty, boundary and original normalization; link to an existing matching card instead of counting a duplicate. Verify a compatible UUID or explicitly register the concrete unresolved identity. Missing identity, method or activity evidence does not establish zero or justify omission. | `cp_nutrient_input_records` | separate substance/compartment emissions and elemental ledgers | `ipcc-2019-managed-soils-n2o` |
| `conditioning_rejects_and_screenings_identity_and_fate` | `seed_conditioning_treatment_and_packaging` | The conditioning_rejects_and_screenings collection role is mandatory when the original operation generates these materials. Record the actual material, composition, state, measured mass and destination separately for each physically distinct stream. Dust, chaff, grain, packaging and product rejects must not share one exchange merely because they arise at the same operation. A physically mixed stream may have one card only with its composition and treatment boundary documented. For downgraded produce, distinguish intended saleable co-products supported by recipient and use evidence from actual waste sent to treatment; a lower grade alone does not determine waste status or allocation. Keep on-site rework/internal returns and in-field retained biomass in reconciled internal ledgers instead of exporting them as waste. Create concrete product or waste cards as appropriate before completeness, with a compatible verified UUID or explicit unresolved identity; keep every attributable burden, do not credit unsubstantiated substitution, and do not count any stream twice. Normalize measured quantities once to the original accepted reference output. A missing identity, amount or destination blocks completeness; no aggregate default or numeric bound is inferred. | `cp_reject_mass_records` | Identity-specific exchanges and reconciled activity records | `usda-seed-cleaning-handling`; `mass-balance-identity` |

### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_seed_identity` | reference product and source lots | Declare seed class, cultivar and seed class, variety or source-lot identity where applicable, treatment status, moisture basis, physical purity, and germination or viability. | certificate, lot record, quality test |
| `dq_mass_records` | all mass rows | Every mass identifies date, site or batch, unit, moisture basis where relevant, and measurement device or source record. | calibration, weighbridge ticket, batch sheet |
| `dq_temporal_coverage` | crop-cycle and storage data | Cover the declared crop cycle and storage period and disclose single-season or multi-season aggregation. | dated field, input, harvest, storage, release records |
| `dq_input_completeness` | field and conditioning inputs | Quantify or justify zero or exclusion for source seed, nutrients, crop protection, irrigation, field energy, land, conditioning energy, treatment, and packaging. | ledgers, labels, meters, logs, invoices |
| `dq_quality_release` | accepted seed output | Retain lot-release basis, quality test method, moisture, purity, germination or viability, treatment status, and gate. | test, certificate, release record |
| `dq_reject_and_fate` | rejects, residues, waste | Every non-reference stream has measured or reconciled mass and declared destination; product status is not inferred from a name. | reject log, residue, dispatch or treatment record |
| `dq_mass_balance` | all processes | Reconcile field, conditioning, and storage outputs within declared tolerance and disclose unexplained fractions. | scale records, batch sheets, inventory reconciliation |
| `dq_binding_coordinate` | each inventory exchange | Check actual substance or product identity, state, direction, flow type, property, unit and applicable boundary; retain only a verified matching UUID, otherwise leave it absent and register the row. | identity verification records |
### Substance-specific Release Requirement

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `managed_soil_nitrogen_emissions_to_water_specific_emission` | field_soya_bean_seed_multiplication | For the actual field_soya_bean_seed_multiplication activity, preserve the original cp_nutrient_input_records collection role and activity/state/period basis. calculated from nutrient inputs, site conditions, and the selected leaching method. This is a mandatory identification and calculation requirement, not one aggregate elementary exchange. Enumerate each actual emitted substance and receiving compartment using a compatible measured/pathway method and activity-factor units, then create a separate concrete card or reuse the existing matching card once, with verified UUID or explicit unresolved identity. A generic pollutant/volatile/residue label, total mass loss or summed screening interval cannot establish a compound or individual-emission amount. Keep elemental versus molecular/reporting bases explicit, attribute the raw quantities and normalize once to accepted reference output. No supported release only with evidenced inapplicability; missing identity, method or activity blocks completeness. Exclude releases already covered by an inclusive service or upstream dataset. | cp_nutrient_input_records | separate supported substance/compartment exchanges | `ipcc-2019-managed-soils-n2o` |

## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm the verified soya bean sowing-seed UUID, all qualifiers, and the declared gate; the final exchange must retain that UUID. | `mass-balance-identity` |
| `validation_scope` | boundary | Confirm that the dataset is soya bean seed for sowing and does not silently include commodity grain, forage or silage soya bean, downstream cultivation, or downstream processing. | `fao-soya-seed-production` |
| `validation_process_map` | process inventory | Confirm field seed production, conditioning, quality release, and included storage are separate, with explicit hand-offs. | `fao-soya-seed-production`; `usda-seed-cleaning-handling` |
| `validation_flow_coordinates` | inventory rows | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | `mass-balance-identity` |
| `validation_nutrients_and_emissions` | nutrients and soil emissions | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_land` | irrigation, withdrawal, land | Keep delivered irrigation product input, natural water withdrawal, and land occupation distinct and prevent double counting. | `ipcc-2019-cropland` |
| `validation_quality_release` | accepted seed | Confirm seed class, quality attributes, treatment status, lot release, packaging state, and gate for the reference output. | `fao-soya-seed-production` |
| `validation_reject_fate` | rejects and waste | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `validation_mass_balance` | all outputs | Confirm field, conditioning, and storage balances reconcile within declared tolerance and accepted seed is not counted at two hand-offs. | `mass-balance-identity` |
| `validation_allocation` | intentional co-products | Confirm any intentional co-product is separately identified, destination is evidenced, and allocation or substitution treatment is disclosed. | `iso-14044-2006` |
| `validation_local_combustion_boundary` | energy and fossil CO2 | Verify every local CO2 amount against actual in-boundary fuel combustion and compatible combustion-only factors; reconcile upstream electricity, heat, fuel-supply and inclusive-service coverage so the same release is counted once. | `ipcc-2006-energy-combustion-boundary` |


## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream LCA construction where seed class, route, quality attributes, geography, moisture, treatment, packaging, and gate match |
| excluded_use | commodity grain; forage or silage soya bean; downstream cultivation; food, feed, starch, or ethanol processing; datasets omitting seed-quality or gate qualifiers |
| required_metadata | reference flow; CPC scope; seed class; cultivar and seed class; variety or source-lot identity where applicable; geography; crop cycle; moisture; purity; germination or viability; treatment; packaging; gate; concrete flow identity verification; collection coverage; DQR |
| required_quality_disclosure | lot and field coverage, measurement records, quality-release evidence, calculation rules, structural coordinates and concrete flow identity verification, fixed UUID evidence if any, exclusions, mass-balance results, and data-quality scores |
| update_trigger | material change in route, cultivar or source-lot practice, conditioning technology, treatment, packaging, storage, reference qualifiers, concrete flow identity verification|
## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-soya-seed-production` | official_guidance | FAO seed production and quality guidance, <https://www.fao.org/4/y4011e/y4011e0v.htm> | seed classes, quality attributes, lot acceptance, and seed-production boundary |
| `fao-soya-postharvest-operations` | handbook | FAO INPhO, Soybean: Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_SOYBEAN.pdf | crop harvest, drying and storage context only; seed acceptance/certification needs its own declared standard |
| `fao-soya-drying-handling` | handbook | FAO, Agricultural engineering in development: Grain and post-harvest systems, <https://www.fao.org/4/t0522e/T0522E03.htm> | drying, moisture, cleaning, conditioning, and process hand-off |
| `usda-seed-cleaning-handling` | handbook | USDA, Seed cleaning and handling guidance, <https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo20323/pdf/GOVPUB-A-PURL-gpo20323.pdf> | cleaning, grading, screenings, rejects, and handling records |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | cropland management, residue treatment, land, and crop-management method context |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed-soil nitrogen emissions and factor selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, data quality, and sensitivity expectations |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for seed harvest, conditioning, packaging, storage, rejects, and reference-flow reconciliation. | output reconciliation, normalization, and QA guardrails |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ipcc-2006-energy-combustion-boundary` | method_factor | IPCC 2006 Guidelines, Volume 2 Energy, Chapters 2 and 3 (stationary and mobile combustion), https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | Combustion activity, compatible fuel-specific factors and fossil/biogenic distinction; no universal site factor adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
