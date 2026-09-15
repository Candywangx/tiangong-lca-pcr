---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-alloy-steel-not-further-worked-than-forged-hot-rolled-hot-drawn-or-ext-2b64c814
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel)

## 1. Scope and Applicability

This PCR applies to factory-gate production of alloy-steel bars and rods whose final manufacturing state is forged, hot-rolled, hot-drawn or extruded and which have not been further worked. It covers straight or cut-length products made from alloy steel other than high-speed steel and silico-manganese steel. The foreground boundary begins with received alloy-steel billets, blooms or equivalent semi-finished feedstock and ends after the declared hot-working route, descaling, cooling, cropping and inspection of the saleable product.

Products supplied in irregularly wound coils, cold-formed or cold-finished products, further-machined products, high-speed-steel bars or rods, silico-manganese-steel bars or rods, stainless-steel products, coated products and fabricated downstream articles are outside this PCR. Upstream steelmaking is represented by linked supplier datasets unless the study explicitly extends the boundary and reports it separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-alloy-steel-not-further-worked-than-forged-hot-rolled-hot-drawn-or-ext-2b64c814 |
| classification_refs | CPC 3.0: 41244 |
| covered_products | Alloy-steel bars and rods in straight or cut lengths, not further worked than forged, hot-rolled, hot-drawn or extruded |
| excluded_products | High-speed-steel or silico-manganese-steel bars and rods; stainless-steel products; irregularly wound coils; cold-formed, cold-finished, machined, coated or otherwise further-worked products |
| representative_product | Straight-length hot-rolled alloy-steel bar, cropped, cooled and inspected at the factory gate |
| production_route | Received alloy-steel semi-finished feedstock; conditioning as required; reheating; one declared hot-working route; descaling; cooling; cropping; inspection |
| market_state | Saleable factory-gate bar or rod with declared alloy grade, hot-working route, dimensions, surface condition and delivery condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable alloy-steel bars or rods in the CPC 41244 hot-worked, not-further-worked product state |
| How much | 1,000 kg net product mass, excluding transport packaging |
| How well | Conforms to the declared alloy grade, dimensions, tolerances, surface condition and delivery specification; excludes high-speed steel and silico-manganese steel |
| How long or cycle | One completed production batch at the factory gate; no service life is represented |
| reference_flow_link | The `reference_product` output of `descaling_cooling_finishing` realizes the declared unit |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy grade and specification; high-speed-steel exclusion; silico-manganese-steel exclusion; product form and cross-section; hot-working route; dimensions and tolerances; surface condition; delivery condition; production site and geography; reference period; upstream steelmaking dataset; recycled-content accounting; factory-gate boundary |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-balance rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report dry or as-delivered mass consistently, state the moisture or surface-liquid convention, exclude transport packaging and normalize the saleable reference output to exactly 1,000 kg. |
| `electricity_energy` | All purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity and convert kWh to MJ using 3.6 MJ per kWh; disclose voltage, supplier mix, geography, technology and delivery boundary. |
| `fuel_gas_volume` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the metering reference temperature, pressure and wet/dry basis; do not mix normal and standard cubic metres without a documented conversion. |
| `process_mass_balance` | Each foreground process | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile feedstock, product, scrap, scale, dust and retained work-in-process on a consistent batch basis before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Alloy-steel billets, blooms or equivalent semi-finished feedstock received at the hot-working site with supplier, grade, mass, temperature and surface condition declared |
| starting_condition_role | Upstream product input to the gate-to-gate foreground hot-working system |
| product_classification_scope | Alloy-steel bars and rods meeting CPC 3.0 code 41244; classification is supporting context and does not replace the semantic product boundary |
| recursive_input_rule | A purchased input already in this PCR product category is represented by an upstream dataset at its supplier gate and is not recursively expanded as another foreground production cycle |
| upstream_dataset_requirement | Link each received semi-finished alloy-steel input to a geographically, technologically and temporally representative steelmaking dataset; disclose BOF/EAF or other route, alloy grade and recycled-content convention |
| disclosure | Report the starting feedstock form, temperature, alloy grade, supplier geography, upstream route, hot-working route, included conditioning, descaling and finishing operations, and any boundary extension |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | Foreground process boundary | Include receiving and conditioning of semi-finished alloy steel, reheating, the declared hot-working operation, descaling, cooling, cropping, inspection, directly associated utilities, on-site waste handling and direct emissions through the factory gate. | `ec-jrc-fmp-bref-2022` |
| `boundary_upstream_link` | Upstream steelmaking | Represent alloy-steelmaking and semi-finished product production with linked upstream datasets unless the study explicitly extends the foreground boundary and prevents double counting. | `worldsteel-lci-methodology-2017` |
| `boundary_downstream_exclusion` | Downstream life-cycle stages | Exclude cold forming, cold finishing, machining, coating, fabrication, distribution, use and end-of-life from the default foreground boundary; report any optional extension separately. | `un-cpc-3-0-structure-2025`; `worldsteel-wire-rod-eco-profile-2023` |
| `boundary_energy_completeness` | Foreground utilities | Record each actual fuel, electricity supply, steam or purchased-heat exchange as a separate atomic flow; do not replace them with an aggregated utility or energy-carrier row. | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_conditioning` | Feedstock receiving and conditioning | `required` | Include receiving records in every dataset; include cutting, grinding or scarfing only when performed | Establish starting condition and prepare feedstock | kg conditioned feedstock |
| `reheating` | Feedstock reheating | `required` | Always; declare furnace type and every actual fuel or electrical heating input | Bring feedstock to the declared hot-working temperature | kg reheated feedstock |
| `hot_working` | Forging, hot rolling, hot drawing or extrusion | `required` | Select and declare the route actually used; combine routes only when separately metered and mass-balanced | Produce the bar or rod cross-section by hot deformation | kg hot-worked intermediate |
| `descaling_cooling_finishing` | Descaling, cooling, cropping and inspection | `required` | Always; declare whether hydraulic descaling and direct-contact cooling are used | Produce saleable factory-gate bars or rods | 1,000 kg reference product |

### Process: Feedstock receiving and conditioning (`feedstock_conditioning`)

#### Inputs

##### Product flows

###### Received alloy-steel semi-finished feedstock (`received_alloy_steel_feedstock`)

Record each externally supplied billet, bloom or equivalent semi-finished alloy-steel input by grade, supplier and delivery condition.

- Selected flow: Alloy-steel billet or bloom
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured net mass received and accepted for the reference-product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_conditioning`
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-fmp-bref-2022`

###### Conditioning electricity (`conditioning_electricity`)

Record metered alternating-current electricity used by saws, grinders, scarfing extraction and material-handling equipment in this process.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: Metered process electricity allocated from a submeter or documented operating-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_conditioning`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned alloy-steel feedstock (`conditioned_alloy_steel_feedstock`)

