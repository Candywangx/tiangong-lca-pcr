---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-flours
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other cereal flours

## 1. Scope and Applicability

This PCR applies to the foreground production of dry flour obtained by milling a declared cereal grain other than wheat or meslin. It covers mill-gate operations from receipt of the cereal grain through cleaning, conditional conditioning or pearling, milling and separation, conditional flour treatment, finishing, bulk loading or packaging, and site utility and dust-control services.

The foreground data package shall identify the cereal species or declared cereal blend and shall distinguish food-grade, feed-grade, or another verified grade. It shall also state whether the flour is whole-grain or refined, its extraction or ash specification where used, moisture basis, particle-size specification, treatments or additives, and bulk or packaged delivery state.

This PCR excludes wheat and meslin flour, groats or meal not sold as flour, isolated starch, prepared flour mixes containing material non-cereal ingredients, and flours made from roots, tubers, pulses, oilseeds, nuts, or other non-cereal materials. Cereal cultivation, harvest, external grain drying, and inbound transport are outside the foreground mill boundary and require linked upstream datasets when included in a cradle-to-gate study. Retail, food preparation, consumption, and end-of-life of the flour product are outside scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-flours |
| classification_refs | CPC 3.0: 23120, Other cereal flours, exact |
| covered_products | Dry flour made from a declared non-wheat/non-meslin cereal such as rye, barley, oats, maize, rice, sorghum, millet, or an in-scope cereal blend |
| excluded_products | Wheat or meslin flour; groats, meal, pellets, or starch not sold as flour; prepared mixes; non-cereal flours; wet batters or doughs |
| representative_product | `Flour` as the verified Tiangong representative product identity; the foreground package must declare the actual cereal and grade |
| production_route | Receipt and storage; cleaning; conditional conditioning, dehulling, or pearling; milling and separation; conditional flour treatment; finishing; bulk dispatch or packaging |
| market_state | Dry, saleable cereal flour at the mill gate, in declared bulk or packaged form and at declared moisture and particle-size specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of dry, saleable flour made from the declared cereal and meeting the declared grade and product specification at the mill gate |
| How much | 1 kg net flour |
| How well | Declared cereal species or blend, grade, whole-grain or refined status, extraction or ash specification where applicable, moisture, particle size, treatment/additive status, and delivery form |
| How long or cycle | One production and dispatch batch at the mill gate; no use-duration function is assigned |
| reference_flow_link | The reference product output `flour_product_output` realizes the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Flour `67b80ae5-687f-418a-84ba-f06b01a6139b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cereal species or declared blend; food-grade, feed-grade, or other verified grade; whole-grain or refined status; extraction or ash specification where applicable; moisture basis; particle-size specification; heat treatment, micronisation, fortification, or additive status; bulk or packaged delivery state |

The Tiangong reference flow is named `Flour` and its source record carries a feed-grade descriptor. Retain this flow only when its identity and qualifiers represent the modelled product. For a product of another grade, or whenever the generic identity is otherwise unsuitable, replace it with a more specific Tiangong product flow whose name, classification, state, flow property, and unit support have been independently verified. Do not silently reuse the generic UUID.

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference flour output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net saleable flour as received at the declared moisture; exclude packaging mass from the reference amount. |
| `moisture_basis` | Grain, intermediate flour, co-products, and final flour | Mass and measured moisture fraction | kg and % mass fraction | Record whether each mass is as received or dry matter. Convert between bases only with lot- or batch-specific moisture measurements using `calc_dry_matter`. |
| `energy_accounting` | Purchased electricity, fuels, steam, and exported energy | Carrier-specific energy property | Carrier unit and MWh | Preserve original metered carrier units, disclose conversion factors, and calculate a site total in MWh without double counting purchased and generated energy. |
| `water_accounting` | Conditioning and other process water | Volume or Mass | m3 or kg | Keep conditioning water separate from other process and sanitation water when meters or batch records permit; normalize consistently to the reference flour output. |
| `packaging_mass` | Sale packaging | Mass | kg | Record packaging by material and exclude it from flour net mass; include only packaging supplied with the reference product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cereal grain of declared species, origin, moisture, storage condition, and pre-mill treatment is received at the flour mill gate |
| starting_condition_role | Foreground gate-to-gate starting point; upstream cereal production and external logistics remain linked product systems |
| product_classification_scope | Other cereal flours made from declared non-wheat/non-meslin cereal grains; classification is not a substitute for product qualifiers |
| recursive_input_rule | Purchased in-scope cereal flour used for blending or rework shall be recorded once as an upstream product input with its own dataset and shall not recursively invoke the same foreground milling route |
| upstream_dataset_requirement | Use separately documented upstream datasets for cereal grain, purchased flour, packaging, energy carriers, water supply, additives, transport when included, and waste treatment outside the mill |
| disclosure | Declare cereal identity, received condition, included mill operations, conditional treatments, co-product and waste fates, allocation method, packaging state, temporal/site coverage, and all excluded upstream or downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_mill_operations | Include receipt and storage, cleaning, milling and separation, finishing, dispatch, site energy, and dust control; include conditioning, pearling/dehulling, drying, steaming, micronisation, blending, and packaging when performed for the reference product. | eu-jrc-fdm-bref-2019 |
| `boundary_rule_2` | upstream_product_inputs | Keep cultivation, harvest, external drying, and inbound transport outside the foreground mill process, but link upstream datasets whenever the study boundary includes those burdens. |  |
| `boundary_rule_3` | air_emissions_and_captured_material | Report dust released to the environment as an elementary output; report filter dust, screenings, husk, bran, and other captured material as product or waste outputs according to actual fate. | eu-jrc-fdm-bref-2019 |
| `boundary_rule_4` | conditional_routes | Exclude an unperformed conditional operation rather than inserting a zero-throughput process; document the evidence that the operation was not used for the represented batches. | eu-jrc-fdm-bref-2019 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `grain_receipt_cleaning` | Grain receipt, storage, and cleaning | `required` | Always included for received cereal grain | Foreground material receipt, cleaning, and contaminant removal | kg received cereal grain |
| `grain_conditioning` | Conditioning, dehulling, or pearling | `conditional` | Include when water, steam, tempering, dehulling, pearling, or an equivalent preparation step is used | Foreground preparation of grain for milling | kg prepared grain |
| `milling_separation` | Milling, sifting, and separation | `required` | Always included | Foreground size reduction and separation of flour and associated streams | kg saleable flour |
| `special_flour_treatment` | Special flour treatment | `conditional` | Include when drying, steaming, micronisation, turboseparation, fortification, or another post-milling treatment is used | Foreground product-specific treatment | kg treated flour |
| `finishing_dispatch` | Blending, storage, packaging, and dispatch | `required` | Always include final storage and dispatch; include blending and packaging only when performed | Foreground finishing and product transfer at the mill gate | kg dispatched flour |
| `site_utilities_control` | Site utilities and environmental control | `required` | Include utility use and environmental controls serving represented production | Foreground facility utility accounting and direct-emission control | kg dispatched flour |

### Process: Grain receipt, storage, and cleaning (`grain_receipt_cleaning`)

#### Inputs

##### Product flows

###### Declared cereal grain input (`cereal_grain_input`)

Record each cereal species and material state separately from weighbridge, goods-receipt, or supplier records. Use a verified Tiangong product flow matching the declared cereal and state when one is assigned.

- Selected flow: Declared cereal grain; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted grain entering represented production, adjusted for stock change and kept on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources:
- Range: Provisional grain-input mass-balance QA guardrail; replace with measured yield evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 2.0
  - Unit: kg grain/kg saleable flour
  - Basis: as-received cereal input per 1 kg saleable flour, with moisture bases disclosed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned grain transferred to preparation or milling (`cleaned_grain_output`)

Record the accepted cleaned-grain mass transferred to the next operation and preserve the cereal identity and moisture basis.

- Selected flow: Cleaned declared cereal grain; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated receipt mass less measured cleaning removals and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources:

##### Waste flows

###### Cleaning rejects and contaminants (`cleaning_rejects`)

Record stones, metal, chaff, foreign seeds, spoiled grain, and other rejected material by actual treatment route. Material sold or used as a co-product shall instead be represented as a product output.

- Selected flow: Grain-cleaning rejects; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass by reject category and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg received cereal grain
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: eu-jrc-fdm-bref-2019
- Range: Provisional cleaning-reject QA guardrail; replace with site records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg rejects/kg received grain
  - Basis: as-received cleaning rejects per kg received grain
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured cleaning dust to air (`cleaning_dust_air`)

Record only dust crossing the environmental boundary. Do not include dust retained in filters or collected with screenings in this elementary row.

- Selected flow: Particulate matter to air; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured channelled and quantified diffuse dust emissions attributable to cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: eu-jrc-fdm-bref-2019

### Process: Conditioning, dehulling, or pearling (`grain_conditioning`)

#### Inputs

##### Product flows

###### Cleaned grain for preparation (`conditioning_grain_input`)

Record the cleaned grain entering only the preparation operations actually used for the declared cereal and product specification.

- Selected flow: Cleaned declared cereal grain; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_batches`
- Sources: eu-jrc-fdm-bref-2019

