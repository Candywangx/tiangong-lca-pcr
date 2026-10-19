---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mustard-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mustard seed

## 1. Scope and Applicability

This PCR covers managed mustard cultivation for seed, separate harvest, cleaning, drying or stabilization, grading, and accepted-seed transfer at the producer or primary-conditioning gate. Applicability to another mustard species requires species, cultivar, route, moisture basis, grade, geography and hand-off. Oil extraction/refining, meal or press cake, mustard flour, condiment manufacture, post-sale seed-treatment services, long-term warehousing and distribution beyond the hand-off are excluded. Rainfed/irrigated, manual/mechanized harvest and ambient/mechanical drying are evidenced route choices and may be aggregated only with recorded shares and separate inputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mustard-seed |
| classification_refs | CPC 3.0 01442; mapping relation: narrower |
| covered_products | Harvested and conditioned mustard seed, principally Brassica juncea, sold as an oilseed at producer/conditioner hand-off |
| excluded_products | Mustard oil, crude/refined oil, mustard meal/press cake, mustard flour, prepared mustard and other condiments, vegetative products |
| representative_product | Seed of B. juncea, clean and stabilized for hand-off |
| production_route | Managed cultivation → harvest and threshing → cleaning and drying/stabilization → grading; irrigation, mechanization and drying technology are parent-activity route deltas |
| market_state | Loose/bulk conditioned seed at producer/conditioner gate before oil, meal, flour or condiment manufacture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conditioned mustard seed accepted at the declared producer or primary-conditioning hand-off |
| How much | 1 kg as-received seed at declared moisture |
| How well | Species/cultivar, accepted grade, moisture and method, foreign-matter basis, intended market, geography, route and gate declared |
| How long or cycle | One declared crop cycle with conditioning linked to its harvest lot |
| reference_flow_link | mustard_seed_accepted |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Commodity mustard seed, actual species and state |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and cultivar; sowing or commodity use; accepted grade; as-received moisture and method; foreign matter basis; country/region; rainfed or irrigated; harvest method; drying route; producer/conditioner hand-off; Production mix, at plant |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and seed-state balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received mass and measured moisture together; convert by dry_mass = wet_mass × (1 − moisture_fraction) and retain the original. |
| `area_yield` | Cultivation and harvest normalization | Mass and area | kg/ha | Record cultivated and harvested area separately; accepted yield uses accepted reference product only. |
| `energy_consistency` | Machinery and conditioning energy | Energy or carrier property | MJ or kWh | Retain carrier and quantity; do not merge fuel and electricity without an explicit conversion. |

## 5. System Boundary

The boundary starts with prepared land and seed, nutrient, water, crop-protection and machinery-service inputs entering managed mustard production. It includes management, harvest/threshing, cleaning, drying/stabilization, grading, within-node rework and accepted-seed hand-off. Residues, field loss, removed foreign matter, downgraded seed and rejects are recorded. Oil/meal/condiment manufacture and downstream distribution are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field at crop-cycle start, with prior crop/land state and seed source disclosed |
| starting_condition_role | Entry condition for managed biological production |
| product_classification_scope | Mustard seed in CPC 3.0 01442; classification does not replace species and market-state qualifiers |
| recursive_input_rule | Same-category sowing seed is an upstream input with a provider dataset or foreground source, not recursively recreated |
| upstream_dataset_requirement | Supplier-specific or regionally representative data for seed, nutrients, energy, irrigation, crop protection and purchased services |
| disclosure | Disclose prior crop/land state, species/cultivar, cycle, geography, irrigation, harvest, drying, moisture/grade gate, rework and upstream datasets |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_crop` | Cultivation through hand-off | Include management, harvest, cleaning, stabilization and grading; exclude oil extraction, oil/meal and condiment manufacture. | `niphm-mustard-ipm`; `agmarknet-mustard-postharvest` |
| `boundary_route_delta` | Alternative routes | Treat rainfed/irrigated, manual/mechanized and ambient/mechanical alternatives as parent-activity deltas; do not merge mutually exclusive routes for one lot. | `nfsm-oilseeds-practices-2018`; `niphm-mustard-ipm` |
| `boundary_soil_emissions` | Managed-soil emissions | Calculate fertilizer-, residue-, urea- and lime-related elementary flows with the declared method and avoid double counting removed or burned residues. | `ipcc-2019-managed-soils` |
| `boundary_conditioning_gate` | Cleaning, drying, stabilization and grading | Retain before/after mass and moisture, grade, downgrade, rejects, foreign matter and hand-off; model storage beyond stabilization separately. | `agmarknet-mustard-postharvest` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | Managed mustard cultivation | `required` | one declared crop cycle; field/operation records | produce mature crop and account management inputs | kg raw-seed equivalent; ha |
| `harvest_capture` | Harvest, threshing and field capture | `required` | separate captured seed, residue and loss hand-off | convert mature crop to raw seed | kg raw seed |
| `clean_dry_stabilize` | Cleaning, drying and stabilization | `required` | primary conditioning lot/period; drying route declared | primary conditioning raw-to-prepared route; drying is a technology delta | kg stabilized seed |
| `grade_handoff` | Grading and producer/conditioner hand-off | `required` | reconcile accepted, downgraded and rejected states | create reference product and destinations; grading mode is a route delta | kg accepted seed |

### Process: Managed mustard cultivation (`managed_cultivation`)

Field-batch production indexed to field and crop cycle. Management inputs and outputs are assigned to that cycle.

#### Inputs

##### Product flows

###### Mustard sowing seed (`planting_seed`)

Same-category upstream seed input; retain provider and sowing-use qualifier.

- Selected flow: Mustard seed for sowing, actual species and seed grade
- Flow property / unit: Mass / kg
- Amount rule: measured seed issued to the field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per cultivated hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`
- Range: Mustard sowing rate
  - Range role: Typical range (`typical_range`)
  - Lower: 4
  - Upper: 5
  - Unit: kg/ha
  - Basis: per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `nfsm-oilseeds-practices-2018`

