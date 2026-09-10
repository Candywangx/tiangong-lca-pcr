---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sorghum, seed

## 1. Scope and Applicability

This PCR applies to seed of *Sorghum* species grown specifically for sowing, whether open-pollinated or hybrid and whether untreated or treated, when delivered as a marketable seed lot at the seed-producer gate. It covers seed-crop cultivation, harvest, drying and handling, cleaning and conditioning, and, when performed, seed treatment, packaging, and storage before dispatch.

It excludes sorghum grown as grain or feed rather than specifically for seed, sweet sorghum (*Sorghum saccharatum*), downstream distribution, sowing, and cultivation of the commercial crop produced from the seed. A claim of certification, Quality Declared Seed (QDS), varietal identity, germination, purity, or treatment status must be supported by the applicable lot record or test; the PCR does not create such a claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed |
| classification_refs | CPC 3.0: 01141, Sorghum, seed (exact) |
| covered_products | *Sorghum* seed grown specifically for sowing; open-pollinated and hybrid seed; cleaned, conditioned, untreated, coated, or otherwise treated seed when treatment is declared |
| excluded_products | Sorghum not grown specifically for seed (CPC 01142); sweet sorghum (CPC 01809); grain, feed, biomass, and downstream crop products |
| representative_product | A lot-traceable, cleaned, sowing-quality sorghum seed product at the seed-producer gate |
| production_route | Parent or foundation seed input; seed-crop cultivation and harvest; drying and handling; cleaning and conditioning; conditional treatment, packaging, and storage |
| market_state | Net marketable seed mass, seed-grade and ready for sowing, with moisture, quality, class, treatment, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of sowing-quality sorghum seed delivered at the seed-producer gate |
| How much | 1 kg net marketable seed, excluding packaging |
| How well | Species and variety identified; hybrid/open-pollinated status, seed class, germination, analytical purity, varietal purity, moisture, treatment/coating, and certification scheme or no-claim status declared |
| How long or cycle | One seed-production crop cycle plus post-harvest handling and storage through producer-gate dispatch |
| reference_flow_link | rf_sorghum_seed_mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and variety/cultivar; hybrid or open-pollinated status; seed class/generation; production geography and crop year; certification or QDS scheme and claim status; germination test result/method/date; analytical and varietal purity result/method/date; moisture content and measurement basis; treatment/coating active substance and loading or untreated status; packaging state; storage duration and conditions; net seed mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Final marketable sorghum seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net seed mass excluding packaging. Record the lot moisture at weighing and do not substitute nominal bag mass for measured net mass. |
| `moisture_basis` | Harvested, dried, conditioned, and final seed masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve the as-measured moisture basis. Any dry-matter conversion must use the measured moisture fractions and disclose the formula; no default moisture is imposed. |
| `seed_count_conversion` | Seed counts converted to mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use a lot-specific measured thousand-seed mass or equivalent count-to-mass test and retain the sampling record. |
| `nutrient_basis` | Fertiliser and organic amendment inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg product and kg nutrient | Record formulated product mass and nutrient N, P, and K separately; nitrogen activity data used in emissions calculations must be expressed as kg N. |
| `energy_basis` | Electricity and fuels | Dataset-specific | kWh, MJ, or kg fuel | Preserve metered electricity and purchased fuel units. Conversions must use disclosed meter factors, density, or net calorific value applicable to the actual carrier. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A separately identified parent, foundation, or other eligible sorghum seed lot enters the seed-crop cultivation cycle; initial field location, prior crop, soil management state, and crop year are declared. |
| starting_condition_role | Upstream seed input and disclosed field baseline for the foreground seed-production cycle. |
| product_classification_scope | The output is restricted to sorghum grown specifically for seed under CPC 01141; grain sorghum, sweet sorghum, and downstream crop production are outside scope. |
| recursive_input_rule | Sorghum seed used for planting is recorded as an input with its own upstream dataset. Do not recursively recreate the same seed-production foreground inside the current dataset. |
| upstream_dataset_requirement | Use a geographically, temporally, technologically, and seed-class appropriate upstream dataset for parent seed, fertiliser, crop-protection products, energy, water supply, treatment materials, and packaging. |
| disclosure | Declare field geography and crop year, seed class and lot, irrigation regime, fertiliser and crop-protection regime, harvest moisture, drying/conditioning route, treatment, packaging, storage, co-products, exclusions, and allocation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_chain` | Foreground seed production | Include cultivation and harvest, drying and handling, cleaning and conditioning, and all triggered treatment, packaging, and storage operations through producer-gate dispatch. | `fao-qds-2006`; `oecd-seed-schemes-2026` |
| `boundary_inputs_outputs` | Inventory completeness | Record parent seed, nutrients, crop-protection products, irrigation, energy, treatment materials, packaging, marketable seed, rejects, residues, wastes, and direct emissions. Any exclusion must be quantified or supported by a documented screening. | `eu-pef-2021` |
| `boundary_managed_soils` | Cultivation emissions | Calculate direct and indirect managed-soil N2O from applicable synthetic and organic N, crop residues, volatilisation, and leaching/runoff pathways without double counting. Record lime and urea CO2 when applicable. | `ipcc-2019-managed-soils` |
| `boundary_downstream_exclusion` | Downstream stages | Exclude distribution after producer-gate dispatch, sowing, and production or use of the commercial crop; disclose any study-specific extension beyond this boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_cultivation` | Sorghum seed-crop cultivation and harvest | required | Always included for seed grown in the represented production cycle | Foreground crop production and field emissions | Per kg harvested seed lot and normalized to 1 kg final marketable seed |
| `postharvest_drying` | Post-harvest drying and handling | required | Include measured handling; report zero drying energy only when no active drying occurs | Moisture adjustment and handling | Per kg dried uncleaned seed lot and normalized to 1 kg final marketable seed |
| `seed_cleaning_conditioning` | Seed cleaning and conditioning | required | Always included | Removal of foreign material, off-size seed, and nonconforming fractions | Per 1 kg conditioned seed output |
| `treatment_packaging_storage` | Seed treatment, packaging, and storage | conditional | Include every operation occurring before producer-gate dispatch; untreated, bulk, or no-storage cases must be declared | Final market state preparation | Per 1 kg final marketable seed |

