---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oysters-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Oysters, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers food-grade oysters, in shell or not, whose declared terminal preservation route is exactly one of `frozen`, `smoked`, `dried`, `salted`, or `brine`. Food-grade oyster flour, meal, or pellets are covered only under the `dried` route. Each foreground data package shall select one route; the route processes below are alternatives and shall not be stacked. Products intentionally combining two or more terminal preservation routes require separate review and are outside this candidate rule.

The foreground boundary begins with received oysters and ends with qualified saleable product at the processing-facility gate. Oyster cultivation, capture, harvest, and incoming transport are represented by upstream datasets. Distribution, retail, preparation by the consumer, and end-of-life are outside this processing dataset. Live, fresh, or merely chilled oysters; oysters otherwise prepared or preserved; inedible oyster meal; and product unfit for human consumption are excluded.

All ranges labelled `reasoned_estimate` are provisional screening guardrails, not conformance limits or substitute foreground values. They apply only until route- and site-specific records are available. Replace them when reviewed evidence or measurements from at least three representative production lots support a narrower interval; investigate and disclose values outside the range rather than truncating them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oysters-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21262 (exact classification context) |
| covered_products | Food-grade oysters, whether in shell or not, frozen, smoked, dried, salted, or in brine; food-grade oyster flour, meal, or pellets only under the dried route |
| excluded_products | Live, fresh, or chilled oysters; oysters otherwise prepared or preserved; inedible flour, meal, or pellets; dead or otherwise unfit product; multi-terminal-route products pending separate review |
| representative_product | Qualified saleable oyster product at the processing-facility gate, with route and presentation declared |
| production_route | Exactly one of frozen, smoked, dried, salted, or brine; route-specific processing is conditional and mutually exclusive |
| market_state | Packaged or bulk food-grade product at processing-facility gate; packaging mass and free packing medium are not part of the 1 kg reference product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified saleable preserved oyster product providing the declared commercial food product |
| How much | 1 kg net product on the declared presentation and route measurement basis |
| How well | Meets the applicable product specification and food-safety release criteria, with route, presentation, moisture/salt/glaze/drained-mass conditions declared as applicable |
| How long or cycle | One production lot at the processing-facility gate; no storage-duration service is included |
| reference_flow_link | One kilogram of the Tiangong generic CPC 21262 product flow defined below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg qualified saleable product, excluding packaging and free packing medium |
| Reference product flow | Oysters, frozen, smoked, dried, salted or in brine `73760e72-9a22-4226-a17f-a591a61d5170` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | preservation route; species or commercial designation; in-shell, half-shell, shucked, or dried particle presentation; whole-product or edible-meat mass basis; packaging excluded; frozen glaze included/excluded and deglazing method when applicable; drained-mass method and free-brine exclusion for brined product; moisture content for smoked or dried product; salt content for salted or brined product; edible-meat fraction for in-shell or half-shell product; lot and release specification |

