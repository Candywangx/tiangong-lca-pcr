---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.rice-semi-or-wholly-milled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rice, semi- or wholly milled

## 1. Scope and Applicability

This PCR covers the foreground production of semi-milled or wholly milled rice from paddy rice at a rice-milling facility. It covers conventional and parboiled routes when the route is declared, and bulk or packaged output when the delivery state is declared.

The category includes edible rice from which part or all of the bran layer has been removed, including declared blends of head rice and broken kernels. It excludes paddy rice, husked or brown rice sold without further milling, rice flour, rice starch, cooked rice, prepared rice foods, and agricultural rice cultivation as the foreground product system.

The foreground boundary begins with weighed paddy at the mill gate and ends with semi-milled or wholly milled rice ready for dispatch at the same facility. Upstream paddy production, inbound transport, downstream distribution, retail, cooking, consumption, and end-of-life are represented by linked datasets only when required by the study scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.rice-semi-or-wholly-milled |
| classification_refs | CPC 3.0: 23161, Rice, semi- or wholly milled |
| covered_products | Semi-milled rice; wholly milled rice; declared head-rice and broken-kernel blends sold as milled rice; parboiled milled rice when the parboiling route is declared |
| excluded_products | Paddy rice; husked or brown rice sold as such; rice flour; rice starch; cooked or otherwise prepared rice foods; cultivation-stage rice products |
| representative_product | Food-grade wholly milled rice, graded and ready for dispatch from a commercial rice mill |
| production_route | Paddy receipt and conditioning; optional parboiling; dehusking; paddy separation; whitening or polishing to the declared degree; grading or blending; optional packaging |
| market_state | Bulk or packaged food-grade rice at the mill gate, as received, with moisture, milling degree, broken-kernel fraction, parboiling state, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Food-grade semi-milled or wholly milled rice ready for dispatch from the rice-milling facility |
| How much | 1 kg net rice product at the declared as-received moisture content |
| How well | Meets the declared product specification for milling degree, moisture, broken-kernel fraction, impurities, parboiling state, and packaging state |
| How long or cycle | One production lot or campaign represented by the foreground data package; no service life is assigned |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the Tiangong reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Rice, semi- or wholly milled `4125cc1c-d304-48b4-a701-f40a581df3c3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | degree of milling; as-received moisture content; broken-kernel fraction; parboiled or non-parboiled route; bulk or packaged delivery state; included packaging; facility geography; milling technology; production period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference product on a net as-received mass basis and normalize the foreground inventory to exactly 1 kg of conforming reference product. |
| `moisture_basis` | Paddy input, intermediate rice, reference product, and material co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass % moisture | Record the moisture basis for each material mass; do not compare or convert wet-basis and dry-basis masses without the paired moisture measurement and documented formula. |
| `material_mass_balance_unit` | Product, co-product, residue, and waste mass balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert all material flows to kg on their recorded moisture basis before balancing, and disclose any moisture correction separately. |
| `energy_unit_preservation` | Electricity and fuel-energy records | Declared energy property | kWh for electricity; MJ for thermal energy | Preserve invoiced or metered units and record every conversion factor; do not treat fuel mass as energy without a declared heating value and basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Weighed paddy rice received at the milling facility, with supplier or origin, receipt time, moisture, impurity fraction, and prior drying or parboiling state declared |
| starting_condition_role | Foreground entry point for the rice-milling data package |
| product_classification_scope | Semi-milled or wholly milled rice independently of the external classification code used to locate this PCR |
| recursive_input_rule | If semi-milled or wholly milled rice enters a foreground step, record it once as a product input linked to an upstream dataset and do not recursively reconstruct the same category inside that step |
| upstream_dataset_requirement | Link paddy cultivation, off-site drying or parboiling, inbound transport, purchased energy, water supply, packaging production, and off-site treatment datasets when those activities are outside the foreground facility boundary |
| disclosure | Declare the paddy condition at receipt, onsite operations, parboiling route, milling technology, degree of milling, treatment of broken rice and other outputs, packaging scope, storage period, and all exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_start_end` | Foreground rice-milling system | Begin at weighed paddy receipt and include all onsite cleaning, drying or tempering, parboiling, dehusking, separation, whitening or polishing, grading or blending, storage, and packaging operations that are actually performed before the declared mill-gate product is dispatched. | `fao-grain-postharvest-rice-milling`; `fao-prevention-postharvest-losses-rice-milling` |
| `sb_upstream_linkage` | Upstream inputs | Represent cultivation, off-site conditioning, inbound transport, purchased utilities, packaging production, and off-site treatment with linked upstream datasets; do not duplicate an activity already included in an upstream dataset. | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |
| `sb_conditional_routes` | Conditional operations | Include onsite drying, parboiling, polishing or glazing, by-product energy recovery, and packaging only when performed; record the route-specific utilities, outputs, emissions, and wastes and state why an omitted branch does not apply. | `fao-rice-human-nutrition-postharvest`; `fao-prevention-postharvest-losses-rice-milling` |
| `sb_recursive_category_input` | Same-category product inputs | Record incoming semi-milled or wholly milled rice as a product input with an upstream dataset and stop category recursion at that recorded boundary. | `iso-14044-lca-requirements` |
| `sb_downstream_exclusions` | Downstream stages | Exclude distribution beyond the mill gate, retail, cooking, consumption, and consumer end-of-life unless the declared study scope explicitly adds them with separate processes and datasets. | `iso-14044-lca-requirements` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `paddy_receiving_conditioning` | Paddy receipt, cleaning, and conditioning | required | Always included; onsite drying or tempering is represented only when performed | Foreground receiving and conditioning | kg conditioned paddy transferred to milling |
| `parboiling` | Parboiling and redrying | conditional | Include when the declared product is produced from paddy parboiled at the foreground facility | Foreground route-specific treatment | kg parboiled paddy transferred to milling |
| `milling_separation` | Dehusking, whitening or polishing, and separation | required | Always included for semi-milled or wholly milled rice | Foreground core production | kg conforming bulk milled rice |
| `packaging` | Product packaging for dispatch | conditional | Include when packaging is part of the declared mill-gate delivery state | Foreground finishing | kg packaged reference product |

