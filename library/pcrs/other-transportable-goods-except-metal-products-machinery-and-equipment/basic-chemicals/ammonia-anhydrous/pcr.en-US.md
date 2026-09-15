---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-anhydrous
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Ammonia, anhydrous

## 1. Scope and Applicability

This PCR applies to foreground data packages for anhydrous ammonia (NH3) as a marketable product at the producing plant gate, including ammonia used as fertilizer feedstock, chemical feedstock, refrigerant, or energy carrier. It is route-neutral: natural-gas or biogas reforming, coal or other feedstock gasification, separately supplied hydrogen, water electrolysis, and combinations are covered only when the actual route and hydrogen source are declared.

The PCR excludes aqueous ammonia, ammonium hydroxide, ammonia solutions, downstream nitrogen fertilizers and chemicals, use-phase emissions, and transport beyond loading at the declared plant gate. A route-specific low-carbon dataset must not represent all anhydrous ammonia. Carbon capture, utilization, transport, and storage are included only to the extent physically connected to the declared production system and separately evidenced.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-anhydrous |
| classification_refs | CPC 3.0: 34651 - Ammonia, anhydrous |
| covered_products | Anhydrous ammonia, including refrigerated or pressurized liquefied ammonia, with declared grade, purity, water content, and plant-gate state |
| excluded_products | Ammonia in aqueous solution; ammonium hydroxide; ammonia-containing mixtures; downstream fertilizers and chemicals; recovered dilute ammonia unless upgraded to the declared anhydrous specification |
| representative_product | Marketable anhydrous ammonia, NH3, as a liquefied or pressurized product at the producing plant gate |
| production_route | Declared Haber-Bosch synthesis route with route-specific hydrogen or synthesis-gas production, purification, synthesis loop, product condensation, and storage; no route is assumed by default |
| market_state | Finished product at plant gate, with delivery state, storage temperature, storage pressure, purity, and water content declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Anhydrous ammonia product at the producing plant gate |
| How much | 1 kg NH3 on a 100% NH3-equivalent mass basis |
| How well | Product qualifies as anhydrous ammonia under the declared grade or specification; actual purity and water content are reported and aqueous ammonia is excluded |
| How long or cycle | One reporting period representative of the declared plant, route, and operating campaign |
| reference_flow_link | Net saleable anhydrous ammonia leaving final conditioning and entering plant-gate storage or loading |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product grade or specification; NH3 purity; water content; physical state; production route; hydrogen source and production route; fossil or biogenic feedstock; plant and geography; reporting period; electricity and thermal-energy supply; upstream methane boundary and data source; carbon capture point, gross capture, disposition, transport, storage and permanence boundary; co-products and allocation method; storage temperature; storage pressure; plant-gate condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net saleable anhydrous-ammonia mass at the plant gate and normalize all inventory results to 1 kg NH3 equivalent. |
| `purity_correction` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calculate NH3-equivalent mass as gross product mass multiplied by measured NH3 mass fraction; retain gross mass, purity, water content, sampling method, and test result. |
| `energy_separation` | feedstock and energy inputs | Declared property appropriate to each input | kg, MJ, or kWh | Record feedstock used as a hydrogen or carbon source separately from fuel and electricity used as energy; do not combine non-energy and energy use into one undocumented amount. |
| `storage_condition` | final conditioning and storage | Mass and operating condition | kg, deg C, and absolute or gauge pressure with basis | Report time-weighted storage temperature and pressure, pressure basis, inventory change, loading losses, and boil-off or vent recovery consistently for the reporting period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Extraction or production of route-defining feedstock, hydrogen, electricity, fuels, water, and other material inputs, represented by foreground records or traceable upstream datasets |
| starting_condition_role | Cradle-to-plant-gate starting condition for route comparison and foreground package production |
| product_classification_scope | CPC 3.0 code 34651 only; aqueous ammonia under CPC 34652 and downstream ammonia derivatives are outside scope |
| recursive_input_rule | If anhydrous ammonia from the same category enters blending, conditioning, or storage, record it as a technosphere input with a separate upstream dataset and do not recreate its upstream production inside the receiving process. |
| upstream_dataset_requirement | Route-specific datasets must represent feedstock or hydrogen production, electricity and fuels, upstream methane where hydrocarbon supply is used, and carbon-capture transport and storage where a storage claim is made. |
| disclosure | Declare route, hydrogen source, energy supply, upstream methane treatment, capture boundary, allocation, and storage conditions; never label an undeclared or single-route result as generic anhydrous ammonia. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_complete_boundary` | foreground_system_boundary | Include route-defining feedstock or hydrogen production, air or nitrogen supply, synthesis-gas purification where applicable, ammonia synthesis, condensation, refrigeration, storage, and plant-gate loading. | `iea-ammonia-roadmap-2021`; `us-epa-ap42-ammonia` |
| `feedstock_energy_separation` | foreground_system_boundary | Distinguish feedstock used non-energetically from fuel, steam, and electricity used for process energy, while preserving complete energy and carbon balances. | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `upstream_methane_boundary` | hydrocarbon_supply | Include or explicitly link upstream methane supply-chain emissions for natural gas, biogas, or other methane-containing feedstocks; disclose data source, geography, period, and whether measured or modelled. | `iea-ammonia-roadmap-2021` |
| `hydrogen_route_boundary` | hydrogen_supply | Identify whether hydrogen is produced on site or supplied separately and identify steam reforming, gasification, electrolysis, chlor-alkali, biomass, or other production route; separately supplied hydrogen carries its own upstream inventory. | `iea-ammonia-roadmap-2021`; `eu-cbam-2023-1773` |
| `carbon_capture_boundary` | carbon_dioxide_handling | Report CO2 generated, separated, captured, vented, used, transported, injected, and demonstrably stored as separate quantities; do not treat separation, sale, utilization, or temporary binding as permanent storage without the corresponding boundary and evidence. | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `storage_loading_boundary` | product_conditioning_and_storage | Include refrigeration or compression, inventory change, storage losses, boil-off recovery, vents, flares, and loading operations up to the declared plant gate; downstream distribution and use are excluded unless added as a separate scenario. | `cdc-niosh-ammonia` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hydrogen_syngas_supply` | Hydrogen or synthesis-gas supply | `required` | Select the actual on-site or supplied hydrogen route; unused alternatives are not included. | Provides route-specific hydrogen-bearing feed and its upstream burdens. | per 1 kg NH3-equivalent final product |
| `gas_conditioning` | Synthesis-gas conditioning and nitrogen integration | `required` | Apply purification steps appropriate to the declared feed route; supplied-pure-hydrogen routes may omit inapplicable reforming cleanup but still document nitrogen supply. | Produces synthesis gas meeting the ammonia-loop specification and separates CO2 or other impurities. | per 1 kg NH3-equivalent final product |
| `ammonia_synthesis` | Ammonia synthesis loop | `required` | Always included. | Compresses, reacts, circulates, condenses, and purges the nitrogen-hydrogen loop. | per 1 kg NH3-equivalent final product |
| `product_conditioning_storage` | Product conditioning, storage, and loading | `required` | Always included to the declared plant gate. | Delivers saleable anhydrous ammonia under declared purity, temperature, and pressure conditions. | per 1 kg NH3-equivalent final product |
| `carbon_handling` | CO2 utilization, transport, and storage | `conditional` | Include when separated CO2 leaves the core plant for use, export, transport, injection, storage, or a capture-related claim. | Closes the carbon balance and supports only evidenced capture or storage claims. | per 1 kg NH3-equivalent final product |

