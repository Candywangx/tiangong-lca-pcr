---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-knitted-or-crocheted-fabrics
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other knitted or crocheted fabrics

## 1. Scope and Applicability

This PCR applies to saleable knitted or crocheted fabric classified in CPC 3.0 class 28190, whether supplied greige, pretreated, dyed, printed, coated, laminated, heat-set, or otherwise finished. It covers fabric formation by knitting or crocheting and every producer-operated preparation, coloration, finishing, inspection, and on-site wastewater-treatment step needed to place the declared fabric lot at the factory gate.

Pile fabrics and terry fabrics classified in CPC 28110, woven or nonwoven fabrics, yarn, made-up textile articles, wearing apparel, and downstream cutting and sewing are excluded. Fibre and yarn production are upstream unless performed inside the reporting site and explicitly added as separate processes. A dataset shall declare the exact fibre composition, yarn form, knit or crochet construction, fabric width and areal density, finish state, coloration route, and moisture basis so that a greige intermediate is not represented as a category-wide finished fabric.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-knitted-or-crocheted-fabrics |
| classification_refs | CPC 3.0: 28190 Other knitted or crocheted fabrics |
| covered_products | Knitted or crocheted fabric other than pile or terry fabric, including warp-knit and weft-knit fabric and fabric containing elastomeric yarn or rubber thread, in the declared greige or finished market state |
| excluded_products | CPC 28110 pile and terry knitted or crocheted fabrics; yarn; woven and nonwoven fabrics; garments; made-up textile articles; cutting and sewing operations |
| representative_product | Knitted or crocheted fabric, other than pile or terry fabric, supplied as a declared production lot |
| production_route | Yarn preparation at the knitting line; knitting or crocheting; route-specific pretreatment, coloration, printing or finishing; inspection and release; on-site wastewater treatment when operated |
| market_state | Factory-gate fabric roll or piece, with greige, bleached, dyed, printed, coated, laminated, heat-set, or other finish state explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a declared knitted or crocheted fabric lot, excluding pile and terry fabric, with the specified construction and finish state |
| How much | 1 kg net dry mass of saleable fabric at the factory gate |
| How well | Meets the declared fibre composition, construction, width, areal density, coloration and finish specifications, with rejected material excluded from the reference amount |
| How long or cycle | One production lot through release at the factory gate; no use-life function is assigned to this intermediate product |
| reference_flow_link | The mass of saleable fabric needed to provide the declared unit; all inventory exchanges are normalized to `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dry saleable fabric |
| Reference product flow | Other knitted or crocheted fabric, excluding pile and terry fabric |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition by dry mass; yarn form and linear-density specification; knitting or crochet technology; warp-knit or weft-knit construction; fabric width; areal density; greige or finished state; pretreatment route; coloration or printing route; finishing or coating route; geographic and temporal scope; net dry mass and moisture-correction method |

No Tiangong Product flow UUID is assigned to `reference_product`. The reviewed Tiangong flow `73008d55-ab26-442b-be93-1e2869b6e66e` is explicitly limited to greige fabric before wet processing and is narrower than this PCR boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net saleable fabric mass on a dry-mass basis. Record measured as-received mass, moisture content or correction factor, excluded packaging, and rejected fabric; do not mix wet mass and dry mass without an explicit conversion. |
| `areal_density_disclosure` | product identity | Mass per area | g/m2 | Record the declared and measured areal density and the test or production-control method used; areal density is a qualifier and shall not replace the mass reference amount. |
| `energy_carrier_separation` | electricity, steam and fuels | Energy or carrier-specific property | kWh, MJ or kg | Preserve each purchased or produced energy carrier as a separate exchange. Record electricity in kWh, gaseous or liquid fuel on a declared net-calorific-value basis, and steam by mass with pressure and temperature or by measured delivered energy. |
| `water_mass_conversion` | process water and wastewater | Mass or volume | kg or m3 | Use measured mass directly or convert measured volume using documented density and temperature. Keep incoming process water and outgoing wastewater as separate exchanges. |

## 5. System Boundary

The foreground boundary begins with yarn and other declared materials received at the fabric-production site and ends with net dry saleable fabric released at the factory gate. Include the actual formation and route-specific wet or dry processing performed by the producer. Upstream production of purchased yarn, water, electricity, steam, fuels, chemicals, and packaging is represented by linked upstream datasets and is not recreated inside the foreground inventory.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Yarn and separately purchased process materials received at the reporting site, with supplier identity, fibre composition, yarn form, quantity, moisture basis, and upstream dataset references declared |
| starting_condition_role | Foreground gate for fabric formation; purchased same-category fabric is permitted only for a finishing-only route and must be disclosed as an intermediate product input |
| product_classification_scope | CPC 3.0 28190 only; pile and terry knitted or crocheted fabric in CPC 28110 is outside scope |
| recursive_input_rule | If greige or partly processed CPC 28190 fabric is purchased for further treatment, record it once as an atomic product input with an upstream dataset and do not recursively reproduce its earlier knitting inventory |
| upstream_dataset_requirement | Use composition-, technology-, geography-, and period-representative datasets for every purchased yarn, material, utility, fuel, treatment service, and same-category fabric input |
| disclosure | Declare which of knitting or crocheting, pretreatment, dyeing, printing, coating, lamination, thermal or mechanical finishing, inspection, and wastewater treatment are on-site, outsourced, absent, or already represented upstream |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_disclosure` | all foreground datasets | Include only operations actually performed for the declared fabric lot and disclose every excluded or outsourced route step; do not model greige-only production as finished fabric production. | `un-cpc-v3-28190`; `eu-pef-method-2021`; `eu-textiles-bat-2022-2508` |
| `boundary_atomic_recipes` | wet processing and finishing | Record every recipe chemical, dyestuff, pigment, binder, coating, auxiliary, fuel, refrigerant, waste stream, and elementary emission as its own exchange; the example cards below are a minimum process map, not a selector or aggregated carrier. | `eu-textiles-bat-2022-2508` |
| `boundary_wastewater_treatment` | wastewater | Include on-site wastewater treatment when operated; otherwise record one wastewater waste flow to the identified off-site treatment dataset and avoid double counting treatment. | `eu-textiles-bat-2022-2508` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabric_formation` | Knitting or crocheting | required | Always included unless a finishing-only dataset begins with purchased same-category fabric | Foreground fabric formation | kg formed fabric leaving the knitting or crochet line |
| `pretreatment` | Fabric pretreatment | conditional | Include when washing, scouring, bleaching, mercerising, heat preparation, or another pretreatment is performed | Foreground wet processing | kg dry textile treated |
| `coloration` | Dyeing or printing | conditional | Include when the declared fabric is dyed or printed at the reporting site | Foreground wet or printing process | kg dry textile coloured or printed |
| `finishing` | Physical or chemical finishing | conditional | Include when coating, lamination, heat-setting, drying, curing, softening, calendaring, sanforising, or another finish is applied | Foreground finishing | kg dry textile finished |
| `wastewater_treatment` | On-site wastewater treatment | conditional | Include only when wastewater treatment is operated inside the reporting site boundary | Foreground treatment | kg wastewater treated |
| `quality_release` | Inspection and product release | required | Always included for the declared factory-gate product | Foreground quality and mass reconciliation | kg net dry saleable fabric released |

### Process: Knitting or crocheting (`fabric_formation`)

#### Inputs

##### Product flows

###### Cotton yarn input (`cotton_yarn`)

Record cotton yarn only when it is physically consumed in the declared fabric composition.

- Selected flow: Cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent cotton yarn issued to the lot minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-pef-method-2021`

