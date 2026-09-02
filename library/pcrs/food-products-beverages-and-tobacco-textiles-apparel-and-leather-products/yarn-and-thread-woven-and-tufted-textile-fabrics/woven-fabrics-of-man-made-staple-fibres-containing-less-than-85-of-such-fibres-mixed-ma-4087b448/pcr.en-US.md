---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-4087b448
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics of man-made staple fibres, containing less than 85% of such fibres, mixed mainly or solely with cotton

## 1. Scope and Applicability

This PCR applies to the foreground production of woven fabrics whose man-made staple fibre content is below 85% by mass and whose remaining blend is mainly or solely cotton. It covers production from received yarn or an explicitly declared same-category intermediate fabric through market-ready woven fabric at the manufacturing gate. The data producer shall distinguish synthetic staple fibres from artificial cellulosic staple fibres and shall identify every fibre type in the blend.

The common route includes yarn receipt and preparation, warp preparation and sizing where required, weaving, inspection, and preparation of the market-ready fabric. Desizing, scouring, bleaching, mercerising, dyeing, printing, washing, heat-setting, coating, and other mechanical or chemical finishing are included only when performed for the declared product. On-site utility generation and on-site waste-water treatment are included when they serve the foreground operations; purchased utilities and off-site treatments remain linked product or waste-treatment datasets.

