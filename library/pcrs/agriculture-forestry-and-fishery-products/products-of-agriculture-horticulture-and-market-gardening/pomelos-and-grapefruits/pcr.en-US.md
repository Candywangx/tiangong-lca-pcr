---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pomelos-and-grapefruits
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Pomelos and grapefruits

## 1. Scope and Applicability

This PCR guides a foreground data package for fresh whole pomelos and grapefruits from the declared orchard or grove production cycle through harvest, optional on-farm conditioning, and the declared farm-gate or pack-house hand-off. It covers perennial orchard establishment when that activity is included in the study, productive orchard care, irrigation, nutrient and crop-protection management, harvest rounds, and pre-gate sorting, washing, cooling, and primary packing when present.

Seedling and grafted-tree nursery production, breeding, juice and concentrate manufacture, cutting, peeling, drying, cooking, retail, consumer storage and use, and post-gate distribution are outside the default boundary. Durable orchard infrastructure, machinery, buildings, and irrigation assets are excluded unless separately attributed. Field residues, culls, rejected fruit, wastewater, and packaging waste remain in the foreground until their declared fate is recorded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pomelos-and-grapefruits` |
| classification_refs | CPC 3.0 `01321`, Pomelos and grapefruits; mapping relation: exact |
| covered_products | Fresh whole pomelos and grapefruits, including declared cultivars, production routes, maturity states, grades, washing, cooling, and primary-packaging states |
| excluded_products | Nursery trees, seeds and scion production, juice, concentrate, peeled or cut fruit, dried or cooked products, retail services, durable capital assets, and post-gate transport |
| representative_product | Marketable fresh whole pomelo or grapefruit meeting the declared cultivar group, maturity, size, firmness, cleanliness, grade, and defect criteria |
| production_route | Perennial orchard establishment when applicable, orchard and soil management, irrigation, crop protection, harvest, optional conditioning, and farm-gate or pack-house hand-off |
| market_state | Fresh, whole, unprocessed pomelo or grapefruit at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole pomelo or grapefruit at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Fresh, whole, unprocessed fruit with declared species or cultivar group, maturity, size, firmness, cleanliness, grade, defect tolerance, moisture state, and packaging state |
| How long or cycle | One declared orchard production year and harvest campaign; all harvest rounds attributable to the same orchard block are reconciled before normalization |
| reference_flow_link | farm_gate_product_output |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Pomelos and grapefruits `01323c69-b85f-4716-88f2-718888f2f780` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cultivar group; production geography; orchard age and productive status; planting density; crop-year and harvest dates; irrigated or rain-fed status; nutrient product and nutrient basis; crop-protection program; marketable yield; cull and residue fate; washing, cooling, and packaging state; declared gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data package field. The reference product identity follows the declared qualifiers; no nearby citrus product is substituted.

This reference UUID denotes the fresh, unprocessed farm-gate product. Verify actual species, product state and handoff before applying the binding. An independent pack-house, further-processed or otherwise incompatible output requires separately verified identity and must not inherit this UUID. Identity verification does not change the actual system boundary or quantity-normalization requirements of this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_citrus_mass` | harvested fruit, marketable fruit, culls, and residues | Mass | kg | Weigh marketable, downgraded, rejected, field-loss, and residual fruit streams separately and reconcile them before conversion to the 1,000 kg reference output. |
| `orchard_year_normalization` | orchard and harvest records | Area and mass | ha and kg | Record inputs and harvest rounds by orchard block and crop year, then normalize the attributable inventory to marketable output from the same block and harvest campaign. |
| `nutrient_product_basis` | fertilizer and soil-amendment inputs | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | Give every actual fertilizer or amendment product its own card, retaining physical product mass, formulation, nutrient composition and application records. Nutrient quantities are not additional inputs of the same product; collection or group identifiers cannot substitute for a concrete flow identity. |
| `water_delivery_basis` | irrigation, fertigation, washing, and source withdrawal | Volume | m3 | Keep crop irrigation, fertigation carrier water, post-harvest washing water, and natural-resource withdrawal as distinct records and disclose the meter or water-balance basis. |
| `postharvest_mass_reconciliation` | sorting, washing, cooling, and packing | Mass and moisture | kg and declared fraction | Retain measured soil removal, water uptake, cooling loss, culls, and packing loss separately from harvested fruit mass and disclose the reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established orchard block receiving the declared crop-year inputs; if orchard establishment is included, start at prepared orchard land receiving planting material and disclose prior land use and excluded infrastructure |
| starting_condition_role | Start of the declared orchard production year and foreground input accounting |
| product_classification_scope | CPC 3.0 `01321`, Pomelos and grapefruits, through the declared farm-gate or pack-house hand-off |
| recursive_input_rule | Pomelo or grapefruit planting material is recorded at its received hand-off state and linked to an upstream dataset; its nursery or propagation production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare species and cultivar group, geography, orchard age and density, crop-year dates, irrigation source and method, nutrient basis, crop-protection program, harvest rounds, marketable yield, culls and residues, washing and cooling, packaging, waste fate, and declared gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_year` | establishment and orchard cultivation | Include orchard care and direct crop emissions attributable to the declared production year; include establishment only when its area, age, and attribution basis are explicitly declared, and exclude unrelated infrastructure construction. | `fao-gap-framework-2003` |
| `boundary_harvest_gate` | harvest, conditioning, and packing | End the default foreground boundary at the declared farm-gate or pack-house gate. Include sorting, washing, cooling, primary packaging, and pre-gate transport only when they occur before that gate. | `codex-fresh-produce-hygiene`; `usda-ams-citrus-standards` |
| `boundary_residue_fate` | culls, field residues, wastewater, and packaging waste | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. Do not assign a co-product credit without a documented recipient and intended use. | `iso-14044-2006`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment` | Pomelo and grapefruit orchard establishment | conditional | include when planting, replanting, or orchard establishment is attributed to the represented orchard block | foreground orchard establishment | planted area, planting material, orchard age, and attribution period |
| `orchard_cultivation` | Pomelo and grapefruit orchard cultivation | required | every represented productive orchard year | foreground managed biological production | orchard area, input records, crop-year dates, and attributable yield |
| `harvest_and_field_handling` | Pomelo and grapefruit harvest and field handling | required | every represented harvest campaign | foreground harvest and primary field handling | harvested mass, harvest rounds, culls, and marketable output |
| `conditioning_and_farm_gate` | Pomelo and grapefruit conditioning and farm-gate hand-off | conditional | include when sorting, washing, cooling, or primary packing occurs before the declared gate | foreground conditioning and hand-off | 1,000 kg marketable fresh whole output |