### Process: Hydrogen or synthesis-gas supply (`hydrogen_syngas_supply`)

#### Inputs

##### Product flows

###### Route-defining feedstock or supplied hydrogen (`route_feedstock_hydrogen`)

Record every feedstock that supplies hydrogen or carbon to the route, or separately supplied hydrogen, without combining unlike sources.

- Selected flow: Declared natural gas, biogas, coal, petroleum-derived feedstock, biomass, water for electrolysis, or supplied hydrogen
- Flow property / unit: Mass or energy content / kg or MJ, and hydrogen mass / kg where supplied
- Amount rule: measured custody-transfer or production records, segregated by feedstock and hydrogen route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_materials`
- Sources: `iea-ammonia-roadmap-2021`; `eu-cbam-2023-1773`

###### Process electricity and thermal energy (`route_energy`)

Record electricity, fuels, imported steam, and exported energy separately from non-energy feedstock.

- Selected flow: Route-specific electricity, fuel, and steam supplies
- Flow property / unit: Energy / kWh or MJ; fuel mass or volume retained with conversion basis
- Amount rule: metered consumption minus evidenced export, with each carrier reported separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

##### Waste flows

###### Spent catalysts, sorbents, and treatment residues (`route_treatment_waste`)

Record route-specific solid and liquid residues when they leave the foreground system for treatment or recovery.

- Selected flow: Declared spent catalyst, sorbent, slag, ash, or treatment residue
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or inventory-change records by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-ap42-ammonia`

##### Elementary flows

###### Upstream methane emissions (`upstream_methane`)

