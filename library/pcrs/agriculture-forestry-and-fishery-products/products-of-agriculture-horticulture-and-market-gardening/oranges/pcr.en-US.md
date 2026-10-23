---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oranges
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Oranges

## 1. Scope and Applicability

This PCR covers fresh whole oranges produced in a managed citrus orchard from the declared establishment or crop-cycle starting condition through harvest and the declared farm-gate condition. The product may be sold loose or receive sorting, washing, or temporary farm-gate protection when those operations are included in the foreground record. Cultivar, rootstock, orchard age, production route, region, maturity, grade, and accepted-yield basis must be declared.

It excludes orange juice, concentrate, oils, dried or candied fruit, retail distribution, consumer use, and downstream processing. It also excludes transport after the declared farm gate unless transport is explicitly included as a separate foreground process.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oranges |
| classification_refs | CPC 3.0:01323; mapping relation: exact |
| covered_products | Fresh whole oranges from managed citrus orchard production |
| excluded_products | Juice, concentrate, essential oil, dried or preserved oranges, retail or consumer-ready products, and post-farm-gate transport |
| representative_product | Fresh whole oranges accepted at the declared farm gate |
| production_route | Perennial citrus orchard establishment, cultivation, harvest, and optional farm-gate sorting or packing |
| market_state | Fresh, whole, accepted farm-gate oranges with declared maturity and grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh whole oranges accepted at farm gate |
| How much | 1 kg accepted oranges |
| How well | Actual cultivar or variety where known, rootstock or orchard route, maturity, grade, moisture condition, and accepted farm-gate quality |
| How long or cycle | One declared production year or crop cycle; orchard establishment and productive life are disclosed |
| reference_flow_link | orange_farm_gate_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh whole oranges at farm gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | orange cultivar or variety; rootstock where known; region; orchard age and production route; production-year or crop-cycle basis; maturity and grade; accepted yield; farm-gate condition; rejects and co-products; post-harvest destination |

The reference product identity requires foreground binding before publication. This does not change the semantic reference flow or the product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and product-output normalization | Mass | kg | Normalize the inventory to 1 kg of accepted whole oranges at the declared farm gate. |
| `perennial_time_basis` | orchard establishment and productive cultivation | Area-time and accepted output | ha year; kg | Disclose productive life and allocate establishment, replacement, and non-bearing inputs over the declared productive period and accepted yield. |
| `nutrient_product_and_basis` | fertilizer and soil-amendment input | Product mass and nutrient basis | kg product; kg N, P2O5, or K2O | Give every actual fertilizer or amendment product its own card, retaining physical product mass, formulation, nutrient composition and application records. Nutrient quantities are not additional inputs of the same product; collection or group identifiers cannot substitute for a concrete flow identity. |
| `water_measurement_basis` | irrigation and source withdrawal | Volume | m3 | Prefer meter or delivery records, distinguish irrigation applied from source withdrawal, and disclose the water-balance method when direct measurement is unavailable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed orchard land or the declared establishment event enters the production system; when establishment is excluded, the existing orchard is declared as the starting condition |
| starting_condition_role | Foreground perennial agricultural production start with orchard age, land history, and establishment allocation disclosed |
| product_classification_scope | CPC 3.0:01323 fresh whole oranges |
| recursive_input_rule | Record purchased or transferred same-category planting material only when it crosses the foreground boundary; self-propagated material requires origin and allocation disclosure rather than recursive substitution |
| upstream_dataset_requirement | Use upstream datasets for nursery material, fertilizer, soil amendments, crop protection, energy, packaging, and contracted services when they are not foreground operations |
| disclosure | Declare cultivar or variety, route, orchard age, establishment inclusion, productive life, crop-cycle or orchard-year basis, accepted yield, farm-gate condition, and rejected-fruit destination |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_condition` | all processes | Start at the declared orchard-establishment or production-year condition and include foreground inputs, resource use, emissions, harvest, and accepted farm-gate orange output; exclude retail, consumer use, and downstream processing. | `fao-gap-framework-2003`, `codex-fresh-fruits-vegetables-cxc-53` |
| `boundary_perennial_disclosure` | establishment and cultivation | Declare orchard age, productive life, replacement or replanting, and whether establishment is included; do not combine annual and perennial time bases without an allocation calculation. | `fao-gap-framework-2003` |
| `boundary_recursive_input` | planting material | Record the actual crossing point of purchased or transferred planting material; disclose self-propagation and parent-stock allocation when the material is produced within the foreground system. | `fao-gap-framework-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01323_orchard_establishment` | Citrus orchard establishment and renewal | conditional | Include when planting, grafting, site preparation, replacement, or establishment inputs contribute to the declared production period. | establishment and perennial time-basis node | per established area allocated to accepted orchard-year output |
| `p01323_orchard_cultivation` | Orange orchard cultivation | required | Include field and orchard management during the declared production year or crop cycle. | managed biological production node | per orchard-year and 1 kg accepted oranges |
| `p01323_harvest_farm_gate` | Orange harvest and farm-gate handling | required | Include harvest, on-farm sorting or washing, temporary protection, and optional farm-gate packing when present. | harvest and delivery node | per harvested and accepted orange mass |

### Process: Citrus orchard establishment and renewal (`p01323_orchard_establishment`)

#### Inputs

##### Product flows

###### Planting or grafting material supplied (`orange_planting_material_input`)

Record nursery trees, rootstocks, grafts, or other planting material crossing into orchard establishment. Declare whether the material is purchased, transferred, or self-propagated and retain the count-to-mass or item-basis conversion used.

- Selected flow: Orange planting or grafting material for orchard establishment
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured number and type of plants by block and establishment year; calculate mass only when required by the selected dataset representation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per established area allocated to 1 kg accepted oranges.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`

