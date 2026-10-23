---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tomatoes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
---

# Fresh Tomatoes at the Declared Gate

## 1. Scope and Applicability

This PCR guides foreground data-package construction for commercial fresh tomatoes (*Solanum lycopersicum*) from production-unit establishment through crop management, harvest, optional primary conditioning, and hand-off at a declared farm gate or pack-house gate. It covers round, ribbed, elongated, cherry, and cocktail tomatoes from open-field, protected-cultivation, hydroponic, or substrate routes when the route, fruit type, and gate state are declared.

Tomato seed production, nursery production of transplants, canned or dried tomatoes, juice, puree, concentrate, sauces, cooked products, retail, consumer storage, and consumption are excluded. Heating or cooling, packaging, and transport are included only when they occur before the declared gate. Several varieties or harvest rounds may be aggregated only after each production unit and lot is reconciled to accepted output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tomatoes |
| classification_refs | CPC 3.0:01234 Tomatoes; mapping relation: exact |
| covered_products | Fresh, whole, unprocessed tomatoes delivered at a declared farm-gate or pack-house gate, including round, ribbed, elongated, cherry, and cocktail types |
| excluded_products | Tomato seed and transplants; canned, dried, juiced, pureed, concentrated, sauced, or cooked tomato products; retail and consumer stages |
| representative_product | Marketable fresh tomatoes meeting the declared maturity, firmness, cleanliness, size, defect, and packaging criteria |
| production_route | Open-field, greenhouse, hydroponic, or substrate cultivation with establishment, crop management, harvest, grading, optional washing or cooling, and primary packing |
| market_state | Fresh whole tomatoes at the declared farm-gate or pack-house gate, loose, trussed, or in declared primary packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh tomatoes at the declared farm-gate or pack-house gate |
| How much | 1,000 kg net accepted tomatoes |
| How well | Tomato type and cultivar group, maturity or colour stage, firmness, size and grade, cleanliness, defect tolerance, moisture condition, truss state where applicable, washing or cooling state, and packaging state are declared |
| How long or cycle | One declared tomato crop cycle and harvest campaign; all harvest rounds from the same planting are aggregated to the declared gate |
| reference_flow_link | marketable_tomato_output |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Tomatoes `43dac9a5-d7b1-4536-84f3-38fa2f56562e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production geography; tomato type and cultivar group; open-field, greenhouse, hydroponic, or substrate route; seed or transplant status; planting date; harvest dates and rounds; crop-cycle or annual production basis; maturity and colour stage; size and grade; firmness and defect criteria; irrigation and nutrient delivery method; washing and cooling state; packaging state; declared gate; rejected-fruit and crop-residue fate |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing qualifiers make the reference flow definition incomplete. The reference product-flow identity is platform-verified for CPC 3.0 01234.

This reference UUID denotes the fresh, unprocessed farm-gate product. Verify actual species, product state and handoff before applying the binding. An independent pack-house, further-processed or otherwise incompatible output requires separately verified identity and must not inherit this UUID. Identity verification does not change the actual system boundary or quantity-normalization requirements of this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_tomato_mass` | reference product and harvest reconciliation | Mass | kg | Express the reference as net accepted tomato mass at the declared gate. Weigh harvested, marketable, downgraded, rejected, foreign material, and crop-residue streams separately. |
| `crop_cycle_normalization` | field, greenhouse, hydroponic, and substrate routes | Area and mass | ha or m2; kg | Record each production unit and planting campaign separately, then normalize inputs and outputs to accepted mass from the same crop cycle. |
| `nutrient_product_basis` | mineral fertilizers, fertigation products, manure, compost, and amendments | Product and nutrient mass | kg product; kg N, P2O5, or K2O | Give every actual fertilizer or amendment product its own card, retaining physical product mass, formulation, nutrient composition and application records. Nutrient quantities are not additional inputs of the same product; collection or group identifiers cannot substitute for a concrete flow identity. |
| `irrigation_delivery_basis` | irrigation, fertigation carrier water, and source withdrawal | Volume | m3 | Record delivered irrigation and source withdrawal separately and distinguish rainfall, recirculated solution, drainage, and discharge where modelled. |
| `harvest_round_aggregation` | repeated-harvest tomato routes | Mass and time | kg and crop cycle | Sum each harvest round from the same planting and reconcile accepted fruit, downgraded fruit, field losses, and residues before normalization. |
| `energy_carrier_conversion` | electricity, heating, pumping, and mobile machinery | Energy or carrier mass | kWh, MJ, L, or kg | Preserve measured carrier, operation, conversion factor, and production unit. Do not infer greenhouse heating from crop yield alone. |
| `packaging_mass_basis` | crates, cartons, trays, films, pallets, and reusable containers | Mass or item count | kg or item | Record package mass or item count together with capacity, reuse cycles, return rate, and lot assignment when packaging is included before the gate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field, greenhouse, hydroponic, or substrate production unit receiving tomato seed or transplant material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared tomato crop cycle and foreground input accounting |
| product_classification_scope | Fresh whole tomatoes under CPC 3.0:01234 through the declared farm-gate or pack-house gate |
| recursive_input_rule | Purchased tomato seed or transplants are recorded at their received hand-off state and linked once to an upstream dataset; their own production is outside this PCR unless a separate upstream dataset is supplied. |
| upstream_dataset_requirement | Require upstream datasets for seed or transplants, nutrient products, growing media, crop-protection products, irrigation water, energy, packaging, and purchased transport or treatment services when used. |
| disclosure | Declare production geography, tomato type and cultivar group, route, crop-cycle dates, planting density, irrigation and fertigation method, nutrient basis, crop-protection program, harvest rounds, accepted and rejected mass, washing and cooling, packaging, water recirculation or drainage, residue fate, and gate location. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and crop management | Include production-unit preparation attributable to the crop cycle, planting, crop management, supplied water, nutrient inputs, crop protection, energy, and direct crop emissions. Disclose prior land use and exclude unrelated infrastructure construction. | `fao-tomato-good-agricultural-practices`; `fao-greenhouse-vegetables-2013` |
| `boundary_route_specificity` | open-field, greenhouse, hydroponic, and substrate routes | Keep route-specific infrastructure, heating, pumping, recirculation, substrate, drainage, and crop-cycle records separate when they materially change the inventory. | `fao-greenhouse-vegetables-2013` |
| `boundary_gate_preparation` | harvest, grading, washing, cooling, and packing | End the default foreground boundary at the declared farm-gate or pack-house gate. Include grading, washing, cooling, and primary packaging only when they occur before that gate. | `codex-cxs-293-2008`; `usda-ams-tomato-grade-standard` |
| `boundary_nitrogen_emissions` | nutrient inputs, soil, drainage, and residues | Estimate applicable direct and indirect nitrogen emissions with one declared method using recorded nutrient inputs, drainage or leaching evidence, and residue fate. Avoid double counting pathways. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | rejected fruit, crop residues, wash solids, and wastewater | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. A credit requires documented recipient, intended use, and allocation treatment. | `fao-tomato-good-agricultural-practices`; `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Tomato crop establishment | required | every represented planting, bed, greenhouse compartment, hydroponic unit, or substrate cycle | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Tomato crop management | required | each represented tomato crop cycle | foreground managed biological production | production-unit area, irrigation, nutrients, protection, energy, and harvest campaign |
| `harvest_and_gate_preparation` | Tomato harvest and gate preparation | required | each represented harvest campaign | foreground harvest, conditioning, packaging, and gate hand-off | 1,000 kg marketable fresh tomato output |
| `purchased_transport_to_gate` | Purchased transport to declared gate | conditional | when transport service crosses the foreground boundary before the declared gate | foreground delivery service | tonne-kilometres from production unit or pack-house to gate |

### Process: Tomato crop establishment (`crop_establishment`)

#### Inputs

##### Product flows

###### Flow: Establishment irrigation water (`establishment_irrigation_water`)

Water applied for bed preparation, seed emergence, transplant establishment, or initial fertigation is recorded by source and production unit.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Amount rule: Sum metered or documented water-balance deliveries during establishment, excluding rainfall and separately identified recirculated solution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Establishment irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 400
  - Unit: m3/ha
  - Basis: establishment period from planting to uniform stand
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows


###### Flow: Establishment planting losses (`establishment_planting_loss`)

Unused seed, failed transplants, and establishment losses are recorded when discarded or sent to a defined treatment route.

- Selected flow: Establishment planting material loss
- Flow property / unit: Mass or count / kg or plant
- Amount rule: Reconcile purchased and planted lots with unused and failed material records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_establishment_records`
- Range: Establishment loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: percent of purchased planting material
  - Basis: purchased lot to planted or accepted establishment material
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

