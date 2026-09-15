---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-alloy-steel-further-worked-than-hot-or-cold-processed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bars and rods of alloy steel, further worked than hot- or cold-processed

## 1. Scope and Applicability

This PCR applies to straight alloy-steel bars and rods that remain bars or rods at the factory gate and have completed at least one declared mechanical, thermal, chemical-surface, or metallic-coating operation beyond the incoming hot-processed or cold-processed state. Examples of qualifying further work include drilling, punching, sizing, grinding, polishing, heat treatment, chemical surface treatment, or coating when the product does not thereby acquire the character of a different article.

The foreground boundary starts with receipt of a declared alloy-steel bar or rod feedstock and ends with the net saleable further-worked bar or rod ready for dispatch. Upstream steelmaking and production of the received feedstock are represented by supplier-specific upstream datasets. Installation construction, capital equipment, customer fabrication, use, and end-of-life are outside the foreground boundary. Hot-rolled coil or wire rod, wire, hollow drill bars, angles, shapes, sections, fasteners, shafts, tools, and other fabricated articles are excluded when they no longer meet the declared bar-or-rod product identity. The producer shall declare the alloy grade, product form, incoming state, qualifying further-working operation, heat-treatment state, surface condition or coating, dimensions and tolerances, production site, and gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-alloy-steel-further-worked-than-hot-or-cold-processed |
| classification_refs | CPC 3.0: 41265, exact mapping context |
| covered_products | Alloy-steel bars and rods retaining bar or rod character after at least one declared operation beyond hot or cold processing |
| excluded_products | Products only hot-processed or cold-processed; stainless-steel products unless the declared classification treats them within this alloy-steel category; wire; hollow drill bars; angles, shapes and sections; and fabricated articles whose further working gives them another product identity |
| representative_product | Straight, saleable alloy-steel bar with declared grade, cross-section, dimensions, tolerance, heat-treatment state, surface condition, and qualifying further-working operation |
| production_route | Receipt of alloy-steel bar or rod feedstock followed by one or more declared mechanical finishing, heat-treatment, chemical surface-treatment, or metallic-coating operations and final inspection |
| market_state | Net saleable mass at the further-working facility gate, dry and free of temporary process liquids except any declared retained protective coating |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of alloy-steel bars or rods that retain bar or rod character after a declared operation beyond hot or cold processing |
| How much | 1,000 kg net saleable product at the further-working facility gate |
| How well | Conforming to the declared alloy grade, dimensions and tolerance, straightness, heat-treatment state, surface condition or coating, and applicable customer or product specification |
| How long or cycle | One completed production campaign or accounting period represented by the foreground records; no use-stage duration is credited |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 |
| Reference product flow | Bars and rods of alloy steel, further worked than hot- or cold-processed `f72c06a2-f974-4d85-9308-b31cbb1d1b9a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy grade and composition specification; bar or rod form and cross-section; dimensions and tolerances; incoming hot- or cold-processed state; qualifying further-working operation; heat-treatment state; surface condition or coating specification; net saleable mass basis; production site and geography; technology and equipment; data period; factory-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-normalized material rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report dry net saleable product mass, excluding pallets, strapping, residual bath liquid, and separately measured process scrap; normalize all inventory results to 1,000 kg reference product. |
| `electricity_energy` | purchased alternating current | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered delivered electricity and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose supplier, geography, voltage, technology, and point-of-use delivery boundary. |
| `gas_volume` | natural gas in the gaseous state | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volume at the declared reference temperature and pressure and retain the supplier net calorific value needed for any energy or fossil-carbon calculation. |
| `water_mass` | Process Water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report make-up process water by mass; when the primary meter records volume, convert using a documented density and the meter's reference conditions, and retain the original volume record. |
| `mass_balance` | steel input, product, scrap, collected dust, and retained coating | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile measured steel-bearing inputs and outputs over the same campaign; investigate and disclose any residual greater than the site's documented scale uncertainty and stock-change allowance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Alloy-steel bar or rod feedstock received at the further-working facility, with supplier, grade, form, dimensions, mass, hot- or cold-processed state, surface condition, recycled-content accounting approach, and transport hand-off declared |
| starting_condition_role | Upstream product input and boundary hand-off; upstream steelmaking and prior hot or cold processing are not repeated in the foreground process |
| product_classification_scope | Alloy-steel bars and rods retaining bar or rod character after at least one declared operation beyond hot or cold processing |
| recursive_input_rule | A received bar or rod already within this same category is recorded once as an upstream product flow with its supplier dataset and declared prior operations; do not recursively reproduce its further-working inventory in the receiving foreground process |
| upstream_dataset_requirement | Use supplier- and grade-specific cradle-to-gate data where available; otherwise use a documented geographically and technologically representative alloy-steel bar or rod dataset and disclose substitutions, alloy scope, prior processing state, and whether recycling credits are included |
| disclosure | Declare included and excluded operations, feedstock state, yield and stock changes, heat and surface-treatment routes, energy carriers, water loops, chemical baths, emission controls, waste destinations, scrap accounting, transport hand-off, and any separately reported recycling credit |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground further-working process | Include receipt, handling, every operation that establishes the declared beyond-hot/cold product state, final inspection, on-site utilities directly serving those operations, abatement, and waste handling through the facility gate. | `unsd-cpc-3-0-structure-2025`; `us-cbp-cross-hq-965792`; `eu-2022-2110-ferrous-metals-processing` |
| `boundary_upstream_handoff` | received alloy-steel bar or rod | Represent steelmaking and prior feedstock production with an upstream dataset at the declared incoming state; do not recreate those upstream processes inside the foreground further-working inventory. | `worldsteel-lci-study-2021-release` |
| `boundary_route_condition` | conditional operations | Include only mechanical, thermal, pickling, cleaning, coating, abatement, and wastewater operations actually used for the reference product; declare every omitted route as not applicable with production evidence. | `eu-2022-2110-ferrous-metals-processing` |
| `boundary_downstream_exclusion` | downstream manufacture, use, and end-of-life | Exclude customer fabrication, use, and end-of-life from the foreground result; report any recycling credit separately and prevent double counting with downstream models. | `worldsteel-lci-study-2021-release` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `further_working_and_finishing` | Further working, finishing, inspection, and directly associated abatement | required | At least one declared operation beyond the incoming hot- or cold-processed state is required; individual exchange cards apply only when their named route is used | Foreground conversion of received alloy-steel bar or rod into net saleable further-worked product | 1,000 kg net saleable reference product |

### Process: Further working, finishing, inspection, and directly associated abatement (`further_working_and_finishing`)

#### Inputs

##### Product flows

###### Received alloy-steel bar or rod (`input_alloy_steel_bar_rod`)

Record the measured mass of received alloy-steel bar or rod crossing the facility gate into the represented campaign.

- Selected flow: Alloy steel bar or rod feedstock
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass adjusted for opening and closing stock attributable to the represented product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `worldsteel-lci-study-2021-release`

###### Purchased electricity (`rolling_electricity`)

Record alternating-current electricity delivered to further-working equipment and directly associated pumps, extraction, treatment, and inspection systems.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered delivered electricity allocated to the represented campaign by submeter or documented equipment-time and load records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Natural gas for direct process heating (`natural_gas_input`)

Record pipeline natural gas only when it is consumed by a furnace, bath heater, dryer, or coating kettle inside the foreground boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered delivered gas at the declared reference conditions, assigned to the represented campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; zero only when documented electric or non-gas heating is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Process water (`process_water_input`)

Record fresh or purchased process water entering washing, cooling, grinding, pickling, rinsing, wet scrubbing, or wastewater treatment loops.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured make-up-water mass assigned to the represented campaign, excluding internally recirculated water; convert metered volume using documented density and reference conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; zero only when no water crosses the foreground boundary
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Hydrochloric acid (`hydrochloric_acid_input`)

Record hydrochloric acid solution entering a declared pickling or surface-treatment bath; retain concentration and fresh-acid mass separately.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued solution mass multiplied by documented active-acid mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg HCl per 1,000 kg net saleable reference product; not applicable when this acid is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Sulfuric acid (`sulfuric_acid_input`)

Record sulfuric acid solution entering a declared pickling or surface-treatment bath; retain concentration and fresh-acid mass separately.

- Selected flow: Sulfuric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued solution mass multiplied by documented active-acid mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg H2SO4 per 1,000 kg net saleable reference product; not applicable when this acid is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Nitric acid (`nitric_acid_input`)

Record nitric acid solution only when a declared mixed-acid surface-treatment route uses it.

- Selected flow: Nitric acid `bf883501-c052-414e-8e21-e6f53cc257ba`
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued solution mass multiplied by documented active-acid mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg HNO3 per 1,000 kg net saleable reference product; not applicable when this acid is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Hydrofluoric acid (`hydrofluoric_acid_input`)

Record hydrofluoric acid solution only when a declared mixed-acid surface-treatment route uses it.

- Selected flow: Hydrofluoric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued solution mass multiplied by documented active-acid mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg HF per 1,000 kg net saleable reference product; not applicable when this acid is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Record sodium hydroxide solution entering declared alkaline cleaning, bath maintenance, or on-site neutralisation.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued solution mass multiplied by documented active-alkali mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg NaOH per 1,000 kg net saleable reference product; not applicable when this alkali is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Lubricating oil (`lubricating_oil_input`)

Record the specific lubricating oil formulation crossing the foreground boundary into machining, grinding, sizing, or material-handling equipment.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued lubricant adjusted for opening stock, closing stock, and documented recovery for reuse
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when no lubricant is consumed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Zinc for hot-dip coating (`zinc_input`)

Record zinc metal crossing the foreground boundary only when a declared hot-dip metallic-coating operation is included.

- Selected flow: Zinc metal
- Flow property / unit: Mass / kg
- Amount rule: Zinc receipts plus opening bath stock minus closing bath stock, saleable coating retained on product, and measured zinc-bearing outputs, reconciled over the campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when no zinc coating is applied
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_mass_balance`
- Sources: `eu-2022-2110-ferrous-metals-processing`

