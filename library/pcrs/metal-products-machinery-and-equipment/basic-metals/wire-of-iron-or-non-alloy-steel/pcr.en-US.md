---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-iron-or-non-alloy-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wire of iron or non-alloy steel

## 1. Scope and Applicability

This PCR covers unpackaged wire of iron or non-alloy steel manufactured from received hot-rolled wire rod by pretreatment, cold drawing, and the heat-treatment or finishing operations actually used. Uncoated wire, zinc-coated wire, wire coated with another declared base metal, and other wire within the declared product identity are included when the foreground data package identifies the exact route and product state. The official HS breakdown is used only to interpret the states contained within the CPC identity; it does not create separate PCR identities.

The foreground boundary begins when wire rod is received at the wire-manufacturing site and ends when conforming finished wire is released at that site's gate before reels, pallets, wrapping, transport, use, downstream fabrication into articles, and end-of-life. Production of wire rod and every other purchased input remains upstream and requires qualified background data. Stainless-steel wire, alloy-steel wire, insulated electrical wire, stranded wire, wire rope, welded mesh, fencing, nails, springs, and other fabricated articles are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-iron-or-non-alloy-steel |
| classification_refs | CPC 3.0 41263, exact product-category context; HS 2012 heading 7217, interpretive product-state context |
| covered_products | Unpackaged iron or non-alloy steel wire, whether uncoated, zinc-coated, coated with another declared base metal, or otherwise included in HS heading 7217, after the declared wire-drawing and finishing route |
| excluded_products | Stainless-steel wire; other alloy-steel wire; insulated wire; stranded wire and wire rope; barbed wire, mesh and fencing; nails, springs, electrodes and other fabricated articles; packaging |
| representative_product | Saleable iron or non-alloy steel wire of declared grade, nominal diameter, mechanical condition and coating state |
| production_route | Received hot-rolled wire rod; mechanical descaling or acid pickling; dry or wet drawing; conditional heat treatment; declared finishing and conditional metallic coating |
| market_state | Dry, saleable wire at the manufacturing-site gate before packaging, with coating state and surface condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide finished iron or non-alloy steel wire meeting the purchaser-declared dimensional, grade, mechanical and surface requirements |
| How much | 1,000 kg net mass of conforming unpackaged wire |
| How well | The foreground data package declares nominal diameter and tolerance, steel grade or chemistry, mechanical condition, heat-treatment route, surface finish and coating material and coating mass where applicable |
| How long or cycle | One released production lot at the manufacturing-site gate; no use-life function is claimed |
| reference_flow_link | The reference flow is the net mass of `reference_product_wire` released from `wire_drawing_and_finishing` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`; exact CPC 41263 identity, with the declared grade, coating state, geography, technology and manufacturing-site gate supplied by foreground qualifiers |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturing-site geography; reporting period; iron or non-alloy steel grade or chemistry; wire-rod origin and state; nominal diameter and tolerance; mechanical or tensile condition; dry or wet drawing; heat-treatment route or none; coating material and coating mass or uncoated; surface finish; technology; unpackaged gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-based inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use verified net mass after all declared finishing and before packaging. Exclude reel, carrier and packaging mass. Normalize all inventory amounts to 1,000 kg conforming reference product. |
| `electricity_energy` | Electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter readings and billing units. Convert kWh to MJ by multiplying by 3.6 and retain the original reading, conversion and meter scope. |
| `natural_gas_volume` | Gaseous natural-gas input | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered gas volume at the declared reference temperature and pressure and retain supplier geography, delivery boundary, net calorific value and meter scope. Do not treat volumes at different reference conditions as equivalent without conversion. |
| `coating_mass` | Metallic coating inputs and finished coated wire | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each coating substance as one atomic input and reconcile purchased, returned, recovered, wasted and retained coating mass for the reporting period. |
| `route_separation` | All measured quantities | Applicable row property | Applicable row unit | Keep acid-pickling, mechanical-descaling, dry-drawing, wet-drawing, heat-treatment and coating records separated. Production-weighted aggregation is permitted only after each route is normalized independently. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Hot-rolled iron or non-alloy steel wire rod received at the wire-manufacturing site, with grade, dimensions, surface state, supplier geography and upstream dataset identified |
| starting_condition_role | Purchased product input and foreground starting condition |
| product_classification_scope | Iron or non-alloy steel wire within CPC 3.0 41263, including the declared uncoated or base-metal-coated state; excludes alloy, stainless, insulated, stranded and fabricated wire articles |
| recursive_input_rule | Any externally purchased wire already within this same product category is recorded as a separate qualified product input with its own upstream dataset and is not relabelled as wire rod or silently absorbed into site yield |
| upstream_dataset_requirement | Use a geographically, technologically and temporally representative cradle-to-supplier-gate dataset for wire rod and each purchased material or energy input; disclose substitutions and unmatched product states |
| disclosure | Declare starting wire-rod grade and state, pretreatment and drawing routes, heat treatment, coating route, foreground site and period, energy delivery qualifiers, waste destinations, excluded packaging and transport, and any shared-operation allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_wire_rod_start` | foreground_boundary | Begin with received wire rod and include its pretreatment, dry or wet drawing, applicable heat treatment, finishing, site wastes and direct emissions through release of unpackaged finished wire. | `ec-jrc-fmp-bref-2022` |
| `sb_upstream_inputs` | upstream_requirements | Model wire rod, acids, water, lubricants, coating chemicals, electricity and fuel with qualified upstream datasets; do not duplicate their upstream production inside the foreground processes. | `worldsteel-lci-methodology-2017` |
| `sb_product_state` | route_applicability | Include only the treatment and coating operations actually performed for the declared reference product; do not substitute a galvanised, heat-treated or uncoated route for another state without disclosure. | `unsd-hs-2012-7217`, `ec-jrc-fmp-bref-2022` |
| `sb_packaging_transport` | excluded_processes | Exclude reels, pallets, wrapping, outbound transport, downstream fabrication, use and end-of-life from this foreground boundary; disclose any study extension separately. | `worldsteel-lci-methodology-2017` |
| `sb_atomic_completeness` | foreground_inventory | Add every material, energy, waste and elementary exchange that actually crosses the site boundary as its own concrete atomic row, even when it is not among the minimum rows below. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wire_rod_pretreatment` | Wire-rod pretreatment | required | One declared pretreatment route is required; acid-specific rows apply only to the acid used and scale applies to mechanical descaling or separately recovered scale | Prepare received wire rod for drawing by mechanical descaling or acid pickling and rinsing | External inputs and wastes normalized to 1,000 kg conforming finished wire |
| `wire_drawing_and_finishing` | Wire drawing and finishing | required | Drawing is required; lubricant, heat-treatment and zinc-coating rows apply only when those exact operations and substances are used | Reduce wire-rod cross-section through dies and perform the declared heat treatment, finishing and coating before product release | External inputs, outputs and direct emissions normalized to 1,000 kg conforming finished wire |

### Process: Wire-rod pretreatment (`wire_rod_pretreatment`)

#### Inputs

##### Product flows

###### Received hot-rolled wire rod (`wire_rod_input`)

Record the qualified wire rod that enters the site foreground boundary. Keep grade, diameter, surface state, supplier and upstream dataset aligned with the finished-wire lot.

- Selected flow: Hot-rolled wire rod of iron or non-alloy steel
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass issued to production, adjusted only for documented opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_material_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Hydrochloric acid for pickling (`hydrochloric_acid_input`)

Record hydrochloric acid only when it crosses the boundary for the declared pickling route. Preserve supplied concentration and distinguish make-up from internally recirculated liquor.

- Selected flow: Hydrochloric acid
- Flow property / unit: Mass / kg
- Amount rule: Purchased or transferred solution mass multiplied by its documented hydrochloric-acid mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for hydrochloric-acid pickling lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_material_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Sulfuric acid for pickling (`sulfuric_acid_input`)

Record sulfuric acid only when it crosses the boundary for the declared pickling route. Preserve supplied concentration and distinguish make-up from internally recirculated liquor.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Purchased or transferred solution mass multiplied by its documented sulfuric-acid mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for sulfuric-acid pickling lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_material_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Pickling and rinse water (`pickling_rinse_water_input`)

Record fresh process water supplied to acid-bath make-up and post-pickling rinsing. Exclude water recirculated wholly inside the foreground boundary from external input totals.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered fresh process-water mass attributable to pretreatment, or metered volume converted with a documented contemporaneous density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for acid-pickled lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy_meters`
- Sources: `ec-jrc-fmp-bref-2022`

