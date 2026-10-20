---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cauliflowers-and-broccoli
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cauliflowers and broccoli

## 1. Scope and Applicability

This PCR guides foreground data package construction for fresh, unprocessed cauliflowers and broccoli produced in a declared annual crop cycle. The default boundary starts when seed or transplant material is ready to establish the crop and ends when marketable heads or florets leave the farm at the declared farm-gate hand-off. It covers soil preparation, crop establishment, field management, irrigation, fertilization, crop protection, harvest, trimming, field or on-farm sorting, and primary washing, cooling, or packaging when these activities occur before the hand-off.

The category is shared by cauliflower and broccoli because both are annual brassica crops harvested as immature flowering structures and require the same core foreground accounting pattern. The data package must identify which product is represented and must not combine the two products unless yields, inputs, quality criteria, and allocation are recorded separately before aggregation. Seed multiplication, nursery production before purchased planting material, protected cultivation with material climate-control infrastructure, distribution, retail, cooking, freezing, drying, pickling, fermentation, and other processing are outside the default boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cauliflowers-and-broccoli |
| classification_refs | CPC 3.0: 01213 Cauliflowers and broccoli; mapping relation: exact |
| covered_products | Fresh marketable cauliflower heads, broccoli heads, or broccoli florets delivered at the declared farm-gate hand-off |
| excluded_products | Seed and transplants sold as planting material; other cabbages; processed, frozen, dried, pickled, fermented, cooked, or retail-prepared cauliflower or broccoli |
| representative_product | Fresh saleable cauliflower or broccoli at farm gate |
| production_route | Annual soil-based crop establishment, managed field production, harvest, trimming and sorting, with optional on-farm washing, cooling, or primary packaging |
| market_state | Fresh and unprocessed product in the declared cultivar, maturity, grade, trimming, washing, cooling, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh marketable cauliflower or broccoli at the declared farm-gate hand-off |
| How much | 1,000 kg |
| How well | Product is fresh, unprocessed, and saleable under the declared crop identity, maturity, head or floret grade, trimming, defect tolerance, and moisture state |
| How long or cycle | One declared annual crop cycle and harvest year, normalized after reconciling field output, rejects, and trimming |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Fresh cauliflower or broccoli, farm-gate output |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product identity (cauliflower or broccoli); cultivar or variety; production geography; crop year and cycle dates; cultivation system; irrigated or rain-fed status; harvest maturity; grade and size; trimming state; washing and cooling; packaging state; farm-gate hand-off |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | marketable heads or florets and all product, reject, and trim mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh product on the declared farm-gate state. Keep harvested mass, marketable output, rejects, trims, and field losses separate before normalization. |
| `crop_identity_separation` | cauliflower and broccoli records | Product identity | declared product | Record cauliflower and broccoli as separate crop identities. Aggregate them only after each product has a reconciled field-year inventory and an explicit aggregation rule. |
| `nutrient_product_basis` | fertilizer and amendment inputs | Mass | kg product and kg nutrient | Give every actual fertilizer or amendment product its own card, retaining physical product mass, formulation, nutrient composition and application records. Nutrient quantities are not additional inputs of the same product; collection or group identifiers cannot substitute for a concrete flow identity. |
| `water_delivery_basis` | irrigation and water withdrawal | Volume | m3 | Record source-specific withdrawal and delivered irrigation separately from rainfall, and disclose the irrigation technology and metering basis. |
| `land_occupation_basis` | occupied crop area | Area-time | m2*a | Record field area and the occupied crop period before normalizing occupation to the crop cycle and reference output. |
| `moisture_and_trim_basis` | harvest, cooling, washing, and packing | Mass and moisture | kg and percent | Retain as-is mass and any measured moisture or water gain/loss. Do not use washing or cooling mass change as product yield without a documented reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Seed or transplant material ready for establishment in the declared production field, with prior land use and any nursery stage disclosed |
| starting_condition_role | Beginning of the annual cauliflower or broccoli crop cycle |
| product_classification_scope | Fresh cauliflower and broccoli products classified under CPC 3.0 01213 through farm-gate hand-off |
| recursive_input_rule | A product-category material used as planting or market input is recorded at its actual hand-off state and linked to its upstream dataset; the upstream crop boundary is not recreated inside this record. |
| upstream_dataset_requirement | Use representative upstream datasets for seed or transplants, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, and waste treatment or transport services when they cross the boundary. |
| disclosure | Declare product identity, field and production geography, crop year, cultivar, crop duration, planting material, irrigation source and method, nutrient basis, crop-protection program, harvest and grading method, washing or cooling, packaging, yield, residue and reject fates, and farm-gate state. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_crop` | field preparation and crop production | Include inputs and emissions attributable to the declared annual crop cycle from planting-material hand-off through harvest; disclose prior land use and exclude unrelated historical field burdens. | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_farm_gate` | harvest and primary handling | End the default boundary at transfer of fresh marketable cauliflower or broccoli at the declared farm gate. Include on-farm trimming, sorting, washing, cooling, and packaging only when they occur before transfer. | `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard` |
| `boundary_input_completeness` | all foreground production | Address planting material, nutrients, crop protection, irrigation, land occupation, field energy, harvest energy, primary handling utilities, packaging, and direct field emissions with a value, justified zero, or documented exclusion. | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_residue_fate` | field residues, rejects, and trims | Identify whether each residue stream is returned to soil, left in field, fed, composted, treated, transported, sold, or discarded. Do not treat an unqualified residue as a co-product. | `iso-14044-2006`; `fao-fruit-vegetable-preparation-2004` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment_and_field_management` | Crop establishment and field management | required | every represented field and crop year | foreground managed biological production | field area, crop cycle, and marketable crop output |
| `harvest_and_farm_gate_preparation` | Harvest and farm-gate preparation | required | every represented harvest lot | foreground harvesting, trimming, sorting, and hand-off | 1,000 kg marketable fresh product |
| `on_farm_cooling_and_packaging` | On-farm cooling and primary packaging | conditional | when cooling, washing, or packaging occurs before farm-gate transfer | foreground primary conditioning | packed or cooled output at the declared hand-off |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

