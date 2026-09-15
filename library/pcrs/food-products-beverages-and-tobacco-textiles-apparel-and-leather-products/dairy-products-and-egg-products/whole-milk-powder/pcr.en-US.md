---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whole-milk-powder
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Whole milk powder

## 1. Scope and Applicability

This PCR applies to whole milk powder made by removing water from milk or cream while retaining milk fat within the compositional range for whole milk powder. The foreground product is finished powder at the dairy factory gate, either bulk or packaged as declared. Regular, agglomerated, and instantised whole milk powder are covered when the relevant heat treatment, agglomeration, lecithination, and packaging operations are reported.

The default production route starts with raw whole milk available at the farm gate, includes transport to the dairy, reception and storage, composition standardisation, pasteurisation or other declared heat treatment, evaporation, homogenisation when used, spray or other declared drying, powder recovery and finishing, cleaning, and packaging. Upstream raw-milk production is represented by a separate supplier or regional dataset. Distribution after the dairy factory gate, retail, reconstitution, consumption, and packaging end-of-life are outside the default foreground boundary.

The PCR excludes skim milk powder, partly skimmed milk powder, cream powder, whey powder, fat-filled powder in which milk fat is replaced by non-milk fat, infant formula, formulated nutritional powders, and powder blends containing material non-dairy ingredients beyond processing aids or declared instantisation ingredients. Roller-dried whole milk powder may use this PCR only when the drying route and route-specific quality effects are disclosed; spray drying is the representative route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whole-milk-powder |
| classification_refs | CPC 3.0: 22211, Whole milk powder, exact scope candidate pending accepted mapping governance |
| covered_products | Whole milk powder containing at least 26% and less than 42% milk fat by mass, including regular and instantised or agglomerated forms, for direct consumption or further processing |
| excluded_products | Cream powder; partly skimmed milk powder; skim milk powder; whey powder; buttermilk powder; non-milk fat-filled powder; infant formula; formulated nutritional powder; dairy powder blends whose identity is not whole milk powder |
| representative_product | Spray-dried whole milk powder made from standardised and pasteurised whole milk |
| production_route | Raw milk reception and standardisation; heat treatment; evaporation; optional homogenisation; spray drying; powder recovery or optional agglomeration and lecithination; packaging |
| market_state | Finished dry powder at dairy factory gate; bulk or packaged state must be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of whole milk powder at the dairy factory gate for direct consumption or further food processing |
| How much | 1 kg net whole milk powder |
| How well | Conforms to the declared market specification and, at minimum for Codex identity, contains at least 26% and less than 42% milk fat, no more than 5% water, and at least 34% milk protein in milk solids-not-fat |
| How long or cycle | One production batch at factory gate; no use duration is assigned; declared shelf-life and storage conditions are product metadata |
| reference_flow_link | Exactly 1 kg net output of the Tiangong Whole milk powder product flow after final quality release |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Whole milk powder `f268b0b6-9cf3-4bba-aaf7-7b57e4f3fac0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal species and raw-milk origin; milk-fat fraction; water or moisture fraction; milk protein in milk solids-not-fat; regular or agglomerated/instantised form; heat-treatment class or time-temperature record; drying technology; packaging state and packaging included/excluded; production geography and period; allocation method; factory-gate release specification |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | released whole milk powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net product mass after subtracting packaging tare. Moisture present in the released powder remains part of the reference mass. |
| `composition_identity` | released whole milk powder | mass fraction | % m/m | Measure and report milk fat, water, and milk protein in milk solids-not-fat using the applicable product specification and test methods. The product must meet the whole-milk-powder identity limits in Codex CXS 207-1999. |
| `energy_reporting` | electricity and thermal energy | energy | kWh for electricity; MJ for fuels, steam, and purchased heat | Preserve metered carrier quantities and conversion factors. Do not combine electricity and thermal energy into one unqualified energy value. |
| `water_reporting` | process water, cleaning water, condensate, and wastewater | volume or mass | m3 or kg | Keep intake water, recovered evaporator condensate, reused water, and wastewater separate. State density or conversion assumptions when mass and volume are converted. |
| `mass_balance_basis` | milk solids, product, recovered fines, rejects, and losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg dry matter and kg wet mass | Report wet mass and dry matter consistently so retained milk solids, removed water, recovered fines, off-specification powder, and unexplained loss can be reconciled for the same batch period. |
| `packaging_basis` | packaging materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg material/kg net product | Report each packaging material separately and declare whether packaging is included in the factory-gate product system. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw whole milk is available at the farm gate with measured mass, animal species, origin, collection period, fat, protein, and total-solids or water content; any cream, skim milk, retentate, permeate, or lactose used for composition adjustment is separately identified |
| starting_condition_role | Upstream product input to the foreground dairy-processing system |
| product_classification_scope | Whole milk powder only; classification references describe mapping context and do not broaden the PCR to other milk, whey, cream, or formulated powders |
| recursive_input_rule | Purchased whole milk powder used as an input must be represented by a separately sourced upstream whole-milk-powder dataset and its purpose and mass disclosed; do not recursively recreate its production inside the same foreground system |
| upstream_dataset_requirement | Use geographically, temporally, technologically, and species-representative datasets for raw milk, ingredients, packaging, electricity, fuels, heat, water supply, transport, waste treatment, and wastewater treatment |
| disclosure | Declare starting geography and time, raw-milk composition and mass, transport to dairy, included unit operations, packaging state, allocation choices, recycled fines and condensate treatment, exclusions, and any change from the default factory-gate boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | default foreground system | Include transport of raw milk from farm gate to dairy, reception and storage, standardisation, heat treatment, concentration, drying, powder recovery and finishing, packaging when supplied with the product, on-site utilities, cleaning, wastewater, direct air emissions, refrigerant losses, and waste handling through the dairy factory gate. | `idf-bulletin-445-2010`; `fao-dairy-industry` |
| `boundary_rule_2` | upstream inputs | Represent raw-milk production and production of purchased ingredients, operating materials, packaging, electricity, fuels, heat, and water with upstream datasets rather than treating those inputs as burden-free. | `idf-bulletin-445-2010` |
| `boundary_rule_3` | downstream stages | Exclude post-factory-gate distribution, retail, storage, reconstitution, use, and end-of-life from the default foreground package; include them only in an explicitly extended lifecycle model and disclose the extension. | `idf-bulletin-445-2010` |
| `boundary_rule_4` | completeness | Do not omit known material, energy, water, refrigerant, wastewater, waste, or direct-emission streams merely because they are not separately metered. Estimate or bound them transparently, and disclose justified exclusions and their expected significance. | `idf-bulletin-445-2010` |
| `boundary_rule_5` | product identity | Keep fat-filled powders, skim or partly skimmed powders, cream powder, whey powder, and formulated nutritional powders outside this product system unless represented as separate co-products or upstream/downstream products. | `codex-cxs-207-1999` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_standardisation` | Milk reception, storage, and composition standardisation | required | Always; include separation or addition of permitted milk constituents when used | Establish accepted raw-milk quantity, quality, and target whole-milk composition | kg standardised milk sent to heat treatment |
| `heat_treatment_evaporation` | Heat treatment and evaporation | required | Always; record actual time-temperature and evaporator configuration | Product safety or functionality treatment and energy-efficient removal of bulk water | kg concentrate sent to drying |
| `homogenisation_spray_drying` | Homogenisation and spray drying | required | Homogenisation is conditional when not used; drying is always required and non-spray routes must be declared | Powder formation; Tiangong spray-drying process identity `311f94da-b94d-402e-ae4b-5e0b2389e07d` is an identity reference only | kg powder leaving dryer and fluid-bed system |
| `powder_finishing_packaging` | Powder finishing, optional instantisation, and packaging | required | Agglomeration, lecithination, gas flushing, and retail packaging are included only when performed | Final quality release and factory-gate product preparation | kg net released whole milk powder |
| `cleaning_wastewater_management` | Cleaning and on-site wastewater management | required | Allocate shared cleaning and treatment records to the covered production period | Record water, cleaning chemicals, recovered condensate, wastewater, sludge, and treatment routing | production-period records allocated to 1 kg net product |

