---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-soil-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of soil machinery

## 1. Scope and Applicability

This PCR covers finished, separately traded original-equipment or replacement parts chiefly identifiable as being for agricultural, horticultural, or forestry machinery for soil preparation or cultivation, including parts for lawn or sports-ground rollers. Typical covered products include ploughshares, mouldboards, coulters, harrow discs, cultivator shanks and tines, soil-working frames, and dedicated hitches or subassemblies. The finished part may be uncoated or may receive a declared protective coating.

Complete ploughs, harrows, seeders, planters, transplanters, fertilizer distributors, rollers, and other complete soil-working machines are excluded. General-purpose fasteners, bearings, tyres, hydraulic components, motors, and electrical assemblies sold independently are excluded unless the marketed product is chiefly identifiable as a dedicated CPC 44115 soil-machinery part. Parts of other agricultural machinery, generic non-electrical machinery parts n.e.c., tooling, capital equipment, use, maintenance, and end-of-life are outside this PCR.

The foreground boundary begins with delivered material, energy, water, and auxiliary inputs at the reporting facility and ends with a quality-accepted, unpackaged finished part released at the facility gate. This PCR uses three bounded representative variants: fabricated carbon-steel plate, closed-die alloy-steel forging, and cast-iron green-sand casting. The data producer shall select the actual variant, declare machining and heat-treatment steps, coating state, and any outsourced operation, and extend the inventory explicitly when a different forming or moulding system is used. The 2024 smitheries and foundries BREF supports this conditional route decomposition and the listed forging and foundry exchanges; EPA sources support conditional metal preparation and coating coverage, but none of these qualitative sources supplies product-specific inventory amounts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-soil-machinery |
| classification_refs | CPC 3.0: 44115, Parts of soil machinery |
| covered_products | Finished original-equipment or replacement parts chiefly identifiable as for soil preparation or cultivation machinery or lawn/sports-ground rollers |
| excluded_products | Complete machines; independently traded general-purpose components; parts of other agricultural machinery; electrical or hydraulic modules not chiefly identifiable as soil-machinery parts |
| representative_product | A quality-accepted iron or steel soil-engaging part or dedicated subassembly manufactured to a declared drawing and material specification |
| production_route | Declared fabricated carbon-steel plate, closed-die alloy-steel forging, or cast-iron green-sand route; machining/heat treatment as applicable; liquid coating conditional; other variants require explicit extension |
| market_state | Finished, quality-accepted, unpackaged part at the manufacturing-site gate; coating state and OEM/replacement status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished part that provides a declared structural, soil-engaging, adjustment, transmission, or rolling function within specified soil-preparation or cultivation machinery |
| How much | 1 kg of accepted finished part |
| How well | Conforms to the declared drawing, material grade, dimensions/tolerances, hardness or heat-treatment state, and coating specification where applicable |
| How long or cycle | One manufacturing lot released at the factory gate; no service-life equivalence is asserted |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished part of soil preparation or cultivation machinery |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part designation and drawing/revision; compatible machine type/model; primary material and grade; fabricated/forged/cast route; accepted mass; dimensions or size class; heat-treatment and hardness state; coating system/state; OEM or replacement market state; manufacturing site and geography; reporting period and lot coverage |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. No category-wide finished-product UUID is confirmed: the audited CPC 44115 candidates distinguish uncoated and coated intermediate states.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished output net of fixtures, returnable transport items, and excluded packaging; normalize every exchange to 1 kg accepted finished part. |
| `energy_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain original meter or invoice energy and conversion record; when converting kWh to the Tiangong reference unit, use 1 kWh = 3.6 MJ without altering the reported grid mix or delivery boundary. |
| `gas_volume_conditions` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare temperature, pressure, wet/dry basis, meter location, and any standard-volume conversion; do not combine the two gases. |
| `water_mass_basis` | Process-water inputs and aqueous wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; when volume is converted to mass, retain measured volume, temperature, density source, and calculation. |
| `stock_change_balance` | Materials, paint, and cutting fluid | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Consumption equals opening stock plus receipts minus closing stock minus documented returns; separately record internally recycled material so it is not counted as a new boundary input. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock or foundry charge, electricity, fuels, gases, water, and process auxiliaries delivered to the reporting facility, each linked to a geographically and technologically representative upstream dataset |
| starting_condition_role | Foreground gate input for cradle-to-gate production |
| product_classification_scope | Finished CPC 44115 parts chiefly identifiable as for soil preparation/cultivation machinery or lawn/sports-ground rollers |
| recursive_input_rule | A purchased CPC 44115 subassembly is recorded once as an input with a distinct upstream dataset; do not recursively apply this PCR to the same foreground manufacture |
| upstream_dataset_requirement | Supplier-specific data where available; otherwise disclose the selected regional/technology dataset, product state, recycled content, and delivery boundary |
| disclosure | Declare included sites, route, outsourced operations, coating state, internal recycling loops, cut-offs, allocation, accepted and rejected output, and whether packaging is outside the unpackaged reference state |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | Product system | Include upstream production of all delivered inputs and all foreground material preparation, forming/forging/casting, heat treatment, machining, cleaning, coating when applied, inspection, direct emissions, and exported wastes through release of the unpackaged finished part. Exclude use, maintenance, distribution after the facility gate, and end-of-life unless separately modelled and disclosed. | `eu-jrc-smitheries-foundries-bref-2024`; `un-cpc-3-0-structure-2025` |
| `boundary_route_declaration` | Manufacturing route | Select only the actual fabricated, forged, or cast route and include every on-site or outsourced step needed to reach the declared product state; do not treat an unreported route as zero. | `eu-jrc-smitheries-foundries-bref-2024` |
| `boundary_representative_variants` | Manufacturing route | The fabricated variant uses carbon-steel plate; the forging variant is closed-die alloy-steel forging with flash trimming and scale management; the casting variant is cast iron in green-sand moulds with silica sand, bentonite, and coal dust when actually present. A different alloy, open-die process, non-sand or chemically bonded mould, or non-ferrous casting requires an explicit inventory extension and shall not inherit inapplicable rows. | `eu-jrc-smitheries-foundries-bref-2024` |
| `boundary_outsourced_operations` | Outsourced forming, heat treatment, machining, or coating | When an operation is outsourced, include its supplier-specific or representative upstream process in the incoming intermediate, mark the corresponding on-site input, waste, and emission rows not applicable with purchase-order and supplier evidence, and do not report the outsourced exchange as a zero-valued on-site flow. | `eu-jrc-smitheries-foundries-bref-2024` |
| `boundary_coating_condition` | Pretreatment and coating | Include pretreatment, paint application, flash-off, curing, relevant capture/control, direct NMVOC, wastes, and rinse streams when liquid coating is applied; otherwise document coating as not applicable. | `us-epa-misc-metal-coating-tsd`; `us-epa-sector-aa-fabricated-metal-2021` |
| `boundary_direct_exchanges` | Foreground facility | Record direct stack and fugitive releases and each physically distinct exported waste stream; upstream electricity emissions remain in the electricity dataset and are not duplicated as foreground emissions. | `us-epa-misc-metal-coating-tsd`; `us-epa-sector-aa-fabricated-metal-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `manufacture_uncoated_part` | Material preparation, forming, heat treatment, machining, and finishing | required | Apply one bounded variant—fabricated carbon-steel plate, closed-die alloy-steel forging, or cast-iron green-sand casting—and the actual downstream operations; explicitly extend other variants | Foreground production of the uncoated part | kg accepted uncoated part transferred to coating or final release |
| `surface_coating` | Surface preparation and liquid coating | conditional | Include only when liquid paint and associated pretreatment are applied within the product system | Foreground conditioning of the part | kg accepted coated part transferred to final release |
| `final_release` | Final inspection and release | required | Accept either the uncoated route or the coated route, not both for the same product mass | Foreground quality release | 1 kg accepted unpackaged finished part |

