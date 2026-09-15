---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sorghum, other

## 1. Scope and Applicability

This PCR supports foreground data packages for non-seed sorghum grain production. It covers open-field cultivation and the on-farm activities needed to deliver the declared unprocessed grain at the farm gate. It is applicable to rainfed and irrigated routes and requires route, geography, season, cultivar or species, moisture basis, and residue management to be declared.

The PCR is not a default inventory. Seed, nutrient, water, crop-protection, energy, yield, loss, and emission values shall come from foreground records or from an explicitly declared, geographically and temporally representative method. Statistical or handbook values may be used for plausibility screening only unless their scope matches the foreground system.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other |
| classification_refs | CPC 3.0:01142, Sorghum, other (exact) |
| covered_products | Sorghum species, mainly Sorghum vulgare, S. guineense, and S. dura, grown for non-seed harvested grain and delivered as unprocessed grain at the farm gate |
| excluded_products | Sorghum grown specifically for seed; sweet sorghum (Sorghum saccharatum); forage-only or biomass routes not delivering the representative grain; processed sorghum products; downstream feed, food, beverage, or biofuel manufacture |
| representative_product | Harvested non-seed sorghum grain, unprocessed, at the farm gate |
| production_route | Annual open-field cultivation, rainfed or irrigated, with harvest and conditional on-farm cleaning, drying, and storage before the declared farm-gate point |
| market_state | Unprocessed harvested grain at a declared moisture content and declared cleanliness or grade |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net mass of harvested non-seed sorghum grain delivered at the declared farm-gate reference point |
| How much | 1,000 kg |
| How well | Product is not seed or sweet sorghum; moisture content, foreign matter or grade, and included conditioning are declared |
| How long or cycle | One declared crop cycle; the data period shall include the full rotation cycle when rotation materially affects inputs, yield, residues, or soil emissions |
| reference_flow_link | The final included foreground process shall provide exactly 1,000 kg of the Tiangong product flow stated below |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | geography; field or farm scope; crop year or season; cultivar or species; rainfed or irrigated route; rotation and prior land use; harvested area; harvest yield; harvest moisture; reference moisture; included cleaning, drying, or storage; residue fate; co-product allocation method |

