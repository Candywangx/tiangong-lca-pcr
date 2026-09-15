---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-85-or-more-by-weight-of-cotton-weighing-more-than-200-g-m2
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics of cotton, containing 85% or more by weight of cotton, weighing more than 200 g/m2

## 1. Scope and Applicability

This PCR applies to woven fabrics whose textile-fibre composition is at least 85% cotton by mass and whose declared mass per unit area is greater than 200 g/m2. It covers greige, bleached, dyed, printed, mercerised, coated, or otherwise finished variants only when their cotton content and mass-per-area threshold remain within this product category and the applied route is disclosed.

The foreground boundary starts with received cotton-rich yarn and ends with saleable woven fabric at the manufacturing gate. Yarn preparation, warp sizing when used, weaving, inspection, and packing are included. Desizing, scouring, bleaching, mercerising, dyeing, printing, finishing, thermal treatment, and on-site wastewater treatment are included when performed for the declared product. Cotton cultivation, ginning, spinning, manufacture of purchased chemicals and energy carriers, inbound and outbound transport, garment manufacture, use, and end of life are outside the foreground boundary and require separate upstream or downstream datasets when relevant.

Excluded products are fabrics below 85% cotton, fabrics at or below 200 g/m2, knitted or tufted fabrics, narrow fabrics, terry or pile fabrics governed by another product category, nonwoven materials, yarn, and finished garments. The dataset shall state whether the market state is greige or wet-finished; the two routes shall not be averaged without a documented production-weighted mix.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-85-or-more-by-weight-of-cotton-weighing-more-than-200-g-m2 |
| classification_refs | CPC 3.0: 26620 (exact scope reference) |
| covered_products | Woven cotton or cotton-rich fabrics containing at least 85% cotton by mass and weighing more than 200 g/m2, including declared greige and finished variants |
| excluded_products | Fabrics below 85% cotton; fabrics at or below 200 g/m2; knitted, tufted, nonwoven, narrow, terry, or pile fabrics; yarn and garments |
| representative_product | Saleable heavy cotton-rich woven fabric, production mix at plant, with declared cotton content, mass per unit area, weave, width, and finishing state |
| production_route | Received yarn preparation and optional sizing; weaving; conditional wet pre-treatment, coloration, and finishing; inspection and packing |
| market_state | Greige or finished fabric at the manufacturing gate; route and treatment state shall be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cotton-rich heavy woven fabric delivered at the manufacturing gate |
| How much | 1 kg net saleable fabric |
| How well | At least 85% cotton by mass and more than 200 g/m2, with declared weave, width, colour and finishing state |
| How long or cycle | One manufacturing batch at factory gate; no service-life duration is assigned to this intermediate product |
| reference_flow_link | ref_woven_cotton_fabric |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of cotton, containing 85% or more by weight of cotton, weighing more than 200 g/m2 `75725731-1147-4cf5-9d98-b66c539076dc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cotton mass fraction; mass per unit area in g/m2; weave construction; usable width; greige/bleached/dyed/printed/finished state; sizing chemistry and recovery status; wet-processing route; moisture or conditioning state; recycled-cotton share if any; site and production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net saleable fabric at the declared conditioning or moisture state; exclude pallets and transport packaging from the reference amount. |
| `areal_density_threshold` | Product category identity | Mass per unit area | g/m2 | Determine mass per unit area from a representative conditioned specimen or an equivalent controlled mill method and retain the test record; the lot-average value shall be greater than 200 g/m2. |
| `cotton_content_threshold` | Product category identity | Cotton mass fraction | % by mass | Use supplier composition evidence supported by a representative quantitative fibre analysis; the cotton fraction of the textile fibres shall be at least 85% by mass. Record the method, sampling basis, result, and applicable tolerance. |
| `area_conversion` | Supplementary area result | Mass and mass per unit area | m2 | For a declared areal density G in g/m2, calculate area represented by the reference flow as 1000/G m2 per kg. Do not use area to replace the mass reference flow. |
| `normalization_consistency` | All inventory rows | Row-specific property | Row-specific unit | Convert each collected amount to the 1 kg reference flow using the same net saleable output mass and production period; disclose moisture corrections and do not combine wet and dry mass bases silently. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received cotton-rich warp and weft yarn, or a disclosed same-category greige fabric input for a finishing-only site, with mass, cotton content, moisture state, origin, and sizing state recorded |
| starting_condition_role | Foreground manufacturing input; upstream cotton cultivation, ginning, spinning, and purchased-input production are represented by linked upstream datasets |
| product_classification_scope | Woven fabrics with at least 85% cotton by mass and more than 200 g/m2; route-specific greige and finished variants remain separately declared |
| recursive_input_rule | When a same-category fabric is received for finishing, record it as a product input with its own upstream dataset and do not recursively recreate its already completed weaving stages in the current foreground package |
| upstream_dataset_requirement | Link representative datasets for received yarn or fabric, electricity, fuels or steam, water supply, process chemicals, packaging, transport when in scope, and off-site waste or wastewater treatment |
| disclosure | Declare the site boundary, included operations, greige or finished market state, wet-processing and wastewater-treatment routes, outsourced operations, allocation choices, cut-offs, and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_process_inclusion` | Foreground manufacturing | Include yarn preparation, sizing when used, weaving, inspection, and packing; include pre-treatment, coloration, finishing, thermal treatment, and on-site wastewater treatment whenever performed for the declared product. | `eu-textiles-bat-2022` |
| `boundary_same_category_input` | Finishing-only or toll-processing sites | Treat received same-category greige fabric as a disclosed product input with an upstream dataset; do not double count upstream weaving. | `eu-pef-method-2021` |
| `boundary_cutoff` | Material, energy, waste, and emission flows | Avoid cut-offs. Any exclusion shall be quantified, justified, disclosed, and shall not hide hazardous chemicals, regulated emissions, or a route-defining process; the cumulative 3% PEF ceiling is an upper limit, not an automatic exclusion rule. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_sizing` | Yarn preparation and warp sizing | required | Sizing inputs and related water or residues are recorded only when sizing is applied | Foreground preparation | Per kg prepared yarn transferred to weaving and normalized to 1 kg saleable fabric |
| `weaving` | Weaving | required | Always included | Foreground fabric formation | Per kg greige woven fabric and normalized to 1 kg saleable fabric |
| `wet_processing_and_finishing` | Wet pre-treatment, coloration, finishing, and thermal treatment | conditional | Include each operation performed for the declared market state; omit only for a documented greige route | Foreground wet and thermal processing | Per kg textile treated and normalized to 1 kg saleable fabric |
| `inspection_and_packaging` | Inspection, trimming, and packing | required | Always included | Foreground finalisation | Per 1 kg net saleable fabric |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when wastewater is treated within the reporting site | Foreground treatment | Per m3 wastewater treated and normalized to 1 kg saleable fabric |

### Process: Yarn preparation and warp sizing (`yarn_preparation_and_sizing`)

#### Inputs

##### Product flows

###### Received cotton-rich warp and weft yarn (`received_cotton_rich_yarn`)

Record purchased or internally transferred yarn that crosses into yarn preparation. Supplier and lot records shall identify fibre composition, yarn count, mass, moisture state, and upstream dataset.

- Selected flow: Cotton or cotton-rich yarn, at least 85% cotton
- Flow property / unit: Mass / kg
- Amount rule: Measured yarn issued to the production batch, net of returned unopened material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:
- Range: Provisional yarn-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.95
  - Upper: 1.30
  - Unit: kg/kg saleable fabric
  - Basis: received yarn per 1 kg net saleable woven fabric
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sizing formulations (`sizing_formulations`)

Record each starch, polymer, lubricant, wetting agent, and other sizing formulation when warp sizing is applied. Retain product identity and safety information.

- Selected flow: Warp sizing chemicals
- Flow property / unit: Mass / kg
- Amount rule: Batch issue less documented returned or recovered sizing formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg sized warp yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional sizing-chemical screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg sized warp yarn
  - Basis: total sizing formulation applied per kg sized warp yarn
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for preparation and sizing (`preparation_sizing_electricity`)

Record metered or allocation-supported electricity for winding, warping, sizing, ventilation, and directly attributable auxiliaries.

- Selected flow: Electricity, site supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered consumption or calculated share from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared yarn transferred to weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional preparation-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1.50
  - Unit: kWh/kg prepared yarn
  - Basis: electricity per kg prepared yarn transferred to weaving
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sizing-bath make-up water (`sizing_water`)

Record make-up and cleaning water attributable to sizing, net of internally recycled water, when sizing is performed.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water intake minus verified internal reuse returned to the same process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg sized warp yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional sizing-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/1,000 kg sized warp yarn
  - Basis: net make-up and cleaning water per 1,000 kg sized warp yarn
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared warp and weft yarn transferred to weaving (`prepared_yarn_output`)

Record the measured mass transferred to weaving and reconcile it with received yarn, added sizing solids, returns, residues, and losses.

- Selected flow: Prepared warp and weft yarn
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `mass-balance-identity`
- Range: Prepared-yarn mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.90
  - Upper: 1.35
  - Unit: kg/kg saleable fabric
  - Basis: prepared yarn transferred per kg net saleable woven fabric
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Sizing residues and sizing wastewater (`sizing_residues_wastewater`)

Record residual size, cleaning liquor, and wastewater leaving the sizing process, separated by destination where records permit.

- Selected flow: Sizing residue or sizing wastewater
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measured discharge or calculated water-and-solids balance by treatment destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg sized warp yarn
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-textiles-bat-2022`; `mass-balance-identity`
- Range: Provisional sizing-residue and wastewater guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: m3/1,000 kg sized warp yarn
  - Basis: liquid-equivalent discharge per 1,000 kg sized warp yarn
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Weaving (`weaving`)

