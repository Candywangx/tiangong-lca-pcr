---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-not-further-worked-than-hot-rolled-hot-drawn-or-extruded-of-648d999d
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Angles, shapes and sections, not further worked than hot-rolled, hot-drawn or extruded, of iron or non-alloy steel

## 1. Scope and Applicability

This PCR governs production of mill-gate iron or non-alloy steel angles, shapes and sections whose last shape-forming operation is hot rolling, hot drawing or hot extrusion. It applies to solid long products such as angle, channel, I, H, T and other open or solid section geometries. The foreground starts with a declared semi-finished non-alloy steel billet, bloom or beam blank suitable for the selected route and ends with cooled, straightened and cut-to-commercial-length sections ready to leave the producing mill.

The foreground excludes ironmaking, steelmaking and casting of the semi-finished input; cold forming or cold finishing; welding; pickling and oiling as a marketed finish; metallic or organic coating; fabrication, drilling, machining or assembly; packaging unless brought into the study scope; outbound transport; installation; use; and end-of-life. Alloy-steel sections, welded sections, sheet piling when classified as a distinct welded or piling product, hollow sections, bars, rods, rails and flat-rolled products are outside this category. The upstream burden of the semi-finished steel input remains required through a supplier-specific or representative upstream dataset.

Exactly one hot-forming route must be declared for a product batch. Route-specific processes that do not occur are marked `not_applicable`; their flows are not silently combined with the selected route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-not-further-worked-than-hot-rolled-hot-drawn-or-extruded-of-648d999d |
| classification_refs | CPC 3.0: 41251 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Solid iron or non-alloy steel angles, channels, I-sections, H-sections, T-sections and other open or solid sections, not further worked beyond hot rolling, hot drawing or hot extrusion |
| excluded_products | Cold-formed, cold-finished or otherwise further-worked sections; alloy-steel sections; welded sections; sheet piling when a distinct product; hollow sections; rails; bars and rods; coated, fabricated or assembled products |
| representative_product | Mill-length non-alloy structural steel section with declared grade and cross-sectional geometry |
| production_route | One declared route: hot rolling, hot drawing or hot extrusion; common reheating and final cooling/cutting are included |
| market_state | Uncoated, unwelded, unfabricated solid section at producing-mill gate, supplied at declared commercial length, surface condition and heat-treatment state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of an iron or non-alloy steel angle, shape or section at the producing-mill gate |
| How much | 1,000 kg net saleable section product |
| How well | Conforming to the declared steel grade, cross-sectional geometry, dimensional tolerance, surface condition and mechanical-property specification |
| How long or cycle | One production batch through one declared hot-forming route to mill-gate release |
| reference_flow_link | `angles_shapes_sections_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net saleable product |
| Reference product flow | Angles, shapes and sections, not further worked than hot-rolled, hot-drawn or extruded, of iron or non-alloy steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade and standard; section geometry and dimensions; hot-forming route; feedstock form and incoming temperature; heat-treatment state; surface condition; commercial length; producing site and geography; production period; allocation and internal-recycling treatment |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The exact reference-product Tiangong UUID is unresolved. Do not substitute a generic steel, bar, alloy-steel, welded-section or consumption-mix proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and all steel-bearing inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine mass on calibrated scales or from a documented length-by-section-mass calculation verified against batch weighing; normalize the net conforming output to 1,000 kg. |
| `electricity_energy` | electricity consumed by included foreground processes | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter records in their original unit and convert kWh to MJ using 1 kWh = 3.6 MJ; do not mix generated, purchased and exported electricity. |
| `fuel_gas_volume` | gaseous natural gas delivered to reheating | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the meter reference temperature, pressure and dry/wet basis; convert supplier billing volumes only with the documented supplier conversion. |
| `route_and_hot_charge` | route-specific inventory and reheating | declared route and feedstock temperature | route code and °C | Record exactly one hot-forming route and the incoming feedstock temperature. Do not apply cold-charge reheating values to a hot-charged batch. |
| `water_boundary` | descaling and cooling water | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report net make-up water crossing the foreground boundary separately from internally recirculated water; do not count the same recirculated volume as repeated input. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Semi-finished iron or non-alloy steel billet, bloom or beam blank at the section-producing site, with mass, grade, geometry, supplier, casting/steelmaking dataset, incoming temperature and surface condition declared |
| starting_condition_role | Upstream product input to the gate-to-gate section-forming foreground |
| product_classification_scope | Solid angles, shapes and sections of iron or non-alloy steel whose last shape-forming operation is hot rolling, hot drawing or hot extrusion |
| recursive_input_rule | If an input is already a product in this same category, record it as a separately identified upstream product dataset and exclude its prior section-forming burden from this foreground to prevent recursion |
| upstream_dataset_requirement | Link each semi-finished steel input to supplier-specific primary data where available; otherwise use and disclose a geographically and technologically representative steelmaking-and-casting dataset |
| disclosure | Declare route, feedstock form and incoming temperature, heating technology and fuel, descaling method, cooling method, section geometry, yield, residue destinations, internal recycling, allocation and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_included_operations` | foreground gate-to-gate system | Include feedstock receipt, reheating, applicable descaling, exactly one declared hot-forming route, cooling, straightening, cutting and management of resulting scrap, scale, sludge and captured dust. | `ec-jrc-fmp-bref-2022`; `cn-nbs-industry-classification-2017` |
| `boundary_upstream_steel` | semi-finished steel input | Keep ironmaking, steelmaking and casting outside the foreground, but link the received semi-finished product to an upstream dataset with compatible grade, route, geography and delivery state. | `worldsteel-lci-methodology-2017` |
| `boundary_excluded_further_work` | downstream operations | Exclude cold forming/finishing, welding, pickling and oiling as a marketed finish, coating, fabrication, distribution, use and end-of-life unless a broader study explicitly adds and labels them outside this PCR foreground. | `unsd-cpc-3-0-2025`; `ec-jrc-fmp-bref-2022` |
| `boundary_internal_recirculation` | water and recovered material | Record internally recirculated water and material as internal transfers for engineering checks, but inventory only their net boundary crossings; disclose the calculation and recovery destination. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt` | Semi-finished steel receipt | required | Always included | Establish eligible input identity and mass | kg received semi-finished steel per 1,000 kg saleable output |
| `feedstock_reheating` | Feedstock reheating | required | Always included; hot-charge condition and supplemental heating must be declared | Bring feedstock to forming temperature | Fuel and electricity per 1,000 kg saleable output |
| `descaling` | Descaling and scale-water treatment | conditional | Include when water, mechanical or another descaling operation is used within the foreground | Remove adherent scale before or during forming | Net water, electricity and residues per 1,000 kg saleable output |
| `hot_rolling` | Section hot rolling | conditional | Include only when declared route = hot rolling | Roughing, intermediate and finishing deformation in section stands | Electricity, lubricant and rolling residues per 1,000 kg saleable output |
| `hot_drawing` | Section hot drawing | conditional | Include only when declared route = hot drawing | Hot drawing through the declared die train | Electricity, lubricant and route residues per 1,000 kg saleable output |
| `hot_extrusion` | Section hot extrusion | conditional | Include only when declared route = hot extrusion | Hot extrusion through the declared die and press line | Electricity, lubricant and route residues per 1,000 kg saleable output |
| `final_cooling_cutting` | Cooling, straightening and final cutting | required | Always included; water cooling is conditional on actual operation | Produce saleable commercial-length sections | 1,000 kg net saleable output |

### Process: Semi-finished steel receipt (`feedstock_receipt`)

#### Inputs

##### Product flows

###### Eligible semi-finished non-alloy steel (`semi_finished_non_alloy_steel_input`)

Record the physical semi-finished steel that crosses the site boundary into this foreground. Keep grades, feedstock geometries and supplier datasets separate when their upstream burdens differ materially.

- Selected flow: Semi-finished non-alloy steel billet, bloom or beam blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass assigned to the declared product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `worldsteel-lci-methodology-2017`

### Process: Feedstock reheating (`feedstock_reheating`)

#### Inputs

##### Product flows

###### Gaseous natural gas supplied to the reheating furnace (`reheating_natural_gas_input`)

Record natural gas crossing the furnace supply boundary when the declared reheating equipment consumes it. State volume reference conditions and exclude gas used by upstream steelmaking.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered natural-gas volume assigned to eligible reheating campaigns; `not_applicable` when no natural gas is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_meter_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity supplied to reheating (`reheating_electricity_input`)

Record electricity used by electric or induction heating and furnace auxiliaries at the declared meter boundary. Do not select a voltage-specific market UUID until site qualifiers are known.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: sub-metered or allocated electricity for eligible reheating campaigns; `not_applicable` only when demonstrably absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `ec-jrc-fmp-bref-2022`

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide from reheating (`reheating_fossil_co2_air`)

Record direct fossil carbon dioxide released by included reheating fuel combustion using stack measurements or a facility emissions record traceable to the furnace fuel inventory.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or facility-calculated direct fossil CO2 assigned to eligible reheating campaigns; `not_applicable` when no fossil fuel is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Nitrogen oxides from reheating to air (`reheating_nitrogen_oxides_air`)

Record the monitored nitrogen-oxides elementary emission with the reported species convention, oxygen reference, dry/wet basis and abatement boundary.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: stack-monitoring result assigned to eligible reheating campaigns; `not_applicable` only when the emission is demonstrably absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Carbon monoxide from reheating to air (`reheating_carbon_monoxide_air`)

Record the monitored carbon-monoxide elementary emission with the oxygen reference, dry/wet basis and abatement boundary.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: stack-monitoring result assigned to eligible reheating campaigns; `not_applicable` only when the emission is demonstrably absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions_records`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Descaling and scale-water treatment (`descaling`)