##### Waste flows

No waste input is prescribed. Record an incoming waste only when the foreground facility actually accepts a separately classified waste into an included treatment operation, with a separately reviewed flow identity.

##### Elementary flows

No elementary input is prescribed for this gate-to-gate foreground process.

#### Outputs

##### Product flows

###### Net saleable further-worked alloy-steel bar or rod (`reference_product`)

Record the inspected net saleable product mass at the facility gate after all declared further-working operations.

- Selected flow: Bars and rods of alloy steel, further worked than hot- or cold-processed `f72c06a2-f974-4d85-9308-b31cbb1d1b9a`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg reference amount after exclusion of packaging, process liquids, rejects, and separately recorded scrap
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `worldsteel-lci-study-2021-release`

##### Waste flows

###### Alloy-steel scrap (`alloy_steel_scrap`)

Record offcuts, turnings, and rejected solid alloy steel leaving the foreground process as a separately weighed scrap stream; retain grade and contamination state.

- Selected flow: Alloy steel scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred off site or to a separately modelled recovery process, adjusted for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `worldsteel-lci-study-2021-release`

###### Collected steel grinding dust (`steel_grinding_dust`)

Record steel-bearing dust captured from grinding or other declared mechanical finishing separately from particulate matter released to air.

- Selected flow: Collected steel grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured mass removed from collectors and transferred to the documented waste destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when no dust-generating operation is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Spent pickling liquor (`spent_pickling_liquor`)

