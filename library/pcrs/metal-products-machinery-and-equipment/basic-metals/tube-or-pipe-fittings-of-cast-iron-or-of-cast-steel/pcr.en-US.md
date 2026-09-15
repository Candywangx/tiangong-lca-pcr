---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tube-or-pipe-fittings-of-cast-iron-or-of-cast-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Tube or pipe fittings, of cast-iron or of cast-steel

## 1. Scope and Applicability

This PCR applies to finished tube or pipe fittings whose load-bearing body is produced by casting cast iron or cast steel. Covered fitting forms include elbows, bends, tees, crosses, reducers, couplings, sockets, caps, plugs, and flanges when the fitting body is a casting. Gray, ductile or nodular, and malleable cast-iron grades and carbon, low-alloy, or high-alloy cast-steel grades are covered when the grade, connection type, dimensions, pressure or service class, heat treatment, coating, and acceptance specification are declared.

The foreground boundary begins with purchased metal charge and other production inputs at the foundry gate and ends with an accepted fitting at the factory gate. It includes charge preparation, melting and metal treatment, mould and core production, pouring, cooling, shakeout, cleaning, gate and riser removal, finishing, inspection, and all applicable heat treatment and factory-applied coating. It excludes manufacture of upstream pig iron, scrap preparation outside the reporting site, ferro-alloys, sand, binders, fuels, electricity, gases, and coatings; those inputs require upstream datasets. Distribution, installation, use, maintenance, and end-of-life are outside the boundary.