#### Inputs

##### Product flows

###### Descaling process water (`descaling_process_water_input`)

Record only net make-up process water crossing the foreground boundary for high-pressure or other wet descaling. Internal recirculation is an engineering transfer, not repeated input.

- Selected flow: Descaling process water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered net make-up water assigned to eligible descaling campaigns; `not_applicable` for a dry route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity supplied to descaling (`descaling_electricity_input`)

Record electricity for descaling pumps and included scale-water treatment at the declared sub-meter boundary.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: sub-metered or documented allocation of electricity to eligible descaling campaigns; `not_applicable` when the process is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `ec-jrc-fmp-bref-2022`

#### Outputs

##### Waste flows

###### Separately collected mill scale (`descaling_mill_scale_output`)

Record mill scale removed from the steel and collected from descaling or water treatment. Declare oil content, moisture, internal return, external recovery or disposal destination.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet and dry mass with moisture basis declared, assigned to eligible production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Oily ferrous sludge from scale-water treatment (`descaling_oily_sludge_output`)

Record the distinct oily ferrous sludge stream when generated by treatment of descaling water. Keep it separate from dry scale and declare oil, water and solids content.

- Selected flow: Oily ferrous sludge from descaling-water treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet mass and documented composition assigned to eligible production; `not_applicable` when no oily sludge is generated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass_records`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Section hot rolling (`hot_rolling`)

#### Inputs

##### Product flows

###### Alternating-current electricity supplied to section rolling (`hot_rolling_electricity_input`)

Record electricity for the included roughing, intermediate, finishing and direct line-drive equipment at the declared meter boundary. Supplier, geography, voltage, technology and delivery boundary remain mandatory qualifiers.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: sub-metered electricity assigned to the eligible hot-rolling campaign; `not_applicable` for the other hot-forming routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling lubricant oil (`hot_rolling_lubricant_oil_input`)

Record the mass of the supplier-declared rolling lubricant oil that crosses the foreground boundary and is consumed by the section rolling line.

- Selected flow: Hot rolling oil `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchase-and-issue balance assigned to eligible hot-rolling campaigns; `not_applicable` when no lubricant is consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_records`
- Sources: `ec-jrc-fmp-bref-2022`

#### Outputs

##### Waste flows

###### Clean steel crop ends from hot rolling (`hot_rolling_crop_end_scrap_output`)

Record crop ends and rolling rejects as a distinct non-alloy steel scrap stream. Declare internal remelting, external recovery or disposal without applying an undisclosed avoided-burden credit.

- Selected flow: Non-alloy steel crop-end scrap from hot rolling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured scrap mass assigned to the eligible hot-rolling campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass_records`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

