---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-aluminium-of-a-thickness-not-exceeding-0-2-mm
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Foil, of aluminium, of a thickness not exceeding 0.2 mm

## 1. Scope and Applicability

This PCR applies to saleable wrought aluminium or aluminium-alloy foil whose aluminium layer is not more than 0.2 mm thick, supplied principally as a coil or reel. It covers plain foil and foil with a declared surface treatment, coating, printing, lacquer, lamination, or backing when the aluminium foil remains an identifiable and separately quantified constituent of the sold product. Thickness classification is based on the aluminium layer and excludes any backing, consistent with the CPC/HS category boundary.

The PCR covers the product system from the declared aluminium starting condition through foil-stock preparation, cold rolling, optional annealing, optional double rolling and separation, slitting, surface treatment or coating when performed by the producer, internal scrap recovery, winding, and dispatch packaging. Both hot-rolled slab and continuous-cast strip routes are eligible. A foreground data package may start from purchased ingot, rolling slab, cast strip, or foil stock, but it shall identify the starting condition and link all purchased upstream materials to appropriate datasets.

The category is intentionally broader than battery current-collector foil or packaging foil. A dataset shall not represent CPC 41535 using only one application-specific grade, thickness, alloy/temper, surface specification, or process route unless the dataset is explicitly labelled as that narrower product and is used only where those qualifiers match. Finished packages, battery cells or electrodes, capacitors, heat exchangers, insulated electrical products, cables, and other fabricated articles are outside the scope. Sheet or strip thicker than 0.2 mm and foil stock sold before final foil rolling are also outside the reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-aluminium-of-a-thickness-not-exceeding-0-2-mm` |
| classification_refs | CPC 3.0 `41535`, exact: Foil, of aluminium, of a thickness not exceeding 0.2 mm |
| covered_products | Plain or converted aluminium and aluminium-alloy foil with an aluminium-layer thickness greater than zero and not exceeding 0.2 mm, delivered as declared coils or reels; backing or coating is permitted when separately quantified. |
| excluded_products | Aluminium sheet or strip thicker than 0.2 mm; foil stock sold before final foil manufacture; finished packages, battery components, electrical components, and thermal-management assemblies; composites for which the aluminium layer cannot be separately quantified. |
| representative_product | A declared saleable aluminium-foil coil. There is no category-wide default alloy, temper, thickness, application grade, coating, backing, pinhole class, or cleanliness class. |
| production_route | Cold rolling of hot-rolled foil stock or continuous-cast strip, with route-specific optional annealing, double rolling and separation, slitting, surface conversion, and internal scrap recovery. |
| market_state | Net saleable foil wound on a declared core and ready for dispatch at the producer gate, with transport packaging reported separately. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable aluminium or aluminium-alloy foil conforming to the declared product specification and delivered as a coil or reel at the producer gate. |
| How much | 1 kg net mass of the sold foil product. Core, pallet, and removable transport packaging are excluded from the reference mass and inventoried separately. Coating, lacquer, ink, adhesive, laminate, or backing that remains part of the sold foil product is included in the reference mass and its mass fraction is declared. |
| How well | Meets the customer or product specification declared for thickness and tolerance, alloy and temper, surface state, coil dimensions, and applicable pinhole and cleanliness requirements. No universal performance threshold is imposed by this PCR. |
| How long or cycle | One declared production lot or campaign, or a production-weighted reporting period no longer than 12 consecutive months. |
| reference_flow_link | Final output `delivered_aluminium_foil_coil` of `coil_packaging_and_dispatch`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | aluminium-layer nominal thickness and tolerance; aluminium alloy designation or declared chemistry; temper; foil-stock route; rolling pass route; annealing state and schedule or none; single rolling or double rolling and separation; slit width, edge condition, coil inner diameter and net coil mass; surface state and side distinction; surface treatment, coating, printing, lacquer, lamination, or backing composition and mass fraction or none; pinhole test method, sampled area, result and contractual criterion or not applicable; cleanliness, wettability, or residual rolling-oil test method, result and contractual criterion or not applicable; primary aluminium, external pre-consumer recycled aluminium, and external post-consumer recycled aluminium shares and chain-of-custody method; internal scrap-loop accounting; metal yield; delivered coil and removable packaging specification; production route, site geography, technology, and reference period. |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | delivered foil product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net sold foil product; exclude core and removable transport packaging from reference mass and report them as separate inputs. |
| `aluminium_layer_thickness` | classification and product qualifier | Length | mm or µm | Measure and report aluminium-layer thickness separately from coating or backing. Convert µm to mm using 1 µm = 0.001 mm. The declared aluminium-layer thickness shall be greater than zero and not exceed 0.2 mm. |
| `constituent_mass_fraction` | coated, laminated, printed, lacquered, or backed foil | Mass fraction | kg/kg product | Report aluminium, each coating or treatment solid, adhesive, ink, lacquer, laminate, and backing on a dry constituent-mass basis; fractions shall sum to 1 within stated rounding. |
| `metal_input_share` | fresh aluminium-bearing charge entering the model boundary | Mass fraction | kg Al/kg fresh Al input | Report primary aluminium, external pre-consumer recycled aluminium, and external post-consumer recycled aluminium on a contained-aluminium basis. Internal process scrap is a loop, not recycled-content input, and shall not be added to these shares. |
| `yield_measurement` | aluminium conversion route | Mass ratio | kg/kg | Calculate metal yield as net saleable aluminium mass in the reference product divided by fresh aluminium mass entering the declared boundary; exclude coating and backing mass from both aluminium terms and disclose stock-change treatment. |
| `energy_measurement` | each foreground process | Energy | kWh for electricity; MJ for fuels, steam, and thermal energy | Record metered energy by carrier and process where available; do not combine electricity and thermal energy without an explicit conversion and lower/higher heating value convention. |
| `water_measurement` | each foreground process | Volume or Mass | m3 or kg | Distinguish withdrawal, consumed water, recirculated water, and discharged wastewater; do not count recirculated water repeatedly as fresh withdrawal. |
| `coil_and_packaging_mass` | dispatch | Mass | kg | Record net foil mass, core mass, and each removable packaging material separately for every dispatched coil or production-weighted batch. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_start` | foreground system | Include all operations controlled by the reporting producer from the declared purchased aluminium starting condition through the saleable delivered coil; disclose whether the start is ingot, slab, cast strip, or foil stock. | `european-aluminium-2018`; `iso-14044-2006` |
| `boundary_upstream_links` | purchased products and energy | Link purchased aluminium, alloying additions, coatings, backing materials, fuels, electricity, water, auxiliaries, cores, and packaging to upstream datasets that match the declared geography, technology, and time as closely as practicable. | `iso-14044-2006` |
| `boundary_route_complete` | foil manufacture | Include route-applicable cold rolling, annealing, double rolling and separation, slitting, surface conversion, internal scrap handling, winding, and packaging; a non-applicable operation shall be explicitly marked not applicable rather than silently omitted. | `european-aluminium-2018`; `eafa-alufoil-production` |
| `boundary_direct_releases` | foreground processes | Include direct air emissions, water emissions, waste, dross, salt slag, wastewater, lubricant losses, and treatment outputs supported by site records or calculated from collected records. | `iso-14044-2006` |
| `boundary_capital_and_personnel` | foreground system | Exclude capital equipment, buildings, commuting, and personnel activities unless the study goal, applicable program rules, or demonstrated significance requires them; disclose any such inclusion. | `iso-14044-2006` |
| `boundary_no_narrow_substitution` | category representation | Do not use a battery-grade, packaging-grade, etched, lacquered, single-thickness, or other narrow product flow as the default representation of the whole CPC 41535 category. | `unsd-cpc-3-41535` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased primary or secondary aluminium, rolling ingot/slab, continuous-cast strip, or foil stock received by the reporting producer. |
| starting_condition_role | First product input crossing the declared foreground boundary; it determines which aluminium production and foil-stock operations are foreground versus linked upstream. |
| product_classification_scope | Saleable foil with aluminium-layer thickness not exceeding 0.2 mm under CPC 3.0 `41535`, independent of downstream application. |
| recursive_input_rule | When purchased foil or foil stock would otherwise invoke this PCR recursively, record it once as a visible product input, link it to a separately identified upstream dataset, and do not recreate its upstream foil-making processes inside the receiving process. |
| upstream_dataset_requirement | Upstream datasets shall state aluminium production route, primary/recycled-content basis, geography, reference period, and allocation or recycling method when relevant. |
| disclosure | Declare the starting material form, supplier boundary, included and excluded operations, outsourced conversion steps, internal scrap loops, and any cut-off applied under the governing study rules. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `foil_stock_production` | Foil-stock production | conditional | Include when the reporting site produces foil stock from ingot, slab, molten metal, or recycled charge. | Produces hot-rolled or continuous-cast strip suitable for final foil rolling. | 1 kg foil stock output |
| `foil_rolling` | Cold rolling of foil | required | Always include final-gauge rolling controlled by the reporting producer. | Reduces foil stock to declared gauge and records rolling media, energy, losses, and scrap. | 1 kg rolled foil output |
| `annealing` | Annealing | conditional | Include every intermediate or final anneal used to achieve the declared temper or surface condition. | Changes temper and removes or transforms rolling residues under a declared thermal schedule. | 1 kg annealed foil output |
| `double_rolling_and_separation` | Double rolling and foil separation | conditional | Include when two layers are rolled together and subsequently separated. | Represents the thin-foil route and its side-specific surface effects. | 1 kg separated foil output |
| `slitting_finishing_and_winding` | Slitting, finishing, and winding | required | Include final slitting, edge trimming, inspection, and winding. | Produces saleable-width coils and records trim and rejected material. | 1 kg saleable foil before optional conversion and packaging |
| `surface_treatment_coating_or_backing` | Surface treatment, coating, printing, lacquering, lamination, or backing | conditional | Include each operation controlled by the producer that remains embodied in or changes the sold product. | Adds or modifies declared surface constituents and properties. | 1 kg converted foil output |
| `internal_scrap_recovery` | Internal scrap recovery | conditional | Include onsite collection, remelting, refining, or return preparation of production scrap. | Keeps internal metal loops visible and records recovery losses and residues. | 1 kg recovered aluminium returned or transferred |
| `coil_packaging_and_dispatch` | Coil packaging and dispatch | required | Always include final release, weighing, core assignment, packaging, and producer-gate dispatch. | Establishes the reference flow and separates net foil, core, and packaging masses. | 1 kg net delivered foil product |