Pipe and tube bodies, hollow profiles, centrifugally cast pipe, fittings made by forging, rolling, welding, or machining from non-cast steel stock, valves, pumps, gaskets, seals, and removable fasteners are excluded. Distribution packaging is excluded unless it is integral to the declared saleable reference product; any packaging brought into scope must be modelled as separate atomic material flows in the foreground data package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tube-or-pipe-fittings-of-cast-iron-or-of-cast-steel |
| classification_refs | CPC 3.0: 41292, exact mapping context |
| covered_products | Finished cast-iron or cast-steel tube or pipe fittings with a cast load-bearing body, including declared machining, heat treatment, and factory-applied coating |
| excluded_products | Pipe and tube bodies; hollow profiles; centrifugally cast pipe; wrought, forged, welded, or fabricated non-cast fittings; valves; pumps; gaskets; seals; removable fasteners |
| representative_product | One accepted, finished cast-iron or cast-steel pipe fitting at the factory gate |
| production_route | Charge preparation; melting and metal treatment; mould/core production; casting, cooling, shakeout, cleaning and finishing; conditional heat treatment; conditional factory-applied coating |
| market_state | Finished and inspection-accepted fitting, with alloy grade, dimensions, connection type, pressure or service class, heat-treatment state, coating state, and included accessories declared; before distribution unless integral packaging is explicitly included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished fitting that joins, branches, changes direction or diameter, or terminates a tube or pipe system |
| How much | 1 kg of accepted finished fitting |
| How well | Meets the declared material grade, dimensional and connection specification, pressure or service class, surface condition, heat-treatment state, coating state, and acceptance test requirements |
| How long or cycle | One factory-gate delivery of accepted product; service life is outside this cradle-to-gate reference |
| reference_flow_link | 1 kg of accepted reference product output from `casting_and_finishing`, including permanent factory-applied coating when declared and excluding removable distribution packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tube or pipe fittings, of cast-iron or of cast-steel `39f3bbea-17e4-4e7b-9e89-9fbf72f5937d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cast-iron or cast-steel family; alloy or material grade; fitting form; nominal size and wall class; connection type; pressure or service class; applicable product specification; heat-treatment state; coating material and thickness or uncoated state; leak or pressure-test status; included accessories; site; geography; production period; furnace technology; mould and core system; reference-product net mass basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted fittings on calibrated scales. Include permanent factory-applied coating and inseparable components declared in the reference product; exclude removable distribution packaging, temporary test media, gates, risers, and rejected castings. |
| `measurement_electricity` | every Alternating current row | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity by process where submetering exists. Convert kWh to MJ using exactly 3.6 MJ per kWh and disclose allocation when only a shared meter is available. |
| `measurement_gas_volume` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volumes at the meter's declared temperature, pressure, moisture, and standard or actual reference conditions. Apply a documented conversion before aggregating records at different conditions. |
| `measurement_water_mass` | Process Water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass or convert a measured volume using the site- and temperature-appropriate density; disclose water source, quality, delivery boundary, and conversion. |
| `measurement_mass_balance` | metal charge, internal returns, product and outward wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile purchased metal input with accepted product, outward metal-bearing wastes, measured stock change, and separately reported internal gates, risers, returns, and rejects. Internal returns do not cross the system boundary and must not be counted as purchased input or outward waste. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal charge, mould/core materials, energy carriers, gases, water, and applicable coating materials received at the reporting foundry gate, with quantities, supplier identity, origin, composition or grade, and delivery state declared |
| starting_condition_role | Upstream product inputs to a site-gate-to-factory-gate foreground production system |
| product_classification_scope | Finished cast-iron or cast-steel tube or pipe fittings consistent with CPC 3.0 subclass 41292; the classification reference is context and does not replace the semantic boundary |
| recursive_input_rule | A purchased fitting in the same product category is recorded once as an external product input with an independent upstream dataset; do not recursively re-expand it with this PCR inside the same foreground system |
| upstream_dataset_requirement | Each purchased material, electricity, fuel, gas, water, coating, and externally treated waste requires a geographically, technologically, temporally, and compositionally representative upstream dataset |
| disclosure | Declare site, geography, production period, cast material family and grade, furnace technology, charge composition, mould/core system, internal sand and metal return treatment, emission controls, heat treatment, machining, coating, acceptance yield, and excluded or externally performed operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate_to_factory_gate` | foreground system | Include all on-site operations from receipt and handling of purchased inputs through an accepted fitting at the factory gate, including internal material handling and pollution-control operation. | `eu-jrc-sf-bref-2024`; `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `boundary_upstream_inputs` | purchased inputs | Exclude upstream production from the foreground system but link one representative upstream dataset for every purchased input crossing the site gate. | `eu-jrc-sf-bref-2024` |
| `boundary_internal_returns` | gates, risers, sprues, internal rejects and reclaimed sand | Treat material recirculated wholly inside the reporting system as an internal loop. Report the loop quantity for mass-balance transparency without creating an external product or waste exchange. | `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `boundary_conditional_routes` | heat treatment and coating | Include heat treatment or factory-applied coating only when performed for the declared reference product; otherwise record the process as not applicable and disclose any externally performed operation and linked supplier dataset. |  |
| `boundary_exclusions` | downstream stages | Exclude distribution, installation, use, maintenance, and end-of-life from the foreground result. Do not claim a cradle-to-grave result from this PCR alone. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `charge_and_melt` | Charge preparation, melting and metal treatment | `required` | Always included; route-specific rows apply only when the declared furnace or material grade uses them | Foreground production of composition-controlled molten cast iron or cast steel | Per 1 kg accepted fitting output |
| `mould_and_core` | Mould and core production | `required` | Always included; individual binder, core, oven, and wet-sand rows apply only to the declared mould/core system | Foreground preparation of mould cavities and internal cores | Per 1 kg accepted fitting output |
| `casting_and_finishing` | Pouring, cooling, shakeout, cleaning, machining and inspection | `required` | Always included; finishing operations are recorded when performed for the declared fitting | Foreground conversion of molten metal to accepted finished fitting | 1 kg accepted fitting output |
| `heat_treatment` | Post-casting heat treatment | `conditional` | Include when the declared grade or acceptance specification requires annealing, normalizing, quenching, tempering, solution treatment, or another on-site thermal cycle | Foreground conditioning | Per 1 kg heat-treated accepted fitting |
| `surface_coating` | Factory-applied fusion-bonded epoxy powder coating | `conditional` | Include when fusion-bonded epoxy powder coating is applied on site to the declared reference product | Foreground surface protection | Per 1 kg coated accepted fitting |

### Process: Charge preparation, melting and metal treatment (`charge_and_melt`)

#### Inputs

##### Product flows

###### Purchased steel scrap charge (`melt_scrap_steel`)

Record weighed purchased steel scrap crossing the site gate. Declare scrap grade, source, contamination controls, and whether it is used for cast iron or cast steel.

- Selected flow: Scrap Steel `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- Flow property / unit: Mass / kg
- Amount rule: measured purchased steel scrap charged, net of stock change and excluding internal foundry returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Purchased pig iron charge (`melt_pig_iron`)

Record pig iron only when it is part of the declared cast-iron furnace charge; otherwise mark this atomic row not applicable.

- Selected flow: pig iron `439daa27-1495-4a1b-8dec-d9adabba0269`
- Flow property / unit: Mass / kg
- Amount rule: measured pig iron charged, net of stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`

