---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-steel-not-further-work-55e07ecd
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of alloy steel (except of silicon-electrical steel), not further worked than cold-rolled, of a width of 600 mm or more

## 1. Scope and Applicability

This PCR applies to factory-gate coils, strip, or sheet of alloy steel other than silicon-electrical steel, with a width of 600 mm or more, whose last material-working state is cold rolling or cold reduction. It covers pickling and surface preparation, cold rolling, any grade- or order-required annealing and temper rolling, finishing to ordered dimensions, and dispatch preparation. Upstream production of the received hot-rolled alloy-steel feed is represented by a linked supplier-specific or representative upstream dataset.

It excludes silicon-electrical steel, stainless steel when separately classified, products narrower than 600 mm, hot-rolled products that have not been cold reduced, coated or plated products, and products further worked by forming, fabrication, machining, or other downstream conversion. Annealing, temper rolling, surface oiling, and packing are included only when performed to deliver the qualifying cold-rolled product and must be separately disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-steel-not-further-work-55e07ecd |
| classification_refs | CPC 3.0 `41223` |
| covered_products | Wide cold-rolled or cold-reduced flat products of alloy steel other than silicon-electrical steel, supplied as coil, strip, or sheet at 600 mm width or more and not further worked beyond the declared included finishing operations |
| excluded_products | Silicon-electrical steel; separately classified stainless steel; width below 600 mm; products only hot rolled; coated, plated, fabricated, formed, or machined products; downstream use products |
| representative_product | Uncoated wide cold-rolled alloy-steel coil at the producer factory gate |
| production_route | Hot-rolled alloy-steel feed; pickling and rinsing; cold rolling; conditional annealing and temper rolling; finishing and dispatch preparation |
| market_state | Dry factory-gate coil, strip, or sheet with declared grade, dimensions, surface condition, temper, edge condition, and packing state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Declared quantity of qualifying wide cold-rolled flat alloy-steel product delivered at the producer factory gate |
| How much | 1,000 kg net product mass |
| How well | Conforming to the declared alloy grade, ordered thickness and width, mechanical properties, surface condition, temper, edge condition, and inspection status |
| How long or cycle | One production campaign or reporting-period aggregate; no use-stage service life is assigned to this factory-gate declared unit |
| reference_flow_link | `reference_cold_rolled_alloy_steel` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net cold-rolled alloy-steel product at the factory gate |
| Reference product flow | Flat-rolled products of alloy steel (except of silicon-electrical steel), not further worked than cold-rolled, of a width of 600 mm or more `d572d61f-b115-4a81-a187-8d7d111a0d65` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy grade and standard; silicon-electrical exclusion; width and thickness; coil, strip, or sheet form; annealed or full-hard state; temper and surface finish; edge condition; coating status; production site and geography; reporting period; net mass basis; packing state; factory-gate boundary |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and steel intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry product mass excluding pallets, wrapping, strapping, cores, and other dispatch packaging; record gross-to-net reconciliation when commercial records use gross mass. |
| `electricity_energy_conversion` | all alternating-current electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve supplier or meter kWh and convert to MJ using exactly 3.6 MJ per kWh; retain the original kWh record and identify the meter, voltage level, supplier or grid mix, and allocation method. |
| `natural_gas_volume_conditions` | annealing natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gaseous natural-gas volume at explicitly declared temperature, pressure, and dry/wet reference conditions; retain the meter correction or supplier statement used to harmonize volume. |
| `process_mass_balance` | each process and the overall foreground chain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile input steel mass to conforming intermediates, reference product, steel scrap, scale or filter residues, retained work in progress, and measured inventory change on the same temporal basis. |

## 5. System Boundary

