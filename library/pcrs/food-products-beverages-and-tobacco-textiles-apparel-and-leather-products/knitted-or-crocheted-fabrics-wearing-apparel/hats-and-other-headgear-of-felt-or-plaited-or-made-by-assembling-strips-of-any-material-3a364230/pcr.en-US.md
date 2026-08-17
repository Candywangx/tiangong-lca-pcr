---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hats-and-other-headgear-of-felt-or-plaited-or-made-by-assembling-strips-of-any-material-3a364230
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hats and other headgear of felt, plaited strips, knitted or crocheted material, lace or other textile fabric; hair-nets

## 1. Scope and Applicability

This PCR governs factory-gate foreground data production for accepted finished hats, textile headgear and hair-nets within CPC 28262. It covers products made by blocking a felt body, sewing or otherwise assembling plaited strips, knitting or crocheting yarn, and cutting and assembling lace or other textile fabric in the piece. The declared route may combine these constructions.

The boundary starts with the purchased material state declared by the data producer and ends with accepted finished headgear prepared for dispatch. It includes in-house body formation, cutting, blocking, wet finishing, sewing, trimming, inspection and packaging when performed. Upstream production of purchased yarn, fabric, felt bodies, plaits, chemicals, utilities and packaging is represented by compatible upstream datasets rather than recreated inside the foreground inventory.

