---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.wool-and-fine-or-coarse-animal-hair-carded-or-combed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wool and fine or coarse animal hair, carded or combed

## 1. Scope and Applicability

This PCR governs foreground data packages for natural animal textile fibre that leaves the reporting mill in a carded or combed state ready for subsequent spinning. It covers sheep wool and declared fine or coarse animal hair, including speciality hair and horsehair where the material is prepared by a route that produces carded fibre, sliver, or combed top. The dataset shall preserve the actual animal species or commercial fibre name, fibre composition, received material state, and processing route; it shall not represent the category by an unconditional average across species, grades, carded and combed routes, or greasy and previously scoured inputs.

The PCR includes only operations actually performed between receipt of the declared input fibre lot and dispatch of the carded or combed product. Scouring, dehairing, carbonising, bleaching, dyeing, shrink-resist or mothproofing treatment, wastewater treatment, and grease recovery are conditional. Upstream animal production and production of purchased input fibre are represented by upstream datasets, not recreated inside this foreground boundary.

Excluded products are greasy or merely scoured wool that has not been carded or combed, garnetted recovered stock, textile waste, yarn, fabric, finished articles, feathers and down, and mineral or glass materials marketed with the word “wool”.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.wool-and-fine-or-coarse-animal-hair-carded-or-combed |
| classification_refs | CPC 3.0: 26150, exact mapping context |
| covered_products | Natural sheep wool and declared fine or coarse animal hair prepared for spinning by carding or combing; loose carded fibre, carded sliver or roving before spinning, and combed top; single-fibre and declared blends within this animal-fibre category |
| excluded_products | Greasy wool or raw hair; degreased or carbonised fibre not yet carded or combed; garnetted recovered stock and textile waste; yarn, fabric and finished textile articles; feathers and down; mineral wool and glass wool |
| representative_product | One declared species- and route-specific batch of carded animal fibre or combed animal-fibre top; no cross-species or cross-route average |
| production_route | Conditional chain selected from receipt and route declaration; scouring and dewatering; dehairing or opening; carding; gilling and combing for combed output; optional fibre treatment; drying, conditioning and packing; site wastewater and residue handling when operated |
| market_state | Dry or conditioned carded loose fibre, sliver, roving before spinning, or combed top at the reporting mill gate, with fibre identity, composition, route, treatment state, moisture basis and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply natural animal textile fibre in a declared carded or combed state ready for subsequent spinning |
| How much | 1 kg net product mass on the declared dry, conditioned, or commercial mass basis |
| How well | Meets the lot specification for declared animal species or commercial fibre name, composition, carded or combed route, product form, mean fibre diameter or grade, length specification, colour or treatment state, moisture basis, and contaminant limits |
| How long or cycle | One production batch or homogeneous reporting campaign; no use duration is assigned to the intermediate fibre |
| reference_flow_link | 1 kg of conforming dispatched product equals 1 kg of the reference product flow on the same declared mass basis |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Wool and fine or coarse animal hair, carded or combed `7919afd2-a0eb-41f6-a192-705e27597637` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal species or accepted commercial fibre name; mass fraction of each fibre in a blend; received state as greasy, scoured, dehaired, carded or other intermediate; output route as carded or combed; product form as loose fibre, sliver, roving before spinning or top; mean fibre diameter or declared grade; fibre length specification; moisture and commercial mass basis; bleaching, carbonising, dyeing, shrink-resist, mothproofing and other treatment flags; recycled-content flag; geography; reporting period; factory-gate and packaging state |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all fibre mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net fibre mass excluding pallets, bags and other packaging. Use the same declared moisture or commercial mass basis for the reference output and all fibre-yield calculations. |
| `commercial_mass_basis` | Homogeneous single-species fibre consignments | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether mass is oven-dry, conditioned or commercial mass. ISO 6741-1:1989 may be used for homogeneous consignments of a single generic species; blends or treated materials require a documented applicable method and shall not silently inherit a single-species allowance. |
| `moisture_conversion` | Conversion between wet, conditioned, commercial and dry mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record measured moisture fraction and calculate dry mass as wet mass multiplied by one minus moisture fraction. Any conversion to conditioned or commercial mass shall state the agreed regain or allowance and preserve the unconverted measured mass. |
| `fibre_identity_and_composition` | Species and composition declaration | Composition by mass | percent by mass | Use supplier traceability and lot records. Where identity or blend composition requires analytical confirmation, apply an appropriate validated method such as ISO 17751-1:2023 or ISO 17751-2:2023 and retain the laboratory report. |
| `route_specific_yield` | Scouring, dehairing, carding and combing yield | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | Calculate yield separately for each declared fibre type, received state and route. Do not pool carded and combed campaigns or greasy and already-scoured inputs unless the reported dataset explicitly represents that measured production mix and discloses weighted batch data. |
| `water_and_energy_units` | Water, electricity, fuel and thermal-energy records | Volume, mass or energy as measured | m3, kg, kWh or MJ | Preserve the metered unit and carrier. Convert only with a documented factor, and keep reused water separate from gross intake so net consumption and wastewater generation remain auditable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | An identifiable received animal-fibre lot before the first process performed by the reporting mill, with species or commercial fibre name, composition, mass basis, moisture, contamination state and prior processing state declared |
| starting_condition_role | Physical and accounting start of the foreground transformation to the carded or combed product |
| product_classification_scope | Natural animal textile fibre whose dispatched state is carded or combed and ready for spinning; classification does not replace species, composition or route qualifiers |
| recursive_input_rule | If an input is already carded or combed and belongs to the same product category, record it as an explicit purchased intermediate with its upstream dataset and model only the incremental transformation; never recreate or hide its prior production in a recursive category average |
| upstream_dataset_requirement | Link each purchased greasy wool, scoured wool, raw or dehaired animal hair, carded intermediate, process chemical, energy carrier, water supply, packaging material and off-site treatment service to an appropriate geographically and temporally representative upstream dataset |
| disclosure | Declare included facilities and processes, fibre species and blend, route and optional-treatment flags, received state, mass and moisture basis, allocation method, recovered products, wastes and destinations, wastewater handling, data coverage, exclusions and any proxy datasets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_conditioning` | Process selection | Select processes from the declared fibre type, received state and carded or combed route. Do not apply a category-wide average to materially different species, grades, received states or processing routes. | `eu-1007-2011-textile-fibre-names`; `iwto-wool-lca-guidelines-2016` |
| `boundary_primary_processing` | Scouring and topmaking | When performed, include fibre input, packaging, electricity, water, detergents and other chemicals, and outputs of carded or combed fibre, recoverable grease, burrs, noils, sweepings, other wastes, sludge and wastewater. | `iwto-wool-lca-guidelines-2016`; `eu-2022-2508-textiles-bat` |
| `boundary_optional_treatments` | Carbonising, bleaching, dyeing, shrink-resist, mothproofing and other treatments | Include a treatment only when performed before the declared factory gate. Record treatment-specific chemicals, water, energy, emissions, wastewater and fibre yield separately and disclose the treatment flag. | `iwto-wool-lca-guidelines-2016`; `eu-2022-2508-textiles-bat` |
| `boundary_upstream_burdens` | Purchased fibre and other technosphere inputs | Keep animal husbandry, fibre collection and prior off-site processing in linked upstream datasets. Do not duplicate those burdens in the foreground mill inventory. | `iwto-wool-lca-guidelines-2016` |
| `boundary_wastewater_and_residues` | Wet processing and residue management | Include onsite treatment when operated; otherwise record the wastewater or residue quantity and composition sent to the named off-site treatment route. Keep recovered grease, reusable water and organic residues explicit. | `eu-2022-2508-textiles-bat` |

## 6. Process Inventory Structure

Reasoned-estimate ranges below are deliberately broad candidate-stage screening aids, not typical or allowed values. They shall be replaced by route- and fibre-specific foreground distributions or reviewed external evidence before methodology review or publication. Source-backed wool-grease recovery ranges apply only to the named wool diameter classes and shall not be transferred to other animal fibres.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_and_route_declaration` | Material receipt and route declaration | required | Always | Establish lot identity, composition, prior state and the route-specific foreground boundary | Per received lot and per 1,000 kg reference product |
| `scouring_and_dewatering` | Scouring and dewatering | conditional | Include when the received fibre requires washing, grease or dirt removal, rinsing, mechanical dewatering or wet opening | Wet cleaning and separation of fibre, grease, dirt and wastewater | Per 1,000 kg fibre input and output for the declared route |
| `dehairing_and_opening` | Dehairing and opening | conditional | Include when guard hair, dust or entangled locks are removed or the fibre is mechanically opened before carding | Prepare species- and grade-specific feedstock | Per 1,000 kg process output |
| `carding` | Carding | required | Include for carded output and as the preparatory stage of a combed route, unless a documented purchased carded intermediate is the starting condition | Open, blend only declared compatible lots, disentangle and form carded fibre or sliver | Per 1,000 kg carded process output |
| `gilling_and_combing` | Gilling and combing | conditional | Include only for combed output or documented re-combing | Align fibres and remove short fibres and remaining vegetable matter to produce top | Per 1,000 kg combed top output |
| `optional_fibre_treatments` | Optional fibre treatments | conditional | Include separately for each carbonising, bleaching, dyeing, shrink-resist, mothproofing or other treatment actually performed before dispatch | Product-specific wet or chemical treatment | Per 1,000 kg treated fibre output for each treatment |
| `drying_conditioning_and_packing` | Drying, conditioning and packing | required | Conditioning and dispatch mass determination always apply; drying applies only after wet processing; packing applies when product leaves packed | Establish final moisture basis, reference mass and factory-gate state | Per 1,000 kg reference product |
| `onsite_wastewater_and_residue_handling` | Onsite wastewater and residue handling | conditional | Include when the reporting facility treats wastewater, recovers grease, or handles residues before transfer | Recover materials, recycle water where applicable, and document treatment outputs and emissions | Per wet-processing campaign and per 1,000 kg fibre input |