###### Conditioning water (`conditioning_water`)

Include water added for dampening or tempering. Keep steam condensate or separately metered sanitation water distinct.

- Selected flow: Process water; Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered water or batch recipe addition used for represented grain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: eu-jrc-fdm-bref-2019
- Range: Provisional conditioning-water QA guardrail; replace with measured moisture-balance evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: m3/tonne saleable flour
  - Basis: conditioning water per tonne saleable flour
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared grain for milling (`prepared_grain_output`)

Record conditioned, dehulled, pearled, or otherwise prepared grain transferred to milling, including its post-preparation moisture.

- Selected flow: Prepared declared cereal grain; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured output mass with preparation method and moisture recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_batches`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

###### Hulls and preparation rejects (`conditioning_rejects`)

Record hulls and other removed material by actual fate. Reclassify a marketable or internally used stream as a product output.

- Selected flow: Cereal hulls or preparation rejects; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: eu-jrc-fdm-bref-2019

##### Elementary flows

### Process: Milling, sifting, and separation (`milling_separation`)

#### Inputs

##### Product flows

###### Grain entering the mill (`mill_grain_input`)

Record the prepared or directly cleaned grain entering size reduction and identify which preparation route supplied it.

- Selected flow: Prepared declared cereal grain; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mill-feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_batches`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable flour output (`flour_product_output`)

