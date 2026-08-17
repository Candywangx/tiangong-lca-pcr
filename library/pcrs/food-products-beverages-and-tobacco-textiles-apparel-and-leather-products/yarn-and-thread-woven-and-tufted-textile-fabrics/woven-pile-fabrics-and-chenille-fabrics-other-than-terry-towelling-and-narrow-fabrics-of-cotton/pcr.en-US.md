---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-of-cotton
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) of cotton

## 1. Scope and Applicability

This PCR applies to the foreground manufacture of woven cotton pile fabric or cotton chenille fabric supplied as a finished fabric product. It covers yarn preparation, fabric formation, route-applicable wet processing, mechanical finishing, inspection, and packing at the manufacturing site. The data package begins with purchased cotton yarns and other purchased inputs at the site gate and ends with net finished fabric ready for dispatch.

Terry towelling and similar woven terry fabrics, narrow fabrics, tufted fabrics, fabrics whose defining fibre is man-made, and made-up textile articles are excluded. Cotton cultivation, ginning, spinning, purchased utility generation, purchased chemical manufacture, transport outside the site, garment or article manufacture, use, and end-of-life are represented by separate upstream or downstream datasets and are not recreated inside this foreground inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-of-cotton |
| classification_refs | CPC 3.0: 26810, exact |
| covered_products | Woven pile fabrics of cotton and chenille fabrics of cotton, excluding terry towelling and narrow fabrics |
| excluded_products | Terry towelling and similar woven terry fabrics; narrow fabrics; tufted fabrics; man-made-fibre pile or chenille fabrics; made-up textile articles |
| representative_product | Finished woven cotton pile fabric or finished cotton chenille fabric, production mix at plant |
| production_route | Purchased cotton ground yarn plus route-specific pile yarn or chenille yarn; yarn preparation and weaving; optional wet pretreatment/dyeing; mechanical finishing, inspection, and packing |
| market_state | Finished manufactured fabric at the plant gate, reported on a net dry-fabric mass basis with packaging reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished woven cotton pile fabric or finished cotton chenille fabric that meets the declared sale specification |
| How much | 1 kg net finished fabric, excluding packaging |
| How well | Cotton fibre identity, pile-versus-chenille route, construction, width, areal mass, colour/finish state, moisture basis, and quality grade are declared |
| How long or cycle | One manufacturing batch or campaign represented over the declared reporting period |
| reference_flow_link | `reference_fabric_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished fabric |
| Reference product flow | Woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) of cotton `4dba0da8-c16f-4b12-8563-bc1ff5fee1c2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pile or chenille construction; cotton fibre composition and blend tolerance; greige, bleached, dyed, printed, or otherwise finished state; fabric width; areal mass; moisture basis; quality grade; production geography; reporting period; packaging exclusion |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all exchanges to 1 kg of accepted net finished fabric at the declared moisture basis; exclude paperboard cores, wrapping film, and other packaging from the reference mass. |
| `mass_basis_disclosure` | Yarn, fabric intermediates, chemicals, and wastes | Mass | kg | Record measured mass and disclose whether values are as-received, dry, solution, or active-substance mass; do not convert concentration-bearing chemical products without the recorded concentration. |
| `water_conversion` | Process water and wastewater | Volume and, when measured, Mass | m3 and kg | Preserve measured volume; if mass is used, document density and temperature assumptions used for conversion. |
| `energy_conversion` | Electricity and purchased steam | Energy | kWh or MJ | Preserve native meter or invoice units and document the conversion factor used to express a common energy unit; do not combine electricity and steam into one exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased cotton ground yarn and the route-specific cotton pile yarn or cotton chenille yarn received at the manufacturing site, with supplier identity, fibre composition, yarn specification, moisture basis, and incoming mass declared |
| starting_condition_role | purchased_material_at_site_gate |
| product_classification_scope | CPC 3.0 subclass 26810 only; classification is a scope reference and does not replace semantic product identity |
| recursive_input_rule | If an input is already a finished fabric within this same PCR scope, record it once as a purchased product input with its upstream dataset and do not recreate its manufacturing inventory inside the receiving process |
| upstream_dataset_requirement | Link separate upstream datasets for cotton yarns, chemicals, electricity, steam, water supply, packaging materials, and off-site waste or wastewater treatment |
| disclosure | Declare included process steps, pile-versus-chenille route, wet-processing state, outsourced steps, cut-off decisions, recycled/reused internal streams, and the boundary of on-site versus off-site treatment |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | Foreground data package | Include all on-site yarn preparation, weaving, route-applicable wet processing, finishing, inspection, packing, internal handling, and directly associated wastewater or waste operations that occur before dispatch; represent purchased inputs and off-site services with linked datasets. | `jrc-textiles-bref-2023`; `iso-14044-2006` |
| `boundary_route_disclosure` | Process coverage | Mark wet processing conditional only when it is absent or outsourced; disclose the supplier dataset for an outsourced step and prevent double counting between supplier and foreground inventories. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_input_output_inventory` | Site inventory | Maintain a process-level inventory of textile materials, process chemicals, water, energy, wastewater, waste, and relevant emissions; measure directly where practicable and otherwise retain invoice or calculation evidence. | `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_weaving` | Yarn preparation and weaving | `required` | Always required for foreground manufacture from purchased yarn | Foreground formation of greige pile or chenille fabric | kg greige route-specific fabric output |
| `wet_processing` | Wet pretreatment and dyeing | `conditional` | Include when desizing, scouring, bleaching, dyeing, washing, or related wet treatment occurs on site for the delivered product | Foreground wet processing | kg wet-processed route-specific fabric output |
| `finishing_inspection_and_packing` | Mechanical finishing, inspection, and packing | `required` | Always required; use the applicable greige or wet-processed intermediate input and record only processes performed on site | Foreground finished-product preparation | kg accepted net finished fabric output |

### Process: Yarn preparation and weaving (`yarn_preparation_and_weaving`)

#### Inputs

##### Product flows

###### Cotton ground yarn supplied to the loom (`ground_cotton_yarn_input`)

Cotton ground yarn forms the structural warp and/or weft of the fabric and crosses the site boundary as a purchased material.

- Selected flow: Cotton ground yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of returned unused yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue_records`
- Sources: `jrc-textiles-bref-2023`

