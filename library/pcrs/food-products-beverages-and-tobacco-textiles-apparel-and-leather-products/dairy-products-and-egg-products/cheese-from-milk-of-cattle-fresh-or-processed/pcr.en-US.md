---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-cattle-fresh-or-processed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cheese from milk of cattle, fresh or processed

## 1. Scope and Applicability

This PCR supports foreground data packages for fresh, unripened, ripened, mould-ripened, grated, powdered, or processed cheese whose dairy material is from cattle. It covers cattle-milk curd and whey cheese when the declared product specification and market designation identify the output as cheese. The foreground gate starts with cattle milk or a declared cattle-milk cheese input received at the cheese plant and ends with finished cheese ready for dispatch at the plant gate. Product-specific operations such as pasteurisation, coagulation, curd handling, salting, pressing, ripening, grinding, blending, melting, emulsification, drying, packaging, refrigeration, cleaning, and on-site wastewater handling are included when performed for the declared route.

Farm production of cattle milk, production of purchased ingredients and packaging, off-site transport, distribution, retail, consumer use, and end-of-life are outside the foreground gate and require linked upstream or downstream datasets when the study scope includes them. Cheese made solely from buffalo, sheep, goat, or other non-cattle milk; plant-based cheese analogues; dairy powders; butter; and whey ingredients not marketed as cheese are excluded. A mixed-species product is outside this PCR unless cattle-milk inputs and burdens are separately measured or an explicitly justified allocation is applied and the mixture is disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-cattle-fresh-or-processed |
| classification_refs | CPC 3.0 `22251`, Cheese from milk of cattle, fresh or processed |
| covered_products | cattle-milk fresh/unripened cheese, ripened and mould-ripened cheese, cheese curd, whey cheese marketed as cheese, grated or powdered cheese, and processed cheese |
| excluded_products | cheese solely from non-cattle milk; plant-based analogues; butter; milk or whey powders; whey streams not marketed as cheese; mixed-species cheese without separable cattle-milk inventory |
| representative_product | finished cattle-milk cheese at the manufacturing plant gate |
| production_route | route-specific natural/fresh cheese manufacture or processed-cheese manufacture, including applicable finishing, packaging, cold storage, cleaning, and wastewater operations |
| market_state | finished product, manufactured, packaged or unpackaged as declared, ready for dispatch at plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | finished cheese from milk of cattle produced by the declared fresh, natural/ripened, or processed-cheese route |
| How much | 1 kg net cheese product |
| How well | conforms to the declared cheese specification, cattle-milk origin, product form, moisture/fat basis, ripening state, ingredient formulation, and packaging state |
| How long or cycle | one production batch through the plant gate; the full declared ripening or holding period is included when applicable |
| reference_flow_link | `finished_cattle_milk_cheese` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cheese from milk of cattle, fresh or processed `221efbce-690d-492b-9d15-79d0ac862e35` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cattle-milk share; fresh/unripened, ripened, mould-ripened, grated, powdered, whey-cheese, or processed form; milk heat-treatment state; moisture or fat-in-dry-matter basis; ripening duration and conditions; ingredient and additive formulation; packaged/unpackaged state; packaging materials; manufacturing geography; plant-gate condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference output as net kg of finished cheese at the declared plant gate; exclude transport packaging not sold with the product from the product mass. |
| `ingredient_mass_basis` | milk, cheese, whey, ingredients, salt, cleaning chemicals, packaging, and solid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass as received and disclose dry-matter, fat, protein, or concentration basis whenever that basis affects yield, allocation, or comparability. |
| `energy_conversion` | purchased electricity, fuel, steam, and thermal energy | Energy | kWh or MJ | Preserve the measured carrier and unit; use 1 kWh = 3.6 MJ only for reported conversion and do not combine electricity and thermal energy before carrier-specific upstream datasets are linked. |
| `water_volume_mass_conversion` | process water and wastewater | Volume or Mass | m3 or kg | Preserve metered volume; if converted to mass, declare density and temperature assumptions. Annual BAT comparisons remain per tonne of raw materials and must not be relabelled as per tonne of cheese. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | cattle milk or cattle-milk cheese received at the manufacturing plant, with mass, composition, temperature, origin, and upstream dataset reference declared |
| starting_condition_role | purchased dairy input and foreground plant-gate starting condition |
| product_classification_scope | cattle-milk cheese matching CPC 3.0 `22251` and the declared cheese specification |
| recursive_input_rule | a cattle-milk cheese input used to make processed cheese remains an explicit technosphere input and links to its own upstream dataset; this PCR is not recursively reapplied inside the same foreground process |
| upstream_dataset_requirement | link cattle milk, natural cheese, ingredients, packaging, electricity, fuel, water supply, and waste treatment to representative upstream datasets for the declared geography and technology |
| disclosure | declare route, plant location, reporting period, dairy-input origin and composition, product form, ripening/holding time, packaging state, co-product destinations, excluded operations, and proxy datasets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_operations` | foreground manufacturing | Include every unit operation performed at the reporting plant from dairy-input receipt through dispatch-ready cheese, including route-specific milk preparation, coagulation, curd treatment, drainage, salting, pressing, ripening, processing, drying, packaging, refrigeration, cleaning, and on-site wastewater handling. | `us-epa-ap42-9-6-1-cheese` |
| `boundary_product_identity` | product inclusion | Confirm that the output is cheese made from cattle milk or cattle-milk products and disclose whether it is fresh/unripened, ripened, mould-ripened, whey cheese, grated/powdered, or processed. | `codex-cxs-283-1978-2024` |
| `boundary_upstream_links` | purchased inputs | Keep farm milk production and manufacture of purchased materials outside the foreground gate but link representative upstream datasets; do not treat an omitted upstream dataset as zero burden. | `eu-2021-2279-environmental-footprint` |
| `boundary_whey_recovery` | whey and acid whey | Record separated whey and its destination; include on-site concentration, drying, reuse, feed preparation, or wastewater routing when performed at the plant. | `us-epa-ap42-9-6-1-cheese`; `eu-2019-2031-fdm-bat` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| natural_cheese_manufacture | Natural or fresh cheese manufacture | conditional | include for cheese made from cattle milk by coagulation and curd/whey separation | foreground production | 1 kg finished natural, fresh, ripened, whey, grated, or powdered cheese |
| processed_cheese_manufacture | Processed-cheese manufacture | conditional | include when natural cheese is cleaned, blended, melted, emulsified, or otherwise processed | foreground production | 1 kg finished processed cheese |
| site_utilities_cleaning_and_dispatch | Site utilities, cleaning, packaging, cold storage, and dispatch | required | include operations attributable to the declared product and reporting period | foreground support and finishing | 1 kg finished cheese at plant gate |

### Process: Natural or fresh cheese manufacture (`natural_cheese_manufacture`)

#### Inputs

##### Product flows

###### Cattle milk received for cheesemaking (`cattle_milk_input`)

Record cattle milk crossing the plant boundary, including accepted and rejected loads, composition, temperature, and upstream dataset identity.

- Selected flow: Raw milk of cattle `aa8aebbb-724a-417b-8372-2dccd499ce71`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted cattle-milk mass normalized to finished cheese output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cheese from the natural/fresh route
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_route_batch_balance`
- Sources: `codex-cxs-283-1978-2024`
- Range: Provisional milk-to-cheese screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 20
  - Unit: kg cattle milk/kg finished cheese
  - Basis: per kg finished cheese from the natural/fresh route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Starter, rennet, salt, and route-specific ingredients (`cheesemaking_ingredients`)