### Process: Material receipt and route declaration (`material_receipt_and_route_declaration`)

#### Inputs

##### Product flows

###### Received animal-fibre lot (`received_animal_fibre_lot`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record each fibre species or accepted commercial name, blend fraction, supplier lot, received state, measured mass, moisture basis and upstream dataset separately. Lots with materially different fibre types or prior treatment shall not be merged before route selection.

- Selected flow: Shorn wool, greasy, including fleece-washed shorn wool `bc0047e4-c6e8-4758-b86e-887af8a1f176`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: measured net received mass on its recorded moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product, reported separately by fibre type and received state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt`
- Range: Provisional route-screening input requirement, to be replaced by measured route yield
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 5000
  - Unit: kg
  - Basis: per 1,000 kg reference product within one declared fibre type and route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Route-released fibre lot (`route_released_fibre_lot`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Release the lot to the declared route only after identity, input state and required processing flags are complete.

- Selected flow: Shorn wool, greasy, including fleece-washed shorn wool `bc0047e4-c6e8-4758-b86e-887af8a1f176`
- Direction: Output
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: measured released mass, equal to accepted input less quarantined or rejected mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per received lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipt`
- Range: Measured lot-specific released mass
  - Range role: Typical range (`typical_range`)
  - Unit: kg
  - Basis: minimum and maximum released lot mass in the reporting period
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Rejected or quarantined received material (`received_material_reject`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record nonconforming fibre and its final destination; do not subtract it without a mass record.

- Selected flow: Rejected greasy sheep wool
- Direction: Output
- Flow type: Waste flow
- UUID status: unresolved after full hybrid search; hybrid candidate `3a754043-8e29-42c5-9661-26813b5c3469` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or quarantined mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg received fibre
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt`
- Range: Provisional receipt-loss screen, to be replaced by lot records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg received fibre of one declared lot class
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Scouring and dewatering (`scouring_and_dewatering`)

#### Inputs

##### Product flows

###### Scouring water (`scouring_water`)

Record gross freshwater intake and reused water separately. Net consumption equals gross intake less measured water returned to the same process.

- Selected flow: Process water; at plant, global mix `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Direction: Input
- Flow type: Product flow
- Applicability: Required only when `scouring_and_dewatering` is included
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: metered mass; when only volume is metered, multiply by campaign-specific water density and retain both records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg raw or otherwise received fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional water-use screen, not a BAT performance level
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100000
  - Unit: kg
  - Basis: process-water mass per 1,000 kg fibre entering scouring for one declared technology
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nonionic wool-scouring detergent (`scouring_nonionic_detergent`)

Record the specific supplied detergent product as one flow. If more than one detergent SKU is used, repeat this atomic row for each SKU rather than summing unlike products.

- Selected flow: Nonionic wool-scouring detergent product
- Direction: Input
- Flow type: Product flow
- Applicability: Required when this detergent is dosed in scouring; omit when not used
- UUID status: unresolved after full hybrid search; hybrid candidate `1f286780-8831-47b4-88dd-582d6b7f8947` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or batch-dosed product mass; retain active-content and supplier-SKU metadata
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `iwto-wool-lca-guidelines-2016`
- Range: Provisional detergent-use screen, to be replaced by formulation records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: detergent product per 1,000 kg fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium carbonate for scouring alkalinity control (`scouring_sodium_carbonate`)

Record sodium carbonate separately from detergent and all other chemicals.

- Selected flow: Sodium carbonate
- Direction: Input
- Flow type: Product flow
- Applicability: Conditional on sodium carbonate being used for the declared scouring recipe
- UUID status: unresolved after full hybrid search; direct-read candidate `2099dae8-ad14-4496-87eb-d339b26e09f7` was rejected because its CPC classification describes carboxylic acids rather than sodium carbonate; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or batch-dosed sodium carbonate product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `iwto-wool-lca-guidelines-2016`
- Range: Provisional sodium-carbonate screen, to be replaced by recipe records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: sodium carbonate product per 1,000 kg fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for scouring and mechanical dewatering (`scouring_electricity`)

This row represents electricity only; steam and fuels are separate rows.

- Selected flow: Electricity
- Direction: Input
- Flow type: Product flow
- Applicability: Required when grid or onsite-generated electricity powers scouring, pumping or mechanical dewatering
- UUID status: unresolved after full hybrid search; direct-read candidate `50657322-939c-4829-a87b-47c093bfa6a7` was rejected because its reference-property UUID is Mass while its label says net calorific value, so the unit contract is internally inconsistent; requires foreground mapping
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated meter use from operating time and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional electricity screen, to be replaced by meter distributions
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kWh
  - Basis: electricity per 1,000 kg fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for scouring (`scouring_purchased_steam`)

This row represents purchased steam only and is omitted for directly fired or electricity-only heating.

- Selected flow: Steam; 11.0 MPaG; production mix, at plant `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Direction: Input
- Flow type: Product flow
- Applicability: Conditional on steam crossing the foreground boundary for scouring heat
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: metered steam mass; when only energy is metered, retain pressure, enthalpy basis and conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional purchased-steam screen, to be replaced by meter distributions
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg steam
  - Basis: purchased steam per 1,000 kg fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for directly heated scouring (`scouring_natural_gas`)

This row represents natural gas only; do not combine LPG, diesel or other fuels with it.

- Selected flow: Natural gas in the gaseous state; production mixing, at consumption `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Direction: Input
- Flow type: Product flow
- Applicability: Conditional on natural gas being combusted within the foreground boundary for direct scouring or dryer heat
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Volume
- Flow property / unit: Volume / m3
- Amount rule: gas-meter delivered volume; retain supplier temperature, pressure and lower-heating-value records separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional natural-gas screen, to be replaced by meter distributions
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: m3
  - Basis: natural-gas volume per 1,000 kg fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Scoured and dewatered fibre (`scoured_fibre_output`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Measure output by declared fibre type and route before further opening, carding or combing.

- Selected flow: Scoured Wool; production mix, at plant `1f286780-8831-47b4-88dd-582d6b7f8947`
- Direction: Output
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: measured net fibre output on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per scouring campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Mass-balance output bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg fibre entering scouring on a reconciled moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Recovered wool grease (`recovered_wool_grease`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record recovered grease only when separated as a physical output. The source-backed ranges below apply to raw wool scouring under the stated diameter conditions, not to other animal hair.

- Selected flow: Recovered wool grease
- Direction: Output
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `0907e9e5-7e3d-493d-91a2-3810e2b5bc9a` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured recovered grease mass by scouring campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg raw wool fibre pretreated by scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `eu-2022-2508-textiles-bat`
- Range: BAT-AEPL for coarse wool with fibre diameter typically above 35 micrometres
  - Range role: Typical range (`typical_range`)
  - Lower: 10
  - Upper: 15
  - Unit: kg
  - Basis: per 1,000 kg raw wool fibre pretreated by scouring, coarse-wool route only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-2022-2508-textiles-bat`
- Range: BAT-AEPL for extra- and super-fine wool with fibre diameter typically below 20 micrometres
  - Range role: Typical range (`typical_range`)
  - Lower: 50
  - Upper: 60
  - Unit: kg
  - Basis: per 1,000 kg raw wool fibre pretreated by scouring, extra- or super-fine-wool route only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-2022-2508-textiles-bat`

##### Waste flows

###### Scouring wastewater (`scouring_wastewater`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record wastewater leaving the scouring process after internal reuse, including flow and measured pollutant parameters required by the applicable discharge or treatment route.

- Selected flow: Scouring wastewater
- Direction: Output
- Flow type: Waste flow
- UUID status: unresolved after full hybrid search; direct-read textile-wastewater candidates were rejected because their Mass reference property and discharge destination do not match this Volume flow and declared transfer destination; requires foreground mapping
- Flow property / unit: Volume / m3
- Amount rule: metered discharge volume after deducting internal recycle, linked to analytical sampling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional wastewater-volume screen, to be replaced by metered campaign data
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1,000 kg fibre entering scouring for one declared technology
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Scouring dirt (`scouring_dirt`)

Record separated dirt as one waste flow and retain moisture basis and destination.

- Selected flow: Scouring dirt
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on dirt being separated during scouring
- UUID status: unresolved after full hybrid search; hybrid candidate `f0402393-e82c-47e8-9cd8-a486c97f3e89` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed dirt mass, with wet or dry basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional scouring-dirt screen, to be replaced by weighed distributions
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 800
  - Unit: kg
  - Basis: scouring dirt per 1,000 kg fibre entering scouring for one declared fibre class
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Burr waste from scouring (`scouring_burr_waste`)

Record burrs separately from other vegetable matter, dirt and sludge.

- Selected flow: Burr waste
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on burrs being separated during scouring
- UUID status: unresolved after full hybrid search; hybrid candidate `465e8306-30d7-4ff1-9ad5-6e866f91878d` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled burr mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `iwto-wool-lca-guidelines-2016`
- Range: Provisional burr-waste screen, to be replaced by weighed distributions
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: burr mass per 1,000 kg fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Vegetable-matter waste from scouring (`scouring_vegetable_matter_waste`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Selected flow: Vegetable matter rejected during scouring
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on non-burr vegetable matter being separated during scouring
- UUID status: unresolved after full hybrid search; hybrid candidate `e99c058b-8acc-4db6-b730-a1b6b04371b9` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled non-burr vegetable-matter mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `iwto-wool-lca-guidelines-2016`
- Range: Provisional scouring vegetable-matter screen; replace with weighed distributions before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: non-burr vegetable matter per 1,000 kg fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary scouring sludge (`scouring_primary_sludge`)

Record sludge separately from dirt and burrs, with wet mass, dry-matter fraction and treatment route.

- Selected flow: Primary scouring sludge
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on onsite separation producing sludge before wastewater treatment
- UUID status: unresolved after full hybrid search; hybrid candidate `725c8f6e-7975-4155-a250-1f95ef70c508` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg wet mass
- Amount rule: weighed wet sludge mass with measured dry-matter fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional primary-sludge screen, to be replaced by weighed distributions
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet mass
  - Basis: primary scouring sludge per 1,000 kg fibre entering scouring, dry-matter fraction declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Dehairing and opening (`dehairing_and_opening`)

#### Inputs

##### Product flows

###### Fibre entering dehairing or opening (`dehairing_input_fibre`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Keep fibre species, grade and prior state separate through the process mass balance.

- Selected flow: Raw cashmere fibre
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `eea5e113-2fbc-4fde-ac38-b938654f382c` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured process input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg dehaired or opened output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Provisional species- and technology-specific input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 5000
  - Unit: kg
  - Basis: per 1,000 kg dehaired or opened output for one declared fibre class
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dehairing and opening electricity (`dehairing_opening_electricity`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record metered electricity for the equipment and allocated extraction system.

- Selected flow: Electricity
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `50657322-939c-4829-a87b-47c093bfa6a7` was rejected because its reference-property UUID is Mass while its label says net calorific value, so the unit contract is internally inconsistent; requires foreground mapping
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dehaired or opened output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Range: Provisional electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kWh
  - Basis: per 1,000 kg dehaired or opened output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dehaired or opened fibre (`dehaired_opened_fibre`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Measure the accepted fibre output separately from removed guard hair, dust and rejects.

- Selected flow: Dehaired cashmere fibre
- Direction: Output
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `e8840f60-7cf0-406a-ae21-9d48d07aa416` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Measured campaign-specific accepted output
  - Range role: Typical range (`typical_range`)
  - Unit: kg
  - Basis: minimum and maximum accepted output per campaign
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Removed guard hair (`removed_guard_hair`)

Record guard hair as a separate product co-output if saleable or as this waste flow if discarded; do not combine it with dust or off-spec fibre.

- Selected flow: Cashmere guard hair
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on dehairing producing a discarded guard-hair fraction
- UUID status: unresolved after full hybrid search; hybrid candidate `e95bbc9f-8b86-44c2-827f-c1f0fdbc82ae` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled discarded guard-hair mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fibre entering dehairing or opening
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Range: Provisional discarded guard-hair screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 800
  - Unit: kg
  - Basis: discarded guard hair per 1,000 kg fibre entering dehairing for one declared species and grade
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected dehairing dust (`collected_dehairing_dust`)

Record dust captured in filters or housekeeping as a solid waste, separate from air emissions.

- Selected flow: Cashmere fibre dust
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on dust being captured as solid waste
- UUID status: unresolved after full hybrid search; hybrid candidate `e0f3b3af-7794-4c25-ae58-5e4302b226d2` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed captured dust and filter contents
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fibre entering dehairing or opening
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Provisional captured-dust screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: captured dust per 1,000 kg fibre entering dehairing or opening
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-spec fibre rejected during dehairing (`dehairing_offspec_fibre`)

Record off-spec fibre separately from guard hair and dust.

- Selected flow: Off-spec dehaired cashmere fibre
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on fibre being rejected and sent to waste treatment
- UUID status: unresolved after full hybrid search; hybrid candidate `cd3a2b81-3287-457e-9501-2a39f59cec99` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected fibre mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fibre entering dehairing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Provisional off-spec-fibre screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: off-spec fibre per 1,000 kg fibre entering dehairing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Particulate matter to air from dehairing and opening (`dehairing_particulate_to_air`)

This row is only the uncaptured particulate emission to air; collected filter dust remains a separate waste row.

- Selected flow: Particles (PM10), urban air, low stack `9fbb4fce-ed5b-11e6-bc64-92361f002671`
- Direction: Output
- Flow type: Elementary flow
- Applicability: Conditional on a measured or permitted air-emission point serving dehairing or opening
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Elementary / Mass
- Flow property / unit: Mass / kg
- Amount rule: measured particulate mass or concentration multiplied by matched exhaust-gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dehaired or opened output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional particulate-emission screen, to be replaced by measured permit data
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: particulate matter to air per 1,000 kg dehaired or opened output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Carding (`carding`)

#### Inputs

##### Product flows

###### Fibre entering carding (`carding_input_fibre`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record each species, blend recipe and prior-treatment state. Blending across materially different fibre types shall follow a measured recipe and remain visible in product metadata.

- Selected flow: Scoured Wool; production mix, at plant `1f286780-8831-47b4-88dd-582d6b7f8947`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: measured fibre feed by lot and blend component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg carded output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Provisional carding input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg carded output for one declared fibre and blend route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carding electricity (`carding_electricity`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record card, feed, extraction and humidification electricity that serves the declared carding campaign.

- Selected flow: Electricity
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `50657322-939c-4829-a87b-47c093bfa6a7` was rejected because its reference-property UUID is Mass while its label says net calorific value, so the unit contract is internally inconsistent; requires foreground mapping
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg carded output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Range: Provisional carding electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kWh
  - Basis: per 1,000 kg carded output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Carded fibre or sliver (`carded_fibre_output`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record the output form, fibre identity, blend, moisture basis, mean fibre diameter or grade, and length specification.

- Selected flow: Carded sheep-wool sliver
- Direction: Output
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `e8840f60-7cf0-406a-ae21-9d48d07aa416` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured accepted carded output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per carding campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_quality`
- Range: Declared process-output reference
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted carded process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Short fibre rejected by carding (`carding_short_fibre_waste`)

Record discarded short fibre separately from vegetable matter and floor sweepings; a saleable short-fibre co-product is moved to product outputs.

- Selected flow: Short sheep-wool fibre rejected by carding
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on short fibre being discarded rather than sold as a co-product
- UUID status: unresolved after full hybrid search; hybrid candidate `db23708c-5c2f-4b7e-9098-910948275caa` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled discarded short-fibre mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fibre entering carding
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `iwto-wool-lca-guidelines-2016`
- Range: Provisional carding short-fibre screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: discarded short fibre per 1,000 kg fibre entering carding for one declared route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Vegetable matter rejected by carding (`carding_vegetable_matter_waste`)

Record burrs and vegetable matter separately from fibre and sweepings.

- Selected flow: Vegetable matter rejected by carding
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on vegetable matter being separated at carding
- UUID status: unresolved after full hybrid search; hybrid candidate `eb5924c9-5e3d-435b-a988-9937a73b44d6` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled vegetable-matter mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fibre entering carding
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `iwto-wool-lca-guidelines-2016`
- Range: Provisional carding vegetable-matter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: vegetable matter per 1,000 kg fibre entering carding for one declared route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carding floor sweepings (`carding_floor_sweepings`)

Record floor sweepings as a distinct mixed solid waste; do not add them to clean short fibre.

- Selected flow: Carding floor sweepings
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on sweepings being generated and removed from the process area
- UUID status: unresolved after full hybrid search; hybrid candidate `db23708c-5c2f-4b7e-9098-910948275caa` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed sweepings mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering carding
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Provisional sweepings screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: floor sweepings per 1,000 kg fibre entering carding
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Gilling and combing (`gilling_and_combing`)

#### Inputs

##### Product flows

###### Carded sliver entering combing (`combing_input_sliver`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Preserve the carded-input lot identity and measured route yield; do not substitute a category-average topmaking yield.

- Selected flow: Carded sheep-wool sliver
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `e8840f60-7cf0-406a-ae21-9d48d07aa416` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured sliver input mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg combed top output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Provisional combing input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2500
  - Unit: kg
  - Basis: per 1,000 kg combed top output for one declared fibre type and technology
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Gilling and combing electricity (`combing_electricity`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record gill, comb, extraction and humidification electricity serving the declared route.

- Selected flow: Electricity
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `50657322-939c-4829-a87b-47c093bfa6a7` was rejected because its reference-property UUID is Mass while its label says net calorific value, so the unit contract is internally inconsistent; requires foreground mapping
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg combed top output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Range: Provisional combing electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kWh
  - Basis: per 1,000 kg combed top output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Combed animal-fibre top (`combed_top_output`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record fibre alignment route, species or blend, moisture basis, mean fibre diameter or grade, and top length specification.

- Selected flow: Combed sheep-wool top
- Direction: Output
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `a19fde0b-23f4-4ab7-9832-317affa7ab44` was rejected because its CPC classification is wool yarn rather than combed wool top; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured accepted top mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per combing campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_quality`
- Range: Measured campaign-specific conforming combed-top output
  - Range role: Typical range (`typical_range`)
  - Unit: kg
  - Basis: minimum and maximum conforming output per combing campaign
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Combing noils sent to waste (`combing_noils_waste`)

Record noils here only when they are waste; saleable noils are represented as a separate product co-output.

- Selected flow: Sheep-wool combing noils sent to waste treatment
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on noils being discarded rather than sold as a co-product
- UUID status: unresolved after full hybrid search; hybrid candidate `db23708c-5c2f-4b7e-9098-910948275caa` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled discarded noil mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg sliver entering combing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `iwto-wool-lca-guidelines-2016`
- Range: Provisional discarded-noils screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 700
  - Unit: kg
  - Basis: discarded noils per 1,000 kg sliver entering combing for one declared fibre type and technology
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Vegetable matter rejected by combing (`combing_vegetable_matter_waste`)

Record remaining vegetable matter separately from noils.

- Selected flow: Vegetable matter rejected by combing
- Direction: Output
- Flow type: Waste flow
- Applicability: Conditional on vegetable matter being separated at combing
- UUID status: unresolved after full hybrid search; hybrid candidate `e99c058b-8acc-4db6-b730-a1b6b04371b9` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled vegetable-matter mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg sliver entering combing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `iwto-wool-lca-guidelines-2016`
- Range: Provisional combing vegetable-matter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg
  - Basis: vegetable matter per 1,000 kg sliver entering combing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Optional fibre treatments (`optional_fibre_treatments`)

#### Inputs

##### Product flows

###### Optional-treatment water (`optional_treatment_water`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only for a declared wet treatment.
- Selected flow: Process water; at plant, global mix `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: metered mass supplied to the named treatment; when only volume is metered, multiply by campaign-specific water density and retain recycled water separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated fibre output for the named treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional wet-treatment water screen; replace with route-specific meter data before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200000
  - Unit: kg
  - Basis: process-water mass per 1,000 kg treated fibre output for one named treatment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulfuric acid for carbonising (`carbonising_sulfuric_acid`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only for carbonising when the supplied product is sulfuric acid.
- Selected flow: Sulfuric acid solution, 98%; industrial reagent input, at plant `efbf8d56-3521-45c1-aac1-3564408f3d01`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg as supplied; active-acid fraction also recorded
- Amount rule: weighed or batch-dosed supplied solution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg carbonised fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional carbonising-acid screen; replace with formulation and dosing records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kg as supplied
  - Basis: per 1,000 kg carbonised fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hydrogen peroxide for bleaching (`bleaching_hydrogen_peroxide`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only for peroxide bleaching.
- Selected flow: Hydrogen peroxide, 50% in water; textile mill, CN `2ef759d9-dc11-4c3e-b61f-83222f3c60ff`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg as supplied; active-peroxide fraction also recorded
- Amount rule: weighed or batch-dosed supplied solution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg bleached fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional peroxide screen; replace with formulation and dosing records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg as supplied
  - Basis: per 1,000 kg bleached fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium carbonate for optional-treatment pH control (`treatment_sodium_carbonate`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when sodium carbonate is actually dosed in the named treatment.
- Selected flow: Sodium carbonate
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `2099dae8-ad14-4496-87eb-d339b26e09f7` was rejected because its CPC classification describes carboxylic acids rather than sodium carbonate; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed or batch-dosed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional alkali screen; replace with formulation and dosing records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg treated fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Declared dyestuff product SKU (`declared_dyestuff_sku`)

Instantiate one row per supplied dyestuff SKU; never combine colourants into a single additives row.

- Applicability: Conditional; include only for fibre dyeing.
- Selected flow: Acid Red 1 dyestuff product
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `eaa56930-e0cf-44d5-ac5a-c97a7a844562` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg as supplied; active or colour-strength basis also recorded when available
- Amount rule: net stock issue or calibrated dosing for this SKU
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg dyed fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: SKU-specific value required; no cross-SKU default is permitted
  - Range role: Typical range (`typical_range`)
  - Unit: kg as supplied
  - Basis: campaign minimum and maximum per 1,000 kg dyed fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Shrink-resist polymer product (`shrink_resist_polymer`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when a shrink-resist polymer is applied.
- Selected flow: Polyamide-epichlorohydrin shrink-resist resin
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `234a7a17-3a51-4b49-9869-8a2cd59a1492` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg as supplied; solids fraction also recorded
- Amount rule: net stock issue or calibrated dosing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg shrink-resist-treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Product-specific value required; no generic polymer default is permitted
  - Range role: Typical range (`typical_range`)
  - Unit: kg as supplied
  - Basis: campaign minimum and maximum per 1,000 kg treated output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Mothproofing agent product (`mothproofing_agent`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when a declared mothproofing agent is applied.
- Selected flow: Permethrin mothproofing agent
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `b3b1ee8c-060e-4888-9e98-a170e4db2ecf` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg as supplied; active fraction also recorded
- Amount rule: net stock issue or calibrated dosing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg mothproofed fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Product-specific value required; no generic agent default is permitted
  - Range role: Typical range (`typical_range`)
  - Unit: kg as supplied
  - Basis: campaign minimum and maximum per 1,000 kg treated output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Electricity for optional fibre treatment (`optional_treatment_electricity`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only for the named treatment when electricity is consumed.
- Selected flow: Electricity
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `50657322-939c-4829-a87b-47c093bfa6a7` was rejected because its reference-property UUID is Mass while its label says net calorific value, so the unit contract is internally inconsistent; requires foreground mapping
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or equipment power multiplied by logged operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional electrical-energy screen; replace with treatment-specific records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh
  - Basis: per 1,000 kg treated fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for optional fibre treatment (`optional_treatment_purchased_steam`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when purchased steam is consumed by the named treatment.
- Selected flow: Purchased steam
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `fcf9e128-688f-42f0-9dca-85d2319cfac5` was rejected because it is generic process heat from steam, not purchased steam mass; requires foreground mapping
- Flow property / unit: Energy / MJ delivered
- Amount rule: steam-meter reading, or measured condensate multiplied by documented enthalpy difference
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional delivered-steam screen; replace with route-specific records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ
  - Basis: per 1,000 kg treated fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for directly heated optional fibre treatment (`optional_treatment_natural_gas`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when natural gas directly supplies treatment heat; omit when heat is fully represented by purchased steam.
- Selected flow: Natural gas in the gaseous state; production mixing, at consumption `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Volume
- Flow property / unit: Volume / m3
- Amount rule: gas-meter delivered volume; retain supplier temperature, pressure and lower-heating-value records separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional direct-fuel screen; replace with route-specific records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: m3
  - Basis: natural-gas volume per 1,000 kg treated fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated carded fibre or combed top (`treated_fibre_output`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Retain the treatment flag and process-specific yield; do not merge untreated and treated output without a measured production mix.

- Selected flow: Dyed combed sheep-wool top
- Direction: Output
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `a19fde0b-23f4-4ab7-9832-317affa7ab44` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured accepted treated output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treatment campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_quality`
- Range: Measured treatment-campaign conforming output
  - Range role: Typical range (`typical_range`)
  - Unit: kg
  - Basis: minimum and maximum conforming output per named treatment campaign
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Optional-treatment wastewater (`optional_treatment_wastewater`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only for a wet optional treatment and route to the declared treatment destination.
- Selected flow: Wool-fibre dyeing wastewater
- Direction: Output
- Flow type: Waste flow
- UUID status: unresolved after full hybrid search; direct-read textile-wastewater candidates were rejected because their Mass reference property and discharge destination do not match this Volume flow and declared transfer destination; requires foreground mapping
- Flow property / unit: Volume / m3
- Amount rule: metered gross discharge from the named treatment before internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional wet-treatment discharge screen; replace with meter data before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: m3
  - Basis: per 1,000 kg treated fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-spec fibre from optional treatment (`optional_treatment_offspec_fibre`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when treatment rejects are generated.
- Selected flow: Off-spec dyed combed sheep-wool top
- Direction: Output
- Flow type: Waste flow
- UUID status: unresolved after full hybrid search; hybrid candidate `ee0622ae-f4e6-4606-a16a-34e9dcd3870f` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected fibre sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Range: Provisional treatment-reject screen; replace with campaign records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg treated fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sludge from optional fibre treatment (`optional_treatment_sludge`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when the named treatment generates separately collected sludge before central wastewater treatment.
- Selected flow: Wool-fibre dyeing sludge
- Direction: Output
- Flow type: Waste flow
- UUID status: unresolved after full hybrid search; hybrid candidate `db23708c-5c2f-4b7e-9098-910948275caa` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg wet mass; dry-matter fraction also recorded
- Amount rule: weighed sludge transferred to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional treatment-sludge screen; replace with weighed wet and dry-matter records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg wet mass
  - Basis: per 1,000 kg treated fibre output, moisture basis declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Drying, conditioning and packing (`drying_conditioning_and_packing`)

#### Inputs

##### Product flows

###### Electricity for drying and conditioning (`drying_conditioning_electricity`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include when drying, conditioning or humidification equipment consumes electricity.
- Selected flow: Electricity
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `50657322-939c-4829-a87b-47c093bfa6a7` was rejected because its reference-property UUID is Mass while its label says net calorific value, so the unit contract is internally inconsistent; requires foreground mapping
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or equipment power multiplied by logged operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional electrical-energy screen; replace with campaign records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh
  - Basis: per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for drying and conditioning (`drying_purchased_steam`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when purchased steam supplies drying or conditioning heat.
- Selected flow: Purchased steam
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `fcf9e128-688f-42f0-9dca-85d2319cfac5` was rejected because it is generic process heat from steam, not purchased steam mass; requires foreground mapping
- Flow property / unit: Energy / MJ delivered
- Amount rule: steam-meter reading, or measured condensate multiplied by documented enthalpy difference
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional delivered-steam screen; replace with campaign records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: MJ
  - Basis: per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for directly heated drying (`drying_natural_gas`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when natural gas directly supplies drying heat; omit when heat is fully represented by purchased steam.
- Selected flow: Natural gas in the gaseous state; production mixing, at consumption `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Volume
- Flow property / unit: Volume / m3
- Amount rule: gas-meter delivered volume; retain supplier temperature, pressure and lower-heating-value records separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional direct-fuel screen; replace with campaign records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 600
  - Unit: m3
  - Basis: natural-gas volume per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated-cardboard packaging (`corrugated_cardboard_packaging`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when corrugated-cardboard cartons or sheets are dispatched with the product.
- Selected flow: Corrugated cardboard; type C, E or F, fibre ≥80% `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: packing-list issue quantity multiplied by measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Range: Provisional cardboard screen; replace with packing records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Low-density polyethylene bag or film (`ldpe_bag_or_film`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when LDPE bags or film are dispatched with the product.
- Selected flow: Low-density polyethylene packaging film
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `1ff32f1d-77ac-4a6f-b91c-67b08b13e55a` was rejected because it is polyethylene raw material, not an LDPE packaging-film product; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: packing-list issue quantity multiplied by measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Range: Provisional LDPE packaging screen; replace with packing records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wooden pallet (`wooden_pallet`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when a pallet is dispatched; report documented reuse cycles for returnable pallets.
- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg
- Amount rule: dispatched pallet count multiplied by measured unit mass and divided by documented lifetime cycles when reusable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Range: Provisional pallet-count screen; replace with dispatch and reuse-register records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: allocated wooden-pallet mass per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference carded or combed animal fibre (`reference_product_output`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

This is the only reference product. Record other saleable fibre fractions separately and do not add their mass to the reference amount.

- Selected flow: Wool and fine or coarse animal hair, carded or combed `7919afd2-a0eb-41f6-a192-705e27597637`
- Direction: Output
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / CPC 26150 / Mass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg net conforming product on the declared moisture or commercial mass basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_final_product_quality`
- Range: Fixed reference-product amount
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg reference product on the declared mass basis
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Onsite wastewater and residue handling (`onsite_wastewater_and_residue_handling`)

#### Inputs

##### Product flows

###### Electricity for onsite wastewater treatment (`wastewater_treatment_electricity`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when onsite wastewater treatment is operated.
- Selected flow: Electricity
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `50657322-939c-4829-a87b-47c093bfa6a7` was rejected because its reference-property UUID is Mass while its label says net calorific value, so the unit contract is internally inconsistent; requires foreground mapping
- Flow property / unit: Energy / kWh
- Amount rule: treatment-plant submeter reading or equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional treatment-electricity screen; replace with plant records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2000
  - Unit: kWh
  - Basis: per 1,000 kg fibre entering the associated wet process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ferric chloride coagulant (`ferric_chloride_coagulant`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when ferric chloride is actually dosed.
- Selected flow: Ferric chloride solution
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `d29463c7-fbbf-4811-b122-a651f205d603` was rejected because its CPC classification describes organo-sulphur/heterocyclic compounds rather than ferric chloride; requires foreground mapping
- Flow property / unit: Mass / kg as supplied; active fraction also recorded
- Amount rule: net stock issue or calibrated dosing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Chemical-specific value required; no generic treatment-chemical default is permitted
  - Range role: Typical range (`typical_range`)
  - Unit: kg as supplied
  - Basis: campaign minimum and maximum per 1,000 kg associated fibre input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Sodium hydroxide for wastewater pH adjustment (`wastewater_sodium_hydroxide`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when sodium hydroxide is actually dosed.
- Selected flow: Sodium hydroxide solution, 30%; industrial reagent input, at plant `7115909b-796c-4b3d-b40a-1a7c693d12d0`
- Direction: Input
- Flow type: Product flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Product / Mass
- Flow property / unit: Mass / kg as supplied; active fraction also recorded
- Amount rule: net stock issue or calibrated dosing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Chemical-specific value required; no generic alkali default is permitted
  - Range role: Typical range (`typical_range`)
  - Unit: kg as supplied
  - Basis: campaign minimum and maximum per 1,000 kg associated fibre input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Declared polymer flocculant SKU (`wastewater_polymer_flocculant_sku`)

Instantiate one row per supplied polymer SKU.

- Applicability: Conditional; include only when a polymer flocculant is actually dosed.
- Selected flow: Anionic polyacrylamide flocculant
- Direction: Input
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; direct-read candidate `f8ff6647-6bb3-4b72-9830-60a7a86203c4` was rejected because it does not confirm the declared anionic grade; requires foreground mapping
- Flow property / unit: Mass / kg as supplied; active fraction also recorded
- Amount rule: net stock issue or calibrated dosing for this SKU
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Sources: `eu-2022-2508-textiles-bat`
- Range: SKU-specific value required; no cross-SKU default is permitted
  - Range role: Typical range (`typical_range`)
  - Unit: kg as supplied
  - Basis: campaign minimum and maximum per 1,000 kg associated fibre input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Scouring wastewater entering onsite treatment (`scouring_wastewater_to_onsite_treatment`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when scouring wastewater enters onsite treatment.
- Selected flow: Scouring wastewater
- Direction: Input
- Flow type: Waste flow
- UUID status: unresolved after full hybrid search; direct-read textile-wastewater candidates were rejected because their Mass reference property and discharge destination do not match this Volume flow and declared transfer destination; requires foreground mapping
- Flow property / unit: Volume / m3
- Amount rule: metered scouring wastewater entering onsite treatment before recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg greasy fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional scouring-wastewater screen; replace with meter data before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: m3
  - Basis: per 1,000 kg greasy fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Optional-treatment wastewater entering onsite treatment (`optional_treatment_wastewater_to_onsite_treatment`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include only when wastewater from the named optional treatment enters onsite treatment.
- Selected flow: Wool-fibre dyeing wastewater
- Direction: Input
- Flow type: Waste flow
- UUID status: unresolved after full hybrid search; direct-read textile-wastewater candidates were rejected because their Mass reference property and discharge destination do not match this Volume flow and declared transfer destination; requires foreground mapping
- Flow property / unit: Volume / m3
- Amount rule: metered named-treatment wastewater entering onsite treatment before recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg treated fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional optional-treatment wastewater screen; replace with meter data before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: m3
  - Basis: per 1,000 kg treated fibre output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### Recycled water returned to process (`recycled_water_output`)

- Applicability: Required when the parent process is included and this atomic flow is physically present; otherwise omit the row.

Record only water physically returned to a named process and do not subtract it twice from gross intake.

- Selected flow: Recycled process water
- Direction: Output
- Flow type: Product flow
- UUID status: unresolved after full hybrid search; hybrid candidate `94a04f7e-2d5c-41f0-b182-d54a3b373a02` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Volume / m3
- Amount rule: metered water returned to a named scouring or treatment step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Physical water-balance bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: percent
  - Basis: share of metered wastewater entering onsite treatment for the same campaign
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include when onsite treatment produces sludge.
- Selected flow: Wastewater-treatment sludge
- Direction: Output
- Flow type: Waste flow
- UUID status: unresolved after full hybrid search; hybrid candidate `b2d1299a-c7c6-4903-8dd9-576e235944bb` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg wet mass; dry-matter fraction also recorded
- Amount rule: weighed sludge transferred to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Provisional treatment-sludge screen; replace with weighed wet and dry-matter records before review
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg wet mass
  - Basis: per 1,000 kg fibre entering the associated wet process, moisture basis declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated effluent discharged to water (`treated_effluent_to_water`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include when treated effluent leaves the product system to a receiving water body or sewer.
- Selected flow: Treated textile wastewater
- Direction: Output
- Flow type: Elementary flow
- UUID status: unresolved after full hybrid search; hybrid candidate `e57fc631-2c77-457a-aa30-be79e357792b` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Volume / m3
- Amount rule: calibrated discharge-meter reading after onsite treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Physical water-balance bound
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: percent
  - Basis: share of gross wastewater inflow not returned as measured recycle or retained in sludge
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Chemical oxygen demand to water (`cod_to_water`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include when COD is required by the applicable permit or study and treated effluent is discharged.
- Selected flow: Chemical Oxygen Demand, emissions to water, unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- Direction: Output
- Flow type: Elementary flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Elementary / Mass
- Flow property / unit: Mass / kg COD
- Amount rule: flow-proportional COD concentration multiplied by treated-effluent volume, with unit conversion and sampling coverage documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Observed analytical and flow-meter uncertainty required
  - Range role: Typical range (`typical_range`)
  - Unit: kg COD
  - Basis: campaign minimum and maximum load per 1,000 kg associated fibre input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Total suspended solids to water (`suspended_solids_to_water`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include when suspended solids are required by the applicable permit or study and treated effluent is discharged.
- Selected flow: Suspended solids, unspecified, emissions to water `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Direction: Output
- Flow type: Elementary flow
- UUID status: confirmed by Tiangong CLI direct read at state 100 as Elementary / Mass
- Flow property / unit: Mass / kg suspended solids
- Amount rule: flow-proportional suspended-solids concentration multiplied by treated-effluent volume, with unit conversion and sampling coverage documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fibre entering the associated wet process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Observed analytical and flow-meter uncertainty required
  - Range role: Typical range (`typical_range`)
  - Unit: kg suspended solids
  - Basis: campaign minimum and maximum load per 1,000 kg associated fibre input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Grease and oil to water (`grease_oil_to_water`)

Record this atomic flow separately; instantiate it only when its applicability condition holds, and never combine it with another material, carrier, waste or emission.

- Applicability: Conditional; include for scouring effluent when grease or oil is required by the applicable permit or study.
- Selected flow: Wool grease, to water
- Direction: Output
- Flow type: Elementary flow
- UUID status: unresolved after full hybrid search; hybrid candidate `e22aab76-4044-4bcd-b9ee-8d048cd8db67` was not assigned because no state-100 direct read confirmed exact atomic-flow semantics, flow type and reference property/unit; requires foreground mapping
- Flow property / unit: Mass / kg grease and oil
- Amount rule: flow-proportional grease-and-oil concentration multiplied by treated-effluent volume, with unit conversion and sampling coverage documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg greasy fibre entering scouring
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_emissions`
- Sources: `eu-2022-2508-textiles-bat`
- Range: Observed analytical and flow-meter uncertainty required
  - Range role: Typical range (`typical_range`)
  - Unit: kg grease and oil
  - Basis: campaign minimum and maximum load per 1,000 kg greasy fibre entering scouring
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | All foreground processes | Subdivide separately metered processes and keep species-, route- and treatment-specific campaigns separate before applying allocation. | `iwto-wool-lca-guidelines-2016` |
| `allocation_scouring_grease` | Clean fibre and recovered grease from scouring | Prefer system separation at the point where grease and dirt are removed. If saleable grease remains a co-product and separation is infeasible, use a documented economic allocation based on representative recent values; disclose price period, geography and sensitivity. | `iwto-wool-lca-guidelines-2016` |
| `allocation_noils_and_other_fibre_outputs` | Noils, guard hair and other saleable fibre fractions | First separate directly attributable operations. If multiple saleable fibre outputs remain, allocate residual burdens by a documented physical relationship where it represents causality; otherwise use a justified economic relationship and test sensitivity. Do not classify a saleable output as waste merely to avoid allocation. | `iwto-wool-lca-guidelines-2016` |
| `allocation_waste_and_recycling` | Wastes and recovered materials | Assign treatment burdens to the generated waste route. Do not claim substitution or avoided-production credits inside this unit-process dataset unless the selected downstream study method explicitly requires them and reports them separately. |  |
| `allocation_conservation` | Any allocated process | The sum of allocated inputs, outputs and burdens shall equal the corresponding unallocated totals for each process and reporting campaign. | `iwto-wool-lca-guidelines-2016`; `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipt` | `material_receipt_and_route_declaration` | Received, released and rejected fibre lots | Scale ticket, supplier certificate and lot-routing record | lot_id; supplier_id; species_or_commercial_name; composition_mass_fraction; received_state; treatment_flags; gross_mass; tare_mass; net_mass; moisture_basis; measured_moisture; route_id; upstream_dataset_ref; rejected_mass; rejection_reason | Calibrated scale plus supplier and laboratory identity review | kg; percent | Every lot | All lots in the reporting period | Every reporting site and outsourced receipt point in scope | Sum accepted and rejected mass by homogeneous fibre type, received state and route; no pooling before route-specific yield is retained | Scale calibration; lot certificate; chain-of-custody record; laboratory report where required |
| `cp_process_mass_balance` | `scouring_and_dewatering`; `dehairing_and_opening`; `carding`; `gilling_and_combing` | Fibre inputs, accepted outputs, grease, noils, guard hair and residues | Batch production and weighing record | campaign_id; route_id; fibre_type; input_mass; output_mass_by_fraction; moisture_basis; measured_moisture; inventory_change; spill_or_unmeasured_loss; destination_by_fraction | Calibrated scales and reconciled batch tickets at process boundaries | kg | Every campaign | Representative full reporting year or every campaign for shorter studies | Each included line and outsourced process | Reconcile on a common dry or declared mass basis by process and route; report weighted production mix only after campaign-level results are retained | Scale calibration; closed mass-balance worksheet; supervisor sign-off |
| `cp_wet_processing` | `scouring_and_dewatering`; `optional_fibre_treatments` | Gross water intake, recycled water and wet-process operation | Water meter and batch log | campaign_id; meter_start; meter_end; water_source; recycled_water_volume; bath_volume; operating_time; fibre_input_mass; temperature | Calibrated meter readings linked to batch logs | m3; hour; degree C; kg | Every campaign or continuous meter with monthly reconciliation | Full reporting period with seasonal coverage | Each wet-processing line | Gross intake minus measured same-process recycle gives net intake; keep discharge as a separate balance | Meter calibration; trend chart; water-balance reconciliation |
| `cp_chemical_use` | `scouring_and_dewatering`; `optional_fibre_treatments` | Detergent and treatment chemical use | Weighing, dosing and inventory record | campaign_id; product_name; supplier; active_ingredient; concentration; issued_mass_or_volume; returned_mass; treatment_function; safety_classification | Calibrated dosing system or stock issue reconciled to inventory | kg; L; percent active | Every batch with monthly stock reconciliation | Full reporting period | Each process and contractor in scope | Net issued amount by named product and treatment, normalized only after route separation | Dosing calibration; invoice; stock reconciliation; formulation sheet |
| `cp_energy_use` | `scouring_and_dewatering`; `dehairing_and_opening`; `carding`; `gilling_and_combing`; `optional_fibre_treatments`; `drying_conditioning_and_packing`; `onsite_wastewater_and_residue_handling` | Electricity, fuel and purchased heat | Submeter, utility meter, fuel issue or equipment-time calculation | campaign_id; carrier; meter_start; meter_end; fuel_quantity; heating_value_source; equipment_power; operating_time; allocation_driver | Prefer process submeter; otherwise documented calculation with concurrent operating records | kWh; MJ; kg; m3 | Continuous or each campaign, reconciled monthly | Full reporting period including seasonal conditions | Each included process line | Keep carriers separate; allocate shared meters by causal operating time or measured load and disclose residual unallocated use | Meter calibration; invoices; operating log; allocation worksheet |
| `cp_wastewater_and_emissions` | `scouring_and_dewatering`; `optional_fibre_treatments`; `onsite_wastewater_and_residue_handling` | Wastewater, sludge, residues and pollutant-specific emissions | Flow meter, analytical report, waste manifest and treatment log | campaign_id; source_process; gross_discharge_volume; recycle_volume; sampling_time; pollutant_name; concentration; receiving_compartment; treatment_step; sludge_wet_mass; sludge_dry_matter; residue_destination | Representative flow-proportional sampling where practicable, calibrated flow measurement, accredited analysis and weighed waste transfer | m3; mg/L; kg; percent dry matter | Per permit and campaign; at least enough to represent operating variability | Full reporting period and abnormal events | Each discharge point and treatment unit in scope | Calculate pollutant loads separately; reconcile water and residue balances; do not combine different pollutants or destinations | Laboratory accreditation; chain of custody; meter calibration; permit report; waste manifest |
| `cp_final_product_quality` | `carding`; `gilling_and_combing`; `optional_fibre_treatments`; `drying_conditioning_and_packing` | Product mass, fibre identity, composition and quality qualifiers | Dispatch scale, quality certificate and laboratory result | batch_id; product_form; species_or_commercial_name; composition; route; treatment_flags; net_mass; moisture_basis; measured_moisture; mean_fibre_diameter_or_grade; length_specification; colour; contamination_result | Calibrated dispatch scale and applicable textile test methods | kg; percent; micrometre or declared grade; mm | Every dispatched batch or statistically justified lot plan | Full reporting period | Each dispatching site | Aggregate only conforming batches with compatible qualifiers; retain batch distribution and production-weighted mean | Scale calibration; certificate of analysis; ISO 17751 report when applied; nonconformance log |
| `cp_packaging_and_dispatch` | `drying_conditioning_and_packing` | Packaging and dispatch state | Packing list and returnable-container register | batch_id; packaging_material; packaging_mass; item_count; unit_mass; reusable_flag; returns; pallet_tare; net_product_mass | Weigh representative unit packaging and reconcile to packing issues | kg; item | Every dispatch batch | Full reporting period | Each dispatch point | Sum packaging by material; subtract tare from reference product; amortize reusable packaging only with documented cycles | Packing list; tare check; return register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_fibre_mass` | Received and dispatched fibre | net_mass = gross_mass - tare_mass | gross_mass; tare_mass | Net fibre mass on measured basis | `mass-balance-identity` |
| `calc_dry_mass` | Moisture-basis conversion | dry_mass = measured_mass * (1 - moisture_fraction); retain measured mass and moisture result | measured_mass; moisture_fraction | Dry fibre mass | `mass-balance-identity`; `iso-6741-1-1989` |
| `calc_process_yield` | Each scouring, dehairing, carding, combing or treatment route | yield = accepted_output_mass / input_fibre_mass on the same moisture basis, calculated separately by fibre type, route and received state | accepted_output_mass; input_fibre_mass; moisture_basis; route_id; fibre_type | Route-specific yield | `mass-balance-identity` |
| `calc_mass_balance_closure` | Each foreground process | closure = sum(outputs + measured inventory increase) / sum(inputs + measured inventory decrease); investigate the unaccounted difference rather than assigning it automatically to product | input_masses; output_masses; inventory_change | Mass-balance closure and unaccounted difference | `mass-balance-identity` |
| `calc_net_water_consumption` | Wet processing | net_water_consumption = gross_water_intake - water_reused_or_recycled_to_the_same_process | gross_water_intake; recycled_water_volume | Net process water consumption | `eu-2022-2508-textiles-bat`; `mass-balance-identity` |
| `calc_pollutant_load` | Wastewater and direct emissions | pollutant_load = matched_flow_volume * pollutant_concentration with unit conversion; use time-weighted integration for variable continuous discharge | discharge_volume; concentration; sampling_period; unit_conversion | Pollutant-specific mass by receiving compartment | `eu-2022-2508-textiles-bat` |
| `calc_production_mix` | A dataset intentionally representing multiple measured campaigns | production_mix_value = sum(campaign_value * conforming_output_mass) / sum(conforming_output_mass), only after campaign-level fibre, route and treatment qualifiers remain available | campaign_value; conforming_output_mass; route_id; fibre_type; treatment_flags | Disclosed production-weighted mix | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | All fibre inputs and reference outputs | Identify animal species or accepted commercial fibre name, composition, received state, route and treatment flags; analytical confirmation is required when supplier evidence is insufficient for the study claim. | Supplier certificate, chain-of-custody record, and ISO 17751-1:2023 or ISO 17751-2:2023 laboratory report where applied |
| `dq_route_representativeness` | All process and inventory results | Results shall represent the actual carded or combed route and fibre type. A production mix is allowed only from retained campaign data and disclosed output-mass weighting. | Campaign register, route map and weighted aggregation worksheet |
| `dq_temporal_coverage` | Candidate foreground dataset | Prefer a continuous recent 12-month period covering seasonal and product-mix variability; a shorter period shall include all campaigns in scope and justify representativeness. | Meter coverage report, batch register and gap assessment |
| `dq_mass_and_moisture` | Fibre yield and reference amount | Calibrate scales, state moisture basis, retain moisture tests, and reconcile each process mass balance before normalization. | Calibration certificates, moisture reports and closure worksheets |
| `dq_wet_process_coverage` | Scouring and other wet treatments | Capture water intake, recycle, discharge, chemicals, energy, wastewater parameters and residues for every included wet process. | Water and chemical balances, meters, accredited analysis and waste manifests |
| `dq_proxy_disclosure` | Upstream and missing foreground data | Identify every proxy, geography, year, technology and substitution rationale. Provisional reasoned-estimate ranges are not foreground values and shall be replaced by collected data or reviewed evidence. | Dataset metadata, source register and replacement plan |
| `dq_completeness` | Foreground package | Reconcile included input, product, co-product, waste and elementary-flow records against batch and financial or utility totals; explain exclusions and unaccounted differences. | Completeness checklist and reconciliation signed by data owner |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Require exact product-flow UUID `7919afd2-a0eb-41f6-a192-705e27597637`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and all required qualifiers. |  |
| `validation_scope_and_route` | Product identity and process map | Confirm the output is carded or combed natural animal fibre ready for spinning; reject raw, merely scoured, garnetted, yarn, fabric, finished-product and mineral-wool records. Confirm every included process matches the declared received state, fibre type and route. | `eu-1007-2011-textile-fibre-names`; `iwto-wool-lca-guidelines-2016` |
| `validation_no_unconditional_average` | Aggregation | Reject a dataset that averages materially different animal species, carded and combed routes, greasy and already-scoured inputs, or optional-treatment states without retained campaign-level results, output-mass weighting and explicit production-mix scope. |  |
| `validation_mass_basis_and_closure` | Fibre mass and yield | Confirm net mass excludes packaging, input and output use a compatible moisture basis, route yields are calculated separately, and every included process reports mass-balance closure and unaccounted difference. | `iso-6741-1-1989`; `mass-balance-identity` |
| `validation_wet_processing` | Scouring and optional wet treatments | When a wet process is included, require gross and recycled water, named chemicals, carrier-specific energy, wastewater volume and handling, measured residues and applicable pollutant-specific records. | `eu-2022-2508-textiles-bat`; `iwto-wool-lca-guidelines-2016` |
| `validation_wool_grease_range_applicability` | Recovered wool grease | Apply the 10-15 kg/t coarse-wool and 50-60 kg/t extra- or super-fine-wool BAT-AEPL screens only when raw wool scouring and the stated fibre-diameter condition apply; do not apply them to other animal fibres or treat them as universal yields. | `eu-2022-2508-textiles-bat` |
| `validation_allocation` | Co-products and wastes | Require subdivision first, a documented allocation basis where co-products remain, conservation of allocated totals, destinations for all waste fractions, and separate disclosure of any downstream substitution credit. | `iwto-wool-lca-guidelines-2016`; `mass-balance-identity` |
| `validation_candidate_ranges` | Provisional screening ranges | Do not use `reasoned_estimate` ranges as collected foreground values, conformance limits or publication-critical defaults. Require a replacement source or representative foreground distribution before review or publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process or aggregated gate-to-gate dataset for one declared animal-fibre product, received state, route and treatment state |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and with complete upstream links |
| allowed_use | Construction of process or lifecyclemodel datasets for carded or combed natural animal fibre when the product qualifiers, route, geography, time period, boundary, allocation and data quality match the study |
| excluded_use | Unqualified category-average modelling across animal species or routes; substitution for greasy or merely scoured wool, garnetted fibre, yarn, fabric, finished textile products, feathers, down or mineral wool; use of reasoned-estimate ranges as measured inventory |
| required_metadata | Canonical PCR id; reference UUIDs; species or commercial fibre name; blend composition; received state; carded or combed route; product form; grade or mean diameter; length specification; moisture and commercial mass basis; treatment flags; recycled-content flag; geography; reporting period; facility and contractor scope; process map; upstream dataset references; allocation; packaging; data coverage |
| required_quality_disclosure | Campaign coverage; scale, meter and laboratory evidence; mass- and water-balance closure; route-specific yield distribution; treatment and wastewater coverage; allocation sensitivity; proxies and exclusions; unaccounted differences; all remaining reasoned-estimate ranges and their replacement owners |
| update_trigger | Change in fibre species or blend, received state, carded or combed route, treatment chemistry, equipment, water recycling, grease recovery, allocation economics, supplier geography, moisture basis or product specification; data older than the representativeness policy; new reviewed source evidence; or availability of foreground data that replaces a provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-1007-2011-textile-fibre-names` | Official guidance (`official_guidance`) | Regulation (EU) No 1007/2011 on textile fibre names and related labelling and marking of fibre composition, Annex I; https://eur-lex.europa.eu/eli/reg/2011/1007/oj; retrieved 2026-08-12 | Animal-fibre names and scope qualifiers for wool, speciality animal hair and other animal or horsehair |
| `eu-2022-2508-textiles-bat` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry; ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj; retrieved 2026-08-12 | Wool-scouring boundary, water and grease recovery, energy and residue handling, wet-process monitoring, and fibre-diameter-conditioned grease recovery ranges |
| `iwto-wool-lca-guidelines-2016` | Extension guidance (`extension_guidance`) | International Wool Textile Organisation, Guidelines for conducting a life cycle assessment of the environmental performance of wool textiles, April 2016; https://iwto.org/wp-content/uploads/2020/04/IWTO-Guidelines-for-Wool-LCA.pdf; retrieved 2026-08-12 | Scouring, carding, gilling and combing process decomposition; required inputs and outputs; primary data; co-product and allocation rules |
| `iso-17751-1-2023` | Standard (`standard`) | ISO 17751-1:2023, Textiles — Quantitative analysis of cashmere, wool, other specialty animal fibres and their blends — Part 1: Light microscopy method; https://www.iso.org/standard/83595.html; retrieved 2026-08-12 | Fibre identity and blend-composition verification by light microscopy when applicable |
| `iso-17751-2-2023` | Standard (`standard`) | ISO 17751-2:2023, Textiles — Quantitative analysis of cashmere, wool, other specialty animal fibres and their blends — Part 2: Scanning electron microscopy method; https://www.iso.org/standard/83596.html; retrieved 2026-08-12 | Fibre identity and blend-composition verification by scanning electron microscopy when applicable |
| `iso-6741-1-1989` | Standard (`standard`) | ISO 6741-1:1989, Textiles — Fibres and yarns — Determination of commercial mass of consignments — Part 1: Mass determination and calculations; confirmed current in 2025; https://www.iso.org/standard/13199.html; retrieved 2026-08-12 | Commercial-mass method for homogeneous single-species consignments and mass-basis disclosure |
| `mass-balance-identity` | Method factor (`method_factor`) | Conservation-of-mass identity applied to reconciled process inputs, outputs and inventory change | Net mass, dry-mass conversion, route yield, process closure and allocation conservation |
