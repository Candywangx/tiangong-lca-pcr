---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fresh Kiwifruit at Packhouse Dispatch

## 1. Scope and Applicability

This candidate PCR covers fresh kiwifruit produced in a managed orchard and delivered at packhouse dispatch after
harvest, initial conditioning, grading, and any declared cold-storage period. It covers green, gold, and other
commercial kiwifruit cultivars when the product is sold as fresh whole fruit.

It excludes processed kiwifruit products, retail preparation after the declared dispatch point, and unrelated orchard
services. Cultivar, region, orchard system, maturity, and market grade remain foreground data inputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit |
| classification_refs | CPC 3.0 01352 (Kiwi fruit); mapping relation: exact |
| covered_products | fresh whole kiwifruit at packhouse dispatch |
| excluded_products | processed fruit, juice, puree, retail food preparation |
| representative_product | fresh kiwifruit, market-grade, dispatched from packhouse |
| production_route | managed orchard production → harvest/capture → primary conditioning and grading → optional cold storage → packhouse dispatch |
| market_state | mature, market-grade fresh fruit; cultivar and grade disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | fresh whole kiwifruit dispatched from the packhouse |
| How much | 1 kg |
| How well | cultivar, maturity or dry-matter criterion, grade, and declared dispatch state |
| How long or cycle | one orchard production cycle and the declared postharvest storage period |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Kiwi fruit |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar; maturity or dry matter; market grade; dispatch state |

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass (UUID to be resolved) | kg | Normalize the declared product output to 1 kg at packhouse dispatch. |
| storage_duration | cold-storage process | time | days | Record the actual storage duration and identify regular-air or controlled-atmosphere storage when used. |
| maturity_measure | harvest output | soluble solids or dry matter | % or declared site unit | Record the maturity criterion used to determine harvest readiness and retain the source method. |

## 5. System Boundary

The foreground boundary begins with the declared orchard production inputs and ends when market-grade whole fruit is
dispatched from the packhouse. Include the attributable establishment, immature-year, replacement and termination contributions for the represented orchard, plus attributable durable-infrastructure service. Record their period, beneficiaries and evidence under calc_kiwi_lifecycle. Missing allocation records are an explicit completeness gap, never permission to omit these burdens; disclose any separately justified study exclusion. Retail distribution and consumer ripening are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | managed orchard production inputs and established crop system |
| starting_condition_role | disclosed foreground starting condition |
| product_classification_scope | fresh whole kiwifruit at packhouse dispatch |
| recursive_input_rule | same-category kiwifruit inputs remain explicit and require source-lot disclosure; do not recurse into another kiwifruit PCR |
| upstream_dataset_requirement | disclose purchased planting material, soil amendments, irrigation, crop-protection inputs, energy, and packaging inputs with their source dataset identities |
| disclosure | orchard location and system, cultivar, maturity criterion, harvest date, packhouse hand-off, grade, and storage route |

### Normative boundary rule (`boundary_start_and_handoff`)

The data provider shall identify the orchard production starting condition, the independent harvest hand-off, the
primary-conditioning/grading hand-off, and the declared packhouse dispatch point. Any deviation shall be disclosed.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| orchard_production | Managed orchard production | required | orchard route is used | activity | per 1 kg dispatched fruit |
| harvest_capture | Harvest and field handling | required | fruit is removed from orchard and handed off | activity | per 1 kg harvested fruit |
| primary_conditioning | Primary conditioning and grading | required | fruit is conditioned, graded, or sorted before dispatch | activity | per 1 kg conditioned fruit |
| cold_storage | Cold storage and stabilization | conditional | fruit is stored before dispatch | activity | per 1 kg dispatched fruit and storage day |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

### Process: Managed Orchard Production (`orchard_production`)

#### Inputs

##### Product flows

###### Kiwifruit planting material (`planting_material_input`)

Record purchased vines, nursery plants, grafted material, or replacement plants by actual product identity. Keep the planting-material UUID unresolved until the actual material is known and an exact platform lookup is verified.