### Process: Tomato crop management (`crop_management`)

#### Inputs

##### Product flows

###### Flow: Crop irrigation and fertigation water (`crop_irrigation_water`)

Delivered crop water crosses the boundary when supplied to the field, greenhouse, hydroponic unit, or substrate unit. Record source, meter, recirculation, drainage, and crop-cycle period.

- Selected flow: Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Amount rule: Sum metered or documented water-balance deliveries during crop management; report recirculated solution and drainage separately where material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`; `fao-greenhouse-vegetables-2013`
- Range: Crop irrigation screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5,000
  - Unit: m3/ha per crop cycle
  - Basis: open-field, greenhouse, hydroponic, or substrate tomato crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Urea fertilizer (`crop_management_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for crop_management_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-greenhouse-vegetables-2013`; `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`crop_management_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-greenhouse-vegetables-2013`; `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`crop_management_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-greenhouse-vegetables-2013`; `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`crop_management_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-greenhouse-vegetables-2013`; `ipcc-2019-managed-soils`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`crop_management_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-greenhouse-vegetables-2013`; `ipcc-2019-managed-soils`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`crop_management_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_nutrient_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_records`
- Sources: `fao-greenhouse-vegetables-2013`; `ipcc-2019-managed-soils`; `fao-organic-nutrients`

