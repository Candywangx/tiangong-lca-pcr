---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-tufted
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Carpets and other textile floor coverings, tufted

## 1. Scope and Applicability

This PCR governs production of finished tufted carpets and other tufted textile floor coverings classified in CPC 3.0 subclass 27230. It covers broadloom and modular products whose pile yarn is inserted through a primary backing and whose tufts are secured by a declared unitary, coated, laminated, or secondary-backing construction.

The foreground boundary begins with receipt of finished pile yarn, primary backing, backing chemicals and other purchased materials at the carpet plant and ends with accepted, packaged product at the factory gate. It includes tufting, backing-compound preparation, coating or lamination, drying or curing, finishing, cutting, inspection, packaging, directly associated utilities, wastes, wastewater and direct emissions. Integrated fibre, yarn or backing manufacture, yarn heat-setting, dyeing, printing, installation, use, maintenance and end-of-life are included only when the declared site controls them and they are represented as separately traceable processes; otherwise they require linked upstream or downstream datasets.

Woven, knotted, flocked, needle-punched, felt and non-textile floor coverings are excluded. Underlay, installation adhesive and separately sold accessories are excluded from the reference product unless physically integrated and sold as part of the declared finished covering.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-tufted |
| classification_refs | CPC 3.0:27230, exact |
| covered_products | Finished tufted broadloom carpet, tufted carpet tile face construction, and other finished textile floor covering made by inserting pile yarn through primary backing and securing the tufts with a declared backing system. |
| excluded_products | Woven, knotted, flocked, needle-punched or felt floor coverings; loose underlay; installation adhesive; and products whose textile face is not formed by tufting. |
| representative_product | Factory-gate production mix of accepted finished tufted textile floor covering with declared pile fibre, primary backing, backing formulation, secondary-backing construction and surface finish. |
| production_route | Receipt of finished yarn and backing materials; tufting; backing-compound preparation; coating or lamination; drying or curing; finishing, cutting and inspection; packaging and factory-gate release. |
| market_state | Finished dry floor-covering product at plant gate, rolled or modular as declared, excluding installation materials not supplied as part of the product. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide finished tufted textile floor covering for an explicitly declared indoor or other intended floor-covering application. |
| How much | 1 kg net mass of accepted finished product at the factory gate. |
| How well | Declare pile fibre and recycled content, pile construction, primary and secondary backing, backing chemistry, product format, mass per area, pile mass per area, dimensions, surface treatment, performance grade and applicable product specification. |
| How long or cycle | One factory-gate production cycle; no service-life equivalence is asserted unless the data package adds verified use-performance and service-life evidence. |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the reference product flow below. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Carpets and other textile floor coverings, tufted `a01ef31e-fdc6-48be-a681-0a418c22c0cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pile fibre and recycled content; pile construction; primary backing material; backing formulation and solids content; secondary-backing material or explicit unitary-backing declaration; product format; net mass per area; pile mass per area; dimensions; dyeing or printing route; applied functional finishes; manufacturing geography; production period; moisture condition; packaging exclusion; intended application and performance grade |

The reference UUID was accepted only after a public state-code-100 direct read confirmed Product flow, CPC 3.0 subclass 27230, Mass and the kg unit basis. No database version is part of this PCR identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | accepted finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted dry finished product without removable shipping film, paperboard cores, pallets, rejected lengths or installation materials not sold as part of the product. Normalize all exchanges to exactly 1 kg accepted net output. |
| `mass_per_area_conversion` | production records expressed per area or roll | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert area or roll records using product- and campaign-specific measured net mass per area and accepted area. Retain the measured mass, area and conversion result; do not use a generic carpet grammage. |
| `wet_dry_basis` | latex, coating paste, wastewater, wet residue and dry solids | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-supplied wet mass and measured or supplier-declared solids fraction separately. Convert to dry solids only with a traceable batch-specific or formulation-specific factor and retain water as a separate balance. |
| `energy_carrier_separation` | electricity and each thermal energy carrier | carrier-specific | kWh, MJ or carrier-native unit | Preserve metered electricity separately from natural gas and any other fuel or purchased heat. Convert units only with a documented factor; do not merge carriers into one energy exchange. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | carpet-plant foreground | Include tufting, backing-compound preparation, coating or lamination, drying or curing, finishing, cutting, inspection, packaging, directly associated utilities, generated wastes, wastewater and direct emissions under operational control. | `us-epa-fabric-coating-1998`; `eu-textiles-bat-2022` |
| `boundary_purchased_inputs` | purchased yarn, backing, chemicals, fuels and packaging | Keep every purchased input as a visible atomic product exchange and link it to an upstream dataset that matches declared material grade, recycled content, geography and supply state. | `eu-pef-2021`; `iso-14044-2006` |
| `boundary_integrated_upstream` | site-integrated yarn, backing, dyeing, printing or finish preparation | Include the integrated operation as a separately traceable foreground process when controlled by the reporting site; otherwise do not fold its burdens into tufting by an undocumented estimate. | `eu-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_direct_releases` | coating, curing and on-site combustion | Record relevant measured direct air emissions, wastewater transfers and wastes separately from upstream fuel or chemical production. Applicability follows the declared formulation, thermal route and site input-output inventory. | `eu-textiles-bat-2022`; `us-epa-carpet-air-emissions-2002` |
| `boundary_exclusions` | factory-gate dataset | Exclude capital equipment, building construction, distribution beyond the factory gate, installation, use, maintenance and end-of-life unless the study goal explicitly adds them as separately disclosed modules. | `eu-pef-2021`; `iso-14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished pile yarn, primary backing, backing chemicals, secondary backing where used, utilities and packaging materials received at the carpet manufacturing site. |
| starting_condition_role | Purchased upstream inputs entering factory-gate tufted-floor-covering production. |
| product_classification_scope | CPC 3.0 subclass 27230 only; upstream yarn, polymer, latex, filler, backing, energy and packaging retain their own product identities. |
| recursive_input_rule | A purchased tufted carpet or tufted-carpet intermediate used as an input remains an explicit product input with its own upstream dataset; do not recursively apply this PCR to hide that input inside the current output. |
| upstream_dataset_requirement | Link each purchased material and energy exchange to a dataset matching the declared grade, formulation, recycled content, geography and delivery state. Unmatched proxies must be disclosed and must not overwrite the foreground identity. |
| disclosure | Declare site and period, product mix, pile and backing construction, integrated versus purchased upstream operations, coating formulation and solids, thermal route, emission-control route, rejected output, packaging boundary, allocation method and every data gap. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tufting` | Pile-yarn tufting into primary backing | required | Always included for CPC 27230 product. | Foreground formation of the tufted textile face and primary structure. | Measured mass of tufted greige carpet transferred to backing. |
| `backing_and_curing` | Backing-compound preparation, coating or lamination, drying and curing | required | Include the actual unitary, precoat, laminated, foam or secondary-backing route; mark route-inapplicable atomic rows as not applicable. | Foreground tuft anchoring, backing application and thermal curing. | Measured mass of backed tufted carpet transferred to finishing. |
| `finishing_and_packaging` | Finishing, cutting, inspection, packaging and release | required | Always included through accepted factory-gate release. | Foreground final conversion and release of the reference product. | Accepted net finished product mass. |

### Process: Pile-yarn tufting into primary backing (`tufting`)

#### Inputs

##### Product flows

###### Polyamide 6 pile yarn (`tufting_pa6_yarn`)

Polyamide 6 yarn enters tufting only for the declared PA6 pile route. Record it separately from every other fibre grade.

- Selected flow: Polyamide 6 carpet pile yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus separately recorded returned unused yarn for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_materials`
- Sources: `us-epa-warm-carpet-2016`