When constructing a foreground data package, all required qualifiers shall be present in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the final included process to exactly 1,000 kg net sorghum mass at the declared reference moisture; preserve the measured as-received mass and moisture. |
| `moisture_basis` | Grain, screenings, and residues | Mass and moisture fraction | kg and kg water/kg wet material | Report whether each mass is wet, dry, or adjusted to a declared moisture; any conversion shall conserve dry matter and retain the measured moisture record. |
| `yield_area_basis` | Field cultivation | Mass and area | kg and ha | Record harvested area and gross and marketable mass before normalizing per 1,000 kg; do not infer area from a global average yield. |
| `nutrient_basis` | Fertilizers, manure, residues, and soil amendments | Product mass and nutrient mass | kg product and kg nutrient | Preserve product amount, nutrient analysis, and N/P/K basis separately; do not treat formulated product mass as nutrient mass. |
| `water_basis` | Irrigation water | Mass or metered volume | kg or m3 | Preserve the metered volume when available; if converted to mass, declare the density assumption and retain the raw reading. |
| `energy_basis` | Fuel, electricity, and heat | Delivered mass, volume, or energy | kg, L, kWh, or MJ | Preserve the purchased or metered unit and document all conversion factors and heating-value bases. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `include_cultivation_operations` | foreground field cultivation | Include land preparation, sowing, stand establishment, nutrient and soil-amendment application, crop protection, irrigation, field energy, harvest, and directly controlled field operations. | `fao-leap-feed-2016`; `icrisat-sorghum-handbook-2020` |
| `include_upstream_inputs` | purchased inputs | Record each purchased input crossing the foreground boundary and link it to a representative upstream dataset; do not replace a foreground quantity with a generic background amount. | `fao-leap-feed-2016` |
| `include_field_emissions` | managed field | Include applicable direct and indirect soil emissions, emissions from fertilizer and residue management, land-use or soil-carbon changes required by the study method, and direct on-farm combustion emissions not already represented elsewhere. | `fao-leap-feed-2016`; `ipcc-2019-managed-soils` |
| `conditional_postharvest` | on-farm post-harvest activities | Include cleaning, drying, handling, and storage only when performed before the declared farm-gate reference point, and reconcile incoming grain, outgoing grain, water loss, screenings, rejects, and other outputs. | `fao-leap-feed-2016`; `icrisat-sorghum-handbook-2020` |
| `exclude_downstream_processing` | downstream systems | Exclude transport after the declared farm gate and all milling, feed manufacture, food or beverage processing, biofuel conversion, use, and end-of-life unless the study explicitly adds those systems outside this PCR. | `fao-leap-feed-2016` |
| `justify_exclusions` | cut-off and omissions | Identify, quantify where practicable, and justify every excluded material, energy, emission, and process; exclusions shall not be used to hide a known material contributor. | `fao-leap-feed-2016` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed field at the start of the declared crop or rotation accounting period, with prior land use, soil condition, and standing crop-residue condition declared |
| starting_condition_role | Foreground starting condition for data collection; it does not erase prior land-use, soil-carbon, or rotation effects required by the chosen LCA method |
| product_classification_scope | CPC 3.0 01142 non-seed sorghum grain; seed sorghum, sweet sorghum, forage-only routes, and processed sorghum products remain outside this PCR |
| recursive_input_rule | Externally sourced non-seed sorghum grain used within the foreground system remains a visible product input with its own upstream dataset and shall not be treated as an origin-free instance of this PCR |
| upstream_dataset_requirement | Seed, fertilizers, manure or amendments carrying upstream burdens, crop-protection products, water supply, fuels, electricity, heat, machinery services, packaging, and transport to the farm shall use representative upstream datasets when they cross the system boundary |
| disclosure | Declare geography, field or farm coverage, crop year and rotation, cultivar or species, prior land use, rainfed or irrigated status, harvested area, yield, harvest and reference moisture, residue fate, included post-harvest operations, allocation, exclusions, and method or factor versions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | Sorghum field cultivation and harvest | required |  | Foreground crop establishment, management, harvest, and managed-soil emission accounting | Measured field and crop-cycle records normalized to the mass reaching the final included process |
| `on_farm_postharvest` | On-farm cleaning, drying, handling, and storage | conditional | Include when any operation occurs before the declared farm-gate reference point or changes product moisture, mass, cleanliness, or losses | Foreground conditioning and storage before delivery | Measured input-output and energy balance normalized to 1,000 kg final reference product |

### Process: Sorghum field cultivation and harvest (`field_cultivation`)

#### Inputs

##### Product flows

###### Sowing seed (`sorghum_seed`)

Record purchased or retained sowing seed entering the field process. The selected Tiangong flow is explicitly the seed product and is not the reference product.

- Selected flow: Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of viable seed sown, including re-sowing, allocated to the harvested area represented by the data package
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

###### Fertilizers, manure, and soil amendments (`nutrient_and_amendment_inputs`)

Record each product separately with formulation, nutrient content, application rate, placement, and timing. Select the exact Tiangong product flow for the reported formulation; no universal fertilizer UUID is prescribed by this PCR.

- Selected flow: Product-specific fertilizer, manure, lime, urea, or soil-amendment flow selected for the foreground record
- Flow property / unit: Mass / kg product and kg nutrient
- Amount rule: Measured purchased and applied product mass, nutrient analysis, and field allocation; include unused returns and losses separately where material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `fao-leap-feed-2016`

###### Crop-protection products (`crop_protection_inputs`)

Record herbicides, insecticides, fungicides, biological controls, and seed treatments separately by formulated product and active ingredient when applied.

- Selected flow: Product-specific crop-protection flow; generic Pesticide `23a65bba-3eb5-406c-ad26-6841bd151f9c` is a fallback identity only when no exact formulation flow exists
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: Measured formulated-product amount applied and active-ingredient content, including repeat applications
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `fao-leap-feed-2016`

