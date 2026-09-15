---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-yarn-other-than-sewing-thread-containing-less-than-85-by-weight-of-cotton
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cotton yarn (other than sewing thread), containing less than 85% by weight of cotton

## 1. Scope and Applicability

This PCR covers the gate-to-gate production of saleable yarn that contains cotton, contains less than 85% cotton by mass, and is not sewing thread. It covers blends made by combining cotton with one or more declared non-cotton staple fibres and includes the mill operations needed to convert the received fibres into packaged yarn. The default route is short-staple spinning; an alternative route is permitted when the blend partner or yarn specification requires it and the route is disclosed.

The foreground boundary starts with fibres received in a condition suitable for the declared spinning route. It includes receipt and storage, opening and cleaning, blending, carding, drawing, optional combing and roving, spinning, optional twisting, winding, quality control, and packaging. Fibre or yarn wet processing is included only when it is performed by the reporting site before the reference yarn leaves the gate. Upstream cotton cultivation and ginning, production of non-cotton fibres, off-site treatment of wastes and wastewater, capital goods, downstream fabric manufacture, product use, and end of life require separate datasets.

The PCR does not cover cotton yarn containing 85% or more cotton by mass, cotton sewing thread, continuous-filament yarn without a staple-fibre spinning stage, fibre preparation sold as a separate product, woven or knitted fabric, or finished articles. A data package shall declare cotton fraction, all blend partners, recycled-content status, yarn count system and value, twist, spinning technology, colour or wet-processing state, moisture or commercial mass convention, quality grade, package form, geography, and reporting period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-yarn-other-than-sewing-thread-containing-less-than-85-by-weight-of-cotton |
| classification_refs | CPC 3.0: 26370, exact mapping context |
| covered_products | Saleable staple-fibre yarn containing cotton at greater than 0% and less than 85% by mass, excluding sewing thread; greige, bleached, dyed, recycled-content, single, folded, ring-spun, rotor-spun, air-jet-spun, or another declared spinning technology when the route is documented |
| excluded_products | Cotton yarn with cotton content of 85% or more by mass; cotton sewing thread; yarn with no cotton; continuous-filament yarn without staple spinning; roving or sliver sold as fibre preparation; fabrics and finished textile articles |
| representative_product | Packaged greige cotton/polyester blended yarn produced by short-staple spinning |
| production_route | Received cotton and declared non-cotton staple fibres -> opening/cleaning/blending -> carding/drawing -> optional combing/roving -> spinning -> optional twisting -> winding/quality control -> packaging; include on-site wet processing when performed |
| market_state | Saleable yarn at the manufacturing gate, on the declared moisture or commercial mass basis, with blend composition, count, twist, spinning technology, colour state, quality grade, and package form declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cotton-containing blended yarn, other than sewing thread, supplied for downstream textile manufacture |
| How much | 1 kg net saleable yarn at the manufacturing gate |
| How well | Cotton content is greater than 0% and less than 85% by mass; the yarn meets the declared blend composition, yarn count, twist, strength or quality grade, colour state, moisture convention, spinning technology, and package specification |
| How long or cycle | One delivery of intermediate yarn at the factory gate; no use-duration function applies |
| reference_flow_link | The reference flow is the net mass of conforming saleable yarn leaving the foreground system |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cotton yarn (other than sewing thread), containing less than 85% by weight of cotton `c18d2185-7f88-431e-8bfe-8180bb29e192` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cotton mass fraction and composition test or supplier declaration basis; identity and mass fraction of every non-cotton fibre; virgin or recycled status by fibre; yarn count system and value; twist level and direction; spinning technology; single or folded construction; greige, bleached, dyed, or otherwise treated state; moisture or commercial mass convention; quality grade; package form; production geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground inputs and outputs to 1 kg net conforming yarn. Exclude cores, cones, cartons, straps, and other packaging from the reference mass and record them separately. |
| `composition_mass_fraction` | cotton and blend-partner composition | Mass fraction | kg fibre/kg total fibre | Determine cotton and other fibre fractions on one declared and consistently applied basis. Use ISO 1833-1 and the applicable mixture-specific part, or an equivalent validated method, when laboratory separation is required; report the method, moisture correction, and treatment of non-fibrous matter. |
| `cotton_threshold` | reference product identity | Cotton mass fraction | kg cotton/kg total fibre | The measured or verified cotton fraction shall be greater than 0 and strictly less than 0.85. A result at or above 0.85 or a yarn with no cotton is outside this PCR. |
| `commercial_mass_conversion` | yarn and fibre masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If invoices or production systems use conditioned or commercial mass, retain the observed mass and moisture basis and convert to the declared reference basis with an explicit, auditable formula. |
| `energy_units` | electricity and thermal energy | Energy | kWh or MJ | Preserve metered units. Convert only with a stated factor, identify whether fuel data are mass, volume, lower-heating-value energy, or higher-heating-value energy, and prevent double counting between fuel and purchased heat. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground spinning system | Include all on-site operations from receipt of ready-to-spin fibres through packaged saleable yarn, including utilities, material losses, waste, and direct emissions attributable to the declared product. | `eu-jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `boundary_rule_2` | upstream fibre and auxiliary production | Model cotton fibre, each non-cotton fibre, electricity, fuels, water, chemicals, and packaging with separate upstream datasets. Do not recursively reproduce this yarn PCR for an input yarn of the same category. | `ec-pef-method-2021` |
| `boundary_rule_3` | conditional operations | Include combing, roving, twisting, wet processing, wastewater treatment, humidification, compressed air, and on-site energy generation when performed or materially attributable; otherwise disclose the exclusion. | `eu-jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `boundary_rule_4` | exclusions and cut-off | Do not omit a known material, energy, waste, or direct-emission flow merely because it is small. Any cut-off used in a downstream PEF-conformant study shall be explicit, justified, and checked against the applicable study rule. | `ec-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cotton and every non-cotton blend fibre are received at the yarn mill in a declared grade, moisture state, package form, origin, and virgin or recycled state suitable for the selected spinning route. |
| starting_condition_role | The received fibre condition is the foreground gate; upstream fibre cultivation, extraction, polymer production, ginning, recycling, and fibre manufacture are represented by linked datasets. |
| product_classification_scope | Cotton-containing blended yarn other than sewing thread, with cotton content greater than 0% and less than 85% by mass. |
| recursive_input_rule | If yarn in this same product category is consumed as an input, record its measured amount and link a separate upstream yarn dataset; do not expand the same foreground spinning operations recursively. |
| upstream_dataset_requirement | Use composition-, origin-, recycled-content-, technology-, geography-, and time-representative datasets for cotton, each blend partner, purchased energy, auxiliaries, packaging, transport when in scope, and off-site treatment. |
| disclosure | Disclose fibre composition and test basis, starting moisture condition, spinning route, wet-processing state, foreground ownership, excluded operations, allocation, cut-off, upstream dataset choices, and all provisional estimates. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fibre_opening_blending` | Fibre receipt, opening, cleaning, and blending | required | Always | Establish the declared fibre recipe, remove foreign matter, and prepare a consistent blend | kg prepared blend transferred |
| `carding_drawing_preparation` | Carding, drawing, and spinning preparation | required | Always | Align and equalize fibres; include combing and roving when used | kg sliver or roving transferred |
| `spinning_winding_packaging` | Spinning, twisting, winding, quality control, and packaging | required | Always | Form and package conforming saleable yarn | 1 kg net conforming yarn |
| `onsite_wet_processing` | On-site fibre or yarn wet processing | conditional | Include when bleaching, dyeing, washing, scouring, or another wet treatment is performed before sale | Apply and remove treatment chemicals and manage water, energy, and effluent | kg treated yarn output |

