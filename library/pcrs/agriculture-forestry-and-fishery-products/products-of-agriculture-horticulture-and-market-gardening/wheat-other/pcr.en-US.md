---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wheat, other

## 1. Scope and Applicability

This PCR covers wheat grain not intended for sowing and classified as CPC 3.0 code 01112, including common wheat, durum wheat, club wheat, red durum wheat, and another declared wheat type when it belongs to that classification leaf. It supports foreground data packages from field preparation and crop establishment through harvest, drying, cleaning, handling, and the conditioning or tempering needed to produce the selected Tiangong reference product at the conditioning gate.

Wheat grown for sowing, flour, semolina, bran, straw sold as a separate product, and other processed wheat products are outside the canonical product identity. Seed, collected straw, and other products may nevertheless appear as input or co-product flows when they cross a modelled process boundary. Downstream milling, food manufacture, retail, use, and end-of-life are excluded.

The foreground data package shall declare geography, crop season, species or cultivar, intended use, irrigation regime, tillage and rotation context, moisture basis, market grade, postharvest operations, and final gate. Product quality claims for grain intended for human-food processing shall be checked against the applicable destination rules. CXS 199-1995 provides the default specification only for the common-wheat and durum-wheat products within its stated scope; club wheat, red durum wheat, and any other excluded type require a separately identified applicable specification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other |
| classification_refs | CPC 3.0:01112 Wheat, other |
| covered_products | Wheat grain not intended for sowing within CPC 3.0 code 01112, including common wheat, durum wheat, club wheat, red durum wheat, and another declared wheat type; harvested, dried, cleaned, handled, or conditioned grain where those operations are declared |
| excluded_products | Wheat seed for sowing; flour; semolina; bran; straw as the declared product; foods and other manufactured wheat products |
| representative_product | Tempered wheat grain conditioned for milling |
| production_route | Field cultivation, harvest, postharvest drying and cleaning, and declared conditioning or tempering |
| market_state | Bulk saleable grain at the declared farm, storage, or conditioning gate; moisture, grade, destination, and conditioning status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Non-seed wheat grain delivered as tempered grain conditioned for milling |
| How much | 1,000 kg net saleable grain on the declared as-received moisture basis |
| How well | Wheat suitable for its declared processing use; for common wheat and durum wheat intended for human-food processing within the scope of CXS 199-1995, moisture is not above 14.5% m/m and that standard's quality and safety qualifiers apply; other wheat types follow their separately declared destination specification |
| How long or cycle | One declared crop cycle and its associated postharvest conditioning lot; storage beyond the declared gate is excluded unless explicitly modelled |
| reference_flow_link | The quantity of the reference product output row `tempered_wheat_reference_product` equals 1,000 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Tempered wheat grain `78bd12e1-801c-4f96-a880-dba39e22783c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or cultivar; seed status; intended use; geography; crop season; irrigation regime; tillage and rotation context; moisture content and measurement method; market grade; drying and cleaning status; tempering status; final gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all grain mass balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the reference amount as net saleable grain mass. Packaging, vehicle tare, and rejected material are excluded from reference mass. |
| `moisture_basis` | Grain inputs, intermediate grain, and reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and % m/m moisture | Preserve measured as-received mass and moisture. If masses are converted to a common moisture basis, use dry matter conservation and retain both measured and converted values. For common wheat and durum wheat intended for human-food processing within its stated scope, validate the final lot against the 14.5% m/m maximum in `codex-cxs-199-1995`; otherwise apply the separately declared destination specification. |
| `area_normalization` | Area-based cultivation records | Area | ha | Normalize each crop-cycle amount to 1,000 kg reference product as amount per hectare multiplied by 1,000 and divided by net saleable grain yield in kg per hectare. |
| `nutrient_mass` | Mineral and organic nutrient inputs | Nutrient mass | kg N, kg P2O5, or kg K2O | Record both product mass and declared nutrient analysis; never substitute formulated product mass for nutrient mass in emission calculations. |
| `energy_consistency` | Fuel, electricity, drying, and handling energy | Energy or fuel mass/volume | MJ, kWh, kg, or L | Preserve the measured billing or meter unit and document any lower-heating-value or electricity conversion factor used for normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Field prepared for sowing at the start of the declared crop cycle, with prior land use, previous crop, soil condition, and retained residue state declared |
| starting_condition_role | Foreground cultivation starting gate |
| product_classification_scope | CPC 3.0 code 01112 non-seed wheat grain; CPC 01111 wheat seed is an upstream input category, not the reference product |
| recursive_input_rule | If a CPC 01112 wheat product enters the foreground system, record it once at the physical receiving process and link a separate upstream dataset; do not expand another copy of this PCR inside the same foreground package |
| upstream_dataset_requirement | Purchased seed, fertilisers, amendments, crop-protection products, fuels, electricity, water supply, and transport services require geographically and temporally appropriate upstream datasets |
| disclosure | Declare land-use history, crop rotation, tillage, irrigation, fertiliser and residue management, yield, grain moisture, co-product treatment, postharvest operations, storage duration included, and final gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | foreground_system_boundary | Include field preparation, sowing, crop husbandry, irrigation where used, fertiliser and crop-protection application, harvest, and the postharvest operations needed to reach the declared reference grain state. | `fao-leap-animal-feeds-2016` |
| `boundary_upstream_inputs` | upstream_dataset_links | Link upstream production and delivery datasets for every purchased material and energy input; keep the on-farm or postharvest use in the foreground inventory. | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |
| `boundary_field_emissions` | direct_field_emissions | Include direct and indirect nitrogen emissions from managed soil, crop-residue nitrogen returned to soil, and CO2 from lime and urea when applicable; apply a declared IPCC tier or a reviewed regional method without double counting. | `ipcc-2019-managed-soils` |
| `boundary_postharvest_gate` | postharvest_operations | Include drying, cleaning, handling, storage, and tempering only to the declared gate; disclose excluded storage or conditioning and do not include milling or food manufacture. | `codex-cxs-199-1995`; `eu-pef-2021-2279` |
| `boundary_data_gaps` | completeness | Do not omit an environmentally relevant flow solely because primary data are missing. Use a documented proxy or provisional estimate, disclose the gap and uncertainty, and prioritize replacement with primary data. | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_cultivation` | Wheat cultivation and harvest | required |  | Foreground crop production; Tiangong process `d145ea84-0aa6-4fca-a8f8-99ef3684d016` | One declared crop cycle and measured harvested grain output |
| `postharvest_conditioning` | Grain drying, cleaning, handling, and tempering | required |  | Foreground postharvest preparation; Tiangong processes `7279cfd0-c54b-4799-b15b-3564219d1907` and `e080aa90-8ea0-473d-881e-1fcc99d84ee0` | 1,000 kg net saleable tempered wheat grain |

