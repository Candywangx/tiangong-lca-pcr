---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetables-fresh-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Vegetables, fresh, n.e.c.

## 1. Scope and Applicability

This PCR applies to whole vegetables sold fresh at the declared farm-gate, packhouse, or equivalent first-market hand-off when the vegetable is not covered by a narrower named CPC 3.0 vegetable category. It is a residual category: the data package must first test the species, cultivar, edible part, and market route against the narrower CPC categories and use this PCR only when none applies.

The concrete data package shall declare the species or cultivar, edible part, production system, geography, crop cycle, harvest condition, and declared hand-off. Open-field, protected-cropping, and mixed-route production may be represented when the route is explicitly qualified. The PCR does not prescribe one crop technology or one vegetable species.

This PCR excludes processed, cooked, frozen, salted, pickled, fermented, dried, powdered, canned, juiced, or otherwise preserved vegetables; seed, planting material, and nursery products; animal feed or waste products; and a vegetable that belongs to a narrower named CPC category. Distribution beyond the declared first-market hand-off is outside the default boundary unless separately declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetables-fresh-n-e-c` |
| classification_refs | CPC 3.0:01290; exact residual category reference; mapping relation: exact |
| covered_products | Whole fresh vegetables, n.e.c., that remain outside narrower named CPC vegetable categories; species, cultivar, edible part, route, and market state must be declared |
| excluded_products | Narrower CPC vegetable categories; processed, frozen, salted, pickled, fermented, dried, powdered, canned, juiced, preserved, seed, planting-material, feed, and waste products |
| representative_product | The declared species or cultivar of a whole fresh residual-category vegetable at the first declared market hand-off |
| production_route | Managed crop production followed by harvest; optional primary conditioning, grading or sorting, and packaging or presentation when they occur before the declared hand-off |
| market_state | Fresh, whole, marketable product at the declared farm-gate, packhouse, or equivalent first-market hand-off; storage and distribution qualifiers are required when included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | 1 kg of declared, marketable whole fresh vegetable in the CPC 01290 residual category |
| How much | 1 kg net product at the declared first-market hand-off |
| How well | Species or cultivar, edible part, grade or marketability state, production route, geography, crop cycle, and conditioning or packaging state are declared |
| How long or cycle | One complete crop cycle and the associated harvest campaign, with the reporting period stated |
| reference_flow_link | reference_fresh_vegetable |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh vegetables at the declared producer handoff, with actual species and state declared |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species or cultivar; edible part; production system; production geography; crop cycle or harvest period; declared hand-off; fresh and whole state; grade or marketability; inclusion or exclusion of conditioning and packaging; storage duration when applicable |


When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The reference identity must cover the actual species, unprocessed state and producer handoff declared by this PCR. Independently verify the concrete identity before generating a final exchange; an identity limited to one root crop or an industrial ingredient input cannot stand for this reference product.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `rule_reference_mass_basis` | reference product and all normalized outputs | Mass | kg | Report the reference product as net fresh mass at the declared hand-off. Record gross mass, package mass, and field or ungraded mass separately when they are used to derive the net reference amount. |
| `rule_water_volume_conversion` | irrigation and conditioning water | Volume or Mass | m3 or kg | Preserve the measured source unit and document density or meter conversion when converting water records to the selected mass or volume basis. |
| `rule_nutrient_basis_declaration` | fertilizer or soil amendment input | Mass of product and declared nutrient basis | kg product and kg nutrient | Record the actual product applied and its declared N, P, K, or organic-nutrient basis; do not infer a product class from the residual vegetable category. |
| `rule_crop_cycle_time_index` | crop production inputs and outputs | Mass, energy, or substance amount | row-specific unit | Index every record to the same crop cycle and reporting period before normalization to 1 kg reference product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed crop production begins with the declared land parcel or production unit prepared for the crop cycle, plus purchased or transferred inputs entering that unit |
| starting_condition_role | Foreground production boundary for the residual fresh-vegetable category |
| product_classification_scope | CPC 3.0:01290 only after narrower named CPC vegetable categories have been excluded by species, edible part, and route review |
| recursive_input_rule | A same-category vegetable input transferred between foreground units is recorded as a product input with source identity, quantity, state, and transfer boundary; its upstream production is not recursively rebuilt inside the receiving PCR unless explicitly included as a linked dataset |
| upstream_dataset_requirement | Use a declared upstream dataset for seed or planting material, purchased nutrients or amendments, energy, water supply, packaging, and any transferred product input when those activities are outside the foreground boundary |
| disclosure | Declare the starting land or production-unit state, route, species or cultivar, crop cycle, inclusion of conditioning and packaging, and all transfers, losses, and output destinations needed to reconcile the reference product |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `rule_residual_category_gate` | product identity and reference flow | Confirm that no narrower named CPC vegetable category applies before selecting this PCR; retain the species, cultivar, edible part, and route decision in dataset metadata. | `iso-14044-2006` |
| `rule_first_market_handoff` | system boundary | End the default foreground boundary at the declared first-market hand-off of fresh whole product. Include post-harvest conditioning or packaging only when it occurs before that hand-off and is recorded as an included process. | `iso-14040-2006`; `fao-fresh-produce-hygiene-2003` |
| `rule_upstream_input_linkage` | purchased and transferred inputs | Link upstream input datasets at the point where the input crosses the foreground boundary; do not hide an upstream product system inside a local activity record. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_crop_production` | Managed crop production | required | Always included for the declared crop cycle | Produces the standing crop and records crop management inputs and environmental exchanges | Per crop cycle, normalized to 1 kg reference product |
| `p_harvest_capture` | Harvest and field capture | required | Always included for removal of the declared product from the production unit | Separates the harvested fresh vegetable from the standing crop and records harvest operations and field losses | Per harvest campaign, normalized to 1 kg reference product |
| `p_primary_conditioning` | Primary conditioning | conditional | Include when washing, trimming, cooling, cleaning, or another first conditioning step changes the declared product state before hand-off | Converts the harvested state to the declared conditioned state | Per conditioning batch, normalized to 1 kg reference product |
| `p_grading_sorting` | Grading and sorting | conditional | Include when product is classified into two or more grades or destinations before hand-off | Reconciles marketable, secondary, rejected, and loss states | Per grading batch, normalized to 1 kg reference product |
| `p_packaging_presentation` | Packaging and presentation | conditional | Include when packaging, labelling, or presentation is inside the declared boundary before hand-off | Converts the selected product state to the packaged or presented hand-off state | Per packaged batch, normalized to 1 kg reference product |

