---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-yarn-other-than-sewing-thread-containing-85-or-more-by-weight-of-cotton
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton

## 1. Scope and Applicability

This PCR covers gate-to-gate foreground production of greige cotton yarn, other than sewing thread, whose textile-fibre composition contains at least 85% cotton by mass. It applies to carded or combed yarn and to ring, compact, rotor/open-end, air-jet, or another declared staple-fibre spinning route when the route-specific operations are reported.

The foreground boundary begins with received baled cotton fibre and any permitted non-cotton staple fibre at the spinning mill gate. It ends with quality-released, wound and packaged yarn at the mill gate. Upstream cotton cultivation, ginning, fibre production, and inbound transport are represented by linked upstream datasets rather than recreated inside the foreground process.

Excluded products are cotton sewing thread; yarn containing less than 85% cotton by mass; continuous-filament yarn; and yarn whose dyeing, bleaching, mercerising, coating, or other wet finishing is part of the declared product unless those operations are modelled in a separate, explicitly linked dataset. Downstream weaving, knitting, garment manufacture, distribution, use, and end of life are outside this gate-to-gate dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-yarn-other-than-sewing-thread-containing-85-or-more-by-weight-of-cotton |
| classification_refs | CPC 3.0: 26360, exact scope reference |
| covered_products | Greige cotton yarn other than sewing thread, containing at least 85% cotton by mass; carded or combed; single or plied where twisting is declared |
| excluded_products | Sewing thread; yarn below 85% cotton; continuous-filament yarn; dyed, bleached, mercerised, coated, or otherwise wet-finished yarn unless separately modelled and linked |
| representative_product | Quality-released greige cotton yarn wound on the declared delivery package at the spinning-mill gate |
| production_route | Bale opening, cleaning and blending; carding and drawing; optional combing; route-dependent roving; spinning; optional twisting; winding, conditioning, inspection and packaging |
| market_state | Intermediate textile product at mill gate, dry/conditioned to the declared commercial moisture basis and ready for downstream fabric production |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of greige cotton yarn suitable for downstream knitting or weaving |
| How much | 1 kg net cotton yarn, excluding delivery packaging |
| How well | Other than sewing thread; at least 85% cotton by mass; yarn count, spinning route, carded/combed state, ply, twist, finish state, quality grade and moisture basis declared |
| How long or cycle | One quality-released production lot at the spinning-mill gate; no use duration is assigned to this intermediate product |
| reference_flow_link | Exactly 1 kg of the declared reference product flow at the foreground mill gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cotton mass fraction; composition and mass fraction of each non-cotton fibre; yarn count or linear density; spinning system; carded or combed state; single or plied construction; twist direction and level where applicable; greige finish state; commercial moisture basis or regain convention; recycled cotton content if any; production geography and period; delivery package |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference cotton yarn | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net conforming yarn, excluding delivery packaging, on the declared commercial moisture basis. |
| `cotton_fraction` | Textile-fibre composition | Mass | kg and mass fraction | Cotton mass divided by total textile-fibre mass in the reference yarn shall be at least 0.85; retain composition evidence by lot or product specification. |
| `common_moisture_basis` | Fibre inputs, intermediate fibre and yarn, rejects, and reference output | Mass | kg | Reconcile mass on one declared moisture basis or retain measured moisture/regain and the conversion applied; do not mix conditioned and oven-dry masses without conversion. |
| `fibre_mass_reconciliation` | Foreground fibre transformation | Mass | kg | Reconcile received textile fibre with conforming yarn, recovered fibre, wastes, measured dust, samples, and inventory change within declared measurement uncertainty. |
| `packaging_separation` | Reference product and packaging | Mass | kg | Exclude delivery packaging from the 1 kg reference amount and record packaging as separate inventory inputs and wastes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Baled cotton fibre and any permitted non-cotton staple fibre received, weighed, identified by composition and lot, and accepted at the spinning-mill gate |
| starting_condition_role | Foreground gate input; upstream cultivation, ginning, fibre production and inbound logistics are linked through upstream datasets |
| product_classification_scope | Greige cotton yarn other than sewing thread with cotton content of at least 85% by mass |
| recursive_input_rule | Purchased or externally reworked yarn in the same product category is recorded once as a technosphere product input with an upstream dataset; its manufacture is not recursively expanded inside this foreground package |
| upstream_dataset_requirement | Link each cotton, non-cotton fibre, purchased yarn, energy carrier, water, auxiliary and packaging input to a geographically and temporally appropriate upstream dataset or disclose the unresolved gap |
| disclosure | Declare composition, fibre origin when known, spinning route, combing and roving applicability, moisture basis, internal recycling, external rework, wet-treatment exclusions, allocation method, production period and site |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground_system | Include all on-site operations from accepted baled fibre through opening, cleaning, blending, carding, drawing, route-specific combing and roving, spinning, optional twisting, winding, conditioning, inspection and packaging. | `eu-jrc-txt-bref-2023`; `eu-pef-2021-2279` |
| `sb_inputs_outputs` | foreground_inventory | Record all known material and energy inputs and all products, co-products, wastes and direct emissions for included processes; retain site-specific activity data for manufacturing. | `eu-pef-2021-2279` |
| `sb_upstream_linkage` | upstream_inputs | Represent cultivation, ginning, non-cotton fibre production, energy supply, auxiliaries, packaging and inbound transport with linked upstream datasets; do not omit their identities from the foreground package. | `eu-pef-2021-2279` |
| `sb_wet_processing_exclusion` | product_finish | Exclude dyeing, bleaching, mercerising, coating and other wet finishing from this greige-yarn foreground dataset unless separately measured, modelled and disclosed as an added process. | `eu-jrc-txt-bref-2023` |
| `sb_cutoff_disclosure` | exclusions | Apply no undocumented cut-off. Any excluded activity or flow shall be named, justified, and screened for potential significance; known fibre, electricity, auxiliaries, water, packaging, waste and direct-emission flows shall not be omitted merely for lack of a preferred dataset. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fibre_preparation` | Fibre opening, cleaning, blending, carding and drawing | required | Always; combing is included only when the declared yarn is combed | Foreground fibre preparation | Per kg prepared sliver transferred to yarn formation |
| `yarn_formation` | Roving where applicable and yarn spinning | required | Always; roving is route-dependent and shall be declared | Foreground yarn formation | Per kg spun yarn transferred to winding |
| `winding_packaging` | Optional twisting, winding, conditioning, inspection and packaging | required | Always; twisting and active conditioning are included when performed | Foreground product finishing and release | Per 1 kg net conforming reference yarn |

### Process: Fibre opening, cleaning, blending, carding and drawing (`fibre_preparation`)

#### Inputs

##### Product flows

###### Received cotton fibre (`received_cotton_fibre`)

Record accepted cotton fibre entering the foreground mill, including recovered or recycled cotton when used and declared.

- Selected flow: Cotton fibre, baled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted cotton-fibre mass corrected to the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_composition`
- Sources: `un-cpc-ver-3-2025`; `eu-jrc-txt-bref-2023`
- Range: Provisional cotton-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.85
  - Upper: 1.50
  - Unit: kg/kg reference yarn
  - Basis: broad first-pass cotton input per kg conforming yarn before site yield is known
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Permitted non-cotton staple fibre (`non_cotton_fibre`)

