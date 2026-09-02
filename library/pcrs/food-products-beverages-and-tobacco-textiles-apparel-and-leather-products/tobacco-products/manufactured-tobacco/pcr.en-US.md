---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.manufactured-tobacco
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufactured tobacco

## 1. Scope and Applicability

This PCR applies to factory-gate production of CPC 3.0 subclass 25091, manufactured tobacco. It covers other manufactured tobacco and manufactured tobacco substitutes, homogenized or reconstituted tobacco, and tobacco extracts and essences when they leave the reporting facility as the declared product. Product routes may include loose smoking tobacco, chewing tobacco, moist or dry snuff, pressed or twisted tobacco, expanded tobacco, reconstituted tobacco sheet, and tobacco extract or essence. Each dataset shall name the actual route and saleable form.

The foreground starts with received cured tobacco leaf, tobacco stems, tobacco fines, purchased tobacco extract, or other declared tobacco-bearing feedstocks at the reporting facility. It includes receiving, conditioning, blending, route-specific size reduction or extraction, formulation, drying or remoisturizing, optional expansion, packing, and facility operations directly supporting those steps. Tobacco agriculture, curing before receipt, supplier production, distribution after the factory gate, consumer use, and end-of-life are outside the foreground and shall be represented only through linked upstream or downstream datasets when the study goal requires them.

Cigars, cheroots, cigarillos and cigarettes of HS heading 24.02, unmanufactured tobacco and tobacco refuse of HS heading 24.01, and nicotine-containing or non-nicotine products classified under HS heading 24.04 are excluded. A multi-product site shall subdivide or meter the CPC 25091 route so excluded products are not silently included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.manufactured-tobacco` |
| classification_refs | CPC 3.0 `25091`, exact; scope operationalized with HS 2022 heading `24.03` |
| covered_products | Other manufactured tobacco and substitutes; homogenized or reconstituted tobacco; tobacco extracts and essences |
| excluded_products | Unmanufactured tobacco and refuse; cigars, cigarillos and cigarettes; HS 24.04 inhalation-without-combustion and other nicotine products |
| representative_product | The actual saleable CPC 25091 product produced by the reporting route |
| production_route | Declare one or more: loose/chewing/snuff/pressed/twisted tobacco, expanded tobacco, reconstituted sheet, extract or essence |
| market_state | Net saleable product at the reporting facility gate; package configuration and moisture basis declared |

Classification shall be checked against the product composition, form and intended use, not inferred from a site name or a generic label such as “tobacco product.” Water-pipe tobacco may include glycerol, aromatic oils or extracts, molasses or sugar; those constituents shall be recorded as separate atomic inputs when used.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufactured tobacco conforming to CPC 3.0 25091 and the declared route, composition, saleable form and moisture basis |
| How much | 1 kg net product, excluding transport packaging and separately reported sales packaging |
| How well | Meets the applicable product specification; route, moisture content, tobacco/substitute composition and package configuration declared |
| How long or cycle | One representative production period; normally at least 12 consecutive months or a justified complete campaign |
| reference_flow_link | Tiangong flow `0b1039e5-6251-4030-a2fd-707a1f32f365`, version `01.01.000`, state `100` |

| Field | Value |
| --- | --- |
| Reference amount | `1` |
| Reference product flow | Manufactured tobacco (`0b1039e5-6251-4030-a2fd-707a1f32f365`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | `kg` |
| Required qualifiers | CPC 25091 classification; route; net moisture basis and measured moisture content; tobacco and substitute composition; saleable form; included packaging; reporting period; site and geography |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_product_net_mass` | Reference product and tobacco-bearing intermediates | Mass | kg | Use calibrated net mass. Exclude tare and separately reported packaging; state whether mass is as-sold or converted to a specified moisture basis. |
| `measure_material_mass` | Leaf, stems, fines, ingredients, refrigerants, fuels, packaging and solid wastes | Mass | kg | Record each named material separately from purchase, issue, weighbridge or stock-change records; do not report “materials,” “additives,” “packaging,” or “waste” aggregates. |
| `measure_water_volume` | Process water and treated or untreated wastewater | Volume | m3 | Meter each water and wastewater stream; convert mass only with a documented density and temperature. |
| `measure_electricity` | Electricity by process or allocated meter | Energy | kWh | Record imported and on-site electricity separately and identify voltage level and meter boundary. |
| `measure_thermal_energy` | Purchased hot water and other metered heat | Energy | MJ | Report delivered useful heat separately from steam and fuels; disclose temperature levels and conversion basis. |
| `measure_steam` | Purchased or internally transferred steam | Mass | kg | Record steam mass and pressure/temperature or quality; do not combine steam with generic heat. |
| `measure_fuel` | Natural gas and diesel | Energy and physical quantity | MJ plus m3 or kg/L | Record each fuel separately; use net calorific value with source and period. |
| `measure_air_emission` | Dust, refrigerants, carbon dioxide, nitrogen oxides and particulate matter | Mass | kg | Use stack testing, continuous monitoring or documented mass balance/emission calculation for each named substance. |
| `measure_moisture` | Feedstock, intermediate and saleable product | Mass fraction | kg/kg or % | Use representative sampling and a declared test method; reconcile as-received and dry-matter balances. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Tobacco-bearing feedstocks and non-tobacco ingredients received at the reporting facility gate |
| starting_condition_role | Foreground entry; upstream farming, curing, supplier manufacture and transport are linked datasets |
| product_classification_scope | CPC 3.0 25091, constrained by HS 2022 heading 24.03 and the explicit exclusions in Section 1 |
| recursive_input_rule | Purchased CPC 25091 product or intermediate is recorded as a separate input with its supplier dataset; it is not recursively remodelled unless produced inside the reporting foreground |
| upstream_dataset_requirement | Link separate datasets for cured leaf or other tobacco feedstocks, ingredients, water, electricity, heat, steam, fuels, refrigerants and every packaging component |
| disclosure | Declare route, owned and outsourced operations, cut-offs, on-site utilities, wastewater treatment, product moisture, allocation and excluded site activities |

