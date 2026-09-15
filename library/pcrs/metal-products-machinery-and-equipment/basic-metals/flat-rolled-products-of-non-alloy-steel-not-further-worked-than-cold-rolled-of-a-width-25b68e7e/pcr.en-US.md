---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-cold-rolled-of-a-width-25b68e7e
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of non-alloy steel, not further worked than cold-rolled, of a width of less than 600 mm

## 1. Scope and Applicability

This PCR governs foreground data packages for non-alloy steel flat-rolled products that leave the declared factory gate in a cold-rolled product state and have a finished width below 600 mm. It applies to strip or sheet made by cold reduction of hot-rolled non-alloy steel feed, with route-specific pickling, annealing, tempering, slitting, inspection and oiling recorded where actually performed.

The width threshold describes the finished product, not the rolling-line configuration: narrow product may be rolled as narrow strip or obtained by slitting wider cold-rolled strip. Products of alloy or stainless steel, products 600 mm or wider, coated or clad products, and products further worked into fabricated components are excluded. This PCR does not claim that annealing, tempering, slitting or oiling occurs for every product; conditional operations and their exchanges are recorded only when present.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-cold-rolled-of-a-width-25b68e7e |
| classification_refs | CPC 3.0 41222, exact classification context |
| covered_products | Non-alloy steel cold-rolled strip or sheet with finished width below 600 mm, uncoated and not fabricated beyond the declared cold-rolled product state |
| excluded_products | Alloy or stainless steel; width 600 mm or more; hot-rolled-only product; coated, plated or clad product; tube, profile, fabricated part or other downstream article |
| representative_product | Uncoated cold-rolled non-alloy steel strip, supplied as coil or sheet, finished width below 600 mm |
| production_route | Hot-rolled strip receiving, chemical pickling, cold reduction, conditional annealing and tempering, and finishing or slitting to the declared width |
| market_state | Net saleable product at factory gate, excluding transport packaging; coil or sheet form and surface protection state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conforming non-alloy steel flat-rolled product in the declared cold-rolled state, finished width below 600 mm |
| How much | 1,000 kg net product mass excluding packaging |
| How well | Product meets the declared steel grade, dimensional tolerances, width threshold, thickness, surface finish, temper or annealing state, and oiling condition |
| How long or cycle | One production-accounting period representative of routine output; no use-phase service life is represented |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Flat-rolled products of non-alloy steel, not further worked than cold-rolled, width less than 600 mm |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade or governing standard; non-alloy designation; finished width and thickness; coil or sheet form; full-hard, annealed or tempered state; surface finish and oiling condition; site and geography; production period; pickling acid route; annealing route; slitting route; factory-gate boundary; packaging exclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_rule_1` | Reference product and steel-bearing product or waste flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net mass; exclude packaging and reconcile receiving, interstage, conforming output, scale loss and scrap over the same reporting period. |
| `measurement_rule_2` | Finished product width | Length | mm | Measure finished width using the site's controlled dimensional method and confirm every represented product is below 600 mm; preserve the instrument, sampling plan and result. |
| `measurement_rule_3` | Electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve source meter readings; convert kWh to MJ using 1 kWh = 3.6 MJ and disclose any allocation from a shared meter. |
| `measurement_rule_4` | Gaseous fuels and atmosphere gases | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve metered volume together with temperature, absolute pressure, moisture basis and any standard-state conversion. |
| `measurement_rule_5` | Acid solutions and rolling fluids | Mass | kg | Report solution or mixture mass and separately preserve concentration, active-content basis, recirculation and make-up definition; do not report active chemical mass as solution mass. |
| `measurement_rule_6` | Reporting-period normalization | Mass | kg per 1,000 kg | Normalize each exchange from the same production period to 1,000 kg net conforming output after applying the allocation rules. |

## 5. System Boundary

The foreground boundary begins with receipt of hot-rolled non-alloy steel strip and ends with net conforming cold-rolled product after final width control at the factory gate. It includes chemical pickling, cold reduction, conditional annealing and atmosphere generation at the line, conditional tempering, finishing, slitting, direct utilities, direct emissions, on-site treatment attributable to these operations, and outgoing process wastes. Production of hot-rolled feed, purchased chemicals, electricity, gas and water is represented by linked upstream datasets. Customer transport, use, downstream fabrication and end-of-life are outside this gate-to-gate boundary.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | Foreground start and end | Start at hot-rolled strip receipt and end at net conforming product after finishing and width verification; keep packaging outside the reference product mass. | `ec-jrc-fmp-bref-2022` |
| `system_boundary_rule_2` | Conditional routes | Include annealing, atmosphere gases, tempering, slitting, protective oil and their exchanges only when actual production records show that operation for the represented product. | `ec-jrc-fmp-bref-2022` |
| `system_boundary_rule_3` | Treatment and recycling loops | Record make-up inputs and net outputs crossing each foreground process boundary; do not count internally recirculated acid, emulsion, cooling water or internally returned scrap as a new external exchange. | `ec-jrc-fmp-bref-2022` |
| `system_boundary_rule_4` | Excluded life-cycle stages | Exclude customer transport, use, downstream fabrication and end-of-life; require linked datasets for all purchased inputs crossing the foreground start boundary. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Hot-rolled non-alloy steel strip received at the cold-rolling site, with mass, grade, width, thickness, surface condition, supplier and upstream dataset declared |
| starting_condition_role | Upstream product input to the foreground cold-rolling system |
| product_classification_scope | Semantic product boundary for non-alloy steel flat-rolled product in a cold-rolled state with finished width below 600 mm; CPC 3.0 41222 is mapping context only |
| recursive_input_rule | If externally supplied cold-rolled product in the same category enters the foreground system, record it as an upstream product input with its own provider dataset and do not regenerate its inherited production burden inside this foreground model |
| upstream_dataset_requirement | Link provider datasets for hot-rolled strip, each acid or chemical, water, alternating-current electricity, natural gas, atmosphere gas and other purchased product input |
| disclosure | Declare site, geography, period, steel grade, product form, actual route, excluded operations, internal-loop accounting, treatment boundary and any same-category input |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `chemical_pickling` | Chemical pickling | `required` | Include chemical scale removal before cold rolling; record each acid route actually used. | Remove oxide scale and rinse strip before reduction. | Mass of `pickled_strip_output` |
| `cold_rolling` | Cold rolling | `required` | Include cold reduction without prior heating and the associated lubricant circuit. | Reduce thickness and establish the cold-rolled strip state. | Mass of `cold_rolled_strip_output` |
| `annealing` | Annealing | `conditional` | Include only when product records require post-rolling heat treatment; preserve batch or continuous and gas-fired or electric route. | Restore or adjust ductility and metallurgical properties. | Mass of `annealed_strip_output` |
| `finishing` | Finishing and width control | `required` | Include inspection and dimensional control; include tempering, slitting, trimming and oiling only when performed. | Establish conforming width, form, surface condition and final output. | 1,000 kg `reference_product_output` |

### Process: Chemical pickling (`chemical_pickling`)

#### Inputs

##### Product flows

###### Received hot-rolled non-alloy steel strip (`hot_rolled_strip_input`)

Record the hot-rolled non-alloy steel strip entering the foreground line before scale removal. Preserve its actual as-received width class because the finished product may be rolled as narrow strip or slit from wider strip.

- Selected flow: Hot-rolled non-alloy steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured net input mass from calibrated receiving or line scales, excluding packaging; retain the as-received width, thickness and hot-rolled product state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

###### Hydrochloric acid for pickling (`hydrochloric_acid_input`)

Record hydrochloric acid only when the foreground pickling route uses it; preserve delivered concentration and solution state.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass / kg
- Amount rule: measured delivered or tank-balance mass of solution and separately recorded mass fraction; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_chemicals`
- Sources: `ec-jrc-fmp-bref-2022`