### Process: Milk reception, storage, and composition standardisation (`milk_reception_standardisation`)

#### Inputs

##### Product flows

###### Raw whole milk at farm gate (`raw_whole_milk`)

Raw milk enters the foreground system as the principal milk-solids and milk-fat input. Select a product flow matching animal species, origin, and market state.

- Selected flow: Dataset-specific raw whole milk product flow matching the declared species and origin
- Flow property / unit: Mass / kg
- Amount rule: measured accepted raw-milk mass for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_milk_receipt`
- Sources: `idf-bulletin-445-2010`

###### Milk constituents for composition adjustment (`milk_constituent_adjustments`)

Cream, skim milk, milk retentate, milk permeate, or lactose is recorded separately when added or withdrawn to achieve the declared composition. Non-milk fat is not a permitted adjustment within this PCR.

- Selected flow: Dataset-specific milk constituent product flow matching the actual adjustment material
- Flow property / unit: Mass / kg
- Amount rule: measured mass added to or withdrawn from the standardisation balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_standardisation_balance`
- Sources: `codex-cxs-207-1999`

##### Waste flows

###### Rejected or spilled raw milk (`rejected_raw_milk`)

Rejected deliveries, reception spills, and milk sent to waste treatment are recorded as waste; material returned to the supplier is disclosed separately.

