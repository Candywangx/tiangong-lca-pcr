---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other terry towelling and similar woven terry fabrics (other than narrow fabrics)

## 1. Scope and Applicability

This PCR applies to non-narrow woven terry towelling and similar woven terry fabric classified in CPC 3.0 subclass 26850. It covers fabric delivered at the producing plant gate as greige, dyed, bleached, mechanically finished, chemically finished, or otherwise specified terry fabric, provided that the declared product remains fabric rather than a made-up article.

The product boundary includes terry fabric made from non-cotton fibres or blends when the product is classified in CPC 26850. It excludes cotton terry fabric classified in CPC 26840, narrow fabrics, woven pile or chenille fabrics that are not terry fabric, knitted pile fabric, tufted fabric, and made-up towels or other finished textile articles. Fibre composition, pile construction, finished width, mass per unit area, colour or greige state, finish, and moisture-conditioning basis shall be declared because they materially affect product identity and production routes.

The foreground gate-to-gate production boundary starts with purchased ground-warp yarn, pile-warp yarn, and weft yarn at the fabric mill. It includes yarn preparation and terry weaving; conditional pretreatment, dyeing, washing, and rinsing; finishing and drying; inspection; and packing. Upstream yarn, chemical, water, electricity, fuel, steam, and packaging production are linked as upstream datasets. Use, laundering, conversion into made-up articles, distribution beyond the plant gate, and end of life are outside this foreground dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics |
| classification_refs | CPC 3.0:26850, Other terry towelling and similar woven terry fabrics (other than narrow fabrics) |
| covered_products | Non-narrow woven terry towelling and similar woven terry fabric assigned to CPC 26850, including greige and wet-processed market states |
| excluded_products | Cotton terry fabric assigned to CPC 26840; narrow fabrics; non-terry woven pile and chenille fabrics; knitted or tufted pile fabrics; made-up towels and other made-up textile articles |
| representative_product | One kilogram of saleable, specification-conforming woven terry fabric at the producing plant gate |
| production_route | Purchased yarn preparation and terry weaving, followed as applicable by pretreatment, dyeing, washing, rinsing, finishing, drying, inspection, and packing |
| market_state | Greige or finished woven terry fabric, rolled or otherwise packed, at the producing plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of specification-conforming non-narrow woven terry fabric for subsequent conversion or use |
| How much | 1 kg of saleable fabric |
| How well | Conforms to the declared fibre composition, pile construction, finished width, mass per unit area, colour or greige state, finish, moisture-conditioning basis, and quality grade |
| How long or cycle | One production batch at the producing plant gate; no use-stage service life is represented |
| reference_flow_link | `final_terry_fabric_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other terry towelling and similar woven terry fabrics (other than narrow fabrics) `93944c2a-106d-4c2d-9785-58ec3fc17a42` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition and blend shares; ground-warp construction; pile-warp construction; weft construction; finished width; mass per unit area; colour or greige state; finishing route; moisture-conditioning basis; quality grade; production geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalised exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference amount as net saleable fabric mass, excluding paperboard cores, wrapping film, pallets, and rejected fabric. |
| `mass_condition` | Yarn, intermediate fabric, final fabric, and textile waste | Mass | kg | Record the measurement condition and moisture-conditioning basis; use one consistent basis or document the measured conversion to the final-fabric basis. |
| `area_to_mass` | Records available only by fabric area | Mass and area | kg and m2 | Convert area records using the batch-specific measured mass per unit area and retain both the source area and the measurement evidence. |
| `water_units` | Process-water and wastewater records | Volume | m3 | Preserve metered volume. If mass is used, document density and the conversion method rather than assuming equivalence silently. |
| `energy_units` | Electricity and thermal-energy records | Energy | kWh or MJ | Preserve the meter or invoice unit and document every conversion factor used to normalise the record to the reference flow. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate_to_gate` | Foreground fabric production | Include yarn preparation, terry weaving, route-applicable wet processing, finishing, drying, inspection, packing, on-site waste handling, and direct emissions from the declared yarn-at-mill starting condition to saleable fabric at the plant gate. | `un-cpc-3-26850`; `eu-textiles-bat-2022`; `jrc-textiles-bref-2023` |
| `boundary_route_specificity` | Conditional production steps | Include pretreatment, dyeing, washing, rinsing, chemical finishing, direct heating, and heat-setting only when performed for the declared product; identify omitted route steps explicitly. | `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry` |
| `boundary_upstream_links` | Purchased inputs | Link every purchased yarn, process chemical, utility, fuel, steam, water, and packaging input to a compatible upstream dataset; do not absorb upstream production into an unreported residual. | `eu-pef-2021` |
| `boundary_no_silent_cutoff` | Foreground inventory | Identify all known foreground inputs, products, co-products, wastes, and emissions. Any exclusion requires a documented reason and significance assessment. | `eu-pef-2021`; `eu-textiles-bat-2022` |
| `boundary_outside_scope` | Downstream life cycle | Exclude conversion into made-up articles, distribution beyond the plant gate, use and laundering, and end-of-life treatment from this foreground dataset; downstream studies shall add them separately. | `eu-pef-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased ground-warp yarn, pile-warp yarn, and weft yarn received at the fabric mill, with composition, mass condition, supplier, and upstream dataset references declared |
| starting_condition_role | The yarn-at-mill condition is the foreground collection start; fibre production, spinning, and supplier transport are represented by linked upstream datasets |
| product_classification_scope | CPC 3.0 subclass 26850 only, subject to the covered and excluded product rules in Section 1 |
| recursive_input_rule | If woven terry fabric in this same category is consumed as an input, record it once as a product input with its own upstream dataset and do not recursively recreate its production inside the consuming process |
| upstream_dataset_requirement | Use compatible upstream datasets for all purchased yarns, chemicals, water, energy carriers, steam, packaging, and externally treated wastes, matched to the declared geography, technology, and period |
| disclosure | Declare fibre and fabric construction, starting yarn condition, route steps performed, outsourced operations, wet-processing recipe family, energy supply, water source, wastewater destination, waste destinations, allocation, exclusions, and data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `terry_weaving` | Yarn preparation and terry weaving | required | Always included for fabric produced from purchased yarn | Foreground fabric formation | kg of greige terry fabric leaving the process |
| `pretreatment_dyeing` | Pretreatment, dyeing, washing, and rinsing | conditional | Included when desizing, scouring, bleaching, dyeing, washing, or rinsing is performed by or for the reporting site | Foreground wet processing | kg of wet-processed terry fabric leaving the process |
| `finishing_packing` | Finishing, drying, inspection, and packing | required | Always included; route-specific chemical and thermal exchanges apply only when used | Foreground final product preparation | kg of saleable reference product at the plant gate |

### Process: Yarn preparation and terry weaving (`terry_weaving`)

#### Inputs

##### Product flows

###### Ground-warp yarn (`ground_warp_yarn_input`)

Ground-warp yarn forms the load-bearing ground structure of the terry fabric and crosses the mill boundary as a purchased material. Quantity is obtained from batch issue records reconciled to inventory change and returned yarn.

- Selected flow: Ground-warp yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net ground-warp yarn charged to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input`
- Sources: `eu-textiles-bat-2022`; `jrc-textiles-bref-2023`; `gutarowska-et-al-2020-terry`