#### Inputs

##### Product flows

###### Prepared warp and weft yarn (`weaving_yarn_input`)

Record prepared yarn entering looms and reconcile it with greige fabric, reusable returns, yarn waste, dust, and inventory change.

- Selected flow: Prepared warp and weft yarn
- Flow property / unit: Mass / kg
- Amount rule: Measured loom issue adjusted for returned yarn and work-in-progress change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg greige woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `mass-balance-identity`
- Range: Provisional weaving-yarn screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.20
  - Unit: kg/kg greige fabric
  - Basis: prepared yarn consumed per kg greige woven fabric output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for weaving and compressed-air generation (`weaving_electricity`)

Record loom electricity and the attributable share of compressed-air generation, humidification, ventilation, and material handling. Air-jet pressure and loom type shall be disclosed.

- Selected flow: Electricity, site supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated equipment share, including compressed-air generation when used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg greige woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional weaving-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.10
  - Upper: 3.00
  - Unit: kWh/kg greige fabric
  - Basis: electricity including attributable compressed-air generation per kg greige woven fabric
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven fabric (`greige_fabric_output`)

Record greige fabric mass, length, width, areal density, weave, and moisture state at transfer to finishing or final inspection.

- Selected flow: Greige cotton-rich woven fabric over 200 g/m2
- Flow property / unit: Mass / kg
- Amount rule: Measured good-output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specification`
- Sources: `mass-balance-identity`
- Range: Provisional greige-output transfer range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.90
  - Upper: 1.20
  - Unit: kg/kg saleable fabric
  - Basis: greige fabric transferred per kg final saleable fabric
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Yarn and fabric weaving rejects (`weaving_rejects`)

Record loom waste, selvedge, start-up material, broken-yarn waste, and rejected greige fabric by recovery or disposal destination.

- Selected flow: Cotton-rich textile production waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste by destination, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg greige woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `mass-balance-identity`
- Range: Provisional weaving-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg greige fabric
  - Basis: weaving rejects per kg greige woven fabric output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Weaving dust released after abatement (`weaving_dust_emission`)

Record released textile dust when it crosses the site-to-air boundary; separately record collected dust as waste.

- Selected flow: Textile dust to air
- Flow property / unit: Mass / kg
- Amount rule: Stack or workplace-exhaust measurement, or calculated released mass after documented collection efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg greige woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional released-dust screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg greige fabric
  - Basis: released textile dust per kg greige woven fabric output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Wet pre-treatment, coloration, finishing, and thermal treatment (`wet_processing_and_finishing`)

#### Inputs

##### Product flows

###### Greige fabric sent to wet processing (`greige_fabric_wet_input`)

Record the mass and treatment state of fabric entering each wet or finishing route. Do not include this process for a documented greige market product.

- Selected flow: Greige cotton-rich woven fabric over 200 g/m2
- Flow property / unit: Mass / kg
- Amount rule: Measured treated textile mass by route and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-textiles-bat-2022`