###### Diesel fuel (`mobile_machinery_fuel_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `mobile_machinery_fuel_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_energy_records` for `crop_management`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_records`
- Sources: `route-energy-fao`

###### Flow: Production electricity (`production_electricity_input`)

Electricity for pumping, fertigation, ventilation, lighting, cooling, and other production operations is recorded by meter and operation.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Sum sub-meter or invoice records allocated to the represented production unit and crop cycle; separate renewable generation and purchased electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-greenhouse-vegetables-2013`
- Range: Production-electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8,000
  - Unit: kWh/ha per crop cycle
  - Basis: pumping, ventilation, lighting, and production equipment for the represented route
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Flow: Irrigation source withdrawal (`irrigation_source_withdrawal`)

Water withdrawn from a river, aquifer, reservoir, or municipal source is recorded when attributable to the tomato production unit.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Record source-meter withdrawal or a documented water balance and reconcile delivered, recirculated, stored, and discharged water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56`
- Range: Source-withdrawal screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 6,000
  - Unit: m3/ha per crop cycle
  - Basis: source withdrawal allocated to the represented tomato production unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Flow: Marketable fresh tomatoes (`marketable_tomato_output`)

Marketable tomatoes are the accepted product crossing the declared farm-gate or pack-house gate. Reconcile output by lot, harvest round, and grade.

- Selected flow: Tomatoes `43dac9a5-d7b1-4536-84f3-38fa2f56562e`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Sum net accepted mass after grading and any included washing or cooling, excluding package tare.

- Amount rule: 1000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: 1,000 kg accepted fresh tomato output.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Range: Marketable-yield screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 300
  - Unit: tonnes/ha per crop cycle
  - Basis: accepted fresh tomato output from the represented production unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Flow: Tomato vines and crop residue (`crop_residue_output`)

Vines, leaves, roots, substrate residues, and other crop biomass leaving the production unit are recorded by fate, including field return, composting, feed use, treatment, or disposal.

- Selected flow: Tomato crop residue
- Flow property / unit: Mass / kg wet biomass
- Amount rule: Measure or calculate residue mass from harvest records and documented residue-management operations; retain moisture basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_fate_records`
- Range: Crop-residue screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: kg wet residue/kg accepted tomatoes
  - Basis: crop biomass leaving the production unit after harvest and termination
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Flow: Direct soil nitrous oxide emission (`direct_soil_n2o_emission`)

Direct nitrous oxide from managed soil or growing media is estimated from declared nitrogen inputs and the selected emission method.

- Selected flow: Nitrous oxide to air from managed tomato production soil
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply one declared method to measured or calculated nitrogen inputs and avoid counting the same pathway in both soil and drainage records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Direct N2O screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha per crop cycle
  - Basis: direct managed-soil emission estimate from declared nitrogen input
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Ammonia emission from nutrient use (`ammonia_emission`)

Ammonia emissions are recorded when the declared nutrient method estimates volatilization from applied fertilizer or organic nutrient products.

- Selected flow: Ammonia to air from tomato production
- Flow property / unit: Mass / kg NH3
- Amount rule: Calculate from declared nutrient input and emission method, keeping product, application, and environmental conditions traceable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Ammonia screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg NH3/ha per crop cycle
  - Basis: volatilization estimate from declared nutrient inputs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Nitrate loss to water (`nitrate_loss`)

Nitrate loss is recorded when drainage, leaching, or runoff from the declared production unit is estimated or measured.

- Selected flow: Nitrate loss from tomato production
- Flow property / unit: Mass / kg NO3-
- Amount rule: Use measured drainage or a declared nitrogen-balance method and record receiving medium, drainage fraction, and nutrient basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output from the same crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`
- Sources: `ipcc-2019-managed-soils`; `fao-greenhouse-vegetables-2013`
- Range: Nitrate-loss screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg N/ha per crop cycle
  - Basis: nitrate loss in drainage, leaching, or runoff from the represented unit
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

