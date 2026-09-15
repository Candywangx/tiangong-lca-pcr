---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-cold-formed-or-cold-finished-of-alloy-steel-except-bars-or-rods-of-high-s-e7244d5a
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Bars and rods, cold-formed or cold-finished, of alloy steel (except bars or rods of high-speed steel or silico-manganese steel)

## 1. Scope and Applicability

This PCR covers gate-to-gate production of alloy-steel bars and rods whose saleable state is cold-formed or cold-finished. The foreground starts with hot-rolled alloy-steel bar or rod feedstock received at the cold-finishing site and ends with conforming product at that site's dispatch gate. The applicable finishing route may use cold drawing, grinding, or peeling; post-drawing annealing, chemical pickling, mechanical descaling, and rust-preventive oiling are included only when performed.

High-speed-steel bars and rods, silico-manganese-steel bars and rods, wire, hollow drill bars, hot-worked-only bars and rods, and bars or rods further worked beyond the cold-formed or cold-finished state are excluded. Upstream steelmaking and hot rolling require linked upstream datasets. Downstream fabrication, transport after the dispatch gate, use, and end of life are outside this foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-cold-formed-or-cold-finished-of-alloy-steel-except-bars-or-rods-of-high-s-e7244d5a |
| classification_refs | CPC 3.0: 41264 (exact) |
| covered_products | Solid alloy-steel bars and rods placed on the market in a cold-formed or cold-finished state, including bright bars made by cold drawing, grinding, or peeling |
| excluded_products | High-speed-steel or silico-manganese-steel bars or rods; wire; hollow drill bars; hot-worked-only products; products further worked beyond cold forming or cold finishing |
| representative_product | Dimensionally conforming cold-finished alloy-steel bright bar |
| production_route | Received hot-rolled alloy-steel bar or rod; surface preparation as needed; cold drawing, grinding, or peeling; optional annealing; final straightening, cutting, inspection, and optional rust prevention |
| market_state | Dry saleable bar or rod at the producing-site gate, with declared alloy grade, cross-section, dimensions, tolerance, delivery form, heat-treatment condition, and surface condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of conforming cold-formed or cold-finished alloy-steel bars or rods |
| How much | 1,000 kg net mass of reference product |
| How well | Meets the declared alloy grade, cross-section, dimensional tolerances, mechanical-property condition, and surface-finish specification |
| How long or cycle | One production accounting period ending at the producing-site dispatch gate; no use duration is represented |
| reference_flow_link | Net mass of conforming output is fixed to 1,000 kg after excluding packaging, dunnage, offcuts, scale, swarf, and other non-product material |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Cold-formed or cold-finished alloy-steel bars and rods |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy grade and composition specification; high-speed-steel exclusion; silico-manganese-steel exclusion; cold-processing route; input product form; output cross-section and dimensions; dimensional tolerance; delivery form; heat-treatment condition; surface condition and roughness where specified; rust-preventive oil presence; producing site and geography; accounting period; electricity supplier, geography, voltage, technology, and delivery boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and mass-based rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine mass from calibrated scales or traceable piece-count, length, cross-section, and density records; normalize all rows to exactly 1,000 kg net conforming output. |
| `net_product_definition` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Exclude packaging, dunnage, offcuts, scale, swarf, retained test pieces, and nonconforming product from reference-product mass. |
| `electricity_energy_conversion` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity by process; convert kWh using 1 kWh = 3.6 MJ and do not combine electricity with fuel or purchased heat. |
| `natural_gas_volume_condition` | annealing natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas at a declared reference temperature and pressure; document the meter basis and conversion from operating conditions. |
| `solution_mass_and_concentration` | acids, lubricants, grinding fluid, and oil | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report supplied formulation mass separately for each chemical product and retain concentration or formulation records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Hot-rolled alloy-steel bar or rod physically received at the cold-finishing site's gate, with alloy grade, mass, dimensions, surface condition, supplier, and upstream dataset declared |
| starting_condition_role | Purchased or transferred upstream product input to downstream cold finishing |
| product_classification_scope | Final reference product meets CPC 3.0 subclass 41264 and its exclusions; intermediate and waste flows do not acquire that classification |
| recursive_input_rule | Externally supplied cold-finished product already within this category is recorded with its upstream dataset and is not recursively reproduced; inventory only additional material transformation |
| upstream_dataset_requirement | Use supplier-specific or representative upstream datasets for alloy-steel production and hot rolling, matching grade, recycled-content accounting, form, technology, geography, and delivery boundary |
| disclosure | Declare site, geography, period, alloy grade, input form, cold drawing/grinding/peeling route, surface preparation, annealing and furnace energy, yield, steel-residue status, electricity delivery qualifiers, and all exclusions or estimates |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | foreground conversion | Include receipt and preparation, the declared cold drawing, grinding, or peeling route, final conditioning, inspection, and directly required on-site ancillary operations. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_conditional_stages` | route-specific operations | Include pickling, mechanical descaling, annealing, grinding fluid, drawing lubricant, and rust-preventive oil only when the corresponding operation occurs; document non-applicability from route records. | `ec-jrc-fmp-bref-2022` |
| `boundary_upstream_feedstock` | upstream separation | Keep steelmaking and hot rolling outside this foreground conversion and link received feedstock to a qualified upstream dataset without truncating its burdens. | `worldsteel-lci-methodology-2017` |
| `boundary_inventory_completeness` | all foreground unit processes | Record every energetic input and each material, waste, and elementary exchange material by mass, energy, or environmental relevance; identify and justify any exclusion. | `worldsteel-lci-methodology-2017` |
| `boundary_gate_exclusions` | downstream stages | Exclude transport after the producing-site dispatch gate, customer fabrication, use, and end of life; disclose any broader study modules separately. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `surface_preparation` | Feedstock receipt and surface preparation | `required` | Always include receipt and inspection; include mechanical descaling or acid pickling and rinsing only when performed | Establish qualified input state and prepare the surface | Mass of prepared alloy-steel bar or rod output |
| `cold_processing` | Cold forming or cold finishing | `required` | Include the one declared cold drawing, grinding, or peeling route and its actual auxiliaries | Create required dimensions, surface, and mechanical condition | Mass of cold-finished alloy-steel bar or rod output |
| `annealing` | Post-cold-processing annealing | `conditional` | Include only when annealing or stress relief is performed after cold processing | Adjust ductility and mechanical condition | Mass of annealed cold-finished output |
| `final_conditioning` | Final conditioning, inspection, and dispatch | `required` | Always include final conformity operations; include rust-preventive oil only when applied | Release the saleable reference product | 1,000 kg net conforming reference-product output |

### Process: Feedstock receipt and surface preparation (`surface_preparation`)

#### Inputs

##### Product flows

###### Hot-rolled alloy-steel feedstock (`hot_rolled_alloy_steel_feedstock`)

Record received hot-rolled alloy-steel bar or rod mass and reconcile grade, dimensions, and state to the upstream dataset.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured received mass attributable to the accounting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Surface-preparation electricity (`surface_prep_electricity`)

Record alternating-current electricity delivered to actual handling, descaling, pickling, rinsing, and pumps.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: process-submetered electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `worldsteel-lci-methodology-2017`

###### Hydrochloric acid pickling solution (`hydrochloric_acid_input`)

Include hydrochloric-acid solution only for a route that consumes it; record supplied solution mass and concentration.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net solution make-up consumed by hydrochloric-acid pickling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Sulfuric acid pickling solution (`sulfuric_acid_input`)

Include sulfuric-acid solution only for a route that consumes it; record supplied solution mass and concentration.

- Selected flow: Sulfuric acid solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net solution make-up consumed by sulfuric-acid pickling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Pickling and rinse water (`pickling_rinse_water`)

Include process water only when used; measure fresh make-up crossing the site boundary, not internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured fresh process-water make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared alloy-steel bar or rod (`prepared_alloy_steel_bar_output`)

Record the mass leaving surface preparation, with surface state and route declared.

- Selected flow: Surface-prepared alloy-steel bar or rod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured output mass after preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per surface-preparation campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Removed steel scale (`steel_scale_waste`)

Include alloy-steel scale only when mechanical descaling or scale separation produces this waste.

- Selected flow: Alloy-steel scale waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured collected scale sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent hydrochloric pickling liquor (`spent_hydrochloric_pickling_liquor`)

Include iron-bearing spent hydrochloric liquor only when it leaves the foreground as waste.

- Selected flow: Iron-bearing spent hydrochloric pickling liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net spent liquor transferred to treatment or regeneration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent sulfuric pickling liquor (`spent_sulfuric_pickling_liquor`)

Include iron-bearing spent sulfuric liquor only when it leaves the foreground as waste.

- Selected flow: Iron-bearing spent sulfuric pickling liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net spent liquor transferred to treatment or regeneration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Pickling rinse wastewater (`pickling_rinse_wastewater`)

Include acidic rinse wastewater only when transferred to on-site or external treatment.

- Selected flow: Acidic pickling-rinse wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured wastewater transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows
### Process: Cold forming or cold finishing (`cold_processing`)

#### Inputs

##### Product flows

###### Prepared alloy-steel bar or rod input (`prepared_alloy_steel_bar_input`)

Carry the measured surface-preparation output into the declared cold-processing route.

- Selected flow: Surface-prepared alloy-steel bar or rod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured intermediate input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cold-processing campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Cold-processing electricity (`cold_processing_electricity`)

Record electricity for the declared cold-drawing, grinding, or peeling equipment and direct auxiliaries.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: process-submetered electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cold-finished alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `worldsteel-lci-methodology-2017`

###### Drawing lubricant (`drawing_lubricant_input`)

Include one identified drawing lubricant only when the route uses cold drawing.

- Selected flow: Steel drawing lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net lubricant make-up consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cold-drawn alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Grinding fluid (`grinding_fluid_input`)

Include identified grinding fluid only when wet grinding is performed; exclude recirculated fluid from net make-up.

- Selected flow: Steel grinding fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net grinding-fluid make-up consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg ground alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Grinding abrasive (`grinding_abrasive_input`)

Include the specific abrasive product consumed by the grinding route, separately from grinding fluid.

- Selected flow: Abrasives `685e7b7f-1555-4112-aa0b-3786e5508534`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured abrasive replacement mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg ground alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-finished alloy-steel bar or rod intermediate (`cold_finished_alloy_steel_bar_output`)

Record cold-processed output before optional annealing and final conditioning, with route and state declared.

- Selected flow: Cold-finished alloy-steel bar or rod before final conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured cold-processed output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cold-processing campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Spent drawing lubricant (`spent_drawing_lubricant`)

Include spent drawing lubricant containing alloy-steel fines only when it leaves the drawing circuit.

- Selected flow: Spent steel drawing lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured spent lubricant transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cold-drawn alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent grinding fluid (`spent_grinding_fluid`)

Include spent grinding fluid containing alloy-steel fines only when it leaves the grinding circuit.

- Selected flow: Spent steel grinding fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured spent fluid transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg ground alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alloy-steel swarf (`steel_swarf_waste`)

Include alloy-steel swarf removed by grinding or peeling as a separate waste exchange.

- Selected flow: Steel swarf `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured swarf mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg ground or peeled alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alloy-steel end crops (`steel_end_crop_waste`)