###### Pile-warp yarn (`pile_warp_yarn_input`)

Pile-warp yarn creates the terry loops and is a distinct exchange from ground-warp yarn. Quantity is obtained from the pile-warp batch issue and return records.

- Selected flow: Pile-warp yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net pile-warp yarn charged to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input`
- Sources: `eu-textiles-bat-2022`; `jrc-textiles-bref-2023`; `gutarowska-et-al-2020-terry`

###### Weft yarn (`weft_yarn_input`)

Weft yarn interlaces with the warp systems to form the woven terry structure. Quantity is obtained from batch issue records net of returned packages.

- Selected flow: Weft yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net weft yarn charged to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input`
- Sources: `eu-textiles-bat-2022`; `jrc-textiles-bref-2023`; `gutarowska-et-al-2020-terry`

###### Warp sizing agent (`warp_sizing_agent_input`)

Warp sizing agent is recorded only when sizing is performed inside this foreground process. The specific commercial formulation shall be declared, and quantity is taken from recipe dosing or stock withdrawal records.

- Selected flow: Warp sizing agent
- Flow property / unit: Mass / kg
- Amount rule: measured sizing-agent formulation dosed to the declared product batch; not applicable when sized yarn is purchased and no on-site sizing occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`; `jrc-textiles-bref-2023`

###### Electricity supplied to the weaving process (`weaving_electricity_input`)

Electricity powers yarn preparation, loom operation, ventilation, and directly attributable auxiliary equipment. Quantity is taken from a process submeter or an auditable allocation of a site meter.

- Selected flow: Electricity supplied to the weaving process
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to yarn preparation and terry weaving during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

##### Waste flows

None specified as inputs.

##### Elementary flows

None specified as inputs.

#### Outputs

##### Product flows

###### Greige terry fabric (`greige_terry_fabric_output`)

Greige terry fabric is the woven intermediate passed either to wet processing or directly to final finishing. Quantity is measured after weaving and before downstream treatment on the declared moisture basis.

- Selected flow: Greige terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured conforming greige terry fabric leaving the weaving process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-3-26850`; `jrc-textiles-bref-2023`