###### Sulfuric acid for pickling (`sulfuric_acid_input`)

Record sulfuric acid only when the foreground pickling route uses it; preserve delivered concentration and solution state.

- Selected flow: Sulfuric acid solution
- Flow property / unit: Mass / kg
- Amount rule: measured delivered or tank-balance mass of solution and separately recorded mass fraction; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_chemicals`
- Sources: `ec-jrc-fmp-bref-2022`

###### Pickling rinse water (`pickling_rinse_water`)

Record supplied water crossing the process boundary for rinsing pickled strip.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: convert metered make-up volume allocated to the pickling line to kg using the measured or supplier-declared density at recorded reference conditions; retain volume, density and conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `ec-jrc-fmp-bref-2022`

###### Electricity for pickling (`pickling_electricity`)

Record alternating-current electricity delivered to pickling, strip handling, pumps and associated line equipment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered electricity converted from kWh to MJ by multiplying by 3.6; allocate shared meters by logged operating time and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pickled non-alloy steel strip intermediate (`pickled_strip_output`)

Record the cleaned strip passed from pickling to cold rolling as a foreground internal intermediate.

- Selected flow: Pickled hot-rolled non-alloy steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled interstage net mass after pickling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Spent hydrochloric pickling liquor (`spent_hydrochloric_acid_waste`)

Record separately the spent hydrochloric liquor transferred to regeneration, treatment or off-site management.

- Selected flow: Spent hydrochloric pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass with route and acid concentration recorded; not applicable when the hydrochloric route is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_residuals`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent sulfuric pickling liquor (`spent_sulfuric_acid_waste`)