- Selected flow: Actual kiwifruit planting material
- Flow property / unit: Count or mass / plant or kg
- Amount rule: purchased or planted quantity by orchard block and establishment year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`

###### Urea fertilizer (`orchard_production_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for orchard_production_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1 kg reference product.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_orchard_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`orchard_production_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_orchard_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`orchard_production_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_orchard_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`orchard_production_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_orchard_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`orchard_production_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_orchard_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `fao-organic-nutrients`

###### Composted plant residues applied to soil (`orchard_production_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_orchard_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`
- Sources: `fao-organic-nutrients`

###### Irrigation water supplied (`irrigation_water_input`)

Record delivered orchard irrigation separately from environmental water withdrawal.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Amount rule: metered or calculated delivered irrigation by orchard block and production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`

###### Electricity supplied to orchard operations (`orchard_electricity_input`)

Record purchased electricity used for irrigation, field services, and other included orchard operations.

- Selected flow: Orchard electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoiced electricity allocated to the represented orchard output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_input_records`

###### Diesel fuel (`orchard_mobile_fuel_input_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `orchard_mobile_fuel_input_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_orchard_input_records` for `orchard_production`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_orchard_input_records`
- Sources: `route-energy-fao`

#### Outputs

##### Product flows

###### Orchard fruit output (`orchard_fruit_output`)

Record the intended kiwifruit output before harvest, including cultivar and maturity basis.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Amount rule: harvested mass reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_orchard_output_records`

##### Waste flows

###### Orchard residues and losses (`orchard_residues`)

Record prunings, dropped fruit, and other residues separately from intended fruit output, with their declared treatment.

This card remains unmapped because it combines route-specific residue identities.
Dataset production shall split it by actual residue and fate.

- Selected flow: Actual orchard residue or loss stream
- Flow property / unit: Mass / kg wet or dry material
- Amount rule: measured residue or loss mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_orchard_output_records`

### Process: Harvest and Field Handling (`harvest_capture`)

#### Inputs

##### Product flows

###### Orchard fruit received for harvest (`harvest_input`)

Record the orchard output entering harvest, its maturity criterion, and the harvest date or campaign.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Amount rule: orchard output received for the harvest campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`

#### Outputs

##### Product flows

###### Harvested fruit handed to packhouse (`harvested_fruit`)

Record the collected output state and the hand-off to primary conditioning. Field bins and reusable handling assets are
reported when they cross the boundary.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Amount rule: weighed harvested fruit at packhouse receipt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`

##### Waste flows

###### Harvest losses (`harvest_losses`)

Record fruit damaged, dropped, or rejected during harvest separately from the intended harvested output.

This card remains unmapped until the measured loss is classified by actual material state and destination.

