---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Barley, seed

## 1. Scope and Applicability

This PCR governs foreground data packages for barley (*Hordeum* spp., principally cultivated barley) grown specifically for planting and delivered as sowing-quality seed at the declared farm gate. It covers the multiplication crop, field operations, harvest and on-farm handling, cleaning and grading, and any treatment, packaging, or storage performed before that gate. It is intended for mass-based product, process, dataset, and lifecycle-model projections.

The PCR does not cover barley grown as grain for food, feed, malting, brewing, or industrial use; vegetative planting material; seed of other cereal species; downstream sowing of the sold seed; or distribution beyond the declared farm gate. A lot remains in scope whether certified or not, but its variety, seed class, certification or quality-assurance scheme, treatment state, and test status must be declared. Marketability thresholds remain jurisdiction- and contract-specific and are not universal conformance thresholds of this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed |
| classification_refs | CPC 3.0: 01151, Barley, seed, exact scope context |
| covered_products | Barley seed grown specifically for planting, including cleaned, graded, untreated, treated, certified, and quality-declared lots when the declared product remains viable seed for sowing |
| excluded_products | Barley grain not grown specifically for seed purposes; malting barley; feed barley; food barley; non-viable grain; seed of non-barley species; downstream crop production using the sold seed |
| representative_product | A traceable lot of seed-grade barley, cleaned for sowing and released at the declared farm gate |
| production_route | Parent-seed receipt and multiplication crop establishment; field production; harvest and post-harvest drying or handling; seed cleaning and grading; conditional treatment, packaging, and storage before release |
| market_state | Seed-grade, cleaned for sowing, production mix at farm gate; treatment, packaging, certification, test, and storage states declared per lot |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of a traceable lot of sowing-quality barley seed at the declared farm gate |
| How much | 1 kg as-received mass of accepted reference product |
| How well | Seed-grade and cleaned for sowing; variety, seed class, treatment state, certification or quality-assurance scheme, germination result, analytical purity result, moisture result, test method and date, and lot identity declared |
| How long or cycle | One declared seed multiplication and conditioning campaign, including storage before the declared gate when storage is part of the foreground system |
| reference_flow_link | The functional unit is represented by the single reference product flow below; rejected seed, cleaning rejects, straw, and other outputs are not reference product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | barley species and variety; seed class or multiplication category; certification or quality-assurance scheme and jurisdiction; untreated state or treatment product and loading; germination result with method/test date/laboratory; analytical purity result and method; moisture result with method and basis; lot identifier and lot mass; production geography; harvest year; cleaning and grading state; packaging state; storage duration and conditions; declared farm gate |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete. Seed-test and certification records describe product quality; they do not replace foreground inventory records.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted barley seed reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted product on the as-received basis at the declared gate. Report moisture separately and do not silently convert the reference amount to dry matter. |
| `lot_mass_traceability` | parent seed, harvested seed, accepted seed, rejects, and co-products | Mass | kg | Reconcile calibrated scale records by lot and process. Preserve gross, tare, net, returned, reworked, and rejected masses where applicable. |
| `moisture_basis` | harvested, dried, conditioned, and released seed | Moisture content | percent by declared test basis | Identify sampling time, method, wet- or dry-basis convention, and lot. Any moisture-basis conversion must show the input result and formula. |
| `area_and_yield` | multiplication field | Area and mass | ha and kg | Record harvested area and accepted reference-product mass separately; calculate yield only from matched geography, crop campaign, and lot scope. |
| `energy_consistency` | fuels, electricity, heat, and drying energy | Mass or energy as supported by the selected flow | kg, kWh, or MJ | Preserve invoice or meter units. Convert only with a declared factor and basis; use net calorific value only when fuel energy is calculated. |
| `water_consistency` | irrigation water | Mass for the selected Tiangong flow | kg | Record metered volume where available and convert to mass only with a disclosed density and temperature basis; retain the original meter record. |
| `quality_test_basis` | germination, purity, moisture, viability, vigour, and seed-health results | Test result and method | method-defined | Results must be lot-specific and linked to sample identity, sampling date, method edition, laboratory, and test date. Do not substitute a jurisdictional limit for the measured result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A traceable parent barley-seed lot enters the declared multiplication field or contracted grower system with variety, class, treatment state, quantity, source, and upstream dataset status declared |
| starting_condition_role | Upstream product input to the seed-multiplication foreground system, not burden-free biological material |
| product_classification_scope | Barley cultivated specifically for seed purposes and released as sowing-quality seed; ordinary barley grain remains outside this product category |
| recursive_input_rule | Record parent barley seed once as a product input to the multiplication process and link an upstream seed dataset when available; do not recursively expand the same foreground campaign as its own input |
| upstream_dataset_requirement | Use a geographically, temporally, technologically, and seed-class-representative upstream dataset for parent seed and all other product inputs; disclose proxies, exclusions, and missing upstream datasets |
| disclosure | Declare parent-seed class and source, crop campaign, field geography, cultivation system, irrigation status, harvest and drying route, cleaning and grading route, treatment and packaging state, storage, product and reject destinations, allocation choices, and the exact release gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | foreground seed production | Include parent-seed supply, soil preparation and sowing, crop management, irrigation when used, fertiliser and crop-protection application, machinery and energy use, harvest, post-harvest drying or handling, cleaning and grading, and treatment, packaging, and storage when performed before the declared gate. | `environdec-pcr-2020-07`; `fao-seeds-toolkit-module-2` |
| `boundary_upstream_inputs` | purchased inputs and services | Link upstream datasets for seed, fertilisers, soil amendments, crop-protection products, irrigation supply, fuels, electricity, heat, packaging, treatment products, and contracted operations that cross the system boundary. | `environdec-pcr-2020-07`; `ec-pef-2021-2279` |
| `boundary_field_emissions` | managed soil and field operations | Include direct and indirect field emissions that are material to the declared route. Use measured data or an applicable national, regional, or IPCC method with activity data, factors, compartments, and climate or leaching conditions disclosed. | `ipcc-2019-managed-soils-n2o` |
| `boundary_reject_destinations` | off-specification seed, cleaning rejects, straw, and residues | Record each output and its destination. Classify it as reference product, co-product, recyclable material, waste, or field-returned residue from evidence; do not infer zero burden from the label “reject”. | `fao-seeds-toolkit-module-2`; `ec-pef-2021-2279` |
| `boundary_quality_operations` | seed release | Include sampling, testing, certification, conditioning, tagging, and other quality operations when they consume material or energy before the declared gate; always retain their lot-level records even when their burdens are negligible. | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |
| `boundary_data_gaps` | all required processes | Do not omit a required process solely because foreground or upstream data are missing. Use an explicitly disclosed proxy or report the data gap and its likely significance. | `ec-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | Barley seed multiplication crop production | required |  | Establish and manage the multiplication crop, including field inputs, machinery, irrigation, and managed-soil emissions | kg harvested unconditioned seed from the declared crop campaign |
| `harvest_postharvest` | Harvest and post-harvest drying or handling | required |  | Harvest the seed crop and bring it to the declared conditioning intake state | kg unconditioned seed delivered to conditioning |
| `seed_conditioning` | Seed reception, cleaning, grading, and release | required |  | Identify the lot, dry when needed, clean and grade, test, and separate accepted seed from rejects | kg accepted seed-grade barley seed |
| `treatment_packaging_storage` | Seed treatment, packaging, and storage | conditional | Include every operation performed before the declared farm gate; otherwise record it as not performed | Apply declared seed treatment, package and label the lot, and store it before release | kg accepted reference product at the declared farm gate |

Tiangong process searches identified `e2def1f7-e0e3-4946-8ee4-46bec2bf3c58` (Barley crop production for seed purpose) and `071917c6-aa61-4ac4-80c2-35c2ccad9e93` (Barley seed cleaning/conditioning) as identity candidates because they output the selected barley-seed flow. They are not default inventory datasets: their geography, technology, input/output state, compartments, and quantitative reference must be checked before use, and none of their exchange amounts is a PCR default.

### Process: Barley seed multiplication crop production (`seed_crop_production`)

#### Inputs

##### Product flows

###### Parent barley seed lot (`parent_seed_input`)

Parent seed is the traceable biological product input used to establish the multiplication crop. Its upstream burden must be linked once according to the boundary abstraction.

- Selected flow: Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Flow property / unit: Mass / kg
- Amount rule: measured net parent-seed mass issued to and sown on the declared fields, adjusted only for documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_lot_inputs`