###### Polyamide 6,6 pile yarn (`tufting_pa66_yarn`)

Polyamide 6,6 yarn enters tufting only for the declared PA6,6 pile route and remains distinct from PA6.

- Selected flow: Polyamide 6,6 carpet pile yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus separately recorded returned unused yarn for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_materials`
- Sources: `us-epa-warm-carpet-2016`

###### Polyester pile yarn (`tufting_polyester_yarn`)

Polyester yarn enters tufting only for the declared polyester pile route.

- Selected flow: Polyester carpet pile yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus separately recorded returned unused yarn for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_materials`
- Sources: `us-epa-warm-carpet-2016`

###### Polypropylene pile yarn (`tufting_polypropylene_yarn`)

Polypropylene yarn enters tufting only for the declared polypropylene pile route.

- Selected flow: Polypropylene carpet pile yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus separately recorded returned unused yarn for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_materials`
- Sources: `us-epa-warm-carpet-2016`

###### Wool pile yarn (`tufting_wool_yarn`)

Wool yarn enters tufting only for the declared wool pile route; record its measured moisture condition.

- Selected flow: Wool carpet pile yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus separately recorded returned unused yarn at the recorded moisture condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_materials`
- Sources: `us-epa-fabric-coating-1998`

###### Woven polypropylene primary backing (`tufting_primary_pp_backing`)

