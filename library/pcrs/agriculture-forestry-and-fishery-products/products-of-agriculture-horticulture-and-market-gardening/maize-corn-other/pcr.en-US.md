---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Maize (corn), other

## 1. Scope and Applicability

This PCR guides foreground data package construction for non-seed maize grain, including shelled dent maize, flint maize, field corn, feed maize, food maize, industrial maize, and comparable harvested maize grain sold loose, bagged, or bulk at a declared farm, drying, storage, elevator, or regional delivery gate.

The PCR covers field crop production, harvest, shelling or threshing where needed, drying, cleaning, grading, storage, loading, and delivery to the declared gate. It excludes maize seed for sowing, maize for forage and silage, sweet corn harvested as a vegetable, processed maize products such as flour, grits, starch, oil, ethanol, flakes, or meal, and downstream animal feeding, milling, fermentation, or food manufacturing.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other` |
| classification_refs | CPC 3.0 `01122`, `Maize (corn), other` |
| covered_products | non-seed maize grain; shelled dent maize; shelled flint maize; field corn; feed maize; food maize; industrial maize grain before processing |
| excluded_products | maize seed for sowing; maize for forage and silage; sweet corn harvested as a vegetable; maize straw or stover as separate products; processed maize flour, grits, meal, starch, oil, ethanol, flakes, and prepared foods |
| representative_product | cleaned and dried maize grain at declared moisture basis |
| production_route | maize field production plus harvest, shelling or threshing, drying, cleaning, grading, storage, and declared-gate dispatch |
| market_state | unprocessed whole maize grain, bulk or packaged, at declared farm, storage, elevator, or regional delivery gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | non-seed maize grain |
| How much | 1 kg |
| How well | declared moisture basis, grain class or variety where relevant, grade or quality specification, intended use category, and declared gate |
| How long or cycle | one maize crop cycle; drying, storage, and delivery duration declared separately when included |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | moisture basis; grain class or variety where relevant; grade or quality specification; intended use category; production geography; crop year; declared gate; bulk or packaged state; drying and storage inclusion status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg cleaned maize grain at the declared moisture basis. |
| `moisture_basis` | harvested, dried, stored, and delivered maize grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg as received and kg at declared moisture basis | Record moisture content or moisture basis for incoming harvested grain, dried grain, storage losses, and delivered grain; convert consistently before comparison or aggregation. |
| `fertilizer_n_basis` | nitrogen fertilizer inputs and nitrogen emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record nitrogen fertilizer as kg product and kg N when nitrogen emissions are calculated. |
| `energy_inventory` | diesel, electricity, drying fuel, and storage energy | Energy | MJ, kWh, or kg fuel | State the energy unit used in each inventory row and preserve enough information for conversion to the declared emission factor basis. |
| `grain_quality_reporting` | reference product and saleable output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg by grade or lot | Report grade, foreign matter, damaged kernels, moisture, and intended use where these affect product equivalence or market allocation. |

## 5. System Boundary

The default boundary is foreground data collection to the declared gate for non-seed maize grain production:

1. Seed, fertilizer, soil amendments, irrigation water, crop protection products, fuel, electricity, drying fuel, packaging, and inbound transport records when they are part of the foreground data package.
2. Field production: land preparation, sowing, fertilization, irrigation where applicable, crop protection, cultivation, harvest, and field-side collection.
3. Post-harvest handling: shelling or threshing when needed, drying, cleaning, grading, storage, pest control for stored grain, loading, and delivery to the declared gate.
4. Co-products and residues: stover, cobs, husks, screenings, broken grain, dust, and spoiled grain when they cross the foreground boundary or receive product credit.

The foreground data package covers maize grain production to the declared gate. Downstream milling, feed use, ethanol production, starch production, food manufacturing, retail, cooking, and animal production are outside this PCR unless separately modelled as downstream use.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | planted_maize_crop |
| starting_condition_role | crop-cycle boundary anchor for the first foreground field operation record |
| product_classification_scope | current CPC 3.0 product category `01122`, `Maize (corn), other` |
| recursive_input_rule | input flow in the same product category that causes recursive tracing is recorded as purchased maize grain input with an upstream dataset; it is not reopened inside the same foreground process |
| upstream_dataset_requirement | use upstream datasets for seed, fertilizers, soil amendments, crop protection products, fuels, electricity, irrigation supply, drying fuel, packaging, transport services, and purchased maize grain inputs |
| disclosure | record crop year, geography, field or supplier scope, declared gate, moisture basis, grain grade or intended use, drying and storage inclusion, residue fate, and allocation method for co-products |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_maize_production` | Field Maize Production | required | include for all datasets producing maize grain from planted crop | foreground | kg harvested maize grain at field moisture basis |
| `harvest_and_postharvest_handling` | Harvest and Post-harvest Handling | required | include harvest, shelling or threshing, drying, cleaning, grading, and storage when they occur before the declared gate | foreground | kg saleable maize grain at declared moisture basis |
| `storage_and_delivery` | Storage and Delivery | conditional | include when the declared gate is after storage, elevator handling, packaging, or regional delivery | foreground/downstream | kg delivered maize grain |