###### Fertiliser and soil-amendment products (`fertiliser_products`)

Record one row in the produced dataset for each purchased formulation and amendment. Select a Tiangong flow matching the declared product and nutrient form; do not substitute a generic fertiliser for a known formulation.

- Selected flow: Exact fertiliser or soil-amendment product selected after formulation and classification review
- Flow property / unit: Mass / kg product, with nutrient content retained separately
- Amount rule: delivered quantity minus documented returns, reconciled to application logs for the declared fields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs_operations`

###### Crop-protection products (`crop_protection_products`)

Record each active product or formulation separately. The generic Tiangong pesticides flow may be used only when a formulation-specific flow is unavailable and the proxy limitation is disclosed.

- Selected flow: Pesticides `4b5aaf18-4297-4ff1-aaef-237d08e4b8f1`
- Flow property / unit: Mass / kg product and kg active ingredient
- Amount rule: issued quantity minus returns and unopened carryover, reconciled to application logs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs_operations`

###### Irrigation water supplied to the field (`irrigation_water_input`)

Include irrigation water only where applied. Preserve source, abstraction or supply route, meter basis, and irrigated area.

- Selected flow: Irrigation water `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- Flow property / unit: Mass / kg
- Amount rule: metered or otherwise documented water delivered to the declared fields, converted from volume only under `water_consistency`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_water`

