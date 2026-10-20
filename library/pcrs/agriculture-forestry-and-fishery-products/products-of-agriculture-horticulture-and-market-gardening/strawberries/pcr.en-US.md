---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.strawberries
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Strawberries

## 1. Scope and applicability
This rule covers cultivated strawberries delivered at the farm-gate or first declared hand-off after optional primary conditioning. It covers the crop cycle, harvest, grading, conditioning, inputs, outputs, losses, rejects, and co-products. Retail, consumer use, and end-of-life are excluded unless explicitly declared.

## 2. Product category identity
The product is strawberry fruit (CPC 01354) from open-field, protected, or mixed production. State production system, site/region, crop year, cultivar/group where material, and hand-off.
| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.strawberries |
| classification_refs | CPC 3.0 / 01354; mapping relation: exact |
| covered_products | Cultivated fresh strawberries |
| excluded_products | Nursery material, processed products, retail and consumer use |
| representative_product | Marketable fresh strawberries at the declared hand-off |

## 3. Reference flow
| Field | Value |
| --- | --- |
| What | Marketable strawberries at the declared hand-off |
| How much | 1 kg fresh strawberries |
| How well | Grade, maturity, moisture condition, and marketability state |
| How long or cycle | One crop year or production cycle |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Marketable fresh strawberries at the declared hand-off (UUID unresolved; intentionally blank) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production system; site/region; crop year; cultivar/group; harvested and marketable mass; reject/loss/rework/recovery destinations; irrigation and energy; fertilizer product and nutrient basis; conditioning; hand-off; allocation basis; reporting period and asset attribution |

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement-01` | all product and waste masses | Mass | kg | Use one declared hand-off basis and reconcile harvested, marketable, downgraded, rejected and discarded quantities. |
| `measurement-02` | fertilizer and amendments | Product and nutrient mass | kg product; kg N/P/K | Record actual product mass and declared nutrient basis; nutrient mass does not replace product mass. |
| `measurement-03` | area, time, water and energy | Activity-specific property | declared activity unit | Preserve original units and document conversions, irrigation source and energy carrier. |

## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Managed strawberry site and crop cycle with attributable establishment inputs |
| starting_condition_role | Start of managed strawberry production |
| product_classification_scope | Cultivated fresh strawberry fruit corresponding to CPC 3.0 code 01354 |
| recursive_input_rule | Stop same-category recursion at a declared purchased input and link its upstream dataset |
| upstream_dataset_requirement | Provide suitable background datasets for purchased inputs and services crossing the boundary |
| disclosure | Declare system, site, cycle, hand-off, yields, losses, inputs, destinations, allocation and unresolved identity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary-01` | foreground system | Start at the managed strawberry site and crop cycle, including attributable establishment inputs. | `source-02` |
| `boundary-02` | foreground system | Include planting material, soil/substrate preparation, fertilizer/amendments, crop protection, irrigation, field/greenhouse energy, attributable infrastructure services, harvest, grading, and primary conditioning to hand-off. | `source-02` |
| `boundary-03` | purchased inputs and waste | Use suitable background datasets for purchased inputs; disclose unresolved identity. Keep residues, losses, rejects, and waste in-boundary until their declared destination. | `source-02` |

## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `process-01` | Managed cultivation | required | All crop-cycle operations | managed biological production | crop cycle and saleable kg |
| `process-02` | Harvest and capture | required | All harvest operations | harvest capture | harvested and saleable kg |
| `process-03` | Grading and hand-off | required | When grading or hand-off occurs | grading and sorting | delivered kg |
| `process-04` | Primary conditioning | conditional | When washing, cooling or packing occurs before hand-off | primary conditioning | conditioned kg |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