This internal intermediate carries the measured alloy grade, mass and surface condition into reheating.

- Selected flow: Conditioned alloy-steel billet or bloom
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured accepted feedstock mass after conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_conditioning`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Alloy-steel conditioning scrap (`conditioning_steel_scrap`)

Record offcuts, scarfings or rejected feedstock removed before reheating as one segregated alloy-steel waste flow.

- Selected flow: Alloy-steel conditioning scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Weighed mass removed from accepted feedstock before reheating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_conditioning`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

### Process: Feedstock reheating (`reheating`)

#### Inputs

##### Product flows

###### Conditioned feedstock transferred to reheating (`reheating_feedstock`)

Record the internal conditioned alloy-steel mass charged to the reheating furnace.

- Selected flow: Conditioned alloy-steel billet or bloom
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured furnace-charge mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reheated feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reheating_energy_mass`
- Sources: `ec-jrc-fmp-bref-2022`

###### Natural gas for reheating (`natural_gas_input`)

Include this row only when gaseous natural gas crosses the furnace boundary; every other actual fuel must be added as its own atomic exchange.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`; m3
- Amount rule: Metered natural-gas volume at the declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reheated feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reheating_energy_mass`
- Sources: `ec-jrc-fmp-bref-2022`

###### Reheating auxiliary electricity (`reheating_electricity`)

Record alternating-current electricity used by furnace drives, fans, pumps, controls and directly associated extraction equipment.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: Metered reheating-process electricity or documented submeter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reheated feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reheating_energy_mass`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reheated alloy-steel feedstock (`reheated_alloy_steel_feedstock`)

This internal intermediate records the alloy-steel mass and discharge temperature delivered to hot working.