##### Waste flows

###### Weaving yarn waste (`weaving_yarn_waste_output`)

Yarn waste comprises measured unusable yarn removed during setup, breakage handling, and batch completion. Quantity is obtained from segregated waste weighing records.

- Selected flow: Textile yarn waste
- Flow property / unit: Mass / kg
- Amount rule: measured textile yarn waste leaving the weaving process, separated by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_output`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

##### Elementary flows

###### Textile dust emitted to air during weaving (`weaving_textile_dust_output`)

Textile dust is recorded when it crosses the environmental boundary through channelled or quantified diffuse emissions from yarn preparation or weaving. Quantity is based on monitored emissions or a site-specific calculation from measured activity and a documented factor.

- Selected flow: Textile dust to air
- Flow property / unit: Mass / kg
- Amount rule: measured or site-specifically calculated textile dust released to air from the weaving process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission`
- Sources: `eu-textiles-bat-2022`

### Process: Pretreatment, dyeing, washing, and rinsing (`pretreatment_dyeing`)

#### Inputs

##### Product flows

###### Greige terry fabric sent to wet processing (`pretreatment_greige_fabric_input`)

Greige terry fabric enters wet processing when the declared route includes pretreatment, dyeing, washing, or rinsing. Quantity is taken from the wet-processing batch loading record.

- Selected flow: Greige terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured greige terry fabric loaded to wet processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of wet-processed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_input`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### Process water used in wet processing (`wet_process_water_input`)

Process water enters desizing, scouring, bleaching, dyeing, washing, rinsing, and equipment cleaning when those operations are performed. Quantity is obtained from process-level water meters or an auditable batch-volume record.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered water entering the declared wet-processing operations, net of water reused within the same process record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of wet-processed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

###### Sodium hydroxide used in wet processing (`sodium_hydroxide_input`)

Sodium hydroxide is recorded as its own exchange when present in a scouring, bleaching, dyeing, or neutralisation recipe. Quantity is obtained from batch dosing records and expressed as product mass with concentration declared.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured sodium hydroxide product dosed to the batch, with product concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of wet-processed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### Hydrogen peroxide used for bleaching (`hydrogen_peroxide_input`)

Hydrogen peroxide is recorded when peroxide bleaching is performed. Quantity is obtained from batch dosing records and retains the supplied formulation concentration.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: measured hydrogen peroxide product dosed to the bleaching batch, with concentration declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of wet-processed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### Reactive dye formulation (`reactive_dye_input`)

Reactive dye formulation is recorded only for a route that uses this dye family. The dataset shall name the specific commercial formulation so the exchange remains one formulation rather than an unspecified collection of dyes.

- Selected flow: Reactive dye formulation
- Flow property / unit: Mass / kg
- Amount rule: measured commercial reactive dye formulation dosed to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### Disperse dye formulation (`disperse_dye_input`)

Disperse dye formulation is recorded only for a route that uses this dye family, such as applicable polyester-containing fabric. The exact commercial formulation is identified in the foreground record.

- Selected flow: Disperse dye formulation
- Flow property / unit: Mass / kg
- Amount rule: measured commercial disperse dye formulation dosed to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`

###### Acid dye formulation (`acid_dye_input`)

Acid dye formulation is recorded only for a route that uses this dye family, such as applicable wool or polyamide-containing fabric. The exact commercial formulation is identified in the foreground record.

- Selected flow: Acid dye formulation
- Flow property / unit: Mass / kg
- Amount rule: measured commercial acid dye formulation dosed to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`

###### Sodium chloride used in dyeing (`sodium_chloride_input`)

Sodium chloride is recorded separately when used by the declared dyeing recipe. Quantity is obtained from batch dosing or weighed issue records.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: measured sodium chloride dosed to the dyeing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`