### Process: Foil-stock production (`foil_stock_production`)

#### Inputs

##### Product flows

###### Fresh aluminium-bearing charge (`fresh_aluminium_charge`)

Record primary aluminium, external pre-consumer recycled aluminium, external post-consumer recycled aluminium, and alloying additions as separate inputs on a contained-aluminium or constituent-mass basis.

- Selected flow: Declared aluminium ingot, slab, molten metal, scrap, and alloying inputs
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts plus opening stock minus closing stock, with each recycled-content class kept separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg foil stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_ledger`
- Sources: `environdec-pcr-2022-08`

###### Foil-stock energy carriers (`foil_stock_energy`)

Record electricity, fuels, steam, and purchased heat separately for melting, casting, hot rolling, or continuous casting performed inside the boundary.

- Selected flow: Electricity and declared thermal-energy carriers
- Flow property / unit: Energy / kWh and MJ by carrier
- Amount rule: Metered use allocated to the included foil-stock operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg foil stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `european-aluminium-2018`

#### Outputs

##### Product flows

###### Foil stock (`foil_stock_output`)

Record the mass of hot-rolled or continuous-cast strip transferred to cold rolling and identify the route.

- Selected flow: Declared foil stock
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced foil stock output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg foil stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_ledger`
- Sources: `european-aluminium-2018`