Woven polypropylene primary backing receives the pile yarn during tufting. Record its grade and measured mass per area.

- Selected flow: Woven polypropylene primary carpet backing
- Flow property / unit: Mass / kg
- Amount rule: measured backing mass consumed from issued area and product-specific measured mass per area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_materials`
- Sources: `us-epa-fabric-coating-1998`

###### Electricity for tufting (`tufting_electricity`)

Metered electricity powers the tufting machines and directly associated yarn-feed and extraction equipment.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity for the tufting line or reconciled site-meter electricity assigned by measured machine operating hours and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tufted greige carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_electricity`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unbacked tufted greige carpet (`tufted_greige_carpet`)

This internal product is the measured tufted pile and primary-backing structure before backing compound is applied.

- Selected flow: Unbacked tufted greige carpet
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass at the tufting-to-backing handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per tufting reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_materials`
- Sources: `us-epa-carpet-air-emissions-2002`

##### Waste flows

###### Tufting yarn trim waste (`tufting_yarn_trim_waste`)

This is the physically segregated yarn offcut and tufting-startup trim stream for the declared pile-fibre route.

- Selected flow: Tufting yarn trim waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared reuse, recycling, treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tufted greige carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-carpet-process-waste-1989`

##### Elementary flows

### Process: Backing-compound preparation, coating or lamination, drying and curing (`backing_and_curing`)

#### Inputs

##### Product flows

###### Unbacked tufted greige carpet input (`backing_tufted_greige_carpet`)

The unbacked tufted intermediate crosses into the backing line as a separately reconciled internal product.

- Selected flow: Unbacked tufted greige carpet
- Flow property / unit: Mass / kg
- Amount rule: measured received mass at the backing-line handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per backing reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_materials`
- Sources: `us-epa-carpet-air-emissions-2002`

###### Styrene-butadiene rubber latex (`backing_sbr_latex`)

SBR latex is recorded only for a declared SBR backing formulation, with wet mass and solids content retained separately.

- Selected flow: Styrene-butadiene rubber latex dispersion
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass issued to backing-compound preparation, net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_materials`
- Sources: `us-epa-fabric-coating-1998`; `us-epa-warm-carpet-2016`

###### Calcium carbonate filler (`backing_calcium_carbonate`)

Calcium carbonate is recorded as one filler input when present in the declared backing formulation.

- Selected flow: Calcium carbonate filler
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass charged to the backing compound from batch sheets, silo loss records and reconciled stock movement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_materials`
- Sources: `us-epa-fabric-coating-1998`

###### Process water for backing compound (`backing_process_water`)

Water intentionally added to the backing compound or used as a process input is recorded separately from washwater.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-sheet volume intentionally charged to the backing formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_water`
- Sources: `eu-textiles-bat-2022`

###### Woven polypropylene secondary backing (`backing_secondary_pp`)

Woven polypropylene secondary backing is recorded only when laminated to the declared product.

- Selected flow: Woven polypropylene secondary carpet backing
- Flow property / unit: Mass / kg
- Amount rule: measured consumed area multiplied by product-specific measured mass per area, reconciled to stock movement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_materials`
- Sources: `us-epa-fabric-coating-1998`

###### Jute secondary backing (`backing_secondary_jute`)

Jute secondary backing is recorded only when laminated to the declared product, with moisture condition stated.

- Selected flow: Woven jute secondary carpet backing
- Flow property / unit: Mass / kg
- Amount rule: measured consumed area multiplied by product-specific measured mass per area at the recorded moisture condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_materials`
- Sources: `us-epa-fabric-coating-1998`

###### Electricity for backing line (`backing_electricity`)

