---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-o-b5487362
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) of man-made fibres

## 1. Scope and Applicability

This PCR applies to woven pile fabrics and chenille fabrics made from man-made fibres and delivered as finished manufactured fabric at the mill gate. It covers pile formation or chenille weaving, route-specific wet processing, physical or chemical finishing, inspection, and packing when those operations are controlled by the reporting site.

The category excludes terry towelling, narrow fabrics, cotton-only products, nonwoven fabrics, knitted pile fabrics, carpets, apparel, and production of man-made polymers, fibres, or yarns. A fabric containing natural-fibre blends remains in scope only when its declared product classification and commercial identity remain CPC 26820; composition and blend fractions must be disclosed.

No generic textile UUID may replace the exact category reference flow. The public CPC 26820 product-flow identity is used only after hybrid retrieval and direct Tiangong readback confirmed its name, classification, Product flow type, public state, and Mass reference property.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-o-b5487362 |
| classification_refs | CPC 3.0: 26820, exact |
| covered_products | Woven pile fabric and chenille fabric of synthetic or artificial man-made fibres, excluding terry towelling and narrow fabrics; blends only when classified as CPC 26820 |
| excluded_products | Terry towelling; narrow fabrics; cotton-only pile or chenille fabric; other-fibre CPC 26830 products; knitted, tufted, nonwoven, carpet, apparel, fibre, and yarn products |
| representative_product | Finished manufactured woven pile or chenille fabric of man-made fibres at the mill gate |
| production_route | Yarn receipt and preparation; pile or chenille weaving; conditional pretreatment, dyeing, washing, drying, heat-setting, or chemical finishing; inspection and packing |
| market_state | Finished fabric in rolls or equivalent dispatch form, dry, inspected, and ready for sale or further conversion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished woven pile or chenille fabric of man-made fibres that meets the declared construction, composition, colour, finish, and quality grade |
| How much | 1 kg net dry mass of conforming finished fabric |
| How well | Meets the declared pile or chenille construction, fibre composition, usable width, mass per area, colour/finish specification, and acceptance grade |
| How long or cycle | One production batch or campaign ending at mill-gate release; no use-life performance is credited |
| reference_flow_link | One kilogram of the confirmed Tiangong CPC 26820 product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) of man-made fibres `cb5fb579-ee14-4546-9d47-0a088d4dda76` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre polymer and blend fractions; filament or staple route; pile or chenille construction; greige, dyed, printed, coated, or otherwise finished state; usable width; mass per area; dyeing and finishing route; colour and finish specification; moisture basis; recycled content; quality grade; geography; reporting period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net finished-fabric mass after conditioning to the site's declared sale or test moisture basis; exclude cores, wrapping, pallets, and rejected fabric. |
| `area_to_mass_conversion` | area-based production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert metres or square metres to kg only with batch-specific usable width and measured mass per area; retain both raw measurements and the conversion calculation. |
| `wet_to_dry_conversion` | wet textile and liquor records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep wet mass, dry mass, moisture content, and sampling time separate; do not treat wet pick-up as product mass. |
| `chemical_active_mass` | formulated process chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record supplied formulation mass and declared active content separately; do not silently convert product mass to active-substance mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground mill operations | Include all site-controlled yarn preparation, pile or chenille weaving, wet processing, finishing, inspection, rework, utility use, wastewater handling, waste generation, and packing that occur before mill-gate release. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_upstream_inputs` | purchased products and services | Keep every purchased yarn, chemical, energy carrier, water supply, packaging component, and externally treated waste visible as an input or output linked to an upstream or downstream dataset; do not absorb it into an undocumented cut-off. | `eu-textiles-bat-2022` |
| `boundary_route_disclosure` | route-specific operations | Include pretreatment, dyeing, washing, drying, heat-setting, coating, printing, or other finishing only when performed for the declared product route, and explicitly mark absent operations as not applicable. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_excluded_stages` | cradle-to-mill-gate foreground package | Exclude polymer and man-made-fibre manufacture, yarn manufacture, garment conversion, distribution after the mill gate, use, and end of life from the foreground boundary; connect included purchased yarn to upstream datasets. | `unsd-cpc-26820`; `eu-textiles-bat-2022` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Man-made-fibre yarn received at the reporting mill, with polymer, filament/staple form, yarn count, blend, supplier, moisture basis, and upstream dataset declared |
| starting_condition_role | Purchased product input to the foreground fabric-production route |
| product_classification_scope | CPC 26820 finished woven pile and chenille fabrics of man-made fibres, excluding terry towelling and narrow fabrics |
| recursive_input_rule | If an input is already a CPC 26820 fabric, record it as a separate purchased product input with its own upstream dataset and do not recursively reproduce its manufacture inside the same foreground process. |
| upstream_dataset_requirement | Each yarn, process chemical, energy carrier, water supply, packaging material, and outsourced treatment must link to a geographically and technologically appropriate dataset or be disclosed as unresolved. |
| disclosure | Declare fibre composition, construction, wet-processing route, finishing route, included operations, outsourced operations, cut-offs, rework, waste destinations, and whether direct emissions are measured or calculated. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pile_or_chenille_weaving` | Yarn preparation and pile or chenille weaving | required | Always included for foreground manufacture of the woven category product | Foreground fabric formation | kg unfinished woven pile or chenille fabric leaving weaving |
| `wet_processing_and_chemical_finishing` | Pretreatment, dyeing, washing, drying, heat-setting, and chemical finishing | conditional | Include each operation actually performed by or for the reporting site | Foreground wet processing and property development | kg dry fabric leaving the conditional route |
| `inspection_and_packing` | Mechanical finishing, inspection, trimming, rolling, and packing | required | Always included through mill-gate release; individual packing components apply only when used | Foreground completion and reference-product release | kg conforming finished product |

### Process: Yarn preparation and pile or chenille weaving (`pile_or_chenille_weaving`)

#### Inputs

##### Product flows

###### Polyester filament yarn input (`polyester_filament_yarn_input`)

Polyester filament yarn crosses the weaving boundary only for batches using that declared yarn. Its mass is taken from accepted material issues corrected for returns.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass / kg
- Amount rule: accepted issue mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `jrc-textiles-bref-2023`
- UUID status: unresolved; the exact grade, filament construction, and recycled-content state are batch-specific

###### Polyester staple-fibre yarn input (`polyester_staple_yarn_input`)

Polyester staple-fibre yarn is a separate exchange for routes that use staple yarn rather than filament yarn. Its batch mass comes from material issue and return records.

- Selected flow: Polyester staple-fibre yarn
- Flow property / unit: Mass / kg
- Amount rule: accepted issue mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `jrc-textiles-bref-2023`
- UUID status: unresolved; the exact grade, blend, yarn count, and recycled-content state are batch-specific

###### Viscose filament yarn input (`viscose_filament_yarn_input`)

Viscose filament yarn crosses the boundary only when the declared artificial-fibre route uses it. It is not combined with synthetic-yarn inputs.

- Selected flow: Viscose filament yarn
- Flow property / unit: Mass / kg
- Amount rule: accepted issue mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `jrc-textiles-bref-2023`
- UUID status: unresolved; the exact grade and filament construction are batch-specific

###### Viscose staple-fibre yarn input (`viscose_staple_yarn_input`)

Viscose staple-fibre yarn is recorded separately for a staple artificial-fibre route. The card does not stand for other man-made-fibre yarns.

- Selected flow: Viscose staple-fibre yarn
- Flow property / unit: Mass / kg
- Amount rule: accepted issue mass minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `jrc-textiles-bref-2023`
- UUID status: unresolved; the exact grade, blend, and yarn count are batch-specific

###### Grid electricity for weaving (`weaving_electricity_input`)

Metered electricity supplied to yarn preparation, loom operation, local extraction, and weaving auxiliaries is recorded for the defined meter boundary.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: allocated submeter reading or documented meter balance for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_electricity`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; market, voltage, geography, and supplier contract must be declared

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfinished woven pile fabric (`unfinished_pile_fabric_output`)