### Process: Wheat cultivation and harvest (`crop_cultivation`)

#### Inputs

##### Product flows

###### Wheat seed for sowing (`wheat_seed_input`)

Record purchased or retained sowing seed that enters the crop cycle. The exact seed flow UUID remains to be selected for the declared seed type and geography.

- Selected flow: Wheat seed for sowing
- Flow property / unit: Mass / kg
- Amount rule: measured seed issued to the declared field area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable grain output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Range: Provisional broad seeding-rate screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 350
  - Unit: kg/ha
  - Basis: seed applied per cultivated hectare in the declared crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilisers and soil amendments (`fertiliser_and_amendment_inputs`)

Record each mineral fertiliser, manure, compost, lime, urea, and other amendment separately with product mass, nutrient analysis, application date, and field area.

- Selected flow: Fertiliser and soil amendment products
- Flow property / unit: Mass / kg product and kg declared nutrient
- Amount rule: measured purchased, issued, or applied mass reconciled to field application records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable grain output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Range: Provisional aggregate nutrient-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 800
  - Unit: kg declared nutrient/ha
  - Basis: aggregate N, P2O5, and K2O applied per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_inputs`)

Record formulated herbicide, fungicide, insecticide, growth regulator, and seed-treatment products separately, including active ingredient concentration where available.

- Selected flow: Crop-protection products
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: measured issued or applied formulated product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable grain output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Range: Provisional broad formulated-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg formulated product/ha
  - Basis: total crop-protection product applied per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Include irrigation water only where irrigation occurs. Record both delivered water and, where required by the study, the resource withdrawal and source type without double counting.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Amount rule: metered, pump-runtime-derived, or water-account volume delivered to the field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable grain output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_inputs`
- Range: Provisional irrigation-volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12000
  - Unit: m3/ha
  - Basis: irrigation water delivered per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Field fuel and energy (`field_energy_inputs`)