Record spent pickling liquor leaving the foreground boundary, with acid system, free-acid concentration, dissolved metals, water content, and recovery or treatment destination declared.

- Selected flow: Spent pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred to on-site recovery, off-site recovery, treatment, or disposal, adjusted for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when no pickling bath is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Acidic process wastewater (`acidic_process_wastewater`)

Record acidic process wastewater crossing to off-site treatment or discharge after the included on-site treatment boundary; retain flow, pH, relevant metal, fluoride, oil, and solids measurements.

- Selected flow: Acidic process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered volume leaving the declared on-site treatment boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when no acidic water leaves the boundary
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Zinc dross (`zinc_dross`)

Record zinc dross removed from a declared hot-dip coating bath separately from zinc retained on product and reusable zinc splashes.

- Selected flow: Zinc dross
- Flow property / unit: Mass / kg
- Amount rule: Measured dross mass transferred to recovery, recycling, treatment, or disposal
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when no zinc bath is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_mass_balance`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Used lubricating oil (`used_lubricating_oil`)

Record used lubricating oil leaving the foreground boundary after internal reuse, with water and metal contamination declared.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred to recovery, recycling, treatment, or disposal, adjusted for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when no used lubricant leaves the boundary
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air`)

Record fossil carbon dioxide released from on-site combustion inside the foreground boundary; exclude upstream fuel-production emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from collected fuel volume, supplier net calorific value, documented carbon factor, oxidation basis, and combustion allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; zero only when documented on-site fossil combustion is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Particulate matter from steel working to air (`steel_particulate_air`)