| rule_id | Applies to | Requirement | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | All datasets | Include all route steps from receipt through net saleable product at the facility gate, including route-specific cleaning, conditioning, blending, extraction, sheet formation, drying, expansion and packing when performed. | `us-epa-tobacco-processing-2006`; `eu-pef-2021` |
| `boundary_upstream_links` | Purchased inputs | Keep supplier production outside the foreground but link a dataset for every material, ingredient, energy carrier and packaging component crossing the boundary. | `eu-pef-2021` |
| `boundary_same_category_input` | Purchased manufactured tobacco | Record it as a distinct input with origin, route, moisture and supplier dataset; prevent double counting of its manufacture. | `eu-pef-2021` |
| `boundary_optional_routes` | Reconstituted, expanded, extract and essence routes | Include only steps actually operated, but absence of an applicable step requires an explicit not-applicable statement. | `us-epa-tobacco-processing-2006` |
| `boundary_excluded_products` | Multi-product tobacco sites | Meter or subdivide CPC 25091 production from headings 24.01, 24.02 and 24.04. | `unsd-cpc-v3-2025`; `wco-hs-2022-ch24` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_storage` | Feedstock receiving and storage | required | Always | Establish received tobacco-bearing mass and remove foreign material | kg accepted tobacco-bearing feedstock |
| `tobacco_conversion` | Route-specific tobacco conversion | required | Always | Conditioning, blending, formulation, cutting/grinding/pressing, extraction/sheet formation, drying or remoisturizing as applicable | kg manufactured tobacco intermediate |
| `expanded_tobacco` | Carbon-dioxide expansion | conditional | Include when tobacco is expanded at the site | Expand cut tobacco with liquid carbon dioxide and rapid heating | kg expanded tobacco |
| `packing` | Final conditioning, packing and release | required | Always, including bulk release with zero sales packaging | Produce and verify the reference product | 1 kg net manufactured tobacco |
| `onsite_steam_generation` | On-site steam generation | conditional | Include when the site generates steam for the route | Convert separately recorded fuels and water to transferred steam | kg steam delivered |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when tobacco-bearing wastewater is treated on site | Treat process wastewater and quantify effluent and sludge | m3 wastewater treated |

### Process: Feedstock receiving and storage (`receiving_storage`)

#### Inputs

##### Product flows

###### Cured tobacco leaf (`receiving_cured_tobacco`)

Received cured leaf is weighed by lot and linked to its supplier dataset. This card excludes stems and fines recorded below.

- Selected flow: Cured tobacco leaf
- Flow property / unit: Mass / kg
- Amount rule: Foreground weighbridge, scale and stock-change record by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_materials`
- Sources: `us-epa-tobacco-processing-2006`

###### Tobacco stems (`receiving_tobacco_stems`)

Separately weigh stems intentionally received for reconstituted or other routes.

- Selected flow: Tobacco stems
- Flow property / unit: Mass / kg
- Amount rule: Foreground lot receipt plus inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_materials`
- Sources: `us-epa-tobacco-processing-2006`

###### Tobacco fines (`receiving_tobacco_fines`)

Separately weigh fines intentionally received for reconstituted or extract routes.

- Selected flow: Tobacco fines
- Flow property / unit: Mass / kg
- Amount rule: Foreground lot receipt plus inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_materials`
- Sources: `us-epa-tobacco-processing-2006`

#### Outputs

##### Waste flows

###### Foreign material removed from tobacco (`receiving_foreign_material_waste`)

Foreign matter removed during receiving inspection is weighed as a distinct waste stream.

- Selected flow: Foreign material removed from tobacco
- Flow property / unit: Mass / kg
- Amount rule: Foreground container weight by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_waste`
- Sources:

### Process: Route-specific tobacco conversion (`tobacco_conversion`)

#### Inputs

##### Product flows

###### Process water (`conversion_water`)

Meter water directly used for conditioning, extraction, formulation, washing into product, or sheet formation; sanitation water discharged as wastewater remains separately metered.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Foreground meter or batch addition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_water`
- Sources: `us-epa-tobacco-processing-2006`

###### Steam (`conversion_steam`)

Steam imported to conditioning, drying, extraction or concentration is recorded separately from heat and fuel.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: Foreground steam meter or engineering balance with pressure and quality
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_steam`
- Sources: `us-epa-tobacco-processing-2006`

###### Purchased hot water (`conversion_hot_water`)

Purchased hot-water heat is included only where it crosses the foreground boundary and is not steam.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Foreground heat meter or mass-flow and temperature balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_heat`
- Sources:

###### Medium-voltage electricity (`conversion_electricity`)

Electricity for conveyors, cutting, grinding, pressing, extraction, refining, sheet forming, fans, drying and cooling is metered or allocated from a documented submeter.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Foreground submeter by reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_electricity`
- Sources: `us-epa-tobacco-processing-2006`

###### Glycerol (`conversion_glycerol`)

Glycerol is recorded when used in water-pipe tobacco or another declared formulation.

- Selected flow: Glycerol
- Flow property / unit: Mass / kg
- Amount rule: Foreground formulation issue less returned inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_ingredients`
- Sources: `wco-hs-2022-ch24`

###### Molasses (`conversion_molasses`)

Molasses is recorded separately when used in the declared formulation.

- Selected flow: Molasses
- Flow property / unit: Mass / kg
- Amount rule: Foreground formulation issue less returned inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_ingredients`
- Sources: `wco-hs-2022-ch24`

###### Sucrose (`conversion_sucrose`)

Sucrose is recorded separately from molasses and other ingredients when used.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Foreground formulation issue less returned inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_ingredients`
- Sources: `wco-hs-2022-ch24`; `us-epa-tobacco-processing-2006`

###### Tobacco extract (`conversion_tobacco_extract`)

Purchased or internally transferred tobacco extract reapplied to sheet or used in formulation is measured as one distinct input; internal transfer is not double counted as an upstream purchase.

- Selected flow: Tobacco extract
- Flow property / unit: Mass / kg
- Amount rule: Foreground batch addition and internal-transfer record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_ingredients`
- Sources: `us-epa-tobacco-processing-2006`

###### Ammonia refrigerant makeup (`conversion_ammonia_makeup`)

Ammonia added to a cooling system serving the route is recorded by purchase and inventory balance; omit only when the route has no ammonia system.

- Selected flow: Ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Purchases plus opening stock minus closing stock and documented recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_refrigerants`
- Sources:

###### R-134a refrigerant makeup (`conversion_r134a_makeup`)

R-134a added to a cooling system serving the route is recorded separately from ammonia; omit only when no R-134a system serves the route.

- Selected flow: Refrigerant R-134a
- Flow property / unit: Mass / kg
- Amount rule: Purchases plus opening stock minus closing stock and documented recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_refrigerants`
- Sources:

#### Outputs

##### Product flows

###### Manufactured tobacco intermediate (`conversion_intermediate`)

The route-specific intermediate leaving conversion is weighed before optional expansion or final packing. For extract or essence routes, this is the concentrated saleable precursor.

- Selected flow: Manufactured tobacco intermediate
- Flow property / unit: Mass / kg
- Amount rule: Foreground transfer scale with declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_outputs`
- Sources: `us-epa-tobacco-processing-2006`

##### Waste flows

###### Discarded tobacco leaf (`conversion_tobacco_leaf_waste`)

Weigh rejected leaf that is not internally reused. Do not combine it with stems, fines or captured dust.

- Selected flow: Discarded tobacco leaf
- Flow property / unit: Mass / kg
- Amount rule: Foreground container scale by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_waste`
- Sources: `us-epa-tobacco-processing-2006`

###### Discarded tobacco stems (`conversion_tobacco_stem_waste`)

Weigh unusable stems separately after subtracting documented internal transfer to a reconstituted-tobacco route.

- Selected flow: Discarded tobacco stems
- Flow property / unit: Mass / kg
- Amount rule: Foreground container scale by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_waste`
- Sources: `us-epa-tobacco-processing-2006`

###### Discarded tobacco fines (`conversion_tobacco_fines_waste`)

Weigh unusable fines separately after subtracting documented internal transfer to a reconstituted-tobacco or extract route.

- Selected flow: Discarded tobacco fines
- Flow property / unit: Mass / kg
- Amount rule: Foreground container scale by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_waste`
- Sources: `us-epa-tobacco-processing-2006`

###### Captured tobacco dust (`conversion_captured_tobacco_dust`)

Weigh tobacco dust retained by filters or collectors. This flow excludes tobacco dust released to air.

- Selected flow: Captured tobacco dust
- Flow property / unit: Mass / kg
- Amount rule: Foreground collector or waste-container scale by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_waste`
- Sources: `us-epa-tobacco-processing-2006`

###### Tobacco-bearing process wastewater (`conversion_process_wastewater`)

Combine only hydraulically connected wastewater that shares treatment and composition characterization; record extraction dilution water, excess extract, evaporator condensate, scrubber blowdown, equipment wash and floor wash separately in raw records.

- Selected flow: Tobacco-bearing process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Foreground discharge meter with sampling point and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_wastewater`
- Sources: `us-epa-tobacco-processing-2006`

##### Elementary flows

###### Tobacco dust to air (`conversion_tobacco_dust_air`)

Measure tobacco particulate released after controls; captured dust is a solid waste or internal recovery, not an air emission.

- Selected flow: Tobacco dust to air
- Flow property / unit: Mass / kg
- Amount rule: Stack test or exhaust flow times measured concentration, net of capture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_air`
- Sources: `who-tobacco-environment-2017`

###### Ammonia to air (`conversion_ammonia_air`)