###### Urea fertilizer (`p01323_orchard_establishment_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for p01323_orchard_establishment_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per established area allocated to 1 kg accepted oranges.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_establishment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`p01323_orchard_establishment_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_establishment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`p01323_orchard_establishment_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_establishment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`p01323_orchard_establishment_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_establishment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`p01323_orchard_establishment_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_establishment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`p01323_orchard_establishment_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_establishment_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-organic-nutrients`

##### Waste flows

##### Elementary flows

###### Orchard land occupation during establishment (`orange_establishment_land_occupation`)

Record the area and duration occupied while the orchard is established, including non-bearing years when they are part of the declared system boundary.

- Selected flow: Land occupation for citrus orchard production
- Flow property / unit: Area-time / m2*a or ha year
- Amount rule: orchard area multiplied by disclosed occupation duration and allocated over accepted orange output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per established area allocated to 1 kg accepted oranges.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`

#### Outputs

##### Product flows

###### Established orchard capacity transferred to cultivation (`orange_established_orchard_capacity`)

Record this internal hand-off only when establishment is modelled as a separate process. It is not saleable orange product and must not be counted as a second product output.

- Selected flow: Established citrus orchard production capacity
- Flow property / unit: Area or production capacity / ha or orchard-year
- Amount rule: documented establishment completion and productive-period allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: linked to declared orchard-year accepted orange output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`

##### Waste flows


###### Establishment and renewal residues to declared destination (`orange_establishment_residue`)

Record removed vegetation, failed plants, rootstock residues, and renewal biomass leaving the establishment process. Retained mulch or compost must be identified as an internal destination rather than counted as exported waste.

- Selected flow: Citrus establishment biomass residue to declared destination
- Flow property / unit: Mass / kg as received or kg dry matter
- Amount rule: measured or calculated residue mass by block and event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per established area allocated to 1 kg accepted oranges.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_establishment_records`
- Sources: `fao-gap-framework-2003`


##### Elementary flows

### Process: Orange orchard cultivation (`p01323_orchard_cultivation`)

#### Inputs

##### Product flows

###### Urea fertilizer (`p01323_orchard_cultivation_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for p01323_orchard_cultivation_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per orchard-year and 1 kg accepted oranges.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`p01323_orchard_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`p01323_orchard_cultivation_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`p01323_orchard_cultivation_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`p01323_orchard_cultivation_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`p01323_orchard_cultivation_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_01323_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture`; `fao-organic-nutrients`