### Process: Crop establishment and field management (`crop_establishment_and_field_management`)

#### Inputs

##### Product flows

###### Urea fertilizer (`crop_establishment_and_field_management_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for crop_establishment_and_field_management_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_fertilizer_and_amendment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fruit-vegetable-preparation-2004`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`crop_establishment_and_field_management_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_fertilizer_and_amendment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fruit-vegetable-preparation-2004`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`crop_establishment_and_field_management_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_fertilizer_and_amendment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fruit-vegetable-preparation-2004`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`crop_establishment_and_field_management_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_fertilizer_and_amendment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fruit-vegetable-preparation-2004`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`crop_establishment_and_field_management_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_fertilizer_and_amendment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fruit-vegetable-preparation-2004`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`crop_establishment_and_field_management_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_fertilizer_and_amendment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`; `fao-fruit-vegetable-preparation-2004`; `fao-organic-nutrients`

###### Irrigation water (`irrigation_water_input`)

Record source-specific water delivered to the crop and distinguish it from rainfall and source withdrawal.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Amount rule: Sum metered or otherwise documented deliveries by field and crop cycle; record pumping energy separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_water_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Irrigation water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: m3/ha
  - Basis: represented crop field and crop cycle
  - Basis kind: crop_cycle
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel (`field_energy_input_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `field_energy_input_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_field_energy_records` for `crop_establishment_and_field_management`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_energy_records`
- Sources: `route-energy-fao`

##### Waste flows

##### Elementary flows

###### Occupied agricultural land (`land_occupation_input`)

Record the area and occupation period of the field used for the declared crop cycle.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Field area multiplied by the declared crop occupation period, including fallow or inter-crop periods only when within the stated land-use representation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_and_output_records`
- Sources: `fao-fruit-vegetable-preparation-2004`
- Range: Occupied-area screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 100000
  - Unit: m2*a/1,000 kg product
  - Basis: reference output
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_n2o_emission`)

Calculate direct soil N2O from accounted nitrogen inputs using the selected IPCC method tier and disclose the factor and conversion.

