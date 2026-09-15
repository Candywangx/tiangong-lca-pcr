---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-high-speed-steel-of-a-width-of-less-than-600-mm-not-further-wor-cb876d72
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of high-speed steel of a width of less than 600 mm, not further worked than hot- or cold-rolled

## 1. Scope and Applicability

This PCR applies to high-speed-steel flat-rolled strip, coil, or sheet with a finished width below 600 mm, sold at the factory gate in a hot-rolled or cold-rolled state and not further worked. It covers gate-to-gate receipt of declared high-speed-steel feedstock, route-specific surface preparation, hot or cold rolling, route-required annealing, cooling, coiling, slitting or cutting to declared dimensions, inspection, and corrosion-protective oiling when these operations remain integral to producing the declared rolled market state.

The PCR excludes flat products 600 mm or wider; stainless, silicon-electrical, or other alloy steels that are not high-speed steel; bars, rods, wire, forgings, castings, and fabricated parts; and products that are plated, metallic-coated, painted, clad, machined, stamped, or otherwise further worked after the declared rolling route. Steelmaking and the production of externally supplied semi-finished or hot-band feedstock are represented by linked upstream datasets rather than duplicated inside the foreground rolling boundary. Use, downstream fabrication, distribution after the factory gate, and end-of-life are outside the default boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-high-speed-steel-of-a-width-of-less-than-600-mm-not-further-wor-cb876d72 |
| classification_refs | CPC 3.0: 41234 |
| covered_products | High-speed-steel strip, coil, or sheet with finished width below 600 mm, in the declared hot-rolled or cold-rolled state and not further worked |
| excluded_products | Width of 600 mm or more; non-high-speed steels; long products; wire; forgings; castings; coated, plated, painted, clad, machined, stamped, or fabricated products |
| representative_product | Net saleable narrow high-speed-steel flat-rolled product at the rolling facility gate |
| production_route | Declared hot-rolling or cold-rolling route from identified high-speed-steel feedstock; pickling and annealing are included only when performed by the declared route |
| market_state | Coil, strip, or sheet; hot-rolled or cold-rolled; finished width below 600 mm; grade, thickness, surface condition, annealing condition, and oiling condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide narrow high-speed-steel flat-rolled product at the rolling facility gate in the declared hot-rolled or cold-rolled market state |
| How much | 1,000 kg net saleable product, excluding packaging |
| How well | Conforms to the producer-declared high-speed-steel grade, dimensions, tolerance, surface condition, and mechanical or hardness specification |
| How long or cycle | One completed production lot at the factory gate; no use-stage duration is represented |
| reference_flow_link | The reference flow is the net mass of conforming saleable product released from `finishing` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Flat-rolled products of high-speed steel of a width of less than 600 mm, not further worked than hot- or cold-rolled `541b0051-f1fa-4b04-aa1b-94d8e149dd5d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | rolling route; high-speed-steel grade and applicable specification; principal alloy composition or grade designation; finished width and thickness; coil, strip, or sheet form; hot-rolled or cold-rolled state; surface and edge condition; annealing and temper condition; corrosion-protective oiling condition; facility and production geography; production period; feedstock state, origin, and upstream dataset; net mass measurement method; factory-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all material-balance rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use verified net mass excluding packaging; normalize every foreground amount to 1,000 kg of conforming reference product. |
| `electricity_energy` | `pickling_electricity`, `rolling_electricity`, and `annealing_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain original meter data and convert purchased alternating-current electricity to MJ using 1 kWh = 3.6 MJ; do not merge electricity with furnace fuel. |
| `gas_volume` | `natural_gas_input` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gaseous natural-gas volume with the meter or supplier reference temperature and pressure; do not combine values at different reference conditions without documented conversion. |
| `water_volume` | rinse and cooling-water inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record make-up water crossing the facility boundary; exclude internally recirculated volume from the input amount and disclose the recirculation method separately. |
| `material_balance` | feedstock, product, scale, offcuts, spent process materials, and inventory change | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile dry or as-received mass consistently for the reporting period and document any unmeasured balance difference rather than assigning it to a generic waste flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received high-speed-steel semi-finished feedstock or hot band suitable for the declared rolling route, with grade, form, mass, supplier, production geography, and upstream dataset identified |
| starting_condition_role | External product input to the foreground rolling system |
| product_classification_scope | High-speed-steel flat-rolled product below 600 mm width, released in a hot-rolled or cold-rolled state without subsequent working |
| recursive_input_rule | If a purchased hot-rolled strip input already falls within this product category, link one upstream dataset for that input and do not reapply this PCR recursively inside the foreground dataset |
| upstream_dataset_requirement | Link geographically and technologically representative upstream datasets for feedstock, electricity, natural gas, water, acids, oils, protective gases, and external waste treatment; identify supplier-specific data where available |
| disclosure | Declare route, feedstock state and origin, included surface preparation and annealing stages, fuel and electricity supply, water recirculation, waste destinations, allocation, production period, geography, and any omitted or externally modelled stage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground rolling system | Include receipt and weighing of feedstock, pickling and rinsing when used, hot or cold rolling, route-required annealing, cooling, inline finishing, measured on-site utilities, generated wastes, and direct emissions through release of conforming product at the facility gate. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_upstream_links` | externally supplied inputs | Represent production and inbound supply of feedstock, energy, water, chemicals, oils, and protective gases with linked upstream datasets; do not duplicate those upstream processes inside foreground rows. | `worldsteel-lci-methodology-2017` |
| `boundary_route_condition` | hot-rolled and cold-rolled route variants | Apply pickling, cold reduction, annealing, and protective-atmosphere rows only when the declared production route actually uses the operation or exchange; do not average hot- and cold-rolled routes without production-mass weighting and disclosure. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_exclusions` | downstream life cycle | Exclude packaging, distribution after the facility gate, use, downstream fabrication or coating, capital goods, and end-of-life from the default dataset; disclose any goal-scope extension as a separate module. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt` | High-speed-steel feedstock receipt and weighing | `required` | Always included | Foreground boundary input and lot identity | Per 1,000 kg conforming reference product |
| `pickling` | Pickling, rinsing, and surface preparation | `conditional` | Include when oxide removal by acid pickling is performed before the declared rolling stage | Foreground surface preparation | Per 1,000 kg conforming reference product |
| `rolling` | Hot rolling or cold reduction | `required` | Include the declared hot-rolling or cold-rolling operation | Foreground shape and thickness reduction | Per 1,000 kg conforming reference product |
| `annealing` | Route-required annealing | `conditional` | Include when annealing is performed to obtain the declared rolled product state or properties | Foreground heat treatment | Per 1,000 kg conforming reference product |
| `finishing` | Cooling, coiling, slitting or cutting, inspection, and release | `required` | Always include operations needed to release the uncoated rolled product at declared dimensions | Foreground finishing and reference-product release | Per 1,000 kg conforming reference product |

### Process: High-speed-steel feedstock receipt and weighing (`feedstock_receipt`)

#### Inputs

##### Product flows

###### Received high-speed-steel feedstock (`high_speed_steel_feedstock`)

Record the mass of the specific semi-finished or hot-band high-speed-steel feedstock entering the foreground system, with grade, form, origin, and upstream dataset.

- Selected flow: High-speed-steel rolling feedstock
- Flow property / unit: Mass / kg
- Amount rule: Sum verified receipt or weighbridge mass attributable to the declared production lot and adjust for documented opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_records`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Pickling, rinsing, and surface preparation (`pickling`)