Include end crops generated during cold processing when they leave with waste status.

- Selected flow: Alloy-steel end-crop waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured end-crop mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cold-finished alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `worldsteel-lci-methodology-2017`

###### Used grinding abrasive (`used_grinding_abrasive`)

Include used abrasive containing alloy-steel particles only when removed for treatment.

- Selected flow: Waste abrasive `69bac8b0-e9df-4945-9c94-f65c63531203`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured used abrasive mass transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg ground alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows
### Process: Post-cold-processing annealing (`annealing`)

#### Inputs

##### Product flows

###### Cold-finished bar or rod for annealing (`cold_finished_bar_for_annealing`)

Include this intermediate only when the specification requires post-cold-processing heat treatment.

- Selected flow: Cold-finished alloy-steel bar or rod for annealing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured furnace charge mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per annealing campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Natural gas for annealing furnace (`annealing_natural_gas`)

Include gaseous natural gas only when consumed; declare supply geography, furnace function and technology, and reference volume conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`; m3
- Amount rule: metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg annealed cold-finished alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Annealing electricity (`annealing_electricity`)

Record electricity delivered to furnace controls, fans, handling, and electrically heated zones.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: process-submetered electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg annealed cold-finished alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_annealing_records`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Annealed cold-finished alloy-steel bar or rod (`annealed_alloy_steel_bar_output`)