###### Ferrosilicon addition (`melt_ferrosilicon`)

Record ferrosilicon when used for chemistry adjustment or inoculation and declare its grade and silicon content.

- Selected flow: Ferrosilicon `33cf9edf-84e6-41c7-8986-2983e91391d8`
- Flow property / unit: Mass / kg
- Amount rule: measured ferrosilicon added to furnace or ladle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Ferromanganese addition (`melt_ferromanganese`)

Record lump ferromanganese when used and declare carbon grade and manganese content.

- Selected flow: Ferromanganese `2f5d9ece-fe82-4e6d-a12d-47366582ec48`
- Flow property / unit: Mass / kg
- Amount rule: measured ferromanganese added to furnace or ladle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Limestone flux (`melt_limestone`)

Record limestone only for furnace routes that consume it as flux.

- Selected flow: limestone `09f44589-83dc-441d-9a89-f15f1bfa1bec`
- Flow property / unit: Mass / kg
- Amount rule: measured limestone charged as flux
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Cupola coke (`melt_coke`)

Record coke only for a declared cupola route and disclose the purchased grade, ash, moisture, and sulfur basis.

- Selected flow: Coke `a5a31215-d01f-454a-8f28-16f5154709d8`
- Flow property / unit: Mass / kg
- Amount rule: measured purchased coke charged to the cupola
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`

###### Melting electricity (`melt_electricity`)

Record alternating-current electricity consumed by charge preparation, electric furnaces, holding, ladles, and associated melting controls; do not include electricity assigned to other process ids.

- Selected flow: Alternating current `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated melting-area electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_charge_utilities`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Melting natural gas (`melt_natural_gas`)

Record gaseous natural gas only when consumed in on-site charge preparation, a fuel-fired melting or holding unit, ladle heating, or melting-area control equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or allocated natural gas at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_utilities`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Oxygen for lancing or metal treatment (`melt_oxygen`)

Record industrial oxygen only when oxygen lancing or another declared metal-treatment operation consumes purchased or on-site supplied oxygen.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered oxygen at declared purity, pressure, and reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_charge_utilities`
- Sources: `us-epa-ap42-steel-foundries-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Foundry melting slag sent off site (`melt_foundry_slag`)

Record slag leaving the reporting site after deducting any on-site recirculation. Keep this foundry-specific waste identity unresolved until an exact state-100 flow is available.

- Selected flow: Foundry melting slag
- Flow property / unit: Mass / kg
- Amount rule: measured outward foundry melting slag, net of on-site reuse and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_melt_outputs`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

##### Elementary flows

###### Fossil carbon dioxide from melting fuels and carbon charge (`melt_co2_fossil`)

Record direct fossil carbon dioxide from on-site melting, holding, ladle heating, and carbon oxidation; upstream electricity emissions are excluded.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: integrated direct measurement or site-specific carbon balance using collected fuel and carbon-charge records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melt_emissions`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`

###### Fossil carbon monoxide from melting (`melt_co_fossil`)

Record direct fossil carbon monoxide emitted to air after applicable on-site controls.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: integrated measured or calculated controlled emission for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melt_emissions`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Nitrogen dioxide from melting combustion (`melt_nitrogen_dioxide`)

Record nitrogen dioxide emitted to air when quantified as a distinct species. Do not substitute nitrite or a water/soil compartment; the Tiangong UUID remains unresolved.

- Selected flow: Nitrogen dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: integrated measured or speciated calculated direct emission after applicable controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melt_emissions`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Sulfur dioxide from melting combustion (`melt_sulfur_dioxide`)

Record sulfur dioxide emitted to outdoor air after controls. Do not use indoor, upper-atmosphere, or water-compartment UUIDs.

- Selected flow: Sulfur dioxide emitted to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: integrated measured or fuel-sulfur-balance direct emission after applicable controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melt_emissions`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Melting particulate matter (`melt_particulate`)