#### Inputs

##### Product flows

###### Pickling-line electricity (`pickling_electricity`)

Record purchased alternating-current electricity metered to pickling circulation, extraction, rinsing, drying, and associated equipment when pickling is included.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to included pickling operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Hydrochloric acid supplied to pickling (`hydrochloric_acid_input`)

Record hydrochloric acid as a separate input only when the actual pickling recipe uses it; retain supplied concentration and regeneration status.

- Selected flow: Hydrochloric acid
- Flow property / unit: Mass / kg
- Amount rule: Supplier or tank-balance mass of hydrochloric acid solution entering the included pickling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product; supplied solution concentration declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_materials`
- Sources: `ec-jrc-fmp-bref-2022`

###### Sulfuric acid supplied to pickling (`sulfuric_acid_input`)

Record sulfuric acid as a separate input only when the actual pickling recipe uses it; retain supplied concentration and recovery status.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Supplier or tank-balance mass of sulfuric acid solution entering the included pickling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product; supplied solution concentration declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_materials`
- Sources: `ec-jrc-fmp-bref-2022`

###### Demineralized rinse water (`demineralized_rinse_water`)

Record demineralized or demonstrably equivalent-quality make-up water entering the rinsing operation, excluding internal recirculation.

- Selected flow: Demineralized water
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water supplied to rinsing and attributable to included product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_water`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent pickling solution (`spent_pickling_solution`)

Record the mass of spent pickling solution transferred out of the foreground process for regeneration, recovery, or treatment, with acid chemistry and destination declared.

- Selected flow: Spent pickling solution
- Flow property / unit: Mass / kg
- Amount rule: Weighed or tank-balance mass removed from the included pickling system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

###### Acidic rinse wastewater (`acidic_rinse_wastewater`)

Record acidic rinse wastewater discharged or transferred to treatment as one identified aqueous waste stream; do not combine it with scale or spent acid.

- Selected flow: Acidic rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater volume leaving the rinsing system for on-site or external treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

###### Removed iron-oxide scale (`iron_oxide_scale`)

Record separately collected scale removed from the high-speed-steel surface and sent to recovery or treatment.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry mass, or wet mass with measured moisture correction, removed from included surface preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Hydrogen chloride released to air (`hydrogen_chloride_air`)

Record measured hydrogen chloride released after abatement when hydrochloric-acid pickling is used.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack concentration and standardized dry-gas flow integrated over operating time, or validated direct mass measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_air_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Sulfur dioxide released to air (`sulfur_dioxide_air`)

Record measured sulfur dioxide released after abatement when sulfur-bearing pickling operations generate this emission.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Stack concentration reported as sulfur dioxide and standardized dry-gas flow integrated over operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_air_emissions`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