### Process: Field Maize Production (`field_maize_production`)

#### Inputs

##### Product flows

###### Maize seed input (`maize_seed_input`)

Maize seed input is recorded as a product input to establish the crop cycle.

- Selected flow: Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass or seed count converted to mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_input_records`
- Range: Provisional maize seed input screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.002
  - Upper: 0.06
  - Unit: kg seed/kg harvested maize grain
  - Basis: broad first-pass seed mass per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen fertilizer carrier (`nitrogen_fertilizer_carrier`)

Nitrogen fertilizer carrier is recorded as measured product mass and nutrient content.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: measured product mass and kg N
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_input_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional nitrogen fertilizer screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg fertilizer product/kg harvested maize grain
  - Basis: broad first-pass nitrogen fertilizer carrier mass per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate fertilizer (`phosphate_fertilizer`)

Phosphate fertilizer is recorded when applied to the maize field.

- Selected flow: Phosphate fertilizer `9c196b01-6aad-4252-a6e8-f853853a830c`
- Flow property / unit: Mass / kg
- Amount rule: measured product mass and nutrient content where available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_input_records`
- Range: Provisional phosphate fertilizer screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg fertilizer product/kg harvested maize grain
  - Basis: broad first-pass phosphate fertilizer mass per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Potassium fertilizer (`potassium_fertilizer`)

Potassium fertilizer is recorded when applied to the maize field.

- Selected flow: Potassium fertilizer `dd008d87-16e4-4e85-a048-b9949f6fbca6`
- Flow property / unit: Mass / kg
- Amount rule: measured product mass and nutrient content where available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_input_records`
- Range: Provisional potassium fertilizer screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg fertilizer product/kg harvested maize grain
  - Basis: broad first-pass potassium fertilizer mass per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied as product input (`irrigation_water_supplied_as_product_input`)

Irrigation water supplied as a product input is recorded when water crosses a managed supply boundary.

- Selected flow: Irrigation water `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- Flow property / unit: Mass / kg
- Amount rule: measured irrigation water mass or volume converted to mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_water_records`
- Range: Provisional irrigation water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/kg harvested maize grain
  - Basis: broad first-pass irrigation water supplied per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field machinery fuel (`field_machinery_fuel`)

Field machinery fuel covers diesel or equivalent fuel used in field operations.

- Selected flow: Diesel, burned in agricultural machinery `57e0b1a3-2d05-46b2-b61b-cf7b5b167c6f`
- Flow property / unit: Mass / kg
- Amount rule: measured field fuel use by operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_fuel_records`
- Range: Provisional field machinery fuel screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: L diesel-equivalent/kg harvested maize grain
  - Basis: broad first-pass field machinery fuel per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop protection product (`crop_protection_product`)

Crop protection products include herbicides, insecticides, fungicides, seed-applied products used in field establishment, and comparable products.

