---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.railway-or-tramway-track-construction-material-of-iron-or-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Railway or tramway track construction material of iron or steel

## 1. Scope and Applicability

This PCR governs foreground data packages for manufacturing iron or steel products specialized for constructing, joining, or fixing railway or tramway track. It covers rails, check-rails, rack rails, switch blades, crossing frogs and other crossing pieces, iron or steel sleepers, fish-plates, chairs, sole or base plates, rail clips, ties, and equivalent track-specific material within the declared product family.

The foreground boundary begins with received semi-finished steel for rolling or forging, or declared ferrous charge and mould materials for foundry production, and ends with conforming track construction material at the manufacturing plant gate. Upstream ironmaking, steelmaking, purchased-material production and inbound transport require separate upstream datasets. Track design, civil works, installation, welding at the construction site, maintenance, railway operation, and end-of-life are excluded. Rolling-stock parts, signalling equipment, generic structural sections, non-metallic sleepers, and assembled railway infrastructure are outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.railway-or-tramway-track-construction-material-of-iron-or-steel |
| classification_refs | CPC 3.0: 41253 (exact classification context) |
| covered_products | Iron or steel material specialized for constructing, joining, or fixing railway or tramway track, including the product families listed in Section 1 |
| excluded_products | Railway construction services and assembled railways; rolling-stock parts and signalling equipment; generic iron or steel sections; non-metallic track components; site installation, use, maintenance, and end-of-life |
| representative_product | Hot-rolled steel rail delivered at the manufacturing plant gate |
| production_route | Hot rolling of blooms is the representative route; smithery forming and ferrous foundry casting are conditional routes for declared product families, followed by route-specific conditioning, machining, finishing, and inspection |
| market_state | Finished, specification-conforming track construction material at plant gate; product family, grade, dimensions, treatment, and delivery state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply specification-conforming iron or steel railway or tramway track construction material |
| How much | 1,000 kg net finished product |
| How well | Meets the declared rail, sleeper, crossing, fastening, or track-component specification and acceptance criteria |
| How long or cycle | One production batch delivered at the plant gate; installation and service life are outside the boundary |
| reference_flow_link | `finished_track_material` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net finished product |
| Reference product flow | Railway or tramway track construction material of iron or steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family and component designation; iron or steel grade and applicable specification; section profile or component geometry and dimensions; manufacturing route; heat-treatment and surface-condition state; net mass accounting rule; plant geography; reporting period; electricity supplier, grid geography, voltage, technology and delivery boundary; natural-gas supply geography and reference-volume conditions; confirmation that transport packaging is excluded |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalized material exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg net accepted finished product, excluding transport packaging. |
| `mass_reconciliation` | Each production route | Mass | kg | Reconcile measured input, accepted product, internal returns, exported residues, transferred wastes, and stock change over the same reporting period; document moisture or coating corrections where material. |
| `electricity_energy` | Alternating-current electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity and convert kWh to MJ using 1 kWh = 3.6 MJ; declare supplier, grid geography, voltage, technology and delivery boundary. |
| `natural_gas_volume` | Gaseous natural-gas rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gas volume with reference temperature and pressure; if energy is derived, retain the measured volume, heating value, and conversion calculation. |
| `direct_emission_mass` | Direct elementary emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use stack measurements or a documented calculation from metered fuel and composition; do not substitute life-cycle impact indicators for elementary-flow mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received semi-finished steel bloom or billet for rolling or forging, or separately declared purchased ferrous charge and moulding sand for casting |
| starting_condition_role | Upstream products entering downstream manufacture of track construction material |
| product_classification_scope | Iron or steel railway or tramway track construction material; the dataset must name one product family and component designation |
| recursive_input_rule | A purchased input already belonging to this product category is recorded as an upstream product flow with its own supplier dataset and is not recursively remanufactured inside this foreground boundary |
| upstream_dataset_requirement | Supplier-specific or representative upstream datasets are required for semi-finished steel, pig iron, purchased steel scrap, moulding sand, electricity, natural gas, process water and other purchased inputs actually used |
| disclosure | Declare product family, grade/specification, route, starting material state, included operations, site, reporting period, cut-offs, internal returns, exported residues, waste destinations, direct-emission method, and packaging boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | Foreground process inclusion | Include only the declared hot-rolling, smithery, or foundry route and the final-conditioning operations actually used; do not average undeclared routes. | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |
| `boundary_upstream_separation` | Received materials and energy | Keep upstream production and inbound transport outside the foreground manufacturing processes while linking every purchased input to an upstream dataset. | `ec-jrc-fmp-bref-2022` |
| `boundary_downstream_exclusion` | Product after plant gate | Exclude track installation, railway construction, use, maintenance, replacement, and end-of-life unless a separate downstream model explicitly adds them. | `onesteel-hot-rolled-structural-rail-epd-2026` |
| `boundary_residue_transfer` | Scrap, scale, slag and spent sand | Record each residue until the measured transfer point and declare internal return, external recovery, treatment or disposal without combining distinct residue flows. | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hot_rolling` | Reheating, descaling and hot rolling | `conditional` | Include for rails, rolled steel sleepers, and other track-specific products formed by hot rolling | Downstream forming of steel bloom | kg hot-rolled track-material intermediate |
| `smithery_forming` | Heating and smithery forming | `conditional` | Include for track components formed by forging or hammering | Downstream forming of steel billet | kg forged track-material intermediate |
| `foundry_casting` | Ferrous melting, moulding and casting | `conditional` | Include for cast iron or steel crossing pieces, chairs, plates, or other declared cast track components | Foundry production of near-net-shape component | kg accepted cast track-material intermediate |
| `final_conditioning` | Heat treatment, machining, finishing and inspection | `required` | Always include; individual operations apply only when performed for the declared product and specification | Final manufacture and quality acceptance | 1,000 kg net accepted track construction material |

### Process: Reheating, descaling and hot rolling (`hot_rolling`)

#### Inputs

##### Product flows

###### Steel bloom charge (`rolling_steel_bloom`)

Received steel bloom crosses the boundary for reheating and rolling; record weighed dry mass by grade and heat.

- Selected flow: Steel bloom
- Flow property / unit: Mass / kg
- Amount rule: Weighed bloom charged to batches allocated to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_balance`
- Sources: `ec-jrc-fmp-bref-2022`; `onesteel-hot-rolled-structural-rail-epd-2026`