This is the quantitative-reference product output. The dataset shall identify the actual cereal and all required qualifiers even when the generic Tiangong flow is retained.

- Selected flow: Flour `67b80ae5-687f-418a-84ba-f06b01a6139b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net saleable flour on the declared moisture basis after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

###### Bran, germ, and other marketable cereal fractions (`milling_coproducts`)

Record each output fraction separately with its composition, moisture, destination, and market or internal-use status.

- Selected flow: Declared cereal milling co-product; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured co-product mass by stream, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

###### Captured milling and filter dust (`captured_mill_dust`)

Record dust recovered in filters or housekeeping as waste unless evidence shows that it is a marketable or internally reused product stream.

- Selected flow: Captured cereal dust; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured collected mass or a documented filter mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources: eu-jrc-fdm-bref-2019

##### Elementary flows

###### Uncaptured milling dust to air (`milling_dust_air`)

Record measured channelled and quantified diffuse particulate emissions after abatement. The concentration range below is a BAT screening benchmark, not a substitute for jurisdiction-specific limits or normalized emission mass.

- Selected flow: Particulate matter to air; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: exhaust concentration multiplied by measured dry-gas volume and operating time, plus quantified diffuse releases where material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: eu-jrc-fdm-bref-2019
- Range: EU grain-milling BAT channelled-dust screening upper endpoint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: mg/Nm3
  - Basis: average over the applicable sampling period for channelled dust after abatement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: eu-jrc-fdm-bref-2019

### Process: Special flour treatment (`special_flour_treatment`)

#### Inputs

##### Product flows

###### Flour entering special treatment (`untreated_flour_input`)

Include only the flour fraction sent to drying, steaming, micronisation, turboseparation, fortification, or another declared treatment.

- Selected flow: Flour `67b80ae5-687f-418a-84ba-f06b01a6139b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass routed to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg treated flour output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_batches`
- Sources: eu-jrc-fdm-bref-2019

###### Fortificants or processing additives (`treatment_additives`)

Record each additive only when used and identify its concentration and upstream dataset.

- Selected flow: Declared fortificant or processing additive; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: batch formulation record or metered addition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg treated flour output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_batches`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated flour output (`treated_flour_output`)