Report ammonia refrigerant loss to air separately where an ammonia system serves the foreground.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance reconciled with event logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_refrigerants`
- Sources:

###### R-134a to air (`conversion_r134a_air`)

Report R-134a refrigerant loss to air separately where an R-134a system serves the foreground.

- Selected flow: Refrigerant R-134a to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance reconciled with event logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_refrigerants`
- Sources:

### Process: Carbon-dioxide expansion (`expanded_tobacco`)

#### Inputs

##### Product flows

###### Cut manufactured tobacco intermediate (`expansion_intermediate`)

Weigh the cut and conditioned tobacco transferred into expansion without duplicating its upstream production.

- Selected flow: Cut manufactured tobacco intermediate
- Flow property / unit: Mass / kg
- Amount rule: Foreground transfer scale with moisture measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_expansion_materials`
- Sources: `us-epa-tobacco-processing-2006`

###### Liquid carbon dioxide (`expansion_liquid_co2`)

Record fresh liquid carbon dioxide delivered to the expansion vessel, net of measured recovery.

- Selected flow: Carbon dioxide, liquid
- Flow property / unit: Mass / kg
- Amount rule: Foreground tank level or delivery mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_expansion_materials`
- Sources: `us-epa-tobacco-processing-2006`

###### Medium-voltage electricity for expansion (`expansion_electricity`)

Record expansion pumps, controls and directly associated rapid-heating equipment electricity separately from general conversion electricity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Foreground submeter or equipment-hour allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_expansion_energy`
- Sources: `us-epa-tobacco-processing-2006`

#### Outputs

##### Product flows

###### Expanded tobacco (`expansion_expanded_tobacco`)

Weigh expanded tobacco leaving the vessel after stabilization and moisture measurement.

- Selected flow: Expanded tobacco
- Flow property / unit: Mass / kg
- Amount rule: Foreground transfer scale with declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_expansion_outputs`
- Sources: `us-epa-tobacco-processing-2006`

##### Elementary flows

###### Carbon dioxide from expansion to air (`expansion_co2_air`)

Report purchased carbon dioxide released during expansion separately from combustion carbon dioxide.

- Selected flow: Carbon dioxide from expansion to air
- Flow property / unit: Mass / kg
- Amount rule: Liquid carbon-dioxide input minus measured recovery and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_expansion_outputs`
- Sources: `us-epa-tobacco-processing-2006`

### Process: Final conditioning, packing and release (`packing`)

#### Inputs

##### Product flows

###### Bulk manufactured tobacco (`packing_bulk_tobacco`)

Weigh the accepted bulk product transferred to final conditioning and packing.

- Selected flow: Bulk manufactured tobacco
- Flow property / unit: Mass / kg
- Amount rule: Foreground transfer scale with moisture measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_product`
- Sources: `us-epa-tobacco-processing-2006`

###### Paper pouch (`packing_paper_pouch`)

Record the mass of paper pouches incorporated in saleable units; omit with a declared zero when not used.

- Selected flow: Paper pouch
- Flow property / unit: Mass / kg
- Amount rule: Foreground bill of materials reconciled to issue and scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_components`
- Sources: `us-epa-tobacco-processing-2006`

###### Aluminium tin (`packing_aluminium_tin`)

Record aluminium tins separately from paper, glass and plastic components.

- Selected flow: Aluminium tin
- Flow property / unit: Mass / kg
- Amount rule: Foreground bill of materials reconciled to issue and scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_components`
- Sources: `us-epa-tobacco-processing-2006`

###### Glass jar (`packing_glass_jar`)

Record glass jars separately when used.

- Selected flow: Glass jar
- Flow property / unit: Mass / kg
- Amount rule: Foreground bill of materials reconciled to issue and scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_components`
- Sources: `us-epa-tobacco-processing-2006`

###### Paperboard box (`packing_paperboard_box`)

Record paperboard boxes separately from paper pouches.

- Selected flow: Paperboard box
- Flow property / unit: Mass / kg
- Amount rule: Foreground bill of materials reconciled to issue and scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_components`
- Sources:

###### Low-density polyethylene film (`packing_ldpe_film`)

Record low-density polyethylene film separately from all fibre, metal and glass packaging.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Foreground bill of materials reconciled to issue and scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_components`
- Sources:

###### Medium-voltage electricity for packing (`packing_electricity`)

Record electricity for final conditioning, filling, sealing, labelling and case handling.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Foreground submeter or equipment-hour allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_electricity`
- Sources:

#### Outputs

##### Product flows

###### Manufactured tobacco (`packing_reference_product`)

This is the sole reference exchange. The Tiangong state-100 product flow is normalized to one kilogram of net conforming product; packaging remains in separate input cards.

- Selected flow: Manufactured tobacco (`0b1039e5-6251-4030-a2fd-707a1f32f365`)
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net conforming product by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: Reference product identity
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `unsd-cpc-v3-2025`; `wco-hs-2022-ch24`

##### Waste flows

###### Paper pouch scrap (`packing_paper_pouch_scrap`)

Weigh rejected paper pouches separately from paperboard boxes and all other packaging.