### Process: Sorghum seed-crop cultivation and harvest (`seed_crop_cultivation`)

#### Inputs

##### Product flows

###### Parent or foundation sorghum seed (`parent_seed_input`)

Record the identified sowing seed lot crossing into the represented crop cycle. Use the confirmed sorghum seed flow only when its seed-purpose scope and lot qualifiers match.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net seed mass sown
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final marketable sorghum seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Replaceable provisional parent-seed QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg/kg final marketable seed
  - Basis: broad plausibility screen pending reviewed crop-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nutrient and soil-amendment products (`nutrient_inputs`)

Record each fertiliser, manure, compost, lime, urea, and other amendment as a separate dataset flow, including product mass and nutrient composition.

- Selected flow: Dataset-specific nutrient or amendment product; resolve each Tiangong UUID before dataset publication
- Flow property / unit: Mass / kg product and kg nutrient
- Amount rule: purchase, application, and nutrient-analysis records reconciled to the field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable sorghum seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`
- Range: Replaceable provisional nutrient-product QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg product/kg final marketable seed
  - Basis: broad plausibility screen; not a default inventory value or conformance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`irrigation_water`)

Record withdrawn and delivered irrigation water separately when metering or the water-supply dataset distinguishes them.

- Selected flow: Site-specific irrigation water supply; resolve the Tiangong UUID for the actual source
- Flow property / unit: Mass / kg water
- Amount rule: metered volume converted with measured or documented water density, or mass meter record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable sorghum seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Replaceable provisional irrigation QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg water/kg final marketable seed
  - Basis: broad rainfed-to-irrigated plausibility screen; not a default inventory value or conformance limit
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field energy carriers (`field_energy`)

Record each diesel, other fuel, and electricity carrier separately with the geography and technology actually used.

- Selected flow: Dataset-specific fuel or electricity flow; no geography-free default is selected
- Flow property / unit: Carrier-specific / kg fuel, MJ, or kWh
- Amount rule: reconciled fuel issue, invoice, and meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable sorghum seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Range: Replaceable provisional field-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ/kg final marketable seed
  - Basis: broad plausibility screen after converting actual carriers; not a default inventory value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default waste input is specified. Record imported organic waste as an amendment under `nutrient_inputs` with its legal and nutrient status.

##### Elementary flows

Record land occupation, water withdrawal, and other elementary resource inputs when they cross the model boundary, using site-specific Tiangong flows.

#### Outputs

##### Product flows

###### Harvested sorghum seed lot before drying and cleaning (`cultivated_seed_lot`)

Record the wet harvested seed-purpose lot as an intermediate product. Do not substitute the CPC 01142 `Sorghum, other` flow merely because a process name resembles seed cultivation.

- Selected flow: Unresolved seed-purpose intermediate; semantically exact Tiangong UUID required before separate-dataset publication
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured harvested lot mass with moisture and lot identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per crop cycle and normalized to 1 kg final marketable seed
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`