Record output mass with heat-treatment condition and conformity status declared.

- Selected flow: Annealed cold-finished alloy-steel bar or rod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured annealed output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per annealing campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from annealing (`fossil_co2_air`)

Include direct fossil carbon dioxide from on-site natural-gas combustion; exclude upstream gas-supply emissions here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: direct stack measurement or carbon-balance calculation from collected gas quantity, carbon content, and oxidation data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg annealed cold-finished alloy-steel bar or rod output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_annealing_records`
- Sources: `worldsteel-lci-methodology-2017`

### Process: Final conditioning, inspection, and dispatch (`final_conditioning`)

#### Inputs

##### Product flows

###### Cold-finished product before final conditioning (`final_conditioning_input`)

Record the intermediate entering final conditioning, with annealed or unannealed state declared.

- Selected flow: Cold-finished alloy-steel bar or rod before final conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured intermediate input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final-conditioning campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conditioning_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Final-conditioning electricity (`final_conditioning_electricity`)

Record electricity delivered to straightening, cutting, inspection, and dispatch preparation.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- Amount rule: process-submetered electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_conditioning_records`
- Sources: `worldsteel-lci-methodology-2017`

###### Rust-preventive oil (`rust_preventive_oil_input`)

Include identified rust-preventive oil only when intentionally applied to saleable product.