- Selected flow: Paper pouch scrap
- Flow property / unit: Mass / kg
- Amount rule: Foreground scrap container weight by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_waste`
- Sources:

###### Paperboard box scrap (`packing_paperboard_scrap`)

Weigh rejected paperboard boxes separately from paper pouches and all other packaging.

- Selected flow: Paperboard box scrap
- Flow property / unit: Mass / kg
- Amount rule: Foreground scrap container weight by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_waste`
- Sources:

###### Aluminium packaging scrap (`packing_aluminium_scrap`)

Weigh aluminium packaging scrap separately.

- Selected flow: Aluminium packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Foreground scrap container weight by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_waste`
- Sources:

###### Glass packaging scrap (`packing_glass_scrap`)

Weigh glass packaging scrap separately.

- Selected flow: Glass packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Foreground scrap container weight by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_waste`
- Sources:

###### Polyethylene packaging scrap (`packing_plastic_scrap`)

Weigh low-density polyethylene packaging scrap separately from other polymers.

- Selected flow: Low-density polyethylene packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Foreground scrap container weight by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_waste`
- Sources:

###### Off-specification manufactured tobacco (`packing_offspec_tobacco`)

Report rejected product sent outside the foreground as waste. Internally reworked material is an internal transfer and shall not be counted as both input and waste.

- Selected flow: Off-specification manufactured tobacco
- Flow property / unit: Mass / kg
- Amount rule: Foreground reject scale minus documented internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net manufactured tobacco
- Basis kind: Product output (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_waste`
- Sources:

### Process: On-site steam generation (`onsite_steam_generation`)

#### Inputs

##### Product flows

###### Natural gas (`boiler_natural_gas`)

Record natural gas delivered to the boiler separately from diesel and other fuels.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Foreground fuel meter using documented net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_inputs`
- Sources: `who-tobacco-environment-2017`

###### Diesel fuel (`boiler_diesel`)

Record diesel used in the steam boiler or start-up burner separately from natural gas.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Foreground tank issue using documented net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_inputs`
- Sources: `who-tobacco-environment-2017`

###### Boiler feedwater (`boiler_feedwater`)

Record make-up and returned condensate separately in raw records; this exchange is net feedwater entering steam generation.

- Selected flow: Boiler feedwater
- Flow property / unit: Volume / m3
- Amount rule: Foreground feedwater meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_inputs`
- Sources:

###### Medium-voltage electricity for boiler (`boiler_electricity`)

Record electricity for boiler pumps, fans and controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Foreground submeter or equipment-hour allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_inputs`
- Sources:

#### Outputs

##### Product flows

###### Steam delivered (`boiler_steam`)

Measure steam transferred to tobacco conversion at the delivery boundary.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: Foreground steam meter with pressure and quality
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_outputs`
- Sources:

##### Waste flows

###### Boiler blowdown wastewater (`boiler_blowdown`)

Measure blowdown discharged from the boiler system separately from tobacco-bearing wastewater.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Foreground blowdown meter or verified water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_outputs`
- Sources: `us-epa-tobacco-processing-2006`

##### Elementary flows

###### Fossil carbon dioxide to air (`boiler_co2_air`)

Quantify fossil carbon dioxide from the separately recorded boiler fuels.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel-specific carbon balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_air`
- Sources:

###### Nitrogen oxides expressed as nitrogen dioxide to air (`boiler_nox_air`)

Quantify nitrogen oxides after installed controls.

- Selected flow: Nitrogen oxides, expressed as nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack test, continuous monitor or documented fuel-specific factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_air`
- Sources:

###### Fine particulate matter to air (`boiler_pm_air`)

Quantify particulate matter with aerodynamic diameter at or below 2.5 micrometres after installed controls. Any coarser fraction requires a separate atomic row.

- Selected flow: Particulate matter, <=2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack test or documented fuel-specific factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_air`
- Sources:

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Waste flows

###### Tobacco-bearing process wastewater for treatment (`treatment_process_wastewater`)

Measure tobacco-bearing wastewater entering on-site treatment at a defined sampling point.

- Selected flow: Tobacco-bearing process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Foreground influent meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_inputs`
- Sources: `us-epa-tobacco-processing-2006`

##### Product flows

###### Medium-voltage electricity for wastewater treatment (`treatment_electricity`)

Record electricity used by equalization, biological treatment, clarification, sludge handling and related pumps.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Foreground submeter or equipment-hour allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_inputs`
- Sources: `us-epa-tobacco-processing-2006`

#### Outputs

##### Waste flows

###### Treated wastewater (`treatment_treated_wastewater`)

Measure final effluent volume and retain pollutant-specific analytical results; do not substitute influent volume without a water balance.

- Selected flow: Treated wastewater
- Flow property / unit: Volume / m3
- Amount rule: Foreground effluent meter and sampling record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_outputs`
- Sources: `us-epa-tobacco-processing-2006`

###### Wastewater-treatment sludge (`treatment_sludge`)