###### Electricity for pretreatment (`pretreatment_electricity`)

Record alternating-current electricity delivered to pretreatment equipment. The data package must declare supplier, geography, voltage, generation or supply technology and delivery boundary.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity for pretreatment, or documented allocation from a shared meter using operating time and rated load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_energy_meters`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Removed iron-oxide scale (`iron_oxide_scale_output`)

Record dry or dewatered iron-oxide scale removed from wire rod when it leaves the site for recovery or treatment. State moisture and contamination basis.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched mass corrected to the declared dry or as-dispatched basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for lots generating separately recovered scale
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent hydrochloric pickling liquor (`spent_hydrochloric_pickling_liquor_output`)

Record spent hydrochloric pickling liquor when transferred outside the foreground boundary. Preserve acid and dissolved-metal concentration, water content and destination.

- Selected flow: Spent hydrochloric pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-calculated dispatched liquor mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for hydrochloric-acid pickling lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Spent sulfuric pickling liquor (`spent_sulfuric_pickling_liquor_output`)

Record spent sulfuric pickling liquor when transferred outside the foreground boundary. Preserve acid and dissolved-metal concentration, water content and destination.

- Selected flow: Spent sulfuric pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-calculated dispatched liquor mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for sulfuric-acid pickling lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

### Process: Wire drawing and finishing (`wire_drawing_and_finishing`)

#### Inputs

##### Product flows

###### Electricity for drawing and finishing (`drawing_electricity`)

Record alternating-current electricity delivered to drawing, cooling circulation, handling and finishing equipment. The data package must declare supplier, geography, voltage, technology and delivery boundary.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity for drawing and finishing, or documented allocation from a shared meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_energy_meters`
- Sources:

###### Calcium stearate dry-drawing lubricant (`calcium_stearate_input`)

Record calcium stearate only for lots using that dry-drawing lubricant. Do not substitute a generic lubricant category for the purchased substance.

- Selected flow: Calcium stearate
- Flow property / unit: Mass / kg
- Amount rule: Purchased mass plus opening stock minus closing stock and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for applicable dry-drawing lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_material_records`
- Sources:

###### Mineral-oil wet-drawing lubricant (`mineral_oil_drawing_lubricant_input`)

Record mineral-oil drawing lubricant only for lots using that wet-drawing medium. Preserve commercial formulation, oil content and water dilution separately.

- Selected flow: Mineral-oil wire-drawing lubricant
- Flow property / unit: Mass / kg
- Amount rule: Neat lubricant purchased plus opening stock minus closing stock and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for applicable wet-drawing lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_material_records`
- Sources:

###### Natural gas for heat treatment (`natural_gas_input`)

Record gaseous natural gas only when a fuel-fired annealing, patenting or other declared heat-treatment step is used. Preserve supply geography, furnace technology and reference-volume conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume attributable to the declared heat-treatment lots at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for fuel-fired heat-treated lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_fuel_and_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Electricity for heat treatment (`heat_treatment_electricity`)

Record alternating-current electricity only when electric heat treatment is used, separate from drawing electricity. Declare supplier, geography, voltage, technology and delivery boundary.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electric-furnace electricity or documented allocation from a shared meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for electrically heat-treated lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_energy_meters`
- Sources: `ec-jrc-fmp-bref-2022`

###### Zinc for continuous galvanising (`zinc_input`)

Record zinc only for zinc-coated reference products. Reconcile zinc charged, returned, recovered, lost in ash and retained on saleable wire.

- Selected flow: Zinc metal
- Flow property / unit: Mass / kg
- Amount rule: Zinc charged plus opening stock minus closing stock, documented returns and internally recovered zinc
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged zinc-coated finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_material_records`
- Sources: `ec-jrc-fmp-bref-2022`, `unsd-hs-2012-7217`

###### Ammonium chloride for galvanising flux (`ammonium_chloride_input`)

Record ammonium chloride only when it is a separately supplied constituent of the declared continuous-wire galvanising flux.

- Selected flow: Ammonium Chloride `0d0e3c27-1f93-4dc1-80d0-392a3226cd4f`
- Flow property / unit: Mass / kg
- Amount rule: Supplied flux-salt mass multiplied by documented ammonium-chloride mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged zinc-coated finished wire using this flux constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_material_records`
- Sources: `ec-jrc-fmp-bref-2022`

###### Zinc chloride for galvanising flux (`zinc_chloride_input`)

Record zinc chloride only when it is a separately supplied constituent of the declared continuous-wire galvanising flux.

- Selected flow: Zinc chloride `e5d10a05-c796-4974-9871-fad1bfb5ddb8`
- Flow property / unit: Mass / kg
- Amount rule: Supplied flux-salt mass multiplied by documented zinc-chloride mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged zinc-coated finished wire using this flux constituent
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_material_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished wire (`reference_product_wire`)

Record the net mass of saleable iron or non-alloy steel wire released after every declared drawing, heat-treatment, finishing and coating operation and before packaging.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Verified net released mass of conforming unpackaged finished wire
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_material_records`
- Sources: `unsd-cpc-3-0-2025`, `unsd-hs-2012-7217`

