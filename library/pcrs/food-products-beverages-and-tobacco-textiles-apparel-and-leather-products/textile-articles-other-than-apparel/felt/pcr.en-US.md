---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.felt
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Felt

## 1. Scope and Applicability

This PCR applies to unmade-up felt classified as CPC 27921 at the factory gate, including wool or other animal-fibre felt formed by wet felting/fulling and dry mechanically entangled felt when sold as felt. It covers single-fibre and blended products, with or without a declared binder or finish, supplied in rolls, sheets, pads, or cut industrial lengths before conversion into a separately classified article.

The PCR excludes nonwovens classified as CPC 27922, felt floor coverings, garments, hat bodies and finished headgear, made-up technical articles, coated or impregnated fabrics classified elsewhere, paper felt, and downstream fabrication into a final article. A producer shall declare the fibre composition, felt-forming route, basis weight, thickness test condition, binder or finish add-on, recycled content, moisture/conditioning basis, and packaging inclusion. The process map is a data-collection model; route-inapplicable cards are omitted with documented justification rather than assigned zero by default. `unsd-cpc-3-2025`, `us-epa-textile-study-1979`, and `us-epa-textile-development-1982` support the category boundary and route decomposition.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.felt |
| classification_refs | CPC 3.0: 27921 Felt |
| covered_products | Unmade-up felt in rolls, sheets, pads, or industrial cut lengths, made by wet felting/fulling or mechanical needling and sold as felt |
| excluded_products | CPC 27922 nonwovens; felt floor coverings; felt garments or headgear; made-up technical articles; paper felt; coated or impregnated textile fabrics classified elsewhere |
| representative_product | Factory-gate finished felt with declared fibre composition, forming route, basis weight, thickness, finish, and packaging state |
| production_route | Fibre receipt, opening/blending and web or batt formation; conditional needle felting or wet felting/fulling; drying, finishing, inspection, cutting and packing |
| market_state | Conditioned, dry-basis-declared finished felt at plant gate, packaged or unpackaged as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of finished felt meeting the declared fibre composition, construction, and performance specification |
| How much | 1 kg finished felt on the declared conditioned or dry-mass basis |
| How well | Conforms to the declared basis weight, thickness under stated pressure, fibre composition, route, binder/finish add-on, and acceptance specification |
| How long or cycle | One production lot at the factory gate; no use-life equivalence is asserted |
| reference_flow_link | The net accepted mass of finished felt leaving final inspection and included in the declared packaging state |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Felt `144717eb-3301-402a-89c8-3ba5a969425a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | textile fibre name and percentage by mass; virgin/recycled share; wet-felted/fulled or needle-felted route; basis weight in g/m2; thickness in mm and applied pressure/test method; moisture/conditioning basis; binder and finish identity/add-on; colour or dyeing state; roll/sheet dimensions; packaging inclusion; production geography and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished felt | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1 kg of accepted finished felt on the declared conditioned or dry-mass basis; state which basis is used. |
| `basis_weight` | Finished felt specification | Mass per unit area | g/m2 | Determine and report mass per unit area using ISO 9073-1:2023 when applicable to the tested construction, or a declared equivalent validated method. |
| `felt_thickness` | Finished felt specification | Length | mm | Report thickness together with applied pressure and test method; ISO 9073-2:1995 applies when the construction falls within its nonwoven scope. |
| `conditioning_basis` | Physical testing and reference mass | Temperature and relative humidity | degC and % RH | Condition and test textile specimens using ISO 139:2005 or disclose the agreed alternative atmosphere; do not mix conditioned and oven-dry masses without conversion. |
| `fibre_composition` | Finished felt and fibre inputs | Mass fraction | % by mass | Use the applicable regulated textile fibre names and retain the sampling, analysis method, result, and accuracy evidence used to establish composition. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Textile fibres and any binder, processing chemical, packaging component, purchased energy carrier, and water are received at the felt manufacturing site with supplier identity and mass state declared. |
| starting_condition_role | These received inputs start foreground manufacture; their production remains in linked upstream datasets. |
| product_classification_scope | Foreground output is unmade-up felt within CPC 27921, before conversion into carpets, garments, headgear, or other made-up articles. |
| recursive_input_rule | Internally produced felt webs and felt intermediates remain linked foreground exchanges; purchased felt used as an input is recorded as a distinct upstream product and is not relabelled as fibre. |
| upstream_dataset_requirement | Link composition- and geography-appropriate datasets for each purchased fibre, chemical, water supply, fuel, electricity supply, and packaging material. |
| disclosure | Declare fibre composition and origin, recycled share, production route, wet-processing operations, binder/finish recipe, energy supply, water source, waste destinations, allocation, mass basis, packaging boundary, geography, and reference period. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground felt manufacture | Include receipt and handling of inputs, fibre preparation, web/batt formation, the applicable felting route, drying, finishing, inspection, cutting, rework, waste handling, and packing through accepted factory-gate felt. | `us-epa-textile-study-1979`; `us-epa-textile-development-1982` |
| `boundary_route_disclosure` | Conditional operations | Include wet fulling, washing, dyeing, binder application, thermal treatment, and on-site combustion only when performed; disclose excluded route steps and the evidence for non-applicability. | `ec-jrc-textiles-bref-2023`; `us-epa-textile-development-1982` |
| `boundary_upstream_links` | Purchased inputs | Model upstream production in linked datasets rather than duplicating it in the foreground process, and preserve supplier/geography/technology matching. | `ec-pef-method-2021`; `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_fibre_web` | Fibre preparation and web or batt formation | required | All felt production | Receive, open, blend, card and form the declared fibre web or batt | 1 kg accepted finished felt |
| `p_needle_felting` | Mechanical needle felting | conditional | Declared needle-felted route | Mechanically entangle the fibre web with barbed needles | 1 kg accepted finished felt |
| `p_wet_felting` | Wet felting and fulling | conditional | Declared wet-felted or fulled route | Interlock feltable fibres through mechanical working, moisture, heat and any declared chemical aid | 1 kg accepted finished felt |
| `p_finishing_packing` | Drying, finishing, inspection, cutting and packing | required | All felt production; individual finish and fuel cards remain conditional | Bring felt to declared sale specification and factory-gate state | 1 kg accepted finished felt |

### Process: Fibre preparation and web or batt formation (`p_fibre_web`)

#### Inputs

##### Product flows

###### Wool fibre received for felt production (`raw_wool_fibre`)

Record wool fibre only for products whose declared composition contains wool; preserve grade, origin, recycled share, clean/greasy state, and moisture basis.

- Selected flow: Wool fibre
- Flow property / unit: Mass / kg
- Amount rule: measured net wool fibre issued to the production lot, adjusted for stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_receipts`
- Sources: `eu-textile-regulation-1007-2011`; `us-epa-textile-study-1979`

