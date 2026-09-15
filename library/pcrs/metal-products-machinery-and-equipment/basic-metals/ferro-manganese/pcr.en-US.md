---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.ferro-manganese
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Ferro-manganese

## 1. Scope and Applicability

This PCR covers foreground production of solid ferro-manganese alloy at the producing plant gate, including high-, medium-, and low-carbon grades. The boundary begins with receipt of manganese-bearing and other purchased inputs and includes conditional ore-fines agglomeration or sintering, reduction smelting, grade-dependent refining, casting, solidification, crushing, screening, internal material returns, and on-site emission control. It applies to lump or sized ferro-manganese sold by net mass.

Silico-manganese, manganese metal, spiegeleisen, manganese ore or sinter sold as products, downstream steelmaking, customer use, and transport beyond the plant gate are excluded. Silico-manganese may appear only as an input to a declared silicothermic refining route. Each dataset shall declare carbon grade, manganese content, product size, smelting and refining routes, furnace enclosure, gas and dust treatment, slag destination, geography, technology, and reporting period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.ferro-manganese |
| classification_refs | CPC 3.0: 41112, Ferro-manganese |
| covered_products | Solid ferro-manganese alloy in lump or sized form, including high-, medium-, and low-carbon grades |
| excluded_products | Silico-manganese; manganese metal; spiegeleisen; manganese ore or sinter sold as such; downstream steel products |
| representative_product | Solid lump ferro-manganese at the producing plant gate |
| production_route | Carbothermic manganese-ore reduction for high-carbon alloy; conditional oxygen decarburisation or silicothermic refining for medium- or low-carbon alloy |
| market_state | Solid, unpackaged bulk lump or customer-specified sized fraction; net mass excluding transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Ferro-manganese alloy supplied as an alloying and deoxidising material for iron and steel production |
| How much | 1 kg net mass of saleable ferro-manganese at the producing plant gate |
| How well | Meets the declared carbon grade, manganese content, impurity limits, and particle-size specification |
| How long or cycle | One production reporting period ending when the accepted solid product is ready for dispatch |
| reference_flow_link | Exactly 1 kg of the declared reference product flow represents the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Ferromanganese `2f5d9ece-fe82-4e6d-a12d-47366582ec48` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | carbon grade; manganese content; impurity specification; particle-size range; product state; smelting route; refining route or none; furnace enclosure; production site and geography; reporting period; slag destination; recovered-gas destination |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | saleable ferro-manganese | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every inventory amount to 1 kg net mass of accepted saleable ferro-manganese; exclude transport packaging and separately reported off-spec returns. |
| `mass_balance_basis` | material inputs and outputs | Mass | kg | Record wet or as-received mass and composition where relevant, then use one consistent reporting basis in the mass balance; disclose any dry-mass conversion. |
| `energy_conversion` | electricity and fuels | Energy or mass, as metered | kWh, MJ, Nm3, or kg | Preserve measured units and conversion factors; report electricity separately from each fuel and do not combine energy carriers. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased manganese-bearing feed, iron-bearing feed, reductants, fluxes, electricity, water, oxygen, and route-specific alloying inputs at the producing plant gate |
| starting_condition_role | Upstream product inputs whose production burdens are supplied by external datasets; on-site preparation and all subsequent foreground operations are collected here |
| product_classification_scope | Solid ferro-manganese alloy across high-, medium-, and low-carbon grades; silico-manganese remains a separate product category even when used as an input |
| recursive_input_rule | Purchased ferro-manganese or internally returned alloy is recorded as an explicit product input; only internal returns generated inside the same reporting boundary may carry zero upstream burden, with the loop quantity disclosed |
| upstream_dataset_requirement | Use geographically and technologically representative upstream datasets for every purchased material, fuel, electricity, water, oxygen, and treatment service |
| disclosure | Declare included preparation, furnace type and enclosure, carbon grade, refining route, abatement configuration, internal recycles, recovered-gas use or flare, slag use or disposal, cut-offs, and excluded on-site operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground production | Include all on-site preparation, smelting, tapping, grade-dependent refining, casting, crushing, screening, gas treatment, dust handling, and internal returns needed to make the saleable reference product. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production` |
| `boundary_route_conditions` | conditional operations | Include sintering only when fine ore is agglomerated on site and include refining only when the declared carbon grade requires oxygen decarburisation or silicothermic reduction. | `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | purchased inputs | Link every purchased input to an upstream dataset and disclose supplier-specific substitutions; do not absorb upstream burdens into an unspecified aggregate input. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_preparation` | Raw-material preparation and manganese-ore sintering | conditional | Include when manganese ore fines are agglomerated, pelletised, or sintered on site | foreground conditioning | mass of manganese sinter transferred to smelting |
| `ferromanganese_smelting` | Ferro-manganese reduction smelting and tapping | required | Always include the declared primary smelting route | foreground production | mass of crude alloy tapped |
| `ferromanganese_refining` | Carbon-grade refining | conditional | Include for medium- or low-carbon alloy and identify oxygen decarburisation or silicothermic reduction | foreground refining | mass of refined alloy transferred to finishing |
| `casting_and_sizing` | Casting, solidification, crushing, and screening | required | Include through acceptance of the solid saleable product | foreground finishing | 1 kg accepted ferro-manganese |

### Process: Raw-material preparation and manganese-ore sintering (`raw_material_preparation`)

#### Inputs

##### Product flows

###### Metallurgical manganese ore fines (`prep_ore_fines`)

Record manganese-bearing ore fines entering on-site agglomeration or sintering, with moisture and manganese grade retained in the raw record.

- Selected flow: Metallurgical manganese ore fines
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass entering preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Coke breeze for sintering (`prep_coke_breeze`)

Include coke breeze only when it is consumed as sinter fuel.

- Selected flow: Coke breeze
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Limestone for sintering (`prep_limestone`)

Include limestone charged as a preparation-stage flux separately from smelting flux.

- Selected flow: Limestone
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Natural gas for sinter ignition (`prep_natural_gas`)

Include natural gas only when used by the on-site sinter ignition burners.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3, Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered gas volume at the supplier's declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Preparation electricity (`prep_electricity`)

Record electricity metered to crushing, screening, conveying, mixing, and sintering equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated equipment-meter electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Manganese sinter transferred to smelting (`prep_sinter`)

Track the mass of prepared manganese sinter as an internal intermediate and do not double count its internally transferred burden.

- Selected flow: Manganese sinter
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after screening
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

###### Preparation particulate matter to air (`prep_pm_air`)

Record measured particulate matter released after preparation-stage controls; declare the size fraction and compartment.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or approved monitored emission calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

### Process: Ferro-manganese reduction smelting and tapping (`ferromanganese_smelting`)

#### Inputs

##### Product flows

###### Metallurgical manganese ore (`smelt_manganese_ore`)

Record the manganese-bearing ore or purchased sinter charged to the furnace, with state, moisture, and manganese grade as qualifiers.

- Selected flow: Metallurgical manganese ore
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Iron ore (`smelt_iron_ore`)

Record iron-bearing ore added to the furnace burden.

- Selected flow: Iron ore
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Metallurgical coke reductant (`smelt_coke`)

Record metallurgical coke charged as a carbonaceous reducing agent.

- Selected flow: Metallurgical coke
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Low-volatile coal reductant (`smelt_coal`)

Include low-volatile coal when it is charged as a separate reducing agent.

- Selected flow: Low-volatile coal
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Limestone smelting flux (`smelt_limestone`)

Record limestone charged directly to the smelting furnace.

- Selected flow: Limestone
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Dolomite smelting flux (`smelt_dolomite`)

Record dolomite charged directly to the smelting furnace.

- Selected flow: Dolomite
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Smelting electricity (`smelt_electricity`)

Record electricity delivered to the submerged electric arc furnace and its directly associated auxiliaries.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: furnace and auxiliary meter reading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Soderberg electrode paste (`smelt_electrode_paste`)

Record carbonaceous paste consumed in self-baking furnace electrodes.

- Selected flow: Soderberg electrode paste
- Flow property / unit: Mass / kg
- Amount rule: stock-balance consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Smelting cooling-water makeup (`smelt_makeup_water`)

Record only freshwater or purchased water added to the furnace cooling circuit, excluding recirculated water.

- Selected flow: Cooling-water makeup
- Flow property / unit: Volume / m3
- Amount rule: metered makeup-water volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude high-carbon ferro-manganese (`smelt_crude_femn`)

Measure crude alloy tapped from the reduction furnace before any grade-specific refining.

- Selected flow: Crude high-carbon ferro-manganese
- Flow property / unit: Mass / kg
- Amount rule: measured tapped alloy mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Manganese-rich smelting slag (`smelt_rich_slag`)

Record slag leaving the smelting process and declare whether it is sold, transferred to silico-manganese production, recycled, or disposed.

- Selected flow: Manganese-rich ferro-manganese slag
- Flow property / unit: Mass / kg
- Amount rule: measured slag mass leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Recovered carbon-monoxide-rich furnace gas (`smelt_co_rich_gas`)

Include cleaned CO-rich gas as a co-product only when exported from the process for energy recovery or another industrial use; disclose composition and destination.

- Selected flow: Carbon-monoxide-rich ferro-manganese furnace gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered exported gas volume multiplied by measured net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### Waste flows

###### Captured ferro-manganese furnace dust (`smelt_captured_dust`)

Record captured dust only at the point it leaves internal recycling; keep internally returned dust in the mass balance without an external waste output.

- Selected flow: Captured ferro-manganese furnace dust
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to off-site recovery or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smelting_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### Elementary flows

###### Carbon monoxide emitted to air (`smelt_co_air`)

Record residual carbon monoxide released after combustion, recovery, or flaring, excluding gas transferred as a co-product.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: monitored stack amount or engineering calculation from measured gas flow and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smelting_emissions`
- Sources: `us-epa-ap42-ferroalloy-production`