Represent methane emitted across the declared hydrocarbon supply chain; keep measured supplier evidence distinct from modelled upstream datasets.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: supplier-specific upstream inventory or calculated route inventory linked to feedstock quantity, geography, period, and source
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_upstream_methane`
- Sources: `iea-ammonia-roadmap-2021`

#### Outputs

##### Product flows

###### Hydrogen-bearing feed to conditioning (`hydrogen_bearing_feed`)

Report hydrogen or raw synthesis gas transferred to conditioning with composition and pressure basis.

- Selected flow: Route-specific hydrogen or raw synthesis gas
- Flow property / unit: Mass / kg
- Amount rule: measured transfer quantity with dry-gas composition and hydrogen content
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per process output transferred to gas conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_syngas_transfer`
- Sources: `us-epa-ap42-ammonia`

##### Waste flows

##### Elementary flows

###### Direct route greenhouse-gas emissions (`route_direct_ghg`)

Record measured or calculated CO2, CH4, and N2O emissions from feedstock conversion and fuel combustion as separate elementary flows.

- Selected flow: Declared direct greenhouse-gas emission to air
- Flow property / unit: Mass / kg
- Amount rule: stack or continuous monitoring, carbon balance, or approved calculation by gas and source
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ghgrp-ammonia-tsd-2009`

### Process: Synthesis-gas conditioning and nitrogen integration (`gas_conditioning`)

#### Inputs

##### Product flows

###### Hydrogen-bearing feed (`conditioning_feed`)

Receive the declared raw synthesis gas or hydrogen stream and retain its composition and upstream dataset link.

- Selected flow: Route-specific hydrogen or raw synthesis gas
- Flow property / unit: Mass / kg
- Amount rule: transferred amount reconciled to the upstream process output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per process output of conditioned synthesis gas
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_syngas_transfer`
- Sources: `us-epa-ap42-ammonia`

###### Air or nitrogen supply (`nitrogen_supply`)

Record the nitrogen source, air-separation route where applicable, and associated energy or upstream dataset.

- Selected flow: Air or nitrogen for ammonia synthesis
- Flow property / unit: Mass / kg
- Amount rule: measured flow and composition or mass balance from synthesis-loop records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_syngas_transfer`
- Sources: `us-epa-ap42-ammonia`

##### Waste flows

###### Conditioning residues and process condensate (`conditioning_waste`)

Record spent sorbents, treatment residues, and process condensate by destination, including recovery or wastewater treatment.

- Selected flow: Declared conditioning waste or wastewater
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge, shipment, or inventory-change record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-ap42-ammonia`

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned synthesis gas (`conditioned_syngas`)

Report the nitrogen-hydrogen feed transferred to the synthesis loop with composition and impurity specification.

- Selected flow: Conditioned synthesis gas for ammonia synthesis
- Flow property / unit: Mass / kg
- Amount rule: measured flow or reconciled dry-gas mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per process output transferred to ammonia synthesis
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_syngas_transfer`
- Sources: `us-epa-ap42-ammonia`

###### Separated carbon dioxide (`separated_co2`)

Keep physical CO2 separation distinct from subsequent capture, utilization, transport, storage, or venting.

- Selected flow: Separated carbon dioxide stream
- Flow property / unit: Mass / kg
- Amount rule: metered stream or carbon balance with composition, pressure, and moisture basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbon_capture`
- Sources: `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

##### Waste flows

##### Elementary flows

###### Conditioning vents (`conditioning_vents`)

Record CO2, CO, methane, ammonia, and other reported pollutants released during regeneration, stripping, or purification.

- Selected flow: Declared conditioning emission to air
- Flow property / unit: Mass / kg
- Amount rule: monitoring result or source-specific calculation by pollutant and emission point
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-ammonia`; `us-epa-ghgrp-ammonia-tsd-2009`

### Process: Ammonia synthesis loop (`ammonia_synthesis`)

#### Inputs

##### Product flows

###### Conditioned nitrogen-hydrogen feed (`synthesis_feed`)

Record feed composition, recycle basis, and make-up gas separately so loop recycle is not double-counted as an external input.

- Selected flow: Conditioned synthesis gas for ammonia synthesis
- Flow property / unit: Mass / kg
- Amount rule: make-up gas entering the loop, reconciled to composition and production records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg NH3-equivalent synthesis output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_synthesis_operations`
- Sources: `us-epa-ap42-ammonia`

###### Synthesis-loop energy and cooling (`synthesis_energy`)

Record compression, circulation, heating, cooling, and refrigeration energy by carrier without netting undocumented exports.

- Selected flow: Electricity, steam, fuel, and cooling utility supplied to the synthesis loop
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered carrier-specific consumption allocated to the synthesis loop
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent synthesis output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `iea-ammonia-roadmap-2021`

##### Waste flows

###### Synthesis-loop spent catalyst (`synthesis_catalyst_waste`)

Record catalyst replacement and destination over a representative operating period.

- Selected flow: Spent ammonia-synthesis catalyst
- Flow property / unit: Mass / kg
- Amount rule: replacement mass normalized over production during the catalyst service interval
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg NH3-equivalent synthesis output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-ap42-ammonia`

