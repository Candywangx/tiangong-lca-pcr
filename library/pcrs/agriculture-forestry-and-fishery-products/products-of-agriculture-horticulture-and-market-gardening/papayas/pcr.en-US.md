---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.papayas
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Papayas

## 1. Scope and Applicability

This PCR covers fresh whole papayas produced in managed open-field or protected cultivation and delivered at the declared farm gate or first packing-site gate. It starts with the declared production cycle and covers planting-material receipt, crop establishment, crop management, irrigation, nutrient and soil-amendment use, crop protection, harvesting, optional on-farm sorting or washing, and primary packing when these activities occur before the declared gate. It is applicable to papayas sold whole and fresh, including cultivar, size, grade, maturity, and production-route differences that are disclosed in the foreground data package.

It excludes the manufacture of planting material, fertilizers, soil amendments, crop-protection products, fuels, electricity, packaging, transport, storage, retail, consumer use, processing into pulp or juice, and waste treatment beyond the declared gate. Those activities are represented as upstream or downstream datasets when they cross the boundary. Papaya seeds or seedlings are not treated as papaya fruit output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.papayas |
| classification_refs | CPC 3.0:01317; mapping relation: exact |
| covered_products | Fresh whole papayas from managed cultivation, including farm-gate or first-packing-site presentation before processing |
| excluded_products | Dried, frozen, canned, pulped, juiced, fermented, or otherwise processed papaya; papaya planting material; papaya waste sold as a separate product |
| representative_product | Marketable fresh whole papaya at the declared farm or first packing-site gate |
| production_route | Open-field or protected cultivation followed by harvest and optional primary sorting, washing, cooling, and packing |
| market_state | Fresh, whole, marketable product at a declared gate; cultivar, grade, maturity, and packing state are required qualifiers |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Marketable fresh whole papaya delivered at the declared farm or first packing-site gate |
| How much | 1 kg of marketable fresh whole papaya |
| How well | Whole fruit meeting the declared cultivar or product identity, maturity, grade, size, trim, washing, cooling, and packaging qualifiers |
| How long or cycle | One declared production cycle and harvest campaign, with all harvest lots linked to the same field or protected unit and gate |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Papayas `5f8859fd-4690-4c28-afbe-c4846a84da32` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Papaya identity and cultivar; production country or region; open-field or protected route; field or protected-unit identifier; cycle and harvest dates; planted area; irrigation source and method; nutrient and soil-amendment product and nutrient basis; crop-protection programme; harvested mass; marketable grade and maturity; rejects and residue fate; washing; cooling; packaging; declared gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

This reference UUID denotes the fresh, unprocessed farm-gate product. Verify actual species, product state and handoff before applying the binding. An independent pack-house, further-processed or otherwise incompatible output requires separately verified identity and must not inherit this UUID. Identity verification does not change the actual system boundary or quantity-normalization requirements of this PCR.