### Process: Paddy receipt, cleaning, and conditioning (`paddy_receiving_conditioning`)

#### Inputs

##### Product flows

###### Paddy rice received at the mill (`received_paddy`)

Paddy rice crosses the foreground boundary at the facility gate. Receipt mass, moisture, impurity fraction, supplier or origin, and prior treatment state are collected for every represented lot.

- Selected flow: Paddy rice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net paddy receipt mass allocated to the represented production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paddy_receipts`
- Sources: `fao-grain-postharvest-rice-milling`
- Range: Source-derived paddy-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.43
  - Upper: 1.67
  - Unit: kg paddy/kg conforming reference product
  - Basis: reciprocal of the FAO illustrative 60 kg white-rice to 70 kg white-plus-broken-rice output per 100 kg paddy, with the treatment of broken rice declared
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-grain-postharvest-rice-milling`

###### Electricity for receiving and conditioning (`conditioning_electricity`)

Record metered electricity for conveying, aspiration, cleaning, drying, and conditioning equipment included in this process.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoice-reconciled electricity attributable to receiving and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned paddy output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy`
- Range: Provisional electricity QA guardrail pending reviewed site evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg conditioned paddy
  - Basis: broad screening interval for receiving, cleaning, conveying, and any onsite conditioning
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Conditioned paddy sent to the milling line (`conditioned_paddy`)

Record the net mass and moisture of cleaned or otherwise conditioned paddy transferred to the milling process.

- Selected flow: Conditioned paddy rice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass after stock-change correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg received paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Range: Provisional conditioning-yield QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1
  - Unit: kg conditioned paddy/kg received paddy
  - Basis: broad screen for removal of impurities and conditioning loss; replace with reviewed site evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed impurities and screenings (`receiving_screenings`)

Record stones, straw, empty grains, and other removed material by its actual destination and waste or recovered-material classification.

- Selected flow: Rice-mill receiving screenings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-derived screenings sent to each destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg received paddy
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_outputs`
- Range: Provisional screenings QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg received paddy
  - Basis: broad first-pass screen; replace with facility mass records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Parboiling and redrying (`parboiling`)

