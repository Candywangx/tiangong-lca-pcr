---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.almonds-shelled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Almonds, shelled

## 1. Scope and Applicability

This PCR covers foreground production of shelled almond kernels from reception of a declared shelled-kernel lot through lot acceptance, cleaning, sorting and grading, conditional moisture conditioning, and packaging with any included storage. The reference product is commercially presented almond kernel material; the dataset must declare lot identity, origin, crop year or harvest period when known, variety or commercial type when known, treatment, moisture condition, defect/grade class, size designation or sizing method, package format, and included storage duration.

Cultivation, orchard establishment, harvesting, hulling, and shell removal are outside the foreground boundary. Flavoured, roasted, blanched, sliced, milled, extracted-oil, marzipan, and other further-processed almond products are excluded. Upstream datasets remain required for received shelled kernels, energy, water, packaging, and other purchased inputs.

After sorting, a lot follows exactly one route: direct packaging when the declared commercial condition is already met, or conditioning followed by packaging when moisture adjustment is performed. The same mass must not be assigned to both branches. Numerical ranges marked `reasoned_estimate` are conditional candidate-stage screens only; replace them when an accepted source-backed range or representative foreground evidence from at least 12 consecutive production lots becomes available.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.almonds-shelled |
| classification_refs | CPC 3.0 subclass 21422, Almonds, shelled |
| covered_products | Whole or broken edible almond kernels traded as shelled almonds, in the declared commercial condition and package format |
| excluded_products | Almonds in shell; cultivation, harvest, hulling, or shelling outputs; roasted, blanched, flavoured, sliced, milled, paste, confectionery, milk, and oil products |
| representative_product | Packaged shelled almond kernels ready for dispatch |
| production_route | Reception and lot definition; cleaning, sorting and grading; either direct packaging or conditional moisture conditioning followed by packaging; declared storage when included |
| market_state | Commercially presented shelled kernels with declared moisture condition, defect/grade class, size designation or sizing method, treatment, package format, and lot qualifiers |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of commercially presented shelled almond kernels ready for dispatch |
| How much | 1 kg net mass of shelled almond kernels |
| How well | Meets the producer-declared commercial condition, moisture condition, defect/grade class, size designation or sizing method, treatment, and packaging specification |
| How long or cycle | At the packaging gate; any storage duration included before dispatch is declared |
| reference_flow_link | The reference flow is the packaged shelled-almond output of `packaging_and_storage`, normalized to 1 kg net kernel mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | lot identifier; supplier or origin; crop year or harvest period when known; variety or commercial type when known; treatment; as-received moisture condition and measurement method; defect/grade class; size designation or sizing method; direct-packaging or conditioning route; package format and net mass; included storage duration and conditions |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net kernel mass excluding packaging, foreign matter, and separately reported rejects; preserve measured precision before normalization. |
| `moisture_condition` | received, graded, conditioned, and packaged kernels | Mass fraction | kg/kg or % by mass | Record whether moisture is wet basis or dry basis, the sampling time, and the measurement method; do not compare or combine values on different bases without an explicit conversion. |
| `mass_balance_basis` | kernel inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile inputs, saleable outputs, rejects, samples, and measured mass change on one declared moisture basis for each lot. |
| `packaging_conversion` | packaging counted by item | Mass | kg | Convert item counts to mass using measured or supplier-specific mass per item for the actual package format and retain the conversion record. |
| `storage_normalization` | storage utilities and losses | Energy or Mass | declared unit | Record storage duration and conditions; normalize storage utilities and losses to both net kernel mass and included storage time. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A received lot of already shelled almond kernels, with supplier or origin, lot identifier, treatment, moisture condition, defect/grade information, and size information declared to the extent available |
| starting_condition_role | Foreground gate input and traceability anchor; shell removal is not repeated inside this PCR |
| product_classification_scope | Shelled almond kernels intended for commercial presentation under CPC 3.0 subclass 21422 |
| recursive_input_rule | A same-category shelled-almond input is recorded once as the declared received lot, linked to an upstream dataset, and is not expanded again as foreground production under this PCR |
| upstream_dataset_requirement | Require upstream datasets for received shelled kernels and all purchased energy, water, packaging, treatment materials, and transport brought into the declared product system |
| disclosure | Declare input lot condition, included unit operations, direct-packaging or conditioning route, wet-cleaning status, storage duration and conditions, treatment and fumigation status, reject destinations, and any omitted operation or flow |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_shelled` | all datasets | Start the foreground boundary with received shelled kernels; do not include cultivation, hulling, or shell removal as foreground operations. | `unsd-cpc-3-0-21422`; `unece-ddp-06-2024` |
| `sb_route_exclusivity` | post-sorting lot | Assign each mass portion either to direct packaging or to conditioning followed by packaging; never model both branches for the same mass. |  |
| `sb_upstream_inputs` | purchased inputs | Link received kernels, energy, water, packaging, and other purchased inputs to appropriate upstream datasets and disclose dataset substitutions. | `eu-pef-2021-2279` |
| `sb_completeness` | foreground operations | Record all included material and energy inputs, product, reject and waste outputs, and measured direct emissions; disclose exclusions and missing data without applying an unsupported numerical cut-off. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `reception_and_lot_definition` | Reception and lot definition | required | All foreground datasets | Establish received-kernel mass, condition, provenance, and accepted/rejected mass | kg accepted received kernels |
| `cleaning_sorting_and_grading` | Cleaning, sorting and grading | required | All foreground datasets; wet cleaning only when actually performed | Remove foreign matter and nonconforming kernels and establish the saleable grade and size class | kg graded kernels |
| `moisture_conditioning` | Moisture conditioning | conditional | Include only when the lot is dried or otherwise moisture-conditioned before packaging; omit for the direct-packaging branch | Adjust and verify the declared commercial moisture condition | kg conditioned kernels |
| `packaging_and_storage` | Packaging and storage | required | Packaging is always included; storage inventory is included only for the declared duration before dispatch | Produce the reference product and account for package and included storage | 1 kg net packaged kernels |

### Process: Reception and lot definition (`reception_and_lot_definition`)

#### Inputs

##### Product flows

###### Received shelled almond lot (`received_shelled_almond_lot`)

The already shelled kernel lot crosses the foreground gate with its mass and commercial-condition qualifiers. The amount is measured for each lot and linked to an upstream dataset.

- Selected flow: Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-received net kernel mass entering lot acceptance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted received kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_mass_and_lot`
- Sources: `unsd-cpc-3-0-21422`; `unece-ddp-06-2024`
- Range: Conditional provisional incoming-mass screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg accepted received kernels
  - Basis: broad candidate-stage mass-balance screen per kg accepted received kernels
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted received kernels (`accepted_received_kernels`)