### Process: Managed cultivation (`process-01`)
#### Inputs
##### Product flows
###### Planting material (`row-01`)
Record planting material, cultivar or cultivar group, propagation form, quantity and supplier for each site or plot.
- Selected flow: Strawberry planting material (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg product
- Amount rule: supplier, invoice and planting records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
###### Urea fertilizer (`process_01_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for process_01_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1 kg marketable strawberries.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `source-01`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`process_01_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `source-01`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`process_01_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `source-01`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`process_01_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `source-01`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`process_01_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `source-01`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`process_01_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `source-01`; `fao-organic-nutrients`

###### Irrigation water (`row-04`)
Record irrigation water source, volume and the field or production-unit application basis.
- Selected flow: Irrigation water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Amount rule: meter, delivery, invoice or operation log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
###### Electricity at the equipment supply point (`row_18_electricity`)

**Collection scope and applicability for row_18.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record electricity, fuel and other energy carriers used by the cultivation operation.
Raw activity or stage basis: per 1 kg marketable strawberries.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_cultivation` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `source-01`; `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`row_18_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `source-01`; `fao-agricultural-energy`

#### Outputs
##### Product flows
###### Crop output (`row-05`)
Calculate crop output from harvested-lot records before grading.
- Selected flow: Strawberry crop output (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: crop and harvest mass records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`
##### Waste flows
###### Residues and field losses (`row-06`)
Record crop residues and field losses with quantity, destination and treatment or recovery route.
- Selected flow: Crop residues and field losses (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: field record, loss estimate and mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg marketable strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-cultivation`
- Sources: `source-01`

### Process: Harvest and capture (`process-02`)
#### Inputs
##### Product flows
###### Fruit available for harvest (`row-07`)
Calculate fruit available for harvest from crop records before removal and grading.
- Selected flow: Fruit available for harvest (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: crop estimate reconciled to harvest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp-harvest`
- Sources: `source-01`
#### Outputs
##### Product flows
###### Harvested strawberries (`row-08`)
Use calibrated scale or harvest-log records for fruit sent to grading or hand-off.
- Selected flow: Harvested strawberries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: weigh ticket or harvest log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-harvest`
- Sources: `source-01`
##### Waste flows
###### Harvest loss (`row-09`)
Record field loss or incidental material with destination.
- Selected flow: Harvest loss (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: loss record and mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-harvest`
- Sources: `source-01`

### Process: Grading and hand-off (`process-03`)
#### Inputs
##### Product flows
###### Fruit entering grading (`row-10`)
Reconcile incoming grading mass to the harvested-lot records.
- Selected flow: Strawberries entering grading (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: receiving record and harvest reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp-grading`
- Sources: `source-01`
#### Outputs
##### Product flows
###### Marketable grades (`row-11`)
Record accepted marketable grades and dispatch weight.
- Selected flow: Fresh marketable strawberries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: grading and dispatch record

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg delivered strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-grading`
- Sources: `source-01`
###### Downgraded or alternate-use fruit (`row-12`)
Record downgraded or alternate-use fruit separately from accepted marketable grades and disclose its destination.
- Selected flow: Downgraded or alternate-use strawberries (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: grading record and destination reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-grading`
- Sources: `source-01`
##### Waste flows
###### Rejected or discarded fruit (`row-13`)
Record rejected fruit, loss and treatment route.
- Selected flow: Strawberry reject or waste (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: reject record and mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-grading`
- Sources: `source-01`

### Process: Primary conditioning (`process-04`)
#### Inputs
##### Product flows
###### Raw fruit entering conditioning (`row-14`)
Record raw fruit received by conditioning and link it to the incoming grading or dispatch lot when conditioning applies.
- Selected flow: Raw strawberries entering conditioning (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: intake record and lot reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`
###### Conditioning water (`row-15`)
Record water used for washing or other conditioning operations when it crosses the foreground boundary.
- Selected flow: Conditioning water supply (UUID unresolved; intentionally blank)
- Flow property / unit: Volume / m3
- Amount rule: meter, invoice and run log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`
###### Wooden crate (`row_19_wood_crate`)

**Collection scope and applicability for row_19.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record packaging or presentation materials consumed by the conditioning run when they cross the foreground boundary.
Raw activity or stage basis: per 1 kg delivered strawberries.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `source-01`; `fao-package-identities`

###### Corrugated fibreboard box (`row_19_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `source-01`; `fao-package-identities`

###### Polyethylene wrapping film (`row_19_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `source-01`; `fao-package-identities`

###### Alternating current (`row-20_electricity`)

Actual electric washing, cooling, stabilization and packing equipment for the strawberry lot; identify any separate thermal treatment from its real equipment.

Activate only for documented alternating-current consumption at this node. The identity leaves voltage, technology and provider unspecified; record them and select compatible upstream supply. Preserve measured kWh and convert exactly to MJ using 1 kWh = 3.6 MJ; do not interpret electric energy as combustion fuel or useful heat.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy (database reference property: net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect only this carrier quantity attributable to this node under `cp-conditioning`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp-conditioning`
- Sources: `route-energy-fao`

Apply `row-20_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

#### Outputs
##### Product flows
###### Prepared strawberries at hand-off (`row-16`)
Record final prepared strawberries at the declared hand-off.
- Selected flow: Fresh strawberries at hand-off (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: dispatch record

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg delivered strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`
##### Waste flows
###### Conditioning losses and rejects (`row-17`)
Record conditioning losses, rejects and destinations.
- Selected flow: Conditioning loss or reject (UUID unresolved; intentionally blank)
- Flow property / unit: Mass / kg
- Amount rule: run mass balance and waste record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg delivered strawberries.

- Normalization basis: per declared reference flow
- Range: Broad provisional QA guardrail; replace with site-specific records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: declared flow unit per kg product
  - Basis: one declared crop cycle; values outside require documented explanation
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp-conditioning`
- Sources: `source-01`


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Marketable fresh strawberries at the declared hand-off (UUID unresolved; intentionally blank)
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
- Selected flow: Marketable fresh strawberries at the declared hand-off (UUID unresolved; intentionally blank)
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
| `allocation-01` | plots, systems, runs, grades and conditioning lines | Separate units where records support it; otherwise disclose the aggregation basis. | `source-03` |
| `allocation-02` | shared burdens and co-products | Enumerate intended outputs and use one documented physical or economic basis; residues and waste are not intended products unless explicitly declared. | `source-03` |
| `allocation-03` | crop-year and multi-period assets | Link establishment and multi-period assets to crop year, phase, replacement and termination; unresolved events block finalization. | `source-03` |
| `allocation-04` | downgrade, recovery and disposal | Declare rework, recovery, downgrade and disposal paths; rejected fruit is excluded from accepted output and cannot be double-counted. | `source-03` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `row_03_specific_input` | `cp-cultivation` | Operation process_01: Record actual crop-protection products, active ingredient or formulation, application event and destination. Original quantity method: application log, supplier record and invoice |


### Route-specific energy identification requirements

Select energy exchanges from the actual product state, operation, equipment and supply records. The conditional cards below are not a mandatory or exhaustive fuel list. For each requirement, document applicability and the used carrier, supplier, service period, native quantity and allocation; add a separate physically specific card and verify its UUID for any actual input not yet represented. An unidentified input remains an explicit completeness gap, never a zero or a generic energy exchange. Evidence of manual work, ambient drying or a bypass can justify non-use only for the affected operation. Preserve every required operation even when no example card is supplied.

Separate purchased supply from on-site conversion. Link self-generated electricity internally to the foreground generator and count its actual fuel and emissions there once; do not also charge a purchased-electricity supply for the same internal transfer. Likewise do not count supplier-side fuel again with purchased heat. Reconcile shared meters and contractor-included energy against existing cards, with one physical quantity assigned once. Retain source quantities, output throughput, shared-service allocation and excluded post-gate activities. For each carrier, apply period/output attribution once and scale to the declared reference quantity using matched accepted final output in the same product unit; do not normalize an already normalized amount again. Process-native intensities require a measured throughput link to that final output. These requirements do not set a consumption default or certify dataset completeness.

| requirement_id | collection_protocol_id | Required operation and evidence |
| --- | --- | --- |
| `row-20_identification` | `cp-conditioning` | Actual electric washing, cooling, stabilization and packing equipment for the strawberry lot; identify any separate thermal treatment from its real equipment. Raw activity or stage basis: per 1 kg delivered strawberries. (`route-energy-fao`) |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp-cultivation` | `process-01` | inputs and outputs | invoices, logs, meters, field book | product, nutrient, amount, water, energy, crop output | reconcile supplier and field records; Raw aggregation and attribution: sum by site and cycle `row_03_specific_input`: Operation process_01: Record actual crop-protection products, active ingredient or formulation, application event and destination. Original quantity method: application log, supplier record and invoice Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg, kg nutrient, m3, kWh | operation/monthly | full crop cycle | each site/plot | per declared reference flow | invoices, meters and review |
| `cp-harvest` | `process-02` | harvested fruit and loss | weigh tickets and harvest logs | lot, date, mass, block, destination | weigh each lot and reconcile; Raw aggregation and attribution: sum lots | kg | each lot | harvest season | each block | per declared reference flow | calibrated scale and logs |
| `cp-grading` | `process-03` | incoming, accepted and rejected fruit | grading and dispatch records | incoming, grade, mass, destination | lot mass balance; Raw aggregation and attribution: reconcile all states | kg | each lot | grading period | each line/site | per declared reference flow | dispatch and destination records |
| `cp-conditioning` | `process-04` | conditioning input, output and waste | run log, meter, invoice | lot, input, utility, output, waste | lot-linked reconciliation; Raw aggregation and attribution: allocate by lot mass Route-specific requirements: `row-20_identification`: Actual electric washing, cooling, stabilization and packing equipment for the strawberry lot; identify any separate thermal treatment from its real equipment. Raw activity or stage basis: per 1 kg delivered strawberries. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. | kg, m3, kWh | each run | conditioning period | conditioning unit | per declared reference flow | meters and run records |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |
| `cp_phase1_environment_coverage` | process_01 | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage; site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation-01` | all normalized rows | Inventory amount / accepted strawberry mass at the declared hand-off. | row amount; accepted mass | amount per kg accepted strawberries | `source-03` |
| `calculation-02` | site or period aggregation | Aggregate by quantity-weighted results and disclose the denominator; do not average intensities unweighted. | site/period amounts; denominators | weighted intensity | `source-03` |
| `calculation-03` | fertilizer and amendments | Product mass × declared nutrient fraction; retain product mass and nutrient mass separately. | product mass; nutrient fraction | product and nutrient amounts | `source-02` |
| `calculation-04` | harvest, grading and conditioning | Reconcile incoming mass to accepted, downgraded, recovered, reworked, rejected and discarded states within documented tolerance. | all mass records | mass-balance result | `source-03` |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality-01` | all foreground records | Record temporal, geographical and technological representativeness, completeness, measurement or estimation method, uncertainty and data-quality notes. | field records, logs and review |
| `quality-02` | identity and qualifiers | Record production system, site/region, crop year, cultivar/group, hand-off and unresolved identity status. | dataset metadata and source records |
| `quality-03` | mass and allocation | Use calibrated weighing or documented estimates, reconcile lots, and retain allocation and destination evidence. | weigh records, mass balance and destination records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation-01` | reference flow | Confirm the 1 kg reference basis, mass property and kg unit; unresolved reference identity remains an explicit review gap. | `source-03` |
| `validation-02` | process sequence | Confirm cultivation-to-harvest-to-grading-to-conditioning/hand-off ordering and a destination for every output, loss, reject and waste state. | `source-03` |
| `validation-03` | mass balance | Confirm incoming mass equals accepted, downgraded, recovered, reworked and discarded states within documented tolerance. | `source-03` |
| `validation-04` | products, nutrients and allocation | Confirm product/nutrient bases, units, crop-year attribution, allocation, period and rework treatment without double counting. | `source-02`, `source-03` |
| `validation-05` | dataset completeness | Missing qualifiers, identities, evidence, destinations or allocation decisions make the dataset review-required. | `source-03` |

## 10. Published dataset profile
| Field | Value |
| --- | --- |
| dataset_role | secondary foreground dataset for farm-gate strawberry LCA |
| downstream_use | Foreground process and lifecycle-model construction |
| allowed_use | Declared strawberry system, hand-off, geography and reporting cycle |
| excluded_use | Processed, retail, consumer-use or materially different systems |
| required_metadata | site, system, cultivar/group, cycle, yields, inputs, losses, destinations, allocation and identity status |
| required_quality_disclosure | completeness, representativeness, measurement, estimates, uncertainty and unresolved UUIDs |
| update_trigger | material change in technology, boundary, inputs, allocation or reporting basis |

## 11. Data Sources
| source_id | type | Reference | Use |
| --- | --- | --- | --- |
| `source-01` | dataset | Current-product route evidence and foreground records | identity, quantities, boundaries, output states and collection completeness |
| `source-02` | official_guidance | Official agronomic guidance selected during review | contextual practices, not site-specific quantities |
| `source-03` | standard | ISO 14040/14044-aligned LCA principles and program instructions | boundary, allocation, documentation and data quality |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