Metered electricity powers compound mixing, coating, lamination drives, fans and associated control equipment.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: backing-line submeter total or reconciled site-meter electricity assigned by measured operating hours and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_energy`
- Sources: `eu-textiles-bat-2022`

###### Natural gas for drying and curing (`backing_natural_gas`)

Natural gas is recorded only when combusted for the declared drying or curing route and remains separate from electricity.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered gas volume converted with the supplier- or meter-period-specific net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_energy`
- Sources: `eu-textiles-bat-2022`; `us-epa-fabric-coating-1998`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Backed tufted carpet before final finishing (`backed_tufted_carpet`)

This internal product is the dried or cured backed construction transferred to finishing before final release.

- Selected flow: Backed tufted carpet, unfinished
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass at the backing-to-finishing handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per backing reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_materials`
- Sources: `us-epa-fabric-coating-1998`

##### Waste flows

###### Waste SBR-latex and calcium-carbonate backing compound (`backing_compound_waste`)

This is one physically segregated residual backing-compound stream from an SBR-latex and calcium-carbonate route; other formulations require their own separately named waste card in the foreground package.

- Selected flow: Waste SBR-latex and calcium-carbonate backing compound
- Flow property / unit: Mass / kg
- Amount rule: measured residual mass sent to the declared recovery, treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Coating-equipment washwater (`coating_washwater_waste`)

This waste flow is the separately collected aqueous washwater from backing-compound and coating-equipment cleaning, with destination declared.

- Selected flow: Coating-equipment washwater
- Flow property / unit: Volume / m3
- Amount rule: metered or tank-volume discharge transferred to on-site or off-site wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_wastewater`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Styrene released to air (`styrene_to_air`)

Styrene is recorded when identified as relevant from the declared SBR-latex coating and curing route; do not substitute total VOC for this substance row.

- Selected flow: Styrene to air
- Flow property / unit: Mass / kg
- Amount rule: measured mass emission from the declared air-emission point for the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_air_emissions`
- Sources: `us-epa-carpet-air-emissions-2002`; `eu-textiles-bat-2022`

###### Ammonia released to air (`ammonia_to_air`)

Ammonia is recorded only when the formulation or curing chemistry and the input-output inventory identify it as relevant.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: measured mass emission from the declared air-emission point for the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_air_emissions`
- Sources: `eu-textiles-bat-2022`

###### Formaldehyde released to air (`formaldehyde_to_air`)

Formaldehyde is recorded only when the formulation and site input-output inventory identify it as relevant to coating or thermal treatment.

- Selected flow: Formaldehyde to air
- Flow property / unit: Mass / kg
- Amount rule: measured mass emission from the declared air-emission point for the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_air_emissions`
- Sources: `eu-textiles-bat-2022`

###### Fossil carbon dioxide released to air (`fossil_co2_to_air`)

Fossil carbon dioxide from on-site natural-gas combustion is recorded as a direct emission when gas is combusted within the foreground boundary.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or facility-verified direct-emission inventory reconciled to the metered natural-gas record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_air_emissions`
- Sources: `eu-textiles-bat-2022`

###### Calcium carbonate dust released to air (`calcium_carbonate_dust_to_air`)

Calcium carbonate dust is recorded when filler unloading or handling creates a measured direct release to the declared receiving-air compartment.

- Selected flow: Calcium carbonate dust to air
- Flow property / unit: Mass / kg
- Amount rule: measured mass emission from the declared dust-emission point for the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg backed tufted carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_air_emissions`
- Sources: `eu-textiles-bat-2022`; `us-epa-fabric-coating-1998`

### Process: Finishing, cutting, inspection, packaging and release (`finishing_and_packaging`)

#### Inputs

##### Product flows

###### Backed tufted carpet input (`finishing_backed_tufted_carpet`)

The backed intermediate crosses into finishing as a separately reconciled internal product.

- Selected flow: Backed tufted carpet, unfinished
- Flow property / unit: Mass / kg
- Amount rule: measured received mass at the finishing-line handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `us-epa-carpet-process-waste-1989`

###### Electricity for finishing and packaging (`finishing_electricity`)

Metered electricity powers shearing, trimming, cutting, inspection, winding or tile handling and packaging equipment.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: finishing-line submeter total or reconciled site-meter electricity assigned by measured operating hours and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_electricity`
- Sources: `eu-textiles-bat-2022`