The sole reference output is `reference_product_at_declared_handoff` at `declared_reference_handoff`, a mandatory measurement of the actual accepted product at the already declared gate. Process `papaya_gate_preparation` remains conditional: omission of its physical activities does not remove this reference. Select the actual last included product handoff and record its process/output id; accept only the same species, physical state, grade, moisture basis and gate as Section 3. The prior `papaya_marketable_output` row is the measured output of its actual operation when active, not an additional final sale. No bypass creates processing, a yield assumption, an extra burden or a change of product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | harvested fruit and gate output | Mass | kg | Keep harvested gross mass, marketable papaya, downgraded or rejected fruit, trimming, and field residue as separate quantities. |
| `area_and_cycle_normalization` | establishment and crop management | Area and mass | ha and kg | Record each field or protected unit, planted area, cycle dates, and harvest campaign before normalizing inputs and outputs to marketable product. |
| `nutrient_equivalent_basis` | fertilizer and soil-amendment inputs | Product mass and nutrient mass | kg product, kg N, kg P2O5, or kg K2O | Record the actual product and declared nutrient concentration; preserve whether the model is based on product mass or nutrient equivalent. |
| `irrigation_volume` | irrigation and water withdrawal | Volume | m3 | Distinguish water withdrawn at the source from water delivered to the crop and record rainfall separately when it is modelled. |
| `multiple_harvest_reconciliation` | successive harvests | Mass | kg | Aggregate harvest lots only after linking them to the same field or protected unit, cycle, cultivar, grade, and declared gate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared production plot or protected growing unit receiving papaya seed or seedling material, with prior land use and pre-establishment work disclosed |
| starting_condition_role | Beginning of the declared papaya production cycle |
| product_classification_scope | Fresh whole papayas under CPC 3.0:01317 through the declared farm or first packing-site gate |
| recursive_input_rule | Purchased papaya seed or seedlings are upstream product inputs linked once; they are not recreated as an additional papaya fruit cycle inside this PCR. |
| upstream_dataset_requirement | Use compatible upstream datasets for seed or seedlings, fertilizers and amendments, crop-protection products, irrigation water, energy, packaging, transport, and waste treatment whenever they are used before the declared gate. |
| disclosure | Declare cultivar or product identity, geography, route, field or protected-unit area, cycle dates, irrigation source and method, nutrient basis, crop-protection programme, harvest lots, grade and maturity, washing, cooling, packing, reject destination, residue fate, and gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and crop management | Include inputs and direct cultivation exchanges from the declared starting condition through the represented harvest campaign, and allocate them to marketable output from the same declared cycle. | `fao-gap-framework-2003` |
| `boundary_declared_gate` | harvest and gate handling | End at the declared farm or first packing-site gate; include sorting, trimming, washing, cooling, and primary packaging only when they occur before that hand-off. | `codex-cxc-53-2003` |
| `boundary_soil_emissions` | managed soil and residues | Apply one declared method to nitrogen emissions and avoid double counting fertilizer, amendment, and returned-residue nitrogen. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | field residue and rejects | Record field residue and postharvest rejects by destination; an unspecified reject or residue is not a co-product. | `fao-gap-framework-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `papaya_crop_establishment` | Papaya crop establishment | required | every represented crop cycle | foreground establishment | planted area, planting-material quantity, and cycle |
| `papaya_crop_management` | Papaya crop management | required | every represented crop cycle | foreground managed biological production | field or protected-unit cycle and marketable output |
| `papaya_harvest` | Papaya harvest and field handling | required | every represented harvest campaign | foreground harvest and field segregation | gross harvest, marketable output, rejects, and residue |
| `papaya_gate_preparation` | Papaya gate preparation and hand-off | conditional | only when sorting, washing, cooling, or primary packing occurs before the declared gate | foreground gate handling | 1,000 kg marketable fresh papaya |
| `declared_reference_handoff` | Accepted-product measurement at declared handoff | required | Every actual selected route, including bypass of conditional conditioning/packing/storage | Measurement and reconciliation only; no added physical processing | 1 kg net accepted product at the same declared gate |

### Process: Papaya crop establishment (`papaya_crop_establishment`)

#### Inputs

##### Product flows

###### Papaya planting material (`papaya_planting_material`)

Record seed, seedling, or grafted planting material entering the declared field or protected unit. Identify the material type and do not treat it as marketable papaya fruit.

- Selected flow: Papaya seed or seedling planting material
- Flow property / unit: Number of items or mass / seedling or kg
- Amount rule: Count or weigh planting material by cultivar, field or protected unit, and cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per planted hectare or protected unit, then per 1,000 kg marketable output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_establishment_records`
- Sources: `fao-gap-framework-2003`

###### Urea fertilizer (`papaya_crop_establishment_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for papaya_crop_establishment_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: per crop cycle and per 1,000 kg marketable output.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_papaya_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`papaya_crop_establishment_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_papaya_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`papaya_crop_establishment_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_papaya_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`papaya_crop_establishment_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_papaya_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-gap-framework-2003`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`papaya_crop_establishment_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_papaya_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-gap-framework-2003`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`papaya_crop_establishment_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_papaya_input_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-gap-framework-2003`; `fao-organic-nutrients`