Record each ingredient separately in the data package even when this PCR groups their collection rule. Product specifications determine which cultures, enzymes, salts, water, and permitted ingredients apply.

- Selected flow: Rennet (chymosin) `d71ffeab-e448-497c-9246-30967da0da78`; separate selected flows for cultures, salt, water, and other ingredients
- Flow property / unit: Mass / kg
- Amount rule: measured quantity of each ingredient issued to the batch, with concentration and active-content basis disclosed where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cheese from the natural/fresh route
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_route_batch_balance`
- Sources: `codex-cxs-283-1978-2024`; `us-epa-ap42-9-6-1-cheese`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished cattle-milk cheese (`finished_cattle_milk_cheese`)

Record net conforming product mass after the full declared route, including ripening, drying, or grating losses when those operations occur before the plant gate.

- Selected flow: Cheese from milk of cattle, fresh or processed `221efbce-690d-492b-9d15-79d0ac862e35`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output supported by measured batch yield
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_natural_route_batch_balance`
- Sources:

###### Separated whey or recovered whey product (`whey_coproduct`)

Record wet whey mass, solids content, destination, and whether it is sold, internally processed, fed, digested, or treated as wastewater.

- Selected flow: Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated whey leaving curd separation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished cheese from the natural/fresh route
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_natural_route_batch_balance`
- Sources: `us-epa-ap42-9-6-1-cheese`; `eu-2019-2031-fdm-bat`
- Range: Provisional whey mass-balance screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg wet whey/kg finished cheese
  - Basis: per kg finished cheese from the natural/fresh route; zero applies only when no separable whey stream exists
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Off-spec curd, cheese losses, and unrecovered solids (`natural_route_solid_loss`)

Keep food-grade co-products separate from waste. Record off-spec solids and their destination only when they are not recovered as a product.

- Selected flow: route- and destination-specific waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured rejects, trimmings, floor loss, and unrecovered product solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cheese from the natural/fresh route
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_route_batch_balance`
- Sources:
- Range: Provisional solid-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg finished cheese
  - Basis: per kg finished cheese from the natural/fresh route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Processed-cheese manufacture (`processed_cheese_manufacture`)