Record the treated output with its moisture, particle-size or fraction, fortification, and treatment status.

- Selected flow: Treated flour; use the verified generic or a more specific Tiangong product flow as applicable
- Flow property / unit: Mass / kg
- Amount rule: measured saleable treated-flour mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg treated flour output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_dispatch`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

##### Elementary flows

### Process: Blending, storage, packaging, and dispatch (`finishing_dispatch`)

#### Inputs

##### Product flows

###### Finished flour entering dispatch preparation (`finished_flour_input`)

Record the flour transferred to final storage, blending, bulk loading, or packaging without duplicating internal transfers in the aggregated inventory.

- Selected flow: Flour `67b80ae5-687f-418a-84ba-f06b01a6139b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured internal transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dispatched flour
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_dispatch`
- Sources:

###### Packaging materials supplied with product (`packaging_inputs`)

Record bags, liners, closures, labels, and other supplied packaging separately by material; omit this row for verified bulk delivery without supplied packaging.

- Selected flow: Declared packaging material; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled with purchase and production records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dispatched flour
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional packaging-mass QA guardrail; replace with packaging bill of materials
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg packaging/kg net flour
  - Basis: supplied packaging per kg net dispatched flour
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dispatched reference flour (`dispatched_flour_output`)

Reconcile dispatched net flour with the quantitative-reference product and disclose whether the product is bulk or packaged.

- Selected flow: Flour `67b80ae5-687f-418a-84ba-f06b01a6139b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net flour after normalization; packaging excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging and product losses at finishing (`finishing_waste`)

Record damaged packaging, spills, off-spec flour, and returned internal material by fate; do not count internally reworked flour as an external waste output.

