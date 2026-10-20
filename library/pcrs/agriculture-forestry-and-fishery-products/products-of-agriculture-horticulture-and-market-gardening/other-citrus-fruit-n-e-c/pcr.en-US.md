---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-citrus-fruit-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other citrus fruit, n.e.c.

## 1. Scope and Applicability

This PCR covers foreground production of fresh, unprocessed citrus fruit classified as other citrus fruit, n.e.c., from orchard or protected-unit management through harvest, optional primary conditioning, primary packaging, and hand-off at the declared farm or first packing-site gate. The product identity must state the common or botanical citrus name when the residual CPC category contains more than one type. The PCR excludes nursery production for sale, oranges, lemons and limes, tangerines/mandarins/clementines, pomelos/grapefruits, processed or preserved citrus, post-gate distribution, retail, consumption, and land-use change before the declared starting condition.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-citrus-fruit-n-e-c |
| classification_refs | CPC 3.0:01329 Other citrus fruit, n.e.c.; mapping relation: exact |
| covered_products | Fresh, unprocessed other citrus fruit transferred at the declared farm or first packing-site gate |
| excluded_products | Specifically classified citrus categories, processed or preserved citrus, nursery planting material sold as a product, and post-gate distribution |
| representative_product | Marketable fresh other citrus fruit, harvested, graded, and in the declared washed or unwashed and packaged or loose state |
| production_route | Perennial or semi-perennial orchard management, harvest, optional primary conditioning, and declared-gate hand-off |
| market_state | Fresh whole citrus at the declared gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh other citrus fruit at the declared farm or first packing-site gate |
| How much | 1,000 kg |
| How well | Fresh, unprocessed, saleable fruit with declared citrus identity, variety group, geography, maturity, grade, washing, cooling, packaging, and gate |
| How long or cycle | One annual harvest campaign and represented productive orchard period, with perennial burdens allocated to the reported period |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Marketable fresh other citrus fruit at declared gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | citrus identity and botanical or market name; variety group; geography; orchard or protected route; stand age; reporting year; productive area; irrigation source and method; nutrient and crop-protection basis; maturity and grade; washing; cooling; packaging; reject and residue fate; declared gate |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent fields.