#### Inputs

##### Product flows

###### Conditioned paddy for parboiling (`paddy_to_parboiling`)

Record only paddy entering an onsite soaking, steaming, and redrying route.

- Selected flow: Conditioned paddy rice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net input mass and moisture at parboiling entry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg parboiled paddy output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parboiling_inputs`
- Sources: `fao-rice-human-nutrition-postharvest`

###### Process water for soaking and steam generation (`parboiling_water`)

Record all freshwater or supplied process water entering soaking, washing, and direct steam-contact operations.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered water supplied to the represented parboiling lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg parboiled paddy output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parboiling_inputs`
- Range: Provisional parboiling-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg water/kg parboiled paddy
  - Basis: broad screening interval covering no onsite parboiling through water-intensive batch operation; replace with metered evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy for steaming and redrying (`parboiling_thermal_energy`)

Record purchased fuel or steam and separately report any rice-husk energy used onsite without netting it from the husk output.

- Selected flow: Thermal energy supplied to parboiling
- Flow property / unit: Energy / MJ
- Amount rule: metered steam or fuel energy calculated from measured fuel and declared heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg parboiled paddy output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parboiling_inputs`
- Range: Provisional parboiling-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg parboiled paddy
  - Basis: broad first-pass screen for soaking heat, steaming, and redrying; replace with metered energy and fuel evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Parboiled paddy sent to milling (`parboiled_paddy`)

Record output mass, moisture, and stock change after steaming and redrying.

- Selected flow: Parboiled paddy rice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net output mass after redrying and stock-change correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg parboiled paddy output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parboiling_outputs`
- Sources: `fao-rice-human-nutrition-postharvest`

##### Waste flows

###### Parboiling wastewater (`parboiling_wastewater`)

Record wastewater mass or volume, discharge route, and treatment destination without subtracting evaporated water from the wastewater record.

- Selected flow: Wastewater from rice parboiling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered discharge or water-balance-derived wastewater sent to each destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg parboiled paddy output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_parboiling_outputs`
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg wastewater/kg parboiled paddy
  - Basis: broad water-balance screen; replace with metered discharge and evaporation evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct emissions from onsite parboiling energy (`parboiling_direct_emissions`)

Report each emitted elementary substance separately using measured emissions or fuel-specific factors applied to collected fuel records.

- Selected flow: Substance-specific emissions to air from onsite fuel use
- Flow property / unit: Substance-specific mass / kg
- Amount rule: measured emission or collected fuel quantity multiplied by the applicable emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg parboiled paddy output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Range: Provisional substance-specific direct-emission QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg emitted substance/kg parboiled paddy
  - Basis: deliberately broad per-substance screen; replace with measured emissions or fuel-specific factor evidence
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Dehusking, whitening or polishing, and separation (`milling_separation`)

#### Inputs

##### Product flows

###### Paddy entering the milling line (`milling_paddy_input`)

Record conditioned or parboiled paddy entering dehusking, including mass and moisture.

- Selected flow: Conditioned or parboiled paddy rice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass to the milling line after stock-change correction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming bulk milled rice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_inputs`
- Sources: `fao-grain-postharvest-rice-milling`
- Range: Source-derived milling-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.43
  - Upper: 1.67
  - Unit: kg paddy/kg conforming milled rice
  - Basis: reciprocal of the FAO illustrative 60 to 70 percent milled-rice output depending on whether broken rice is included in the declared product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-grain-postharvest-rice-milling`

###### Electricity for milling and separation (`milling_electricity`)

Record electricity for dehusking, aspiration, separation, whitening, polishing, grading, conveying, and dust collection.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoice-reconciled electricity attributable to the milling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming bulk milled rice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_energy`
- Range: Provisional milling-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1
  - Unit: kWh/kg conforming bulk milled rice
  - Basis: broad first-pass screen across mill scales and equipment configurations; replace with metered evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Conforming semi-milled or wholly milled rice (`bulk_milled_rice`)