###### Polyester staple fibre received for felt production (`polyester_staple_fibre`)

Record polyester staple fibre only when present, including polymer grade, fibre dimensions, recycled share, and supplier lot.

- Selected flow: Polyester staple fibre
- Flow property / unit: Mass / kg
- Amount rule: measured net polyester staple fibre issued to the production lot, adjusted for stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_receipts`
- Sources: `eu-textile-regulation-1007-2011`; `us-epa-textile-study-1979`

###### Viscose staple fibre received for felt production (`viscose_staple_fibre`)

Record viscose staple fibre only when present, including fibre dimensions, supplier grade, and recycled or recovered content claim.

- Selected flow: Viscose staple fibre
- Flow property / unit: Mass / kg
- Amount rule: measured net viscose staple fibre issued to the production lot, adjusted for stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_receipts`
- Sources: `eu-textile-regulation-1007-2011`; `us-epa-textile-study-1979`

###### Electricity for opening, blending and web formation (`electricity_fibre_prep`)

Record metered electricity consumed by fibre opening, blending, carding, web laying, dust extraction, and directly associated auxiliaries.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: allocated submeter reading for the production lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_prep_electricity`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fibre web or batt (`prepared_fibre_web`)

Record the measured intermediate transferred to the applicable felting route, with fibre blend and web construction linked to the lot.

- Selected flow: Prepared textile fibre web
- Flow property / unit: Mass / kg
- Amount rule: measured web or batt mass transferred from fibre preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_web_output`
- Sources: `us-epa-textile-study-1979`