### Process: Material preparation, forming, heat treatment, machining, and finishing (`manufacture_uncoated_part`)

The declared route may combine raw-material preparation, heating, forging, casting, heat treatment, cutting, machining, and finishing. Record only route-applicable atomic exchanges. A row is not applicable only when the route sheet or outsourcing evidence demonstrates absence from the foreground site; an unmeasured applicable exchange is missing data, not zero.

#### Inputs

##### Product flows

###### Carbon-steel plate for fabricated route (`carbon_steel_plate`)

Carbon-steel plate crosses the foreground boundary as the principal metal input for a declared fabricated-plate route.

- Selected flow: Carbon steel plate
- Flow property / unit: Mass / kg
- Amount rule: Measured net plate consumption, including issued plate and stock change, when the fabricated-plate route applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_materials`

###### Alloy-steel bar for forging (`alloy_steel_bar`)

Alloy-steel bar crosses the foreground boundary as the principal forging stock for the declared forged route.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: Measured net alloy-steel bar consumption when the forging route applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_materials`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Cast-iron charge for foundry route (`cast_iron_charge`)

External cast-iron charge crosses the boundary as the principal metal input for the declared foundry route.

- Selected flow: Cast-iron foundry charge
- Flow property / unit: Mass / kg
- Amount rule: Measured net external cast-iron charge entering melting, excluding documented internal returns, when the foundry route applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_materials`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Silica sand for cast-iron green-sand moulds (`foundry_silica_sand`)

Purchased silica sand crosses the foreground boundary as new moulding-sand make-up only for the declared cast-iron green-sand route.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass / kg
- Amount rule: Measured net new silica-sand make-up, excluding documented internally reclaimed sand, when green-sand moulding is performed on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_materials`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Bentonite binder for cast-iron green-sand moulds (`foundry_bentonite`)

Bentonite crosses the foreground boundary as fresh clay binder only for the declared cast-iron green-sand route.

- Selected flow: Clay, bentonite `93806a54-46f5-409c-99c5-4144a1e73b5d`
- Flow property / unit: Mass / kg
- Amount rule: Measured net bentonite make-up entering green-sand preparation when this binder is used on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_materials`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Coal dust additive for cast-iron green-sand moulds (`foundry_coal_dust`)

Foundry-grade coal dust crosses the foreground boundary only when it is deliberately added to green sand for cast-iron moulding.

- Selected flow: Foundry coal dust additive
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of the actual coal-dust grade added to green sand; document coal rank and formulation, and mark not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_materials`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Purchased electricity (`electricity_manufacturing`)

Purchased electricity supplies route-applicable manufacturing equipment and shared services within the foreground boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or defensibly allocated purchased electricity for route-applicable preparation, forming, furnaces, machining, ventilation, and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_energy`

###### Natural gas for direct thermal operations (`natural_gas_manufacturing`)

Natural gas crosses the boundary only for directly fired manufacturing operations used by the declared route.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas combusted in route-applicable billet heating, melting, heat treatment, or drying; not applicable for fully electric routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_energy`

###### Industrial oxygen for oxygen cutting (`industrial_oxygen_cutting`)

Industrial oxygen crosses the boundary only when the declared manufacturing route uses oxygen-fuel cutting.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or supplier-recorded oxygen consumed only when oxygen-fuel cutting is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_fluids`

###### Process water for manufacturing operations (`process_water_manufacturing`)

Process water crosses the boundary as net make-up for route-applicable manufacturing operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Net make-up water crossing the facility boundary for route-applicable cooling, machining, cleaning, or quenching; exclude closed-loop recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_fluids`

###### Cutting fluid for machining (`cutting_fluid`)

Fresh cutting fluid crosses the boundary as machining make-up when wet machining is used.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Net fresh cutting-fluid make-up crossing the boundary, including concentrate and premix mass as supplied, when wet machining applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_fluids`
- Sources: `us-epa-sector-aa-fabricated-metal-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Uncoated shaped and machined part (`uncoated_part_output`)