###### Polyester filament yarn input (`polyester_filament_yarn`)

Record polyester filament yarn only when it is consumed in the declared fabric composition.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent polyester filament yarn issued to the lot minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-pef-method-2021`

###### Polyamide filament yarn input (`polyamide_filament_yarn`)

Record polyamide filament yarn only when it is consumed in the declared fabric composition.

- Selected flow: Polyamide filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent polyamide filament yarn issued to the lot minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-pef-method-2021`

###### Viscose staple-fibre yarn input (`viscose_yarn`)

Record viscose staple-fibre yarn only when it is consumed in the declared fabric composition.

- Selected flow: Viscose staple-fibre yarn
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent viscose yarn issued to the lot minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-pef-method-2021`

###### Elastane yarn input (`elastane_yarn`)

Record elastane yarn separately when it is consumed; do not combine it with the principal yarn.

- Selected flow: Elastane yarn
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent elastane yarn issued to the lot minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `un-cpc-v3-28190`

###### Electricity for fabric formation (`formation_electricity`)

Record metered electricity used by knitting or crochet machines and directly associated preparation and extraction equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter reading for fabric formation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg formed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Knitting machine oil input (`knitting_machine_oil`)

Record the lubricating oil added to knitting or crochet equipment as a separate material input.

- Selected flow: Knitting machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus purchases minus closing stock and documented recovery for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg formed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed fabric intermediate (`formed_fabric`)

Record the dry-mass-equivalent fabric leaving the knitting or crochet line before any route-specific wet or finishing process.

- Selected flow: Greige knitted or crocheted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent formed fabric transferred to the next step or release inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fabric-formation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-textiles-bat-2022-2508`; `khan-islam-2015`