- Selected flow: Dataset-specific waste milk flow and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-derived rejected and spilled milk
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_losses`
- Sources: `fao-dairy-industry`

##### Elementary flows

No elementary input is expected from this process unless water is abstracted directly from the environment; record such abstraction with a location-appropriate elementary flow.

#### Outputs

##### Product flows

###### Standardised whole milk (`standardised_whole_milk`)

The output carries the measured fat, protein, and total-solids composition used for downstream heat and mass balances.

- Selected flow: Internal standardised whole milk intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass with laboratory composition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg standardised milk sent to heat treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_standardisation_balance`
- Sources: `codex-cxs-207-1999`

##### Waste flows

Withdrawn milk fractions that leave the product system without sale as co-products are recorded with their actual waste treatment route.

##### Elementary flows

No routine elementary output is expected; separately record any measured direct refrigerant loss from reception cooling.

### Process: Heat treatment and evaporation (`heat_treatment_evaporation`)

#### Inputs

##### Product flows

###### Standardised whole milk feed (`standardised_milk_feed`)

Standardised milk enters the declared heat-treatment and evaporation train.

- Selected flow: Internal standardised whole milk intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from standardisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evaporation_mass_balance`
- Sources: `tetra-pak-milk-powder-handbook`

###### Thermal energy for heat treatment and evaporation (`evaporation_thermal_energy`)

Record purchased heat, steam, or fuel by carrier. Where steam is generated on-site, record fuel and boiler inputs and avoid double counting purchased heat.

- Selected flow: Dataset-specific fuel, steam, or purchased heat product flow
- Flow property / unit: Energy / MJ; steam may additionally be recorded in kg with enthalpy calculation
- Amount rule: metered carrier quantity allocated to the batch and converted with documented net energy or enthalpy factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg concentrate output and per 1 kg net released whole milk powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `idf-bulletin-445-2010`

###### Electricity for pumps, separation, and evaporation (`evaporation_electricity`)

Record sub-metered electricity or allocate a complete meter balance using operating time and rated load only when sub-metering is unavailable.

- Selected flow: Geography- and period-specific electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered or transparently allocated electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg concentrate output and per 1 kg net released whole milk powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `idf-bulletin-445-2010`

##### Waste flows

###### Evaporator cleaning waste and product losses (`evaporator_product_loss`)

Milk solids discharged during start-up, shutdown, fouling removal, or cleaning are recorded with the actual recovery or treatment route.

- Selected flow: Dataset-specific dairy product loss or wastewater flow
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or dry-matter balance difference assigned to this process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_losses`
- Sources: `fao-dairy-industry`

##### Elementary flows

No elementary input is expected unless on-site water abstraction or direct fuel extraction is modelled; ordinary water and fuels supplied by utilities are product flows.

#### Outputs

##### Product flows

###### Concentrated whole milk (`concentrated_whole_milk`)

Concentrate mass and total-solids fraction are measured at the dryer feed boundary.

- Selected flow: Internal concentrated whole milk intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured concentrate mass and total-solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg concentrate sent to drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evaporation_mass_balance`
- Sources: `tetra-pak-milk-powder-handbook`

###### Recovered evaporator condensate (`evaporator_condensate`)

Condensate is tracked separately as an internal reuse stream, discharged water, or exported product according to actual quality and routing.

- Selected flow: Internal recovered water or dataset-specific wastewater/product-water flow
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured condensate quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg concentrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `idf-bulletin-445-2010`

##### Waste flows

Condensate failing reuse or discharge requirements is transferred to wastewater management and not credited as recovered water.

##### Elementary flows

###### Direct combustion and refrigerant emissions (`evaporation_direct_emissions`)

Record measured or source-factor-calculated emissions from on-site combustion and refrigerant leakage without duplicating emissions already embedded in purchased energy datasets.

- Selected flow: Pollutant-specific elementary flow to the measured environmental compartment
- Flow property / unit: Mass / kg
- Amount rule: continuous measurement, periodic test, refrigerant inventory balance, or documented factor multiplied by collected fuel activity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `idf-bulletin-445-2010`

### Process: Homogenisation and spray drying (`homogenisation_spray_drying`)

#### Inputs

##### Product flows

###### Concentrated whole milk feed (`dryer_concentrate_feed`)

The dryer feed includes concentrate and any declared permitted fortification or instantisation ingredients added before drying.

- Selected flow: Internal concentrated whole milk intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured dryer-feed mass and total-solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg powder leaving drying and fluid-bed stages
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dryer_mass_balance`
- Sources: `tetra-pak-milk-powder-handbook`

###### Thermal energy for drying air (`dryer_thermal_energy`)

Record fuel, steam, or purchased heat used to heat drying air and fluid beds by carrier and actual metering boundary.

- Selected flow: Dataset-specific fuel, steam, or purchased heat product flow
- Flow property / unit: Energy / MJ
- Amount rule: metered or calculated energy allocated to dryer operation for the batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg powder leaving drying and per 1 kg net released whole milk powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `tetra-pak-milk-powder-handbook`; `idf-bulletin-445-2010`