###### Diesel for field machinery (`field_diesel`)

Record fuel supplied to owned or contracted field operations within the foreground boundary. Avoid double counting fuel already included in a contracted-operation dataset.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg; optional net calorific value / MJ shown separately
- Amount rule: fuel invoices, tank records, or contractor-specific fuel records allocated to the declared fields and campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs_operations`

##### Waste flows

##### Elementary flows

###### Land occupation and transformation (`field_land_use`)

Record applicable land occupation and transformation elementary flows using the site area, crop duration, prior land state, and selected assessment convention.

- Selected flow: Exact Tiangong land-use flow selected for the declared land state and compartment
- Flow property / unit: Area*time or area / method-supported unit
- Amount rule: calculated from georeferenced field area, crop duration, and documented land-use history
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_inputs_operations`

#### Outputs

##### Product flows

###### Harvested unconditioned barley seed (`harvested_seed_output`)

This intermediate output is the harvested seed crop before final cleaning and grading. It must not be represented as the cleaned reference product unless it already meets the declared release state.

- Selected flow: Foreground intermediate barley seed flow with unconditioned state declared; no default Tiangong UUID
- Flow property / unit: Mass / kg
- Amount rule: calibrated net harvested mass assigned to the declared seed lots and fields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_output_mass`

###### Straw or other marketable crop co-product (`field_coproduct`)

Record a separate product output only when the material leaves the field system for a beneficial use or sale; otherwise classify and model it according to its documented fate.

- Selected flow: Exact co-product flow selected for the declared material and destination
- Flow property / unit: Mass / kg
- Amount rule: measured or documented mass leaving the field system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_destinations`

##### Waste flows

##### Elementary flows

###### Direct and indirect nitrous oxide to air (`managed_soil_n2o`)

Calculate managed-soil nitrous oxide from matched nitrogen activity data and an applicable regional or IPCC method. Keep direct and indirect components distinguishable in calculation records.

- Selected flow: nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Amount rule: calculated by `calc_managed_soil_n2o` from collected nitrogen inputs, crop residues, soil and climate conditions, and declared factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Ammonia volatilisation to air (`fertiliser_ammonia`)

Calculate or measure ammonia volatilisation using the actual nitrogen forms, application method, incorporation, weather or climate class, and the applicable regional method.

- Selected flow: ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Amount rule: calculated by `calc_n_volatilisation_and_leaching` or measured from a documented campaign-specific method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Nitrate loss to water (`nitrate_to_water`)

Record nitrate leaching or runoff only with a method applicable to the site conditions, and select the receiving-water compartment supported by the method and site evidence.

- Selected flow: nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`; replace with a more specific receiving compartment when supported
- Flow property / unit: Mass / kg nitrate
- Amount rule: calculated by `calc_n_volatilisation_and_leaching` from collected nitrogen activity data and declared leaching or runoff conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils-n2o`

###### Crop-protection emissions (`crop_protection_emissions`)

Create one elementary-flow row per emitted active substance and receiving compartment when an applicable inventory method supports the emission. Do not treat applied product mass as identical to an environmental emission.

- Selected flow: Exact active-substance elementary flow and receiving compartment selected after method review
- Flow property / unit: Mass / kg emitted substance
- Amount rule: measured or calculated from application records by a declared inventory method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested unconditioned seed from the matched crop campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`

### Process: Harvest and post-harvest drying or handling (`harvest_postharvest`)

#### Inputs

##### Product flows

###### Harvested seed entering post-harvest handling (`postharvest_seed_input`)

Receive the matched unconditioned seed lot from the multiplication field and preserve lot identity through drying and handling.

- Selected flow: Foreground intermediate barley seed flow with unconditioned state declared; no default Tiangong UUID
- Flow property / unit: Mass / kg
- Amount rule: calibrated intake mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg post-harvest seed delivered to conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_mass_energy`

###### Harvest and drying energy (`postharvest_energy`)

Record fuels, electricity, and heat separately by selected supply flow and equipment. Include only energy attributable to the declared seed lots.

- Selected flow: Exact fuel, electricity, or heat supply flow matching carrier, voltage or grade, geography, and mix
- Flow property / unit: Energy or mass / kWh, MJ, or kg supported by the selected flow
- Amount rule: meter, fuel, invoice, or contractor records allocated to matched lots and operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg post-harvest seed delivered to conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_mass_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unconditioned seed delivered to conditioning (`conditioning_intake_output`)

Record lot mass and moisture at delivery to conditioning after field harvest and any on-farm drying or temporary storage.