When constructing a foreground data package, every required qualifier shall be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A whole-shell mass shall not be converted to edible-meat mass without a measured lot-specific meat yield. Frozen, dried, and brined reference masses shall not be compared across routes unless their glaze, moisture, salt, and drained-mass bases are harmonized and documented.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net qualified saleable product. Exclude packaging and free packing liquid. For brined product use declared drained mass; for frozen product declare glaze treatment; for in-shell product retain the whole-shell basis and disclose edible-meat fraction. |
| `route_condition` | all product and inventory amounts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize only the selected mutually exclusive preservation route. Do not add inventories of non-selected routes. |
| `moisture_salt_condition` | smoked, dried, salted, or brined product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record moisture content on a stated wet- or dry-basis for smoked/dried product and salt content on a stated basis for salted/brined product whenever mass yield or cross-lot comparison is used. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Oysters received at the preservation facility, with origin, harvest/cultivation route, presentation, temperature, and acceptance status declared |
| starting_condition_role | Upstream product input to the foreground preparation and preservation system |
| product_classification_scope | CPC 3.0 21262 terminal product; upstream live/fresh/chilled oysters are separate product inputs |
| recursive_input_rule | If an incoming ingredient is already a CPC 21262 preserved oyster product, record it as an upstream product flow and do not recreate its prior preservation inventory; disclose the recursion and supplier dataset |
| upstream_dataset_requirement | Use geographically, technologically, and temporally representative datasets for oyster production/harvest and all other purchased inputs |
| disclosure | Declare selected route, starting product state, species, presentation, source production system, net-mass basis, yield, storage conditions, packaging, wastes, wastewater destination, and any excluded operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_processing_gate` | foreground processing dataset | Include receipt, grading/cleaning or shucking as applicable, exactly one terminal preservation route, route-associated storage, packaging, rejects, wastewater, and direct emissions through the processing-facility gate. Represent cultivation/harvest and purchased inputs with upstream datasets; exclude downstream distribution, use, and end-of-life. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | route selection | Include only one of frozen, smoked, dried, salted, or brine. A combined terminal treatment is outside this candidate rule until separately reviewed. | `unsd-cpc-3-0-21262`; `codex-cxs-311-2013` |
| `boundary_food_safety_records` | receipt, processing, storage, and release | Retain lot traceability, time-temperature, water-quality, sanitation, hazard-control, and product-release evidence appropriate to processed bivalve molluscs. | `codex-cxc-52-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_oysters` | Receive, grade, clean, and prepare oysters | required | Always; shucking or shell handling only as declared by presentation | Foreground preparation | Prepared oyster mass transferred to the selected preservation route |
| `freeze_and_pack` | Freeze and pack | conditional | Include only when route is `frozen` | Foreground preservation and packaging | 1 kg frozen qualified saleable product |
| `smoke_or_dry_and_pack` | Smoke or dry and pack | conditional | Include only when route is `smoked` or `dried`; select exactly one subroute | Foreground preservation and packaging | 1 kg smoked or dried qualified saleable product |
| `salt_or_brine_and_pack` | Salt or brine and pack | conditional | Include only when route is `salted` or `brine`; select exactly one subroute | Foreground preservation and packaging | 1 kg salted or drained brined qualified saleable product |

### Process: Receive, grade, clean, and prepare oysters (`prepare_oysters`)

#### Inputs

##### Product flows

###### Received oysters (`received_oysters`)

Record accepted and rejected incoming oyster mass on the declared shell/presentation basis.

- Selected flow: Oysters received at preservation facility
- Flow property / unit: Mass / kg
- Amount rule: measured lot input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared oyster transferred to preservation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional presentation-dependent screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: kg received oysters/kg prepared oysters
  - Basis: includes broad variation from shucked to in-shell receipt and rejects
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record potable or otherwise suitable water crossing the process boundary for washing, cleaning, or shucking support.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered use or batch volume converted to mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared oyster
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional water-use screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water/kg prepared oysters
  - Basis: facility water crossing the preparation boundary
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared oysters (`prepared_oysters`)

Record the measured intermediate mass transferred to the one selected preservation route.

- Selected flow: Prepared oysters for preservation
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Shells, rejected tissue, and other preparation residues (`preparation_residues`)

Record residues separately by destination when they have different treatment or co-product status.

- Selected flow: Oyster preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated residue mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared oyster
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_batch`
- Sources:
- Range: Provisional presentation-dependent residue estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 7
  - Unit: kg residues/kg prepared oysters
  - Basis: broad screen spanning shucked and in-shell presentations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Freeze and pack (`freeze_and_pack`)

#### Inputs

##### Product flows

###### Prepared oysters for freezing (`freezing_oyster_input`)

Record prepared oyster mass entering the freezing route.

- Selected flow: Prepared oysters for freezing
- Flow property / unit: Mass / kg
- Amount rule: measured input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg frozen saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional freezing-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg prepared oysters/kg frozen product
  - Basis: excludes declared glaze from reference product mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing and frozen-storage electricity (`freezing_electricity`)

Record metered freezing plus on-site frozen storage electricity assigned to the lot.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: meter difference or equipment power multiplied by operating time and allocation share
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_batch`
- Sources:
- Range: Provisional refrigeration-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh/kg frozen product
  - Basis: freezing and on-site frozen storage through facility gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-product packaging (`frozen_packaging`)

Record primary, secondary, and route-specific protective packaging by material; packaging is inventory, not reference product mass.

- Selected flow: Packaging materials
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging mass assigned to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg frozen saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_batch`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.5
  - Unit: kg packaging/kg frozen product
  - Basis: total packaging placed with product at facility gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen saleable oysters (`frozen_product`)