This is the quantitative reference output before optional packaging. Record net mass, moisture, milling degree, and broken-kernel fraction.

- Selected flow: Rice, semi- or wholly milled `4125cc1c-d304-48b4-a701-f40a581df3c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization of the measured conforming output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `fao-grain-postharvest-rice-milling`
- Range: Source-derived milled-rice yield QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.60
  - Upper: 0.70
  - Unit: kg conforming milled rice/kg paddy
  - Basis: FAO illustrative balance gives 0.60 kg white rice plus 0.10 kg broken grains per kg paddy; the declared product treatment of broken rice determines the comparison basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-grain-postharvest-rice-milling`

###### Broken rice separated from the declared product (`broken_rice_coproduct`)

Record broken kernels as a separate co-product only when they are not included in the declared reference product blend.

- Selected flow: Broken milled rice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured separated broken-rice mass sold or transferred to each destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg paddy entering milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-postharvest-rice-milling`

###### Rice bran and flour fraction (`rice_bran_flour_coproduct`)

Record bran, germ, polish, and flour fractions separately when measured separately; otherwise disclose the combined fraction and destination.

- Selected flow: Rice bran and milling flour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass sent to each sale, feed, extraction, energy, or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg paddy entering milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-postharvest-rice-milling`; `fao-rice-human-nutrition-postharvest`

###### Rice husk or hull (`rice_husk_coproduct`)

Record husk mass and whether it is sold, used as fuel onsite, transferred for another use, or discarded; onsite use remains both an output and an energy input to prevent hidden netting.

- Selected flow: Rice husk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured husk mass sent to each destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg paddy entering milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Sources: `fao-grain-postharvest-rice-milling`; `fao-prevention-postharvest-losses-rice-milling`

##### Waste flows

###### Milling rejects and collected dust (`milling_rejects_dust`)

Record non-product fines, contaminated material, captured dust, and maintenance clean-out by mass and destination.

- Selected flow: Rice-mill rejects and collected dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-derived material sent to each treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg paddy entering milling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_outputs`
- Range: Provisional reject-and-dust QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg paddy entering milling
  - Basis: broad first-pass screen; replace with facility mass records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured particulate emissions to air (`milling_particulate_air`)

Record each particulate elementary flow using stack or workplace exhaust measurements, permit reports, or a documented dust-collection mass balance.

- Selected flow: Particulate matter to air, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated uncaptured fraction from collected dust records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming bulk milled rice output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Range: Provisional particulate-emission QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg conforming bulk milled rice
  - Basis: deliberately broad first-pass screen; replace with measured or permitted emission evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Product packaging for dispatch (`packaging`)

#### Inputs

##### Product flows

###### Bulk conforming milled rice (`packaging_bulk_rice_input`)

Record the net mass and quality of rice entering packaging and reconcile it with packaged output, samples, spills, and stock change.

- Selected flow: Rice, semi- or wholly milled `4125cc1c-d304-48b4-a701-f40a581df3c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured bulk rice input to the packaging lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-input reconciliation QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.1
  - Unit: kg bulk rice/kg packaged reference product
  - Basis: broad screen for product sampling, spills, rejects, and stock change; replace with packaging-line records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_material_input`)

Record each primary, secondary, and tertiary packaging material separately by material, recycled content if known, and net mass entering the represented lot.

- Selected flow: Product-specific packaging material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchase- and stock-reconciled packaging mass used for the represented product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg packaging/kg packaged reference product
  - Basis: broad screen covering bulk delivery through small consumer packs; replace with bill-of-material evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Packaged reference rice (`packaged_milled_rice`)

The net rice content, excluding packaging mass, realizes the same reference flow as bulk rice.

- Selected flow: Rice, semi- or wholly milled `4125cc1c-d304-48b4-a701-f40a581df3c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net rice content after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Range: Fixed reference-output QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg net rice/kg reference flow
  - Basis: fixed by the declared reference amount; packaging mass is excluded
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)