The foreground boundary starts when qualifying hot-rolled alloy-steel feed enters the pickling or coupled pickling-and-rolling line and ends when the net qualifying cold-rolled product is finished and ready for dispatch. Linked upstream datasets provide the burdens of hot-rolled feed, purchased chemicals, electricity, fuels, water, gases, and packaging. Treatment or recovery datasets are required for wastes leaving the foreground site.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_include_cold_rolling_chain` | foreground production | Include pickling and rinsing, cold rolling, grade- or order-required annealing and temper rolling, finishing, internal material handling, directly attributable utilities, emissions control, wastewater handling, and packing performed before the factory gate. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_link_upstream_inputs` | product and utility inputs | Link every purchased product input to a geographically and technologically representative upstream dataset and disclose supplier-specific substitutions; do not truncate hot-rolled steel production merely because the foreground starts at pickling. | `worldsteel-lci-methodology-2017` |
| `boundary_exclude_downstream_conversion` | downstream life cycle | Exclude transport after the factory gate, fabrication, forming, coating, assembly, use, maintenance, and end-of-life unless a separately declared expanded study adds them without changing this reference flow. | `un-cpc-3-0-2025`; `worldsteel-lci-methodology-2017` |
| `boundary_conditional_operations` | annealing, temper rolling, surface oiling, and packing | Include each operation and its atomic exchanges only when performed for the reported product; otherwise document the operation as absent rather than applying a generic route average. | `ec-jrc-fmp-bref-2022` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received hot-rolled flat alloy-steel coil or strip, excluding silicon-electrical steel, with supplier, grade, dimensions, surface state, mass, and upstream dataset declared |
| starting_condition_role | foreground transformation input with linked upstream production burden |
| product_classification_scope | CPC 3.0 `41223`, restricted to cold-rolled flat alloy-steel products of width 600 mm or more and excluding silicon-electrical steel |
| recursive_input_rule | If qualifying cold-rolled product is reintroduced as an input, record it as a separately identified recycled, rework, or purchased product flow with its prior dataset; do not recursively apply this PCR to hide the prior production stage. |
| upstream_dataset_requirement | Supplier-specific hot-rolled alloy-steel dataset preferred; otherwise use a documented regional and technology-representative dataset with grade, recycled-content accounting, and factory-gate boundary aligned to the feed. |
| disclosure | Declare feed origin, alloy grade, BOF/EAF or supplier technology where known, site, geography, reporting period, pickling acid route, rolling mill type, lubrication system, annealing and temper route, surface oiling, packing, waste treatment, and any excluded onsite operation. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pickling_and_surface_preparation | Pickling and surface preparation | required |  | foreground surface preparation | kg pickled alloy-steel strip leaving the line |
| cold_rolling | Cold rolling | required |  | foreground thickness reduction | kg as-rolled cold-reduced alloy-steel strip |
| annealing_temper_finishing_and_packing | Annealing, temper rolling, finishing, and packing | required | Annealing, temper rolling, wet temper agent, surface oiling, and each packing component apply only when performed for the reported product. | foreground final conditioning and reference-product dispatch | 1,000 kg net qualifying reference product |

### Process: Pickling and surface preparation (`pickling_and_surface_preparation`)

#### Inputs

##### Product flows

###### Hot-rolled alloy-steel feed (`hot_rolled_alloy_steel_feed`)

The received wide hot-rolled alloy-steel coil or strip is the physical feed whose oxide scale is removed before cold rolling.

- Selected flow: Hot-rolled flat alloy-steel coil or strip, excluding silicon-electrical steel
- Flow property / unit: Mass / kg
- Amount rule: measured net feed mass accepted into the pickling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_material_mass`
- Sources: `ec-jrc-fmp-bref-2022`

###### Hydrochloric acid for pickling (`hydrochloric_acid_input`)

Hydrochloric acid is recorded only when the site uses the hydrochloric-acid pickling route; purchased solution concentration is retained.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass / kg as purchased solution and kg HCl equivalent
- Amount rule: measured additions minus documented recovered solution returned to the same bath system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_acid_and_water`
- Sources: `ec-jrc-fmp-bref-2022`

###### Sulfuric acid for pickling (`sulfuric_acid_input`)

Sulfuric acid is recorded only when the site uses the sulfuric-acid pickling route; it is not combined with the hydrochloric-acid row.