### Process: Pomelo and grapefruit orchard establishment (`orchard_establishment`)

#### Inputs

##### Product flows

###### Planting material (`planting_material_input`)

Record purchased or internally transferred grafted trees, seedlings, rootstock, or scion material entering the declared orchard block, preserving supplier lot, species or cultivar, planting date, and planted quantity.

- Selected flow: Pomelo or grapefruit planting material
- Flow property / unit: Mass or plant count / kg or plant
- Amount rule: Record supplier or nursery delivery records and the number of viable trees planted by orchard block.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-gap-framework-2003`

##### Waste flows

##### Elementary flows

###### Occupied orchard land (`orchard_land_occupation`)

Record the orchard area and attribution period occupied by the represented orchard block; disclose whether establishment and productive years are separately allocated.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / ha*a
- Amount rule: Multiply declared orchard area by the period attributed to establishment and normalize to marketable output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_establishment_records`
- Sources: `fao-gap-framework-2003`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Pomelo and grapefruit orchard cultivation (`orchard_cultivation`)

#### Inputs

##### Product flows

###### Urea fertilizer (`orchard_cultivation_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for orchard_cultivation_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_and_protection_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-volume-4`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`orchard_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_and_protection_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-volume-4`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`orchard_cultivation_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_and_protection_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-volume-4`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`orchard_cultivation_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_and_protection_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-volume-4`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`orchard_cultivation_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_and_protection_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-volume-4`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`orchard_cultivation_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_and_protection_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-volume-4`; `fao-organic-nutrients`