##### Waste flows

###### Field residues removed from the field (`removed_crop_residues`)

Record only residue mass that leaves the field boundary; residues retained on field are activity data for nutrient and emissions calculations.

- Selected flow: Dataset-specific sorghum crop residue or waste flow
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured removed residue mass and moisture/dry-matter fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable sorghum seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`

##### Elementary flows

###### Direct nitrous oxide from managed soil (`direct_soil_n2o`)

Calculate direct managed-soil N2O using applicable nitrogen activity data and the selected IPCC tier or a documented higher-tier method.

- Selected flow: nitrous oxide `29061478-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: `calc_managed_soil_n2o`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable sorghum seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_records`
- Sources: `ipcc-2019-managed-soils`

### Process: Post-harvest drying and handling (`postharvest_drying`)

#### Inputs

##### Product flows

###### Harvested seed lot received (`harvested_seed_input`)

Preserve the cultivation lot identity, mass, and moisture at receipt.

- Selected flow: Same unresolved seed-purpose intermediate as `cultivated_seed_lot`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dried seed lot output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`

###### Drying and handling energy (`drying_energy`)

Record electricity and each fuel carrier separately; a zero active-drying value requires a declared passive-drying route.

- Selected flow: Dataset-specific electricity or fuel flow; no geography-free default is selected
- Flow property / unit: Carrier-specific / kWh, MJ, or kg fuel
- Amount rule: meter, invoice, or batch fuel record allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dried seed lot output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`
- Range: Replaceable provisional drying-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg dried seed output
  - Basis: broad passive-to-active drying plausibility screen; not a default inventory value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No default waste input is specified.

##### Elementary flows

Record direct combustion resource inputs as applicable to the selected fuel dataset.

#### Outputs

##### Product flows

###### Dried uncleaned sorghum seed lot (`dried_seed_lot`)

Record dried intermediate mass, moisture, drying route, and lot identity.

- Selected flow: Unresolved dried seed-purpose intermediate; semantically exact Tiangong UUID required before separate-dataset publication
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured output mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dried seed lot output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_records`

##### Waste flows

Record spills and nonrecoverable losses as measured waste outputs.

##### Elementary flows

###### Water removed during drying (`drying_water_vapour`)

Calculate water removed by the wet-basis moisture mass balance and reconcile it with measured input and output masses.

- Selected flow: water vapour `2905ed3f-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: `calc_drying_water_balance`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dried seed lot output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_records`
- Sources: `mass-balance-identity`

### Process: Seed cleaning and conditioning (`seed_cleaning_conditioning`)

#### Inputs

##### Product flows

###### Dried seed lot received for conditioning (`dried_seed_input`)

Record the linked dried lot and preserve mass, moisture, and lot identity.

- Selected flow: Same unresolved seed-purpose intermediate as `dried_seed_lot`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

###### Conditioning electricity (`conditioning_electricity`)

Record metered or batch-allocated electricity using a geography- and voltage-specific supply flow.

- Selected flow: Dataset-specific electricity flow; no geography-free default is selected
- Flow property / unit: Energy / kWh
- Amount rule: metered or batch-allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

##### Waste flows

No default waste input is specified.

##### Elementary flows

No default elementary input is specified.

#### Outputs

##### Product flows

###### Conditioned sorghum seed (`conditioned_seed_output`)