Record separately the spent sulfuric liquor transferred to regeneration, treatment or off-site management.

- Selected flow: Spent sulfuric pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass with route and acid concentration recorded; not applicable when the sulfuric route is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_residuals`
- Sources: `ec-jrc-fmp-bref-2022`

###### Iron-bearing pickling sludge (`iron_pickling_sludge`)

Record iron-bearing sludge removed from treatment of pickling baths or acidic wastewater.

- Selected flow: Iron-bearing pickling wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with dry-solids fraction and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_residuals`
- Sources: `ec-jrc-fmp-bref-2022`

###### Acidic pickling rinse wastewater (`acidic_pickling_wastewater`)

Record the specific acidic rinse-water stream discharged to on-site or off-site treatment.

- Selected flow: Acidic wastewater from pickling rinse
- Flow property / unit: Volume / m3
- Amount rule: metered or water-balance volume with pH, treatment state and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_residuals`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Hydrogen chloride emission to air (`hydrogen_chloride_air`)

Record measured hydrogen chloride released after abatement to the applicable air compartment.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: stack measurement or validated emission calculation for hydrogen chloride only; not applicable when demonstrably absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ec-jrc-fmp-bref-2022`


### Process: Cold rolling (`cold_rolling`)

#### Inputs

##### Product flows

###### Pickled strip entering cold rolling (`pickled_strip_input`)

Record the pickled non-alloy steel strip entering the cold mill as the mass-balance counterpart of the prior intermediate.

- Selected flow: Pickled hot-rolled non-alloy steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled interstage net mass entering the cold mill
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

###### Cold-rolling emulsion concentrate (`cold_rolling_emulsion_input`)

Record the water-miscible mineral-oil lubricant concentrate added to the cold-rolling emulsion circuit.