The final exchange is kg NO3-. Keep species-specific elemental-N activity and any N-based factor/range in a separate calculation ledger. Convert that species-specific N mass by 62/14 exactly once before normalization; never reconvert compound mass or apply an N-based range directly to compound mass. A total nitrogen-loss pool is not this species without a supported split. Retain the actual receiving compartment and method boundaries; unknown identity or activity is not zero.

### Process: Tomato harvest and gate preparation (`harvest_and_gate_preparation`)

#### Inputs

##### Product flows

###### Flow: Harvest and gate-preparation electricity (`gate_preparation_electricity`)

Electricity used for sorting, washing, cooling, grading, packing, and other pre-gate handling is recorded when those operations occur before the declared gate.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Sum sub-meter or invoice records for included pre-gate operations and allocate them to tomato lots handled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_energy_records`
- Range: Gate-preparation electricity screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh/tonne accepted tomatoes
  - Basis: included washing, grading, cooling, and packing operations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Flow: Washing or process water (`washing_process_water`)

Water used to wash or condition tomatoes crosses the boundary when the operation occurs before the declared gate. Washing is optional and must be disclosed.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Sum metered or documented washing water and keep reused, treated, and discharged portions separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_records`
- Sources: `codex-cxs-293-2008`
- Range: Washing-water screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: m3/tonne accepted tomatoes
  - Basis: optional washing and conditioning before the declared gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows


#### Outputs

##### Waste flows


###### Flow: Wastewater sent to treatment (`wastewater_output`)

Wash or conditioning wastewater leaves the pre-gate operation when discharged to a treatment service or other documented route.

- Selected flow: Wastewater from tomato conditioning
- Flow property / unit: Volume / m3
- Amount rule: Record discharged wastewater after accounting for reuse, evaporation, and retained solids; identify receiving treatment route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_records`
- Range: Wastewater screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: m3/tonne accepted tomatoes
  - Basis: wastewater discharged from included conditioning operations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Flow: Wash solids and trimming rejects (`wash_trim_waste`)

Soil, leaves, stems, damaged fruit, and other solids removed during grading or washing are recorded with treatment or disposal route.

- Selected flow: Tomato washing and trimming waste
- Flow property / unit: Mass / kg wet waste
- Amount rule: Weigh or calculate solids removed during included conditioning and reconcile with accepted product and rejected fruit.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_records`
- Range: Wash-and-trim waste screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg wet waste/tonne accepted tomatoes
  - Basis: solids removed during included grading and washing
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Purchased transport to declared gate (`purchased_transport_to_gate`)

#### Inputs

##### Product flows

###### Flow: Road freight to declared gate (`road_freight_to_gate`)

Purchased road transport is included when a third-party service moves tomatoes, packaging, or production materials to the declared gate before hand-off.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / tonne-kilometre
- Amount rule: Record loaded mass, route distance, backhaul or return assumption, vehicle or service type, and material moved; calculate tonne-kilometres.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: per 1,000 kg accepted fresh tomato output.