Record each non-cotton fibre separately when present; the finished yarn shall still meet the cotton-content threshold.

- Selected flow: Declared non-cotton staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass by fibre type, corrected to the common moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_composition`
- Sources: `un-cpc-ver-3-2025`
- Range: Provisional blend-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg reference yarn
  - Basis: deliberately broad pre-review estimate that includes process loss; finished-yarn non-cotton fraction remains at most 0.15
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fibre-preparation electricity (`fibre_preparation_electricity`)

Include electricity for opening, cleaning, conveying, blending, carding, drawing, optional combing, suction and room conditioning attributable to this process.

- Selected flow: Electricity, supplied to mill
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or allocated main-meter use for fibre-preparation equipment and associated services
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared sliver transferred to yarn formation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utility_records`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional fibre-preparation electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh/kg prepared sliver
  - Basis: broad first-pass range pending site and yarn-count evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fibre-conditioning water (`fibre_preparation_water`)

Include water added to fibre or used for room humidification when separately measurable and attributable; do not include wet pretreatment outside the declared scope.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water less separately measured return or recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared sliver transferred to yarn formation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utility_records`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional humidification-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg prepared sliver
  - Basis: broad first-pass make-up-water estimate pending site metering and climate conditions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fibre sliver transferred to yarn formation (`prepared_sliver`)

Record the measured internal intermediate output after the applicable fibre-preparation sequence.

- Selected flow: Prepared textile-fibre sliver, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass on the common moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared sliver transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_output_mass`
- Sources: `eu-jrc-txt-bref-2023`