Record total particulate matter of unspecified particle size released to outdoor air from charge handling, furnace operation, alloying, slagging, and tapping after controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: integrated controlled stack and captured-fugitive emission assigned to melting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_melt_emissions`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

### Process: Mould and core production (`mould_and_core`)

#### Inputs

##### Product flows

###### Virgin silica sand (`mould_silica_sand`)

Record purchased silica sand added to the mould/core system, excluding reclaimed sand circulating internally.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass / kg
- Amount rule: measured virgin silica sand input net of stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mould_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Bentonite for green-sand moulds (`mould_bentonite`)

Record bentonite only when used as the declared green-sand clay binder.

- Selected flow: Clay, bentonite `93806a54-46f5-409c-99c5-4144a1e73b5d`
- Flow property / unit: Mass / kg
- Amount rule: measured purchased bentonite addition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mould_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`

###### Phenolic resin core binder (`core_phenolic_resin`)

Record phenolic resin only when used in the declared mould or core formulation; other binder chemistries require separate atomic rows in the foreground package.

- Selected flow: Phenolic resin `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied phenolic resin consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mould_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Process water for mould preparation (`mould_process_water`)

Record process water added to wet moulding sand or used directly in this process; cooling water in a closed loop is recorded only as net makeup crossing the site boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water input net of recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mould_materials`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`

###### Natural gas for core or mould drying (`core_natural_gas`)

Record gaseous natural gas only when an on-site core oven or mould dryer consumes it.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or allocated natural gas at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mould_utilities`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Mould and core electricity (`mould_electricity`)

Record electricity for sand preparation, mixing, moulding, core making, drying, reclamation, and process controls.

- Selected flow: Alternating current `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated mould/core electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mould_utilities`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent foundry mould and core sand (`mould_spent_foundry_sand`)

Record spent silica-based foundry sand leaving the site after internal reclamation and stock change. Do not substitute generic spent abrasive.

- Selected flow: Spent foundry mould and core sand
- Flow property / unit: Mass / kg
- Amount rule: measured outward spent foundry sand net of on-site reclamation and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mould_outputs`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

##### Elementary flows

###### Fossil carbon monoxide from core or mould heating (`mould_co_fossil`)

Record fossil carbon monoxide emitted to air from binder reaction and fuel-fired core or mould heating after controls.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: integrated controlled emission assigned to mould and core production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mould_emissions`
- Sources: `us-epa-ap42-steel-foundries-1995`

###### Mould and core particulate matter (`mould_particulate`)

Record particulate matter released to outdoor air from sand handling, mixing, forming, reclamation, and core ovens after controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: integrated controlled stack and captured-fugitive emission assigned to mould/core production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mould_emissions`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

### Process: Pouring, cooling, shakeout, cleaning, machining and inspection (`casting_and_finishing`)

#### Inputs

##### Product flows

###### Casting and finishing electricity (`finishing_electricity`)

Record electricity for pouring support, cooling conveyors, shakeout, cutting, grinding, shot blasting, machining, inspection, ventilation, and controls assigned to this process.

- Selected flow: Alternating current `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated casting and finishing electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### Cast steel shot blasting abrasive (`finishing_cast_steel_shot`)

Record cast steel shot only when consumed in on-site shot blasting. Net recovered media internally recirculated out of the purchase total; the UUID is unresolved because the named state-100 candidate has an incompatible classification.

- Selected flow: Cast steel shot blasting abrasive
- Flow property / unit: Mass / kg
- Amount rule: measured purchased shot consumed net of stock change and recovered-media inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `us-epa-ap42-steel-foundries-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished fitting (`finished_fitting`)

The output is the inspection-accepted fitting that realizes the reference flow, including its declared permanent coating when applicable.

- Selected flow: Tube or pipe fittings, of cast-iron or of cast-steel `39f3bbea-17e4-4e7b-9e89-9fbf72f5937d`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg accepted finished fitting by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Captured ferrous foundry finishing dust (`finishing_foundry_dust`)

Record captured ferrous dust leaving the site from cutting, grinding, shot blasting, machining, and finishing air controls. Do not substitute generic municipal or cork dust.

- Selected flow: Captured ferrous foundry finishing dust
- Flow property / unit: Mass / kg
- Amount rule: measured outward captured finishing dust net of stock change and on-site recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `us-epa-ap42-steel-foundries-1995`

##### Elementary flows

###### Finishing particulate matter (`finishing_particulate`)

Record particulate matter released to outdoor air from shakeout, cutting, grinding, shot blasting, and machining after controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: integrated controlled stack and captured-fugitive emission assigned to finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted fitting output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_emissions`
- Sources: `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

### Process: Post-casting heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Heat-treatment electricity (`heat_electricity`)

Record electricity only for on-site heat-treatment cycles applicable to the declared fitting.

- Selected flow: Alternating current `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated heat-treatment electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg heat-treated accepted fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment`
- Sources:

###### Heat-treatment natural gas (`heat_natural_gas`)

Record gaseous natural gas only for an on-site fuel-fired heat-treatment cycle.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or allocated natural gas at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg heat-treated accepted fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from heat treatment (`heat_co2_fossil`)

Record direct fossil carbon dioxide only for fuel-fired on-site heat treatment; upstream electricity emissions are excluded.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: integrated direct measurement or site-specific carbon balance using collected heat-treatment fuel records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg heat-treated accepted fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment`
- Sources:

### Process: Factory-applied fusion-bonded epoxy powder coating (`surface_coating`)

#### Inputs

##### Product flows

###### Fusion-bonded epoxy powder (`coating_epoxy_powder`)

Record as-supplied fusion-bonded epoxy powder only when applied on site. Declare resin system, colour, solids content, application thickness, and reclaimed overspray practice; the exact Tiangong UUID is unresolved.

- Selected flow: Fusion-bonded epoxy powder coating
- Flow property / unit: Mass / kg
- Amount rule: measured fresh coating powder issued to the line net of returned unopened material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg coated accepted fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_coating`
- Sources:

###### Coating-line electricity (`coating_electricity`)

Record electricity for surface preparation, powder application, recovery equipment, curing, ventilation, and controls assigned to the coating line.

- Selected flow: Alternating current `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated coating-line electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg coated accepted fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_coating`
- Sources:

###### Coating-oven natural gas (`coating_natural_gas`)

Record gaseous natural gas only when the on-site coating cure oven is fuel fired.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or allocated coating-oven natural gas at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg coated accepted fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_coating`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Powder coating waste (`coating_powder_waste`)

Record powder coating waste leaving the site after deducting overspray powder recovered and reused on site. Declare whether the waste is cured or uncured and its resin and pigment system.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: measured outward powder coating waste net of on-site recovery and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg coated accepted fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_coating`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from coating cure (`coating_co2_fossil`)

Record direct fossil carbon dioxide only when the on-site coating oven burns natural gas.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: integrated direct measurement or site-specific carbon balance using collected coating-oven fuel records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg coated accepted fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_coating`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared foundry operations | Prefer process submetering, batch records, and product-family subdivision so the declared fitting receives measured material, energy, waste, and emission quantities without allocation. |  |
| `allocation_mass_if_unavoidable` | inseparable multi-product operation | If subdivision is infeasible, allocate shared burdens by measured accepted product mass for the same reporting period. Disclose the allocation factor, products included, rejected mass, and a sensitivity result; do not use sale price without a reviewed reason. |  |
| `allocation_internal_returns` | internal gates, risers, sprues, rejects and reclaimed sand | Carry internal return quantities in the mass balance but assign no external product or waste flow and no avoided-product credit. | `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `allocation_outward_recycling` | wastes sent for recycling or recovery | Include collection and on-site preparation up to the site gate. Report the downstream treatment route separately and do not subtract an avoided-production credit from the core factory-gate inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_charge_materials` | `charge_and_melt` | purchased metal, alloy, flux and coke inputs | weigh tickets; purchase and issue records; stock records; batch sheets | material identity; supplier; grade/composition; gross and tare mass; batch; issue date; opening and closing stock; internal-return mass | calibrated weighbridge, platform scale, or batch scale reconciled to procurement and stock | kg | each receipt and furnace batch | representative continuous production period, normally at least 12 months or the full campaign if shorter | all charge preparation, furnace and ladle areas serving the declared product | sum purchased consumption plus opening stock minus closing stock; exclude internal returns; divide by accepted product mass | calibration records; supplier certificates; stock reconciliation; batch traceability |
| `cp_charge_utilities` | `charge_and_melt` | electricity, natural gas and oxygen | meters; invoices; production logs | meter id; start/end reading; energy or volume; reference conditions; allocation driver; operating hours; product mass | process submeter preferred; otherwise documented allocation from reconciled site meter | MJ; m3 | continuous or per batch with monthly reconciliation | same period as product output | all charge, melting, holding, ladle and melting-control equipment | subtract nonproduction and unrelated loads; apply documented conversion; divide by accepted product mass | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_melt_outputs` | `charge_and_melt` | outward slag | waste weigh tickets; stock records; treatment manifests | waste identity; mass; destination; date; opening/closing stock; on-site reuse | calibrated scale and manifest reconciliation | kg | each shipment with monthly reconciliation | same period as product output | all melting and metal-treatment units serving the declared product | outward shipments plus closing stock minus opening stock; subtract on-site recirculation; divide by accepted product mass | scale calibration; manifests; stock reconciliation |
| `cp_melt_emissions` | `charge_and_melt` | direct melting emissions | stack tests; continuous monitors; exhaust-flow records; fuel and carbon analyses; control logs | pollutant species; concentration; dry/wet basis; temperature; pressure; flow; operating time; control status; fuel use; carbon or sulfur content | integrate representative measured concentration and standardized flow; use site-specific carbon or sulfur balance only when measurement is unavailable | kg | continuous where monitored and each representative test campaign | same operating period as product output, including abnormal periods separately | captured stacks and documented fugitive sources from charge handling, furnaces, alloying, slagging and tapping | integrate mass over time, subtract neither captured waste nor upstream emissions, then divide by accepted product mass | test report; monitor QA/QC; flow calibration; control uptime; fuel analysis |
| `cp_mould_materials` | `mould_and_core` | sand, bentonite, phenolic resin and process water | purchase, issue, batch and water-meter records | material identity; grade; binder chemistry; sand system; mass or volume; density; opening/closing stock; reclaimed-sand quantity; product mass | calibrated batch scales and dedicated water meter, reconciled to stock | kg | each batch with monthly reconciliation | same period as product output | all mould, core and sand-reclamation lines serving the declared product | purchased consumption plus opening stock minus closing stock; exclude reclaimed internal sand; divide by accepted product mass | calibration; formulation sheets; procurement and stock reconciliation |
| `cp_mould_utilities` | `mould_and_core` | mould/core electricity and natural gas | meters; invoices; equipment logs | meter readings; volume reference conditions; operating hours; line; product mass | submeter or documented equipment-hour allocation | MJ; m3 | continuous or per shift with monthly reconciliation | same period as product output | mould, core, drying and reclamation equipment | subtract unrelated loads, convert units and divide by accepted product mass | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_mould_outputs` | `mould_and_core` | outward spent foundry sand | waste weigh tickets; reclamation and stock records; manifests | sand system; binder; mass; destination; on-site reclamation; stock change | calibrated scale and material-balance reconciliation | kg | each shipment with monthly reconciliation | same period as product output | all mould/core systems serving the declared product | outward shipments plus closing stock minus opening stock; exclude internal reclamation; divide by accepted product mass | scale calibration; manifests; reclamation log |
| `cp_mould_emissions` | `mould_and_core` | mould/core direct air emissions | stack tests; monitors; exhaust-flow and control records | species; concentration; basis; flow; operating time; control status; product mass | integrate measured concentration and standardized exhaust flow | kg | continuous or representative campaign | same period as product output | sand handling, mixing, moulding, reclamation and core ovens | integrate controlled mass over time and divide by accepted product mass | test report; monitor QA/QC; flow calibration; control uptime |
| `cp_finishing_inputs` | `casting_and_finishing` | finishing electricity and cast steel shot | meters; invoices; shot issue and stock records | electricity; shot purchases/issues; recovered shot; stock change; equipment hours; product mass | submeter and calibrated material scales; documented allocation where shared | MJ; kg | continuous or per shift with monthly reconciliation | same period as product output | pouring support, cooling, shakeout, cutting, grinding, blasting, machining and inspection | net purchased shot and assigned electricity divided by accepted product mass | meter and scale calibration; stock reconciliation; allocation worksheet |
| `cp_finishing_outputs` | `casting_and_finishing` | accepted product and outward finishing dust | accepted-product scale records; rejection logs; waste weigh tickets; stock and manifest records | accepted mass; rejected mass; dust mass; destination; stock change; date; product family | calibrated product and waste scales with production/waste reconciliation | kg | each batch and each waste shipment | same period as all inputs | all finishing and acceptance operations serving the declared product | sum accepted product; compute outward dust plus closing minus opening stock; divide inventory by accepted mass | calibration; inspection release; reject log; manifests; reconciliation |
| `cp_finishing_emissions` | `casting_and_finishing` | direct finishing particulate | stack tests; monitors; exhaust-flow and control records | particulate concentration; basis; flow; operating time; control status; product mass | integrate measured concentration and standardized exhaust flow | kg | continuous or representative campaign | same period as product output | shakeout, cutting, grinding, blasting and machining emission points | integrate controlled mass over time and divide by accepted product mass | test report; monitor QA/QC; flow calibration; control uptime |
| `cp_heat_treatment` | `heat_treatment` | heat-treatment energy and direct fossil carbon dioxide | recipe; batch load; meters; fuel analysis; emission records | cycle; temperature; duration; load mass; electricity; gas; gas conditions; carbon content; control status | batch meters or documented furnace allocation; direct measurement or site carbon balance for CO2 | MJ; m3; kg | each heat-treatment batch | same period as heat-treated product output | all on-site heat-treatment furnaces serving the declared product | assign energy and emissions by measured batch load and divide by accepted heat-treated product mass | meter calibration; recipe record; batch traceability; fuel analysis |
| `cp_surface_coating` | `surface_coating` | epoxy powder, electricity, natural gas, coating waste and direct fossil carbon dioxide | formulation and issue records; thickness tests; meters; waste manifests; fuel analysis | powder identity; issue and recovered mass; thickness; electricity; gas and conditions; waste mass/state; carbon content; product mass | calibrated scales and meters; coating-thickness tests; direct measurement or site carbon balance for CO2 | kg; MJ; m3 | each coating batch with monthly reconciliation | same period as coated product output | all on-site preparation, application, recovery and cure equipment | net fresh powder, assigned energy, outward waste and direct CO2 divided by accepted coated product mass | calibration; formulation certificate; thickness test; stock reconciliation; manifests; fuel analysis |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_normalize_reference_mass` | every inventory row | `Q_normalized = Q_reporting_period / M_accepted_fitting_reporting_period` | reporting-period exchange quantity; accepted fitting mass on the reference-product basis | exchange quantity per 1 kg accepted fitting |  |
| `calculation_electricity_conversion` | every Alternating current row | `E_MJ = E_kWh × 3.6`; do not apply the conversion twice | metered kWh; documented shared-meter allocation | MJ of alternating-current electricity per reference flow |  |
| `calculation_gas_conditions` | every gas-volume row | Convert meter volume to the declared common temperature, pressure, and moisture basis before aggregation; retain the conversion equation and parameters | measured gas volume; temperature; pressure; moisture state; compressibility where material | m3 at declared reference conditions per reference flow |  |
| `calculation_stack_emission` | directly measured air emissions | `m = Σ(C_i × V_i × t_i)` after consistent dry/wet, oxygen, temperature, and pressure correction, then normalize to accepted fitting mass | concentration; standardized exhaust flow; interval duration; control status; accepted product mass | kg pollutant per reference flow | `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `calculation_metal_balance` | metal system | `purchased metal + opening stock - closing stock = accepted product + outward metal-bearing waste + measured process loss + net internal-loop stock change`; show internal returns separately | charge records; product and reject mass; outward waste; stock; internal returns | reconciled mass-balance statement and closure difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and material inputs | Declare all required qualifiers and retain supplier or product certificates that establish material grade, fitting form, dimensions, connection, pressure/service class, heat treatment, coating, and acceptance specification. | product release record; drawings/specification; material certificates; supplier declarations |
| `dq_temporal` | all foreground records | Use one common representative production period. Separate start-up, shutdown, abnormal, trial, and nonproduction records and disclose inclusion decisions. | dated record inventory; operating calendar; exception log |
| `dq_completeness` | all mapped processes | Reconcile every required process and every applicable conditional row; document zero or not-applicable decisions rather than omitting the row silently. | signed completeness checklist; process map; applicability record |
| `dq_measurement` | scales, meters and emission systems | Use calibration valid for the reporting period and retain raw readings, unit conversions, shared-meter allocation, detection limits, and QA/QC corrections. | calibration certificates; raw exports; calculation workbook; test QA/QC |
| `dq_mass_balance` | metal, sand, coating and wastes | Report stock changes and internal recirculation separately and investigate material closure differences that could change the normalized result materially. | reconciled balance; inventory count; investigation record |
| `dq_representativeness` | upstream datasets | Document geography, technology, period, composition/grade, recycled-content treatment, and delivery boundary for each linked upstream dataset and explain any proxy. | dataset metadata; supplier evidence; proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity_complete` | reference flow | Fail validation when the reference flow is not 1 kg of accepted cast-iron or cast-steel fitting or when any required qualifier is missing. | `unsd-cpc-3-0-structure-2025` |
| `validation_process_coverage` | process map | Require the three required processes and explicit applicability decisions for heat treatment and surface coating. | `eu-jrc-sf-bref-2024`; `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `validation_atomic_rows` | process inventory | Require one physical, chemical, waste, or elementary exchange per row, one direction and flow type, and a concrete localized Chinese name; reject collection labels and combined utilities, fuels, materials, wastes, or emissions. |  |
| `validation_uuid_support` | UUID-bearing rows | Require public state-100 flow identity, matching flow type, classification, property, unit group, and the exact Tiangong Chinese baseName; unresolved rows must match manifest review metadata. |  |
| `validation_units` | measurement and inventory | Require kg for mass, MJ for alternating-current electricity, and m3 with declared reference conditions for gas volumes; verify every conversion and prevent double conversion. |  |
| `validation_mass_balance` | metal system | Require accepted product, outward wastes, stock change, and internal returns to be disclosed separately and the metal-balance closure difference to be reported and investigated. |  |
| `validation_no_internal_double_count` | internal loops | Reject a dataset that counts internal gates, risers, sprues, rejects, or reclaimed sand as both an external input/output and an internal recirculation. | `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `validation_emission_boundary` | direct air emissions | Require on-site controlled emissions only; reject upstream electricity or supplier emissions inserted as direct foreground elementary flows. |  |
| `validation_period_and_allocation` | reporting period and shared operations | Require a common foreground period, disclosed shared-meter and multi-product allocation, and a sensitivity result when mass allocation is unavoidable. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production data package for one declared cast-iron or cast-steel fitting product family |
| downstream_use | may be published as a `secondary_dataset` or `background_dataset` after review of completeness, representativeness, UUID resolution, and uncertainty |
| allowed_use | cradle-to-gate product-footprint and lifecycle-model construction for a fitting that matches the declared grade, geometry, connection, pressure/service class, process route, heat treatment, coating, geography, technology, and period |
| excluded_use | direct use for pipe or tube bodies, wrought or fabricated fittings, valves, downstream installation/use/end-of-life, another alloy or coating system, or a cradle-to-grave claim without additional stages |
| required_metadata | canonical PCR id; reference-flow qualifiers; site and geography; reporting period; product and alloy grade; accepted mass and yield; furnace; mould/core system; heat treatment; coating; pollution controls; allocation; upstream datasets; unresolved identities; data owner and review status |
| required_quality_disclosure | primary-data share; meter and scale coverage; calibration; stock and mass-balance closure; emission measurement method and control uptime; allocation share and sensitivity; upstream proxy quality; exclusions; missing ranges; uncertainty limitations |
| update_trigger | material change in product grade or geometry, furnace or mould technology, charge mix, supplier, energy system, yield, control equipment, heat treatment, coating, allocation, site/geography, or reporting period; or resolution of an unresolved flow UUID or evidence range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `dataset` | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official classification identity for CPC 41292 and distinction from adjacent pipe bodies and non-cast fittings |
| `eu-jrc-sf-bref-2024` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Smitheries and Foundries Industry*, 2024, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf (retrieved 2026-09-04) | Foundry process decomposition and foreground boundary coverage |
| `us-epa-ap42-gray-iron-foundries-2003` | `official_guidance` | United States Environmental Protection Agency, *AP-42, Section 12.10: Gray Iron Foundries*, May 2003, https://www.epa.gov/sites/default/files/2020-11/documents/c12s10.pdf (retrieved 2026-09-04) | Cast-iron route, charge, mould/core, internal sand return, casting/finishing, direct-emission species, and control-system inventory coverage; not used as a product-specific quantitative range |
| `us-epa-ap42-steel-foundries-1995` | `official_guidance` | United States Environmental Protection Agency, *AP-42, Section 12.13: Steel Foundries*, January 1995, https://www.epa.gov/sites/default/files/2020-11/documents/c12s13.pdf (retrieved 2026-09-04) | Cast-steel route, charge, mould/core, casting/finishing, direct-emission species, and control-system inventory coverage; not used as a product-specific quantitative range |
| `china-mof-2026-tariff-lines-730711-730719` | `official_guidance` | Ministry of Finance of the People's Republic of China, *Country List and Tariff-Line Rate Schedule*, 2026 tariff lines 73071100 and 73071900, https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf (retrieved 2026-09-04) | Verification of professional Chinese terminology “铸铁制管子附件” and “铸钢管子附件” used in the Chinese category title |