- Selected flow: Herbicide `c1370404-9e2b-4ed6-ba96-c094f74e0f2d`
- Flow property / unit: Mass / kg
- Amount rule: measured active ingredient or formulated product mass by application
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per active ingredient or formulated product and per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`
- Range: Provisional crop protection product screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.04
  - Unit: kg active substance or product/kg harvested maize grain
  - Basis: broad first-pass crop protection active substance or formulated product per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required for field maize production. Include manure, compost, digestate, or recovered irrigation water as waste-derived inputs only when they cross the foreground boundary and the study scope treats them as waste flows.

##### Elementary flows

###### Land occupation (`land_occupation`)

Land occupation is recorded for the cultivated maize area and crop duration.

- Selected flow: Select applicable elementary flow for land occupation
- Flow property / unit: Area-time / ha a
- Amount rule: measured field area and crop duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_use_records`

###### Water withdrawal (`water_withdrawal`)

Water withdrawal is calculated from irrigation water records when irrigation is included.

- Selected flow: water `419682fe-60fb-4b43-be89-bf2824b51104`
- Flow property / unit: Mass / kg
- Amount rule: calculated from irrigation water source, volume, and conversion basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_water_records`
- Range: Provisional water withdrawal screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/kg harvested maize grain
  - Basis: broad first-pass water withdrawal per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvested maize grain (`harvested_maize_grain`)

Harvested maize grain is the field process output before post-harvest drying and cleaning adjustments.

- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass at recorded moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: field subprocess quantitative reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvested_grain_records`
- Range: Harvested grain output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg field process reference output
  - Basis: field subprocess quantitative reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Maize stover, cobs, husks, or field residue (`maize_stover_cobs_husks_or_field_residue`)

Maize residues are product outputs only when removed from the field and credited or sold.

- Selected flow: Maize stover, cobs, husks, or field residue
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass when it crosses the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvested maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_management_records`
- Range: Provisional maize residue removal screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg residue/kg harvested maize grain
  - Basis: broad first-pass stover, cobs, husks, or field residue removed per kg harvested grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Declare field waste, removed plastics, empty agrochemical containers, or rejected residues separately when they leave the field boundary as waste.

##### Elementary flows

###### Direct soil N2O emission to air (`direct_soil_n2o_emission_to_air`)

Direct soil N2O emission is calculated from nitrogen inputs and soil emission method.

- Selected flow: nitrous oxide, emissions to air unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from N inputs using declared IPCC tier or reviewed regional method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per N input
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional direct soil N2O screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg N2O/kg harvested maize grain
  - Basis: broad first-pass direct soil N2O per kg harvested grain after applying nitrogen emission methods
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate leaching to water (`nitrate_leaching_to_water`)

Nitrate leaching is calculated when the declared nitrogen method or study scope includes leaching and runoff.

- Selected flow: nitrate, emissions to fresh water `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-specific or regional emission method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per N input
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional nitrate leaching screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg nitrate/kg harvested maize grain
  - Basis: broad first-pass nitrate leaching per kg harvested grain after applying nitrogen leaching methods
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fossil carbon dioxide from field energy (`fossil_carbon_dioxide_from_field_energy`)

Fossil carbon dioxide from field energy is calculated from field fuel records and the declared emission factor.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated from field fuel records and emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per fuel inventory
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_fuel_records`
- Range: Provisional field energy fossil CO2 screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CO2/kg harvested maize grain
  - Basis: broad first-pass fossil carbon dioxide from field fuel and energy per kg harvested grain
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and Post-harvest Handling (`harvest_and_postharvest_handling`)

#### Inputs

##### Product flows

###### Harvested maize grain input (`harvested_maize_grain_input`)

Harvested maize grain input is transferred from field production into drying, shelling, cleaning, grading, or storage.

- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass adjusted to the declared moisture basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvested_grain_records`
- Sources: `fao-maize-postharvest-operations`, `fao-grain-drying-storage`
- Range: Post-harvest input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.4
  - Unit: kg harvested maize grain/kg saleable maize grain
  - Basis: harvested grain input required per kg saleable grain after moisture adjustment, cleaning, and loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying and handling energy (`drying_and_handling_energy`)

