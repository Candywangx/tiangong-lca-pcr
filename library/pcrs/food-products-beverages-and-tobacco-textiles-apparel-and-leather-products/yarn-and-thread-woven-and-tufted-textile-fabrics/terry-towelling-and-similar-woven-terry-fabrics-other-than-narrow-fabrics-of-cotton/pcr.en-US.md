---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics-of-cotton
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Terry towelling and similar woven terry fabrics (other than narrow fabrics) of cotton

## 1. Scope and Applicability

This PCR governs foreground data packages for finished cotton terry towelling and similar woven terry fabrics, other than narrow fabrics, delivered at the manufacturing plant gate. The foreground route starts with purchased cotton yarn and covers yarn preparation and sizing, terry weaving, wet pretreatment, route-dependent dyeing, and final drying and finishing.

The PCR excludes narrow fabrics; terry fabrics of fibres other than cotton; woven pile and chenille fabrics outside CPC 26840; cotton cultivation, ginning, and spinning except through linked upstream datasets; conversion of fabric into towels or other sewn articles; packaging, distribution, retail, use, laundering, and end-of-life. A broader study may add those stages as separate processes without changing this plant-gate reference flow. The finished product must remain identifiable by cotton composition, terry construction, width class, colour state, finish, moisture basis, and production geography.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics-of-cotton |
| classification_refs | CPC 3.0 `26840`, exact |
| covered_products | finished cotton terry towelling and similar woven terry fabrics other than narrow fabrics |
| excluded_products | narrow fabrics; non-cotton terry fabrics; woven pile or chenille fabrics outside CPC 26840; cut, sewn, or made-up towel articles |
| representative_product | finished woven cotton terry fabric in the declared bleached, dyed, or otherwise finished state |
| production_route | cotton yarn preparation and sizing; terry weaving; desizing and scouring; conditional bleaching or dyeing; drying and finishing |
| market_state | finished product, production mix at plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | finished woven cotton terry fabric providing an absorbent loop-pile textile surface |
| How much | 1 kg of finished fabric at the plant gate |
| How well | conforming to the declared cotton composition, terry construction, width class, colour state, finish, areal mass, and moisture basis |
| How long or cycle | one production lot at the plant gate; no use-stage service life is represented |
| reference_flow_link | finished cotton terry fabric output of `finishing_and_drying` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Terry towelling and similar woven terry fabrics (other than narrow fabrics) of cotton `61be29ff-288e-4570-8335-4e03760c9255` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cotton composition; terry pile construction; fabric width and confirmation that it is not narrow fabric; declared colour state (greige / bleached / dyed / other); finishing treatment; areal mass; moisture basis; production geography; production technology; plant gate |

Every foreground data package must declare all required qualifiers in structured metadata or an equivalent documented field. The exact reference product flow and Mass property were accepted only after hybrid discovery and Tiangong state-100 direct readback; no dataset version is stored in this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and intermediate fabric mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the finished product and every mass-based intermediate to 1 kg of finished fabric at the declared moisture basis. |
| `moisture_basis` | cotton yarn, intermediate fabric, and finished fabric | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record whether each measured mass is as-received or dry; convert only with a measured lot-specific moisture fraction and retain the original record. |
| `area_to_mass_conversion` | area-metered fabric records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Area data may be converted to mass only with the measured areal mass and width for the same product lot. |
| `utility_energy` | electricity, steam, and natural gas | energy | kWh or MJ | Preserve the metered utility unit and document every conversion factor used to express energy per reference output. |

## 5. System Boundary

The foreground boundary shall:

1. Include yarn preparation and sizing, terry weaving, wet pretreatment, all route-applicable dyeing, drying, and finishing operations under the producer's control.
2. Keep purchased cotton yarn, electricity, steam, fuel, water, and each process chemical as explicit upstream-linked product inputs rather than absorbing them into an undocumented aggregate.
3. Record each wastewater stream, cotton scrap or reject, and any measured direct elementary emission at the process where it leaves the foreground boundary.
4. Exclude cultivation, ginning, spinning, article making, packaging, distribution, use, laundering, and end-of-life unless the study adds them as separately identified processes.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | cotton_yarn_received_at_plant |
| starting_condition_role | purchased_upstream_product |
| product_classification_scope | CPC 3.0 `26840` finished cotton terry towelling and similar woven terry fabrics other than narrow fabrics |
| recursive_input_rule | purchased fabric already within CPC 26840 remains a separately quantified same-category input and is not relabelled as internally produced fabric |
| upstream_dataset_requirement | link cotton yarn, utilities, water services, fuels, and each chemical to geographically and technologically representative upstream datasets |
| disclosure | declare yarn composition and count, yarn origin, sizing system, weaving technology, wet-processing route, colour and finish recipe, plant location, reporting period, and any omitted stage |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| yarn_preparation_and_sizing | Yarn preparation and sizing | required |  | foreground preparation | kg sized cotton yarn |
| terry_weaving | Terry weaving | required |  | foreground fabric production | kg greige terry fabric |
| wet_pretreatment | Wet pretreatment | required |  | foreground desizing, scouring, and route-applicable bleaching | kg pretreated terry fabric |
| reactive_dyeing | Reactive dyeing | conditional | include only when the declared product is reactive-dyed | foreground coloration | kg dyed terry fabric |
| finishing_and_drying | Finishing and drying | required |  | foreground final conditioning and plant-gate production | 1 kg finished cotton terry fabric |

### Process: Yarn preparation and sizing (`yarn_preparation_and_sizing`)

#### Inputs

##### Product flows

###### Cotton yarn received for warp, pile, and weft preparation (`cotton_yarn_input`)

Purchased cotton yarn crosses the foreground boundary as the fibre-forming material for the terry construction.

- Selected flow: Cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass consumed by the sizing campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Starch sizing agent applied to cotton yarn (`sizing_starch_input`)

Starch sizing agent is recorded as one chemical product input when used to protect and lubricate warp or pile yarn during weaving.

- Selected flow: Starch sizing agent
- Flow property / unit: Mass / kg
- Amount rule: measured mass of supplied starch sizing agent consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_chemical_records`
- Sources: `eu-bat-textiles-2022`

###### Water supplied to sizing preparation (`sizing_water_input`)

Water entering the sizing preparation is recorded separately from later wet-processing water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to sizing solution preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_utility_records`
- Sources: `eu-bat-textiles-2022`

###### Electricity supplied to yarn preparation and sizing (`sizing_electricity_input`)

Metered electricity for winding, warping, sizing, and associated drives is recorded as one utility exchange.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity consumption for the sizing campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg sized cotton yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_utility_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Steam supplied to yarn sizing (`sizing_steam_input`)

Purchased or on-site steam used to heat or dry sized yarn is recorded separately from electricity.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy supplied to the sizing campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg sized cotton yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_utility_records`
- Sources: `ec-jrc-textiles-bref-2023`

#### Outputs

##### Product flows

###### Sized cotton yarn delivered to terry weaving (`sized_cotton_yarn_output`)

Sized cotton yarn is the measured intermediate product leaving yarn preparation.

- Selected flow: Sized cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: measured mass of sized yarn issued to weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sized_yarn_output_records`
- Sources: `ec-jrc-textiles-bref-2023`

### Process: Terry weaving (`terry_weaving`)

#### Inputs

##### Product flows

###### Sized cotton yarn entering the terry loom (`sized_yarn_for_weaving_input`)

The sized warp, pile, and weft yarn mass issued to the terry loom is recorded as the fabric-forming input.

- Selected flow: Sized cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: measured mass of sized yarn charged to the terry weaving lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_material_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Electricity supplied to terry weaving (`weaving_electricity_input`)

Electricity for terry looms and directly associated material handling is recorded from the weaving meter or a documented allocation of a shared meter.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity consumption for the weaving lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_utility_records`
- Sources: `ec-jrc-textiles-bref-2023`

#### Outputs

##### Product flows

###### Greige woven cotton terry fabric (`greige_terry_fabric_output`)

Greige woven cotton terry fabric is the measured intermediate output before wet pretreatment.

- Selected flow: Greige woven cotton terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured greige fabric mass transferred to wet pretreatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_output_records`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

###### Cotton yarn and fabric scrap from terry weaving (`cotton_weaving_scrap_output`)

Offcuts, broken yarn, and rejected greige fabric are combined only when they share the same cotton textile waste identity and destination; otherwise the foreground package shall split them into separate atomic rows.