- Selected flow: Reheated alloy-steel billet or bloom
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured discharged mass, reconciled with furnace charge and scale loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reheated feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reheating_energy_mass`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from reheating (`fossil_co2_air`)

Record fossil carbon dioxide emitted from on-site combustion assigned to the reheating process.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured stack mass or calculated mass from each recorded fuel using documented carbon content and oxidation data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reheated feedstock
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reheating_emissions`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Fossil carbon monoxide from reheating (`carbon_monoxide_air`)

Record measured fossil carbon monoxide emitted through the reheating furnace stack from on-site fossil-fuel combustion.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Stack concentration multiplied by dry standardized gas flow and operating time, with oxygen-reference correction documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reheated feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reheating_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Nitrogen monoxide from reheating (`nitrogen_monoxide_air`)

Record nitrogen monoxide separately when species-resolved monitoring or a documented speciation method is available.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Species-resolved stack concentration multiplied by dry standardized gas flow and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reheated feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reheating_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Nitrogen dioxide from reheating (`nitrogen_dioxide_air`)

Record nitrogen dioxide separately; do not duplicate a total-NOx-as-NO2 result in both nitrogen-species rows.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Species-resolved stack concentration multiplied by dry standardized gas flow and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reheated feedstock
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reheating_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Forging, hot rolling, hot drawing or extrusion (`hot_working`)

#### Inputs

##### Product flows

###### Reheated feedstock transferred to hot working (`hot_working_feedstock`)

Record the internal reheated alloy-steel feedstock entering the declared hot-working route.

- Selected flow: Reheated alloy-steel billet or bloom
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured mass entering the hot-working line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot-worked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_working_mass_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling electricity (`rolling_electricity`)

For the hot-rolling route, record alternating-current electricity consumed by roughing and finishing stands and directly associated drives; other hot-working routes must use a separately metered row with the same atomic-flow discipline.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: Metered rolling-line electricity or documented equipment-level allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg hot-worked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_working_mass_energy`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot-worked alloy-steel bar or rod intermediate (`hot_worked_alloy_steel_bar_rod`)

This internal intermediate carries the measured mass, route, section and exit condition into descaling and finishing.

- Selected flow: Hot-worked alloy-steel bar or rod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured line output before final cropping and inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot-worked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_working_mass_energy`
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Alloy-steel crop and cobble scrap (`hot_working_steel_scrap`)

Record cropped ends, cobbles and rejected hot-worked product as a segregated alloy-steel waste flow.

- Selected flow: Alloy-steel crop and cobble scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Weighed scrap mass removed from the hot-working line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot-worked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_working_waste_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Dry mill scale from hot working (`hot_working_mill_scale`)

Record dry iron-oxide scale collected before hydraulic descaling separately from wet scale and sludge.

- Selected flow: Dry mill scale from alloy-steel hot working
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Weighed dry mill-scale mass collected from the hot-working process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg hot-worked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_working_waste_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Iron-oxide particulate matter from hot working (`iron_oxide_particulate_air`)

Record captured or emitted iron-oxide particulate mass from mechanical conditioning and hot-working extraction points, using the declared particle-size fraction.

- Selected flow: Iron-oxide particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured concentration multiplied by standardized exhaust-gas flow and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot-worked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hot_working_waste_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Descaling, cooling, cropping and inspection (`descaling_cooling_finishing`)

#### Inputs

##### Product flows

###### Hot-worked product transferred to finishing (`finishing_hot_worked_product`)

Record the internal hot-worked alloy-steel bar or rod mass entering final descaling, cooling, cropping and inspection.

- Selected flow: Hot-worked alloy-steel bar or rod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Measured mass entering the finishing section
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_mass_water_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Process water for descaling and cooling (`finishing_water`)

Record make-up water supplied to hydraulic descaling and direct-contact cooling; recirculated water is not counted again as a boundary input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Metered make-up water crossing the site or process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_mass_water_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Finishing electricity (`finishing_electricity`)

Record alternating-current electricity used by descaling pumps, cooling-water circulation attributable to the process, cropping equipment and inspection lines.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: Metered finishing-process electricity or documented equipment-level allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_mass_water_energy`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable alloy-steel bars or rods (`reference_product`)

This is the reference product after the declared hot-working route, descaling, cooling, cropping and inspection, with no further working included.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: 1,000 kg saleable product meeting the declared specification
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_finishing_mass_water_energy`
- Sources: `un-cpc-3-0-structure-2025`; `worldsteel-lci-methodology-2017`