##### Waste flows

###### Fibre preparation waste (`fibre_preparation_waste`)

Record collected fibre loss from opening, carding, web formation, filters, and housekeeping separately from material internally returned to production.

- Selected flow: Textile fibre preparation waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste dispatched from the process after subtracting documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_prep_waste`
- Sources: `ec-jrc-textiles-bref-2023`

##### Elementary flows

###### Particulate matter released during fibre preparation (`particulate_matter_fibre_prep`)

Record only measured or permit-supported particulate release after abatement, with particle fraction and air compartment stated.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: monitored or tested particulate release for the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_prep_pm`
- Sources: `ec-jrc-textiles-bref-2023`

### Process: Mechanical needle felting (`p_needle_felting`)

#### Inputs

##### Product flows

###### Prepared fibre web entering needling (`prepared_web_input`)

Record the specific prepared web transferred into the needle loom and link it to the corresponding output from `p_fibre_web`.

- Selected flow: Prepared textile fibre web
- Flow property / unit: Mass / kg
- Amount rule: measured web mass entering the needle-felting line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_needling_material`
- Sources: `us-epa-needle-punched-filtration-1976`

###### Electricity for needle felting (`electricity_needling`)

Record electricity consumed by pre-needling, needle looms, conveyors, extraction, and directly associated controls.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: allocated submeter reading for the needling production lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_needling_electricity`
- Sources: `us-epa-needle-punched-filtration-1976`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Needle-felted intermediate (`needle_felt_intermediate`)

Record the intermediate leaving needling with punch density, penetration, number of passes, basis weight, and width linked to the lot.

- Selected flow: Needle-felted textile intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_needling_outputs`
- Sources: `us-epa-needle-punched-filtration-1976`

##### Waste flows

###### Needle-line trim and reject waste (`needle_trim_waste`)

Record edge trim, start-up material, broken-web reject, and off-spec needled material leaving the process after documented internal reuse.

- Selected flow: Needle-felt textile waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste dispatched from the needle-felting process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_needling_outputs`
- Sources: `us-epa-needle-punched-filtration-1976`

##### Elementary flows

### Process: Wet felting and fulling (`p_wet_felting`)

#### Inputs

##### Product flows

###### Wool-rich batt entering wet felting (`wool_batt_input`)

Record the declared wool-rich batt transferred into wet felting or fulling, including blend, conditioning state, and internal transfer identity.

- Selected flow: Wool-rich textile fibre batt
- Flow property / unit: Mass / kg
- Amount rule: measured batt mass entering wet felting or fulling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials`
- Sources: `us-epa-textile-study-1979`

###### Process water for wet felting and washing (`process_water_wet_felting`)

Record supplied water entering wetting, fulling, washing, and rinsing within this process; do not net wastewater against intake.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: process submeter reading or tank-volume record for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_water`
- Sources: `us-epa-textile-development-1982`; `ec-jrc-textiles-bref-2023`

###### Sodium carbonate used as wet-felting aid (`sodium_carbonate_wet_felting`)

Record sodium carbonate only when the approved product recipe uses it; retain chemical grade, concentration, and issue record.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: measured net chemical issued to the wet-felting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials`
- Sources: `us-epa-textile-study-1979`

###### Purchased steam for wet felting (`steam_wet_felting`)

Record purchased steam only when it crosses the site boundary for bath heating; state pressure and condensate treatment.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam supplied to wet felting and fulling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_steam`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-felted intermediate (`wet_felt_intermediate`)

Record the felt leaving wet felting/fulling with shrinkage, moisture, washing status, and mass basis linked to the lot.