###### Water for combined desizing, scouring, and bleaching (`pretreatment_water`)

Record fresh and reused water separately and report net specific water consumption for the combined cellulosic pre-treatment route.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Water intake for the process, washing, rinsing, and equipment cleaning minus verified reuse or recycling to the process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg textile treated in combined pre-treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-textiles-bat-2022`
- Range: BAT indicative combined-pre-treatment water range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 9
  - Upper: 20
  - Unit: m3/1,000 kg textile treated
  - Basis: combined bleaching, scouring, and desizing of cellulosic material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

###### Water for fabric dyeing (`dyeing_water`)

Record water for dyeing, washing, rinsing, and cleaning by batch or continuous route, net of verified reuse or recycling. Omit when the product is not dyed at the site.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Process water intake minus verified reuse or recycling to the dyeing process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fabric dyed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-textiles-bat-2022`
- Range: BAT indicative fabric-dyeing water span across continuous and batch routes
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 150
  - Unit: m3/1,000 kg fabric dyed
  - Basis: route-specific net water consumption per 1,000 kg fabric dyed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

###### Wet-processing and finishing chemicals (`wet_process_chemicals`)

Record each desizing, scouring, bleaching, mercerising, dyeing, printing, coating, softening, or finishing formulation used, including hazardous-substance classification and retained solids where applicable.