##### Elementary flows

###### Particulate matter released from section rolling (`hot_rolling_particulate_air`)

Record the monitored particulate-matter elementary emission from included rolling and handling sources. Declare particle-size convention, capture boundary and whether the amount is measured before or after abatement.

- Selected flow: Particulate matter, unspecified size, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: monitored emission assigned to the eligible hot-rolling campaign; `not_applicable` only when demonstrably absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions_records`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Section hot drawing (`hot_drawing`)

#### Inputs

##### Product flows

###### Alternating-current electricity supplied to hot drawing (`hot_drawing_electricity_input`)

Record electricity for the declared hot-drawing line at its meter boundary. Do not reuse a voltage-specific consumption-mix UUID without site qualifiers.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: sub-metered electricity assigned to the eligible hot-drawing campaign; `not_applicable` for the other hot-forming routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `cn-nbs-industry-classification-2017`

###### Hot-drawing lubricant (`hot_drawing_lubricant_input`)

Record the mass of the supplier-declared lubricant product consumed by the hot-drawing route; retain its formulation and safety data with the foreground records.

- Selected flow: Hot-drawing lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchase-and-issue balance assigned to eligible hot-drawing campaigns; `not_applicable` when the route or lubricant is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_records`
- Sources:

#### Outputs

