---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-less-than-85-by-weight-of-cotton-mixed-mainly-or-sol-4647ce51
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Woven cotton fabrics containing less than 85% cotton, mixed mainly or solely with man-made fibres

## 1. Scope and Applicability

This PCR applies to woven fabrics in which cotton is less than 85% of dry textile mass and the non-cotton component is mainly or solely man-made fibre. It covers fabric manufacture from receipt of cotton and man-made-fibre yarns through yarn preparation, weaving, inspection and mending, and, when performed for the declared saleable fabric, wet pre-treatment, dyeing or printing, finishing, drying or heat-setting, and on-site wastewater treatment. The concrete dataset shall declare whether the reference product is greige, bleached, dyed, printed, or otherwise finished.

The PCR excludes fabrics containing 85% or more cotton by mass; knitted, tufted, nonwoven, narrow, pile, terry, gauze, tyre-cord, and other special fabrics outside the declared CPC scope; yarn and fibre production except as upstream datasets; garment or made-up-article manufacture; distribution beyond the manufacturing gate; use; and end-of-life. Coating or lamination is outside the default route and requires a separately declared extension if it changes product identity or function.

The rule is intended for foreground data packages representing an identified mill, line, product family, or production mix. Product composition, fabric construction, mass per unit area, width, coloration state, finish, production geography, reference period, and included operations shall be disclosed so that a user can judge representativeness.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-less-than-85-by-weight-of-cotton-mixed-mainly-or-sol-4647ce51 |
| classification_refs | CPC 3.0: 26630 |
| covered_products | Woven fabrics with cotton below 85% of dry textile mass whose non-cotton component is mainly or solely man-made fibre; greige and wet-processed states are covered when the actual state and included operations are declared. |
| excluded_products | Fabrics with cotton at or above 85%; fabrics whose non-cotton component is not mainly man-made fibre; knitted, tufted, nonwoven, narrow, pile, terry, gauze, tyre-cord, coated, laminated, or other special fabrics; yarns; garments; and made-up textile articles. |
| representative_product | Production mix, at plant, of woven cotton/man-made-fibre blend fabric meeting the declared composition and construction specification. |
| production_route | Yarn receipt and composition verification; warping or winding and conditional sizing; weaving; inspection and mending; conditional wet pre-treatment, coloration, and finishing; conditional on-site wastewater treatment. |
| market_state | Saleable dry fabric at the manufacturing gate, supplied as greige, bleached, dyed, printed, or otherwise finished as declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable woven cotton/man-made-fibre blend fabric meeting the declared composition, construction, and finish specification. |
| How much | 1 kg of saleable fabric on the declared dry or conditioned mass basis at the manufacturing gate. |
| How well | Cotton is less than 85% of dry textile mass; the remaining fibre component is mainly or solely man-made fibre; the fabric meets the declared width, mass per unit area, weave, colour, and finish acceptance criteria. |
| How long or cycle | One completed manufacturing batch or reporting-period production mix delivered at the plant gate; no use-stage service life is assigned. |
| reference_flow_link | The reference flow is the mass of conforming saleable fabric required to provide the functional unit. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dry or conditioned mass basis and reference moisture; cotton mass fraction; each man-made fibre type and mass fraction; any other fibre fraction; woven construction; mass per unit area; usable width; greige, bleached, dyed, printed, or finished state; colour or print route; functional finish; mill geography; reporting period; included production operations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product and textile material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report mass on one declared dry or conditioned basis. Record the conditioning method or moisture content and convert all textile input and output masses to the same basis before normalization. |
| `fibre_composition_balance` | reference product composition | Mass fraction | kg/kg | Determine fibre fractions from product specification supported by test, bill of materials, or lot record; fractions shall sum to 1 within declared rounding tolerance, cotton shall be below 0.85, and the non-cotton fraction shall be mainly or solely man-made fibre. |
| `area_mass_conversion` | records reported by length or area | Mass per area and usable width | kg, m2, kg/m2 | Convert length- or area-based production using measured roll length, usable width, and mass per unit area for the same lot; retain both raw and converted values. |
| `net_water_use` | wet textile processes | Volume | m3 | Record process water supplied and separately record internally reused or recycled water. Net water consumption equals supplied water minus water returned for internal reuse; do not subtract discharged wastewater. |
| `energy_carrier_separation` | electricity, fuels, steam, and purchased heat | Energy or carrier mass/volume | kWh, MJ, kg, or m3 | Keep purchased electricity, each fuel, purchased steam, and purchased heat separate. Convert energy units with documented factors and do not merge direct fuel combustion with purchased energy. |
| `normalization_to_reference` | all inventory rows | Row-specific property | row-specific unit per kg | Normalize reporting-period quantities to 1 kg conforming saleable reference fabric after accounting for opening and closing stock, rework, rejects, and intermediate transfers. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cotton and man-made-fibre yarns received at the fabric manufacturing site, with supplier, fibre composition, yarn count, moisture or conditioning basis, and upstream dataset references declared. |
| starting_condition_role | Gate-to-gate foreground starting point for fabric manufacturing; upstream fibre and yarn production remain linked background or secondary datasets. |
| product_classification_scope | Woven cotton fabrics with cotton below 85% by dry mass and with the non-cotton fraction mainly or solely man-made fibre, corresponding to CPC 3.0 code 26630. |
| recursive_input_rule | If a woven fabric in the same category enters as an input for an on-site rework or finishing operation, record it as a separate input with origin, condition, quantity, and upstream dataset; do not recursively recreate its prior manufacture inside the same foreground process. |
| upstream_dataset_requirement | Link composition- and geography-representative datasets for cotton yarn, each man-made-fibre yarn, purchased chemicals, water supply, electricity, fuels, heat, transport if brought into scope, and off-site treatment. |
| disclosure | Declare product state, included and excluded operations, outsourced operations, shared utilities, wastewater route, direct emissions, internal recycling, allocation choices, and any data gap or cut-off. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground fabric manufacture | Include all on-site operations that transform received yarn into the declared saleable fabric, together with their textile materials, process chemicals, water, energy, waste, wastewater, and direct air or water emissions. | eu-textiles-bat-2022 |
| `boundary_rule_2` | conditional wet processing | Include desizing, scouring, bleaching, mercerisation, dyeing, printing, finishing, drying, and heat-setting only when performed for the declared product; disclose each included or outsourced operation and link an upstream dataset for every outsourced operation. | eu-textiles-bat-2022 |
| `boundary_rule_3` | upstream yarn and fibre production | Exclude fibre and yarn production from the foreground boundary, but require separate upstream datasets matched to cotton/man-made-fibre composition, yarn specification, geography, and supplier route. | eu-pef-2021 |
| `boundary_rule_4` | first foreground inventory | Avoid unreported cut-offs in the first dataset. Record all identified material and energy flows and explicitly disclose any unavailable minor flow as a data gap rather than silently omitting it. | eu-pef-2021 |
| `boundary_rule_5` | packaging and downstream stages | Exclude packaging, distribution, garment conversion, use, and end-of-life unless the study explicitly extends the boundary; extended results shall remain separable from the plant-gate fabric dataset. | eu-pef-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | Yarn receipt, warping or winding, and sizing | required | Sizing flows are recorded only when sizing is performed or applied size remains attributable to the product route. | Verify composition and prepare warp and weft for weaving. | kg prepared yarn |
| `weaving` | Weaving | required | Always included. | Produce greige woven fabric from prepared yarns. | kg greige fabric |
| `inspection_mending` | Inspection, mending, and trimming | required | Always included. | Separate conforming fabric, rework, and rejects. | kg conforming fabric |
| `wet_pretreatment` | Desizing, scouring, bleaching, or mercerisation | conditional | Include when any listed operation is performed for the declared fabric. | Prepare woven fabric for sale or coloration. | kg pretreated fabric |
| `coloration` | Dyeing or printing | conditional | Include when the declared fabric is dyed or printed at the reporting site. | Apply declared colour or print. | kg coloured fabric |
| `finishing` | Physical or chemical finishing, drying, or heat-setting | conditional | Include when a finish or thermal treatment is applied at the reporting site. | Achieve declared appearance, handle, dimensional, or functional properties. | kg finished fabric |
| `wastewater_treatment` | On-site wastewater treatment | conditional | Include when wastewater from included wet operations is treated on site. | Treat aqueous waste before discharge or transfer. | m3 wastewater treated |