- Selected flow: Rust-preventive oil for steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured net oil make-up applied to conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conditioning_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product (`reference_product_output`)

This is the declared reference product; its exact Tiangong product-flow UUID remains unresolved.

- Selected flow: Cold-formed or cold-finished alloy-steel bars and rods
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: exactly 1,000 kg net conforming product by reference-flow normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `worldsteel-lci-methodology-2017`; `unsd-cpc-3-0-2025`

###### Recovered alloy-steel scrap co-product (`recovered_alloy_steel_scrap`)

Include sorted scrap as product output only when specifications, ownership transfer, market acceptance, and non-waste status are documented.

- Selected flow: Recovered alloy-steel scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured mass released with product or co-product status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conditioning_records`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

###### Alloy-steel offcuts with waste status (`steel_offcut_waste`)

Include final offcuts only when they leave as waste; do not duplicate mass reported as recovered scrap.

- Selected flow: Alloy-steel offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- Amount rule: measured offcut mass sent to the declared waste treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_conditioning_records`
- Sources: `worldsteel-lci-methodology-2017`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | independently metered operations | Avoid allocation by subdividing surface preparation, cold processing, annealing, and final conditioning wherever process-specific records exist. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recirculation` | internal steel returns and recirculated fluids | Treat material reused within the foreground as an internal loop; report only net boundary exchanges and retain gross records for mass-balance review. | `worldsteel-lci-methodology-2017` |
| `allocation_scrap_status` | alloy-steel residues | Classify each residue once as internal return, recovered scrap co-product, or waste according to documented status and destination; prohibit duplicate mass or automatic avoided-burden credit. | `worldsteel-lci-methodology-2017` |
| `allocation_shared_campaign` | inseparable multi-product campaigns | If subdivision is impossible, allocate shared burdens by measured mass of conforming physically similar steel outputs; disclose product set, factor, excluded nonconforming mass, and sensitivity. | `worldsteel-lci-methodology-2017` |
| `allocation_system_expansion` | separately modelled recovered scrap benefit | Apply substitution outside this foreground only when displaced production, scrap quality, recovery yield, geography, and functional equivalence are documented; report uncredited scrap separately and disclose sensitivity. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_surface_preparation_records` | `surface_preparation` | feedstock, energy, chemicals, water, prepared output, and wastes | scales, invoices, batch sheets, make-up logs, meters, and transfer records | date; batch; grade; input/output mass; kWh; acid type; solution mass/concentration; water; waste mass/destination | collect by batch or meter interval and reconcile to orders | kg; kWh; m3 as metered | batch or meter interval, monthly aggregation | representative continuous 12 months | process equipment and direct auxiliaries | sum attributable records, convert electricity to MJ, subtract internal recirculation, normalize | calibration; certificates; tests; batch reconciliation; transfer documents |
| `cp_cold_processing_records` | `cold_processing` | intermediate, electricity, auxiliaries, output, and wastes | scales, orders, route logs, meters, issue logs, and waste records | date; batch; route; dimensions; masses; kWh; lubricant/fluid/abrasive mass; waste destination | collect separately for drawing, grinding, or peeling | kg; kWh | batch or meter interval, monthly aggregation | representative continuous 12 months | cold-processing line and direct auxiliaries | reconcile by route, convert electricity to MJ, normalize to output | calibration; route logs; issue records; transfers; inspection |
| `cp_annealing_records` | `annealing` | charge, gas, electricity, output, and fossil CO2 | scales, furnace logs, meters, fuel analysis, and stack or carbon records | date; batch; furnace; masses; temperature cycle; gas and conditions; gas carbon; kWh; fossil CO2 | collect each campaign; retain non-operation evidence when absent | kg; m3; kWh; kg CO2 | batch or meter interval, monthly aggregation | representative continuous 12 months | furnace and direct controls, fans, and handling | convert electricity, normalize gas, calculate CO2 from collected carbon data or monitoring, normalize | calibration; furnace logs; fuel certificates; worksheet or stack report |
| `cp_final_conditioning_records` | `final_conditioning` | intermediate, electricity, oil, product, waste, and scrap | scales, orders, meters, issue records, inspection, and transfers | date; batch; input mass; kWh; oil; conforming output; waste; scrap; status; destination | collect by batch and reconcile every steel disposition | kg; kWh | batch or meter interval, monthly aggregation | representative continuous 12 months | final operations and dispatch preparation | convert electricity, separate statuses without double counting, normalize to 1,000 kg | calibration; release; issue records; status evidence; mass-balance sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every row | normalized amount = period exchange × 1,000 kg / net conforming reference-product mass | exchange; net product mass | exchange per 1,000 kg product | `worldsteel-lci-methodology-2017` |
| `calc_electricity_mj` | electricity rows | electricity MJ = metered kWh × 3.6 MJ/kWh, separately by process | process kWh | MJ electricity |  |
| `calc_material_balance` | each process and total foreground | input steel = product + co-product + waste + internal transfers + measured stock change; investigate residual | input/output/stock masses | mass-balance residual | `worldsteel-lci-methodology-2017` |
| `calc_fossil_co2` | gas-fired annealing | use direct stack measurement or calculate from collected gas, reference-condition conversion, carbon content, and oxidation fraction | gas; conditions; carbon; oxidation or stack result | kg fossil CO2 | `worldsteel-lci-methodology-2017` |
| `calc_multi_product_allocation` | inseparable campaigns | allocated exchange = shared exchange × reference-product conforming mass / total conforming mass of all campaign products | shared exchange; conforming masses | allocated exchange | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | product and feedstock | Retain grade, composition/designation, dimensions, tolerances, route, heat-treatment state, surface condition, and exclusion evidence. | supplier certificate and released-product inspection |
| `dq_primary_foreground` | all foreground rows | Use primary site records and identify every estimate, allocation, missing interval, and proxy. | meter, scale, batch, invoice, stock, laboratory, and transfer records |
| `dq_temporal_coverage` | all foreground rows | Use representative continuous 12-month data; data older than five years require justification and technology comparison. | coverage table and technology-change review |
| `dq_route_separation` | cold processing and annealing | Keep drawing, grinding, peeling, and annealing records separate; do not average routes without production-weighted shares. | route-coded production and meter records |
| `dq_completeness` | all processes | Reconcile steel mass and energy; list excluded material or emission exchanges individually with relevance justification. | signed balances and exclusion register |
| `dq_uuid_status` | selected flows | Resolve each UUID-empty row to an exact public Tiangong flow or retain the explicit unresolved entry; never substitute a proxy. | direct-read audit or manifest unresolved entry |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product category | Fail if grade, form, cold-processing route, market state, or exclusions are missing, or if the product belongs to an excluded category. | `unsd-cpc-3-0-2025`; `ec-jrc-fmp-bref-2022` |
| `validate_reference_flow` | reference product | Fail unless net conforming output is exactly 1,000 kg after normalization and excluded non-product masses are removed. | `worldsteel-lci-methodology-2017` |
| `validate_route_conditions` | conditional operations | Fail if a conditional exchange is positive without its route, or an operated step lacks its atomic inputs and outputs. | `ec-jrc-fmp-bref-2022` |
| `validate_energy` | electricity and gas | Fail if electricity is pooled with fuel, delivery qualifiers are absent, conversion is inconsistent, or gas conditions and furnace function are undeclared. | `worldsteel-lci-methodology-2017` |
| `validate_mass_balance` | processes and foreground | Fail or correct when steel inputs, outputs, internal transfers, and stock change do not reconcile within documented uncertainty. | `worldsteel-lci-methodology-2017` |
| `validate_residue_status` | steel residues | Fail if residue mass is counted more than once or recovered-scrap product status lacks specifications and transfer evidence. | `worldsteel-lci-methodology-2017` |
| `validate_data_quality` | dataset production | Fail if period, site coverage, route separation, calibration, missing-data treatment, allocation, and exclusions are not disclosed. | `worldsteel-lci-methodology-2017` |
| `validate_uuid_accounting` | inventory identity | Require each inventory row to contain a directly verified public Tiangong UUID or a matching manifest unresolved entry; prohibit proxies. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground dataset eligible for publication as a secondary_dataset or background_dataset after review and UUID resolution |
| downstream_use | Link qualified upstream alloy-steel and energy datasets, then use in cradle-to-gate product systems, process datasets, or lifecyclemodel projections after boundary checks |
| allowed_use | Modelling for the declared grade, state, route, site/geography, technology, and period; benchmarking only after harmonizing boundary and allocation |
| excluded_use | Excluded steel categories or undisclosed average routes; public comparative claims without a study-specific functional unit and review |
| required_metadata | PCR id; CPC reference; grade; specification; input form; output dimensions/tolerance; delivery form; cold route; surface preparation; annealing/furnace; surface state; site/geography; period; electricity qualifiers; upstream datasets; allocation and scrap status |
| required_quality_disclosure | primary-data share; 12-month coverage; calibration; mass-balance residual; route shares; missing data and estimates; UUID gaps; range-evidence gaps; exclusions; allocation sensitivity; upstream data age and representativeness |
| update_trigger | Change in scope, route, annealing technology/fuel, electricity, site boundary, scrap status, allocation, upstream feedstock, route mix, or records older than five years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Exact CPC 41264 identity and exclusions relative to 41265, 41271, and 41272 |
| `ec-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, 2022, https://doi.org/10.2760/196475 (retrieved 2026-09-03) | Boundary and process decomposition for cold drawing, grinding, peeling, finishing, and possible annealing |
| `worldsteel-lci-methodology-2017` | Method factor (`method_factor`) | World Steel Association, Life Cycle Inventory Methodology Report for Steel Products, ISBN 978-2-930069-89-0, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-03) | Mass declared unit, gate-to-gate completeness, primary-data quality, normalization, mass balance, and allocation |
| `china-mof-tariff-2026` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, 国别清单及税目税率表（2026年）, tariff line 72285000, https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf (retrieved 2026-09-03) | Professional Chinese terminology “其他合金钢冷成形或冷加工条、杆” used to verify the localized title |