###### Sodium carbonate used in dyeing (`sodium_carbonate_input`)

Sodium carbonate is recorded separately when used to control the declared dyeing recipe. Quantity is obtained from batch dosing or weighed issue records.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: measured sodium carbonate dosed to the dyeing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`

###### Acetic acid used for neutralisation (`acetic_acid_input`)

Acetic acid is recorded when used for neutralisation or pH control in the declared wet-processing recipe. Quantity is taken from dosing records with formulation concentration declared.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: measured acetic acid product dosed to the batch, with concentration declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of wet-processed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### Electricity supplied to wet processing (`wet_process_electricity_input`)

Electricity powers wet-processing machinery, pumps, controls, and directly attributable auxiliaries. Quantity is obtained from a process submeter or auditable site-meter allocation.

- Selected flow: Electricity supplied to wet processing
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to pretreatment, dyeing, washing, and rinsing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of wet-processed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

###### Steam supplied to wet processing (`wet_process_steam_input`)

Steam is recorded when it crosses the wet-processing boundary for bath heating or related operations. Quantity is obtained from a steam meter or a documented site balance based on measured generation and distribution.

- Selected flow: Steam supplied to wet processing
- Flow property / unit: Energy / MJ
- Amount rule: metered or balanced steam energy supplied to the declared wet-processing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of wet-processed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

##### Waste flows

None specified as inputs.

##### Elementary flows

None specified as inputs.

#### Outputs

##### Product flows

###### Dyed or otherwise wet-processed terry fabric (`dyed_terry_fabric_output`)

This intermediate is the conforming terry fabric leaving the declared wet-processing route and entering finishing. Quantity is measured after the last wash or rinse on a declared moisture basis.

- Selected flow: Dyed terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured conforming dyed or otherwise wet-processed terry fabric leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

##### Waste flows

###### Wet-processing wastewater (`wet_process_wastewater_output`)

Wastewater leaving pretreatment, dyeing, washing, or rinsing is recorded at the point it leaves this process for on-site treatment, external treatment, or discharge. Quantity and destination are obtained from flow meters and wastewater routing records.

- Selected flow: Textile wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater volume leaving the declared wet-processing operations, separated by destination when streams are managed separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of wet-processed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

##### Elementary flows

None specified as a universal direct emission. Route-relevant direct emissions shall be added as atomic rows when identified by the site's input/output inventory and monitoring programme.

### Process: Finishing, drying, inspection, and packing (`finishing_packing`)

#### Inputs

##### Product flows

###### Greige terry fabric entering final finishing (`finishing_greige_fabric_input`)

Greige terry fabric enters final finishing when no separate wet-processing process is used. Quantity is measured at transfer from weaving and is mutually exclusive with the dyed-fabric input for the same output batch.

- Selected flow: Greige terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured greige terry fabric entering final finishing for the declared batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_input`
- Sources: `un-cpc-3-26850`; `jrc-textiles-bref-2023`

###### Dyed terry fabric entering final finishing (`finishing_dyed_fabric_input`)

Dyed or otherwise wet-processed terry fabric enters final finishing when the wet-processing route applies. Quantity is measured at process transfer and is mutually exclusive with the greige-fabric input for the same output batch.

- Selected flow: Dyed terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dyed or otherwise wet-processed terry fabric entering final finishing for the declared batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_input`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### Process water used in finishing (`finishing_process_water_input`)

Process water is recorded when used for a wet finishing application, washing, or equipment cleaning attributable to the declared product. Quantity is obtained from a process meter or auditable batch record.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered water attributable to final finishing and related cleaning for the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-textiles-bat-2022`

###### Softening agent formulation (`softening_agent_input`)

Softening agent is recorded when applied to achieve the declared handle. The exact commercial formulation is identified and its quantity is taken from the finishing recipe.

- Selected flow: Textile softening agent formulation
- Flow property / unit: Mass / kg
- Amount rule: measured commercial softening-agent formulation dosed to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### Other finishing agent formulation (`finishing_agent_input`)

A route-specific finishing agent is recorded as one formulation only when it is actually applied. Its commercial identity and function shall be declared rather than combining multiple agents in one exchange.