This intermediate is inspected dry woven pile fabric leaving pile formation before any conditional wet-processing route. It applies only to the pile-fabric route.

- Selected flow: Unfinished woven pile fabric of man-made fibres
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate roll mass, or batch area multiplied by measured mass per area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per weaving batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `jrc-textiles-bref-2023`
- UUID status: unresolved; no exact reviewed intermediate greige woven-pile-fabric identity was confirmed

###### Unfinished chenille fabric (`unfinished_chenille_fabric_output`)

This intermediate is inspected dry chenille fabric leaving weaving before any conditional wet-processing route. It applies only to the chenille-fabric route.

- Selected flow: Unfinished chenille fabric of man-made fibres
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate roll mass, or batch area multiplied by measured mass per area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per weaving batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `jrc-textiles-bref-2023`
- UUID status: unresolved; no exact reviewed intermediate greige chenille-fabric identity was confirmed

##### Waste flows

###### Polyester yarn waste (`polyester_yarn_waste_output`)

Polyester yarn waste leaving the foreground process is measured separately from viscose waste and from mixed fabric offcuts.

- Selected flow: Polyester yarn waste
- Flow property / unit: Mass / kg
- Amount rule: weighed polyester yarn waste by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; purity, contamination, and treatment route are foreground-specific