Drying and handling energy includes electricity, thermal fuel, fans, conveyors, shelling or threshing, cleaning, grading, and elevator equipment.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ or kWh
- Amount rule: measured electricity, fuel, or equipment-hour calculation by process line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_energy_records`
- Sources: `fao-grain-drying-storage`
- Range: Provisional drying and handling energy screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg saleable maize grain
  - Basis: broad first-pass drying, shelling, cleaning, grading, and handling energy per kg saleable grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage pest-control or fumigation product (`storage_pest_control_or_fumigation_product`)

Storage pest-control or fumigation product is recorded only when applied inside the declared boundary.

- Selected flow: Insecticide `ba2ec0c8-d5da-4ca8-bf9f-317478a1ce1b`
- Flow property / unit: Mass / kg
- Amount rule: measured active ingredient or formulated product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treated grain mass or storage period
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_treatment_records`
- Range: Provisional storage treatment product screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg active substance or product/kg treated maize grain
  - Basis: broad first-pass storage pest-control or fumigation product per kg treated grain
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required for harvest and post-harvest handling.

##### Elementary flows

Include direct dust emissions, combustion emissions, and water use when plant records show direct emissions or direct resource use.

#### Outputs

##### Product flows

###### Saleable maize grain (`saleable_maize_grain`)

Saleable maize grain is the cleaned, dried, graded, and accepted output at the declared moisture basis.

- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Amount rule: measured saleable grain mass at declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: PCR reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_saleable_grain_records`
- Sources: `codex-cxs-153-1985`
- Range: Reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg PCR reference output
  - Basis: declared reference product output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Screenings, broken grain, dust, and spoiled grain (`screenings_broken_grain_dust_and_spoiled_grain`)

Screenings, broken grain, dust, and spoiled grain are recorded by fate.

- Selected flow: Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable maize grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_and_loss_records`
- Sources: `fao-maize-postharvest-operations`
- Range: Provisional post-harvest reject and loss screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg reject or loss/kg saleable maize grain
  - Basis: broad first-pass screenings, broken grain, dust, and spoiled grain per kg saleable grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from post-harvest energy (`fossil_carbon_dioxide_from_postharvest_energy`)

Fossil carbon dioxide from post-harvest energy is calculated from drying, handling, and storage energy records.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated from post-harvest energy records and declared emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per fuel inventory
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_energy_records`
- Range: Provisional post-harvest energy fossil CO2 screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg CO2/kg saleable maize grain
  - Basis: broad first-pass fossil carbon dioxide from drying, handling, and storage energy per kg saleable grain
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Storage and Delivery (`storage_and_delivery`)

#### Inputs

##### Product flows

###### Storage electricity (`storage_electricity`)

Storage electricity is recorded when the declared gate includes storage after drying and cleaning.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ or kWh
- Amount rule: measured storage electricity use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_energy_records`
- Range: Provisional storage electricity screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg stored maize grain
  - Basis: broad first-pass storage electricity per kg stored grain over the declared storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivery transport fuel (`delivery_transport_fuel`)

Delivery transport fuel is recorded when the declared gate is a delivered grain point.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: measured delivery fuel or route fuel estimate
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per tonne-km or delivered grain mass
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_transport_records`
- Range: Provisional delivery transport fuel screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: L diesel-equivalent/kg delivered maize grain
  - Basis: broad first-pass delivery transport fuel per kg delivered grain for route screening
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required.

##### Elementary flows

Include direct storage emissions only when measured or required by the study goal.

#### Outputs

##### Product flows

###### Declared delivered maize grain (`declared_delivered_maize_grain`)

Declared delivered maize grain is the output when the reference flow is delivered grain.

- Selected flow: Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered grain mass at declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: if reference flow is delivered grain
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivered_grain_records`

##### Waste flows

###### Storage loss or damaged grain (`storage_loss_or_damaged_grain`)

Storage loss or damaged grain is recorded when grain is lost, spoiled, rejected, or disposed during storage.

- Selected flow: Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- Flow property / unit: Mass / kg
- Amount rule: measured storage loss or damaged grain mass and declared fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg stored maize grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loss_records`
- Range: Provisional storage loss screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg stored maize grain
  - Basis: broad first-pass storage loss or damaged grain per kg stored grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from storage or transport energy (`fossil_carbon_dioxide_from_storage_or_transport_energy`)

Fossil carbon dioxide from storage or transport energy is calculated from storage energy and delivery transport records.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated from storage energy and delivery transport records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per process inventory
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery_transport_records`
- Range: Provisional storage and transport fossil CO2 screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CO2/kg delivered maize grain
  - Basis: broad first-pass fossil carbon dioxide from storage and delivery energy per kg delivered grain
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