- Selected flow: Textile wet-processing and finishing chemicals
- Flow property / unit: Mass / kg
- Amount rule: Batch issue less documented returns, recovery, and reuse, separated by formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg textile treated by the applicable operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional aggregate chemical-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg textile treated
  - Basis: aggregate as-supplied process formulations per kg textile treated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Heat and electricity for wet and thermal processing (`wet_thermal_energy`)

Record purchased fuels, steam, heat, and electricity separately. For thermal treatment, report recovered heat as a separate internal flow or transparent subtraction consistent with the cited BAT indicator.

- Selected flow: Site-specific heat, steam, fuel, and electricity supplies
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocation-supported net energy by operation, preserving energy carrier and recovery information
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg textile undergoing thermal treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bat-2022`
- Range: BAT indicative thermal-treatment energy range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 4.4
  - Unit: kWh/kg textile thermally treated
  - Basis: net heat and electricity for thermal treatment per kg textile treated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished cotton-rich woven fabric (`finished_fabric_output`)

Record mass, length, width, areal density, cotton content, moisture state, colour, and finish at transfer to inspection.

- Selected flow: Finished cotton-rich woven fabric over 200 g/m2
- Flow property / unit: Mass / kg
- Amount rule: Measured good-output mass after the declared wet and thermal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specification`
- Sources: `mass-balance-identity`

##### Waste flows

###### Wet-process wastewater and spent liquors (`wet_process_wastewater`)

Record wastewater and concentrated spent liquor separately by process and treatment destination. Preserve volume, COD or TOC, relevant nitrogen, phosphorus, metals, salts, and hazardous-substance records where applicable.