Record diesel, gasoline, electricity, and other energy carriers separately by operation; retain physical purchase or meter units and the conversion used to aggregate energy.

- Selected flow: Field fuel and electricity supply
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel issue and electricity meter records converted to MJ with disclosed factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable grain output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_crop_inputs`
- Range: Provisional aggregate field-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50000
  - Unit: MJ/ha
  - Basis: aggregate direct field energy per cultivated hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested wheat grain (`harvested_wheat_output`)

Record gross harvested grain and the net saleable quantity after field-level rejects. Moisture shall be measured for every represented lot.

- Selected flow: Harvested non-seed wheat grain
- Flow property / unit: Mass / kg
- Amount rule: measured scale-ticket or calibrated mass record for harvested and saleable grain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cultivated hectare and per crop cycle
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_outputs`
- Sources: `faostat-ag-production-2000-2020`; `fao-wheat-crop-information`
- Range: Provisional broad yield plausibility screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 9
  - Unit: t/ha
  - Basis: deliberately broad screen informed by reported regional means and good-irrigated yield context; replace with reviewed regional evidence and do not treat as an allowed conformance interval
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected straw or other crop co-product (`collected_crop_coproduct`)

Record straw or another crop product only when it is intentionally collected and leaves the field as a product. Residue left or incorporated in soil is not an output product.

- Selected flow: Collected wheat straw or declared crop co-product
- Flow property / unit: Mass / kg dry matter
- Amount rule: measured or calculated collected dry mass, excluding residue returned to soil
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable grain output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_outputs`
- Range: Provisional collected-residue mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg dry matter/kg net saleable grain
  - Basis: collected residue dry mass relative to saleable grain mass
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Managed-soil nitrogen emissions (`managed_soil_n_emissions`)

Calculate direct and indirect N2O and associated nitrogen-loss pathways from collected nitrogen inputs, residue management, and regional conditions using the declared IPCC tier or an accepted regional method.

- Selected flow: Nitrous oxide and associated managed-soil nitrogen emissions by compartment
- Flow property / unit: Mass / kg emitted substance
- Amount rule: calculated separately for direct N2O, volatilization and deposition, and leaching and runoff pathways
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable grain output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nitrogen_activity`
- Sources: `ipcc-2019-managed-soils`
- Range: Non-negative method constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: not fixed by this PCR
  - Unit: kg emitted substance/ha
  - Basis: calculated emission per cultivated hectare and crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-managed-soils`

###### Carbon dioxide from lime and urea (`lime_urea_co2`)

Calculate CO2 from lime and urea application when those inputs occur, using collected application masses and the selected IPCC method.

- Selected flow: Carbon dioxide to air from lime and urea application
- Flow property / unit: Mass / kg CO2
- Amount rule: calculated from collected lime and urea application mass and declared carbon-content or default factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable grain output
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nitrogen_activity`
- Sources: `ipcc-2019-managed-soils`
- Range: Non-negative method constraint
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: not fixed by this PCR
  - Unit: kg CO2/ha
  - Basis: calculated emission per cultivated hectare and crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `ipcc-2019-managed-soils`

### Process: Grain drying, cleaning, handling, and tempering (`postharvest_conditioning`)

#### Inputs

##### Product flows

###### Harvested wheat received (`received_wheat_input`)

Record the measured mass and moisture of each received lot and reconcile it with the cultivation output or an upstream wheat dataset.

- Selected flow: Harvested non-seed wheat grain
- Flow property / unit: Mass / kg
- Amount rule: measured received mass by lot before cleaning and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable tempered grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_inputs`
- Range: Provisional received-to-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.95
  - Upper: 1.30
  - Unit: kg received grain/kg reference product
  - Basis: as-received grain before cleaning, drying, and tempering
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning water (`conditioning_water_input`)

Record water added during tempering and any separately metered cleaning water. Do not infer water uptake from grain mass difference without a moisture balance.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water addition by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable tempered grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_inputs`
- Range: Provisional tempering-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg water/kg reference product
  - Basis: water added during declared cleaning and tempering operations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Postharvest energy (`postharvest_energy_input`)

Record electricity and fuels separately for drying, conveying, aeration, cleaning, handling, and tempering.