Hat forms, bodies and hoods sold as unfinished products under CPC 28261 are outside the finished-product reference flow. Safety headgear, plastics or rubber headgear, asbestos headgear, parts and foundations classified outside CPC 28262, fur-only headgear, exceptional one-off heritage pieces, distribution, use and end-of-life are excluded. A broader study may add those life-cycle stages without changing this factory-gate reference flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hats-and-other-headgear-of-felt-or-plaited-or-made-by-assembling-strips-of-any-material-3a364230` |
| classification_refs | CPC 3.0 `28262` |
| covered_products | Finished felt hats; hats assembled from plaits or strips of any material; knitted or crocheted textile hats and headgear; headgear made from lace or other textile fabric in the piece; textile hair-nets |
| excluded_products | Unfinished hat forms, bodies, hoods, plateaux and manchons; safety headgear; rubber, plastics or asbestos headgear; headgear parts and foundations; products outside CPC 28262; distribution, use and end-of-life services |
| representative_product | One accepted finished textile headgear item from a declared felt, plaited-strip, knitted/crocheted, lace or textile-piece route |
| production_route | Declared combination of body formation or cutting, blocking/shaping where applicable, conditional wet finishing, final assembly/trimming/inspection and packaging |
| market_state | Finished manufactured headgear at the factory gate, fit for the declared commercial specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of accepted finished CPC 28262 headgear at the factory gate |
| How much | 1 kg net finished product mass, excluding packaging |
| How well | Conforms to the declared product type, material construction, size, finish, component specification and acceptance criteria |
| How long or cycle | One reported production period; no consumer service-life claim is included |
| reference_flow_link | The accepted net mass output of the packaging process, normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg accepted finished headgear, excluding packaging |
| Reference product flow | Hats and other headgear, of felt, or plaited or made by assembling strips of any material, or knitted or crocheted or made up from lace or other textile fabric in the piece, hair-nets `b00baec8-ce3f-4e11-99c7-8a40167d2f4f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type; principal material and fibre composition; construction route; reference size or dimensions; finished item count per kg; felt-body or plait source where applicable; knit or crochet specification where applicable; wet-finishing operations; lining, sweatband, frame, elastic and trim configuration; facility geography; production period; packaging configuration |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | accepted finished headgear | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished items without primary, secondary or tertiary packaging; normalize all inventory results to exactly 1 kg net product. |
| `item_to_mass_conversion` | records held by item count | Mass | kg | Record counted items and a representative measured net mass for the same product specification and period; use their ratio to convert counts to kilograms. |
| `textile_area_to_mass` | fabric records held by area or length | Mass | kg | Use product-specific measured grammage and width or measured issued/returned roll mass; do not apply an uncited generic conversion. |
| `thermal_energy_consistency` | steam, hot water and directly burned fuel | Energy or Mass | MJ, kWh or kg | Preserve the metered carrier unit and record pressure/temperature or lower heating value needed for conversion; keep steam, hot water, natural gas and LPG as separate exchanges. |
| `chemical_formulation_mass` | dye, stiffener, water-repellent and detergent | Mass | kg | Record delivered formulation mass and, where relevant, active content separately; do not combine formulations into one chemical row. |
| `packaging_net_separation` | packaging materials | Mass | kg | Measure each packaging component separately and exclude all packaging mass from the reference product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased yarn, lace or finished textile fabric, felt hat body, plaited strip or shape, trims, chemicals and packaging at the state in which each first enters the reporting facility |
| starting_condition_role | Foreground entry point for the declared manufacturing route |
| product_classification_scope | Finished CPC 28262 headgear only; purchased CPC 28261 hat bodies remain upstream inputs and do not become the reference product until finished to the declared specification |
| recursive_input_rule | A purchased finished headgear input within the same product category is recorded as one upstream product input with supplier dataset identity and mass; its manufacture is not recursively reconstructed |
| upstream_dataset_requirement | Each purchased material, utility, chemical and packaging input requires a geographically and technologically representative upstream dataset whose material state matches the declared input |
| disclosure | Declare facility and subcontractor coverage, purchased starting states, included route processes, omitted conditional processes, utility supply mode, wet-finishing operations, waste destinations and packaging configuration |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground system | Include every in-scope operation from the declared purchased material states through accepted finished and packaged headgear at the factory gate. | `afw-pefcr-v3-1-2025`; `ec-pef-method-2021` |
| `boundary_route_disclosure` | production route | Identify whether the product is felt-blocked, plaited-strip assembled, knitted/crocheted, cut from lace or other textile fabric, or a documented combination; include every route step actually performed. | `un-cpc-3-0-28262`; `ilo-isco-68-hatmaking`; `historic-england-plaiters-lea-2011` |
| `boundary_wet_finishing` | wet finishing | Include washing, dyeing, stiffening, proofing and associated drying only when performed in the foreground; record water, each chemical formulation, utilities, wastewater and direct releases separately. | `jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025` |
| `boundary_subcontractors` | subcontracted operations | Include subcontracted in-scope operations using supplier-specific activity records or a disclosed representative dataset; subcontracting does not justify omission. | `ec-pef-method-2021`; `afw-pefcr-v3-1-2025` |
| `boundary_losses` | manufacturing losses | Disaggregate material loss and rejected product by process and receiving treatment; do not net sale, reuse or recycling against material input. | `afw-pefcr-v3-1-2025` |
| `boundary_packaging` | packaging | Include each primary, secondary and tertiary packaging component used to dispatch the product while keeping its mass outside the 1 kg reference product. | `afw-pefcr-v3-1-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `headgear_body_formation` | Headgear body formation and material preparation | `conditional` | Include every body-forming, knitting/crocheting, plait assembly or fabric-cutting operation performed by the reporting facility | Foreground component formation | kg accepted formed body output |
| `blocking_shaping` | Blocking and shaping | `conditional` | Include when a felt, plaited, knitted/crocheted or fabric body is conditioned and shaped on a block, press or form | Foreground shaping | kg accepted shaped body output |
| `wet_finishing` | Wet finishing and drying | `conditional` | Include when the headgear is washed, dyed, rinsed, stiffened, proofed or otherwise wet-finished in the foreground | Foreground finishing | kg accepted finished body output |
| `final_assembly_inspection` | Final assembly, trimming and inspection | `required` | Always include final joining, lining/trimming where applicable, acceptance inspection and reject handling | Foreground final manufacture | kg accepted finished headgear output |
| `packaging` | Product packaging | `required` | Always include the packaging configuration used at the factory gate | Foreground dispatch preparation | 1 kg net accepted finished headgear |

### Process: Headgear body formation and material preparation (`headgear_body_formation`)

#### Inputs

##### Product flows

###### Felt body supplied for headgear manufacture (`felt_hat_body_input`)

A purchased felt body or hood crosses the facility boundary for trimming, blocking or assembly; obtain its mass from receiving and issue records for the declared felt composition.

- Selected flow: Felt hat body
- Flow property / unit: Mass / kg
- Amount rule: measured issued felt-body mass minus unused bodies returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `historic-england-plaiters-lea-2011`

###### Plaited strip supplied for headgear body assembly (`plaited_strip_input`)

Plait or another declared strip material enters when a body is assembled from spiralled or joined strips; record the issued mass for the specific material.

- Selected flow: Plaited strip for headgear
- Flow property / unit: Mass / kg
- Amount rule: measured issued plaited-strip mass minus unused strip returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `historic-england-plaiters-lea-2011`

###### Finished textile fabric supplied in the piece (`textile_fabric_piece_input`)

Finished woven, knitted, crocheted or other non-lace textile piece goods cross the boundary for pattern cutting; declare fibre composition, construction and finish with the measured issue mass.

- Selected flow: Finished textile fabric in the piece
- Flow property / unit: Mass / kg
- Amount rule: measured issued fabric mass minus unused fabric returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Finished lace fabric supplied in the piece (`lace_fabric_input`)

Lace piece goods are recorded separately from other textile fabric so their material identity and cutting loss remain traceable.

- Selected flow: Finished lace fabric
- Flow property / unit: Mass / kg
- Amount rule: measured issued lace mass minus unused lace returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `un-cpc-3-0-28262`

###### Yarn supplied for knitting or crocheting (`textile_yarn_input`)

Yarn enters when the headgear or hair-net body is knitted or crocheted in the foreground; record each declared yarn specification as its own implemented dataset exchange.

- Selected flow: Textile yarn for knitted or crocheted headgear
- Flow property / unit: Mass / kg
- Amount rule: measured issued yarn mass minus unused yarn returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Sewing thread used in body formation (`formation_sewing_thread_input`)

Thread used to join plaits or cut panels is one incorporated material input; determine its mass by issue/return weighing or documented consumption calculation.

- Selected flow: Sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated consumed thread mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_body_formation_records`
- Sources: `ilo-isco-68-hatmaking`