### Process: Yarn receipt, warping or winding, and sizing (`yarn_preparation`)

#### Inputs

##### Product flows

###### Cotton yarn input (`cotton_yarn_input`)

Record the dry-basis mass of cotton yarn entering the declared product route, including attributable opening stock and excluding unrelated products.

- Selected flow: Cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: calculated cotton-yarn consumption from lot issues and stock change, normalized to reference fabric output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_balance`

###### Polyester staple-fibre yarn input (`man_made_yarn_input`)

When polyester staple-fibre yarn is used, record its dry-basis mass separately from cotton yarn and from every other yarn product. Other man-made-fibre yarns used by the declared product require additional atomic rows.

- Selected flow: Polyester staple-fibre yarn
- Flow property / unit: Mass / kg
- Amount rule: calculated man-made-fibre yarn consumption from lot issues and stock change, normalized to reference fabric output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_material_balance`

###### Native starch sizing agent (`sizing_chemicals`)

When native starch is applied as warp size, record that supplied product alone in this card and retain its solids concentration. Any synthetic size or auxiliary requires a separate atomic row.

- Selected flow: Native starch sizing agent
- Flow property / unit: Mass / kg
- Amount rule: measured chemical issue minus returns for the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation_records`
- Sources: eu-textiles-bat-2022

###### Yarn-preparation electricity (`yarn_preparation_electricity`)

Record metered or allocated electricity for winding, warping, sizing, pumps, controls, and attributable room conditioning.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or physically allocated submeter total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation_records`
- Sources: eu-textiles-bat-2022

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared warp and weft yarn (`prepared_yarn_output`)