###### Cotton pile yarn supplied for the woven-pile route (`pile_cotton_yarn_input`)

Cotton pile yarn creates the raised pile and is recorded only for batches using the woven-pile construction route.

- Selected flow: Cotton pile yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of returned unused yarn; zero is not permitted when the woven-pile route is declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige woven cotton pile fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue_records`
- Sources: `jrc-textiles-bref-2023`

###### Cotton chenille yarn supplied for the chenille route (`chenille_cotton_yarn_input`)

Cotton chenille yarn creates the chenille surface and is recorded only for batches using the chenille-fabric route.

- Selected flow: Cotton chenille yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of returned unused yarn; zero is not permitted when the chenille route is declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige cotton chenille fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue_records`
- Sources: `jrc-textiles-bref-2023`

###### Corn starch supplied to yarn preparation (`corn_starch_size_input`)

Corn starch is recorded as one chemical input when it is used to prepare sizing liquor on site; any other sizing chemical is recorded as its own exchange rather than combined here.

- Selected flow: Corn starch
- Flow property / unit: Mass / kg
- Amount rule: measured formulation mass issued to the batch, with dry-solids concentration disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_dosing_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Process water supplied to sizing (`weaving_process_water_input`)

Process water is recorded when it is introduced to prepare or dilute the on-site sizing bath.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-tank volume entering sizing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter_records`
- Sources: `eu-textiles-bat-2022`

###### Electricity supplied to preparation and weaving (`weaving_electricity_input`)

Electricity drives warping, sizing auxiliaries, looms, extraction, and internal material handling within this process boundary.

- Selected flow: Electricity, medium voltage, at manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption; where a shared meter is used, allocate by documented machine operating time and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven cotton pile fabric intermediate (`greige_pile_fabric_output`)

Greige woven cotton pile fabric is the measured process output for the woven-pile route before any on-site wet treatment or final finishing.

- Selected flow: Greige woven cotton pile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured accepted plus recoverable intermediate mass leaving weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `jrc-textiles-bref-2023`

###### Greige cotton chenille fabric intermediate (`greige_chenille_fabric_output`)

Greige cotton chenille fabric is the measured process output for the chenille route before any on-site wet treatment or final finishing.

- Selected flow: Greige cotton chenille fabric
- Flow property / unit: Mass / kg
- Amount rule: measured accepted plus recoverable intermediate mass leaving weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Cotton yarn waste from preparation and weaving (`cotton_yarn_waste_output`)

Cotton yarn waste includes measured broken-end, start-up, and unusable yarn removed from this process and sent to a declared recovery or treatment route.

- Selected flow: Cotton yarn waste
- Flow property / unit: Mass / kg
- Amount rule: weighed waste leaving the process, net of material returned to the same batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `eu-textiles-bat-2022`

###### Sizing wastewater from yarn preparation (`sizing_wastewater_output`)

Sizing wastewater is recorded as a separate aqueous waste stream when bath preparation, line cleaning, or sizing-equipment washing produces a discharge.

- Selected flow: Sizing wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharged volume assigned to sizing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Wet pretreatment and dyeing (`wet_processing`)

#### Inputs

##### Product flows

###### Greige woven cotton pile fabric entering wet processing (`wet_greige_pile_input`)

Greige woven cotton pile fabric crosses into wet processing only for a pile-route batch treated on site.

- Selected flow: Greige woven cotton pile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed woven cotton pile fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Greige cotton chenille fabric entering wet processing (`wet_greige_chenille_input`)

Greige cotton chenille fabric crosses into wet processing only for a chenille-route batch treated on site.

- Selected flow: Greige cotton chenille fabric
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed cotton chenille fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Process water supplied to wet treatment (`wet_process_water_input`)

Process water is recorded for desizing, scouring, bleaching, dye-bath preparation, washing, and rinsing performed within the batch route.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered make-up water entering wet-processing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Sodium hydroxide supplied to wet treatment (`sodium_hydroxide_input`)

Sodium hydroxide is recorded when it is dosed for scouring, mercerising, pH control, or another declared cotton-treatment recipe step.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured purchased-solution mass dosed, with concentration and active mass retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_dosing_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Hydrogen peroxide supplied to bleaching (`hydrogen_peroxide_input`)

Hydrogen peroxide is recorded when peroxide bleaching is included in the declared wet-processing recipe.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: measured purchased-solution mass dosed, with concentration and active mass retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_dosing_records`
- Sources: `jrc-textiles-bref-2023`