- Selected flow: Sulfuric acid solution
- Flow property / unit: Mass / kg as purchased solution and kg H2SO4 equivalent
- Amount rule: measured additions minus documented recovered solution returned to the same bath system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_acid_and_water`
- Sources: `ec-jrc-fmp-bref-2022`

###### Demineralized rinse water (`demineralized_rinse_water`)

Demineralized or equivalent-quality water crossing into rinsing is recorded separately from closed-loop recirculation.

- Selected flow: Demineralized water `9385842f-1815-4f19-a6b9-3dbb7ccbbffc`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water mass entering the pickling rinse system; where only volume is metered, convert to kg using documented water density at the declared measurement conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_acid_and_water`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity for pickling (`pickling_electricity`)

Electricity used by strip handling, pumps, extraction, drying, and directly attributable pickling-line equipment is recorded at the point of use.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: stage submeter reading; otherwise a documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_energy`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pickled alloy-steel strip (`pickled_alloy_steel_strip`)

The descaled, rinsed, and dried strip leaving pickling is measured as the quantitative output of surface preparation.

- Selected flow: Pickled flat alloy-steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured output mass corrected for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process quantitative reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_material_mass`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Alloy-steel edge trim from pickling (`pickling_trim_scrap`)

Clean edge trim removed to obtain the required width is recorded as a distinct steel scrap output, including internal recycling destination.

- Selected flow: Clean alloy-steel edge trim scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed or mass-balanced trim scrap leaving the pickling process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent hydrochloric pickle liquor (`spent_hydrochloric_pickle_liquor`)

Spent hydrochloric pickle liquor is recorded when it leaves the bath system for regeneration, recovery, treatment, or disposal.

- Selected flow: Spent hydrochloric pickle liquor
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass net of liquor returned to the same process loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent sulfuric pickle liquor (`spent_sulfuric_pickle_liquor`)

Spent sulfuric pickle liquor is recorded separately when the sulfuric route transfers liquor out of the bath system.

- Selected flow: Spent sulfuric pickle liquor
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass net of liquor returned to the same process loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Acidic rinse wastewater (`acidic_rinse_wastewater`)

Acidic rinsing or scrubber water leaving the cold-rolling foreground for onsite or external treatment is recorded before treatment substitution.

- Selected flow: Acidic steel-pickling rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge or transfer volume from pickling and associated gas cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Hydrogen chloride emitted to air (`hydrogen_chloride_to_air`)

Hydrogen chloride at the pickling extraction or abatement outlet is recorded when the hydrochloric-acid route is used and the emission is measured or reportable.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured outlet mass or concentration multiplied by standardized dry gas volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg pickled alloy-steel strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Cold rolling (`cold_rolling`)

#### Inputs

##### Product flows

###### Pickled strip feed (`pickled_strip_feed`)

Pickled wide alloy-steel strip entering the rolling stands is recorded to connect the surface-preparation and rolling mass balances.

- Selected flow: Pickled flat alloy-steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the cold-rolling mill corrected for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg as-rolled cold-reduced strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_mass`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling oil (`rolling_oil_input`)

Purchased rolling oil crossing into lubrication or emulsion make-up is recorded by formulation and excludes recirculated oil remaining within the loop.

- Selected flow: Cold-rolling lubricant oil
- Flow property / unit: Mass / kg
- Amount rule: measured fresh lubricant additions net of unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg as-rolled cold-reduced strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_lubricant_and_water`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling cooling-water make-up (`rolling_cooling_water`)

Fresh water added to the rolling emulsion, direct cooling, or indirect cooling circuit is recorded without counting internally recirculated water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water mass crossing into cold-rolling cooling systems; where only volume is metered, convert to kg using documented water density at the declared measurement conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg as-rolled cold-reduced strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_lubricant_and_water`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity for cold rolling (`cold_rolling_electricity`)

Electricity used by rolling drives, strip handling, pumps, filtration, extraction, and directly attributable cooling is recorded at the point of use.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: rolling-line submeter reading; otherwise a documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg as-rolled cold-reduced strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### As-rolled cold-reduced strip (`cold_reduced_strip_output`)

Cold-reduced strip leaving the principal rolling stands is measured before any downstream annealing, temper rolling, or finishing.

- Selected flow: As-rolled cold-reduced flat alloy-steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured output mass corrected for work-in-progress inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process quantitative reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_mass`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Used rolling oil (`used_rolling_oil`)