##### Waste flows

###### Foil-stock residues and unrecovered metal (`foil_stock_residues`)

Record dross, salt slag, refractory waste, off-specification metal not internally recovered, and destination.

- Selected flow: Declared foil-stock residues by waste classification
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatch or calculated mass balance by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg foil stock output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_waste_records`
- Sources: `european-aluminium-2018`

### Process: Cold rolling of foil (`foil_rolling`)

#### Inputs

##### Product flows

###### Foil stock input (`foil_stock_input`)

Record foil stock by route, alloy, temper, thickness, and supplier or internal source.

- Selected flow: Declared foil stock
- Flow property / unit: Mass / kg
- Amount rule: Weighed input adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_ledger`
- Sources: `european-aluminium-2018`

###### Rolling energy and process auxiliaries (`rolling_energy_auxiliaries`)

Record electricity, rolling oils or emulsions, filters, and make-up cooling media separately; recycled or recovered lubricant shall not be double-counted as fresh input.

- Selected flow: Electricity, rolling lubricant, filters, and declared cooling auxiliaries
- Flow property / unit: Energy / kWh; Mass / kg; Volume / m3 as applicable
- Amount rule: Metered energy and issued material quantities assigned to the rolling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_auxiliary_ledger`
- Sources: `european-aluminium-2018`

#### Outputs

##### Product flows

###### Rolled foil coil (`rolled_foil_output`)

Record output mass, nominal gauge, measured tolerance, rolling passes, speed or route identifier, and the next controlled operation.

- Selected flow: Rolled aluminium foil coil
- Flow property / unit: Mass / kg
- Amount rule: Weighed rolled output adjusted for work in progress
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_ledger`
- Sources: `european-aluminium-2018`

##### Waste flows

###### Rolling scrap and spent auxiliaries (`rolling_scrap_and_spent_auxiliaries`)

Record edge scrap, breaks, rejected foil, spent lubricant, filters, and wastewater by internal-recovery or external destination.

- Selected flow: Declared rolling scrap and spent auxiliary waste
- Flow property / unit: Mass / kg; Volume / m3 for wastewater
- Amount rule: Weighed, metered, or mass-balanced quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_waste_records`
- Sources: `european-aluminium-2018`

##### Elementary flows

###### Direct rolling emissions (`direct_rolling_emissions`)

Record measured or permitted volatile-organic-compound and other direct releases from rolling and lubricant handling without substituting published industry averages.

- Selected flow: Declared direct emissions to air or water
- Flow property / unit: Mass / kg by substance
- Amount rule: Site measurement or calculation from collected operating records and approved emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg rolled foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_waste_records`
- Sources: `european-aluminium-2018`

### Process: Annealing (`annealing`)

#### Inputs

##### Product flows

###### Foil entering annealing (`foil_for_annealing`)

Record foil mass, alloy, incoming temper, thickness, and coil identifier for every declared anneal.