- Selected flow: Wet-felted textile intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate mass transferred to drying and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_outputs_waste`
- Sources: `us-epa-textile-study-1979`; `us-epa-textile-development-1982`

##### Waste flows

###### Wet-felting wastewater (`wet_felting_wastewater`)

Record the wastewater transferred to on-site or off-site treatment from wetting, fulling, washing, and rinsing.

- Selected flow: Wet-felting wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume associated with the wet-felting production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_outputs_waste`
- Sources: `us-epa-textile-development-1982`; `ec-jrc-textiles-bref-2023`

###### Wool-fibre sludge from wet processing (`wool_fibre_sludge`)

Record captured fibre solids and treatment sludge separately from liquid wastewater, with destination documented.

- Selected flow: Wool-fibre wet-processing sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet and dry solids mass dispatched, with the reported mass basis stated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_outputs_waste`
- Sources: `ec-jrc-textiles-bref-2023`

##### Elementary flows

### Process: Drying, finishing, inspection, cutting and packing (`p_finishing_packing`)

#### Inputs

##### Product flows

###### Needle-felted intermediate entering finishing (`needle_felt_input_finishing`)

Record this input only for the needle-felted route and link it to the corresponding process output.

- Selected flow: Needle-felted textile intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `us-epa-textile-study-1979`

###### Wet-felted intermediate entering finishing (`wet_felt_input_finishing`)

Record this input only for the wet-felted route and link it to the corresponding process output.

- Selected flow: Wet-felted textile intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate mass entering drying and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `us-epa-textile-development-1982`

###### Electricity for drying, finishing and packing (`electricity_finishing`)

Record metered electricity for dryers, calendars, presses, cutters, extraction, inspection, and packing equipment.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: allocated submeter reading for the finishing production lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources: `ec-jrc-textiles-bref-2023`

###### Natural gas combusted for drying (`natural_gas_drying`)

Record natural gas only where it is combusted within the foreground boundary for drying or heat setting.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered gas consumption using the recorded lower or higher heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources: `ec-jrc-textiles-bref-2023`

###### Acrylic latex binder applied in finishing (`acrylic_latex_binder`)

Record acrylic latex binder only when present, using supplied wet mass and separately declared solids fraction.

- Selected flow: Acrylic latex binder
- Flow property / unit: Mass / kg
- Amount rule: measured net wet binder issued to the lot, with solids content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `us-epa-textile-study-1979`

###### Corrugated paperboard box used for felt (`corrugated_paperboard_box`)

Record corrugated boxes only when included in the declared factory-gate packaging state.

- Selected flow: Corrugated paperboard box
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass issued to accepted finished felt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021`

###### Low-density polyethylene packaging film used for felt (`ldpe_packaging_film`)

Record LDPE film only when included in the declared factory-gate packaging state.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured film mass issued to accepted finished felt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished felt (`finished_felt`)

Record only saleable felt passing final inspection; rejected material belongs in the separate waste or rework record.

- Selected flow: Felt `144717eb-3301-402a-89c8-3ba5a969425a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net accepted mass on the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_felt`
- Sources: `unsd-cpc-3-2025`; `iso-9073-1-2023`; `iso-139-2005`

##### Waste flows

###### Felt cutting offcuts and rejected finished felt (`felt_offcuts`)

Record cutting offcuts and off-spec finished felt dispatched from the process after subtracting documented internal rework.

- Selected flow: Felt offcut waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `ec-jrc-textiles-bref-2023`

###### Finishing wastewater (`finishing_wastewater`)

Record finishing and equipment-cleaning wastewater only when wet finishing or binder cleanup occurs in this process.

- Selected flow: Textile finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater transferred to treatment for the finishing production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `ec-jrc-textiles-bref-2023`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas drying (`carbon_dioxide_fossil_drying`)

Record stack-measured fossil carbon dioxide when natural gas is combusted within the foreground boundary.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission for the production period; do not substitute an unsourced generic factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

###### Nitrogen oxides from on-site natural-gas drying (`nitrogen_oxides_drying`)