The output is the reference product only when the frozen route is selected.

- Selected flow: Oysters, frozen, smoked, dried, salted or in brine `73760e72-9a22-4226-a17f-a591a61d5170`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg qualified product excluding packaging and on the declared glaze basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-21262`

##### Waste flows

##### Elementary flows

### Process: Smoke or dry and pack (`smoke_or_dry_and_pack`)

#### Inputs

##### Product flows

###### Prepared oysters for smoking or drying (`smoke_dry_oyster_input`)

Record prepared oyster mass entering exactly one of the smoking or drying subroutes.

- Selected flow: Prepared oysters for smoking or drying
- Flow property / unit: Mass / kg
- Amount rule: measured input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg smoked or dried saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_dry_batch`
- Sources: `codex-cxc-52-2003`; `codex-cxs-311-2013`
- Range: Provisional moisture-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: kg prepared oysters/kg smoked or dried product
  - Basis: route and target moisture must be declared
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smoking or drying energy (`smoke_dry_energy`)

Record fuel and electricity separately in the data package; this card defines their common energy-normalization rule.

- Selected flow: Route-specific fuel and electricity
- Flow property / unit: Energy / MJ and kWh as recorded
- Amount rule: metered fuel/electricity or equipment duty calculated from operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked or dried saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoke_dry_batch`
- Sources: `codex-cxs-311-2013`
- Range: Provisional thermal-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 50
  - Unit: MJ/kg smoked or dried product
  - Basis: total thermal energy; electricity remains separately reported in kWh
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smoked or dried product packaging (`smoke_dry_packaging`)

Record packaging by material and exclude it from reference product mass.

- Selected flow: Packaging materials
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging mass assigned to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg smoked or dried saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoke_dry_batch`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.5
  - Unit: kg packaging/kg smoked or dried product
  - Basis: total packaging placed with product at facility gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Smoked or dried saleable oysters (`smoke_dry_product`)

The output is the reference product only for the selected smoked or dried subroute; moisture basis is mandatory.