###### Irrigation water (`irrigation_water`)

Record irrigation withdrawals and deliveries when the route is irrigated; keep source, withdrawal point, delivery point, and losses distinguishable.

- Selected flow: Irrigation water `7b6bcebb-c84d-46b1-9568-1c1c9c6c8701`
- Flow property / unit: Mass / kg, with raw metered m3 retained
- Amount rule: Metered or otherwise documented irrigation water delivered to the represented field, with conversion and conveyance boundary declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Sources: `fao-leap-feed-2016`

###### Diesel used by field machinery (`field_diesel`)

Record diesel consumed by directly controlled cultivation and harvest machinery. Do not also add direct combustion emissions when the linked combustion dataset already contains them.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg, with purchased L retained where applicable
- Amount rule: Measured fuel issue, purchase, or machine-use record allocated to the represented field operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

###### Electricity and other field energy (`field_other_energy`)

Record electricity, other fuels, and contracted machinery energy separately when used by irrigation, field operations, or harvest.

- Selected flow: Energy-carrier-specific Tiangong product flow matching the foreground record
- Flow property / unit: Energy or delivered product property / kWh, MJ, kg, or L
- Amount rule: Metered, invoiced, or equipment-log amount by energy carrier and operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested non-seed sorghum grain (`harvested_sorghum`)

Record gross and marketable harvested grain and moisture. This row carries the reference amount only when field cultivation is the final included foreground process.

- Selected flow: Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- Flow property / unit: Mass / kg
- Amount rule: Measured harvested mass adjusted only through the declared dry-matter-conserving moisture calculation; set final output to 1,000 kg when no later foreground process is included
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_outputs`

###### Harvested sorghum residues and co-products (`harvested_residues`)

Record straw, stover, panicles, or other harvested biomass only when removed from the field or managed as a co-product. Biomass retained or incorporated on the field remains in residue-management and emission calculations.

- Selected flow: Site-specific sorghum residue or biomass flow; no universal UUID is selected
- Flow property / unit: Mass / kg wet and kg dry matter
- Amount rule: Measured or calculated removed biomass by use and destination, with moisture and nutrient content retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_outputs`
- Sources: `fao-leap-feed-2016`; `ipcc-2019-managed-soils`

##### Waste flows

###### Field and harvest wastes leaving the field (`field_wastes`)

Record destroyed grain, collected contaminated material, packaging, and other waste only when it crosses the field-process boundary; retain destination and treatment route.

- Selected flow: Waste-specific Tiangong flow matching the recorded material and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_outputs`

##### Elementary flows

###### Direct and indirect nitrous oxide from managed soil (`managed_soil_n2o`)

Calculate direct and indirect N2O from applicable synthetic and organic N inputs, crop-residue N, mineralization terms, volatilization, and leaching or runoff according to the declared IPCC tier or a justified regional method.

- Selected flow: nitrous oxide `29061478-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply the declared IPCC or reviewed regional equations to collected N activity data, retain N2O-N intermediate results, and convert N2O-N to N2O with 44/28
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_emission_activity`
- Sources: `ipcc-2019-managed-soils`
- Range: IPCC aggregated EF1 uncertainty screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.002
  - Upper: 0.018
  - Unit: kg N2O-N/kg applicable N input
  - Basis: per kg N entering the applicable direct managed-soil EF1 term; use disaggregated or higher-tier factors when required
  - Basis kind: N input (`n_input`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ipcc-2019-managed-soils`

###### Ammonia and nitrogen volatilization (`managed_soil_ammonia`)

Record ammonia or other volatilized N needed by the chosen direct and indirect emission method without duplicating background fertilizer-manufacturing emissions.

- Selected flow: ammonia `08a91e70-3ddc-11dd-96ae-0050c2490048`
- Flow property / unit: Mass / kg NH3 or kg N, as required by the selected method
- Amount rule: Calculate from collected N application by fertilizer or amendment type using the declared method and partitioning factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Nitrogen leaching and runoff (`managed_soil_n_leaching`)