Apply allocation decisions in this order:

1. Avoid allocation by subdividing field production, post-harvest handling, residue management, and storage or delivery processes where records allow.
2. Treat maize stover, cobs, husks, screenings, broken grain, spoiled grain, and dust as wastes when they are discarded or treated without product credit.
3. Use physical mass allocation for maize grain and removed residues only when both are co-products and no more causal subdivision is available.
4. Use economic allocation only when maize grain, stover, cobs, screenings, or other outputs are marketable co-products and price evidence is available.
5. Disclose any substitution or avoided-burden treatment separately with evidence for the displaced product and market.

Residue fate must be declared as field return, removal for feed, bedding, fuel, soil amendment, open burning, waste treatment, or another evidenced route.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_seed_input_records | field_maize_production | maize seed input | planting record | seed product; variety or hybrid; seed count or mass; field id; planting date | invoice, seed tag, planter monitor, or farm log | kg or seed count converted to kg | per planting event | crop cycle | maize field | sum seed input and normalize to harvested grain output | invoice, seed tag, farm log, or planter monitor |
| cp_fertilizer_input_records | field_maize_production | fertilizer inputs | fertilizer application record | product; nutrient content; product mass; application date; field id | invoice, applicator record, or farm operation log | kg product and kg nutrient | per application | crop cycle | maize field | sum product and nutrient mass and normalize to harvested grain output | invoice, applicator record, or farm log |
| cp_irrigation_water_records | field_maize_production | irrigation water | irrigation record | water source; volume or mass; pumping period; field id | meter reading, pumping log, or water invoice | kg or m3 converted to kg | per irrigation event | crop cycle | irrigated maize field | sum irrigation water and convert to mass where needed | meter record, pumping log, or water invoice |
| cp_field_fuel_records | field_maize_production | field machinery fuel | field operation fuel record | operation; machine; fuel type; fuel quantity; field id | fuel log, invoice, or machine telematics | kg or L converted to kg | per field operation | crop cycle | maize field | sum fuel by operation and normalize to harvested grain output | fuel log, invoice, or telematics record |
| cp_crop_protection_records | field_maize_production | crop protection product | crop protection application record | product; active ingredient; formulated product mass; application date; field id | spray log, applicator record, or product invoice | kg active ingredient or kg product | per application | crop cycle | maize field | sum active ingredient or product mass and normalize to harvested grain output | spray log, product label, applicator record |
| cp_land_use_records | field_maize_production | land occupation | field area record | field id; planted area; crop duration | farm field record or GIS area record | ha and crop duration | per crop cycle | crop cycle | maize field | multiply area by crop duration where area-time is required | field map, GIS record, or farm record |
| cp_harvested_grain_records | field_maize_production | harvested maize grain | harvest and receiving record | field id; harvest date; harvested mass; moisture content; grain destination | combine monitor, weighbridge, calibrated scale, or elevator ticket | kg at recorded moisture basis | per harvest event | crop cycle | maize field and receiving point | sum harvested mass and convert to declared moisture basis | scale ticket, elevator ticket, or harvest log |
| cp_residue_management_records | field_maize_production | maize stover, cobs, husks, or field residue | residue handling record | field id; residue stream; mass or area; fate | baling ticket, scale record, field log, or residue management plan | kg, bale count converted to kg, or ha | per residue handling event | crop cycle | maize field | sum residue mass crossing the boundary and declare fate | scale record, baling ticket, or field log |
| cp_postharvest_energy_records | harvest_and_postharvest_handling | drying and handling energy | facility energy record | meter id; fuel type; energy quantity; process line; grain mass and moisture change | meter reading, utility bill, fuel invoice, dryer log, or equipment log | kWh, MJ, kg fuel, or L fuel | per drying batch, storage campaign, or reporting period | post-harvest campaign | dryer, cleaner, storage, or elevator facility | allocate energy to maize grain and normalize to saleable grain output | meter record, fuel invoice, dryer log, or utility bill |
| cp_storage_treatment_records | harvest_and_postharvest_handling | storage pest-control or fumigation product | treatment record | product; active ingredient; dose; treated mass; storage bin; date | treatment log or contractor certificate | kg active ingredient or kg product | per treatment | storage period | storage bin or facility | sum treatment mass and normalize by treated grain mass or storage duration | treatment log, product label, or contractor certificate |
| cp_saleable_grain_records | harvest_and_postharvest_handling | saleable maize grain | saleable output record | lot id; accepted mass; moisture basis; grade; destination | calibrated scale, elevator ticket, or dispatch record | kg | per lot or shipment | post-harvest campaign | declared gate | sum accepted saleable grain at declared moisture basis | scale calibration, grade record, and dispatch ticket |
| cp_reject_and_loss_records | harvest_and_postharvest_handling | screenings, broken grain, dust, and spoiled grain | reject or loss record | batch id; reject stream; mass; fate | scale record, bin reconciliation, or waste contractor record | kg | per batch or reporting period | post-harvest campaign | dryer, cleaner, or storage facility | sum reject and loss streams by fate | scale ticket, inventory reconciliation, or waste record |
| cp_storage_energy_records | storage_and_delivery | storage electricity | storage energy record | meter id; energy quantity; storage period; stored mass | meter reading or utility bill | kWh or MJ | per storage period | declared storage duration | storage site | allocate storage energy by stored mass and duration | meter record or utility bill |
| cp_delivery_transport_records | storage_and_delivery | delivery transport fuel | transport service record | route; distance; vehicle; fuel quantity or tonne-km; delivered mass | fuel log, carrier invoice, dispatch record, or route model | kg fuel or tonne-km | per shipment | delivery period | declared delivery route | sum route-specific transport service and normalize to delivered grain | carrier invoice, dispatch record, or fuel log |
| cp_delivered_grain_records | storage_and_delivery | declared delivered maize grain | delivery or dispatch record | lot id; delivered mass; delivery date; receiver or gate; moisture basis | weighbridge, calibrated scale, or dispatch record | kg | per shipment | delivery period | declared delivery route | sum delivered grain mass at declared moisture basis | dispatch record, scale ticket, or delivery note |
| cp_storage_loss_records | storage_and_delivery | storage loss or damaged grain | storage loss record | lot id; loss mass; damage category; fate | inventory reconciliation, scale record, or disposal record | kg | per storage period or lot | declared storage duration | storage site | sum storage loss and declare fate | inventory reconciliation, scale record, or disposal record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_harvested_grain | harvested grain mass | convert harvested mass from recorded moisture to declared moisture basis, then normalize to reference output | cp_harvested_grain_records; cp_saleable_grain_records | kg harvested maize grain per reference output | `fao-maize-postharvest-operations` |
| calculate_water_withdrawal | irrigation water withdrawal | convert metered irrigation volume to mass and normalize to harvested grain output | cp_irrigation_water_records; cp_harvested_grain_records | kg water withdrawal per reference output |  |
| calculate_soil_n2o | managed soil N2O | apply declared IPCC tier or reviewed regional method using synthetic N, organic N, residue N, mineralized N, and leaching or volatilization parameters where required | cp_fertilizer_input_records; cp_residue_management_records | kg N2O per reference output | `ipcc-2019-managed-soils-n2o` |
| calculate_field_energy_co2 | field energy fossil CO2 | fuel quantity multiplied by declared fuel emission factor, normalized to harvested grain output | cp_field_fuel_records; cp_harvested_grain_records | kg fossil CO2 from field energy per reference output |  |
| calculate_postharvest_energy_co2 | post-harvest energy fossil CO2 | drying, handling, and storage energy multiplied by declared emission factors, normalized to saleable grain output | cp_postharvest_energy_records; cp_saleable_grain_records | kg fossil CO2 from post-harvest energy per reference output |  |
| reconcile_grain_mass_balance | grain, residue, and loss mass balance | reconcile harvested grain input with saleable grain, moisture change, screenings, dust, broken grain, spoiled grain, and storage loss | cp_harvested_grain_records; cp_saleable_grain_records; cp_reject_and_loss_records; cp_storage_loss_records | mass-balance reconciliation and loss rate | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_grain_identity | reference product and saleable output | CPC 01122 scope, non-seed status, crop year, geography, declared gate, grain class or intended use, moisture basis, and grade or quality specification must be declared. | elevator ticket, grade certificate, sale contract, or dispatch record |
| dq_mass_records | mass records | Mass values must identify record date, site or batch, unit, moisture basis where relevant, and measurement device or source record. | calibration record, weighbridge ticket, scale log, combine monitor, or supplier primary activity record |
| dq_moisture_conversion | moisture adjustment | Moisture adjustments must state measured moisture, target moisture basis, and formula or tool used for conversion. | moisture meter record, dryer log, grade record, or calculation sheet |
| dq_temporal_coverage | crop-cycle data | Field production data should cover the declared maize crop cycle; weather-sensitive comparative work should disclose whether one-year or multi-year average data are used. | crop-year production records |
| dq_nitrogen_method | nitrogen emissions | Nitrogen input, residue N assumptions, volatilization, leaching, and selected IPCC tier or regional method must be documented before N2O or nitrate values are final. | fertilizer logs, residue records, soil method calculation, IPCC or regional method sheet |
| dq_loss_and_residue_fate | residues and losses | Stover, cobs, husks, screenings, dust, broken grain, spoiled grain, and storage losses must have declared fate before allocation or waste treatment is finalized. | residue management record, scale ticket, waste record, sale record, or storage reconciliation |