###### Electricity for homogenisation, atomisation, fans, and powder handling (`dryer_electricity`)

Record electricity for the homogeniser when used, feed pumps, atomiser, fans, cyclones or filters, fluid beds, cooling, and powder conveying.

- Selected flow: Geography- and period-specific electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or documented allocation from complete equipment records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg powder leaving drying and per 1 kg net released whole milk powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `tetra-pak-milk-powder-handbook`; `idf-bulletin-445-2010`

##### Waste flows

###### Off-specification powder and unrecovered fines (`dryer_powder_loss`)

Separate internally recycled fines from powder sold as a lower-grade co-product and powder sent to animal feed, rework, wastewater, or disposal.

- Selected flow: Dataset-specific off-specification dairy powder or waste flow by actual route
- Flow property / unit: Mass / kg
- Amount rule: measured collection and destination records reconciled with dryer mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dryer_mass_balance`
- Sources: `tetra-pak-milk-powder-handbook`

##### Elementary flows

Drying air is not quantified as an elementary input unless the study explicitly inventories atmospheric resource flows; energy and direct emissions remain mandatory.

#### Outputs

##### Product flows

###### Whole milk powder from dryer (`dryer_powder_output`)

Powder output is measured before final packaging and carries moisture, fat, protein, bulk-density, and route-specific quality results.

- Selected flow: Whole milk powder `f268b0b6-9cf3-4bba-aaf7-7b57e4f3fac0`
- Flow property / unit: Mass / kg
- Amount rule: measured powder mass leaving the dryer and fluid-bed system, including recovered fines only once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg powder leaving drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dryer_mass_balance`
- Sources: `codex-cxs-207-1999`; `tetra-pak-milk-powder-handbook`

##### Waste flows

Collected powder dust that is not returned to product is recorded under `dryer_powder_loss` with its actual treatment or recovery route.

##### Elementary flows

###### Powder particulate released to air (`dryer_particulate_air`)

Record particulate that passes final control equipment as an elementary emission; do not treat internally recovered cyclone or filter powder as an emission.

- Selected flow: Particulate matter elementary flow to air matching the reported size fraction and compartment
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or site-specific emission factor multiplied by dryer throughput
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `tetra-pak-milk-powder-handbook`

### Process: Powder finishing, optional instantisation, and packaging (`powder_finishing_packaging`)

#### Inputs

##### Product flows

###### Dryer powder (`finishing_powder_feed`)

Dryer powder enters final blending, sieving, agglomeration or lecithination when used, quality release, and packaging.

- Selected flow: Whole milk powder `f268b0b6-9cf3-4bba-aaf7-7b57e4f3fac0`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net released whole milk powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_quality`
- Sources: `tetra-pak-milk-powder-handbook`

###### Instantisation and fortification ingredients (`finishing_ingredients`)

Lecithin, vitamins, minerals, or other declared ingredients are recorded individually. Material additions that change the product identity beyond whole milk powder require another PCR.

- Selected flow: Ingredient-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: weighed batch addition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_ingredients`
- Sources: `tetra-pak-milk-powder-handbook`; `codex-cxs-207-1999`

###### Packaging materials and packaging gases (`packaging_materials`)

Primary, secondary, and tertiary packaging and any nitrogen or carbon dioxide used for gas flushing are recorded by material and packaging format.

- Selected flow: Material-specific packaging and gas product flows
- Flow property / unit: Mass / kg
- Amount rule: purchased-and-issued packaging balance minus documented unused returns, divided by net released product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `idf-bulletin-445-2010`

###### Finishing and packaging electricity (`finishing_electricity`)

Record electricity for fluidisation or agglomeration, cooling, conveying, sieving, blending, compressed air, and packaging.

- Selected flow: Geography- and period-specific electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered or documented equipment allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `idf-bulletin-445-2010`

##### Waste flows

###### Packaging scrap and rejected finished powder (`finishing_waste`)

Record packaging scrap, product retained for rework, and rejected powder separately by destination.