Record prepared yarn transferred to weaving on the same mass basis as yarn inputs.

- Selected flow: Prepared cotton/man-made-fibre yarn blend
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass to weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation_records`

##### Waste flows

###### Discarded blended-yarn waste (`yarn_preparation_waste`)

Record the measured mass of discarded cotton/polyester blended yarn from the declared product lot. Record starch residues, sweepings, and any differently composed yarn waste in separate atomic rows.

- Selected flow: Discarded cotton/polyester blended yarn
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by treatment or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation_records`

##### Elementary flows

### Process: Weaving (`weaving`)

#### Inputs

##### Product flows

###### Prepared yarn supplied to looms (`weaving_yarn_input`)

Record warp and weft yarn transferred into the loom area and reconcile it with fabric, recoverable selvage, yarn waste, and stock change.

- Selected flow: Prepared cotton/man-made-fibre yarn blend
- Flow property / unit: Mass / kg
- Amount rule: calculated loom yarn input from transfer and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_records`

###### Weaving electricity (`weaving_electricity`)

Record loom, compressed-air, controls, material handling, and attributable humidification electricity.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or physically allocated submeter total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_records`
- Sources: eu-textiles-bat-2022

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven fabric (`greige_fabric_output`)

Record measured greige fabric mass transferred to inspection or wet processing.

- Selected flow: Greige woven cotton/man-made-fibre blend fabric
- Flow property / unit: Mass / kg
- Amount rule: measured conforming and reworkable greige fabric output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_records`

##### Waste flows

###### Discarded woven-fabric selvage (`weaving_textile_waste`)

Record the measured mass of discarded woven-fabric selvage from the declared product lot. Loom-start waste and any differently composed textile waste require separate atomic rows.

- Selected flow: Discarded cotton/polyester woven-fabric selvage
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_records`

##### Elementary flows

###### Textile dust to air (`weaving_dust_air`)

Record measured or technically estimated dust released after any capture system when the loom hall has a reportable direct emission.

- Selected flow: Particulate matter, unspecified, to air
- Flow property / unit: Mass / kg
- Amount rule: measured outlet mass flow or documented emission-factor estimate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_records`
- Sources: eu-textiles-bat-2022

### Process: Inspection, mending, and trimming (`inspection_mending`)

#### Inputs

##### Product flows

###### Fabric awaiting inspection (`inspection_fabric_input`)

Record fabric entering final inspection and reconcile it with conforming output, rework, and rejects.

- Selected flow: Woven cotton/man-made-fibre blend fabric, intermediate state
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming inspected fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming inspected fabric (`inspected_fabric_output`)

Record fabric passing the declared construction and visual acceptance criteria.

- Selected flow: Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted fabric output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming inspected fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_records`

##### Waste flows

###### Rejected inspected fabric (`inspection_reject_waste`)

Record non-reworked inspected fabric from the declared product lot. Trimming and sampling waste require separate atomic rows when measured independently.

- Selected flow: Rejected cotton/polyester woven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured rejected-fabric mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming inspected fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_records`

##### Elementary flows

### Process: Desizing, scouring, bleaching, or mercerisation (`wet_pretreatment`)

#### Inputs

##### Product flows

###### Fabric entering wet pre-treatment (`pretreatment_fabric_input`)

Record the measured fabric mass and incoming state for every included pre-treatment route.

- Selected flow: Woven cotton/man-made-fibre blend fabric, before pre-treatment
- Flow property / unit: Mass / kg
- Amount rule: measured lot input mass on the common textile mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`

###### Pre-treatment water (`pretreatment_water`)