- Selected flow: Foreground intermediate barley seed flow with unconditioned state declared; no default Tiangong UUID
- Flow property / unit: Mass / kg
- Amount rule: calibrated net output mass by lot, linked to the moisture result at handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unconditioned seed delivered to conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_postharvest_mass_energy`

##### Waste flows

##### Elementary flows

###### Harvest and post-harvest losses returned to the environment (`postharvest_field_losses`)

Record seed and crop material lost to the field or another environmental compartment when material. Select a flow and compartment that match the observed fate.

- Selected flow: Exact biomass-loss elementary flow and compartment selected for the observed fate
- Flow property / unit: Mass / kg
- Amount rule: measured loss or mass-balance-derived loss with uncertainty and method disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unconditioned seed delivered to conditioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postharvest_mass_energy`

### Process: Seed reception, cleaning, grading, and release (`seed_conditioning`)

#### Inputs

##### Product flows

###### Unconditioned barley seed received for conditioning (`conditioning_seed_input`)

Receive, weigh, identify, and sample every incoming lot before cleaning and grading.

- Selected flow: Foreground intermediate barley seed flow with unconditioned state declared; no default Tiangong UUID
- Flow property / unit: Mass / kg
- Amount rule: calibrated net intake mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted seed-grade barley seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_energy`

###### Electricity and other conditioning energy (`conditioning_energy`)

Record electricity, fuel, and heat used by intake, drying, cleaning, grading, conveying, dust control, sampling, and testing equipment.

- Selected flow: Exact energy supply flow matching carrier, voltage or grade, geography, and consumption mix; no universal default UUID
- Flow property / unit: Energy or mass / kWh, MJ, or kg supported by the selected flow
- Amount rule: metered or invoice quantity allocated to the declared lots by direct sub-metering, runtime and rated load, or a disclosed facility allocation key
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted seed-grade barley seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted seed-grade barley seed (`accepted_barley_seed`)

The accepted output is cleaned for sowing and linked to lot-specific quality results and release evidence.

- Selected flow: Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Flow property / unit: Mass / kg
- Amount rule: calibrated net accepted mass released from conditioning, excluding rejects, rework still in process, and non-reference co-products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted seed-grade barley seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_quality_release`

##### Waste flows

###### Seed cleaning rejects (`seed_cleaning_rejects`)

Record screenings and rejected seed as waste only when the documented destination meets the dataset's waste classification. If sold or used beneficially, model a co-product instead.

- Selected flow: Seed cleaning rejects `6bfe90ae-a960-45dd-b1fa-89581c562763`
- Flow property / unit: Mass / kg
- Amount rule: calibrated reject mass by lot and reject stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted seed-grade barley seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_destinations`

##### Elementary flows

###### Conditioning dust to air (`conditioning_dust`)

Record dust released after control equipment when measured or when a documented calculation method is applicable. Do not equate collected dust with emitted dust.

- Selected flow: Exact particulate elementary flow and air compartment selected after equipment and particle-size review
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated from handled mass, control efficiency, and a cited facility method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted seed-grade barley seed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass_energy`

### Process: Seed treatment, packaging, and storage (`treatment_packaging_storage`)

#### Inputs

##### Product flows

###### Accepted seed entering final operations (`final_operations_seed_input`)

Pass the accepted seed lot into treatment, packaging, or storage only when those operations occur before the declared gate.

- Selected flow: Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Flow property / unit: Mass / kg
- Amount rule: calibrated net mass entering included final operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reference product at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_operations`

###### Seed-treatment products (`seed_treatment_products`)

Record each treatment formulation and active ingredient separately, with treated mass and application rate linked to the lot.

- Selected flow: Exact treatment-product flow selected after formulation and classification review
- Flow property / unit: Mass / kg product and kg active ingredient
- Amount rule: issued quantity minus returns and residues, reconciled to treated lot mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product at the declared farm gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_operations`

###### Packaging materials (`seed_packaging_materials`)

Record bags, liners, labels, pallets, and other packaging that leave with the reference product. Reusable packaging must disclose cycles and allocation.

- Selected flow: Exact packaging-material flow selected for each material and route
- Flow property / unit: Mass or item count / kg or item
- Amount rule: packaging issued to released lots minus unused returns, with reuse cycles documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product at the declared farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_operations`

###### Energy for treatment, packaging, and storage (`final_operations_energy`)

Record actual electricity, fuel, or heat for included final operations and storage.

- Selected flow: Exact energy supply flow matching carrier, voltage or grade, geography, and consumption mix; no universal default UUID
- Flow property / unit: Energy or mass / kWh, MJ, or kg supported by the selected flow
- Amount rule: metered or invoice quantity allocated to the declared lots by a disclosed key; storage energy also reflects duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reference product at the declared farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_operations`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Barley seed at the declared farm gate (`reference_barley_seed_output`)

This is the final reference product after all operations included before the gate. Its treatment, packaging, storage, certification, and test states must match the declared qualifiers.