###### Low-density polyethylene packaging film (`packaging_ldpe_film`)

LDPE film is recorded only when used to wrap or protect the released product and remains outside net product mass.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured packaging-film mass issued minus returned unused film for accepted shipments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`

###### Paperboard roll core (`packaging_paperboard_core`)

The paperboard core is recorded when supplied with rolled product and remains outside net product mass.

- Selected flow: Paperboard roll core
- Flow property / unit: Mass / kg
- Amount rule: measured core mass supplied with accepted rolls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`

###### Wooden shipping pallet (`packaging_wood_pallet`)

Wooden pallets are recorded when consumed or when the measured non-returned share crosses the factory-gate boundary.

- Selected flow: Wooden shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass multiplied by the non-returned pallet count assigned to accepted shipments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished tufted floor covering (`ref_finished_tufted_carpet`)

This is the sole quantitative reference output after final inspection and acceptance. Removable shipping packaging is not included in its net mass.

- Selected flow: Carpets and other textile floor coverings, tufted `a01ef31e-fdc6-48be-a681-0a418c22c0cc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: measured accepted net finished-product mass, normalized to exactly 1 kg reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_release`

##### Waste flows

###### Finished tufted carpet offcuts (`finishing_carpet_offcuts_waste`)

This is the physically segregated composite offcut stream generated by final width trimming, cutting or tile conversion.