##### Waste flows

###### Fibre preparation rejects and captured trash (`fibre_preparation_rejects`)

Record trash, short fibre, carding waste and captured material by actual destination; separately identify internally recycled, externally recovered and disposed fractions.

- Selected flow: Textile-fibre preparation waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared sliver transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional fibre-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg prepared sliver
  - Basis: broad mass-balance screen pending mill-specific fibre grade and recovery data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured fibre dust to air (`fibre_preparation_dust_air`)

Record particulate matter released after installed collection or abatement; captured dust belongs in the waste row.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated concentration multiplied by exhaust volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared sliver transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional dust-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg prepared sliver
  - Basis: broad pre-review screen for uncaptured particulate emissions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Roving where applicable and yarn spinning (`yarn_formation`)

#### Inputs

##### Product flows

###### Prepared fibre sliver (`sliver_to_spinning`)

Record prepared sliver entering the declared spinning route, including route-dependent roving transfers.

- Selected flow: Prepared textile-fibre sliver, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass on the common moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg spun yarn transferred to winding
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_output_mass`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional prepared-fibre input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.50
  - Unit: kg/kg spun yarn
  - Basis: broad first-pass mass-balance screen pending route-specific loss records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Yarn-formation electricity (`yarn_formation_electricity`)

Include electricity for route-dependent roving, spinning frames or rotors, suction, drives, controls, compressed-air generation when not separately supplied, and attributable room conditioning.

- Selected flow: Electricity, supplied to mill
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or allocated main-meter use for yarn-formation equipment and associated services
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg spun yarn transferred to winding
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utility_records`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional yarn-formation electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.2
  - Upper: 10
  - Unit: kWh/kg spun yarn
  - Basis: broad route- and yarn-count-sensitive first-pass estimate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spinning lubricants and conditioning agents (`spinning_auxiliaries`)

Record each auxiliary by product, function and mass, including spindle oils or fibre/yarn preparation agents that remain on the yarn or leave as waste or emission.

- Selected flow: Spinning lubricant or conditioning agent
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus purchases minus closing stock and off-site returns, allocated to the product lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg spun yarn transferred to winding
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_auxiliary_and_packaging_records`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional spinning-auxiliary screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg spun yarn
  - Basis: broad first-pass estimate; BREF confirms relevance but does not provide a cotton-yarn-specific amount range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Spun yarn transferred to winding (`spun_yarn_intermediate`)

Record the internal yarn output after spinning and any route-specific roving operation.

- Selected flow: Spun cotton yarn, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass on the common moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg spun yarn transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_output_mass`
- Sources: `eu-jrc-txt-bref-2023`

##### Waste flows

###### Spinning waste, pneumafil and yarn breaks (`spinning_waste`)

Record fibre and yarn waste by grade and destination; internal returns are reported separately and are not double-counted as new fibre input.

- Selected flow: Textile spinning waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun yarn transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional spinning-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg spun yarn
  - Basis: broad route-specific mass-balance screen pending foreground waste records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Yarn-formation particulate emissions to air (`yarn_formation_dust_air`)

Record particulate matter released after collection or abatement from spinning and suction exhausts.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated concentration multiplied by exhaust volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg spun yarn transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional yarn-formation dust screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.03
  - Unit: kg/kg spun yarn
  - Basis: broad pre-review screen for uncaptured particulate emissions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Optional twisting, winding, conditioning, inspection and packaging (`winding_packaging`)

#### Inputs

##### Product flows

###### Spun yarn intermediate (`spun_yarn_to_winding`)

Record spun yarn entering twisting where applicable and winding.