###### Smelting particulate matter to air (`smelt_pm_air`)

Record controlled stack and quantified fugitive particulate matter separately in raw records, then aggregate only within the same declared size fraction.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: monitored or permitted-calculation particulate release after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smelting_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

### Process: Carbon-grade refining (`ferromanganese_refining`)

#### Inputs

##### Product flows

###### Crude high-carbon ferro-manganese for refining (`refine_crude_femn`)

Record the internal crude alloy entering refining; include this row only when the declared product requires refining.

- Selected flow: Crude high-carbon ferro-manganese
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Oxygen for decarburisation (`refine_oxygen`)

Include gaseous oxygen only for an oxygen-blown decarburisation route.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3, Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered oxygen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Silico-manganese reductant (`refine_silicomanganese`)

Include silico-manganese only for a declared silicothermic medium- or low-carbon refining route.

- Selected flow: Silico-manganese
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Refining electricity (`refine_electricity`)

Record electricity consumed by the refining furnace, converter auxiliaries, and directly associated capture equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined ferro-manganese alloy (`refine_alloy`)

Measure medium- or low-carbon alloy transferred from refining to finishing and retain the laboratory carbon analysis.

- Selected flow: Refined ferro-manganese alloy
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Ferro-manganese refining slag (`refine_slag`)