- Selected flow: Cotton textile scrap
- Flow property / unit: Mass / kg
- Amount rule: measured cotton textile scrap leaving the weaving process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg greige terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_scrap_records`
- Sources: `ec-jrc-textiles-bref-2023`

### Process: Wet pretreatment (`wet_pretreatment`)

#### Inputs

##### Product flows

###### Greige woven cotton terry fabric entering pretreatment (`greige_terry_fabric_input`)

The greige fabric input links weaving to desizing, scouring, and route-applicable bleaching.

- Selected flow: Greige woven cotton terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured greige fabric mass charged to pretreatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg pretreated terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_material_records`
- Sources: `eu-bat-textiles-2022`

###### Water supplied to wet pretreatment (`pretreatment_water_input`)

Water used for desizing, scouring, bleaching when applicable, and rinsing is recorded at the pretreatment process boundary.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to the pretreatment campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg pretreated terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_utility_records`
- Sources: `eu-bat-textiles-2022`

###### Sodium hydroxide supplied for cotton scouring or mercerising (`sodium_hydroxide_input`)

Sodium hydroxide is recorded when consumed by the declared scouring or mercerising route.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured mass of sodium hydroxide product consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg pretreated terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_chemical_records`
- Sources: `eu-bat-textiles-2022`

###### Alpha-amylase supplied for starch desizing (`alpha_amylase_input`)

Alpha-amylase is recorded when enzymatic removal of starch sizing is used.

- Selected flow: Alpha-amylase enzyme product
- Flow property / unit: Mass / kg
- Amount rule: measured mass of alpha-amylase product consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg pretreated terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_chemical_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Hydrogen peroxide supplied for bleaching (`hydrogen_peroxide_input`)

Hydrogen peroxide is recorded only when the declared product route includes peroxide bleaching.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: measured mass of hydrogen peroxide product consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg pretreated terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_chemical_records`
- Sources: `eu-bat-textiles-2022`

###### Steam supplied to wet pretreatment (`pretreatment_steam_input`)

Steam supplied for heating pretreatment baths and fabric is recorded independently of electricity.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy supplied to the pretreatment campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg pretreated terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_utility_records`
- Sources: `ec-jrc-textiles-bref-2023`

#### Outputs

##### Product flows

###### Pretreated woven cotton terry fabric (`pretreated_terry_fabric_output`)

Pretreated terry fabric is the measured output after desizing, scouring, and route-applicable bleaching.

- Selected flow: Pretreated woven cotton terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured pretreated fabric mass leaving the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_output_records`
- Sources: `eu-bat-textiles-2022`

##### Waste flows

###### Wastewater discharged from wet pretreatment (`pretreatment_wastewater_output`)

Pretreatment wastewater is recorded at the point it leaves the process for on-site or off-site treatment.

- Selected flow: Textile pretreatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or volume converted with measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg pretreated terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_wastewater_records`
- Sources: `eu-bat-textiles-2022`

### Process: Reactive dyeing (`reactive_dyeing`)

#### Inputs

##### Product flows

###### Pretreated cotton terry fabric entering reactive dyeing (`pretreated_fabric_for_dyeing_input`)

This input is present only for a declared reactive-dyed product route.

- Selected flow: Pretreated woven cotton terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured pretreated fabric mass charged to dyeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_material_records`
- Sources: `peer-reviewed-cotton-mercerisation-dyeing-2022`

###### C.I. Reactive Red 195 supplied to the declared dye recipe (`reactive_red_195_input`)

C.I. Reactive Red 195 is one concrete dye exchange and is recorded only when it appears in the declared recipe; another dye requires its own separately identified atomic row in the foreground package.

- Selected flow: C.I. Reactive Red 195
- Flow property / unit: Mass / kg
- Amount rule: measured mass of C.I. Reactive Red 195 product consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_chemical_records`
- Sources: `peer-reviewed-cotton-mercerisation-dyeing-2022`

###### Sodium chloride supplied to reactive dyeing (`sodium_chloride_input`)

Sodium chloride is recorded as a separate recipe chemical when used to promote dye exhaustion.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: measured mass of sodium chloride consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_chemical_records`
- Sources: `peer-reviewed-cotton-mercerisation-dyeing-2022`

###### Sodium carbonate supplied to reactive dyeing (`sodium_carbonate_input`)

Sodium carbonate is recorded as a separate recipe chemical when used to establish the dye-bath alkalinity.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: measured mass of sodium carbonate consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_chemical_records`
- Sources: `peer-reviewed-cotton-mercerisation-dyeing-2022`