##### Elementary flows

#### Outputs

##### Product flows

###### Crude anhydrous ammonia (`crude_ammonia`)

Transfer condensed ammonia to final conditioning with production mass, purity, and water content.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass / kg
- Amount rule: measured condensed-ammonia mass corrected using the measured NH3 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output of crude anhydrous ammonia
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality`
- Sources: `iso-7105-1985`

###### Recovered purge gas or exported energy (`purge_recovery`)

Record recovered purge gas, hydrogen, fuel gas, or exported steam as separate co-product flows when they leave the process boundary.

- Selected flow: Declared recovered purge gas, hydrogen, fuel gas, or exported energy
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: measured export with composition or energy content and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent synthesis output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproducts`
- Sources: `us-epa-ap42-ammonia`

##### Waste flows

##### Elementary flows

###### Synthesis-loop vents and fugitives (`synthesis_emissions`)

Record ammonia, hydrogen, methane, and other reportable releases from purge, vent, flare, seals, and relief events.

- Selected flow: Declared synthesis-loop emission to air
- Flow property / unit: Mass / kg
- Amount rule: monitoring, event log, flare calculation, or reconciled mass balance by pollutant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent synthesis output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-ammonia`

### Process: Product conditioning, storage, and loading (`product_conditioning_storage`)

#### Inputs

##### Product flows

###### Crude anhydrous ammonia input (`conditioning_ammonia_input`)

Treat upstream anhydrous ammonia as a recursive same-category input and link its upstream dataset rather than duplicating production.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer from synthesis reconciled to storage inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `cdc-niosh-ammonia`

###### Refrigeration, compression, and loading energy (`storage_energy`)

Record energy used to maintain declared storage pressure and temperature and to load the plant-gate product.

- Selected flow: Electricity, fuel, steam, or cooling utility for conditioning and storage
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered consumption assigned to the storage and loading system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `cdc-niosh-ammonia`

##### Waste flows

###### Storage and loading wastewater or treatment waste (`storage_waste`)

Record contaminated water, maintenance waste, and recovered material sent to treatment or recovery.

- Selected flow: Declared storage or loading waste
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge or shipment by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `cdc-niosh-ammonia`

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable anhydrous ammonia (`reference_product_output`)

This is the reference product after quality verification and inventory reconciliation at the declared plant gate.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg NH3 equivalent calculated from net saleable mass and measured NH3 mass fraction
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg NH3-equivalent reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_product_output`
- Sources: `iso-7103-1982`; `iso-7105-1985`

##### Waste flows

##### Elementary flows

###### Storage, loading, and relief losses (`storage_losses`)

Record routine and non-routine ammonia releases, recovered boil-off, flare outcomes, and inventory discrepancies separately.

- Selected flow: Ammonia emission to air and other declared storage release
- Flow property / unit: Mass / kg
- Amount rule: measured release plus event-based calculation, reconciled to opening inventory, receipts, production, deliveries, recovery, and closing inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_operations`
- Sources: `cdc-niosh-ammonia`

### Process: CO2 utilization, transport, and storage (`carbon_handling`)

#### Inputs

##### Product flows

###### Separated carbon dioxide input (`captured_co2_input`)

Receive the metered separated CO2 stream with composition and chain-of-custody evidence.

- Selected flow: Separated carbon dioxide stream
- Flow property / unit: Mass / kg
- Amount rule: metered transfer reconciled to the conditioning-process output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_capture`
- Sources: `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

###### Capture, compression, transport, and storage energy (`capture_energy`)

Record all energy and materials used after CO2 separation for the claimed disposition.

- Selected flow: Electricity, fuel, heat, solvent, and transport service for CO2 handling
- Flow property / unit: Energy, mass, or transport service / kWh, MJ, kg, or tkm
- Amount rule: metered or invoice-based quantity assigned to the handled CO2 stream
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbon_capture`
- Sources: `eu-cbam-2023-1773`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Carbon dioxide delivered for use (`co2_for_use`)

Report CO2 delivered to another product system as an exported co-product; do not automatically equate utilization with permanent storage.

- Selected flow: Carbon dioxide delivered for declared use
- Flow property / unit: Mass / kg
- Amount rule: custody-transfer mass with recipient and intended use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_capture`
- Sources: `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

###### Carbon dioxide delivered to permanent storage (`co2_stored`)

Report only CO2 with traceable transport, injection, and permanence evidence as delivered to permanent storage.