Record supplied, reused, and recycled water separately for washing, desizing, scouring, bleaching, mercerisation, rinsing, and equipment cleaning.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured supplied water minus measured internal reuse returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`
- Sources: eu-textiles-bat-2022

###### Sodium hydroxide for pre-treatment (`pretreatment_chemicals`)

When sodium hydroxide is used for scouring or mercerisation, record that supplied product alone and retain its concentration. Hydrogen peroxide, acids, enzymes, surfactants, and every other product require separate atomic rows.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: measured chemical issue minus returns by product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`
- Sources: eu-textiles-bat-2022

###### Purchased steam for pre-treatment (`pretreatment_energy`)

Record purchased steam used by the pre-treatment route separately from electricity, purchased heat, and on-site fuels.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy or steam mass converted with the documented supplier state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`
- Sources: eu-textiles-bat-2022

###### Electricity for pre-treatment (`pretreatment_electricity`)

Record purchased electricity used by the pre-treatment route as one separate exchange.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`
- Sources: eu-textiles-bat-2022

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pretreated woven fabric (`pretreated_fabric_output`)

Record fabric transferred to coloration, finishing, or sale and declare the completed pre-treatment operations.

- Selected flow: Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`

##### Waste flows

###### Pre-treatment wastewater (`pretreatment_wastewater`)

Record wastewater volume and route, retaining pH, temperature, conductivity, COD or TOC, suspended solids, and relevant chemical-specific parameters where measured.

- Selected flow: Textile pre-treatment wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater transferred to on-site treatment, off-site treatment, or discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg pretreated fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_pretreatment_records`
- Sources: eu-textiles-bat-2022

##### Elementary flows

### Process: Dyeing or printing (`coloration`)

#### Inputs

##### Product flows

###### Fabric entering coloration (`coloration_fabric_input`)

Record the dry- or conditioned-basis fabric mass entering each dyeing or printing route.

- Selected flow: Woven cotton/man-made-fibre blend fabric, before coloration
- Flow property / unit: Mass / kg
- Amount rule: measured lot input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg coloured fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`

###### C.I. Reactive Blue 19 dye (`coloration_chemicals`)

When C.I. Reactive Blue 19 is present in the declared recipe, record that supplied dye formulation alone. Every other dye, pigment, salt, alkali, binder, or auxiliary requires a separate atomic row.

- Selected flow: C.I. Reactive Blue 19 dye formulation
- Flow property / unit: Mass / kg
- Amount rule: measured chemical issue minus returns by formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg coloured fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: eu-textiles-bat-2022

###### Coloration water (`coloration_water`)

Record supplied, reused, and recycled water separately for liquor make-up, washing, rinsing, paste preparation, and equipment cleaning.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured supplied water minus measured internal reuse returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg coloured fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: eu-textiles-bat-2022

###### Purchased steam for coloration (`coloration_energy`)

Record purchased steam used by the coloration route separately from electricity, purchased heat, and on-site fuels.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy or steam mass converted with the documented supplier state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg coloured fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: eu-textiles-bat-2022

###### Electricity for coloration (`coloration_electricity`)

Record purchased electricity used by the coloration route as one separate exchange.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg coloured fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: eu-textiles-bat-2022

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Coloured woven fabric (`coloured_fabric_output`)

Record fabric meeting the declared colour or print acceptance specification.

- Selected flow: Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted coloured fabric output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg coloured fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`

##### Waste flows

###### Coloration wastewater (`coloration_wastewater`)

Record wastewater volume and route, retaining colour, COD or TOC, pH, conductivity, and relevant metals or chemical-specific parameters where measured.

- Selected flow: Untreated coloration wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater transferred to treatment or discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg coloured fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coloration_records`
- Sources: eu-textiles-bat-2022

##### Elementary flows

### Process: Physical or chemical finishing, drying, or heat-setting (`finishing`)

#### Inputs

##### Product flows

###### Fabric entering finishing (`finishing_fabric_input`)

Record the fabric mass and incoming state for each finishing line.

- Selected flow: Woven cotton/man-made-fibre blend fabric, before finishing
- Flow property / unit: Mass / kg
- Amount rule: measured lot input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`

###### Amino-functional silicone softener (`finishing_chemicals`)

When an amino-functional silicone softener is applied, record that supplied formulation alone. Every resin, cross-linker, repellent, flame retardant, binder, or other finish requires a separate atomic row.

- Selected flow: Amino-functional silicone softener formulation
- Flow property / unit: Mass / kg
- Amount rule: measured chemical issue minus returns by formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: eu-textiles-bat-2022

###### Purchased steam for finishing (`finishing_energy`)