- Selected flow: Textile finishing agent formulation
- Flow property / unit: Mass / kg
- Amount rule: measured quantity of one named commercial finishing formulation dosed to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe`
- Sources: `eu-textiles-bat-2022`

###### Electricity supplied to finishing and packing (`finishing_electricity_input`)

Electricity powers finishing, drying auxiliaries, inspection, rolling, and packing equipment. Quantity is obtained from process submeters or an auditable allocation of a site meter.

- Selected flow: Electricity supplied to finishing and packing
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to finishing, inspection, rolling, and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

###### Steam supplied to finishing and drying (`finishing_steam_input`)

Steam is recorded when supplied for finishing, drying, or indirect heating. Quantity is obtained from a steam meter or a documented site steam balance.

- Selected flow: Steam supplied to finishing and drying
- Flow property / unit: Energy / MJ
- Amount rule: metered or balanced steam energy attributable to finishing and drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-textiles-bat-2022`; `gutarowska-et-al-2020-terry`

###### Natural gas used for direct heating (`finishing_natural_gas_input`)

Natural gas is recorded when combusted for direct heating, drying, or heat-setting within the process boundary. Quantity is obtained from a dedicated fuel meter or an auditable site balance.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural-gas energy attributable to direct heating, drying, or heat-setting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

###### Paperboard core used for the fabric roll (`paperboard_core_input`)

The paperboard core is recorded when it leaves the plant with rolled fabric. Quantity is obtained from packaging issue records and verified against packed roll counts.

- Selected flow: Paperboard tube core
- Flow property / unit: Mass / kg
- Amount rule: measured paperboard core mass shipped with the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

###### Polyethylene film used for fabric protection (`polyethylene_film_input`)

Polyethylene film is recorded when it leaves the plant as protective packaging for the fabric. Quantity is obtained from packaging issue records or measured packed-unit specifications.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured polyethylene film mass shipped with the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021`

##### Waste flows

None specified as inputs.

##### Elementary flows

None specified as inputs.

#### Outputs

##### Product flows

###### Saleable other terry towelling and similar woven terry fabric (`final_terry_fabric_output`)

This is the specification-conforming reference product after finishing, inspection, and packing, excluding packaging mass. Quantity is obtained from calibrated final-product weighing or a verified roll mass calculation.

- Selected flow: Other terry towelling and similar woven terry fabrics (other than narrow fabrics) `93944c2a-106d-4c2d-9785-58ec3fc17a42`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net saleable fabric mass at the plant gate, excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg of reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-3-26850`; `eu-pef-2021`

##### Waste flows

###### Finishing and inspection textile offcuts (`finishing_textile_offcuts_output`)

Textile offcuts and rejected fabric leave the process when they cannot be included in the saleable product. Quantity is obtained from segregated weighing and destination records.

- Selected flow: Textile fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured textile offcuts and rejected fabric leaving final finishing and inspection, separated by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_output`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

###### Finishing wastewater (`finishing_wastewater_output`)

Finishing wastewater is recorded when a wet finishing or cleaning stream leaves the process for treatment or discharge. Quantity and destination are obtained from process meters and wastewater routing records.

- Selected flow: Textile wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater volume leaving finishing and attributable cleaning operations, separated by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-textiles-bat-2022`; `eu-pef-2021`

##### Elementary flows

###### Volatile organic compounds emitted to air (`finishing_voc_air_output`)

Volatile organic compounds are recorded when identified as relevant in the finishing or thermal-treatment waste-gas inventory. Quantity is based on direct monitoring or a site-specific calculation using measured recipe and activity data with documented factors.