##### Waste flows

###### Wet mill scale from descaling (`finishing_mill_scale`)

Record wet iron-oxide scale separated from descaling water; do not combine it with dry scale or wastewater.

- Selected flow: Wet mill scale from alloy-steel descaling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Weighed dewatered scale with moisture content reported
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastewater`
- Sources: `ec-jrc-fmp-bref-2022`

###### Hot-rolling wastewater containing iron oxide and oil (`finishing_wastewater`)

Record the discharged aqueous waste stream after recirculation, with suspended iron-oxide solids and oil separately characterized in the retained analysis.

- Selected flow: Hot-rolling wastewater containing suspended iron oxide solids and oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: Metered wastewater mass discharged from the foreground boundary after internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastewater`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared foreground operations | Prefer process subdivision, submetering and batch-specific mass tracking so conditioning, reheating, hot working and finishing burdens are assigned directly before any allocation. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | Internally returned scrap and scale | Treat scrap or scale returned within the modelled site as an internal loop: retain its generation in the mass balance, exclude it as an external product and prevent a second upstream burden or recycling credit. | `worldsteel-wire-rod-eco-profile-2023` |
| `allocation_external_coproduct` | Externally used scrap, scale or recovered material | When an output performs a documented external product function, prefer system expansion with the displaced function and substitution assumptions reported; if infeasible, apply a justified physical or economic allocation and report a sensitivity check. | `worldsteel-lci-methodology-2017`; `worldsteel-wire-rod-eco-profile-2023` |
| `allocation_multiple_products` | Multiple saleable grades or dimensions | Use separately metered process data where available; otherwise allocate only residual shared burdens by saleable mass and disclose the product mix, allocation basis and sensitivity. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_conditioning` | `feedstock_conditioning` | Feedstock, electricity, conditioned output and scrap | Scale tickets, batch records, submeters and operating logs | batch_id; supplier; alloy_grade; feedstock_form; received_mass_kg; accepted_mass_kg; scrap_mass_kg; electricity_kWh; meter_id | Reconcile calibrated scales and electricity meters to production batches | kg; kWh | Each batch; meters at least monthly | At least 12 consecutive months unless a shorter representative campaign is justified | Each production site and conditioning line | Sum accepted batches and allocate only documented shared electricity before normalization | Scale calibration; meter calibration; batch reconciliation; exception log |
| `cp_reheating_energy_mass` | `reheating` | Furnace charge, fuel, electricity and reheated output | Furnace logs, fuel meters, invoices, scales and submeters | batch_id; furnace_id; charge_mass_kg; discharge_mass_kg; inlet_temperature_C; discharge_temperature_C; natural_gas_m3; gas_reference_conditions; electricity_kWh; operating_hours | Read calibrated meters and reconcile charge-to-discharge mass | kg; m3; kWh; degree C; h | Each batch with monthly meter reconciliation | At least 12 consecutive months unless seasonality is immaterial and justified | Each furnace and production line | Sum by furnace and product family, then normalize to measured reheated output | Meter calibration; fuel invoice reconciliation; furnace log completeness |
| `cp_reheating_emissions` | `reheating` | Fossil CO2, carbon monoxide, nitrogen monoxide and nitrogen dioxide | Continuous or periodic stack monitoring plus fuel-composition records | stack_id; pollutant; concentration; concentration_unit; gas_flow; gas_flow_unit; oxygen_reference; moisture_basis; operating_hours; fuel_carbon_content; oxidation_factor | Apply the site-approved monitoring method and retain species resolution; never duplicate total NOx as both NO and NO2 | kg; mg/Nm3; Nm3/h; h | Continuous where installed or at the permit-compliant campaign frequency | Same representative period as production data | Each reheating emission point | Convert concentration and standardized gas flow to mass, aggregate by operating hours and normalize to reheated output | Calibration certificates; sampling report; detection limits; calculation workbook |
| `cp_hot_working_mass_energy` | `hot_working` | Reheated feedstock, rolling electricity and hot-worked output | Line scales, production records and electricity submeters | batch_id; route; line_id; input_mass_kg; output_mass_kg; electricity_kWh; passes; section_reduction; product_section | Reconcile line input and output mass with calibrated meters and route records | kg; kWh | Each batch; electricity at least monthly | At least 12 consecutive months or a justified representative campaign | Each hot-working line and route | Aggregate only like route, grade and product-state records before normalization | Scale calibration; meter calibration; route and grade traceability |
| `cp_hot_working_waste_emissions` | `hot_working` | Scrap, dry mill scale and iron-oxide particulate matter | Waste weights, scale collection records and emission monitoring | batch_id; scrap_mass_kg; dry_scale_mass_kg; scale_moisture; pollutant_fraction; concentration; gas_flow; operating_hours | Weigh segregated solids and calculate emitted mass from monitoring data | kg; mg/Nm3; Nm3/h; h | Each removal or batch; emissions at monitoring frequency | Same representative period as production data | Each line and extraction point | Sum segregated outputs and emission masses, then normalize to hot-worked output | Weighbridge tickets; laboratory analysis; monitoring calibration |
| `cp_finishing_mass_water_energy` | `descaling_cooling_finishing` | Finishing input, make-up water, electricity and reference product | Product scales, water meters, electricity meters and inspection records | batch_id; input_mass_kg; make_up_water_kg; recirculated_water_kg; electricity_kWh; saleable_mass_kg; rejected_mass_kg; specification; inspection_result | Meter only boundary-crossing make-up water and reconcile saleable output to inspection records | kg; kWh | Each batch; utilities at least monthly | At least 12 consecutive months or a justified representative campaign | Each finishing line | Sum conforming product and attributable utilities, then normalize to 1,000 kg reference product | Scale and meter calibration; inspection release; water-balance check |
| `cp_finishing_wastewater` | `descaling_cooling_finishing` | Wet mill scale and discharged wastewater | Wastewater flow meters, dewatered-scale weights and laboratory results | discharge_point; wastewater_mass_kg; suspended_solids; oil_and_grease; wet_scale_mass_kg; scale_moisture; treatment_route | Measure net discharge after recirculation and characterize solids and oil separately | kg; mg/L | Continuous flow total with representative composite sampling | Same representative period as production data | Each water circuit and discharge point | Sum net discharge and dewatered scale without counting recirculated water as a new input or output | Flow-meter calibration; sampling chain of custody; laboratory accreditation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | All foreground rows | normalized amount = recorded amount / saleable product mass × 1,000 kg | recorded row amount; saleable product mass | amount per 1,000 kg reference product | `worldsteel-lci-methodology-2017` |
| `calc_electricity_conversion` | Electricity rows | electricity_MJ = metered_kWh × 3.6 MJ/kWh | metered electricity in kWh | electricity in MJ |  |
| `calc_stack_mass` | Monitored stack emissions | pollutant mass = dry standardized concentration × dry standardized gas flow × operating time, with unit, oxygen-reference and moisture corrections documented | concentration; standardized gas flow; operating time; correction factors | pollutant mass in kg | `ec-jrc-fmp-bref-2022` |
| `calc_fossil_co2` | Fossil CO2 from each furnace fuel | Calculate fuel-specific fossil CO2 from collected fuel quantity, supplier carbon content and documented oxidation factor; sum fuels only after each atomic fuel result is retained | fuel quantity; carbon content; oxidation factor | fossil CO2 mass in kg | `worldsteel-lci-methodology-2017` |
| `calc_process_mass_balance` | Each foreground process and full foreground system | mass-balance difference = total mass inputs - total mass outputs - documented inventory change; explain material differences and avoid double-counting internal transfers | feedstock; product; scrap; scale; dust; wastewater solids; inventory change | reconciled mass-balance difference | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Feedstock and reference product | Retain supplier, alloy grade, specification, product form, route, dimensions, delivery condition and batch traceability sufficient to prove inclusion and exclusions. | Supplier certificate; batch record; inspection release |
| `dq_temporal_representativeness` | All foreground records | Use at least 12 consecutive months of representative operation; justify a shorter period of at least six months and account for seasonal or operating-pattern variation. | Coverage report; production calendar; representativeness justification |
| `dq_measurement_control` | Mass, energy, water and emission measurements | Use calibrated instruments, declare reference conditions and preserve raw readings, corrections, detection limits and allocation calculations. | Calibration certificates; meter register; monitoring reports; calculation workbook |
| `dq_completeness` | All processes | Record all energy inputs and all material or emission flows above the declared cut-off; each excluded flow must be below 1% and all exclusions together below 5% of mass, energy or environmental relevance, with no exclusion used to omit hazardous or material emissions. | Completeness checklist and exclusion register |
| `dq_consistency` | Bilingual PCR implementation and dataset | Apply one reference mass basis, prevent double counting of internal transfers, and document every deviation from the process map or calculation rules. | Mass-balance report; deviation log; independent review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_product_identity` | Reference product | Reject a dataset that does not declare alloy grade, hot-working route, product form, dimensions, delivery condition and explicit exclusion of high-speed steel and silico-manganese steel. | `un-cpc-3-0-structure-2025` |
| `validation_reference_amount` | Reference flow | Confirm that the saleable output equals exactly 1,000 kg after normalization and excludes transport packaging, rejects and externally dispatched waste. | `worldsteel-lci-methodology-2017` |
| `validation_mass_balance` | Each process and full foreground system | Check iron-bearing and total mass balances; investigate and explain differences, internal loops and inventory changes before release. | `worldsteel-lci-methodology-2017` |
| `validation_energy_completeness` | Reheating and hot working | Confirm that each actual fuel, electricity, steam or purchased-heat exchange is represented by a separate atomic row and that meter coverage matches operating time. | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |
| `validation_emission_no_double_count` | Reheating emissions | Confirm species, air compartment, oxygen reference and moisture basis; do not duplicate a total-NOx-as-NO2 value in the nitrogen monoxide and nitrogen dioxide rows. | `ec-jrc-fmp-bref-2022` |
| `validation_water_balance` | Descaling and cooling | Reconcile make-up, recirculated, evaporated, retained and discharged water; count only boundary-crossing make-up water and net wastewater discharge. | `ec-jrc-fmp-bref-2022` |
| `validation_boundary_links` | Upstream and downstream datasets | Confirm that upstream semi-finished steel is linked exactly once and that downstream cold working, machining, coating, transport, use and end-of-life are absent unless separately declared. | `worldsteel-lci-methodology-2017`; `worldsteel-wire-rod-eco-profile-2023` |
| `validation_unresolved_identities` | TianGong UUID references | Before publication, directly verify an exact public state-code-100 flow for every unresolved exchange or retain the dataset as review-required with the gap disclosed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for factory-gate alloy-steel bars and rods in the declared hot-worked, not-further-worked state |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Gate-to-gate modelling; cradle-to-gate modelling when one compatible upstream semi-finished steel dataset is linked; route- and grade-specific foreground comparisons with harmonized scope |
| excluded_use | Representation of irregularly wound coils, high-speed steel, silico-manganese steel, stainless steel, cold-finished or further-worked products; public comparative assertions without harmonized functional equivalence and review |
| required_metadata | PCR id and version; CPC context; alloy grade; specification; product form; hot-working route; dimensions; surface and delivery condition; site and geography; reference period; upstream route and recycled-content convention; cut-offs; allocation; data sources; unresolved identities |
| required_quality_disclosure | Temporal and geographic coverage; primary-data share; meter and scale coverage; mass-, energy- and water-balance results; emission monitoring basis; allocation and system-expansion choices; excluded flows; uncertainty; unresolved UUIDs |
| update_trigger | Change in alloy family, product state, hot-working route, furnace fuel or electricity supply, site technology, water circuit, emission controls, allocation method, upstream steelmaking dataset, specification, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official classification identity and exclusions for CPC 41244 |
| `ec-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, DOI 10.2760/196475, 2022 | Hot-rolling process decomposition; energy, water, oil, waste, wastewater and direct-emission inventory; monitoring and data-quality rules |
| `worldsteel-lci-methodology-2017` | Method factor (`method_factor`) | World Steel Association, Life Cycle Inventory Methodology Report for Steel Products, ISBN 978-2-930069-89-0, 2017, https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (retrieved 2026-09-03) | Declared mass unit, boundary disclosure, collection period, cut-off, validation, allocation and steel-recycling method rules |
| `worldsteel-wire-rod-eco-profile-2023` | Dataset (`dataset`) | World Steel Association, Global Wire Rod LCA Eco-profile, June 2023, https://worldsteel.org/wp-content/uploads/Wire-rod-Global-Construction.pdf (retrieved 2026-09-03) | Comparable rolled-steel product description, factory-gate boundary distinction, internal scrap accounting and dataset profile context; not used as a CPC 41244 amount range |