### Process: Fibre receipt, opening, cleaning, and blending (`fibre_opening_blending`)

#### Inputs

##### Product flows

###### Cotton fibre input (`cotton_fibre_input`)

Record the received cotton fibre that enters the declared blend, separated by origin, grade, and virgin or recycled status when these attributes differ.

- Selected flow: Cotton fibre, supplier-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass corrected to the declared fibre mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_opening_blending`
- Sources: `eu-jrc-textiles-bref-2023`
- Range: Provisional cotton-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1.10
  - Unit: kg/kg net conforming yarn
  - Basis: received cotton input before process losses per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Non-cotton blend-fibre input (`blend_partner_fibre_input`)

Record each non-cotton fibre separately by fibre name, origin, grade, and virgin or recycled status; do not aggregate different fibre types into an unidentified balance.

- Selected flow: Declared non-cotton staple fibre, supplier-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass for each blend partner corrected to the declared fibre mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_opening_blending`
- Sources: `eu-jrc-textiles-bref-2023`
- Range: Provisional blend-partner input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.15
  - Upper: 1.10
  - Unit: kg/kg net conforming yarn
  - Basis: total received non-cotton fibre input before process losses per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for opening and blending (`opening_blending_electricity`)

Record metered electricity for bale opening, cleaning, material conveying, blending, local extraction, humidification, and attributable auxiliaries.