Used lubricant removed from the rolling system and sent for external recovery, treatment, or disposal is recorded separately from oil recirculated onsite.

- Selected flow: Used cold-rolling oil
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment or tank-transfer mass leaving the rolling process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg as-rolled cold-reduced strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_waste`
- Sources: `ec-jrc-fmp-bref-2022`

###### Oily rolling wastewater (`oily_rolling_wastewater`)

Oily water or broken emulsion transferred from cold rolling to treatment is recorded as one specific waste stream before treatment.

- Selected flow: Oily cold-rolling wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured transfer volume to onsite or external wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg as-rolled cold-reduced strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_waste`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling-emulsion filter residue (`rolling_filter_residue`)

Oil-bearing filter residue or sludge removed from rolling-emulsion conditioning is recorded when it leaves the recirculation system.

- Selected flow: Oil-bearing rolling-emulsion filter residue
- Flow property / unit: Mass / kg
- Amount rule: measured waste-container or shipment mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg as-rolled cold-reduced strip output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_waste`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

### Process: Annealing, temper rolling, finishing, and packing (`annealing_temper_finishing_and_packing`)

#### Inputs

##### Product flows

###### Cold-reduced strip feed (`cold_reduced_strip_feed`)

Cold-reduced strip entering the final conditioning sequence is recorded whether it goes directly to finishing or first undergoes annealing and temper rolling.

- Selected flow: As-rolled cold-reduced flat alloy-steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the final conditioning sequence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_and_packaging`
- Sources: `ec-jrc-fmp-bref-2022`

###### Natural gas for annealing (`annealing_natural_gas`)

Gaseous natural gas is recorded only for gas-fired annealing or directly attributable thermal conditioning; furnace type and reference volume conditions are declared.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: corrected meter volume consumed by applicable annealing furnaces
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy_and_gases`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity for annealing and finishing (`annealing_finishing_electricity`)

Electricity used by electric annealing where applicable, furnace auxiliaries, temper rolling, straightening, slitting, cutting, inspection, oiling, packing, and material handling is recorded at point of use.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sequence submeter reading; otherwise a documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy_and_gases`
- Sources: `ec-jrc-fmp-bref-2022`

###### Protective nitrogen (`protective_nitrogen`)

Nitrogen supplied to an annealing protective atmosphere is recorded only when that atmosphere is used, with purity and delivery state declared.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3 at declared reference conditions
- Amount rule: measured delivered or metered nitrogen volume consumed by the annealing sequence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy_and_gases`
- Sources: `ec-jrc-fmp-bref-2022`

###### Protective hydrogen (`protective_hydrogen`)

Hydrogen supplied to an annealing protective atmosphere is recorded separately when used; it is not combined with nitrogen.

- Selected flow: Industrial hydrogen gas
- Flow property / unit: Volume / m3 at declared reference conditions
- Amount rule: measured delivered or metered hydrogen volume consumed by the annealing sequence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy_and_gases`
- Sources: `ec-jrc-fmp-bref-2022`

###### Wet temper-rolling agent (`temper_rolling_agent`)

The formulated wet temper-rolling agent is recorded only when wet temper rolling is applied; dry temper rolling has no amount on this row.

- Selected flow: Wet temper-rolling agent
- Flow property / unit: Mass / kg
- Amount rule: measured fresh agent issued to the temper mill net of unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_and_packaging`
- Sources: `ec-jrc-fmp-bref-2022`

###### Anticorrosion oil (`anticorrosion_oil`)

Anticorrosion oil crossing onto the delivered steel surface is recorded only for oiled product, with formulation and retained-on-product status declared.

- Selected flow: Anticorrosion oil for steel strip
- Flow property / unit: Mass / kg
- Amount rule: measured oil consumption adjusted for recovered overspray returned to the same system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_and_packaging`
- Sources: `ec-jrc-fmp-bref-2022`