- Selected flow: Water-miscible cold-rolling lubricant concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured make-up concentrate mass from issue or tank-balance records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_fluids`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling-emulsion make-up water (`rolling_makeup_water`)

Record supplied water added to the cold-rolling emulsion circuit.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: convert metered or batch-record make-up volume to kg using the measured or supplier-declared density at recorded reference conditions; retain volume, density and conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `ec-jrc-fmp-bref-2022`

###### Electricity for cold rolling (`rolling_electricity`)

Record alternating-current electricity delivered to mill drives, pumps, strip handling and cold-rolling auxiliaries.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered electricity converted from kWh to MJ by multiplying by 3.6; allocate shared meters by logged operating time and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-rolled strip intermediate (`cold_rolled_strip_output`)

Record cold-rolled non-alloy steel strip leaving the reduction mill before any declared post-rolling treatment.

- Selected flow: Cold-rolled non-alloy steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled interstage net mass after cold rolling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Spent cold-rolling emulsion (`spent_rolling_emulsion`)

Record spent water-oil emulsion removed from the rolling circuit for treatment or off-site management.

- Selected flow: Spent water-oil cold-rolling emulsion
- Flow property / unit: Mass / kg
- Amount rule: measured removed mass with water fraction, treatment state and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_fluids`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Mineral-oil aerosol emission to air (`rolling_oil_mist_air`)

Record mineral-oil aerosol released after extraction and abatement to the applicable air compartment.

- Selected flow: Mineral-oil aerosol
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or validated emission calculation for mineral-oil aerosol only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ec-jrc-fmp-bref-2022`


### Process: Annealing (`annealing`)

#### Inputs

##### Product flows

###### Cold-rolled strip entering annealing (`cold_rolled_strip_annealing_input`)

Record cold-rolled strip entering annealing when the declared product specification requires post-rolling heat treatment.

- Selected flow: Cold-rolled non-alloy steel strip intermediate for annealing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled interstage mass; not applicable for products delivered without annealing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

###### Natural gas for annealing (`natural_gas_input`)

Record gaseous natural gas delivered to the annealing furnace when that fuel route is used.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered gas volume with temperature and absolute pressure reference conditions retained; not applicable for non-gas-fired annealing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_fuels`
- Sources: `ec-jrc-fmp-bref-2022`

###### Electricity for annealing (`annealing_electricity`)

Record alternating-current electricity delivered to annealing furnaces, atmosphere systems, fans and strip handling.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered electricity converted from kWh to MJ by multiplying by 3.6; allocate shared meters by logged operating time and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meters`
- Sources: `ec-jrc-fmp-bref-2022`

###### Nitrogen annealing atmosphere (`nitrogen_atmosphere_input`)

Record industrial nitrogen supplied to the annealing atmosphere only when used.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered or supplier-record volume with reference conditions and purity recorded; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_atmosphere`
- Sources: `ec-jrc-fmp-bref-2022`

###### Hydrogen annealing atmosphere (`hydrogen_atmosphere_input`)

Record industrial hydrogen supplied to the annealing atmosphere only when used.

- Selected flow: Industrial hydrogen gas
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-record volume with reference conditions and purity recorded; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_atmosphere`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Annealed strip intermediate (`annealed_strip_output`)

Record annealed non-alloy steel strip transferred to finishing when annealing is included.

- Selected flow: Annealed cold-rolled non-alloy steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled interstage net mass after annealing; not applicable when annealing is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide emission to air (`fossil_co2_air`)

Record direct fossil carbon dioxide from combustion of natural gas in the annealing furnace.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: continuous or periodic stack measurement, or fuel-carbon balance using the measured furnace fuel; not applicable when no fossil fuel is combusted
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Nitrogen monoxide emission to air (`nitrogen_monoxide_air`)

Record nitrogen monoxide released after furnace abatement as its own chemical species.

- Selected flow: Nitrogen monoxide
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or validated species-resolved emission calculation; not applicable when demonstrably absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Nitrogen dioxide emission to air (`nitrogen_dioxide_air`)

Record nitrogen dioxide released after furnace abatement separately from nitrogen monoxide.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or validated species-resolved emission calculation; not applicable when demonstrably absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ec-jrc-fmp-bref-2022`


### Process: Finishing and width control (`finishing`)

#### Inputs

##### Product flows

###### Strip entering finishing (`strip_finishing_input`)