The PCR excludes fabrics containing 85% or more man-made staple fibres; fabrics mixed mainly with wool or fine animal hair; woven fabrics made mainly from man-made filament yarn; pile, chenille, terry, narrow, coated, impregnated, knitted, tufted, nonwoven, and other special fabrics when those product categories define the marketed product; yarn manufacture as the reference product; and garment or made-up textile manufacture. Distribution after the manufacturing gate, product use, laundering during use, and end-of-life are outside this intermediate-product foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-4087b448` |
| classification_refs | CPC 3.0 `26760` (exact scope context; mapping acceptance is managed outside this PCR) |
| covered_products | Woven fabrics with less than 85% man-made staple fibres by mass, blended mainly or solely with cotton; greige, bleached, dyed, printed, or otherwise finished states are covered when the marketed state is declared |
| excluded_products | Fabrics with at least 85% man-made staple fibres; blends mainly with wool or fine animal hair; filament-yarn, pile, chenille, terry, narrow, coated, impregnated, knitted, tufted, nonwoven, and other special fabrics; yarns; garments and made-up articles |
| representative_product | Market-ready woven fabric made from man-made staple fibre and cotton yarns, with man-made staple fibres below 85% by mass |
| production_route | Received yarn preparation; warp preparation and sizing as applicable; weaving; conditional wet pretreatment, coloration, printing, and finishing; inspection and batch formation |
| market_state | Finished product at the manufacturing gate; the exact greige, bleached, dyed, printed, coated, or other finish state shall be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Woven fabric made from man-made staple fibres below 85% by mass, blended mainly or solely with cotton |
| How much | 1 kg net fabric mass, excluding packaging |
| How well | Conforms to the declared fibre composition, man-made staple fibre type, weave construction, mass per unit area, width, colour and finish state, quality grade, and moisture basis |
| How long or cycle | One manufacturing lot delivered at the manufacturing gate; no use duration is represented because the fabric is an intermediate product |
| reference_flow_link | The reference flow is the conforming market-ready fabric output of `finishing_inspection_and_packaging`, normalized to 1 kg net fabric |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of man-made staple fibres, containing less than 85% of such fibres, mixed mainly or solely with cotton `139eadcb-ee5a-4a0c-8194-64a890e77433` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | man-made staple fibre type(s) and mass share; cotton mass share; any other fibre and mass share; confirmation that man-made staple fibres are below 85% by mass and cotton is the sole or predominant blend partner; weave construction; mass per unit area in g/m2; usable width; greige/bleached/dyed/printed/finished state; colour and functional finish; quality grade; moisture or conditioning basis; production geography; technology and batch period |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent data-package fields. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory amounts to 1 kg of conforming net fabric at the declared moisture or conditioning basis; exclude cores, wrapping, pallets, and other packaging from the reference amount. |
| `fibre_composition_mass_fraction` | Reference product and incoming yarns | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and % by mass | Determine fibre shares on one consistent moisture basis. The reported fibre shares shall sum to 100%; the man-made staple fraction shall be below 85%, and cotton shall be the sole or predominant non-man-made blend component. |
| `area_mass_conversion` | Fabric measured by length or area | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When mass is calculated from length, usable width, and mass per unit area, use `mass_kg = length_m × usable_width_m × basis_mass_g_per_m2 / 1000` and reconcile the result with batch weighing. |
| `moisture_basis_consistency` | Yarn, intermediate fabric, wastes, and reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the conditioning or moisture basis used for each measured textile mass; convert all mass-balance terms to the reference-product basis and disclose conversion factors and test methods. |
| `utility_unit_conversion` | Electricity and thermal-energy records | Energy | kWh | Preserve measured utility units and conversion factors. Use 1 MWh = 1,000 kWh and report thermal energy separately from electricity before aggregation. |
| `water_volume_conversion` | Process water and waste water | Volume | m3 | Use metered volume where available. Use 1 m3 = 1,000 L and retain the treated textile mass used as the denominator for each operation-specific water indicator. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_yarn_start` | foreground starting condition | Start at receipt of identified man-made staple fibre yarns and cotton yarns, or at receipt of an explicitly declared same-category intermediate fabric; link excluded fibre formation and spinning to upstream datasets. | `ec-pef-method-2021` |
| `boundary_cpc_26760_scope` | reference product identity | Require a woven fabric containing less than 85% man-made staple fibres by mass and mixed mainly or solely with cotton; neighbouring CPC woven-fabric subclasses are outside this PCR. | `unsd-cpc-v3-2025` |
| `boundary_foreground_operations` | foreground manufacturing | Include every on-site or directly controlled preparation, sizing, weaving, wet processing, thermal/mechanical finishing, inspection, rework, waste handling, and on-site treatment operation used to produce the declared market state. | `eu-jrc-textiles-bref-2023` |
| `boundary_intermediate_product_end` | intermediate product gate | End at the manufacturing gate after conformity inspection and batch formation. Exclude downstream distribution, use, and end-of-life from this intermediate-product foreground dataset. | `ec-pef-method-2021` |
| `boundary_direct_flow_completeness` | foreground inputs and outputs | Quantify all identified foreground material, water, energy, product, waste, waste-water, and direct elementary flows; an unmeasured identified flow remains an explicit data gap and shall not be silently assigned zero. | `ec-pef-method-2021`; `eu-jrc-textiles-bref-2023` |
| `boundary_subcontracted_operations` | outsourced preparation or finishing | Represent a subcontracted operation as a linked upstream service or intermediate-product dataset and disclose the transfer mass, route, and included treatment steps; do not claim it as directly measured on-site activity. | `ec-pef-method-2021` |
| `boundary_same_category_input` | same-category fabric input | When received greige or partly finished fabric in the same category is the starting input, record it once as a visible product input, require an upstream dataset ending at that starting condition, and do not recursively recreate its production inside the finishing process. | `ec-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received man-made staple fibre yarn and cotton yarn with supplier identity, fibre shares, yarn count, moisture/conditioning basis, and mass; alternatively, received same-category greige or partly finished fabric with all reference qualifiers declared |
| starting_condition_role | Upstream cut between purchased textile-material production and the directly controlled fabric-manufacturing foreground system |
| product_classification_scope | Woven fabric below 85% man-made staple fibre by mass and mixed mainly or solely with cotton; exact fibre type and market finish state remain mandatory product qualifiers |
| recursive_input_rule | A purchased same-category fabric is recorded once as a product input and linked to an upstream dataset ending at its declared received state; its upstream manufacture is not expanded again inside the foreground process |
| upstream_dataset_requirement | Require representative upstream datasets for each incoming yarn or same-category fabric, purchased electricity and fuels, process water, sizing agents, dyes and auxiliaries, packaging, inbound transport when included in the study, and off-site waste or waste-water treatment |
| disclosure | Declare the starting input form, ownership/control boundary, included and subcontracted steps, loom and wet-processing technologies, fibre composition, market finish state, site/geography, allocation basis, rework treatment, and every excluded or unresolved flow |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_receipt_and_preparation` | Yarn receipt and preparation | `required` | Always required when yarn is the declared starting condition; for a same-category fabric input, record this process as not applicable and start at the received fabric | Foreground material identity, blending confirmation, winding and preparation | kg identified yarn accepted for production |
| `warp_preparation_and_sizing` | Warp preparation and sizing | `conditional` | Include warping for site-prepared warp beams and include sizing only when sizing agents are applied; otherwise disclose purchased warp beams or the no-sizing route | Foreground warp preparation | kg prepared warp delivered to weaving |
| `weaving` | Weaving | `required` | Always required for yarn-start datasets; for fabric-start finishing datasets, represent weaving in the linked upstream fabric dataset | Foreground fabric formation | kg greige woven fabric |
| `wet_pretreatment_and_coloration` | Wet pretreatment and coloration | `conditional` | Include each performed desizing, scouring, bleaching, mercerising, washing, dyeing, printing, or wet-finishing step required by the declared product | Foreground wet processing | kg textile processed in each distinct wet operation |
| `finishing_inspection_and_packaging` | Finishing, inspection, and packaging | `required` | Include inspection and batch formation for all products; include heat-setting, drying, calendaring, raising, coating, or other finishing only when performed | Final conformity and reference-product formation | 1 kg conforming net fabric output |
| `onsite_wastewater_treatment` | On-site waste-water treatment | `conditional` | Include when waste water from the foreground operations is treated under the reporting facility's control | Foreground treatment of generated waste water | m3 waste water treated and pollutant load removed or discharged |

### Process: Yarn receipt and preparation (`yarn_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Man-made-staple-fibre/cotton blended yarn (`incoming_blend_yarn`)

Record each yarn type separately by supplier, fibre composition, yarn count, lot, mass, and conditioning basis. Aggregate only after confirming that the resulting fabric satisfies the category composition rule.