Weigh sludge on the declared wet or dry basis and record treatment destination.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Foreground scale or container volume with measured solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_outputs`
- Sources: `us-epa-tobacco-processing-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Requirement | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Multi-route or multi-product sites | First subdivide by route, line, batch, meter, formulation and operating time so CPC 25091 foreground records are directly assigned. | `eu-pef-2021` |
| `allocation_physical` | Unavoidable joint processes with multiple saleable tobacco products | If subdivision is not possible and a causal physical relationship exists, allocate by net dry-matter mass or another demonstrated causal property; disclose moisture conversion and sensitivity. | `eu-pef-2021` |
| `allocation_economic` | Joint processes lacking a defensible physical relationship | Use economic allocation only after documenting why subdivision and physical allocation fail; use contemporaneous net-gate values and test sensitivity. | `eu-pef-2021` |
| `allocation_internal_rework` | Recovered tobacco returned to the same foreground | Treat as an internal transfer with no co-product credit and prevent simultaneous reporting as waste and new input. | `us-epa-tobacco-processing-2006` |
| `allocation_waste_recovery` | Waste sent for recycling, energy recovery or treatment | Record the waste amount and destination. Apply any downstream credit only under the chosen study method and disclose it outside the foreground production balance. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_materials` | `receiving_storage` | input product flows | weighment | flow name, supplier, lot, gross, tare, net, moisture, stock change | calibrated scale plus inventory reconciliation | kg | each lot; monthly reconciliation | representative year or full campaign | all receiving points | sum each atomic flow; convert moisture only after retaining raw mass | calibration, lot records, stock reconciliation |
| `cp_receiving_waste` | `receiving_storage` | output waste | weighment | waste name, container tare, gross, destination | calibrated container scale | kg | each shipment | same period as production | receiving area | sum by atomic waste and destination | tickets, calibration, destination records |
| `cp_conversion_water` | `tobacco_conversion` | input water | meter/batch | meter start/end, batch additions, purpose | calibrated meter and batch record | m3 | daily or each batch | same period as production | all conversion water points | sum direct use; keep sanitation water in wastewater raw records | meter calibration, batch sheets |
| `cp_conversion_steam` | `tobacco_conversion` | input steam | meter | mass, pressure, temperature, quality | steam meter or verified engineering balance | kg | hourly/daily | same period as production | conversion delivery boundary | sum delivered steam only | meter calibration, balance |
| `cp_conversion_heat` | `tobacco_conversion` | input purchased hot water | meter | mass flow, inlet/outlet temperature, time | heat meter | MJ | hourly/daily | same period as production | conversion delivery boundary | integrate delivered energy; no steam aggregation | calibration and heat balance |
| `cp_conversion_electricity` | `tobacco_conversion` | input electricity | meter | meter start/end, downtime, line output | revenue-grade submeter | kWh | daily/monthly | same period as production | conversion equipment | sum metered use; shared loads follow Section 7 | meter certificate and production log |
| `cp_conversion_ingredients` | `tobacco_conversion` | ingredient inputs | formulation | ingredient identity, lot, issue, return, stock change | batch issue and inventory balance | kg | each batch | same period as production | formulation and reapplication points | sum each chemical or extract separately | recipe, issue tickets, inventory reconciliation |
| `cp_conversion_refrigerants` | `tobacco_conversion` | refrigerant inputs and emissions | mass balance | refrigerant identity, purchases, stocks, recovery, charge, event losses | annual refrigerant balance and leak log | kg | each event; annual close | same period as production | systems serving foreground | calculate each refrigerant separately; allocate shared systems by measured cooling duty | invoices, service logs, inventory, allocation record |
| `cp_conversion_outputs` | `tobacco_conversion` | product output | transfer weighment | mass, moisture, route, batch | calibrated transfer scale and moisture test | kg | each batch | same period as production | conversion exit | sum as-received and retain dry-matter conversion | calibration and laboratory results |
| `cp_conversion_waste` | `tobacco_conversion` | solid waste | weighment | atomic waste, mass, moisture, destination, internal recovery | container scale and disposition log | kg | each container | same period as production | conversion areas | subtract documented internal transfers; sum by destination | tickets and reconciliation |
| `cp_conversion_wastewater` | `tobacco_conversion` | wastewater output | meter/sample | stream, volume, sampling point, destination, pollutant results | flow meter and representative sampling | m3 | continuous/daily; sampling per permit or study | same period as production | each hydraulic discharge | retain component streams; aggregate only shared treatment streams | calibration, laboratory reports, water balance |
| `cp_conversion_air` | `tobacco_conversion` | air emission | measurement | source, flow, concentration, control state, hours | stack test or continuous measurement | kg | representative operating tests | representative operating states | all route exhausts | sum named pollutant after controls | test report and control log |
| `cp_expansion_materials` | `expanded_tobacco` | material inputs | meter/weighment | tobacco mass/moisture, CO2 delivery, recovery, stocks | calibrated scales and tank balance | kg | each batch/delivery | same period as expansion | expansion unit | keep tobacco and CO2 separate | calibration, tank and batch logs |
| `cp_expansion_energy` | `expanded_tobacco` | electricity input | meter | meter start/end, equipment hours | submeter | kWh | daily/batch | same period as expansion | expansion unit | sum only expansion load | calibration and operating log |
| `cp_expansion_outputs` | `expanded_tobacco` | product and CO2 emission | mass balance | expanded mass/moisture, CO2 input, recovery, stocks | scale plus CO2 mass balance | kg | each batch; monthly close | same period as expansion | expansion unit | report product and released CO2 separately | calibration and reconciled balance |
| `cp_packing_product` | `packing` | bulk product input | transfer weighment | mass, moisture, lot | calibrated scale | kg | each lot | same period as packing | packing entry | sum by product route and moisture basis | calibration and lab results |
| `cp_packing_components` | `packing` | packaging inputs | bill of materials | component identity, unit mass, issued count, returns, scrap | BOM plus issue and count reconciliation | kg | each batch; monthly close | same period as packing | all packing lines | calculate each material component separately | approved BOM, unit-mass checks, inventory reconciliation |
| `cp_packing_electricity` | `packing` | electricity input | meter | meter start/end, line output, downtime | submeter or documented equipment-hour allocation | kWh | daily/monthly | same period as packing | packing lines | sum packing load only | calibration and allocation workbook |
| `cp_packing_waste` | `packing` | waste outputs | weighment | waste identity, mass, destination, rework | calibrated container scale | kg | each container | same period as packing | packing lines | keep paper, aluminium, glass, LDPE and off-spec tobacco separate | tickets and mass reconciliation |
| `cp_boiler_inputs` | `onsite_steam_generation` | fuel, feedwater, electricity | meter/inventory | fuel quantity and NCV, feedwater, electricity, stocks | calibrated meters and tank balance | MJ, m3, kWh | daily/monthly | same period as steam use | boilers serving foreground | each fuel separate; allocate shared boiler by metered delivered steam | calibration, invoices, NCV certificate |
| `cp_boiler_outputs` | `onsite_steam_generation` | steam and blowdown | meter | steam mass/quality, blowdown volume | steam and water meters | kg, m3 | daily | same period as steam use | delivery and discharge points | reconcile feedwater, steam, condensate and blowdown | calibration and water balance |
| `cp_boiler_air` | `onsite_steam_generation` | air emissions | measurement/calculation | pollutant, stack flow, concentration, fuel, carbon/NCV, control state | stack monitoring or documented fuel calculation | kg | representative test plus period calculation | same period as steam use | boilers serving foreground | each pollutant separately; allocate by delivered steam | test report, factor source, calculation workbook |
| `cp_treatment_inputs` | `onsite_wastewater_treatment` | influent and electricity | meter/sample | influent volume/quality, electricity, treatment state | flow meter, sample and submeter | m3, kWh | continuous/daily | same period as discharge | treatment plant serving foreground | allocate shared treatment using measured pollutant load where causal, otherwise flow with disclosure | calibration, laboratory and operating log |
| `cp_treatment_outputs` | `onsite_wastewater_treatment` | effluent and sludge | meter/sample/weighment | effluent volume/quality, sludge wet mass, solids, destination | meter, laboratory sampling and scale | m3, kg | continuous/daily; each sludge shipment | same period as discharge | final effluent and sludge boundary | retain pollutant results and dry/wet basis; sum sludge by destination | laboratory reports, tickets, water and solids balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground exchanges | normalized exchange = period exchange / period net conforming product mass | period exchange; net product kg | exchange per 1 kg product | `eu-pef-2021` |
| `calc_net_product_mass` | Packed reference product | net product = gross filled units - tare of all separately reported packaging | gross filled mass; packaging tare | kg net manufactured tobacco |  |
| `calc_dry_matter` | Tobacco-bearing masses | dry matter = as-received mass × (1 - moisture mass fraction) | mass; moisture | kg dry matter |  |
| `calc_material_balance` | Receiving through packing | inputs + opening stocks = saleable output + wastes + emissions + closing stocks; internal transfers cancel | atomic mass records and stocks | absolute and percentage closure | `us-epa-tobacco-processing-2006` |
| `calc_refrigerant_loss` | Each refrigerant | loss = purchases + opening stock - closing stock - documented recovery - net charge increase | refrigerant records | kg substance to air |  |
| `calc_expansion_co2_release` | CO2 expansion | release = fresh liquid CO2 input + opening stock - closing stock - documented recovery | CO2 tank and recovery records | kg CO2 to air | `us-epa-tobacco-processing-2006` |
| `calc_steam_allocation` | Shared on-site boiler | allocated boiler exchange = total boiler exchange × metered steam to foreground / total metered steam delivered | boiler records; steam meters | allocated exchange | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | All foreground data | Use one coherent representative period, normally at least 12 consecutive months; campaign production may use a complete campaign with justification. | dated production, meter and inventory records |
| `dq_geographical` | Site and upstream links | Identify facility geography and use supplier or regional datasets matching actual procurement where available. | site address, supplier origin, dataset metadata |
| `dq_technological` | Route and equipment | Describe the actual loose/snuff/pressed/twisted, expanded, reconstituted, extract or essence route and control equipment. | process diagram, equipment list, batch records |
| `dq_completeness` | Atomic inventory | Reconcile tobacco dry matter, net product, packaging, water, energy, wastes and direct emissions; explain every missing applicable card. | balance workbook and not-applicable register |
| `dq_precision` | Measurements and allocations | Retain calibration, sampling uncertainty, moisture testing, allocation drivers and calculation versions. | certificates, laboratory QA/QC, versioned calculations |
| `dq_source_caution` | External comparison | Do not transfer company-wide or cigarette-only intensities as CPC 25091 foreground facts; use them only to identify data fields or qualitative risks. | source-boundary review citing `hendlin-bialous-2019` and `who-tobacco-environment-2017` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference exchange | Error unless exactly one output uses UUID `0b1039e5-6251-4030-a2fd-707a1f32f365`, Mass, Units of mass and kg. | `unsd-cpc-v3-2025` |
| `validate_classification` | CPC/HS scope | Error unless product evidence supports CPC 25091/HS 24.03 and none of the stated exclusions. | `unsd-cpc-v3-2025`; `wco-hs-2022-ch24` |
| `validate_net_mass` | Reference amount | Error unless output is normalized to exactly 1 kg net product with moisture basis and packaging treatment declared. |  |
| `validate_route_coverage` | Process map | Error unless every applicable route step is included and every non-applicable conditional process is explicitly justified. | `us-epa-tobacco-processing-2006` |
| `validate_atomic_flows` | Inventory atomicity | Error if any row combines electricity, heat, steam, fuels, refrigerants, materials, packaging components, waste materials or emitted substances. |  |
| `validate_localized_reference_name` | Chinese reference name | Error unless the UUID-bearing Chinese selected flow is exactly `人造烟草`. |  |
| `validate_material_balance` | Tobacco and product balance | Error unless as-received and dry-matter balances include stocks, internal transfers, product, waste and measured air losses, with closure and residual reported. | `us-epa-tobacco-processing-2006` |
| `validate_energy_separation` | Energy records | Error unless electricity, purchased hot water, steam, natural gas and diesel are separate exchanges and absent carriers have explicit not-applicable records. |  |
| `validate_refrigerants` | Cooling systems | Error unless every refrigerant serving the foreground is named separately with makeup and loss records, or absence is documented. |  |
| `validate_packaging` | Packaging inventory | Error unless each actual packaging material is a separate input and corresponding scrap is separately reported; bulk product shall declare zero sales packaging. |  |
| `validate_waste_emissions` | Waste and emissions | Error unless waste destinations and direct air/water emissions are substance- or material-specific and captured dust is not also reported to air. | `us-epa-tobacco-processing-2006` |
| `validate_allocation` | Shared operations and co-products | Error unless subdivision is attempted first and any physical or economic allocation has driver, period and sensitivity documented. | `eu-pef-2021` |
| `validate_data_quality` | Representativeness and evidence | Warn when temporal, geographical, technological, completeness or precision evidence is missing. | `eu-pef-2021` |
| `validate_no_empirical_range_transfer` | Range provenance | Error if an empirical range lacks at least two independent, boundary-compatible full-text sources; this PCR prescribes no empirical ranges. | `hendlin-bialous-2019`; `who-tobacco-environment-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process foreground dataset for manufactured tobacco production |
| downstream_use | Product-system and lifecycle-model construction for matching CPC 25091 products |
| allowed_use | Declared manufactured-tobacco route, composition, moisture basis, geography, technology and factory-gate boundary |
| excluded_use | Cigarettes, cigars, unmanufactured tobacco, HS 24.04 products, or unmatched routes and moisture bases |
| required_metadata | Reference product UUID; CPC/HS evidence; route; formulation categories; moisture basis; package configuration; geography; technology; reporting period |
| required_quality_disclosure | Atomic inventory coverage; material and water balances; allocation; exclusions; collection protocols; data-quality evidence |
| update_trigger | Material change in route, formulation, equipment, energy supply, package configuration, allocation, boundary or data quality |