###### Electricity used for formation, cutting and joining (`formation_electricity_input`)

Electricity supplied to knitting/crocheting machines, cutters, extraction and joining equipment is obtained from a dedicated meter or documented allocation of a site meter.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured formation-process electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted formed headgear body (`formed_headgear_body_output`)

Accepted bodies or cut component sets leave formation for blocking or final assembly; weigh the batch or reconcile a product-specific mass balance.

- Selected flow: Formed textile headgear body
- Flow property / unit: Mass / kg
- Amount rule: measured accepted formed-body mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources:

##### Waste flows

###### Textile cutting offcuts (`textile_cutting_offcuts_output`)

Fabric pieces removed during pattern cutting cross the process boundary as a composition-specific waste stream with measured mass and destination.

- Selected flow: Waste textile cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured textile cutting-offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Plaited-strip offcuts (`plaited_strip_offcuts_output`)

Ends and rejected lengths of the declared plait or strip material are weighed separately from other textile waste and linked to their receiving treatment.

- Selected flow: Waste plaited strip offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured plaited-strip offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `historic-england-plaiters-lea-2011`

###### Yarn waste from knitting or crocheting (`yarn_waste_output`)

Yarn ends, startup waste and rejected knitted or crocheted material are collected as one declared fibre-composition waste stream.

- Selected flow: Waste textile yarn
- Flow property / unit: Mass / kg
- Amount rule: measured yarn waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_formation_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Blocking and shaping (`blocking_shaping`)

#### Inputs

##### Product flows

###### Formed body supplied to blocking (`formed_body_blocking_input`)

The formed felt, plaited, knitted/crocheted or fabric body enters conditioning and shaping with its route and measured mass retained.

- Selected flow: Formed textile headgear body
- Flow property / unit: Mass / kg
- Amount rule: measured formed-body mass entering blocking
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `ilo-isco-68-hatmaking`; `historic-england-plaiters-lea-2011`

###### Process water used in blocking (`blocking_process_water_input`)

Water sprayed, poured or used to condition the body is recorded from a process meter or batch charge records.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured blocking-process water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `ilo-isco-68-hatmaking`

###### Steam supplied to blocking (`blocking_steam_input`)

Purchased or separately generated steam entering the blocking equipment is metered independently of hot water and fuel.

- Selected flow: Steam supplied to headgear blocking
- Flow property / unit: Mass / kg
- Amount rule: measured steam supplied to blocking
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `historic-england-plaiters-lea-2011`

###### Hot water supplied to blocking (`blocking_hot_water_input`)

Hot water crossing the blocking-process boundary is recorded separately when it is supplied as a heat carrier rather than counted as steam.

- Selected flow: Hot water supplied to headgear blocking
- Flow property / unit: Mass / kg
- Amount rule: measured hot-water supply to blocking
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `ilo-isco-68-hatmaking`

###### Electricity used for blocking and shaping (`blocking_electricity_input`)

Electricity supplied to presses, blocking machines, pumps, extraction and direct auxiliaries is metered or physically allocated.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured blocking-process electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Natural gas burned for blocking heat (`blocking_natural_gas_input`)

Natural gas is recorded only when burned within the foreground boundary for blocking heat; its quantity is not combined with LPG or purchased steam.

- Selected flow: Natural gas burned for blocking heat
- Flow property / unit: Energy / MJ
- Amount rule: measured natural-gas consumption assigned to blocking
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `ec-pef-method-2021`

###### Liquefied petroleum gas burned for blocking heat (`blocking_lpg_input`)

LPG is recorded as a separate fuel only when burned within the foreground boundary for blocking heat.

- Selected flow: Liquefied petroleum gas burned for blocking heat
- Flow property / unit: Mass / kg
- Amount rule: measured LPG consumption assigned to blocking
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `ec-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted blocked and shaped body (`shaped_headgear_body_output`)

The accepted shaped body is weighed after conditioning to the documented moisture state and transferred to finishing or assembly.

- Selected flow: Blocked and shaped textile headgear body
- Flow property / unit: Mass / kg
- Amount rule: measured accepted shaped-body mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `ilo-isco-68-hatmaking`

##### Waste flows

###### Wastewater discharged from blocking (`blocking_wastewater_output`)

Water leaving blocking as a wastewater stream is measured before treatment or transfer and is not combined with solid waste.

- Selected flow: Wastewater from headgear blocking
- Flow property / unit: Mass / kg
- Amount rule: measured blocking wastewater mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blocking_records`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