Record purchased steam used by finishing, drying, curing, or heat-setting separately from electricity, purchased heat, and on-site fuels.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy or steam mass converted with the documented supplier state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: eu-textiles-bat-2022

###### Electricity for finishing (`finishing_electricity`)

Record purchased electricity used by finishing, drying, curing, or heat-setting as one separate exchange.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: eu-textiles-bat-2022

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished reference fabric (`finished_fabric_output`)

Record saleable fabric meeting the declared composition, construction, colour, and finish acceptance specification.

- Selected flow: Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg normalized reference product output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: eu-pef-2021

##### Waste flows

##### Elementary flows

###### Total volatile organic carbon to air (`finishing_air_emissions`)

Record total volatile organic carbon released to air after abatement as this single monitored emission. Dust, formaldehyde, ammonia, and other substances require separate atomic elementary-flow rows.

- Selected flow: Total volatile organic carbon, to air
- Flow property / unit: Mass / kg
- Amount rule: measured total volatile organic carbon mass flow after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: eu-textiles-bat-2022

### Process: On-site wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Textile wastewater received (`wwt_wastewater_input`)

Record wastewater volume and pollutant loads received from each included process, keeping internal transfers from direct environmental emissions.

- Selected flow: Textile process wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured inflow volume and pollutant mass load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference fabric attributable to on-site treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: eu-textiles-bat-2022

###### Wastewater-treatment electricity (`wwt_treatment_inputs`)

Record electricity used by on-site wastewater treatment as one separate exchange and allocate shared treatment only to the attributable textile wastewater load.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity physically allocated to the treated wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 wastewater treated and per 1 kg reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: eu-textiles-bat-2022

###### Ferric chloride coagulant (`wwt_ferric_chloride`)

When ferric chloride is dosed, record that supplied solution alone and retain its concentration. Every other treatment reagent requires a separate atomic row.

- Selected flow: Ferric chloride solution
- Flow property / unit: Mass / kg
- Amount rule: measured reagent issue minus returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 wastewater treated and per 1 kg reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: eu-textiles-bat-2022

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge (`wwt_sludge`)

Record wet and dry solids, hazardous status, and treatment destination for generated sludge.

- Selected flow: Textile wastewater-treatment sludge
- Flow property / unit: Mass / kg dry solids and kg wet sludge
- Amount rule: measured sludge mass with measured or sampled dry-solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 wastewater treated and per 1 kg reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: eu-textiles-bat-2022

##### Elementary flows

###### Treated effluent to water (`wwt_effluent_to_water`)

Record the discharged water volume as this single elementary exchange. Add each measured pollutant load as a separate atomic elementary-flow row; keep treated water reused internally as a product flow rather than an environmental discharge.