###### Reactive Blue 19 dyestuff supplied to dyeing (`reactive_blue_19_input`)

Reactive Blue 19 is recorded as one dyestuff exchange only when that chemical is issued to the batch; every other dyestuff in the actual recipe is represented by its own atomic exchange.

- Selected flow: Reactive Blue 19 dyestuff
- Flow property / unit: Mass / kg
- Amount rule: measured formulation mass dosed for the declared colour recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dyed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_dosing_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Sodium chloride supplied to dyeing (`sodium_chloride_input`)

Sodium chloride is recorded when the declared cotton dyeing recipe uses it as a separate purchased chemical input.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: measured dry or solution mass dosed, with basis disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dyed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_dosing_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Purchased steam supplied to wet treatment (`wet_steam_input`)

Purchased steam is recorded as one utility exchange when it crosses the site boundary for bath heating, washing, or drying within wet processing.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced steam energy assigned to wet processing, with pressure and condensate treatment disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

###### Electricity supplied to wet treatment (`wet_electricity_input`)

Electricity drives pumps, dosing, controls, washing, extraction, and other wet-processing equipment within the declared route.

- Selected flow: Electricity, medium voltage, at manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-processed woven cotton pile fabric intermediate (`wet_pile_fabric_output`)

Wet-processed woven cotton pile fabric is the measured pile-route output after the declared pretreatment, dyeing, washing, and extraction steps.