The accepted uncoated part leaves manufacturing and is transferred to coating or final release. The public state-100 flow has an English name and CPC 44115 classification for soil machinery, but its Chinese baseName uses “土方机械”, a term that can denote earth-moving machinery. This PCR preserves the directly read Chinese baseName in the Chinese inventory and treats the CPC classification plus English identity as controlling only for the uncoated intermediate; the bilingual wording ambiguity is disclosed and the UUID must not be generalized to earth-moving parts.

- Selected flow: Shaped and machined soil-machinery part (uncoated) `d71194b3-dd43-437f-9706-b90232a59e62`
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted uncoated output transferred to coating or final release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_outputs`

##### Waste flows

###### Carbon-steel offcuts and machining scrap (`scrap_steel`)

Separately collected carbon-steel scrap leaves the foreground manufacturing process for external recovery or treatment.

- Selected flow: Scrap steel `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed carbon-steel offcuts, turnings, and rejected pieces exported from the fabricated route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_outputs`
- Sources: `us-epa-sector-aa-fabricated-metal-2021`

###### Alloy-steel closed-die forging flash (`alloy_steel_forging_flash`)

Trimmed alloy-steel flash leaves the closed-die forging operation for external recovery or treatment after documented internal return is deducted.

- Selected flow: Alloy-steel closed-die forging flash
- Flow property / unit: Mass / kg
- Amount rule: Separately weigh exported forging flash from the closed-die alloy-steel route; exclude flash returned internally to the same product system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forging_outputs`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Rejected low-alloy-steel forgings (`rejected_alloy_steel_forgings`)

Rejected low-alloy-steel forgings cross the foreground boundary as scrap only when they are not returned to internal rework or remelting.

- Selected flow: Low-alloy steel scrap `afedcccd-b9f3-4941-8ba4-d3135b8abb67`
- Flow property / unit: Mass / kg
- Amount rule: Weigh quality-rejected low-alloy-steel forgings exported as scrap, by rejection reason and destination; exclude documented internal return or rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forging_outputs`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Forging scale (`forging_scale`)

Oxide scale removed from alloy-steel forging stock or forgings leaves the route as a separately collected waste stream.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: Separately weigh forging-generated oxide scale exported for recovery or treatment after deducting documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forging_outputs`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Spent silica moulding sand (`spent_foundry_sand`)

Spent silica moulding sand leaves the cast-iron green-sand route after on-site reclamation and internal reuse have been deducted.

- Selected flow: Silica-sand residue `3027d52d-f24a-4e81-848a-11140a980a67`
- Flow property / unit: Mass / kg
- Amount rule: Weigh spent silica moulding sand exported for recovery or disposal; declare binder, coal, metal, moisture, and reclamation status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_outputs`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Ferrous foundry furnace slag (`foundry_slag`)

Slag or dross skimmed from the cast-iron melting operation leaves the foreground route as a distinct waste stream.

- Selected flow: Ferrous foundry furnace slag
- Flow property / unit: Mass / kg
- Amount rule: Separately weigh slag or dross exported from cast-iron melt preparation, identifying furnace, charge, treatment, and destination; exclude documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_outputs`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Rejected cast-iron castings (`rejected_ferrous_castings`)

Rejected cast-iron castings cross the foreground boundary only when they are exported rather than returned to the foundry charge.

- Selected flow: Rejected cast-iron casting
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected cast-iron castings exported for recovery or treatment, by rejection reason and destination; exclude documented internal return to melting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_outputs`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Cast-iron machining chips (`iron_metal_chips`)

Separately collected cast-iron chips leave machining for external recovery or treatment.

- Selected flow: Iron metal chips `8aa263a4-39e5-475e-966b-d967747ecc9c`
- Flow property / unit: Mass / kg
- Amount rule: Separately weighed cast-iron chips exported from machining after deduction of documented internal return to melting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_outputs`

###### Spent water-miscible cutting fluid (`spent_cutting_fluid`)

Spent water-miscible cutting fluid leaves machining as a separately managed waste stream.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent cutting-fluid mixture exported for treatment or recovery; declare water content and do not combine with waste oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_outputs`
- Sources: `us-epa-sector-aa-fabricated-metal-2021`

##### Elementary flows

###### Particulate matter from closed-die forging (`forging_particulate_to_air`)

Particle-size-unspecified particulate matter crosses the foreground boundary as a direct air emission from applicable forging heating, handling, forging, cooling, descaling, grinding, welding, or blasting operations after controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate residual direct particulate releases from the on-site closed-die forging route by source and control device; mark not applicable only when forging is outsourced or absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_particulate`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Particulate matter from cast-iron foundry operations (`foundry_particulate_to_air`)

Particle-size-unspecified particulate matter crosses the foreground boundary as a direct air emission from applicable sand handling, mould preparation, melting, pouring, shake-out, cleaning, and finishing operations after controls.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate residual direct particulate releases from the on-site cast-iron green-sand route by source and control device; mark not applicable only when casting is outsourced or absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_particulate`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Carbon monoxide from green-sand additives (`foundry_carbon_monoxide_to_air`)

Residual carbon monoxide crosses the foreground boundary as a direct air emission from pyrolysis and incomplete oxidation of coal dust or another carbonaceous green-sand additive during pouring, cooling, and shake-out.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate residual stack and fugitive carbon monoxide after capture and control for the on-site cast-iron green-sand route; apply only when the verified sand formulation contains coal dust or another carbonaceous substitute, and do not use carbon monoxide as a quantitative surrogate for benzene, toluene, xylene, or carbon dioxide
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_additive_gases`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Fossil carbon dioxide from green-sand additives (`foundry_fossil_carbon_dioxide_to_air`)