#### Inputs

##### Product flows

###### Natural cattle-milk cheese for processing (`natural_cheese_input`)

Record each natural-cheese input and link its upstream dataset without recursively embedding this PCR in the processed-cheese foreground process.

- Selected flow: Cheese from milk of cattle, fresh or processed `221efbce-690d-492b-9d15-79d0ac862e35`
- Flow property / unit: Mass / kg
- Amount rule: measured natural-cheese mass charged to the processed-cheese batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished processed cheese
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processed_route_batch_balance`
- Sources: `us-epa-ap42-9-6-1-cheese`
- Range: Provisional processed-cheese input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.5
  - Unit: kg natural cheese/kg finished processed cheese
  - Basis: per kg finished processed cheese
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Added dairy materials, water, emulsifying salts, and other ingredients (`processed_cheese_ingredients`)

Record every formulation component separately with concentration and dry-matter basis. Do not infer permitted ingredients from this PCR; use the applicable product specification and jurisdiction.

- Selected flow: separate route-specific product flows for each formulation component
- Flow property / unit: Mass / kg
- Amount rule: measured batch formulation quantity for each component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished processed cheese
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processed_route_batch_balance`
- Sources: `us-epa-ap42-9-6-1-cheese`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished processed cattle-milk cheese (`finished_processed_cheese`)

Record net conforming processed cheese after blending, melting/emulsification, forming, cooling, and any in-line packaging included in the route.

- Selected flow: Cheese from milk of cattle, fresh or processed `221efbce-690d-492b-9d15-79d0ac862e35`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output supported by measured batch yield
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processed_route_batch_balance`
- Sources:

##### Waste flows

###### Processed-cheese trimmings and off-spec product (`processed_route_solid_loss`)

Record cleaned rinds, trimmings, start-up losses, and off-spec product by destination; exclude internally reworked material from waste and disclose rework.

- Selected flow: route- and destination-specific waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured non-reworked solid loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished processed cheese
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processed_route_batch_balance`
- Sources: `us-epa-ap42-9-6-1-cheese`
- Range: Provisional processed-route solid-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg finished processed cheese
  - Basis: per kg finished processed cheese
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Site utilities, cleaning, packaging, cold storage, and dispatch (`site_utilities_cleaning_and_dispatch`)

#### Inputs

##### Product flows

###### Purchased electricity and thermal energy (`site_energy_input`)

Record electricity, fuels, purchased steam, and recovered heat as separate carriers. Allocate shared site utilities using metering or a documented causal driver.