- Selected flow: Electricity, applicable grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: allocated meter consumption for the process and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared blend transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_opening_blending`
- Range: Provisional electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 2.0
  - Unit: kWh/kg prepared blend
  - Basis: opening, cleaning, blending, conveying, and attributable services
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water and preparation auxiliaries (`blend_conditioning_inputs`)

Record water, antistatic agents, lubricants, or other preparations applied to fibres during opening and blending. Record zero only when verified absent.

- Selected flow: Process water and each declared preparation auxiliary
- Flow property / unit: Mass / kg; water may additionally be retained in m3 with conversion
- Amount rule: measured or purchased-and-reconciled use attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared blend transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_opening_blending`
- Sources: `eu-jrc-textiles-bref-2023`
- Range: Provisional total preparation-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg prepared blend
  - Basis: combined added water and preparation products excluding ambient humidity control
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fibre blend (`prepared_fibre_blend`)

Record the mass transferred to carding and retain the lot-level fibre recipe.

- Selected flow: Prepared cotton-containing fibre blend, internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared blend transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_opening_blending`

##### Waste flows

###### Opening and cleaning rejects (`opening_cleaning_rejects`)

Record foreign matter, unusable fibre, and other rejects by disposition; keep recovered fibre separate from disposal waste.

- Selected flow: Fibre and foreign-matter rejects, destination-specific waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared blend transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_opening_blending`
- Range: Provisional reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg prepared blend
  - Basis: total opening and cleaning rejects before any credited recovery
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incoming packaging waste (`incoming_packaging_waste`)

Record bale wrap, straps, pallets, and other packaging leaving the foreground as waste, reuse, or recycling streams.

- Selected flow: Packaging waste, material- and destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-reconciled packaging mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared blend transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_opening_blending`
- Range: Provisional incoming-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg prepared blend
  - Basis: non-reused incoming packaging leaving the process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured fibre dust to air (`opening_dust_to_air`)

Record measured or calculated particulate matter released after the applicable collection system; collected dust is a waste flow, not a direct emission.

- Selected flow: Particulate matter, emission to air, applicable size fraction
- Flow property / unit: Mass / kg
- Amount rule: stack or workplace-exhaust measurement, or airflow multiplied by measured concentration and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared blend transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibre_opening_blending`
- Range: Provisional dust-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg prepared blend
  - Basis: uncaptured particulate matter after control
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Carding, drawing, and spinning preparation (`carding_drawing_preparation`)

#### Inputs

##### Product flows

###### Prepared fibre blend input (`prepared_blend_input`)

Record the mass and lot identity of prepared blend entering carding.

- Selected flow: Prepared cotton-containing fibre blend, internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured process input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sliver or roving transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carding_drawing_preparation`

###### Electricity for carding and preparation (`carding_preparation_electricity`)

Record electricity for carding, drawing, optional combing, optional roving, conveying, extraction, compressed air, and attributable services.

- Selected flow: Electricity, applicable grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: allocated meter consumption for the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sliver or roving transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carding_drawing_preparation`
- Range: Provisional electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 4.0
  - Unit: kWh/kg sliver or roving
  - Basis: declared carding, drawing, combing, roving, conveying, extraction, and services
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sliver or roving transferred to spinning (`sliver_roving_output`)

Record the mass and route state transferred to the spinning frame.

- Selected flow: Cotton-containing sliver or roving, internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sliver or roving transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carding_drawing_preparation`

##### Waste flows

###### Carding, combing, and drawing fibre waste (`preparation_fibre_waste`)

Record card waste, comber noils, sliver waste, and other fibre losses separately when their quality or destination differs.

- Selected flow: Textile fibre preparation waste, quality- and destination-specific waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by waste class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sliver or roving transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carding_drawing_preparation`
- Range: Provisional preparation-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg sliver or roving
  - Basis: total fibre preparation waste before recovery credit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured carding and preparation dust to air (`preparation_dust_to_air`)

Record particulate releases after collection; report size fractions when measurements distinguish them.