##### Waste flows

###### Steel trim and reject scrap from hot drawing (`hot_drawing_steel_scrap_output`)

Record non-alloy steel trim and rejected material from the hot-drawing route as a distinct scrap stream with destination declared.

- Selected flow: Non-alloy steel trim and reject scrap from hot drawing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured scrap mass assigned to the eligible hot-drawing campaign; `not_applicable` for the other routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass_records`
- Sources: `worldsteel-lci-methodology-2017`

### Process: Section hot extrusion (`hot_extrusion`)

#### Inputs

##### Product flows

###### Alternating-current electricity supplied to hot extrusion (`hot_extrusion_electricity_input`)

Record electricity for the declared hot-extrusion press, drives and included auxiliaries at the meter boundary. Do not reuse a voltage-specific consumption-mix UUID without site qualifiers.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: sub-metered electricity assigned to the eligible hot-extrusion campaign; `not_applicable` for the other hot-forming routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `cn-nbs-industry-classification-2017`

###### Hot-extrusion lubricant (`hot_extrusion_lubricant_input`)

Record the mass of the supplier-declared lubricant product consumed by the hot-extrusion route; retain its formulation and safety data with the foreground records.

- Selected flow: Hot-extrusion lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchase-and-issue balance assigned to eligible hot-extrusion campaigns; `not_applicable` when the route or lubricant is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_records`
- Sources:

#### Outputs

##### Waste flows

###### Steel butt, trim and reject scrap from hot extrusion (`hot_extrusion_steel_scrap_output`)

Record non-alloy steel butt, trim and rejected material from the hot-extrusion route as a distinct scrap stream with destination declared.

- Selected flow: Non-alloy steel butt, trim and reject scrap from hot extrusion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured scrap mass assigned to the eligible hot-extrusion campaign; `not_applicable` for the other routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass_records`
- Sources: `worldsteel-lci-methodology-2017`

### Process: Cooling, straightening and final cutting (`final_cooling_cutting`)

#### Inputs

##### Product flows

###### Alternating-current electricity supplied to finishing (`finishing_electricity_input`)

Record electricity used by cooling-bed auxiliaries, straightening, saws and included material handling at the declared meter boundary.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: sub-metered or documented allocation of electricity to eligible finishing campaigns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Make-up cooling water (`finishing_cooling_water_input`)

Record net make-up water crossing the foreground boundary for direct or indirect product cooling; internal recirculation is not repeated as input.

- Selected flow: Make-up cooling water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered net make-up water assigned to eligible finishing campaigns; `not_applicable` when cooling is dry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter_records`
- Sources: `ec-jrc-fmp-bref-2022`