##### Waste flows

###### Iron or non-alloy steel drawing scrap (`steel_scrap_output`)

Record offcuts, wire breaks and rejected iron or non-alloy steel that leave the foreground boundary as scrap. Do not net external recycling credits into this mass.

- Selected flow: Waste steel wire `89e89b90-d82e-4631-b2ab-cd3c5986ca0e`
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap dispatched off site, adjusted for documented opening and closing scrap stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Spent calcium-stearate drawing lubricant (`spent_calcium_stearate_lubricant_output`)

Record spent calcium-stearate lubricant that leaves the boundary for treatment or recovery, separately from metal scrap and other lubricants.

- Selected flow: Spent calcium-stearate wire-drawing lubricant
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched waste mass on the declared contamination and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for applicable dry-drawing lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Spent mineral-oil drawing lubricant (`spent_mineral_oil_lubricant_output`)

Record spent mineral-oil drawing lubricant that leaves the boundary for treatment or recovery, with water and metal contamination disclosed.

- Selected flow: Spent mineral-oil wire-drawing lubricant
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched waste mass on the declared contamination and water-content basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for applicable wet-drawing lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Zinc ash from wire galvanising (`zinc_ash_output`)

Record zinc ash removed from the galvanising bath when it leaves the boundary, with zinc content, moisture and recovery destination disclosed.