Record refining slag leaving the route and disclose recycle, sale, recovery, or disposal.

- Selected flow: Ferro-manganese refining slag
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the refining process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Captured ferro-manganese refining dust (`refine_captured_dust`)

Record captured refining dust only when it leaves internal recycle for off-site recovery or disposal.

- Selected flow: Captured ferro-manganese refining dust
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Refining carbon dioxide to air (`refine_co2_air`)

Record carbon dioxide released by oxygen decarburisation or refining-energy combustion and declare the carbon origin.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: monitored amount or carbon-balance calculation from collected inputs and outputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refining_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

###### Refining particulate matter to air (`refine_pm_air`)

Record particulate matter released after the refining fume-control system and declare the size fraction.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: monitored stack amount or approved calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refining_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

### Process: Casting, solidification, crushing, and screening (`casting_and_sizing`)

#### Inputs

##### Product flows

###### Ferro-manganese alloy entering finishing (`finish_alloy_feed`)

Record crude high-carbon alloy or refined alloy entering casting and sizing as one declared internal state for the dataset.

- Selected flow: Ferro-manganese alloy entering finishing
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

###### Finishing electricity (`finish_electricity`)

Record electricity metered to casting-machine auxiliaries, crushing, screening, and product handling.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or equipment-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable ferro-manganese reference product (`reference_ferromanganese`)