The sole reference output is `reference_product_at_declared_handoff` at `declared_reference_handoff`, a mandatory measurement of the actual accepted product at the already declared gate. Process `primary_conditioning` remains conditional: omission of its physical activities does not remove this reference. Select the actual last included product handoff and record its process/output id; accept only the same species, physical state, grade, moisture basis and gate as Section 3. The prior `marketable_gate_output` row is the measured output of its actual operation when active, not an additional final sale. No bypass creates processing, a yield assumption, an extra burden or a change of product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvest and gate output | Mass | kg | Keep gross harvest, marketable fruit, culls, trim, field losses, and packing rejects separate before normalization. |
| `perennial_orchard_annualization` | orchard management | Area-time and mass | m2*a and kg | Record stand age, productive area, reporting period, and replacement events; allocate perennial burdens without double counting across years. |
| `nutrient_equivalent_basis` | fertilizer and soil amendment | Mass | kg product, kg N, kg P2O5, or kg K2O | Record actual product and declared concentration, retaining both product mass and nutrient-equivalent basis. |
| `irrigation_volume` | irrigation and withdrawal | Volume | m3 | Separate delivered irrigation from rainfall and reconcile source withdrawal, delivery, return, and losses where applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established orchard or protected citrus unit receiving the represented period's management inputs; prior land use and nursery production are disclosed or excluded |
| starting_condition_role | Beginning of the represented productive period and harvest campaign |
| product_classification_scope | Fresh other citrus fruit, n.e.c., under CPC 3.0:01329 through the declared farm or first packing-site gate |
| recursive_input_rule | Purchased citrus planting material is linked once as an upstream input and is not recursively opened as another orchard cycle. |
| upstream_dataset_requirement | Use compatible upstream datasets for planting material, nutrients, crop protection, water, energy, fuel, packaging, and waste treatment when used. |
| disclosure | Declare citrus identity, variety, geography, route, stand age, area, reporting period, irrigation, nutrient and crop-protection basis, harvest, grade, washing, cooling, packaging, residue and reject fate, wastewater fate, and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_productive_period` | orchard management | Include management inputs, perennial attribution, and direct field emissions for the represented productive period and campaign; disclose establishment and replacement separately. | `fao-gap-framework-2003` |
| `boundary_declared_gate` | harvest and conditioning | End at the declared farm or first packing-site gate; include grading, washing, cooling, and primary packaging only when they occur before hand-off. | `fao-postharvest-handling-ae075e`; `iso-14067-2018` |
| `boundary_soil_and_residue_emissions` | nutrients and residues | Apply one declared method to soil and residue emissions and prevent duplicate nitrogen accounting. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | residues and rejects | Record destination; an unspecified residue or reject remains a loss or waste flow and is not a co-product. | `fao-gap-framework-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_management` | Other-citrus orchard management | required | every represented productive period | managed biological production | productive area and annual harvest output |
| `harvest` | Other-citrus harvest and field handling | required | every represented harvest campaign | harvest and hand-off | harvest lots and 1,000 kg marketable output |
| `primary_conditioning` | Other-citrus primary conditioning and packing | conditional | when conditioning or primary packing occurs before the gate | primary conditioning | conditioned output and rejects per 1,000 kg |
| `declared_reference_handoff` | Accepted-product measurement at declared handoff | required | Every actual selected route, including bypass of conditional conditioning/packing/storage | Measurement and reconciliation only; no added physical processing | 1000 kg net accepted product at the same declared gate |

### Process: Other-citrus orchard management (`orchard_management`)

#### Inputs

##### Product flows

###### Irrigation water delivered to orchard (`irrigation_water_input`)

Record water delivered to the represented orchard or protected unit, separated from rainfall and source withdrawal.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Amount rule: Meter or document delivered irrigation by block, source, method, and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per productive hectare and per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Provisional author irrigation estimate; not an interval supplied by FAO
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20,000
  - Unit: m3/ha/year
  - Basis: productive orchard area and represented annual campaign
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Urea fertilizer (`orchard_management_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for orchard_management_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per productive hectare and per 1,000 kg marketable gate output.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_application_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`orchard_management_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_application_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`orchard_management_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_application_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`orchard_management_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_application_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`orchard_management_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_application_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `fao-gap-framework-2003`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`orchard_management_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_application_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `fao-gap-framework-2003`; `fao-organic-nutrients`

###### Orchard electricity (`orchard_electricity_input`)

Record electricity for pumping, fertigation, ventilation, or other orchard services and allocate shared meters to the represented block and period.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: Meter or allocate electricity to the represented block and reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per productive hectare and per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-gap-framework-2003`

###### Diesel fuel (`orchard_fuel_input_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `orchard_fuel_input_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_orchard_management_records` for `orchard_management`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_orchard_management_records`
- Sources: `route-energy-fao`

##### Waste flows

##### Elementary flows

###### Orchard land occupation (`land_occupation_input`)

Record occupied productive area and duration for the represented period.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Productive area multiplied by represented occupation duration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-gap-framework-2003`

#### Outputs

##### Product flows

###### Orchard crop available for harvest (`orchard_output_handoff`)

Reconcile the crop available for harvest with harvest lots; do not count this internal hand-off as a second marketable output.

- Selected flow: Other citrus fruit crop available for harvest
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Reconcile estimated or measured availability with harvest, field losses, and marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per productive period and per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records`
- Sources: `fao-gap-framework-2003`

##### Waste flows

###### Pruning and orchard residue (`pruning_residue_output`)

Record pruning biomass and destination, including field return, composting, treatment, or disposal.

- Selected flow: Citrus pruning and orchard residue
- Flow property / unit: Mass / kg fresh or dry matter
- Amount rule: Weigh or estimate residue, document moisture basis, and declare destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per productive hectare and per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_management_records`
- Sources: `fao-gap-framework-2003`

##### Elementary flows

###### Direct soil nitrous oxide (`soil_nitrous_oxide`)

Calculate direct soil and residue nitrous oxide using one declared method and eligible nitrogen basis.

- Selected flow: Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared factor or measured result after removing duplicate nutrient and residue nitrogen bases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per productive hectare and per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_application_records`
- Sources: `ipcc-2019-managed-soils`