###### Water supplied to reactive dyeing and after-washing (`dyeing_water_input`)

Water used for the dye bath, rinsing, soaping, and after-washing is recorded at the dyeing process boundary.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to the dyeing campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_utility_records`
- Sources: `eu-bat-textiles-2022`

###### Steam supplied to reactive dyeing (`dyeing_steam_input`)

Steam used to heat dye baths or after-washing is recorded independently of electricity.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy supplied to the dyeing campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_utility_records`
- Sources: `eu-bat-textiles-2022`

#### Outputs

##### Product flows

###### Reactive-dyed woven cotton terry fabric (`dyed_terry_fabric_output`)

The dyed fabric output is measured after required after-washing and before final finishing.

- Selected flow: Reactive-dyed woven cotton terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dyed fabric mass leaving the dyeing campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_output_records`
- Sources: `peer-reviewed-cotton-mercerisation-dyeing-2022`

##### Waste flows

###### Wastewater discharged from reactive dyeing (`dyeing_wastewater_output`)

Dye-bath discharge and after-wash wastewater are recorded at the point they leave dyeing for treatment.

- Selected flow: Reactive dyeing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or volume converted with measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dyed terry fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dyeing_wastewater_records`
- Sources: `eu-bat-textiles-2022`

### Process: Finishing and drying (`finishing_and_drying`)

#### Inputs

##### Product flows

###### Dyed cotton terry fabric entering finishing (`dyed_terry_fabric_for_finishing_input`)

Dyed terry fabric is recorded only for a route that includes the `reactive_dyeing` process.

- Selected flow: Reactive-dyed woven cotton terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dyed fabric mass charged to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_records`
- Sources: `eu-bat-textiles-2022`

###### Undyed pretreated cotton terry fabric entering finishing (`undyed_pretreated_terry_fabric_for_finishing_input`)

Pretreated fabric is recorded for an undyed route; this row and the dyed-fabric input are mutually exclusive for a single production lot.

- Selected flow: Pretreated woven cotton terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured pretreated fabric mass charged to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_records`
- Sources: `eu-bat-textiles-2022`

###### Electricity supplied to finishing and drying (`finishing_electricity_input`)

Electricity for finishing machines, fans, pumps, and material handling is recorded from a dedicated meter or a documented shared-meter allocation.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity consumption for the finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utility_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Steam supplied to finishing and drying (`finishing_steam_input`)

Purchased or on-site steam supplied to finishing and indirect drying is recorded as one energy exchange.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy supplied to the finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utility_records`
- Sources: `ec-jrc-textiles-bref-2023`

###### Natural gas supplied to direct-heated drying (`natural_gas_input`)

Natural gas is recorded only when gaseous combustion products directly contact the textile or provide heat to the dryer at the foreground site.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered natural-gas energy supplied to direct-heated drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utility_records`
- Sources: `eu-bat-textiles-2022`

#### Outputs

##### Product flows

###### Finished cotton terry towelling fabric at plant gate (`finished_terry_fabric_output`)

This is the exact CPC 26840 reference product output accepted by state-100 Tiangong direct readback.

- Selected flow: Terry towelling and similar woven terry fabrics (other than narrow fabrics) of cotton `61be29ff-288e-4570-8335-4e03760c9255`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg finished fabric at the declared moisture basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Finished cotton terry fabric rejected at inspection (`finished_fabric_reject_output`)

Rejected finished fabric is recorded separately from accepted reference product output and linked to its actual treatment destination.