- Selected flow: Finishing waste by declared material; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the represented foreground system by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dispatched flour
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste`
- Sources:

##### Elementary flows

### Process: Site utilities and environmental control (`site_utilities_control`)

#### Inputs

##### Product flows

###### Site energy carriers (`site_energy_inputs`)

Record purchased electricity, fuels, steam, and other energy carriers separately in original units, then calculate the non-duplicated site total serving represented production.

- Selected flow: Carrier-specific energy inputs; Tiangong UUIDs unresolved
- Flow property / unit: Energy or carrier-specific property / original unit and MWh equivalent
- Amount rule: metered or invoiced energy allocated to represented production after stock, export, and on-site generation reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: eu-jrc-fdm-bref-2019
- Range: JRC grain-milling specific-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 0.13
  - Unit: MWh/tonne product
  - Basis: yearly average site energy per tonne grain-milling product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: eu-jrc-fdm-bref-2019

###### Other process and sanitation water (`other_process_water`)

Record non-conditioning process and sanitation water serving represented production when material, and keep it separate from conditioning water.

- Selected flow: Process water; Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered site water less separately recorded conditioning water and excluded uses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater sent to treatment (`mill_wastewater`)

Include wastewater only when generated and sent across the foreground boundary; identify internal reuse and treatment destination.

- Selected flow: Mill wastewater; Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume allocated to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 tonne saleable flour output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | independently_measurable_processes | First avoid allocation by subdividing receipt, preparation, milling, treatment, finishing, and utility operations and by using process- or line-specific measurements where technically feasible. | iso-14044-2006 |
| `allocation_rule_2` | joint_milling_burdens | When subdivision cannot avoid allocation among flour and co-products, use a documented physical causal relationship when it reflects how inputs and burdens change with outputs. If no defensible physical relationship exists, use economic allocation based on a representative price period and perform a sensitivity check. | iso-14044-2006 |
| `allocation_rule_3` | waste_and_coproduct_classification | Classify bran, germ, hulls, screenings, off-spec flour, and captured dust from their actual fate and evidence of intended use. Do not assign co-product status solely to avoid waste burdens, and do not allocate burdens to internally recycled material as if it crossed the system boundary. | iso-14044-2006 |
| `allocation_rule_4` | allocation_disclosure | Report the allocation method, allocation factors summing to one, physical or economic data period, zero-burden exclusions, internally recycled streams, and the sensitivity result for any material co-product allocation. | iso-14044-2006 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `grain_receipt_cleaning` | cereal receipts, cleaned transfer, and stock | weighbridge, goods-receipt, silo, and supplier records | cereal species; supplier lot; origin; mass; moisture; acceptance/rejection; silo; opening/closing stock | Calibrated weighbridge or receiving scale reconciled to supplier documents and silo stock | kg and % moisture | Each delivery and monthly stock close | Same representative period as product output; normally at least 12 consecutive months or a justified complete campaign | Each included mill and storage boundary | Sum accepted receipts plus opening stock minus closing stock; keep cereals and moisture bases separate | Scale calibration; supplier record; stock reconciliation; exception log |
| `cp_process_batches` | `grain_conditioning`; `milling_separation`; `special_flour_treatment` | process routing, intermediate transfers, water/additive recipes, and treated fractions | batch, control-system, recipe, and production logs | batch_id; cereal; route; input/output mass; moisture; process time; water; steam; additive; treatment setting | Metered transfers and signed batch or control-system records | kg; m3; carrier unit; process setting | Each batch or continuous line shift | Same representative period as product output | Each included line and treatment route | Aggregate only batches matching the declared reference product and route | Meter calibration; batch genealogy; recipe revision; operator exception log |
| `cp_product_dispatch` | `milling_separation`; `special_flour_treatment`; `finishing_dispatch` | saleable flour production and dispatch | production, silo, quality-release, packaging, and dispatch records | product_id; cereal; grade; whole/refined; extraction/ash; moisture; particle size; treatment; net mass; packaging state; destination | Reconcile released production, silo stock change, packaged output, and bulk dispatch | kg and product specification units | Each batch and monthly close | Same representative period as inputs | Each included mill and product line | Sum only conforming net flour; exclude packaging and separately track rework | Scale calibration; laboratory certificate; release record; stock reconciliation |
| `cp_coproduct_waste` | `grain_receipt_cleaning`; `grain_conditioning`; `milling_separation`; `finishing_dispatch` | co-products, rejects, captured dust, and wastes | scale ticket, sales, waste-transfer, and internal-use records | stream_id; material; mass; moisture; destination; revenue; legal status; internal reuse | Weigh each material stream or use documented container counts and verified conversion factors | kg and currency where economic allocation is used | Each transfer; monthly reconciliation | Same representative period as flour output | All included lines and waste destinations | Sum by stream and fate; internal transfers cancel in the aggregated foreground system | Scale calibration; transfer note; customer or waste-contractor record; revenue ledger |
| `cp_energy_records` | `site_utilities_control` | electricity, fuel, steam, on-site generation, and exports | meters, invoices, tank stock, and generation logs | carrier; meter_id; amount; unit; energy content/conversion factor; opening/closing stock; generated/exported amount; allocation key | Calibrated meters and invoices reconciled to fuel stock and generation records | original carrier unit and MWh | Continuous or invoice period; monthly close | Normally at least 12 consecutive months or justified full campaign | Whole site with documented exclusion or allocation of non-flour uses | Convert each carrier once; subtract exports; reconcile generated and purchased energy; allocate to represented production transparently | Meter calibration; invoice; fuel specification; reconciliation record |
| `cp_water_records` | `grain_conditioning`; `site_utilities_control` | conditioning water, other process water, and wastewater | meters, batch recipes, and discharge logs | meter_id; use_area; volume; batch_id; source; reused volume; discharge destination | Submeter where available; otherwise documented batch recipe or site balance | m3 | Continuous or per batch; monthly close | Same representative period as flour output | Each included mill and use area | Keep conditioning, other process, reused, and discharged water distinct; allocate unmetered shared use transparently | Meter calibration; recipe record; water-balance reconciliation |
| `cp_packaging_records` | `finishing_dispatch` | supplied packaging | bill of materials, purchase, stock, and packaging-line records | material_id; material type; unit mass; units used; opening/closing stock; scrap; product_id | Verified packaging specification reconciled with purchases and line counts | kg | Each packaging run and monthly close | Same representative period as packaged flour | Each included packaging line | Sum packaging supplied with product by material; exclude reusable assets not transferred | Supplier specification; count reconciliation; scale check |
| `cp_air_emissions` | `grain_receipt_cleaning`; `milling_separation`; `site_utilities_control` | channelled and material diffuse dust emissions | stack test, continuous/periodic monitor, exhaust-flow, operating-hour, and abatement records | source_id; concentration; gas volume; reference conditions; operating time; filter status; diffuse estimate method | Applicable standard measurement or documented engineering calculation using measured concentration and gas flow | mg/Nm3; Nm3; h; kg | At legally required frequency and after material control changes | Tests representative of included operating modes and production period | Every material emission point and documented diffuse source | Convert concentration and dry-gas flow to mass; normalize by matching production; do not add captured dust | Accredited test report where required; instrument calibration; sampling plan; filter maintenance record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | grain, flour, co-products, and wastes | dry mass = as-received mass × (1 − moisture mass fraction); convert back only using the target stream's measured moisture fraction | as-received mass; measured moisture fraction | dry mass or transparently converted as-received mass |  |
| `calc_reference_normalization` | all foreground inventory rows | normalized amount = period amount attributable to represented product ÷ net kg of conforming dispatched flour in the same period | attributable flow amount; dispatched reference-product mass | amount per 1 kg reference flour |  |
| `calc_site_energy` | `site_energy_inputs` | Convert each carrier to MWh with disclosed factors; purchased energy + on-site generation used − exports − excluded uses, with no double counting; divide by saleable flour tonnes | carrier records; conversion factors; generation; exports; excluded uses; product tonnes | MWh/tonne saleable flour | eu-jrc-fdm-bref-2019 |
| `calc_dust_mass` | `cleaning_dust_air`; `milling_dust_air` | emitted mass = measured concentration × dry-gas volume over operating time, converted to kg, plus separately quantified diffuse releases | concentration; dry-gas flow or volume; operating time; diffuse release estimate | kg particulate emission per reference output | eu-jrc-fdm-bref-2019 |
| `calc_mass_balance` | foreground mill system | cereal and other material inputs + opening stock = flour + co-products + wastes + direct material emissions + closing stock; report the absolute and percentage residual without forcing it to zero | moisture-aligned inputs, outputs, emissions, and stock changes | mass-balance residual and completeness indicator |  |
| `calc_allocation_factors` | joint milling burdens | Calculate factors from the selected physical relation or economic values for the same representative period; normalize factors to sum to one and retain an unrounded audit table | co-product quantities or economic values; selected allocation basis | allocation factors and sensitivity case | iso-14044-2006 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Cereal species or blend and every required qualifier shall be present and consistent across flow, process, batch, and dispatch records. | Product specification, quality-release certificate, batch genealogy, and verified Tiangong flow identity |
| `dq_measurement` | mass, moisture, water, energy, and emissions | Use calibrated instruments or documented supplier measurements; preserve raw units and reference conditions before conversion. | Calibration records, laboratory methods, invoices, meter register, and test reports |
| `dq_temporal` | foreground period | Use a continuous representative period, normally at least 12 months; justify a shorter complete campaign and disclose seasonality, shutdowns, and abnormal batches. | Coverage table, production calendar, downtime log, and justification |
| `dq_completeness` | foreground inventory | Reconcile inputs, outputs, stock change, internally recycled flows, energy, water, dust, co-products, wastes, and packaging; explain material gaps rather than balancing them with an invented flow. | Mass and utility balances, completeness checklist, and reconciliation residuals |
| `dq_route_specificity` | conditional operations | Demonstrate whether conditioning, dehulling/pearling, special treatment, blending, and packaging were used for represented batches. | Process map, batch route records, and product specification |
| `dq_source_traceability` | external and upstream data | Record source version or publication, retrieval date for web evidence, upstream dataset identity, geography, time, technology, and any substitution. | Source register and dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow_identity | Confirm the reference amount is 1 kg, Mass is the reference property, and the generic Flour UUID is used only when cereal, grade, and other qualifiers make it representative; otherwise require a verified more specific flow. |  |
| `validation_rule_2` | product_scope | Reject a data package that does not identify the cereal or that represents wheat/meslin flour, a non-cereal flour, starch, meal not sold as flour, or a prepared mix outside this PCR. |  |
| `validation_rule_3` | boundary_and_route | Confirm all required operations are represented and every conditional operation is either included with records or excluded with route evidence; verify upstream and downstream exclusions are disclosed. | eu-jrc-fdm-bref-2019 |
| `validation_rule_4` | mass_and_moisture | Recalculate dry-matter conversions and the foreground mass balance; flag inconsistent moisture bases, unexplained stock changes, duplicated internal transfers, or a material residual. |  |
| `validation_rule_5` | energy_and_water | Recalculate carrier conversions and water separation; flag double-counted on-site generation, energy exports, conditioning water, or shared site utilities. Compare site energy with the cited screening range and require an explanation, not automatic rejection, when outside it. | eu-jrc-fdm-bref-2019 |
| `validation_rule_6` | dust_and_waste | Confirm captured dust is not reported as an elementary emission, channelled dust mass uses compatible concentration and gas-volume reference conditions, and waste/co-product fate matches transfer evidence. | eu-jrc-fdm-bref-2019 |
| `validation_rule_7` | allocation | Confirm subdivision was considered first, factors sum to one, the basis matches the causal or economic evidence, and a sensitivity result is disclosed for material joint burdens. | iso-14044-2006 |
| `validation_rule_8` | data_coverage | Confirm raw records cover the same products, sites, routes, and period as the reference output; list every check not performed and treat missing identity or material inventory evidence as inconclusive. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground gate-to-gate flour-milling dataset produced from real mill records |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed for representativeness and linked to appropriate upstream datasets |
| allowed_use | Process or lifecycle-model construction for the declared cereal flour, mill technology, geography, time period, grade, treatment, and delivery state |
| excluded_use | Generic use for an undeclared cereal or grade; wheat/meslin flour; agricultural cultivation; retail or use stage; substitution for a product whose required qualifiers or flow identity differ |
| required_metadata | canonical PCR id; verified reference-flow identity; cereal species/blend; grade; whole/refined status; extraction/ash where used; moisture and particle size; treatments/additives; bulk/packaged state; site/geography; technology; period; process route; upstream dataset identities; allocation method |
| required_quality_disclosure | record coverage; calibration and laboratory evidence; mass-balance residual; energy and water reconciliation; emission method; co-product/waste fate; allocation factors and sensitivity; reasoned-estimate replacements; unresolved UUID substitutions |
| update_trigger | Change in cereal or product specification, flow identity, mill route or equipment, energy mix, dust control, co-product fate, allocation basis, packaging, site boundary, or representative period that materially changes the dataset |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries* (2019), Chapter 9 and Section 17.8, https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-11) | Grain-milling process decomposition; conditional treatments; water-dependence context; specific-energy QA range; dust sources, control, and BAT screening benchmark |
| `iso-14044-2006` | `standard` | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, Clause 4.3.4.2 | Allocation hierarchy, physical/economic relation, and allocation disclosure |