- Selected flow: Textile-process wastewater or spent liquor
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge adjusted for inventory change, retained water, evaporation, reuse, and exported concentrated liquor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`; `mass-balance-identity`
- Range: Provisional combined wet-route wastewater guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 170
  - Unit: m3/1,000 kg saleable fabric
  - Basis: combined pre-treatment and dyeing discharge before treatment, adjusted for reuse and retention
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-process residues and rejected fabric (`wet_process_residues`)

Record recovered sizing, filter residues, chemical containers with residues, sludge generated within the process, and rejected fabric separately by destination.

- Selected flow: Textile wet-process residues
- Flow property / unit: Mass / kg
- Amount rule: Measured waste shipment or internally verified mass balance by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional wet-process residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg saleable fabric
  - Basis: wet-process solid residues and rejected fabric per kg saleable fabric
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct air emissions from singeing, drying, heat-setting, and finishing (`wet_process_air_emissions`)

Record pollutant-specific released mass for applicable operations, including dust and organic compounds after abatement. Do not aggregate unlike pollutants into one inventory amount.

- Selected flow: Pollutant-specific emissions to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific measured mass flow or calculated emission factor times activity, after documented abatement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg textile treated by the emitting operation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional pollutant-specific air-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg pollutant/kg textile treated
  - Basis: each pollutant reported separately after abatement per kg textile treated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Inspection, trimming, and packing (`inspection_and_packaging`)

#### Inputs

##### Product flows

###### Fabric entering final inspection (`fabric_inspection_input`)

Record the mass and route state of greige or finished fabric entering final inspection.

- Selected flow: Cotton-rich woven fabric over 200 g/m2 before final inspection
- Flow property / unit: Mass / kg
- Amount rule: Measured input mass adjusted for work-in-progress change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `mass-balance-identity`

###### Primary and transport packaging (`packaging_input`)

Record cores, wraps, labels, straps, cartons, and pallets separately by material and reuse status.

- Selected flow: Packaging materials by type
- Flow property / unit: Mass / kg
- Amount rule: Packaging issued to saleable production less documented reusable packaging retained in the system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg saleable fabric
  - Basis: non-reusable packaging issued per kg net saleable fabric
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for inspection and packing (`inspection_packaging_electricity`)

Record directly attributable electricity for inspection frames, trimming, rolling, packing, and local handling.

- Selected flow: Electricity, site supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered consumption or equipment-power calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional finalisation-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kWh/kg saleable fabric
  - Basis: inspection and packing electricity per kg net saleable fabric
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable woven cotton-rich fabric reference product (`saleable_fabric_reference_output`)

This is the quantitative reference output after final quality checks. Record net fabric mass without pallets or transport packaging.

- Selected flow: Woven fabrics of cotton, containing 85% or more by weight of cotton, weighing more than 200 g/m2 `75725731-1147-4cf5-9d98-b66c539076dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net saleable fabric at the declared conditioning state
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: one PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Trimming, offcuts, and final rejects (`inspection_rejects`)

Record offcuts and rejected rolls or pieces separately by internal reuse, recycling, energy recovery, treatment, or disposal destination.

- Selected flow: Cotton-rich fabric production waste
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `mass-balance-identity`
- Range: Provisional inspection-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg saleable fabric
  - Basis: final rejects per kg net saleable woven fabric
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment chemicals and electricity (`wastewater_treatment_inputs`)

Record treatment chemicals and electricity separately from the wet-processing inputs and normalize them through the treated wastewater volume.

- Selected flow: Wastewater-treatment chemicals and electricity by type
- Flow property / unit: Mass or energy / kg or kWh
- Amount rule: Metered or issued amount attributable to textile wastewater treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional treatment-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh-equivalent/m3 wastewater treated
  - Basis: energy-equivalent screening value; actual chemicals and electricity remain separate flows
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Textile wastewater entering on-site treatment (`wastewater_treatment_influent`)

Record influent volume and pollutant loads by contributing process; reconcile with the wet-process wastewater output.

- Selected flow: Textile-process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered influent volume with pollutant-specific inlet loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record dry and wet sludge mass, moisture content, hazardous classification, and treatment destination.

- Selected flow: Textile wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured sludge shipment converted to declared dry-solids or wet-mass basis without mixing the two
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional wastewater-sludge screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg dry solids/kg saleable fabric
  - Basis: wastewater-treatment sludge dry solids per kg net saleable fabric
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated wastewater and residual pollutant releases (`treated_wastewater_release`)

Record receiving compartment, effluent volume, and pollutant-specific mass releases. Do not treat the wastewater volume as a substitute for pollutant loads.