- Selected flow: Nitrous oxide to air from managed agricultural soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate kg N2O-N with the selected method, then multiply by 44/28 for the final kg N2O exchange; do not repeat conversion for factors already expressed as N2O mass. Retain nitrogen activity, factors and accepted output for the same period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Provisional author screening estimate; endpoints are not IPCC limits
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg N2O-N/1,000 kg product
  - Basis: accounted field nitrogen and reference output
  - Basis kind: n_input
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


The screening range remains on the kg N2O-N basis; apply the same 44/28 conversion when checking the final N2O exchange. It is a provisional reasoned estimate, not an IPCC default emission factor.

###### Ammonia emission (`field_nitrogen_emissions`)

Report ammonia emitted to air when the selected method or foreground package includes it; retain pollutant species and receiving medium. Any nitrogen-oxide species is a separate foreground requirement and is not represented by this ammonia binding.

- Selected flow: Ammonia to air from managed agricultural soil
- Flow property / unit: Mass / kg substance
- Amount rule: Calculate ammonia from documented nitrogen inputs, application method, and selected emission factor; keep every other nitrogen-oxide species separate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_and_amendment_records`
- Sources: `ipcc-2019-managed-soils-n2o`
- Range: Nitrogen-air emission screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg substance/1,000 kg product
  - Basis: accounted field nitrogen and reference output
  - Basis kind: n_input
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Harvested cauliflower or broccoli before grading (`harvested_crop_output`)

This internal output is the weighed crop leaving the field before trimming, grading, and farm-gate rejection decisions.

- Selected flow: Harvested cauliflower or broccoli, field output
- Flow property / unit: Mass / kg
- Amount rule: Sum calibrated scale or harvest-ticket mass by field, harvest date, product identity, and lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest campaign and per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_and_output_records`
- Sources: `fao-fruit-vegetable-preparation-2004`
- Range: Harvest-to-marketable-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 3000
  - Unit: kg harvested crop/1,000 kg marketable product
  - Basis: reconciled field output
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residue and unmarketable crop material (`field_residue_output`)

Record leaves, stalks, immature heads, and other crop material remaining in the field or removed during harvest, with the destination specified.

- Selected flow: Cauliflower or broccoli field residue and unmarketable crop material
- Flow property / unit: Mass / kg wet matter
- Amount rule: Measure or calculate residue from field and harvest records; report field return, removal, feed, compost, treatment, and disposal separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_fate_records`
- Sources: `fao-fruit-vegetable-preparation-2004`
- Range: Residue and unmarketable material screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2500
  - Unit: kg wet matter/1,000 kg marketable product
  - Basis: reconciled field and harvest output
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Trim and grading rejects (`trim_and_reject_output`)

Record product rejected or trimmed during sorting and preparation separately from field residue and identify its destination.

- Selected flow: Cauliflower or broccoli trim and grading rejects
- Flow property / unit: Mass / kg wet matter
- Amount rule: Reconcile rejected and trimmed lots against incoming harvested mass and marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_reject_fate_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Trim and grading-reject screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet matter/1,000 kg marketable product
  - Basis: harvested crop input to grading
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Product flows

###### Marketable fresh product hand-off (`marketable_farm_gate_output`)

This output is the declared reference product after all in-scope harvest, trimming, grading, washing, cooling, and primary packaging operations.

- Selected flow: Fresh marketable cauliflower or broccoli at farm gate `58bab506-1b56-4206-97c8-d0d0f6391442`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Use calibrated farm-gate or dispatch scale mass after quality and grade acceptance.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: 1,000 kg reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_farm_gate_output_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Marketable-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1100
  - Unit: kg/1,000 kg reference product
  - Basis: accepted farm-gate product
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Harvest and farm-gate preparation (`harvest_and_farm_gate_preparation`)

#### Inputs

##### Product flows

###### Harvested crop received for preparation (`harvested_crop_input`)

Harvested cauliflower or broccoli enters preparation from the corresponding field-year and lot records.

- Selected flow: Harvested cauliflower or broccoli, field output
- Flow property / unit: Mass / kg
- Amount rule: Equal the corresponding weighed field output for the same product, lot, and harvest period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_and_output_records`
- Sources: `fao-fruit-vegetable-preparation-2004`
- Range: Harvest-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 3000
  - Unit: kg/1,000 kg marketable product
  - Basis: harvested crop input
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity at the equipment supply point (`harvest_energy_input_electricity`)