###### Irrigation and fertigation water (`orchard_irrigation_water`)

Record water delivered to the orchard by source and application method, separating irrigation, fertigation carrier water, and rainfall assumptions.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Amount rule: Sum meter readings or a documented application water balance for the represented orchard year.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_energy_records`
- Sources: `fao-crop-evapotranspiration-56`

###### Field and pumping electricity (`field_electricity_input`)

Record purchased electricity used for irrigation pumping, fertigation, controls, and other in-scope orchard operations.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Sum meter or invoice records by operation and allocate shared meters to the represented orchard block.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_and_energy_records`
- Sources: `fao-gap-framework-2003`

###### Diesel fuel (`mobile_machinery_fuel_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `mobile_machinery_fuel_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_irrigation_and_energy_records` for `orchard_cultivation`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_irrigation_and_energy_records`
- Sources: `route-energy-fao`

##### Waste flows

##### Elementary flows

###### Water resource withdrawal (`water_resource_withdrawal`)

Record natural-resource water withdrawn for irrigation or fertigation separately from delivered water and disclose return flow or consumption assumptions.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Reconcile source-meter or permit records to delivered orchard water and disclose the withdrawal-to-delivery balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_and_energy_records`
- Sources: `fao-crop-evapotranspiration-56`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Nitrous oxide to air (`nitrous_oxide_emission`)

Record or calculate direct and indirect nitrous oxide emissions attributable to managed nitrogen input and relevant orchard residues, retaining the selected calculation method.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Calculate from documented nitrogen input and the declared emission-factor method; do not double count emissions embedded in an upstream dataset.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_nutrient_and_protection_records`
- Sources: `ipcc-2019-refinement-volume-4`

### Process: Pomelo and grapefruit harvest and field handling (`harvest_and_field_handling`)

#### Inputs

##### Product flows

###### Diesel fuel (`harvest_support_fuel_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `harvest_support_fuel_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_harvest_and_packaging_records` for `harvest_and_field_handling`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `route-energy-fao`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fruit transferred to conditioning (`fruit_to_conditioning`)

Record harvested whole pomelo and grapefruit transferred from the orchard to the optional conditioning and farm-gate hand-off process.

- Selected flow: Harvested whole pomelo or grapefruit for conditioning
- Flow property / unit: Mass / kg
- Amount rule: Weigh fruit leaving the orchard block before sorting and reconcile it with field losses and culls.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `usda-ams-citrus-standards`

##### Waste flows

###### Harvest culls and damaged fruit (`harvest_culls`)

Record fruit rejected at harvest or field handling and state whether it is returned to soil, composted, fed, treated, or disposed.

- Selected flow: Pomelo and grapefruit culls and damaged fruit
- Flow property / unit: Mass / kg
- Amount rule: Weigh or estimate rejected fruit by declared fate and reconcile it with harvested and marketable mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `usda-ams-citrus-standards`; `mass-balance-identity`

##### Elementary flows

### Process: Pomelo and grapefruit conditioning and farm-gate hand-off (`conditioning_and_farm_gate`)

#### Inputs

##### Product flows

###### Conditioning and washing water (`conditioning_water`)

When washing or wet conditioning occurs before the declared gate, record water supplied and distinguish product-contact water from other facility water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Sum meter records or documented batch water balance for the fruit handled before the declared gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

###### Conditioning electricity (`conditioning_electricity`)

Record electricity for sorting, washing, cooling, ventilation, and packing equipment used before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Sum meters or invoices and allocate shared equipment to the represented fruit throughput.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1,000 kg marketable fresh whole output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `codex-fresh-produce-hygiene`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh whole pomelo or grapefruit (`farm_gate_product_output`)

Record the final marketable whole-fruit output at the declared farm-gate or pack-house hand-off, preserving the evidence gap product identity until verified.