### Process: Hot rolling or cold reduction (`rolling`)

#### Inputs

##### Product flows

###### Rolling-mill electricity (`rolling_electricity`)

Record purchased alternating-current electricity metered to the included hot-rolling or cold-reduction mill and directly associated drives.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to rolling the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling oil (`rolling_oil_input`)

Record the specific rolling oil or oil-in-water emulsion concentrate entering the rolling system when lubrication is used.

- Selected flow: Rolling oil
- Flow property / unit: Mass / kg
- Amount rule: Supplier receipts adjusted for stock change and separately documented recovery or recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product; formulation or concentrate basis declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_materials`
- Sources: `ec-jrc-fmp-bref-2022`

###### Cooling-water make-up (`cooling_water_input`)

Record water entering the rolling and heat-exchanger cooling circuits from outside the facility system, excluding recirculated cooling water.

- Selected flow: Water
- Flow property / unit: Volume / m3
- Amount rule: Metered cooling-system make-up attributable to the included rolling operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_water`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent rolling emulsion (`spent_rolling_emulsion`)

Record spent rolling emulsion removed from service and transferred for recovery or treatment; do not include emulsion retained in the recirculating circuit.

- Selected flow: Spent rolling emulsion
- Flow property / unit: Mass / kg
- Amount rule: Weighed or tank-balance mass removed from the rolling-emulsion circuit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

###### Oil-bearing rolling sludge (`rolling_oily_sludge`)

Record oil-bearing sludge or filter residue removed from rolling-oil filtration as a distinct waste stream.

- Selected flow: Oil-bearing rolling sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed as-received mass with moisture or oil-content characterization retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

### Process: Route-required annealing (`annealing`)

#### Inputs

##### Product flows

###### Annealing-line electricity (`annealing_electricity`)

Record purchased alternating-current electricity used by an included electrically heated annealing furnace and its circulation, control, and cooling equipment.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to annealing the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Gaseous natural gas for annealing (`natural_gas_input`)

Record delivered gaseous natural gas consumed by included annealing burners, with supply geography and metering reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume attributable to annealing the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product; meter temperature and pressure declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Protective nitrogen (`protective_nitrogen`)

Record nitrogen entering the annealing protective atmosphere separately from hydrogen when the declared furnace uses it.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: Metered or supplier-recorded nitrogen volume entering the included annealing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product; gas reference conditions and purity declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_gases`
- Sources: `ec-jrc-fmp-bref-2022`

###### Protective hydrogen (`protective_hydrogen`)

Record hydrogen entering the annealing protective atmosphere separately from nitrogen when the declared furnace uses it.

- Selected flow: Hydrogen gas
- Flow property / unit: Volume / m3
- Amount rule: Metered or supplier-recorded hydrogen volume entering the included annealing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product; gas reference conditions and purity declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_gases`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide released to air (`fossil_co2_air`)