- Selected flow: Wet-processed woven cotton pile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured output mass with moisture basis recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `jrc-textiles-bref-2023`

###### Wet-processed cotton chenille fabric intermediate (`wet_chenille_fabric_output`)

Wet-processed cotton chenille fabric is the measured chenille-route output after the declared pretreatment, dyeing, washing, and extraction steps.

- Selected flow: Wet-processed cotton chenille fabric
- Flow property / unit: Mass / kg
- Amount rule: measured output mass with moisture basis recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Textile process wastewater from wet treatment (`textile_wastewater_output`)

Textile process wastewater is the combined aqueous discharge from the declared wet-processing steps after deducting internally reused water and separately collected baths.

- Selected flow: Textile process wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume assigned to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-processed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`

###### Spent reactive dye bath collected separately (`spent_dye_bath_output`)

Spent reactive dye bath is recorded only when a concentrated bath is segregated from the combined wastewater stream for reuse, pretreatment, or off-site management.

- Selected flow: Spent reactive dye bath
- Flow property / unit: Volume / m3
- Amount rule: measured segregated bath volume; do not also include this volume in combined textile process wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dyed route-specific fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Mechanical finishing, inspection, and packing (`finishing_inspection_and_packing`)

#### Inputs

##### Product flows

###### Greige woven cotton pile fabric entering direct finishing (`finish_greige_pile_input`)

Greige woven cotton pile fabric enters this process only when the sale specification does not require on-site wet processing.

- Selected flow: Greige woven cotton pile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate input mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Greige cotton chenille fabric entering direct finishing (`finish_greige_chenille_input`)

Greige cotton chenille fabric enters this process only when the sale specification does not require on-site wet processing.

- Selected flow: Greige cotton chenille fabric
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate input mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Wet-processed woven cotton pile fabric entering finishing (`finish_wet_pile_input`)

Wet-processed woven cotton pile fabric enters this process only when the pile-route batch was wet processed on site.

- Selected flow: Wet-processed woven cotton pile fabric
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate input mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Wet-processed cotton chenille fabric entering finishing (`finish_wet_chenille_input`)

Wet-processed cotton chenille fabric enters this process only when the chenille-route batch was wet processed on site.

- Selected flow: Wet-processed cotton chenille fabric
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate input mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_input_records`
- Sources: `jrc-textiles-bref-2023`

###### Electricity supplied to finishing and packing (`finishing_electricity_input`)

Electricity drives raising, shearing, brushing, inspection, winding, extraction, and packing equipment used for the declared product route.

- Selected flow: Electricity, medium voltage, at manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Purchased steam supplied to finishing (`finishing_steam_input`)

Purchased steam is recorded when it crosses the site boundary for drying, conditioning, or another declared finishing operation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoiced steam energy assigned to finishing, with pressure and condensate treatment disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Paperboard core supplied to packing (`paperboard_core_input`)

The paperboard winding core is recorded as one packaging component and is excluded from the net fabric reference mass.