- Selected flow: Pomelos and grapefruits `01323c69-b85f-4716-88f2-718888f2f780`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Weigh accepted fruit at the declared gate after sorting, washing, cooling, and packing that are inside the boundary.

- Amount rule: 1000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: 1,000 kg reference output.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_packaging_records`
- Sources: `usda-ams-citrus-standards`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_citrus_output` | orchard and harvest operations producing pomelos, grapefruits, or multiple marketable grades | Allocate shared orchard and harvest inputs to product grades or species by measured marketable mass when the records support mass allocation. If quality grades have materially different economic functions, disclose and justify an alternative allocation before use. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_residue_fate` | culls, residues, and packaging waste | Treat culls, residues, and waste as waste flows unless a documented recipient and intended use support a co-product claim. Record any avoided-product or substitution claim separately from the foreground inventory. | `iso-14044-2006`; `mass-balance-identity` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_nutrient_and_protection_records` | Operation orchard_cultivation: Record herbicides, fungicides, insecticides, biological controls, and adjuvants crossing the boundary, retaining formulated product and active-ingredient quantities where available. Original quantity method: Sum invoices, spray logs, application records, and stock reconciliation for the represented orchard year. |
| `mobile_machinery_fuel_specific_input` | `cp_irrigation_and_energy_records` | Operation orchard_cultivation: Record fuel used by tractors, sprayers, mowers, harvest aids, and other mobile machinery assigned to the orchard year. Original quantity method: Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented orchard year. |
| `harvest_crates_specific_input` | `cp_harvest_and_packaging_records` | Operation harvest_and_field_handling: Record reusable crates, bins, or palletized harvest containers entering the harvest operation and disclose the allocation basis for shared assets. Original quantity method: Record container counts, material type, tare, reuse cycles, and loss or replacement records attributable to the campaign. |
| `harvest_support_fuel_specific_input` | `cp_harvest_and_packaging_records` | Operation harvest_and_field_handling: Record fuel used for harvest aids, orchard access, and movement of fruit to the on-farm handling point before the declared gate. Original quantity method: Sum campaign fuel records or machine-hour calculations and allocate them to the represented harvest output. |
| `primary_packaging_specific_input` | `cp_harvest_and_packaging_records` | Operation conditioning_and_farm_gate: When primary packaging crosses the boundary before the declared gate, record the actual packaging material, mass, format, and reuse or loss status. Original quantity method: Sum packaging issue records and allocate packaging mass to packed fruit output; record loose or reusable formats separately. |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `orchard_establishment` | planting material and occupied area | nursery invoices, planting maps, and orchard register | species, cultivar, lot, tree count, area, planting date, orchard age | reconcile supplier records, field map, and planting register; Raw aggregation and attribution: aggregate by block and attributed orchard-year output | plant, kg, ha, ha*a | per establishment event | establishment period and attribution years | each orchard block | per declared reference flow | invoice, field map, planting register, and age disclosure |
| `cp_nutrient_and_protection_records` | `orchard_cultivation` | fertilizer, soil amendment, crop protection, and nutrient-related emissions | invoices, labels, spray logs, nutrient plan, and stock records | product, formulation, nutrient fraction, active ingredient, date, block, mass, application method | reconcile issue records with field logs and supplier documents; Raw aggregation and attribution: aggregate by product and block, then normalize to accepted output `crop_protection_input_specific_input`: Operation orchard_cultivation: Record herbicides, fungicides, insecticides, biological controls, and adjuvants crossing the boundary, retaining formulated product and active-ingredient quantities where available. Original quantity method: Sum invoices, spray logs, application records, and stock reconciliation for the represented orchard year. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg product, kg nutrient | each application and monthly reconciliation | complete represented orchard year | each orchard block | per declared reference flow | supplier label, application log, and supervisor review |
| `cp_irrigation_and_energy_records` | `orchard_cultivation` | irrigation, water withdrawal, electricity, and machinery fuel | meters, permits, invoices, fuel logs, or equipment records | source, meter, volume, energy, fuel, date, block, allocation basis | direct meter reading or documented water and energy balance; Raw aggregation and attribution: reconcile source totals, delivered totals, and shared-service allocation `mobile_machinery_fuel_specific_input`: Operation orchard_cultivation: Record fuel used by tractors, sprayers, mowers, harvest aids, and other mobile machinery assigned to the orchard year. Original quantity method: Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented orchard year. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | m3, kWh, MJ, kg | per event or monthly | complete represented orchard year | each orchard block and shared facility | per declared reference flow | meter check, invoice, permit, and allocation worksheet |
| `cp_harvest_and_packaging_records` | `harvest_and_field_handling` and `conditioning_and_farm_gate` | harvest, fruit mass, culls, water, packaging, electricity, and waste | weigh tickets, harvest logs, pack-house records, utility meters, and waste records | date, block, lot, accepted mass, cull mass, material, water, energy, waste fate, gate | weigh each lot or use a documented calibrated estimation method; Raw aggregation and attribution: reconcile harvested, accepted, cull, and waste streams by lot `harvest_crates_specific_input`: Operation harvest_and_field_handling: Record reusable crates, bins, or palletized harvest containers entering the harvest operation and disclose the allocation basis for shared assets. Original quantity method: Record container counts, material type, tare, reuse cycles, and loss or replacement records attributable to the campaign. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `harvest_support_fuel_specific_input`: Operation harvest_and_field_handling: Record fuel used for harvest aids, orchard access, and movement of fruit to the on-farm handling point before the declared gate. Original quantity method: Sum campaign fuel records or machine-hour calculations and allocate them to the represented harvest output. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `primary_packaging_specific_input`: Operation conditioning_and_farm_gate: When primary packaging crosses the boundary before the declared gate, record the actual packaging material, mass, format, and reuse or loss status. Original quantity method: Sum packaging issue records and allocate packaging mass to packed fruit output; record loose or reusable formats separately. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `conditioning_waste_specific_output`: Record fruit culls, removed soil or organic matter, used wash materials, and discarded packaging generated before the declared gate, separated by fate. Weigh or estimate each waste stream and reconcile it with input packaging and fruit mass. This is a mandatory specific-output collection requirement, not a selected exchange. Preserve every actual waste, residue, reject and co-product from this operation. Create separate cards for physically distinct streams with actual material, composition/state, quantity, receiving route and Product/Waste role before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. A genuinely mixed stream may remain one physically defined mixture supported by composition records; never invent separation or count its components again. Keep liquid and solid treatment quantities separate. Preserve original period, output balance, reference normalization and allocation rules; missing records do not establish zero or exclusion. `mass-balance-identity`; `codex-fresh-produce-hygiene` | kg, m3, kWh, unit | each harvest lot and campaign reconciliation | complete harvest campaign | orchard block and gate facility | per declared reference flow | calibrated scale, lot record, meter, waste receipt, and gate declaration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_orchard_year_normalization` | all crop-year rows | Divide the attributed orchard-year inventory by accepted fresh whole fruit mass at the declared gate and scale to 1,000 kg. | block area, attributed input records, accepted output mass | normalized PCR inventory | `mass-balance-identity` |
| `calc_nutrient_equivalents` | fertilizer and soil-amendment rows | nutrient equivalent = formulated product mass × documented nutrient fraction; retain product mass and nutrient basis as separate fields. | product mass, N/P2O5/K2O fraction | nutrient-equivalent inputs | `fao-gap-framework-2003` |
| `calc_water_withdrawal_balance` | irrigation and fertigation | withdrawal = source withdrawal records reconciled to delivered water and declared return or consumption balance; do not infer withdrawal from rainfall alone. | source meters, delivered water, return flow | water withdrawal and delivered irrigation inputs | `fao-crop-evapotranspiration-56` |
| `calc_citrus_mass_balance` | harvest, conditioning, and gate output | harvested mass = accepted product + culls + recorded field, sorting, and packing losses; investigate unexplained residual mass. | lot weights and waste records | reconciled product and waste streams | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | product and input rows | Declare species or cultivar, orchard block, lot, product formulation, and gate state; retain evidence gap flow identities as evidence gap rather than substituting a nearby flow. | lot record, supplier document, and review note |
| `quality_measurement` | mass, water, energy, and fuel rows | Use calibrated scales and meters where available; otherwise document the estimation method and uncertainty. | calibration record, meter check, or estimation worksheet |
| `quality_temporal` | all crop-year rows | Cover the complete represented orchard year and harvest campaign, including all harvest rounds and relevant applications. | crop calendar, application log, and harvest register |
| `quality_completeness` | input, output, and waste rows | Reconcile input records, accepted output, culls, residues, and packaging waste; explain missing records or material residuals. | mass-balance worksheet and waste receipts |
| `quality_disclosure` | dataset metadata | Disclose boundary gate, orchard age, allocation basis, water source, nutrient basis, crop-protection program, and identity evidence gaps. | dataset metadata and practitioner review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_mass_balance` | harvest, conditioning, and gate output | Accepted product, culls, and recorded losses must reconcile to harvested fruit within the declared measurement tolerance; unexplained residuals require review. | `mass-balance-identity` |
| `validate_input_records` | orchard cultivation and conditioning | Every foreground quantity must identify the orchard block or facility, crop-year or campaign period, unit, collection protocol, and allocation basis when shared. | `fao-gap-framework-2003`; `iso-14044-2006` |
| `validate_reference_qualifiers` | reference flow and dataset metadata | The data package must declare species or cultivar group, geography, orchard age, production year, gate state, marketable grade, and identity evidence gap status before downstream use. | `codex-fresh-produce-hygiene`; `usda-ams-citrus-standards` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh whole pomelos and grapefruits |
| downstream_use | May be used as a secondary dataset for orchard production and as a background dataset only when the declared gate, geography, year, and product state are compatible |
| allowed_use | Comparative or attributional modelling of fresh whole pomelo and grapefruit production through the declared farm-gate or pack-house gate |
| excluded_use | Juice, processed citrus, retail, consumer use, post-gate distribution, or any study that omits the required product, gate, crop-year, or residue qualifiers |
| required_metadata | species and cultivar group, geography, orchard block and age, crop-year, irrigation source, nutrient and protection basis, harvest campaign, marketable output, cull and waste fate, gate state, and identity evidence gap declarations |
| required_quality_disclosure | measurement basis, temporal coverage, allocation method, mass-balance result, water and nutrient accounting method, data gaps, and flow-identity status |
| update_trigger | New orchard route, irrigation or crop-protection technology, material change in yield or grade mix, revised nutrient or emission method, changed gate state, or resolution of an identity evidence gap |

Evidence applicability: cited general farm-record and postharvest frameworks do not supply crop-specific yields, lifetimes, gate cutoffs or LCA allocation defaults. Those are this PCR methodology decisions; qualify them by the actual species, route and period and obtain compatible agronomic evidence before asserting completeness. Provisional author ranges are screening aids, not empirical acceptance limits or substituted measurements.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | irrigation and water-balance collection rules |
| `ipcc-2019-refinement-volume-4` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 | managed-soil and crop-residue emission calculation |
| `codex-fresh-produce-hygiene` | standard | Codex code of hygienic practice for fresh fruits and vegetables | washing, conditioning, packaging, and gate qualifiers |
| `usda-ams-citrus-standards` | official_guidance | USDA Agricultural Marketing Service citrus grade and condition standards | marketable output, grade, culls, and gate quality |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management—Life cycle assessment—Requirements and guidelines | allocation and co-product handling |
| `mass-balance-identity` | method_factor | PCR mass-balance and identity reconciliation method | product, cull, waste, and gate-output reconciliation |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | Generic monitoring and farm-record context only; crop-specific routes, lifetimes, quantitative ranges and LCA allocation are PCR choices requiring separate applicable evidence. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