Record monitored nitrogen oxides with the reported species convention and air compartment when on-site combustion occurs.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: monitored stack emission for the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished felt
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `ec-jrc-textiles-bref-2023`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared equipment, utilities and treatment | First subdivide by line, process, lot, meter, time record, or treatment campaign so allocation is avoided wherever practicable. | `iso-14044-2006`; `ec-pef-method-2021` |
| `allocation_physical` | Unavoidable shared foreground exchanges | If subdivision is not practicable, allocate using a documented physical causal driver such as machine time, metered energy, bath volume, or treated mass; do not default to economic allocation without justification. | `iso-14044-2006`; `ec-pef-method-2021` |
| `allocation_rework` | Internally recycled web, edge trim and off-spec felt | Keep internal rework inside the foreground system and report gross generation and returned mass separately; assign no avoided-product credit within the foreground inventory. | `ec-pef-method-2021` |
| `allocation_external_recycling` | Material leaving for recycling | Record the actual waste flow and destination; apply any end-of-life or recycled-content treatment only in the downstream study method and disclose it separately from foreground measured mass. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fibre_receipts` | `p_fibre_web` | `raw_wool_fibre`; `polyester_staple_fibre`; `viscose_staple_fibre` | weighbridge, scale, issue and stock records | material identity; supplier lot; gross/tare/net mass; moisture basis; opening stock; closing stock; returns; recycled share | calibrated weighing and inventory reconciliation | kg | each receipt and issue | representative production period, minimum one complete lot | all fibre stores feeding the declared product | net issued mass = issues + opening stock - closing stock - documented returns | calibration certificate; supplier specification; composition analysis; stock reconciliation |
| `cp_fibre_prep_electricity` | `p_fibre_web` | `electricity_fibre_prep` | submeter record | meter id; start/end reading; multiplier; downtime; products and mass processed | dedicated meter or documented shared-meter allocation | kWh | shift or batch | same period as product mass | fibre preparation line and associated extraction | sum corrected readings and allocate only documented shared loads | meter calibration; reading export; allocation log |
| `cp_fibre_web_output` | `p_fibre_web` | `prepared_fibre_web` | intermediate transfer record | lot id; blend; web orientation; basis weight; width; conditioned mass | calibrated in-line or batch weighing | kg | each transfer | complete lot | fibre preparation output | sum accepted transfers to each felting route | scale check; lot genealogy; operator sign-off |
| `cp_fibre_prep_waste` | `p_fibre_web` | `fibre_preparation_waste` | waste container record | waste type; fibre composition; gross/tare/net mass; internal return; destination | container weighing and dispatch reconciliation | kg | each container | same period as product mass | opening, carding, laying, filters and housekeeping | dispatched mass minus documented internal return | scale calibration; waste manifest; reuse log |
| `cp_fibre_prep_pm` | `p_fibre_web` | `particulate_matter_fibre_prep` | stack or workplace-exhaust monitoring | sampling location; particle fraction; concentration; gas volume; operating hours; abatement status | applicable validated monitoring method | kg | permit or campaign frequency | representative operation | all relevant exhaust points | concentration times corrected gas volume, summed by compartment | laboratory report; method; detection limit; operating log |
| `cp_needling_material` | `p_needle_felting` | `prepared_web_input` | transfer and scale record | lot id; web mass; blend; width; basis weight | calibrated weighing | kg | each lot | complete needle-felting lot | needle line input | sum transferred web mass | scale check; lot genealogy |
| `cp_needling_electricity` | `p_needle_felting` | `electricity_needling` | submeter record | meter readings; multiplier; operating time; product mass | dedicated meter or documented shared-meter allocation | kWh | shift or batch | same period as product mass | needle looms and associated equipment | sum corrected readings | calibration; reading export; allocation log |
| `cp_needling_outputs` | `p_needle_felting` | `needle_felt_intermediate`; `needle_trim_waste` | production and waste records | good intermediate mass; punch density; penetration; passes; trim/reject mass; internal rework; destination | calibrated weighing and lot reconciliation | kg | each lot | complete needle-felting lot | needle line | report good output, gross rejects and internal return separately | scale check; machine recipe; waste manifest; lot reconciliation |
| `cp_wet_materials` | `p_wet_felting` | `wool_batt_input`; `sodium_carbonate_wet_felting` | scale, recipe and issue record | lot id; batt mass; chemical identity; grade; concentration; issued/returned mass | calibrated weighing and approved recipe reconciliation | kg | each batch | complete wet-felting batch | wet-felting/fulling equipment | net issued mass by atomic material | scale calibration; SDS/specification; signed recipe and batch sheet |
| `cp_wet_water` | `p_wet_felting` | `process_water_wet_felting` | water submeter or tank record | source; start/end reading; tank volume; batch id; rinse count | calibrated submeter or verified tank-volume calculation | m3 | batch or shift | same period as product mass | wetting, fulling, washing and rinsing | gross intake without netting wastewater | calibration; meter export; batch sheet |
| `cp_wet_steam` | `p_wet_felting` | `steam_wet_felting` | steam meter record | mass/energy reading; pressure; condensate return; supplier boundary | calibrated steam meter | MJ | batch or shift | same period as product mass | wet-felting heat users | sum supplied steam on declared energy basis | calibration; pressure record; supplier invoice |
| `cp_wet_outputs_waste` | `p_wet_felting` | `wet_felt_intermediate`; `wet_felting_wastewater`; `wool_fibre_sludge` | output scale, effluent meter and waste records | intermediate mass/moisture; effluent volume; sludge wet/dry mass; destination | calibrated weighing, flow metering and dispatch reconciliation | kg or m3 | each batch or discharge | complete wet-felting batch and matching treatment period | wet process and hand-off to treatment | report each atomic output separately; state wet/dry basis | calibration; laboratory solids result; waste manifest; lot reconciliation |
| `cp_finishing_materials` | `p_finishing_packing` | `needle_felt_input_finishing`; `wet_felt_input_finishing`; `acrylic_latex_binder` | transfer, scale, recipe and issue records | intermediate id/mass; binder identity; wet mass; solids fraction; returns | calibrated weighing and recipe reconciliation | kg | each lot | complete finishing lot | finishing line | net issued mass by atomic material | scale calibration; supplier specification; signed recipe; lot genealogy |
| `cp_finishing_energy` | `p_finishing_packing` | `electricity_finishing`; `natural_gas_drying` | electricity and gas meter records | readings; multipliers; heating-value basis; operating time; product mass | calibrated meters and documented shared-meter allocation | kWh or MJ | shift or batch | same period as product mass | dryers, calendars, cutters and packing equipment | sum corrected readings by energy carrier | calibration; meter export; invoice; allocation log |
| `cp_packaging` | `p_finishing_packing` | `corrugated_paperboard_box`; `ldpe_packaging_film` | packaging issue record | material identity; supplier lot; unit mass; units issued; returns; included product mass | count times verified unit mass or direct weighing | kg | each packing lot | complete product lot | packing area | net issued mass by packaging component | unit-mass check; supplier specification; issue/return record |
| `cp_finished_felt` | `p_finishing_packing` | `finished_felt` | final scale and inspection record | lot id; gross/tare/net mass; conditioning basis; basis weight; thickness/pressure; composition; route; finish; accepted/rejected status | calibrated weighing and specification testing | kg | each accepted lot | complete production lot | final inspection and dispatch boundary | sum accepted net mass only | calibration; ISO/equivalent test reports; certificate of analysis; inspection release |
| `cp_finishing_wastes` | `p_finishing_packing` | `felt_offcuts`; `finishing_wastewater` | waste scale, effluent meter and dispatch record | waste identity; mass/volume; internal rework; treatment destination; discharge period | calibrated weighing or flow metering | kg or m3 | each container or discharge | same period as product mass | cutting, finishing and cleanup | report dispatched waste after subtracting documented internal return | calibration; waste manifest; effluent record; rework log |
| `cp_combustion_emissions` | `p_finishing_packing` | `carbon_dioxide_fossil_drying`; `nitrogen_oxides_drying` | stack monitoring record | pollutant species; concentration; gas volume; oxygen correction; operating hours; fuel use | applicable validated stack test or continuous monitoring | kg | permit or campaign frequency | representative combustion operation | on-site natural-gas exhaust points | calculate from measured concentration and corrected gas volume only | test report; method; calibration gas; detection limit; operating log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = period or lot amount / accepted finished felt mass on the same declared mass basis | atomic flow amount; accepted `finished_felt` mass | amount per 1 kg finished felt | `iso-14044-2006`; `ec-pef-method-2021` |
| `calc_fibre_issue` | Fibre inputs | net fibre issued = issues + opening stock - closing stock - supplier returns; internal returned fibre remains separately documented | issue, stock and return records | net kg fibre input | `ec-pef-method-2021` |
| `calc_fibre_composition` | Finished-felt composition | calculate percentage by mass using the declared regulatory or validated analytical method and report agreed moisture allowance and accuracy | test result; sample pretreatment; moisture allowance; component masses | fibre percentage by mass | `eu-textile-regulation-1007-2011` |
| `calc_mass_reconciliation` | Each process and complete foreground system | compare atomic mass inputs with product outputs, separately measured wastes, stock change and measured releases; investigate material unexplained residuals rather than assigning them to a generic flow | input/output masses; stock change; moisture change; emissions | signed mass-reconciliation record | `iso-14044-2006`; `ec-pef-method-2021` |
| `calc_shared_resource` | Shared meters and treatment | allocate only after subdivision is impracticable, using the documented physical causal driver selected under `allocation_physical` | shared total; causal-driver values | allocated atomic flow amount | `iso-14044-2006`; `ec-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product, intermediates and purchased inputs | Preserve supplier/lot identity, fibre composition, route, recycled share, binder/finish, moisture basis, and Tiangong UUID decision for every used flow. | supplier specifications; lot genealogy; composition test; manifest UUID decision |
| `dq_measurement` | Foreground quantities | Use calibrated meters or scales; retain reading interval, multiplier, corrections, detection limits, and allocation records. | calibration certificates; raw exports; laboratory reports; signed calculations |
| `dq_temporal` | Foreground dataset | Cover a representative period that includes all declared routes and at least one complete production lot; disclose shutdown, start-up, and abnormal-event treatment. | production calendar; lot list; exception log |
| `dq_completeness` | Inventory | Reconcile all applicable process cards and document non-applicability; keep fibres, energy carriers, packaging components, wastes, and emissions as their individual concrete exchanges. | completed applicability matrix; mass reconciliation; inventory review |
| `dq_testing` | Basis weight, thickness and composition | State test method, specimen conditioning, sample size, applied pressure where relevant, result and uncertainty/accuracy. | ISO 139, ISO 9073-1/2 or declared equivalent test reports; composition analysis |
| `dq_uuid` | UUID-bearing and UUID-free rows | Use a UUID only after hybrid candidate discovery and public state100 direct read confirm exact name, type, CPC or role, flow property, and unit; retain row-specific rejection reasons otherwise. | Tiangong readback evidence; manifest lookup decisions |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require the accepted state100 Felt product-flow UUID, CPC 27921 identity, Mass property UUID, 1 kg unit, and all required qualifiers. | `unsd-cpc-3-2025` |
| `validate_scope` | Product classification | Reject nonwovens, floor coverings, garments, headgear, paper felt, and other separately classified made-up products from this PCR. | `unsd-cpc-3-2025` |
| `validate_route` | Process completeness | Require `p_fibre_web` and `p_finishing_packing`; require at least one of `p_needle_felting` or `p_wet_felting`, and evidence for every omitted conditional operation. | `us-epa-textile-study-1979`; `us-epa-textile-development-1982` |
| `validate_atomic_flows` | Inventory | Reject collection labels, combined energy carriers, unspecified fibre mixtures, combined packaging, combined wastes, and any card whose selected flow is not one atomic exchange. | `iso-14044-2006` |
| `validate_mass_basis` | Normalization | Require all numerator records and accepted product mass to use the same period and declared conditioning/dry-mass basis. | `iso-139-2005`; `iso-14044-2006` |
| `validate_quality_tests` | Product specification | Require basis-weight, thickness, conditioning, and composition methods with applicable result metadata and declared alternatives where ISO 9073 scope does not apply. | `iso-9073-1-2023`; `iso-9073-2-1995`; `iso-139-2005`; `eu-textile-regulation-1007-2011` |
| `validate_allocation` | Shared resources and wastes | Require documented subdivision attempt, physical causal driver when allocation remains, and separate gross waste/internal-rework records. | `iso-14044-2006`; `ec-pef-method-2021` |
| `validate_uuid_status` | All inventory rows | Confirm accepted UUIDs by hybrid and state100 direct read; require every UUID-free row to retain its specific rejection reason in manifest review metadata. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground felt manufacturing dataset suitable for review and later publication as a secondary or background dataset |
| downstream_use | LCA process datasets and lifecycle models requiring CPC 27921 felt at the factory gate |
| allowed_use | The declared fibre composition, felt-forming route, basis weight, thickness, finish, geography, technology, mass basis and packaging state match the downstream system |
| excluded_use | Nonwovens, felt floor coverings, made-up felt articles, paper felt, or products with materially different fibre chemistry, route, finish, performance, geography, or packaging boundary |
| required_metadata | PCR id/version; CPC 27921; UUID decision; fibre composition and recycled share; wet/needle route; basis weight; thickness and pressure; conditioning basis; binder/finish; packaging; geography; technology; reference period; allocation; data quality; waste destinations |
| required_quality_disclosure | Primary-data share, meter and test coverage, sampling and conditioning methods, composition method, mass reconciliation, allocation, missing UUIDs, proxy upstream datasets, abnormal events, and review status |
| update_trigger | Change in fibre blend or recycled share, felt-forming route, binder/finish, basis weight or thickness class, energy/water system, waste treatment, packaging, site/technology, allocation method, Tiangong identity, source standard, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure and explanatory notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 27921 identity, adjacent exclusions and product boundary |
| `us-epa-textile-study-1979` | official_guidance | US EPA, Technical Study Report: Textile Mills Point Source Category, NEPIS 9101NAZP, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101NAZP.TXT | Felt material identity; web formation; mechanical, moisture, heat and chemical action; fibre preparation, bonding, drying and finishing decomposition |
| `us-epa-textile-development-1982` | official_guidance | US EPA, Development Document for Effluent Limitations Guidelines and Standards for the Textile Mills Point Source Category, 1982, https://19january2021snapshot.epa.gov/sites/static/files/2016-04/documents/textile-mills_dd_1982.pdf | Felted-fabric route, fulling/washing water use, wastewater and process-boundary completeness |
| `us-epa-needle-punched-filtration-1976` | official_guidance | US EPA, Efficient Use of Fibrous Structures in Filtration, NEPIS 91015XYA, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=91015XYA.TXT | Needle-punching mechanism, web passes, needling parameters and needle-felt process records |
| `ec-jrc-textiles-bref-2023` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, EUR 31392 EN, DOI 10.2760/355887, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874 | Fibre preparation, wool fulling, finishing, water/wastewater, energy, emissions monitoring and data-quality controls |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation C(2021) 9332 and Annexes on Environmental Footprint methods, https://environment.ec.europa.eu/document/download/cb899bd7-bb06-491d-9989-c856a401fcd0_en | System modelling, foreground data quality, allocation, recycling disclosure and packaging boundary |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Inventory, goal/scope, allocation, reporting, quality and validation principles |
| `iso-9073-1-2023` | standard | ISO 9073-1:2023, Nonwovens — Test methods — Part 1: Determination of mass per unit area, https://www.iso.org/standard/83590.html | Applicable basis-weight measurement and reporting |
| `iso-9073-2-1995` | standard | ISO 9073-2:1995, Textiles — Test methods for nonwovens — Part 2: Determination of thickness, https://www.iso.org/standard/16652.html | Applicable thickness measurement under specified pressure |
| `iso-139-2005` | standard | ISO 139:2005, Textiles — Standard atmospheres for conditioning and testing, https://www.iso.org/standard/35179.html | Conditioning and physical-test atmosphere |
| `eu-textile-regulation-1007-2011` | standard | Regulation (EU) No 1007/2011 on textile fibre names, labelling and quantitative analysis, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1007 | Fibre naming, mass composition, sampling/analysis and accuracy evidence |