**Collection scope and applicability for harvest_energy_input.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record fuel or electricity used by harvest machinery, contracted harvest operations, conveyors, and field-to-farm-gate handling.
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_harvest_and_handling_energy_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_handling_energy_records`
- Sources: `fao-fruit-vegetable-preparation-2004`; `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`harvest_energy_input_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_harvest_and_handling_energy_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_handling_energy_records`
- Sources: `fao-fruit-vegetable-preparation-2004`; `fao-agricultural-energy`



##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable product sent to optional primary conditioning (`conditioning_input_output`)

When optional washing, cooling, or packaging is in scope, the graded marketable product is handed to that process without changing its product identity.

- Selected flow: Graded fresh cauliflower or broccoli
- Flow property / unit: Mass / kg
- Amount rule: Equal the accepted graded mass entering the optional conditioning process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_farm_gate_output_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Graded-product screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1100
  - Unit: kg/1,000 kg marketable product
  - Basis: accepted graded product
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest and preparation losses (`harvest_preparation_loss`)

Record losses that leave the harvest and preparation boundary, including damaged heads, dropped product, and unexplained mass only after investigation and declared fate.

- Selected flow: Harvest and preparation loss with declared fate
- Flow property / unit: Mass / kg wet matter
- Amount rule: Calculate as the reconciled difference between harvest input, marketable output, recorded trims, and recorded rejects.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_reject_fate_records`
- Sources: `mass-balance-identity`
- Range: Preparation-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg/1,000 kg marketable product
  - Basis: harvested crop input
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-farm cooling and primary packaging (`on_farm_cooling_and_packaging`)

#### Inputs

##### Product flows

###### Graded product for washing or cooling (`graded_product_for_conditioning`)

Include this input only when washing, hydrocooling, forced-air cooling, or another primary conditioning operation occurs before the farm-gate hand-off.

- Selected flow: Graded fresh cauliflower or broccoli for primary conditioning
- Flow property / unit: Mass / kg
- Amount rule: Weigh the accepted graded product entering the conditioning line and preserve lot identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Conditioning-input screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1100
  - Unit: kg/1,000 kg marketable product
  - Basis: accepted graded product entering conditioning
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water (`conditioning_water_input`)

Record water used for washing, hydrocooling, or sanitation when it crosses the primary-conditioning boundary.

- Selected flow: Process water for washing or cooling
- Flow property / unit: Volume / m3
- Amount rule: Use meter, batch, or tank records and distinguish make-up water, recirculated water, and wastewater discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `fao-fruit-vegetable-preparation-2004`
- Range: Conditioning-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/1,000 kg marketable product
  - Basis: washing and cooling line throughput
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity_input`)

Record electricity for pumps, refrigeration, forced-air cooling, lighting, and conveyors used before the declared farm-gate hand-off.