###### Fossil carbon dioxide emitted by blocking fuel combustion (`blocking_fossil_co2_output`)

Direct fossil carbon dioxide is calculated from the separately recorded natural-gas or LPG consumption using a disclosed applicable factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated direct fossil CO2 from foreground blocking fuel combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blocking_records`
- Sources: `ec-pef-method-2021`

###### Nitrogen oxides emitted by blocking fuel combustion (`blocking_nox_output`)

Direct nitrogen-oxide emissions are obtained from stack measurement or calculated from each recorded fuel and a disclosed technology-specific factor.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated nitrogen oxides from foreground blocking fuel combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted shaped headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_blocking_records`
- Sources: `ec-pef-method-2021`

### Process: Wet finishing and drying (`wet_finishing`)

#### Inputs

##### Product flows

###### Shaped body entering wet finishing (`shaped_body_wet_finishing_input`)

The shaped body crosses into washing, dyeing, stiffening or proofing with its measured incoming mass and moisture condition.

- Selected flow: Blocked and shaped textile headgear body
- Flow property / unit: Mass / kg
- Amount rule: measured shaped-body mass entering wet finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `historic-england-plaiters-lea-2011`

###### Process water used in wet finishing (`finishing_process_water_input`)

Water charged to washing, dyeing, rinsing, stiffening or proofing is recorded from meters or batch recipes.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured wet-finishing water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

###### Steam supplied to wet finishing (`finishing_steam_input`)

Steam entering wet-finishing equipment is metered separately from hot water and electricity.

- Selected flow: Steam supplied to textile finishing
- Flow property / unit: Mass / kg
- Amount rule: measured steam supplied to wet finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

###### Hot water supplied to wet finishing (`finishing_hot_water_input`)

Hot water supplied as a thermal carrier is measured as its own exchange and not merged with steam or process water at ambient conditions.

- Selected flow: Hot water supplied to textile finishing
- Flow property / unit: Mass / kg
- Amount rule: measured hot-water supply to wet finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

###### Electricity used in wet finishing and drying (`finishing_electricity_input`)

Electricity supplied to vessels, pumps, dryers, extraction and direct auxiliaries is metered or physically allocated.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured wet-finishing electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

###### Dye formulation used on the headgear (`dye_formulation_input`)

The actual colour-specific formulated dye is recorded independently from stiffeners, repellents and detergents.

- Selected flow: Textile dye formulation
- Flow property / unit: Mass / kg
- Amount rule: measured dye-formulation charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

###### Stiffening formulation used on the headgear (`stiffening_agent_input`)

The declared stiffener formulation is recorded as one chemical input when used to set the body or brim.

- Selected flow: Textile stiffening agent formulation
- Flow property / unit: Mass / kg
- Amount rule: measured stiffening-formulation charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `historic-england-plaiters-lea-2011`

###### Water-repellent formulation used on the headgear (`water_repellent_agent_input`)

The product-specific proofing formulation is recorded separately when applied; its chemical identity and solids content are retained.

- Selected flow: Textile water-repellent agent formulation
- Flow property / unit: Mass / kg
- Amount rule: measured water-repellent formulation charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

###### Detergent formulation used in washing (`detergent_formulation_input`)

The detergent used for foreground washing is recorded as one formulation and is not combined with dye or finishing agents.

- Selected flow: Textile detergent formulation
- Flow property / unit: Mass / kg
- Amount rule: measured detergent-formulation charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted wet-finished headgear body (`finished_headgear_body_output`)

The accepted body leaves wet finishing after drying and conditioning to the documented moisture state.

- Selected flow: Finished textile headgear body
- Flow property / unit: Mass / kg
- Amount rule: measured accepted wet-finished body mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources:

##### Waste flows

###### Wastewater discharged from wet finishing (`finishing_wastewater_output`)

Combined aqueous discharge from the documented wet-finishing line is measured before treatment and characterized by the facility sampling plan.

- Selected flow: Wastewater from textile headgear finishing
- Flow property / unit: Mass / kg
- Amount rule: measured wet-finishing wastewater mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

###### Non-methane volatile organic compounds released to air (`finishing_nmvoc_output`)