- Selected flow: Volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: measured or site-specifically calculated volatile organic compound emissions from finishing and thermal treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission`
- Sources: `eu-textiles-bat-2022`

###### Ammonia emitted to air (`finishing_ammonia_air_output`)

Ammonia is recorded separately when the chemical recipe and monitoring programme identify it as relevant to finishing or associated thermal treatment. Quantity is based on direct monitoring or a documented site-specific calculation.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: measured or site-specifically calculated ammonia emissions from finishing and associated thermal treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission`
- Sources: `eu-textiles-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared foreground operations | Avoid allocation by separately metering or subdividing yarn preparation, weaving, wet processing, finishing, and packing wherever the process or batch can be separately observed. | `eu-pef-2021`; `eu-textiles-bat-2022` |
| `allocation_physical` | Unavoidable shared inputs and outputs | When subdivision is not possible, allocate using a documented physical relationship that reflects the causal use of the shared input or generation of the shared output, using product-specific mass, machine time, bath loading, or metered activity as appropriate. | `eu-pef-2021` |
| `allocation_economic_last_resort` | Multi-product operation without a defensible physical relationship | Use economic allocation only when no defensible physical relationship can be established; record prices, period, currency, calculation, sensitivity, and affected exchanges. | `eu-pef-2021` |
| `allocation_waste_and_recycling` | Textile waste, recovered materials, and treatment outputs | Report each waste destination and any recovered material separately. Do not apply an avoided-burden credit inside this foreground dataset unless the downstream study documents the applicable recycling method and prevents double counting. | `eu-pef-2021`; `eu-textiles-bat-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input` | `terry_weaving` | Each named yarn input | Batch issue, return, and inventory record | row_id; material identity; supplier; lot; issued mass; returned mass; moisture basis; batch_id | Reconcile weighed issue and return records to stock movement | kg | Each production batch | Complete reporting period | All in-scope weaving lines | Sum net issued mass by row_id and batch, then normalise to conforming process output | Scale calibration; signed batch sheet; inventory reconciliation |
| `cp_chemical_recipe` | `terry_weaving`; `pretreatment_dyeing`; `finishing_packing` | One named chemical formulation per row_id | Recipe, dosing, and stock record | row_id; commercial product identity; concentration; lot; dose; returned quantity; batch_id | Use automated dosing total or verified weighed addition for each formulation | kg | Each batch or recipe make-up | Complete reporting period | All in-scope sizing, wet-processing, and finishing equipment | Sum net formulation mass by row_id; do not merge formulations | Dosing calibration; recipe approval; safety data sheet; stock reconciliation |
| `cp_electricity` | `terry_weaving`; `pretreatment_dyeing`; `finishing_packing` | Process electricity | Submeter and operating record | meter_id; opening; closing; process_id; batch_id; downtime; shared-load basis | Read calibrated process meter; if shared, document allocation driver | kWh | Continuous or each batch, reconciled monthly | Complete reporting period | All in-scope process equipment and attributable auxiliaries | Net meter consumption less documented exports, allocated only under Section 7 | Meter calibration; utility invoice reconciliation; allocation record |
| `cp_thermal_energy` | `pretreatment_dyeing`; `finishing_packing` | Process steam | Steam meter or boiler balance | meter_id; steam mass or energy; pressure; condensate return; process_id; batch_id | Read process steam meter or derive from a documented measured site balance | kg steam or MJ | Continuous or each batch, reconciled monthly | Complete reporting period | All in-scope wet-processing and finishing equipment | Convert with documented measured conditions and normalise to process output | Meter calibration; boiler log; balance closure |
| `cp_fuel` | `finishing_packing` | Natural gas for direct heating | Fuel meter and burner operating record | meter_id; opening; closing; calorific basis; equipment_id; batch_id | Read dedicated fuel meter or auditable site balance | m3 or MJ | Continuous or each batch, reconciled monthly | Complete reporting period | In-scope direct-fired drying and heat-setting equipment | Convert using documented billing or measured calorific value | Meter calibration; fuel invoice; burner log |
| `cp_water` | `pretreatment_dyeing`; `finishing_packing` | Process water | Water meter and batch-liquor record | meter_id; opening; closing; process step; batch_id; reused volume | Read process meter or verified machine fill volumes and identify reused water | m3 | Each batch or daily, reconciled monthly | Complete reporting period | All in-scope wet-processing and finishing operations | Sum fresh make-up water by process after separately recording internal reuse | Meter calibration; water balance; batch record |
| `cp_product_input` | `pretreatment_dyeing`; `finishing_packing` | Intermediate fabric input | Batch transfer and weighing record | row_id; product identity; batch_id; mass; moisture basis; source_process | Weigh transferred fabric or use verified roll masses | kg | Each batch transfer | Complete reporting period | All in-scope inter-process transfers | Sum by row_id and receiving process without double counting internal transfers | Scale calibration; transfer ticket; batch genealogy |
| `cp_product_output` | `terry_weaving`; `pretreatment_dyeing`; `finishing_packing` | Conforming process output | Production and quality-release record | row_id; batch_id; roll_id; gross mass; packaging mass; net mass; moisture basis; grade; disposition | Weigh net fabric or verify roll length times measured mass per unit area | kg | Each roll and batch | Complete reporting period | All in-scope output and inspection stations | Sum conforming net mass; exclude packaging and rejected fabric | Scale calibration; inspection release; roll reconciliation |
| `cp_packaging` | `finishing_packing` | Each packaging component | Packaging issue and packed-unit record | row_id; material identity; unit mass; quantity issued; returns; roll_id | Weigh component or use verified component specification and packed count | kg | Each packing batch | Complete reporting period | All in-scope packed reference product | Sum net packaging mass shipped by row_id | Specification; scale calibration; issue-return reconciliation |
| `cp_waste_output` | `terry_weaving`; `finishing_packing` | Each named solid waste | Segregated waste weighing and destination record | row_id; waste identity; container tare; gross mass; destination; manifest_id; batch_id | Weigh each segregated waste stream net of tare | kg | Each collection event | Complete reporting period | All in-scope production and inspection areas | Sum net mass by row_id and destination | Scale calibration; waste manifest; contractor receipt |
| `cp_wastewater` | `pretreatment_dyeing`; `finishing_packing` | Wastewater leaving a process | Flow meter, routing, and monitoring record | row_id; meter_id; volume; origin process; destination; sampling_id; batch_id | Meter discharge and preserve separately managed stream identity | m3 | Continuous or each discharge event | Complete reporting period | All in-scope wet-process and finishing outlets | Sum by row_id, origin, and destination; do not combine routes before disclosure | Meter calibration; water balance; treatment or discharge record |
| `cp_air_emission` | `terry_weaving`; `finishing_packing` | One named direct air emission per row_id | Stack or diffuse-emission monitoring record | row_id; emission point; measured concentration; gas flow; duration; method; batch_id | Use direct measurement where available; otherwise calculate from site-specific activity data and a documented factor | kg | At the applicable monitoring frequency and for material process changes | Representative of complete reporting period | All relevant in-scope emission points | Calculate mass emission by row_id and aggregate only after retaining point-level evidence | Laboratory report; method and calibration record; activity-factor trace |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | Every foreground exchange | Divide the collected exchange quantity by net saleable reference-product mass for the same consistent reporting scope; retain unnormalised values and units. | Collected exchange quantity; net reference-product mass | Exchange per kg reference product | `eu-pef-2021` |
| `calc_intermediate_normalisation` | Process-specific exchange | Divide the collected exchange quantity by the conforming output mass of that process before linking the process to the final reference flow. | Exchange quantity; conforming process output mass | Exchange per kg process output | `eu-pef-2021` |
| `calc_area_to_mass` | Area-only fabric records | Multiply measured fabric area by batch-specific measured mass per unit area, then convert to kg with the measurement basis documented. | Fabric area; measured mass per unit area | Fabric mass | `eu-pef-2021` |
| `calc_water_balance` | Wet processing and finishing | Reconcile water input, internal reuse, wastewater output, retained water, evaporation, and documented losses for the same process and period; investigate unexplained imbalance. | Metered water and wastewater; reuse; process records | Audited process water balance | `eu-textiles-bat-2022` |
| `calc_mass_reconciliation` | Yarn-to-fabric and final finishing | Reconcile input fabric and material mass to conforming output, waste, retained process material, and documented moisture-basis change without using the reconciliation to invent missing exchanges. | Material inputs; product outputs; waste; moisture records | Audited process mass reconciliation | `eu-textiles-bat-2022`; `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and qualifiers | Demonstrate CPC 26850 scope and declare fibre composition, pile construction, width, mass per unit area, market state, finish, and quality grade. | Product specification; classification decision; quality release |
| `dq_measurement` | All foreground records | Use calibrated measurements or auditable business records; identify estimated or allocated records and retain the calculation. | Calibration certificates; meters; invoices; batch records; calculation trace |
| `dq_completeness` | Foreground inventory | Account for all known process inputs, products, wastes, and direct emissions identified by the site's input/output inventory; document every exclusion. | Input/output inventory; process flow sheet; completeness reconciliation |
| `dq_temporal` | Reporting period | Use a continuous period representative of normal production and disclose shutdowns, atypical campaigns, recipe changes, and missing intervals. | Production calendar; meter coverage; exception log |
| `dq_technological` | Route and equipment | Match records to the declared terry weaving, wet-processing, finishing, drying, and packing technologies. | Equipment list; route sheet; batch genealogy |
| `dq_geographical` | Site and upstream links | Declare the production geography and match electricity, water, fuel, transport, and other upstream datasets to the relevant geography where available. | Site metadata; supplier and utility records; upstream dataset metadata |
| `dq_uuid` | Tiangong identities | Use a UUID only after the row UUID and payload UUID agree and the public row's type, classification, flow property, and unit are directly confirmed. Leave unresolved atomic rows without UUIDs. | Direct read evidence and manifest unresolved row_id list |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_product_identity` | Dataset identity | Fail if the product is not a non-narrow woven terry fabric in CPC 26850 or if fibre composition, pile construction, market state, and finish are not declared. | `un-cpc-3-26850` |
| `validation_reference_flow` | Quantitative reference | Fail if the reference product is not linked to `93944c2a-106d-4c2d-9785-58ec3fc17a42`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, or if packaging mass is included in reference mass. | `eu-pef-2021` |
| `validation_route` | Process completeness | Fail if terry weaving or final finishing, inspection, and packing are absent; fail if a declared wet-processing or thermal route lacks its corresponding process inventory and records. | `eu-textiles-bat-2022`; `jrc-textiles-bref-2023` |
| `validation_atomic_rows` | Inventory exchanges | Fail if one flow card combines multiple materials, utilities, fuels, wastes, packaging components, or emissions, or if an unresolved UUID is replaced by a selector instruction. | `eu-textiles-bat-2022` |
| `validation_foreground_evidence` | Amounts | Fail if a reported foreground amount lacks its linked collection protocol, reporting period, measurement or business record, unit, and normalisation basis. | `eu-pef-2021`; `eu-textiles-bat-2022` |
| `validation_mass_and_water` | Reconciliation | Fail if yarn-to-fabric mass, final-fabric mass, or route-applicable water balances are not performed, or if an unexplained imbalance is silently assigned to a residual flow. | `eu-textiles-bat-2022` |
| `validation_waste_and_emissions` | Environmental outputs | Fail if identified wastewater, textile waste, dust, VOC, ammonia, or another relevant direct emission is omitted or merged with a different destination or compartment. | `eu-textiles-bat-2022`; `eu-pef-2021` |
| `validation_allocation` | Shared operations | Fail if shared burdens are allocated without first considering subdivision, or if the selected driver and affected exchanges are not disclosed. | `eu-pef-2021` |
| `validation_uuid_resolution` | Tiangong references | Fail if any UUID-bearing row lacks matching row and payload UUIDs or lacks direct confirmation of type, classification, property, and unit; unresolved row_ids shall remain UUID-free. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate fabric-production dataset suitable for publication as a secondary_dataset or background_dataset after review |
| downstream_use | Linkable to made-up textile article production, product life-cycle models, procurement footprints, or other studies requiring a CPC 26850 fabric input |
| allowed_use | Use when product identity, fibre and pile construction, market state, route, geography, period, allocation, and data quality are compatible with the downstream system |
| excluded_use | Do not use as a cotton terry fabric dataset, a narrow-fabric dataset, a made-up towel dataset, or a complete cradle-to-grave profile; do not support comparative claims without a compatible full life-cycle method and review |
| required_metadata | Canonical PCR id; CPC reference; Tiangong flow UUID; fibre composition; pile construction; finished width; mass per unit area; market state; finish; moisture basis; route; site geography; reporting period; technology; allocation; upstream dataset versions; waste destinations |
| required_quality_disclosure | Meter and record coverage; calibration; missing data; allocation shares; mass and water reconciliation; direct-emission monitoring; route exclusions; unresolved UUIDs; temporal, technological, and geographical representativeness |
| update_trigger | Material change in yarn composition, pile construction, loom technology, wet-processing recipe, finishing chemistry, energy or water supply, wastewater or air-emission treatment, allocation, product classification, reference-flow identity, or reporting representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-26850` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 26850, explanatory notes and structure, https://unstats.un.org/unsd/classifications/econ | Product scope, hierarchy, and exclusions from adjacent categories |
| `eu-pef-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I and PEFCR template, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Functional unit, reference flow, system boundary, company-specific data, allocation, data quality, and packaging records |
| `eu-textiles-bat-2022` | official_guidance | European Commission, Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj | Process decomposition, input/output inventory, monitoring, water, energy, chemicals, wastewater, waste, and air emissions |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Textile fabric production, pretreatment, dyeing, finishing, and environmental control context |
| `gutarowska-et-al-2020-terry` | literature | Gutarowska et al., Cotton Terry Textiles with Photo- and Bio-Activity in a Model Study and Real Conditions, Materials 13(15), 3334, 2020, https://doi.org/10.3390/ma13153334 | Terry construction and an industrial terry-fabric sequence including pretreatment, dyeing, washing, softening, and drying; not used to constrain fibre scope or quantities |