##### Waste flows

###### Yarn and fabric formation waste (`formation_textile_waste`)

Record offcuts, start-up yarn, broken yarn, selvage, and rejected formed fabric as one physically mixed solid textile waste stream only when collected together.

- Selected flow: Mixed cotton and synthetic textile waste from fabric formation
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to reuse, recycling, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg formed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Used knitting machine oil (`used_knitting_oil`)

Record used lubricating oil removed from equipment and transferred for recovery or treatment.

- Selected flow: Waste lubricating oil from knitting machines
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from equipment and shipped off-site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg formed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

###### Textile particulate matter to air (`formation_particulate_air`)

Record measured particulate matter emitted to air after any on-site abatement from yarn and fabric handling.

- Selected flow: Particulate matter, unspecified, to air
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by measured exhaust volume, or a documented site emission calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg formed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_formation_records`
- Sources: `eu-textiles-bat-2022-2508`

### Process: Fabric pretreatment (`pretreatment`)

#### Inputs

##### Product flows

###### Greige fabric input to pretreatment (`pretreatment_fabric_input`)

Record the greige knitted or crocheted fabric transferred into pretreatment.

- Selected flow: Greige knitted or crocheted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent greige fabric charged to pretreatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per pretreatment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Process water for pretreatment (`pretreatment_water`)

Record incoming water used for washing, scouring, bleaching, rinsing, and equipment cleaning.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered incoming water minus separately metered water returned directly without contact
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile pretreated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Sodium hydroxide for pretreatment (`pretreatment_sodium_hydroxide`)

Record sodium hydroxide only when present in the site recipe.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: active sodium hydroxide mass charged from recipe and batch records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry textile pretreated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pretreatment_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Hydrogen peroxide for bleaching (`pretreatment_hydrogen_peroxide`)

Record hydrogen peroxide only when peroxide bleaching is performed.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: active hydrogen peroxide mass charged from concentration and batch records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry textile pretreated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pretreatment_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Electricity for pretreatment (`pretreatment_electricity`)

Record electricity used by pretreatment machinery and pumps separately from steam.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation of the pretreatment meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry textile pretreated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Steam for pretreatment (`pretreatment_steam`)

Record delivered steam separately and declare pressure, temperature, and condensate return.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: metered steam delivered to pretreatment minus separately measured returned condensate only when the steam dataset uses net delivery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry textile pretreated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pretreated fabric output (`pretreated_fabric`)

Record fabric leaving the declared pretreatment sequence on a dry-mass-equivalent basis.

- Selected flow: Pretreated knitted or crocheted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent fabric transferred to coloration, finishing, or release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per pretreatment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

###### Pretreatment wastewater (`pretreatment_wastewater`)

Record wastewater leaving pretreatment to on-site or off-site treatment without combining it with solid residue.

- Selected flow: Textile pretreatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered wastewater discharge from pretreatment, reconciled with water input and retained moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile pretreated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

### Process: Dyeing or printing (`coloration`)

#### Inputs

##### Product flows

###### Fabric input to coloration (`coloration_fabric_input`)

Record the fabric charged to the dyeing or printing process in its actual pre-colour state.

- Selected flow: Pretreated knitted or crocheted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent fabric charged to coloration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per coloration batch or print run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Process water for coloration (`coloration_water`)

Record water used in dyeing or printing preparation, washing, rinsing, and equipment cleaning.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered incoming water assigned to the coloration process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile coloured or printed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Sodium chloride for coloration (`coloration_sodium_chloride`)

Record sodium chloride only when charged as a recipe chemical.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: measured sodium chloride charged from batch and recipe records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry textile coloured or printed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Sodium carbonate for coloration (`coloration_sodium_carbonate`)

Record sodium carbonate only when charged as a recipe chemical.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: measured sodium carbonate charged from batch and recipe records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry textile coloured or printed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Acetic acid for coloration (`coloration_acetic_acid`)

Record acetic acid only when charged to the declared coloration recipe.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: active acetic acid mass calculated from delivered concentration and batch charge
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry textile coloured or printed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

###### C.I. Reactive Blue 19 dyestuff (`coloration_reactive_blue_19`)

Record this dyestuff only when C.I. Reactive Blue 19 is present; every different dyestuff, pigment, binder, and auxiliary requires its own additional atomic exchange.

- Selected flow: C.I. Reactive Blue 19
- Flow property / unit: Mass / kg
- Amount rule: active dyestuff mass calculated from product concentration and recipe charge
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry textile coloured or printed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Electricity for coloration (`coloration_electricity`)

Record electricity used by dyeing or printing equipment, pumps, dosing, and directly associated controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation of the coloration meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry textile coloured or printed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Steam for coloration (`coloration_steam`)

Record steam separately from electricity and fuel.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: metered steam delivered to coloration with pressure, temperature, and condensate return recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry textile coloured or printed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Coloured or printed fabric output (`colored_fabric`)

Record fabric leaving dyeing or printing on a dry-mass-equivalent basis.

- Selected flow: Dyed knitted or crocheted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent fabric transferred to finishing or release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per coloration batch or print run
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`; `khan-islam-2015`