Identity applicability: Verify the concrete identity against the selected actual species/organ, sowing or commodity use, fresh/cured/dried and shell state, grade, provider and declared gate, with Mass/kg support. This PCR retains the semantic route and measurement definition; it does not assert that one fixed UUID covers all alternative states. A fresh-state flow cannot automatically bind a cured/dried output, an ambiguous nut/kernel flow cannot prove both states, and commodity seed cannot establish seed-for-sowing identity. Preserve a verified compatible existing binding only for its supported state; otherwise keep the UUID explicitly unresolved until detail-confirmed. Do not change the product boundary, quantity or route to force a match.

###### Urea fertilizer (`nutrient_supply_urea`)

**Collection scope and applicability for nutrient_supply.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Give each actual mineral fertilizer, organic fertilizer and amendment a separate concrete product card, retaining foreground composition.
Raw activity or stage basis: per cultivated hectare, then per kg accepted seed.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`; `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`nutrient_supply_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`; `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`nutrient_supply_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`; `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`nutrient_supply_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`; `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`nutrient_supply_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`; `ipcc-2019-managed-soils`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`nutrient_supply_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`; `ipcc-2019-managed-soils`; `fao-organic-nutrients`

###### Irrigation water supply (`irrigation_water`)

Conditional on the irrigated route; rainfall is not this product input.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Amount rule: Measure the actual supplied-water quantity crossing this product-supply boundary by event/use and matched period, in its declared native unit. A source-abstraction meter is not automatically the delivered-product quantity: reconcile distribution losses, external returns and storage change between the two measurement points. Direct natural abstraction owned by the foreground requires a separate source-specific elementary input and local supply operations; the internal delivery then cancels inside the aggregate boundary, rather than adding a second external water purchase. Purchased water inherits its compatible provider abstraction and supply burdens once. Retain rainfed/no-supply absence evidence; missing delivery/ownership evidence is incomplete, not zero. Attribute and normalize once to accepted final output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per cultivated hectare, then per kg accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `nfsm-oilseeds-practices-2018`
- Range: Irrigation volume provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3/ha
  - Basis: per cultivated hectare; foreground records control
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel (`cultivation_energy_diesel`)

Actual diesel machinery for mustard cultivation; identify pumping supply separately.

Activate only when equipment and purchase records identify this fuel at this node. Record grade, formulation, supplier and actual mass; convert volume using documented density, not a default. The UUID identifies a fuel product, not a combustion service or emission factor. Account for actual foreground combustion separately without duplicating an inclusive upstream service.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_cultivation_records`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cultivation_records`
- Sources: `route-energy-fao`

Apply `cultivation_energy_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature mustard crop transferred to harvest (`mature_crop`)