Record fossil carbon dioxide from included natural-gas-fired annealing after reconciling monitored or fuel-carbon data; do not include upstream fuel-supply emissions here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Validated site emission record attributable to the included annealing furnace
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_air_emissions`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Nitrogen dioxide released to air (`nitrogen_dioxide_air`)

Record measured nitrogen oxides from included annealing combustion on the reported nitrogen-dioxide-equivalent basis; retain the conversion basis with the raw record.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack concentration reported as nitrogen dioxide equivalent and standardized dry-gas flow integrated over operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_air_emissions`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Carbon monoxide released to air (`carbon_monoxide_air`)

Record measured carbon monoxide from included annealing combustion as a separate elementary exchange.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack concentration and standardized dry-gas flow integrated over operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_air_emissions`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

### Process: Cooling, coiling, slitting or cutting, inspection, and release (`finishing`)

#### Inputs

##### Product flows

###### Corrosion-preventive oil (`corrosion_preventive_oil_input`)

Record the specific corrosion-preventive oil applied to the finished rolled surface only when the declared product is oiled.

- Selected flow: Corrosion-preventive oil
- Flow property / unit: Mass / kg
- Amount rule: Supplier receipts adjusted for stock change or calibrated applicator rate reconciled to oiled product area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming reference product; formulation and oiled area declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming narrow flat-rolled high-speed-steel product (`reference_product`)

Record only product that meets the declared grade, width, thickness, rolled state, surface, and release criteria at the factory gate.

- Selected flow: Flat-rolled products of high-speed steel of a width of less than 600 mm, not further worked than hot- or cold-rolled `541b0051-f1fa-4b04-aa1b-94d8e149dd5d`
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of 1,000 kg net conforming saleable product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol:
- Sources: `un-cpc-3-0-2025`; `worldsteel-lci-methodology-2017`

##### Waste flows

###### Segregated high-speed-steel offcuts (`high_speed_steel_offcuts`)

Record edge trim, cropped ends, and rejected high-speed-steel strip leaving the foreground process for recovery as one segregated metal waste stream.

- Selected flow: High-speed-steel offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated mass leaving finishing, adjusted for documented internal return within the same reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared rolling, pickling, annealing, and finishing operations | Prefer subdivision, dedicated meters, lot records, and direct mass tracking so burdens are assigned to the actual product route before any allocation is used. | `worldsteel-lci-methodology-2017` |
| `allocation_shared_operations` | unavoidable shared utilities or campaigns | When direct separation is not feasible, allocate by a documented physical driver that reflects the shared operation, such as processed mass, meter interval, furnace charge, operating time, or treated surface area; disclose the driver and test sensitivity for material allocations. | `worldsteel-lci-methodology-2017` |
| `allocation_offcuts_and_recovery` | offcuts, scale, spent acids, oils, and recovery outputs | Report each exported recovery stream at the foreground boundary and identify its destination; do not net waste mass or recycling credit against the reference product. Any system expansion or recycling credit belongs to an explicitly declared extended scope. | `worldsteel-lci-methodology-2017` |
| `allocation_no_double_counting` | purchased feedstock and external treatment | Do not duplicate burdens already contained in the linked feedstock, energy, material, or treatment dataset, and do not recursively reapply this PCR to the same purchased hot-rolled input. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_records` | `feedstock_receipt` | high-speed-steel feedstock | weighbridge, receipt, and inventory record | lot id; grade; form; supplier; origin; receipt mass; opening stock; closing stock | Reconcile lot receipts and inventory to production issue records | kg | Each receipt and reporting-period close | Same period as product output, normally at least 12 representative months | All feedstock entering the reporting facility | Sum attributable receipt mass plus opening stock minus closing stock | Calibrated scale certificate, supplier certificate, lot traceability, and inventory reconciliation |
| `cp_pickling_energy` | `pickling` | electricity | submeter or allocated main-meter record | meter id; start and end reading; time interval; product lots; grid supplier; voltage | Read dedicated meter; if shared, allocate by documented operating interval and processed mass | kWh and MJ | Each shift or batch, aggregated monthly | Same period as product output | Included pickling line | Sum attributable readings and convert kWh to MJ | Meter calibration, invoice reconciliation, and allocation worksheet |
| `cp_pickling_materials` | `pickling` | each pickling acid | invoice, tank level, and recipe record | chemical identity; concentration; delivered mass; opening stock; closing stock; regenerated return; product lots | Reconcile purchases and tank balances separately for each acid | kg solution and kg active acid | Each delivery and batch, aggregated monthly | Same period as product output | Included pickling baths | Sum net external input by chemical identity; keep solution and active-acid bases distinct | Supplier specification, tank calibration, recipe record, and regeneration log |
| `cp_pickling_water` | `pickling` | demineralized rinse water | water-meter record | meter id; inlet volume; recirculated volume; product lots | Meter external make-up water at the rinse system boundary | m3 | Daily or each batch, aggregated monthly | Same period as product output | Included rinsing stages | Sum external make-up only | Meter calibration and water-balance reconciliation |
| `cp_pickling_wastes` | `pickling` | each pickling waste | tank transfer, waste manifest, scale weighment, and laboratory record | waste identity; mass or volume; moisture; acid chemistry; destination; date; product lots | Record each transferred waste stream separately and reconcile with treatment manifests | kg or m3 | Each transfer, aggregated monthly | Same period as product output | Included pickling and rinsing stages | Sum by waste identity and destination | Waste manifest, calibrated scale or tank, and laboratory characterization |
| `cp_pickling_air_emissions` | `pickling` | each acid-gas emission | stack test or continuous monitoring record | substance; concentration; gas flow; moisture; oxygen; reference conditions; operating time; abatement status | Integrate validated substance-specific concentration and standardized gas flow over attributable operation | kg | Continuous where available or each required stack-test campaign | Representative of the reporting period and operating states | Included pickling exhaust points | Sum mass by substance; no aggregation into a generic air-emission row | Monitoring calibration, test report, and operating log |
| `cp_rolling_energy` | `rolling` | electricity | rolling-mill submeter record | meter id; start and end reading; interval; product lot; rolling route; grid supplier; voltage | Read dedicated mill meter or allocate a shared meter by documented operating data | kWh and MJ | Each shift or campaign, aggregated monthly | Same period as product output | Included rolling mill | Sum attributable readings and convert kWh to MJ | Meter calibration, invoice reconciliation, and production log |
| `cp_rolling_materials` | `rolling` | rolling oil | purchase, stock, formulation, and recovery record | product name; formulation; delivered mass; opening stock; closing stock; recovered mass; product lots | Reconcile net external input for the specific oil or concentrate | kg | Each delivery and reporting-period close | Same period as product output | Included rolling-oil system | Purchases plus opening stock minus closing stock minus documented external recovery return | Supplier specification, inventory record, and oil-system balance |
| `cp_rolling_water` | `rolling` | cooling-water make-up | water-meter and cooling-loop record | make-up volume; blowdown; recirculation; meter id; product lots | Meter water crossing into the cooling system and document recirculation separately | m3 | Daily, aggregated monthly | Same period as product output | Included rolling and cooling circuits | Sum external make-up attributable to rolling | Meter calibration and cooling-water balance |
| `cp_rolling_wastes` | `rolling` | each oil-bearing waste | waste manifest, tank, and filter-service record | waste identity; mass; moisture; oil content; destination; date; product lots | Weigh or tank-measure each removed emulsion or sludge stream separately | kg | Each removal, aggregated monthly | Same period as product output | Included rolling-oil and filtration systems | Sum by waste identity and destination | Waste manifest, scale or tank calibration, and characterization report |
| `cp_annealing_energy` | `annealing` | electricity or natural gas | furnace submeter and fuel-meter record | energy carrier; meter id; readings; reference temperature and pressure for gas; furnace id; charge; product lots | Meter electricity and natural gas separately for included furnace operation | kWh, MJ, and m3 | Each furnace charge or continuous-line shift, aggregated monthly | Same period as product output | Included annealing furnace and associated equipment | Sum each carrier separately and normalize to conforming output | Meter calibration, fuel invoice, furnace log, and gas-condition record |
| `cp_annealing_gases` | `annealing` | each protective gas | gas meter or supplier record | gas identity; purity; volume; temperature; pressure; cylinder or meter id; furnace charge | Meter nitrogen and hydrogen separately at consistent reference conditions | m3 | Each charge or shift, aggregated monthly | Same period as product output | Included protective-atmosphere supply | Sum by gas identity; do not report mixed gas without its component records | Supplier certificate, meter calibration, and furnace recipe |
| `cp_annealing_air_emissions` | `annealing` | each combustion emission | continuous monitor, stack test, or validated site emission record | substance; concentration; gas flow; oxygen; moisture; reference conditions; operating time; furnace and fuel data | Integrate substance-specific monitored emissions over attributable operation | kg | Continuous where available or each required stack-test campaign | Representative of the reporting period and furnace operating states | Included annealing exhaust points | Sum mass by substance and retain any equivalence conversion | Monitor calibration, stack-test report, fuel reconciliation, and furnace log |
| `cp_finishing_materials` | `finishing` | corrosion-preventive oil | supplier, stock, and applicator record | formulation; delivered mass; opening stock; closing stock; applicator rate; oiled area; product lots | Reconcile net supplied oil or calibrated application to declared oiled product | kg | Each lot and reporting-period close | Same period as product output | Included oiling equipment | Sum net external oil attributable to declared product | Supplier specification, stock reconciliation, and applicator calibration |
| `cp_finishing_wastes` | `finishing` | high-speed-steel offcuts | scale, scrap-bin, and recovery record | waste identity; grade; mass; internal return; external destination; product lots | Weigh segregated offcuts and distinguish same-period internal return from exported waste | kg | Each bin or lot, aggregated monthly | Same period as product output | Included slitting, cutting, and inspection | Sum exported offcut mass by grade and destination | Scale calibration, scrap manifest, and production reconciliation |
| `cp_product_output` | `finishing` | conforming reference product | final scale and release record | lot id; grade; width; thickness; form; rolled state; surface; annealing state; oiling state; net mass; release status | Weigh conforming product after inspection and before packaging | kg | Each released lot | Same period as all foreground inputs and outputs | All conforming product released by the reporting facility | Sum net mass of released conforming product only | Calibrated scale, inspection release, grade certificate, and dimensional record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every non-reference inventory row | normalized amount = attributable reporting-period amount / conforming product output mass × 1,000 kg | collected row amount; `cp_product_output` net conforming mass | amount per 1,000 kg reference product | `worldsteel-lci-methodology-2017` |
| `calc_electricity_conversion` | electricity rows | MJ = metered kWh × 3.6; retain both the original meter unit and conversion | metered kWh | MJ of alternating-current electricity |  |
| `calc_gas_condition_alignment` | natural gas and protective gases | Convert only when source and target temperature, pressure, and moisture basis are documented; otherwise retain the metered condition and flag the record as non-comparable | metered volume; temperature; pressure; moisture basis | m3 at declared reference conditions |  |
| `calc_material_balance` | feedstock, reference product, offcuts, scale, spent process materials, and stock change | Reconcile input mass with conforming output, separately measured material outputs, and documented inventory change; report the remaining balance difference explicitly in quality disclosure | mass records from receipt, waste, and product protocols | reporting-period mass-balance statement | `worldsteel-lci-methodology-2017` |
| `calc_shared_meter_allocation` | shared electricity, water, gas, or material records | Allocate only the unavoidable shared total using the documented physical driver selected under `allocation_shared_operations`; retain total, driver values, and sensitivity | shared total; process time, mass, charge, or area driver | attributable process amount | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | feedstock and reference product | Retain grade certificates and product records that distinguish high-speed steel, width below 600 mm, rolled state, dimensions, surface condition, and absence of further working. | Supplier certificate, internal grade record, dimensional inspection, and release certificate |
| `dq_technology` | all foreground processes | Identify hot- or cold-rolling route, pickling chemistry, rolling-mill configuration, annealing furnace and atmosphere, abatement, recirculation, and any excluded stage. | Process flow diagram, operating recipe, equipment register, and environmental permit record |
| `dq_time` | all collected amounts | Use one consistent representative reporting period, normally at least 12 months, and disclose shutdowns, abnormal operation, and non-representative campaigns. | Dated meter, production, maintenance, and environmental records |
| `dq_geography` | energy, material, and feedstock datasets | Match electricity supplier or grid, fuel supply, feedstock source, and external treatment geography to the facility and reporting period where possible; justify generic data. | Supplier records, dataset metadata, and documented data-selection rationale |
| `dq_completeness` | inventory | Account separately for every applicable listed exchange, mark genuinely absent conditional rows as not applicable in the produced dataset, and explain any measured balance difference or unmonitored expected emission. | Completed row checklist, mass and energy reconciliations, and omission log |
| `dq_measurement` | meters, scales, tanks, and emission monitors | Use calibrated instruments or documented supplier records and preserve unit, reference condition, detection limit, and allocation data. | Calibration certificates, invoices, laboratory reports, and raw meter exports |
| `dq_uuid_resolution` | UUID-empty flows | Resolve and directly audit each exact TianGong flow before publication of a fully linked dataset; do not substitute an oxygen flow for nitrogen or a generic alloy-steel product for the reference product. | Public state-code-100 direct read and semantic audit record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | Fail the package if high-speed-steel grade, width below 600 mm, hot- or cold-rolled state, product form, net mass, or absence of further working is not demonstrated. | `un-cpc-3-0-2025`; `china-mofcom-high-speed-steel-terminology` |
| `validation_reference_amount` | reference flow | Require exactly 1,000 kg net conforming product excluding packaging and verify that every included amount uses the same normalization denominator. | `worldsteel-lci-methodology-2017` |
| `validation_route_completeness` | process map and inventory | Require each declared operation to have its applicable atomic inputs, wastes, and direct emissions recorded; reject merged energy, chemical, waste, or emission collections and unexplained conditional omissions. | `ec-jrc-fmp-bref-2022` |
| `validation_energy_identity` | electricity and natural gas | Require supplier, geography, voltage and delivery boundary for electricity, and supply geography, furnace application, meter temperature, and pressure for natural gas; reject energy-carrier aggregation. | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |
| `validation_mass_balance` | material flows | Require a reporting-period reconciliation of feedstock, conforming output, separately measured offcuts, scale, spent materials, and stock change; disclose rather than fabricate any residual. | `worldsteel-lci-methodology-2017` |
| `validation_allocation` | shared operations and recovery streams | Require subdivision or a documented physical allocation driver and confirm that exported wastes, upstream datasets, and recycling effects are not double-counted or netted into product mass. | `worldsteel-lci-methodology-2017` |
| `validation_data_quality` | published dataset | Require traceable raw records, calibration evidence, reporting-period and geographic representativeness, route disclosure, unresolved-UUID disclosure, and explicit exclusions before the dataset is accepted for background use. | `worldsteel-lci-methodology-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review and linkage of representative upstream datasets |
| downstream_use | Foreground high-speed-steel product systems, process datasets, and lifecycle models needing a factory-gate narrow hot- or cold-rolled high-speed-steel input |
| allowed_use | Product systems whose grade, width, rolled state, geography, technology, time, and boundary are compatible with the published dataset and whose upstream linking and allocation are visible |
| excluded_use | Generic substitution for stainless, electrical, or other alloy steel; products 600 mm or wider; coated or fabricated products; public comparative assertions without equivalent function and required review; use-stage or end-of-life claims unless separately modelled |
| required_metadata | canonical PCR id; CPC reference; product grade and specification; composition or grade designation; width; thickness; form; rolled, annealed, surface, and oiling states; facility and geography; production period; feedstock source and upstream dataset; electricity and fuel supply; technology; boundary; allocation; waste destinations; UUID-resolution status |
| required_quality_disclosure | Data age and coverage; meter and scale calibration; mass and energy reconciliation; route and production-mass weighting; shared-meter allocation; upstream dataset representativeness; water recirculation; abatement; missing or below-detection emissions; unresolved UUIDs; exclusions; uncertainty and sensitivity |
| update_trigger | Change in high-speed-steel grade mix, hot- or cold-route share, feedstock source, rolling or annealing technology, pickling chemistry, energy supply, abatement, allocation, facility geography, or reporting period that materially changes representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official CPC 41234 product identity and exclusions implied by the leaf wording |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf (retrieved 2026-09-03) | Hot- and cold-rolling process decomposition; pickling, rinsing, oils, cooling water, annealing atmospheres, finishing, wastes, and direct-emission collection needs |
| `worldsteel-lci-methodology-2017` | `official_guidance` | World Steel Association, Life Cycle Inventory Methodology Report, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-03) | Declared mass unit, factory-gate boundary, upstream linking, geographic and technology representativeness, emissions accounting, data collection, allocation, recycling disclosure, and validation |
| `china-mofcom-high-speed-steel-terminology` | `official_guidance` | Ministry of Commerce of the People's Republic of China, Global Laws and Regulations tariff schedule page, https://policy.mofcom.gov.cn/pact/pactContent.shtml?id=1986 (retrieved 2026-09-03) | Professional Chinese terminology for high-speed-steel flat-rolled products below 600 mm width |