- Selected flow: Water, to river
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference fabric attributable to on-site treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: eu-textiles-bat-2022

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | separately measurable products and processes | Avoid allocation by subdividing lines, lots, meters, and process records so that inputs, wastes, and emissions are directly assigned to the declared fabric wherever practicable. | eu-pef-2021 |
| `allocation_rule_2` | shared electricity and equipment | Allocate shared electricity and equipment services using a causal physical driver such as metered machine-hours, loom-hours, compressed-air demand, or treated textile throughput; disclose the driver and denominator. | eu-pef-2021 |
| `allocation_rule_3` | shared wet processes and utilities | Allocate shared water, steam, heat, chemicals, wastewater, and treatment using measured bath volume, liquor ratio, mass of textile treated, thermal demand, or pollutant load as appropriate; mass-only allocation is acceptable only when it represents the physical relationship. | eu-pef-2021; eu-textiles-bat-2022 |
| `allocation_rule_4` | rework and internal recycling | Keep burdens with the product route that causes rework. Credit neither internally reused yarn, fabric, size, water, nor heat as an avoided product; instead subtract verified internal returns from gross consumption and disclose the recycling loop. | eu-textiles-bat-2022 |
| `allocation_rule_5` | saleable co-products or recovered materials | When subdivision and system expansion are not practicable, use a quantified physical relationship; use economic allocation only when no defensible physical relationship exists, and disclose prices, period, sensitivity, and treatment of textile scrap. | eu-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_material_balance` | `yarn_preparation` | cotton and man-made-fibre yarn consumption and composition | purchase, issue, stock, bill-of-material, and composition records | yarn_id; fibre_type; cotton_fraction; man_made_fraction_by_type; dry_or_conditioned_mass; moisture_basis; opening_stock; receipts; issues; returns; closing_stock; product_lot | reconcile issue and stock records to product lots; verify composition by certificate or test | kg and mass fraction | each lot, aggregated monthly | at least 12 consecutive representative months or the full shorter campaign | all yarn stores and preparation lines serving the product | consumption = opening stock + receipts - returns - closing stock; assign to lots by traceable issue or bill of materials | calibrated scales; supplier certificates; composition tests; stock reconciliation; exception log |
| `cp_yarn_preparation_records` | `yarn_preparation` | sizing chemicals, electricity, prepared yarn, and waste | meters, batch sheets, chemical issues, transfer weights, and waste tickets | line_id; lot_id; prepared_yarn_mass; chemical_product; chemical_mass; electricity; waste_mass; waste_route; operating_hours | collect line or campaign records and reconcile inputs with prepared-yarn transfer and waste | kg and kWh | each batch or shift, aggregated monthly | same period as reference product | all preparation equipment and attributable room conditioning | sum by product route; allocate shared use by measured operating hours or throughput | meter calibration; chemical inventory reconciliation; waste tickets; production log |
| `cp_weaving_records` | `weaving` | yarn input, electricity, greige output, textile waste, and dust | loom counters, transfer weights, submeters, waste weights, and emission measurements | loom_id; lot_id; yarn_input; greige_output; electricity; compressed_air_driver; humidification_driver; waste_mass; dust_flow; dust_concentration | collect by loom or loom group and reconcile textile mass | kg, kWh, Nm3, and kg pollutant | each shift or lot, aggregated monthly | same period as reference product | all looms and support systems serving the product | sum direct records; allocate shared utilities by loom-hours or causal demand; calculate dust mass flow where measured | calibrated meters and scales; loom production log; abatement inspection; mass-balance exception log |
| `cp_inspection_records` | `inspection_mending` | inspected input, conforming output, rework, and rejects | roll tickets, inspection records, and waste weights | roll_id; incoming_mass; accepted_mass; rework_mass; reject_mass; trimming_mass; disposition | weigh or derive from verified roll length, width, and mass per area; record disposition | kg, m, m2, and kg/m2 | each roll or lot | same period as reference product | all inspection and mending lines serving the product | reconcile incoming mass to accepted, rework, reject, trimming, and stock change | calibrated scales; inspection specification; roll traceability; reconciliation result |
| `cp_wet_pretreatment_records` | `wet_pretreatment` | fabric, water, chemicals, energy, output, and wastewater | batch sheets, flowmeters, submeters, chemical issues, and effluent records | route; lot_id; fabric_in; fabric_out; water_supplied; water_reused; chemical_product_and_mass; electricity; steam; heat; fuel; wastewater_volume; pH; conductivity; COD_or_TOC; solids | collect per machine batch or continuous campaign and retain operation sequence | kg, m3, kWh, MJ, and parameter-specific units | each batch or campaign; water and energy at least monthly | same period as reference product | all included pre-treatment lines and attributable utilities | aggregate by route; net internal reuse; normalize to accepted output; retain losses and wastewater separately | meter calibration; recipe and chemical inventory reconciliation; laboratory QA; water and energy balance |
| `cp_coloration_records` | `coloration` | fabric, dyes and auxiliaries, water, energy, output, and wastewater | recipe, batch, meter, chemical issue, and laboratory records | route; lot_id; fabric_in; fabric_out; dye_or_pigment; auxiliary; supplied_mass; water_supplied; water_reused; electricity; steam; heat; wastewater_volume; colour; COD_or_TOC; pH; conductivity; relevant_metals | collect per dye lot or print campaign and link recipe to accepted output | kg, m3, kWh, MJ, and parameter-specific units | each batch or campaign; emissions at required monitoring frequency | same period as reference product | all included dyeing and printing lines | sum direct recipe and meter values; normalize to accepted output; keep rework and cleaning attributable | meter calibration; recipe approval; chemical stock reconciliation; colour QA; laboratory QA |
| `cp_finishing_records` | `finishing` | fabric, finish chemicals, energy, output, and direct air emissions | recipe, batch, meter, production, and stack or emission-factor records | finish_type; lot_id; fabric_in; fabric_out; formulation_and_mass; electricity; steam; heat; fuel; exhaust_flow; temperature; dust; TVOC; formaldehyde; ammonia | collect each finish and thermal-treatment campaign; measure emissions or retain documented factor and operating data | kg, kWh, MJ, Nm3, and kg pollutant | each batch or campaign; emissions at required monitoring frequency | same period as reference product | all included finishing, drying, curing, and heat-setting equipment | sum by finish route; calculate pollutant mass flow from representative concentration and exhaust flow | meter calibration; recipe and chemical inventory reconciliation; stack-test report; operating log; acceptance test |
| `cp_wastewater_treatment_records` | `wastewater_treatment` | influent, reagents, electricity, effluent, pollutant loads, and sludge | flowmeters, reagent issues, submeters, laboratory results, and sludge tickets | source_process; influent_volume; influent_concentration; effluent_volume; effluent_concentration; sample_basis; electricity; reagent_mass; sludge_wet_mass; dry_solids_fraction; destination | use flow-proportional composite sampling where appropriate; link representative samples to discharge volume | m3, kg, kWh, mg/L, and kg dry solids | flow continuous where available; parameters at permit or BAT frequency; aggregate monthly | same period as reference product | on-site treatment receiving included textile wastewater | pollutant load = representative concentration × corresponding volume; allocate shared treatment by volume and pollutant load | calibration; chain of custody; accredited laboratory result; sampling plan; sludge ticket; flow balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | yarn consumption by fibre | dry-basis yarn consumption = opening stock + receipts - returns - closing stock; multiply each yarn amount by verified fibre fractions and normalize to saleable reference fabric | stock and issue masses; moisture basis; fibre composition; reference output | kg cotton yarn equivalent and kg of each man-made fibre yarn equivalent per kg reference fabric | un-cpc-3-2025 |
| `calc_rule_2` | roll records converted to mass | fabric mass = roll length × usable width × measured mass per unit area; use matched lot values and reconcile against scale measurements where available | length; usable width; mass per unit area | kg fabric | eu-pef-2021 |
| `calc_rule_3` | process normalization | normalized amount = attributable reporting-period flow ÷ conforming process output; then link intermediate process results to the final 1 kg reference flow through measured yields | attributable flow; process output; rework; stock change; yield | row-specific amount per process output and per kg reference fabric | eu-pef-2021 |
| `calc_rule_4` | water consumption | net process water = supplied water - verified internally reused or recycled water returned to the process; separately report wastewater discharge and water embodied in product or waste | supplied water; internal reuse; wastewater volume | m3 net water per kg process output | eu-textiles-bat-2022 |
| `calc_rule_5` | energy | convert each carrier to MJ only for an additional aggregate indicator; retain original electricity, fuel, steam, and heat quantities and conversion factors | kWh electricity; fuel mass or volume and heating value; steam or heat quantity | carrier-specific amounts and MJ per kg process output | eu-textiles-bat-2022 |
| `calc_rule_6` | wastewater pollutant load | pollutant load = representative concentration × corresponding discharge volume, with unit conversion; calculate influent and effluent loads on matched sampling periods | concentration; volume; sampling period | kg pollutant per kg reference fabric | eu-textiles-bat-2022 |
| `calc_rule_7` | textile mass balance | closure = yarn and fabric inputs + attributable finish add-on - saleable fabric - textile waste - samples - stock increase; report unexplained difference relative to total textile input | textile input/output masses; finish add-on; waste; samples; stock change | kg difference and percent closure | eu-textiles-bat-2022 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity` | product identity | Retain lot-level evidence that cotton is below 85% of dry textile mass and that the non-cotton component is mainly or solely man-made fibre; identify every fibre type and declared product state. | bill of materials; supplier certificate; composition test; product specification |
| `dqr_completeness` | process and flow coverage | Cover all required operations and every conditional operation performed on the product; inventory materials, chemicals, water, energy, waste, wastewater, and direct emissions without silent cut-offs. | process flow sheet; input-output inventory; data-gap register; boundary reconciliation |
| `dqr_temporal` | reference period | Use at least 12 consecutive representative months where available; for shorter campaigns cover the full campaign and disclose seasonality, start-up, shutdown, and abnormal production. | production calendar; meter extracts; campaign records; representativeness statement |
| `dqr_technology` | route and equipment | Identify loom technology, sizing route, wet-process mode, liquor ratio or pick-up where relevant, drying or heat-setting technology, wastewater route, and abatement. | equipment list; route sheet; operating parameters; site diagram |
| `dqr_geography` | site and upstream datasets | Declare manufacturing geography and electricity, water, fuel, yarn, chemical, and treatment dataset geography; justify proxies. | site metadata; supplier location; dataset metadata; proxy justification |
| `dqr_precision` | measured and calculated amounts | Report meter and scale calibration, sampling design, allocation shares, missing-data treatment, and uncertainty or variability for material flows. | calibration certificates; laboratory QA; allocation workbook; uncertainty record |
| `dqr_consistency` | bilingual and machine projection | Use the same process ids, row ids, rule ids, controlled tokens, source ids, and normative meaning in both languages, and regenerate `structured.yaml` after canonical Markdown changes. | bilingual alignment review; deterministic projection check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR and reference-flow identity | The reference product UUID, Mass flow-property UUID, mass unit-group UUID, and kg unit shall exactly match the declared reference object. |  |
| `validation_rule_2` | fibre composition | Cotton mass fraction shall be less than 0.85, fibre fractions shall sum to 1 within declared rounding tolerance, and the non-cotton component shall be mainly or solely man-made fibre; missing fibre-type fractions are an error. | un-cpc-3-2025 |
| `validation_rule_3` | required qualifiers | Dry or conditioned basis, reference moisture, fibre fractions, weave, mass per area, usable width, product state, colour or print route, finish, geography, period, and included operations shall be present. | un-cpc-3-2025 |
| `validation_rule_4` | process-map completeness | `yarn_preparation`, `weaving`, and `inspection_mending` shall be present; each conditional process performed for the declared product shall be included, and every excluded or outsourced operation shall be disclosed with its dataset link. | eu-textiles-bat-2022 |
| `validation_rule_5` | textile mass balance | Yarn and fabric inputs, finish add-on, saleable output, waste, samples, rework, and stock change shall be reconciled on one textile mass basis; an unexplained difference outside the producer's documented tolerance is an error. | eu-textiles-bat-2022 |
| `validation_rule_6` | water, energy, chemicals, and emissions | For each included process, water, each energy carrier, process chemicals, waste, wastewater, and direct emissions shall be present or explicitly confirmed as not applicable with evidence. | eu-textiles-bat-2022 |
| `validation_rule_7` | wet-process wastewater | Wet pre-treatment, coloration, or wet finishing shall identify wastewater route, volume, and available pollutant parameters; on-site treatment shall distinguish influent transfer, treated discharge, reuse, and sludge. | eu-textiles-bat-2022 |
| `validation_rule_8` | allocation | Shared flows shall identify the allocation driver and denominator; subdivision shall be preferred, and economic allocation without a documented reason and sensitivity disclosure is an error. | eu-pef-2021 |
| `validation_rule_9` | evidence and foreground amounts | Every externally constrained rule shall cite a listed source id; where no reliable source value exists, the inventory amount shall remain a `foreground_record` requirement rather than an AI-authored range. | eu-pef-2021 |
| `validation_rule_10` | completeness and representativeness | The dataset shall disclose temporal, technological, geographical, and precision evidence plus all data gaps, proxies, cut-offs, and excluded processes. | eu-pef-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground plant-gate dataset for the production of woven cotton/man-made-fibre blend fabric. |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for garments, made-up textiles, industrial textile products, and lifecycle models when composition, construction, finish, geography, technology, and period are representative. |
| allowed_use | Modelling of the declared saleable fabric state within the reported plant-gate boundary; comparison only after aligning fibre composition, mass basis, product state, included wet processes, allocation, geography, technology, and data quality. |
| excluded_use | Fibre or yarn production; knitted, nonwoven, coated, laminated, or special fabrics; garment manufacture; use and end-of-life; or any product with cotton at or above 85% unless a separate reviewed rule explicitly applies. |
| required_metadata | PCR id; reference UUIDs; composition by fibre; dry or conditioned mass basis; moisture; weave; mass per area; width; greige/bleached/dyed/printed/finished state; colour and finish; mill and upstream geographies; technology; reporting period; included and outsourced operations; water and wastewater route; allocation; source and dataset versions kept in dataset metadata. |
| required_quality_disclosure | Completeness; temporal, technological, and geographical representativeness; precision; meter and laboratory QA; allocation shares; mass-balance closure; proxy datasets; data gaps; cut-offs; provisional ranges; and uncertainty. |
| update_trigger | Change in fibre composition or supplier route, product state, loom or wet-process technology, finish chemistry, energy or water system, wastewater treatment, allocation driver, geography, or representative performance beyond the documented variability; otherwise review at least every three years. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, CPC structure and classification resources, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-11). | Product-category identity and the CPC 26630 composition boundary. |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 of 9 December 2022 establishing BAT conclusions for the textiles industry, CELEX 32022D2508, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 (retrieved 2026-08-11). | Fabric production and weaving route; sizing and pre-treatment; dyeing and finishing; input-output inventory; water, energy, chemicals, waste, wastewater, air-emission, and monitoring rules. |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11). | Functional-unit and normalization discipline; system-boundary disclosure; allocation hierarchy; completeness; representativeness; precision; and dataset quality. |