Record the cold-rolled or annealed strip entering final inspection, tempering when applicable, slitting, trimming and oiling.

- Selected flow: Cold-rolled non-alloy steel strip intermediate for finishing
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled interstage mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

###### Protective oil applied in finishing (`protective_oil_input`)

Record one specified anticorrosive oil or pre-lubricant applied to the finished strip when required by the product specification.

- Selected flow: Anticorrosive steel-strip protective oil
- Flow property / unit: Mass / kg
- Amount rule: measured oil consumption assigned to conforming product; not applicable for unoiled product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_oil`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference cold-rolled product (`reference_product_output`)

Record only conforming non-alloy steel flat-rolled product whose finished width is below 600 mm and whose declared state satisfies this PCR.

- Selected flow: Flat-rolled products of non-alloy steel, not further worked than cold-rolled, width less than 600 mm
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming product mass at the factory gate, excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Ferrous edge-trim scrap (`ferrous_trim_scrap`)

Record segregated ferrous edge-trim scrap leaving finishing for recycling or other management.

- Selected flow: Ferrous edge-trim scrap from cold-rolled non-alloy steel
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass with destination and any internal return recorded; not applicable when no trimming scrap leaves the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_mass_balance`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Process subdivision | Avoid allocation by using process-specific meters, batch records and mass balances for pickling, rolling, annealing and finishing. |  |
| `allocation_rule_2` | Shared utilities | Allocate a shared meter to represented production using logged operating time and measured or rated load; disclose formula, denominator, other users and sensitivity. |  |
| `allocation_rule_3` | Internal loops | Assign no new external input or output to acid, emulsion, cooling water or scrap recirculated within the declared foreground boundary; record only make-up and net exported quantities. | `ec-jrc-fmp-bref-2022` |
| `allocation_rule_4` | Conforming product and exported ferrous scrap | First subdivide direct scrap-generating operations. If inseparable burdens remain, allocate those burdens by measured dry mass between conforming output and exported ferrous scrap, without avoided-burden credit, and disclose the treatment in the downstream model. |  |
| `allocation_rule_5` | Off-specification steel | Return internally reprocessed steel to the mass balance without a second production burden; treat steel leaving the boundary as its specific waste or co-product flow and disclose destination. | `ec-jrc-fmp-bref-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steel_mass_balance` | all foreground processes | steel inputs, intermediates, product and scrap | scale and production record | timestamp, batch or coil id, flow role, gross mass, tare, net mass, grade, width, disposition | Reconcile calibrated scale records by coil or batch and reporting period. | kg | each coil or batch | same representative production period | all included lines at one declared site | Sum net mass by row, then normalize after allocation. | calibration certificate, batch trace and signed mass-balance reconciliation |
| `cp_pickling_chemicals` | chemical_pickling | hydrochloric or sulfuric acid input | delivery, tank and batch record | chemical identity, concentration, delivered mass, opening stock, closing stock, return, route | Reconcile purchases and tank inventory; keep each acid separate. | kg solution | each delivery and monthly stocktake | same representative production period | included pickling line and storage | opening plus receipts minus closing minus documented transfers | supplier specification, weigh ticket and tank calibration |
| `cp_process_water` | chemical_pickling and cold_rolling | rinse or make-up water | meter and batch record | meter id, opening reading, closing reading, batch addition, purpose, water density, density temperature and reference conditions | Read submeter or reconcile documented batch additions; separate recirculation from make-up; convert net volume to mass using measured or supplier-declared density. | m3 and kg | shift or batch | same representative production period | included process water users | Sum the converted make-up mass by row while retaining raw volume and density records. | meter calibration, density evidence and water-balance closure |
| `cp_electricity_meters` | chemical_pickling, cold_rolling and annealing | alternating-current electricity | meter and operating log | meter id, opening kWh, closing kWh, process runtime, load, downtime | Use submeter readings; where shared, apply `allocation_rule_2`. | kWh and MJ | shift or meter interval | same representative production period | included line equipment and auxiliaries | Sum kWh, allocate if needed, multiply by 3.6 and normalize. | meter calibration, interval export and allocation worksheet |
| `cp_pickling_residuals` | chemical_pickling | spent liquor, sludge and acidic wastewater | transfer, tank, scale and treatment record | stream id, mass or volume, concentration, dry solids, pH, treatment state, destination | Measure each chemically distinct stream at transfer or treatment boundary. | kg or m3 | each transfer and monthly reconciliation | same representative production period | included pickling and attributable treatment | Sum each row separately; never combine acid routes. | manifest, laboratory result and treatment log |
| `cp_rolling_fluids` | cold_rolling | lubricant make-up and spent emulsion | issue, tank and treatment record | product id, mass, water fraction, opening stock, closing stock, removal, destination | Reconcile lubricant stock and measured removed emulsion separately. | kg | batch and monthly stocktake | same representative production period | cold mill emulsion circuit | Sum make-up and removed quantities by row. | product specification, stock ledger and waste manifest |
| `cp_annealing_fuels` | annealing | gaseous natural gas | custody meter record | meter id, volume, temperature, pressure, moisture basis, fuel period | Read dedicated or allocated fuel meter and preserve reference conditions. | m3 | meter interval | same representative production period | included gas-fired furnace | Sum condition-consistent volume and normalize. | meter calibration and fuel invoice reconciliation |
| `cp_annealing_atmosphere` | annealing | nitrogen or hydrogen atmosphere gas | flowmeter and supplier record | gas identity, purity, volume, temperature, pressure, batch or interval | Measure each gas separately and preserve supply state and standard conditions. | m3 | batch or meter interval | same representative production period | included atmosphere system | Sum each gas separately and normalize. | flowmeter calibration and supplier certificate |
| `cp_stack_emissions` | chemical_pickling, cold_rolling and annealing | one specified air pollutant | stack test, continuous monitor or calculation record | species, concentration, flow, time, moisture, oxygen correction, abatement state, method | Determine each chemical species separately using a documented measurement or validated calculation. | kg | campaign or continuous interval | representative operating conditions within the production period | included exhaust points after abatement | Integrate mass over represented operation and normalize. | test report, monitor QA record or calculation with inputs |
| `cp_finishing_oil` | finishing | protective oil input | issue and applicator record | oil product, mass issued, opening stock, closing stock, coil ids, oiling setting | Reconcile oil stock to oiled conforming coils; do not assign to unoiled product. | kg | coil or batch | same representative production period | included finishing line | Sum oil assigned to represented coils and normalize. | product specification, stock record and coil trace |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | All inventory rows | normalized amount = allocated reporting-period exchange × 1,000 / net kg conforming reference product | row exchange, allocation result, reference_product_output mass | row amount per 1,000 kg |  |
| `calculation_rule_2` | Electricity | MJ = metered kWh × 3.6 | metered kWh | electricity in MJ |  |
| `calculation_rule_3` | Steel mass balance | mass-balance difference = steel input − conforming product − net exported steel-bearing outputs − measured process loss; investigate sign and magnitude rather than forcing closure | calibrated steel mass records | disclosed mass-balance check |  |
| `calculation_rule_4` | Conditional rows | A conditional row is not applicable only when route records demonstrate absence; zero and missing are not interchangeable. | route log, product specification, row record | applicability flag and amount | `ec-jrc-fmp-bref-2022` |
| `calculation_rule_5` | Gas volume | Use only volumes at the same declared reference temperature, absolute pressure and moisture basis; document any conversion without deleting raw meter values. | raw volume and reference conditions | condition-consistent m3 |  |
| `calculation_rule_6` | Process Water rows | water mass (kg) = metered net make-up volume (m3) × measured or supplier-declared density (kg/m3) at documented reference conditions | raw make-up volume, density and density reference conditions | Process Water mass in kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `data_quality_1` | Product identity | Each represented coil or sheet batch must prove non-alloy steel identity, cold-rolled state and finished width below 600 mm. | grade certificate, route record and dimensional inspection |
| `data_quality_2` | Temporal representativeness | Use a continuous period covering routine operation and all included route steps; explain shutdowns, trials, abnormal production and substitutions. | production calendar and exception log |
| `data_quality_3` | Completeness | Reconcile steel, acid or fluid stocks, water, electricity, furnace energy, atmosphere gases, exported wastes and direct species-resolved emissions; document exclusions. | signed reconciliation and completeness checklist |
| `data_quality_4` | Geography and technology | Declare site geography, mill configuration, pickling acid, annealing configuration, abatement and finishing route. | site description, process diagram and equipment list |
| `data_quality_5` | Traceability | Retain raw readings, conversions, allocation workbooks, laboratory reports and provider-dataset identifiers from published values back to source records. | auditable data lineage package |
| `data_quality_6` | UUID readiness | Preserve unresolved flow identity explicitly; do not substitute a broader, differently classified or differently stated Tiangong flow. | UUID audit log and unresolved-row register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Reference product | Fail if net reference output is not 1,000 kg after normalization, if packaging is included, or if finished width is not strictly below 600 mm. | `unsd-cpc-3-0-structure-2025` |
| `validation_rule_2` | Product boundary | Fail if alloy or stainless steel, hot-rolled-only, coated or clad product, width 600 mm or more, or a fabricated downstream article is represented as the reference product. | `unsd-cpc-3-0-structure-2025` |
| `validation_rule_3` | Route applicability | Fail if a conditional operation or exchange is populated without route evidence, or marked not applicable despite records showing it occurred. | `ec-jrc-fmp-bref-2022` |
| `validation_rule_4` | Inventory atomicity | Fail if any row combines multiple fuels, utilities, acids, gases, wastes or emission species, or if a UUID-empty row is absent from the manifest unresolved register. |  |
| `validation_rule_5` | Energy and gas units | Fail if kWh-to-MJ conversion differs from 3.6, or if gas volumes with different reference conditions are aggregated without documented conversion. |  |
| `validation_rule_6` | Steel mass balance | Fail if the steel mass-balance result is missing; flag any unexplained difference and require correction or disclosure before release. |  |
| `validation_rule_7` | Allocation | Fail if shared utilities or inseparable exported scrap burdens lack the required allocation formula, denominator, records and sensitivity disclosure. |  |
| `validation_rule_8` | Evidence and traceability | Fail if the reporting period, site scope, raw records, meter or scale quality evidence, source ids or provider datasets needed to reproduce a material result are missing. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production data package for a declared non-alloy cold-rolled flat steel product below 600 mm in width |
| downstream_use | Construction of TianGong flow, process and lifecyclemodel records and linked LCA studies using the declared product and route |
| allowed_use | Product-specific or site-specific modelling when required qualifiers, provider datasets, allocation, period and geography are retained |
| excluded_use | Alloy or stainless steel, width 600 mm or more, coated or fabricated products, generic market averages without representativeness review, or cradle-to-grave claims without added stages |
| required_metadata | PCR id; CPC mapping context; steel grade; width; thickness; form; temper or annealing state; surface and oiling state; site; geography; period; process route; allocation; reference conditions; provider datasets; unresolved UUIDs |
| required_quality_disclosure | Completeness and mass-balance results; meter and scale quality; temporal, geographical and technological representativeness; conditional-route evidence; treatment destinations; allocation sensitivity; unresolved flows and absent ranges |
| update_trigger | Change in steel grade family, width class, mill route, pickling acid, annealing technology or fuel, finishing route, abatement, allocation, site, reporting period, provider dataset, or material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact CPC 41222 classification title and finished-width product identity |
| `ec-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, 2022, JRC131649, https://doi.org/10.2760/196475 | Cold-rolling process sequence, chemical pickling, cold reduction, annealing, tempering, finishing, slitting, oil and water circuits, wastes and direct-emission collection scope |