- Selected flow: Man-made-staple-fibre/cotton blended yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass of each yarn lot entering the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net woven fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_receipt_preparation`

###### Electricity for winding and preparation (`preparation_electricity`)

Record metered electricity or a documented allocation from a facility meter for winding, yarn clearing, humidification attributable to preparation, and related handling equipment.

- Selected flow: Alternating-current electricity, low-voltage consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated allocation from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yarn_receipt_preparation`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Identified prepared yarn (`prepared_yarn_output`)

Record the mass transferred to warp preparation and weaving, retaining the yarn-level fibre shares and moisture basis.

- Selected flow: Prepared man-made-staple-fibre/cotton blended yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured prepared-yarn mass transferred to the next process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_receipt_preparation`

##### Waste flows

###### Paper and cardboard yarn-packaging waste (`preparation_paper_packaging_waste`)

Separate cardboard, plastic, cones, contaminated yarn, and recyclable yarn waste by destination; do not net recycled materials against incoming yarn.

- Selected flow: Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by waste type and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_receipt_preparation`

##### Elementary flows

### Process: Warp preparation and sizing (`warp_preparation_and_sizing`)

#### Inputs

##### Product flows

###### Prepared warp yarn (`warp_yarn_input`)

Record the prepared warp yarn entering warping, beaming, and optional sizing; weft yarn bypassing this process remains an input to weaving.

- Selected flow: Prepared warp yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured warp-yarn mass entering the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`

###### Starch sizing agent (`starch_sizing_agent`)

Record each size polymer, lubricant, preservative, and auxiliary at formulated-product mass; identify hazardous constituents when relevant to downstream desizing and waste-water treatment.

- Selected flow: Starch sizing agent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued mass minus documented return, by recipe and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`
- Sources: `eu-jrc-textiles-bref-2023`

###### Fresh process water for sizing (`sizing_process_water`)

This card records only fresh sizing water. Record electricity, steam, and each fuel as separate atomic exchanges when applicable; a dry or purchased-warp route shall report zero only with supporting route evidence.

- Selected flow: Fresh process water for textile sizing
- Flow property / unit: Volume / m3
- Amount rule: direct meter or batch-recipe fresh-water volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared warp beam (`prepared_warp_output`)

Record the mass of yarn plus retained size delivered to weaving and retain a separate calculated size add-on.

- Selected flow: Prepared sized man-made-staple-fibre/cotton warp beam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured output mass; calculate retained size by recipe or before/after mass difference
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_warp_sizing`

##### Waste flows

###### Sizing waste water (`sizing_wastewater`)

Record discarded size liquor and sizing wash water sent to treatment. Record yarn waste, packaging, and any other solid residue as separate atomic exchanges in the produced dataset.

- Selected flow: Sizing waste water sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: measured waste-water volume by batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`

##### Elementary flows

### Process: Weaving (`weaving`)

#### Inputs

##### Product flows

###### Prepared blended warp yarn (`weaving_warp_yarn`)

Record warp and weft yarn separately and retain each yarn's fibre composition so the final blend can be calculated without relying only on a commercial label.

- Selected flow: Prepared man-made-staple-fibre/cotton blended warp yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured yarn issued to the loom less documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`

###### Compressed air for weaving (`weaving_compressed_air`)

This card records only compressed air delivered to weaving. Record loom electricity as a separate atomic exchange; use a documented allocation when the air meter is shared.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered compressed-air volume at documented pressure and standard conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven fabric (`greige_fabric_output`)

Record the weighed greige fabric mass and measured length, width, and mass per unit area before any wet or final finishing.

- Selected flow: Greige woven man-made staple fibre/cotton fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted greige-fabric mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`

##### Waste flows

###### Cut selvedge textile waste (`weaving_selvedge_waste`)

Measure yarn ends, loom waste, cut selvedges, and rejected fabric separately and record whether each stream is internally reused, externally recycled, or treated as waste.

- Selected flow: Cut selvedge from man-made-staple-fibre/cotton woven fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed mass by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving`

##### Elementary flows

###### Direct dust from weaving and preparation (`weaving_dust_emissions`)

Record substance-specific dust emitted directly to air after any abatement; collected dust sent to treatment remains a waste flow rather than an elementary emission.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: measured outlet mass flow integrated over operating time or a documented, technology-representative emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_weaving`
- Sources: `eu-jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

### Process: Wet pretreatment and coloration (`wet_pretreatment_and_coloration`)

#### Inputs

##### Product flows

###### Greige fabric for wet processing (`wet_process_greige_fabric_input`)

Record the incoming textile mass and state before each distinct desizing, scouring, bleaching, mercerising, washing, dyeing, printing, or wet-finishing operation.

- Selected flow: Greige man-made-staple-fibre/cotton woven fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conditioned fabric mass entering each distinct wet operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg textile processed in the operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing`

###### Process water (`wet_process_water`)

Record fresh, reused, and recycled water separately by unit operation. Do not count reused internal water again as a new environmental withdrawal.