###### Viscose yarn waste (`viscose_yarn_waste_output`)

Viscose yarn waste is weighed as its own waste exchange when artificial-cellulosic yarn is used and discarded.

- Selected flow: Viscose yarn waste
- Flow property / unit: Mass / kg
- Amount rule: weighed viscose yarn waste by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; purity, contamination, and treatment route are foreground-specific

##### Elementary flows

###### Weaving particulate matter to air (`weaving_dust_output`)

Particulate matter released beyond the site boundary from weaving or local extraction is recorded only from a declared monitoring or engineering-calculation basis.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or documented engineering calculation for the declared air compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; particulate definition and receiving-air compartment require exact foreground mapping

### Process: Pretreatment, dyeing, washing, drying, heat-setting, and chemical finishing (`wet_processing_and_chemical_finishing`)

#### Inputs

##### Product flows

###### Process water (`process_water_input`)

Water entering wet processing is recorded at the process boundary and kept separate from cooling water and sanitation water outside the product route.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered or tank-balance water supplied to included textile operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; source and treatment grade are site-specific

###### Grid electricity for wet processing (`wet_processing_electricity_input`)

Electricity supplied to pumps, dosing, washing, drying, heat-setting, ventilation, and abatement is recorded for the included route and meter boundary.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: allocated submeter reading or documented meter balance for included wet-processing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_electricity`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; market, voltage, geography, and supplier contract must be declared

###### Purchased steam (`steam_input`)

Purchased steam is an individual energy-carrier exchange when it crosses the site or process boundary; on-site fuel combustion must instead be modelled with the actual fuel and direct emissions.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam consumption corrected for condensate return under the declared accounting method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; pressure, production route, geography, and supplier boundary are site-specific

###### Sodium hydroxide (`sodium_hydroxide_input`)

Sodium hydroxide is recorded only when the batch recipe uses it for the declared pretreatment, dyeing, or pH-control step.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: issued formulation mass with concentration recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; concentration and supplier product state are recipe-specific

###### Hydrogen peroxide (`hydrogen_peroxide_input`)

Hydrogen peroxide is a separate conditional exchange for batches whose documented pretreatment recipe includes it.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: issued formulation mass with concentration recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; concentration and supplier product state are recipe-specific

###### Acetic acid (`acetic_acid_input`)

Acetic acid is recorded only when actually dosed for the declared bath or neutralisation step and is not merged with other acids.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: issued formulation mass with concentration recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; concentration and supplier product state are recipe-specific

###### Disperse dye formulation (`disperse_dye_formulation_input`)

One commercial disperse-dye formulation is recorded per card and recipe line for a synthetic-fibre dyeing route; different formulations require additional atomic rows in the foreground package.

- Selected flow: Disperse dye formulation
- Flow property / unit: Mass / kg
- Amount rule: issued commercial-product mass from the approved batch recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; commercial formulation and active composition are recipe-specific

###### Reactive dye formulation (`reactive_dye_formulation_input`)

One commercial reactive-dye formulation is recorded per card and recipe line when an artificial-cellulosic route uses it; it is not interchangeable with disperse dye.

- Selected flow: Reactive dye formulation
- Flow property / unit: Mass / kg
- Amount rule: issued commercial-product mass from the approved batch recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; commercial formulation and active composition are recipe-specific

###### Silicone textile softener (`silicone_softener_input`)

Silicone textile softener is a separate conditional exchange when the finishing recipe applies that product to achieve the declared handle.

- Selected flow: Silicone textile softener
- Flow property / unit: Mass / kg
- Amount rule: issued commercial-product mass from the approved batch recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_chemical`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; commercial formulation and active composition are recipe-specific

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-processed woven pile fabric (`wet_processed_pile_fabric_output`)