- Selected flow: Rejected cotton terry fabric
- Flow property / unit: Mass / kg
- Amount rule: measured rejected finished fabric mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished cotton terry fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_output_records`
- Sources: `jrc-ilcd-process-format-1-1`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation_by_subdivision` | production lots and separately metered operations | Subdivide and directly assign yarn, chemicals, utilities, wastewater, scrap, and rejects to the production lot before applying any allocation. | `iso-14044-2006`; `jrc-ilcd-lca-detailed-2010` |
| `classify_cotton_scrap_before_allocation` | cotton yarn, selvage, and fabric scrap | Record the actual destination and classify the output as waste or co-product before modelling any burden or credit. | `jrc-ilcd-lca-detailed-2010` |
| `physical_allocation_if_unavoidable` | inseparable fabric co-products with a common physical function | If subdivision is impossible and allocation remains necessary, use measured dry mass and disclose the allocation fraction and sensitivity; do not allocate wastewater or emissions away from the generating process. | `iso-14044-2006`; `jrc-ilcd-lca-detailed-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_material_records` | yarn_preparation_and_sizing | cotton yarn input | receiving and issue records | lot id; yarn count; cotton composition; gross and tare mass; moisture basis; issued mass | calibrated scale and inventory issue record | kg | per lot | reporting period | sizing line | sum accepted issued mass and normalize to sized-yarn or finished-fabric output | calibration record; supplier lot record; stock reconciliation |
| `cp_sizing_chemical_records` | yarn_preparation_and_sizing | starch sizing agent | recipe and batch records | chemical identity; supplier product; batch id; concentration; issued mass; return mass | calibrated batch scale and recipe log | kg | per batch | reporting period | sizing line | net consumed mass by chemical identity | scale calibration; purchase record; recipe sign-off |
| `cp_sizing_utility_records` | yarn_preparation_and_sizing | sizing water, electricity, and steam | meter records | meter id; opening and closing readings; unit; timestamp; production lot | dedicated meter or documented shared-meter allocation | kg; kWh; MJ | per batch or shift | reporting period | sizing line | subtract readings and allocate only with documented operating time or submeter basis | meter calibration; allocation worksheet |
| `cp_sized_yarn_output_records` | yarn_preparation_and_sizing | sized cotton yarn output | production records | lot id; gross and tare mass; moisture basis; destination | calibrated scale and transfer record | kg | per lot | reporting period | sizing line | sum transferred sized-yarn mass | calibration record; transfer reconciliation |
| `cp_weaving_material_records` | terry_weaving | sized yarn input | loom issue records | lot id; yarn issue mass; returns; product code; loom id | calibrated scale and material issue log | kg | per lot | reporting period | terry weaving area | net issued mass by fabric lot | stock reconciliation; loom ticket |
| `cp_weaving_utility_records` | terry_weaving | weaving electricity | electricity meter records | meter id; readings; operating time; lot id | submeter or documented shared-meter allocation | kWh | per shift | reporting period | terry weaving area | subtract readings and allocate by verified loom operating time when not submetered | meter calibration; production log |
| `cp_weaving_output_records` | terry_weaving | greige terry fabric output | loom and inspection records | roll id; gross and tare mass; width; areal mass; moisture basis | calibrated roll scale and inspection system | kg | per roll | reporting period | terry weaving area | sum accepted greige roll mass | calibration record; roll inspection record |
| `cp_weaving_scrap_records` | terry_weaving | cotton textile scrap | waste transfer records | waste identity; container tare; gross mass; destination; date | calibrated waste scale and transfer note | kg | per container | reporting period | terry weaving area | net scrap mass by identity and destination | calibration record; waste transfer note |
| `cp_pretreatment_material_records` | wet_pretreatment | greige fabric input | batch records | roll id; incoming mass; moisture basis; recipe id | calibrated scale and batch ticket | kg | per batch | reporting period | pretreatment line | sum charged fabric mass | calibration record; batch ticket |
| `cp_pretreatment_chemical_records` | wet_pretreatment | sodium hydroxide, alpha-amylase, and hydrogen peroxide | recipe and dosing records | chemical identity; concentration; batch id; issued mass; residual return | calibrated dosing system and recipe log | kg | per batch | reporting period | pretreatment line | net consumed mass separately for each chemical | dosing calibration; supplier record; recipe approval |
| `cp_pretreatment_utility_records` | wet_pretreatment | pretreatment water and steam | meter records | meter id; readings; unit; batch id; timestamp | submeter or documented shared-meter allocation | kg; MJ | per batch | reporting period | pretreatment line | subtract readings and normalize to pretreated output | meter calibration; batch log |
| `cp_pretreatment_output_records` | wet_pretreatment | pretreated fabric output | batch and inspection records | roll or batch id; gross and tare mass; moisture basis; treatment route | calibrated scale and transfer record | kg | per batch | reporting period | pretreatment line | sum accepted output mass | calibration record; treatment record |
| `cp_pretreatment_wastewater_records` | wet_pretreatment | pretreatment wastewater | discharge records | flowmeter readings; discharge time; density if mass conversion is used; treatment destination | calibrated flowmeter and discharge log | kg or m3 | per batch or continuous | reporting period | pretreatment line discharge | sum measured discharge and keep density conversion traceable | flowmeter calibration; sampling and transfer records |
| `cp_dyeing_material_records` | reactive_dyeing | pretreated fabric input | dye-batch records | batch id; incoming fabric mass; colour code; recipe id | calibrated scale and batch ticket | kg | per batch | reporting period | dyeing line | sum charged fabric mass | calibration record; batch ticket |
| `cp_dyeing_chemical_records` | reactive_dyeing | C.I. Reactive Red 195, sodium chloride, and sodium carbonate | recipe and dosing records | chemical identity; supplier product; concentration; issued mass; return mass; batch id | calibrated dosing equipment and recipe log | kg | per batch | reporting period | dyeing line | net consumed mass separately for each chemical identity | dosing calibration; supplier record; signed recipe |
| `cp_dyeing_utility_records` | reactive_dyeing | dyeing water and steam | meter records | meter id; readings; unit; batch id; timestamp | submeter or documented shared-meter allocation | kg; MJ | per batch | reporting period | dyeing line | subtract readings and normalize to dyed output | meter calibration; batch log |
| `cp_dyeing_output_records` | reactive_dyeing | dyed fabric output | batch and inspection records | batch id; output mass; moisture basis; shade; wash status | calibrated scale and inspection record | kg | per batch | reporting period | dyeing line | sum accepted dyed output mass | calibration record; shade and wash inspection |
| `cp_dyeing_wastewater_records` | reactive_dyeing | reactive dyeing wastewater | discharge records | flowmeter readings; discharge time; density if used; treatment destination | calibrated flowmeter and discharge log | kg or m3 | per batch or continuous | reporting period | dyeing line discharge | sum measured discharge and keep bath and after-wash streams separate when destinations differ | flowmeter calibration; sampling and transfer records |
| `cp_finishing_material_records` | finishing_and_drying | dyed or undyed fabric input | finishing batch records | route id; input roll id; input mass; moisture basis; finish recipe | calibrated scale and batch ticket | kg | per lot | reporting period | finishing line | sum the one applicable input route per lot | calibration record; route reconciliation |
| `cp_finishing_utility_records` | finishing_and_drying | finishing electricity, steam, and natural gas | meter and fuel records | meter id; readings; fuel quantity; heating value source; lot id; operating time | submeter, calibrated fuel meter, or documented shared-meter allocation | kWh; MJ | per shift or lot | reporting period | finishing and drying line | subtract readings and convert fuel to energy with a documented lot or supplier heating value | meter calibration; invoice; conversion worksheet |
| `cp_finishing_output_records` | finishing_and_drying | accepted finished fabric and rejected fabric | final inspection records | roll id; accepted mass; rejected mass; moisture basis; width; areal mass; colour; finish; destination | calibrated roll scale and final inspection system | kg | per roll | reporting period | finishing line | sum accepted reference output and rejected output separately | calibration record; inspection record; mass reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_exchange_to_reference_mass` | every foreground exchange | measured exchange amount divided by accepted finished fabric mass for the same reconciled production lots | protocol-specific exchange record; `cp_finishing_output_records` | exchange amount per 1 kg finished fabric | `iso-14044-2006`; `jrc-ilcd-lca-detailed-2010` |
| `convert_area_record_to_mass` | area-metered fabric | measured area multiplied by lot-specific measured areal mass; retain both measurements and the moisture basis | area record; areal-mass test; width record | kg fabric | `jrc-ilcd-flow-format-1-1` |
| `reconcile_fabric_mass` | each production stage | opening work in progress plus measured inputs minus closing work in progress equals accepted output plus rejected output plus measured losses; disclose any residual | material issue; transfer; output; scrap; inventory records | stage mass-balance reconciliation | `jrc-ilcd-lca-detailed-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and intermediates | Preserve product code, cotton composition, terry construction, width class, colour state, finish, lot id, and moisture basis across process transfers. | linked lot, roll, recipe, and inspection records |
| `dq_temporal` | foreground records | Use one declared reporting period and document shutdowns, trial lots, rework, and changes in recipe or technology. | production calendar and batch logs |
| `dq_measurement` | meters and scales | Record instrument id, unit, calibration status, reading interval, and any shared-meter allocation basis. | calibration certificates and meter logs |
| `dq_completeness` | materials, utilities, wastewater, scrap, and rejects | Reconcile every listed process and disclose absent or unmeasured exchanges; a missing UUID does not permit omission of a measured exchange. | stage mass balance, purchase reconciliation, waste and discharge records |
| `dq_representativeness` | upstream links | Match geography, technology, energy carrier, water service, chemical formulation, and reference year to the foreground route or disclose the mismatch. | upstream dataset metadata and gap assessment |

