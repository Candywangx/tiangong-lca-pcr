---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cantaloupes-and-other-melons
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cantaloupes and other melons

## 1. Scope and Applicability

This PCR covers commercial production of fresh, whole, unprocessed cantaloupes and other melons from field preparation or protected-crop establishment through managed cultivation, harvest, grading, optional on-farm conditioning, and farm-gate hand-off. It covers cantaloupe, muskmelon, honeydew, Galia, Persian, casaba, and other non-watermelon melons when the cultivar and market state are declared. It applies to seeded and transplanted annual production under irrigated or rainfed management. It excludes watermelon, melon seed or transplants sold as planting material, preserved or cut melon, juice, drying, cold storage after farm-gate transfer, distribution, retail, and consumption.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cantaloupes-and-other-melons |
| classification_refs | CPC 3.0: 01229 Cantaloupes and other melons; mapping relation: exact |
| covered_products | Fresh, whole, unprocessed cantaloupes and other non-watermelon melons produced for sale at the farm gate |
| excluded_products | Watermelons; melon seed or transplants sold as planting material; cut, juiced, preserved, frozen, dried, or otherwise transformed melons; post-farm-gate logistics |
| representative_product | Marketable whole cantaloupe or other melon, harvested and graded for a declared market state |
| production_route | Annual seeded or transplanted melon cultivation, managed field or protected production, harvest, grading, and conditional farm-gate preparation |
| market_state | Fresh whole produce at farm gate, with cultivar, maturity, size, defect, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole cantaloupe or other non-watermelon melon at farm gate |
| How much | 1,000 kg as-received marketable melon |
| How well | Whole, fresh, unprocessed fruit meeting the declared cultivar, maturity, size, appearance, defect, and marketable-grade criteria |
| How long or cycle | One declared annual production cycle from planting or transplanting through the final harvest, with the production year and harvest window reported |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Fresh cantaloupes and other melons, production mix, at farm gate, whole and unprocessed |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or melon type; production geography; production year and crop cycle; seeded or transplanted route; irrigated or rainfed regime; fruit maturity and harvest window; size and grade criteria; whole or damaged state; washed or unwashed; packaging state; farm-gate hand-off |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvested and farm-gate melon | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep gross harvested fruit, marketable fruit, rejected fruit, and field residue masses distinct before normalizing to the reference flow. |
| `area_and_cycle_normalization` | field and protected-crop records | Area and mass | ha and kg | Record each field or production unit and crop cycle separately, then normalize all inputs and outputs to marketable farm-gate melon. |
| `nutrient_basis` | fertilizer and amendment inputs | Nutrient mass | kg N, kg P2O5, or kg K2O | Convert product quantities only from documented nutrient concentrations and retain the reported nutrient or oxide-equivalent basis. |
| `irrigation_volume` | irrigation water | Volume | m3 | Record metered or otherwise documented delivered irrigation by production unit and crop cycle; keep rainfall separate from irrigation withdrawals. |
| `planting_material_basis` | seed and transplant inputs | Number or mass | seed units, plants, or kg | Record supplier-declared seed or transplant quantity and type; do not infer seed mass from count without a documented conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field or protected-crop production unit receiving melon seed or transplants, with prior land use and pre-plant operations disclosed |
| starting_condition_role | Beginning of the declared annual melon crop cycle |
| product_classification_scope | Fresh whole cantaloupes and other non-watermelon melons under CPC 3.0:01229 through farm-gate hand-off |
| recursive_input_rule | Purchased melon seed or transplants are distinct upstream product inputs and are linked once rather than recreated as an internal melon production process. |
| upstream_dataset_requirement | Require compatible upstream datasets for seed or transplants, fertilizers, amendments, crop-protection products, irrigation water, energy, field machinery services, and packaging when used. |
| disclosure | Declare melon type and cultivar, geography, prior land use, crop-cycle dates, production system, irrigation regime, nutrient basis, crop-protection program, emission method, residue fate, harvest and grading method, washing, and packaging. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_melon_cycle` | field or protected production through final harvest | Include field or protected-crop preparation, planting or transplanting, crop management, and all harvests of the declared annual crop cycle; allocate shared operations to the reported melon using documented production records. | `fao-gap-framework-2003` |
| `boundary_farm_gate` | harvest and preparation | End the foreground boundary when marketable whole melon is transferred at the farm gate; include on-farm grading, trimming of damaged fruit, washing, cooling, and primary packaging only when they occur before transfer. | `fao-postharvest-handling-ae075e` |
| `boundary_managed_soils` | nutrient, amendment, and residue flows | Include direct and indirect managed-soil emissions attributable to applied nutrients and returned residues under one declared calculation method, without double counting emissions represented by an upstream dataset. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | rejected fruit and crop residues | Record field return, composting, feed, treatment, disposal, or another declared destination for each residue stream; an unreported destination remains a data-quality gap and is not an automatic co-product. | `fao-gap-framework-2003`; `fao-postharvest-handling-ae075e` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `melon_field_establishment` | Melon field or protected-crop establishment | required | once for each declared crop cycle | foreground establishment and planting | production-unit area and seed or transplant quantity |
| `melon_crop_management` | Melon crop management | required | throughout the declared crop cycle | foreground managed biological production | production-unit cycle and crop input records |
| `melon_harvest_and_farm_gate` | Melon harvest, grading, and farm-gate hand-off | required | each harvest and final hand-off | foreground harvest, grading, and product hand-off | 1,000 kg marketable whole melon |
| `on_farm_melon_conditioning` | On-farm melon conditioning and primary packaging | conditional | washing, cooling, or primary packaging occurs before farm-gate transfer and is not embedded in harvest records | prepare product to declared market state | incoming, accepted, and rejected melon mass |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

### Process: Melon field or protected-crop establishment (`melon_field_establishment`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Occupied agricultural soil (`melon_field_occupation`)

Record the field or protected-crop area and occupation duration for the declared crop cycle when land occupation is represented as an elementary input.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Production-unit area multiplied by the declared crop-cycle occupation period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate melon.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_field_operation_records`