- Selected flow: Purchased electricity for primary conditioning
- Flow property / unit: Energy / kWh
- Amount rule: Meter or equipment record allocated to product throughput and conditioning duration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate product.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_and_packaging_records`
- Sources: `fao-fruit-vegetable-preparation-2004`
- Range: Conditioning-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh/1,000 kg marketable product
  - Basis: conditioning-line throughput
  - Basis kind: process_output
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

##### Product flows

###### Cooled or packed farm-gate product (`cooled_or_packed_farm_gate_output`)

This conditional output is the same reference product after any in-scope washing, cooling, and primary packaging, with the final state declared.

- Selected flow: Fresh cauliflower or broccoli after on-farm primary conditioning
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Use the final accepted dispatch or farm-gate scale mass after conditioning and packaging.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: 1,000 kg reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_farm_gate_output_records`
- Sources: `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- Range: Conditioned-output screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1100
  - Unit: kg/1,000 kg reference product
  - Basis: accepted conditioned farm-gate product
  - Basis kind: reference_flow
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Fresh cauliflower or broccoli, farm-gate output
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
- Selected flow: Fresh cauliflower or broccoli, farm-gate output
- Flow property / unit: Mass / kg
- Amount rule: 1000 kg
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
| `allocation_subdivision_priority` | shared field and handling operations | First subdivide field operations, harvest lots, product identities, conditioning runs, and packaging records wherever separate measurements exist. | `iso-14044-2006` |
| `allocation_cauliflower_broccoli_aggregation` | cauliflower and broccoli produced by one farm or shared operation | Keep cauliflower and broccoli separate through inventory reconciliation. Aggregate only by declared mass or another justified allocation basis after product-specific records are complete. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_rejects_and_residues` | rejects, trims, and field residues | Treat rejects and residues as waste unless a documented buyer, quantity, specification, and destination establish a co-product. If allocation remains necessary, document the physical or economic basis and sensitivity. | `iso-14044-2006` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_crop_protection_records` | Operation crop_establishment_and_field_management: Record each herbicide, insecticide, fungicide, biological control, or adjuvant product by formulation and active ingredient where available. Original quantity method: Reconcile purchase, application, stock, and field records; retain active-ingredient concentration separately. |
| `field_energy_input_specific_input` | `cp_field_energy_records` | Operation crop_establishment_and_field_management: Record mobile-machinery fuel used for soil preparation, planting, fertigation, spraying, irrigation pumping, and field maintenance. Material field electricity is recorded as a separate carrier in the foreground package. Original quantity method: Use machine, contractor, fuel, meter, or invoice records and allocate shared operations by field area or harvested mass. |
| `primary_packaging_input_specific_input` | `cp_conditioning_and_packaging_records` | Operation on_farm_cooling_and_packaging: Record packaging material that crosses the boundary before farm-gate transfer, including crates, film, cartons, labels, and reusable-container service. Original quantity method: Reconcile purchased, returned, reused, and discarded packaging by material and number of packed units. |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `crop_establishment_and_field_management` | planting material | purchase, nursery, and planting record | field_id; product; cultivar; seed_or_transplant_form; lot; viable_units; mass; date; failures; replacements | reconcile invoices, labels, planting logs, and field acceptance; Raw aggregation and attribution: sum by product and field and preserve failed or replaced units | plant; g; kg | per planting event | complete crop establishment | every represented field | per declared reference flow | labels, invoices, planting logs, lot records |
| `cp_fertilizer_and_amendment_records` | `crop_establishment_and_field_management` | nutrients and soil amendments | invoice, label, application, and laboratory record | field_id; date; product; product_mass; N; P2O5; K2O; dry_matter; application_method; incorporation; source | reconcile purchases, applications, nutrient analyses, and stock movements; Raw aggregation and attribution: sum by nutrient and product after field-year reconciliation | kg product; kg nutrient; percent | per application | complete crop cycle | every represented field | per declared reference flow | invoices, labels, analyses, application logs |
| `cp_irrigation_and_water_records` | `crop_establishment_and_field_management` | irrigation and withdrawal | meter, pump, invoice, or water-right record | field_id; source; meter; date; withdrawal; delivered_volume; pumping_energy; method; rainfall_basis | use calibrated meter or documented source and distinguish withdrawal from delivery; Raw aggregation and attribution: sum by source and separate withdrawal, delivery, and return | m3; kWh | per event or period | irrigation season and crop cycle | each field and water source | per declared reference flow | meter calibration, readings, invoices, water records |
| `cp_crop_protection_records` | `crop_establishment_and_field_management` | crop protection | purchase and application record | field_id; date; formulation; active_ingredient; product_mass; concentration; area; method; target; re-entry or disposal | reconcile product, active ingredient, application, and stock records; Raw aggregation and attribution: sum by formulation and active ingredient and retain application date `crop_protection_input_specific_input`: Operation crop_establishment_and_field_management: Record each herbicide, insecticide, fungicide, biological control, or adjuvant product by formulation and active ingredient where available. Original quantity method: Reconcile purchase, application, stock, and field records; retain active-ingredient concentration separately. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg product; kg active ingredient; ha | per application | complete crop cycle | every represented field | per declared reference flow | labels, invoices, application logs, licensed applicator records |
| `cp_field_energy_records` | `crop_establishment_and_field_management` | field energy | fuel, machine, contractor, or meter record | field_id; date; operation; machine; fuel_or_electricity; quantity; area; harvested_mass | use machine logs, contractor invoices, fuel records, or meters; Raw aggregation and attribution: allocate shared operation to fields by area or measured output `field_energy_input_specific_input`: Operation crop_establishment_and_field_management: Record mobile-machinery fuel used for soil preparation, planting, fertigation, spraying, irrigation pumping, and field maintenance. Material field electricity is recorded as a separate carrier in the foreground package. Original quantity method: Use machine, contractor, fuel, meter, or invoice records and allocate shared operations by field area or harvested mass. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | L; kg; kWh; MJ | per operation or period | complete crop cycle | field and farm | per declared reference flow | invoices, telematics, fuel logs, meter records |
| `cp_field_and_output_records` | `crop_establishment_and_field_management` | land, crop output, and field residue | field map, harvest, and residue record | field_id; product_identity; cultivar; area; dates; crop_duration; harvested_mass; field_loss; residue_mass; moisture; fate | combine field map, calibrated scales, harvest tickets, and residue disposition; Raw aggregation and attribution: reconcile each product and field before cross-farm aggregation | ha; date; kg; percent | per harvest and annual close | full crop year | every represented field | per declared reference flow | field map, scale calibration, harvest tickets, disposition records |
| `cp_harvest_and_handling_energy_records` | `harvest_and_farm_gate_preparation` | harvest and handling energy | machine, contractor, meter, or invoice record | lot_id; date; operation; machine; carrier; quantity; harvested_mass; duration | link energy record to harvest lot or allocate by documented throughput; Raw aggregation and attribution: sum by lot and operation and disclose allocation | L; kg; kWh; MJ | per harvest event or period | harvest window | harvest operation and facility | per declared reference flow | invoices, machine logs, meters, throughput records |
| `cp_residue_and_reject_fate_records` | `harvest_and_farm_gate_preparation` | field residues, trims, rejects, and losses | lot, field, waste, feed, compost, or transfer record | field_or_lot; stream; mass; moisture; reason; fate; destination; date | retain scale ticket, field log, transfer, sales, treatment, or disposal evidence; Raw aggregation and attribution: sum by stream and fate; do not merge with accepted product | kg; percent | per event or campaign | crop cycle and harvest | every field and handling line | per declared reference flow | scale tickets, disposition records, receipts, treatment records |
| `cp_conditioning_and_packaging_records` | `on_farm_cooling_and_packaging` | water, electricity, packaging, wastewater, and conditioning output | batch, meter, packaging, and waste record | batch_id; input_mass; water; electricity; cooling_time; packaging_type; packaging_mass; output_mass; reject_mass; wastewater; destination | link batch records to lot and reconcile input, utilities, packaging, wastes, and output; Raw aggregation and attribution: aggregate only after batch-level reconciliation `primary_packaging_input_specific_input`: Operation on_farm_cooling_and_packaging: Record packaging material that crosses the boundary before farm-gate transfer, including crates, film, cartons, labels, and reusable-container service. Original quantity method: Reconcile purchased, returned, reused, and discarded packaging by material and number of packed units. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `conditioning_waste_output_specific_output`: Record wastewater, wash solids, damaged product, and discarded packaging separately and identify the receiving treatment or destination. Measure or calculate from line records and reconcile to conditioning inputs and farm-gate output. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `mass-balance-identity` | kg; m3; kWh; h | per batch or shift | complete in-scope conditioning period | each line and cold room | per declared reference flow | calibrated scales, meters, packaging issue records, waste receipts |
| `cp_farm_gate_output_records` | `harvest_and_farm_gate_preparation` | marketable reference output | dispatch, scale, and quality record | lot_id; product_identity; source_field; date; mass; grade; maturity; trim_state; wash_state; cooling_state; packaging_state; destination | use calibrated dispatch scale and product acceptance record; Raw aggregation and attribution: sum accepted lots and preserve product-specific qualifiers | kg; percent | per lot or dispatch | complete harvest and hand-off period | farm and declared gate | per declared reference flow | scale calibration, grade sheet, dispatch ticket |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | fertilizer and amendment inputs | Formulated product mass multiplied by documented nutrient fraction equals nutrient-equivalent input; retain product and nutrient values separately. | product mass; nutrient analysis; application record | kg N, kg P2O5, and kg K2O by field-year | `ipcc-2019-managed-soils-n2o`; `fao-fruit-vegetable-preparation-2004` |
| `calc_land_occupation` | field land occupation | Field area multiplied by declared occupation duration, normalized to marketable reference output. | field area; crop duration; crop output | m2*a per reference output | `fao-fruit-vegetable-preparation-2004` |
| `calc_direct_soil_n2o` | managed-soil emissions | Apply the selected IPCC factor and tier to accounted nitrogen inputs; convert N2O-N to N2O only when required and disclose the conversion. | accounted N; method factor; conversion basis | direct N2O-N or N2O per reference output | `ipcc-2019-managed-soils-n2o` |
| `calc_irrigation_delivery` | irrigation water | Sum source-specific metered delivery, keep withdrawal and delivery distinct, and normalize to marketable output. | withdrawal; delivery; return; crop output | m3 delivered and withdrawn per reference output | `fao-crop-evapotranspiration-56` |
| `calc_product_specific_aggregation` | cauliflower and broccoli combined reporting | Complete separate product-specific balances first; mass-weight only reconciled product records when an aggregate result is requested. | product-specific inventories; marketable masses | aggregated inventory per reference output | `iso-14044-2006` |
| `calc_farm_gate_mass_balance` | harvest, grading, and conditioning | Harvested input plus measured mass gain or loss equals marketable output plus trims, rejects, residues, wastewater solids, and explained loss on a common basis. | input and output scale records; moisture; waste records | reconciled lot balance | `mass-balance-identity` |
| `planting_material_input_identity_and_fate` | `crop_establishment_and_field_management` | For the original planting_material_input collection role at this operation, identify the actual physical form, species/material, composition, state and supply/treatment boundary before creating exchanges. Each seed lot, transplant, crown, cutting, larval stage, formulation, coating, preservative or separated residue actually used/generated requires its own concrete card where relevant to this role; these examples are alternatives, not a required recipe. Retain existing collection records and route-specific source evidence. Count-based planting records require measured or supplier-supported mass-per-unit when matched to a mass-based provider; retain count and mass as linked attributes rather than two purchases. Do not merge separate husk/shell or separate agents. A real mixed stream requires composition and recipient evidence and is counted once. Before completeness, record every applicable amount and native unit, link a compatible verified UUID or explicitly unresolved identity, preserve stock/return attribution, and normalize the attributable raw quantity once to the accepted reference output. Missing records are not zero; aggregate ranges are not individual-input defaults. | `cp_planting_material_records` | Identity-specific exchanges and reconciled activity records | `fao-fruit-vegetable-preparation-2004` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_fertilizer_and_amendment_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | all product rows | Declare cauliflower or broccoli identity, cultivar or variety where material, harvest maturity, grade, and final hand-off state. | planting, harvest, grade, and dispatch records |
| `dq_temporal_coverage` | crop production and harvest | Cover the full represented crop cycle and harvest year; state whether the result is a single year, multi-year average, or scenario. | dated field, application, harvest, and dispatch records |
| `dq_input_completeness` | field and farm-gate inventory | Quantify or justify zero or exclusion for planting material, nutrients, irrigation, crop protection, land, field energy, harvest energy, primary conditioning, packaging, and direct emissions. | invoices, labels, meters, logs, and method declaration |
| `dq_mass_reconciliation` | all harvest and conditioning outputs | Reconcile harvested, marketable, trimmed, rejected, residue, wastewater-solids, and explained-loss masses before normalization. | calibrated scales, lot records, and fate receipts |
| `dq_nutrient_and_water_basis` | nutrients and irrigation | Preserve formulated fertilizer and nutrient-equivalent bases, water withdrawal and delivery, irrigation method, and any emission-factor selection. | product labels, analyses, meters, and calculation record |
| `dq_fate_and_disclosure` | residues, rejects, and wastes | Record destination, treatment, reuse, or disposal for every non-reference output and document any claimed co-product. | transfer, sales, feed, compost, treatment, or disposal record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow and product output | Confirm that the output is fresh, unprocessed cauliflower or broccoli at the declared farm-gate state and that product identity is explicit. | `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard` |
| `validation_process_completeness` | Process Map and inventory | Confirm crop establishment and field management, harvest and farm-gate preparation, and every applicable conditional conditioning process are represented or explicitly excluded. | `fao-fruit-vegetable-preparation-2004` |
| `validation_product_separation` | cauliflower and broccoli aggregation | Confirm that product-specific inputs, yields, rejects, and quality states are reconciled before any combined category result is calculated. | `iso-14044-2006`; `mass-balance-identity` |
| `validation_nutrient_basis` | fertilizer and soil emissions | Confirm product mass is distinct from kg N, P2O5, and K2O, and that factor selection and N2O-N conversion are documented. | `ipcc-2019-managed-soils-n2o` |
| `validation_water_accounting` | irrigation and conditioning water | Confirm rainfall, withdrawal, delivered irrigation, process water, wastewater, and return flows are distinguished and not double counted. | `fao-crop-evapotranspiration-56` |
| `validation_mass_balance` | harvest and primary conditioning | Confirm marketable output, trims, rejects, residues, wastewater solids, and explained losses reconcile to the corresponding input on a declared basis. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground annual crop-production dataset for fresh cauliflower or broccoli at farm gate |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for LCA studies that require fresh unprocessed cauliflower or broccoli and preserve the declared qualifiers |
| allowed_use | Farm-gate footprinting, product comparison with matching crop identity and gate, inventory aggregation after product-specific reconciliation, and downstream process modelling that begins at the declared hand-off |
| excluded_use | Direct substitution for processed, frozen, dried, retail-packed, distributed, cooked, or consumption-stage products; use across different crop identities or gates without adjustment |
| required_metadata | product identity; cultivar; geography; field area; crop year and duration; planting material; irrigation source and method; nutrient product and nutrient basis; crop protection; field and harvest energy; yield; grade and maturity; trimming; washing and cooling; packaging; residue and reject fates; farm-gate state |
| required_quality_disclosure | temporal coverage; field and lot coverage; product separation; measurement and scale evidence; mass-balance result; nutrient and water basis; emission-factor method coverage; allocation method; exclusions and assumptions |
| update_trigger | Material change in cultivation route, product identity, farm-gate state, crop-protection or nutrient practice, irrigation, harvest or conditioning technology, packaging, emission method, concrete flow identity verification|

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-fruit-vegetable-preparation-2004` | handbook | A. F. Lopez Camelo, FAO Agricultural Services Bulletin 151, Manual for the preparation and sale of fruits and vegetables: From field to market, 2004, https://www.fao.org/4/y4893e/y4893e00.htm | general harvest, fresh-market preparation and storage context; not a crop-specific agronomic or quantitative LCA source |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm | irrigation data distinction, crop-cycle water accounting, and water collection rules |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, N2O emissions from managed soils, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | direct and indirect managed-soil nitrogen emissions and N2O-N conversion |
| `usda-ams-cauliflower-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Cauliflower, https://www.ams.usda.gov/grades-standards/cauliflower-grades-and-standards | cauliflower grade, maturity, defects, and marketable-output qualifiers |
| `usda-ams-broccoli-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Broccoli, https://www.ams.usda.gov/grades-standards/broccoli-grades-and-standards | broccoli grade, maturity, defects, and marketable-output qualifiers |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy, co-product treatment, and aggregation discipline |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for declared process hand-offs and waste reconciliation | harvest, grading, conditioning, and product-specific aggregation calculations |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