- Selected flow: Fresh process water for textile wet processing
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-recipe water supplied to each distinct operation, with internal reuse separately identified
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg textile processed in each distinct wet operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`
- Range: Official operation-specific water-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.002
  - Upper: 0.150
  - Unit: m3/kg textile processed
  - Basis: 2-150 m3/t is the envelope across the BAT table for mercerising, bleaching, scouring, desizing, washing synthetic material, and fabric dyeing; apply the operation-specific subrange and do not treat the envelope as a default value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-bat-textiles-2022`

###### Sodium hydroxide for wet processing (`wet_process_sodium_hydroxide`)

Record sodium hydroxide supplied to scouring, mercerising, pH control, or another declared wet operation; retain solution concentration in the foreground record.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured active-product or as-supplied mass issued to the applicable recipe, with concentration disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg textile processed in the applicable operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`

###### Hydrogen peroxide solution, 50% in water (`wet_process_hydrogen_peroxide_50`)

Record 50% hydrogen peroxide solution only when supplied to the declared bleaching or oxidation recipe.

- Selected flow: Hydrogen peroxide solution, 50% in water `afda772f-b130-4c32-9a89-c4e79ba4e0e8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-supplied mass issued to the applicable recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg textile processed in the applicable operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`

###### Reactive dye formulation (`wet_process_reactive_dye`)

Record one declared reactive-dye formulation when used for the cotton or artificial-cellulosic fraction; each distinct formulation requires its own atomic dataset row.

- Selected flow: Reactive dye formulation for cellulosic textile coloration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured formulation mass issued to the applicable colour recipe minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg textile dyed with the formulation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`

###### Purchased steam for wet processing (`wet_process_steam`)

This card records only delivered steam mass. Record electricity, each direct fuel, and recovered heat as separate atomic exchanges by unit operation; avoid double counting on-site steam generation and delivered steam.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered consumption or documented calculation from fuel, steam, equipment, and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg textile processed in the applicable operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-processed fabric (`wet_processed_fabric_output`)

Record output mass, finish state, colour, retained chemical add-on where relevant, and moisture basis after each reported wet-processing stage.

- Selected flow: Wet-processed man-made staple fibre/cotton woven fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conditioned output mass transferred to the next stage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing`

##### Waste flows

###### Waste water from wet processing (`wet_process_wastewater`)

Record discharge volume by stream and destination together with recipe linkage, pH, temperature, and relevant pollutant concentrations; calculate pollutant loads before any allocation.

- Selected flow: Textile wet-process waste water sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: metered discharge volume; reconcile with water input, water retained in product, evaporation, reuse, and other measured losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg textile processed in the applicable wet operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`

###### Wet-process chemical sludge (`wet_process_chemical_sludge`)

Record separately all process residues, collected solids, unused paste, spent baths routed as waste, and off-specification chemicals, including treatment destination.

- Selected flow: Textile wet-process chemical sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or calculated quantity by waste type and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg textile processed in the applicable operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing`

##### Elementary flows

###### Formaldehyde emitted to air (`wet_process_formaldehyde_air`)

Record only emissions that cross directly to air, water, or soil from the foreground process. Use substance-specific flows and keep pollutants sent to treatment in the corresponding waste-water or waste stream.

- Selected flow: Formaldehyde to air, unspecified `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass load or calculation from concentration × standardized gas/water flow × operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg textile processed in the relevant operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`

### Process: Finishing, inspection, and packaging (`finishing_inspection_and_packaging`)

#### Inputs

##### Product flows

###### Wet-processed fabric for final finishing (`finishing_wet_fabric_input`)

Record the incoming fabric state and mass before dry finishing, heat-setting, inspection, grading, and batch formation.

- Selected flow: Wet-processed man-made-staple-fibre/cotton woven fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conditioned mass entering final finishing and inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming net fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inspection`

###### Purchased thermal energy for finishing (`finishing_purchased_heat`)

Record purchased thermal energy for drying, heat-setting, curing, or other thermal finishing separately from electricity, steam mass, and direct fuel.

- Selected flow: Purchased thermal energy for textile finishing
- Flow property / unit: Energy / kWh
- Amount rule: metered delivered thermal energy attributable to thermally treated textile
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming net fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inspection`
- Sources: `eu-jrc-textiles-bref-2023`; `eu-bat-textiles-2022`
- Range: BAT thermal-treatment energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 4.4
  - Unit: kWh/kg textile thermally treated
  - Basis: yearly-average indicative specific energy consumption for thermal treatment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-bat-textiles-2022`

###### Polyethylene packaging film (`finishing_polyethylene_film`)

Record polyethylene film issued for wrapping conforming fabric separately from paperboard cores and other packaging.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured film mass issued to conforming fabric, net of documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming net fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inspection`

###### Paperboard fabric core (`finishing_paperboard_core`)

Record the paperboard winding core or tube as a separate packaging input and exclude its mass from the reference amount.

- Selected flow: Paperboard core for rolled textile fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured core mass issued to conforming fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming net fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inspection`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming reference woven fabric (`reference_fabric_output`)