- Selected flow: Water emission and pollutant-specific releases to water
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Measured effluent volume and pollutant concentration multiplied by matched discharge volume and time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable woven fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-textiles-bat-2022`; `mass-balance-identity`
- Range: Water-volume mass-balance guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.2
  - Unit: m3/m3 wastewater influent
  - Basis: treated effluent volume per m3 wastewater influent; pollutant loads are screened separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared processes and facilities | First avoid allocation by subdivision using meters, batch records, machine hours, treated mass, and pollutant loads attributable to the product route; system expansion may be used only when the added function and model are explicit. | `eu-pef-method-2021` |
| `allocation_physical` | Shared inputs and outputs that cannot be subdivided | Use a relevant physical relationship, preferring treated textile mass for process utilities, metered energy for energy systems, wastewater volume and pollutant load for treatment, and occupied time only when it represents resource use. | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | Marketable co-products without a defensible physical relationship | Use economic allocation only after documenting why subdivision, system expansion, and physical allocation are infeasible; use prices at the point where co-products arise and disclose period, currency, and sensitivity. | `eu-pef-method-2021` |
| `allocation_waste_recovery` | Textile scraps, recovered size, sludge, and recovered materials | Record the treatment or recovery route and any revenue; do not assign an avoided burden in this gate-to-gate dataset unless a separate, consistently modelled substitution or circularity method is declared. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | yarn preparation, weaving, wet processing, inspection | yarn, fabric, residues, and rejects | weighbridge, scale, warehouse issue, production, and waste records | lot id; input mass; output mass; return mass; waste mass; moisture state; destination | Calibrated weighing and reconciled production records | kg | Each batch or shift; monthly reconciliation | At least 12 representative months or the full campaign if shorter | All included production lines and outsourced foreground operations | Sum by product route, adjust inventory change, then divide by net saleable fabric mass | Calibration records; signed reconciliation; unexplained mass-balance difference |
| `cp_energy_records` | all foreground processes | electricity, fuel, steam, heat, and compressed air | utility meter, invoice, fuel delivery, and equipment records | meter id; opening and closing reading; fuel mass or volume; steam or heat quantity; operating time; allocation driver; recovered heat | Dedicated meters preferred; otherwise equipment power and operating-time calculation with shared-service allocation | kWh, MJ, kg, or m3 by carrier | Continuous or each billing period; monthly allocation | At least 12 representative months or the full campaign | All included process equipment and attributable utilities | Preserve carriers, subtract only verified exported or recovered energy, normalize by matched output | Meter calibration; invoices; equipment log; allocation worksheet |
| `cp_water_balance` | sizing and wet processing | water intake, reuse, recycling, retention, and discharge | water meter and batch records | meter readings; batch volume; reuse return; condensate; evaporation estimate; cleaning water; treated mass | Metered process balance with route-level batch records | m3 | Each batch where available; at least monthly balance | At least 12 representative months or the full campaign | All included water-using operations | Fresh intake minus verified same-process reuse; normalize by textile mass treated | Meter checks; flow diagram; water-balance closure |
| `cp_chemical_inventory` | sizing and wet processing | sizing, dyes, auxiliaries, and finishing formulations | stores issue, recipe, SDS, and batch records | product id; supplier; batch; issued mass; returned mass; concentration; active content; hazard class; recovery | Stores issue records reconciled to recipe and batch sheets | kg as supplied and kg active substance where available | Each batch | At least 12 representative months or the full campaign | All included chemical-using operations | Net issue by formulation divided by matched textile mass | Purchase record; SDS; recipe; batch sign-off |
| `cp_product_specification` | weaving, wet processing, inspection | fabric identity and reference output | laboratory test, production, and release records | batch id; cotton fraction; test method; mass per area; width; length; weave; colour; finish; moisture state; net mass | Representative laboratory or controlled mill test plus calibrated final weighing | %, g/m2, m, kg | Each lot or statistically justified lot group | Entire declared production period | All reference-product variants in the dataset | Production-mass-weighted result; retain route-specific results before averaging | Test report; sampling plan; instrument calibration; release certificate |
| `cp_packaging_records` | inspection and packaging | packaging by material and reuse status | stores issue, return, and component mass records | material type; mass issued; returned reusable units; packed product mass | Stores issue and return records with representative component weighing | kg | Each batch or monthly reconciliation | At least 12 representative months or the full campaign | Packaging used for reference-product shipments | Net non-reusable packaging divided by net fabric mass | Bill of materials; scale record; reuse ledger |
| `cp_wastewater_records` | wet processing and on-site treatment | wastewater, influent, effluent, sludge, and treatment inputs | flow meter, laboratory, treatment, and shipment records | volume; sampling time; pH; temperature; COD or TOC; TSS; N; P; metals; relevant substances; sludge mass and moisture; destination | Flow-proportional composite sampling where applicable, calibrated flow metering, and shipment records | m3, mg/L, kg, % solids | Continuous flow; permit or risk-based sampling frequency | Same period as product inventory | All included drains and treatment units | Match concentration to discharge volume and time; calculate pollutant loads; normalize by product mass | Laboratory accreditation; chain of custody; meter calibration; permit report |
| `cp_direct_emissions` | weaving, wet processing, wastewater treatment | released dust, organic compounds, combustion and water pollutants | stack or effluent test, monitoring, and operating records | source id; flow or exhaust rate; concentration; sampling duration; abatement status; operating time; discharge volume | Direct measurement preferred; documented factor calculation only when measurement is unavailable | kg, mg/Nm3, mg/L, Nm3/h, m3 | Permit, BAT, or risk-based frequency | Same period as product inventory | Every material emission point for included operations | Pollutant-specific mass flow multiplied by matched operation time or discharge volume | Accredited test; method; detection limit; abatement log; calculation sheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground amounts | Normalized amount = matched-period flow amount / matched-period net saleable fabric mass | Flow amount; net saleable fabric mass; inventory change | Amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_area_from_mass` | Supplementary fabric area | Area in m2/kg = 1000 / areal density in g/m2 | Conditioned lot-average areal density | m2 represented by 1 kg reference flow | `un-cpc-3-0-26620` |
| `calc_material_balance` | Yarn, fabric, chemicals, and wastes | Reconcile inputs + opening inventory = outputs + closing inventory + wastes + measured releases; disclose the unexplained difference | Batch and inventory masses | Route-level mass-balance closure | `mass-balance-identity` |
| `calc_net_water` | Sizing and wet processing | Net process water = intake + imported process water - water exported or verified reused/recycled to the same process | Water meters; reuse and recycling records | m3 per 1,000 kg textile treated and per kg reference flow | `eu-textiles-bat-2022` |
| `calc_pollutant_load` | Wastewater and waste-gas emissions | Pollutant load = matched concentration times matched flow volume, with unit conversion and sampling representativeness documented | Concentration; volume or gas flow; operating time | kg pollutant per kg reference flow | `eu-textiles-bat-2022` |
| `calc_shared_utility` | Shared energy and utilities | Allocate only the residual shared amount after direct metering, using a disclosed physical driver that represents causation | Shared total; directly metered amounts; driver by product route | Allocated utility per kg reference flow | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Each included lot shall demonstrate at least 85% cotton and more than 200 g/m2 and declare route, width, weave, moisture state, and finish. | Supplier composition record; representative fibre-analysis report; areal-density test; release certificate |
| `dq_temporal` | Foreground activity data | Use at least 12 representative consecutive months when production is continuous, or the full campaign for seasonal or campaign production; explain abnormal downtime and product-mix changes. | Dated meters, production logs, invoices, and campaign records |
| `dq_completeness` | Inventory | Reconcile material, water, energy, waste, wastewater, and direct-emission records; disclose missing meters, excluded operations, outsourced stages, and every cut-off. | Balance sheets; boundary diagram; data-gap register; cut-off justification |
| `dq_representativeness` | Technology and geography | Describe loom technology, sizing route, wet-processing equipment, wastewater treatment, energy supply, site location, and production mix; do not apply the dataset to materially different routes without review. | Equipment list; route shares; site metadata; upstream dataset selection record |
| `dq_precision` | Measurements and calculations | Retain calibration, sampling, detection-limit, moisture-correction, and allocation records; quantify uncertainty or variability for material flows and important utilities. | Calibration certificates; sampling plan; laboratory report; calculation workbook |
| `dq_source_traceability` | External and secondary data | Record source identity, version or publication date, retrieval date for web sources, intended use, and proxy limitations. | Source register and linked inventory or rule ids |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | Reference product | Fail validation if cotton content is below 85%, mass per unit area is not greater than 200 g/m2, the flow UUID differs from the declared reference product, or required route and state qualifiers are missing. | `un-cpc-3-0-26620`; `eu-textile-fibre-regulation-1007-2011` |
| `validate_reference_unit` | Reference flow | Require Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg; reject area-only reference amounts. | `eu-pef-method-2021` |
| `validate_route_boundary` | Process coverage | Require yarn preparation, weaving, inspection, and packing; require every wet, thermal, and on-site treatment step that was actually performed, and reject undeclared averaging of greige and wet-finished routes. | `eu-textiles-bat-2022` |
| `validate_mass_balance` | Material flows | Require route-level reconciliation of yarn, fabric, added solids, wastes, and inventory change; unexplained differences shall be reported and reviewed rather than forced to zero. | `mass-balance-identity` |
| `validate_water_energy` | Important utilities | Require route-matched water and energy records. Values outside cited or provisional QA ranges trigger review, not automatic replacement; BAT ranges shall only be compared with their matching process and basis. | `eu-textiles-bat-2022` |
| `validate_emissions` | Wastewater and direct emissions | Require pollutant-specific loads, receiving compartment, sampling or factor method, abatement status, and matched flow or operating time for material releases. | `eu-textiles-bat-2022` |
| `validate_allocation_cutoff` | Shared processes and omissions | Require the allocation hierarchy and disclosure of all cut-offs; reject unsupported economic allocation, undisclosed outsourced stages, and cut-offs that hide hazardous or regulated flows. | `eu-pef-method-2021` |
| `validate_reasoned_estimates` | Provisional ranges | Confirm that every `reasoned_estimate` is used only as a screening or QA range, is not substituted for foreground data, and is explicitly flagged for replacement or review before publication-critical use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate manufacturing dataset for heavy cotton-rich woven fabric |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and data-quality review |
| allowed_use | Modelling declared greige or finished woven fabrics with at least 85% cotton and more than 200 g/m2 when the technology, geography, period, and treatment route are representative |
| excluded_use | Cotton cultivation, ginning, yarn spinning, knitted or nonwoven fabric, garments, use, laundering, and end of life; fabrics outside the composition or mass-per-area thresholds; undisclosed route substitution |
| required_metadata | Reference UUID; CPC ref; cotton fraction; g/m2; weave; width; moisture state; greige/finished state; sizing and wet-processing route; wastewater route; technology; site geography; period; production mix; allocation; cut-offs; upstream datasets |
| required_quality_disclosure | Foreground coverage and completeness; meter and sampling coverage; balance closure; route shares; variability; provisional ranges; secondary-data quality and proxies; unresolved UUIDs; exclusions and uncertainty |
| update_trigger | Change in product composition or g/m2 threshold, loom or wet-processing technology, energy or water system, chemistry, wastewater treatment, site or production mix, allocation basis, source rules, or evidence that materially changes a QA range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-26620` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0, code 26620, `https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv` (retrieved 2026-08-11) | Product category title, cotton-content boundary, and mass-per-area boundary |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, CELEX 32022D2508, `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508` (retrieved 2026-08-11) | Textile process decomposition; sizing, weaving, pre-treatment, dyeing, finishing, water and energy accounting; source-backed water and thermal-energy ranges; emissions and chemical inventory rules |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, CELEX 32021H2279, `https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279` (retrieved 2026-08-11) | Functional unit, foreground boundary, allocation hierarchy, cut-off disclosure, secondary-data hierarchy, and data-quality requirements |
| `eu-textile-fibre-regulation-1007-2011` | official_guidance | Regulation (EU) No 1007/2011 on textile fibre names and related labelling and marking of fibre composition, consolidated current version linked from `https://eur-lex.europa.eu/eli/reg/2011/1007/oj/eng` (retrieved 2026-08-11) | Fibre-composition evidence, sampling and quantitative analysis requirement, and tolerance disclosure |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to matched-period yarn, fabric, chemical, water, waste, and inventory records | Material and water balance calculation and QA closure |
