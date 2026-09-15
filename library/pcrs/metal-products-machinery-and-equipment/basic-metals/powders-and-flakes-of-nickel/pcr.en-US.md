---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-nickel
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Powders and flakes of nickel

## 1. Scope and Applicability

This PCR applies to elemental nickel powders and flake-shaped nickel powders delivered at the producing factory gate. It covers carbonyl decomposition, pressure hydrogen reduction from purified nickel solution, wet mechanical flaking of nickel powder, route-specific abatement, drying, classification, blending, and sale packaging when performed by the reporting facility.

It excludes nickel ores and concentrates, nickel matte, nickel oxide sinter and other upstream metallurgical intermediates as reference products; compact unwrought nickel, nickel alloy powder unless separately declared and compositionally modelled, nickel-coated particles, nickel-containing pastes, briquettes, sintered parts, catalysts, battery electrodes, and downstream powder-metallurgy products. Mining, concentration, smelting, and production of purchased feedstocks are represented by upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-nickel |
| classification_refs | CPC 3.0: 41521, Powders and flakes of nickel |
| covered_products | Elemental nickel powder; flake-shaped elemental nickel powder; declared grades differing in particle-size distribution, morphology, purity, apparent density, or surface condition |
| excluded_products | Nickel ore or concentrate; nickel matte or oxide sinter as reference product; compact unwrought nickel; nickel alloy powder not separately compositionally modelled; nickel-coated particles; pastes; briquettes; sintered or fabricated parts |
| representative_product | Saleable elemental nickel powder or flake powder meeting the declared specification |
| production_route | Carbonyl decomposition; pressure hydrogen reduction from purified nickel solution; wet mechanical flaking of nickel powder; another route only when its complete process map and route-specific exchanges are disclosed |
| market_state | Dry saleable powder or flake powder in declared packaging, with moisture, passivation, particle-size distribution, morphology, purity, and packaging stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of saleable elemental nickel powder or flake powder with declared technical quality |
| How much | 1,000 kg net mass of saleable product, excluding packaging |
| How well | Conforming to the declared nickel content, alloy status, particle-size distribution, morphology, apparent density, surface treatment or passivation, moisture, and contamination limits |
| How long or cycle | One production lot at factory gate; no use duration is assigned to the semi-finished material |
| reference_flow_link | `reference_nickel_powder_flake` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net saleable product |
| Reference product flow | Powders and flakes of nickel (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | elemental nickel or declared nickel alloy status; powder or flake morphology; production route; nickel content and relevant impurities; particle-size distribution; apparent density when specified; surface treatment or passivation; moisture; geographic and temporal scope; recycled-feed share; packaging type; net-versus-gross mass basis |

All required qualifiers must be declared in dataset metadata, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-based exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported exchanges to 1,000 kg net saleable nickel powder or flake; exclude packaging mass from the reference amount. |
| `gas_basis` | Gaseous hydrogen, carbon monoxide, natural gas, and stack flows | Mass or Volume | kg or m3 | Preserve the measured basis. When converting volume to mass, report gas composition, pressure, temperature, moisture basis, and conversion factor. |
| `electricity_basis` | Electricity | Net calorific value | MJ | Preserve metered electrical energy and document any kWh-to-MJ conversion; do not treat electricity as mass. |
| `metal_balance_basis` | Nickel-bearing feeds, saleable product, co-products, wastes, and direct nickel releases | Mass | kg | Report both wet or gross mass and nickel content where relevant; calculate contained nickel on a consistent analytical and moisture basis. |

## 5. System Boundary

The foreground boundary begins with nickel-bearing feed, process chemicals, utilities, and packaging crossing the reporting-facility boundary and ends with saleable nickel powder or flake, co-products, wastes sent to treatment or recovery, and elementary releases. Internal carbon monoxide, ammonium sulfate, water, solvent, off-specification powder, and captured-dust recycles are not double-counted as external exchanges; gross recovery and makeup records are retained.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-gate nickel-bearing feed: nickel monoxide for the carbonyl route, purified nickel-sulfate solution for pressure hydrogen reduction, or nickel powder for flaking; chemical form, purity, moisture, supplier, recycled content, and custody boundary are declared |
| starting_condition_role | Upstream product input to the foreground powder-production or flaking process |
| product_classification_scope | Elemental nickel powders and flakes; upstream ores, mattes, oxide sinters, and compact nickel remain separate product categories |
| recursive_input_rule | Purchased nickel powder used to make nickel flakes is recorded once as an upstream product input with its supplier dataset; internally produced powder transferred to flaking is an internal transfer and is not recursively expanded or counted as an external input |
| upstream_dataset_requirement | Use route-, geography-, technology-, recycled-content-, composition-, and product-state-appropriate datasets for every purchased nickel feed, chemical, energy carrier, packaging component, and off-site treatment service |
| disclosure | Declare route, feed state, internal recycle loops, abatement configuration, product morphology and specification, allocation decisions, included packaging, and any process step operated by another organization |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground production | Include route-specific powder formation, abatement, finishing, internal recovery, and sale packaging operated by the reporting facility; represent upstream feed production and off-site treatment with separate datasets. | `eu-jrc-nfm-bref-2017`; `epo-metal-flake-ep0097017a2` |
| `boundary_route_disclosure` | Route selection | Include only route processes that physically occur and disclose omitted alternatives; do not average carbonyl, hydrogen-reduction, and flaking routes without production-weighted records. | `eu-jrc-nfm-bref-2017`; `epo-metal-flake-ep0097017a2` |
| `boundary_recycle` | Internal recycles | Exclude internal recycle loops from external totals while retaining gross circulation, recovery, purge, and makeup records sufficient to reconcile mass and emissions. | `eu-jrc-nfm-bref-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `carbonyl_powder` | Carbonyl nickel powder production and off-gas treatment | conditional | Include when nickel carbonyl is formed and thermally decomposed to powder at the reporting facility. | Foreground powder formation and abatement | Per 1,000 kg net saleable product attributable to this route |
| `hydrogen_reduction_powder` | Pressure hydrogen reduction of purified nickel solution | conditional | Include when purified nickel solution is reduced with hydrogen to metallic powder at the reporting facility. | Foreground powder formation, solution recovery, and abatement | Per 1,000 kg net saleable product attributable to this route |
| `wet_flaking` | Wet mechanical flaking | conditional | Include for flake products made by milling nickel powder in white spirit or an equivalent separately modelled liquid medium. | Foreground morphology conversion, separation, and drying | Per 1,000 kg net saleable flake product |
| `finishing_packaging` | Drying, classification, blending, and packaging | required | Include steps performed for the declared saleable product; record non-applicable direct-fired drying or water rows as zero with evidence. | Foreground finishing and reference-product output | Per 1,000 kg net saleable product |

### Process: Carbonyl nickel powder production and off-gas treatment (`carbonyl_powder`)

#### Inputs

##### Product flows

###### Nickel monoxide feed (`carbonyl_nickel_monoxide`)

Nickel monoxide crosses the carbonyl-process boundary as the route-specific nickel feed.

- Selected flow: Nickel monoxide `3e78d4a3-6ff2-4726-b43c-d761ff8624b0`
- Flow property / unit: Mass / kg
- Amount rule: Measured delivered mass on a declared moisture basis, with nickel content and internal-return share recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Hydrogen for oxide reduction (`carbonyl_hydrogen`)

Hydrogen crosses the boundary as the reducing gas for converting the oxide feed to impure nickel metal.

- Selected flow: Industrial hydrogen (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Meter net hydrogen makeup entering oxide reduction; separately record recovered or purged hydrogen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Carbon monoxide makeup (`carbonyl_carbon_monoxide`)

Carbon monoxide makeup crosses the boundary to replace losses from the closed carbonyl circulation loop.

- Selected flow: Carbon Monoxide `69422d71-f1a5-4c70-bb58-126262b8ddc2`
- Flow property / unit: Mass / kg
- Amount rule: Meter net carbon monoxide makeup after recovered carbon monoxide recycle; retain gross circulation and purge records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Electricity (`carbonyl_electricity`)

Electricity crosses the boundary to operate the carbonyl route and its gas-handling and abatement equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter electricity attributable to reduction, carbonyl formation, separation, decomposition, gas handling, filtration, and auxiliaries.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonyl_records`
- Sources:

###### Natural gas for afterburner (`carbonyl_natural_gas`)

Natural gas crosses the boundary as the separately metered afterburner fuel.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Meter natural gas supplied to the afterburner; record reference conditions and do not combine recovered hydrogen with purchased natural gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water (`carbonyl_process_water`)

Process water crosses the boundary as net makeup for cooling, dust handling, and associated operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Meter net process-water makeup for gas cooling, dust slurrying, and associated operations; exclude recirculated water from external makeup.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

#### Outputs

##### Waste flows

###### Nickel monoxide filter dust sent off-site (`carbonyl_nickel_oxide_filter_dust`)

Captured nickel monoxide dust crosses the boundary only when transferred off-site for recovery or disposal.

- Selected flow: Nickel monoxide filter dust from carbonyl off-gas treatment (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh captured nickel monoxide dust leaving for recovery or disposal; exclude dust internally returned without crossing the boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Residual fossil carbon monoxide to air (`carbonyl_co_fossil_air`)

Residual fossil carbon monoxide crosses the environmental boundary after carbonyl off-gas treatment.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from validated post-abatement stack concentration and dry-normal gas flow over matching operating time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Fossil carbon dioxide to air (`carbonyl_co2_fossil_air`)

Fossil carbon dioxide crosses the environmental boundary from direct fuel combustion and carbon monoxide oxidation.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate direct fossil carbon dioxide from metered fossil fuel and oxidized fossil carbon monoxide using a documented carbon balance; exclude upstream electricity emissions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel carbonyl to air (`carbonyl_nickel_carbonyl_air`)

Any monitored residual nickel carbonyl crosses the environmental boundary as a chemically specific air emission.

- Selected flow: Nickel carbonyl emitted to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate any controlled residual release from validated monitoring or documented detection-limit treatment; never substitute total elemental nickel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel to air (`carbonyl_nickel_air`)

Elemental nickel in post-filter particulate matter crosses the environmental boundary as an air emission.

- Selected flow: Nickel emitted to air, unspecified compartment (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate elemental nickel mass from validated post-filter particulate concentration and stack-flow records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbonyl_records`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Pressure hydrogen reduction of purified nickel solution (`hydrogen_reduction_powder`)

#### Inputs

##### Product flows

###### Nickel sulfate feed (`hydred_nickel_sulfate`)

Nickel sulfate crosses the pressure-reduction boundary in the purified nickel-bearing feed solution.

- Selected flow: Nickel Sulfate `7249a3b5-f72e-4195-af83-4c058ac5cc94`
- Flow property / unit: Mass / kg
- Amount rule: Record nickel-sulfate-equivalent mass and solution mass, concentration, nickel assay, moisture, and upstream purification boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Hydrogen (`hydred_hydrogen`)

Hydrogen crosses the boundary as the reducing gas supplied to pressure autoclaves.

- Selected flow: Industrial hydrogen (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Meter net hydrogen supplied to reduction autoclaves, with pressure, purity, recovered gas, and purge disclosed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Ammonia (`hydred_ammonia`)

Ammonia crosses the boundary as route-specific reagent and acid-neutralization input.

- Selected flow: Ammonia `f5325a9a-4bdc-46ea-b878-b88700767ddd`
- Flow property / unit: Mass / kg
- Amount rule: Record net ammonia makeup on an anhydrous-NH3 equivalent basis and disclose supplied concentration and state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Ammonium sulfate makeup (`hydred_ammonium_sulfate_makeup`)

External ammonium sulfate crosses the boundary only as net route makeup after internal recovery.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Record net external ammonium sulfate makeup; internal recovered material is an internal recycle unless it leaves as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Electricity (`hydred_electricity`)

Electricity crosses the boundary to operate pressure reduction, separation, recovery, and abatement equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter electricity for solution handling, autoclaves, gas compression, filtration, crystallization, drying, scrubbing, and auxiliaries.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydred_records`
- Sources:

###### Process water (`hydred_process_water`)

Process water crosses the boundary as net makeup for solution preparation, washing, and scrubbing.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Meter net process-water makeup for solution preparation, washing, and scrubbing; exclude internal recirculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

#### Outputs

##### Product flows

###### Recovered ammonium sulfate co-product (`hydred_ammonium_sulfate_output`)

Recovered ammonium sulfate crosses the boundary only when sold or transferred as a co-product.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass / kg
- Amount rule: Weigh dry ammonium sulfate leaving as a saleable or transferred co-product; record moisture, purity, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Ammonia to air (`hydred_ammonia_air`)

Residual ammonia crosses the environmental boundary after gas scrubbing.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate post-scrubber release from validated concentration and gas-flow records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel to air (`hydred_nickel_air`)

Elemental nickel in post-abatement particulate matter crosses the environmental boundary as an air emission.

- Selected flow: Nickel emitted to air, unspecified compartment (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate elemental nickel from validated post-abatement particulate concentration and stack-flow records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nickel to water (`hydred_nickel_water`)

Elemental nickel crosses the environmental boundary in final water discharged by the reporting facility.

- Selected flow: nickel `08a91e70-3ddc-11dd-96ce-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate elemental nickel in final discharged water from validated concentration and discharge-volume records; separately model off-site treatment when applicable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydred_records`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Wet mechanical flaking (`wet_flaking`)

#### Inputs

##### Product flows

###### Nickel powder feed (`flake_nickel_powder_input`)

Purchased elemental nickel powder crosses the boundary as feed to wet flaking; internal powder is an internal transfer.

- Selected flow: Elemental nickel powder (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh purchased nickel powder; treat internally produced powder as an internal transfer and retain its mass only for process reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable flake product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flaking_records`
- Sources: `epo-metal-flake-ep0097017a2`

###### White spirit milling liquid (`flake_white_spirit`)

White spirit crosses the boundary as net milling-liquid makeup after internal solvent recovery.

- Selected flow: White spirit and special boiling point industrial spirits `5fb93398-c4c6-4b60-bb16-ca956bc35985`
- Flow property / unit: Mass / kg
- Amount rule: Meter net white-spirit makeup after recovered-solvent recycle; disclose grade and recovered fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable flake product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flaking_records`
- Sources: `epo-metal-flake-ep0097017a2`

###### Electricity (`flake_electricity`)

Electricity crosses the boundary to operate milling, separation, drying, vacuum, and auxiliary equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter electricity for milling, solid-liquid separation, vacuum systems, drying, protective-gas handling, and auxiliaries.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable flake product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flaking_records`
- Sources: `epo-metal-flake-ep0097017a2`

#### Outputs

##### Waste flows

###### Spent white spirit sent off-site (`flake_spent_white_spirit`)

Spent white spirit crosses the boundary only when transferred off-site for recovery or disposal.

- Selected flow: Spent white spirit from nickel flake milling (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh solvent-bearing liquid leaving for recovery or disposal; exclude internally recovered solvent from external waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable flake product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flaking_records`
- Sources: `epo-metal-flake-ep0097017a2`

### Process: Drying, classification, blending, and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Electricity (`finish_electricity`)

Electricity crosses the boundary to operate product finishing, dust collection, and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter electricity for drying, screening, classification, blending, dust collection, conveying, and packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Natural gas for direct-fired drying (`finish_natural_gas`)

Natural gas crosses the boundary only when direct-fired drying or heating is used.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Meter natural gas only when direct-fired drying or heating is used; otherwise record zero with equipment evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Process water (`finish_process_water`)

Process water crosses the boundary only when finishing or dust-control equipment consumes net makeup water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Meter net process-water makeup used by finishing or dust-control equipment; otherwise record zero with equipment evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Steel packaging drum (`finish_steel_drum`)

Steel drums cross the boundary as a concrete packaging component supplied with the product.

- Selected flow: Steel packaging drum (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh drums supplied for the reference product, including lids and closures; record substantiated reusable-drum cycles.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Polyethylene bag liner (`finish_polyethylene_bag`)

Polyethylene bags cross the boundary as a concrete liner or packaging component supplied with the product.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: Weigh bags or liners supplied with the reference product; record zero only when another separately modelled packaging configuration is documented.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

#### Outputs

##### Product flows

###### Saleable powders and flakes of nickel (`reference_nickel_powder_flake`)

Conforming nickel powder or flake crosses the boundary as the reference product at the factory gate.

- Selected flow: Powders and flakes of nickel (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of 1,000 kg net saleable product meeting the declared specification; packaging mass is excluded.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Elementary flows

###### Nickel to air from finishing (`finish_nickel_air`)

Elemental nickel in post-abatement finishing exhaust crosses the environmental boundary as an air emission.

- Selected flow: Nickel emitted to air, unspecified compartment (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculate elemental nickel from validated post-abatement particulate concentration and exhaust-flow records for finishing.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | Multiple powder routes or integrated flaking | Prefer process subdivision and measured route-specific inputs, outputs, and abatement records; do not allocate a blended facility total before reasonable subdivision. | `eu-jrc-nfm-bref-2017`; `epo-metal-flake-ep0097017a2` |
| `allocation_internal_recycle` | Carbon monoxide, hydrogen, solvent, water, ammonium sulfate, dust, and off-specification powder recycles | Treat internal recovery as an internal transfer: report external makeup, purge, sale, and disposal once and retain gross recycle data for mass-balance validation. | `eu-jrc-nfm-bref-2017` |
| `allocation_coproduct` | Saleable ammonium sulfate or other exported nickel-bearing material | After subdivision, apply a declared physical relationship only when it reflects causality; otherwise apply economic allocation using a representative price period and report a no-allocation or alternative sensitivity result. | `eu-jrc-nfm-bref-2017` |
| `allocation_waste` | Materials sent for off-site recovery or disposal | Do not assign avoided primary-production credit inside the foreground inventory unless the adopted LCA system model explicitly requires it; disclose waste status, treatment route, and any burden or credit convention. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_carbonyl_records` | `carbonyl_powder` | Carbonyl-route feeds, utilities, wastes, and air releases | Meters, weigh tickets, batch logs, assays, stack monitoring, abatement logs | feed mass and Ni assay; H2 and CO makeup/recycle/purge; electricity; natural gas; water; product; dust; stack concentration, flow, time, moisture, oxygen and reference conditions | Reconcile calibrated meters and batch records; calculate stack masses from validated concentration and flow | kg, m3, MJ, kg Ni, mg/Nm3, Nm3 | Batch or continuous; monthly and annual aggregation | At least 12 representative consecutive months unless a shorter campaign is justified | All carbonyl equipment and shared abatement apportioned by measured drivers | Sum external exchanges; subtract documented internal returns only; normalize by conforming net product | Calibrations, assay QA/QC, stack reports, detection limits, downtime and mass-balance reconciliation |
| `cp_hydred_records` | `hydrogen_reduction_powder` | Solution-reduction feeds, utilities, co-product, and releases | Delivery records, solution flowmeters, batch logs, assays, gas meters, crystallizer, stack and effluent monitoring | solution mass/volume/concentration/Ni assay; H2; NH3; ammonium sulfate; electricity; water; product and co-product; exhaust concentration/flow; effluent volume and Ni | Reconcile batch and utility records; convert solution quantities to declared chemical equivalents; calculate emissions from validated concentration and flow | kg, m3, MJ, kg Ni, mg/Nm3, mg/L | Each batch or continuous; monthly and annual aggregation | At least 12 representative consecutive months unless a shorter campaign is justified | All reduction, crystallization, drying, scrubbing, and shared equipment | Sum external inputs and boundary-crossing outputs; normalize by conforming net product | Calibrations, laboratory methods, certificates, scrubber records, detection limits, and nickel balance |
| `cp_flaking_records` | `wet_flaking` | Nickel powder, white spirit, electricity, and spent solvent | Weigh tickets, batch sheets, solvent tank inventory, recovery records, electricity meters | powder feed; solvent charge, recovery, makeup, purge and off-site waste; electricity; flake output; moisture | Close solvent and nickel balances by batch and period | kg, MJ | Each batch; monthly and annual aggregation | At least 12 representative consecutive months unless a shorter campaign is justified | All milling, separation, drying, and solvent-recovery equipment | Count purchased feed and net solvent makeup once; normalize by conforming net flake output | Calibrations, solvent reconciliation, waste manifests, and product assay |
| `cp_finishing_records` | `finishing_packaging` | Finishing utilities, packaging, reference output, and nickel release | Meters, packaging issue records, production and quality logs, stack tests | electricity; natural gas; water; drum and liner mass; gross/net product; rejects/recycle; particle size, moisture and Ni assay; exhaust concentration and flow | Reconcile saleable output to finishing input and rejects; calculate emissions from validated concentration and flow | kg, MJ, m3, kg Ni, mg/Nm3 | Each lot or continuous; monthly and annual aggregation | At least 12 representative consecutive months unless a shorter campaign is justified | All drying, classification, blending, dust collection, and packaging equipment | Normalize external exchanges to 1,000 kg conforming net product | Calibrations, packaging specifications, quality certificates, stack tests, reject logs, and product mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | Every inventory exchange | normalized amount = reporting-period boundary-crossing amount / net conforming product mass × 1,000 kg | Exchange amount; net conforming product mass | Amount per 1,000 kg reference product |  |
| `calc_contained_nickel` | Nickel-bearing materials | contained nickel = dry material mass × measured nickel mass fraction | Gross mass; moisture; nickel assay | kg contained nickel |  |
| `calc_stack_release` | CO, nickel carbonyl, nickel, and ammonia air releases | release mass = validated concentration × dry-normal exhaust volume over matching operating time, with conversions documented | Concentration; gas flow; time; moisture; reference conditions; detection-limit treatment | kg emitted substance | `eu-jrc-nfm-bref-2017` |
| `calc_water_release` | Nickel to water | release mass = final-effluent nickel concentration × discharged water volume over the matching period | Nickel concentration; discharge volume; below-detection treatment | kg nickel to water | `eu-jrc-nfm-bref-2017` |
| `calc_fossil_co2` | Direct fossil carbon dioxide | Sum carbon-balance CO2 from combusted fossil natural gas and oxidized fossil CO; exclude upstream electricity and material emissions | Fuel carbon; oxidized CO; oxidation factors | kg fossil CO2 to air | `eu-jrc-nfm-bref-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Report composition, powder/flake morphology, particle-size distribution, apparent density when specified, surface condition, moisture, route, lot, and net packaging-excluded mass. | Specification, certificate of analysis, particle-size report, and lot records |
| `dq_route_completeness` | Process map | Demonstrate which route processes occurred and include every site-operated formation, abatement, finishing, recycle, and packaging step. | Process flow diagram, equipment list, and operating records |
| `dq_temporal` | Foreground inventory | Use at least 12 representative consecutive months or justify a shorter complete campaign; disclose shutdowns, abnormal events, and utilization. | Dated meter, batch, maintenance, and production records |
| `dq_measurement` | Mass, energy, gas, and emissions | Use calibrated instruments and validated methods; disclose reference conditions, moisture basis, detection limits, substitutions, and estimation hierarchy. | Calibration and QA/QC records, laboratory methods, and monitoring reports |
| `dq_completeness` | Nickel, carbon, solvent, and ammonium sulfate balances | Reconcile feed, product, co-product, recycle, waste, and release totals; investigate residuals rather than hiding them in an unspecified flow. | Signed balance worksheet and corrective-action record |
| `dq_background` | Purchased inputs and off-site services | Match geography, technology, product state, concentration, recycled content, electricity mix, gas basis, and treatment route; disclose proxies. | Dataset metadata and supplier records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Product output | Confirm exactly 1,000 kg net saleable powder or flake output, excluding packaging, and verify all required qualifiers. | `un-cpc-3-0-structure-2025` |
| `validate_route_inventory` | Process map and inventory | Confirm every included process has route-specific atomic inputs, outputs, abatement, and collection evidence; reject umbrella utilities, chemicals, wastes, or emissions. | `eu-jrc-nfm-bref-2017`; `epo-metal-flake-ep0097017a2` |
| `validate_nickel_balance` | Nickel-bearing exchanges | Reconcile contained nickel across feeds, product, co-products, wastes, internal recycle, and direct releases and investigate residuals. |  |
| `validate_carbonyl_safety_emissions` | Carbonyl route | Require CO and nickel-carbonyl monitoring or justified detection-limit treatment, afterburner and filter operating evidence, and separately reported elemental nickel particulates. | `eu-jrc-nfm-bref-2017` |
| `validate_no_double_counting` | Recycles and backgrounds | Confirm internal recycles are not external inputs or outputs and upstream production emissions are not copied into direct foreground emissions. | `eu-jrc-nfm-bref-2017` |
| `validate_unresolved_uuid` | UUID-empty rows | Block automatic identity resolution until an exact public state-100 Tiangong flow is directly audited; retain concrete name, property, unit, route condition, and unresolved status. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared grade of elemental nickel powder or flake powder |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Cradle-to-gate product systems using a route-, grade-, geography-, technology-, recycled-content-, and time-representative nickel powder or flake input |
| excluded_use | Nickel ore, concentrate, matte, oxide sinter, compact nickel, undeclared alloy powder, coated particles, paste, briquettes, sintered parts, or a route-average without production weighting |
| required_metadata | Route; geography; period; feed identity and recycled content; composition; morphology; particle-size distribution; surface treatment; moisture; apparent density when relevant; net product mass; packaging; abatement; allocation; backgrounds; unresolved UUIDs |
| required_quality_disclosure | Coverage, calibration, assays, detection limits, mass-balance residuals, recycle treatment, allocation sensitivity, proxy use, shared-equipment apportionment, abnormal operations, and range-evidence gaps |
| update_trigger | Material change in route, feed, grade or morphology, recycled content, energy system, abatement, solvent recovery, packaging, allocation, facility scope, or data age beyond the program interval |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official product-classification identity and hierarchy |
| `eu-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | European Commission JRC, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, 2017, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf | Carbonyl and hydrogen-reduction processes, route inputs, co-product recovery, emissions, abatement, and monitoring |
| `epo-metal-flake-ep0097017a2` | Literature (`literature`) | European patent publication EP0097017A2, Production of metal flake, https://patents.google.com/patent/EP0097017A2/en | Nickel-flake wet milling, separation, drying, and protective-atmosphere process decomposition |
| `china-mof-duty-free-research-goods-2026` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, *Duty-free research goods list* (免税科研货物清单), attachment to 财关税〔2026〕1号, 14 January 2026, https://gss.mof.gov.cn/gzdt/zhengcefabu/202601/P020260114634207037460.pdf | Professional Chinese terminology: row 187 identifies tariff heading 7504 as 镍粉及片状粉末 |