## 9. Validation Rules

A foreground data package conforms only when:

- the reference output uses UUID `61be29ff-288e-4570-8335-4e03760c9255`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, and is exactly classified as CPC 3.0 `26840`;
- all required qualifiers and the plant-gate boundary are declared, including cotton composition, terry construction, width class, colour state, finish, moisture basis, geography, and technology;
- every required process is present and `reactive_dyeing` is present if and only if the declared route uses reactive dyeing;
- every inventory card represents one concrete exchange, each alternative dye or chemical is a separate row, and no collection label substitutes for a flow identity;
- all empirical quantities come from linked foreground records and no AI-authored or unsupported numeric range is used;
- every unresolved Tiangong UUID remains absent and is reported by `row_id`; a UUID may be added only after hybrid discovery and state-100 direct readback of flow type, semantic identity, property, and unit;
- mass transfers, accepted output, scrap, rejects, and work in progress reconcile for each production stage or the residual is quantified and explained;
- wastewater destinations, on-site treatment, direct-heating fuel use, measured direct emissions, rework, and excluded stages are disclosed;
- allocation is avoided by subdivision where possible, and any remaining allocation follows the declared rule and includes its fraction and sensitivity;
- source ids, collection protocols, calculation rules, and quality evidence resolve to the records declared in this PCR.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | finished cotton terry towelling fabric datasets matching CPC 26840, the declared plant gate, and all required qualifiers |
| excluded_use | narrow fabrics; non-cotton terry; towel articles; routes omitting applicable wet processing; use-stage laundering or cradle-to-grave claims without added processes |
| required_metadata | reference UUID and Mass UUID; CPC code; cotton composition; yarn count; terry construction; width; areal mass; colour state; finish; moisture basis; geography; technology; reporting period; route; allocation; upstream links |
| required_quality_disclosure | foreground coverage; instrument calibration; shared-meter allocations; mass-balance residuals; unresolved UUIDs and ranges; upstream representativeness; wastewater and waste destinations |
| update_trigger | material change in reference identity, CPC scope, yarn source, sizing system, weaving technology, wet-processing recipe, colour or finish route, energy system, wastewater treatment, geography, reporting period, or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-26840` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/26840 | exact product-category scope and exclusions |
| `jrc-ilcd-flow-format-1-1` | official_guidance | https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_FlowDataSet.html | flow name, route qualifiers, reference property, and unit documentation |
| `jrc-ilcd-process-format-1-1` | official_guidance | https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_ProcessDataSet.html | exchange direction, process documentation, review, and waste-output requirements |
| `jrc-ilcd-lca-detailed-2010` | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | goal and scope, reference flow, system boundary, allocation, data quality, and interpretation |
| `ec-jrc-textiles-bref-2023` | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | textile process decomposition, sizing, fabric production, pretreatment, dyeing, finishing, utilities, emissions, and waste streams |
| `eu-bat-textiles-2022` | official_guidance | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 | official BAT scope and definitions for sizing, weaving, desizing, scouring, bleaching, dyeing, finishing, water, energy, chemicals, emissions, and wastewater |
| `iso-14040-2006` | standard | ISO 14040:2006; https://www.iso.org/standard/37456.html | LCA principles, goal and scope, inventory, interpretation, reporting, and critical review |
| `iso-14044-2006` | standard | ISO 14044:2006; https://www.iso.org/standard/38498.html | LCI requirements, allocation hierarchy, data quality, reporting, and review |
| `blackburn-payne-cotton-towels-2004` | literature | https://doi.org/10.1039/B407628A | peer-reviewed cotton towel life-cycle evidence supporting explicit exclusion or separate modelling of laundering and use |
| `peer-reviewed-cotton-mercerisation-dyeing-2022` | literature | https://doi.org/10.3390/ma15062092 | peer-reviewed full-text evidence for cotton mercerisation, reactive dyeing, recipe-specific chemicals, washing, and measured batch records |