### Process: Other-citrus harvest and field handling (`harvest`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested other citrus fruit (`harvested_fruit_output`)

Weigh harvested fruit before optional conditioning and retain product, maturity, grade, and lot data.

- Selected flow: Harvested fresh other citrus fruit
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Weigh each lot and reconcile gross harvest with losses, culls, and marketable output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records`
- Sources: `fao-gap-framework-2003`

##### Waste flows

###### Harvest losses and field culls (`harvest_loss_output`)

Record fruit left in the field, damaged during harvest, or removed before the declared gate and document its fate.

- Selected flow: Harvest loss or field cull
- Flow property / unit: Mass / kg fresh fruit
- Amount rule: Weigh or estimate by lot and reconcile gross, marketable, and lost quantities.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_yield_records`
- Sources: `fao-gap-framework-2003`

### Process: Other-citrus primary conditioning and packing (`primary_conditioning`)

#### Inputs

##### Product flows

###### Conditioning and wash water (`conditioning_water_input`)

Record water used for optional washing, sanitation, or primary conditioning before the declared gate.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Meter or document water by lot and distinguish make-up from recirculated water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-postharvest-handling-ae075e`

###### Conditioning electricity (`conditioning_electricity_input`)

Record electricity for sorting, grading, washing, cooling, and primary packing before the declared gate.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: Meter or allocate electricity to the represented lots and conditioning period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1,000 kg marketable gate output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-postharvest-handling-ae075e`

###### Wooden crate (`primary_packaging_input_wood_crate`)

**Collection scope and applicability for primary_packaging_input.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Record only cartons, trays, films, labels, pallets, or other primary packaging actually used before the declared gate.
Raw activity or stage basis: per 1,000 kg marketable gate output.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_primary_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-postharvest-handling-ae075e`; `fao-package-identities`

###### Corrugated fibreboard box (`primary_packaging_input_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_primary_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-postharvest-handling-ae075e`; `fao-package-identities`

###### Polyethylene wrapping film (`primary_packaging_input_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_primary_conditioning_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-postharvest-handling-ae075e`; `fao-package-identities`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable other citrus fruit at declared gate (`marketable_gate_output`)

Record the measured accepted output of `primary_conditioning` only when that operation actually occurs. Preserve species, condition, grade, moisture, lot and its real outgoing gate. This stable row id identifies an actual route output; the sole final reference is reference_product_at_declared_handoff. Retain raw output and link the selected final lot without counting it as another final product. Any UUID shown is usable only for its independently confirmed physical state/gate; an incompatible upstream/intermediate state needs a separately verified or explicit unresolved identity. Preserve the original stage measurement and collection records.

- Selected flow: Marketable fresh other citrus fruit at declared gate
- Flow property/unit: Mass / kg

Original reference-state unit annotation: Mass / kg fresh fruit

Raw output measurement and reconciliation: Weigh the accepted net lot output of the actual operation under `cp_primary_conditioning_records`, retain gross/tare, rejects, stocks, moisture and matched onward lot records, and reconcile before final normalization.

- Amount rule: measured accepted net output from the actual operation under `cp_primary_conditioning_records`; retain raw lot quantity and actual stage throughput, then normalize once under the final-handoff normalization in Section 8; never prescribe a fixed intermediate yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured actual operation/lot output and throughput, retained before one final-reference normalization.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_conditioning_records`
- Sources: `fao-postharvest-handling-ae075e`

##### Waste flows

### Process: Accepted-product measurement at declared handoff (`declared_reference_handoff`)
This measurement adds no processing, waste generation or emission. Preserve all real upstream operations and losses; bypass only operations demonstrated absent. Select one actual terminal product lot and cancel its paired internal transfer once when aggregating the system. Do not sum inactive routes, co-products or both source and handoff as accepted final output.

#### Inputs
##### Product flows
###### Accepted actual-route product at the same handoff (`actual_route_product_for_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Marketable fresh other citrus fruit at declared gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net mass at this same handoff, normalized as R/R * 1000 kg; paired input equals accepted output, with raw R retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`

##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows
###### Reference product at declared handoff (`reference_product_at_declared_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Marketable fresh other citrus fruit at declared gate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: 1000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`