Use the target flow only after the lot meets the declared market and quality state; retain actual test results rather than inferring quality from the flow name.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net conditioned seed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `fao-qds-2006`; `oecd-seed-schemes-2026`

##### Waste flows

###### Cleaning rejects and foreign material (`cleaning_rejects`)

Measure off-size seed, broken seed, foreign material, and dust fractions separately where their fate differs; classify saleable diverted material as a co-product rather than waste.

- Selected flow: Dataset-specific reject, residue, or co-product flow according to actual fate
- Flow property / unit: Mass / kg
- Amount rule: measured reject fractions by outlet and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Range: Replaceable provisional cleaning-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg reject/kg dried seed input
  - Basis: broad plausibility screen; not a default yield or conformance limit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record captured and uncaptured particulate emissions separately when measured or modelled.

### Process: Seed treatment, packaging, and storage (`treatment_packaging_storage`)

#### Inputs

##### Product flows

###### Conditioned seed received (`conditioned_seed_input`)

Preserve the conditioned lot identity and quality-test linkage.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final marketable seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_lot_records`

###### Seed-treatment and packaging materials (`treatment_packaging_inputs`)

Record each active substance, formulated treatment, coating, colorant, inoculant, bag, liner, pallet, and other packaging material separately when used.

- Selected flow: Dataset-specific treatment and packaging product flows; resolve each Tiangong UUID
- Flow property / unit: Mass / kg
- Amount rule: batch formulation, purchase, and packaging issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final marketable seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_lot_records`
- Range: Replaceable provisional packaging QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg packaging/kg final marketable seed
  - Basis: broad bulk-to-small-pack plausibility screen; not a default inventory value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage and packing energy (`storage_energy`)

Record metered or floor-area/time-allocated electricity and fuels for the declared storage duration and conditions.

- Selected flow: Dataset-specific electricity or fuel flow
- Flow property / unit: Carrier-specific / kWh, MJ, or kg fuel
- Amount rule: metered or documented allocation to the seed lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable seed and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_lot_records`

##### Waste flows

No default waste input is specified.

##### Elementary flows

Record direct treatment or fumigation emissions only when they cross the environment boundary and are supported by an applicable method.

#### Outputs

##### Product flows

###### Final marketable sorghum seed (`final_sorghum_seed`)

This is the reference product. Report 1 kg net seed mass and all required qualifiers; packaging mass is separate.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net marketable seed
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Treatment and packaging losses (`final_lot_wastes`)

Record unused treatment mixtures, spills, rejected packaging, and damaged seed separately by fate.

- Selected flow: Dataset-specific waste flow according to actual material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste log and mass reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final marketable seed
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_lot_records`

##### Elementary flows