###### Irrigation water applied (`orange_irrigation_water_input`)

Record irrigation delivered to the orchard and distinguish it from source withdrawal and rainfall. State the measurement or water-balance method.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Amount rule: meter, delivery record, or documented water balance for the orchard block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per orchard-year and 1 kg accepted oranges.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`

###### Diesel fuel (`orange_cultivation_energy_input_diesel`)

Actual diesel orchard tractor use for mowing, spraying, pruning support and field movement; other powertrains require their own records.

Activate only when equipment and purchase records identify this fuel at this node. Record grade, formulation, supplier and actual mass; convert volume using documented density, not a default. The UUID identifies a fuel product, not a combustion service or emission factor. Account for actual foreground combustion separately without duplicating an inclusive upstream service.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_01323_cultivation_records`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `route-energy-fao`

Apply `orange_cultivation_energy_input_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

##### Waste flows

##### Elementary flows

###### Orchard land occupation during productive year (`orange_cultivation_land_occupation`)

Record occupied orchard area and the productive-year duration used for normalization.

- Selected flow: Land occupation for citrus orchard production
- Flow property / unit: Area-time / m2*a or ha year
- Amount rule: mapped orchard area multiplied by productive-year duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per orchard-year and 1 kg accepted oranges.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`

#### Outputs

##### Elementary flows

###### Direct nitrous oxide emissions from managed orchard soil (`orange_soil_n2o_emission`)

Record direct managed-soil emissions calculated from applied nitrogen and the declared emission method; retain the applied nutrient basis separately.

- Selected flow: Nitrous oxide emission to air from managed orchard soil
- Flow property / unit: Mass / kg N2O
- Amount rule: calculate from collected nitrogen input and the declared emissions method, or use site measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per orchard-year and 1 kg accepted oranges.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `ipcc-2019-refinement-agriculture`

The final exchange is kg N2O. Keep species-specific elemental-N activity and any N-based factor/range in a separate calculation ledger. Convert that species-specific N mass by 44/28 exactly once before normalization; never reconvert compound mass or apply an N-based range directly to compound mass. A total nitrogen-loss pool is not this species without a supported split. Retain the actual receiving compartment and method boundaries; unknown identity or activity is not zero.

##### Waste flows

###### Pruning and orchard residues to declared destination (`orange_pruning_residue`)

Record prunings, removed branches, and other orchard residues leaving the foreground system. State whether they are mulched, burned, composted, treated, or removed.

- Selected flow: Citrus orchard residue to declared destination
- Flow property / unit: Mass / kg as received or kg dry matter
- Amount rule: weighed residue, volume-to-mass conversion, or documented fraction of pruning records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per orchard-year and 1 kg accepted oranges.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_cultivation_records`
- Sources: `fao-gap-framework-2003`

### Process: Orange harvest and farm-gate handling (`p01323_harvest_farm_gate`)

#### Inputs

##### Product flows

##### Waste flows

##### Product flows

#### Outputs

##### Elementary flows

##### Product flows

###### Accepted fresh oranges at farm gate (`orange_farm_gate_product`)

Record the accepted whole-orange output that meets the declared farm-gate maturity, grade, and quality qualifiers. This is the sole reference product output.

- Selected flow: Fresh whole oranges at farm gate
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: weigh accepted output after harvest and any included farm-gate handling

- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg accepted oranges at farm gate.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_01323_harvest_records`
- Sources: `fao-gap-framework-2003`, `codex-fresh-fruits-vegetables-cxc-53`


##### Waste flows

###### Harvest rejects and fruit losses to declared destination (`orange_harvest_rejects`)

Record oranges rejected during harvest, sorting, washing, or farm-gate inspection and identify whether they are sold into another product route, fed, composted, treated, or discarded.