This output realizes the functional unit. It shall carry every required qualifier and shall exclude packaging mass.

- Selected flow: Woven fabrics of man-made staple fibres, containing less than 85% of such fibres, mixed mainly or solely with cotton `139eadcb-ee5a-4a0c-8194-64a890e77433`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg after normalization from measured conforming output mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming net fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_finishing_inspection`

##### Waste flows

###### Fabric offcuts from finishing (`finishing_offcut_waste`)

Record fabric offcuts, samples, downgraded product not sold as the reference product, and final rejects separately by reuse, recycling, sale as co-product, or treatment destination.

- Selected flow: Offcut man-made-staple-fibre/cotton woven fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed mass by category and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming net fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inspection`

##### Elementary flows

###### Direct air emissions from thermal finishing (`finishing_air_emissions`)

For heat-setting, coating, drying, singeing, or other relevant thermal treatment, record substance-specific direct emissions after abatement and report the corresponding air-to-textile or operating basis.

- Selected flow: Formaldehyde to air, unspecified `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured concentration × standardized exhaust-gas volume, integrated over representative operation; use a documented emission factor only when measurement is unavailable and applicability is demonstrated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg textile thermally finished
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_inspection`
- Sources: `eu-jrc-textiles-bref-2023`

### Process: On-site waste-water treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Sodium hydroxide for waste-water treatment (`wastewater_treatment_sodium_hydroxide`)

Record sodium hydroxide used for pH control as a separate treatment-chemical exchange, with solution concentration disclosed.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured active-product or as-supplied mass dosed to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 waste water treated and per kg reference fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`

##### Waste flows

###### Untreated textile waste water (`untreated_wastewater_input`)

Transfer the same volume and pollutant loads reported as wet-processing waste output; preserve stream identity and avoid creating a second generation event.

- Selected flow: Textile wet-process waste water sent to on-site treatment
- Flow property / unit: Volume / m3
- Amount rule: measured inlet volume and calculated substance-specific loads
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 treated and per kg reference fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-textiles-bref-2023`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered process water (`recovered_process_water`)

Record recovered water or material only when it meets a declared specification and is transferred for reuse; otherwise retain it as a waste or elementary discharge.

- Selected flow: Recovered textile-process water
- Flow property / unit: Volume / m3
- Amount rule: measured quantity meeting the declared reuse specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 waste water treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`

##### Waste flows

###### Waste-water treatment sludge (`treatment_sludge`)

Record wet and dry mass, dry-solids content, hazardous classification, and treatment destination without crediting recycling unless the allocation rule is applied and disclosed.

- Selected flow: Textile waste-water-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet mass and dry-solids fraction; report dry mass as a calculated companion value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 waste water treated and per kg reference fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`

##### Elementary flows

###### Chemical oxygen demand discharged to water (`treated_effluent_cod`)

Record chemical oxygen demand as an elementary emission only for a direct discharge from the foreground treatment system; off-site transfer remains a waste flow.