Internal foreground state linking cultivation to harvest; no external database identity is required.

- Selected flow: Mature standing mustard crop, internal foreground state
- Flow property / unit: Mass / kg raw-seed equivalent
- Amount rule: calculated from captured seed plus measured field losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Range: Mature-crop transfer reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg raw-seed equivalent/kg captured seed
  - Basis: per kg captured raw seed; provisional
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Cultivation residues and crop loss (`cultivation_residues`)

Internal/deferred until retention, removal, burning, recovery or disposal is declared.

- Selected flow: Cultivation residue and crop loss, internal/deferred disposition
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured or calculated dry matter by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per crop cycle and kg accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Cultivation residue provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg dry matter/kg accepted seed
  - Basis: per kg accepted seed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide to air (`managed_soil_emissions_n2o`)

**Collection scope and applicability for managed_soil_emissions.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Species- and compartment-specific emissions from fertilizer, residues, urea and lime are calculated by the declared method. Each substance and receiving compartment requires its own verified flow identity; unresolved identities remain explicit before publication.
Raw activity or stage basis: per kg accepted mustard seed.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Calculate from the actual pathway, substance-mass basis and receiving compartment; convert N- or C-based factors to this substance mass. Include only the foreground contribution and avoid duplicating linked upstream or treatment-service emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`; `ipcc-soils-n2o-2019`

###### Ammonia to air (`managed_soil_emissions_nh3`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Calculate from the actual pathway, substance-mass basis and receiving compartment; convert N- or C-based factors to this substance mass. Include only the foreground contribution and avoid duplicating linked upstream or treatment-service emissions.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`; `ipcc-soils-n2o-2019`

###### Nitrate to water (`managed_soil_emissions_nitrate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Calculate from the actual pathway, substance-mass basis and receiving compartment; convert N- or C-based factors to this substance mass. Include only the foreground contribution and avoid duplicating linked upstream or treatment-service emissions.

- Selected flow: Nitrate to water
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_cultivation_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`; `ipcc-soils-n2o-2019`

### Process: Harvest, threshing and field capture (`harvest_capture`)

This node is independent because it converts standing crop to collected seed and separately determines residue and shattering loss.

#### Inputs

##### Product flows

###### Mature crop from cultivation (`mature_crop_input`)

Internal transfer carrying field and crop-cycle identity.

- Selected flow: Mature standing mustard crop, internal foreground state
- Flow property / unit: Mass / kg raw-seed equivalent
- Amount rule: equals linked mature_crop output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `iso-14044-2006`
- Range: Internal transfer equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg linked output
  - Basis: per linked cultivation output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Diesel fuel (`harvest_energy_diesel`)

Actual diesel cutting, combining or threshing machinery for the selected mustard route.

Activate only when equipment and purchase records identify this fuel at this node. Record grade, formulation, supplier and actual mass; convert volume using documented density, not a default. The UUID identifies a fuel product, not a combustion service or emission factor. Account for actual foreground combustion separately without duplicating an inclusive upstream service.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_harvest_mass_balance`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `route-energy-fao`

Apply `harvest_energy_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw collected mustard seed (`raw_seed`)

Internal state passed to conditioning with lot and moisture retained.

- Selected flow: Raw collected mustard seed, internal foreground state
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass at harvest hand-off
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass_balance`
- Range: Raw seed capture fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg mature-crop equivalent
  - Basis: per kg mature-crop raw-seed equivalent; provisional
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residue and shattering loss (`harvest_loss`)

Keep retained, removed and burned residues and seed loss distinct by destination.