- Selected flow: Paperboard winding core
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-and-stock-reconciled mass incorporated in dispatched rolls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_issue_records`
- Sources: `eu-textiles-bat-2022`

###### Polyethylene wrapping film supplied to packing (`polyethylene_film_input`)

Polyethylene wrapping film is recorded separately from the paperboard core and is excluded from the net fabric reference mass.

- Selected flow: Polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-and-stock-reconciled mass incorporated in dispatched rolls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_issue_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished fabric reference product (`reference_fabric_output`)

Accepted net finished fabric is the reference output after the declared mechanical finish, inspection, and packing steps; packaging mass is excluded from its amount.

- Selected flow: Woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) of cotton `4dba0da8-c16f-4b12-8563-bc1ff5fee1c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted net fabric mass normalized to exactly 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted net finished fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_output_records`
- Sources: `unsd-cpc-v3-2025`

##### Waste flows

###### Rejected finished woven cotton pile fabric (`rejected_pile_fabric_output`)

Rejected finished woven cotton pile fabric is recorded for pile-route material that cannot be sold as the reference product and leaves for a declared recovery or treatment route.

- Selected flow: Rejected woven cotton pile fabric
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected fabric leaving the process, net of rework returned to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `eu-textiles-bat-2022`

###### Rejected finished cotton chenille fabric (`rejected_chenille_fabric_output`)

Rejected finished cotton chenille fabric is recorded for chenille-route material that cannot be sold as the reference product and leaves for a declared recovery or treatment route.

- Selected flow: Rejected cotton chenille fabric
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected fabric leaving the process, net of rework returned to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `eu-textiles-bat-2022`

###### Cotton lint waste from mechanical finishing (`cotton_lint_waste_output`)

Cotton lint captured during raising, shearing, brushing, or extraction is recorded as a separate solid waste sent to its declared destination.

- Selected flow: Cotton lint waste
- Flow property / unit: Mass / kg
- Amount rule: weighed captured lint leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted net finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | Multi-product site operations | First use process subdivision, route-specific batch records, and dedicated meters or issue records to avoid allocation between pile fabric, chenille fabric, and other textile products. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_shared_utilities` | Shared electricity, steam, water, and treatment systems | When subdivision is not practicable, allocate each shared exchange using a documented physical driver that reflects causality, such as metered machine time, steam demand, bath volume, or treated wastewater volume; do not use revenue unless physical relationships cannot reasonably be established. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_reuse_and_recovery` | Internally reused yarn, water, bath liquor, or recovered material | Record the internal loop once and report only make-up input and material that leaves the foreground boundary; disclose any burden transfer or credit for exported recovered material and apply it consistently. | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issue_records` | `yarn_preparation_and_weaving` | Each cotton yarn input separately | batch issue and return record | material_id; supplier; fibre_composition; yarn_specification; issued_mass; returned_mass; moisture_basis; batch_id | calibrated scale plus inventory issue/return record | kg | each batch | full reporting period | all foreground looms and preparation lines | sum issued minus returned mass by row_id and batch | scale calibration; signed issue record; stock reconciliation |
| `cp_chemical_dosing_records` | `yarn_preparation_and_weaving`; `wet_processing` | Each formulated product or chemical separately | recipe and dosing log | chemical_id; supplier; formulation_or_grade; concentration; batch_id; gross_dose; active_mass_if_available; returned_mass | calibrated dosing system or weighed issue record | kg | each recipe batch | full reporting period | all on-site sizing and wet-processing lines | sum net dose by row_id; retain gross and active mass bases | dosing calibration; recipe approval; purchase reconciliation |
| `cp_water_meter_records` | `yarn_preparation_and_weaving`; `wet_processing` | Process water exchange | meter and batch log | meter_id; opening_reading; closing_reading; batch_id; reused_volume; source | calibrated meter or verified tank-volume measurement | m3 | each batch or daily meter interval | full reporting period | all included process water points | assign metered make-up volume to batches; disclose shared-meter allocation | meter calibration; water balance; exception log |
| `cp_energy_meter_records` | all | Each electricity or purchased-steam exchange separately | submeter, invoice, and operating log | utility_type; meter_id; opening_reading; closing_reading; native_unit; pressure_or_voltage; batch_id; machine_hours | calibrated submeter preferred; invoice reconciled to documented physical allocation otherwise | kWh or MJ | each batch or monthly with batch allocation | full reporting period | all included equipment and purchased utilities | convert native units under measurement rules and aggregate by row_id | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_intermediate_input_records` | `wet_processing`; `finishing_inspection_and_packing` | Each route-specific intermediate input | batch transfer record | row_id; batch_id; route; finish_state; gross_mass; moisture_basis | calibrated scale at process transfer | kg | each batch transfer | full reporting period | all included route transfers | sum by row_id and receiving process | scale calibration; linked upstream batch id |
| `cp_intermediate_output_records` | `yarn_preparation_and_weaving`; `wet_processing` | Each route-specific intermediate output | batch completion record | row_id; batch_id; route; finish_state; accepted_mass; recoverable_mass; moisture_basis | calibrated scale at process completion | kg | each batch | full reporting period | all included route outputs | sum accepted plus recoverable mass by row_id | scale calibration; batch release record; mass-balance review |
| `cp_wastewater_records` | `yarn_preparation_and_weaving`; `wet_processing` | Each wastewater or segregated spent-bath exchange separately | flow meter and treatment transfer record | row_id; batch_id; volume; pH; temperature; conductivity; destination; reused_volume | calibrated flow meter or verified tank-volume measurement | m3 | continuous/daily and by segregated transfer | full reporting period | all included discharge and segregated-bath points | sum net discharged volume by row_id; prevent overlap between segregated bath and combined wastewater | meter calibration; wastewater balance; laboratory record where applicable |
| `cp_waste_mass_records` | `yarn_preparation_and_weaving`; `finishing_inspection_and_packing` | Each solid waste exchange separately | weigh ticket and destination record | row_id; batch_or_period; gross_mass; tare; net_mass; destination; rework_return | calibrated scale or contractor weigh ticket | kg | each removal | full reporting period | all included waste collection points | sum net mass by row_id and destination; exclude rework returned to production | scale calibration; transfer note; contractor receipt |
| `cp_packaging_issue_records` | `finishing_inspection_and_packing` | Each packaging component separately | purchase, stock, and roll-packing record | row_id; packaging_specification; opening_stock; receipts; closing_stock; roll_count; issued_mass | direct weighing or stock reconciliation | kg | each packing batch and period reconciliation | full reporting period | all finished rolls in scope | sum net issued mass by row_id and reconcile to dispatched rolls | purchase record; stock count; representative component weighing |
| `cp_reference_output_records` | `finishing_inspection_and_packing` | Accepted finished fabric reference output | quality release and dispatch mass record | batch_id; route; product_specification; gross_roll_mass; core_mass; wrapping_mass; net_fabric_mass; moisture_basis; accepted_status | calibrated roll scale with packaging deductions and quality release | kg | each finished roll or batch | full reporting period | all conforming product dispatched from the site | sum accepted net fabric mass and normalize exchanges by `calc_reference_normalization` | scale calibration; packing record; quality certificate; dispatch reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory exchanges | normalized_exchange = recorded_exchange / accepted_net_finished_fabric_mass; the denominator excludes packaging and rejected fabric | row-level foreground record; accepted net finished fabric mass | exchange amount per 1 kg reference product | `iso-14044-2006` |
| `calc_net_fabric_mass` | Reference output | net_fabric_mass = gross_roll_mass - paperboard_core_mass - wrapping_film_mass - other separately recorded packaging mass | gross roll mass; packaging component masses | accepted net finished fabric mass | `iso-14044-2006` |
| `calc_active_chemical_disclosure` | Concentration-bearing chemical inputs | active_mass = gross_solution_mass × recorded mass fraction; retain gross solution mass as the inventory exchange unless the linked flow identity explicitly represents active substance | gross dose; concentration | active mass disclosure and gross purchased-product exchange | `eu-textiles-bat-2022` |
| `calc_shared_utility_allocation` | Shared utility meters | assigned_exchange = metered_period_total × documented_physical_driver_for_batch / sum_of_driver_for_all_products_in_period | meter total; batch machine time, steam demand, or bath volume | utility amount assigned to each row_id and batch | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `calc_process_mass_balance` | Each process and route | reconcile measured product inputs against product outputs, separately recorded wastes, inventory change, retained moisture change, and documented losses; investigate rather than force-close unexplained differences | input, output, waste, stock, and moisture records | mass-balance discrepancy and review flag | `eu-textiles-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and intermediates | Retain pile-versus-chenille route, cotton composition, construction, width, areal mass, finish state, moisture basis, grade, and batch linkage. | product specification; quality release; batch traveller |
| `dq_temporal_coverage` | All foreground records | Cover a representative continuous reporting period and disclose shutdowns, changeovers, abnormal operation, missing intervals, and outsourced steps. | reporting calendar; operating log; exception register |
| `dq_measurement` | Mass, water, electricity, steam, and dosing records | Use calibrated instruments where practicable; record native units, calibration status, estimation method, and shared-meter allocation. | calibration certificate; meter log; invoice reconciliation; allocation worksheet |
| `dq_completeness` | Process inventory | Reconcile yarns, chemicals, water, energy, intermediate products, reference product, wastewater, and each solid waste exchange at process level; explain omissions and mass-balance discrepancies. | input-output inventory; mass balance; omission register |
| `dq_wastewater_characterization` | Wet-processing wastewater | Retain discharge route and the parameters relevant to the actual recipe and permit, including flow and applicable pH, temperature, conductivity, pollutant, and treatment information. | flow record; laboratory report; treatment transfer record; permit applicability review |
| `dq_source_lineage` | Calculated and allocated values | Preserve raw records, formula version, source row_ids, allocation driver, operator, and calculation timestamp so every normalized value can be reproduced. | calculation workbook or machine-readable transformation log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm the reference output uses the exact public CPC 26810 product-flow UUID, Mass property UUID, kg unit, and all required product qualifiers; reject packaging-inclusive reference mass. | `unsd-cpc-v3-2025` |
| `validate_route_exclusivity` | Route-specific rows | For each batch, require exactly one construction route (woven pile or chenille) and one finishing input state (greige direct-finishing or wet-processed); reject simultaneous alternative intermediate inputs unless separate batch outputs are modelled. | `jrc-textiles-bref-2023` |
| `validate_atomic_exchanges` | Process inventory | Require every card to represent one product, waste, or elementary exchange; reject combined utilities, combined chemicals, combined packaging, combined wastes, or selector instructions. | `eu-textiles-bat-2022` |
| `validate_wet_processing` | Conditional wet-processing process | If wet processing occurs on site, require process water, each actual chemical formulation, electricity, heat source, output fabric, wastewater, and separately collected bath records as applicable; if outsourced or absent, require disclosure and linked supplier data. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_mass_balance` | Each process and reporting period | Require a documented mass-balance review and investigate unexplained discrepancies; do not invent a balancing flow or overwrite measured foreground records. | `eu-textiles-bat-2022` |
| `validate_allocation_and_completeness` | Shared operations | Confirm subdivision was attempted first, every remaining allocation uses a disclosed physical driver, and collected exchange totals reconcile to site meters, purchases, production, discharge, and waste records. | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for finished woven cotton pile fabric or cotton chenille fabric at the plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed for representativeness and linked upstream datasets |
| allowed_use | Product-specific or route-specific LCI studies whose geography, technology, finish state, moisture basis, and reporting period are compatible with the dataset metadata |
| excluded_use | Terry towelling, narrow fabrics, tufted fabrics, man-made-fibre pile or chenille fabrics, made-up articles, or cradle-to-grave claims without added upstream and downstream stages |
| required_metadata | PCR id; dataset version; site geography; reporting period; pile-versus-chenille route; cotton composition; construction; width; areal mass; finish state; moisture basis; quality grade; included and outsourced processes; allocation drivers; upstream dataset references |
| required_quality_disclosure | Foreground share; primary-data period; meter and scale coverage; chemical recipe coverage; mass-balance discrepancy; missing data; estimation and allocation methods; wastewater route; waste destinations; UUID gaps; source versions |
| update_trigger | Material change in yarn composition, construction route, loom or finishing technology, wet-processing recipe, site utility supply, wastewater treatment, allocation method, product specification, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 26810, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-08-12) | Exact product-category scope and exclusions |
| `jrc-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (accessed 2026-08-12) | Textile process decomposition, wet pretreatment, dyeing, finishing, and directly associated activities |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, OJ L 325, 20 December 2022, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022D2508 (accessed 2026-08-12) | Process-level input/output inventory, monitoring, water, energy, chemicals, wastewater, waste, and treatment disclosure |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed 2022, https://www.iso.org/standard/38498.html (accessed 2026-08-12) | LCI boundary, normalization, allocation hierarchy, data quality, and reporting principles |