- Selected flow: geography- and carrier-specific electricity, fuel, or steam flow
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered or invoice-reconciled carrier-specific use attributable to the declared cheese route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cheese at plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utility_records`
- Sources: `eu-2019-2031-fdm-bat`
- Range: Provisional site-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh-equivalent/kg finished cheese
  - Basis: broad screening range only; electricity and thermal carriers remain separate in the inventory
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and cleaning water (`site_water_input`)

Record product water, brine make-up, cooling water make-up, cleaning-in-place water, and other water uses separately when meters or engineering balances permit.

- Selected flow: geography- and source-specific water supply flow
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: metered water intake minus demonstrably unrelated site uses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cheese at plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_wastewater_records`
- Sources: `eu-2019-2031-fdm-bat`
- Range: Provisional site-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg water/kg finished cheese
  - Basis: per kg finished cheese at plant gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials supplied at plant (`packaging_material_input`)

Record each primary, secondary, and tertiary packaging material by material type and distinguish reusable transport packaging.

- Selected flow: material- and geography-specific packaging flow
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to packed product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged finished cheese; zero for declared unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `us-epa-ap42-9-6-1-cheese`
- Range: Provisional packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg packaging/kg finished cheese
  - Basis: per kg finished cheese at plant gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cheese-plant wastewater sent to treatment (`site_wastewater_output`)

Record wastewater volume or mass, destination, and measured pollutant data; keep recovered whey and saleable solids out of wastewater.

- Selected flow: treatment- and destination-specific wastewater flow
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: metered discharge or validated water balance, net of separately reused water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cheese at plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_wastewater_records`
- Sources: `eu-2019-2031-fdm-bat`
- Range: Provisional wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg wastewater/kg finished cheese
  - Basis: per kg finished cheese at plant gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and cleaning wastes (`site_support_waste`)

Record discarded packaging, spent filters, cleaning-agent containers, and sludge by treatment destination; do not merge them with wastewater or product losses.

- Selected flow: material- and treatment-specific waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured or waste-contractor-recorded mass by waste class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cheese at plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_wastewater_records`
- Sources:
- Range: Provisional site-support waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg finished cheese
  - Basis: per kg finished cheese at plant gate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refrigerant and on-site combustion emissions (`direct_site_emissions`)

Record refrigerant losses and measured or calculated on-site combustion emissions as separate elementary flows with the selected refrigerant or fuel-specific emission factor.