##### Waste flows

##### Elementary flows

###### Land occupation for papaya production (`papaya_land_occupation`)

Record the occupied cultivated area and duration for the declared papaya cycle; distinguish annualized productive occupation from land transformation.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*year
- Amount rule: Planted area multiplied by the occupied fraction of the year represented by the cycle.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per crop cycle and per 1,000 kg marketable output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_papaya_establishment_records`
- Sources: `fao-gap-framework-2003`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Papaya crop management (`papaya_crop_management`)

#### Inputs

##### Product flows

###### Crop-cycle irrigation water (`papaya_irrigation_water`)

Record water delivered to the crop by source and irrigation technology, excluding rainfall unless the study explicitly models rainfall as a withdrawal.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Amount rule: Meter or document delivered irrigation by field or protected unit and cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per crop cycle and per 1,000 kg marketable output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-irrigation-drainage-paper-56`
- Range: Provisional irrigation screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20,000
  - Unit: m3/ha or protected-unit cycle
  - Basis: broad interval dependent on climate, soil, cultivar, crop age, and irrigation technology
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel (`papaya_mobile_fuel_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `papaya_mobile_fuel_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_papaya_input_records` for `papaya_crop_management`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_papaya_input_records`
- Sources: `route-energy-fao`

##### Waste flows

##### Elementary flows

###### Crop production water withdrawal (`papaya_water_withdrawal`)

Record source withdrawal when it is distinct from water delivered to the crop and disclose the source type and return or loss treatment.

- Selected flow: Water resource withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Source withdrawal meter or documented abstraction volume, reconciled to irrigation delivery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per crop cycle and per 1,000 kg marketable output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_input_records`
- Sources: `fao-irrigation-drainage-paper-56`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Papaya harvest and field handling (`papaya_harvest`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross harvested papaya (`papaya_gross_harvest`)

Record gross harvested fresh papaya before grading, rejection, trimming, washing, cooling, or primary packing.

- Selected flow: Fresh whole papaya, gross harvested
- Flow property / unit: Mass / kg
- Amount rule: Weigh every harvest lot at the field or harvest-station entry point.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest campaign and per 1,000 kg marketable output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_harvest_records`
- Sources: `fao-gap-framework-2003`

##### Waste flows


###### Harvest rejects (`papaya_harvest_rejects`)

Record fruit rejected at harvest or field sorting and identify whether it is left in the field, composted, fed, sold into another product route, or sent to waste treatment.

- Selected flow: Papaya harvest rejects
- Flow property / unit: Mass / kg wet fruit
- Amount rule: Weigh or reconcile rejected fruit by lot and destination; do not credit it as a co-product without a documented receiving route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest campaign and per 1,000 kg marketable output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_harvest_records`
- Sources: `fao-gap-framework-2003`


##### Elementary flows

### Process: Papaya gate preparation and hand-off (`papaya_gate_preparation`)

#### Inputs

##### Product flows

###### Gross harvested papaya received for gate preparation (`papaya_gate_input`)

When preparation occurs before the declared gate, reconcile the harvested lot entering sorting, washing, cooling, or primary packing to the harvest process output.

- Selected flow: Fresh whole papaya, gross harvested
- Flow property / unit: Mass / kg
- Amount rule: Reconcile receiving weights to the originating harvest lot and declared gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per gate-preparation campaign and per 1,000 kg marketable output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

###### Conditional gate washing water (`papaya_washing_water`)

Record water only when papayas are washed before the declared gate, including the treatment or discharge destination of the used water.

- Selected flow: Process water for papaya washing
- Flow property / unit: Volume / m3
- Amount rule: Meter or batch record for water entering the washing operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg marketable output washed before the declared gate.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable fresh whole papaya at the declared gate (`papaya_marketable_output`)

Record the measured accepted output of `papaya_gate_preparation` only when that operation actually occurs. Preserve species, condition, grade, moisture, lot and its real outgoing gate. This stable row id identifies an actual route output; the sole final reference is reference_product_at_declared_handoff. Retain raw output and link the selected final lot without counting it as another final product. Any UUID shown is usable only for its independently confirmed physical state/gate; an incompatible upstream/intermediate state needs a separately verified or explicit unresolved identity. Preserve the original stage measurement and collection records.

- Selected flow: Papayas `5f8859fd-4690-4c28-afbe-c4846a84da32`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Weigh the accepted net lot output of the actual operation under `cp_papaya_gate_records`, retain gross/tare, rejects, stocks, moisture and matched onward lot records, and reconcile before final normalization.

- Amount rule: measured accepted net output from the actual operation under `cp_papaya_gate_records`; retain raw lot quantity and actual stage throughput, then normalize once under the final-handoff normalization in Section 8; never prescribe a fixed intermediate yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured actual operation/lot output and throughput, retained before one final-reference normalization.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_papaya_gate_records`
- Sources: `codex-cxc-53-2003`

##### Waste flows


##### Elementary flows

### Process: Accepted-product measurement at declared handoff (`declared_reference_handoff`)
This measurement adds no processing, waste generation or emission. Preserve all real upstream operations and losses; bypass only operations demonstrated absent. Select one actual terminal product lot and cancel its paired internal transfer once when aggregating the system. Do not sum inactive routes, co-products or both source and handoff as accepted final output.

#### Inputs
##### Product flows
###### Accepted actual-route product at the same handoff (`actual_route_product_for_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Papayas `5f8859fd-4690-4c28-afbe-c4846a84da32`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net mass at this same handoff, normalized as R/R * 1 kg; paired input equals accepted output, with raw R retained
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
- Selected flow: Papayas `5f8859fd-4690-4c28-afbe-c4846a84da32`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
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

- `allocation_marketable_output`: Allocate crop-cycle inputs and direct cultivation exchanges to marketable fresh papaya using marketable mass as the primary output basis. `source_ids`: `iso-14044-2006`.
- `allocation_rejects`: Treat field and gate rejects as waste unless a documented receiving route creates a separately specified co-product. Do not assign avoided-product credit within this PCR. `source_ids`: `iso-14044-2006`, `fao-gap-framework-2003`.
- `allocation_reusable_containers`: Model reusable harvest containers and crates by recorded service cycles; assign their production burden across documented uses and retain consumed packaging as a separate input. `source_ids`: `iso-14044-2006`, `codex-cxc-53-2003`.

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `papaya_mobile_fuel_specific_input` | `cp_papaya_input_records` | Operation papaya_crop_management: Record fuel used by tractors, pumps, sprayers, mowers, and other mobile or field machinery that crosses the cultivation boundary. Original quantity method: Meter, invoice, or equipment log allocated to the papaya field or protected unit. |
| `papaya_crop_protection_specific_input` | `cp_papaya_input_records` | Operation papaya_crop_management: Record only crop-protection products actually applied, retaining active ingredient, formulation, application rate, and target treatment. The product identity requires foreground binding before publication. Original quantity method: Product mass and declared active-ingredient mass by application event. |
| `papaya_primary_packaging_specific_input` | `cp_papaya_gate_records` | Operation papaya_gate_preparation: Record only primary packaging applied before the declared gate, including material, mass, reusable cycles, and packaging loss. Original quantity method: Count packages and record consumed material mass per marketable output lot. |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_papaya_establishment_records` | `papaya_crop_establishment` | planting material and occupied area | field establishment record | cultivar; material type; supplier; quantity; field or protected-unit id; planted area; cycle start | supplier record, planting log, and area register; Raw aggregation and attribution: reconcile planted quantity and area to the same cycle | seedling, kg, ha | each cycle | full declared crop cycle | each represented field or protected unit | per declared reference flow | purchase record, planting log, and field map |
| `cp_papaya_input_records` | `papaya_crop_management` | water, fuel, nutrient products, crop protection, and emissions basis | input and application record | product; formulation; nutrient or active ingredient; quantity; source; application date; irrigation meter; fuel meter; field id | invoice review, meter reading, application log, and source register; Raw aggregation and attribution: sum applications and meter periods after field and cycle reconciliation `papaya_mobile_fuel_specific_input`: Operation papaya_crop_management: Record fuel used by tractors, pumps, sprayers, mowers, and other mobile or field machinery that crosses the cultivation boundary. Original quantity method: Meter, invoice, or equipment log allocated to the papaya field or protected unit. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `papaya_crop_protection_specific_input`: Operation papaya_crop_management: Record only crop-protection products actually applied, retaining active ingredient, formulation, application rate, and target treatment. The product identity requires foreground binding before publication. Original quantity method: Product mass and declared active-ingredient mass by application event. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `papaya_soil_nitrogen_emissions_specific_emission`: Calculate direct and indirect managed-soil nitrogen emissions from the declared fertilizer, amendment, and returned-residue nitrogen basis using one declared method. Apply the declared method factor to the documented nitrogen input and retained residue basis; do not duplicate an emission already supplied by an upstream dataset. This is a mandatory emission-identification requirement, not an aggregate elementary exchange. Identify every applicable substance and actual receiving compartment separately, with compatible units, measured activity or justified calculation method, parameter applicability and uncertainty. Preserve the original operation, period, allocation and final-reference normalization. Reconcile direct and indirect pathways and upstream coverage once; do not substitute total nitrogen, total combustion emissions or a generic pollutant for a named compound. Separately document actual environmental returns, with their material and destination, if relevant. Before dataset completeness create each required specific exchange, confirm a compatible UUID or explicitly retain its unresolved identity. Missing records do not establish zero or inapplicability. `ipcc-2019-managed-soils` | kg product, kg nutrient, m3, MJ, kg fuel | each application or meter period | full declared cycle | each represented field or protected unit | per declared reference flow | invoices, meters, calibration checks, and application records |
| `cp_papaya_harvest_records` | `papaya_harvest` | containers, harvest, rejects, and residue | harvest lot and residue record | lot id; date; field id; gross mass; grade; reject mass; residue mass; container use; destination | calibrated scale, lot sheet, container log, and residue estimate; Raw aggregation and attribution: aggregate only lots sharing field, cycle, cultivar, grade, and gate `papaya_harvest_containers_specific_input`: Record reusable or single-use harvest containers entering the harvest operation and distinguish reusable service cycles from consumed packaging material. Count container uses and record material mass when a consumed container crosses the boundary. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg and container-use | each harvest lot | full harvest campaign | each harvest lot | per declared reference flow | scale check, lot reconciliation, and destination evidence |
| `cp_papaya_gate_records` | `papaya_gate_preparation` | receiving, washing, packaging, output, and gate rejects | packing or gate batch record | batch id; received mass; wash water; wash loss; packaging type and mass; cooling; accepted mass; reject mass; destination; gate; stream material/product identity; composition and contamination state; native quantity and unit; item-mass/density conversion evidence; lot; net product and packaging mass; reuse/rework; recipient; treatment route; matched reference output | batch sheet, water meter, packaging issue record, and scale; Raw aggregation and attribution: reconcile batch input to accepted output and separately identified losses `papaya_primary_packaging_specific_input`: Operation papaya_gate_preparation: Record only primary packaging applied before the declared gate, including material, mass, reusable cycles, and packaging loss. Original quantity method: Count packages and record consumed material mass per marketable output lot. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.; papaya_gate_rejects_specific_output: For each papaya gate-preparation lot, reconcile received fruit, accepted fruit, downgraded fruit, trimming, damaged fruit and handling loss independently from discarded packaging. Identify fruit streams by actual physical state and destination, and packaging by each actual material. Marketable downgraded fruit is not automatically waste; retain its evidenced product/waste role. Preserve the original per-1,000-kg marketable-output activity basis and stage-to-final-output attribution without normalizing twice. This is a mandatory collection and calculation requirement, not an inventory exchange. Before dataset completeness, create one physically specific card for each actual exported stream, including composition, state, native quantity/property, destination and evidenced product/waste role. Use only a compatible verified UUID, or explicitly register the concrete unresolved identity. Do not invent a packaging recipe, assume segregation, infer zero from missing evidence or omit a required stream. A real single mixed stream may remain one composition-defined identity only with collection/transfer evidence and compatible treatment; never duplicate it with its component exports. Keep separately handled liquid and solid streams distinct. Preserve original attribution, period, mass/water balances, reference denominator and treatment/service boundaries; link existing matching exchanges rather than count duplicates. Former aggregate ranges are not individual-stream defaults or limits. | kg, m3, package-use; kg separately for each stream; native liquid volume separately; count and mass distinct | each gate batch | full period before declared hand-off | each declared farm or first packing-site gate | per declared reference flow | scale and meter checks, packaging records, and destination records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_marketable_normalization` | all processes | Normalize each collected quantity to the accepted marketable papaya mass at the declared gate: `quantity / marketable_gate_mass`. | field, cycle, lot, and gate records | quantity per kg or 1,000 kg marketable papaya | `iso-14044-2006` |
| `calc_nutrient_equivalent` | fertilizer and soil amendments | `product_mass × declared nutrient fraction`; retain product mass and nutrient-equivalent result as separate fields. | product invoice, formulation, and declared N/P2O5/K2O fraction | product mass and nutrient mass | `fao-gap-framework-2003` |
| `calc_soil_nitrogen_emissions` | managed soil emissions | Apply one selected IPCC-compatible factor method to documented nitrogen inputs and returned residue nitrogen, with no duplicate upstream emission. | nutrient records, residue basis, method factor | declared soil-emission flows | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest and gate preparation | `gross harvested mass = marketable output + rejects + residue or process loss`, with any documented stock change shown separately. | harvest lots, gate batches, reject and residue records | reconciled mass-balance check | `codex-cxc-53-2003` |
| `calc_reusable_container_burden` | harvest containers and crates | Divide container production burden by documented service cycles and assign the used-cycle share to the represented papaya output. | container mass, material, expected or observed service cycles | container burden per declared output | `iso-14044-2006` |
| `papaya_gate_rejects_specific_output` | `papaya_gate_preparation` | For each papaya gate-preparation lot, reconcile received fruit, accepted fruit, downgraded fruit, trimming, damaged fruit and handling loss independently from discarded packaging. Identify fruit streams by actual physical state and destination, and packaging by each actual material. Marketable downgraded fruit is not automatically waste; retain its evidenced product/waste role. Preserve the original per-1,000-kg marketable-output activity basis and stage-to-final-output attribution without normalizing twice. This is a mandatory collection and calculation requirement, not an inventory exchange. Before dataset completeness, create one physically specific card for each actual exported stream, including composition, state, native quantity/property, destination and evidenced product/waste role. Use only a compatible verified UUID, or explicitly register the concrete unresolved identity. Do not invent a packaging recipe, assume segregation, infer zero from missing evidence or omit a required stream. A real single mixed stream may remain one composition-defined identity only with collection/transfer evidence and compatible treatment; never duplicate it with its component exports. Keep separately handled liquid and solid streams distinct. Preserve original attribution, period, mass/water balances, reference denominator and treatment/service boundaries; link existing matching exchanges rather than count duplicates. Former aggregate ranges are not individual-stream defaults or limits. | `cp_papaya_gate_records` | actual stream-specific exchanges, destinations and nonduplicated mass balance | `codex-cxc-53-2003` |
| `papaya_field_residue_identity_and_fate` | `papaya_harvest` | Reconcile crop residue, harvest loss and biomass by measured wet/dry basis and actual fate. Retained or incorporated biomass is an internal residue ledger used to calculate supported decomposition and nutrient pathways, not a purchased resource or an invented elementary biomass exchange. Separately collected material requires its actual product/waste identity and destination; environmental releases require identified substances and receiving compartments. This replaces an ambiguous aggregate exchange, not the collection obligation. Before dataset completeness, create one concrete card per actual exchange, verify a compatible UUID or retain an explicit unresolved identity, and record quantity, unit, stage/period, destination and evidence. Reconstruct the raw attributable numerator from the linked protocol and normalize once to the matched accepted reference output. Missing data is not zero; no range of the former aggregate is an individual-stream default. | `cp_papaya_harvest_records` | Identity-specific exchanges and reconciled activity records | `fao-gap-framework-2003` |
| `papaya_gate_wastewater_identity_and_fate` | `papaya_gate_preparation` | Identify each actually separate material stream, composition, state and recipient. Keep spent preservation agents, brine, animal/plant material, packaging, drainage and intended co-products separate when separately handled; instantiate only streams actually evidenced at this operation. A physically mixed stream may have one composition-defined identity only with compatible treatment evidence, without also counting its components as additional exports. Distinguish marketed outputs, internal rework, waste transfer, purchased treatment and elementary discharge; do not duplicate treatment burdens. This replaces an ambiguous aggregate exchange, not the collection obligation. Before dataset completeness, create one concrete card per actual exchange, verify a compatible UUID or retain an explicit unresolved identity, and record quantity, unit, stage/period, destination and evidence. Reconstruct the raw attributable numerator from the linked protocol and normalize once to the matched accepted reference output. Missing data is not zero; no range of the former aggregate is an individual-stream default. | `cp_papaya_gate_records` | Identity-specific exchanges and reconciled activity records | `codex-cxc-53-2003` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all product and input flows | Declare cultivar, material or product identity, field or protected-unit id, gate, and identity evidence gap status where no fixed or parameterized binding exists. | source records, labels, invoices, and dataset metadata |
| `quality_measurement` | mass, water, fuel, nutrient, and packaging rows | Use calibrated scales or meters where available; otherwise document the estimation method, conversion factor, and uncertainty. | calibration record, meter log, or estimation worksheet |
| `quality_temporal` | all processes | Cover the complete declared production cycle and harvest campaign, and disclose missing periods or substituted records. | cycle calendar, lot register, and data-quality note |
| `quality_completeness` | inventory and emissions | Reconcile field inputs, harvest, accepted output, rejects, residue, water, nutrient basis, and packaging to the declared gate. | mass balance, application log, and gate batch reconciliation |
| `quality_disclosure` | dataset package | Preserve all required qualifiers, boundary decisions, allocation choice, concrete flow identity verification. | dataset metadata and PCR conformance checklist |

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | actual accepted terminal product and paired transfer | scale/lot/acceptance records | species; state; grade; moisture/basis; gate; actual_terminal_process_id; actual_terminal_output_row_id; lot/transfer_id; gross/tare/net mass R; raw stage totals/throughputs; stocks, rejects and destinations | Weigh accepted net R at the existing gate; match exactly one actual terminal source of the same lot/state and reconcile all earlier losses and stocks. If conditional preparation is absent use the last actual included eligible product output, without inventing that preparation. Preserve original activity records and all required qualifiers. | kg and native activity units | each accepted lot | matched production and handoff period | existing declared producer/primary gate | per declared reference flow | calibrated weighing, acceptance/grade records, lot chain, activation/bypass evidence and closed balances |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | all foreground quantities and actual route outputs | Let R be positive measured accepted final mass in kg for one matched species/state/grade/gate/period, excluding tare, rejects, co-products and held stock. Physical ledger = raw physical quantity/R * 1 kg, without burden-allocation scaling. Attributable inventory contribution = attributable raw quantity/R * 1 kg, preserving native numerator units and the existing output/period attribution. A local intensity q_i=Q_i/O_i first reconstructs Q_i=q_i*actual linked O_i; do not divide by R again after final normalization. Both handoff sides are the same measured event R/R*1 kg, not another physical yield. Include only actual active operations; record and substantiate bypass. Missing/nonpositive R or an unlinked terminal record blocks a normalized complete result, not zero. Preserve original stage data and cancel paired internal transfers once. | cp_declared_reference_handoff; original linked collection protocols | native quantities per declared final reference | `declared-handoff-measurement-definition` |

## 9. Validation Rules

- `validation_identity`: The dataset must identify papaya cultivar or product category, field or protected unit, production route, cycle, declared gate, and all evidence gap input or output identities. `source_ids`: `fao-gap-framework-2003`.
- `validation_mass_balance`: For every harvest and gate batch, gross harvested or received mass must reconcile to marketable output, rejects, residue, wastewater or wash loss, packaging loss, and any disclosed stock change. `source_ids`: `codex-cxc-53-2003`.
- `validation_normalization`: Every normalized inventory value must use the same declared marketable gate mass and must not mix farm-gate and first-packing-site outputs. `source_ids`: `iso-14044-2006`.
- `validation_nutrient_emissions`: Nutrient-equivalent inputs and managed-soil emissions must identify their basis and use one non-duplicative calculation method. `source_ids`: `ipcc-2019-managed-soils`.
- `validation_temporal`: The dataset must cover the represented production cycle and harvest campaign or explicitly disclose missing records and substitutions. `source_ids`: `fao-gap-framework-2003`.


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | selected actual route and all conditional bypass states | Check both presence and absence of optional conditioning/packing/storage against actual records: exactly one required handoff reference persists, its source product/state/gate matches Section 3, active physical rows retain measured throughput, and inactive physical activities add no exchange. Require raw accepted mass, upstream closure, unique transfer pairing and single final normalization; an unexplained state or missing identity is not an assumed valid branch. | `declared-handoff-measurement-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh whole papaya |
| downstream_use | Secondary dataset for farm-to-gate LCA and background dataset input to product-system models when the declared gate and qualifiers match |
| allowed_use | Comparative or attributional modelling of fresh whole papaya when cultivar, geography, route, cycle, gate, marketable output, and inventory completeness are compatible |
| excluded_use | Processed papaya products; generic fruit substitution; transport, retail, consumer, or end-of-life claims beyond the declared gate; datasets with unreported rejects or residue fate |
| required_metadata | Papaya identity and cultivar, geography, route, field or protected-unit id, cycle dates, area, irrigation source, nutrient and crop-protection basis, harvest and grade, washing, cooling, packaging, reject and residue destinations, declared gate, reference mass, concrete flow identity verification, and identity evidence gap coverage |
| required_quality_disclosure | Measurement basis, collection period, completeness, mass-balance result, allocation rule, provisional ranges, data substitutions, uncertainty, and evidence gap UUID or flow identities |
| update_trigger | Change in cultivation route, irrigation system, nutrient or crop-protection programme, harvest or gate handling, packaging, accepted product definition, method factors, or resolved identity mappings |

Evidence applicability: cited general farm-record and postharvest frameworks do not supply crop-specific yields, lifetimes, gate cutoffs or LCA allocation defaults. Those are this PCR methodology decisions; qualify them by the actual species, route and period and obtain compatible agronomic evidence before asserting completeness. Provisional author ranges are screening aids, not empirical acceptance limits or substituted measurements.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-irrigation-drainage-paper-56` | handbook | FAO Irrigation and drainage paper 56, *Crop evapotranspiration* | irrigation measurement and water-delivery distinction |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, managed soils and nitrogen emissions | managed-soil nitrogen calculation and non-duplication rule |
| `codex-cxc-53-2003` | official_guidance | Codex Alimentarius CXC 53-2003, Code of hygienic practice for fresh fruits and vegetables | harvest, washing, packing, hygiene, batch reconciliation, and gate handling |
| `iso-14044-2006` | standard | ISO 14044:2006, environmental management—life cycle assessment—requirements and guidelines | normalization, allocation, reusable-container treatment, and validation principles |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | Generic monitoring and farm-record context only; crop-specific routes, lifetimes, quantitative ranges and LCA allocation are PCR choices requiring separate applicable evidence. |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | This PCR Sections 3, 6 and 8: matched accepted handoff mass divided by itself times the declared reference amount; physical transfer pairing and dimensional normalization identity, not an empirical yield or new physical operation. | single accepted reference and measured route-throughput linkage |