Record measured particulate matter passing the final air-emission control boundary from grinding, finishing, or other declared mechanical steel working; retain the measured particle-size convention and source operation.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack concentration multiplied by standardised dry gas volume for the represented campaign, with fugitive releases separately disclosed when quantified
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when no relevant emission source exists
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Hydrogen chloride to air (`hydrogen_chloride_air`)

Record hydrogen chloride passing the final air-emission control boundary only when hydrochloric-acid pickling is used.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack concentration multiplied by standardised dry gas volume for the represented campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when hydrochloric-acid pickling is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

###### Hydrogen fluoride to air (`hydrogen_fluoride_air`)

Record hydrogen fluoride passing the final air-emission control boundary only when a hydrofluoric-acid-containing treatment bath is used.

- Selected flow: Hydrogen fluoride
- Flow property / unit: Mass / kg
- Amount rule: Measured stack concentration multiplied by standardised dry gas volume for the represented campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product; not applicable when hydrofluoric acid is absent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `eu-2022-2110-ferrous-metals-processing`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | multiple products or campaigns sharing equipment | Prefer process subdivision and product-specific metering. Assign shared electricity, fuel, water, chemicals, treatment, and waste by a documented physical driver that reflects causation, such as submetered consumption, treatment throughput, equipment time and load, or measured mass processed. | `eu-2022-2110-ferrous-metals-processing` |
| `allocation_scrap_separation` | alloy-steel scrap and zinc-bearing outputs | Report measured scrap and zinc-bearing outputs separately without netting avoided primary production or end-of-life recycling credits into the foreground inventory. State whether each output is waste, recovered material, or co-product and keep any recycling credit as a separate scenario. | `worldsteel-lci-study-2021-release` |
| `allocation_residual_method` | unavoidable shared burdens lacking a physical driver | If subdivision and causal physical allocation are not possible, use the most specific documented engineering allocation available, perform a sensitivity check for material results, and disclose the method and affected rows; economic allocation requires explicit review and price-period disclosure. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `further_working_and_finishing` | steel feedstock, saleable product, scrap, and stock change | scale tickets, batch records, inventory records, inspection disposition | timestamp; batch; grade; product code; gross mass; tare; net mass; opening stock; closing stock; disposition; scale id | Calibrated scales reconciled to production and inventory records | kg | Each receipt and output movement; campaign reconciliation | Same representative period as the reference product, normally at least 12 consecutive months or a justified shorter campaign | All lines and storage areas serving the declared product | Sum grade- and product-specific movements, apply stock change, and normalize to 1,000 kg net saleable product | Calibration certificates, traceable tickets, batch genealogy, inventory reconciliation, and explanation of mass-balance residual |
| `cp_energy_records` | `further_working_and_finishing` | purchased electricity and natural gas | submeter, invoice, furnace log, equipment operating record | meter id; opening reading; closing reading; timestamp; energy carrier; voltage; gas reference conditions; NCV; equipment id; operating time; product throughput | Read dedicated meters where available; otherwise reconcile invoice totals and allocate by documented equipment load and operating time | MJ for electricity; m3 for natural gas | Continuous or shift readings with monthly reconciliation | Same representative period as production records | All included equipment and directly associated treatment systems | Subtract exported or unrelated energy, assign included consumption by causal driver, convert electricity at 3.6 MJ/kWh, and normalize to reference flow | Meter calibration, invoices, supplier mix and voltage evidence, gas quality statement, downtime logs, and allocation worksheet |
| `cp_water_chemical_records` | `further_working_and_finishing` | water, acids, alkali, and lubricant | water meter, purchase record, issue record, bath make-up log, stock record | substance identity; concentration; supplier; lot; mass or volume; opening stock; closing stock; bath id; make-up; purge; recovery; product batch | Meter water and reconcile each chemical formulation using purchases, issues, stock changes, and bath logs | kg water, retaining source m3 where metered; kg solution and kg active substance | Each delivery or issue with shift or batch bath logging; monthly reconciliation | Same representative period as production records | Every included water loop, chemical bath, and lubricant system | Exclude internal recirculation, convert water volume with documented density and reference conditions, calculate active substance from documented concentration, assign by treated product mass or bath throughput, and normalize to reference flow | Meter calibration, safety data sheet or certificate of analysis, purchase invoice, stocktake, bath analysis, and reconciliation |
| `cp_coating_mass_balance` | `further_working_and_finishing` | zinc input, coating retained on product, zinc dross, and recovered zinc | weigh tickets, purchase and stock records, bath analysis, coating test | zinc receipt; opening bath stock; closing bath stock; dross mass; recovered splash mass; product mass; coated area; coating mass or thickness | Reconcile zinc-bearing inputs and outputs over the campaign and verify retained coating by product test | kg | Each material movement and coating test; campaign reconciliation | Same representative period as coated product records | Each included zinc-coating line | Sum zinc receipts and stock change, reconcile retained coating and zinc-bearing outputs, and normalize to reference flow | Calibrated scales, bath inventory, coating test reports, recovery tickets, and zinc mass-balance residual |
| `cp_waste_emission_records` | `further_working_and_finishing` | wastes, wastewater, and direct air emissions | waste manifest, tank transfer, wastewater meter and sample, stack test, continuous monitor, documented emission calculation | stream identity; mass or volume; composition; pH; metals; fluoride; oil; solids; destination; concentration; gas flow; fuel data; factor source; control status | Measure transfers and monitored releases at the final foreground control boundary; calculate only from traceable collected activity data and documented factors | kg or m3 per stream | Each transfer; continuous monitoring or permit-compliant sampling; monthly reconciliation | Same representative period as production records, including normal operation and disclosed abnormal periods | Every included waste, water, and air-emission point | Keep streams segregated, subtract documented internal reuse only, calculate concentration-times-flow emissions, assign by causal process driver, and normalize to reference flow | Manifests, laboratory accreditation and detection limits, flowmeter calibration, stack-test reports, monitoring completeness, factor provenance, and control-equipment logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Normalized amount = campaign amount assigned to the reference product / campaign net saleable product mass × 1,000 kg | assigned campaign amount; campaign net saleable product mass | amount per 1,000 kg reference product | `worldsteel-lci-study-2021-release` |
| `calc_input_mass` | `input_alloy_steel_bar_rod` | Received input = receipts + opening attributable stock - closing attributable stock - documented transfers to other products | receipt mass; opening stock; closing stock; transfer records | kg alloy-steel bar or rod input |  |
| `calc_active_chemical` | acid and alkali inputs | Active substance mass = solution mass × documented active-substance mass fraction; keep solution water separately if material | issued solution mass; certificate or bath concentration | kg active HCl, H2SO4, HNO3, HF, or NaOH | `eu-2022-2110-ferrous-metals-processing` |
| `calc_direct_fossil_co2` | `fossil_co2_air` | Use measured stack mass where available; otherwise calculate from collected fuel consumption and a documented supplier, laboratory, or jurisdiction-approved carbon factor and oxidation basis, without adding upstream fuel emissions | fuel volume; reference conditions; NCV; carbon factor; oxidation basis; process allocation | kg fossil CO2 crossing the foreground air boundary | `eu-2022-2110-ferrous-metals-processing` |
| `calc_stack_mass` | `steel_particulate_air`, `hydrogen_chloride_air`, and `hydrogen_fluoride_air` | Emission mass = representative measured concentration × standardised dry gas volume over the same operating period, adjusted for monitoring coverage and control bypasses | concentration; dry gas flow; operating time; oxygen and moisture correction; control status | kg emitted substance | `eu-2022-2110-ferrous-metals-processing` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and steel input | Preserve batch-level grade, product form, dimensions, tolerance, incoming state, further-working operation, heat treatment, and surface/coating specification; do not combine materially different products without a documented production-weighted aggregation. | Product specification, certificate of analysis, route sheet, inspection record, and batch genealogy |
| `dq_temporal` | all foreground records | Use one coherent representative period, normally at least 12 consecutive months; justify shorter campaigns and disclose shutdowns, start-ups, abnormal operation, stock changes, and missing intervals. | Period register, production calendar, downtime log, and monitoring-completeness report |
| `dq_measurement` | measured mass, energy, water, chemical, waste, and emission records | Use calibrated instruments or traceable commercial records; retain units, reference conditions, detection limits, concentration basis, and conversion factors. | Calibration certificates, invoices, laboratory reports, certificates of analysis, and conversion worksheet |
| `dq_completeness` | process and exchange coverage | Map every declared further-working operation to energy, material, water, chemical, waste, and direct-emission records; document not-applicable evidence for each omitted conditional row. | Process flow sheet, chemical and wastewater/waste-gas inventory, energy balance, water balance, and residues plan |
| `dq_upstream` | received alloy-steel bar or rod dataset | Match supplier, geography, alloy scope, steelmaking route where known, product form, and incoming processing state; disclose proxy use and whether recycling credits or scrap burdens are present. | Supplier dataset metadata, representativeness assessment, and recycling-accounting statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail if the dataset omits alloy grade, bar or rod form, dimensions/tolerances, incoming state, qualifying further-working operation, heat-treatment state, surface/coating state, net saleable mass basis, site, technology, period, or factory gate. | `unsd-cpc-3-0-structure-2025`; `us-cbp-cross-hq-965792` |
| `validate_route_coverage` | foreground process map | Fail if no operation beyond hot or cold processing is declared, if an included operation lacks its atomic exchanges and collection records, or if a conditional route is marked not applicable without production evidence. | `eu-2022-2110-ferrous-metals-processing` |
| `validate_inventory_atomicity` | process inventory | Fail if any row combines substances, energy carriers, waste streams, or emission species, or if recovered material, released emission, and captured waste are netted into one exchange. | `eu-2022-2110-ferrous-metals-processing` |
| `validate_mass_energy_water` | foreground records | Fail or flag for review when the steel-bearing mass balance exceeds documented measurement and stock uncertainty, when energy or water totals do not reconcile to facility records, or when conversion reference conditions are missing. | `eu-2022-2110-ferrous-metals-processing` |
| `validate_recycling_double_count` | scrap and end-of-life scenarios | Fail if an avoided-production or end-of-life recycling credit is netted into the foreground gate-to-gate inventory and also applied by an upstream or downstream model. | `worldsteel-lci-study-2021-release` |
| `validate_uuid_resolution` | UUID-bearing and unresolved flows | Require an exact public UUID for the reference product; for any other row without an exact candidate, keep the UUID empty, record the reviewed unresolved reason and receipt, and never substitute a semantically broader proxy. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-system dataset for further working and finishing of alloy-steel bars and rods |
| downstream_use | `secondary_dataset`; `background_dataset` after review of upstream feedstock data, route representativeness, allocation, and unresolved UUIDs |
| allowed_use | Product carbon-footprint and LCA models requiring a factory-gate further-working dataset with matching grade, form, processing route, surface state, geography, technology, period, and recycling-accounting convention |
| excluded_use | Direct comparison of products with different specifications or functions; substitution for upstream steelmaking; customer fabrication, use, or end-of-life; and use of this candidate PCR as a published generic benchmark |
| required_metadata | PCR id and version; product and classification identity; alloy grade; dimensions and tolerance; incoming state; qualifying further-working operations; heat treatment; surface/coating specification; net mass basis; site and geography; technology; data period; upstream dataset; allocation; energy, water, chemical, emission-control and waste routes; UUID resolution status |
| required_quality_disclosure | Temporal and site coverage; measurement and allocation methods; mass, energy, water, chemical and coating reconciliations; missing-data treatment; monitoring completeness; data-source age; upstream representativeness; uncertainty and unresolved range evidence; recycling-credit convention |
| update_trigger | Change in alloy or product scope, incoming state, qualifying operation, heat-treatment or coating route, site technology, energy supply, bath chemistry, abatement, allocation, upstream steel dataset, recycling convention, legal monitoring basis, or availability of exact TianGong UUIDs and independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official CPC 41265 product-classification identity |
| `unsd-cpc-v1-1-chinese-manual` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese manual, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/cpc_v1_1_complete%28pdf%29_chinese.zip (retrieved 2026-09-03) | Professional Chinese terminology for alloy-steel bars and rods and further processing; not used as a quantitative source |
| `us-cbp-cross-hq-965792` | official_guidance | U.S. Customs and Border Protection, CROSS Ruling HQ 965792, https://rulings.cbp.gov/ruling/965792 (retrieved 2026-09-03) | Boundary examples for further mechanical work and surface treatment while the product retains Chapter 72 product character |
| `eu-2022-2110-ferrous-metals-processing` | official_guidance | Commission Implementing Decision (EU) 2022/2110, BAT conclusions for the ferrous metals processing industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2110/oj/eng (retrieved 2026-09-03) | Process decomposition, energy and water boundaries, chemical/waste/emission inventories, monitoring, and route conditions; regulatory levels are not used as empirical PCR ranges |
| `worldsteel-lci-study-2021-release` | method_factor | World Steel Association, Life Cycle Inventory Study Report, 2021 data release, https://worldsteel.org/wp-content/uploads/2021-LCA-Study-Report.pdf (retrieved 2026-09-03) | Mass functional unit, factory-gate boundary, upstream dataset hand-off, data representativeness, scrap/recycling separation, and double-counting caution; no quantitative range imported |