- Selected flow: Spun cotton yarn, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass on the common moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_output_mass`
- Sources: `eu-jrc-txt-bref-2023`

###### Winding and packaging electricity (`winding_packaging_electricity`)

Include electricity for twisting when performed, winding, suction, conditioning, inspection and packaging equipment.

- Selected flow: Electricity, supplied to mill
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or allocated main-meter use for the included operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utility_records`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional winding electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 2
  - Unit: kWh/kg reference yarn
  - Basis: broad first-pass range pending mill-specific winding and conditioning records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water or steam (`yarn_conditioning_utility`)

Include water or steam intentionally used to condition yarn when the operation is performed; retain the moisture basis needed to avoid treating added commercial moisture as fibre yield.

- Selected flow: Process water or steam
- Flow property / unit: Mass / kg
- Amount rule: measured supplied mass less measured return or condensate recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utility_records`
- Sources: `eu-jrc-txt-bref-2023`
- Range: Provisional yarn-conditioning utility estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg reference yarn
  - Basis: broad first-pass supplied water-or-steam estimate; replace with route-specific metering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delivery packaging materials (`delivery_packaging`)

Record cones, tubes, cartons, film, straps, pallets and other delivery packaging by material and fate.

- Selected flow: Declared delivery packaging material
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issued to the production lot minus returned reusable packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_auxiliary_and_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference yarn
  - Basis: broad first-pass estimate pending declared package configuration and reuse records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming cotton yarn reference product (`reference_cotton_yarn`)

This is the quality-released net yarn output that fulfils the functional unit and all required qualifiers.

- Selected flow: Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming yarn on the declared moisture basis, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:
- Range: Reference-output identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: exact reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Yarn ends, off-quality yarn and packaging waste (`winding_packaging_waste`)

Record production yarn waste and packaging waste separately by material and destination; reworked yarn is tracked as an internal return.

- Selected flow: Textile yarn and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material, quality grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional winding-and-packaging waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg reference yarn
  - Basis: broad first-pass waste screen pending product and package records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional_foreground_processes | First avoid allocation by subdividing processes, using product-specific bills of material, submeters, production counters, and separately measured waste or recovered-fibre streams. | `eu-pef-2021-2279` |
| `allocation_physical` | shared_operations | Where subdivision is not possible, allocate shared electricity, utilities and auxiliaries using a documented causal physical driver such as machine operating time, spindle-hours, air volume, or mass throughput. | `eu-pef-2021-2279` |
| `allocation_residual` | saleable_recovered_material | If a recovered fibre or yarn stream leaves as a co-product, document the waste/co-product decision and first test a relevant physical relationship; if none is defensible, use contemporaneous economic value and report the prices and sensitivity. | `eu-pef-2021-2279` |
| `allocation_internal_recycling` | internal_returns | Track internally returned fibre, pneumafil, yarn ends and rework as internal loops; do not count them both as a new external input and an external co-product. Attribute collection and reprocessing burdens to the process that performs them. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_and_composition` | `fibre_preparation` | received cotton and non-cotton fibre | weighbridge/scale tickets, goods receipt, supplier specification, lot test | lot_id; fibre_type; supplier; gross_mass; tare_mass; net_mass; moisture_or_regain; cotton_fraction; recycled_fraction | Calibrated mass measurement plus composition certificate or laboratory test | kg; mass fraction | Every receipt and lot | Complete representative production period, normally at least 12 consecutive months or justified campaign | All included mills and fibre lots | Sum accepted net mass by fibre type; convert to common moisture basis; allocate to product lot by traceable issue records | Scale calibration; certificates; laboratory method; rejected-lot log |
| `cp_intermediate_and_output_mass` | `fibre_preparation`; `yarn_formation`; `winding_packaging` | internal intermediates and conforming yarn | production counters, calibrated scales, lot release records | lot_id; process_id; input_mass; output_mass; moisture_basis; yarn_count; quality_status; timestamp | Calibrated mass measurement at process transfer and final release | kg | Each lot or shift | Same period as input and utility records | All included production lines | Sum conforming transfers; exclude rework until released; normalize by final net reference yarn | Calibration; lot genealogy; release test; stock reconciliation |
| `cp_energy_and_utility_records` | `fibre_preparation`; `yarn_formation`; `winding_packaging` | electricity, water, steam and conditioning utilities | submeters, main meters, invoices, equipment runtime | meter_id; opening_reading; closing_reading; unit; process_area; runtime; production_mass; allocation_driver | Prefer submetering; otherwise reconcile main meter and allocate using documented causal driver | kWh; MJ; kg; m3 | Meter interval no longer than monthly; production counters by shift or lot | Same representative production period as output | All included process areas and shared utilities | Consumption equals closing minus opening plus adjustments; subtract measured exports/recovery; allocate shared use once | Meter calibration; invoices; reconciliation; allocation worksheet |
| `cp_auxiliary_and_packaging_records` | `yarn_formation`; `winding_packaging` | lubricants, conditioning agents and packaging | purchase, stock, issue and return records; formulation and safety data | product_id; function; opening_stock; purchases; closing_stock; returns; lot_issue; material; reusable_count | Mass balance of stock and lot issues with formulation identity retained | kg | Monthly and by product campaign | Same representative production period as output | All included mills and package configurations | Opening stock plus purchases minus closing stock and returns; allocate by recorded issue or causal production driver | Inventory reconciliation; supplier specification; package bill of material |
| `cp_waste_and_recovery_records` | `fibre_preparation`; `yarn_formation`; `winding_packaging` | fibre, yarn, dust and packaging waste or recovery | calibrated waste scales, transfer notes, recycler receipts, disposal manifests | waste_id; material; source_process; gross_mass; tare_mass; destination; internal_return; sale_status; moisture_basis | Weigh each container or documented batch and reconcile internal returns | kg | Each transfer, aggregated monthly | Same representative production period as output | All included mills and waste destinations | Sum by material and fate; exclude internal return from external output; normalize to process output and reference yarn | Scale calibration; signed transfer note; recycler/disposal evidence |
| `cp_direct_emissions` | `fibre_preparation`; `yarn_formation` | particulate and other direct releases | stack or workplace exhaust tests, continuous monitors, exhaust-flow records | source_id; pollutant; concentration; exhaust_volume; operating_hours; abatement_status; detection_limit | Direct measurement or concentration-times-volume calculation using representative operation | kg; mg/m3; m3 | Permit/test frequency and after material process change | Representative operation within reporting period | Every direct emission source in the foreground boundary | Integrate measured concentration and flow; subtract no captured mass unless separately measured; normalize to process output | Laboratory accreditation; instrument calibration; sampling plan; detection-limit treatment |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground inventory rows | Normalized amount = period or lot amount / net conforming reference-yarn mass from the same scope and period. | Collected activity amount; net conforming yarn mass | Amount per 1 kg reference yarn | `eu-pef-2021-2279` |
| `calc_cotton_fraction` | Product composition | Cotton fraction = cotton fibre mass in released yarn / total textile-fibre mass in released yarn; result shall be at least 0.85. | Composition test or traceable fibre bill of material corrected for measured losses | Cotton mass fraction and pass/fail | `un-cpc-ver-3-2025` |
| `calc_fibre_balance` | Foreground fibre system | Received fibre + opening stock = conforming yarn + external recovered material + disposed waste + measured direct mass emissions + samples + closing stock; reconcile on the common moisture basis. | Fibre receipts; stock; output; waste; emissions; samples; moisture data | Mass-balance residual and uncertainty statement | `eu-pef-2021-2279` |
| `calc_shared_utility` | Shared utilities | Allocate only the residual shared quantity after direct submetering, using the declared causal driver; allocated totals shall equal the reconciled shared-meter total. | Main and submeter records; driver quantities | Utility amount by process and product | `eu-pef-2021-2279` |
| `calc_direct_emission` | Measured exhaust releases | Emitted mass = representative concentration multiplied by corrected exhaust volume over operating time; report non-detect treatment and abatement state. | Concentration; flow; time; detection limit | kg pollutant per process output | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and inputs | Preserve UUID-bearing reference identity, product composition, yarn count, spinning route, finish and moisture qualifiers for every released product dataset. | UUID references; lot specification; release record |
| `dq_temporal` | Foreground activity data | Use one consistent representative period for inputs, utilities, production, waste and emissions; normally cover at least 12 consecutive months or justify a shorter campaign. | Meter dates; production calendar; campaign rationale |
| `dq_technological` | Process coverage | Match records to the actual opening, carding, optional combing, drawing, roving/spinning, twisting, winding and conditioning technology used. | Process flow diagram; equipment list; route declaration |
| `dq_geographical` | Site and upstream links | Identify each production site and choose upstream datasets representative of the disclosed geography; document proxies. | Site register; supplier origin; dataset metadata |
| `dq_completeness` | Foreground inventory | Reconcile fibre mass and site utilities, account for all known waste destinations and direct releases, and list every excluded activity or unresolved dataset. | Mass/energy reconciliation; waste manifests; emission inventory; gap log |
| `dq_precision` | Measurements and calculations | Retain calibration, sampling, allocation drivers, detection-limit treatment and uncertainty information sufficient to reproduce normalized values. | Calibration certificates; sampling plan; calculation workbook |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference_flow | The reference output shall use product flow UUID `526fe0a1-be6d-4384-b609-4ca604628ec4`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and exactly 1 kg net yarn. |  |
| `val_product_scope` | product_identity | Confirm the product is not sewing thread, contains at least 85% cotton by textile-fibre mass, and is greige unless separately linked wet-treatment processes are present. | `un-cpc-ver-3-2025` |
| `val_route_coverage` | process_inventory | Confirm opening/cleaning/blending, carding/drawing, spinning and winding are represented; record whether combing, roving, twisting, conditioning and packaging are applicable and included. | `eu-jrc-txt-bref-2023` |
| `val_mass_balance` | fibre_inventory | Reconcile fibre inputs, internal returns, conforming yarn, recovered material, waste, dust, samples and stock change on one moisture basis; investigate residuals outside declared measurement uncertainty. | `eu-pef-2021-2279` |
| `val_energy_completeness` | electricity_and_utilities | Reconcile submetered and allocated electricity and utilities to site totals for the same period, with no double allocation of shared services. | `eu-pef-2021-2279` |
| `val_allocation` | multifunctionality | Verify subdivision was considered first, each remaining allocation driver is causal and reproducible, and co-product or waste status plus sensitivity is disclosed. | `eu-pef-2021-2279` |
| `val_provisional_ranges` | amount_ranges | Treat every `reasoned_estimate` range as a replaceable candidate screening range, never as evidence that foreground data are typical or conforming. |  |
| `val_completeness_disclosure` | dataset_release | List checks performed, checks skipped, unresolved UUIDs, proxy datasets, exclusions, data-quality limitations and all required qualifiers before guidance or publication. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site- and product-specific foreground manufacturing dataset for greige cotton yarn at the spinning-mill gate |
| downstream_use | May be linked as a secondary_dataset or background_dataset for fabric, apparel and other textile product systems after review |
| allowed_use | Gate-to-gate cotton-yarn manufacturing inventories and downstream models that preserve the declared composition, route, moisture and geography |
| excluded_use | Full cradle-to-gate claim without upstream fibre and energy datasets; sewing thread; yarn below 85% cotton; dyed, bleached, mercerised, coated or other wet-finished yarn not separately modelled |
| required_metadata | PCR id; product flow UUID; cotton and non-cotton composition; yarn count; spinning system; carded/combed state; ply and twist; finish; moisture basis; recycled content; site; geography; period; process coverage; allocation; packaging |
| required_quality_disclosure | Foreground data coverage; meter and scale reconciliation; mass-balance residual; allocation drivers; waste destinations; direct-emission method; proxy datasets; reasoned estimates; excluded and skipped checks |
| update_trigger | Material change in fibre composition, yarn count family, spinning technology, combing/roving route, site energy supply, auxiliary formulation, package design, allocation, production site, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-ver-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 26360, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Official product-category scope and 85% cotton threshold |
| `eu-jrc-txt-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, JRC131874, January 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf (retrieved 2026-08-11) | Cotton spinning process decomposition; electricity, humidification, fibre collection, auxiliaries, wastes and air-emission relevance |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint method, 15 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279 (retrieved 2026-08-11) | System boundary, company-specific manufacturing data, allocation hierarchy, completeness, data quality and validation |