- Selected flow: Actual kiwifruit harvest-loss stream
- Flow property / unit: Mass / kg
- Amount rule: measured harvest loss mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg harvested fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`

### Process: Primary Conditioning and Grading (`primary_conditioning`)

#### Inputs

##### Product flows

###### Process water supplied for conditioning (`conditioning_water_input`)

Record water used for washing, sanitation, hydrocooling, or other primary conditioning separately from irrigation.

- Selected flow: Kiwifruit conditioning process water
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-calculated delivered water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg conditioned fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Electricity supplied to conditioning (`conditioning_electricity_input`)

Record electricity used for washing, drying, grading, conveyors, cooling, and other included packhouse operations.

- Selected flow: Kiwifruit conditioning electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity by lot, shift, throughput, or run time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg conditioned fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Fruit received for conditioning (`conditioning_input`)

Record the raw harvested state entering conditioning and the receiving hand-off.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Amount rule: weighed receipt into conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg conditioned fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

#### Outputs

##### Product flows

###### Market-grade kiwifruit (`graded_fruit`)

Record grade, size, maturity information, and the dispatch-ready output state.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: weighed accepted market-grade output

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg dispatched fruit.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

##### Waste flows

###### Culls and downgraded fruit (`culls_and_downgrades`)

Record culls and downgraded fruit as separate output destinations, including recovery, processing, feed, or disposal.

This card remains unmapped until each output destination and material state is known; dataset production shall split
useful downgraded fruit from waste culls before choosing an exact platform UUID.

- Selected flow: Actual downgraded kiwifruit or cull stream
- Flow property / unit: Mass / kg
- Amount rule: weighed cull and downgrade mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg conditioned fruit.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

### Process: Cold Storage and Stabilization (`cold_storage`)

#### Inputs

##### Product flows

###### Electricity supplied to cold storage (`storage_electricity_input`)

Record electricity used for refrigeration, controlled-atmosphere equipment, fans, monitoring, and included handling.

- Selected flow: Kiwifruit cold-storage electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity by storage lot and duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg stored fruit and storage day.

- Normalization basis: per declared reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

###### Conditioned fruit entering storage (`storage_input`)

Record the fruit state, storage start date, storage mode, and storage destination.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
- Amount rule: weighed fruit entering storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg stored fruit.

- Normalization basis: per declared reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

#### Outputs

##### Product flows

###### Stored fruit dispatched to market (`storage_output`)

Record storage duration, dispatch state, and any declared ripening or quality-control treatment.

- Selected flow: Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: weighed fruit dispatched after storage

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1 kg dispatched fruit.

- Normalization basis: per declared reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

##### Waste flows

###### Storage losses (`storage_losses`)

Record decay, shrinkage, and rejected fruit during storage separately from dispatched product.

This card remains unmapped until the actual rejected material state and destination are known.

- Selected flow: Actual kiwifruit storage-loss stream
- Flow property / unit: Mass / kg
- Amount rule: measured storage loss mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1 kg stored fruit.

- Normalization basis: per declared reference flow
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Kiwi fruit
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
- Selected flow: Kiwi fruit
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
| `output_set_and_allocation` | all intended outputs | Enumerate accepted fresh grades and independently intended downgraded or other products with measured quantity, state, gate and recipient. Culls sent to disposal, retained residues and internal transfers receive no co-product share; retain their production and handling burdens with the producing saleable route. Each actual mass has one final destination. | `ghg-protocol-product-standard-2011` |
| `kiwi_allocation_precedence` | shared orchard and packhouse burdens | Directly assign separable cultivar-, grade-, run-, packaging- and cooling-specific operations first. For comparable fresh kiwifruit grades receiving the same common handling, allocate residual common burden by measured net fruit mass. For another genuine co-product, use a measured causal physical driver only with evidence linking it to that operation; otherwise use same-period first-separation economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete output set, comparable gates/currency and representative prices. Missing prices do not mean zero. Disclose shares summing to one and a material alternative as sensitivity; no automatic substitution credit. | `ghg-protocol-product-standard-2011` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `orchard_mobile_fuel_input_specific_input` | `cp_orchard_input_records` | Operation orchard_production: Record fuel used by tractors, sprayers, mowers, and other mobile orchard machinery. Original quantity method: measured, invoiced, or calculated fuel by operation and orchard block |
| `crop_protection_input_specific_input` | `cp_orchard_input_records` | Operation orchard_production: Record every herbicide, insecticide, fungicide, or other formulation as a separate foreground exchange. Verify each actual formulation identity; keep unconfirmed platform UUIDs unresolved. Original quantity method: measured formulation mass by product and application event |
| `flexible_packaging_input_specific_input` | `cp_conditioning_records` | Operation primary_conditioning: Record liners, films, bags, or other flexible packaging only when used by the represented dispatched lot. Original quantity method: supplier specification and issued flexible-packaging quantity by dispatched lot |
| `carton_box_packaging_input_specific_input` | `cp_conditioning_records` | Operation primary_conditioning: Record corrugated cartons, trays, or paperboard boxes used for the represented dispatched lot. Original quantity method: supplier specification and issued carton or box quantity by dispatched lot |
| `pallet_crate_packaging_input_specific_input` | `cp_conditioning_records` | Operation primary_conditioning: Record pallets, field bins, and reusable or single-use crates with their reuse count and allocated share. Original quantity method: supplier or asset record and allocated packaging quantity by dispatched lot |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


Collect orchard area and production period, cultivar, planting and management inputs, irrigation and energy, harvest
date and maturity criterion, harvested and graded mass, culls, storage mode and duration, packaging inputs, and all
output destinations. Use one protocol per data source and retain coverage, temporal representativeness, measurement
method, and uncertainty notes.

Normalize all collected amounts to 1 kg of dispatched market-grade kiwifruit. Keep mass balances between orchard,
harvest, conditioning, storage, culls, and losses. Do not infer current orchard quantities from another fruit PCR.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orchard_input_records | orchard_production | planting and crop inputs | purchase and field application record | input; quantity; nutrient or active ingredient; date; block; area | invoices, labels, application logs; Raw aggregation and attribution: sum by input and normalize to dispatched mass `orchard_mobile_fuel_input_specific_input`: Operation orchard_production: Record fuel used by tractors, sprayers, mowers, and other mobile orchard machinery. Original quantity method: measured, invoiced, or calculated fuel by operation and orchard block Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `crop_protection_input_specific_input`: Operation orchard_production: Record every herbicide, insecticide, fungicide, or other formulation as a separate foreground exchange. Verify each actual formulation identity; keep unconfirmed platform UUIDs unresolved. Original quantity method: measured formulation mass by product and application event Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg, L, kWh, item | per event | complete production year | orchard block | per declared reference flow | invoice, label, field log |
| cp_orchard_output_records | orchard_production | orchard output and residues | harvest and fate record | gross fruit; accepted fruit; culls; residues; fate; date; block | calibrated scale, harvest ticket, residue log; Raw aggregation and attribution: reconcile all outputs and normalize to dispatched mass | kg | per harvest | complete harvest year | orchard block | per declared reference flow | scale calibration, tickets, fate record |
| cp_harvest_records | harvest_capture | harvested fruit and harvest losses | harvest operation record | date; block; cultivar; maturity; quantity; labor or fuel; loss | harvest log, ticket, machine or fuel record; Raw aggregation and attribution: aggregate by block and reconcile to orchard output | kg, L, h | per harvest operation | harvest season | orchard and harvest operation | per declared reference flow | dated logs, tickets, meter or invoice |
| cp_conditioning_records | primary_conditioning | conditioned, graded, cull, and waste fruit | packhouse intake and grading record | intake; grade; cull; waste; water; energy; packaging; date; lot | packhouse ERP, scale, meter, packaging issue record; Raw aggregation and attribution: reconcile intake to grades, culls, and waste `flexible_packaging_input_specific_input`: Operation primary_conditioning: Record liners, films, bags, or other flexible packaging only when used by the represented dispatched lot. Original quantity method: supplier specification and issued flexible-packaging quantity by dispatched lot Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `carton_box_packaging_input_specific_input`: Operation primary_conditioning: Record corrugated cartons, trays, or paperboard boxes used for the represented dispatched lot. Original quantity method: supplier specification and issued carton or box quantity by dispatched lot Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `pallet_crate_packaging_input_specific_input`: Operation primary_conditioning: Record pallets, field bins, and reusable or single-use crates with their reuse count and allocated share. Original quantity method: supplier or asset record and allocated packaging quantity by dispatched lot Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg, m3, kWh, item | per lot or shift | conditioning period | packhouse line | per declared reference flow | lot records, scale and meter checks |
| cp_storage_records | cold_storage | storage input, dispatch, and loss | cold-room and dispatch record | lot; start; end; mode; temperature; input; dispatch; shrinkage; rejection | cold-room log, inventory system, dispatch ticket; Raw aggregation and attribution: reconcile stored input to dispatch and losses | kg, days, kWh | per lot and day | declared storage period | cold room and dispatch gate | per declared reference flow | logger, inventory record, dispatch ticket |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |
| `cp_kiwi_lifecycle` | orchard_production | orchard and asset lifecycle attribution | cohort and service ledger | block/cohort; event identity and native unit; establishment/immature/replacement/termination dates and quantities; actual annual outputs including zero years; evidenced remaining output trajectory; asset consumers and service units; upstream coverage; uncertainty | Link original event records to benefiting cohorts. Use completed-life actual outputs or a site-specific documented forecast with uncertainty; never invent a lifetime, omit failed establishment, or repeat an upstream-covered event. Meter shared services or retain causal use records. | native activity units; kg fruit; service units | each event and annual reconciliation | complete benefiting cohort/service horizon | represented orchard blocks and all asset consumers | apply calc_kiwi_lifecycle then calc_kiwi_normalize once | event records, output scales, yield forecast basis, service ledger |
| `cp_phase1_environment_coverage` | orchard_production | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage; site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_kiwi_lifecycle` | all applicable inventory rows | For each block/cohort and each activity identity/native unit separately, pool attributable establishment, immature, replacement, termination and zero-output-year operation quantities as E. Exclude positive-output-year operations already collected annually. Q_y is all accepted fresh kiwifruit grades for that cohort/year at a matched gate; Q_L=sum(Q_y) over the completed life, or an evidenced past-plus-future trajectory for an unfinished cohort. Assign E_y=E*Q_y/Q_L; add E_y to the directly attributable positive-year operation quantities, apply kiwi_allocation_precedence, then normalize under calc_kiwi_normalize. Retain failed establishment with its actual benefiting cohort. Unknown/nonpositive Q_L makes lifetime intensity incomplete, not zero. For a common infrastructure service, assign total service burden once by independently measured use or evidenced occupied capacity-time over all consumers/service periods before the product split; no universal asset life. | cp_kiwi_lifecycle; cp_orchard_output_records | cohort/year attributed native quantities | `ghg-protocol-product-standard-2011` |
| `calc_kiwi_normalize` | all applicable inventory rows | R is positive accepted final dispatch mass in kg for the selected grade/state/gate and matched lot/period. Physical quantities retain the unallocated lot balance; final attributable inventory contribution = attributed raw quantity/R * 1 kg. Sum raw attributable quantities before normalization; a stage intensity q_i=Q/O_i contributes q_i*O_i/R, never q_i/R. Storage/cooling operations apply only to actual served lots; internal transfers cancel once and are not extra final output. | all applicable collection protocols; cp_declared_reference_handoff | inventory per 1 kg accepted final product | `declared-handoff-measurement-definition` |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