Record nitrogen leaching and runoff only where the declared method and site conditions indicate that the pathway occurs.

- Selected flow: Compartment-specific nitrogen or nitrate elementary flow selected for the receiving water compartment
- Flow property / unit: Mass / kg N or kg nitrate, with species basis declared
- Amount rule: Calculate from collected N activity data and the declared leaching or runoff method; preserve the conversion between N and chemical-species mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: N input (`n_input`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_emission_activity`
- Sources: `ipcc-2019-managed-soils`

###### Carbon dioxide from lime and urea application (`lime_urea_co2`)

Record CO2 from lime and urea application when those products are used and the chosen inventory method requires the pathway.

- Selected flow: Compartment-specific carbon dioxide elementary flow selected for the declared method
- Flow property / unit: Mass / kg CO2
- Amount rule: Calculate from collected lime and urea application by product type using the declared IPCC or reviewed regional method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_emission_activity`
- Sources: `ipcc-2019-managed-soils`

### Process: On-farm cleaning, drying, handling, and storage (`on_farm_postharvest`)

#### Inputs

##### Product flows

###### Harvested sorghum entering on-farm conditioning (`incoming_harvested_sorghum`)

Record the internal transfer from field cultivation and any separately sourced grain. Separately sourced grain remains visible with its own upstream dataset.

- Selected flow: Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- Flow property / unit: Mass / kg
- Amount rule: Measured incoming mass, moisture, and source lot before cleaning, drying, or storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg final reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_balance`

###### Electricity and thermal energy for conditioning (`postharvest_energy`)

Record each electricity, fuel, and heat carrier used for cleaning, conveying, drying, aeration, and storage.

- Selected flow: Energy-carrier-specific Tiangong product flow matching the foreground record
- Flow property / unit: Energy or delivered product property / kWh, MJ, kg, or L
- Amount rule: Metered, invoiced, or equipment-log amount by operation and energy carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conditioned sorghum output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_balance`
- Sources: `fao-leap-feed-2016`; `icrisat-sorghum-handbook-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned sorghum at the farm gate (`farm_gate_sorghum`)

This is the reference product when on-farm post-harvest conditioning is included.

- Selected flow: Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1,000 kg net output at the declared reference moisture and cleanliness or grade
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Range: Reference-flow conformance interval
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: final reference product at declared reference moisture
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Screenings, rejected grain, and post-harvest waste (`postharvest_waste`)

Record removed foreign matter, screenings, spoiled grain, dust collected as waste, and packaging waste separately by destination; saleable co-products remain product outputs.

- Selected flow: Waste-specific Tiangong flow matching the material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated output by type, moisture, and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned sorghum output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_balance`

##### Elementary flows

###### Water removed during drying (`drying_water_release`)

Calculate water removed from the measured incoming and outgoing grain moisture balance; do not count it as product loss.

- Selected flow: Compartment-appropriate water or water-vapour elementary flow when required by the dataset convention
- Flow property / unit: Mass / kg water
- Amount rule: Dry-matter-conserving difference between incoming and outgoing grain water plus separately measured water releases
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned sorghum output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_balance`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation_by_subdivision` | separable fields, operations, lots, and products | Subdivide field, harvest, and post-harvest records wherever the relevant inputs and outputs can be separately measured. | `fao-leap-feed-2016` |
| `apply_biophysical_causality` | inseparable joint production | When subdivision is not feasible, prefer a documented biophysical causal relationship that reflects how inputs and emissions change with the joint products. | `fao-leap-feed-2016` |
| `fallback_economic_allocation` | inseparable co-products without defensible biophysical causality | Use representative economic allocation only when a causal basis is unavailable; declare price source, geography, averaging period, moisture and quality basis, and sensitivity. | `fao-leap-feed-2016` |
| `residue_status_decision` | sorghum straw, stover, screenings, and other residues | Classify each residue as retained biomass, waste, or co-product according to actual management and market function before allocation; a residue left on the field is not a zero-burden exported product. | `fao-leap-feed-2016`; `ipcc-2019-managed-soils` |
| `allocation_mass_balance` | allocated output set | Apply one allocation rule to a complete, moisture-consistent output set and verify that allocated shares sum to one; report unallocated results when required for review. | `fao-leap-feed-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_cultivation` | seed, fertilizers, amendments, crop protection, irrigation, fuel, electricity, and other field energy | invoices, issue logs, application logs, meter readings, machinery logs | field_id; operation; date; product_id; formulation; nutrient_or_active_content; quantity; raw_unit; treated_area; irrigation_source; meter_start; meter_end; equipment | Reconcile purchase, stock, application, meter, and machinery records to each represented field and crop cycle | kg; kg nutrient; kg active ingredient; m3; L; kWh; MJ; ha | Each application or operation | Full crop cycle and full rotation period where material | All fields and directly controlled operations represented by the package | Sum by field, product, and operation; convert only with documented factors; normalize after yield and allocation are resolved | invoices; calibrated-meter records; application logs; equipment logs; stock reconciliation |
| `cp_harvest_outputs` | `field_cultivation` | harvested grain, residues, co-products, and field waste | weighbridge tickets, yield monitor, moisture tests, area records, destination logs | field_id; harvest_date; harvested_area; gross_mass; marketable_mass; moisture; residue_mass; residue_moisture; destination; waste_mass | Reconcile harvested mass and area across all represented fields and retain moisture by lot | kg; kg dry matter; fraction moisture; ha | Each harvest lot | Complete harvest for the represented crop cycle | All represented fields and storage-transfer points | Sum by lot and field; conserve dry matter for moisture conversion; retain excluded and lost masses | scale calibration; moisture-method record; ticket or yield-monitor export; destination evidence |
| `cp_emission_activity` | `field_cultivation` | managed-soil N2O, volatilization, leaching or runoff, and lime or urea CO2 | nutrient applications, residue records, soil and climate data, method parameters | N_by_source; application_date; fertilizer_type; organic_N; residue_dry_mass; residue_N_content; lime_type_mass; urea_mass; soil_class; climate_class; leaching_condition; factor_id | Assemble activity data from `cp_field_inputs` and `cp_harvest_outputs`; select one declared IPCC tier or reviewed regional method and retain every factor | kg N; kg product; kg dry matter; kg C; dimensionless factors | Each activity event, aggregated once per crop cycle | Full crop cycle and method-required lag or rotation period | All represented managed fields | Apply equations once per pathway; retain N2O-N before 44/28 conversion and prevent overlap between direct and indirect terms | source records; factor table and version; formula workbook or reproducible calculation; reviewer check |
| `cp_postharvest_balance` | `on_farm_postharvest` | incoming grain, conditioned grain, energy, screenings, waste, and water removal | scale tickets, moisture tests, meters, fuel and heat logs, storage records | lot_id; input_mass; input_moisture; output_mass; output_moisture; screenings_mass; reject_mass; energy_carrier; energy_amount; storage_days; destination | Maintain lot-level input-output, moisture, and energy balance for each included operation | kg; fraction moisture; kWh; MJ; L; day | Each lot and meter period | All included conditioning and storage before farm gate | All on-farm equipment and stores represented by the package | Conserve dry matter, sum energy by carrier and operation, and normalize to final output | calibrated scales and moisture meter; utility or fuel records; lot reconciliation; storage log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all foreground inventory rows | normalized amount = crop-cycle amount × 1,000 kg / allocated final sorghum mass at reference moisture | crop-cycle amount; allocated final mass; reference moisture | amount per 1,000 kg reference product |  |
| `convert_moisture_basis` | grain and biomass mass | m_at_reference = m_measured × (1 - moisture_measured) / (1 - moisture_reference); use mass fractions and retain both moisture observations | measured wet mass; measured moisture fraction; reference moisture fraction | mass at declared reference moisture |  |
| `calculate_ipcc_managed_soil_emissions` | managed-soil N pathways | Apply the declared IPCC tier or reviewed regional equations to synthetic and organic N, crop-residue N, applicable soil-N mineralization, volatilization, and leaching or runoff; convert N2O-N to N2O using 44/28 | N activity data; residue data; soil and climate class; method factors | direct and indirect N2O plus reported N pathways | `ipcc-2019-managed-soils` |
| `calculate_lime_urea_co2` | lime and urea application | Apply the declared IPCC or reviewed regional method separately by lime material and urea mass; do not merge this pathway with upstream manufacture | lime mass and type; urea mass; method factors | field CO2 from lime and urea application | `ipcc-2019-managed-soils` |
| `calculate_allocation_shares` | inseparable co-products | Derive shares from the declared causal or economic basis and divide each product basis by the sum across the complete co-product set | complete co-product quantities; causal parameter or representative prices | allocation shares summing to 1 | `fao-leap-feed-2016` |
| `screen_yield_context` | reported field yield | Compare foreground yield only with matching geography, crop definition, and period in an official dataset; a difference is a review flag, not a replacement value or conformance failure | foreground yield; geography; year; official comparator | documented plausibility review | `faostat-crops-livestock` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | Product identity, Tiangong UUID, flow type, classification, property, and unit shall match the actual material or service; fallback identities shall be disclosed. | UUID readback and product or supplier specification |
| `dq_primary_foreground` | directly controlled processes | Use primary activity data for foreground field and on-farm post-harvest processes wherever possible. | source-record index and data-collection coverage statement |
| `dq_temporal` | crop and rotation data | Cover the full crop cycle and the full rotation when material; use multiple-year data or disclose variability when one year is not representative. | crop calendar, rotation record, represented years, and variability statement |
| `dq_geography_technology` | all inputs and operations | Represent the actual geography, irrigation route, cultivation practice, equipment, energy carriers, and post-harvest technology. | field list, technology description, and upstream dataset selection record |
| `dq_completeness` | inventory | Reconcile all relevant resources, emissions, products, residues, and wastes within the boundary and document every exclusion. | material and energy balance, system diagram, and exclusion register |
| `dq_precision_uncertainty` | measured and calculated values | Retain instrument resolution, sampling method, variability, assumptions, and uncertainty or a justified range for material values. | calibration, sampling and uncertainty records |
| `dq_method_traceability` | calculated emissions and allocation | Retain method name, version, factor source, equations, intermediate values, and allocation sensitivity. | reproducible calculation artifact and factor register |
| `dq_moisture_balance` | grain and residues | Retain measured moisture and dry-matter balance for every conversion, loss, or conditioning step. | moisture tests and lot-level mass-balance record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | final reference flow | Require product flow `ff8b6c96-9f97-4952-8832-abfbc4295b65`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and exactly 1,000 kg from one final included foreground process. | `unsd-cpc-3-01142` |
| `validate_product_scope` | product classification | Reject seed sorghum, sweet sorghum, forage-only routes, and processed sorghum products as the reference product for this PCR. | `unsd-cpc-3-01142` |
| `validate_required_qualifiers` | dataset metadata | Fail conformance when any required reference-flow qualifier is missing or when harvest and reference moisture are ambiguous. | `fao-leap-feed-2016`; `icrisat-sorghum-handbook-2020` |
| `validate_process_completeness` | process inventory | Require field cultivation and harvest; require post-harvest records when conditioning or storage occurs before farm gate; require upstream links for purchased inputs and justified exclusions. | `fao-leap-feed-2016` |
| `validate_mass_moisture_balance` | field and post-harvest outputs | Reconcile dry matter across grain, residues, co-products, wastes, screenings, and water removal; unexplained imbalance shall be investigated and disclosed. | `icrisat-sorghum-handbook-2020` |
| `validate_allocation` | co-product systems | Require subdivision or a declared allocation basis, a complete output set, shares summing to one, and sensitivity when economic allocation is used. | `fao-leap-feed-2016` |
| `validate_emission_method` | managed-soil and amendment emissions | Require complete activity data, one non-overlapping declared method, explicit factor versions, correct N and chemical-species conversions, and 44/28 conversion from N2O-N to N2O. | `ipcc-2019-managed-soils` |
| `validate_no_double_counting` | energy and field emissions | Reject double counting between product-input background datasets, direct combustion, managed-soil pathways, and post-harvest operations. | `fao-leap-feed-2016`; `ipcc-2019-managed-soils` |
| `validate_data_quality` | foreground package | Require evidence for representativeness, completeness, consistency, precision or uncertainty, methodological appropriateness, source coverage, and every proxy. | `fao-leap-feed-2016` |
| `validate_screening_values` | QA ranges and statistical comparisons | Treat ranges and external yield comparisons as QA flags only; they shall not overwrite foreground values or become conformance thresholds unless a reviewed geography-specific rule explicitly says so. | `faostat-crops-livestock`; `ipcc-2019-managed-soils` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground agricultural production package eligible, after review, for publication as a secondary_dataset or background_dataset |
| downstream_use | Process and lifecyclemodel construction for farm-gate non-seed sorghum grain and downstream systems that consume it |
| allowed_use | Attributional LCA, supply-chain modelling, hotspot analysis, and non-comparative reporting within the declared geography, time, technology, moisture, and allocation scope |
| excluded_use | Seed production, sweet or forage sorghum, processed products, unsupported geography or technology transfer, and public comparative assertions without applicable review requirements |
| required_metadata | PCR id and version; product and Tiangong identities; geography; field and farm scope; crop year and rotation; cultivar or species; prior land use; irrigation route; area and yield; moisture basis; included operations; residue fate; allocation; upstream dataset identities; method and factor versions |
| required_quality_disclosure | Primary-data coverage; temporal, geographic, and technological representativeness; exclusions and proxies; mass and moisture reconciliation; uncertainty; emission-factor tier; allocation sensitivity; unresolved identities and range gaps |
| update_trigger | Material change in product scope, Tiangong identity, cultivation or conditioning route, geography, yield or moisture basis, allocation, emission method, evidence, or foreground-data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-01142` | Standard (`standard`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 01142, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-07) | Product scope, included sorghum species, and exclusions for seed and sweet sorghum |
| `fao-leap-feed-2016` | Official guidance (`official_guidance`) | FAO LEAP Partnership, Environmental performance of animal feeds supply chains: Guidelines for assessment, 2016, https://openknowledge.fao.org/server/api/core/bitstreams/040bf0e7-e652-4eda-807c-37172c403671/content (retrieved 2026-08-07) | Crop-production boundary, activity coverage, foreground data, allocation order, completeness, uncertainty, and data-quality rules |
| `ipcc-2019-managed-soils` | Official guidance (`official_guidance`) | IPCC, 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf (retrieved 2026-08-07) | Managed-soil direct and indirect N2O pathways, N activity data, crop residues, volatilization, leaching or runoff, lime and urea CO2, and EF1 screening range |
| `icrisat-sorghum-handbook-2020` | Handbook (`handbook`) | ICRISAT, Handbook on Sorghum Production for North Eastern Nigeria, https://oar.icrisat.org/11531/1/Handbook%20on%20Sorghum%20production%20for%20NE%20printed%20version.pdf (retrieved 2026-08-07) | Sorghum-specific candidate operations from land preparation through harvest, drying, and storage; moisture and storage context; not used as a universal input-rate default |
| `faostat-crops-livestock` | Dataset (`dataset`) | FAO, FAOSTAT Production: Crops and livestock products, https://data.apps.fao.org/catalog/dataset/crop-production-yield-harvested-area-and-processed-global-national-annual-faostat (retrieved 2026-08-07) | Geography- and year-matched harvested-area, production, and yield plausibility context; not a foreground replacement or conformance threshold |