### Process: Managed crop production (`p_crop_production`)

#### Inputs

##### Product flows

###### Irrigation water (`crop_irrigation_water`)

Irrigation water is recorded when water is withdrawn or supplied to the crop-production unit for the declared cycle.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Amount rule: Metered or documented irrigation application, including declared source and conveyance losses when inside the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-crop-production-guidance-2016`

###### Urea fertilizer (`p_crop_production_agricultural_nutrient_inputs_urea`)

**Collection scope and applicability for p_crop_production_agricultural_nutrient_inputs.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Collect each fertilizer product separately. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_crop_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-fertilizer-code-of-conduct-2019`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Ammonium sulfate fertilizer (`p_crop_production_agricultural_nutrient_inputs_ammonium_sulfate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_crop_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-fertilizer-code-of-conduct-2019`; `fao-fertilizer-identities`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Triple superphosphate fertilizer (`p_crop_production_agricultural_nutrient_inputs_triple_superphosphate`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Triple superphosphate fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_crop_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-fertilizer-code-of-conduct-2019`; `fao-fertilizer-identities`

###### Potassium chloride fertilizer (`p_crop_production_agricultural_nutrient_inputs_potassium_chloride`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Potassium chloride fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_crop_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-fertilizer-code-of-conduct-2019`; `fao-fertilizer-identities`

###### Cattle manure applied as fertilizer (`p_crop_production_agricultural_nutrient_inputs_cattle_manure`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Cattle manure applied as fertilizer
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_crop_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-fertilizer-code-of-conduct-2019`; `fao-organic-nutrients`

###### Composted plant residues applied to soil (`p_crop_production_agricultural_nutrient_inputs_plant_compost`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Count physical product mass once and retain moisture, N/P/K composition and application events; nutrient quantities are calculated attributes, not additional purchases of the same product. Give unlisted compound and organic fertilizers separate cards identified by formulation or feedstock.

- Selected flow: Composted plant residues applied to soil
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_crop_inputs` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `fao-fertilizer-code-of-conduct-2019`; `fao-organic-nutrients`

###### Crop-production electricity (`crop_electricity`)

Electricity is recorded for pumps, protected-cropping equipment, lighting, controls, or other crop-production equipment inside the boundary.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or supplier invoice allocation to the declared crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Sources: `iso-14044-2006`

##### Waste flows

##### Elementary flows

###### Land occupation (`crop_land_occupation`)

Land occupation is recorded for the area and duration used by the declared crop cycle.

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2*a
- Amount rule: Declared occupied area multiplied by the crop-cycle duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_yield`
- Sources: `fao-crop-production-guidance-2016`

#### Outputs

##### Product flows

###### Standing crop hand-off (`standing_crop_output`)

The standing crop output is the declared crop state handed to harvest and is not yet the marketable reference flow.

- Selected flow: Declared standing residual-category vegetable crop
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Reconciled field output before harvest losses and downstream conditioning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_yield`
- Sources: `fao-crop-production-guidance-2016`

##### Waste flows


###### Uncollected crop residue (`crop_residue_output`)

Crop residue left in the field or removed from the crop-production unit is recorded by destination and treatment when material to the boundary.

- Selected flow: Crop residue or production loss waste
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Field residue and non-harvested biomass from crop-yield reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_yield`
- Sources: `fao-food-loss-waste-2019`

##### Elementary flows

###### Soil phosphate loss (`crop_soil_phosphate_loss`)

Phosphate released to soil is recorded when the selected method identifies a loss pathway from crop nutrient management.

- Selected flow: Soil phosphate emission
- Flow property / unit: Mass / kg PO4
- Amount rule: Apply the declared nutrient-loss method to collected P input and retention records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_inputs`
- Sources: `ipcc-2019-refinement-agriculture`

Final exchange mass is kg PO4; retain P-based activity, factors and screens in a separate ledger. Convert only the mass of P attributed to this chemical species by 95/31 exactly once, then normalize once to the accepted reference output. Do not treat total nutrient balance, soil retention or unexplained deficit as this release. Record each actual receiving compartment separately. Any gas-volume record requires its measured temperature, pressure and a supported mass conversion; it is not interchangeable with compound mass.

###### Direct soil nitrous oxide (`crop_direct_n2o`)

Direct soil nitrous oxide is calculated from the applicable nutrient-input method and declared management records.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the selected IPCC-compatible direct-emission factor to the declared N input and document factor selection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_inputs`
- Sources: `ipcc-2019-refinement-agriculture`

### Process: Harvest and field capture (`p_harvest_capture`)

#### Inputs

##### Product flows

###### Standing crop for harvest (`harvest_standing_crop_input`)

The standing crop enters harvest as the output state of managed crop production.
- Selected flow: Standing fresh vegetable crop entering harvest, declared species
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Quantity reconciled from crop production to harvest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_area_yield`
- Sources: `fao-crop-production-guidance-2016`

Link this one actual physical lot to its supplying foreground output in the documented route; match species, state, mass and gate. Do not instantiate every alternative source, purchase this internal transfer again or assume an unknown processing state. Resolve a compatible flow UUID for the actual lot, or retain the explicit unresolved identity.

###### Diesel fuel (`harvest_fuel_input_diesel`)

Only for documented diesel-powered machinery within this operation. Retain fuel grade and formulation; convert recorded volume with measured or supplier-supported density. Other powertrains require their actual carrier, not a diesel equivalent. Apply `harvest_fuel_input_specific_input`; this example is not mandatory. Do not double count inclusive machinery services or a purchased-electricity supply for electricity transferred internally from an on-site generator. Actual fuel combustion and generator emissions remain separately accountable.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect this carrier under `cp_harvest_operations` for `p_harvest_capture`. Attribute shared use once; scale attributed raw quantity by the declared reference amount divided by matched accepted final output quantity in the same product unit, retaining measured stage throughput and original allocation rules. Do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_harvest_operations`
- Sources: `route-energy-fao`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested fresh vegetable (`harvested_fresh_vegetable`)

Harvested whole fresh vegetables are handed to the next included process or directly to the declared hand-off when no downstream conditioning applies.

- Selected flow: Harvested residual-category fresh vegetable
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed or reconciled harvested mass after field losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_operations`
- Sources: `fao-crop-production-guidance-2016`

##### Waste flows


###### Harvest damage and field loss (`harvest_field_loss`)

Harvest damage and field loss are recorded when product is not transferred to the next included process.

- Selected flow: Harvest loss waste
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Difference between available standing crop and harvested hand-off, classified by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_operations`
- Sources: `fao-food-loss-waste-2019`


##### Elementary flows

### Process: Primary conditioning (`p_primary_conditioning`)

#### Inputs

##### Product flows

###### Harvested vegetable for conditioning (`conditioning_harvested_input`)

Harvested product enters conditioning when washing, trimming, cooling, or equivalent first preparation occurs before the declared hand-off.
- Selected flow: Harvested fresh vegetables entering primary conditioning, declared species
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Batch weigh-in reconciled to harvested output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-fresh-produce-hygiene-2003`

Link this one actual physical lot to its supplying foreground output in the documented route; match species, state, mass and gate. Do not instantiate every alternative source, purchase this internal transfer again or assume an unknown processing state. Resolve a compatible flow UUID for the actual lot, or retain the explicit unresolved identity.

###### Conditioning water (`conditioning_water`)

Conditioning water is included when it crosses the boundary for washing, cooling, or cleaning of the fresh vegetable.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-recorded water use, with recirculation and discharge basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-fresh-produce-hygiene-2003`

###### Conditioning electricity (`conditioning_electricity`)

Electricity for pumps, cooling, washing, trimming, or controls is recorded when the conditioning step is included.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity for the conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `iso-14044-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned fresh vegetable (`conditioned_fresh_vegetable`)

Conditioned fresh vegetable is the output after the optional first conditioning step and before grading, packaging, or hand-off.

- Selected flow: Conditioned residual-category fresh vegetable
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Batch output mass after conditioning rejects and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-fresh-produce-hygiene-2003`

##### Waste flows



###### Conditioning rejects and trimmings (`conditioning_rejects`)

Trimmings, damaged pieces, and rejected material leaving conditioning are recorded by destination.

- Selected flow: Conditioning reject or organic waste
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed reject stream reconciled to conditioning input and output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-food-loss-waste-2019`


##### Elementary flows

### Process: Grading and sorting (`p_grading_sorting`)

#### Inputs

##### Product flows

###### Conditioned or harvested vegetable for grading (`grading_product_input`)

Product enters grading when two or more quality or destination states are created before the declared hand-off.
- Selected flow: Fresh vegetables entering grading, actual species and incoming state declared
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed batch input and declared pre-grading state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_reconciliation`
- Sources: `fao-food-loss-waste-2019`

Link this one actual physical lot to its supplying foreground output in the documented route; match species, state, mass and gate. Do not instantiate every alternative source, purchase this internal transfer again or assume an unknown processing state. Resolve a compatible flow UUID for the actual lot, or retain the explicit unresolved identity.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Marketable grade output (`marketable_grade_output`)

The selected marketable grade output continues to packaging or becomes the reference flow when no packaging is included.

- Selected flow: Marketable fresh vegetable grade
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed accepted grade output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_reconciliation`
- Sources: `fao-food-loss-waste-2019`

###### Secondary grade or co-product output (`secondary_grade_output`)

Secondary grades or co-products are recorded when intentionally marketed or transferred to a distinct declared destination.

- Selected flow: Secondary fresh vegetable grade or co-product
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed secondary output with destination and market status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_reconciliation`
- Sources: `fao-food-loss-waste-2019`

##### Waste flows

###### Grading rejects (`grading_rejects`)

Rejects not transferred as a marketed product are recorded as waste with their destination and treatment route.

- Selected flow: Grading reject or organic waste
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Difference between grading input and all declared product outputs, reconciled by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_grading_reconciliation`
- Sources: `fao-food-loss-waste-2019`

##### Elementary flows

### Process: Packaging and presentation (`p_packaging_presentation`)

#### Inputs

##### Product flows

###### Marketable vegetable for packaging (`packaging_product_input`)

The marketable output enters packaging when the package or presentation is inside the declared boundary before hand-off.
- Selected flow: Accepted fresh vegetables entering packaging, actual species and incoming state declared
- Flow property / unit: Mass / kg fresh matter
- Amount rule: Weighed packaged-batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `fao-fresh-produce-hygiene-2003`

Link this one actual physical lot to its supplying foreground output in the documented route; match species, state, mass and gate. Do not instantiate every alternative source, purchase this internal transfer again or assume an unknown processing state. Resolve a compatible flow UUID for the actual lot, or retain the explicit unresolved identity.

###### Wooden crate (`packaging_material_wood_crate`)

**Collection scope and applicability for packaging_material.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

Packaging material is recorded only when packaging is included in the declared product boundary.
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Wooden crate
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

###### Corrugated fibreboard box (`packaging_material_corrugated_box`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

###### Polyethylene wrapping film (`packaging_material_pe_film`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Record composition, net mass, reuse cycles and return losses; attribute reusable items by actual use and separate packaging from product mass. Keep distinct treatment destinations separate without assuming recycling credits.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_packaging_records` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`; `fao-package-identities`

###### Packaging electricity (`packaging_electricity`)

Electricity for packing, labelling, or presentation equipment is recorded when packaging is included.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity for the packaged batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference fresh vegetable (`reference_fresh_vegetable`)

This is the final marketable fresh whole vegetable output at the declared first-market hand-off. If packaging is excluded, the last included process supplies this same reference-flow role without a packaging step.

- Selected flow: Fresh vegetables at the declared producer handoff, with actual species and state declared
- Flow property/unit: Mass / kg

Original reference-state unit annotation: Mass / kg fresh matter

Raw output measurement and reconciliation: Net marketable mass at the declared hand-off, excluding packaging mass

- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: 1 kg reference fresh vegetable.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`

##### Waste flows


##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `rule_single_output_crop_allocation` | crop production with one declared marketable output | Assign the full crop-cycle inventory to the declared reference product when no intentional co-product or secondary marketed output is reported. | `iso-14044-2006` |
| `rule_grade_output_allocation` | grading, sorting, and multiple marketed grades | Report every intentional marketed grade or co-product. Apply physical mass allocation as the default when outputs have comparable fresh-material function; use an explicitly justified alternative only when mass does not represent the relevant causal relationship. | `iso-14044-2006`; `fao-food-loss-waste-2019` |
| `rule_residue_not_coproduct` | field residue, rejects, and non-marketed losses | Treat residues and rejects as waste or destination-specific material unless they are intentionally marketed or transferred as a declared co-product with its own hand-off. | `fao-food-loss-waste-2019` |
| `rule_shared_input_allocation` | shared machinery, infrastructure, or utilities | Allocate shared records to the declared crop cycle and output set using documented area, time, mass, or activity drivers; retain the driver and contributing outputs. | `iso-14044-2006` |

Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Specific input identification before dataset completion

Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default.

| requirement_id | collection_protocol_id | Preserved collection scope |
| --- | --- | --- |
| `harvest_fuel_input_specific_input` | `cp_harvest_operations` | Operation p_harvest_capture: Fuel or a declared harvest service crosses the boundary when machinery or contracted operations remove the product from the field. Original quantity method: Harvest-operation fuel or service record allocated to the campaign |


Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_area_yield` | `p_crop_production` | area, crop-cycle output, and residue | field and harvest records | area; crop dates; cultivar; harvested mass; field residue; destination | farm records, weighbridge, calibrated measurement, and grower interview; Raw aggregation and attribution: aggregate by field and crop cycle, then reconcile to reported output | ha, kg, date | every crop cycle | full declared crop cycle | each contributing field or production unit | per declared reference flow | field map, weighbridge record, and crop-cycle log |
| `cp_crop_inputs` | `p_crop_production` | seed, water, nutrient, energy, fuel, and calculated emissions; required specific-emission identification and calculation | input and utility records | product identity; amount; nutrient basis; water meter; electricity; fuel; application date; source; substance name; receiving compartment; reported unit and elemental/compound basis; method and factor source; actual activity; period; quantity uncertainty; related existing exchanges | invoices, application logs, meters, supplier declarations, and method calculation; Raw aggregation and attribution: allocate shared records by documented crop-cycle driver `crop_fuel_specific_input`: Fuel is recorded for tractors, pumps, heating, or other mobile or stationary crop-production equipment inside the boundary. Fuel issue, meter, or invoice record allocated to the declared crop cycle This is a mandatory specific-input collection requirement, not a selected exchange. Identify every actual formulation, carrier or independently supplied service from primary records, with physical identity, state, native quantity and supplier specifications. Create a separate concrete card for each actual input before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. Product mass and contained active-substance mass are different ledgers: convert only using documented composition and never count both as two purchases. Finished feed and separately added ingredients must not duplicate its recipe. Distinguish fuel purchase, purchased electricity/heat and inclusive machinery services; charge only their actual boundaries once. Preserve the original operation, period, attribution and final-output normalization. Missing identity or records do not establish zero use; no universal component range or invented recipe is supplied. `iso-14044-2006` `crop_input_packaging_waste_specific_output`: Packaging discarded from crop inputs is recorded when it crosses the foreground boundary as a separately managed waste stream. Weighed waste or supplier-packaging reconciliation This is a mandatory specific-output collection requirement, not a selected exchange. Preserve every actual waste, residue, reject and co-product from this operation. Create separate cards for physically distinct streams with actual material, composition/state, quantity, receiving route and Product/Waste role before dataset completeness; verify a compatible UUID or explicitly retain its unresolved identity. A genuinely mixed stream may remain one physically defined mixture supported by composition records; never invent separation or count its components again. Keep liquid and solid treatment quantities separate. Preserve original period, output balance, reference normalization and allocation rules; missing records do not establish zero or exclusion. `fao-food-loss-waste-2019`; crop_soil_nitrogen_loss_specific_emission: Reconcile crop-cycle nutrient inputs, crop removal, soil storage and the method-supported nitrogen-loss pathways for the actual vegetable crop. A residual nitrogen balance or retained soil N is not automatically an elementary emission to soil. Establish the actual substance and receiving medium before creating any release; retain original crop attribution and final fresh-vegetable normalization. This is a mandatory identification and calculation requirement, not an exchange. Before dataset completeness, instantiate one concrete elementary card per actual substance and receiving compartment. Retain kg substance separately from kg elemental N; convert only from the method-reported basis using the documented composition or stoichiometric fraction of the identified species. Never equate all nitrogen with a chosen compound or add elemental-N and compound masses as separate releases. Preserve source activity, factor units, period, uncertainty, boundary and original normalization; link to an existing matching card instead of counting a duplicate. Verify a compatible UUID or explicitly register the concrete unresolved identity. Missing identity, method or activity evidence does not establish zero or justify omission. | kg, m3, kWh, MJ, kg nutrient; kg of each identified substance and kg N recorded separately | each application or meter period | full declared crop cycle | each contributing field or production unit | per declared reference flow | invoice, meter, application record, and factor-selection note |
| `cp_harvest_operations` | `p_harvest_capture` | harvested output, harvest fuel, and losses | harvest campaign records | operation date; machinery or contractor; fuel or service; harvested mass; damage; field destination | harvest log, fuel issue, contractor record, and weighbridge; Raw aggregation and attribution: reconcile standing crop, harvested output, and loss destinations `harvest_fuel_input_specific_input`: Operation p_harvest_capture: Fuel or a declared harvest service crosses the boundary when machinery or contracted operations remove the product from the field. Original quantity method: Harvest-operation fuel or service record allocated to the campaign Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. | kg, L, MJ, date | each harvest event | full harvest campaign | each harvest block or campaign | per declared reference flow | harvest log, scale record, and contractor invoice |
| `cp_conditioning_records` | `p_primary_conditioning` | conditioning input, water, electricity, rejects, wastewater, and output | batch and utility records | batch id; input mass; water; electricity; reject mass; wastewater; output mass; treatment route | batch sheet, meters, scale, and wastewater record; Raw aggregation and attribution: reconcile input to output, rejects, and wastewater by batch | kg, m3, kWh | each batch | all included conditioning batches | each conditioning line or site | per declared reference flow | batch sheet, scale calibration, meter record, and treatment receipt |
| `cp_grading_reconciliation` | `p_grading_sorting` | grade outputs, rejects, and grading input | grading and sales records | batch id; input; accepted grade; secondary grade; reject; destination; sale status | grading log, scale, sales record, and destination record; Raw aggregation and attribution: reconcile input to all product outputs and rejects | kg, date | each grading batch | all included grading batches | each grading line or site | per declared reference flow | grade log, scale record, and destination evidence |
| `cp_packaging_records` | `p_packaging_presentation` | product input, packaging, electricity, rejects, and reference output | packaging and dispatch records | batch id; product input; material and mass; reuse status; electricity; reject; net output; hand-off; stream material/product identity; composition and contamination state; native quantity and unit; item-mass/density conversion evidence; lot; net product and packaging mass; reuse/rework; recipient; treatment route; matched reference output | packaging bill of materials, scale, meter, and dispatch record; Raw aggregation and attribution: report net product separately from packaging mass and reconcile rejects; packaging_rejects_specific_output: For each vegetable packaging batch, weigh or reconcile discarded packaging by actual material separately from rejected vegetable net mass. Retain species, product state, composition, packaging tare, actual destination and reuse status. A packaged-product reject may remain one exchange only if it is physically transferred as one documented composite stream with fruit/vegetable and packaging fractions evidenced; do not also export those fractions as independent waste exchanges. Reconcile input, accepted net product, rejects and stocks on the same batch scope. This is a mandatory collection and calculation requirement, not an inventory exchange. Before dataset completeness, create one physically specific card for each actual exported stream, including composition, state, native quantity/property, destination and evidenced product/waste role. Use only a compatible verified UUID, or explicitly register the concrete unresolved identity. Do not invent a packaging recipe, assume segregation, infer zero from missing evidence or omit a required stream. A real single mixed stream may remain one composition-defined identity only with collection/transfer evidence and compatible treatment; never duplicate it with its component exports. Keep separately handled liquid and solid streams distinct. Preserve original attribution, period, mass/water balances, reference denominator and treatment/service boundaries; link existing matching exchanges rather than count duplicates. Former aggregate ranges are not individual-stream defaults or limits. | kg, kWh, date; kg separately for each stream; native liquid volume separately; count and mass distinct | each packaged batch | all included packaging batches | each packaging line or site | per declared reference flow | packaging specification, scale calibration, utility record, and dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `rule_normalize_to_reference_flow` | all inventory rows | `normalized_amount = recorded_or_calculated_amount / net_marketable_reference_mass` | row amount; net marketable reference mass | amount per 1 kg reference fresh vegetable | `iso-14044-2006` |
| `rule_calculate_crop_yield_reconciliation` | crop production and harvest | `standing_crop = harvested_output + field_loss + residue + other_declared_destinations` | field output; harvested mass; losses; residues; destinations | reconciled crop-cycle output set | `fao-crop-production-guidance-2016`; `fao-food-loss-waste-2019` |
| `rule_calculate_nutrient_basis` | fertilizer or soil amendment input | `nutrient_basis = product_mass * declared_nutrient_fraction` for each declared nutrient basis | product mass; supplier or laboratory nutrient fraction | kg N, P, K, or organic nutrient | `fao-fertilizer-code-of-conduct-2019` |
| `rule_calculate_crop_emissions` | crop elementary outputs | Apply the selected IPCC-compatible factor or measured value to the declared nutrient input, soil, climate, and management records; document factor hierarchy and units. | nutrient input; management records; selected factor; measured emissions where available | normalized substance-specific elementary flows | `ipcc-2019-refinement-agriculture` |
| `rule_reconcile_grade_outputs` | grading and sorting | `grading_input = marketable_grade + secondary_grade + reject + unaccounted_loss`; unaccounted loss must be investigated or disclosed | grading input; all declared outputs; reject; loss | complete grade-output reconciliation | `fao-food-loss-waste-2019` |
| `rule_reconcile_packaged_output` | packaging and presentation | `product_input = net_reference_output + packaging-process_product_loss + other_declared_product_destinations` and packaging mass is reported separately | product input; net output; losses; package material | net reference flow and package inventory | `iso-14044-2006` |
| `crop_soil_nitrogen_loss_specific_emission` | `p_crop_production` | Reconcile crop-cycle nutrient inputs, crop removal, soil storage and the method-supported nitrogen-loss pathways for the actual vegetable crop. A residual nitrogen balance or retained soil N is not automatically an elementary emission to soil. Establish the actual substance and receiving medium before creating any release; retain original crop attribution and final fresh-vegetable normalization. This is a mandatory identification and calculation requirement, not an exchange. Before dataset completeness, instantiate one concrete elementary card per actual substance and receiving compartment. Retain kg substance separately from kg elemental N; convert only from the method-reported basis using the documented composition or stoichiometric fraction of the identified species. Never equate all nitrogen with a chosen compound or add elemental-N and compound masses as separate releases. Preserve source activity, factor units, period, uncertainty, boundary and original normalization; link to an existing matching card instead of counting a duplicate. Verify a compatible UUID or explicitly register the concrete unresolved identity. Missing identity, method or activity evidence does not establish zero or justify omission. | `cp_crop_inputs` | separate substance/compartment emissions and elemental ledgers | `ipcc-2019-refinement-agriculture` |
| `packaging_rejects_specific_output` | `p_packaging_presentation` | For each vegetable packaging batch, weigh or reconcile discarded packaging by actual material separately from rejected vegetable net mass. Retain species, product state, composition, packaging tare, actual destination and reuse status. A packaged-product reject may remain one exchange only if it is physically transferred as one documented composite stream with fruit/vegetable and packaging fractions evidenced; do not also export those fractions as independent waste exchanges. Reconcile input, accepted net product, rejects and stocks on the same batch scope. This is a mandatory collection and calculation requirement, not an inventory exchange. Before dataset completeness, create one physically specific card for each actual exported stream, including composition, state, native quantity/property, destination and evidenced product/waste role. Use only a compatible verified UUID, or explicitly register the concrete unresolved identity. Do not invent a packaging recipe, assume segregation, infer zero from missing evidence or omit a required stream. A real single mixed stream may remain one composition-defined identity only with collection/transfer evidence and compatible treatment; never duplicate it with its component exports. Keep separately handled liquid and solid streams distinct. Preserve original attribution, period, mass/water balances, reference denominator and treatment/service boundaries; link existing matching exchanges rather than count duplicates. Former aggregate ranges are not individual-stream defaults or limits. | `cp_packaging_records` | actual stream-specific exchanges, destinations and nonduplicated mass balance | `fao-food-loss-waste-2019` |
| `crop_reactive_n_emissions_specific_exchanges` | `p_crop_production` | Identify and calculate each actual ammonia and nitrogen-oxide species separately by receiving compartment. Instantiate one elementary card per substance and compartment before dataset completion. Retain the method-reported NOx convention; a mixed NOx or total-N quantity cannot be relabelled as one species. Convert species-specific elemental-N mass to compound mass only with the applicable stoichiometry; do not reconvert compound mass. Retain the linked protocol and actual process attribution. Reconstruct each attributable raw numerator on its recorded stage basis, then normalize once to the matched accepted reference output. Missing identity, quantity, unit or destination blocks dataset completeness; absence requires evidence, not an assumed zero. | `cp_crop_inputs` | Separate atomic exchanges; completeness required | `ipcc-2019-refinement-agriculture` |
| `conditioning_wastewater_specific_exchanges` | `p_primary_conditioning` | Enumerate vegetable-conditioning wastewater, its treatment service and any actual environmental release as separate actual streams. Measure each physical stream with its own composition, state, native unit, lot/period and destination; instantiate one atomic card per specific stream and boundary role. Distinguish waste transfer, purchased treatment and substance-specific discharge; do not treat a disposal service as the wastewater itself or duplicate treatment burdens. Keep stock, rework, marketed downgrade and discarded waste separate, and count physical mixtures once without also counting their components as additional exits. Retain the linked protocol and actual process attribution. Reconstruct each attributable raw numerator on its recorded stage basis, then normalize once to the matched accepted reference output. Missing identity, quantity, unit or destination blocks dataset completeness; absence requires evidence, not an assumed zero. | `cp_conditioning_records` | Separate atomic exchanges; completeness required | `fao-fresh-produce-hygiene-2003` |
| `crop_seed_or_propagule_identity_and_fate` | `p_crop_production` | For the original crop_seed_or_propagule collection role at this operation, identify the actual physical form, species/material, composition, state and supply/treatment boundary before creating exchanges. Each seed lot, transplant, crown, cutting, larval stage, formulation, coating, preservative or separated residue actually used/generated requires its own concrete card where relevant to this role; these examples are alternatives, not a required recipe. Retain existing collection records and route-specific source evidence. Count-based planting records require measured or supplier-supported mass-per-unit when matched to a mass-based provider; retain count and mass as linked attributes rather than two purchases. Do not merge separate husk/shell or separate agents. A real mixed stream requires composition and recipient evidence and is counted once. Before completeness, record every applicable amount and native unit, link a compatible verified UUID or explicitly unresolved identity, preserve stock/return attribution, and normalize the attributable raw quantity once to the accepted reference output. Missing records are not zero; aggregate ranges are not individual-input defaults. | `cp_crop_inputs` | Identity-specific exchanges and reconciled activity records | `fao-crop-production-guidance-2016` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_crop_inputs`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `req_identity_qualifiers` | all datasets | Declare species or cultivar, edible part, production route, geography, crop cycle, fresh state, grade or marketability, and first-market hand-off; document the residual-category decision. | dataset metadata, crop record, and classification review |
| `req_measurement_traceability` | all quantitative rows | Prefer calibrated scales and meters, invoices, application logs, and supplier records; retain conversion factors and allocation drivers. | measurement records, calibration evidence, and supplier documentation |
| `req_temporal_coverage` | crop production and harvest | Cover one complete crop cycle and harvest campaign; explain missing events, atypical weather, or off-season operations. | crop calendar, field log, and reporting-period statement |
| `req_mass_balance_completeness` | crop, conditioning, grading, and packaging | Reconcile inputs, product outputs, co-products, residues, rejects, wastewater, and declared losses; investigate unexplained differences. | batch, grade, weighbridge, and dispatch reconciliations |
| `req_emission_method_disclosure` | calculated elementary flows | State the factor or measurement method, nutrient basis, units, geography, climate or soil assumptions, and uncertainty or replacement plan. | calculation sheet, factor reference, and method note |
| `req_route_and_scope_disclosure` | conditional processes | State whether conditioning, grading, packaging, storage, and distribution are included, and identify the first-market hand-off. | process map, site description, and hand-off record |
| `req_data_update_trigger` | published datasets | Reassess the dataset after changes in cultivar, production technology, nutrient regime, irrigation regime, conditioning line, packaging format, geography, or applicable emission method. | change log and periodic review record |

## 9. Validation Rules

The following checks are normative for every foreground data package using this PCR:

- `rule_validate_residual_category`: reject the package when a narrower named CPC vegetable category applies or when the species or cultivar and edible part are absent.
- `rule_validate_fresh_whole_state`: reject processed, frozen, salted, pickled, fermented, dried, powdered, canned, juiced, preserved, seed, planting-material, feed, or waste products.
- `rule_validate_reference_qualifiers`: require all `Required qualifiers` and require the reference amount to be 1 kg net fresh product at the declared hand-off.
- `rule_validate_process_completeness`: require `p_crop_production` and `p_harvest_capture`; require each conditional process when its inclusion condition is true and do not count an omitted conditional process as an unexplained gap.
- `rule_validate_nutrient_disclosure`: when `crop_nutrient_or_amendment` is present, require actual product identity, applied mass, declared nutrient basis, application timing, and upstream dataset or evidence reference.
- `rule_validate_mass_reconciliation`: require crop, conditioning, grading, and packaging balances to close within the declared measurement tolerance; investigate unaccounted mass.
- `rule_validate_allocation`: require all intentional marketed grades or co-products to be listed once and require the selected allocation driver and output set to be disclosed.
- `rule_validate_emission_calculation`: require substance-specific units, factor or measurement method, nutrient basis, and source evidence for every calculated elementary flow.
- `rule_validate_protocol_coverage`: require every collected or calculated row to reference a declared collection protocol and every protocol to identify temporal and site scope.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for a residual fresh-vegetable product category; may be published as a `secondary_dataset` and linked to background supply datasets |
| downstream_use | Construction of product, process, and lifecyclemodel projections for fresh whole vegetables in CPC 01290 when the residual-category gate is satisfied |
| allowed_use | Comparative or attributional LCA when species or cultivar, route, geography, crop cycle, hand-off, inventory basis, and data quality are disclosed |
| excluded_use | Processed or preserved vegetables; seed or planting material; feed or waste products; substitution claims without explicit evidence; extrapolation across unqualified species, route, geography, or market state |
| required_metadata | CPC 3.0:01290; canonical PCR id; species or cultivar; edible part; route; geography; crop cycle; hand-off; included processes; reference amount; reference flow identity; nutrient and irrigation basis; grade and loss destinations; packaging and storage scope |
| required_quality_disclosure | Data origin and period; site or field coverage; measurement and allocation methods; mass-balance status; emission-factor or measurement methods; exclusions; uncertainty or provisional ranges |
| update_trigger | New narrower classification coverage; changed cultivar or production route; material changes in nutrient, irrigation, energy, conditioning, grading, or packaging practice; revised emission methods; material data-quality findings |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14040-2006` | standard | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html | PCR boundary framing and life-cycle inventory principles |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | allocation, inventory normalization, data quality, and validation rules |
| `fao-crop-production-guidance-2016` | official_guidance | FAO, Save and Grow in practice: maize, rice, wheat, 2016, https://www.fao.org/3/i4009e/i4009e.pdf | crop-cycle records, field inputs, yield and production-unit evidence |
| `fao-fertilizer-code-of-conduct-2019` | official_guidance | FAO, International Code of Conduct for the Sustainable Use and Management of Fertilizers, 2019, https://openknowledge.fao.org/3/ca5253en/ca5253en.pdf | nutrient-basis declaration and fertilizer record requirements |
| `ipcc-2019-refinement-agriculture` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | nutrient-related agricultural emission calculation method and factor disclosure |
| `fao-food-loss-waste-2019` | official_guidance | FAO, The State of Food and Agriculture 2019: Moving forward on food loss and waste reduction, https://www.fao.org/3/ca6030en/ca6030en.pdf | loss, reject, residue, destination, and reconciliation rules |
| `fao-fresh-produce-hygiene-2003` | official_guidance | FAO and WHO, Assuring Food Safety and Quality: Guidelines for Strengthening National Food Control Systems, 2003, https://www.fao.org/3/y8705e/y8705e.pdf | fresh-produce conditioning, water, hand-off, and hygiene-related record requirements |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | conditional concrete identities and method context; does not establish site use or quantities |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | Equipment/carrier possibilities only; site records govern applicability. No intensity, fuel share or default recipe is adopted. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