## 9. Validation Rules

### Normative validation rule (`kiwifruit_route_completeness`)

The dataset is valid only when orchard production, harvest hand-off, primary conditioning/grading, and the declared
dispatch point are present; intended output, culls, residues, and losses are distinguished; cultivar and maturity or
dry-matter basis are disclosed; and any storage duration and mode are recorded when storage occurs.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | fresh kiwifruit foreground production and linked process or lifecycle model construction |
| allowed_use | fresh whole kiwifruit with matching cultivar, maturity/grade, route, and packhouse dispatch boundary |
| excluded_use | processed kiwifruit products, retail preparation, or a different declared product gate |
| required_metadata | orchard system, cultivar, maturity criterion, harvest date, grade, storage mode/duration, output destinations |
| required_quality_disclosure | site and period coverage, measurement methods, completeness, and source-lot identity |
| update_trigger | material change in orchard route, conditioning technology, storage practice, product gate, or evidence basis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-ams-kiwifruit-grade-standards` | official_guidance | USDA Agricultural Marketing Service, Kiwifruit Grades and Standards, <https://www.ams.usda.gov/grades-standards/kiwifruit-grades-and-standards> | maturity, cleanliness, defect, grade, and packing quality dimensions |
| `uc-davis-kiwifruit-postharvest` | official_guidance | UC Davis Postharvest Research and Extension Center, Kiwifruit Produce Facts, <https://postharvest.ucdavis.edu/produce-facts-sheets/kiwifruit> | harvest maturity indicators, cold-storage conditions, ripening and quality risks |
| `nzkgi-kiwifruit-book-2024` | handbook | New Zealand Kiwifruit Growers Incorporated, The Kiwifruit Book 2024, <https://www.nzkgi.org.nz/resource/kiwifruit-book-2024/> | orchard management, harvest, packhouse grading, packaging, and storage route decomposition |
| `fao-kiwifruit-postharvest` | extension_guidance | FAO, Small-Scale Postharvest Handling Practices, <https://www.fao.org/4/ae075e/ae075e21.htm> | climacteric behavior, handling, ripening, and postharvest loss controls |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Allocation hierarchy; cohort E/Q attribution is this PCR's declared temporal convention, not a prescribed lifetime or a product-specific measured fact. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