###### Reheating-furnace natural gas (`rolling_natural_gas`)

Record natural gas only when consumed by the declared rolling route and retain supply geography and reference-volume conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas assigned to reheating and supporting rolling-line burners
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling-line electricity (`rolling_electricity`)

Record delivered alternating-current electricity for rollers, pumps, drives and line auxiliaries with mandatory supply qualifiers.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity assigned to reheating, descaling, rolling, cooling and line auxiliaries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy`
- Sources: `ec-jrc-fmp-bref-2022`

###### Descaling-water supply (`descaling_water`)

Record process water entering the descaling and cooling circuit, net of documented recirculation. Retain water source, quality, supply geography, delivery boundary, metering basis and any density conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water entering the declared rolling-line water circuit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_water`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot-rolled track-material intermediate (`hot_rolled_track_intermediate`)

Record the accepted hot-rolled rail, sleeper section, or declared track-specific rolled shape before final conditioning.

- Selected flow: Hot-rolled railway track-material intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted hot-rolled intermediate transferred to final conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_balance`
- Sources: `ec-jrc-fmp-bref-2022`; `onesteel-hot-rolled-structural-rail-epd-2026`

##### Waste flows

###### Separated mill scale (`mill_scale_waste`)

Record iron-oxide mill scale removed during surface rectification and descaling as one transferred waste flow.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: Weighed separated mill scale transferred for recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_balance`
- Sources: `ec-jrc-fmp-bref-2022`

###### Rolling crop and trimming scrap (`rolling_steel_scrap`)

Record steel crop ends and trimming scrap leaving the process boundary; internal return remains in the mass balance and is not exported output.

- Selected flow: Steel scrap `df700a38-f0e7-486c-abd0-18acaa356280`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap transferred outside the rolling process after deducting documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_balance`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide from reheating (`rolling_fossil_co2_air`)

Record fossil carbon dioxide emitted directly from natural-gas combustion in rolling-route furnaces.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack mass or calculated mass from metered fuel and documented carbon balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rolling_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Nitrogen oxides from reheating (`rolling_nox_air`)

Record aggregate nitrogen oxides emitted directly through non-urban or high-stack discharge from rolling-route combustion. Use another elementary-flow compartment when the monitored release point does not meet that compartment definition.

- Selected flow: Nitrogen oxides `191b44d4-90c9-465a-8802-93a651b4fd52`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack mass or documented calculation from monitored combustion data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rolling_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Heating and smithery forming (`smithery_forming`)

#### Inputs

##### Product flows

###### Steel billet charge (`forging_steel_billet`)

Record the received steel billet by grade and heat for track-component forging.

- Selected flow: Billet `7de70586-42d8-40bb-a687-e0e0c05722e4`
- Flow property / unit: Mass / kg
- Amount rule: Weighed billet charged to declared forging batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forging_material_balance`
- Sources: `ec-jrc-sf-bref-2024`