Accepted kernels carry the declared lot identity and condition into cleaning and sorting.

- Selected flow: Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: incoming lot mass minus reception rejects and retained samples on the declared moisture basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg received shelled almond lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reception_mass_and_lot`
- Sources:
- Range: Conditional provisional acceptance-yield screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg received shelled almond lot
  - Basis: broad candidate-stage accepted-mass screen per kg received lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Reception rejects and retained samples (`reception_rejects_and_samples`)

Rejected lot fractions, foreign material removed at reception, and destructive or retained samples are recorded separately by destination where records permit.

- Selected flow: Site-specific reject or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured rejected and sampled mass not entering cleaning and sorting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg received shelled almond lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception_mass_and_lot`
- Sources: `unece-ddp-06-2024`
- Range: Conditional provisional reception-reject screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg received shelled almond lot
  - Basis: broad candidate-stage reject-mass screen per kg received lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning, sorting and grading (`cleaning_sorting_and_grading`)

#### Inputs

##### Product flows

###### Accepted kernels to cleaning and sorting (`kernels_to_cleaning_sorting`)

Accepted received kernels are the sole same-category input to this process.

- Selected flow: Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: accepted mass transferred from reception records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg graded kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sorting_records`
- Sources:
- Range: Conditional provisional sorting-input screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg graded kernels
  - Basis: broad candidate-stage input-mass screen per kg graded kernels
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sorting energy (`cleaning_sorting_energy`)

Metered electricity and any other purchased energy carriers used by cleaning, optical or manual sorting, conveying, and grading are recorded separately by carrier.

- Selected flow: Site-specific electricity and energy-carrier flows
- Flow property / unit: Energy / kWh or MJ, preserving carrier-specific units
- Amount rule: metered or invoice-reconciled energy allocated to the processed lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg graded kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting_records`
- Sources:
- Range: Conditional provisional sorting-energy screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg graded kernels
  - Basis: broad candidate-stage purchased-energy equivalent per kg graded kernels
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-cleaning water (`wet_cleaning_water`)

Record water only when wet cleaning is actually performed; dry-cleaning routes must report zero and identify the dry operation.