- Selected flow: Chemical Oxygen Demand to water, unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: matched effluent COD concentration and discharge volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 waste water treated and per kg reference fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-textiles-bref-2023`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all multifunctional foreground processes | First avoid allocation by separately metering batches, lines, recipes, treatment streams, and directly attributable utilities and wastes; use subdivision or an expanded multifunctional result when practicable. | `iso-14044-2006`; `ec-pef-method-2021` |
| `allocation_physical` | unavoidable shared inputs and outputs | If subdivision or system expansion is not practicable, allocate by a documented causal physical relationship such as machine time, metered energy, treated mass, liquor volume, or pollutant load that reflects the shared operation. | `iso-14044-2006`; `ec-pef-method-2021` |
| `allocation_other_relationship` | no defensible physical relationship | Use another relationship, including economic allocation, only after documenting why subdivision, system expansion, and physical allocation are not defensible; use values at the stage where the outputs arise and disclose a sensitivity check. | `ec-pef-method-2021` |
| `allocation_rework` | rework and repeat processing | Assign planned repeat treatments required by the product specification to the product; assign avoidable rework caused by nonconformity to the affected production lot and disclose it rather than inflating the normal activity denominator. | `eu-jrc-textiles-bref-2023` |
| `allocation_waste_and_recovery` | textile waste, recovered size, recovered water, sludge, and recovered energy | Keep waste treatment burdens with the generating system until the receiving product or waste-treatment boundary is reached. Record recovered outputs separately and apply any substitution or recycling credit only in a downstream lifecycle model with the method and quality relationship disclosed. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_receipt_preparation` | `yarn_receipt_and_preparation` | incoming yarn, preparation electricity, prepared yarn, and preparation waste | receiving, supplier, meter, and production records | supplier; lot; yarn identifier; fibre type and share; yarn count; gross/net mass; moisture basis; accepted/rejected mass; meter reading; operating time; waste type and destination | calibrated scale, supplier certificate verified by incoming inspection, electricity meter or documented equipment allocation, and waste weigh ticket | kg, %, kWh | each lot and meter interval; aggregate monthly | representative 12-month period or the complete shorter campaign with justification | all receiving and preparation operations serving the reference product | sum by yarn type and lot; allocate shared electricity by metered use or operating time; normalize to accepted prepared-yarn and final reference mass | calibration records, supplier certificates, laboratory composition checks, meter records, and waste receipts |
| `cp_warp_sizing` | `warp_preparation_and_sizing` | warp yarn, sizing recipe, water, utilities, prepared warp, and sizing waste | batch recipe, issue/return, meter, and production records | warp lot; input/output mass; size product and quantity; recipe volume; water; electricity; steam/fuel; retained add-on; waste-water volume; solid waste and destination | calibrated scale, dosing record, recipe controller, utility meter, and waste measurement | kg, m3, kWh | each batch or beam; aggregate monthly | representative 12-month period or complete campaign | every included warping, beaming, and sizing line | subtract documented material returns; calculate retained size and normalize all inputs/outputs to prepared warp and reference fabric | scale/meter calibration, batch sheet, chemical inventory, and mass-balance review |
| `cp_weaving` | `weaving` | warp/weft yarn, energy, greige fabric, textile waste, and direct dust | loom, meter, production, quality, waste, and emission records | loom id; technology; yarn issued/returned; operating time; electricity; compressed air; greige length/width/basis mass/net mass; reject mass; waste destination; dust concentration/flow or factor | loom counter, calibrated scale, electricity/air meter, QC test, waste weigh ticket, and representative emission measurement | kg, m, m2, g/m2, kWh, kg pollutant | each lot and meter interval; emissions at representative operation | representative 12-month period or complete campaign | every loom and shared preparation system serving the reference product | reconcile yarn input with greige output and waste; allocate shared utilities by metered use or loom operating time | meter/scale calibration, loom logs, QC report, waste receipt, and emission-method record |
| `cp_wet_processing` | `wet_pretreatment_and_coloration` | fabric, water, chemicals, utilities, output, waste water, residues, and direct emissions | batch/continuous recipe, flowmeter, dosing, meter, laboratory, waste, and emissions records | operation/recipe; textile input/output mass; repeat count and reason; fresh/reused water; chemical identity/quantity/density; electricity; steam/fuel; waste-water flow/pH/temperature/conductivity; pollutant concentration; waste; air concentration/flow | automated recipe controller, calibrated flow/energy meter, issue/return record, laboratory analysis, and compliant emission monitoring | kg, m3, kWh, concentration and kg pollutant | each operation and meter interval; environmental monitoring at required risk-based frequency; aggregate monthly and annually | representative 12-month period or complete campaign | every included wet-processing line and relevant discharge/emission point | retain distinct operations and repeats; calculate mass loads from concentration and flow; do not count internal water reuse as new withdrawal | calibration, chain of custody, laboratory QA/QC, recipe record, and discharge/emission report |
| `cp_finishing_inspection` | `finishing_inspection_and_packaging` | finishing utilities, packaging, conforming fabric, rejects, and air emissions | meter, production, packing, QC, waste, and emission records | finish route; equipment; input/output mass; length; width; basis mass; moisture; temperature; operating time; energy; package material/mass; quality grade; reject cause/mass; emission concentration/flow | calibrated scale and meter, line controller, laboratory/QC test, packing issue record, waste receipt, and representative emission measurement | kg, m, g/m2, kWh, kg pollutant | each lot and meter interval; aggregate monthly | representative 12-month period or complete campaign | every included finishing, inspection, and packing line | separate net fabric from packaging; normalize only conforming output; allocate shared utilities by meter or operating time | calibration, QC specification and result, batch release, packing record, and emission-method record |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | untreated waste water, treatment inputs, recovered outputs, sludge, and final effluent | flowmeter, dosing, meter, laboratory, sludge, recovery, and discharge records | inlet/outlet flow; pH; temperature; conductivity; relevant pollutant concentrations; chemical dose; electricity; sludge wet/dry mass; recovery quantity/specification; discharge destination | calibrated flow/energy meter, dosing log, accredited or controlled laboratory analysis, sludge weigh ticket, and discharge monitoring | m3, kg, kWh, concentration | continuous or batch flow; pollutant monitoring at risk-based frequency; aggregate monthly and annually | representative 12-month period or complete campaign | complete on-site treatment system receiving foreground waste water | calculate inlet/outlet pollutant loads; reconcile water flow; allocate shared treatment by causal volume and pollutant load | calibration, blanks/duplicates, chain of custody, laboratory QA/QC, disposal receipt, and permit report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | `normalized_quantity = attributable_period_quantity / conforming_net_fabric_mass`; use one consistent moisture basis and exclude packaging from the denominator | attributable row quantity; conforming net fabric mass; moisture conversion | quantity per kg reference fabric | `ec-pef-method-2021` |
| `calc_fibre_composition` | reference product | `fibre_share_i = sum(yarn_mass_j × certified_share_i,j) / sum(all_fibre_mass)` after moisture-basis alignment; all shares sum to 100% | yarn masses; supplier composition; laboratory verification; moisture basis | mass share of each fibre and category-conformance decision |  |
| `calc_area_mass` | fabric mass cross-check | `mass_kg = length_m × usable_width_m × basis_mass_g_per_m2 / 1000`; compare with calibrated-scale mass and investigate material difference | length; usable width; g/m2; scale mass | calculated mass and reconciliation difference |  |
| `calc_textile_mass_balance` | each textile process and reporting period | `textile_input = conforming_output + transferred_intermediate + textile_waste + inventory_change + documented_mass_change`; quantify and explain the residual | conditioned input/output mass; wastes; stock change; retained size/finish; moisture conversion | mass-balance residual per process and for the foreground system | `eu-jrc-textiles-bref-2023` |
| `calc_shared_utility_allocation` | shared electricity, steam, fuel, water, and compressed air | Prefer submetering; otherwise allocate by equipment operating time × rated demand × measured load factor or another documented causal driver, and retain total-site reconciliation | site meter; submeter; equipment power; operating time; load factor; production mass | attributable utility by process and product | `ec-pef-method-2021` |
| `calc_water_balance` | wet processing and waste-water treatment | `fresh_withdrawal + transferred_water = effluent + evaporation + retained_water + recovered_export + inventory_change`; internal reuse is tracked but not counted as new withdrawal | flowmeter and recipe volumes; product moisture; effluent and recovery volumes | water-balance residual and fresh-water intensity | `eu-jrc-textiles-bref-2023` |
| `calc_pollutant_load` | waste-water and air emissions | `load_kg = concentration × standardized_flow_or_volume × operating_time × unit_conversion`; use matched sampling and flow periods and report values below detection limits consistently | concentration; flow/volume; duration; detection limit; standard conditions | substance-specific kg emission per kg reference fabric | `eu-jrc-textiles-bref-2023` |
| `calc_treatment_removal` | on-site waste-water treatment | `removal = inlet_load - outlet_load - recovered_load - retained_inventory_change`; do not report negative or greater-than-input removal without investigation | inlet/outlet pollutant loads; recovered outputs; inventory changes | removed load, final discharge, and reconciliation residual | `eu-jrc-textiles-bref-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_product_identity` | reference product and textile inputs | Preserve supplier/lot traceability, fibre type and share, yarn count, weave, g/m2, width, finish state, quality grade, and moisture basis; verify the below-85% man-made staple and cotton-predominant scope before normalization. | Supplier declarations, bill of materials, laboratory fibre analysis, batch card, and QC release |
| `dqr_measurement` | mass, water, energy, chemicals, and emissions | Use calibrated or verified measurement systems; document units, conversion factors, detection limits, density conversions, meter coverage, and estimated-data methods. | Calibration certificates, meter maps, laboratory QA/QC, and calculation records |
| `dqr_temporal` | foreground reporting period | Prefer a continuous representative 12-month period that captures product and seasonal variability; a shorter complete campaign is allowed only with dates, coverage, and representativeness limitations disclosed. | Production calendar, meter interval coverage, and representativeness statement |
| `dqr_site_and_technology` | foreground process coverage | Include every site, line, loom technology, wet-processing route, and controlled subcontractor materially serving the declared product, or document a production-weighted sampling and its exclusions. | Site/line list, production shares, sampling plan, and subcontract records |
| `dqr_completeness` | foreground inventory | Reconcile textile mass, water, and energy totals to site or line control totals and keep all identified direct emissions and wastes visible; unresolved flows remain explicit data gaps. | Signed mass/water/energy balances, control totals, waste register, and gap log |
| `dqr_allocation` | shared and multifunctional operations | Retain the selected hierarchy step, causal driver, totals, allocation factors, and sensitivity result; allocated process totals shall equal the unallocated control total. | Meter totals, driver records, allocation workbook, and sensitivity result |
| `dqr_upstream_links` | purchased yarns, utilities, chemicals, transport, and treatments | Use geographically, technologically, and temporally representative linked datasets; document dataset identity, version outside this PCR, reference quantity, and any proxy limitation. | Dataset references and data-quality assessment consistent with `ec-pef-method-2021` |
| `dqr_blended_textile_uncertainty` | blended-fabric inventory | Do not infer missing foreground quantities from generic cotton/polyester blend literature; collect route-specific records and disclose composition, process, temporal, and technology uncertainty. | Foreground records, uncertainty statement, and `valtere-et-al-2024` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | reference product | Confirm the reference-flow UUID and Mass property, all required qualifiers, man-made staple share below 85%, cotton as the sole or predominant blend partner, and exclusion of out-of-scope fabric types. |  |
| `validate_reference_quantity` | normalized foreground dataset | Confirm exactly 1 kg conforming net fabric output, no packaging mass in the reference amount, and one declared moisture/conditioning basis across the textile mass balance. | `ec-pef-method-2021` |
| `validate_process_coverage` | process map and inventory | Confirm every required process is present, every applicable conditional process is included, repeated treatments and subcontracted operations are disclosed, and excluded operations have an explicit reason. | `eu-jrc-textiles-bref-2023` |
| `validate_mass_water_energy_balances` | foreground records | Confirm textile mass, water, and energy balances reconcile to control totals within the producer's documented measurement uncertainty; investigate and disclose every residual outside that tolerance. | `eu-jrc-textiles-bref-2023` |
| `validate_flow_destinations` | product, waste, and elementary outputs | Confirm every output has exactly one modelling role and destination; distinguish direct elementary emissions, waste sent to treatment, internally reused material, and saleable co-products without double counting. | `ec-pef-method-2021` |
| `validate_allocation` | shared or multifunctional processes | Confirm the allocation hierarchy is followed, allocated totals equal unallocated totals, causal physical drivers are preferred, and any other relationship has justification and sensitivity disclosure. | `ec-pef-method-2021` |
| `validate_monitoring_and_loads` | wet processing, thermal finishing, and waste-water treatment | Confirm water, energy, material, waste, waste-water, and relevant emission monitoring covers the declared period and that pollutant loads use matched concentrations, flows, durations, and units. | `eu-jrc-textiles-bref-2023` |
| `validate_source_and_range_status` | evidence and ranges | Confirm every retained quantitative range is traceable to a listed external source or foreground dataset; reject AI-authored or otherwise unsupported numerical ranges. | `valtere-et-al-2024` |
| `validate_upstream_and_downstream_boundary` | dataset profile | Confirm purchased inputs and off-site treatments have linked upstream datasets and that distribution, use, and end-of-life are not silently included in the intermediate-product foreground result. | `ec-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground fabric-manufacturing data package with process-level records and a normalized market-ready woven-fabric output |
| downstream_use | `secondary_dataset`; may be aggregated or linked as a `background_dataset` for garments, made-up textiles, and other downstream product systems |
| allowed_use | Construction of site- and route-specific unit processes, cradle-to-gate fabric results when linked to representative upstream datasets, and lifecyclemodel projections consistent with the declared fabric qualifiers and boundary |
| excluded_use | Direct representation of fabrics outside the composition or construction scope; representation of garments, consumer use, laundering, durability, recycling, or end-of-life without additional downstream PCR rules and data |
| required_metadata | PCR id; product-flow UUID; fibre types and mass shares; yarn and weave specification; g/m2; usable width; finish and colour; quality grade; moisture basis; site/geography; technology route; included and subcontracted processes; reporting period; allocation; source ids; data gaps |
| required_quality_disclosure | Measurement and meter coverage; mass/water/energy balance residuals; temporal/site/technology representativeness; sampling; allocation sensitivity; emission and waste-water monitoring; upstream dataset quality; source-backed ranges and unresolved identities |
| update_trigger | Change in fibre composition or product scope; yarn or loom technology; sizing, dyeing, printing, or finishing recipe; market finish state; site or energy/water supply; treatment route; allocation driver; emission control; reference UUID/property/unit; official method or evidence ranges; or a material data-quality gap closure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | Standard (`standard`) | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0, Explanatory Notes*, subclass 26760, 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Official CPC 26760 product identity and neighbouring-subclass exclusions |
| `eu-jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-12) | Woven-fabric preparation, pretreatment, dyeing, printing, finishing, input/output inventories, monitoring, water and energy management, air emissions, waste water, and treatment requirements |
| `eu-bat-textiles-2022` | Standard (`standard`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, 2022, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj/eng (retrieved 2026-08-12) | Annual process-level monitoring; operation-specific water-use ranges; 0.5-4.4 MWh/t thermal-treatment energy range; chemical, waste, waste-water, and emission controls |
| `iso-14040-2006` | Standard (`standard`) | ISO 14040:2006, *Environmental management — Life cycle assessment — Principles and framework*, https://www.iso.org/standard/37456.html (retrieved 2026-08-12) | LCA goal and scope, inventory, interpretation, reporting, and critical-review framework |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, https://www.iso.org/standard/38498.html (retrieved 2026-08-12) | LCI requirements, system boundary, allocation hierarchy, data quality, reporting, and review |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Functional-unit dimensions; intermediate-product boundary; foreground/upstream linkage; flow completeness; allocation hierarchy; company-specific data and data-quality requirements |
| `kalliala-nousiainen-1999` | Literature (`literature`) | E. M. Kalliala and P. Nousiainen, “Environmental profile of cotton and polyester-cotton fabrics,” *AUTEX Research Journal* 1(1), 8-20, 1999, https://doi.org/10.1515/aut-1999-010102 | Peer-reviewed full-text evidence for cotton/polyester-cotton fabric routes and the need to preserve composition, processing, and service assumptions |
| `valtere-et-al-2024` | Literature (`literature`) | M. Valtere, T. Bezrucko, M. Poberznik, I. Vamza, and D. Blumberga, “Uncertainty of Life Cycle Assessment Studies for Blended Textiles,” *Environmental and Climate Technologies* 28(1), 794-811, 2024, https://doi.org/10.2478/rtuect-2024-0061 | Open full-text peer-reviewed evidence that generic cotton/polyester blend inventories have substantial uncertainty and should not replace route-specific foreground records |