- Selected flow: Carbon dioxide delivered to permanent geological storage
- Flow property / unit: Mass / kg
- Amount rule: verified injected mass minus documented leakage or reversal within the selected method boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbon_capture`
- Sources: `eu-cbam-2023-1773`

##### Waste flows

##### Elementary flows

###### Carbon dioxide vented or lost (`co2_vented`)

Record uncaptured, bypassed, vented, transport-loss, and storage-loss CO2 as emissions within the applicable boundary.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: carbon balance of generated CO2 minus measured exported, used, and stored streams, reconciled with direct monitoring
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg NH3-equivalent final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbon_capture`
- Sources: `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivision_first` | foreground_burden_allocation | Subdivide route steps and meter dedicated inputs before allocating shared utilities or emissions; internal recycle is not a co-product and must not receive burden. | `eu-cbam-2023-1773` |
| `oxygen_coproduct` | electrolysis_or_air_separation | If oxygen is vented, assign no avoided-product credit. If oxygen is sold or used outside the modelled step, report its amount and apply the declared method consistently without assuming zero-burden hydrogen or nitrogen. | `eu-cbam-2023-1773` |
| `energy_export` | purge_gas_and_energy_recovery | Prefer system subdivision for purge-gas recovery and steam or electricity export; if allocation remains necessary, use a documented physical relationship before economic allocation and report sensitivity to the selected basis. | `us-epa-ap42-ammonia` |
| `carbon_dioxide_coproduct` | separated_carbon_dioxide | Report generated, separated, vented, used, exported, and stored CO2 before any credit or deduction. A sale or utilization credit must follow the selected study method and cannot be represented as permanent storage without permanence evidence. | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `allocation_closure` | all_multi_output_processes | Report unallocated totals, allocation keys, recipients, allocated results, and a closure check; do not use an allocation rule to conceal route, capture, or energy data gaps. | `eu-cbam-2023-1773` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route_materials` | `hydrogen_syngas_supply` | route feedstock and supplied hydrogen | meter, invoice, supplier certificate, composition test | material id; source; mass; energy content; carbon content; hydrogen content; route; opening and closing stock | calibrated custody-transfer meter or reconciled inventory | kg, m3, or MJ with conversion basis | batch and monthly | same reporting period as product output | all route-defining supply to the declared plant | sum receipts plus opening stock minus closing stock, segregated by source and energetic or non-energetic use | calibration, invoice, laboratory certificate, and reconciliation record |
| `cp_energy_records` | all processes | electricity, fuels, steam, cooling, and exported energy | meter, fuel ticket, invoice, utility balance | carrier; meter id; quantity; unit; conversion factor; import; export; process assignment | calibrated meter and energy balance | kWh or MJ | hourly to monthly | complete reporting period | all included plant units | sum by carrier and process; report gross imports and exports before net result | meter calibration, invoices, and energy-balance closure |
| `cp_upstream_methane` | `hydrogen_syngas_supply` | hydrocarbon upstream methane | supplier inventory or route model | feedstock source; geography; period; quantity; methane stages; emission factor or measured loss; uncertainty | supplier-specific data preferred; otherwise traceable route model | kg CH4 and kg feedstock or MJ | supplier period, at least annual | period aligned or temporally adjusted | all hydrocarbon feedstock suppliers | quantity-weighted supplier result; do not mix measured and modelled results without disclosure | supplier assurance, model version, source citation, and uncertainty |
| `cp_syngas_transfer` | `hydrogen_syngas_supply`; `gas_conditioning` | hydrogen, raw syngas, nitrogen, and conditioned syngas | flow meter and composition analysis | dry and wet flow; H2; N2; CO; CO2; CH4; water; pressure; temperature | calibrated flow measurement and gas analysis | kg or Nm3 with reference conditions | continuous or shift | representative operating campaign and annual reconciliation | all transfer points between route steps | convert to a common dry-gas basis and reconcile H, N, and C balances | analyzer calibration, reference conditions, and balance closure |
| `cp_synthesis_operations` | `ammonia_synthesis` | make-up gas, recycle, purge, and ammonia production | distributed control system and production log | make-up flow; recycle flow; purge flow; composition; pressure; temperature; catalyst period; condensed NH3 | continuous process instrumentation | kg, Nm3, deg C, and pressure with basis | continuous | complete reporting period with outages disclosed | synthesis loop and associated refrigeration | external input excludes internal recycle; aggregate production-weighted operating periods | instrument calibration, outage log, and synthesis-loop balance |
| `cp_product_quality` | `ammonia_synthesis`; `product_conditioning_storage` | NH3 purity and water content | representative product sample and laboratory result | sample id; lot or tank; sampling time; sampling method; NH3 fraction; water; oil or other grade parameters | declared safe sampling procedure and validated analytical method | mass fraction, mg/kg, or declared grade unit | each lot, tank, or statistically justified campaign | same lots and period as reported product | all saleable product represented by the dataset | mass-weighted result; retain out-of-spec dispositions separately | chain of custody, method identifier, laboratory QA, and repeatability |
| `cp_product_output` | `product_conditioning_storage` | net saleable product and inventory | custody meter, weighbridge, tank gauge, and sales record | gross product mass; deliveries; returns; opening and closing inventory; purity; temperature; pressure | calibrated mass measurement with inventory reconciliation | kg | batch and monthly | complete reporting period | all product tanks and loading points | net saleable mass multiplied by measured NH3 mass fraction | calibration, sales reconciliation, and tank inventory closure |
| `cp_direct_emissions` | all processes | stack, vent, flare, fugitive, and wastewater emissions | continuous monitor, stack test, leak survey, event log, or calculation | source id; pollutant; concentration; flow; duration; event; recovery; flare efficiency; method | source-appropriate monitoring or documented mass balance | kg pollutant | continuous, event, or test campaign | complete reporting period including start-up and shutdown | every included emission point | calculate by pollutant and source, then sum without double counting routed streams | monitor QA, test report, leak survey, event log, and calculation sheet |
| `cp_carbon_capture` | `gas_conditioning`; `carbon_handling` | generated, separated, captured, used, transported, stored, and vented CO2 | meter, carbon balance, custody transfer, transport and injection record | stream mass; carbon content; capture point; destination; transport loss; injected mass; leakage; permanence evidence | metering and chain-of-custody reconciliation | kg CO2 | continuous and shipment | complete reporting period and applicable storage monitoring period | all CO2 streams connected to ammonia production | generated equals emitted plus exported for use plus stored plus inventory change and documented losses | meter calibration, recipient record, injection verification, and balance closure |
| `cp_coproducts` | all multi-output processes | oxygen, purge gas, hydrogen, steam, electricity, and CO2 co-products | meter, invoice, and use record | product; quantity; quality; energy content; destination; internal or external use; allocation key | calibrated measurement and transaction record | kg, MJ, or kWh | batch and monthly | complete reporting period | all material co-products and exports | report gross quantities before allocation and reconcile internal use | meter calibration, invoice, destination evidence, and allocation worksheet |
| `cp_storage_operations` | `product_conditioning_storage` | storage conditions, inventory change, loading, and releases | tank gauge, temperature and pressure historian, loading log, relief and maintenance log | tank id; opening and closing mass; temperature; pressure; pressure basis; receipts; deliveries; recovered boil-off; vents; relief events | calibrated tank instrumentation and event reconciliation | kg, deg C, and pressure with basis | continuous and event | complete reporting period | all ammonia storage and loading equipment | mass balance by tank and total system; report routine and non-routine losses separately | gauge calibration, historian completeness, and signed event records |
| `cp_waste_records` | all processes | wastewater and solid or liquid waste | discharge meter, manifest, laboratory analysis, and inventory | waste id; mass or volume; composition; hazard status; destination; recovery or treatment | measured discharge or weighed shipment | kg or m3 | shipment and monthly | complete reporting period | all included process areas | sum by waste type and destination; reconcile stored waste inventory | manifest, analysis, treatment receipt, and inventory closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nh3_equivalent` | reference product | NH3-equivalent mass = net saleable gross mass x measured NH3 mass fraction. Do not apply this formula to aqueous ammonia as a way to include it in this PCR. | gross saleable mass; NH3 mass fraction; returns; inventory change | kg NH3 equivalent | `iso-7103-1982`; `iso-7105-1985` |
| `calc_route_material_balance` | hydrogen and synthesis route | Reconcile feedstock, hydrogen, nitrogen, carbon, and ammonia across route steps on consistent dry or wet bases; internal recycle is excluded from external input totals. | route-material records; syngas composition; synthesis records; product output | route-specific material balance and closure | `us-epa-ap42-ammonia`; `us-epa-ghgrp-ammonia-tsd-2009` |
| `calc_energy_by_role` | feedstock and energy | Convert each carrier with a declared factor and separately total non-energy feedstock, fuel, electricity, imported heat, and exported energy. | energy meters; feedstock records; conversion factors; exports | carrier-specific and role-specific energy inventory | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `calc_upstream_methane` | hydrocarbon supply | Upstream methane = sum over suppliers of feedstock activity multiplied by the supplier-specific measured loss or traceable model factor; preserve supplier, geography, period, and uncertainty. | feedstock quantity; supplier methane result or model factor | kg CH4 per reference flow | `iea-ammonia-roadmap-2021` |
| `calc_direct_emissions` | direct plant emissions | Calculate each pollutant by monitored concentration and gas flow or by a documented carbon or mass balance; keep process and combustion CO2 distinguishable. | monitoring, stack tests, fuel and feedstock carbon, event logs | kg pollutant per reference flow | `us-epa-ap42-ammonia`; `us-epa-ghgrp-ammonia-tsd-2009` |
| `calc_capture_balance` | carbon dioxide handling | Generated CO2 = vented or emitted CO2 + CO2 exported for use + CO2 delivered to verified storage + inventory change + documented handling losses. Separation alone is not storage. | generated, separated, exported, used, injected, leaked, vented, and inventory records | carbon-capture balance and disposition shares | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `calc_allocation_closure` | multi-output processes | Allocated burdens across ammonia and co-products must equal the unallocated process total for every inventory row after subdivision and internal-use reconciliation. | unallocated inventory; co-product quantities; allocation keys | allocated inventory and closure difference | `eu-cbam-2023-1773` |
| `calc_storage_balance` | product conditioning and storage | Opening inventory + receipts + production = deliveries + closing inventory + recovered exports + measured releases + unexplained difference; investigate rather than silently allocate unexplained difference. | tank inventory; receipts; production; deliveries; recovery; release logs | storage mass balance and loss quantity | `cdc-niosh-ammonia` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate that the represented product is anhydrous ammonia and not aqueous ammonia; report grade, purity, water content, physical state, and test method. | product specification, representative sample, and laboratory result |
| `dq_route_identity` | whole dataset | Identify the hydrogen and synthesis-gas production route, feedstock, technology, plant, geography, period, and whether route steps are on site or supplied. | process diagram, supplier records, and route declaration |
| `dq_temporal_representativeness` | all foreground records | Use one coherent reporting period, disclose outages, start-up, shutdown, abnormal events, and material differences between supplier and plant periods. | production log, meter coverage, event log, and temporal adjustment record |
| `dq_completeness` | all included processes | Demonstrate material, energy, nitrogen, carbon, capture, storage, waste, and emission balance closure; explain exclusions and unresolved differences. | signed balance worksheets and completeness review |
| `dq_upstream_methane` | hydrocarbon routes | Disclose whether upstream methane is supplier-measured or modelled and report source, geography, year, stages, and uncertainty. | supplier assurance or traceable model documentation |
| `dq_capture_claim` | capture-related datasets | A capture or low-carbon claim requires stream-level CO2 balance, capture point, disposition, transport, injection, storage, leakage, and permanence evidence appropriate to the selected method. | metering, custody transfer, injection verification, monitoring, and method statement |
| `dq_allocation` | multi-output processes | Preserve pre-allocation totals, co-product quantities, allocation basis, recipients, sensitivity, and mathematical closure. | allocation worksheet and co-product records |
| `dq_storage_conditions` | final product | Report time-weighted temperature and pressure, pressure basis, inventory change, routine loss, abnormal release, recovery, and loading condition. | tank historian, calibration, and event reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_not_aqueous` | foreground_dataset_conformance | Reject a data package that represents aqueous ammonia, ammonium hydroxide, or a solution merely normalized to NH3 content; the physical product must meet the declared anhydrous-ammonia specification. | `unsd-cpc-v3-2025`; `iso-7105-1985` |
| `validate_reference_identity` | foreground_dataset_conformance | Require the selected product flow UUID, Mass flow-property UUID, Units of mass unit-group UUID, kg reference unit, and 1 kg NH3-equivalent amount to match this PCR. | `unsd-cpc-v3-2025` |
| `validate_required_qualifiers` | foreground_dataset_conformance | Reject an incomplete reference flow when any required qualifier for purity, route, hydrogen source, energy, upstream methane, capture, allocation, or storage condition is missing. | `iea-ammonia-roadmap-2021`; `cdc-niosh-ammonia` |
| `validate_route_consistency` | foreground_dataset_conformance | Require all included processes, inputs, emissions, and upstream datasets to agree with the declared route; unused alternative routes must not be blended into a generic result. | `iea-ammonia-roadmap-2021`; `eu-cbam-2023-1773` |
| `validate_mass_energy_balance` | foreground_dataset_conformance | Require documented material, nitrogen, hydrogen, carbon, product-storage, and carrier-specific energy closure; internal recycle and energy export must not be double counted. | `us-epa-ap42-ammonia`; `us-epa-ghgrp-ammonia-tsd-2009` |
| `validate_upstream_methane` | foreground_dataset_conformance | Hydrocarbon routes must include or link an upstream methane result with feedstock source, geography, period, method, and uncertainty. | `iea-ammonia-roadmap-2021` |
| `validate_capture_disposition` | foreground_dataset_conformance | Require generated, separated, captured, vented, used, transported, injected, stored, leaked, and inventory-change CO2 fields to close; do not accept separation or sale alone as permanent storage. | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `validate_allocation_closure` | foreground_dataset_conformance | Require pre-allocation totals, co-product quantities, allocation keys, recipients, sensitivity where material, and zero unexplained allocation difference. | `eu-cbam-2023-1773` |
| `validate_storage_conditions` | foreground_dataset_conformance | Require storage temperature, pressure, pressure basis, inventory change, loading loss, recovery, and abnormal-event treatment to be present and mutually consistent. | `cdc-niosh-ammonia` |
| `validate_low_carbon_claim` | foreground_dataset_conformance | Reject a low-carbon, renewable, blue, green, or equivalent claim unless the declared hydrogen, electricity, feedstock, methane, capture, allocation, and storage evidence supports the exact route represented. | `iea-ammonia-roadmap-2021`; `eu-cbam-2023-1773` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-specific foreground production dataset for marketable anhydrous ammonia at the producing plant gate |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for fertilizer, chemical, refrigeration, fuel, hydrogen-carrier, process, or lifecyclemodel studies when qualifiers match |
| allowed_use | Route-, geography-, period-, grade-, capture-, allocation-, and storage-matched plant-gate modelling; transparent scenario comparison after harmonizing boundaries |
| excluded_use | Aqueous ammonia; universal ammonia average without route disclosure; automatic substitution among fossil, electrolysis, captured-carbon, or other routes; unsupported low-carbon claim; downstream transport or use without added processes |
| required_metadata | canonical PCR id; product flow UUID; grade; purity; water content; route; hydrogen source; feedstock; plant; geography; period; technology; electricity and heat supply; upstream methane method; capture disposition; co-products; allocation; storage temperature and pressure; plant-gate condition |
| required_quality_disclosure | primary-data share; meter and laboratory coverage; temporal and geographic representativeness; material, energy, nitrogen and carbon closure; uncertainty; missing data; supplier data quality; capture permanence evidence; abnormal-event treatment |
| update_trigger | Change in product grade, route, hydrogen source, feedstock, major technology, energy supply, upstream methane data, capture disposition, allocation, storage regime, plant boundary, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, code 34651, updated 2025-06-30, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-08) | Product-category identity and exclusion of the adjacent aqueous-ammonia category |
| `iea-ammonia-roadmap-2021` | Official guidance (`official_guidance`) | International Energy Agency, Ammonia Technology Roadmap, 2021, https://www.iea.org/reports/ammonia-technology-roadmap (retrieved 2026-08-08) | Route differentiation, hydrogen sources, energy significance, carbon capture, and cross-industry context |
| `us-epa-ap42-ammonia` | Official guidance (`official_guidance`) | U.S. EPA, AP-42 Final Background Document for Synthetic Ammonia, Section 8.1, https://www.epa.gov/sites/production/files/2020-09/documents/b08s01_1.pdf (retrieved 2026-08-08) | Process decomposition, synthesis loop, purification, vents, condensate, and emissions inventory structure |
| `us-epa-ghgrp-ammonia-tsd-2009` | Official guidance (`official_guidance`) | U.S. EPA, Technical Support Document for Ammonia: Proposed Rule for Mandatory Reporting of Greenhouse Gases, 2009, https://www.epa.gov/sites/production/files/2015-02/documents/ti_g-tsd_ammonia_epa_1-22-09.pdf (retrieved 2026-08-08) | Feedstock and combustion separation, carbon balance, process CO2, and captured-CO2 treatment |
| `eu-cbam-2023-1773` | Standard (`standard`) | Commission Implementing Regulation (EU) 2023/1773, Annex III, Sections 3.6-3.7, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1773 (retrieved 2026-08-08) | Route-specific ammonia boundary, separately supplied hydrogen, energy and feedstock treatment, co-product allocation, and CO2 disposition |
| `iso-7103-1982` | Standard (`standard`) | ISO 7103:1982, Liquefied anhydrous ammonia for industrial use - Sampling - Taking a laboratory sample, https://www.iso.org/standard/13688.html (retrieved 2026-08-08) | Product sampling and quality-evidence protocol |
| `iso-7105-1985` | Standard (`standard`) | ISO 7105:1985, Liquefied anhydrous ammonia for industrial use - Determination of water content - Karl Fischer method, https://www.iso.org/standard/13690.html (retrieved 2026-08-08) | Water-content measurement and anhydrous-product quality disclosure |
| `cdc-niosh-ammonia` | Official guidance (`official_guidance`) | U.S. CDC/NIOSH, Pocket Guide to Chemical Hazards - Ammonia, https://www.cdc.gov/niosh/npg/npgd0028.html (retrieved 2026-08-08) | Physical state, liquefied compressed storage, temperature and pressure disclosure, and release pathways |