##### Waste flows
Actual waste remains at the operation that generates it; no duplicate here.
##### Elementary flows
Actual releases remain at their responsible physical operation; no duplicate here.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_and_rejects` | shared orchard and conditioning outputs | Subdivide directly measured orchard and conditioning operations first. Allocate remaining shared burdens only among intended marketable fruit and independently evidenced co-products using a justified physical relationship. Discarded culls and trim receive no co-product share; retain their production and treatment burdens with the saleable outputs. Record the complete output set and shares summing to one; justify an economic fallback only when a physical relationship is unavailable. | `iso-14044-2006`; `fao-postharvest-handling-ae075e` |
| `allocation_perennial_stand` | orchard establishment and replacement | Annualize establishment, replacement, and shared perennial assets over documented productive years and replacement events. | `fao-gap-framework-2003`; `iso-14067-2018` |
| `allocation_reuse_packaging` | reusable crates and pallets | Allocate manufacture and cleaning by documented service count, loss rate, and represented campaign; record one-way packaging separately. | `fao-postharvest-handling-ae075e` |

Rejected, returned, composted, treated, or discarded fruit remains a waste or loss flow unless separate sale and management evidence supports co-product treatment.

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_orchard_management_records` | Operation orchard_management: Record crop-protection products or active substances by product, date, treated area, and label or prescription basis. Original quantity method: Reconcile purchase, stock, application, treated area, and label concentration for the represented period. |
| `orchard_fuel_input_specific_input` | `cp_orchard_management_records` | Operation orchard_management: Record fuel for mowing, spraying, pruning, nutrient application, and internal orchard handling. Original quantity method: Use fuel records or equipment activity multiplied by a verified fuel-use rate, retaining fuel type. |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_management_records` | `orchard_management` | orchard inputs, area, energy, land, and residues | orchard log, meter, invoice, field record | block; area; stand age; route; irrigation; electricity; fuel; residue; period | reconcile block records to meters and invoices; Raw aggregation and attribution: aggregate by block and period before output normalization `crop_protection_input_specific_input`: Operation orchard_management: Record crop-protection products or active substances by product, date, treated area, and label or prescription basis. Original quantity method: Reconcile purchase, stock, application, treated area, and label concentration for the represented period. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `orchard_fuel_input_specific_input`: Operation orchard_management: Record fuel for mowing, spraying, pruning, nutrient application, and internal orchard handling. Original quantity method: Use fuel records or equipment activity multiplied by a verified fuel-use rate, retaining fuel type. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg, m3, kWh, MJ, m2*a | each operation and monthly close | full represented productive period | each block or unit | per declared reference flow | meter or invoice and field-log reconciliation |
| `cp_nutrient_application_records` | `orchard_management` | nutrient total and soil emissions | label, purchase, stock, application, and soil record | product; mass; N; P2O5; K2O; date; block; method; soil test | reconcile purchase and application to label or laboratory concentration; Raw aggregation and attribution: calculate nutrient equivalents by product before aggregation | kg product and kg nutrient | each application and annual close | full represented period | each block | per declared reference flow | label or laboratory result and application log |
| `cp_harvest_yield_records` | `harvest` | harvest lots, crates, losses, and hand-off | harvest ticket, scale, crate, and fuel record | lot; identity; block; date; gross; marketable; cull; loss; crates; fuel; gate | lot-level scale records reconciled to block yield; Raw aggregation and attribution: gross = marketable + cull + loss `harvest_crate_input_specific_input`: Record crates or field containers, including reuse count, cleaning, replacement, and loss assumptions. Allocate manufacture, cleaning, replacement, and loss by documented service count. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg, number, MJ | every harvest lot | full harvest campaign | each block and hand-off | per declared reference flow | calibrated scale and harvest ticket |
| `cp_primary_conditioning_records` | `primary_conditioning` | water, electricity, packaging, output, rejects, wastewater | pack-house log, meter, scale, issue and waste record | lot; water; recirculation; electricity; packaging; output; reject; wastewater; gate | allocate shared records by handled fruit mass; Raw aggregation and attribution: reconcile input and output lots | m3, kWh, kg | each lot or campaign close | full conditioning period | each line or first packing site | per declared reference flow | meter, scale, packaging, and waste record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | normalized amount = period or lot amount / marketable gate output × 1,000 kg | collected amount; gate output | amount per reference output | `iso-14067-2018` |
| `calc_nutrient_equivalent` | nutrient input total | nutrient equivalent = product mass × declared concentration | product mass; label or laboratory concentration | kg N, kg P2O5, or kg K2O | `fao-gap-framework-2003` |
| `calc_perennial_attribution` | establishment and replacement | annual attributed amount = documented amount / declared attribution period, adjusted for area and period | establishment; stand age; period; area | annualized orchard amount | `fao-gap-framework-2003`; `iso-14067-2018` |
| `calc_soil_emissions` | soil nitrous oxide | apply declared factor or measurement to eligible nutrient and residue nitrogen after duplicate-basis removal | nutrient and residue nitrogen; factor or result | emission amount | `ipcc-2019-managed-soils` |
| `calc_output_reconciliation` | harvest and conditioning | gross harvest = marketable + cull + trim + loss; investigate unexplained residuals | lot weights and fate records | reconciled products and wastes | `fao-postharvest-handling-ae075e` |
| `conditioning_reject_output_specific_exchanges` | `primary_conditioning` | Enumerate rejected citrus fruit, trimming residues and washing wastewater as separate actual streams. Measure each physical stream with its own composition, state, native unit, lot/period and destination; instantiate one atomic card per specific stream and boundary role. Distinguish waste transfer, purchased treatment and substance-specific discharge; do not treat a disposal service as the wastewater itself or duplicate treatment burdens. Keep stock, rework, marketed downgrade and discarded waste separate, and count physical mixtures once without also counting their components as additional exits. Retain the linked protocol and actual process attribution. Reconstruct each attributable raw numerator on its recorded stage basis, then normalize once to the matched accepted reference output. Missing identity, quantity, unit or destination blocks dataset completeness; absence requires evidence, not an assumed zero. | `cp_primary_conditioning_records` | Separate atomic exchanges; completeness required | `fao-postharvest-handling-ae075e` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_nutrient_application_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | product and reference flow | Declare citrus identity, variety group, route, grade, gate, and handling states remain explicit. | product specification and lot record |
| `quality_measurement` | quantities and units | Use calibrated scales and meters where available; document estimates, moisture basis, conversion factors, and reuse assumptions. | calibration, meter, invoice, and calculation records |
| `quality_temporal` | orchard and harvest | Cover the complete represented productive period and campaign, including repeated harvests and replacement events. | field calendar, harvest tickets, pack-house log |
| `quality_completeness` | inventory | Reconcile water, nutrients, energy, fuel, packaging, product, rejects, residues, emissions, and withdrawal; explain missing streams. | mass balance and missing-data note |
| `quality_disclosure` | dataset metadata | Disclose required qualifiers, water source and fate, nutrient and crop-protection basis, perennial allocation, and reject or residue destination. | completed dataset metadata and site records |

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | actual accepted terminal product and paired transfer | scale/lot/acceptance records | species; state; grade; moisture/basis; gate; actual_terminal_process_id; actual_terminal_output_row_id; lot/transfer_id; gross/tare/net mass R; raw stage totals/throughputs; stocks, rejects and destinations | Weigh accepted net R at the existing gate; match exactly one actual terminal source of the same lot/state and reconcile all earlier losses and stocks. If conditional preparation is absent use the last actual included eligible product output, without inventing that preparation. Preserve original activity records and all required qualifiers. | kg and native activity units | each accepted lot | matched production and handoff period | existing declared producer/primary gate | per declared reference flow | calibrated weighing, acceptance/grade records, lot chain, activation/bypass evidence and closed balances |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | all foreground quantities and actual route outputs | Let R be positive measured accepted final mass in kg for one matched species/state/grade/gate/period, excluding tare, rejects, co-products and held stock. Physical ledger = raw physical quantity/R * 1000 kg, without burden-allocation scaling. Attributable inventory contribution = attributable raw quantity/R * 1000 kg, preserving native numerator units and the existing output/period attribution. A local intensity q_i=Q_i/O_i first reconstructs Q_i=q_i*actual linked O_i; do not divide by R again after final normalization. Both handoff sides are the same measured event R/R*1000 kg, not another physical yield. Include only actual active operations; record and substantiate bypass. Missing/nonpositive R or an unlinked terminal record blocks a normalized complete result, not zero. Preserve original stage data and cancel paired internal transfers once. | cp_declared_reference_handoff; original linked collection protocols | native quantities per declared final reference | `declared-handoff-measurement-definition` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | reference flow and gate output | The 1,000 kg reference output must use kg mass and reconcile to product identity, grade, handling state, and gate. | `iso-14067-2018` |
| `validate_process_reconciliation` | harvest and conditioning | Gross harvest, marketable output, culls, trim, losses, rejects, and wastewater must reconcile or carry a documented residual. | `fao-postharvest-handling-ae075e` |
| `validate_perennial_period` | orchard management | Stand age, productive area, period, establishment or replacement event, and annualization basis are required before normalization. | `fao-gap-framework-2003` |
| `validate_flow_identity_resolution` | parameterized rows | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_qualifiers` | reference flow and metadata | Required qualifiers must include citrus identity, variety, geography, stand age, period, irrigation, nutrient and crop-protection basis, maturity or grade, conditioning, packaging, fates, and gate. | `fao-gap-framework-2003`; `fao-postharvest-handling-ae075e` |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | selected actual route and all conditional bypass states | Check both presence and absence of optional conditioning/packing/storage against actual records: exactly one required handoff reference persists, its source product/state/gate matches Section 3, active physical rows retain measured throughput, and inactive physical activities add no exchange. Require raw accepted mass, upstream closure, unique transfer pairing and single final normalization; an unexplained state or missing identity is not an assumed valid branch. | `declared-handoff-measurement-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh other citrus fruit |
| downstream_use | Secondary or background dataset after reference identity, gate, geography, period, and coverage finding are disclosed |
| allowed_use | Comparative or attributional LCA of fresh citrus supply with compatible route, state, and gate |
| excluded_use | Processed, juiced, preserved, dried, retail, consumer, or materially different boundaries without documented adaptation |
| required_metadata | product identity; variety; geography; route; stand age; area; period; irrigation; nutrient and crop protection; harvest lots; maturity and grade; conditioning; packaging; fates; gate; UUID and concrete flow identity verification |
| required_quality_disclosure | data year; measured versus estimated values; allocation and annualization; water source and fate; nutrient basis; mass balances |
| update_trigger | Change in category interpretation, concrete flow identity verification|

Evidence applicability: cited general farm-record and postharvest frameworks do not supply crop-specific yields, lifetimes, gate cutoffs or LCA allocation defaults. Those are this PCR methodology decisions; qualify them by the actual species, route and period and obtain compatible agronomic evidence before asserting completeness. Provisional author ranges are screening aids, not empirical acceptance limits or substituted measurements.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ipcc-2019-managed-soils` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, managed-soils methods | soil emission calculation |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | allocation and inventory consistency |
| `iso-14067-2018` | standard | ISO 14067:2018 Greenhouse gases — Carbon footprint of products | normalization, allocation disclosure, and use conditions |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | Generic monitoring and farm-record context only; crop-specific routes, lifetimes, quantitative ranges and LCA allocation are PCR choices requiring separate applicable evidence. |
| `fao-crop-evapotranspiration-56` | official_guidance | Allen et al., FAO Irrigation and Drainage Paper 56, Crop Evapotranspiration (1998), https://www.fao.org/4/X0490E/X0490E00.htm | Water-balance and evapotranspiration methods; not an empirical delivered-irrigation range. |
| `fao-postharvest-handling-ae075e` | official_guidance | Kitinoja and Kader, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, 4th edition (2002), FAO-hosted original, https://www.fao.org/4/ae075e/ae075e00.htm | General handling, cooling and loss-record context only; crop-specific parameters and this PCR gate/attribution require separate evidence. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | This PCR Sections 3, 6 and 8: matched accepted handoff mass divided by itself times the declared reference amount; physical transfer pairing and dimensional normalization identity, not an empirical yield or new physical operation. | single accepted reference and measured route-throughput linkage |