- Selected flow: Electricity and fuel supply for postharvest operations
- Flow property / unit: Energy / MJ
- Amount rule: measured meters, invoices, or equipment logs converted to MJ with disclosed factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable tempered grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_inputs`
- Range: Provisional postharvest-energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: MJ/kg reference product
  - Basis: aggregate direct postharvest energy through the declared gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tempered wheat reference product (`tempered_wheat_reference_product`)

This is the declared reference product after the included drying, cleaning, handling, and tempering operations.

- Selected flow: Tempered wheat grain `78bd12e1-801c-4f96-a880-dba39e22783c`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1,000 kg net saleable product on the declared moisture basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: PCR reference product amount
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)

##### Waste flows

###### Screenings and rejected grain (`screenings_and_rejects`)

Record screenings, stones, dust collected as waste, and grain rejected from the saleable product. Material sold or used as a co-product shall be recorded as a product flow instead.

- Selected flow: Wheat cleaning screenings and rejects
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or collected waste mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable tempered grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_outputs`
- Range: Provisional cleaning-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg waste/kg received grain
  - Basis: waste and rejects relative to received grain mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Uncaptured grain dust (`grain_dust_to_air`)

Record measured or calculated uncaptured particulate emissions from drying, conveying, and cleaning; do not include dust already counted in collected screenings.