- Selected flow: Material-specific packaging waste or off-specification powder flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste and rework destination records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_losses`
- Sources: `idf-bulletin-445-2010`

##### Elementary flows

No routine elementary input is expected.

#### Outputs

##### Product flows

###### Released whole milk powder (`reference_whole_milk_powder`)

This is the quantitative reference. Net mass and composition are based on released lots only; packaging tare is excluded from the 1 kg product mass.

- Selected flow: Whole milk powder `f268b0b6-9cf3-4bba-aaf7-7b57e4f3fac0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net released product after quality acceptance
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_batch_output_quality`
- Sources: `codex-cxs-207-1999`; `idf-bulletin-445-2010`

##### Waste flows

Rejected lots are not included in the reference output and remain under `finishing_waste` until reworked, sold as a declared co-product, or treated as waste.

##### Elementary flows

Record direct refrigerant or packaging-gas releases when measured; do not duplicate upstream production emissions for purchased gases.

### Process: Cleaning and on-site wastewater management (`cleaning_wastewater_management`)

#### Inputs

##### Product flows

###### Fresh water and recovered water for cleaning (`cleaning_water`)

Record fresh water and suitable recovered condensate separately so reuse is visible and water intake is not overstated.

- Selected flow: Source-appropriate water supply product flow and internal recovered-water flow
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: metered water by source and use, allocated to the covered production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `idf-bulletin-445-2010`; `fao-dairy-industry`

###### Cleaning and sanitation chemicals (`cleaning_chemicals`)

Record alkaline, acid, disinfectant, and other cleaning agents by active product and concentration.

- Selected flow: Chemical-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: measured issue or purchase balance corrected for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `idf-bulletin-445-2010`; `fao-dairy-industry`

##### Waste flows

No waste input is expected unless wastewater is transferred from another declared on-site product system; disclose and prevent double counting when that occurs.

##### Elementary flows

Direct water abstraction is recorded as an elementary input only when it crosses from the environment rather than from a water-supply product system.

#### Outputs

##### Product flows

Recovered condensate or treated water exported for another product system is reported only when it meets the declared quality and transfer criteria; otherwise it remains an internal reuse or waste stream.

##### Waste flows

###### Dairy wastewater to treatment (`dairy_wastewater`)

Wastewater quantity and treatment route are recorded together with representative load indicators. Product losses to drain remain in the dry-matter balance.

- Selected flow: Dataset-specific dairy wastewater flow to the actual treatment route
- Flow property / unit: Volume / m3; pollutant loads additionally in kg
- Amount rule: metered discharge volume with sampled or calculated COD, BOD, total nitrogen, total phosphorus, and milk-solids loads as available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `idf-bulletin-445-2010`; `fao-dairy-industry`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record wet and dry sludge mass and the actual recovery, land application, digestion, incineration, or disposal route.

- Selected flow: Dataset-specific wastewater sludge waste flow
- Flow property / unit: Mass / kg wet mass and kg dry matter
- Amount rule: measured sludge quantity and solids fraction allocated to the covered production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `fao-dairy-industry`

##### Elementary flows

###### On-site wastewater-treatment emissions (`wastewater_treatment_emissions`)

Record direct methane, nitrous oxide, or other measured emissions from on-site treatment when applicable; off-site treatment emissions belong to the selected treatment dataset.

- Selected flow: Pollutant-specific elementary flow to the measured compartment
- Flow property / unit: Mass / kg
- Amount rule: measured emission or documented factor multiplied by collected treatment activity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released whole milk powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `idf-bulletin-445-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | separately metered unit operations | Avoid allocation by subdividing reception, standardisation, evaporation, drying, finishing, cleaning, and packaging wherever process meters and mass balances permit direct assignment. | `idf-bulletin-445-2010` |
| `allocation_rule_2` | internal fines, condensate, heat recovery, and rework | Treat material or energy returned to the same production system as an internal loop. Record gross generation and return where available, but do not create a co-product credit or double count the returned flow. | `idf-bulletin-445-2010` |
| `allocation_rule_3` | cream, skim milk, or other saleable dairy co-products from standardisation | When subdivision cannot assign shared burdens, use a documented physicochemical allocation reflecting milk-component and resource relationships. Apply factors to each shared input or emission category rather than assuming one mass-only factor for all resources. | `idf-bulletin-445-2010` |
| `allocation_rule_4` | residual shared burdens without a defensible physicochemical relationship | Use economic allocation only as a disclosed fallback or sensitivity case, based on representative multi-year prices where available. Report quantities, prices, period, geography, and resulting factors. | `idf-bulletin-445-2010` |
| `allocation_rule_5` | off-specification powder and material sent to feed, rework, or disposal | Classify the output according to its actual destination and market function. Do not assign avoided-burden credits unless an explicitly extended lifecycle model applies system expansion and reports the substituted product and sensitivity. | `idf-bulletin-445-2010` |
| `allocation_rule_6` | shared site utilities and cleaning | Allocate only the residual shared quantity after direct metering, using documented causal drivers such as operating time, clean-in-place circuit volume, heat duty, throughput, or wastewater load; disclose the driver and reconciliation to site totals. | `idf-bulletin-445-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_milk_receipt` | `milk_reception_standardisation` | raw milk quantity, composition, origin, and transport | weighbridge or calibrated flowmeter plus intake laboratory record and delivery log | accepted mass; rejected mass; species; supplier/origin; collection date; fat; protein; total solids or water; transport distance and mode | reconcile delivery tickets to intake meter and laboratory sample identifier | kg; % m/m; km | each delivery and batch | representative continuous 12-month period or declared seasonal campaign | all suppliers and receiving points serving the product | sum accepted mass and mass-weight composition by batch; retain supplier stratification | calibration; sampling plan; laboratory method; delivery-ticket reconciliation |
| `cp_standardisation_balance` | `milk_reception_standardisation` | standardised milk and adjustment constituents | calibrated meters, tank levels, and laboratory composition results | input and output masses; fat; protein; total solids; cream/skim/retentate/permeate/lactose additions or withdrawals | closed batch mass and milk-solids balance | kg; % m/m | each batch | same period as product output | all standardisation trains | reconcile inputs, outputs, inventory change, and losses | meter calibration; sample chain; balance closure |
| `cp_evaporation_mass_balance` | `heat_treatment_evaporation` | heat treatment and concentrate production | batch records, time-temperature recorder, flowmeters, density and total-solids tests | feed mass; feed solids; time-temperature; concentrate mass; concentrate solids; condensate by destination; start-up/shutdown loss | link control-system records to batch identifier | kg; % m/m; °C; s or min | each batch | same period as product output | all heat-treatment and evaporator lines | dry-matter and water balance by batch, then production-weight average | sensor calibration; laboratory duplicates; condensate meter check |
| `cp_dryer_mass_balance` | `homogenisation_spray_drying` | dryer feed, powder, fines, rejects, and emissions activity | feed and powder meters, hopper or silo inventory, total-solids and moisture tests, filter or cyclone recovery logs | concentrate feed mass and solids; powder output and moisture; recovered fines; rework; rejects; inventory change; dryer hours | reconcile milk-solids entering and leaving dryer system | kg; % m/m; h | each batch or shift | same period as product output | all dryers and powder recovery equipment | dry-matter balance with recycled fines counted once | meter calibration; moisture method; inventory reconciliation; exception log |
| `cp_batch_output_quality` | `powder_finishing_packaging` | net released product and product identity | released-lot weights, packaging tare, and certificate of analysis | gross mass; tare; net mass; fat; water; protein in milk solids-not-fat; product form; heat class; lot status | sum released net mass and link laboratory results to lots | kg; % m/m | each released lot | same period as inventory | all finished-product silos and packing lines | exclude rejected lots until release or rework; production-weight quality results | scale calibration; laboratory accreditation or QA; release authorisation |
| `cp_finishing_ingredients` | `powder_finishing_packaging` | lecithin, vitamins, minerals, and other additions | batch dosing records and inventory balance | ingredient identity; supplier lot; mass added; concentration; destination batch | reconcile weighed additions with stock issue and returns | kg | each batch | same period as product output | all finishing lines | sum by ingredient and divide by released product | calibrated scales; formulation approval; lot traceability |
| `cp_packaging_records` | `powder_finishing_packaging` | primary, secondary, and tertiary packaging and gases | bill of materials, issue/return records, packaged-unit counts, and scrap logs | material; unit mass; units used; unused returns; scrap; gas mass; product format | material balance by packaging format | kg | each lot or shift | representative 12 months or declared campaign | all packaging lines for the product | net issued material divided by released net product | supplier specification; unit-mass check; inventory reconciliation |
| `cp_energy_and_utilities` | all foreground processes | electricity, fuels, steam, heat, compressed air, and refrigeration | calibrated sub-meters, utility invoices, fuel meters, and operating logs | carrier; meter start/end; fuel mass or volume; lower heating value; steam mass, pressure and enthalpy; operating hours; allocation driver | direct assignment first; reconcile residual allocation to site totals | kWh; MJ; kg; m3 | continuous or each shift; invoice monthly | at least 12 representative months or full campaign | all relevant equipment and shared utility systems | sum by carrier and process; normalize to released product after allocation | meter calibration; invoice reconciliation; documented conversion factors |
| `cp_water_and_wastewater` | `cleaning_wastewater_management` | water intake, condensate reuse, wastewater, and sludge | source and discharge meters, sampling, treatment logs, and sludge tickets | water by source/use; condensate by destination; discharge volume; COD; BOD; total nitrogen; total phosphorus; sludge wet mass and solids; treatment route | meter balance plus representative composite sampling | m3; kg pollutant; kg sludge | continuous volume; representative samples by permit or operating plan | at least 12 representative months or full campaign | all water sources, clean-in-place circuits, and treatment routes serving product | reconcile intake, reuse, evaporation, product water, discharge, and inventory | meter calibration; sample chain; laboratory QA; permit reports |
| `cp_cleaning_records` | `cleaning_wastewater_management` | cleaning and sanitation chemicals | clean-in-place recipe, dosing meter, chemical issue record, and inventory balance | chemical identity; concentration; dose; cycle count; circuit; recovered or discarded solution | sum active product by circuit and allocate residual shared cycles causally | kg product and kg active substance | each cleaning cycle | same period as production | all circuits used by covered processes | direct assignment by circuit; reconcile to purchases and inventory | dosing calibration; concentration verification; cycle log |
| `cp_material_losses` | all foreground processes | spills, rejects, rework, waste, and co-products | incident, rework, waste transfer, and sales records | material identity; wet mass; solids; destination; recovered quantity; treatment; batch | reconcile losses and destinations with process mass balances | kg wet mass; kg dry matter | each event and batch | same period as production | all covered lines and storage areas | sum by material and destination; count rework only at final destination | weigh tickets; transfer records; mass-balance closure |
| `cp_direct_emissions` | relevant foreground processes | combustion, refrigerant, particulate, and treatment emissions | stack test or continuous monitor, fuel records, refrigerant inventory, maintenance logs, and treatment activity | pollutant; compartment; measured concentration and flow; test period; fuel activity; refrigerant charge and refill; emission factor and source | use measurements where representative; otherwise multiply collected activity by disclosed factor | kg pollutant; mg/Nm3; Nm3; kg refrigerant | continuous, periodic test, or annual inventory as applicable | representative operating states in the production period | all direct emission points serving covered processes | aggregate by pollutant and compartment; prevent overlap between measurement and factor methods | method, detection limit, calibration, operating-state evidence, factor reference |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | released product | Net released powder mass = gross packed mass - packaging tare; normalize all allocated foreground quantities by net released powder mass. | gross mass; tare; released-lot status | kg input or output per 1 kg net released powder | `idf-bulletin-445-2010` |
| `calc_milk_solids_balance` | standardisation through drying | For the same batch period, dry matter in raw milk and added milk constituents = dry matter in released powder + saleable co-products + off-specification material + wastewater/product losses + inventory change + unexplained difference. Report the unexplained percentage. | mass and solids fraction for all milk-bearing inputs and outputs | closed dry-matter balance and unexplained difference | `codex-cxs-207-1999`; `tetra-pak-milk-powder-handbook` |
| `calc_water_balance` | evaporation, drying, and cleaning | Water input in milk, ingredients, and utility water = water in product and co-products + separately recovered condensate + wastewater + evaporated water + inventory change + unexplained difference. Keep internal reuse out of net intake. | wet mass; solids or moisture; water meters; condensate; wastewater | water balance by destination per reference flow | `idf-bulletin-445-2010`; `fao-dairy-industry` |
| `calc_energy_normalisation` | each energy carrier | Normalize collected carrier quantity after direct assignment and disclosed allocation. For fuels, retain quantity and lower-heating-value conversion; for steam, retain mass and enthalpy difference. | meter records; fuel properties; steam state; released product | kWh electricity or MJ thermal energy per reference flow | `idf-bulletin-445-2010` |
| `calc_physicochemical_allocation` | multi-product dairy processing | After subdivision, allocate each residual shared input or emission using the documented physicochemical or resource-use factor applicable to that stream; factor for product i = quantity_i × relation_factor_i divided by the sum over co-products. | co-product quantities; stream-specific relation factors; shared burden | allocation factor by burden stream and product | `idf-bulletin-445-2010` |
| `calc_packaging_intensity` | packaging | Packaging intensity by material = net packaging material issued to released lots divided by net released whole milk powder. | issued material; returns; scrap attribution; released net product | kg packaging material per kg net product | `idf-bulletin-445-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and reference flow | Demonstrate whole-milk-powder identity and exact Tiangong product-flow UUID; retain released-lot fat, water, and protein-in-milk-solids-not-fat results and all required qualifiers. | certificate of analysis; specification; Tiangong identity reference; lot release record |
| `dq_temporal` | all foreground records | Use one coherent representative period, preferably 12 consecutive months for continuous plants or the complete declared campaign; explain shutdowns, abnormal production, seasonality, and substitutions. | meter dates; production calendar; invoice period; exception log |
| `dq_technological` | process route | Identify evaporator, homogeniser, dryer stage configuration, powder recovery, agglomeration or lecithination, utility generation, emission controls, and packaging line represented by the data. | equipment list; process flow diagram; operating records |
| `dq_geographical` | raw milk and upstream datasets | Match raw-milk origin, transport, electricity, fuel, heat, water, and treatment datasets to the declared geography or justify proxies. | supplier origin; route records; dataset metadata; proxy rationale |
| `dq_completeness` | mass, energy, water, and emissions | Reconcile milk-solids, wet-mass, water, energy-carrier, packaging, wastewater, and waste records to site or line totals; quantify and explain unresolved differences and exclusions. | signed balance sheets; meter and invoice reconciliation; exclusion register |
| `dq_measurement` | measured and calculated values | Record instrument identifier, calibration status, sampling method, laboratory method, detection limit where relevant, calculation formula, and responsible record owner. | calibration certificates; laboratory QA; calculation workbook; audit trail |
| `dq_allocation` | shared processes and co-products | Preserve direct measurements, shared totals, co-product quantities, factors, prices when used, allocation period, formulas, and sensitivity results. | allocation workbook; production and price records; reconciliation to site total |
| `dq_source_age` | external factors and secondary datasets | Use factors and secondary datasets current for the study period where available; record version, geography, technology, and replacement rationale for every proxy. | dataset metadata; factor citation; update log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR and reference identity | The manifest id, Markdown `canonical_pcr_id`, and reference product flow must identify whole milk powder, and the reference amount must be exactly 1 kg net product using Mass and the Units of mass unit group. | `codex-cxs-207-1999` |
| `validation_rule_2` | released product composition | Reject the dataset as outside this PCR if released powder has milk fat below 26% or at or above 42% m/m, water above 5% m/m, or milk protein below 34% m/m of milk solids-not-fat. | `codex-cxs-207-1999` |
| `validation_rule_3` | required qualifiers | Fail completeness when species/origin, composition, product form, heat treatment, drying route, packaging state, geography/time, allocation method, or factory-gate release specification is missing. | `codex-cxs-207-1999`; `idf-bulletin-445-2010` |
| `validation_rule_4` | process coverage | Require records for reception and standardisation, heat treatment and evaporation, drying, finishing and packaging, cleaning and wastewater, and all applicable transport, utilities, refrigerants, wastes, and direct emissions; mark a step not applicable only with evidence. | `idf-bulletin-445-2010`; `fao-dairy-industry`; `tetra-pak-milk-powder-handbook` |
| `validation_rule_5` | mass and water balances | Require a common batch or production period for milk-solids and water balances. Report unexplained differences and block review when balance scope, inventory change, or recycled fines could cause material double counting. | `idf-bulletin-445-2010`; `tetra-pak-milk-powder-handbook` |
| `validation_rule_6` | allocation | Require subdivision before allocation, documented factors for every residual shared burden, factors summing to one for each shared burden, and reconciliation of allocated quantities to site totals. | `idf-bulletin-445-2010` |
| `validation_rule_7` | data provenance | Every foreground or calculated value must link to a collection protocol and period; every external factor or rule must link to a listed source id. Tiangong UUID lookup is identity evidence and is not listed as an external data source. | `idf-bulletin-445-2010` |
| `validation_rule_8` | double counting | Internal fines, condensate, heat recovery, rework, and shared-site utility allocation must be checked so generation and reuse are visible without counting the same burden or product twice. | `idf-bulletin-445-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground whole-milk-powder production data package and factory-gate product dataset |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after review and combined with representative upstream raw-milk, energy, material, transport, and treatment datasets |
| allowed_use | Attributional factory-gate modelling of whole milk powder with matching composition, species, geography, technology, packaging state, period, and allocation method; extended lifecycle models may add downstream stages explicitly |
| excluded_use | Skim, partly skimmed, whey, cream, fat-filled, infant-formula, or formulated powders; comparative claims when product identity, allocation, geography, technology, packaging, or data quality is not equivalent; use as a cradle-to-consumer dataset without added downstream stages |
| required_metadata | PCR id and version; product-flow UUID; facility geography; reference period; raw-milk species and origin; composition; product form and heat class; evaporation and drying technology; packaging state; included processes; upstream dataset identities; allocation method; data owner and review status |
| required_quality_disclosure | Metering and sampling coverage; laboratory methods; mass, dry-matter, and water balance closure; allocation factors and sensitivity; temporal, geographical, and technological representativeness; data gaps, proxies, exclusions, uncertainty, and unresolved identities |
| update_trigger | Material change in raw-milk sourcing or composition, product specification, evaporator or dryer technology, energy supply, packaging, emission control, water reuse, wastewater treatment, allocation method, facility geography, or reference period; replacement of a material proxy or source rule also triggers review |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-207-1999` | standard | Codex Alimentarius, CXS 207-1999, Standard for Milk Powders and Cream Powder, official English text, https://www.fao.org/input/download/standards/333/CXS_207e.pdf, retrieved 2026-08-10 | whole-milk-powder definition, permitted composition adjustment, identity limits, exclusions, product validation |
| `idf-bulletin-445-2010` | official_guidance | International Dairy Federation Bulletin 445/2010, A common carbon footprint approach for dairy: The IDF guide to standard lifecycle assessment methodology for the dairy sector, https://www.ukidf.org/documents/bulletin445.pdf, retrieved 2026-08-10 | processing-gate functional unit, processing boundary, inventory data fields, allocation, completeness, reporting and data quality |
| `fao-dairy-industry` | official_guidance | Food and Agriculture Organization of the United Nations, Dairy Industry, https://www.fao.org/4/x6114e/x6114e06.htm, retrieved 2026-08-10 | reception and milk-powder process context, evaporation, cleaning wastewater, product losses, treatment outputs |
| `tetra-pak-milk-powder-handbook` | handbook | Tetra Pak Dairy Processing Handbook, Milk and whey powdered ingredients, https://dairyprocessinghandbook.tetrapak.com/chapter/milk-and-whey-powdered-ingredients, retrieved 2026-08-10 | whole-milk-powder route, standardisation, pasteurisation, evaporation, homogenisation, spray and multi-stage drying, fines recovery, agglomeration and product quality fields |