Fossil carbon dioxide from oxidation or destruction of coal dust or another fossil carbonaceous green-sand additive crosses the foreground boundary separately from fuel-combustion carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate residual fossil CO2 attributable to the verified carbonaceous sand additive, including controlled destruction products, using source data and the additive-carbon fate balance; exclude fuel-combustion CO2, biogenic carbon, retained carbon, and carbon exported in residues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_foundry_additive_gases`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Benzene from green-sand additives (`foundry_benzene_to_air`)

Residual benzene from thermal degradation of coal dust or another applicable green-sand additive crosses the foreground boundary as a named direct air emission.

- Selected flow: Benzene
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate residual stack and fugitive benzene from pouring, cooling, and shake-out after capture and control; apply only when supported by the actual additive formulation and source assessment, and document absence rather than assigning zero when no benzene-forming additive is present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_additive_gases`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Toluene from green-sand additives (`foundry_toluene_to_air`)

Residual toluene from thermal degradation of coal dust or another applicable green-sand additive crosses the foreground boundary as a named direct air emission.

- Selected flow: Toluene
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate residual stack and fugitive toluene from pouring, cooling, and shake-out after capture and control; apply only when supported by the actual additive formulation and source assessment, and document absence rather than assigning zero when no toluene-forming additive is present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_additive_gases`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Xylene from green-sand additives (`foundry_xylene_to_air`)

Residual xylene isomers from thermal degradation of coal dust or another applicable green-sand additive cross the foreground boundary as a named direct air emission.

- Selected flow: Xylene
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate residual stack and fugitive xylene from pouring, cooling, and shake-out after capture and control; retain the reported isomer or mixed-xylene basis, apply only when supported by the actual additive formulation and source assessment, and do not duplicate separately reported isomers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_additive_gases`
- Sources: `eu-jrc-smitheries-foundries-bref-2024`

###### Direct fossil carbon dioxide from manufacturing fuel (`fossil_co2_manufacturing`)

Fossil carbon dioxide crosses the foreground boundary as a direct air emission from on-site manufacturing fuel combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct on-site fossil CO2 from manufacturing fuel combustion, from monitored records or a documented facility calculation; exclude upstream fuel and electricity emissions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_emissions`

### Process: Surface preparation and liquid coating (`surface_coating`)

Include this process only for parts receiving liquid coating within the product system. Record pretreatment, application, flash-off, curing, controls, wastes, and releases for the declared line.

#### Inputs

##### Product flows

###### Uncoated part entering coating (`uncoated_part_coating_input`)

The accepted uncoated part crosses from manufacturing into the conditional coating process.

- Selected flow: Shaped and machined soil-machinery part (uncoated) `d71194b3-dd43-437f-9706-b90232a59e62`
- Flow property / unit: Mass / kg
- Amount rule: Weighed uncoated part mass entering the coating line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`

###### Purchased electricity for coating line (`electricity_coating`)

Purchased electricity supplies the conditional coating line and its associated controls.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or defensibly allocated coating-line electricity for pretreatment, application, ventilation, controls, and capture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_energy`

###### Natural gas for coating cure oven (`natural_gas_coating`)

Natural gas crosses the boundary only when the coating line uses direct-fired flash-off or curing.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas combusted for coating flash-off or curing; not applicable for electric or externally supplied heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_energy`
- Sources: `us-epa-misc-metal-coating-tsd`

###### Process water for pretreatment and rinsing (`process_water_coating`)

Process water crosses the boundary as net make-up for coating pretreatment and rinsing.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Net make-up water for the declared pretreatment and rinse stages, excluding recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Sodium hydroxide crosses the boundary as active alkali in the conditional cleaning bath.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass entering alkaline cleaner, calculated from supplied solution mass and verified concentration; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_materials`
- Sources: `us-epa-sector-aa-fabricated-metal-2021`

###### Liquid paint (`paint`)

Liquid paint crosses the boundary as the coating material applied to the declared product.

- Selected flow: Paint `b2aa1a35-1823-4b13-96db-d5b89eda2db5`
- Flow property / unit: Mass / kg
- Amount rule: Net liquid paint consumed from issued mass, returns, recovered overspray, and stock change; record formulation, carrier, and solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `us-epa-misc-metal-coating-tsd`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Coated soil-machinery subassembly (`coated_part_output`)

The accepted coated soil-machinery subassembly leaves coating and is transferred to final release. This UUID-bearing row applies only when the coated product is a subassembly; it shall not be used for an individual ploughshare, disc, tine, or other individual part.

- Selected flow: Coated and painted subassemblies for soil machinery `1b26569c-b724-4892-9a5a-a4d8e78a6b45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted coated subassembly output transferred to final release; not applicable to individual coated parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`

###### Coated individual soil-machinery part (`coated_individual_part_output`)

An accepted coated individual soil-machinery part leaves coating and is transferred to final release under a UUID-empty identity distinct from the audited subassembly flow.

- Selected flow: Coated individual part for soil preparation or cultivation machinery
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted coated individual-part output transferred to final release; not applicable to subassemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`

##### Waste flows

###### Waste paint from liquid coating (`waste_paint`)

Collected liquid paint residue and unrecovered overspray leave the coating line as one separately managed waste stream.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass / kg
- Amount rule: Weighed liquid paint residue and unrecovered overspray exported as waste; exclude separately recorded rinse wastewater and containers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`
- Sources: `us-epa-sector-aa-fabricated-metal-2021`

###### Alkaline cleaning rinse wastewater (`alkaline_rinse_wastewater`)

The separately routed aqueous rinse stream leaves the coating line after alkaline cleaning.

- Selected flow: Alkaline cleaning rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of the separately routed aqueous rinse stream after alkaline cleaning, with pH and relevant contaminants declared; exclude spent concentrated bath liquor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`
- Sources: `us-epa-sector-aa-fabricated-metal-2021`

###### Spent concentrated alkaline cleaning bath (`spent_alkaline_cleaning_bath`)