- Selected flow: Rejected or lost oranges to declared destination
- Flow property / unit: Mass / kg
- Amount rule: weigh rejects or calculate from harvested, accepted, and destination quantities
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvested and accepted orange mass.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_01323_harvest_records`
- Sources: `codex-fresh-fruits-vegetables-cxc-53`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_output` | orchard cultivation and harvest | Normalize all inputs and emissions to accepted orange output. Report harvested but rejected fruit separately and do not silently include it in the reference product. | `codex-fresh-fruits-vegetables-cxc-53` |
| `allocation_establishment_over_life` | orchard establishment and renewal | Allocate establishment and renewal burdens over the disclosed productive life and accepted yield; disclose the allocation period and replacement events. | `fao-gap-framework-2003` |
| `allocation_co_products` | rejected fruit and secondary routes | If rejected fruit or another co-product has a separately documented market route, apply a documented physical or economic allocation rule and report the chosen basis; otherwise assign the declared destination treatment without claiming a second reference product. | `fao-gap-framework-2003` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `orange_crop_protection_input_specific_input` | `cp_01323_cultivation_records` | Operation p01323_orchard_cultivation: Record the actual formulated crop-protection products applied, including product name, active ingredient, rate, treated area, and application event. Original quantity method: product invoice, spray log, or contractor record reconciled to treated area |
| `orange_packaging_input_specific_input` | `cp_01323_harvest_records` | Operation p01323_harvest_farm_gate: Record crates, cartons, pallets, or other packaging only when it crosses the declared farm-gate handling boundary. State reuse, return, and loss assumptions. Original quantity method: packaging issue records divided by accepted orange output, with reuse cycles documented |


### Route-specific energy identification requirements

Select energy exchanges from the actual product state, operation, equipment and supply records. The conditional cards below are not a mandatory or exhaustive fuel list. For each requirement, document applicability and the used carrier, supplier, service period, native quantity and allocation; add a separate physically specific card and verify its UUID for any actual input not yet represented. An unidentified input remains an explicit completeness gap, never a zero or a generic energy exchange. Evidence of manual work, ambient drying or a bypass can justify non-use only for the affected operation. Preserve every required operation even when no example card is supplied.

Separate purchased supply from on-site conversion. Link self-generated electricity internally to the foreground generator and count its actual fuel and emissions there once; do not also charge a purchased-electricity supply for the same internal transfer. Likewise do not count supplier-side fuel again with purchased heat. Reconcile shared meters and contractor-included energy against existing cards, with one physical quantity assigned once. Retain source quantities, output throughput, shared-service allocation and excluded post-gate activities. For each carrier, apply period/output attribution once and scale to the declared reference quantity using matched accepted final output in the same product unit; do not normalize an already normalized amount again. Process-native intensities require a measured throughput link to that final output. These requirements do not set a consumption default or certify dataset completeness.