- Normalization basis: per declared reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_records`
- Range: Road-transport screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: km per declared tomato lot
  - Basis: route distance from production unit or pack-house to declared gate
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_and_rejected` | accepted tomatoes, downgraded fruit, and rejects | Allocate shared crop-cycle inputs first to declared accepted tomato output using measured mass reconciliation. Report downgraded and rejected fruit separately; use economic or physical allocation only when a documented productive recipient exists. | `iso-14044-2006`; `codex-cxs-293-2008` |
| `allocation_multiple_varieties` | multiple tomato types, cultivars, or harvest campaigns | Keep types and campaigns separate when input regimes, route, grade, or market state differ. If aggregated, allocate shared operations by measured mass or another declared physical relationship and retain disaggregation evidence. | `iso-14044-2006` |
| `allocation_reusable_packaging` | reusable crates, pallets, and containers | Allocate packaging burdens over documented reuse cycles and declared capacity or mass basis. Include return and loss records when attributable to the declared gate. | `iso-14044-2006`; `codex-cxs-293-2008` |
| `allocation_residue_use` | crop residue, wash solids, and wastewater solids | Keep residue treatment and productive use separate from accepted product. Assign a credit only when recipient, intended use, substitution claim, and allocation method are documented. | `iso-14044-2006`; `fao-tomato-good-agricultural-practices` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_crop_protection_records` | Operation crop_management: Crop-protection products cross the boundary when purchased and applied to the represented tomato crop. Record active ingredient and formulated product information separately. Original quantity method: Sum invoices and application logs by product, active ingredient, treated area, and crop cycle; preserve concentration and timing. |
| `mobile_machinery_fuel_specific_input` | `cp_energy_records` | Operation crop_management: Fuel for tractors, sprayers, harvest aids, forklifts, and other mobile machinery is recorded by operation and production unit. Original quantity method: Sum delivery records or machine fuel logs by operation; preserve fuel type and conversion basis. |
| `rigid_primary_packaging_specific_input` | `cp_packaging_records` | Operation harvest_and_gate_preparation: Reusable or single-use crates, cartons, trays, and other rigid primary packaging are recorded when supplied or consumed before the declared gate. Original quantity method: Record package type, mass, capacity, reuse cycles, return rate, and tomato lot assignment. |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | seed, transplants, planting water, planting losses | supplier lot, planting log, establishment log | lot id; material form; mass or viable count; variety; planting date; area; unused and failed material | reconcile supplier records to planting-unit logs and retain lot documents; Raw aggregation and attribution: aggregate by planting campaign and production unit | kg, plant, seed, m3, ha | each lot and planting event | complete crop-cycle establishment period | each field, compartment, hydroponic unit, or substrate unit | per declared reference flow | supplier invoice; planting log; lot traceability |
| `cp_irrigation_records` | `crop_establishment` or `crop_management` | irrigation, fertigation water, source withdrawal, drainage | meter record, water balance, fertigation log | source; meter reading; delivered volume; rainfall; recirculation; drainage; discharge; area; date ; opening/closing cumulative readings, timestamps, meter location/unit/reset, external inflows/returns, supply losses, opening/closing water stock, field drainage separately | read meters or reconstruct a documented water balance and reconcile source and delivered volumes; Raw aggregation and attribution: sum by crop cycle and retain source and receiving-medium split ; Keep the supply-network and field balances separate under the water calculation rule. | m3, mm, ha | each irrigation event or daily total | full crop cycle | each irrigation zone and production unit | per declared reference flow | meter calibration; water-balance closure; operator log |
| `cp_nutrient_records` | `crop_establishment` or `crop_management` | nutrient products and calculated emissions | invoice, label, nutrient plan, application log | product; formulation; mass; nutrient concentration; date; area; application method; soil or drainage condition | reconcile purchase, storage, and application records; calculate nutrient equivalents; Raw aggregation and attribution: aggregate by product, nutrient, and crop cycle | kg product, kg N, kg P2O5, kg K2O | each application | full crop cycle | each production unit and nutrient zone | per declared reference flow | label or supplier specification; nutrient-plan review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | application log and supplier record | product; active ingredient; concentration; mass or volume; date; treated area; application purpose | reconcile application logs with supplier records and crop-protection plan; Raw aggregation and attribution: aggregate by product and active ingredient per crop cycle `crop_protection_input_specific_input`: Operation crop_management: Crop-protection products cross the boundary when purchased and applied to the represented tomato crop. Record active ingredient and formulated product information separately. Original quantity method: Sum invoices and application logs by product, active ingredient, treated area, and crop cycle; preserve concentration and timing. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg, L, ha | each application | full crop cycle | each field, compartment, or crop zone | per declared reference flow | operator record; product label; application authorization |
| `cp_energy_records` | `crop_management` | machinery fuel and production electricity | fuel log, meter, invoice, equipment log | carrier; quantity; meter; operation; equipment; production unit; date; allocation basis | read meters or reconcile delivery and equipment records to included operations; Raw aggregation and attribution: sum by carrier, operation, and crop cycle `mobile_machinery_fuel_specific_input`: Operation crop_management: Fuel for tractors, sprayers, harvest aids, forklifts, and other mobile machinery is recorded by operation and production unit. Original quantity method: Sum delivery records or machine fuel logs by operation; preserve fuel type and conversion basis. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | L, kg, kWh, MJ | each delivery, meter period, or operation | full crop cycle | each production unit and included service | per declared reference flow | meter record; invoice; conversion record |
| `cp_harvest_records` | `crop_management` | accepted, downgraded, rejected, and harvested tomatoes | harvest ticket, scale record, grading record | date; lot; harvest round; gross mass; accepted mass; grade; rejected mass; packaging tare; gate state | use calibrated scale and lot-level grading reconciliation; Raw aggregation and attribution: sum harvest rounds and reconcile gross, accepted, rejected, and tare masses | kg, percent | each harvest lot | full harvest campaign | each field, compartment, and pack-house line | per declared reference flow | scale check; grading record; lot traceability |
| `cp_residue_fate_records` | `crop_management` | vines, roots, substrate residue, and crop residues | residue log, contractor ticket, treatment record | residue type; wet mass; moisture; date; fate; recipient; transport; treatment | weigh or calculate residue and retain fate evidence; Raw aggregation and attribution: aggregate by fate and crop cycle | kg, percent, km | each removal or treatment event | crop termination and residue handling period | each production unit | per declared reference flow | weighbridge or contractor record; recipient declaration |
| `cp_washing_records` | `harvest_and_gate_preparation` | washing water, wash solids, wastewater, and trimming rejects | water meter, wash log, waste ticket, drain record | lot; water in; reuse; discharge; solids; rejected fruit; date; line; treatment route | reconcile input water, reused water, discharged wastewater, solids, and product output; Raw aggregation and attribution: aggregate by tomato lot and gate period | m3, kg | each lot or operating shift | all included pre-gate conditioning | each washing or conditioning line | per declared reference flow | meter record; waste ticket; mass-balance check |
| `cp_gate_energy_records` | `harvest_and_gate_preparation` | sorting, cooling, and packing electricity | sub-meter, invoice, equipment log | line; operation; kWh; date; lot throughput; allocation basis | allocate metered energy to included tomato throughput and retain line records; Raw aggregation and attribution: sum by operation and tomato lot | kWh, kg | each shift or meter period | all included pre-gate operations | each pack-house line | per declared reference flow | sub-meter or invoice; throughput record |
| `cp_packaging_records` | `harvest_and_gate_preparation` | rigid packaging, crates, and pallets | packaging specification, issue log, return log | package type; material; tare; capacity; count; reuse cycles; return; loss; lot | reconcile package issue and return records to lot throughput and declared reuse basis; Raw aggregation and attribution: allocate by capacity or documented mass basis `rigid_primary_packaging_specific_input`: Operation harvest_and_gate_preparation: Reusable or single-use crates, cartons, trays, and other rigid primary packaging are recorded when supplied or consumed before the declared gate. Original quantity method: Record package type, mass, capacity, reuse cycles, return rate, and tomato lot assignment. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg, item, cycle | each issue and return event | full included gate period | each pack-house and transport route | per declared reference flow | supplier specification; issue and return log |
| `cp_transport_records` | `purchased_transport_to_gate` | purchased road freight | transport order, bill, route record | material; loaded mass; origin; destination; distance; vehicle or service; return assumption; date | calculate tonne-kilometres from verified route and loaded mass; Raw aggregation and attribution: aggregate by material and tomato lot | tkm, kg, km | each shipment | all included pre-gate shipments | each route and declared gate | per declared reference flow | bill of lading; route record; mass record |
| `cp_phase1_environment_coverage` | crop_establishment | managed environmental coverage by actual node | site/activity/method ledger | site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_output` | accepted tomato reference flow | Sum net accepted tomato mass by harvest lot after grading and included washing or cooling, excluding package tare. | harvest tickets; scale records; grade records; package tare | kg accepted tomatoes | `codex-cxs-293-2008` |
| `calc_mass_reconciliation` | harvest and gate preparation | Gross harvested mass = accepted mass + downgraded or rejected fruit + trim and foreign material + measured process loss; investigate unexplained residual. | gross mass; accepted mass; reject mass; trim; loss; moisture basis | reconciled tomato mass balance | `mass-balance-identity` |
| `calc_nutrient_equivalents` | nutrient products | Nutrient mass = formulated product mass × documented nutrient concentration; retain product and nutrient bases separately. | product mass; label or supplier concentration; application date | kg N, kg P2O5, and kg K2O | `fao-greenhouse-vegetables-2013` |
| `calc_water_balance` | irrigation and washing water | For each identified cumulative meter, period volume = closing reading - opening reading, corrected only for documented rollover/reset and the meter unit; preserve both readings, timestamps and meter location. Keep gross source withdrawal W and delivery D at different meter locations separate. For the supply-network boundary reconcile W + other external inflows = D + external return/discharge + distribution loss + closing stored water - opening stored water. Internal recirculation cancels within that boundary and is not another withdrawal or a negative gross source volume. Field drainage belongs to the separate field water balance and must not be added again to water already measured as delivered. Retain measured values and investigate the residual; do not derive zero use from missing readings. | meter readings; delivery; rainfall; recirculation; drainage; storage change | m3 source withdrawal and delivered water | `fao-crop-evapotranspiration-56` |
| `calc_crop_cycle_normalization` | all crop-cycle amounts | Normalized amount = recorded or calculated amount ÷ accepted tomato output × 1,000 kg. Preserve production-unit and crop-cycle denominator. | recorded amount; accepted output | amount per 1,000 kg accepted tomatoes | `mass-balance-identity` |
| `calc_nitrogen_emissions` | direct and indirect nitrogen emissions | Apply one declared IPCC-compatible or jurisdictional method to documented nitrogen inputs, soil or substrate conditions, drainage, and residue fate; do not sum overlapping factors. | kg N applied; method factors; drainage; residue fate | kg N2O, NH3, or nitrate loss by receiving medium | `ipcc-2019-managed-soils` |
| `calc_reusable_packaging` | reusable crates and pallets | Allocated packaging burden = item burden ÷ documented reuse cycles × tomato-lot share by capacity or declared mass basis. | item mass; reuse cycles; lot capacity or mass; return and loss records | kg packaging allocated to tomato lot | `iso-14044-2006` |
| `calc_transport_service` | purchased road freight | Transport service = loaded mass in tonnes × verified route distance in kilometres; report return or backhaul assumption separately. | shipment mass; route distance; service record | tonne-kilometres | `fao-tomato-good-agricultural-practices` |
| `seed_or_transplant_input_identity_and_fate` | `crop_establishment` | For the original seed_or_transplant_input collection role at this operation, identify the actual physical form, species/material, composition, state and supply/treatment boundary before creating exchanges. Each seed lot, transplant, crown, cutting, larval stage, formulation, coating, preservative or separated residue actually used/generated requires its own concrete card where relevant to this role; these examples are alternatives, not a required recipe. Retain existing collection records and route-specific source evidence. Count-based planting records require measured or supplier-supported mass-per-unit when matched to a mass-based provider; retain count and mass as linked attributes rather than two purchases. Do not merge separate husk/shell or separate agents. A real mixed stream requires composition and recipient evidence and is counted once. Before completeness, record every applicable amount and native unit, link a compatible verified UUID or explicitly unresolved identity, preserve stock/return attribution, and normalize the attributable raw quantity once to the accepted reference output. Missing records are not zero; aggregate ranges are not individual-input defaults. | `cp_establishment_records` | Identity-specific exchanges and reconciled activity records |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_nutrient_records`; `cp_irrigation_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |
| `rejected_tomato_output_identity_and_fate` | `crop_management` | The rejected_tomato_output collection role is mandatory when the original operation generates these materials. Record the actual material, composition, state, measured mass and destination separately for each physically distinct stream. Dust, chaff, grain, packaging and product rejects must not share one exchange merely because they arise at the same operation. A physically mixed stream may have one card only with its composition and treatment boundary documented. For downgraded produce, distinguish intended saleable co-products supported by recipient and use evidence from actual waste sent to treatment; a lower grade alone does not determine waste status or allocation. Keep on-site rework/internal returns and in-field retained biomass in reconciled internal ledgers instead of exporting them as waste. Create concrete product or waste cards as appropriate before completeness, with a compatible verified UUID or explicit unresolved identity; keep every attributable burden, do not credit unsubstantiated substitution, and do not count any stream twice. Normalize measured quantities once to the original accepted reference output. A missing identity, amount or destination blocks completeness; no aggregate default or numeric bound is inferred. | `cp_harvest_records` | Identity-specific exchanges and reconciled activity records | `codex-cxs-293-2008`; `usda-ams-tomato-grade-standard` |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_qualifiers` | reference flow and all product lots | Declare tomato type, cultivar group, route, geography, gate, maturity, grade, and packaging state; retain evidence gap platform identity for later foreground resolution. | lot metadata; product specification; gate record |
| `quality_mass_closure` | harvest, rejects, residues, washing, and wastewater | Close the product and process mass balance for each represented crop cycle or document the unexplained difference and its effect on normalized values. | calibrated scale; mass-balance worksheet; waste ticket |
| `quality_temporal_coverage` | crop-cycle inputs and outputs | Cover the full planting-to-gate crop cycle and every harvest round; identify missing periods, substitutions, and averaging windows. | planting log; harvest log; meter periods |
| `quality_route_disclosure` | open-field, greenhouse, hydroponic, and substrate production | Identify route, occupied area, infrastructure attribution, recirculation, heating, lighting, substrate, drainage, and crop-termination treatment whenever included. | production-unit record; equipment log; route declaration |
| `quality_nutrient_traceability` | nutrient inputs and nitrogen emissions | Link each nutrient value to a product record, concentration, application log, and declared emission method; distinguish product mass from nutrient mass. | invoice; label; nutrient plan; calculation worksheet |
| `quality_water_traceability` | irrigation, withdrawal, washing, and drainage | Identify source, meter or water-balance method, delivered volume, recirculation, drainage, discharge, and receiving medium. | meter record; water-balance closure; discharge record |
| `quality_reject_and_residue_fate` | downgraded fruit, crop residue, wash solids, and wastewater | Record measured amount, moisture basis where relevant, destination, treatment, transport, and recipient evidence for every non-product stream. | waste ticket; contractor record; recipient declaration |
| `quality_energy_and_transport` | fuel, electricity, and purchased transport | Retain carrier or service type, quantity, operation, route, date, meter or shipment evidence, and allocation basis. | invoice; meter record; bill of lading; route record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow and accepted output | Require 1,000 kg net accepted tomatoes as normalized reference amount and retain the platform-verified reference product identity for CPC 3.0 01234. | `codex-cxs-293-2008` |
| `validation_mass_reconciliation` | harvest and gate-preparation inventory | Check that accepted output, downgraded or rejected fruit, residues, trim, wastewater solids, and process losses reconcile with gross harvested or received mass within documented measurement tolerance. | `mass-balance-identity` |
| `validation_crop_cycle_completeness` | crop establishment and crop management | Reject a dataset that omits a represented planting campaign, harvest round, or route-specific input without a justified zero or documented exclusion. | `fao-tomato-good-agricultural-practices` |
| `validation_nutrient_basis` | nutrient products and emissions | Check product mass, nutrient concentration, nutrient amount, application timing, and declared emission method before accepting nitrogen, ammonia, or nitrate values. | `ipcc-2019-managed-soils` |
| `validation_water_balance` | irrigation, source withdrawal, washing, and drainage | Check units, source, meter or balance period, delivered water, recirculation, discharge, and receiving medium; investigate negative or unexplained balances. | `fao-crop-evapotranspiration-56` |
| `validation_gate_state` | reference product and process boundary | Check that washing, cooling, packaging, transport, and pack-house operations are included only when before the declared gate and disclosed in metadata. | `codex-cxs-293-2008`; `usda-ams-tomato-grade-standard` |
| `validation_range_screen` | all important inventory rows | Compare site values with the row range or documented evidence. Values outside a range require an explanation, revised evidence, or an explicit scenario declaration. | `codex-cxs-293-2008`; `fao-greenhouse-vegetables-2013` |
| `validation_residue_fate` | rejects and residues | Require a fate and destination for each rejected fruit, crop residue, wash solid, and wastewater stream; do not apply a credit without documented productive use. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground tomato production dataset that may be published as a `secondary_dataset` and used as a documented agricultural production input |
| downstream_use | Downstream process and lifecyclemodel construction for fresh whole tomato supply at the same declared gate and compatible route, geography, period, and product qualifiers |
| allowed_use | Comparative or attributional LCA when crop-cycle completeness, gate state, route, mass reconciliation, nutrient basis, water balance, and residue fate are disclosed |
| excluded_use | Canned, dried, juiced, pureed, concentrated, cooked, retail, consumer, or materially different tomato routes without an explicit transformation or reallocation model |
| required_metadata | canonical PCR id; reference amount; tomato type and cultivar group; geography; production route; planting and harvest dates; gate; maturity and grade; accepted, rejected, residue, and wastewater masses; irrigation source and method; nutrient basis; crop-protection program; energy and transport; packaging and reuse; platform identity resolution status |
| required_quality_disclosure | temporal coverage; site and production-unit coverage; measurement and mass-balance closure; route and technology; water and nutrient evidence; residue fate; missing data; ranges used; allocation; uncertainty fields |
| update_trigger | new production route, material changes in irrigation or fertigation, heating or lighting, crop-protection regime, grade or gate definition, packaging system, residue fate, source method, or verified product and flow identities |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `codex-cxs-293-2008` | standard | FAO/WHO Codex Alimentarius, Standard for Tomatoes (CXS 293-2008), https://www.fao.org/fao-who-codexalimentarius/sh-proxy/hu/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS%20293-2008/CXS_293e.pdf; retrieved 2026-09-14 | product definition, commercial types, maturity, quality, gate preparation, and grade evidence |
| `usda-ams-tomato-grade-standard` | official_guidance | USDA Agricultural Marketing Service, Tomato Grades and Standards, https://www.ams.usda.gov/grades-standards/tomato-grades-and-standards; retrieved 2026-09-14 | grade, maturity, cleanliness, defect, and reject classification |
| `fao-tomato-good-agricultural-practices` | official_guidance | FAO, Manual de buenas prácticas agrícolas en la cadena del tomate, https://www.fao.org/family-farming/detail/es/c/286792/; retrieved 2026-09-14 | tomato process decomposition, crop management, crop protection, residue, and transport practices |
| `fao-greenhouse-vegetables-2013` | official_guidance | FAO, Good Agricultural Practices for greenhouse vegetable crops, https://www.fao.org/4/i3284e/i3284e.pdf; retrieved 2026-09-14 | greenhouse, fertigation, water, nutrient, electricity, drainage, and route-specific methodology |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm; retrieved 2026-09-14 | irrigation measurement and water-balance method |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html; retrieved 2026-09-14 | nitrogen emission method and managed-soil boundary |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html; retrieved 2026-09-14 | allocation, co-product, attribution, and data-quality principles |
| `mass-balance-identity` | method_factor | PCR mass-balance reconciliation method: gross received or harvested mass equals accepted product plus separately recorded downgraded, residue, treatment, and unexplained loss streams | calculation and validation mass closure |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