Spent concentrated alkaline cleaning bath liquor leaves the coating line separately from dilute rinse wastewater when a bath is discharged.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: Weigh spent concentrated alkaline bath exported for treatment or recovery, with composition, concentration, contaminants, water content, and destination; exclude bath retained or regenerated within the product system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`
- Sources: `us-epa-sector-aa-fabricated-metal-2021`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`nmvoc_to_air`)

Residual non-methane volatile organic compounds cross the boundary as a direct coating-related air emission.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or facility-approved coating mass-balance release after capture and destruction, including application, flash-off, curing, stack, and fugitive releases; do not add separately speciated compounds
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_emissions`
- Sources: `us-epa-misc-metal-coating-tsd`

###### Direct fossil carbon dioxide from coating fuel (`fossil_co2_coating`)

Fossil carbon dioxide crosses the foreground boundary as a direct air emission from coating-line fuel combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct on-site fossil CO2 from coating-line fuel combustion, from monitored records or a documented facility calculation; exclude upstream fuel and electricity emissions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_emissions`

### Process: Final inspection and release (`final_release`)

#### Inputs

##### Product flows

###### Accepted uncoated part for release (`uncoated_part_release_input`)

The accepted uncoated part enters final release only for a product declared without coating.

- Selected flow: Shaped and machined soil-machinery part (uncoated) `d71194b3-dd43-437f-9706-b90232a59e62`
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted uncoated part entering final release only when coating is not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

###### Accepted coated subassembly for release (`coated_part_release_input`)

The accepted coated subassembly enters final release only for a subassembly following the coating route; the UUID shall not be applied to an individual coated part.

- Selected flow: Coated and painted subassemblies for soil machinery `1b26569c-b724-4892-9a5a-a4d8e78a6b45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted coated subassembly entering final release only when coating applies to a subassembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

###### Accepted coated individual part for release (`coated_individual_part_release_input`)

The accepted coated individual part enters final release under the UUID-empty individual-part identity only when coating applies to an individual product.

- Selected flow: Coated individual part for soil preparation or cultivation machinery
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted coated individual part entering final release; not applicable to subassemblies or uncoated products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished part of soil preparation or cultivation machinery (`reference_product`)

The quality-accepted finished part leaves the foreground system as the reference product.