| requirement_id | collection_protocol_id | Required operation and evidence |
| --- | --- | --- |
| `orange_cultivation_energy_input_identification` | `cp_01323_cultivation_records` | Actual diesel orchard tractor use for mowing, spraying, pruning support and field movement; other powertrains require their own records. Raw activity or stage basis: per orchard-year and 1 kg accepted oranges. (`route-energy-fao`) |
| `orange_harvest_energy_input_identification` | `cp_01323_harvest_records` | Actual picking and collection route, bin movement and pre-gate handling. Determine equipment and contractor inclusions before adding carriers; exclude post-gate transport. Raw activity or stage basis: per harvested and accepted orange mass. (`route-energy-fao`) |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_01323_establishment_records` | `p01323_orchard_establishment` | planting, nutrients, residues, land, orchard capacity | nursery records, planting logs, block maps, renewal records | block; cultivar; rootstock; plant count; product; product mass; nutrient analysis; area; year; residue destination | reconcile invoices, field logs, maps, and measured or documented conversions; Raw aggregation and attribution: aggregate by block and allocate over productive life and accepted output | kg, item, kg nutrient, ha year | each establishment or renewal event | full establishment and disclosed allocation period | orchard block | per declared reference flow | signed logs, invoices, maps, product analyses |
| `cp_01323_cultivation_records` | `p01323_orchard_cultivation` | nutrients, irrigation, fuel, crop protection, residues, emissions; required specific-emission identification and calculation | input invoices, spray logs, meter records, machine records, soil or water balance | block; date; product; quantity; nutrient basis; irrigation volume; fuel; machine hours; treated area; residue mass; emission method; substance name; receiving compartment; reported unit and elemental/compound basis; method and factor source; actual activity; period; quantity uncertainty; related existing exchanges | monthly or event-level reconciliation to block area and orchard-year output; Raw aggregation and attribution: sum events, preserve product and nutrient bases, normalize to accepted output Route-specific requirements: `orange_cultivation_energy_input_identification`: Actual diesel orchard tractor use for mowing, spraying, pruning support and field movement; other powertrains require their own records. Raw activity or stage basis: per orchard-year and 1 kg accepted oranges. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. `orange_crop_protection_input_specific_input`: Operation p01323_orchard_cultivation: Record the actual formulated crop-protection products applied, including product name, active ingredient, rate, treated area, and application event. Original quantity method: product invoice, spray log, or contractor record reconciled to treated area Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.; orange_nitrogen_water_emission_specific_emission: Determine evidenced nitrogen runoff and leaching for the actual orchard-year from nutrient and water-balance records. Identify the reported substance, dissolved/particulate basis where relevant, and actual receiving water or soil compartment. Neither total N nor a balance residual establishes nitrate identity. Preserve orchard-year attribution and accepted-orange output normalization. This is a mandatory identification and calculation requirement, not an exchange. Before dataset completeness, instantiate one concrete elementary card per actual substance and receiving compartment. Retain kg substance separately from kg elemental N; convert only from the method-reported basis using the documented composition or stoichiometric fraction of the identified species. Never equate all nitrogen with a chosen compound or add elemental-N and compound masses as separate releases. Preserve source activity, factor units, period, uncertainty, boundary and original normalization; link to an existing matching card instead of counting a duplicate. Verify a compatible UUID or explicitly register the concrete unresolved identity. Missing identity, method or activity evidence does not establish zero or justify omission. | kg product, kg nutrient, m3, MJ, kg residue; kg of each identified substance and kg N recorded separately | each event, aggregated monthly | one production year or declared crop cycle | orchard block and site | per declared reference flow | meter checks, invoices, spray records, factor documentation, mass balance |
| `cp_01323_harvest_records` | `p01323_harvest_farm_gate` | harvest energy, packaging, rejects, emissions, accepted product; required specific-emission identification and calculation | harvest tickets, weighbridge records, packing records, destination records | date; block; harvested mass; accepted mass; reject mass; destination; fuel or energy; package type; package mass; reuse cycles; substance name; receiving compartment; reported unit and elemental/compound basis; method and factor source; actual activity; period; quantity uncertainty; related existing exchanges | reconcile harvest and destination masses to farm-gate product totals; Raw aggregation and attribution: aggregate lots and preserve separate accepted, rejected, and co-product routes Route-specific requirements: `orange_harvest_energy_input_identification`: Actual picking and collection route, bin movement and pre-gate handling. Determine equipment and contractor inclusions before adding carriers; exclude post-gate transport. Raw activity or stage basis: per harvested and accepted orange mass. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. `orange_packaging_input_specific_input`: Operation p01323_harvest_farm_gate: Record crates, cartons, pallets, or other packaging only when it crosses the declared farm-gate handling boundary. State reuse, return, and loss assumptions. Original quantity method: packaging issue records divided by accepted orange output, with reuse cycles documented Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.; orange_farm_gate_emissions_specific_emission: For actual washing, handling and on-farm combustion inside the declared gate, identify each direct pollutant and receiving medium from measurements or an applicable activity-based method. Distinguish a wastewater transfer to treatment from the actual discharge of its pollutants; reconcile onsite and provider responsibilities and avoid duplicating combustion covered by an inclusive service. Preserve harvested/accepted-orange throughput and gate attribution. This is a mandatory identification and calculation requirement, not an exchange. Before dataset completeness, instantiate one concrete elementary card per actual substance and receiving compartment. Retain kg substance separately from kg elemental N; convert only from the method-reported basis using the documented composition or stoichiometric fraction of the identified species. Never equate all nitrogen with a chosen compound or add elemental-N and compound masses as separate releases. Preserve source activity, factor units, period, uncertainty, boundary and original normalization; link to an existing matching card instead of counting a duplicate. Verify a compatible UUID or explicitly register the concrete unresolved identity. Missing identity, method or activity evidence does not establish zero or justify omission. | kg, MJ, kg packaging, item; kg of each identified substance and kg N recorded separately | each harvest lot | full harvest season and declared farm-gate period | orchard and handling point | per declared reference flow | calibrated scales, lot tickets, package issue records, destination receipts |
| `cp_phase1_environment_coverage` | p01323_orchard_establishment | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_output_normalization` | all quantitative rows | Divide the annual or crop-cycle inventory amount by accepted whole-orange mass at farm gate and report per 1 kg accepted output. | accepted mass; row amount | normalized row value | `mass-balance-identity` |
| `calc_establishment_allocation` | establishment rows | Allocate establishment and renewal amount by declared productive-life years and accepted yield, preserving the disclosed allocation period. | establishment amount; productive life; accepted yield | allocated orchard-year amount | `fao-gap-framework-2003` |
| `calc_nutrient_basis` | nutrient input rows | Retain product mass and calculate nutrient mass from product analysis and applied product quantity; do not replace the product input with nutrient mass. | product quantity; product analysis | product mass and nutrient mass | `ipcc-2019-refinement-agriculture` |
| `calc_reject_mass_balance` | harvest rejects and product output | Check harvested mass against accepted output, rejects, co-products, and recorded stock change; explain any evidence gap difference. | harvested; accepted; reject; co-product; stock change | reconciled mass balance | `mass-balance-identity` |
| `orange_nitrogen_water_emission_specific_emission` | `p01323_orchard_cultivation` | Determine evidenced nitrogen runoff and leaching for the actual orchard-year from nutrient and water-balance records. Identify the reported substance, dissolved/particulate basis where relevant, and actual receiving water or soil compartment. Neither total N nor a balance residual establishes nitrate identity. Preserve orchard-year attribution and accepted-orange output normalization. This is a mandatory identification and calculation requirement, not an exchange. Before dataset completeness, instantiate one concrete elementary card per actual substance and receiving compartment. Retain kg substance separately from kg elemental N; convert only from the method-reported basis using the documented composition or stoichiometric fraction of the identified species. Never equate all nitrogen with a chosen compound or add elemental-N and compound masses as separate releases. Preserve source activity, factor units, period, uncertainty, boundary and original normalization; link to an existing matching card instead of counting a duplicate. Verify a compatible UUID or explicitly register the concrete unresolved identity. Missing identity, method or activity evidence does not establish zero or justify omission. | `cp_01323_cultivation_records` | separate substance/compartment emissions and elemental ledgers | `ipcc-2019-refinement-agriculture` |
| `orange_farm_gate_emissions_specific_emission` | `p01323_harvest_farm_gate` | For actual washing, handling and on-farm combustion inside the declared gate, identify each direct pollutant and receiving medium from measurements or an applicable activity-based method. Distinguish a wastewater transfer to treatment from the actual discharge of its pollutants; reconcile onsite and provider responsibilities and avoid duplicating combustion covered by an inclusive service. Preserve harvested/accepted-orange throughput and gate attribution. This is a mandatory identification and calculation requirement, not an exchange. Before dataset completeness, instantiate one concrete elementary card per actual substance and receiving compartment. Retain kg substance separately from kg elemental N; convert only from the method-reported basis using the documented composition or stoichiometric fraction of the identified species. Never equate all nitrogen with a chosen compound or add elemental-N and compound masses as separate releases. Preserve source activity, factor units, period, uncertainty, boundary and original normalization; link to an existing matching card instead of counting a duplicate. Verify a compatible UUID or explicitly register the concrete unresolved identity. Missing identity, method or activity evidence does not establish zero or justify omission. | `cp_01323_harvest_records` | separate substance/compartment emissions and elemental ledgers | `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_01323_cultivation_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | product, route, and inputs | Identify cultivar or variety where known, orchard route, farm-gate condition, input products, and reject destinations. | product description, invoices, lot records |
| `quality_measurement` | mass, water, energy, and area-time rows | Use calibrated scales or meters where available; document conversions, factors, and uncertainty when direct measurement is unavailable. | calibration record, meter log, factor note |
| `quality_temporal` | all processes | Cover the complete declared production year or crop cycle and disclose missing events, exceptional weather, replanting, or off-season operations. | annual production log and gap note |
| `quality_completeness` | inventory and emissions | Reconcile purchased inputs, field records, harvest mass, accepted product, rejects, co-products, and destinations before normalization. | input reconciliation and mass balance |
| `quality_disclosure` | dataset metadata | State the starting condition, orchard age, productive-life allocation, region, yield basis, farm-gate boundary, and identity evidence gaps. | dataset metadata and process notes |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow | Reject a data package that omits cultivar or variety where known, route, orchard age or production-year basis, maturity, grade, farm-gate condition, accepted yield, or reject destination. | `codex-fresh-fruits-vegetables-cxc-53` |
| `validation_mass_balance` | harvest and farm-gate handling | Check harvested mass against accepted product, rejects, co-products, stock change, and documented measurement uncertainty; investigate unexplained imbalance. | `mass-balance-identity` |
| `validation_nutrient_and_water_basis` | cultivation | Confirm fertilizer product mass versus nutrient mass, irrigation applied versus source withdrawal, and the associated measurement or calculation method. | `ipcc-2019-refinement-agriculture`, `fao-gap-framework-2003` |
| `validation_perennial_allocation` | establishment and cultivation | Confirm productive-life allocation and prevent double counting of establishment, renewal, or orchard capacity across production years. | `fao-gap-framework-2003` |
| `validation_identity_evidence` | reference and unmapped flows | Preserve identity evidence gaps as explicit foreground-resolution requirements; do not substitute a nearby citrus or product flow merely to populate a UUID. | `tidas-flow-identity-policy` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset when the completed package passes its stated quality checks |
| downstream_use | Foreground orange-orchard process datasets, farm-gate orange supply-chain models, and lifecycle models using fresh whole oranges as an input |
| allowed_use | Regional or site-specific modelling when cultivar, route, time basis, yield, farm-gate condition, allocation, and data quality disclosure are retained |
| excluded_use | Juice, concentrate, oil, dried fruit, retail distribution, consumer use, and routes whose product identity or boundary is not disclosed |
| required_metadata | cultivar or variety; rootstock where known; region; orchard age; establishment inclusion; productive life; production-year or crop-cycle basis; accepted yield; maturity; grade; farm-gate condition; reject destinationss |
| required_quality_disclosure | temporal coverage, site scope, measurement and conversion method, nutrient and water basis, mass-balance result, allocation rule, and missing-data treatment |
| update_trigger | new orchard route, cultivar or market state; revised productive-life or yield evidence; changed concrete flow identity verification; resolved reference identity; or material change in boundary or allocation method |

Evidence applicability: cited general farm-record and postharvest frameworks do not supply crop-specific yields, lifetimes, gate cutoffs or LCA allocation defaults. Those are this PCR methodology decisions; qualify them by the actual species, route and period and obtain compatible agronomic evidence before asserting completeness. Provisional author ranges are screening aids, not empirical acceptance limits or substituted measurements.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-fresh-fruits-vegetables-cxc-53` | official_guidance | Codex guidance for fresh fruits and vegetables | product quality, handling, and farm-gate quality descriptors |
| `ipcc-2019-refinement-agriculture` | method_factor | IPCC 2019 Refinement, Volume 4 agriculture methods | managed-soil and nutrient-related emission calculations |
| `mass-balance-identity` | method_factor | conservation-of-mass method identity | harvest, reject, co-product, and accepted-output reconciliation |
| `tidas-flow-identity-policy` | official_guidance | repository flow-identity policy | semantic preservation and explicit coverage finding |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | Generic monitoring and farm-record context only; crop-specific routes, lifetimes, quantitative ranges and LCA allocation are PCR choices requiring separate applicable evidence. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