- Selected flow: substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: refrigerant inventory balance and fuel-specific monitored or calculated emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished cheese at plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_utility_records`
- Sources:
- Range: Provisional direct-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg substance/kg finished cheese
  - Basis: broad screening range requiring substance-specific replacement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | multifunctional plant and shared operations | Avoid allocation where possible by unit-process subdivision, route-specific metering, or system expansion; collect inventory only for operations directly attributable to the declared cheese when subdivision is feasible. | `eu-2021-2279-environmental-footprint` |
| `allocation_physical_relation` | inseparable cheese, whey, cream, and other co-products | If allocation cannot be avoided, use a documented causal physical relationship relevant to the co-product functions; do not select wet mass solely because it is convenient. | `eu-2021-2279-environmental-footprint` |
| `allocation_other_relation` | multifunctional output without defensible physical relation | If no relevant physical relationship can be demonstrated, use an explicitly justified other relationship such as economic allocation, disclose price geography and averaging period, and provide a sensitivity result for material co-products. | `eu-2021-2279-environmental-footprint` |
| `allocation_whey_status` | separated whey and acid whey | Classify recovered whey as a co-product when it has a further use or market destination and record its amount and destination; classify it as waste only when discarded to treatment under the declared conditions. | `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese` |
| `allocation_rework` | internal rework | Return internally reworked cheese or curd to the batch mass balance without creating a co-product credit; disclose the rework quantity and associated additional utilities. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_natural_route_batch_balance` | natural_cheese_manufacture | dairy inputs, ingredients, cheese, whey, and solid losses | batch production and laboratory records | batch id; cattle-milk kg; composition; ingredient kg; cheese kg; whey kg; reject kg; moisture/FDM; timestamps | calibrated tanks/scales reconciled with batch sheets and laboratory results | kg and composition units | each batch | representative continuous 12-month period or all batches in declared campaign | all included natural/fresh cheese lines | sum accepted flows by product, apply rework consistently, and normalize to conforming cheese kg | meter/scale calibration, batch reconciliation, laboratory methods, and signed yield review |
| `cp_processed_route_batch_balance` | processed_cheese_manufacture | natural cheese, formulation ingredients, finished product, and losses | formulation and batch records | batch id; input cheese kg; component kg; rework kg; output kg; reject kg; formulation; timestamps | calibrated scales and recipe system reconciled to packed output | kg | each batch | representative continuous 12-month period or all batches in declared campaign | all included processed-cheese lines | sum non-reworked inputs and outputs by product and normalize to conforming output kg | scale calibration, approved formulation, batch reconciliation, and release record |
| `cp_site_utility_records` | site_utilities_cleaning_and_dispatch | electricity, fuels, steam, refrigeration, and direct emissions | meter, invoice, fuel, and refrigerant records | carrier; meter id; quantity; unit; period; allocation driver; refrigerant charge/addition/recovery | calibrated submeter where available, otherwise invoice reconciliation and documented engineering allocation | kWh; MJ; kg | monthly with annual reconciliation | same period as production data, normally 12 consecutive months | included plant and attributable shared services | subtract unrelated loads, allocate shared loads by causal driver, and normalize by product output | meter calibration, invoice totals, fuel records, and refrigerant service logs |
| `cp_cleaning_water_wastewater_records` | site_utilities_cleaning_and_dispatch | water, cleaning chemicals, wastewater, and support waste | meter, chemical issue, discharge, and waste-contractor records | water source; intake; reuse; discharge; cleaning chemical kg; COD/BOD/TSS where available; waste class; destination; period | meters and invoices reconciled by water balance; representative effluent sampling | m3; kg; mg/L | daily or batch capture with monthly aggregation | same period as production data, normally 12 consecutive months | included plant and attributable wastewater system | water intake - reusable/product water = discharge + evaporation/other documented losses; normalize by raw-material and cheese mass | meter calibration, balance closure, sampling plan, laboratory accreditation, and disposal receipts |
| `cp_packaging_records` | site_utilities_cleaning_and_dispatch | primary, secondary, and tertiary packaging | packaging bill of materials and issue records | packaging item; material; unit mass; units issued; returns; product kg | approved bill of materials reconciled with warehouse issues and packed output | kg | each packaging specification and monthly issue reconciliation | same period as packed production | all packaging supplied with or used to dispatch the declared product | net packaging issued less reusable returns, divided by packed product kg | supplier specification, unit-mass check, and warehouse reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch_flows` | each route-specific inventory row | normalized amount = included flow amount / conforming finished cheese amount | batch or period flow record; conforming output kg | flow amount per 1 kg finished cheese |  |
| `close_dairy_mass_balance` | natural and processed routes | compare dairy and ingredient inputs with cheese, whey, recovered products, wastewater solids, wastes, evaporation, samples, and inventory change; investigate unexplained imbalance before release | all mass records from route protocol | mass-balance closure and unexplained difference | `codex-cxs-283-1978-2024`; `us-epa-ap42-9-6-1-cheese` |
| `calculate_bat_energy_indicator` | cheese-dominant installation | annual carrier energy converted to MWh / annual tonnes of raw materials; compare 0.10-0.22 MWh/t raw materials only when cheese is at least 80% of production and the BAT applicability note is met | annual energy by carrier; annual raw-material tonnes | contextual BAT energy indicator and variance explanation | `eu-2019-2031-fdm-bat` |
| `calculate_bat_wastewater_indicator` | cheese-dominant installation | annual wastewater discharge m3 / annual tonnes of raw materials; compare 0.75-2.5 m3/t raw materials only when cheese is at least 80% of production | annual wastewater discharge; annual raw-material tonnes | contextual BAT wastewater indicator and variance explanation | `eu-2019-2031-fdm-bat` |
| `calculate_allocation_factors` | multifunctional operations | allocation factor = declared causal physical quantity or other justified allocation variable for each co-product / sum of that variable across co-products | co-product quantities; physical-property or price evidence | allocation factors summing to 1 for the allocated burden | `eu-2021-2279-environmental-footprint` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and route | Retain product specification, cattle-milk share, formulation, fresh/ripened/processed status, moisture or FDM basis, ripening duration, and packaging state. | approved specification, label, formulation, and release record |
| `dq_mass_balance` | dairy inputs, cheese, whey, and wastes | Use calibrated measurements and reconcile at batch or reporting-period level; explain material stock changes, evaporation, rework, and unexplained loss. | calibration records, batch sheets, inventory records, and signed reconciliation |
| `dq_temporal_coverage` | all foreground records | Use the same representative period for inputs, outputs, utilities, and wastes; normally cover 12 consecutive months or disclose a shorter complete campaign and its seasonality limitation. | data-period register and production calendar |
| `dq_shared_services` | utilities, cleaning, cold storage, and wastewater | Prefer submeters; when allocation is required, retain the causal driver and uncertainty or sensitivity evidence. | meter map, engineering calculation, and allocation review |
| `dq_upstream_identity` | purchased flows and waste treatment | Record supplier, geography, technology, dataset identity, and proxy justification for every material upstream or treatment link. | supplier and dataset mapping register |
| `dq_source_ranges` | provisional ranges | Treat every `reasoned_estimate` range as a replaceable QA screen, not as a default inventory value or publication-critical allowed range. | review log showing replacement or explicit acceptance before publication |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm exactly 1 kg net finished cheese uses product flow `221efbce-690d-492b-9d15-79d0ac862e35`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validate_route_and_qualifiers` | dataset identity | Reject conformance when cattle-milk share, product form, route, moisture/FDM basis, ripening condition, formulation, packaging state, geography, or plant gate is missing. | `codex-cxs-283-1978-2024` |
| `validate_process_completeness` | foreground process inventory | Require one applicable cheese-manufacturing route plus site utilities/cleaning/dispatch; every performed route operation and every material input, co-product, waste, and direct emission must be represented or explicitly justified as not applicable. | `us-epa-ap42-9-6-1-cheese` |
| `validate_whey_and_allocation` | whey and other co-products | Require amount, composition basis, destination, product/waste classification, allocation decision, and allocation-factor sum; do not accept zero-burden recovered whey or undocumented economic allocation. | `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint` |
| `validate_bat_context` | cheese-dominant installation | When applicability conditions are met, report—not silently convert—the annual energy and wastewater indicators per tonne raw materials and explain values outside 0.10-0.22 MWh/t and 0.75-2.5 m3/t respectively; these indicative values are QA context, not product-output limits. | `eu-2019-2031-fdm-bat` |
| `validate_provisional_ranges` | reasoned-estimate ranges | Flag each provisional range for replacement or explicit methodology review; never substitute the range midpoint for missing foreground data. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process foreground data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | modelling cattle-milk cheese manufactured by a route, geography, product form, composition, ripening condition, and packaging state matching the dataset disclosures |
| excluded_use | non-cattle cheese; plant-based analogues; farm-gate milk production; retail or consumer-stage claims; comparative assertions across unlike cheese forms without functional and compositional adjustment |
| required_metadata | PCR id; reference-flow UUIDs; product and route qualifiers; plant geography; reporting period; raw-material origin; process map; upstream dataset links; allocation method; co-product destinations; packaging state; data-quality evidence |
| required_quality_disclosure | temporal and site coverage; measurement and balance closure; shared-service allocation; proxy datasets; missing flow UUIDs; provisional ranges; BAT indicator applicability and variance explanations |
| update_trigger | material change in formulation, milk origin, product form, process technology, ripening/holding, packaging, energy or water system, co-product destination, allocation method, geography, or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-283-1978-2024` | standard | FAO/WHO Codex Alimentarius, General Standard for Cheese, CXS 283-1978, amended 2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+283-1978%2FCXS_283e.pdf (retrieved 2026-08-10) | product identity, raw materials, permitted ingredients, cheese form, and mass-balance context |
| `us-epa-ap42-9-6-1-cheese` | official_guidance | United States Environmental Protection Agency, AP-42 Section 9.6.1 Natural and Processed Cheese, Supplement C, August 1997, https://www.epa.gov/sites/default/files/2020-10/documents/c9s06-1.pdf (retrieved 2026-08-10) | natural and processed cheese process decomposition, whey handling, packaging, and emission points |
| `eu-2019-2031-fdm-bat` | standard | Commission Implementing Decision (EU) 2019/2031, BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-10) | cheese-site energy and wastewater contextual indicators and whey recovery rules |
| `eu-2021-2279-environmental-footprint` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-10) | system-boundary linkage, allocation hierarchy, and allocation-factor evidence |