##### Waste flows

###### Coloration wastewater (`coloration_wastewater`)

Record liquid effluent from dyeing or printing washing and cleaning as a distinct waste stream.

- Selected flow: Textile coloration wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered wastewater discharge from coloration, reconciled with water input and retained moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile coloured or printed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

### Process: Physical or chemical finishing (`finishing`)

#### Inputs

##### Product flows

###### Fabric input to finishing (`finishing_fabric_input`)

Record the knitted or crocheted fabric entering the declared finishing sequence.

- Selected flow: Knitted or crocheted fabric before finishing
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent fabric charged to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Process water for finishing (`finishing_water`)

Record water used to apply or wash out a finish and to clean finishing equipment.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered incoming water assigned to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

###### DMDHEU finishing agent (`finishing_dmdheu`)

Record dimethylol dihydroxyethylene urea only when it is present in an easy-care finish; every other finish chemical requires its own atomic exchange.

- Selected flow: Dimethylol dihydroxyethylene urea
- Flow property / unit: Mass / kg
- Amount rule: active finishing-agent mass calculated from product concentration and recipe charge
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Electricity for finishing (`finishing_electricity`)

Record electricity used by finishing, drying, extraction, coating, or mechanical finishing equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation of the finishing meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Steam for finishing (`finishing_steam`)

Record steam used for drying, heating, curing, or other finishing duty separately from fuel.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: metered steam delivered to finishing with pressure, temperature, and condensate return recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Purchased heat for finishing (`finishing_purchased_heat`)

Record metered heat supplied by an external or central-site heat network only when it is not already represented by the steam or fuel exchanges.