- Selected flow: Harvest residue and seed loss, internal/deferred disposition
- Flow property / unit: Mass / kg dry matter or kg seed
- Amount rule: mass-balance difference by material and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_mass_balance`
- Sources: `niphm-mustard-ipm`; `ipcc-2019-managed-soils`
- Range: Harvest loss provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg seed equivalent/kg captured seed
  - Basis: per kg captured raw seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning, drying and stabilization (`clean_dry_stabilize`)

Raw harvested seed becomes clean seed stabilized to a declared moisture; ambient and mechanical drying are distinct routes.

#### Inputs

##### Product flows

###### Raw seed from harvest (`raw_seed_input`)

Internal transfer retaining harvest lot, mass, moisture and impurity data.

- Selected flow: Raw collected mustard seed, internal foreground state
- Flow property / unit: Mass / kg
- Amount rule: equals linked raw_seed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per conditioning lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `iso-14044-2006`
- Range: Internal raw-seed transfer equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg linked output
  - Basis: per linked harvest output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Alternating current (`conditioning_energy_electricity`)

Actual electric cleaning equipment and drying fans; verified ambient drying has no assumed purchased heat and any heater needs separate identification.

Activate only for documented alternating-current consumption at this node. The identity leaves voltage, technology and provider unspecified; record them and select compatible upstream supply. Preserve measured kWh and convert exactly to MJ using 1 kWh = 3.6 MJ; do not interpret electric energy as combustion fuel or useful heat.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy (database reference property: net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_conditioning_records`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning_records`
- Sources: `route-energy-fao`

Apply `conditioning_energy_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

###### Process water for cleaning (`conditioning_water`)

Conditional on wet cleaning; verified dry cleaning has zero process-water input.

- Selected flow: Process water for seed cleaning
- Flow property / unit: Volume / m3
- Amount rule: measured delivered water by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per kg stabilized seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Cleaning-water provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3/kg stabilized seed
  - Basis: per kg stabilized seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized mustard seed (`stabilized_seed`)

Clean seed at declared moisture handed to grading as an internal state.

- Selected flow: Stabilized mustard seed, internal foreground state
- Flow property / unit: Mass / kg
- Amount rule: measured output mass and moisture after conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per conditioning lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `agmarknet-mustard-postharvest`
- Range: Stabilized seed moisture
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 8
  - Unit: percent wet basis
  - Basis: at short-term storage or hand-off
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `agmarknet-mustard-postharvest`

##### Waste flows

###### Removed foreign matter and conditioning loss (`conditioning_rejects`)

Keep foreign matter, dust and off-spec seed separate; rework returns once to this node.

- Selected flow: Conditioning rejects, internal/deferred disposition
- Flow property / unit: Mass / kg
- Amount rule: measured removals plus mass-balance loss excluding measured water removal
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per conditioning lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Range: Conditioning rejects provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg raw seed input
  - Basis: per kg raw seed input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Grading and producer/conditioner hand-off (`grade_handoff`)

Each lot or run reconciles accepted, downgraded, reworked and rejected states before hand-off.

#### Inputs

##### Product flows

###### Stabilized seed for grading (`stabilized_seed_input`)

Internal transfer retaining moisture, impurity and lot identity.

- Selected flow: Stabilized mustard seed, internal foreground state
- Flow property / unit: Mass / kg
- Amount rule: equals linked stabilized_seed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per grading lot or run.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Sources: `iso-14044-2006`
- Range: Internal stabilized-seed transfer equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg linked output
  - Basis: per linked conditioning output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Alternating current (`grading_energy_electricity`)

Actual electric screens, conveyors and changeover cleaning equipment.