- Selected flow: Finished part of soil preparation or cultivation machinery
- Flow property / unit: Mass / kg
- Amount rule: Accepted finished output mass normalized to exactly 1 kg; coating state and all required qualifiers declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_release`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Rejected finished soil-machinery part (`rejected_finished_part`)

A part rejected at final inspection crosses the foreground boundary as a distinct waste output only when it is exported rather than returned to documented internal rework.

- Selected flow: Rejected finished part of soil preparation or cultivation machinery
- Flow property / unit: Mass / kg
- Amount rule: Weigh final-inspection rejects exported for recovery or treatment by material, coating state, rejection reason, and destination; exclude internal rework returns and link them in lot genealogy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared production lines and utilities | Subdivide by route, line, product family, or batch and use direct meters, issue records, machine time, or causal engineering drivers before allocation. |  |
| `allocation_scrap` | Exported metal scrap, forging flash, scale, slag, chips, and rejected parts | Report each atomic exported output separately and disclose mass, material or alloy, contamination, revenue, destination, and any internal return. Do not subtract an avoided primary-material credit inside the foreground inventory unless the declared study method explicitly requires it. |  |
| `allocation_multioutput` | Unavoidable shared burdens | Use a documented physical causal relation where defensible; if none exists, use economic allocation based on a consistent reporting-period price basis and disclose sensitivity. Never allocate solely to eliminate an imbalance. |  |
| `allocation_internal_recycling` | Internal metal, sand, paint, water, bath, and fluid loops | Do not count internally recirculated or reworked material as both new input and waste output. Record only make-up input, inventory change, losses, exported outputs, and material crossing the product-system boundary. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_manufacturing_materials` | `manufacture_uncoated_part` | route-specific metal inputs | weighbridge, ERP issue, purchase, and inventory records | material identity; grade; opening stock; receipts; issues; returns; closing stock; internal return | Reconcile each alloy/form separately to covered lots | kg | each receipt/issue and period close | all covered lots and reporting period | all included manufacturing sites | retain raw opening + receipts - closing - returns excluding verified internal loops, then normalize once by accepted final mass from `cp_final_release` | calibrated scales; supplier certificates; stock reconciliation |
| `cp_manufacturing_energy` | `manufacture_uncoated_part` | electricity and natural gas | meter, invoice, and allocation records | meter id; opening/closing reading; unit; fuel; temperature/pressure; shared-driver quantity | Direct submetering preferred; otherwise documented causal allocation | MJ; m3 | meter interval or invoice period | full reporting period | included route equipment and shared services | retain raw route quantity and normalize once by accepted final mass from `cp_final_release` | meter calibration; invoices; allocation worksheet |
| `cp_manufacturing_fluids` | `manufacture_uncoated_part` | oxygen, water, and cutting fluid | meters, cylinder delivery, chemical issue, and stock records | substance; formulation; concentration; quantity; returns; stock change; recirculation | Separate each substance and calculate only net boundary input | m3; kg | each issue/delivery and period close | all covered lots | included manufacturing operations | retain raw net input by substance and normalize once by accepted final mass from `cp_final_release` | delivery tickets; meter checks; concentration certificate |
| `cp_foundry_materials` | `manufacture_uncoated_part` | silica sand, bentonite, and coal dust for cast-iron green-sand moulding | purchase, batch, sand-system, inventory, and reclamation records | material identity; grade; new make-up; internal reclaimed mass; binder/additive formulation; opening/closing stock | Reconcile each atomic moulding material separately and exclude internal reclaimed sand from new boundary input | kg | each batch and period close | all represented cast-iron green-sand lots | included on-site green-sand preparation | retain raw new make-up by material and normalize once by accepted final mass from `cp_final_release` | supplier specifications; batch sheets; stock and reclamation reconciliation |
| `cp_forging_outputs` | `manufacture_uncoated_part` | forging flash, rejected low-alloy-steel forgings, and forging scale | production, trim, scale-bin, rejection, recovery, and dispatch records | output identity; mass; alloy; source step; rejection reason; internal return; destination | Weigh each output separately; distinguish exported material from internal rework or remelting | kg | each lot or dispatch | all represented closed-die forging lots | included on-site forging operations | retain raw mass by atomic flow, deduct documented internal returns, and normalize once by accepted final mass from `cp_final_release` | calibrated scales; rejection log; recovery or waste manifest |
| `cp_foundry_outputs` | `manufacture_uncoated_part` | spent silica moulding sand, foundry slag or dross, and rejected cast-iron castings | sand-reclamation, furnace, rejection, scale, recovery, and dispatch records | output identity; mass; furnace; charge; binder; contaminants; moisture; internal return; destination | Weigh each output separately after deducting documented on-site sand reclamation or metal return | kg | each batch or dispatch | all represented cast-iron green-sand lots | included on-site casting operations | retain raw mass by atomic flow, deduct documented internal returns, and normalize once by accepted final mass from `cp_final_release` | reclamation balance; furnace log; rejection log; waste or recovery manifest |
| `cp_manufacturing_outputs` | `manufacture_uncoated_part` | accepted uncoated part, fabricated-route scrap, cast-iron machining chips, and spent cutting fluid | production, scale, waste manifest, and recovery records | output identity; mass; alloy; rejection reason; water/oil content; internal return; destination | Weigh accepted output and each waste stream separately | kg | each lot or dispatch | all covered lots | included manufacturing operations | retain raw mass by flow identity, deduct documented internal returns, and normalize once by accepted final mass from `cp_final_release` | calibrated scale; production release; waste manifest |
| `cp_route_particulate` | `manufacture_uncoated_part` | direct particulate matter from forging and foundry operations | stack and fugitive monitoring, source test, control-device, and operating records | route; source; operation; particle-size basis; measured release; capture; control efficiency; operating hours | Quantify residual releases separately for forging and foundry sources using one documented facility-approved method | kg | monitoring or reporting interval | all represented on-site forging or foundry operations | included source, capture, control, stack, and fugitive points | retain raw release by route and source and normalize once by accepted final mass from `cp_final_release` | monitoring QA; source-test report; control logs; calculation file |
| `cp_foundry_additive_gases` | `manufacture_uncoated_part` | carbon monoxide, fossil carbon dioxide, benzene, toluene, and xylene from carbonaceous green-sand additives | sand-formulation, additive issue, casting campaign, stack and fugitive monitoring, capture/control, and residue-characterisation records | additive identity; coal rank or substitute; fossil and biogenic carbon fractions; batch mass; pouring/cooling/shake-out source; species and isomer basis; captured mass; destruction efficiency; retained carbon; residual release; operating hours | First document the actual sand formulation. When coal dust or a carbonaceous substitute is present, quantify each applicable named residual species separately across stack and fugitive points after control; when absent, retain formulation evidence for non-applicability. Do not infer one species from carbon monoxide or a total-organic measurement. | kg | each formulation, campaign, and monitoring/reporting interval | all represented on-site cast-iron green-sand campaigns | sand preparation, pouring, cooling, shake-out, capture, control, stacks, fugitive points, retained sand, and exported residues within the declared product system | retain raw species-specific releases and carbon-fate terms, close `calc_foundry_additive_carbon_fate`, then normalize once by accepted final mass from `cp_final_release` | supplier specification or SDS; batch sheet; source-test or monitoring QA; control logs; residue analysis; carbon-balance worksheet |
| `cp_manufacturing_emissions` | `manufacture_uncoated_part` | direct fossil carbon dioxide | continuous/periodic monitoring or approved facility calculation record | source; fuel quantity; carbon basis; factor/method; oxidation; measured emission; operating hours | Use monitored result or documented jurisdiction/facility method without duplicating upstream emissions | kg | monitoring/reporting interval | all covered thermal operations | included direct combustion sources | retain raw source emission and normalize once by accepted final mass from `cp_final_release` | monitoring QA; calculation file; fuel records |
| `cp_coating_materials` | `surface_coating` | uncoated part, water, sodium hydroxide, and paint | batch, meter, issue, formulation, concentration, and stock records | part mass; water reading; chemical mass; solution concentration; paint issues/returns/recovery; solids | Reconcile each material through the declared coating campaign | kg | each batch/issue and period close | all coated lots | included coating line | retain raw net input by atomic flow and normalize once by accepted final mass from `cp_final_release` | batch sheet; meter calibration; SDS/specification; stock reconciliation |
| `cp_coating_energy` | `surface_coating` | electricity and natural gas | line meters, invoices, and operating records | meter id; readings; unit; operating hours; temperature/pressure; shared driver | Submeter line energy or allocate with documented line operating driver | MJ; m3 | meter interval | all coating campaigns | included coating line and controls | retain raw quantity by energy flow and normalize once by accepted final mass from `cp_final_release` | calibration; invoice; allocation worksheet |
| `cp_coating_outputs` | `surface_coating` | coated subassembly or individual part, waste paint, alkaline rinse wastewater, and spent alkaline bath | scale, batch, bath, waste manifest, and discharge records | product form; coated mass; reject or rework mass; waste mass; water mass; bath inventory; pH; concentration; contaminants; water content; destination | Measure each output separately; reconcile bath opening, additions, retained inventory, regeneration, discharge, and internal return | kg | each batch, bath change, or dispatch | all coating campaigns | included coating line | retain raw output by atomic flow and normalize once by accepted final mass from `cp_final_release` | release record; scale check; bath balance; waste/discharge manifest; laboratory result |
| `cp_coating_emissions` | `surface_coating` | NMVOC and direct fossil carbon dioxide | stack/fugitive monitoring, coating mass balance, control-device, and fuel records | paint/solvent composition; usage; captured mass; destruction efficiency; measured release; fuel; method | Apply one documented facility-approved method and avoid double counting speciated and aggregate NMVOC | kg | each campaign and reporting interval | all coating campaigns and cure operation | application, flash-off, curing, control, stack, and fugitive points | retain raw release by atomic flow and normalize once by accepted final mass from `cp_final_release` | monitoring QA; formulation data; control logs; calculation file |
| `cp_final_release` | `final_release` | uncoated, coated-subassembly, or coated-individual route input; accepted reference product; exported final reject | inspection, nonconformance, rework, lot genealogy, dispatch, and calibrated scale records | part id; drawing/revision; route; product form; coating state; input mass; accepted mass; rejected mass; internal rework return; exported reject; lot; site | Link accepted and rejected output to exactly one route, weigh net product, and distinguish internal rework from exported rejects | kg | each lot | all represented lots | all included release locations | use accepted final mass as the sole denominator for every normalized exchange; retain reject and rework masses for transfer balance | inspection release; nonconformance and rework record; scale calibration; lot genealogy; waste or recovery manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory exchange | normalized quantity = covered-lot exchange quantity / covered-lot accepted finished-part mass | atomic exchange quantity; accepted mass from `cp_final_release` | quantity per 1 kg accepted finished part |  |
| `calc_active_sodium_hydroxide` | `sodium_hydroxide` | active NaOH mass = supplied cleaner mass × verified NaOH mass fraction | cleaner issue mass; concentration certificate or test | kg active sodium hydroxide |  |
| `calc_stock_consumption` | metal stock, foundry materials, paint, and cutting fluid | Choose and document exactly one accounting basis for each atomic flow. External-stock basis: new boundary input = opening externally sourced stock + external receipts - closing externally sourced stock - returns to supplier; internal circulation is outside this equation and cancels inside the product system. Gross-charge basis: new material charged = gross process charge - the internal reclaimed or recirculated charge included in that gross quantity; do not subtract the same internal quantity again through stock accounting. QA example: 10 kg external new sand plus 90 kg internally circulated sand, with unchanged stock, gives 10 kg new boundary input under either basis, never -80 kg. | stock and external transaction records; gross charge records when used; separately identified internal circulation; selected accounting basis | net boundary input by atomic flow without double subtraction |  |
| `calc_route_transfer` | uncoated and coated intermediates and final release | On raw lot masses, reconcile manufacturing output to coating input or uncoated release input plus route-specific exported rejects, internal rework/return, and stock change; reconcile each coated product form to its matching final-release input; reconcile final-release input to accepted reference product plus exported final reject, internal rework return, and stock change. Apply `calc_reference_normalization` only after these balances. | lot genealogy; intermediate masses by product form; route-specific rejects; final rejects; internal rework or return; stock change | route-transfer reconciliation before single final-mass normalization |  |
| `calc_alkaline_bath_balance` | `spent_alkaline_cleaning_bath` | Define one control volume containing the cleaning bath, connected hold tanks and any on-site regeneration unit. For each campaign: opening bath inventory + external chemical and water additions = closing bath inventory + exported spent bath + separately measured bath carryover to rinse wastewater + other measured boundary losses. Transfers to and from on-site regeneration are paired internal movements that cancel; retained or regenerated liquor appears once in closing inventory and is not subtracted again. If regeneration is outside the product-system boundary, record the outbound and return transfers explicitly rather than netting them. | opening and closing bath inventory; external chemical and water additions; paired internal-transfer records; off-site transfers if any; spent-bath dispatch; bath carryover in rinse records; measured losses | mass-conserving alkaline-bath control-volume balance by campaign |  |
| `calc_foundry_additive_carbon_fate` | `foundry_carbon_monoxide_to_air`, `foundry_fossil_carbon_dioxide_to_air`, `foundry_benzene_to_air`, `foundry_toluene_to_air`, and `foundry_xylene_to_air` | On a raw campaign basis, reconcile opening in-boundary additive carbon + external additive carbon = closing in-boundary additive carbon + carbon retained in accepted castings + carbon exported in spent sand or other separately identified residues + carbon destroyed and converted to explicitly reported products + residual direct carbon species + other measured boundary loss. Internal sand circulation and on-site capture/return transfers are paired and cancel. Report CO, fossil CO2, benzene, toluene, and xylene as separate exchanges when applicable; do not force an unclosed difference into any named emission or an unknown-emissions row. | additive formulation and fossil/biogenic carbon fractions; opening and closing sand-system carbon inventory; accepted casting and residue analyses; capture and destruction records; species-specific direct releases | closed additive-carbon fate balance and separately reported residual emissions before final-mass normalization | `eu-jrc-smitheries-foundries-bref-2024` |
| `calc_energy_to_mj` | electricity recorded in kWh | MJ = kWh × 3.6 | original electricity record | MJ purchased electricity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain drawing/revision, machine compatibility, material certificate, route, dimensions, heat-treatment/hardness, coating state, lot, and release status. | drawing; certificate; inspection and lot-genealogy records |
| `dq_route_completeness` | Process map | Demonstrate that each on-site and outsourced step required for the declared state is included or linked to an upstream process; explain every non-applicable conditional row. | route sheet; purchase orders; subcontractor records |
| `dq_temporal_coverage` | All foreground data | Cover every lot represented by the dataset over the declared reporting period; justify gaps, shutdowns, abnormal campaigns, and shorter periods. | production calendar; meter coverage; exception log |
| `dq_mass_reconciliation` | Metal, foundry sand and additives, paint, alkaline bath, fluids, products, and wastes | Reconcile opening stock, inputs, outputs, internal returns or rework, inventory change, and documented losses without using allocation to hide imbalance. | signed balance worksheet; stock, reclamation, rework, bath, and dispatch records |
| `dq_energy_coverage` | Electricity and natural gas | Match meter/invoice periods to production periods; disclose shared-load allocation and excluded loads. | meter map; invoices; allocation worksheet |
| `dq_emission_method` | Direct emissions | Identify source locations, monitoring or calculation method, aggregation, control-device treatment, and uncertainty; prevent duplicate upstream or aggregate/speciated emissions. For the green-sand variant, retain formulation evidence, distinguish absent additives, carbon retained in products/sand/residues, controlled destruction, and residual named releases, and explain any unclosed additive-carbon difference without assigning it to an umbrella flow. | monitoring QA, permits/reports, formulation and residue records, control logs, carbon-fate calculation file |
| `dq_upstream_selection` | Delivered inputs | Record supplier/product state, geography, technology, recycled content where relevant, and delivery boundary for every upstream dataset. | supplier documentation and dataset selection log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference flow | Fail if any required qualifier, accepted mass, coating state, manufacturing route, site, reporting period, or lot coverage is absent. | `un-cpc-3-0-structure-2025`; `china-mof-serbia-tariff-2024` |
| `validate_route` | Process inventory | Fail if the dataset combines incompatible fabricated, closed-die-forged, or cast-iron green-sand inputs without route shares; silently assigns zero to an applicable auxiliary, residue, reject, or direct emission; or applies these bounded rows to a different route without explicit extension. | `eu-jrc-smitheries-foundries-bref-2024` |
| `validate_internal_loop_balance` | Stock, reclamation, recirculation, and alkaline-bath balances | Fail if external-receipt and gross-charge accounting bases are mixed, if the same internal circulation is subtracted twice, if a paired on-site transfer does not cancel within the declared control volume, or if retained/regenerated bath is both included in closing inventory and deducted separately. |  |
| `validate_foundry_additive_fate` | Cast-iron green-sand additive releases | Fail when coal dust or a carbonaceous substitute is used but actual formulation, capture/control, retained/exported carbon, and applicable residual carbon monoxide, fossil carbon dioxide, benzene, toluene, and xylene are not assessed separately; a particulate-only, fuel-CO2-only, CO-surrogate, or umbrella unknown-emissions record is incomplete. | `eu-jrc-smitheries-foundries-bref-2024` |
| `validate_outsourcing` | Process inventory | Fail if an outsourced operation is omitted rather than linked to an upstream process, or if its on-site rows are marked not applicable without purchase-order and supplier evidence. | `eu-jrc-smitheries-foundries-bref-2024` |
| `validate_atomic_flows` | Inventory rows | Fail if metal forms, energy carriers, process chemicals, wastes, wastewater streams, or direct emissions are combined into an umbrella exchange. | `us-epa-sector-aa-fabricated-metal-2021` |
| `validate_transfer_balance` | Intermediate product flows | Fail if raw uncoated, coated-subassembly, coated-individual, or final-release masses cannot be reconciled to the matching input, accepted output, atomic exported rejects, internal rework or return, and stock change before one normalization to accepted final mass. |  |
| `validate_bath_balance` | Alkaline cleaning | Fail if spent concentrated alkaline bath, retained or regenerated bath, process loss, and alkaline rinse wastewater are not separately identified and reconciled. | `us-epa-sector-aa-fabricated-metal-2021` |
| `validate_boundary_and_double_counting` | Energy and emissions | Fail if upstream electricity or fuel-chain emissions are duplicated as direct emissions, or if NMVOC is double counted with separately included species. | `us-epa-misc-metal-coating-tsd` |
| `validate_unresolved_uuid` | UUID-empty rows | Report every UUID-empty identity listed in manifest review metadata, including route-specific coal dust, forging flash, foundry slag, rejected castings, coated individual intermediates, final rejects, and the original unresolved rows; do not substitute a proxy UUID. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate foreground production dataset for a declared finished soil-machinery part |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology, representativeness, and unresolved identities are reviewed |
| allowed_use | LCA or carbon-footprint modelling of machinery systems whose part identity, route, material, coating state, geography, technology, and time match the declared dataset |
| excluded_use | Complete soil machinery; generic machinery parts; service-life comparison without functional equivalence; use or end-of-life modelling; substitution for a different material/forming/coating route |
| required_metadata | PCR id/version; part and drawing identity; compatible machine; material/grade; route; coating; accepted mass; site/geography; reporting period; lot coverage; allocation; upstream dataset choices; unresolved UUIDs |
| required_quality_disclosure | meter and stock coverage; allocation drivers; route completeness; mass reconciliation; waste destinations; emission methods and uncertainty; outsourced steps; cut-offs; deviations |
| update_trigger | Change in drawing or material grade, primary forming route, heat treatment, coating system, site, energy supply, allocation, waste destination, emission control, or reporting-period representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 441/4411/44115 identity and distinction from complete soil machinery |
| `china-mof-serbia-tariff-2024` | official_guidance | Ministry of Finance of the People's Republic of China, 2024年对塞尔维亚实施的协定税率表, row 6630 (HS 84329000), https://m.mof.gov.cn/zcfb/202406/P020240625320768010766.pdf | Professional Chinese terminology for parts of soil-preparation/cultivation machinery and rollers |
| `eu-jrc-smitheries-foundries-bref-2024` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, 2024, DOI 10.2760/4805267 | Bounded closed-die forging and cast-iron green-sand route decomposition; forging flash, scale, rejects and particulate sources; silica sand, bentonite and coal-dust inputs; spent sand, slag/dross and casting rejects; additive-decomposition sources during pouring, cooling and shake-out; and the green-sand named releases carbon monoxide, carbon dioxide, benzene, toluene and xylene in Table 2.59 |
| `us-epa-misc-metal-coating-tsd` | official_guidance | U.S. EPA, National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document, agricultural and construction machinery industry, pp. 8-16 and 8-18, https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | Agricultural-machinery coating applicability and pretreatment/application/flash-off/curing emission points |
| `us-epa-sector-aa-fabricated-metal-2021` | official_guidance | U.S. EPA, Sector AA: Fabricated Metal Products Manufacturing Facilities, EPA-833-F-06-042, February 2021, Table 1, https://www.epa.gov/sites/default/files/2015-10/documents/sector_aa_fabmetal.pdf | Qualitative counterevidence and collection cross-check for machining fluids, metal scrap, cleaning, coating wastes, and pollutants |