- Selected flow: Industrial heat, delivered
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered heat assigned to finishing, net of documented return heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Natural gas for direct heating (`finishing_natural_gas`)

Record natural gas only when directly combusted for a finishing or thermal-treatment duty inside this process boundary.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ, net calorific value
- Amount rule: metered gas volume converted with the site-specific net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

###### R-134a refrigerant replenishment (`finishing_refrigerant_r134a`)

Record R-134a added to finishing-related cooling or air-conditioning equipment as its own exchange; every other refrigerant requires a separate species-specific card.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: measured refrigerant added during the reporting period and attributable to finishing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished fabric output (`finished_fabric`)

Record the fabric leaving the declared finishing sequence on a dry-mass-equivalent basis.

- Selected flow: Finished knitted or crocheted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent fabric transferred to release inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`; `khan-islam-2015`

##### Waste flows

###### Finishing wastewater (`finishing_wastewater`)

Record wastewater leaving finishing without combining it with solid finishing residue.

- Selected flow: Textile finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered wastewater discharge from finishing, reconciled with water input and retained moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

###### Fossil carbon dioxide from direct heating (`finishing_fossil_co2`)

Record fossil carbon dioxide emitted from natural-gas combustion used directly in finishing.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured natural gas consumption and a documented carbon-content or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

###### R-134a refrigerant to air (`finishing_r134a_air`)

Record R-134a leaked from finishing-related cooling or air-conditioning equipment separately from refrigerant replenishment and from every other refrigerant species.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: measured leakage or documented equipment mass balance for R-134a
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dry textile finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-textiles-bat-2022-2508`

### Process: On-site wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity for wastewater treatment (`wwt_electricity`)

Record electricity used by pumps, aeration, mixing, separation, and sludge handling.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered wastewater-treatment electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Ferric chloride for wastewater treatment (`wwt_ferric_chloride`)

Record ferric chloride only when dosed as the declared coagulant.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: active ferric chloride mass calculated from product concentration and dosing records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

###### Textile wastewater to on-site treatment (`wwt_influent`)

Record the combined textile wastewater entering the on-site treatment plant as one measured influent stream.

- Selected flow: Combined textile process wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered influent to on-site wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater treatment sludge (`wwt_sludge`)

Record dewatered sludge transferred for treatment, recovery, or disposal.

- Selected flow: Textile wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with dry-solids content and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

###### Treated water discharge (`wwt_treated_water`)

Record treated wastewater discharged to the declared receiving-water compartment after on-site treatment.

- Selected flow: Water, to fresh water
- Flow property / unit: Mass / kg
- Amount rule: metered treated effluent discharged to fresh water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-textiles-bat-2022-2508`

### Process: Inspection and product release (`quality_release`)

#### Inputs

##### Product flows

###### Fabric lot ready for release (`release_fabric_input`)

Record the actual greige or finished fabric lot entering final inspection.

- Selected flow: Knitted or crocheted fabric lot ready for release
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent fabric entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per release lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_release_records`
- Sources: `un-cpc-v3-28190`; `eu-pef-method-2021`

###### Electricity for inspection and rolling (`release_electricity`)

Record electricity used for inspection, measuring, rolling or folding, and directly associated controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation to inspected release lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_release_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product (`reference_product`)

Record only saleable fabric conforming to the declared composition, construction, dimensions, areal density, coloration, finish state, and dry-mass basis.