#### Outputs

##### Product flows

###### Established melon production unit (`melon_established_unit_output`)

This internal hand-off records the accepted planted area entering managed melon production and is not the reference product.

- Selected flow: Established melon production unit
- Flow property / unit: Area / ha
- Amount rule: Accepted planted or transplanted area after establishment and recorded failures.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per establishment campaign.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_establishment_records`

##### Waste flows

##### Elementary flows

### Process: Melon crop management (`melon_crop_management`)

#### Inputs

##### Product flows

###### Urea fertilizer (`melon_crop_management_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for melon_crop_management_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per production-unit hectare and converted to 1,000 kg marketable melon.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_fertilizer_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_fertilizer_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`melon_crop_management_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_fertilizer_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_fertilizer_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`melon_crop_management_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_fertilizer_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_fertilizer_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`melon_crop_management_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_fertilizer_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_fertilizer_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`melon_crop_management_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_fertilizer_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_fertilizer_records`
- Sources: `fao-gap-framework-2003`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`melon_crop_management_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_fertilizer_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_fertilizer_records`
- Sources: `fao-gap-framework-2003`; `fao-organic-nutrients`

###### Irrigation water supplied (`melon_irrigation_input`)

Record irrigation only where water is delivered to the melon production unit. Rainfed production records zero applied irrigation with supporting field evidence.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Amount rule: Metered or calculated irrigation volume by production unit and crop cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per production-unit hectare and converted to 1,000 kg marketable melon.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_irrigation_records`
- Sources: `fao-gap-framework-2003`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4,000
  - Unit: m3/ha
  - Basis: one annual melon crop cycle pending local water-balance evidence
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel (`melon_field_fuel_input_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `melon_field_fuel_input_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_melon_field_operation_records` for `melon_crop_management`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_melon_field_operation_records`
- Sources: `route-energy-fao`

##### Waste flows

#### Outputs

##### Product flows

###### Growing melon crop handed to harvest (`growing_melon_output`)

This internal product hand-off represents the crop entering harvest and grading. It is not a second reference product.

- Selected flow: Growing cantaloupes and other melons ready for harvest
- Flow property / unit: Mass / kg
- Amount rule: Reconciled pre-harvest crop estimate or harvest intake mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate melon.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_harvest_records`

##### Waste flows

###### Crop residues returned or removed (`melon_crop_residue_output`)

Record vines, leaves, and non-marketable fruit by destination. Residues returned to soil are not a co-product unless a separate declared product hand-off exists.

- Selected flow: Melon crop residues and non-marketable field material
- Flow property / unit: Mass / kg dry or as-received material
- Amount rule: Measured or reconciled residue mass by destination and moisture basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per production-unit hectare and converted to 1,000 kg marketable melon.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_harvest_records`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1,000
  - Upper: 50,000
  - Unit: kg residue/ha
  - Basis: vines, leaves, and non-marketable fruit for one crop cycle; declare destination and moisture basis
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide released to ambient air (`melon_n2o_air_output`)

Calculate soil nitrous oxide from collected nitrogen inputs, organic amendments, and returned residue activity using one geographically applicable IPCC tier or reviewed regional method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculated from collected activity data and declared factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per production-unit hectare and converted to 1,000 kg marketable melon.

- Normalization basis: per declared reference flow
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Ammonia released to ambient air (`melon_ammonia_air_output`)

Calculate ammonia volatilization by nutrient product, application method, timing, and applicable local method.

- Selected flow: Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculated from nitrogen application records and applicable factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per production-unit hectare and converted to 1,000 kg marketable melon.

- Normalization basis: per declared reference flow
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_emission_activity`
- Sources: `emep-eea-2023-guidebook`

###### Nitrate released to water (`melon_nitrate_water_output`)

Record nitrate leaching or runoff only when supported by a geographically applicable model, monitored balance, or reviewed inventory method; otherwise retain the activity as an evidence gap emission requirement.

- Selected flow: Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- Amount rule: Calculate from nitrogen balance, drainage, and a declared regional method when applicable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per production-unit hectare and converted to 1,000 kg marketable melon.

- Normalization basis: per declared reference flow
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_emission_activity`
- Sources: `ipcc-2019-managed-soils`

### Process: Melon harvest, grading, and farm-gate hand-off (`melon_harvest_and_farm_gate`)

#### Inputs

##### Product flows

###### Melons entering harvest and grading (`melon_harvest_intake`)

Record the incoming crop mass and the cultivar or melon type before grading. Reconcile the incoming mass with marketable output, rejects, and measured losses.

- Selected flow: Fresh cantaloupes and other melons entering harvest and grading
- Flow property / unit: Mass / kg
- Amount rule: Weighbridge, field bin, or harvest-record mass by production unit and harvest date.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate melon.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_harvest_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable melon at farm gate (`marketable_melon_farm_gate_output`)

Record whole marketable cantaloupes and other melons transferred at the declared farm-gate hand-off, with maturity, grade, and packaging state retained. The reference-flow UUID is verified against the CPC 01229 farm-gate production-mix flow.

- Selected flow: Fresh cantaloupes and other melons, production mix, at farm gate, whole and unprocessed
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Measured marketable fruit mass at the declared farm-gate quality state.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: terminal output scaled to 1,000 kg marketable melon.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_harvest_records`
- Range: Provisional marketable-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5,000
  - Upper: 60,000
  - Unit: kg marketable melon/ha
  - Basis: one annual melon crop cycle; replace with regional yield and grade records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects and harvest losses (`melon_grading_reject_waste`)

Record damaged, immature, overripe, diseased, undersized, or otherwise rejected fruit and harvest losses by destination. Useful outputs require a separate declared hand-off and must not be silently treated as waste.

- Selected flow: Melon grading rejects and harvest losses
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled reject mass by quality class and destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable farm-gate melon.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_harvest_records`
- Range: Provisional grading-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg/1,000 kg marketable melon
  - Basis: rejected and lost fruit before farm-gate hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-farm melon conditioning and primary packaging (`on_farm_melon_conditioning`)

#### Inputs

##### Product flows

###### Harvested melon for conditioning (`conditioning_melon_input`)

Include this input only when washing, cooling, or primary packaging is a separate pre-gate activity and its intake is not embedded in harvest records.

- Selected flow: Harvested whole melon for on-farm conditioning
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming mass matched to an identified conditioning batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted farm-gate melon.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`

###### Conditioning water supplied (`conditioning_water_input`)

Record water used for washing or other primary conditioning only when the activity occurs before farm-gate transfer.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-reconciled water volume used for pre-gate conditioning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted farm-gate melon.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`
- Range: Provisional conditioning-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4
  - Unit: m3/1,000 kg accepted melon
  - Basis: washing or other pre-gate conditioning only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wooden crate (`melon_primary_packaging_input_wood_crate`)

**Collection scope and applicability for melon_primary_packaging_input.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record primary packaging only when it crosses the farm-gate foreground boundary. Identify each material and reuse status separately.
Raw activity or stage basis: per 1,000 kg accepted farm-gate melon.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`
- Sources: `fao-package-identities`

###### Corrugated fibreboard box (`melon_primary_packaging_input_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`
- Sources: `fao-package-identities`

###### Polyethylene wrapping film (`melon_primary_packaging_input_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_melon_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`
- Sources: `fao-package-identities`

###### Conditioning electricity (`melon_conditioning_electricity_input`)

Record electricity used by washing, cooling, sorting, or packing equipment when the equipment operates before farm-gate hand-off.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered or batch-allocated electricity matched to conditioning output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1,000 kg accepted farm-gate melon.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`

##### Waste flows

#### Outputs

##### Product flows

###### Conditioned melon at farm-gate hand-off (`conditioned_melon_output`)

Record accepted whole melon after the optional pre-gate conditioning step. Link this output to `marketable_melon_farm_gate_output` for the declared farm-gate reference.

- Selected flow: Conditioned whole cantaloupes and other melons at farm gate
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Accepted batch mass after conditioning and quality checks.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: terminal output scaled to 1,000 kg marketable melon.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melon_conditioning_records`

##### Waste flows

###### Conditioning rejects and material loss (`melon_conditioning_reject_waste`)

Reconcile damaged fruit, removed soil or foreign matter, packaging rejects, and measured water or mass losses by destination.

- Selected flow: Melon conditioning rejects and material loss
- Flow property / unit: Mass / kg
- Amount rule: Incoming batch mass minus accepted output and separately measured useful outputs, with moisture basis documented.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted farm-gate melon.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melon_conditioning_records`
- Range: Provisional conditioning-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg/1,000 kg accepted melon
  - Basis: rejects and measured losses from pre-gate conditioning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Fresh cantaloupes and other melons, production mix, at farm gate, whole and unprocessed
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
- Selected flow: Fresh cantaloupes and other melons, production mix, at farm gate, whole and unprocessed
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
| `allocation_avoid_by_subdivision` | field management, harvest, and conditioning | Prefer separate records for production, harvest, conditioning, marketable fruit, residues, and waste before applying allocation. | `iso-14044-2006` |
| `allocation_melon_grades` | multiple marketable melon grades | Treat declared grades as one reference-product category when they share the same intended use; report grade-specific quantities and use economic or mass allocation only when separate modelling is infeasible. | `iso-14044-2006` |
| `allocation_residue_and_rejects` | residues, rejects, and useful secondary outputs | Treat material with a declared useful hand-off as a co-product only when the hand-off and destination are documented; otherwise record it as waste or residue with fate disclosed. | `fao-postharvest-handling-ae075e`; `iso-14044-2006` |
| `allocation_shared_operations` | shared field, protected-crop, or conditioning operations | Allocate shared operations by measured area, time, mass, or another documented physical relationship; disclose the choice and test a value-based sensitivity when the physical relationship is not representative. | `iso-14044-2006` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `melon_field_fuel_input_specific_input` | `cp_melon_field_operation_records` | Operation melon_crop_management: Record fuel consumed by field preparation, crop care, and harvest machinery when the fuel crosses the foreground boundary. Original quantity method: Tank records, invoices, or contractor activity converted to a declared carrier basis. |
| `melon_crop_protection_input_specific_input` | `cp_melon_crop_protection_records` | Operation melon_crop_management: Record each herbicide, insecticide, fungicide, and other formulation separately by product and application event. Do not merge distinct formulations into one identity. Original quantity method: Sum measured formulation mass by product, production unit, and application event. |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_melon_establishment_records` | `melon_field_establishment` | seed, transplants, planted area, establishment energy | seed invoice, transplant delivery, field log, machinery record | production_unit_id; melon_type; cultivar; area; material_type; quantity; date; operation | reconcile planting material and establishment operations to each production unit and crop cycle; Raw aggregation and attribution: sum by production unit and physical identity; retain seeded and transplanted routes separately | ha; kg; plants; L; kWh | each planting campaign | complete crop cycle | all represented production units | per declared reference flow | invoices; field maps; supplier records; equipment logs |
| `cp_melon_field_operation_records` | `melon_field_establishment` and `melon_crop_management` | field operations, fuel, land occupation | field log, fuel receipt, contractor record, area register | production_unit_id; area; operation; date; fuel; machinery; contractor_scope; occupation_period | reconcile operations and fuel to each production unit and crop cycle; Raw aggregation and attribution: sum by operation and production unit; prevent overlap between owned and contracted equipment `melon_field_fuel_input_specific_input`: Operation melon_crop_management: Record fuel consumed by field preparation, crop care, and harvest machinery when the fuel crosses the foreground boundary. Original quantity method: Tank records, invoices, or contractor activity converted to a declared carrier basis. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `melon_establishment_energy_specific_input`: Record diesel, electricity, or contracted machinery service used for bed preparation, tillage, mulch or row-cover installation, and planting when the activity crosses the foreground boundary. Use fuel receipts, machinery logs, meter records, or supplier service records by production unit and crop cycle. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | ha; L; kg; kWh; m2*a | each operation or meter period | complete crop cycle | all represented production units | per declared reference flow | dated logs; invoices; calibrated meters; area records |
| `cp_melon_fertilizer_records` | `melon_crop_management` | nutrient and amendment inputs | nutrient plan, invoice, application log, product label, assay | production_unit_id; product; amount; nutrient_content; basis; date; method | calculate nutrient content from product records and retain product identity and reporting basis; Raw aggregation and attribution: sum by nutrient, product, date, and production unit without merging formulations | kg product; kg N; kg P2O5; kg K2O | each application | complete crop cycle | all represented production units | per declared reference flow | invoices; labels; soil tests; application records |
| `cp_melon_irrigation_records` | `melon_crop_management` | irrigation water | meter, pump log, irrigation schedule, water invoice | production_unit_id; source; volume; date; delivery_method; rainfall_context | reconcile delivered irrigation to production unit and crop cycle; keep rainfall separate; Raw aggregation and attribution: sum metered or documented volumes and disclose calculated values | m3; mm; ha | each irrigation event or meter period | complete crop cycle | all represented production units | per declared reference flow | calibrated meters; pump records; water permits; schedules |
| `cp_melon_crop_protection_records` | `melon_crop_management` | crop-protection formulations | product label, invoice, application log, spray record | production_unit_id; product; active_ingredient; amount; concentration; date; method | record each formulation and event separately and reconcile to the crop cycle; Raw aggregation and attribution: preserve product and active-ingredient identity; do not aggregate distinct products `melon_crop_protection_input_specific_input`: Operation melon_crop_management: Record each herbicide, insecticide, fungicide, and other formulation separately by product and application event. Do not merge distinct formulations into one identity. Original quantity method: Sum measured formulation mass by product, production unit, and application event. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg; L; ha | each application | complete crop cycle | all represented production units | per declared reference flow | labels; invoices; application logs; operator records |
| `cp_melon_emission_activity` | `melon_crop_management` | soil and air or water emissions | nutrient balance, soil record, weather, residue, emission model | production_unit_id; N_inputs; organic_N; residue_N; soil; climate; drainage; factor_set; model_version | Within each compatible route/product/state, calculate attributable raw totals by field first. Aggregate final intensity = sum(attributable raw quantities) * declared reference quantity / sum(matched accepted final outputs). When source quantities are per-ha rates e_h and y_h, first recover raw totals as e_h*area and y_h*area; do not area-weight field totals again. A per-product intensity is weighted by its matched output, not area or an unweighted mean. Apply existing allocation once, preserve period/throughput and all source-unit conversions, and keep incompatible routes separate. | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented production units | per declared reference flow | source records; factor provenance; model files; review record |
| `cp_melon_harvest_records` | `melon_harvest_and_farm_gate` | incoming fruit, marketable output, rejects, losses, harvest energy | weighbridge, field bin record, harvest log, grade ticket, meter, destination record | production_unit_id; harvest_date; melon_type; cultivar; incoming_mass; marketable_mass; reject_mass; grade; maturity; moisture; destination; fuel | reconcile every harvest to marketable output, rejects, losses, and declared hand-off; Raw aggregation and attribution: sum accepted, rejected, and lost fruit by grade and destination; close the harvest mass balance `melon_harvest_energy_specific_input`: Record harvest fuel, electricity, or contracted harvest service when it crosses the foreground boundary and is not already recorded in crop management. Use harvest logs, invoices, meters, or contractor records and prevent overlap with field-fuel records. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg; percent; L; kWh | each harvest | complete crop cycle | all represented production units | per declared reference flow | calibrated scales; grade records; moisture checks; destination evidence |
| `cp_melon_conditioning_records` | `on_farm_melon_conditioning` | water, packaging, electricity, conditioned fruit, rejects | batch ticket, scale, meter, packaging issue, wash record | batch_id; incoming_mass; accepted_mass; reject_mass; water; electricity; packaging_material; reuse_status; date | reconcile conditioning batches and shared meters to accepted output; Raw aggregation and attribution: match incoming and accepted masses; allocate shared utilities by time or processed mass | kg; m3; kWh; packaging kg | each batch or meter period | all pre-gate conditioning | all included equipment and batches | per declared reference flow | calibrated scales and meters; batch tickets; packaging records |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field and crop-management flows | Crop-cycle amount per hectare divided by same-cycle marketable melon yield per hectare, multiplied by 1,000 kg | flow amount; production-unit area; marketable melon mass | amount per 1,000 kg marketable melon |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | Product mass multiplied by documented nutrient fraction; preserve product and nutrient or oxide-equivalent basis | product identity; mass; assay; reporting basis | kg N, kg P2O5, or kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | Apply the selected IPCC tier or regional method to fertilizer N, organic N, returned-residue N, volatilization, and leaching pathways | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | Calculate by nutrient product, application method, timing, and applicable factor | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_harvest_mass_balance` | harvest and grading | Incoming crop mass equals marketable output plus declared useful outputs, rejects, and measured losses within uncertainty | incoming, marketable, useful, reject, and loss masses | reconciled harvest outputs | `mass-balance-identity` |
| `calc_conditioning_mass_balance` | on-farm conditioning | Incoming batch mass equals accepted fruit plus useful outputs, rejects, and measured losses within uncertainty | batch masses; moisture; loss records | reconciled conditioning outputs per accepted fruit | `mass-balance-identity` |
| `melon_planting_material_input_identity_and_fate` | `melon_field_establishment` | For the original melon_planting_material_input collection role at this operation, identify the actual physical form, species/material, composition, state and supply/treatment boundary before creating exchanges. Each seed lot, transplant, crown, cutting, larval stage, formulation, coating, preservative or separated residue actually used/generated requires its own concrete card where relevant to this role; these examples are alternatives, not a required recipe. Retain existing collection records and route-specific source evidence. Count-based planting records require measured or supplier-supported mass-per-unit when matched to a mass-based provider; retain count and mass as linked attributes rather than two purchases. Do not merge separate husk/shell or separate agents. A real mixed stream requires composition and recipient evidence and is counted once. Before completeness, record every applicable amount and native unit, link a compatible verified UUID or explicitly unresolved identity, preserve stock/return attribution, and normalize the attributable raw quantity once to the accepted reference output. Missing records are not zero; aggregate ranges are not individual-input defaults. | `cp_melon_establishment_records` | Identity-specific exchanges and reconciled activity records | `fao-gap-framework-2003` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_melon_emission_activity`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference and marketable outputs | Confirm the melon type and cultivar are within CPC 01229 and distinguish them from watermelon, seed, transplants, and processed melon. | crop, lot, cultivar, and sales records |
| `dq_temporal_alignment` | all foreground rows | Use planting, inputs, harvest, yield, emissions, and conditioning records from the same declared crop cycle; disclose proxy years. | dated field and batch records |
| `dq_mass_and_grade` | fruit outputs and rejects | Retain scale calibration, grade criteria, maturity state, and moisture or as-received basis for accepted and rejected fruit. | calibration, grade tickets, and quality records |
| `dq_completeness` | process map and flows | Reconcile every production unit and conditioning batch and distinguish zero, not applicable, proxy, and missing values. | production-unit roster and batch reconciliation |
| `dq_identity_resolution` | parameterized, unmapped, and reference flows | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | Exactly one terminal marketable melon output equals 1,000 kg after scaling and declares melon type, cultivar, maturity, grade, and farm-gate qualifiers. |  |
| `validation_process_route` | process map | Include establishment, crop management, and harvest once per crop cycle; include conditioning only when it occurs before hand-off and is not double counted. |  |
| `validation_crop_cycle_reconciliation` | field inventory | Production-unit area, planting material, inputs, harvest outputs, residue fates, and emissions refer to the same crop cycle and production units. |  |
| `validation_nitrogen_balance` | nutrient and emission inventory | Reconcile nutrient content, returned and removed residue nitrogen, and emission pathways with methods and factors disclosed. | `ipcc-2019-managed-soils` |
| `validation_harvest_balance` | harvest and grading | Reconcile incoming fruit with marketable fruit, declared useful outputs, rejects, and measured losses within uncertainty. | `mass-balance-identity` |
| `validation_conditioning_balance` | optional conditioning | Reconcile incoming batches with accepted fruit, rejects, packaging, water, and measured losses; exclude conditioning when its burdens are embedded upstream. | `mass-balance-identity` |
| `validation_flow_identity` | every flow | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground fresh cantaloupe and other non-watermelon melon production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | farm-gate LCA of fresh whole cantaloupe and other non-watermelon melons when geography, cultivar or melon type, season, yield, irrigation, residue, grading, and conditioning context are preserved |
| excluded_use | watermelon; seed or transplant production; cut or processed melon; post-farm-gate storage, distribution, retail, or consumption; another crop without a reviewed proxy decision |
| required_metadata | geography; melon type; cultivar; production year; crop cycle; production system; area; planting route; yield; maturity; grade; irrigation; nutrient basis; crop protection; residue fate; conditioning; packaging; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy inputs; missing records; range exceedances; emission methods; scale and meter calibration; grade and mass-balance reconciliations |
| update_trigger | new reviewed melon evidence, material route change, revised emission method, changed concrete flow identity verification|

Evidence applicability: cited general farm-record and postharvest frameworks do not supply crop-specific yields, lifetimes, gate cutoffs or LCA allocation defaults. Those are this PCR methodology decisions; qualify them by the actual species, route and period and obtain compatible agronomic evidence before asserting completeness. Provisional author ranges are screening aids, not empirical acceptance limits or substituted measurements.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11 | soil N2O, residue nitrogen, and nitrogen pathway accounting |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | agricultural ammonia calculation and QA context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched harvest and conditioning batches | harvest and conditioning balance calculations and validation |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | Generic monitoring and farm-record context only; crop-specific routes, lifetimes, quantitative ranges and LCA allocation are PCR choices requiring separate applicable evidence. |
| `fao-postharvest-handling-ae075e` | official_guidance | Kitinoja and Kader, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, 4th edition (2002), https://www.fao.org/4/ae075e/ae075e00.htm | General record/handling context only; not a crop-specific parameter or LCA boundary/allocation rule. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