- Selected flow: Particulate matter, emission to air, applicable size fraction
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated airflow-concentration result
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sliver or roving transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carding_drawing_preparation`
- Range: Provisional dust-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg sliver or roving
  - Basis: uncaptured particulate matter after control
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Spinning, twisting, winding, quality control, and packaging (`spinning_winding_packaging`)

#### Inputs

##### Product flows

###### Sliver or roving input (`sliver_roving_input`)

Record the prepared fibre mass entering the declared spinning technology.

- Selected flow: Cotton-containing sliver or roving, internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured process input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_winding_packaging`

###### Electricity for spinning and winding (`spinning_winding_electricity`)

Record electricity for spinning frames, optional twisting, winding, suction, compressed air, humidification, quality control, and packaging equipment.

- Selected flow: Electricity, applicable grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: allocated meter consumption for the declared product and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_winding_packaging`
- Range: Provisional electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.10
  - Upper: 8.0
  - Unit: kWh/kg net conforming yarn
  - Basis: spinning, optional twisting, winding, suction, compressed air, humidification, quality control, and packaging
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spinning and winding auxiliaries (`spinning_auxiliaries`)

Record lubricants, antistatic agents, waxes, cleaners retained on or used for the yarn. Keep machine lubricants that do not contact the product separate from product-applied preparations.

- Selected flow: Each spinning, winding, or product preparation auxiliary
- Flow property / unit: Mass / kg
- Amount rule: measured issue or purchase-and-stock reconciliation attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_winding_packaging`
- Sources: `eu-jrc-textiles-bref-2023`
- Range: Provisional auxiliary-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg net conforming yarn
  - Basis: total product-contact spinning and winding auxiliaries
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Yarn packaging materials (`yarn_packaging_input`)

Record cones, tubes, cartons, films, straps, pallets, and labels by material and reuse status.

- Selected flow: Packaging material, material-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: measured bill of materials or purchase-and-stock reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_winding_packaging`
- Range: Provisional packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.20
  - Unit: kg/kg net conforming yarn
  - Basis: gross packaging supplied with or attributable to the reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming saleable blended cotton yarn (`reference_yarn_output`)

The output is the net reference product after rejection of off-specification yarn and exclusion of packaging mass.

- Selected flow: Cotton yarn (other than sewing thread), containing less than 85% by weight of cotton `c18d2185-7f88-431e-8bfe-8180bb29e192`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net conforming yarn
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Spinning and winding fibre waste (`spinning_fibre_waste`)

Record pneumafil, clearer waste, piecing waste, off-specification yarn, and other fibre-bearing waste separately by recoverability and destination.

- Selected flow: Textile spinning waste, quality- and destination-specific waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_winding_packaging`
- Range: Provisional spinning-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg net conforming yarn
  - Basis: total fibre-bearing spinning and winding waste before recovery credit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Auxiliary and maintenance waste (`spinning_auxiliary_waste`)

Record used oils, contaminated wipes, filters, and empty chemical containers by hazardous status and treatment destination.

- Selected flow: Auxiliary and maintenance waste, material- and destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass allocated to the reporting product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_winding_packaging`
- Range: Provisional maintenance-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg/kg net conforming yarn
  - Basis: auxiliary containers, filters, wipes, and used oils attributable to the product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured spinning dust to air (`spinning_dust_to_air`)

Record particulate releases after control using measured concentration and airflow where available.

- Selected flow: Particulate matter, emission to air, applicable size fraction
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated airflow-concentration result
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spinning_winding_packaging`
- Range: Provisional dust-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg net conforming yarn
  - Basis: uncaptured particulate matter after control
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: On-site fibre or yarn wet processing (`onsite_wet_processing`)

#### Inputs

##### Product flows

###### Material entering wet processing (`wet_processing_material_input`)

Record the dry or conditioned mass and state of loose fibre or yarn entering the on-site wet process.

- Selected flow: Cotton-containing fibre blend or yarn, internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass on the declared basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wet_processing`

###### Wet-processing water, chemicals, and energy (`wet_processing_inputs`)

Record water, dyes, salts, alkalis, acids, detergents, auxiliaries, electricity, steam, and fuel separately; do not use a single unidentified wet-processing input.

- Selected flow: Each water, chemical, electricity, purchased heat, or fuel input
- Flow property / unit: Mass, volume, or energy in the metered unit
- Amount rule: batch recipe and metered utility consumption reconciled to production records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`
- Range: Provisional wet-processing water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.50
  - Unit: m3/kg treated yarn
  - Basis: total process water for included fibre or yarn wet treatment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated yarn output (`treated_yarn_output`)