###### Forging-furnace natural gas (`forging_natural_gas`)

Record natural gas consumed for billet heating and route-specific heat treatment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas assigned to declared forging batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forging_energy`
- Sources: `ec-jrc-sf-bref-2024`

###### Smithery electricity (`forging_electricity`)

Record delivered alternating-current electricity for forging equipment, drives and auxiliaries.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity assigned to heating, forging, cooling and auxiliaries
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forging_energy`
- Sources: `ec-jrc-sf-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Forged track-material intermediate (`forged_track_intermediate`)

Record accepted forged track components before final conditioning.

- Selected flow: Forged railway track-material intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted forged intermediate transferred to final conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forging_material_balance`
- Sources: `ec-jrc-sf-bref-2024`

##### Waste flows

###### Forging flash and cropping scrap (`forging_steel_scrap`)

Record separated ferrous flash, crop pieces, and rejected pieces leaving the forging process.

- Selected flow: Steel scrap `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed forging scrap transferred outside the process after deducting documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forging_material_balance`
- Sources: `ec-jrc-sf-bref-2024`

##### Elementary flows

###### Fossil carbon dioxide from forging heat (`forging_fossil_co2_air`)

Record fossil carbon dioxide emitted directly from natural-gas combustion in the smithery route.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack mass or calculated mass from metered fuel and documented carbon balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forging_emissions`
- Sources: `ec-jrc-sf-bref-2024`

### Process: Ferrous melting, moulding and casting (`foundry_casting`)

#### Inputs

##### Product flows

###### Purchased steel-scrap charge (`foundry_steel_scrap_charge`)

Record purchased prepared steel scrap entering the foundry as a product input, separately from internally returned metal.

- Selected flow: Scrap Steel `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- Flow property / unit: Mass / kg
- Amount rule: Weighed purchased steel-scrap charge by grade and heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_charge_balance`
- Sources: `ec-jrc-sf-bref-2024`

###### Foundry-grade pig iron (`foundry_pig_iron`)

Record pig iron only when it is an actual declared charge constituent.

- Selected flow: Pig iron `a636ed9e-f90a-48cb-a180-c75b1fc92cf1`
- Flow property / unit: Mass / kg
- Amount rule: Weighed pig iron charged by heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_charge_balance`
- Sources: `ec-jrc-sf-bref-2024`

###### Foundry electricity (`foundry_electricity`)

Record delivered alternating-current electricity for melting, mould preparation, handling and auxiliaries.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity assigned to declared foundry heats and associated operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_energy`
- Sources: `ec-jrc-sf-bref-2024`

###### Prepared moulding sand (`foundry_moulding_sand`)

Record fresh prepared moulding sand crossing the foundry boundary, with binder system declared.

- Selected flow: Prepared foundry moulding sand
- Flow property / unit: Mass / kg
- Amount rule: Weighed fresh moulding sand added to declared casting batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_sand_balance`
- Sources: `ec-jrc-sf-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cast track-material intermediate (`cast_track_intermediate`)

Record accepted cast track components after shakeout and before final conditioning.

- Selected flow: Cast railway track-material intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted cast intermediate transferred to final conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_charge_balance`
- Sources: `ec-jrc-sf-bref-2024`

##### Waste flows

###### Ferrous-foundry slag (`foundry_slag_waste`)

Record separated slag leaving melting and metal treatment as one waste flow.

- Selected flow: Ferrous-foundry melting slag
- Flow property / unit: Mass / kg
- Amount rule: Weighed slag transferred for recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_charge_balance`
- Sources: `ec-jrc-sf-bref-2024`

###### Spent moulding sand (`spent_foundry_sand`)

Record spent foundry sand leaving shakeout or sand reclamation as a separate waste flow.

- Selected flow: Spent foundry moulding sand
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent sand transferred outside the foundry after deducting documented internal reclamation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_sand_balance`
- Sources: `ec-jrc-sf-bref-2024`

##### Elementary flows

### Process: Heat treatment, machining, finishing and inspection (`final_conditioning`)

#### Inputs

##### Product flows

###### Hot-rolled intermediate input (`finishing_hot_rolled_intermediate`)