- Selected flow: Site-specific water supply flow
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-recorded water supplied to wet cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg graded kernels from a wet-cleaned lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting_records`
- Sources:
- Range: Conditional provisional wet-cleaning-water screen, used only for wet cleaning and replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg graded kernels
  - Basis: broad candidate-stage water-use estimate for the wet-cleaning route only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Graded shelled almond kernels (`graded_shelled_almond_kernels`)

Saleable kernels are classified by the declared commercial condition, defect/grade class, size designation or sizing method, and treatment status.

- Selected flow: Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured graded kernel mass by grade and size class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted kernels entering cleaning and sorting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting_records`
- Sources: `unece-ddp-06-2024`
- Range: Conditional provisional sorting-yield screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg accepted kernels entering cleaning and sorting
  - Basis: broad candidate-stage graded-output mass screen per kg sorting input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Sorting rejects and foreign matter (`sorting_rejects_and_foreign_matter`)

Record kernels failing the declared grade, shell fragments, stones, dust collected as waste, and other removed material separately when destination or composition differs.

- Selected flow: Site-specific reject or waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by fraction and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted kernels entering cleaning and sorting
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting_records`
- Sources: `unece-ddp-06-2024`
- Range: Conditional provisional sorting-reject screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg accepted kernels entering cleaning and sorting
  - Basis: broad candidate-stage reject-mass screen per kg sorting input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wet-cleaning wastewater (`wet_cleaning_wastewater`)

Record wastewater only for a wet-cleaning route, before any on-site treatment or discharge.

- Selected flow: Site-specific wastewater flow
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or calculated water input minus measured retained and evaporated water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg graded kernels from a wet-cleaned lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sorting_records`
- Sources:
- Range: Conditional provisional wastewater screen, used only for wet cleaning and replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg graded kernels
  - Basis: broad candidate-stage wastewater estimate for the wet-cleaning route only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Moisture conditioning (`moisture_conditioning`)

#### Inputs

##### Product flows

###### Graded kernels requiring conditioning (`kernels_requiring_conditioning`)

This input exists only for lots assigned to the conditioning branch; direct-packaging lots bypass the entire process.

- Selected flow: Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured graded mass assigned exclusively to conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `unece-ddp-06-2024`
- Range: Conditional provisional conditioning-input screen, used only when conditioning occurs and replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg conditioned kernels
  - Basis: broad candidate-stage input-mass screen per kg conditioned kernels
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning energy (`conditioning_energy`)

Metered electricity and purchased thermal energy are recorded separately by carrier only when conditioning is performed.

- Selected flow: Site-specific electricity and thermal-energy carrier flows
- Flow property / unit: Energy / kWh or MJ, preserving carrier-specific units
- Amount rule: metered or invoice-reconciled energy attributable to the conditioned lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Conditional provisional conditioning-energy screen, used only when conditioning occurs and replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg conditioned kernels
  - Basis: broad candidate-stage purchased-energy equivalent per kg conditioned kernels
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned shelled almond kernels (`conditioned_shelled_almond_kernels`)

Conditioned kernels meet the producer-declared moisture condition and retain the lot, grade, size, and treatment qualifiers.

- Selected flow: Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conditioned kernel mass at release to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg graded kernels assigned to conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `unece-ddp-06-2024`
- Range: Conditional provisional conditioning-yield screen, used only when conditioning occurs and replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg graded kernels assigned to conditioning
  - Basis: broad candidate-stage output-mass screen per kg conditioning input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Conditioning rejects (`conditioning_rejects`)

Record kernels rejected after conditioning and any collected solid residue by mass and destination.

- Selected flow: Site-specific reject or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured conditioning reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg graded kernels assigned to conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources:
- Range: Conditional provisional conditioning-reject screen, used only when conditioning occurs and replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg graded kernels assigned to conditioning
  - Basis: broad candidate-stage reject-mass screen per kg conditioning input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct conditioning emissions (`direct_conditioning_emissions`)

Record carrier-specific direct emissions only when on-site fuel combustion or another direct-emission source serves conditioning; upstream emissions remain in the purchased-energy dataset.

- Selected flow: Applicable site-specific elementary emission flows
- Flow property / unit: Mass / kg
- Amount rule: measured emissions or calculated from metered fuel and a disclosed accepted factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned kernels
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `eu-pef-2021-2279`
- Range: Conditional provisional direct-emission screen, used only for an applicable direct-emission source and replaced when a source-specific factor or measurement is accepted
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg conditioned kernels
  - Basis: broad candidate-stage carrier-specific emission screen per kg conditioned kernels
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and storage (`packaging_and_storage`)