- Selected flow: Particulate matter to air from grain handling
- Flow property / unit: Mass / kg
- Amount rule: measured emissions or calculated emissions from equipment-specific factors and throughput
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable tempered grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_outputs`
- Range: Provisional dust-emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg particulate/kg received grain
  - Basis: uncaptured dust relative to received grain mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional_processes | Avoid allocation by subdividing cultivation and postharvest operations and assigning directly measured inputs, outputs, and emissions to the product or operation that causes them. | `eu-pef-2021-2279` |
| `allocation_crop_coproducts` | collected_straw_and_other_coproducts | Residue returned to soil receives no product allocation. When straw or another co-product leaves the field and subdivision is not possible, apply a documented physical relationship that reflects causality; if no defensible physical relationship exists, use economic allocation with geography- and period-specific prices and report sensitivity. | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |
| `allocation_rotation` | shared_rotation_operations | Assign crop-specific operations directly. Allocate genuinely shared multi-crop or multi-year operations by the physical driver such as treated area, operation time, or measured use, and disclose the chosen driver and period. | `fao-leap-animal-feeds-2016` |
| `allocation_waste` | postharvest_rejects | Treat material without an intended market or internal productive use as waste. If screenings or rejected grain are sold or used productively, reclassify them as product flows and apply the multifunctionality hierarchy. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_inputs` | `crop_cultivation` | Seed, fertiliser, amendment, crop-protection, irrigation, fuel, and electricity inputs | invoices, issue logs, application logs, meters, field records | product identity; quantity; nutrient or active-ingredient analysis; field area; date; operation; meter or invoice id | reconcile purchases and issues to field application and meter records | native unit plus kg, m3, kWh, or MJ after documented conversion | each application or operation | full declared crop cycle | every represented field or homogeneous field group | sum by product and field, then normalize by net saleable grain yield | invoice or issue record, calibrated meter, application log, field map, and conversion factor source |
| `cp_harvest_outputs` | `crop_cultivation` | Harvested grain and collected crop co-products | scale tickets, yield monitor, moisture tests, field and storage logs | gross mass; net mass; moisture; field area; lot id; reject mass; collected straw mass and dry-matter fraction | calibrated scale or validated yield monitor reconciled to storage receipts | kg, % m/m moisture, ha | each harvest lot | complete harvest period for the declared crop cycle | every represented field and storage receiving point | sum lot dry matter and as-received mass separately; retain yield-weighted moisture | scale calibration, moisture-meter calibration, lot reconciliation, and field-to-store mass balance |
| `cp_nitrogen_activity` | `crop_cultivation` | Managed-soil nitrogen and carbon activity data | fertiliser records, amendment analysis, yield and residue records, soil and management records | synthetic N; organic N; residue yield and N content; removal fraction; urea; lime; soil type; climate; irrigation; method tier | compile activity data required by the declared IPCC or accepted regional method | kg N, kg product, kg dry matter, ha | each application and annual crop-cycle calculation | full crop cycle and applicable emission period | each represented field or homogeneous emission stratum | calculate by stratum, sum emissions, then normalize by saleable grain output | source records, laboratory analyses, method version, factors, equations, and independent calculation check |
| `cp_postharvest_inputs` | `postharvest_conditioning` | Received grain, conditioning water, electricity, and fuel | receiving tickets, moisture tests, water and energy meters, invoices, batch logs | lot id; received mass and moisture; water added; electricity; fuel; operation; start and end time | calibrated scale, moisture test, meter, invoice, or equipment log | kg, % m/m moisture, m3, kWh, MJ | each lot and billing period | all lots and operations represented by the dataset | each represented receiving and conditioning site | allocate shared meter totals by measured throughput or operating time and disclose method | scale and meter calibration, invoices, batch sheets, and meter reconciliation |
| `cp_postharvest_outputs` | `postharvest_conditioning` | Saleable grain, screenings, rejects, and dust | dispatch tickets, moisture and grade tests, waste tickets, emission measurements or equipment factors | saleable mass; moisture; grade; waste mass; disposition; particulate result or factor; throughput | calibrated scale and laboratory or inspection records; measured emissions preferred | kg and % m/m moisture | each finished lot and waste movement | all represented postharvest lots | each represented dispatch, storage, and waste-handling site | reconcile incoming grain, water addition, saleable output, waste, and moisture change on wet and dry bases | scale calibration, test report, waste receipt, mass-balance check, and factor source where used |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all crop-cycle and process amounts | Normalized amount = recorded amount multiplied by 1,000 divided by net saleable reference-product mass in kg on the same moisture basis | recorded amount; net saleable grain mass; moisture basis | amount per 1,000 kg reference product |  |
| `calc_moisture_conversion` | grain mass conversion | Dry matter = as-received mass multiplied by one minus moisture fraction. Converted mass at target moisture = dry matter divided by one minus target moisture fraction. | as-received mass; measured moisture; target moisture | dry matter and explicitly labelled converted mass | `codex-cxs-199-1995` |
| `calc_managed_soil_emissions` | managed-soil nitrogen emissions | Apply the declared IPCC tier equations to synthetic and organic N, crop-residue N, volatilization, deposition, leaching, and runoff activity data; convert N2O-N to N2O where required and prevent double counting across pathways. | nitrogen activity fields; residue data; regional conditions; selected factors | direct and indirect N2O and associated nitrogen-loss flows | `ipcc-2019-managed-soils` |
| `calc_lime_urea_co2` | lime and urea application | Calculate CO2 from collected lime and urea application amounts using the declared IPCC carbon-content or emission factors. | lime type and mass; urea mass; selected factors | kg CO2 per crop cycle | `ipcc-2019-managed-soils` |
| `calc_postharvest_mass_balance` | postharvest conditioning | Reconcile received dry matter with saleable-product dry matter, collected co-products, wastes, and measured losses; water addition and removal shall be reported separately from dry-matter loss. | received and output masses; moisture; water addition; waste and co-product mass | wet-mass and dry-matter balance with unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and process identity | Preserve lot, field, crop season, geography, cultivar or species, intended use, seed status, market grade, moisture basis, operations, and final gate. | linked field, lot, test, and dispatch records |
| `dq_temporal` | temporal representativeness | Use a complete crop cycle and all represented postharvest lots. Multi-year averages shall retain annual values, coverage, and weighting. | dated records and coverage reconciliation |
| `dq_geography_technology` | geographic and technological representativeness | Match irrigation, tillage, field operations, electricity, fuels, drying, cleaning, and tempering technology to the represented region and period. | field map, equipment list, supplier geography, and dataset metadata |
| `dq_completeness` | inventory completeness | Reconcile purchased and issued inputs, harvested and dispatched outputs, co-products, wastes, water, and energy; explain every material gap or proxy. | mass, nutrient, water, and energy reconciliation plus gap register |
| `dq_measurement` | measurement quality | Retain calibration or verification evidence for scales, moisture meters, water and energy meters, and laboratory analyses. | calibration certificates, test reports, and meter checks |
| `dq_sources_uncertainty` | secondary data and estimates | Document source, version, geography, time, method, and uncertainty for every secondary dataset, factor, proxy, and reasoned estimate. Replace provisional ranges before active review unless explicitly accepted. | source register, uncertainty records, and reviewer disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference_product | Confirm the reference output is 1,000 kg of flow `78bd12e1-801c-4f96-a880-dba39e22783c` with Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, and all required qualifiers. |  |
| `validation_product_quality` | grain_quality | For common wheat and durum wheat declared suitable for human-food processing within the scope of CXS 199-1995, verify measured moisture is not above 14.5% m/m. For every wheat type, retain the separately applicable destination quality and safety evidence and do not extend CXS 199-1995 to an excluded type. | `codex-cxs-199-1995` |
| `validation_crop_coverage` | crop_cultivation | Require complete crop-cycle coverage for material and energy inputs, harvest outputs, residue management, and direct field emissions; every omission or proxy shall be disclosed. | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |
| `validation_nitrogen_method` | managed_soil_emissions | Reconcile nitrogen activity data to the declared emission equations, identify the IPCC tier or regional method and factors, and check direct and indirect pathways for missing terms and double counting. | `ipcc-2019-managed-soils` |
| `validation_mass_balance` | postharvest_conditioning | Require wet-mass and dry-matter balances across received grain, water addition or removal, product, co-products, wastes, and measured losses; investigate any unexplained difference. |  |
| `validation_allocation` | multifunctionality | Confirm direct assignment or subdivision was attempted before allocation, and retain the physical or economic allocation driver, period, factor, and sensitivity where allocation remains. | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |
| `validation_reasoned_estimates` | provisional_ranges | Flag every `reasoned_estimate` as provisional and replace it with regional reviewed evidence before activation unless the review record explicitly accepts continued use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for non-seed wheat grain through the declared postharvest conditioning gate |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for process and lifecyclemodel construction after review |
| allowed_use | Attributional modelling of declared wheat cultivation and conditioning routes with matching geography, period, technology, moisture basis, product quality, and allocation context |
| excluded_use | Wheat seed production; flour or semolina manufacture; unidentified global substitution; comparative assertions where required qualifiers, representativeness, or allocation sensitivity are missing |
| required_metadata | PCR id and version state; geography; crop season; field and lot coverage; cultivar or species; intended use; irrigation and tillage; rotation; moisture basis; grade; gate; process route; allocation; source and dataset versions |
| required_quality_disclosure | Primary-data coverage; calibration status; mass and nutrient reconciliation; temporal, geographic, and technological representativeness; proxies; reasoned estimates; uncertainty; allocation sensitivity; unresolved UUIDs |
| update_trigger | New reviewed regional evidence, revised Codex or IPCC rules, material technology or market-state change, UUID replacement, changed allocation practice, or evidence that a screening range is not representative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-199-1995` | Standard (`standard`) | Codex Alimentarius, CXS 199-1995, Standard for Wheat and Durum Wheat, amended 2019 with 2025 corrigendum, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+199-1995%2FCXS_199e.pdf, retrieved 2026-08-07 | Product scope, species, processing-use quality, moisture maximum, contaminants, hygiene, and lot qualifiers |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint method and PEFCR requirements, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30, retrieved 2026-08-07 | System-boundary completeness, data gaps, primary and secondary data quality, and multifunctionality hierarchy |
| `fao-leap-animal-feeds-2016` | Official guidance (`official_guidance`) | FAO LEAP Partnership, Environmental performance of animal feeds supply chains: Guidelines for assessment, 2016, https://openknowledge.fao.org/server/api/core/bitstreams/040bf0e7-e652-4eda-807c-37172c403671/content, retrieved 2026-08-07 | Crop-production process coverage, allocation, primary-data preference, data management, representativeness, completeness, and uncertainty |
| `ipcc-2019-managed-soils` | Method factor (`method_factor`) | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf, retrieved 2026-08-07 | Nitrogen activity data, direct and indirect N2O, crop-residue nitrogen, volatilization, leaching and runoff, and lime and urea CO2 calculations |
| `faostat-ag-production-2000-2020` | Dataset (`dataset`) | FAO, Agricultural production statistics 2000-2020, FAOSTAT Analytical Brief 41, https://openknowledge.fao.org/server/api/core/bitstreams/b75223dd-4e30-43aa-85a9-4c587753b027/content, retrieved 2026-08-07 | Regional wheat yield means used only as broad plausibility evidence |
| `fao-wheat-crop-information` | Official guidance (`official_guidance`) | FAO Land and Water, Wheat crop information, https://www.fao.org/land-water/databases-and-software/crop-information/wheat/en/, retrieved 2026-08-07 | Good irrigated wheat-yield context used only in the broad yield plausibility screen |