This intermediate is dry conforming woven pile fabric leaving the included wet-processing and chemical-finishing route before final inspection and packing.

- Selected flow: Wet-processed woven pile fabric of man-made fibres
- Flow property / unit: Mass / kg
- Amount rule: measured dry roll mass, or batch area multiplied by measured mass per area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per wet-processing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `jrc-textiles-bref-2023`
- UUID status: unresolved; the confirmed category UUID is reserved for the final reference product

###### Wet-processed chenille fabric (`wet_processed_chenille_fabric_output`)

This intermediate is dry conforming chenille fabric leaving the included wet-processing and chemical-finishing route before final inspection and packing.

- Selected flow: Wet-processed chenille fabric of man-made fibres
- Flow property / unit: Mass / kg
- Amount rule: measured dry roll mass, or batch area multiplied by measured mass per area
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per wet-processing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `jrc-textiles-bref-2023`
- UUID status: unresolved; the confirmed category UUID is reserved for the final reference product

##### Waste flows

###### Textile wastewater (`textile_wastewater_output`)

Wastewater crossing to on-site or off-site treatment is measured separately from clean cooling water and stormwater and is assigned its actual treatment route.

- Selected flow: Textile wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or validated water balance for the included route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_discharge`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; composition, discharge route, and treatment destination are site-specific

###### Wastewater-treatment sludge (`wastewater_sludge_output`)

Sludge generated by included on-site textile-wastewater treatment is recorded by wet and dry-solids mass and destination.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: weighed wet sludge with measured or laboratory dry-solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; dry-solids content, hazardous status, and destination are site-specific

##### Elementary flows

###### Acetic acid to air (`acetic_acid_air_output`)

Acetic acid emitted to air from drying, heat-setting, or finishing is reported separately when used in the batch and identified by measurement or a documented chemical-specific calculation.

- Selected flow: Acetic acid to air
- Flow property / unit: Mass / kg
- Amount rule: measured acetic-acid emission or chemical-specific mass balance for the declared air compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry fabric leaving wet processing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; an exact acetic-acid identity and receiving-air compartment require foreground confirmation

### Process: Mechanical finishing, inspection, trimming, rolling, and packing (`inspection_and_packing`)

#### Inputs

##### Product flows

###### Grid electricity for finishing and packing (`finishing_electricity_input`)

Electricity for brushing, raising, shearing, inspection, rolling, extraction, and packing is recorded for the applicable equipment and meter boundary.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: allocated submeter reading or documented meter balance for finishing and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_electricity`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; market, voltage, geography, and supplier contract must be declared

###### Polyethylene packaging film (`polyethylene_film_input`)

Polyethylene film used to wrap the released fabric is weighed or calculated from item counts and verified unit mass.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: issued film mass or count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`
- Sources:
- UUID status: unresolved; polymer grade, recycled content, and supplier product state are foreground-specific

###### Cardboard roll core (`cardboard_core_input`)

The cardboard core is a distinct packaging component and is recorded only when dispatched with the fabric roll.

- Selected flow: Cardboard roll core
- Flow property / unit: Mass / kg
- Amount rule: core count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`
- Sources:
- UUID status: unresolved; board grade, recycled content, and supplier product state are foreground-specific

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished CPC 26820 fabric (`final_product_output`)

The final product is the net dry mass of accepted fabric released at the mill gate. Packaging and rejected material are excluded from this exchange.