##### Waste flows

###### Packaging scrap and rejected packs (`packaging_waste`)

Record packaging scrap, damaged packs, and rejected product-packaging combinations by material and destination; recoverable rice shall be returned to the rice balance rather than hidden in packaging waste.

- Selected flow: Packaging waste, material-specific
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured packaging waste sent to each recovery or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg packaged reference product
  - Basis: broad first-pass process-loss screen; replace with site waste records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | Milled rice, broken rice, bran or flour, husk, and other outputs | First avoid allocation by subdividing separately metered operations or by expanding the system only when the declared study method permits it; retain gross output quantities before any credit or allocation. | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |
| `alloc_output_classification` | All non-reference outputs | Classify each output consistently as co-product, recovered material, waste, or elementary flow using its actual destination and market function; do not change classification only to obtain a preferred burden result. | `iso-14044-lca-requirements` |
| `alloc_residual_hierarchy` | Multi-output milling when allocation cannot be avoided | Use a physical relationship that reflects the causal production relationship when justified; otherwise use economic allocation based on documented contemporaneous prices, and disclose method, period, geography, currency, moisture basis, and sensitivity. | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |
| `alloc_waste_treatment` | Screenings, rejects, wastewater, captured dust, and packaging waste | Keep burdens of onsite handling and required treatment within the foreground system; any downstream recovery credit or burden shall follow the declared study method and shall not be double counted. | `iso-14044-lca-requirements` |
| `alloc_balance_check` | Every allocated multi-output process | Allocation fractions shall sum to 1 within reported rounding precision, and unallocated gross mass and energy balances shall be retained for validation. | `iso-14044-lca-requirements` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_paddy_receipts` | `paddy_receiving_conditioning` | Received paddy input | Weighbridge and intake-quality records | lot_id; supplier_or_origin; receipt_time; gross_mass; tare_mass; moisture_percent_wet_basis; impurity_percent; prior_drying; prior_parboiling | Calibrated weighbridge plus representative lot sampling | kg; mass % | Each receipt lot | Full represented production period | All supplying lots for the represented facility and product | Sum net mass; mass-weight quality fields; reconcile opening and closing paddy stock | Calibration record; sampling plan; weigh ticket; supplier record; stock reconciliation |
| `cp_conditioning_energy` | `paddy_receiving_conditioning` | Electricity and onsite conditioning energy | Meter, invoice, and equipment log | meter_id; opening_reading; closing_reading; invoice_quantity; operating_hours; allocation_driver; conditioned_mass | Submeter preferred; otherwise invoice reconciliation with documented allocation | kWh; MJ | Each meter period or production campaign | Full represented production period | All included receiving and conditioning equipment | Meter difference minus unrelated use; allocate only when subdivision is unavailable | Meter calibration; invoice; operating log; allocation worksheet |
| `cp_conditioning_outputs` | `paddy_receiving_conditioning` | Conditioned paddy and removed impurities | Transfer-weight and waste records | lot_id; conditioned_mass; conditioned_moisture; screenings_mass; destination; opening_stock; closing_stock | Calibrated scale or reconciled mass balance | kg; mass % | Each lot or shift | Full represented production period | All receiving and conditioning lines | Sum destination-specific outputs after stock correction | Scale calibration; transfer ticket; waste manifest; stock record |
| `cp_parboiling_inputs` | `parboiling` | Paddy, water, steam, and fuel inputs | Batch, meter, and fuel records | batch_id; paddy_mass; paddy_moisture; water_meter; steam_meter; fuel_quantity; heating_value_basis; electricity | Batch weighing and calibrated utility meters; fuel invoices reconciled to stock | kg; m3; kWh; MJ | Each batch and utility meter period | Full represented parboiled-rice production period | All onsite soaking, steaming, and redrying equipment | Convert water volume with measured or declared density; calculate fuel energy without netting husk output | Meter calibration; batch sheet; invoice; fuel analysis; stock reconciliation |
| `cp_parboiling_outputs` | `parboiling` | Parboiled paddy and wastewater | Batch output and discharge records | batch_id; output_mass; output_moisture; wastewater_volume_or_mass; evaporation_estimate; destination; opening_stock; closing_stock | Calibrated scale and effluent meter or documented water balance | kg; m3 | Each batch or discharge period | Full represented parboiled-rice production period | All onsite parboiling lines and discharge points | Stock-correct outputs; keep measured discharge separate from calculated evaporation | Scale and meter calibration; batch sheet; discharge record; water-balance worksheet |
| `cp_milling_inputs` | `milling_separation` | Paddy input to milling | Transfer scale and line log | lot_id; input_mass; input_moisture; paddy_route; line_id; start_time; end_time; opening_stock; closing_stock | Calibrated transfer scale or reconciled intake-output balance | kg; mass % | Each lot or shift | Full represented production period | All milling lines producing the reference product | Sum stock-corrected input by route and product | Scale calibration; line log; lot traceability; stock record |
| `cp_milling_energy` | `milling_separation` | Milling electricity and fuel | Meter, invoice, and operating records | meter_id; opening_reading; closing_reading; invoice_quantity; operating_hours; line_id; product_mass; allocation_driver | Submeter preferred; otherwise invoice reconciliation with documented allocation | kWh; MJ | Each meter period or shift | Full represented production period | All dehusking, whitening, polishing, grading, conveying, and dust-control equipment | Meter difference minus unrelated use; normalize to conforming output | Meter calibration; invoice; operating log; reconciliation worksheet |
| `cp_milling_outputs` | `milling_separation` | Milled rice, broken rice, bran, husk, rejects, and collected dust | Product scale, silo, sale, and waste records | lot_id; output_type; mass; moisture; destination; product_grade; broken_fraction; opening_stock; closing_stock | Calibrated scales and stock or dispatch reconciliation | kg; mass % | Each lot, shift, or dispatch | Full represented production period | Every product, co-product, residue, and waste outlet | Sum stock-corrected mass by output and destination before allocation | Scale calibration; sales or transfer ticket; waste record; laboratory grade report; stock record |
| `cp_packaging_records` | `packaging` | Rice, packaging material, packaged output, and packaging waste | Batch, bill-of-material, purchase, and waste records | batch_id; bulk_rice_input; net_packaged_rice; packaging_material; packaging_mass; rejected_pack_mass; recovered_rice; opening_stock; closing_stock | Calibrated product scale plus bill-of-material and stock reconciliation | kg; item count | Each packaging batch | Full represented packaged-product period | All included packaging lines and materials | Convert item counts with measured item mass; reconcile net rice separately from packaging | Scale calibration; packaging specification; purchase invoice; waste ticket; batch reconciliation |
| `cp_direct_emissions` | `parboiling` | Direct air and water emissions | Stack, permit, laboratory, fuel, and discharge records | substance_id; measured_concentration; flow_rate; duration; fuel_quantity; emission_factor; wastewater_volume; discharge_concentration | Direct measurement preferred; otherwise source-specific factor applied to collected activity data | kg; mg/m3; m3; MJ | Each monitoring event and reporting period | Full represented operating period | Every included onsite emission and discharge point | Calculate substance mass by point; do not aggregate unlike elementary flows | Laboratory report; monitoring plan; permit return; factor reference; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | Every foreground inventory amount | normalized amount = stock-corrected process amount / net conforming reference-product mass | process amount; opening stock; closing stock; net conforming output | amount per 1 kg reference product | `iso-14044-lca-requirements` |
| `calc_moisture_correction` | Comparison of material masses on a dry basis | dry mass = as-received mass × (1 - moisture mass fraction); retain the original as-received mass and moisture record | as-received mass; moisture mass fraction | dry-basis comparison mass | `fao-grain-postharvest-rice-milling`; `fao-rice-human-nutrition-postharvest` |
| `calc_material_balance` | Receiving, parboiling, milling, and packaging | balance gap = inputs + opening stock - outputs - closing stock; report water evaporation separately when relevant and investigate rather than force-closing unexplained gaps | all measured material inputs; outputs; stock changes; evaporation | process mass-balance gap and gap fraction | `iso-14044-lca-requirements` |
| `calc_fuel_energy` | Fuel-derived thermal energy | thermal energy = measured fuel quantity × declared lower or higher heating value on a consistent basis | fuel quantity; heating value; heating-value basis | MJ thermal energy | `iso-14044-lca-requirements` |
| `calc_allocation_fraction` | Residual multi-output allocation | allocated burden for output i = unallocated process burden × declared allocation driver for i / sum of the driver over all co-products | unallocated burden; co-product outputs; selected physical or economic driver | allocated burden and allocation fraction by output | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | Reference product | Use Tiangong flow `4125cc1c-d304-48b4-a701-f40a581df3c3`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg without dataset versions. | Dataset reference-flow record and UUID validation |
| `dq_product_qualifiers` | Reference product and production lot | Declare every required qualifier and preserve lot traceability from paddy receipt to conforming output. | Product specification; laboratory result; lot genealogy; process log |
| `dq_temporal_coverage` | Foreground activity data | Cover one representative operating year or a complete production campaign; disclose shutdowns, seasonal gaps, product changes, and any extrapolation. | Date-bounded meter, production, purchase, stock, and dispatch records; `eu-2021-2279-environmental-footprint` |
| `dq_technology_geography` | Facility representation | Describe facility geography, mill scale, dehusking and whitening technology, parboiling route, energy system, dust control, storage, and packaging configuration. | Facility profile; equipment list; process flow diagram; `fao-prevention-postharvest-losses-rice-milling` |
| `dq_completeness_balance` | Material, energy, water, product, co-product, waste, and emission records | Reconcile all included processes and disclose missing outlets, unmetered shared utilities, unexplained balance gaps, and excluded minor flows rather than silently assigning zero. | Signed balance and reconciliation worksheets; `iso-14044-lca-requirements` |
| `dq_provisional_ranges` | Every `reasoned_estimate` range | Treat the range only as a QA flag, never as an automatic replacement for foreground data; replace or explicitly accept it during methodology review. | Review record identifying retained or replaced provisional ranges |
| `dq_source_traceability` | External evidence and calculation factors | Retain source title, stable reference, retrieval date for web sources, factor version, applicability, and calculation worksheet. | Source register and calculation archive; `eu-2021-2279-environmental-footprint` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Fail conformance if the reference product UUID, Mass UUID, unit-group UUID, reference unit, or reference amount differs from the declared reference-flow object without an approved PCR revision. | `iso-14044-lca-requirements` |
| `val_required_qualifiers` | Dataset metadata | Fail conformance when any required qualifier is absent or when product and process records disagree on milling degree, moisture basis, broken-kernel treatment, parboiling route, or packaging state. | `fao-rice-human-nutrition-postharvest`; `fao-grain-postharvest-rice-milling` |
| `val_process_coverage` | Process inventory | Require every `required` process and require an applicability decision for every `conditional` process; an included branch shall carry its inputs, outputs, utilities, wastes, and direct emissions. | `fao-prevention-postharvest-losses-rice-milling` |
| `val_material_balance` | Each foreground process and aggregate facility balance | Calculate and report the mass-balance gap on consistent moisture bases; investigate unexplained gaps against a documented site tolerance and do not force the balance by altering the reference output. | `iso-14044-lca-requirements` |
| `val_allocation` | Multi-output process | Verify output classification, avoidance rationale, allocation driver, source period, allocation fractions summing to 1 within reported rounding precision, and sensitivity when an alternative method could materially change results. | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |
| `val_energy_water_reconciliation` | Electricity, fuel, water, steam, and wastewater | Reconcile meters, invoices, stocks, and production periods; disclose shared-utility allocation and prevent onsite husk use or recovered water from being netted invisibly. | `iso-14044-lca-requirements` |
| `val_qa_guardrails` | Inventory ranges | A value outside a QA guardrail triggers documented review of measurement, normalization, route, moisture basis, and source applicability; it shall not be clipped to the guardrail or replaced automatically. | `fao-grain-postharvest-rice-milling` |
| `val_source_and_estimate_status` | Evidence register | Verify that every cited source id resolves in Data Sources and every provisional numerical range is labelled `reasoned_estimate` with `qa_guardrail`; fail publication review if a publication-critical estimate remains unreviewed. | `eu-2021-2279-environmental-footprint` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for semi-milled or wholly milled rice at a declared rice-milling facility |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product and process LCA for declared rice products and routes when geography, technology, product qualifiers, boundary, allocation, and data quality are compatible |
| excluded_use | Paddy cultivation; husked rice sold without milling; rice flour or starch production; cooked rice; consumer use; undeclared parboiling or packaging routes; comparative public claims without method-compatible review |
| required_metadata | PCR id; Tiangong reference-flow UUIDs; facility geography; production period; technology; paddy origin and condition; milling degree; moisture basis; broken-kernel fraction; parboiling state; packaging state; boundary; allocation method; dataset version |
| required_quality_disclosure | Temporal, geographic, and technological representativeness; metering and calibration; mass, energy, and water balances; missing flows; shared-utility allocation; co-product treatment; provisional estimates; source and factor versions; uncertainty and review status |
| update_trigger | Material change in product specification, paddy route, milling or parboiling technology, energy system, packaging, allocation basis, facility geography, production mix, measurement system, source evidence, or Tiangong reference identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-grain-postharvest-rice-milling` | Official guidance (`official_guidance`) | FAO, Agricultural engineering in development - Grain and post-harvest systems, rice section, https://www.fao.org/4/T0522E/T0522E03.htm, retrieved 2026-08-11 | Paddy condition, process sequence, approximately 14% moisture guidance, illustrative 100 kg paddy output balance, and by-product destinations |
| `fao-prevention-postharvest-losses-rice-milling` | Official guidance (`official_guidance`) | FAO, Prevention of post-harvest food losses: Small-scale rice milling, https://www.fao.org/4/x0039e/x0039e06.htm, retrieved 2026-08-11 | Cleaning, 12-14% hulling moisture guidance, dehusking, whitening, polishing, grading, and conditional parboiling process decomposition |
| `fao-rice-human-nutrition-postharvest` | Official guidance (`official_guidance`) | FAO, Rice in human nutrition: Rice post-harvest processing, parboiling and home preparation, https://www.fao.org/4/t0567e/T0567E0h.htm, retrieved 2026-08-11 | Milling-route distinctions, moisture and tempering context, bran removal, parboiling, and separated fractions |
| `iso-14044-lca-requirements` | Standard (`standard`) | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, https://www.iso.org/standard/38498.html, confirmed current by ISO in 2022, retrieved 2026-08-11 | Goal and scope consistency, inventory and allocation hierarchy, data quality, interpretation, reporting, and review |
| `eu-2021-2279-environmental-footprint` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32021H2279, retrieved 2026-08-11 | Life-cycle data quality, verification, process subdivision, allocation disclosure, and downstream dataset use |