This is the accepted solid product matching the declared grade and sizing specification.

- Selected flow: Ferromanganese `2f5d9ece-fe82-4e6d-a12d-47366582ec48`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net accepted product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

###### Undersize ferro-manganese returned internally (`finish_undersize_return`)

Track undersize product returned to remelting or reprocessing as an internal loop; do not count it as saleable output.

- Selected flow: Undersize ferro-manganese
- Flow property / unit: Mass / kg
- Amount rule: measured internal return mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### Waste flows

###### Captured ferro-manganese crushing dust (`finish_captured_dust`)

Record captured finishing dust only when it leaves internal recycle for recovery or disposal.

- Selected flow: Captured ferro-manganese crushing dust
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

##### Elementary flows

###### Finishing particulate matter to air (`finish_pm_air`)

Record particulate matter released after controls from casting, crushing, screening, and product handling; declare the size fraction.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: monitored or approved-calculation release after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable ferro-manganese
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_emissions`
- Sources: `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi-output foreground operations | Use separately metered process subdivision for sintering, smelting, refining, gas treatment, slag handling, and finishing before applying allocation. |  |
| `allocation_internal_returns` | internal sinter, alloy, dust, and undersize returns | Carry internal returns without a second upstream burden and disclose gross and net quantities so the loop can be audited. |  |
| `allocation_exported_coproducts` | manganese-rich slag and recovered CO-rich gas | Record each exported co-product as a separate output. If allocation cannot be avoided, state and justify the chosen physical or economic relation, report unallocated results where practicable, and test sensitivity. | `eu-jrc-nfm-bref-2017`; `us-epa-ap42-ferroalloy-production` |
| `allocation_waste_treatment` | residues sent to treatment | Assign treatment burdens and credits consistently with the declared waste ownership and recovery boundary; do not treat disposal and product sale as the same destination. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preparation_records` | `raw_material_preparation` | preparation inputs and sinter output | weighbridge, batch sheet, fuel meter, electricity meter | material id; as-received mass; moisture; Mn grade; fuel quantity; calorific value; electricity; sinter output | reconcile batch records to inventory movements and meters | kg, MJ, kWh | each batch and monthly close | same reporting period as reference product | all on-site preparation lines | sum quantities and normalize to accepted product mass | calibrated scales and meters; batch reconciliation; laboratory grade results |
| `cp_preparation_emissions` | `raw_material_preparation` | preparation particulate release | stack test or continuous/periodic monitor | gas flow; concentration; operating hours; size fraction; control downtime | calculate pollutant mass from measured flow and concentration | kg | monitoring interval and monthly close | representative operating period within reporting year | every preparation emission point | sum point and quantified fugitive releases by size fraction | calibration certificates; test reports; operating logs |
| `cp_smelting_records` | `ferromanganese_smelting` | furnace burden, energy, water, alloy, slag, gas, and dust | charge log, tap record, meters, stock balance | material id; mass; grade; electricity; water; gas flow; calorific value; tapped alloy; slag; dust destination | reconcile furnace campaign inputs and outputs | kg, kWh, m3, MJ | each charge or tap and monthly close | complete reporting period | all furnaces producing declared product | mass- and energy-balance aggregation by furnace campaign | calibrated meters; stock reconciliation; laboratory analyses |
| `cp_smelting_emissions` | `ferromanganese_smelting` | CO and particulate releases | stack and fugitive monitoring | gas flow; CO concentration; particulate concentration; size fraction; operating time; capture status | calculate releases from measured flow, concentration, and time | kg | monitoring interval and monthly close | representative operating states including tapping | all furnace, tapping, and handling emission points | sum only consistent pollutants and compartments | monitoring QA records; control-device and flare logs |
| `cp_refining_records` | `ferromanganese_refining` | route inputs, alloy, slag, and captured dust | heat sheet, oxygen meter, electricity meter, weigh records | route; input alloy; oxygen; silico-manganese; electricity; output alloy; carbon analysis; slag; dust destination | reconcile each refining heat | kg, Nm3, kWh | each heat and monthly close | all refining campaigns in reporting period | all refining vessels for declared product | aggregate by refining route before product-weighting | calibrated meters; heat sheets; laboratory carbon results |
| `cp_refining_emissions` | `ferromanganese_refining` | refining CO2 and particulate releases | stack monitoring and carbon balance | gas flow; concentration; operating time; carbon in alloy inputs and outputs; size fraction | monitored release or documented carbon-balance calculation | kg | each campaign or monitoring interval | representative refining period | all refining emission points | aggregate by route and control configuration | stack-test report; carbon analyses; calculation audit trail |
| `cp_finishing_records` | `casting_and_sizing` | finishing inputs, product, returns, dust, and electricity | casting log, scale tickets, screen records, meter | alloy feed; accepted product; particle size; undersize return; dust destination; electricity | reconcile finishing mass balance | kg, kWh | each batch and monthly close | complete reporting period | all casting and sizing lines | sum accepted output and normalize all rows to its net mass | calibrated scales; sieve or size test; inventory reconciliation |
| `cp_finishing_emissions` | `casting_and_sizing` | finishing particulate release | stack or workplace extraction monitoring | gas flow; concentration; operating time; size fraction; capture status | calculate release after control | kg | monitoring interval and monthly close | representative casting and sizing period | all finishing emission points | sum releases by consistent size fraction and compartment | monitoring QA records; control-device logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory row | normalized amount = reporting-period row quantity / reporting-period accepted reference-product mass | collected row quantity; accepted saleable mass | amount per 1 kg saleable ferro-manganese |  |
| `calc_net_internal_returns` | internal sinter, alloy, dust, and undersize loops | disclose gross production and return; count only the net boundary crossing as an external input or output | gross transfer; internal return; external transfer | net boundary-crossing quantity |  |
| `calc_gas_energy` | recovered CO-rich gas | exported energy = metered standard-volume gas × measured net calorific value | gas volume; pressure/temperature correction; net calorific value | MJ exported gas | `eu-jrc-nfm-bref-2017` |
| `calc_stack_release` | monitored air emissions | release mass = corrected dry gas flow × pollutant concentration × operating time, with consistent reference conditions | gas flow; concentration; time; moisture and reference conditions | kg pollutant released |  |
| `calc_mass_balance` | each process and reporting period | mass-balance gap = total measured mass inputs - total measured mass outputs and quantified releases | all measured material rows | disclosed absolute and percentage gap |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain grade certificate showing carbon grade, manganese content, impurity limits, and particle-size result for every aggregated product campaign. | laboratory certificates and product specification |
| `dq_route_separation` | process inventory | Keep high-carbon direct output, oxygen-decarburised, and silicothermic refining campaigns separable before aggregation. | campaign and heat identifiers |
| `dq_completeness` | foreground boundary | Reconcile purchases, stocks, internal returns, products, slag, dust, gas, and reported releases; explain excluded or estimated rows. | signed mass- and energy-balance review |
| `dq_temporal` | all records | Use one consistent reporting period and document shutdowns, abnormal campaigns, and control-device bypass. | production calendar and operating logs |
| `dq_upstream` | purchased inputs | Record supplier, geography, product state, composition or grade, and matched upstream dataset version. | purchase specification and dataset mapping record |
| `dq_emissions` | air releases | Identify stack versus fugitive release, receiving compartment, particulate size fraction, measurement method, and control configuration. | monitoring report and abatement log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_amount` | reference flow | The accepted reference-product output shall equal exactly 1 kg after normalization and shall use the confirmed Ferromanganese flow UUID and mass support references. |  |
| `validate_identity_qualifiers` | dataset metadata | Carbon grade, manganese content, product state, size, smelting route, refining route, furnace enclosure, geography, reporting period, slag destination, and recovered-gas destination shall be present. | `eu-jrc-nfm-bref-2017`; `gbt-3795-2014` |
| `validate_process_conditions` | process map | Sintering rows shall appear only when preparation occurs on site; refining rows shall appear only for the declared refining route; all required smelting and finishing rows shall be assessed. | `eu-jrc-nfm-bref-2017` |
| `validate_atomic_flows` | inventory | Electricity, each fuel, each material, each residue, each co-product, and each elementary emission shall remain separate atomic rows. |  |
| `validate_mass_balance` | process and reporting period | Report the mass-balance gap for each included process and explain material discrepancies before publication. |  |
| `validate_no_unverified_defaults` | UUIDs and ranges | Do not publish a provisional UUID or an externally inferred range until direct public-state identity evidence or two independent boundary-compatible original sources, respectively, have been verified. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; eligible for `background_dataset` only after independent methodology, identity, and data-quality review |
| downstream_use | Product-flow, process, and lifecycle-model construction for ferro-manganese supply to iron and steel systems |
| allowed_use | Declared plant, technology, carbon grade, product state, geography, and reporting period represented by the collected foreground package |
| excluded_use | Silico-manganese or manganese-metal production; downstream steelmaking; a different carbon grade or refining route without documented representativeness |
| required_metadata | PCR id and version; product UUID; grade and composition; size; site and geography; reporting period; furnace and refining route; abatement; slag and gas destinations; allocation; upstream dataset versions |
| required_quality_disclosure | Primary-data share; meter and scale coverage; mass-balance gap; laboratory methods; temporal coverage; estimated rows; control downtime; UUID and range-evidence status |
| update_trigger | Change in ore blend or grade, carbon grade, furnace or refining technology, electricity mix, reductant, control system, slag or gas destination, allocation, product specification, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-3-0-official-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-02) | Official classification identity for CPC 41112 |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, 2017, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf (retrieved 2026-09-02) | Ferro-manganese grades, raw materials, preparation, smelting, refining, casting, slag, gas, dust, and control process decomposition |
| `us-epa-ap42-ferroalloy-production` | `official_guidance` | U.S. Environmental Protection Agency, AP-42 Section 12.4 Ferroalloy Production, October 1986 (reformatted January 1995), https://www.epa.gov/sites/production/files/2020-11/documents/c12s04.pdf (retrieved 2026-09-02) | Independent process and emissions-pathway evidence for submerged-arc production, tapping, sizing, slag, CO, and particulate matter |
| `gbt-3795-2014` | `standard` | GB/T 3795-2014, 锰铁 / Ferromanganese, National Standard Information Public Service Platform, https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=3A0EAAB85AC5FB0A324B83A300694EEA (retrieved 2026-09-02) | Professional Chinese product name and standard product identity |