Record net conforming treated yarn and its final moisture, colour, and treatment state.

- Selected flow: Treated cotton-containing blended yarn, internal or reference product flow
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass on the reference basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wet_processing`

##### Waste flows

###### Wastewater and wet-processing residues (`wet_processing_waste`)

Record wastewater sent to on-site or off-site treatment, sludge, spent bath residues, and chemical packaging separately by destination.

- Selected flow: Wastewater or wet-processing residue, treatment-specific waste flow
- Flow property / unit: Volume / m3 for wastewater; Mass / kg for residues
- Amount rule: measured discharge volume and measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wet_processing`
- Range: Provisional wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: m3/kg treated yarn
  - Basis: wastewater transferred to treatment per treated yarn output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct wet-processing emissions (`wet_processing_direct_emissions`)

Report measured releases to air, water, and soil after on-site controls as individual elementary flows; do not substitute untreated wastewater volume for pollutant emissions.

- Selected flow: Each measured pollutant emitted to the applicable environmental compartment
- Flow property / unit: Mass / kg
- Amount rule: discharge concentration multiplied by measured flow and operating time, or direct mass measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wet_processing`
- Sources: `eu-jrc-textiles-bref-2023`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared equipment and utilities | Prefer product-specific metering and subdivision by process, machine, batch, or production order. Where subdivision is not feasible, use a documented causal physical driver such as machine-hours, airflow, steam, compressed-air demand, or mass throughput. | `ec-pef-method-2021` |
| `allocation_rule_2` | fibre waste and recoverable secondary outputs | Record gross inputs and all fibre-bearing outputs before credit. Do not subtract sold or internally recovered waste from input mass. If a downstream study assigns burdens or credits, disclose the method and keep the unallocated foreground inventory available. | `ec-pef-method-2021` |
| `allocation_rule_3` | multiple yarn products from one line | Allocate shared residual burdens using a measured physical relationship that reflects resource demand. Mass allocation is permitted only when no more representative physical driver is available; economic allocation requires explicit justification and sensitivity analysis. | `ec-pef-method-2021` |
| `allocation_rule_4` | internally recycled fibre | Treat internal rework as an internal loop: record the recovered mass, the process where it re-enters, and any additional energy or loss; prevent double counting as both avoided virgin input and exported co-product. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fibre_opening_blending` | `fibre_opening_blending` | received fibres, electricity, preparations, transfers, rejects, packaging, and dust | weighbridge or scale records; invoices; stock ledger; submeter; recipe; waste tickets; emission measurements | lot id; fibre type; cotton flag; virgin/recycled status; origin; grade; moisture basis; issued mass; transferred mass; electricity; preparation mass; reject mass; packaging mass and destination; airflow; dust concentration; operating time | reconcile opening-room production orders to calibrated scales, stock changes, submeters, recipes, waste records, and control-system measurements | kg; kWh; m3; mg/m3; h | per lot or batch for materials; continuous or shift meter readings; each waste movement; monitoring frequency required by permit for emissions | at least 12 consecutive representative months, or the full campaign for campaign production | all opening, blending, extraction, storage, and shared-service equipment attributable to the product | sum product-specific records; allocate only residual shared use with the disclosed physical driver; normalize to prepared blend and reference yarn | scale and meter calibration; stock reconciliation; recipe approval; waste transfer records; sampling plan; emission-monitoring report |
| `cp_carding_drawing_preparation` | `carding_drawing_preparation` | prepared blend, electricity, sliver/roving, fibre waste, and dust | production order; calibrated scale; submeter; machine counter; waste ticket; emission measurement | route; machine id; input mass; output mass; card waste; comber noils; other waste; electricity; compressed-air basis; airflow; dust concentration; operating time | reconcile each declared carded or combed route across material transfers, machine records, meters, and waste collection | kg; kWh; mg/m3; h | per lot or production order; shift or continuous energy readings; each waste movement; required emission-monitoring interval | same period as reference product data | all carding, drawing, optional combing, optional roving, conveying, extraction, and attributable services | aggregate only equivalent routes; retain combed and carded routes separately when their losses or energy differ materially | calibration; route traceability; mass reconciliation; meter coverage; waste classification; emission test report |
| `cp_spinning_winding_packaging` | `spinning_winding_packaging` | prepared fibre, electricity, auxiliaries, packaging, yarn output, waste, and dust | production order; scale; submeter; recipe or issue record; packaging bill; quality system; waste ticket; emission measurement | spinning technology; count; twist; input mass; good output mass; off-spec mass; waste class; electricity; auxiliary mass; packaging material and mass; airflow; dust concentration; operating time | reconcile production orders from spinning input through net packed yarn, excluding packaging from reference mass | kg; kWh; mg/m3; h | per production order; continuous or shift meters; each packaging issue and waste movement; required emission-monitoring interval | same period as reference product data | spinning, optional twisting, winding, suction, compressed air, humidification, laboratory, and packaging systems attributable to the product | aggregate only products with equivalent recipe and route; use net conforming yarn as denominator | scale and meter calibration; quality release; composition certificate or test; packaging specification; mass balance; emission report |
| `cp_onsite_wet_processing` | `onsite_wet_processing` | wet-process material, recipes, water, energy, chemicals, treated output, wastewater, residues, and direct emissions | batch card; recipe system; flowmeter; energy meter; chemical issue; laboratory analysis; wastewater and air monitoring; waste manifest | batch id; input/output mass and moisture; treatment; chemical identity and mass; water volume; electricity; steam or fuel; wastewater volume; pollutant concentration; sludge and residue mass; destination | reconcile each batch recipe and utility record with treated output and environmental monitoring | kg; m3; kWh; MJ; mg/L; mg/m3; h | per batch for material and chemicals; continuous or batch utilities; monitoring frequency required by permit | same period as reference product data and representative of declared shades or treatments | all included on-site fibre/yarn wet-process and treatment equipment | aggregate by equivalent treatment recipe; calculate direct emissions from measured concentration and flow; normalize to treated output and reference yarn | meter calibration; approved recipe; laboratory QA/QC; discharge records; permit reports; waste manifests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all foreground flows | normalized flow = attributable reporting-period flow / net conforming yarn mass on the declared reference basis | attributable flow; net conforming yarn mass; moisture conversion where applicable | flow per 1 kg reference yarn | `ec-pef-method-2021` |
| `calc_cotton_fraction` | product category check | cotton fraction = dry or declared-basis cotton mass / sum of all fibre masses on the same basis; apply a validated mixture-specific method when calculation from recipe is not sufficient | composition test or controlled recipe; moisture and non-fibrous-matter correction | cotton and blend-partner mass fractions | `iso-1833-1-2020` |
| `calc_mass_balance` | each process and total foreground | mass-balance difference = total mass inputs - product outputs - waste outputs - measured direct mass emissions - documented stock change; investigate unexplained differences and do not force them to zero by editing a waste flow | material inputs; outputs; wastes; emissions; stock changes | reconciliation difference and percentage |  |
| `calc_meter_allocation` | shared electricity, heat, water, and compressed air | allocate residual shared consumption with the most causal measured driver; disclose driver, numerator, denominator, and excluded loads | shared meter total; product-specific meter data; machine-hours, airflow, throughput, or other driver | attributable utility use | `ec-pef-method-2021` |
| `calc_direct_emission` | measured air or water releases | emitted mass = concentration x measured flow x operating duration, with unit conversion and blank or detection-limit treatment documented | concentration; flow; time; conversion factor | pollutant mass per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference yarn and fibre inputs | Preserve product-to-lot traceability and verify that cotton is present and below 85% by mass; identify every blend partner and recycled-content claim. | composition certificate or validated test; recipe approval; supplier lot records; finished-product release |
| `dq_measurement` | mass and utility data | Use calibrated scales and meters or reconcile purchases, stock changes, and production records. Document commercial-to-reference mass conversion and shared-meter allocation. | calibration certificates; meter map; invoices; stock reconciliation; allocation workbook |
| `dq_temporal` | reporting period | Cover at least 12 consecutive representative months unless production is campaign-based; explain shutdowns, abnormal batches, route changes, and any shorter period. | production calendar; batch list; maintenance and downtime logs |
| `dq_completeness` | foreground inventory | Include all known material, energy, water, product, waste, and direct-emission flows for included processes. Quantify missing-data share and do not silently omit a flow. | mass and energy balance; waste manifests; environmental monitoring; completeness checklist |
| `dq_representativeness` | foreground and upstream data | Assess technological, geographical, and time-related representativeness and precision; disclose proxy datasets and provisional estimates. | documented data-quality assessment consistent with the EC PEF criteria |
| `dq_route_separation` | materially different products or routes | Keep fibre recipes, spinning technologies, carded/combed routes, yarn counts, and wet-treatment recipes separate when aggregation would obscure materially different consumption or losses. | route-level production orders and meter or allocation records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product identity | Fail if the product is sewing thread, contains no cotton, or has a verified cotton mass fraction at or above 0.85. Fail if the fibre basis or blend partners are undeclared. | `unsd-cpc-3-0-2025`; `iso-1833-1-2020` |
| `validation_rule_2` | reference flow | Fail if the reference output is not 1 kg net conforming yarn on the declared moisture or commercial mass basis, if packaging is included in that mass, or if the specified Tiangong product-flow, Mass property, unit-group, and kg unit identities do not match. |  |
| `validation_rule_3` | process completeness | Fail if any required process lacks a matching inventory section or if an applicable combing, roving, twisting, wet-processing, wastewater-treatment, humidification, compressed-air, or on-site energy operation is omitted without disclosure. | `eu-jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `validation_rule_4` | mass balance | Flag an unexplained process or foreground mass-balance difference greater than 5% of input mass; fail when the difference cannot be reconciled before release. |  |
| `validation_rule_5` | foreground evidence | Fail if cotton and blend-partner masses, net yarn output, electricity, major auxiliaries, packaging, fibre waste, or applicable water and wastewater are represented only by a default estimate when foreground records are reasonably obtainable. | `ec-pef-method-2021` |
| `validation_rule_6` | estimates and source traceability | Flag every `reasoned_estimate` used in the candidate PCR; fail publication if it is used as an unreviewed publication-critical allowed range or if an external-source value lacks its cited source id. |  |
| `validation_rule_7` | allocation and double counting | Fail if shared burdens lack a stated driver, if recovered fibre is both credited and omitted from gross inputs, or if internally recycled fibre is counted simultaneously as an avoided input and an exported co-product. | `ec-pef-method-2021` |
| `validation_rule_8` | data quality and disclosure | Fail if period, geography, technology, fibre origins, recycled status, composition method, moisture convention, cut-off, allocation, wet-processing state, or upstream dataset choices are missing from the data package. | `ec-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset for cotton-containing blended yarn with cotton content below 85% by mass |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Link to downstream weaving, knitting, nonwoven, textile finishing, apparel, home-textile, or other product systems when composition, yarn construction, spinning technology, wet-processing state, geography, time, and quality are representative |
| excluded_use | Cotton yarn at or above 85% cotton; sewing thread; yarn with no cotton; continuous-filament yarn without staple spinning; unidentified fibre blends; a cradle-to-gate claim without linked upstream fibre and auxiliary datasets; comparative public claims without the applicable review and study rules |
| required_metadata | PCR id; product-flow UUID; net reference mass; cotton and each blend-partner fraction and test basis; virgin/recycled status; fibre origin; yarn count; twist; spinning technology; construction; colour/treatment state; moisture convention; package form; geography; reporting period; included processes; upstream datasets; cut-off; allocation |
| required_quality_disclosure | Data source and measurement method for each major flow; meter and scale coverage; mass-balance reconciliation; route separation; missing data; proxies; provisional estimates; technological, geographical, and temporal representativeness; precision; review status |
| update_trigger | Update when the fibre recipe, recycled content, spinning technology, yarn count family, wet-processing route, energy supply, allocation driver, site boundary, production geography, or representative reporting period changes materially, or when reviewed evidence replaces a provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, code 26370, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Official category identity and the less-than-85%-cotton boundary |
| `eu-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry (retrieved 2026-08-11) | Cotton fibre opening and cleaning; blending; carding, combing, drawing, roving, spinning, twisting, and winding process decomposition; blend handling; preparation-agent and downstream emissions relevance |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Functional unit and reference flow framing; system boundary; foreground company-specific data; allocation hierarchy; completeness, cut-off, and data-quality rules |
| `iso-1833-1-2020` | standard | ISO 1833-1:2020, *Textiles — Quantitative chemical analysis — Part 1: General principles of testing*, https://www.iso.org/standard/74881.html (retrieved 2026-08-11) | General composition testing basis for textile fibre mixtures; select the applicable mixture-specific ISO 1833 part for the declared blend |