- Selected flow: Oysters, frozen, smoked, dried, salted or in brine `73760e72-9a22-4226-a17f-a591a61d5170`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg qualified product excluding packaging at declared moisture content
- Value mode: Fixed value (`fixed_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-21262`; `codex-cxs-311-2013`

##### Waste flows

##### Elementary flows

### Process: Salt or brine and pack (`salt_or_brine_and_pack`)

#### Inputs

##### Product flows

###### Prepared oysters for salting or brining (`salt_brine_oyster_input`)

Record prepared oyster mass entering exactly one of the salting or brining subroutes.

- Selected flow: Prepared oysters for salting or brining
- Flow property / unit: Mass / kg
- Amount rule: measured input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg salted or drained brined saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_brine_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional salting/brining-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 4
  - Unit: kg prepared oysters/kg salted or drained brined product
  - Basis: route, salt uptake, and drained-mass method must be declared
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt and brine-making water (`salt_brine_inputs`)

Record salt and water as separate input flows in the data package and retain brine recipe and reuse records.

- Selected flow: Food-grade salt and process water
- Flow property / unit: Mass / kg
- Amount rule: measured salt issue plus measured brine-making water; do not treat free packing brine as reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg salted or drained brined saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_brine_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional combined salt-and-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kg inputs/kg salted or drained brined product
  - Basis: gross salt plus brine-making water before any documented reuse credit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salted or brined product packaging (`salt_brine_packaging`)

Record containers and other packaging by material and exclude them from reference product mass.

- Selected flow: Packaging materials
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging mass assigned to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg salted or drained brined saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_brine_batch`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 1
  - Unit: kg packaging/kg salted or drained brined product
  - Basis: includes liquid-retaining containers where used
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Salted or brined saleable oysters (`salt_brine_product`)

The output is the reference product only for the selected salted or brine subroute; the brined reference uses drained mass.

- Selected flow: Oysters, frozen, smoked, dried, salted or in brine `73760e72-9a22-4226-a17f-a591a61d5170`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg qualified product excluding packaging and free brine, with salt content and drained-mass method declared
- Value mode: Fixed value (`fixed_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-21262`

##### Waste flows

###### Spent brine and salting residues (`spent_brine`)

Record discharged or treated spent brine and solids; do not subtract reused brine unless reuse is measured within the batch balance.

- Selected flow: Spent brine and salting residues
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or input-output mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg salted or drained brined saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_salt_brine_batch`
- Sources:
- Range: Provisional spent-brine screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg waste/kg salted or drained brined product
  - Basis: net spent brine and salting residues leaving foreground treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_route_subdivision` | all route inventories | Subdivide preparation and each preservation route using batch, meter, and material-issue records wherever possible. Do not average non-selected preservation routes into one foreground inventory. | `eu-pef-2021-2279` |
| `allocation_residue_outputs` | shells, edible offcuts, recovered salt/brine, or other valuable outputs | First apply subdivision or a directly measured physical relationship. If allocation remains necessary, document the chosen physical or economic driver, allocation factors, data period, and sensitivity; wastes without economic product status receive no product allocation. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preparation_batch` | `prepare_oysters` | receipt, water, prepared mass, residues | batch production and utility records | received mass; presentation; accepted mass; prepared transfer mass; water meter/volume; shell and reject mass; lot time-temperature | calibrated scales, water meter or documented batch volume, and residue weighing or closed mass balance | kg | each production lot | representative production period, with season disclosed | each facility and preparation line | sum lot inputs/outputs; normalize to measured prepared transfer mass; keep shell/presentation strata separate | calibration, lot traceability, water suitability, acceptance and sanitation records |
| `cp_freezing_batch` | `freeze_and_pack` | material, energy, packaging, output | batch, meter, equipment, and packaging issue records | prepared mass; conforming frozen output; glaze mass/method; electricity; storage duration; packaging by material; rejects | calibrated scales, submeter or power-time records, inventory issue records, and documented deglazing test | kg; kWh; h | each lot, with continuous or batch time-temperature records | representative cold-season and warm-season operation where relevant | each freezer, cold store, and facility | allocate shared electricity by measured duty or justified operating driver; normalize to qualified net frozen mass | calibration, meter coverage, time-temperature log, glaze method, packaging specification |
| `cp_smoke_dry_batch` | `smoke_or_dry_and_pack` | material, fuel/electricity, moisture, packaging, output | batch, fuel, meter, laboratory, and packaging records | selected subroute; prepared mass; output mass; fuel; electricity; process time/temperature; moisture basis/value; packaging; rejects | calibrated scales/meters, fuel purchase and issue reconciliation, process log, and representative moisture test | kg; MJ; kWh; % | each lot; moisture sampling per declared plan | representative operating period and technologies | each kiln, smoker, dryer, and facility | keep smoked and dried lots separate; convert fuel to energy transparently; normalize to qualified output at measured moisture | calibration, fuel conversion record, process log, moisture test, release record |
| `cp_salt_brine_batch` | `salt_or_brine_and_pack` | material, salt/water, brine reuse/discharge, packaging, output | batch recipe, scale, laboratory, packaging, and waste records | selected subroute; prepared mass; salt; water; reused brine; output mass; salt content; drained mass/method; packaging; spent brine/residue | calibrated scales, recipe/issue records, brine volume-density conversion where used, salt test, and documented draining procedure | kg; % | each lot | representative operating period and recipes | each tank, line, and facility | keep salted and brined lots separate; subtract only measured internal reuse; normalize to salted net mass or brined drained mass | calibration, recipe, salt test, draining method, reuse/discharge log, release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | route output | Net reference product mass = gross filled unit mass minus packaging mass minus free packing medium; brined product uses the declared drained-mass result and frozen product follows the declared glaze treatment | gross mass; packaging mass; free medium mass; drained mass or deglazed mass as applicable | kg qualified reference product | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `calc_route_yield` | each selected route | Route yield = qualified saleable output mass divided by prepared oyster input mass; do not pool different presentation, moisture, salt, glaze, or drained-mass bases | qualified output mass; prepared oyster input mass; qualifiers | kg/kg and reciprocal input requirement | |
| `calc_normalized_inventory` | each inventory flow | Normalized amount = lot flow amount divided by qualified reference product mass; shared utilities require a disclosed measured-duty or operating-time allocation driver | lot flow amount; reference product mass; allocation driver if shared | flow unit per kg reference product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_route` | product and process identity | Species/commercial designation, preservation route, presentation, origin production system, facility, technology, lot, and product specification shall be traceable; route shall match exactly one process-map alternative. | supplier and receiving records; batch and release records |
| `dq_mass_condition` | reference flow and yields | Packaging/free medium exclusions, shell or edible-meat basis, glaze method, drained-mass method, moisture basis/value, and salt basis/value shall be recorded as applicable; incompatible bases shall not be pooled. | scale records; method records; laboratory results; product specification |
| `dq_temporal_coverage` | foreground activity data | Cover a representative operating period and disclose seasonality, storage duration, downtime, abnormal lots, and any proxy period. | production calendar; meter coverage; lot register |
| `dq_completeness` | mass, energy, packaging, waste, and direct emissions | Reconcile major mass inputs and outputs and account for water, fuels/electricity, packaging, rejects, wastewater/brine, and treatment destination; disclose exclusions and data gaps. | mass balance; invoices/meters; packaging issues; waste manifests; wastewater records |
| `dq_provisional_ranges` | all reasoned-estimate ranges | Use ranges only for screening. Retain actual foreground values and replace provisional bounds when reviewed route-specific evidence or at least three representative lots are available. | review record and replacement evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm exactly 1 kg qualified saleable product, packaging and free medium excluded, UUIDs and Mass/kg identity present, and all route-specific mass qualifiers complete. | `unsd-cpc-3-0-21262`; `eu-pef-2021-2279` |
| `validate_route_exclusivity` | process map and inventory | Confirm exactly one terminal preservation route is selected and only its conditional inventory is instantiated; smoked and dried, and salted and brine, remain separate subroutes. | `unsd-cpc-3-0-21262`; `codex-cxs-311-2013` |
| `validate_mass_balance` | each preparation and preservation lot | Reconcile measured input, qualified output, residues, wastewater or brine, moisture/glaze/free-medium changes, and stock change on compatible mass bases; document unexplained differences. | `codex-cxc-52-2003` |
| `validate_data_quality` | published dataset candidate | Confirm collection protocol links, calibration and traceability evidence, representative temporal coverage, packaging and utility completeness, waste destinations, allocation disclosure, and explicit provisional-range status. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate preserved-oyster processing dataset with upstream product links |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Route-specific product systems and lifecycle models when geography, technology, production system, presentation, mass basis, and time are representative |
| excluded_use | Direct comparative claims across preservation routes or shell/edible, moisture, salt, glaze, or drained-mass bases without harmonization; combined terminal-route products; substitution for missing cultivation/harvest data |
| required_metadata | PCR id; CPC context; product-flow UUID; route; species/commercial designation; presentation; origin production system; geography; facility/technology; time period; shell/edible basis; glaze/drained-mass/moisture/salt conditions; packaging; yield; allocation; upstream datasets |
| required_quality_disclosure | Foreground coverage; meter and scale quality; mass-balance result; time-temperature and release controls; proxies; exclusions; waste/wastewater destinations; uncertainty; reasoned-estimate ranges not yet replaced |
| update_trigger | New reviewed route-specific evidence; three or more representative lots supporting range replacement; changed technology, recipe, packaging, source production system, product specification, or measurement method; unresolved mass-basis or food-safety control issue |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21262` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 21262, official structure file: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Product-category identity, covered preservation-route labels, and exact CPC context |
| `codex-cxc-52-2003` | Standard (`standard`) | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products: https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-11) | Bivalve receiving, water, hygiene, processing, storage, traceability, time-temperature, and quality-control records |
| `codex-cxs-311-2013` | Standard (`standard`) | Codex Alimentarius, CXS 311-2013, Standard for Smoked Fish, Smoke-Flavoured Fish and Smoke-Dried Fish: https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ (retrieved 2026-08-11) | Terminology and separation of smoked and smoke-dried processing routes only; the standard is fish-specific and supplies no oyster quantitative limit here |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Functional unit and reference flow, system boundary, inventory completeness, packaging, allocation hierarchy, primary data, and data-quality disclosure |