- Selected flow: Rolled aluminium foil coil
- Flow property / unit: Mass / kg
- Amount rule: Weighed batch input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg annealed foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_ledger`
- Sources: `european-aluminium-2018`

###### Annealing energy and atmosphere (`annealing_energy_atmosphere`)

Record electricity, fuel, purchased heat, and process-atmosphere gases by furnace or batch, together with the declared time-temperature schedule.

- Selected flow: Electricity, fuel, heat, and declared atmosphere gases
- Flow property / unit: Energy / kWh and MJ; Mass or Volume for gases
- Amount rule: Metered or batch-assigned use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg annealed foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `european-aluminium-2018`

#### Outputs

##### Product flows

###### Annealed foil coil (`annealed_foil_output`)

Record output mass, declared temper, annealing schedule, and released surface condition.

- Selected flow: Annealed aluminium foil coil
- Flow property / unit: Mass / kg
- Amount rule: Weighed batch output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg annealed foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_roll_release`
- Sources: `european-aluminium-2018`

### Process: Double rolling and foil separation (`double_rolling_and_separation`)

#### Inputs

##### Product flows

###### Foil entering double rolling (`foil_for_double_rolling`)

Record both paired layers, including mass, gauge, alloy, and side orientation.

- Selected flow: Rolled aluminium foil coils for pairing
- Flow property / unit: Mass / kg
- Amount rule: Weighed paired inputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg separated foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_ledger`
- Sources: `european-aluminium-2018`; `eafa-alufoil-production`

###### Double-rolling energy and lubricant (`double_rolling_energy_lubricant`)

Record electricity and fresh rolling lubricant used for paired rolling and separation.

- Selected flow: Electricity and rolling lubricant
- Flow property / unit: Energy / kWh; Mass / kg
- Amount rule: Metered energy and issued lubricant assigned to the operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg separated foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_auxiliary_ledger`
- Sources: `european-aluminium-2018`; `eafa-alufoil-production`

#### Outputs

##### Product flows

###### Separated foil coils (`separated_foil_output`)

Record separated output mass and distinguish bright and matt sides or other side-specific conditions created by the route.

- Selected flow: Separated aluminium foil coils
- Flow property / unit: Mass / kg
- Amount rule: Weighed output adjusted for work in progress
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg separated foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_roll_release`
- Sources: `european-aluminium-2018`; `eafa-alufoil-production`

### Process: Slitting, finishing, and winding (`slitting_finishing_and_winding`)

#### Inputs

##### Product flows

###### Foil entering finishing (`foil_for_finishing`)

Record coil mass, gauge, alloy/temper, width, and preceding process route.

- Selected flow: Declared rolled or annealed aluminium foil coil
- Flow property / unit: Mass / kg
- Amount rule: Weighed input adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable foil before optional conversion and packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_ledger`
- Sources: `european-aluminium-2018`; `eafa-alufoil-production`

###### Slitting and inspection energy (`slitting_inspection_energy`)

Record metered electricity and separately inventoried consumables used for slitting, inspection, and winding.

- Selected flow: Electricity and declared finishing consumables
- Flow property / unit: Energy / kWh; Mass / kg
- Amount rule: Metered or production-assigned use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable foil before optional conversion and packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_auxiliary_ledger`
- Sources: `eafa-alufoil-production`

#### Outputs

##### Product flows

###### Finished foil coil (`finished_foil_output`)

Record saleable foil mass, slit width, edge condition, coil dimensions, pinhole test, and cleanliness or wettability result for the released lot.

- Selected flow: Finished aluminium foil coil
- Flow property / unit: Mass / kg
- Amount rule: Weighed released output passing the declared customer specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable foil before optional conversion and packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_roll_release`
- Sources: `en-546-1-2007`; `astm-b926-2025`; `astm-f22-2021`

##### Waste flows

###### Slitting trim and rejected foil (`slitting_trim_rejects`)

Record trim, breaks, rejected coils, and their internal-recovery or external destination.

- Selected flow: Aluminium trim and rejected foil by destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable foil before optional conversion and packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_waste_records`
- Sources: `european-aluminium-2018`

### Process: Surface treatment, coating, printing, lacquering, lamination, or backing (`surface_treatment_coating_or_backing`)

#### Inputs

##### Product flows

###### Base foil for surface conversion (`base_foil_for_surface_conversion`)

Record base-foil mass and all required foil qualifiers before conversion.

- Selected flow: Declared finished aluminium foil coil
- Flow property / unit: Mass / kg
- Amount rule: Weighed input adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg converted foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_ledger`
- Sources: `eafa-alufoil-production`

###### Surface-conversion materials and energy (`surface_conversion_materials_energy`)

Record treatment chemicals, coating solids, solvents, inks, lacquers, adhesives, laminates, backing materials, electricity, and thermal energy separately.

- Selected flow: Declared surface materials, backing materials, electricity, and thermal-energy carriers
- Flow property / unit: Mass / kg; Energy / kWh and MJ
- Amount rule: Issued material and metered or batch-assigned energy use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg converted foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_ledger`
- Sources: `eafa-alufoil-production`

#### Outputs

##### Product flows

###### Converted foil coil (`converted_foil_output`)

Record output mass and dry mass fraction of aluminium and every coating, ink, lacquer, adhesive, laminate, or backing constituent.

- Selected flow: Declared converted aluminium foil coil
- Flow property / unit: Mass / kg
- Amount rule: Weighed output with constituent fractions calculated from collected records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg converted foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_ledger`
- Sources: `eafa-alufoil-production`