## 11. Data Sources

| source_id | Type | title | author_or_issuer | publication_date | Reference | Used for |
| --- | --- | --- | --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | standard | Central Product Classification Version 3.0, final explanatory notes | United Nations Statistics Division | 2025-06-30 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact CPC 25091 identity and classification context |
| `wco-hs-2022-ch24` | standard | Harmonized System 2022, Chapter 24 | World Customs Organization | 2022 | https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0424_2022e.pdf | HS 24.03 product scope, exclusions and water-pipe tobacco constituents |
| `us-epa-tobacco-processing-2006` | official_guidance | Final Engineering Report: Tobacco Products Processing Detailed Study | United States Environmental Protection Agency | 2006-06 | https://19january2017snapshot.epa.gov/sites/production/files/2015-09/documents/tobacco-products-processing-study_2006.pdf | Full-text route operations, expanded and reconstituted tobacco steps, wastewater sources and treatment |
| `who-tobacco-environment-2017` | official_guidance | Tobacco and its environmental impact: an overview | World Health Organization | 2017 | https://iris.who.int/bitstream/handle/10665/255574/9789241512497-eng.pdf | Manufacturing resource, chemical, energy, effluent and evidence-quality considerations |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods | European Commission | 2021-12-15 | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32021H2279 | Functional unit, reference flow, company-specific foreground data, system boundary, allocation and data quality |
| `hendlin-bialous-2019` | literature | The environmental externalities of tobacco manufacturing: A review of tobacco industry reporting | Yogi Hale Hendlin; Stella Aguinaga Bialous | 2019-03-05 | DOI: 10.1007/s13280-019-01148-3; full text: https://pure.eur.nl/ws/portalfiles/portal/48170611/Hendlin-Bialous2019_Article_TheEnvironmentalExternalitiesO.pdf | Full-text review of energy, water, wastewater, waste and reporting limitations; supports exclusion of non-comparable numerical transfers |