- Selected flow: Woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) of man-made fibres `cb5fb579-ee14-4546-9d47-0a088d4dda76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: net accepted finished-fabric mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `unsd-cpc-26820`
- UUID status: confirmed by flow-hybrid-search and Tiangong CLI direct read as public Product flow, exact CPC 26820, Mass

##### Waste flows

###### Fabric offcuts (`fabric_offcuts_output`)

Offcuts and rejected pieces generated during final trimming and inspection are weighed separately from yarn wastes and classified by actual fibre composition and destination.

- Selected flow: Fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: weighed offcuts and rejected pieces by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; fibre composition, contamination, and treatment route are foreground-specific

##### Elementary flows

###### Finishing particulate matter to air (`finishing_dust_output`)

Particulate matter discharged beyond the site boundary from raising, brushing, shearing, or extraction is reported for the declared air compartment.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or documented engineering calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring`
- Sources: `eu-textiles-bat-2022`
- UUID status: unresolved; particulate definition and receiving-air compartment require exact foreground mapping

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | independently measurable products, routes, or batches | Avoid allocation by separating meters, recipes, batches, rework, waste treatment, and route-specific operations whenever the underlying records permit subdivision. | `iso-14044-2006` |
| `allocation_reuse_closed_loop` | internal rework returned to the same product route | Keep internally reworked fabric inside the batch mass balance and do not count it as both waste output and new product input. | `iso-14044-2006` |
| `allocation_physical_fallback` | unavoidable shared foreground burdens | If subdivision is not practicable, use a documented physical relationship that reflects the shared operation; use dry product mass only when no more causal physical parameter is available, and disclose sensitivity. | `iso-14044-2006` |
| `allocation_recycling_no_avoided_burden` | fabric, yarn, sludge, or packaging waste sent to recovery | Report the waste output and treatment destination without an avoided-product credit unless the downstream study applies a separately declared recycling method. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `pile_or_chenille_weaving` | yarn inputs | purchase receipt, issue, return, inventory adjustment | material_id; polymer; filament_or_staple; blend; yarn_count; recycled_content; issued_mass; returned_mass; batch_id | reconcile warehouse issues and returns to the production batch | kg | each issue and return | complete batch or campaign | all yarn stores serving the route | sum accepted issues minus unused returns by material identity | signed issue/return records and stock reconciliation |
| `cp_metered_electricity` | all applicable processes | grid electricity | electricity meter or submeter | meter_id; start; end; multiplier; timestamp; process_scope; downtime | read calibrated meters and allocate only documented shared loads | kWh | at least each batch shift or billing interval | representative reporting period covering all declared routes | all included production and abatement equipment | net reading minus excluded loads, normalized to conforming output | calibration status, meter photographs or export, and allocation worksheet |
| `cp_product_output` | all applicable processes | intermediate and final fabric output | scale, roll ticket, area and mass-per-area test | roll_id; batch_id; gross_mass; tare_mass; usable_width; length; mass_per_area; moisture_basis; quality_status | weigh accepted rolls; use area conversion only with batch-specific test results | kg | each roll or batch | complete batch or campaign | all included lines and inspection stations | accepted net dry mass by process output and final quality status | scale calibration, roll tickets, test report, rejection log |
| `cp_waste_mass` | all applicable processes | yarn waste, offcuts, and sludge | scale ticket and waste manifest | waste_id; material; wet_mass; dry_solids; container_tare; destination; date; batch_id | weigh each waste stream and retain destination evidence | kg | each dispatch or batch | complete reporting period | all included operations and on-site treatment | net mass by atomic waste identity and destination | calibrated scale record, manifest, laboratory solids test when relevant |
| `cp_emission_monitoring` | all applicable processes | air emissions | stack or workplace-exhaust test and operating log | pollutant; method; concentration; gas_flow; duration; compartment; operating_state; batch_output | apply the declared approved measurement or engineering method | kg | permit frequency and representative campaigns | cover normal and relevant non-normal operations | every included emission point | concentration times flow times duration, normalized to output | laboratory report, sampling plan, calibration, operating log |
| `cp_process_water` | `wet_processing_and_chemical_finishing` | process water | meter, tank, or validated water balance | source; meter_id; start; end; tank_change; operation; batch_id | meter water by operation; balance only when direct metering is unavailable | m3 | each batch or daily | complete wet-processing route | all included wet operations | net process water excluding separately measured non-process uses | meter calibration and water-balance closure |
| `cp_thermal_energy` | `wet_processing_and_chemical_finishing` | purchased steam | steam meter and condensate record | steam_mass_or_energy; pressure; enthalpy_basis; condensate_return; meter_id; operation | read calibrated steam meter and apply declared condensate accounting | MJ | each batch or daily | complete wet-processing route | all included thermal operations | net delivered energy normalized to dry process output | meter calibration and energy-balance worksheet |
| `cp_recipe_chemical` | `wet_processing_and_chemical_finishing` | one recipe chemical per row | approved recipe, dosing log, stock issue, supplier specification | product_id; supplier; batch; concentration; active_content; issued_mass; returned_mass; operation | reconcile approved recipe with actual dosing and returns | kg supplied product | each batch | all included recipe variants | all included wet-processing and finishing equipment | sum net dosed mass for each commercial product identity | recipe approval, dosing record, SDS or technical data sheet |
| `cp_wastewater_discharge` | `wet_processing_and_chemical_finishing` | textile wastewater | discharge meter and treatment-transfer record | meter_id; volume; date; route; destination; batch_or_period | measure wastewater at each declared treatment boundary | m3 | continuous or daily | complete reporting period | all included wet-processing discharges | sum by discharge route without mixing clean water | meter calibration, transfer record, water-balance closure |
| `cp_packaging_mass` | `inspection_and_packing` | one packaging component per row | issue record, item count, unit-mass test | component_id; material; recycled_content; count; unit_mass; returned_quantity; batch_id | weigh issued packaging or multiply count by verified unit mass | kg | each batch | complete dispatch batch | all packing stations for the product | net issued mass by component identity | scale calibration, unit-mass test, issue and return records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | all inventory rows | normalized amount = included batch amount / net kg conforming finished reference product | atomic exchange amount; accepted product mass | amount per 1 kg reference product |  |
| `calc_area_to_mass` | area-recorded fabric | fabric mass = usable length × usable width × measured batch mass per area; do not use nominal catalogue mass per area | usable length; usable width; measured mass per area | kg fabric |  |
| `calc_active_content_disclosure` | formulated chemicals | active-substance mass = net supplied formulation mass × supplier-declared active fraction; retain supplied-product mass as the inventory exchange unless the selected flow explicitly represents active substance | formulation mass; active fraction | kg active substance as supplementary disclosure | `eu-textiles-bat-2022` |
| `calc_air_emission_mass` | measured channelled air emissions | emitted mass = measured concentration × dry standardized gas flow × operating duration, with unit and moisture corrections documented | concentration; gas flow; duration; correction factors | kg pollutant to declared air compartment | `eu-textiles-bat-2022` |
| `calc_mass_balance_check` | each batch and process | inputs + opening work-in-process = conforming output + wastes + closing work-in-process + documented mass changes; investigate unexplained residuals rather than allocating them silently | material issues; returns; outputs; wastes; WIP; moisture change | disclosed mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate exact CPC 26820 scope and disclose fibre polymer, blend, construction, finish, width, mass per area, moisture basis, and quality grade. | product specification, bill of materials, roll ticket, classification review |
| `dq_temporal_representativeness` | all foreground records | Cover a representative period including every declared route and explain shutdowns, trial batches, rework, and abnormal operations. | dated meter exports, batch list, production calendar, exception log |
| `dq_recipe_completeness` | wet processing | Reconcile actual dosing to the approved recipe by individual commercial chemical; do not report an aggregate chemicals row. | recipe, dosing log, stock reconciliation, supplier specification |
| `dq_meter_quality` | water and energy | Identify meter boundary, calibration status, shared-load allocation, and excluded uses. | calibration certificate, meter map, allocation worksheet |
| `dq_waste_and_emission_destination` | wastes, wastewater, and emissions | Preserve physical identity, compartment or destination, treatment route, measurement method, and dry/wet basis where applicable. | manifests, discharge records, laboratory reports, monitoring plan |
| `dq_uuid_resolution` | every UUID-bearing row | Use a Tiangong UUID only after hybrid search and direct row read confirm exact semantics, flow type, reference property/unit, and required qualifiers; otherwise keep the atomic name and unresolved status. | identity review recorded in manifest metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Confirm UUID `cb5fb579-ee14-4546-9d47-0a088d4dda76`, Product flow type, public state, exact CPC 26820 classification, Mass property, kg unit, and all required product qualifiers. | `unsd-cpc-26820` |
| `validate_atomic_inventory` | process inventory | Reject combined or selector exchanges; every yarn, chemical formulation, energy carrier, water stream, packaging component, waste, wastewater stream, and elementary emission must occupy its own row. | `eu-textiles-bat-2022` |
| `validate_route_completeness` | system boundary and process map | Reconcile the declared route to production records and include every performed pretreatment, dyeing, washing, drying, heat-setting, finishing, rework, abatement, wastewater, and packing operation. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_foreground_amounts` | all quantitative inventory rows | Reject AI estimates and undocumented default ranges; amounts must be foreground records or calculations from declared collection protocols. |  |
| `validate_mass_balance` | each production batch | Reconcile yarn and chemical-carrier mass, intermediate and final product mass, wastes, work-in-process, and documented moisture changes; disclose and investigate residuals. |  |
| `validate_allocation` | shared operations and rework | Verify subdivision was attempted first, internal rework was not double counted, the chosen physical relation was justified, and any recycling method was disclosed separately. | `iso-14044-2006` |
| `validate_uuid_evidence` | UUID-bearing exchanges | Reject every UUID that lacks both hybrid-search candidate evidence and direct Tiangong row readback for exact semantics and reference property/unit. |  |
| `validate_bilingual_alignment` | PCR rendering | Confirm identical ordered process IDs, row IDs, rule IDs, source IDs, confirmed UUIDs, machine tokens, and row sequence in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for finished CPC 26820 fabric at the mill gate |
| downstream_use | May be projected as a `secondary_dataset` or `background_dataset` after methodology, identity, source, and quality review |
| allowed_use | Product-footprint and life-cycle models needing a declared man-made-fibre woven pile or chenille fabric route with compatible geography, technology, construction, and finish |
| excluded_use | Terry towelling, narrow fabrics, cotton-only products, other-fibre CPC 26830 fabrics, knitted or nonwoven textiles, generic textile proxies, or products whose wet-processing and finish route is unknown |
| required_metadata | CPC code; product UUID; fibre polymer and blend; filament/staple form; construction; width; mass per area; moisture basis; colour and finish; recycled content; route; included and outsourced operations; site and geography; period; allocation; waste destinations; resolved and unresolved identities |
| required_quality_disclosure | Coverage and calibration of foreground records; recipe reconciliation; mass-balance residual; meter allocation; emission methods; route representativeness; unresolved UUIDs; cut-offs; rework; deviations from this PCR |
| update_trigger | Change in fibre or blend, construction, dye or finish recipe, wet-processing route, energy or water system, abatement, waste destination, packaging, site, geography, supplier datasets, allocation, or a material change in production efficiency |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-26820` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 classification structure and explanatory material for subclass 26820, https://unstats.un.org/unsd/classifications/; retrieved 2026-08-12 | Product-category scope, exclusions, and exact classification identity |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, published January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry; retrieved 2026-08-12 | Process decomposition, route disclosure, wet processing, finishing, emissions, and monitoring context |
| `eu-textiles-bat-2022` | Standard (`standard`) | Commission Implementing Decision (EU) 2022/2508 of 9 December 2022 establishing BAT conclusions for the textiles industry, OJ L 325, pp. 112-161, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj; retrieved 2026-08-12 | System boundary, chemical and resource inventory, monitoring, emissions, wastewater, waste, and data-quality rules |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including applicable amendments, https://www.iso.org/standard/38498.html; retrieved 2026-08-12 | Allocation hierarchy, subdivision, physical relationships, and transparent method disclosure |