Use this internal link only for the declared hot-rolling route.

- Selected flow: Hot-rolled railway track-material intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed hot-rolled intermediate entering final conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_balance`
- Sources: `ec-jrc-fmp-bref-2022`; `onesteel-hot-rolled-structural-rail-epd-2026`

###### Forged intermediate input (`finishing_forged_intermediate`)

Use this internal link only for the declared smithery route.

- Selected flow: Forged railway track-material intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed forged intermediate entering final conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_balance`
- Sources: `ec-jrc-sf-bref-2024`

###### Cast intermediate input (`finishing_cast_intermediate`)

Use this internal link only for the declared foundry route.

- Selected flow: Cast railway track-material intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed cast intermediate entering final conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_balance`
- Sources: `ec-jrc-sf-bref-2024`

###### Final-conditioning electricity (`finishing_electricity`)

Record delivered alternating-current electricity for heat treatment, straightening, sawing, drilling, machining, grinding, inspection and handling actually performed.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity assigned to final conditioning and quality acceptance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources: `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished track construction material (`finished_track_material`)

This is the reference product after route-specific conditioning and acceptance inspection.

- Selected flow: Railway or tramway track construction material of iron or steel
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of net accepted product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `unstats-cpc-v3-41253`; `unstats-hs-7302-scope`; `onesteel-hot-rolled-structural-rail-epd-2026`

##### Waste flows

###### Final machining and rejection scrap (`finishing_steel_scrap`)