#### Inputs

##### Product flows

###### Saleable kernels to packaging (`saleable_kernels_to_packaging`)

Use graded kernels from the direct-packaging branch or conditioned kernels from the conditioning branch, never both for the same mass portion.

- Selected flow: Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net kernel mass released to packaging from the declared exclusive route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged shelled almonds
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_records`
- Sources:
- Range: Conditional provisional packaging-input screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg net packaged shelled almonds
  - Basis: broad candidate-stage input-mass screen per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and allocated tertiary packaging separately by material and package format.

- Selected flow: Material-specific packaging flows
- Flow property / unit: Mass / kg
- Amount rule: measured package mass or package count multiplied by measured or supplier-specific mass per item
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged shelled almonds
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_records`
- Sources:
- Range: Conditional provisional packaging-mass screen, replaced by supplier specifications, measured package masses, or an accepted source-backed range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net packaged shelled almonds
  - Basis: broad candidate-stage packaging-mass estimate per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and storage energy (`packaging_storage_energy`)

Record packaging-line energy and energy used during the declared included storage period separately by carrier and use.

- Selected flow: Site-specific electricity and energy-carrier flows
- Flow property / unit: Energy / kWh or MJ, preserving carrier-specific units
- Amount rule: metered energy or time-allocated facility energy for packaging and included storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged shelled almonds and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_records`
- Sources:
- Range: Conditional provisional packaging-and-storage-energy screen, replaced by an accepted source-backed range or 12 consecutive representative lots with the same storage conditions
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net packaged shelled almonds
  - Basis: broad candidate-stage energy estimate for the declared packaging and storage period
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged shelled almonds (`packaged_shelled_almonds`)

This is the reference product at the packaging gate, including only the declared storage period before dispatch.

- Selected flow: Almonds, shelled `06421bad-f22a-4272-8776-847f03dc4d1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net kernel mass as the reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol:
- Sources: `unsd-cpc-3-0-21422`; `unece-ddp-06-2024`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg net kernel mass
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)
  - Sources: `unsd-cpc-3-0-21422`; `unece-ddp-06-2024`

##### Waste flows

###### Packaging losses and waste (`packaging_losses_and_waste`)

Record damaged kernels, spilled product, packaging offcuts, rejected packages, and discarded packaging separately by material and destination.