## 9. Validation Rules

Before publishing a foreground data package using this PCR, check:

- reference flow uses kg non-seed maize grain at a declared moisture basis
- dataset metadata distinguishes CPC 01122 maize grain from maize seed, forage maize, sweet corn, and processed maize products
- crop year, geography, declared gate, grade or intended use, storage inclusion, and delivery inclusion are declared
- field production and post-harvest handling are separated when records allow
- fertilizer, fuel, irrigation, crop protection, drying energy, storage energy, transport, and packaging inputs are addressed when in scope
- N2O, nitrate, fossil CO2, water withdrawal, land occupation, and residue fate are considered when in scope
- harvested grain, saleable grain, moisture change, rejected material, and storage loss are reconciled by mass balance
- allocation method is declared when stover, cobs, screenings, or other co-products receive product credit
- values outside source-backed or internally reviewed ranges include a method note and evidence rationale

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream feed, food, grain handling, milling, ethanol, starch, oil, or industrial maize data construction where non-seed maize grain, moisture basis, geography, crop year, and declared gate match the dataset metadata |
| excluded_use | maize seed for sowing, maize forage or silage, sweet corn, processed maize flour, grits, meal, starch, oil, ethanol, flakes, and studies requiring omitted downstream manufacturing or animal feeding burdens |
| required_metadata | reference flow; CPC 01122 scope; geography; crop year; moisture basis; grade or intended use; declared gate; drying and storage inclusion; residue fate; allocation method; collection protocol coverage; DQR |
| required_quality_disclosure | record coverage, calculation rules, measurement devices or primary records, moisture conversion, unresolved omissions, and data quality scores |
| update_trigger | revise when CPC mapping changes, Tiangong maize grain, maize seed, residue, fertilizer, water, energy, or waste identities are updated, Codex, FAO, IPCC, or equivalent agricultural guidance changes, or reviewed foreground datasets provide better source-backed ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-153-1985` | standard | <https://www.fao.org/fao-who-codexalimentarius/sh-proxy/jp/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B153-1985%252FCXS_153e.pdf> | maize grain scope, quality, packaging, hygiene, and product specification context |
| `fao-maize-postharvest-operations` | official_guidance | <https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_MAIZE.pdf> | maize harvest, shelling, drying, storage, pest control, and post-harvest loss context |
| `fao-grain-drying-storage` | official_guidance | <https://www.fao.org/4/i2433e/i2433e10.pdf> | grain drying, handling, storage, moisture, and equipment context |
| `ipcc-2019-managed-soils-n2o` | official_guidance | <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | managed soil N2O and nitrogen emission calculation context |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for process reference outputs, grain drying, moisture adjustment, losses, and batch reconciliation. | QA guardrails for reference outputs and mass-balance checks |