Direct NMVOC is recorded only when an applied finishing formulation or drying operation produces a verified release, using measurement or a formulation mass balance.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated direct NMVOC release from wet finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted finished headgear body output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_finishing_records`
- Sources: `jrc-textiles-bref-2023`

### Process: Final assembly, trimming and inspection (`final_assembly_inspection`)

#### Inputs

##### Product flows

###### Finished body supplied to final assembly (`finished_body_assembly_input`)

The accepted formed, shaped or wet-finished body enters final assembly with its route and incoming mass retained.

- Selected flow: Finished textile headgear body
- Flow property / unit: Mass / kg
- Amount rule: measured body mass entering final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `ilo-isco-68-hatmaking`

###### Lining fabric incorporated in the headgear (`lining_fabric_input`)

The declared lining fabric is weighed or calculated from issued cut pieces and recorded separately from the headgear shell.

- Selected flow: Textile lining fabric
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated incorporated lining mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `ilo-isco-68-hatmaking`; `afw-pefcr-v3-1-2025`

###### Sweatband incorporated in the headgear (`sweatband_input`)

The specified sweatband crosses the assembly boundary as one component input with measured or supplier-declared mass.

- Selected flow: Textile sweatband
- Flow property / unit: Mass / kg
- Amount rule: measured incorporated sweatband mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `ilo-isco-68-hatmaking`

###### Ribbon trim incorporated in the headgear (`ribbon_trim_input`)

Ribbon used as an external band or decoration is recorded independently with its fibre composition and incorporated mass.

- Selected flow: Textile ribbon trim
- Flow property / unit: Mass / kg
- Amount rule: measured incorporated ribbon mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `historic-england-plaiters-lea-2011`

###### Steel wire frame incorporated in the headgear (`wire_frame_input`)

Steel wire used for a brim or internal frame is recorded as one metal component and not grouped with textile trims.

- Selected flow: Steel wire headgear frame
- Flow property / unit: Mass / kg
- Amount rule: measured incorporated steel-wire mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `ilo-isco-68-hatmaking`

###### Elastic band incorporated in the headgear or hair-net (`elastic_band_input`)

Elastic used for fit retention is recorded as a separate component with its declared polymer/textile composition and incorporated mass.

- Selected flow: Textile elastic band
- Flow property / unit: Mass / kg
- Amount rule: measured incorporated elastic-band mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Sewing thread used in final assembly (`assembly_sewing_thread_input`)

Thread used to attach lining, bands, trims or panels is calculated from issued and returned bobbins or a documented seam-consumption method.

- Selected flow: Sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated consumed assembly-thread mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `ilo-isco-68-hatmaking`

###### Adhesive used in final assembly (`assembly_adhesive_input`)

The actual adhesive formulation applied to fix trims or components is recorded separately from stiffeners and coatings.

- Selected flow: Headgear assembly adhesive
- Flow property / unit: Mass / kg
- Amount rule: measured adhesive formulation consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity used in final assembly and inspection (`assembly_electricity_input`)

Electricity supplied to sewing, trimming, pressing, extraction and inspection equipment is metered or physically allocated.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured final-assembly electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished headgear before packaging (`accepted_finished_headgear_output`)

Accepted items leaving inspection are weighed without packaging and reconciled to rejects and all incorporated components.

- Selected flow: Accepted finished textile headgear
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net finished-headgear mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

###### Textile lining offcuts from final assembly (`assembly_textile_waste_output`)

Textile lining offcuts are weighed as one composition-specific waste exchange and linked to their receiving treatment; every other assembly waste material is reported in a separate implementation row.

- Selected flow: Waste textile lining offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured textile assembly-waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Steel wire offcuts from final assembly (`assembly_metal_waste_output`)

Steel-wire ends and rejected frame pieces are recorded separately from textile waste with measured mass and destination.

- Selected flow: Waste steel wire offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured steel-wire offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Defective finished headgear (`defective_headgear_waste_output`)

Rejected completed items that leave the process as waste are weighed separately and linked to the actual receiving treatment.

- Selected flow: Waste defective textile headgear
- Flow property / unit: Mass / kg
- Amount rule: measured defective finished-headgear mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished headgear output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Product packaging (`packaging`)

#### Inputs

##### Product flows

###### Accepted finished headgear entering packaging (`finished_headgear_packaging_input`)

Accepted net product enters packaging with the same product specification and measured mass used for final normalization.

- Selected flow: Accepted finished textile headgear
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net headgear mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Paperboard hat box used for primary packaging (`paperboard_hat_box_input`)

A rigid paperboard box immediately containing the headgear is weighed separately from tissue, bags and shipping cartons.

- Selected flow: Paperboard hat box
- Flow property / unit: Mass / kg
- Amount rule: measured paperboard hat-box mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Tissue paper used for wrapping (`tissue_paper_input`)

Tissue wrapping placed around or inside the product is weighed as its own paper input.

- Selected flow: Tissue wrapping paper
- Flow property / unit: Mass / kg
- Amount rule: measured tissue-paper mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyethylene bag used for primary packaging (`polyethylene_bag_input`)

The polyethylene film bag immediately containing the product is recorded separately from paper packaging.

- Selected flow: Polyethylene packaging bag
- Flow property / unit: Mass / kg
- Amount rule: measured polyethylene-bag mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Paper hangtag attached to the product (`paper_hangtag_input`)

The paper hangtag is recorded as one packaging component with its measured mass and declared coating or printing specification.

- Selected flow: Paper hangtag
- Flow property / unit: Mass / kg
- Amount rule: measured paper-hangtag mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Corrugated carton used for grouped shipping (`corrugated_carton_input`)

The share of each corrugated shipping carton assigned to the packed product is calculated from measured empty carton mass and counted contained products.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: calculated corrugated-carton mass assigned to the reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity used for packaging (`packaging_electricity_input`)

Electricity supplied to packing, sealing, labelling and direct packaging auxiliaries is metered or physically allocated.

- Selected flow: Electricity, low voltage, at factory
- Flow property / unit: Energy / kWh
- Amount rule: measured packaging-process electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product output (`reference_finished_headgear_output`)

The verified CPC 28262 product flow leaves packaging at exactly 1 kg net accepted headgear mass; packaging remains separate.

- Selected flow: Hats and other headgear, of felt, or plaited or made by assembling strips of any material, or knitted or crocheted or made up from lace or other textile fabric in the piece, hair-nets `b00baec8-ce3f-4e11-99c7-8a40167d2f4f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: accepted net finished-headgear mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `un-cpc-3-0-28262`