- Selected flow: Other knitted or crocheted fabric, excluding pile and terry fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net dry saleable fabric after inspection and exclusion of packaging and rejected material
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-v3-28190`; `eu-pef-method-2021`

##### Waste flows

###### Rejected fabric from inspection (`release_rejected_fabric`)

Record fabric rejected at final inspection as a separate waste stream from saleable product.

- Selected flow: Rejected knitted or crocheted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dry-mass-equivalent rejected fabric sent to rework, recycling, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_release_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared lines and utilities | Avoid allocation by separately metering or otherwise subdividing fabric formation, wet processing, finishing, and treatment records by process and product lot wherever technically feasible. | `eu-pef-method-2021`; `eu-textiles-bat-2022-2508` |
| `allocation_mass_when_unavoidable` | jointly produced saleable fabric grades | When physical subdivision is not feasible and multiple saleable fabric grades share one process, allocate the remaining shared burden by net dry mass unless a documented causal physical relationship better represents the driver. Report the method and quantities. | `eu-pef-method-2021` |
| `allocation_waste_and_recovery` | rejects, recovered material and exported energy | Do not credit a reject or recovered material as a co-product without a documented destination and applicable system model. Keep treatment burdens and any substitution or recycling assumption explicit. | `eu-pef-method-2021`; `eu-textiles-bat-2022-2508` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabric_formation_records` | `fabric_formation` | each atomic yarn, electricity, oil, formed fabric, waste-oil, solid-waste and dust row | batch issue/return records, meters, stock records, scales, emission measurements | lot_id; yarn_id; fibre_composition; yarn_mass; returns; formed_fabric_mass; electricity_kwh; oil_stock_and_purchase; waste_mass; dust_concentration; exhaust_volume; moisture_basis | reconcile material issues and returns with batch output; read dedicated meters and calibrated scales; calculate dust mass only from measured concentration and volume | kg; kWh; mg/Nm3; Nm3 | each lot, with utility and stock reconciliation at least monthly | representative 12-month period or all shorter campaign records | all knitting or crochet lines producing the declared product | sum atomic exchanges by lot and divide by dry formed-fabric output; keep each yarn identity separate | purchase and return records; calibration certificates; meter logs; lot traveller; waste transfer note; emission test report |
| `cp_pretreatment_records` | `pretreatment` | each atomic fabric, water, chemical, electricity, steam, output and wastewater row | batch recipe, dosing, meters and scales | lot_id; dry_fabric_in; water_in; chemical_product; concentration; charge_mass; electricity_kwh; steam_mass; condensate_return; dry_fabric_out; wastewater_mass | collect every batch recipe and direct meter reading; convert product charge to active chemical mass without merging chemicals | kg; kWh | each batch, reconciled monthly | representative 12-month period or all shorter campaign records | all on-site pretreatment equipment used for the declared product | aggregate only identical atomic flows after batch normalization to dry textile output | signed recipe; dosing log; meter calibration; scale record; mass-balance review |
| `cp_coloration_records` | `coloration` | each atomic fabric, water, dyestuff, pigment, binder, auxiliary, electricity, steam, output and wastewater row | recipe, print-paste record, dosing, meters and scales | lot_id; route; fabric_in; chemical_identity; concentration; charge_mass; water_in; electricity_kwh; steam_mass; fabric_out; wastewater_mass | record each formulation ingredient separately by chemical or commercial-product identity and preserve route and batch traceability | kg; kWh | each batch or print run, reconciled monthly | representative 12-month period or all shorter campaign records | all on-site dyeing and printing lines used for the declared product | aggregate only identical atomic flows and the same route after normalization to dry textile output | approved recipe; chemical SDS; dosing record; meter calibration; lot traveller; wastewater meter |
| `cp_finishing_records` | `finishing` | each atomic fabric, water, finishing chemical, electricity, steam, natural gas, output, wastewater and direct-emission row | recipe, dosing, meters, fuel records and stack calculations | lot_id; finish_route; fabric_in; chemical_identity; concentration; charge_mass; water_in; electricity_kwh; steam_mass; gas_volume; net_calorific_value; fabric_out; wastewater_mass; emission_factor | collect direct records for each finishing step and each carrier; calculate active chemicals, fuel energy and combustion emissions using documented factors | kg; kWh; MJ | each lot, with meters reconciled monthly | representative 12-month period or all shorter campaign records | all on-site finishing and thermal-treatment equipment used for the declared product | normalize each atomic exchange to dry finished-fabric output before route aggregation | approved recipe; SDS; meter and fuel invoices; calibration records; emission-factor reference; lot traveller |
| `cp_wastewater_treatment_records` | `wastewater_treatment` | each atomic influent, treatment chemical, electricity, sludge and water-emission row | flow meters, dosing, laboratory results, scales and disposal records | influent_mass; effluent_mass; electricity_kwh; chemical_identity; concentration; dose; sludge_wet_mass; sludge_dry_solids; discharge_compartment; monitored_parameter; concentration | use direct flow-proportional monitoring where available; preserve each chemical and emitted substance separately | kg; kWh; mg/L | continuous or per batch flow; parameter frequency per permit and process change | same period as foreground production | on-site treatment receiving wastewater from included processes | reconcile influent, effluent, sludge and retained water; report pollutants as separate elementary flows when measured | meter logs; laboratory accreditation; sampling plan; calibration; sludge transfer note; permit report |
| `cp_quality_release_records` | `quality_release` | release input, inspection electricity, reference product and rejected fabric | roll or piece scale, inspection and specification records | lot_id; product_code; fibre_composition; construction; width; areal_density; finish_state; wet_mass; moisture_content; dry_mass; rejected_mass; electricity_kwh | weigh each released lot, document moisture correction, reconcile accepted and rejected fabric, and verify all required qualifiers | kg; g/m2; m; kWh | each release lot | same period as foreground production | every release and inspection line for the declared product | sum accepted dry mass only; normalize all included foreground exchanges to 1 kg accepted dry mass | calibrated scale; moisture test; inspection report; product specification; rejection record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_reference_mass` | reference product | dry_mass = measured_wet_mass × (1 − measured_moisture_fraction); packaging and rejected fabric are excluded | measured_wet_mass; measured_moisture_fraction; packaging_mass; rejected_mass | kg net dry saleable fabric | `eu-pef-method-2021` |
| `calc_exchange_normalization` | every foreground exchange | normalized_exchange = exchange_quantity attributable to the declared product ÷ net dry saleable fabric mass | atomic exchange quantity; attributable share after subdivision; net dry saleable fabric mass | exchange per 1 kg reference product | `eu-pef-method-2021` |
| `calc_active_chemical` | formulated chemicals | active_chemical_mass = delivered product mass × declared active concentration; keep the delivered product identity and concentration in supporting records | product_mass; active_concentration | kg active chemical and kg delivered product, without merging different chemicals | `eu-textiles-bat-2022-2508` |
| `calc_fuel_energy` | natural gas and other fuels added as separate rows | fuel_energy = metered fuel quantity × documented net calorific value | fuel_quantity; density when required; net_calorific_value | MJ net energy for the individual fuel | `eu-textiles-bat-2022-2508` |
| `calc_process_mass_balance` | each included process | reconcile dry material inputs with dry product output, separately measured waste, retained material and documented emissions; investigate unexplained imbalance rather than assigning it to product | atomic material inputs; dry outputs; wastes; emissions; stock change | process-level mass-balance check | `eu-textiles-bat-2022-2508` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve lot-level fibre composition, yarn form, construction, width, areal density, finish state, coloration route, finishing route, and moisture basis. | product specification, bill of materials, lot traveller, test and inspection records |
| `dq_primary_activity` | all producer-operated processes | Use process- or plant-level consumption, stock, meter, recipe, emission, waste and sales records for the same reporting period; disclose estimation and allocation. | meters, invoices, inventory changes, recipes, laboratory reports, waste notes, production records |
| `dq_temporal_coverage` | foreground dataset | Use a representative continuous 12-month period where production is regular; for a shorter campaign, include every campaign record and disclose seasonality and shutdowns. | dated source register and completeness reconciliation |
| `dq_recipe_completeness` | wet processing and finishing | Account for every formulation ingredient as its own exchange and reconcile recipe totals to dosing or stock records; do not replace chemicals with an aggregated recipe row. | approved recipe, SDS, dosing logs, stock reconciliation |
| `dq_route_consistency` | process map | The declared market state and on-site route shall agree with included processes. Greige-only output shall not include unperformed coloration or finishing, and finished output shall not omit producer-operated treatment. | process flow sheet, lot route, outsourcing records, product declaration |
| `dq_source_traceability` | all calculated values | Retain raw fields, units, conversions, factors, source ids, responsible person, and calculation version sufficient to reproduce every normalized exchange. | calculation workbook or machine-readable provenance record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm CPC 28190 scope, exclude pile and terry fabric, require all reference qualifiers, and fail UUID validation if the rejected greige-only UUID is used as the category-wide reference product. | `un-cpc-v3-28190` |
| `validate_reference_mass` | reference amount | Confirm exactly 1 kg net dry saleable fabric, with moisture correction, packaging exclusion, and rejected-fabric exclusion documented. | `eu-pef-method-2021` |
| `validate_process_route` | process inventory | Every process marked conditional shall match the declared lot route; every producer-operated pretreatment, coloration, finishing, and on-site treatment step shall be present exactly once. | `eu-textiles-bat-2022-2508`; `khan-islam-2015` |
| `validate_atomic_exchanges` | process inventory | Reject any exchange that combines multiple yarns, chemicals, energy carriers, fuels, refrigerants, wastes, destinations, or emissions; each selected flow shall represent one physical or chemical exchange. | `eu-textiles-bat-2022-2508` |
| `validate_collection_links` | foreground amounts | Every `foreground_record` or `calculated_value` row shall link to a declared collection protocol and retain the raw record used to produce the normalized amount. | `eu-pef-method-2021`; `eu-textiles-bat-2022-2508` |
| `validate_mass_balance` | fabric formation and wet processing | Check process-level mass balances and investigate unexplained differences; do not silently force the balance by changing the reference product amount. | `eu-textiles-bat-2022-2508` |
| `validate_no_unsupported_ranges` | all inventory amounts | No quantitative range may be introduced from a single case, a repeated point value, or an abstract. A source-backed empirical range requires at least two independent, boundary-compatible original sources. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` representing factory-gate production of the declared knitted or crocheted fabric lot |
| downstream_use | LCA process and lifecycle-model construction for products consuming CPC 28190 fabric, subject to matching composition, construction, finish state, technology, geography, period, and wastewater route |
| allowed_use | Use as an intermediate fabric dataset when all required qualifiers and included routes match the downstream study |
| excluded_use | Do not use for CPC 28110 pile or terry fabric, yarn, woven or nonwoven fabric, garments, cutting and sewing, or a finish state and fibre composition not represented by the dataset |
| required_metadata | PCR id and version; product-flow identity status; CPC code; fibre composition; yarn and construction specification; width; areal density; finish state; process route; geography; reference year; technology; allocation; moisture basis; upstream datasets; wastewater destination |
| required_quality_disclosure | Primary-data share; temporal, geographical and technological representativeness; meter and scale coverage; recipe completeness; mass-balance results; allocations; missing UUIDs; exclusions; outsourced steps; data gaps and uncertainty |
| update_trigger | Change in fibre composition, construction, finish recipe, process technology, energy or water supply, wastewater route, allocation method, site configuration, reference year, or resolution of the exact Tiangong reference-product UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-28190` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, class 28190 Other knitted or crocheted fabrics, https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf (retrieved 2026-08-23) | Product-category boundary and exclusion of separately classified CPC 28110 pile and terry fabrics |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279, Annexes I and II, Product Environmental Footprint Method, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (retrieved 2026-08-23) | Declared unit for intermediate products, reference-flow normalization, system boundary, company-specific data, allocation, data quality and verification |
| `eu-textiles-bat-2022-2508` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI: http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-23) | Fabric production and finishing definitions, process map, input-output inventory, water, energy, chemical, wastewater, waste, emissions and monitoring rules |
| `khan-islam-2015` | Literature (`literature`) | Khan, M. M. R. and Islam, M. M. (2015), Materials and manufacturing environmental sustainability evaluation of apparel product: knitted T-shirt case study, Textiles and Clothing Sustainability 1:8, https://doi.org/10.1186/s40689-015-0008-8 | Full-text cross-check of the knitting, pretreatment, dyeing or printing, finishing sequence and manufacturer record needs; not used for quantitative ranges |