Record steel offcuts, machining swarf, and rejected pieces leaving final conditioning as one ferrous scrap flow only when they share the same transfer identity and destination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap transferred outside final conditioning after deducting documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_balance`
- Sources: `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | Route and product-family production | Subdivide hot-rolling, smithery, foundry and final-conditioning records using direct meters, batch records and mass tracking before applying allocation. |  |
| `allocation_internal_return` | Internal scrap, returns and reclaimed sand | Treat internal return as an internal loop and reconcile it once; do not report it simultaneously as exported waste and purchased input. | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |
| `allocation_exported_residue` | Exported scrap, scale, slag and spent sand | Carry manufacturing burdens to the measured transfer point. Do not credit avoided primary production inside this gate-to-gate dataset; any downstream substitution scenario must be separate and disclosed. | `onesteel-hot-rolled-structural-rail-epd-2026` |
| `allocation_shared_process` | Unsubdivided shared equipment | If direct subdivision is impossible, allocate shared energy and ancillary use by a documented physical driver; use processed mass only when no more causal driver is available and disclose a sensitivity check. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rolling_material_balance` | `hot_rolling` | bloom, intermediate, mill scale and rolling scrap | weighbridge, scale and production records | heat_id; grade; input_mass_kg; accepted_mass_kg; internal_return_kg; scale_kg; exported_scrap_kg; stock_change_kg | Reconcile heat and campaign records | kg | each heat or batch | representative 12 consecutive months | all included rolling lines | Sum route records and normalize with `calc_reference_normalization` | calibrated scales; heat traceability; signed reconciliation |
| `cp_rolling_energy` | `hot_rolling` | natural gas and electricity | utility meters and allocation logs | meter_id; timestamp; gas_m3; gas_reference_conditions; electricity_kWh; line_status; product_mass_kg | Read dedicated meters or documented causal submeter allocation | m3; kWh | hourly or shift | same period as production | included furnaces and rolling line | Sum productive consumption; document start-up and downtime treatment | meter calibration; invoice reconciliation; allocation log |
| `cp_rolling_water` | `hot_rolling` | descaling-water supply | water meters and circuit logs | make_up_water_kg; recirculated_water_kg; blowdown_kg; reporting_period | Measure make-up separately from recirculation | kg | shift or daily | same period as production | declared descaling and cooling circuit | Report net external water entering the boundary | meter checks; circuit balance |
| `cp_rolling_emissions` | `hot_rolling` | fossil CO2 and nitrogen oxides | stack monitoring and fuel records | stack_id; pollutant; concentration; flow; operating_time; gas_m3; carbon_factor; oxidation_factor | Integrate validated monitoring or calculate from collected fuel fields | kg | monitoring interval or batch | same period as production | all included combustion sources | Calculate with `calc_direct_emissions` and normalize | monitor QA/QC; fuel certificate; calculation audit |
| `cp_forging_material_balance` | `smithery_forming` | billet, forged intermediate and forging scrap | batch weights and production records | batch_id; grade; billet_kg; accepted_intermediate_kg; internal_return_kg; exported_scrap_kg; stock_change_kg | Reconcile each forging batch | kg | each batch | representative 12 consecutive months | all included smithery equipment | Sum declared-product batches and normalize | calibrated scales; batch traceability |
| `cp_forging_energy` | `smithery_forming` | natural gas and electricity | utility meters and batch logs | meter_id; timestamp; gas_m3; reference_conditions; electricity_kWh; batch_id | Meter or causally allocate energy to forging batches | m3; kWh | shift or batch | same period as production | included furnaces, presses and auxiliaries | Sum productive consumption and normalize | calibration; invoice reconciliation |
| `cp_forging_emissions` | `smithery_forming` | fossil CO2 | stack and fuel records | stack_id; concentration; flow; operating_time; gas_m3; carbon_factor; oxidation_factor | Measure or calculate from collected fuel fields | kg | monitoring interval or batch | same period as production | included combustion sources | Calculate with `calc_direct_emissions` and normalize | monitoring QA/QC; fuel certificate |
| `cp_foundry_charge_balance` | `foundry_casting` | purchased charge, cast intermediate and slag | heat sheets and scale records | heat_id; scrap_charge_kg; pig_iron_kg; internal_return_kg; accepted_casting_kg; slag_kg; stock_change_kg | Reconcile each foundry heat | kg | each heat | representative 12 consecutive months | all included melting units | Sum declared-product heats and normalize | certified scales; heat chemistry; reconciliation |
| `cp_foundry_energy` | `foundry_casting` | electricity | electricity meters and heat logs | meter_id; timestamp; electricity_kWh; heat_id; accepted_casting_kg | Meter or causally allocate electricity by heat | kWh | each heat or shift | same period as production | included melting, moulding and handling equipment | Sum productive consumption and convert with `calc_electricity_conversion` | calibration; invoice reconciliation |
| `cp_foundry_sand_balance` | `foundry_casting` | fresh and spent moulding sand | batch and reclamation records | batch_id; fresh_sand_kg; reclaimed_sand_kg; spent_sand_exported_kg; binder_system | Reconcile fresh addition, internal reclamation and transfer | kg | batch or shift | same period as production | included moulding and reclamation system | Report fresh external input and spent external output separately | scale checks; transfer receipts |
| `cp_finishing_material_balance` | `final_conditioning` | route intermediate, finished product and finishing scrap | production and inspection records | batch_id; route; input_kg; accepted_product_kg; internal_return_kg; exported_scrap_kg; stock_change_kg; rejection_reason | Reconcile input through acceptance inspection | kg | each batch | representative 12 consecutive months | all included final operations | Sum accepted declared-product batches and normalize | traceability; calibrated scales; inspection release |
| `cp_finishing_energy` | `final_conditioning` | electricity | meters and operation logs | meter_id; timestamp; electricity_kWh; operation; batch_id; accepted_product_kg | Meter or causally allocate to performed final operations | kWh | shift or batch | same period as production | included heat treatment, machining and inspection | Sum productive consumption and convert | calibration; invoice reconciliation; operation log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory amount | normalized amount = reporting-period exchange / reporting-period net accepted product × 1,000 | exchange amount; net accepted product mass | exchange per 1,000 kg reference product |  |
| `calc_electricity_conversion` | Electricity recorded in kWh | MJ = metered kWh × 3.6 | electricity_kWh | electricity_MJ |  |
| `calc_direct_emissions` | Direct fossil CO2 and monitored nitrogen oxides | Integrate concentration × corrected gas flow × operating time, or for fossil CO2 use metered fuel × documented carbon content × oxidation factor; retain the selected method and inputs | monitoring fields or fuel fields | pollutant mass by source and period | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |
| `calc_route_mass_balance` | Each declared route | input mass + opening stock = accepted output + internal return + exported residues + closing stock + documented loss; investigate unresolved imbalance | batch and stock fields | reconciled route mass balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Retain product family, designation, grade, specification, geometry, route, treatment state and acceptance release linked to each batch. | product specification; heat certificate; inspection release |
| `dq_temporal` | Foreground data | Use a representative 12-month period or justify a shorter campaign and disclose start-up, shutdown and abnormal-operation treatment. | meter coverage report; production calendar; justification |
| `dq_completeness` | All declared processes | Reconcile production, utility, residue and emissions records to the same products, lines, sites and period; quantify missing-record coverage. | completeness matrix; mass and energy reconciliation |
| `dq_metering` | Measured exchanges | Use calibrated meters or scales and document every shared-meter allocation driver. | calibration certificates; allocation workbook; invoices |
| `dq_upstream` | Purchased inputs | Match upstream datasets to material grade/state, supplier or representative technology, geography, electricity delivery qualifiers, and gas reference conditions. | supplier declarations; dataset selection log |
| `dq_uncertainty` | Important flows without source-backed ranges | Retain foreground variability and measurement uncertainty; do not treat this PCR's missing external ranges as zero uncertainty. | batch statistics; meter uncertainty; unresolved-range review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Reference flow | Fail validation when the product family, grade/specification, geometry, manufacturing route, treatment state, plant geography, reporting period, or net-mass rule is missing. | `unstats-cpc-v3-41253`; `unstats-hs-7302-scope` |
| `validation_route` | Process map | Require final conditioning and at least one applicable forming route; reject inventories that average hot rolling, smithery and foundry routes without declared production shares and evidence. | `ec-jrc-fmp-bref-2022`; `ec-jrc-sf-bref-2024` |
| `validation_atomic_flows` | Inventory rows | Require one atomic exchange per row and separate electricity, natural gas, water, each residue and each elementary emission. |  |
| `validation_mass_balance` | Route inventories | Require the route mass-balance calculation, documented internal returns and explicit destinations for exported scrap, scale, slag and spent sand. |  |
| `validation_energy_qualifiers` | Electricity and natural gas | Require electricity supplier, geography, voltage, technology and delivery boundary, plus natural-gas supply geography and reference-volume conditions wherever those flows occur. |  |
| `validation_uuid_status` | Tiangong references | Accept a UUID only after direct public read confirms state 100, semantic identity, flow type, classification, property and unit group; keep all other rows explicitly unresolved. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for one declared track-construction-material product family, route, plant and reporting period |
| downstream_use | `secondary_dataset`; `background_dataset` when geography, technology, grade, product state and quality disclosures match the downstream model |
| allowed_use | Gate-to-gate manufacture; combination with separately modelled upstream steel and downstream railway life-cycle stages; product-specific comparison only after equivalence review |
| excluded_use | Railway construction service, assembled track, use-stage performance, service-life prediction, maintenance, or end-of-life without added downstream modules; route or grade comparison when required qualifiers differ |
| required_metadata | canonical PCR id; classification context; product family/designation; grade/specification; dimensions; route and process shares; treatment and delivery state; site/geography; reporting period; reference mass; upstream dataset identities; electricity and gas qualifiers; residue destinations; packaging boundary |
| required_quality_disclosure | primary-data coverage; meter and scale QA; allocation drivers; route mass-balance closure; missing records; direct-emission method; internal-return treatment; uncertainty; unresolved UUIDs and range evidence needs |
| update_trigger | Change in product family or grade, forming route, furnace or foundry technology, heat treatment, electricity supply, fuel, supplier material, site boundary, allocation method, residue destination, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-v3-41253` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 structure and explanatory notes, code 41253, last updated 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-03) | Official product-category identity and classification hierarchy |
| `unstats-hs-7302-scope` | `official_guidance` | United Nations Statistics Division, HS 2012 classification detail, heading 7302 and correspondence to CPC 41253. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/32/730210 (retrieved 2026-09-03) | Product-family boundary examples for specialized track construction material |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, Ferrous Metals Processing Industry BREF, adopted December 2022. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry (retrieved 2026-09-03) | Hot-rolling boundary and decomposition: semi-finished steel, surface rectification, reheating, descaling, rolling, cooling and finishing; residue and emissions records |
| `ec-jrc-sf-bref-2024` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Smitheries and Foundries Industry, 2024, DOI 10.2760/4805267, JRC140209. https://publications.jrc.ec.europa.eu/repository/handle/JRC140209 (retrieved 2026-09-11) | Smithery and foundry route decomposition, including heating, forging, machining, finishing, heat treatment, melting, mould/core preparation, casting and shakeout |
| `onesteel-hot-rolled-structural-rail-epd-2026` | `dataset` | OneSteel Manufacturing Pty Ltd, Hot Rolled Structural and Rail Environmental Product Declaration, EPD-IES-0032245:001, version date 2026-06-01. https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/fee23f66-9b67-45a6-7780-08debc338923/Documents (retrieved 2026-09-11) | Independently verified rail/sleeper product example, CPC 41253 applicability, one-tonne product-ready-for-dispatch basis, A1-A3 cradle-to-gate boundary and foreground material, energy, water, transport, emission and waste collection fields |