No default elementary output is specified.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | All multifunctional operations | First avoid allocation through process subdivision and direct measurement of seed, residues, rejects, and treatment/packaging operations. | `eu-pef-2021` |
| `allocation_residues` | Crop residues retained on field | Do not assign a separate product burden to retained residues; include their nutrient return and associated field emissions in the seed-crop system. | `ipcc-2019-managed-soils` |
| `allocation_saleable_coproducts` | Removed residues or cleaning rejects with economic use | Apply system expansion when a justified displaced function is documented; otherwise use a documented physical causal relation, and use economic allocation only when no defensible physical relation exists. Record masses, moisture, prices, period, geography, and allocation shares. | `eu-pef-2021` |
| `allocation_wastes` | Materials legally and physically treated as waste | Assign treatment burdens to the seed system until the documented waste boundary; do not create an avoided-product credit without a supported substitution case. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_records` | `seed_crop_cultivation` | seed, nutrient, water, energy, yield, residues, emissions activity | field and lot records | field_id; lot_id; area; dates; seed_mass; fertiliser_product_mass; nutrient_N_P_K; amendment_mass; crop_protection_product_and_active; irrigation; fuel; electricity; harvested_mass; moisture; residue_mass_and_fate | calibrated meters/scales, invoices, application logs, field logs, and laboratory analysis | native unit plus kg, kg nutrient, kWh, MJ, ha | each application and harvest event | complete represented crop cycle | each included field/site | reconcile purchases, applications, stocks, and harvested lots; normalize only after final marketable output is known | calibration, invoice, batch, application, sampling, and lot-chain records |
| `cp_postharvest_records` | `postharvest_drying` | received seed, energy, dried seed, water removal, losses | batch records | lot_id; input_mass; input_moisture; output_mass; output_moisture; drying_route; electricity; fuel; losses; timestamps | calibrated scales and moisture meter, energy meter, fuel records | kg, moisture fraction, kWh, MJ, kg fuel | each batch | all batches represented | each dryer/handling site | batch mass and dry-matter balance; aggregate by output mass | calibration, meter, moisture-test, and batch records |
| `cp_conditioning_records` | `seed_cleaning_conditioning` | input, electricity, marketable seed, rejects | conditioning batch and quality records | lot_id; input_mass; output_mass; reject_mass_by_fate; electricity; germination; analytical_purity; varietal_purity; moisture; test_method; test_date | scales, meter, cleaning logs, representative laboratory samples | kg, kWh, percent or fraction | each lot/batch | all represented lots | each conditioning line/site | reconcile mass by lot; aggregate by conditioned output mass | calibration, batch, sampling, laboratory report, and lot-chain records |
| `cp_final_lot_records` | `treatment_packaging_storage` | treatment, packaging, energy, final product, wastes | formulation, packaging, storage, and dispatch records | lot_id; active_substance; formulation_mass; coating_mass; packaging_material_mass; electricity; fuel; storage_duration; temperature_humidity; final_net_mass; waste_mass_and_fate | batch sheets, issue records, meters, scales, storage logs, dispatch records | kg, kWh, MJ, day | each lot and storage period | from conditioning to producer-gate dispatch | each treatment, packing, and storage site | aggregate by dispatched net seed mass and declared storage duration | batch sign-off, calibration, inventory reconciliation, label, and dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_inventory_normalization` | All foreground rows | Divide the reconciled amount attributable to represented lots by final net marketable seed mass; preserve process-specific intermediate bases before final normalization. | collected amounts; lot links; final net seed mass | amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_drying_water_balance` | `drying_water_vapour` | Dry matter = wet mass × (1 − wet-basis moisture fraction); water removed = input water mass − output water mass. Investigate rather than force-close unexplained imbalance. | input/output mass and moisture | kg water removed and mass-balance discrepancy | `mass-balance-identity` |
| `calc_managed_soil_n2o` | Direct and indirect field N2O | Apply the appropriate IPCC 2019 Chapter 11 Tier 1, Tier 2, or documented higher-tier equations to synthetic N, organic N, crop residues, volatilisation, and leaching/runoff; convert N2O-N to N2O consistently and prevent double counting. | kg N by source; residue N; applicable factors; climate/soil/management context | kg direct and indirect N2O per reference flow | `ipcc-2019-managed-soils` |
| `calc_coproduct_allocation` | Saleable residues and rejects | Implement the declared hierarchy and calculate shares from the recorded physical relation or contemporaneous economic values; shares across allocated outputs must sum to 1. | output quantities, moisture, functions, prices, allocation choice | allocated inventory per output | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Seed inputs, intermediates, and output | Preserve field, harvest, conditioning, treatment, package, and dispatch lot links plus species, variety, hybrid status, and seed class. | lot ledger, labels, certificates, and chain-of-custody records; `fao-qds-2006`; `oecd-seed-schemes-2026` |
| `dq_temporal_geographic` | All foreground data | Cover a complete declared crop cycle and all represented post-harvest lots; report site geography, crop year, technology, irrigation, and storage duration. | field and batch population with completeness reconciliation; `eu-pef-2021` |
| `dq_measurement` | Mass, moisture, energy, water, and quality tests | Use calibrated equipment and representative sampling; retain method, date, laboratory, uncertainty or resolution, and missing-data treatment. | calibration certificates, sampling plans, laboratory reports, and meter records |
| `dq_emission_factors` | Calculated field emissions | Record method tier, equation, factor values and units, factor geography/climate/soil applicability, and all activity data. | reproducible calculation and `ipcc-2019-managed-soils` |
| `dq_reasoned_estimates` | Provisional QA ranges | Treat every `reasoned_estimate` range only as a replaceable screening flag. It must not populate the final inventory or act as a conformance threshold. | flagged QA report and replacement with measured or reviewed evidence before publication |
| `dq_representativeness` | Published dataset | Assess completeness, methodological consistency, technological, geographical, and time representativeness, and precision. | data-quality assessment and limitations statement; `eu-pef-2021` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Require amount 1 kg, Sorghum, seed UUID `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validation_product_scope` | Product identity | Reject default use for CPC 01142 sorghum grain, sweet sorghum, or a lot not demonstrated to have been grown specifically for seed. | `unsd-cpc3-2025` |
| `validation_qualifiers` | Reference product | Fail completeness when any required qualifier is absent or when certification/QDS/quality claims lack lot-specific evidence. | `fao-qds-2006`; `oecd-seed-schemes-2026` |
| `validation_process_coverage` | Foreground process map | Require all required processes and every triggered conditional process; reconcile transfers between adjacent lot stages. |  |
| `validation_mass_moisture_balance` | Cultivation through final lot | Reconcile input, output, reject, residue, loss, and water-removal masses on their declared moisture bases; disclose measured discrepancy without forcing closure. | `mass-balance-identity` |
| `validation_n2o_method` | Managed-soil emissions | Require documented N activity data, selected IPCC tier/equations/factors, unit conversion, and separate direct/indirect pathways without double counting. | `ipcc-2019-managed-soils` |
| `validation_allocation` | Multifunctional outputs | Require the allocation hierarchy, data and rationale; all allocation shares must be nonnegative and sum to 1. | `eu-pef-2021` |
| `validation_reasoned_estimates` | Inventory and QA | Fail publication readiness if a reasoned-estimate QA range is used as a final inventory value, default, or conformance threshold. |  |
| `validation_data_quality` | Published dataset | Require completeness and methodological consistency plus technological, geographical, temporal, and precision disclosures. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Foreground data package for sorghum seed production, projected to LCA `process` datasets and connected `lifecyclemodel` systems |
| allowed_use | Modelling of sorghum seed production within the declared geography, crop year, route, seed class, treatment, packaging, storage, allocation, and quality state |
| excluded_use | Sorghum grain or sweet sorghum; downstream commercial-crop cultivation; seed-certification claims without evidence; geography-free substitution; using provisional QA ranges as inventory defaults or compliance thresholds |
| required_metadata | PCR id; CPC ref; reference UUIDs; geography; crop year; sites and technologies; lot and seed class; variety/hybrid status; quality tests; moisture basis; treatment; packaging; storage; process coverage; allocation; sources; data-quality assessment; limitations |
| required_quality_disclosure | Coverage and missing data; measurement and sampling methods; representativeness; factor tiers; unresolved UUIDs; exclusions; co-product treatment; uncertainty; any remaining reasoned-estimate QA screens |
| update_trigger | Change in variety/seed class, geography, crop year or route; material technology/input change; new seed-quality or regulatory requirement; revised emission factors; allocation change; source revision; or evidence that a QA screen is no longer appropriate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-07) | CPC 01141 seed-purpose inclusion and exclusions |
| `fao-qds-2006` | official_guidance | FAO, *Quality Declared Seed System*, Plant Production and Protection Paper 185, 2006, https://www.fao.org/4/a0503e/a0503e00.pdf (retrieved 2026-08-07) | Sorghum seed identity, field/lot controls, sampling, germination, purity, moisture, and quality-record requirements |
| `oecd-seed-schemes-2026` | standard | OECD, *Seed Schemes Rules and Regulations 2026*, https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/seeds/rules-and-regulation-eng.pdf (retrieved 2026-08-07) | Varietal certification scheme context, lot identity, control plots, field inspection, and labelling disclosures |
| `ipcc-2019-managed-soils` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf (retrieved 2026-08-07) | Direct and indirect N2O pathways, activity data, equations, and factor provenance |
| `eu-pef-2021` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-07) | Functional-unit framing, boundary completeness, allocation hierarchy, company-specific data, and data-quality dimensions |
| `mass-balance-identity` | method_factor | Conservation of mass and dry matter using measured mass and moisture fractions; PCR-authored physical identity | Lot normalization, drying-water calculation, and mass-balance validation |