#### Outputs

##### Product flows

###### Net saleable angles, shapes and sections (`angles_shapes_sections_output`)

Record conforming product released at the mill gate after cooling, straightening and cutting. The amount is the denominator for every normalized inventory exchange.

- Selected flow: Angles, shapes and sections, not further worked than hot-rolled, hot-drawn or extruded, of iron or non-alloy steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg measured net conforming saleable output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference product at producing-mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_material_mass_records`
- Sources: `unsd-cpc-3-0-2025`; `worldsteel-sections-eco-profile-2023`

##### Waste flows

###### Steel offcuts from final cutting (`finishing_steel_offcuts_output`)

Record commercial-length saw offcuts and final dimensional rejects separately from route-specific crop ends, with internal remelting or external destination declared.

- Selected flow: Non-alloy steel offcuts from final cutting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured offcut and final-reject mass assigned to eligible finishing campaigns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable section output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass_records`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared meters and multi-product campaigns | Prefer process subdivision and direct metering. Where a shared flow cannot be subdivided, allocate by a documented physical driver that represents causality, such as measured operating time and power for electricity or processed hot mass for furnace fuel; disclose the driver and sensitivity. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recovery` | internally recirculated scrap, scale, water and lubricant | Record the material as an output from the generating process and an input to the receiving process for internal engineering balance, then report only the net crossing of the foreground boundary in the product inventory. | `worldsteel-lci-methodology-2017` |
| `allocation_external_recovery` | scrap, scale, sludge and dust leaving the site | Classify an exported residue as material for recovery or co-product only when its destination and market use are documented. Otherwise model its actual waste treatment. Do not embed an undisclosed avoided-burden or end-of-life credit in this gate-to-gate dataset. | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |
| `allocation_route_separation` | hot rolling, hot drawing and hot extrusion | Do not average mutually exclusive routes unless the dataset explicitly represents a production-weighted mix with route shares and separate underlying inventories. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `feedstock_receipt`; `final_cooling_cutting` | steel input and conforming product mass | weighbridge, batch scale and production certificate | batch_id; grade; feedstock_geometry; product_geometry; gross_mass; tare_mass; net_mass; timestamp; scale_id | calibrated weighing with length-by-section-mass cross-check where used | kg | each batch | representative 12 consecutive months | all included lines and saleable products | sum eligible mass by batch and normalize to certified net saleable output | calibration certificates; weigh tickets; production certificates; reconciliation log |
| `cp_fuel_meter_records` | `feedstock_reheating` | natural gas input | furnace fuel meter and supplier invoice | meter_id; opening_reading; closing_reading; reference_temperature; reference_pressure; dry_wet_basis; campaign_id | reconcile furnace meter with invoice and operating log | m3 | each campaign with monthly reconciliation | representative 12 consecutive months | all included reheating furnaces | subtract non-production use and allocate only with disclosed physical driver | meter calibration; invoices; reconciliation and outage logs |
| `cp_electricity_meter_records` | all included processes | electricity input | revenue meter and sub-meter | meter_id; opening_reading; closing_reading; unit; process_id; campaign_id; operating_time | process sub-meter preferred; reconcile with site meter | kWh or MJ | each campaign with monthly reconciliation | representative 12 consecutive months | all included foreground equipment | convert kWh to MJ and normalize eligible consumption to net saleable output | meter calibration; single-line diagram; reconciliation record |
| `cp_water_meter_records` | `descaling`; `final_cooling_cutting` | net make-up water | make-up water meter and water-balance log | meter_id; opening_reading; closing_reading; water_quality; circuit_id; discharge_or_loss; campaign_id | measure boundary make-up and exclude internal recirculation | m3 | daily or each campaign with monthly balance | representative 12 consecutive months | all included water circuits | net boundary input divided by eligible net saleable output | meter calibration; water-balance diagram; reconciliation log |
| `cp_lubricant_records` | route-specific forming process | consumed lubricant product | purchase, store issue and return record | product_id; supplier; formulation_reference; opening_stock; receipts; issues; returns; closing_stock; campaign_id | mass balance of stock and line issues | kg | each issue with monthly reconciliation | representative 12 consecutive months | selected route and included lines | consumption = opening + receipts - returns - closing, assigned to eligible campaign | invoices; store ledger; safety data sheet; stock reconciliation |
| `cp_residue_mass_records` | all included processes | scrap, scale, sludge and offcut output | container scale, dispatch ticket and residue analysis | residue_id; row_id; wet_mass; moisture; oil_content; dry_solids; destination; internal_or_external; batch_id | weigh each dispatch or container; retain composition basis | kg | each container or dispatch | representative 12 consecutive months | all included residue collection points | aggregate each distinct stream and destination; do not net unlike residues | scale calibration; dispatch tickets; laboratory results; recycler receipt |
| `cp_air_emissions_records` | `feedstock_reheating`; `hot_rolling` | direct elementary emissions | continuous or periodic stack monitoring and facility emissions record | source_id; pollutant; concentration; gas_flow; oxygen_reference; dry_wet_basis; abatement_state; operating_time; campaign_id | approved monitoring method with production-time alignment | kg | continuous or permit-defined campaign sampling | representative 12 consecutive months | all included point and documented fugitive sources | integrate mass emission over eligible operation and normalize to net saleable output | monitoring reports; instrument calibration; permit records; calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = eligible row amount × 1,000 kg / eligible net saleable product mass | eligible row amount; eligible net saleable output mass | row amount per 1,000 kg reference product | |
| `calc_electricity_conversion` | electricity meter records | electricity (MJ) = electricity (kWh) × 3.6 | kWh meter difference | MJ electricity | |
| `calc_net_water_input` | descaling and cooling water | net make-up water = measured water entering the circuit from outside the foreground; internal recirculation is excluded from repeated input | make-up meter; circuit balance; discharge and evaporation records | m3 net make-up water | `ec-jrc-fmp-bref-2022` |
| `calc_steel_mass_balance` | complete foreground | received semi-finished steel mass = saleable product mass + separately measured scrap + offcuts + scale + sludge dry iron-bearing solids + captured dust + other disclosed steel-bearing losses, after inventory change | steel input; product output; all steel-bearing residues; stock change | reconciled steel mass balance and unexplained difference | `worldsteel-lci-methodology-2017` |
| `calc_route_gate` | route-specific rows | exactly one of hot rolling, hot drawing or hot extrusion is active for a batch; rows for the other two routes are `not_applicable`, not zero-filled measured values | declared route; batch id; process log | route-consistent inventory | `unsd-cpc-3-0-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and feedstock | Retain grade, standard, geometry, route, heat-treatment state, surface condition, commercial length and upstream feedstock dataset for every represented product family. | production certificate; order specification; supplier dataset link |
| `dq_temporal_representativeness` | all foreground data | Use a representative 12-consecutive-month period covering normal operation, maintenance and product mix; justify shorter or abnormal periods. | dated meter exports; production calendar; deviation statement; `worldsteel-lci-methodology-2017` |
| `dq_completeness` | all included processes | Reconcile site totals to process records and document every excluded meter, residue stream, emission source and downtime adjustment. | reconciliation workbook; source map; exclusion register |
| `dq_route_separation` | route-specific production | Keep hot-rolling, hot-drawing and hot-extrusion batches separate unless a documented production-weighted route mix is the declared dataset object. | route code; batch genealogy; weighted aggregation workbook |
| `dq_mass_balance` | steel-bearing flows | Perform and retain a steel mass balance and investigate unexplained differences before release. | signed mass-balance workbook; `worldsteel-lci-methodology-2017` |
| `dq_uuid_status` | Tiangong references | Use only directly read public state_code 100 UUIDs with matching flow type, state, property, unit group and qualifiers; leave unresolved identities empty rather than using proxies. | UUID audit record and unresolved manifest entries |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product category | Fail if the product is alloy steel, welded, hollow, cold-formed/cold-finished, coated or otherwise further worked beyond the declared hot-forming route, or if grade and section geometry are missing. | `unsd-cpc-3-0-2025` |
| `validate_reference_amount` | reference flow | Require exactly 1,000 kg net conforming saleable output and Mass property/unit consistency. | `worldsteel-sections-eco-profile-2023` |
| `validate_route_exclusivity` | process inventory | Require exactly one active route among hot rolling, hot drawing and hot extrusion for each batch; require the other route rows to be `not_applicable`. | `unsd-cpc-3-0-2025` |
| `validate_boundary` | system boundary | Require a linked upstream dataset for the semi-finished steel input and exclude upstream steelmaking from the foreground; require disclosure of any broader added processes. | `worldsteel-lci-methodology-2017` |
| `validate_mass_balance` | steel-bearing flows | Require a reconciled steel mass balance covering product, crop ends, offcuts, scale, sludge, dust and other declared losses; unresolved differences must be explained. | `worldsteel-lci-methodology-2017` |
| `validate_energy_water` | electricity, fuel and water | Require meter boundaries, unit conversions, gas reference conditions and net-make-up water treatment to be documented; reject repeated counting of recirculated water. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_residue_destination` | scrap, scale, sludge and dust | Require separate mass and destination for each residue stream; reject an undisclosed recovery credit or a combined residue total. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_uuid_and_ranges` | flow identities and numerical guidance | Reject proxy or non-public UUIDs. Treat missing exact UUIDs and missing two-source range evidence as explicit unresolved review items, not permission to invent identities or ranges. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset for hot-formed iron or non-alloy steel sections |
| downstream_use | `secondary_dataset`; `background_dataset` after review and when combined with a compatible upstream semi-finished-steel dataset |
| allowed_use | Product and building LCAs, EPD modelling and supply-chain studies that need a route- and site-qualified mill-gate section-forming inventory |
| excluded_use | Stand-alone cradle-to-gate steel production without an upstream feedstock dataset; alloy-steel, welded, hollow, cold-finished, coated or fabricated section products; unqualified cross-route comparisons |
| required_metadata | PCR id and version; site and geography; production period; steel grade and standard; section geometry and commercial length; feedstock form, supplier dataset and incoming temperature; hot-forming route; furnace fuel and technology; descaling and cooling methods; meter boundaries; allocation; residue destinations; unresolved UUIDs |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; mass-balance result; route shares if aggregated; temporal and technological representativeness; upstream dataset choice; exclusions; allocation sensitivity; emission-monitoring basis |
| update_trigger | Change in steel grade family, feedstock source or state, forming route, furnace fuel/technology, descaling or cooling circuit, section-mill configuration, allocation, residue destination, or a material change in annual normalized inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, CPC 41251. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Product identity, allowed hot-forming states and exclusions |
| `ec-jrc-fmp-bref-2022` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, 2022. https://doi.org/10.2760/196475 (retrieved 2026-09-03) | Downstream boundary, structural/section mill process map, descaling, cooling, water circuits, emissions and residues |
| `worldsteel-lci-methodology-2017` | method_factor | World Steel Association, Life Cycle Inventory Methodology Report for Steel Products, 2017, ISBN 978-2-930069-89-0. https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (retrieved 2026-09-03) | Factory-gate data production, external semi-finished inputs, material recovery, allocation disclosure, quality and mass-balance validation |
| `worldsteel-sections-eco-profile-2023` | dataset | World Steel Association, Global Sections - Construction LCA eco-profile, publication date June 2023. https://worldsteel.org/wider-sustainability/life-cycle-thinking/lca-eco-profiles-2024-release/global-sections-construction/ (retrieved 2026-09-03) | Representative structural-section identity and 1 metric tonne declared-unit precedent |
| `cn-nbs-industry-classification-2017` | official_guidance | National Bureau of Statistics of China, 2017 National Economic Industry Classification Annotation, class 3130 Steel rolling processing. https://www.stats.gov.cn/xxgk/tjbz/gjtjbz/202008/P020200811608157848094.pdf (retrieved 2026-09-03) | Professional Chinese terminology and rolling/extrusion production context |