Activate only for documented alternating-current consumption at this node. The identity leaves voltage, technology and provider unspecified; record them and select compatible upstream supply. Preserve measured kWh and convert exactly to MJ using 1 kWh = 3.6 MJ; do not interpret electric energy as combustion fuel or useful heat.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy (database reference property: net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect only this carrier quantity attributable to this node under `cp_grading_handoff`. Reconcile inclusive services and shared use once; scale the attributed quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit. Preserve process-native throughput records; do not renormalize a final-reference amount.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grading_handoff`
- Sources: `route-energy-fao`

Apply `grading_energy_identification` in Section 8. No numerical range or default is inherited from the former aggregate card.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mustard seed (`mustard_seed_accepted`)

Reference product at the producer or primary-conditioning hand-off; downgraded and rejected material is excluded.

- Selected flow: Commodity mustard seed, actual species and state
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: measured accepted mass at declared moisture and grade

- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: 1 kg accepted mustard seed.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Sources: `agmarknet-mustard-postharvest`
- Range: Reference-flow equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

Identity applicability: Verify the concrete identity against the selected actual species/organ, sowing or commodity use, fresh/cured/dried and shell state, grade, provider and declared gate, with Mass/kg support. This PCR retains the semantic route and measurement definition; it does not assert that one fixed UUID covers all alternative states. A fresh-state flow cannot automatically bind a cured/dried output, an ambiguous nut/kernel flow cannot prove both states, and commodity seed cannot establish seed-for-sowing identity. Preserve a verified compatible existing binding only for its supported state; otherwise keep the UUID explicitly unresolved until detail-confirmed. Do not change the product boundary, quantity or route to force a match.

###### Downgraded mustard seed (`downgraded_seed`)

Internal/deferred product state until an alternate destination dataset is established from foreground evidence.

- Selected flow: Downgraded mustard seed, internal/deferred destination
- Flow property / unit: Mass / kg
- Amount rule: measured downgraded mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per grading lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Downgraded seed provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg stabilized input
  - Basis: per kg stabilized seed input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grading rejects (`grading_rejects`)

Deferred waste state until composition and destination are known; rework returns to grading and retains its burden.

- Selected flow: Grading reject, internal/deferred disposition
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per grading lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Grading rejects provisional screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg stabilized input
  - Basis: per kg stabilized seed input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | Accepted seed route | Use accepted seed as quantitative reference; residues, losses and rejects without demonstrated product function are not co-products. | `iso-14044-2006` |
| `allocation_route_outputs` | Downgraded or saleable output | First subdivide by field, lot, operation and destination; then prefer physical causality, with another relationship disclosed and tested when necessary. | `iso-14044-2006` |
| `allocation_rework` | Rework and off-spec seed | Keep burdens with the originating lot, return mass to the named node, count energy/loss once, and exclude it from accepted output until acceptance. | `iso-14044-2006` |
| `allocation_run_period` | Shared runs and changeovers | Assign once using measured run time, throughput or another causal driver and prevent duplication. | `iso-14044-2006` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `crop_protection_products_specific_input` | `cp_cultivation_records` | Operation managed_cultivation: Expand each recorded active ingredient or formulation. The initial lookup found no single identity valid for all sites, so this card remains unresolved. Original quantity method: measured issued mass reconciled to application logs |


### Route-specific energy identification requirements

Select energy exchanges from the actual product state, operation, equipment and supply records. The conditional cards below are not a mandatory or exhaustive fuel list. For each requirement, document applicability and the used carrier, supplier, service period, native quantity and allocation; add a separate physically specific card and verify its UUID for any actual input not yet represented. An unidentified input remains an explicit completeness gap, never a zero or a generic energy exchange. Evidence of manual work, ambient drying or a bypass can justify non-use only for the affected operation. Preserve every required operation even when no example card is supplied.

Separate purchased supply from on-site conversion. Link self-generated electricity internally to the foreground generator and count its actual fuel and emissions there once; do not also charge a purchased-electricity supply for the same internal transfer. Likewise do not count supplier-side fuel again with purchased heat. Reconcile shared meters and contractor-included energy against existing cards, with one physical quantity assigned once. Retain source quantities, output throughput, shared-service allocation and excluded post-gate activities. For each carrier, apply period/output attribution once and scale to the declared reference quantity using matched accepted final output in the same product unit; do not normalize an already normalized amount again. Process-native intensities require a measured throughput link to that final output. These requirements do not set a consumption default or certify dataset completeness.

| requirement_id | collection_protocol_id | Required operation and evidence |
| --- | --- | --- |
| `cultivation_energy_identification` | `cp_cultivation_records` | Actual diesel machinery for mustard cultivation; identify pumping supply separately. Raw activity or stage basis: per cultivated hectare, then per kg accepted seed. (`route-energy-fao`) |
| `harvest_energy_identification` | `cp_harvest_mass_balance` | Actual diesel cutting, combining or threshing machinery for the selected mustard route. Raw activity or stage basis: per kg raw seed captured. (`route-energy-fao`) |
| `conditioning_energy_identification` | `cp_conditioning_records` | Actual electric cleaning equipment and drying fans; verified ambient drying has no assumed purchased heat and any heater needs separate identification. Raw activity or stage basis: per kg stabilized seed. (`route-energy-fao`) |
| `grading_energy_identification` | `cp_grading_handoff` | Actual electric screens, conveyors and changeover cleaning equipment. Raw activity or stage basis: per kg accepted seed. (`route-energy-fao`) |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_records` | `managed_cultivation` | seed; nutrients; water; crop protection; energy; residues | field and purchase records | field_id; cycle; area; species; product; mass; composition; water; carrier; energy; destination ; actual supply boundary and meter location; product delivery; direct-abstraction owner; source-to-delivery losses, returns and storage; provider coverage| reconcile logs, invoices, meters and application records; Raw aggregation and attribution: sum by field/route and divide by linked accepted seed Route-specific requirements: `cultivation_energy_identification`: Actual diesel machinery for mustard cultivation; identify pumping supply separately. Raw activity or stage basis: per cultivated hectare, then per kg accepted seed. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. `crop_protection_products_specific_input`: Operation managed_cultivation: Expand each recorded active ingredient or formulation. The initial lookup found no single identity valid for all sites, so this card remains unresolved. Original quantity method: measured issued mass reconciled to application logs Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg; m3; MJ; kWh; ha | each operation | complete crop cycle | all fields and providers | per declared reference flow | invoices, calibration, logs, field map and reconciliation |
| `cp_harvest_mass_balance` | `harvest_capture` | crop; energy; raw seed; residues; loss | harvest lot records | field_id; lot_id; method; energy; seed_mass; moisture; residue; loss; destination | scales, fuel logs and field-loss sampling; Raw aggregation and attribution: reconcile seed, residue and loss Route-specific requirements: `harvest_energy_identification`: Actual diesel cutting, combining or threshing machinery for the selected mustard route. Raw activity or stage basis: per kg raw seed captured. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. | kg; percent; MJ; kWh | each harvest lot | all cycle harvests | all fields and contractors | per declared reference flow | calibration, sampling, invoices and lot linkage |
| `cp_conditioning_records` | `clean_dry_stabilize` | raw seed; energy; water; stabilized seed; rejects | lot/run records | lot_id; route; input/output mass; moisture; energy; water; foreign_matter; reject; destination | scales, moisture tests, meters and operating logs; Raw aggregation and attribution: lot dry-matter and wet-mass balance Route-specific requirements: `conditioning_energy_identification`: Actual electric cleaning equipment and drying fans; verified ambient drying has no assumed purchased heat and any heater needs separate identification. Raw activity or stage basis: per kg stabilized seed. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. | kg; percent; MJ; kWh; m3 | each lot or period | all linked lots | each site | per declared reference flow | calibration, method, meter logs and signed balance |
| `cp_grading_handoff` | `grade_handoff` | stabilized input; energy; accepted; downgrade; reject | grading/dispatch records | lot_id; run_id; input; moisture; grade; accepted; downgrade; reject; destination; energy | scales, grader records, tests and dispatch documents; Raw aggregation and attribution: reconcile all states; accepted mass is denominator Route-specific requirements: `grading_energy_identification`: Actual electric screens, conveyors and changeover cleaning equipment. Raw activity or stage basis: per kg accepted seed. (`route-energy-fao`) Verify actual use, equipment and supply for each applicable input; create one specific exchange per actual carrier before dataset completeness. Missing identity or quantity evidence remains unresolved, never zero. Distinguish purchased supply, internal generation and inclusive contractor services; count their energy once. Do not substitute the conditional examples for an unverified route. | kg; percent; MJ; kWh | each run and hand-off | all included lots | each grading site | per declared reference flow | calibration, grade certificate, dispatch and destination |
| `cp_phase1_environment_coverage` | managed_cultivation | managed environmental coverage by actual node | site/activity/method ledger | site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | seed mass | dry_mass_kg = wet_mass_kg × (1 − moisture_percent/100); report original too | wet mass; moisture; method | dry and declared-basis mass | `agmarknet-mustard-postharvest` |
| `calc_accepted_yield` | crop cycle | accepted_yield = accepted_seed_mass / harvested_area; exclude downgrade/reject | accepted mass; area | kg/ha | `iso-14044-2006` |
| `calc_nutrient_inputs` | nutrient card | sum product mass × supplier nutrient fraction separately for N, P and K | mass; composition | nutrient/field and /kg seed | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest; conditioning; grading | moisture-adjusted input = outputs + loss; investigate residual | masses; moisture; destinations | node balance | `iso-14044-2006` |
| `calc_managed_soil_emissions` | cultivation | apply declared method, preferring country factors, to synthetic/organic N, residues, urea and lime | N; residues; urea; lime; factors | species/compartment flows | `ipcc-2019-managed-soils` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_cultivation_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | seed states | Preserve species/cultivar, lot, moisture, grade, use, geography, route and hand-off. | lot genealogy; tests; dispatch |
| `dq_temporal` | all data | Cover a full cycle and linked lots; disclose multi-year averaging and exceptional weather. | dated records |
| `dq_completeness` | all cards | Reconcile accepted, downgraded, reworked, rejected, residue and loss paths; explain zero/missing values. | signed balances |
| `dq_measurement` | mass; moisture; water; energy | Use calibrated instruments or documented estimates; retain units, conversions and uncertainty. | calibration and methods |
| `dq_route` | alternatives | Store route shares and changed inventories; do not average mutually exclusive routes without weights. | route evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Verify the concrete identity against the selected actual species/organ, sowing or commodity use, fresh/cured/dried and shell state, grade, provider and declared gate, with Mass/kg support. This PCR retains the semantic route and measurement definition; it does not assert that one fixed UUID covers all alternative states. A fresh-state flow cannot automatically bind a cured/dried output, an ambiguous nut/kernel flow cannot prove both states, and commodity seed cannot establish seed-for-sowing identity. Preserve a verified compatible existing binding only for its supported state; otherwise keep the UUID explicitly unresolved until detail-confirmed. Do not change the product boundary, quantity or route to force a match. |  |
| `validate_route_boundary` | process map | Require four parent nodes and route deltas; reject oil extraction, meal, flour or condiment manufacture. | `niphm-mustard-ipm`; `agmarknet-mustard-postharvest` |
| `validate_nutrient_card` | cultivation | Give every actual fertilizer or amendment product its own card, retaining physical product mass, formulation, nutrient composition and application records. Nutrient quantities are not additional inputs of the same product; collection or group identifiers cannot substitute for a concrete flow identity. |  |
| `validate_mass_balance` | harvest; conditioning; grading | Reconcile input, internal/accepted output, downgrade, rework, rejects, residues, moisture change and loss. | `iso-14044-2006` |
| `validate_rework_rejects` | rejects | Each reject needs rework, downgrade, recovery, treatment or discard; accepted output excludes unresolved rejects and duplicated loops. | `iso-14044-2006` |
| `validate_mode_attribution` | batch/continuous | Link inputs, outputs, cleaning and changeovers to runs or periods and prevent duplicate shared burdens. | `iso-14044-2006` |
| `validate_stabilization` | conditioned seed | Require before/after mass, moisture, drying route and hand-off; moisture above 8% for claimed short-term storage needs reviewed evidence. | `agmarknet-mustard-postharvest` |
| `validate_ranges` | all cards | Where a quantitative range is provided, match identity, bounds, unit, basis and evidence in both languages and the projection. Record missing compatible evidence rather than inventing defaults to satisfy a format. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-system package for mustard seed at producer/conditioner hand-off |
| downstream_use | `secondary_dataset`; `background_dataset` after compatibility review |
| allowed_use | Crop-production and downstream oilseed systems requiring the declared gate, moisture and grade |
| excluded_use | Treating oil, meal, flour or condiment manufacture as included; unadjusted different species, gate or route |
| required_metadata | species/cultivar; CPC context; geography; cycle; prior land state; irrigation; harvest; drying; lots; moisture; grade; providers; allocation; route shares |
| required_quality_disclosure | coverage; measured/estimated shares; missing flows; balance residuals; calibration; uncertainty; aggregation; source age; provisional ranges |
| update_trigger | Changed species, route, grade/moisture gate, topology, material input/yield, allocation, fixed identity or invalidated source |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `nfsm-oilseeds-practices-2018` | `official_guidance` | Government of India, National Food Security Mission, Package of Practices for Oilseeds (2018), https://www.nfsm.gov.in/ReadyReckoner/Oilseeds/PackagePractice_OS2018.pdf | route; sowing; nutrient; irrigation |
| `niphm-mustard-ipm` | `official_guidance` | National Institute of Plant Health Management, AESA Based IPM Package: Mustard/Rapeseed, https://www.niphm.gov.in/IPMPackages/Mustard.pdf | cultivation; harvest; crop protection; post-harvest |
| `agmarknet-mustard-postharvest` | `official_guidance` | Directorate of Marketing and Inspection, Post-Harvest Profile of Mustard-Rapeseed, https://www.agmarknet.gov.in/Others/mustard-rapeseed-profile.pdf | cleaning; drying; 8% moisture; hand-off |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | soil emissions; nutrient and residue accounting |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation; balances; calculations |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `ipcc-soils-n2o-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