##### Waste flows

###### Surface-conversion waste (`surface_conversion_waste`)

Record coating residues, solvent-bearing waste, wastewater, rejected laminates, and their treatment or recovery destinations.

- Selected flow: Declared surface-conversion waste by destination
- Flow property / unit: Mass / kg; Volume / m3 for wastewater
- Amount rule: Weighed, metered, or mass-balanced quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg converted foil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_waste_records`
- Sources: `eafa-alufoil-production`

### Process: Internal scrap recovery (`internal_scrap_recovery`)

#### Inputs

##### Waste flows

###### Internally recoverable aluminium scrap (`internal_scrap_input`)

Record clean and contaminated scrap separately by origin process and preserve its loop identity.

- Selected flow: Internal aluminium process scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer into recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg recovered aluminium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_scrap_ledger`
- Sources: `european-aluminium-2018`; `environdec-pcr-2022-08`

##### Product flows

###### Scrap-recovery energy and auxiliaries (`scrap_recovery_energy_auxiliaries`)

Record electricity, fuels, fluxes, salts, and other auxiliaries used in onsite remelting or recovery preparation.

- Selected flow: Electricity, thermal-energy carriers, fluxes, and salts
- Flow property / unit: Energy / kWh and MJ; Mass / kg
- Amount rule: Metered or issued quantity assigned to recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg recovered aluminium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_auxiliary_ledger`
- Sources: `european-aluminium-2018`

#### Outputs

##### Product flows

###### Recovered aluminium returned to production (`recovered_aluminium_output`)

Record recovered metal mass, receiving process, and any offsite transfer; do not count returned metal as fresh recycled-content input.

- Selected flow: Recovered aluminium
- Flow property / unit: Mass / kg
- Amount rule: Weighed recovered-metal output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg recovered aluminium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_scrap_ledger`
- Sources: `european-aluminium-2018`; `environdec-pcr-2022-08`

##### Waste flows

###### Scrap-recovery losses and residues (`scrap_recovery_residues`)

Record unrecovered metal, dross, salt slag, treatment residues, and destination.

- Selected flow: Declared scrap-recovery residues by destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatch or mass-balance difference supported by records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg recovered aluminium output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_internal_scrap_ledger`
- Sources: `european-aluminium-2018`

### Process: Coil packaging and dispatch (`coil_packaging_and_dispatch`)

#### Inputs

##### Product flows

###### Saleable foil before dispatch (`saleable_foil_before_dispatch`)

Record the released foil mass and link it to the applicable plain or converted finishing route.

- Selected flow: Declared saleable aluminium foil coil
- Flow property / unit: Mass / kg
- Amount rule: Weighed released foil mass excluding core and removable packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net delivered foil product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch_ledger`
- Sources: `en-546-1-2007`

###### Coil core and removable packaging (`coil_core_and_packaging`)

Record core, spool, interleaf, wrap, desiccant, pallet, strapping, and other removable transport packaging by material and mass.