###### Steel dispatch strapping (`steel_strapping`)

Steel bands used to secure the dispatched coil, strip, or sheet are recorded separately when included in the declared packing state.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-and-inventory-reconciled strap mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_and_packaging`
- Sources: `ec-jrc-fmp-bref-2022`

###### Protective packaging paper (`packaging_paper`)

Paper wrapping or interleaving supplied with the product is recorded separately when used.

- Selected flow: Protective packaging paper
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-and-inventory-reconciled paper mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_and_packaging`
- Sources: `ec-jrc-fmp-bref-2022`

###### Wooden dispatch pallet or skid (`wooden_pallet`)

The wooden pallet or skid crossing the factory gate with the product is recorded when used; reusable pallets retained by the producer are excluded.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of pallets or skids shipped with the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_and_packaging`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference cold-rolled alloy-steel product (`reference_cold_rolled_alloy_steel`)

This is the net qualifying CPC 41223 product after all reported included operations and before transport beyond the producer factory gate.

- Selected flow: Flat-rolled products of alloy steel (except of silicon-electrical steel), not further worked than cold-rolled, of a width of 600 mm or more `d572d61f-b115-4a81-a187-8d7d111a0d65`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output of 1,000 kg net product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: External source (`external_source`)
- Sources: `un-cpc-3-0-2025`; `worldsteel-lci-methodology-2017`

##### Waste flows

###### Alloy-steel trim from finishing (`finishing_trim_scrap`)

Clean trimming, slitting, or defective alloy-steel portions removed during finishing are recorded as a distinct scrap output with destination.

- Selected flow: Clean alloy-steel finishing trim scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass leaving finishing, corrected for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent wet temper-rolling agent (`spent_temper_rolling_agent`)

Spent temper-rolling solution leaving the process for treatment or disposal is recorded only when wet temper rolling is used.

- Selected flow: Spent wet temper-rolling agent
- Flow property / unit: Mass / kg
- Amount rule: measured transfer or shipment mass leaving the temper-rolling system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide from onsite fuel combustion (`fossil_carbon_dioxide`)

Direct fossil carbon dioxide from gas-fired annealing or other included onsite fuel combustion is recorded at the emission boundary and is not substituted by the upstream fuel dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: verified stack, fuel-carbon-balance, or regulated emissions-ledger mass attributable to included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Nitrogen oxides emitted to air (`nitrogen_oxides_to_air`)

Nitrogen oxides from included annealing combustion are recorded according to the site's monitored species and reporting convention, which must be declared.

- Selected flow: Nitrogen oxides to air, reported as declared NOx convention
- Flow property / unit: Mass / kg
- Amount rule: measured outlet concentration multiplied by standardized dry gas volume, or verified regulated emissions record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Carbon monoxide emitted to air (`carbon_monoxide_to_air`)

Carbon monoxide from included annealing combustion is recorded when measured or reportable at the furnace emission point.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured outlet concentration multiplied by standardized dry gas volume, or verified regulated emissions record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_waste_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | all foreground processes | Subdivide by process line, meter, campaign, and product family before allocation; assign directly measured inputs, outputs, wastes, and emissions to the product that caused them. | `worldsteel-lci-methodology-2017` |
| `allocation_shared_energy` | shared electricity, fuel, steam, compressed air, and cooling | Use direct metering first; otherwise use a documented physical relationship such as equipment operating time and rated load, delivered energy, or thermal duty. Mass allocation is permitted only when no more causal parameter exists and must be sensitivity-tested for material shared burdens. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_scrap` | internally recycled steel trim and scrap | Record generation and destination, but do not count internally recirculated scrap as both an external waste credit and an external scrap input; disclose any recycling model applied outside this foreground transformation. | `worldsteel-lci-methodology-2017` |
| `allocation_co_product_expansion` | exported recovered acid, iron oxide, or other recovered material | Prefer system expansion only when the displaced product, functional equivalence, market use, and substitution ratio are documented; otherwise report the output separately and disclose the selected justified partitioning method and sensitivity. | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pickling_material_mass | pickling_and_surface_preparation | steel feed, pickled output, and inventory | weighbridge, coil tracking, and inventory record | coil id; grade; width; thickness; input kg; output kg; opening and closing WIP kg | calibrated scale plus coil production system | kg | per coil or lot | same representative reporting period, normally 12 consecutive months | each included pickling line | reconcile input, output, scrap, and WIP; normalize to pickled output | calibration certificate; coil genealogy; signed mass balance |
| cp_pickling_acid_and_water | pickling_and_surface_preparation | acid and rinse-water inputs | purchase, tank, concentration, and meter record | chemical id; concentration; received kg; tank change; recovered return; water m3; meter id | tank balance and calibrated water meter | kg; m3 | per delivery and daily or batch meter read | same reporting period as product mass | each included bath and rinse train | net external addition divided by pickled output | supplier certificate; tank calibration; meter calibration; route log |
| cp_pickling_energy | pickling_and_surface_preparation | pickling electricity | interval meter or allocated shared-meter record | meter id; kWh; start and end time; production kg; voltage; supplier or grid mix; allocation driver | calibrated electricity meter | kWh retained; MJ reported | continuous or per shift | same reporting period as product mass | included pickling equipment and auxiliaries | sum kWh, subtract documented non-process loads, convert by 3.6, normalize to output | meter calibration; energy invoice; allocation worksheet |
| cp_pickling_waste_and_emissions | pickling_and_surface_preparation | trim, spent liquor, wastewater, and HCl emission | waste shipment, tank transfer, effluent meter, stack test, or CEMS record | stream id; mass or volume; concentration; gas volume; treatment destination; route; date | calibrated scale or meter and accredited monitoring where applicable | kg; m3 | per transfer and monitoring event | representative operating period including abnormal operation | pickling line and associated abatement | aggregate each atomic stream separately and normalize to pickled output | manifests; laboratory report; monitor QA; treatment receipt |
| cp_rolling_material_mass | cold_rolling | pickled feed and cold-reduced output | coil tracking and inventory record | coil id; grade; input kg; output kg; opening and closing WIP kg | calibrated scale plus coil production system | kg | per coil or lot | same reporting period as rolling utilities and wastes | each included rolling mill | reconcile feed, output, and WIP; normalize to cold-reduced output | calibration certificate; coil genealogy; signed balance |
| cp_rolling_lubricant_and_water | cold_rolling | fresh rolling oil and cooling-water make-up | purchase, tank, issue, return, and meter record | formulation; fresh oil kg; return kg; tank change; water m3; circuit type | tank balance and calibrated water meter | kg; m3 | daily or per batch | same reporting period as rolling output | each lubricant and cooling circuit | count only external make-up crossing the boundary and normalize to output | supplier record; tank calibration; meter calibration; circuit diagram |
| cp_rolling_energy | cold_rolling | cold-rolling electricity | interval meter or allocated shared-meter record | meter id; kWh; mill id; operating time; output kg; allocation driver | calibrated electricity meter | kWh retained; MJ reported | continuous or per shift | same reporting period as rolling output | mill drives and directly attributable auxiliaries | sum kWh, convert by 3.6, normalize to output | meter calibration; energy invoice; allocation worksheet |
| cp_rolling_waste | cold_rolling | used oil, oily wastewater, and filter residue | waste tank, treatment, and shipment record | stream id; kg or m3; solids or oil content; destination; date | calibrated tank, scale, or flow meter | kg; m3 | per transfer or shipment | same reporting period as rolling output | rolling and emulsion-conditioning systems | aggregate each waste separately and normalize to output | manifest; treatment receipt; laboratory analysis |
| cp_finishing_material_and_packaging | annealing_temper_finishing_and_packing | steel feed, final product, conditional agents, oil, and packing | coil tracking, material issue, packing, and inventory record | coil id; feed kg; product kg; agent kg; oil kg; strap kg; paper kg; pallet kg; operation status | calibrated scale and production or warehouse system | kg | per coil or shipment | same reporting period as finishing utilities and emissions | included annealing, temper, finishing, and packing operations | aggregate each atomic exchange, reconcile inventory, normalize to 1,000 kg net product | calibration; coil genealogy; issue record; packing bill |
| cp_finishing_energy_and_gases | annealing_temper_finishing_and_packing | natural gas, electricity, nitrogen, and hydrogen | utility meter and supplier record | meter id; gas m3; volume conditions; electricity kWh; nitrogen m3; hydrogen m3; furnace and line status | calibrated meters and supplier statements | m3; kWh retained; MJ reported | continuous or per batch | same reporting period as final product | included furnaces, lines, and auxiliaries | allocate causally, convert electricity by 3.6, normalize to 1,000 kg product | meter calibration; invoice; batch log; allocation worksheet |
| cp_finishing_waste_and_emissions | annealing_temper_finishing_and_packing | trim, spent agent, CO2, NOx, and CO | scale, waste shipment, CEMS, stack test, fuel-carbon balance, or regulated ledger | stream id; kg; concentration; standardized gas volume; oxygen reference; fuel carbon data; destination; date | calibrated scale and verified monitoring or ledger method | kg | per batch, shipment, or monitoring event | representative period covering applicable furnace operation | finishing operations and their emission points | aggregate each atomic stream and normalize to 1,000 kg net product | manifest; accredited test; CEMS QA; verified emissions statement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_pickling_exchange | pickling inventory rows | normalized amount = reporting-period exchange / reporting-period pickled-strip output | cp_pickling_material_mass; cp_pickling_acid_and_water; cp_pickling_energy; cp_pickling_waste_and_emissions | amount per kg pickled-strip output | `ec-jrc-fmp-bref-2022` |
| normalize_rolling_exchange | cold-rolling inventory rows | normalized amount = reporting-period exchange / reporting-period cold-reduced-strip output | cp_rolling_material_mass; cp_rolling_lubricant_and_water; cp_rolling_energy; cp_rolling_waste | amount per kg cold-reduced-strip output | `ec-jrc-fmp-bref-2022` |
| normalize_reference_exchange | final conditioning inventory rows | normalized amount = reporting-period exchange / reporting-period net reference-product kg * 1,000 | cp_finishing_material_and_packaging; cp_finishing_energy_and_gases; cp_finishing_waste_and_emissions | amount per 1,000 kg net reference product | `worldsteel-lci-methodology-2017` |
| convert_electricity_kwh_to_mj | all electricity rows | reported MJ = metered kWh * 3.6 | original kWh; meter identity | electricity in MJ with original kWh retained |  |
| reconcile_process_steel_mass | each foreground process | steel input + opening WIP = conforming steel output + steel scrap + other measured steel-bearing output + closing WIP; investigate and disclose residual | material mass protocol for the process | reconciled mass balance and residual | `worldsteel-lci-methodology-2017` |
| calculate_stack_mass | HCl, NOx, and CO emissions when concentration data are used | emitted mass = validated concentration * standardized dry gas volume, adjusted to the declared oxygen and moisture basis where applicable | concentration; gas volume; time; oxygen; moisture; monitor QA | kg emitted species | `ec-jrc-fmp-bref-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_product_identity | reference product and intermediates | Preserve coil genealogy, alloy-grade standard and chemistry designation, silicon-electrical exclusion, ordered and measured width and thickness, cold-reduction state, surface and temper state, and coating status. | coil route card; inspection certificate; order specification |
| dq_temporal_representativeness | all foreground rows | Use one aligned representative reporting period, normally 12 consecutive months; disclose shutdowns, abnormal operation, campaign changes, and any shorter period. | dated production, utility, waste, and emissions records |
| dq_geographic_technology | upstream datasets and utilities | Match the production geography, supplier route, electricity supply, rolling-mill type, pickling acid route, lubrication circuit, and annealing technology as closely as available; disclose substitutions. | supplier declaration; dataset metadata; site process description |
| dq_measurement | meters, scales, tanks, and monitors | Use calibrated devices within their valid calibration period and retain raw values, units, reference conditions, detection limits, and correction factors. | calibration certificates; QA logs; raw export |
| dq_completeness | process inventory | Reconcile all three process sections and document every excluded or non-applicable atomic exchange; unexplained mass-balance residuals and unassigned shared utilities require correction. | signed mass balance; completeness checklist; allocation worksheet |
| dq_source_and_uuid_status | evidence and flow identity | Preserve source references and flag every unresolved Tiangong flow UUID; no proxy flow may be silently substituted for a specific product, chemical, waste, or elementary emission. | source register; UUID audit; unresolved manifest entries |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm net output equals 1,000 kg and all required qualifiers establish alloy grade, non-silicon-electrical status, width at least 600 mm, cold-rolled state, absence of further working, and factory-gate state. | `un-cpc-3-0-2025`; `worldsteel-lci-methodology-2017` |
| `validate_process_alignment` | process map and inventory | Confirm required process sections exist, conditional operations are explicitly present or absent, and every inventory card is one atomic exchange linked to the stated process, direction, and flow type. | `ec-jrc-fmp-bref-2022` |
| `validate_mass_balance` | each process and total foreground chain | Perform steel and total-mass balance checks on aligned periods; investigate and disclose residuals rather than forcing the reference output to close. | `worldsteel-lci-methodology-2017` |
| `validate_energy_and_gas_units` | electricity and natural gas | Confirm kWh-to-MJ conversion, meter coverage, shared-meter allocation, and natural-gas reference volume conditions; reject unitless energy or gas values. | `worldsteel-lci-methodology-2017` |
| `validate_waste_and_emission_boundaries` | wastes and elementary emissions | Confirm wastes are recorded before linked treatment or recovery, direct onsite emissions are not duplicated in upstream fuel datasets, and monitoring basis and abatement outlet are declared. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_no_double_counting` | upstream, scrap, recovery, and recycling models | Confirm hot-rolled feed burdens, internal scrap, exported scrap, recovered chemicals, waste treatment, and any recycling credit are each represented once with the selected allocation model disclosed. | `worldsteel-lci-methodology-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after review and publication |
| downstream_use | Foreground process construction and cradle-to-gate product systems needing wide cold-rolled non-silicon-electrical alloy-steel input |
| allowed_use | Use for the declared alloy grade, width, thickness, surface and temper condition, production route, site or represented geography, technology, and reporting period; aggregate sites only with production-weighted rules disclosed. |
| excluded_use | Silicon-electrical steel, unqualified generic alloy steel, width below 600 mm, coated or further-fabricated products, comparative public claims without an appropriate application-specific functional unit and review, or regions and technologies outside disclosed representativeness |
| required_metadata | canonical PCR id; CPC reference; reference-flow qualifiers; producer and geography; period; alloy grade; dimensions; product form; surface, temper, edge, coating, and packing state; upstream feed dataset; pickling, rolling, annealing, and finishing routes; allocation and recycling method; UUID status |
| required_quality_disclosure | primary-data share; meter and scale coverage; mass-balance residuals; temporal, geographic, and technology representativeness; shared-utility allocation; conditional operations; waste treatment; emissions monitoring; unresolved UUIDs and external range-evidence needs |
| update_trigger | Change of alloy family, width or thickness range, pickling chemistry, mill or lubrication technology, annealing fuel or atmosphere, finishing and packing specification, site or electricity supply, upstream feed dataset, allocation or recycling method, or reporting period beyond the declared validity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure, row 41223, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-09-03) | Official classification identity, material state, width threshold, and exclusions expressed by the CPC title |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, 2022, DOI 10.2760/196475. https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 (accessed 2026-09-03) | Cold-rolling process sequence; pickling acids and rinsing; rolling lubrication and cooling; annealing atmospheres and fuels; tempering, finishing, packing, waste, wastewater, and monitored-emission candidates |
| `worldsteel-lci-methodology-2017` | `handbook` | World Steel Association, Life cycle inventory methodology report for steel products, 2017, ISBN 978-2-930069-89-0. https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (accessed 2026-09-03) | Factory-gate declared unit, cradle-to-gate boundary linkage, steel product process chain, data quality, mass balance, co-product allocation, scrap and no-double-counting rules |