- Selected flow: Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Flow property / unit: Mass / kg
- Amount rule: calibrated net lot mass released at the declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product at the declared farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_quality_release`

##### Waste flows

###### Treatment and packaging wastes (`final_operations_waste`)

Record unused treatment residues, contaminated packaging, damaged bags, and other wastes by type and destination.

- Selected flow: Exact waste flow selected for material, hazard status, and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reference product at the declared farm gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_destinations`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | all multifunctional foreground processes | First avoid allocation by subdividing separately measured operations or, where consistent with goal and scope, by system expansion. Document the decision and the affected flows. | `ec-pef-2021-2279` |
| `allocation_physical_relation` | unavoidable multifunctionality | If subdivision or system expansion is not applicable, use a causal physical relationship that reflects how burdens change with the co-products. State the relation, formula, quantities, and sensitivity. | `ec-pef-2021-2279` |
| `allocation_other_relation` | no defensible physical relation | Only when no defensible physical relation exists, use another justified relation such as economic value. Use matched geography and period, disclose price sources and volatility, and report sensitivity. | `ec-pef-2021-2279` |
| `allocation_output_classification` | straw, off-specification seed, cleaning rejects, and packaging returns | Determine destination and economic or functional role before allocation. A sold feed stream or useful material is not automatically waste; a waste label does not by itself justify zero burden. | `fao-seeds-toolkit-module-2`; `ec-pef-2021-2279` |
| `allocation_parent_seed` | parent barley seed input | Carry the upstream parent-seed dataset as an input burden. Do not allocate the current campaign backward to its own parent-seed input. | `ec-pef-2021-2279` |
| `allocation_reusable_packaging` | reusable bags, bins, and pallets | Allocate production and end-of-life burdens over documented expected uses and include loss, cleaning, and return transport where within scope. | `ec-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_lot_inputs` | seed_crop_production | parent seed input | seed purchase, issue, return, and lot records | lot id; variety; class; treatment; supplier; source geography; certification scheme; gross, tare, net, issued, returned, and sown mass; upstream dataset ref | reconcile supplier documents, calibrated scale tickets, store issues, drill-loading records, and field logs | kg and descriptive fields | each lot and field issue | complete declared crop campaign | all declared fields and parent-seed lots | sum net sown mass by matched field and campaign; retain lot links | supplier record, lot label, certification or quality record, scale calibration, reconciliation sign-off |
| `cp_field_inputs_operations` | seed_crop_production | fertilisers, amendments, crop protection, fuel, land, and operations | invoices, stock movement, application logs, machinery logs, contractor records, field GIS, and soil records | product identity; formulation; nutrient or active content; quantity; returns; application date and rate; field id and area; machinery hours; fuel; soil and land-use history | reconcile purchases and stocks to georeferenced field-operation records | kg, kg nutrient, kg active ingredient, L or kg fuel, h, ha, dates | every delivery and application; campaign reconciliation | complete declared crop campaign | all declared fields and contractors | aggregate only after identity, field, period, and unit harmonisation; allocate shared operations by disclosed causal key | invoices, labels, calibrated applicator or tank records, contractor statements, field maps, soil analyses |
| `cp_irrigation_water` | seed_crop_production | irrigation water | meter, abstraction, pump, and irrigation logs | source; meter start and end; volume; irrigated field and area; dates; pump energy; conversion density | calibrated meter preferred; otherwise documented engineering estimate with uncertainty | m3 raw and kg converted | each irrigation event or meter interval | complete irrigation season | all irrigated declared fields | sum matched events; preserve source and conversion records | meter calibration, abstraction permit or supplier invoice, pump record, field log |
| `cp_field_output_mass` | seed_crop_production | harvested seed and field co-products | harvester, weighbridge, storage intake, moisture, and destination records | field id; lot id; gross, tare, net mass; moisture; harvest date; co-product mass and destination | calibrated weighbridge or scale with lot reconciliation | kg and percent moisture | each load and lot | complete harvest of declared crop campaign | all declared fields and receiving stores | sum matched net masses; prevent duplicate tickets; retain moisture basis | scale calibration, ticket sequence check, moisture test, field-to-lot reconciliation |
| `cp_field_emissions` | seed_crop_production | managed-soil and crop-protection emissions | emission calculation workbook linked to field activity data | N form and content; applied N; organic N; crop-residue N; soil and climate class; volatilisation and leaching conditions; method edition; factor source; active substance; compartment | calculate from approved field records using the declared regional or IPCC inventory method | kg N, kg N2O, kg NH3, kg nitrate, kg emitted substance | once per field and crop campaign; update when input data change | complete declared crop campaign | all declared fields | calculate field first, then aggregate by output mass; keep direct and indirect components and compartments | locked formulas, method citation, factor table, reviewer check, input-record links |
| `cp_postharvest_mass_energy` | harvest_postharvest | harvested seed, losses, drying, and handling energy | intake and output scale tickets, moisture tests, meters, fuel, runtime, and storage logs | lot id; mass in and out; moisture in and out; energy carrier and quantity; drying temperature; runtime; losses and fate | calibrated scales and meters; runtime allocation only when sub-metering is unavailable | kg, percent moisture, kWh, MJ, h | each lot, batch, and meter interval | harvest through conditioning handoff | all included harvest, drying, and handling sites | reconcile lot mass and energy to conditioning intake; disclose shared-facility allocation | calibration, tickets, meter or invoice records, moisture tests, operator sign-off |
| `cp_conditioning_mass_energy` | seed_conditioning | reception, cleaning, grading, rejects, dust, and energy | reception, batch, equipment, meter, scale, dust-control, and reject records | lot id; mass in; accepted mass; each reject mass; rework; meter values; runtime; equipment; captured and emitted dust data | calibrated scales and meters with batch mass balance | kg, kWh, MJ, h | each lot or conditioning batch | complete conditioning campaign | all included conditioning lines and lots | aggregate after batch mass balance; allocate shared energy by disclosed causal key | calibration, lot trace, batch report, meter or invoice, dust-control record, supervisor sign-off |
| `cp_seed_quality_release` | seed_conditioning | accepted reference product and quality release | sampling, laboratory, certification, tagging, and release records | lot id; sample id; sampling method and date; laboratory; method edition; germination; analytical purity; moisture; seed health; varietal identity; release decision; accepted mass | representative lot sampling and competent laboratory testing under the declared scheme | kg, percent, count, dates, descriptive fields | each lot and required retest | current for the released lot | every reference-product lot | no averaging across lots unless the scheme permits blending and traceability is preserved | sample chain of custody, laboratory report, certification or quality declaration, label, release approval |
| `cp_final_operations` | treatment_packaging_storage | treatment, packaging, storage, and final energy | treatment batch, formulation, packaging issue, meter, inventory, and storage logs | lot id; treated mass; product and active ingredient; amount; packaging material and count or mass; reusable cycles; meter data; storage dates and conditions | reconcile issued materials and energy to released lots | kg, item, kWh, MJ, days, descriptive fields | each batch, package issue, and meter interval | conditioning release through declared gate | all included treatment, packaging, and storage sites | aggregate by released lot; storage allocation reflects duration; disclose reuse model | batch record, label, safety and product record, inventory reconciliation, meter or invoice, warehouse log |
| `cp_coproduct_waste_destinations` | seed_crop_production; seed_conditioning; treatment_packaging_storage | co-products, rejects, residues, and wastes | scale tickets, transfer notes, sales, treatment, and destination records | material identity; mass; contamination or hazard status; destination; price or physical relation; date; receiver | weigh and reconcile each outbound stream to receiving evidence | kg, currency where economic allocation is used, descriptive fields | each shipment or disposal event | complete declared crop and conditioning campaign | all foreground sites and outbound streams | sum by material and destination; preserve co-product versus waste decision and allocation evidence | scale calibration, transfer or consignment note, invoice, receiver acceptance, treatment certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = process-scoped amount / accepted reference-product mass at the declared gate, after allocation where applicable | process amount; accepted reference-product mass; allocation factor | amount per 1 kg reference product |  |
| `calc_process_mass_balance` | field output, post-harvest, conditioning, and final operations | mass-balance difference = total measured mass inputs - total measured product, co-product, waste, environmental loss, and inventory-change outputs on the same moisture basis | matched lot masses; moisture bases; inventory changes; measured or calculated losses | absolute and percentage reconciliation difference with explanation | `fao-seeds-toolkit-module-2` |
| `calc_moisture_conversion` | any explicitly requested dry- or common-moisture comparison | convert only after declaring wet- or dry-basis convention; retain measured as-received mass and moisture result as source values | mass; measured moisture; basis convention | converted comparison mass, never a silent replacement of the reference flow | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing` |
| `calc_managed_soil_n2o` | direct and indirect managed-soil N2O | apply the selected national, regional, or IPCC tier equations to matched synthetic N, organic N, crop-residue N, mineralisation, volatilisation, leaching, soil, and climate activity data; convert N2O-N to N2O explicitly where required | field N activity data; method equations; factors; climate and leaching conditions | kg direct N2O and kg indirect N2O by field and campaign | `ipcc-2019-managed-soils-n2o` |
| `calc_n_volatilisation_and_leaching` | ammonia and nitrate losses | apply a method appropriate to the fertiliser form, application and incorporation, soil, climate, irrigation, and receiving compartment; preserve N-species conversions | field N activity data; method; factors; site conditions | kg NH3 to air and kg nitrate to selected water compartment | `ipcc-2019-managed-soils-n2o` |
| `calc_energy_conversion` | fuels and energy | converted energy = recorded carrier quantity × declared conversion factor; do not apply a calorific value to electricity | invoices or meters; carrier; net calorific value or other conversion factor and source | carrier-specific quantity and optional MJ for comparison |  |
| `calc_allocation` | multifunctional foreground process | apply the selected allocation rule only after subdivision and system-expansion screening; allocated amount = unallocated amount × documented allocation factor | unallocated inventory; co-product quantities; physical relation or matched economic data | allocated inventory and sensitivity result | `ec-pef-2021-2279` |
| `calc_seed_quality_status` | reference-product lot | compare lot-specific test results with the explicitly declared scheme, jurisdiction, contract, and seed class; report measured values and decision separately | laboratory results; method edition; declared limits; lot identity | accepted, held, reworked, or rejected status with evidence | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | all foreground records | Preserve an unbroken link among field, parent seed, harvested load, conditioning batch, quality sample, released lot, and reference-product mass. | Lot ledger, labels, scale tickets, batch records, laboratory chain of custody, and release record; `fao-seeds-toolkit-module-2`; `fao-seeds-toolkit-module-3` |
| `dq_temporal_coverage` | crop campaign and conditioning | Cover the complete crop and conditioning campaign, including opening and closing stocks and storage before the declared gate. State any mismatch between activity-data and background-dataset years. | Dated records, stock reconciliation, and temporal representativeness review; `ec-pef-2021-2279` |
| `dq_geographic_technology` | foreground and upstream datasets | Match production region, cultivation system, irrigation status, machinery, drying, conditioning, treatment, and energy mix; justify proxies. | Site description and geographical and technological representativeness assessment; `ec-pef-2021-2279` |
| `dq_completeness_mass_balance` | all required processes | Complete process mass balances and reconcile purchases, applications, outputs, rejects, wastes, and inventory changes. Explain unresolved differences rather than forcing balance. | Reconciliation reports, missing-record log, and reviewer sign-off. |
| `dq_measurement_control` | meters, scales, laboratory tests, and calculated values | Record calibration or competence evidence, raw units, conversion factors, formulas, factor versions, and responsible reviewer. | Calibration certificates, laboratory scope, locked calculation workbook, and audit trail. |
| `dq_seed_quality` | reference-product lot | Use representative lot sampling and an identified test method for germination, analytical purity, moisture, and other claimed attributes. Keep measured results separate from legal or contract limits. | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |
| `dq_phytosanitary_scope` | internationally moved seed or regulated pest claims | Declare applicable phytosanitary requirements and retain inspection, sampling, testing, and certification evidence; do not generalise one destination's requirements to all lots. | `ippc-ispm-38` and lot-specific phytosanitary documents. |
| `dq_emission_method` | field and facility emissions | State method, edition, factors, units, conversion steps, compartments, regional conditions, and whether results are measured or calculated. | Calculation record and cited method; `ipcc-2019-managed-soils-n2o`. |
| `dq_yield_context` | yield plausibility review | Compare only with a matched official national or regional series and treat the comparison as QA context, not a conformance threshold or replacement for measured yield. | Foreground field/output records and `faostat-crops-livestock-production`. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product category and reference flow | Confirm that the product is barley grown specifically for seed purposes and that the selected Tiangong reference flow, Mass property, Units of mass group, and kg unit exactly match the identifiers in section 3. |  |
| `validate_required_qualifiers` | every reference-product lot | Fail completeness when any required qualifier is absent or when treatment, certification, quality-test, packaging, storage, geography, or gate statements conflict. | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |
| `validate_process_coverage` | foreground system | Confirm that all required processes and every conditional operation actually performed before the gate are represented; verify parent-seed and purchased-input upstream links or explicit data gaps. | `environdec-pcr-2020-07`; `fao-seeds-toolkit-module-2`; `ec-pef-2021-2279` |
| `validate_lot_mass_balance` | each process and lot | Recalculate the mass balance on consistent moisture bases, identify rework and inventory change, and investigate unexplained differences. | `fao-seeds-toolkit-module-2` |
| `validate_field_emissions` | managed-soil and crop-protection emissions | Check activity-data lineage, method applicability, factor edition, species conversions, receiving compartments, and normalization. Do not accept applied product mass as emitted mass. | `ipcc-2019-managed-soils-n2o` |
| `validate_allocation` | multifunctional processes | Verify the allocation hierarchy, output classification, formula, factor sum, matched price or physical data, and sensitivity disclosure. | `ec-pef-2021-2279` |
| `validate_flow_identity` | every UUID-bearing row | Re-query Tiangong without a dataset version and confirm flow name, flow type, classification or compartment, reference property, and modelling role. A semantically similar but mismatched row is not a default. |  |
| `validate_data_quality` | foreground and upstream evidence | Check completeness, temporal, geographical, technological, measurement, and precision evidence and disclose proxy or missing-data limitations. | `ec-pef-2021-2279` |
| `validate_quality_release` | accepted reference product | Confirm lot-specific representative sampling, laboratory method, measured results, release decision, and the applicable scheme or jurisdiction. This PCR supplies no universal germination, purity, or moisture threshold. | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |
| `validate_reasoned_estimates` | any future provisional quantitative range | A `reasoned_estimate` may be used only as a replaceable QA screening range, never as a default inventory amount, legal limit, acceptance threshold, or proof of conformance; identify it explicitly and replace it when reviewed evidence becomes available. |  |
| `validate_sources` | all source-backed rules | Confirm that every cited source id exists in section 11 and that web-hosted sources record the retrieval date; source discovery snippets and Tiangong query traces are not evidence records. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground barley-seed data package and linked unit-process inventory; an aggregated dataset may be derived only after the foreground package passes validation |
| downstream_use | secondary_dataset; background_dataset; supporting flow, process, and lifecyclemodel projections |
| allowed_use | Attributional cradle-to-declared-farm-gate modelling of a declared barley-seed lot or representative production mix when scope, geography, crop campaign, seed class, treatment, quality, packaging, storage, allocation, and data quality are compatible |
| excluded_use | Ordinary barley grain; malting, feed, or food barley; another cereal species; downstream crop production after sale; a universal seed-quality threshold; use of a candidate Tiangong process as an unreviewed default; consequential claims without an explicit consequential model |
| required_metadata | PCR id and content version; reference-flow UUIDs; geography and gate; crop and conditioning campaign; variety; seed class; certification or quality scheme; lot or aggregation logic; treatment, packaging, and storage states; process coverage; upstream datasets; allocation; emission methods; source ids; validation result |
| required_quality_disclosure | Foreground coverage; record and calibration evidence; sample and test method; missing data and proxies; representativeness; mass-balance differences; emission-factor choices; allocation sensitivity; uncertainty; any provisional QA screening range |
| update_trigger | Material change in product identity or Tiangong UUIDs, cultivation or conditioning route, legal or certification framework, test method, emission method or factor, allocation choice, geography, technology, background datasets, or evidence that changes a normative rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `environdec-pcr-2020-07` | standard | EPD International, PCR 2020:07, *Arable and vegetable crops*, official PCR file: https://api.environdec.com/api/v1/EPDLibrary/Files/e8d0a500-4a67-4923-28e9-08db259f9365/Data (retrieved 2026-08-07) | Sector PCR scope, cultivation boundary, upstream inputs, field emissions, and agricultural data coverage |
| `ec-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method: https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-07) | Multifunctionality hierarchy, company-specific data, representativeness, data quality, proxies, and data-gap disclosure |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 11, N2O emissions from managed soils and CO2 emissions from lime and urea application: https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf (retrieved 2026-08-07) | Direct and indirect managed-soil N2O, nitrogen activity data, volatilisation, and leaching method structure |
| `fao-seeds-toolkit-module-2` | official_guidance | FAO and AfricaSeeds, *Seeds Toolkit, Module 2: Seed processing: principles, equipment and practice*: https://openknowledge.fao.org/server/api/core/bitstreams/2019283b-6271-4b2e-82c0-19ac6256c591/content (retrieved 2026-08-07) | Reception, lot identification, drying, cleaning, grading, treatment, packaging, storage, traceability, and process decomposition |
| `fao-seeds-toolkit-module-3` | official_guidance | FAO and AfricaSeeds, *Seeds Toolkit, Module 3: Seed quality assurance*: https://openknowledge.fao.org/server/api/core/bitstreams/b601435e-9c03-4ca5-8927-9f712418ec38/content (retrieved 2026-08-07) | Sampling, physical purity, germination, moisture, viability, vigour, seed health, varietal identity, certification, and quality records |
| `ista-rules-seed-testing` | standard | International Seed Testing Association, *International Rules for Seed Testing*: https://www.seedtest.org/en/publications/international-rules-seed-testing.html (retrieved 2026-08-07) | Uniform sampling, seed-lot testing, reporting, and germination-method identity |
| `eu-cereal-seed-directive-66-402` | standard | Council Directive 66/402/EEC on the marketing of cereal seed, consolidated access: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:31966L0402 (retrieved 2026-08-07) | Cereal-seed identity, certification, germination, analytical purity, health, lot, and labelling evidence; used only where applicable |
| `ippc-ispm-38` | standard | International Plant Protection Convention, ISPM 38, *International movement of seeds*: https://www.ippc.int/en/publications/84340/ (retrieved 2026-08-07) | Pest-risk scope, inspection, sampling, testing, and phytosanitary certification for internationally moved seed |
| `faostat-crops-livestock-production` | dataset | FAO, FAOSTAT Crops and Livestock Products data: https://www.fao.org/faostat/ (retrieved 2026-08-07) | Contextual yield and production plausibility review by matched geography and year; not a default inventory or threshold |