- Selected flow: Declared core and packaging materials
- Flow property / unit: Mass / kg
- Amount rule: Weighed item mass or bill-of-material quantity reconciled to dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net delivered foil product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch_ledger`
- Sources: `european-aluminium-2018`; `en-546-1-2007`

#### Outputs

##### Product flows

###### Delivered aluminium foil coil (`delivered_aluminium_foil_coil`)

This is the reference product. It represents net saleable foil mass at the producer gate and carries the complete qualifier set in Section 3.

- Selected flow: Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed at 1 kg net sold foil product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared production lines and utilities | First separate processes, production routes, alloys, tempers, product gauges, and time periods using metering, mass, machine time, or other causal records before applying allocation. | `iso-14044-2006`; `environdec-pcr-2022-08` |
| `allocation_internal_scrap_loop` | internal process scrap | Keep internal scrap as a visible loop and assign the recovery burdens and losses to the product system; do not claim internal scrap as primary displacement or external recycled content. | `european-aluminium-2018`; `environdec-pcr-2022-08` |
| `allocation_external_scrap_method` | purchased scrap and exported recoverable material | Declare the chosen recycling or scrap allocation method, its system-boundary point, burdens, credits, quality correction, and consistency between input and output scrap; do not mix methods without reconciliation. | `environdec-pcr-2022-08`; `iso-14044-2006` |
| `allocation_joint_products` | unavoidable joint or co-product outputs | When subdivision is not possible, apply a documented physical relationship; if a physical relationship cannot be established, use an economic or governing-program basis and disclose prices, period, sensitivity, and affected flows. | `iso-14044-2006` |
| `allocation_offspec_and_waste` | off-specification foil, trim, dross, and waste | Classify each output by actual destination and contractual status. A material shall not be simultaneously treated as an internally recovered loop, a waste treatment input, and an exported co-product. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_ledger` | all applicable production processes | aluminium and intermediate product mass | scale tickets, ERP receipts/issues, production and stock records | material id; alloy; recycled class; supplier/internal origin; opening stock; receipts; issues; closing stock; output; scrap; timestamp | Reconcile calibrated weighing and inventory records by process and product family. | kg | each batch or shift; aggregate monthly | same reporting period as reference output | all included sites and outsourced controlled steps | production-weighted sum with opening/closing work-in-progress correction | scale calibration; inventory reconciliation; batch genealogy |
| `cp_energy_metering` | `foil_stock_production`; `annealing` | energy by carrier and operation | meters, fuel invoices, furnace batch logs | carrier; meter id; opening/closing reading; quantity; heating-value convention; batch; timestamp | Prefer submetering; allocate shared meters using documented causal drivers and reconcile to invoices. | kWh or MJ by carrier | continuous or each batch; reconcile monthly | same reporting period as reference output | all included sites | summed use divided by corresponding process output | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_energy_and_auxiliary_ledger` | `foil_rolling`; `double_rolling_and_separation`; `slitting_finishing_and_winding`; `internal_scrap_recovery` | electricity and operating auxiliaries | submeters, issue records, lubricant and consumable ledgers | process; carrier/material; quantity; returned/recovered quantity; batch; timestamp | Reconcile metered energy and fresh material issues, excluding recirculated lubricant from fresh input. | kWh, MJ, kg, or m3 | each shift or batch; aggregate monthly | same reporting period as reference output | all included lines | production-weighted sum per process output | meter/scale calibration; purchase and stock reconciliation |
| `cp_surface_treatment_ledger` | `surface_treatment_coating_or_backing` | surface material, backing, and energy | formulation, issue, coat-weight, meter, and production records | material; dry solids; solvent; input mass; returned mass; coat weight; backing mass; energy; output mass; batch | Reconcile formulation and issue records to measured coat weight and output constituent mass. | kg, kg/kg product, kWh, MJ | each formulation and batch | same reporting period as reference output | all included conversion lines | mass-weighted formulation and energy per converted output | formulation approval; balance reconciliation; test certificate |
| `cp_emissions_waste_records` | all applicable production processes | direct releases and waste destinations | stack/water monitoring, permits, waste manifests, treatment records | substance/waste code; quantity; method; factor; destination; recovery status; timestamp | Use direct measurement where available; otherwise calculate from collected activity and documented factors. | kg or m3 by flow | per monitoring plan and each dispatch | representative of the reporting period | all included emission points and waste routes | measured sum or documented calculation divided by process output | laboratory report; permit record; manifest; factor provenance |
| `cp_quality_roll_release` | `foil_rolling`; `annealing`; `double_rolling_and_separation`; `slitting_finishing_and_winding` | foil specification and released quantity | mill certificates, inspection and laboratory records | alloy; temper; nominal/measured thickness; tolerance; width; edge; side; coil mass; pinhole method/area/count; cleanliness or wettability method/result; acceptance criterion; release status | Link every released coil or sampled lot to its measured specification and declared contractual criteria. | mm or µm; mm; kg; method-specific result | each coil or statistically defined lot | same reporting period as reference output | all included finishing lines | retain lot results; production-weight summaries shall preserve ranges and rejected mass | instrument calibration; sampling plan; certificate of analysis |
| `cp_internal_scrap_ledger` | `internal_scrap_recovery` | internal scrap loop and recovery loss | scrap tickets, remelt batches, recovered-metal and residue records | origin process; scrap class; input mass; recovered metal; return destination; residue; stock change; timestamp | Trace scrap from originating process through recovery or transfer without reclassifying it as external recycled input. | kg | each transfer and recovery batch | same reporting period as reference output | all included recovery locations | loop balance by scrap class and period | scale calibration; batch genealogy; mass-balance reconciliation |
| `cp_packaging_dispatch_ledger` | `coil_packaging_and_dispatch` | net foil, core, packaging, and dispatch | final scale ticket, bill of materials, packaging and shipment records | coil id; net foil mass; core material/mass; packaging material/mass; customer specification; dispatch timestamp | Reconcile net and gross weights and retain material-specific packaging quantities. | kg | each dispatched coil | same reporting period as reference output | all dispatch locations | sum net output and each packaging material, then normalize to net foil mass | calibrated scale; shipment reconciliation; packaging specification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | complete foreground inventory | Normalized flow = reporting-period flow quantity / reporting-period net saleable foil quantity. | collected flow quantity; net saleable foil output | flow per 1 kg net saleable foil | `iso-14044-2006` |
| `calc_fresh_aluminium_shares` | aluminium-bearing input | For contained aluminium entering from outside the boundary, primary share + external pre-consumer recycled share + external post-consumer recycled share = 1 within declared rounding; keep alloying elements and internal return metal separately visible. | contained aluminium mass by source class | three declared external aluminium shares | `environdec-pcr-2022-08` |
| `calc_metal_yield` | declared aluminium conversion boundary | Metal yield = net saleable aluminium mass embodied in foil / fresh aluminium mass entering the boundary. Net saleable aluminium excludes coating and backing; fresh aluminium excludes internal loop returns. | reference-product constituent mass; fresh aluminium ledger; stock changes | kg saleable Al/kg fresh Al input | `european-aluminium-2018` |
| `calc_internal_scrap_balance` | internal scrap loop | Opening scrap stock + process scrap generated = recovered metal + exported scrap + recovery residues + closing scrap stock, after moisture and contamination corrections where material. | scrap transfers; recovered metal; residues; stock changes | reconciled loop balance and difference | `european-aluminium-2018` |
| `calc_constituent_fraction` | converted foil | Constituent fraction = dry mass of each aluminium, coating, ink, lacquer, adhesive, laminate, or backing constituent / total dry sold-product mass; fractions sum to 1 within declared rounding. | formulation, coat-weight, backing, base-foil, and output records | kg constituent/kg sold product | `eafa-alufoil-production` |
| `calc_weighted_aggregation` | multiple products, lines, or sites | Aggregate each normalized inventory flow using net saleable foil mass as weight; do not average ratios without their production weights. | site/line/grade quantities and net outputs | production-weighted inventory | `iso-14044-2006` |
| `calc_direct_emission` | calculated direct releases | Emission = collected activity quantity × documented emission factor × applicable control-device adjustment; retain factor identity, unit, period, and control efficiency evidence. | activity record; factor; control record | substance-specific direct emission | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | all foreground data | Use one coherent reporting period no longer than 12 consecutive months; disclose shutdowns, atypical campaigns, and any substitution outside the period. | dated production, meter, purchase, waste, and quality records |
| `dq_technological` | declared product | Preserve alloy/temper, gauge, foil-stock route, rolling/annealing route, double-rolling status, surface conversion, and application-specific specification instead of aggregating technologically dissimilar products without production weights. | route genealogy; product specification; weighted aggregation worksheet |
| `dq_geographical` | all included sites and upstream links | Identify production country or region for each foreground site and the geographic representativeness of material and energy datasets. | site list; supplier records; dataset metadata |
| `dq_completeness` | mass, energy, water, emissions, and waste | Reconcile material inputs, outputs, internal loops, stock changes, meters, and invoices; document excluded flows and the governing cut-off rule. | signed reconciliations; mass and energy balance; exclusion register |
| `dq_measurement` | collected quantities | Use calibrated or legally controlled instruments where applicable and retain units, conversion factors, sampling plans, and uncertainty or precision information. | calibration certificates; laboratory methods; sampling plan; conversion worksheet |
| `dq_product_quality` | released foil | Record the customer criterion and result for thickness, alloy/temper, coil geometry, pinholes, and cleanliness or wettability where specified. ASTM B926 may be used for pinhole identification/counting and ASTM F22 for a qualitative water-break cleanliness check, but this PCR does not convert those methods into universal acceptance thresholds. | release certificate; test method; sampled area; test result; contractual criterion |
| `dq_recycled_content` | aluminium source shares | Preserve supplier evidence and chain-of-custody method for external recycled input; report internal scrap loops separately and avoid double counting. | supplier declaration; purchase specification; mass-balance or segregation records |
| `dq_source_hierarchy` | secondary evidence | Prefer official standards/PCRs and representative industry datasets. Treat published averages as context unless product, route, geography, time, and boundary are demonstrably comparable. | source register; comparability assessment; replacement plan |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | The final reference output shall use Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and `kg`, normalized to exactly 1 kg net sold foil. |  |
| `validation_category_scope` | declared product | The aluminium-layer thickness shall be greater than zero and not exceed 0.2 mm; thickness excludes backing. Products thicker than 0.2 mm or finished downstream articles fail this PCR scope. | `unsd-cpc-3-41535` |
| `validation_required_qualifiers` | dataset metadata | Every Section 3 required qualifier shall have a declared value, explicit `none`, or justified `not applicable`; a generic battery-grade or packaging-grade label does not satisfy the qualifier set. | `en-546-1-2007`; `astm-b926-2025`; `astm-f22-2021` |
| `validation_route_completeness` | process inventory | Every process in the map shall be present, or conditional processes shall be explicitly marked not applicable with evidence; outsourced controlled operations shall remain visible and linked. | `european-aluminium-2018`; `eafa-alufoil-production` |
| `validation_mass_reconciliation` | aluminium and converted-product mass | Material balances shall reconcile inputs, outputs, stock changes, internal loops, and residues. Constituent fractions shall be between 0 and 1 and sum to 1 within declared rounding. Any residual shall be reported and investigated, not forced to zero. | `iso-14044-2006` |
| `validation_recycled_content` | aluminium source accounting | Each external aluminium share shall be between 0 and 1 and the three external source shares shall sum to 1 within declared rounding; internal scrap shall not be counted as external recycled content. | `environdec-pcr-2022-08` |
| `validation_yield` | metal conversion | Metal yield shall be calculated from collected mass records, lie between 0 and 1, state the included boundary and stock treatment, and remain separate from overall product yield when coatings or backing are present. | `european-aluminium-2018` |
| `validation_quality_methods` | released product | Pinholes and cleanliness/wettability shall report the contractual criterion, method, sampling basis, and result where applicable. This PCR imposes no generic pass/fail threshold beyond the declared contract or governing product standard. | `astm-b926-2025`; `astm-f22-2021` |
| `validation_allocation_disclosure` | allocated inventories | The dataset shall identify every allocation or recycling method, driver, affected flow, and sensitivity required by Section 7; unreported mixing of allocation methods fails conformance. | `iso-14044-2006`; `environdec-pcr-2022-08` |
| `validation_no_contextual_defaults` | quantitative inventory | European Aluminium industry averages or application-specific Tiangong process candidates shall not be copied as category defaults without a documented comparability review and explicit narrower dataset identity. | `european-aluminium-2018` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground aluminium-foil production data package and its process or lifecycle-model projection. |
| downstream_use | Product carbon footprint, LCA, EPD, supply-chain inventory, and engineering studies for battery current collectors, packaging, thermal-management, electrical, and other aluminium-foil uses when product qualifiers match. |
| allowed_use | Use for the declared alloy/temper, gauge, production route, surface state, coating/backing, quality specification, geography, technology, and period; broader aggregation is allowed only with production-weighted coverage and transparent composition. |
| excluded_use | Generic representation of all CPC 41535 foil from one narrow grade or route; product-performance certification; legal compliance claims; finished-package, battery, electrical, or thermal-product inventories beyond the foil producer gate. |
| required_metadata | CPC 3.0 `41535`; exact Tiangong reference flow identity; all Section 3 qualifiers; declared starting condition; included/outsourced processes; site, geography, technology and period; allocation and recycling method; foreground versus secondary data status. |
| required_quality_disclosure | Data coverage and completeness; metering and estimation shares; mass/energy reconciliation; recycled-content chain of custody; metal yield; pinhole and cleanliness methods/results where applicable; uncertainty and deviations; comparability limits for any published secondary data. |
| update_trigger | Change in thickness/alloy/temper product mix, foil-stock route, rolling or annealing route, double-rolling practice, surface conversion, recycled-content sourcing or allocation method, yield, energy supply, site boundary, quality specification, or reporting period that materially changes representativeness. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-41535` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, code 41535 and explanatory notes, 2025. [Official CPC resources](https://unstats.un.org/unsd/classifications/Econ/CPC) and [CPC Version 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf), accessed 2026-08-09. | Exact category identity; aluminium-layer thickness limit; backed-foil classification treatment. |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, current edition confirmed 2022. [ISO catalogue record](https://www.iso.org/standard/38498.html), accessed 2026-08-09. | LCI boundary, allocation, data-quality, calculation, and reporting principles. |
| `environdec-pcr-2022-08` | standard | EPD International, PCR 2022:08 Basic aluminium products and special alloys, version 1.0.2, valid to 2027-06-09. [PCR library record](https://www.environdec.com/pcr-library/pcr_040ae46d-0894-4dca-831b-91aa8d2b93b8), accessed 2026-08-09. | Aluminium-product PCR scope and explicit disclosure of the selected scrap/recycling allocation method. |
| `european-aluminium-2018` | dataset | European Aluminium, Environmental Profile Report: Life-Cycle Inventory Data for Aluminium Production and Transformation Processes in Europe, February 2018. [Full report](https://european-aluminium.eu/wp-content/uploads/2023/01/European-Aluminium_Environmental-Profile-Report-2018_full-version.pdf), accessed 2026-08-09. | Broad foil process decomposition, hot-rolled and continuous-cast foil-stock routes, optional annealing/surface treatment/slitting, double rolling, internal scrap recovery, and contextual industry inventory structure. Numerical industry averages are not adopted as defaults. |
| `eafa-alufoil-production` | extension_guidance | European Aluminium Foil Association, Alufoil Production. [Industry technical page](https://www.alufoil.org/Alufoil-Production), accessed 2026-08-09. | Foil-production routes, double rolling for thin gauges, separation, slitting, reels, coatings and laminates. |
| `en-546-1-2007` | standard | NBN EN 546-1:2007, Aluminium and aluminium alloys - Foil - Part 1: Technical conditions for inspection and delivery. [Official NBN record](https://app.nbn.be/data/r/platform/frontend/detail?lang=en&p40_id=174383&p40_language_code=en), accessed 2026-08-09. | Plain wrought-foil inspection and delivery qualifiers; used as a narrower plain-foil reference, not as the category outer boundary. |
| `astm-b926-2025` | standard | ASTM B926-09(2025), Standard Method for Pinhole Determination in Aluminum and Aluminum Alloy Plain Foil by Means of a Light Table. [Official ASTM record](https://store.astm.org/b0926-09r25.html), accessed 2026-08-09. | Optional pinhole identification/counting method and method/result disclosure; no universal maximum. |
| `astm-f22-2021` | standard | ASTM F22-21, Standard Test Method for Hydrophobic Surface Films by the Water-Break Test. [Official ASTM record](https://store.astm.org/f0022-21.html), accessed 2026-08-09. | Optional qualitative surface-cleanliness/water-break method and disclosure limitations. |