- Selected flow: Site-specific product-loss and packaging-waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured mass or item count converted to mass by actual package format
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged shelled almonds
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_records`
- Sources:
- Range: Conditional provisional packaging-loss screen, replaced by an accepted source-backed range or 12 consecutive representative lots
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net packaged shelled almonds
  - Basis: broad candidate-stage combined product-loss and packaging-waste screen per kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Storage refrigerant emissions (`storage_refrigerant_emissions`)

Record refrigerant emissions only when cooled storage is included and equipment leakage is attributable to the declared storage period.

- Selected flow: Refrigerant-specific elementary emission flow
- Flow property / unit: Mass / kg
- Amount rule: measured refrigerant loss or calculated allocation of verified equipment leakage to mass and storage duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged shelled almonds and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_records`
- Sources: `eu-pef-2021-2279`
- Range: Conditional provisional refrigerant-emission screen, used only for cooled storage and replaced when verified equipment leakage records or a source-specific factor is accepted
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net packaged shelled almonds
  - Basis: broad candidate-stage refrigerant-loss estimate for the declared storage period
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | all foreground processes | Prefer subdivision, direct metering, and lot-level mass balance so that allocation is avoided. | `eu-pef-2021-2279` |
| `alloc_route_specific` | shared equipment and utilities | Allocate measured shared utilities using the most physically representative driver available, such as equipment time, metered energy, processed mass, or storage mass-time; disclose the driver and affected flows. | `eu-pef-2021-2279` |
| `alloc_reject_destinations` | rejects, samples, and recovered material | Treat outputs according to their documented destination and economic function; do not assign avoided burdens or co-product credit without a goal-consistent, source-supported allocation or substitution rule. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reception_mass_and_lot` | `reception_and_lot_definition` | received mass, qualifiers, accepted mass, rejects, samples | weighbridge or calibrated scale records; receiving inspection; laboratory or rapid moisture records | lot_id; supplier_or_origin; crop_year_or_period; variety_or_type; treatment; received_net_mass; accepted_mass; reject_mass; sample_mass; moisture_value; moisture_basis; method; grade; size | Capture each received lot and reconcile acceptance records to scale tickets and inspection records | kg; kg/kg or % by mass | each lot | all lots in reporting period | all foreground receiving points | Sum mass by lot and destination; retain lot-level results before normalization | calibration status; ticket or batch record; sampling record; moisture method; reviewer sign-off |
| `cp_sorting_records` | `cleaning_sorting_and_grading` | transferred kernels, energy, conditional water, graded output, rejects, wastewater | batch mass records; submeter or invoice allocation; water meter; grade and size inspection | lot_id; input_mass; energy_by_carrier; wet_cleaning_flag; water_input; graded_mass_by_class; reject_mass_by_fraction; wastewater_volume | Capture each batch and preserve grade, size, treatment, and wet-cleaning route | kg; kWh; MJ; m3 | each batch and meter period | all batches in reporting period | all foreground sorting lines | Reconcile batch inputs to graded output, rejects, samples, wastewater, and measured mass change; allocate shared utilities by disclosed driver | scale and meter calibration; grade inspection; allocation worksheet; mass-balance review |
| `cp_conditioning_records` | `moisture_conditioning` | conditioning-route mass, energy, conditioned output, rejects, direct emissions | route assignment; batch scales; moisture tests; energy meters; fuel records; accepted emission factors or measurements | lot_id; conditioning_flag; input_mass; input_moisture; output_mass; output_moisture; energy_by_carrier; reject_mass; fuel_quantity; emission_factor_id; measured_emission | Record only conditioned lots and keep direct-packaging lots outside this protocol | kg; kg/kg or % by mass; kWh; MJ; carrier-specific emission unit | each conditioned batch and meter period | all conditioned batches in reporting period | all foreground conditioning equipment | Normalize to conditioned output; calculate direct emissions only from collected fuel or measurement fields and a disclosed accepted factor | route check; scale, moisture, and meter calibration; factor provenance; mass-balance review |
| `cp_packaging_storage_records` | `packaging_and_storage` | route-specific kernel input, packaging, energy, reference output, losses, refrigerant emissions | packaging batch records; package specifications or measured item mass; energy meter; warehouse inventory; refrigerant service logs | lot_id; source_route; kernel_input_mass; packaged_net_mass; package_material; package_count; mass_per_item; packaging_energy; storage_energy; storage_start; storage_end; temperature_condition; loss_mass; waste_mass; refrigerant_type; refrigerant_loss | Capture each packaging batch and included storage interval; verify exclusive source route | kg; item; kWh; MJ; day; degC; carrier-specific emission unit | each packaging batch; monthly for storage and refrigerant records | all packaged lots and included storage days in reporting period | all foreground packaging and included storage facilities | Convert counts to mass; allocate storage utilities and leakage by net mass-time; normalize to 1 kg packaged output | package weighing record; meter record; inventory reconciliation; service log; route and duration review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory rows | normalized amount = lot or period quantity divided by packaged net kernel mass; for storage rows also retain the included mass-time denominator | row quantity; packaged_net_mass; storage duration when applicable | amount per 1 kg reference flow, with storage time disclosed | `eu-pef-2021-2279` |
| `calc_reception_balance` | reception | accepted_mass = received_net_mass - reject_mass - sample_mass, adjusted only when a documented moisture-basis conversion is required | received_net_mass; reject_mass; sample_mass; moisture values and bases | accepted received kernel mass |  |
| `calc_sorting_balance` | cleaning and sorting | reconcile input_mass with graded_mass_by_class, reject_mass_by_fraction, sample mass, and measured moisture-related mass change; report unresolved difference | input and output mass fields; moisture fields | graded output, rejects, and mass-balance difference |  |
| `calc_conditioning_balance` | conditioning route | reconcile conditioned input and output on the declared moisture basis and keep evaporated or added water distinct from solid rejects | input_mass; output_mass; input_moisture; output_moisture; reject_mass | conditioned output, water-related mass change, rejects |  |
| `calc_packaging_mass` | packaging materials | packaging mass = package_count multiplied by measured or supplier-specific mass_per_item for each material and format | package_count; mass_per_item; package_material | kg packaging per 1 kg reference flow |  |
| `calc_storage_allocation` | included storage | allocate storage energy and verified refrigerant loss by net packaged mass multiplied by storage duration, unless a more representative measured driver is documented | storage energy; refrigerant loss; packaged mass; storage duration | storage inventory per 1 kg reference flow and declared duration | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_condition` | all lots | Retain lot identity and the available commercial-condition qualifiers, including moisture method, defect/grade class, size designation or method, treatment, and package format. | receiving, inspection, laboratory, and packaging records; `unece-ddp-06-2024` |
| `dq_route_exclusivity` | each mass portion after sorting | Demonstrate that the mass follows either direct packaging or conditioning followed by packaging, with no duplication. | route assignment and packaging source-route reconciliation |
| `dq_measurement` | mass, moisture, energy, water, and direct-emission records | Use calibrated or verified instruments where applicable, retain units and moisture basis, and document allocation of shared meters. | calibration certificates, meter checks, laboratory methods, and allocation worksheets |
| `dq_temporal_and_site_coverage` | reporting period | Cover all foreground sites and all lots in the declared reporting period; disclose exclusions, downtime, abnormal lots, and storage intervals. | lot register, production calendar, site list, and exception log |
| `dq_mass_balance` | every lot or batch | Reconcile inputs, saleable outputs, rejects, samples, waste, and moisture-related mass change and investigate unresolved differences. | signed lot or batch mass-balance worksheet |
| `dq_provisional_range_replacement` | every `reasoned_estimate` range | Treat the range as conditional and temporary; replace it when an accepted source-backed range or at least 12 consecutive representative lot records are available, and document the replacement decision. | source review record or retained lot-series analysis |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | reference product and dataset metadata | The selected reference product flow UUID, mass property UUID, unit-group UUID, CPC reference, and declared product qualifiers must match this PCR. | `unsd-cpc-3-0-21422`; `unece-ddp-06-2024` |
| `val_reference_mass` | reference flow | The output must equal 1 kg net kernel mass; packaging, foreign matter, rejects, and samples must not be included in that mass. |  |
| `val_route_exclusive` | post-sorting route | Each mass portion must show either direct packaging or conditioning followed by packaging, never both. |  |
| `val_process_conditions` | conditional operations | `moisture_conditioning`, wet-cleaning flows, storage inventory, direct conditioning emissions, and refrigerant emissions must appear only when their declared inclusion conditions apply. |  |
| `val_mass_balance` | each foreground process | Inputs and outputs must reconcile on the declared moisture basis; unresolved differences must be quantified and disclosed. | `eu-pef-2021-2279` |
| `val_inventory_completeness` | foreground data package | Each included process must report material and energy inputs, product, reject and waste outputs, applicable direct emissions, collection protocol links, units, and normalization basis; exclusions and missing values must be explicit. | `eu-pef-2021-2279` |
| `val_provisional_ranges` | `reasoned_estimate` ranges | Confirm that each provisional range is labelled conditional, has a replacement trigger, and has not displaced available site records or accepted source-backed evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process data package aggregated to a packaged shelled-almond production dataset |
| downstream_use | secondary_dataset; background_dataset after methodology review and with route, geography, technology, and time representativeness checked |
| allowed_use | modelling packaged shelled almonds produced from received shelled kernels under the declared direct-packaging or conditioning route and declared storage conditions |
| excluded_use | cultivation, in-shell almond production, hulling, shelling, roasting, blanching, flavouring, cutting, milling, paste, beverage, oil extraction, or undisclosed route substitution |
| required_metadata | canonical PCR id; reference UUIDs; CPC reference; geography; reporting period; facility coverage; lot and commercial-condition qualifiers; direct-packaging or conditioning route; wet-cleaning status; treatment; package format; storage duration and conditions; allocation drivers; upstream dataset references |
| required_quality_disclosure | foreground versus upstream data shares; instrument and moisture-method quality; temporal and site coverage; mass-balance differences; missing data and substitutions; conditional operations; provisional `reasoned_estimate` ranges and replacement status |
| update_trigger | change in product scope, treatment, commercial-condition specification, route, technology, package format, storage conditions, allocation method, upstream datasets, accepted external evidence, or availability of representative lot data that replaces a provisional range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21422` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21422, Almonds, shelled | Product-category identity and exclusion of in-shell or further-processed products |
| `unece-ddp-06-2024` | standard | United Nations Economic Commission for Europe, UNECE Standard DDP-06 concerning the marketing and commercial quality control of almond kernels, 2024 edition | Kernel identity and commercial-condition, moisture, defect/grade, size, package, and lot qualifiers; not inventory default amounts |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, including the Product Environmental Footprint method | General life-cycle inventory completeness, data quality, allocation hierarchy, normalization, and disclosure principles |