- Selected flow: Zinc ash from continuous wire galvanising
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched zinc-ash mass on the declared composition basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged zinc-coated finished wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air`)

Record fossil carbon dioxide released from foreground natural-gas combustion for heat treatment. Prefer source-specific measurement; otherwise calculate transparently from collected fuel activity and documented carbon and oxidation factors.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured foreground stack mass or calculated fossil carbon-dioxide mass from collected natural-gas activity and documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming unpackaged finished wire for fuel-fired heat-treated lots
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_fuel_and_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared_operations | Avoid allocation by separately metering or otherwise subdividing pretreatment, drawing, heat treatment, coating and unrelated production lines wherever practicable. | `eu-pef-method-2021` |
| `allocation_physical_driver` | shared_inputs_and_outputs | When subdivision is not possible, allocate a shared flow using a documented causal physical driver such as route-specific operating time, metered load, bath throughput or processed mass; do not use finished mass when it does not represent the driver. | `eu-pef-method-2021` |
| `allocation_other_relationship` | residual_multifunctionality | Use another relationship only after documenting why subdivision, system expansion and a relevant physical relationship are not feasible; disclose the basis and test its influence on the result. | `eu-pef-method-2021` |
| `allocation_scrap` | steel_scrap_and_recovered_material | Report scrap, spent liquor, lubricant waste and zinc ash at the foreground boundary without an avoided-product credit in this foreground inventory. Any downstream recycling or substitution model must be declared separately so the same benefit is not counted twice. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_and_material_records` | `wire_rod_pretreatment`; `wire_drawing_and_finishing` | wire rod, product, acids, lubricants, zinc and flux salts | calibrated scales, purchase and issue records, stock records, certificates and production releases | lot id; material identity; grade or concentration; opening stock; receipts; returns; closing stock; released product mass; coating state | Reconcile each atomic material over the reporting period and link it to applicable production lots | kg and documented mass fraction | each receipt, issue, stock close and product release | Complete declared reporting period including all included lots | foreground wire-manufacturing site | Calculate consumed mass by substance, normalize each route to conforming released mass, then production-weight declared compatible lots | scale calibration; supplier certificate; stock reconciliation; lot traceability |
| `cp_water_and_energy_meters` | `wire_rod_pretreatment`; `wire_drawing_and_finishing` | fresh process water and electricity | utility meters, submeters and invoices | meter id; start and end reading; unit; process scope; water density when volume is converted to mass; voltage; supplier; geography; technology; downtime; allocation driver | Read dedicated meters where available; otherwise reconcile the facility meter and document the causal allocation | kg and m3 for water; kWh and MJ for electricity | each billing or meter-reading interval | Complete declared reporting period | foreground site and identified shared services | Subtract documented non-process uses, convert water volume to mass only with a documented density, convert electricity units, allocate only unresolved shared use, and normalize by conforming route output | meter calibration or invoice reconciliation; density record; allocation worksheet; delivery qualifiers |
| `cp_waste_records` | `wire_rod_pretreatment`; `wire_drawing_and_finishing` | scale, spent liquor, steel scrap, spent lubricants and zinc ash | scales, tank volume and density, waste manifests and stock records | waste identity; mass or volume; density; composition; moisture; opening and closing stock; destination; recovery or treatment code | Measure each waste stream separately at dispatch and retain composition basis | kg, m3 and kg/m3 where applicable | each dispatch and stock close | Complete declared reporting period | foreground site | Convert volume to mass only with contemporaneous density; reconcile stock and normalize by applicable route output | scale calibration; laboratory analysis where needed; signed manifest; destination evidence |
| `cp_heat_treatment_fuel_and_emissions` | `wire_drawing_and_finishing` | natural gas and fossil carbon dioxide | gas meter, supplier statement, furnace log, stack measurement and approved factor record | meter readings; reference temperature and pressure; net calorific value; furnace and lot ids; measured carbon dioxide or factor identity; carbon content; oxidation factor | Link fuel to heat-treated lots and use direct emissions measurement where available; otherwise retain every input to the calculation | m3, MJ and kg | each meter interval and heat-treatment campaign | Complete declared reporting period for fuel-fired heat-treated lots | foreground furnaces within the site | Convert gas to declared reference conditions, calculate or aggregate fossil carbon dioxide, and normalize by conforming heat-treated output | meter calibration; supplier fuel statement; stack record or approved factor provenance; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = reporting-period row amount / conforming unpackaged finished-wire mass × 1,000 | route-specific row amount; conforming unpackaged finished-wire mass | row amount per 1,000 kg reference product | `worldsteel-lci-methodology-2017` |
| `calc_material_content` | acids, formulated lubricant and flux constituents | pure-substance mass = supplied mixture mass × documented mass fraction; do not report both mixture and constituent for the same input unless boundaries are explicitly separated | supplied mass; supplier mass fraction | kg atomic substance input |  |
| `calc_electricity_conversion` | electricity rows | MJ = kWh × 3.6 | original meter reading in kWh | MJ electricity |  |
| `calc_shared_meter` | shared water, electricity or fuel meter | allocated flow = reconciled shared-meter flow × documented causal driver share | shared-meter total; excluded uses; route driver data | route-specific foreground flow | `eu-pef-method-2021` |
| `calc_fossil_co2` | `fossil_co2_air` | Use measured fossil carbon dioxide; if unavailable, calculate from reference-condition fuel activity, net calorific value, documented fossil-carbon factor and oxidation factor without inserting a PCR default factor | natural-gas record; net calorific value; factor provenance; oxidation factor | kg fossil carbon dioxide |  |
| `calc_mass_reconciliation` | iron-bearing and coating mass balance | Reconcile wire rod, saleable wire, steel scrap, retained coating, recoverable returns and separately measured wastes on consistent moisture and stock bases; investigate and disclose residuals rather than forcing closure | mass and stock records by route | documented mass-balance residual and corrected normalized inventory |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and wire rod | Retain lot-linked grade or chemistry, nominal diameter, mechanical condition, surface state, coating identity and upstream wire-rod source. | product specification, inspection release and supplier certificate |
| `dq_route_traceability` | all rows | Tag every record to mechanical or acid pretreatment, dry or wet drawing, heat-treatment route and coating state; do not average unlike routes before independent normalization. | production order, route log and aggregation worksheet |
| `dq_temporal_completeness` | reporting period | Cover the complete declared period and all included conforming and rejected lots; explain shutdowns, abnormal campaigns and missing intervals. | production ledger, meter continuity check and exception log |
| `dq_measurement_support` | mass, volume and energy | Retain calibration or invoice reconciliation, original units, conversions, reference conditions and shared-meter allocation evidence. | calibration record, invoice, meter export and calculation worksheet |
| `dq_upstream_representativeness` | purchased inputs | Match geography, technology, product state and delivery boundary for wire rod, chemicals, electricity and fuel; disclose every proxy. | supplier data, background-dataset metadata and proxy justification |
| `dq_waste_destination` | waste outputs | Preserve composition basis, recovery or treatment destination and whether any downstream credit is modelled outside the foreground inventory. | waste manifest, analysis and downstream-model disclosure |
| `dq_source_traceability` | calculated rows | Retain raw fields, factor identities, versions, formulas and reviewer-readable calculations; do not replace foreground measurements with an uncited default. | calculation workbook and factor provenance |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity_complete` | reference_flow | Fail if any required qualifier is absent or if alloy, stainless, insulated, stranded or fabricated wire is represented as this reference product. | `unsd-cpc-3-0-2025`, `unsd-hs-2012-7217` |
| `vr_reference_mass` | reference_flow | Confirm exactly 1,000 kg net conforming unpackaged wire after declared finishing; reject inclusion of reels, carriers or packaging in the reference mass. | `worldsteel-lci-methodology-2017` |
| `vr_route_consistency` | process_inventory | Confirm each conditional acid, lubricant, heat-treatment, flux and coating row is present only for applicable lots and that every actual boundary-crossing exchange is represented atomically. | `ec-jrc-fmp-bref-2022` |
| `vr_uuid_qualifiers` | uuid_bearing_rows | Confirm process water retains source, quality, geography, density conversion and delivery boundary; natural gas retains supply and reference-volume conditions; ammonium chloride and zinc chloride retain grade and supply qualifiers; mill scale and waste steel wire retain composition and destination; fossil carbon dioxide remains an elementary emission to unspecified air; do not assign an electricity UUID until site delivery qualifiers are reviewed. |  |
| `vr_mass_balance` | material_balance | Reconcile iron-bearing and coating masses on consistent stock, moisture and composition bases; flag unexplained residuals without altering measured values to force closure. |  |
| `vr_energy_units` | energy_inputs | Confirm original energy readings, kWh-to-MJ conversion, gas reference conditions and separation of drawing from optional heat treatment. |  |
| `vr_allocation` | shared_operations | Confirm subdivision was considered first and every remaining shared flow has a documented causal allocation driver and sensitivity disclosure where another relationship is used. | `eu-pef-method-2021` |
| `vr_no_false_range` | quantitative_evidence | Reject any external empirical range unless at least two independent, original-text-verified and boundary-compatible sources support the synthesis; keep foreground collection requirements where evidence is insufficient. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site- and route-specific foreground result that may be published as a `secondary_dataset` or qualified `background_dataset` after review |
| downstream_use | Cradle-to-wire-manufacturing-site-gate modelling of iron or non-alloy steel wire used in downstream products and lifecycle models |
| allowed_use | Use when product state, grade, diameter, heat treatment, coating, site geography, technology, period, energy delivery and system boundary match or are transparently adjusted |
| excluded_use | Direct representation of alloy or stainless wire, insulated or stranded products, fabricated wire articles, packaged delivery, use or end-of-life; comparative assertions without equivalent function, boundary and critical review |
| required_metadata | PCR id and version state; foreground site and period; product grade, diameter, mechanical condition and coating; wire-rod source; process route; electricity and gas delivery qualifiers; allocation; waste destinations; unresolved UUIDs; source and calculation provenance |
| required_quality_disclosure | Completeness and route coverage; meter and scale support; stock and mass-balance residuals; upstream proxies; conditional operations; missing records; uncertainty; excluded packaging and transport; downstream recycling treatment |
| update_trigger | Update when grade or diameter mix, wire-rod source, pretreatment, drawing technology, heat treatment, coating route, energy supply, site, allocation, reporting period or material waste destination changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official CPC 41263 identity and separation from alloy-steel wire |
| `unsd-hs-2012-7217` | `official_guidance` | United Nations Statistics Division, *HS 2012, heading 7217: Wire of iron or non-alloy steel*, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/32/7217 (retrieved 2026-09-03) | Interpretive scope for uncoated, zinc-coated, other-base-metal-coated and other wire states |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, *Ferrous Metals Processing Industry*, adopted December 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry (retrieved 2026-09-03) | Downstream wire boundary and process decomposition: wire-rod pretreatment, dry or wet drawing, heat treatment, finishing and continuous wire galvanising |
| `worldsteel-lci-methodology-2017` | `method_factor` | World Steel Association, *Life Cycle Inventory Methodology Report*, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-03) | Factory-gate mass declared unit, study-boundary disclosure, upstream-data quality and transparent recycling treatment |
| `eu-pef-method-2021` | `official_guidance` | European Commission, *Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, 15 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-09-03) | Allocation hierarchy: subdivision or system expansion, physical relationship, then another justified relationship |
| `china-mof-2026-tariff-list` | `official_guidance` | Ministry of Finance of the People's Republic of China, *国别清单及税目税率表*, 2026, https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf (retrieved 2026-09-03) | Professional Chinese terminology for uncoated, zinc-coated, copper-coated, other-base-metal-coated and other iron or non-alloy steel wire |