##### Waste flows

###### Corrugated shipping-carton waste generated at packing (`paper_packaging_waste_output`)

Damaged or unused corrugated shipping-carton material is recorded as one corrugated-paperboard waste exchange; hat-box, tissue and hangtag wastes are reported in separate implementation rows when generated.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated shipping-carton waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyethylene film waste generated at packing (`polyethylene_film_waste_output`)

Damaged or unused polyethylene film is weighed separately from paper-based packaging waste and linked to its receiving treatment.

- Selected flow: Waste polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured polyethylene packaging-waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground operations | First subdivide formation, blocking, wet finishing, assembly and packaging and meter product-specific inputs and outputs; allocation is used only after physical subdivision is exhausted. | `ec-pef-method-2021`; `afw-pefcr-v3-1-2025` |
| `allocation_shared_electricity` | shared electricity meters | Allocate shared electricity using documented machine metering, operating time multiplied by rated or measured power, or another causal physical driver; retain meter total, numerator and denominator. | `afw-pefcr-v3-1-2025` |
| `allocation_shared_thermal` | shared steam and hot water | Allocate each thermal carrier separately using a process meter or a causal heat-demand driver; do not allocate steam, hot water and fuels as one pooled utility. | `jrc-textiles-bref-2023` |
| `allocation_material_losses` | offcuts, rejects and leftovers | Assign all input burden to the production that generated the material loss; record the waste output and treatment without subtracting sale or recycling revenue. | `afw-pefcr-v3-1-2025` |
| `allocation_packaging` | grouped packaging | Divide measured group-packaging mass by the counted net product mass or product units actually packed in that group during the same period. | `afw-pefcr-v3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_body_formation_records` | `headgear_body_formation` | material inputs, electricity, accepted bodies and formation waste | BOM; issue/return slips; scales; machine or area meter; waste transfer records | product code; route; material specification; issued mass; returned mass; meter start/end; accepted output mass; each waste mass and destination | Reconcile each batch from issued material through accepted output and separately weighed waste | kg; kWh | Per batch, aggregated monthly | Representative production period, normally at least 12 months or the complete campaign | All in-scope formation lines and subcontractors | Sum homogeneous records by product specification, then divide by accepted formed-body mass | Scale calibration; meter identity; signed issue/return records; BOM revision; waste receipts; reconciliation residual |
| `cp_blocking_records` | `blocking_shaping` | body input, water, utilities, fuel, output, wastewater and direct emissions | Batch log; water/steam/hot-water/fuel/electricity meters; scales; stack data | product code; body mass; water; steam; hot water; electricity; natural gas; LPG; output mass; wastewater; fuel factor or stack result | Record every supplied carrier separately and reconcile conditioned input, shaped output and water change | kg; kWh; MJ | Per batch or shift, aggregated monthly | Representative production period | All blocking equipment and associated direct heat supply | Normalize totals to accepted shaped-body mass; calculate emissions from recorded fuel only when not directly measured | Meter calibration; fuel invoice reconciliation; moisture record; stack report or factor reference; operator log |
| `cp_wet_finishing_records` | `wet_finishing` | body input, water, utilities, each formulation, output, wastewater and NMVOC | Batch recipe; chemical issue; meters; scales; wastewater and air monitoring | product code; recipe id; input/output mass and moisture; water; steam; hot water; electricity; each formulation mass and composition; wastewater; NMVOC data | Link every recipe charge and monitored release to the batch and finishing operation | kg; kWh | Per batch, aggregated monthly | Representative production period | All in-scope wet-finishing and drying lines | Sum by product and operation, subtract documented returns, then divide by accepted dry finished-body mass | Recipe approval; chemical SDS/specification; meter calibration; laboratory results; moisture method; discharge record |
| `cp_final_assembly_records` | `final_assembly_inspection` | body, components, electricity, accepted product and each waste | BOM; component issue/return; scales; electricity meter; inspection and waste records | product code; BOM revision; each component specification and mass; electricity; accepted item count and mass; textile waste; metal waste; defective product; destination | Reconcile incorporated components and rejected material to accepted net product for each product specification | kg; item; kWh | Per batch, aggregated monthly | Representative production period | All final assembly and inspection lines and subcontractors | Sum homogeneous batches and divide by accepted net headgear mass | BOM coverage report; scale calibration; inspection criteria; reject log; waste transfer receipts; mass-balance residual |
| `cp_packaging_records` | `packaging` | net product, each packaging component, electricity and packaging waste | Packaging specification; count; tare weighing; meter; waste records | product code; net product count/mass; each packaging component count and empty mass; grouped carton contents; electricity; paper waste; polyethylene waste | Weigh representative empty components and reconcile issued, returned, used and wasted packaging | kg; item; kWh | Per packaging configuration and monthly aggregation | Representative production period | All product packing lines | Convert counts to mass, allocate grouped packaging by contained net product mass, then normalize to 1 kg net product | Calibrated scale; packaging specification; issue/return records; packing list; meter identity; waste receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period amount / accepted net finished-headgear mass | period exchange amount; accepted net finished-headgear mass | exchange amount per 1 kg reference product | `ec-pef-method-2021` |
| `calc_material_consumption` | issued materials and components | consumed mass = issued mass - unused mass returned to controlled stock | issue and return records | consumed material mass | `afw-pefcr-v3-1-2025` |
| `calc_count_to_mass` | item-count records | material mass = item count × representative measured item mass | count; same-specification measured unit mass | kg material or packaging | `afw-pefcr-v3-1-2025` |
| `calc_process_mass_balance` | each foreground process | residual = input mass + documented water retained - accepted output mass - each waste output - documented evaporation | all measured mass inputs and outputs; moisture change | disclosed residual and completeness check | `afw-pefcr-v3-1-2025` |
| `calc_shared_electricity` | shared meter | process electricity = metered total × causal process driver / sum of causal drivers | meter total; machine time and measured/rated power or validated physical driver | allocated process kWh | `afw-pefcr-v3-1-2025` |
| `calc_direct_combustion_emissions` | blocking fuel combustion | calculate each emission separately from recorded fuel and a disclosed applicable factor, or use direct measurement | fuel quantity and properties; factor or stack measurement | kg of one specified elementary emission | `ec-pef-method-2021` |
| `calc_group_packaging` | corrugated carton and other grouped packaging | assigned packaging mass = measured empty package mass × reference-product net mass / total net product mass contained | empty packaging mass; contained product count and net mass | kg packaging assigned to reference product | `afw-pefcr-v3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate CPC 28262 scope and declare product type, material construction, route, size/dimensions and finish. | Approved specification, BOM, product image/drawing and classification review |
| `dq_bom_coverage` | incorporated materials | Account for at least 95% of finished-product mass and 100% of principal material, lining, frame/metal and other structurally relevant components; disclose every omitted component. | BOM coverage calculation and mass reconciliation |
| `dq_route_coverage` | process map | Map every actual in-house and subcontracted operation to the process inventory and justify every conditional process marked absent. | Process flow diagram, supplier declarations and production records |
| `dq_temporal` | foreground records | Use a representative production period, normally 12 consecutive months or the full production campaign, and explain abnormal shutdowns or product-mix changes. | Dated meter, production, purchase and waste records |
| `dq_measurement` | measured quantities | Identify instrument, calibration status, reading frequency and any allocation for each material, water, utility, output and waste quantity. | Calibration certificates, meter register and calculation workpapers |
| `dq_chemical_identity` | chemical formulations | Retain product name, supplier, formulation or active content, SDS/specification and charged mass for each dye, stiffener, repellent, detergent and adhesive. | Chemical issue records, SDS and supplier specification |
| `dq_waste_destination` | each waste flow | Retain separate mass and receiving treatment evidence for every waste stream; do not infer recycling from a sale alone. | Transfer note, invoice and treatment-facility declaration |
| `dq_representativeness` | all upstream datasets | Document geographic, temporal and technological match to the declared material state, electricity mix, thermal supply, chemical and packaging configuration. | Dataset metadata and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference UUID must equal `b00baec8-ce3f-4e11-99c7-8a40167d2f4f`, resolve as a public state-100 Product flow classified to CPC 28262, and use Mass `93a60a56-a3c8-11da-a746-0800200b9a66` with kg from Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. | `un-cpc-3-0-28262` |
| `validate_reference_amount` | reference flow | The output must normalize to exactly 1 kg accepted net finished headgear and retain traceability to the measured unnormalized product mass and item count. | `ec-pef-method-2021` |
| `validate_scope` | product identity | The product must be finished CPC 28262 headgear or a hair-net and must not be an unfinished hat body, safety headgear, excluded material category or headgear part. | `un-cpc-3-0-28262`; `afw-pefcr-v3-1-2025` |
| `validate_route` | process inventory | Every declared felt, plaited-strip, knitted/crocheted, lace or textile-piece operation must be represented; blocking and wet finishing must be included whenever actually performed. | `ilo-isco-68-hatmaking`; `historic-england-plaiters-lea-2011`; `afw-pefcr-v3-1-2025` |
| `validate_atomic_rows` | process inventory | Every card must describe one exchange; each material, electricity, steam, hot water, fuel, chemical formulation, packaging item, waste and elementary emission must remain separate. | `ec-pef-method-2021` |
| `validate_uuid_evidence` | UUID-bearing rows | Store a Tiangong UUID only when hybrid-search and state-100 detail evidence agree on identity, flow type, classification where applicable and reference property; otherwise leave it absent and retain a manifest review item. |  |
| `validate_bom` | incorporated inputs | The BOM must satisfy `dq_bom_coverage`, and each incorporated material or component in the concrete product must have its own implemented inventory exchange. | `afw-pefcr-v3-1-2025` |
| `validate_mass_balance` | foreground processes | Each process must reconcile accepted output, separately measured wastes and documented moisture or evaporation; unexplained netting or a hidden global loss rate is nonconformant. | `afw-pefcr-v3-1-2025` |
| `validate_utility_allocation` | electricity and thermal carriers | Shared-meter allocation must disclose the meter boundary, period, driver, numerator and denominator; steam, hot water, natural gas and LPG may not be pooled. | `afw-pefcr-v3-1-2025`; `jrc-textiles-bref-2023` |
| `validate_packaging` | packaging | Each used packaging component and each generated packaging-waste material must be recorded separately, while all packaging mass remains excluded from reference product mass. | `afw-pefcr-v3-1-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; eligible for `background_dataset` use after methodology and data review |
| downstream_use | Foreground process and lifecyclemodel construction for factory-gate production of CPC 28262 finished headgear |
| allowed_use | Product-specific factory-gate studies whose headgear type, material construction, route, size, finishing, facility geography, period and packaging match the dataset |
| excluded_use | Unfinished hat bodies; safety, rubber, plastics, asbestos or fur-only headgear; mismatched construction routes; distribution, use or end-of-life claims not separately modelled; comparative assertions without an applicable reviewed comparison method |
| required_metadata | canonical PCR id; reference UUID; CPC reference; product specification; material and fibre composition; construction route; reference size/dimensions; item count per kg; BOM coverage; included and subcontracted processes; wet-finishing operations; facility geography; period; allocation methods; packaging; waste destinations; source ids |
| required_quality_disclosure | primary-data coverage; measurement and calibration; shared-resource allocation; process mass-balance residuals; data gaps; proxies; upstream dataset representativeness; chemical identity; direct-emission method; uncertainty and verification status |
| update_trigger | Change in product scope, material construction, body-formation or blocking route, wet-finishing chemistry, facility or subcontractor geography, electricity or heat supply, packaging, waste treatment, reference-flow identity, applicable PEF method or evidence that materially changes a rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-28262` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 28262, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, accessed 2026-08-13 | Product scope, adjacent exclusions and classification identity |
| `afw-pefcr-v3-1-2025` | Standard (`standard`) | Technical Secretariat, Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025, https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf; European Commission PEF status page, https://green-forum.ec.europa.eu/green-business/environmental-footprint-methods/pef-method_en, accessed 2026-08-13 | Direct inclusion of hats as apparel accessories; BOM, process decomposition, losses, assembly, wet processing, packaging, company-specific data and quality rules |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng, accessed 2026-08-13 | Functional unit, foreground data, allocation, completeness, reporting and verification |
| `ilo-isco-68-hatmaking` | Official guidance (`official_guidance`) | International Labour Office, International Standard Classification of Occupations, Revised Edition 1968, occupational definitions 7-93.20 to 7-95, https://webapps.ilo.org/ilostat-files/ISCO/newdocs-08-2021/Previous%20versions%20of%20ISCO/ISCO-68/ISCO-68%20EN%20Structure%20and%20defnitions.pdf, accessed 2026-08-13 | Hat pattern cutting, blocking, sewing, lining, trimming, forming and finishing operations |
| `historic-england-plaiters-lea-2011` | Official guidance (`official_guidance`) | McOmish, D., Graham, K. and Grech, D., Plaiters' Lea Conservation Area, Luton: Historic Area Assessment, Research Department Report 69/2011, Historic England, https://historicengland.org.uk/research/results/reports/69-2011, accessed 2026-08-13 | Felt and plaited-hat route decomposition, steaming, blocking, stiffening, drying, lining and trimming |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | Roth, J. et al., Best Available Techniques Reference Document for the Textiles Industry, EUR 31392 EN, JRC131874, 2023, doi:10.2760/355887, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874, accessed 2026-08-13 | Conditional textile preparation, dyeing, washing, finishing, utility, wastewater and direct-emission data requirements |