- Selected flow: Finished tufted carpet offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared reuse, recycling, treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-carpet-process-waste-1989`

###### LDPE packaging-film scrap (`packaging_ldpe_scrap_waste`)

This is the separately collected LDPE film scrap generated during wrapping and packaging.

- Selected flow: Low-density polyethylene packaging-film scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass sent to the declared recycling, treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Paperboard core scrap (`packaging_paperboard_scrap_waste`)

This is the separately collected paperboard core and core-cutting scrap generated during packaging.

- Selected flow: Paperboard roll-core scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass sent to the declared recycling, treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished tufted floor covering
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | product families, lines and campaigns | First avoid allocation by separating product families, campaigns and process lines and by using submeters, batch sheets and route-specific material records. | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_shared_utilities` | shared electricity, thermal energy, water and treatment | Assign shared utilities with a measured causal driver such as machine operating time, metered load, oven throughput, water meter or pollutant load. If no causal relation can be demonstrated, use a documented physical basis and test the sensitivity. | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_multi_product_output` | simultaneous saleable outputs | When a process produces more than one saleable product and subdivision is not feasible, prefer physical allocation that reflects the causal relationship; use economic allocation only when physical relationships are not meaningful, and disclose prices, period and sensitivity. | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_waste_and_recycling` | recovered offcuts, residues and packaging scrap | Record the actual waste output and destination. Do not subtract an avoided-production credit from the foreground inventory or convert waste into a negative material input; model any recycling or recovery outside the factory-gate process with an explicitly declared downstream method. | `eu-pef-2021` |
| `allocation_no_hidden_loss` | rejects, rework and internal returns | Keep internal returns visible in the process mass reconciliation and include resources consumed by rejected output in the accepted-product inventory; do not erase losses by netting them against purchased inputs without a traceable return record. | `eu-textiles-bat-2022`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tufting_materials` | `tufting` | pile yarn, primary backing, greige output and returned unused material | scale, warehouse issue, return and transfer records | material identity; lot; fibre grade; recycled content; issued mass; returned mass; backing area; measured mass per area; greige transfer mass; timestamp | calibrated scale and reconciled warehouse/line records | kg and m2 | each lot or shift | representative production period, normally at least 12 consecutive months | every included tufting line | sum net issued input and transferred output by homogeneous product route before normalization | calibration records; stock reconciliation; lot traceability; signed transfer records |
| `cp_tufting_electricity` | `tufting` | electricity | submeter or site-meter record | meter id; start and end reading; interval; line operating hours; rated load where allocation is needed; production route | direct submeter preferred; otherwise reconciled causal allocation | kWh | continuous or each shift | same period as production | every included tufting line | sum metered electricity or allocate reconciled site total with documented driver | meter calibration; energy reconciliation; operating log |
| `cp_backing_materials` | `backing_and_curing` | greige input, latex, filler, secondary backing and backed output | batch sheet, scale, tank, silo, warehouse and transfer records | material identity; formulation; wet mass; solids fraction; filler mass; backing area and mass per area; returned mass; backed transfer mass | calibrated scales, tank/silo readings and batch reconciliation | kg and m2 | each batch or shift | same period as production | every included backing and curing line | sum by declared backing formulation and route before normalization | batch authorization; calibration; stock reconciliation; formulation revision |
| `cp_backing_water` | `backing_and_curing` | process water | flowmeter or batch-sheet record | meter id; batch id; charged volume; water source; treatment grade; timestamp | direct meter or verified batch vessel volume | m3 | each batch or daily | same period as production | every included backing and curing line | sum intentional process-water charge separately from washwater | meter calibration; batch sheet; water balance |
| `cp_backing_energy` | `backing_and_curing` | electricity and natural gas | electricity and gas meter records | meter id; readings; energy unit; gas volume; net calorific value; oven hours; throughput; route | direct line meters preferred; otherwise reconciled causal allocation | kWh, m3 and MJ | continuous or each shift | same period as production | every included backing and curing line | keep each carrier separate; convert gas using period-specific net calorific value | meter calibration; supplier statement; energy balance; oven log |
| `cp_backing_wastewater` | `backing_and_curing` | coating-equipment washwater | flowmeter, tank-transfer and wastewater records | source operation; volume; pH; solids or COD where monitored; destination; transfer date | metered discharge or calibrated tank volume at transfer | m3 | each cleaning event or discharge | same period as production | every included coating-equipment cleaning and discharge point | sum only the separately identified coating-equipment washwater stream | meter calibration; transfer manifest; laboratory chain of custody where sampled |
| `cp_backing_air_emissions` | `backing_and_curing` | substance-specific direct air release | stack test, continuous monitor or verified facility emission record | substance; emission point; receiving compartment; sampling period; gas flow; concentration; mass emission; production throughput; control status | applicable standardized measurement or verified site inventory | kg | each required monitoring event and annual reconciliation | representative normal operations and relevant highest-emission state | every relevant coating, curing, filler-handling or combustion emission point | calculate or record each substance mass separately and normalize by backed output | sampling plan; laboratory report; monitor QA; control-device log; production linkage |
| `cp_finishing_materials` | `finishing_and_packaging` | backed input and packaging materials | scale, packaging issue, return and shipment records | backed input mass; film mass; core mass; pallet count and mass; returned packaging; shipment id | calibrated scale and reconciled packaging/dispatch records | kg and item | each shift or shipment | same period as production | every included finishing and packaging line | sum consumed or non-returned packaging separately from net product | scale calibration; stock reconciliation; dispatch record; pallet-return ledger |
| `cp_finishing_electricity` | `finishing_and_packaging` | electricity | submeter or site-meter record | meter id; readings; interval; equipment hours; accepted output | direct submeter preferred; otherwise reconciled causal allocation | kWh | continuous or each shift | same period as production | every included finishing and packaging line | sum metered electricity or allocate reconciled total with documented driver | meter calibration; energy reconciliation; equipment log |
| `cp_final_product_release` | `finishing_and_packaging` | accepted finished reference product | final scale, area, inspection and release records | product code; pile and backing qualifiers; accepted mass; accepted area; rejected mass; moisture condition; inspection disposition; packaging mass; timestamp | calibrated final-product weighing and quality release | kg and m2 | each roll, tile lot or shipment | same period as production | every included finishing and packaging line | sum accepted net mass; exclude removable shipping packaging; retain rejected mass separately | scale calibration; inspection record; release authorization; mass-area reconciliation |
| `cp_waste_records` | all | each separately named waste output | scale ticket, container log and transfer manifest | waste identity; source process; mass; contamination state; destination; treatment code; date | direct weighing at source or verified transfer scale | kg | each container or transfer | same period as production | every included site and waste storage or transfer point | sum each physical waste stream and destination separately; no avoided-burden netting | scale ticket; licensed transfer manifest; stock balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory exchange | normalized exchange = reporting-period exchange amount / reporting-period accepted net finished-product mass | raw exchange amount; accepted net mass from `cp_final_product_release` | exchange per 1 kg accepted finished product | `iso-14044-2006`; `eu-pef-2021` |
| `calc_area_to_mass` | area- or roll-based product and backing records | material mass = measured consumed area × product- or lot-specific measured mass per area; retain both raw measurements | consumed area; measured mass per area | kg material input or product output | `iso-14044-2006` |
| `calc_latex_dry_solids` | SBR latex and wet backing compound | dry solids = wet mass × measured or supplier-declared solids fraction; retain wet mass and water balance as separate fields | wet mass; solids fraction | kg dry backing solids | `us-epa-fabric-coating-1998` |
| `calc_gas_energy` | metered natural gas | energy = corrected gas volume × reporting-period supplier net calorific value | corrected gas volume; net calorific value | MJ natural-gas input | `eu-textiles-bat-2022` |
| `calc_process_mass_reconciliation` | tufting, backing and finishing | reconcile separately measured inputs, intermediate transfers, accepted output, internal returns, rejects, wastes and measured releases; investigate and disclose the residual without forcing it to zero | all process material records | process-specific mass-balance residual and explanation | `eu-textiles-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and represented mix | Retain the required qualifiers and production share for each homogeneous route. Do not combine products with different pile fibre, backing chemistry, product format or integrated upstream operations unless the weighting is documented. | product specification; bill of materials; formulation; production and release records |
| `dq_temporal_representativeness` | all foreground exchanges | Use a representative production period, normally at least 12 consecutive months. A shorter campaign is allowed only with reason, operating-state coverage and disclosure of seasonality, startup and shutdown treatment. | meter dates; production calendar; campaign log; exception rationale |
| `dq_measurement_traceability` | mass, area, water and energy records | Use calibrated or verified instruments and preserve raw readings, units, conversion factors and allocation drivers. | calibration certificates; meter identifiers; raw logs; reconciliation |
| `dq_material_balance` | each required process | Reconcile material inputs, intermediate transfers, output, returns, rejects and wastes. Investigate and disclose unexplained residuals; do not invent a balancing exchange. | batch and stock reconciliation; transfer records; waste manifests; residual review |
| `dq_emission_relevance` | air, wastewater and waste releases | Establish and periodically review a site input-output inventory. Record every substance identified as relevant with the applicable measurement and receiving compartment; absence requires documented non-applicability, not a zero assumption. | chemical inventory; emission-point map; monitoring plan; laboratory or stack-test report; BAT applicability review |
| `dq_upstream_matching` | linked purchased-input datasets | Match material grade, formulation, recycled content, geography and delivery state. Disclose every proxy, age gap and missing supplier dataset. | supplier specification; dataset metadata; proxy register |
| `dq_completeness` | foreground package | Include all required processes and every applicable atomic row; report accepted inputs, checks performed, checks skipped and unresolved flow identities. | completeness matrix; validation report; manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require UUID `a01ef31e-fdc6-48be-a681-0a418c22c0cc`, Product flow, CPC 3.0 subclass 27230, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg and reference amount 1. | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | reference product | Fail conformance when any required pile, backing, format, mass-per-area, process-route, geography, period, moisture or packaging-boundary qualifier is missing. | `unsd-cpc-3-0-2025`; `eu-pef-2021` |
| `validate_process_coverage` | process map | Require `tufting`, `backing_and_curing` and `finishing_and_packaging`; require explicit route applicability for each conditional material or emission row. | `us-epa-fabric-coating-1998`; `us-epa-carpet-air-emissions-2002` |
| `validate_atomic_flows` | process inventory | Fail any card whose selected flow is a collection, selector or combined exchange. Electricity, natural gas, each material, each packaging component, each waste stream and each emitted substance must remain a separate row. | `eu-textiles-bat-2022` |
| `validate_foreground_evidence` | inventory amounts | Require a linked collection protocol and real foreground record for every amount. No AI estimate or uncited generic carpet quantity is conforming. | `eu-textiles-bat-2022`; `eu-pef-2021` |
| `validate_intermediate_handoffs` | process interfaces | Require tufted-greige output to reconcile with backing input and backed-carpet output to reconcile with finishing input for the same scope, with losses and inventory changes separately explained. | `eu-textiles-bat-2022` |
| `validate_mass_and_energy_separation` | balances | Require net reference-product mass to exclude removable packaging; require each energy carrier, wet/dry basis, return, reject, waste and direct emission to remain separately traceable. | `eu-textiles-bat-2022`; `iso-14044-2006` |
| `validate_allocation` | shared operations | Fail when subdivision and causal assignment were not attempted before allocation, or when the allocation basis, driver, period and sensitivity are absent. | `iso-14044-2006`; `eu-pef-2021` |
| `validate_uuid_acceptance` | UUID-bearing rows | Accept a Tiangong UUID only after direct public state-code-100 readback confirms exact flow semantics, flow type, reference property, unit basis and required qualifiers. Otherwise reject the UUID for that row and keep the row-specific identity gap in review metadata. |  |
| `validate_data_quality_disclosure` | published data package | Require temporal coverage, site scope, instrument evidence, mass-balance residuals, proxy use, missing measurements, emission applicability and every skipped check to be disclosed. | `eu-textiles-bat-2022`; `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for a declared tufted textile floor-covering product or production mix. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Construction of foreground data packages and downstream process or lifecycle-model projections for products matching the declared pile, backing, format, route, geography and period. |
| excluded_use | Comparative claims about floor-covering service, durability or use-stage performance without a separate verified area-and-service-life functional unit; proxying woven, knotted, flocked, needle-punched, felt or non-textile floor coverings; and use when required identity or route fields are missing. |
| required_metadata | PCR id; reference UUID; CPC coordinate; all reference qualifiers; site and geography; reporting period; product-mix weights; process coverage; integrated upstream operations; coating formulation and solids; energy-carrier split; packaging boundary; allocation method; linked upstream datasets; reviewer and validation status. |
| required_quality_disclosure | Instrument and calibration evidence; temporal and site representativeness; raw-record coverage; mass-balance residuals; allocation drivers; proxy register; waste destinations; emission relevance and measurement methods; unresolved UUIDs; checks performed and skipped. |
| update_trigger | Change in pile fibre or recycled content, backing chemistry or construction, product format, integrated dyeing or finishing, energy or curing route, emission controls, allocation driver, site geography, representative product mix, Tiangong identity, source method or material data gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 27230, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Official product-category scope and CPC identity. |
| `eu-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, JRC131874, 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-13) | Textile process boundary, coating and lamination context, input-output inventories and environmental management. |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-13) | Input-output, water and energy inventories; coating, lamination and thermal-treatment emissions; wastewater, waste and monitoring rules. |
| `us-epa-fabric-coating-1998` | official_guidance | United States Environmental Protection Agency, Fabric and Textile Coating Operations: Background Information for Promulgated Standards, EPA-453/R-98-002b, 1998. https://www3.epa.gov/airtoxics/coat/fabric/pic-fabr.pdf (retrieved 2026-08-13) | Tufted-carpet construction, primary backing, SBR latex, calcium-carbonate filler, secondary backing, coating, lamination and curing process decomposition. |
| `us-epa-carpet-air-emissions-2002` | official_guidance | United States Environmental Protection Agency, Air Emissions from Carpet Manufacturing Processes, 2002. https://www3.epa.gov/ttnchie1/conference/ei11/toxics/mulholland.pdf (retrieved 2026-08-13) | Tufting and backing process sequence and substance-specific air-emission relevance. |
| `us-epa-carpet-process-waste-1989` | official_guidance | United States Environmental Protection Agency, carpet dyeing and finishing process and waste-stream description, archived technical report SDMS 549967. https://archive.epa.gov/region1/foia/web/pdf/549967.pdf (retrieved 2026-08-13) | Tufting, backing, selvage trimming, finishing and separately recorded process waste streams. |
| `us-epa-warm-carpet-2016` | official_guidance | United States Environmental Protection Agency, WARM Background Document for Carpet. https://19january2017snapshot.epa.gov/www3/warm/pdfs/Carpet.pdf (retrieved 2026-08-13) | Carpet component and pile-fibre identities and factory-gate material decomposition. |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines; confirmed current in 2022. https://www.iso.org/standard/38498.html (retrieved 2026-08-13) | Goal and scope, inventory, allocation, reporting, review and data-quality principles. |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-13) | Functional unit and reference flow, system boundary, company-specific data, allocation, recycling disclosure and data-quality rules. |
