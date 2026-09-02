---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.soy-milk
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Soy milk

## 1. Scope and Applicability

This PCR governs foreground data production for finished, non-fermented soy milk at the manufacturing plant gate. It covers soy beverages made from soybeans and/or soy derivatives and water, including plain, composite or flavoured, and lower-protein soybean-based beverages when they are placed in the soy-milk product category. The declared Codex product subtype, protein content, formulation, heat-treatment route, packaging format, and storage condition determine the concrete product represented.

The foreground boundary begins when soybeans, soy derivatives, water, ingredients, processing aids, cleaning materials, fuels, electricity, and packaging materials are received at the manufacturing site. It includes preparation, aqueous extraction or reconstitution, separation where performed, formulation and standardisation, homogenisation, heat treatment, filling and packaging, on-site finished-product handling, sanitation, utilities, product losses, residues, wastewater, direct emissions, and co-products. Upstream production of received materials and energy is represented by linked upstream datasets rather than recreated inside the foreground processes.

Fermented soy beverages, soybean curd or tofu, compressed or dehydrated soybean curd products, soy-protein ingredients sold as ingredients, unfinished soy base, dairy milk, mixed beverages classified outside CPC 24423, and other non-animal milks are excluded. Distribution after the plant gate, retail, consumer refrigeration or preparation, consumption, and packaging end-of-life are outside the foreground boundary. This PCR does not certify food safety, legal compliance, nutrition claims, or product comparability.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.soy-milk |
| classification_refs | CPC 3.0: 24423 — Soy milk |
| covered_products | Finished non-fermented soy milk and soybean beverages made principally from soybeans and/or soy derivatives and water, including plain, composite or flavoured, and soybean-based beverage subtypes when classified as CPC 24423 |
| excluded_products | Fermented soy beverages; tofu and other soybean-curd products; compressed or dehydrated soybean curd; soy flour, concentrate, isolate, unfinished soy base, or other ingredients sold for further processing; dairy milk; mixed drinks outside CPC 24423; coconut, almond, rice, oat, and other non-animal milks |
| representative_product | Net finished non-fermented soy milk, ready for sale or further distribution at the manufacturing plant gate, excluding packaging mass |
| production_route | Receipt of soy raw material; preparation and aqueous extraction or derivative reconstitution; separation where applicable; formulation and standardisation; homogenisation and declared heat treatment; filling, packaging, and finished-product handling, with sanitation and utilities recorded |
| market_state | Liquid finished beverage at the plant gate in the declared bulk or consumer packaging, with declared storage condition, product subtype, formulation, protein content, and heat-treatment status |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply finished, non-fermented soy milk with the declared product subtype, formulation, treatment, packaging format, and storage condition |
| How much | 1 kg net soy milk at the manufacturing plant gate, excluding primary, secondary, and tertiary packaging mass |
| How well | Meets the declared product specification and applicable compositional, quality, and microbiological requirements; the foreground package records actual composition and conformity evidence without asserting certification |
| How long or cycle | One production lot or an explicitly aggregated production period ending at plant-gate release; no use-stage service life is assigned |
| reference_flow_link | 1 kg net conforming finished soy milk output equals 1 kg of the reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished soy milk |
| Reference product flow | Soy milk `b0bd96e4-7b19-4d9c-8d80-ea47b97bbde3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Codex product subtype; protein content on the declared analytical basis; soy input form and species or source description; formulation and optional ingredients; sweetened or flavoured status; heat-treatment route; packaging format and nominal fill size; net product mass; storage condition; production geography; production period or lot; allocation treatment for marketable co-products |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comments, product descriptions, or equivalent data-package fields. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference soy milk output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure conforming beverage net mass after filling or at the equivalent bulk plant-gate point; exclude all packaging mass and separately record rework, rejects, samples, spills, and other non-reference product. |
| `ingredient_process_water_separation` | Water inputs | Volume or Mass with declared density and temperature basis | m3 or kg | Record water incorporated into product separately from extraction, rinsing, cooling, boiler, sanitation, and other process water; document any reuse so the same water is not counted twice. |
| `soy_material_basis` | Soybeans and soy-derived ingredients | Mass | kg | Record as-received mass and declare moisture or solids basis when used for yield, composition, or allocation calculations; do not mix dry-matter and as-received values without an auditable conversion. |
| `energy_carrier_separation` | Electricity, fuels, steam, heat, and refrigeration | Carrier-appropriate energy or physical property | kWh, MJ, kg, or m3 | Meter or calculate each energy carrier separately, retain conversion factors and lower- or higher-heating-value basis where relevant, and avoid counting purchased steam or heat again as on-site fuel. |
| `coproduct_state_basis` | Okara, recovered soy solids, and other co-products | Mass | kg | Record wet mass, moisture or dry-matter content, market status, and destination at the point the co-product leaves the foreground process; allocation factors must use a consistent declared basis. |
| `packaging_mass_separation` | Primary, secondary, and tertiary packaging | Mass | kg | Record packaging inputs and scrap by material and packaging level, but exclude packaging mass from the 1 kg reference product amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Soybeans or soy-derived ingredients, water, optional ingredients, processing aids, packaging materials, fuels, and purchased energy received at the manufacturing site with quantity, supplier or source, material state, and upstream dataset link declared |
| starting_condition_role | Manufacturing-gate foreground starting point; cultivation, production of soy derivatives and ingredients, energy generation, packaging manufacture, and inbound supply-chain operations are represented by upstream datasets |
| product_classification_scope | Finished non-fermented soy milk classified as CPC 3.0 code 24423; adjacent non-animal milks, unfinished soy intermediates, fermented products, and soybean-curd products are outside scope |
| recursive_input_rule | If purchased soy milk or an intermediate represented by the same canonical product category enters the site, record it once as an upstream product input with its state, quantity, supplier boundary, and dataset; do not reopen its internal manufacturing chain inside the receiving foreground process |
| upstream_dataset_requirement | Use temporally, geographically, and technologically representative datasets for soybeans or soy derivatives, other ingredients, water supply, electricity, fuels or heat, refrigerants, cleaning agents, packaging materials, transport where included in study scope, and off-site waste or wastewater treatment |
| disclosure | Declare whole-bean versus soy-derivative route, extraction and separation configuration, product subtype and formulation, treatment and storage route, included packaging levels, co-product status and allocation, water reuse, sanitation boundary, on-site versus off-site wastewater treatment, data period, site coverage, and all exclusions or data gaps |

### Boundary Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Manufacturing foreground | Include all on-site operations from receipt of materials through release of conforming packaged or bulk soy milk at the plant gate, including support utilities and sanitation attributable to production. | `codex-cxs-322r-2015`; `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_links` | Received product and energy inputs | Link received soy raw materials, ingredients, packaging, fuels, electricity, heat, and other technosphere inputs to appropriate upstream datasets; do not duplicate their upstream processes inside the foreground package. | `us-epa-lca-2006` |
| `boundary_packaging` | Packaging | Include packaging materials consumed and packaging scrap generated at the site; exclude packaging mass from reference net product mass and disclose which packaging levels are included. | `eu-jrc-fdm-bref-2019` |
| `boundary_cleaning_losses` | Cleaning, product losses, and residues | Include cleaning water and chemicals, recoverable product, spills, off-specification product, separated solids, wastewater, and treatment residues; record recovery or reuse before any disposal flow. | `eu-jrc-fdm-bref-2019` |
| `boundary_direct_releases` | Direct elementary flows | Record measured or calculated direct releases from on-site combustion, refrigeration losses, wastewater treatment, and other included operations; do not substitute generic impact results for elementary-flow inventory. | `us-epa-lca-2006` |
| `boundary_no_silent_cutoff` | Completeness | Do not omit a known material, energy, water, product, co-product, waste, wastewater, or direct-emission flow solely because it is difficult to measure; document any excluded flow, rationale, expected significance, and effect on completeness. | `us-epa-lca-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `soy_receiving_preparation` | Soy raw-material receiving and preparation | required | Always include receipt and storage; cleaning, sorting, soaking, dehulling, and size reduction apply according to the declared soy input form | Establish traceable soy and ingredient inputs ready for extraction or reconstitution | kg prepared soy material transferred, reconciled to the reference flow |
| `aqueous_extraction_separation` | Aqueous extraction, heating, and separation | conditional | Required for whole-bean or flour extraction routes; for direct soy-derivative reconstitution, declare this process not operated and link the derivative upstream | Produce soy liquid or base and separate fibre or insoluble solids where performed | kg soy liquid or base transferred, with soy solids and water balance |
| `formulation_standardisation` | Formulation and standardisation | required | Include blending of soy liquid or derivative, water, optional ingredients, and processing aids for the declared product subtype | Establish final recipe, protein or solids basis, and batch identity | kg formulated beverage transferred, reconciled to recipe and batch records |
| `homogenisation_heat_treatment` | Homogenisation, heat treatment, and cooling | required | Record the actual homogenisation, pasteurisation, UHT, sterilisation, hot-fill, cooling, or aseptic route; identify any operation not used | Produce stable treated beverage meeting the declared release specification | kg treated beverage transferred, reconciled to temperature-time and loss records |
| `filling_packaging_storage` | Filling, packaging, and finished-product handling | required | Include bulk loadout or all operated filling, sealing, coding, secondary packaging, cooling, and on-site finished storage | Produce the reference output ready for plant-gate release | 1 kg net conforming soy milk output |
| `sanitation_utilities_wastewater` | Sanitation, utilities, and wastewater management | required | Include shared or dedicated support loads attributable to the foreground processes, with allocation or metering basis disclosed | Capture cleaning, utility, recovery, wastewater, waste, and direct-emission flows that support production | support activity normalised to 1 kg net conforming soy milk |

### Process: Soy raw-material receiving and preparation (`soy_receiving_preparation`)

#### Inputs

##### Product flows

###### Soybeans or soy-derived raw material received (`soy_raw_material_received`)

Record each soy input by supplier, lot, product form, as-received mass, moisture or solids basis where relevant, and intended route. Whole soybeans and soy flour, concentrate, isolate, or other derivatives must remain distinguishable.

- Selected flow: Soybeans or soy-derived ingredient, by declared form
- Flow property / unit: Mass / kg
- Amount rule: measured accepted quantity transferred from receiving records, adjusted only by documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `codex-cxs-322r-2015`

#### Outputs

##### Product flows

###### Prepared soy material (`prepared_soy_material`)

Record the weighed soy material transferred to extraction or reconstitution after any cleaning, sorting, soaking, dehulling, or size reduction, retaining its material state and batch link.

- Selected flow: Prepared soy material, facility intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated batch balance from verified preparation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`

##### Waste flows

###### Rejected soy material and foreign matter (`soy_preparation_rejects`)

Record rejects, screenings, hulls, dust collected as waste, and their actual recovery, treatment, or disposal route; marketable hulls or other co-products are recorded as product outputs instead.

- Selected flow: Soy preparation rejects, declared state
- Flow property / unit: Mass / kg
- Amount rule: measured container or dispatch mass, corrected for tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`

##### Elementary flows

###### Preparation dust released to air (`preparation_dust_to_air`)

Record direct particulate release only where handling or size reduction vents to the environment; captured dust remains a waste or recovered material flow.

- Selected flow: Particulate matter to air, matching measured fraction
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from monitored exhaust activity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Aqueous extraction, heating, and separation (`aqueous_extraction_separation`)

#### Inputs

##### Product flows

###### Prepared soy feed (`prepared_soy_feed_input`)

Record the matched prepared-soy batch entering aqueous extraction or reconstitution.

- Selected flow: Prepared soy material, facility intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured batch transfer from `prepared_soy_material`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Extraction or reconstitution water (`extraction_water`)

Record water added to elute soy protein and other components or to reconstitute a soy derivative, separately from cleaning and utility water.

- Selected flow: Process water supplied to production
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: measured batch or dedicated-meter consumption, with density conversion documented if mass is reported
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxs-322r-2015`

###### Extraction electricity and thermal energy (`extraction_energy`)

Record electricity, steam, direct fuel, or other heat used for grinding, pumping, extraction heating, anti-nutrient control, and separation as distinct carrier records.

- Selected flow: Electricity and thermal-energy carriers, by actual supply
- Flow property / unit: Energy or carrier-appropriate property / kWh, MJ, kg, or m3
- Amount rule: metered consumption or engineering calculation from collected operating data and documented conversion factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Soy liquid or standardisation base (`soy_liquid_base`)

Record the soy liquid transferred to formulation with measured mass, solids or protein basis, temperature, and batch identity.

- Selected flow: Soy liquid or base, facility intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with input water, soy material, separated solids, and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Marketable okara or recovered soy solids (`okara_coproduct`)

Record separated soy fibre or solids as a product output only when it has a documented recipient or market use; otherwise classify it as waste. Retain wet mass, moisture or dry matter, and destination.

- Selected flow: Okara or recovered soy solids, declared market state
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch or transfer mass with moisture or dry-matter result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources: `codex-cxs-322r-2015`; `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Non-marketable soy residue (`soy_residue_waste`)

Record separated material with no product use, contaminated recovery material, and off-specification solids by actual treatment destination.

- Selected flow: Soy processing residue, declared waste state
- Flow property / unit: Mass / kg
- Amount rule: measured container or dispatch mass, corrected for tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Extraction-area wastewater released to environment (`extraction_wastewater_release`)

Use this elementary-flow row only for a monitored direct discharge after the included treatment boundary. Wastewater sent to another process or off-site treatment remains a waste or product flow.

- Selected flow: Waterborne emissions by measured substance
- Flow property / unit: Mass / kg
- Amount rule: discharge volume multiplied by measured concentration for each reported substance, with sampling and averaging basis retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Formulation and standardisation (`formulation_standardisation`)

#### Inputs

##### Product flows

###### Soy liquid or soy derivative for formulation (`soy_base_for_formulation`)

Record the matched soy liquid from extraction or the received soy derivative used in a direct-reconstitution route.

- Selected flow: Soy liquid, base, or derivative by declared form
- Flow property / unit: Mass / kg
- Amount rule: measured batch issue and transfer quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch_records`

###### Formulation water (`formulation_water`)

Record water intentionally incorporated during formulation separately from extraction, cleaning, and utility water.

- Selected flow: Ingredient water supplied to formulation
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: measured batch addition with density and temperature basis retained where conversion is required
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch_records`
- Sources: `codex-cxs-322r-2015`

###### Optional ingredients and processing aids (`optional_ingredients_aids`)

Record each sugar, oil, salt, flavour, stabiliser, vitamin or mineral premix, and processing aid separately with specification, lot, recipe quantity, and carry-over or removal treatment.

- Selected flow: Declared ingredient or processing aid
- Flow property / unit: Mass / kg
- Amount rule: measured batch issue from recipe and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch_records`
- Sources: `codex-cxs-322r-2015`

#### Outputs

##### Product flows

###### Formulated and standardised soy beverage (`formulated_soy_beverage`)

Record the batch transferred to homogenisation or heat treatment with total mass, measured protein or solids basis, formulation identity, and conformity status.

- Selected flow: Formulated soy beverage, facility intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured batch transfer reconciled to recipe inputs, samples, rework, and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch_records`

##### Waste flows

###### Formulation rejects and unrecovered product (`formulation_rejects`)

Record off-specification batches, filter residues, and unrecovered formulation losses by rework, recovery, wastewater, or disposal destination.

- Selected flow: Off-specification soy beverage or formulation residue
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or dispatched mass, excluding quantities demonstrably returned to the same product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`

##### Elementary flows

### Process: Homogenisation, heat treatment, and cooling (`homogenisation_heat_treatment`)

#### Inputs

##### Product flows

###### Formulated beverage feed (`formulated_beverage_feed`)

Record the matched formulated batch entering treatment.

- Selected flow: Formulated soy beverage, facility intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from `formulated_soy_beverage`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`

###### Treatment energy and cooling services (`treatment_energy_cooling`)

Record electricity, steam, fuel, purchased heat, refrigeration, and cooling-water use by carrier and actual treatment route.

- Selected flow: Electricity, heat, fuel, refrigeration, and cooling-water services by actual supply
- Flow property / unit: Carrier-appropriate energy or physical property / kWh, MJ, kg, or m3
- Amount rule: metered consumption or calculation from collected operating hours, loads, flows, and documented conversion factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Treated soy milk before filling (`treated_soy_milk`)

Record mass transferred to filling together with the actual homogenisation conditions, time-temperature record, cooling or aseptic status, samples, rework, and losses.

- Selected flow: Treated soy milk, facility intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to treatment feed, retained product, samples, rework, and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`

##### Waste flows

###### Treatment start-up, shutdown, and reject losses (`treatment_product_losses`)

Record soy beverage removed during start-up, shutdown, interface, sampling, equipment failure, or release testing, distinguishing rework, recovery, wastewater, and disposal.

- Selected flow: Soy beverage treatment loss, declared destination
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-derived quantity by event and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Treatment-related direct air emissions (`treatment_direct_air_emissions`)

Record direct combustion emissions and verified refrigerant losses attributable to treatment; purchased electricity and heat remain product inputs with upstream datasets.

- Selected flow: Relevant elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated value from collected fuel, refrigerant, and operating records with documented factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Filling, packaging, and finished-product handling (`filling_packaging_storage`)

#### Inputs

##### Product flows

###### Treated soy milk for filling (`treated_soy_milk_for_filling`)

Record the matched treated beverage transferred to bulk loadout or the filling line.

- Selected flow: Treated soy milk, facility intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from `treated_soy_milk`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging issued to production by material, component, mass, supplier, recycled-content declaration where used, and packaging level.

- Selected flow: Packaging component by declared material and level
- Flow property / unit: Mass / kg
- Amount rule: measured issue less verified return to stock, reconciled to packed units and packaging scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Filling and storage electricity (`filling_storage_electricity`)

Record metered or allocated electricity for filling, sealing, coding, conveyors, secondary packaging, cooling, and on-site finished storage through plant-gate release.

- Selected flow: Purchased electricity by actual supply mix
- Flow property / unit: Energy / kWh
- Amount rule: dedicated meter reading or documented allocation from equipment load and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Net finished soy milk at plant gate (`finished_soy_milk_reference`)

This is the quantitative reference output. Count only released, conforming net beverage mass and exclude packaging, rework still inside the system, retained samples, rejects, and unshipped losses.

- Selected flow: Soy milk `b0bd96e4-7b19-4d9c-8d80-ea47b97bbde3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg after normalising collected plant-gate release mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming soy milk at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-2025`; `codex-cxs-322r-2015`

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record start-up scrap, damaged components, trim, rejected packs, and collected packaging waste by material and recovery or disposal route.

- Selected flow: Packaging waste by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured collection or dispatch mass reconciled to packaging issue and packed units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`

###### Filling rejects and product loss (`filling_product_loss`)

Record leaking or underfilled packs, filler start-up and shutdown losses, samples, and damaged finished product by rework, recovery, wastewater, or disposal route.

- Selected flow: Soy milk filling loss, declared destination
- Flow property / unit: Mass / kg
- Amount rule: measured rejected units and net contents plus separately measured bulk loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`

##### Elementary flows

### Process: Sanitation, utilities, and wastewater management (`sanitation_utilities_wastewater`)

#### Inputs

##### Product flows

###### Cleaning and sanitation water (`sanitation_water`)

Record pre-rinse, cleaning-in-place, open-plant cleaning, disinfection, and final-rinse water separately where meters or batch systems permit, including recovered or reused water without double counting.

- Selected flow: Water supplied for cleaning and sanitation
- Flow property / unit: Volume / m3
- Amount rule: dedicated meter, CIP batch volume, or documented allocation from site water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Cleaning chemicals and disinfectants (`cleaning_chemicals`)

Record each purchased cleaning agent, disinfectant, and neutralisation chemical by active concentration where available, replenishment, recovery, and disposal route.

- Selected flow: Cleaning or sanitation chemical by formulation
- Flow property / unit: Mass / kg
- Amount rule: measured issue or purchase-and-stock balance, excluding returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Shared utility energy (`shared_utility_energy`)

Record energy for boilers, compressed air, refrigeration, pumps, water treatment, cleaning, and wastewater treatment that was not already assigned to a production process.

- Selected flow: Electricity, fuel, steam, heat, or refrigeration service by actual supply
- Flow property / unit: Carrier-appropriate energy or physical property / kWh, MJ, kg, or m3
- Amount rule: metered support-process consumption or documented allocation from operating records, excluding energy already assigned elsewhere
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Recovered product or cleaning solution (`recovered_material`)

Record product, rinse water, or cleaning solution returned for controlled reuse as an internal product output and matched input; do not count internal circulation as a new net product.

- Selected flow: Recovered product, water, or cleaning solution, facility intermediate
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: measured recovered quantity linked to the receiving batch or reuse tank
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Wastewater sent to treatment (`wastewater_to_treatment`)

Record wastewater volume, destination, and measured characteristics at the transfer point. Keep wastewater sent to an on-site or off-site treatment process as a waste flow rather than an elementary discharge.

- Selected flow: Food-processing wastewater to declared treatment
- Flow property / unit: Volume / m3
- Amount rule: monitored discharge volume, reconciled with water inputs, incorporated water, reuse, evaporation, and other outputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wastewater-treatment sludge and separated residues (`wastewater_sludge_residues`)

Record screenings, fats, solids, sludge, and spent treatment materials separately with moisture basis and actual recovery or disposal destination.

- Selected flow: Wastewater-treatment residue by declared state
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch or container mass, corrected for tare and retaining moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_waste_records`

##### Elementary flows

###### Treated wastewater emissions (`treated_wastewater_emissions`)

Where on-site treatment discharges directly to the environment, record waterborne substances from monitored flow and concentration at the final discharge point.

- Selected flow: Waterborne emissions by measured substance
- Flow property / unit: Mass / kg
- Amount rule: monitored discharge volume multiplied by representative measured concentration for each substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming soy milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Shared processes and co-products | Avoid allocation first by separately metering or subdividing extraction, formulation, treatment, packaging, sanitation, and utility operations; use system expansion only when the downstream function and substituted product are explicitly modelled and justified for the study goal. | `us-epa-lca-2006` |
| `allocation_coproduct_status` | Okara, recovered soy solids, and recovered product | Establish whether each output is a marketable product, internally recycled material, or waste from documented destination and acceptance evidence before assigning burdens or credits. | `eu-jrc-fdm-bref-2019` |
| `allocation_physical_relation` | Unavoidable shared burdens | If allocation cannot be avoided, use a documented physical causal relationship that reflects how the shared input or output changes with the products or functions; simple wet-mass allocation is not automatically valid, particularly when moisture differs. | `us-epa-lca-2006` |
| `allocation_other_relation` | No defensible physical relation | Use another relationship, such as economic value, only when a physical relationship cannot be established; record prices, reference period, currency, market condition, calculation, and sensitivity to the chosen relationship. | `us-epa-lca-2006` |
| `allocation_no_avoided_burden_default` | Waste recovery and co-product use | Do not apply avoided-burden credits by default. Model a substitution scenario only when required by the downstream study, with substituted function, market, quality equivalence, and displacement assumption disclosed separately from the foreground inventory. | `us-epa-lca-2006` |
| `allocation_rework_internal` | Rework and internal recycling | Treat material returned within the same foreground system as an internal transfer; retain the original material and energy burdens and record any additional reprocessing inputs and losses without creating a second product credit. | `eu-jrc-fdm-bref-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `soy_receiving_preparation` | received soy and other materials | weighbridge, receiving, invoice, specification, and stock records | supplier; lot; material form; accepted and rejected mass; moisture or solids basis where relevant; opening and closing stock; specification | reconcile receipts, issues, returns, and stock change by material and lot | kg | each receipt and inventory period | same production period as reference output, including opening and closing stock | all facilities and warehouses supplying the declared foreground site | accepted input = receipts + opening stock − closing stock − documented returns; normalise by reference output | calibrated scale records; supplier specification; lot traceability; stock reconciliation |
| `cp_batch_mass_balance` | `soy_receiving_preparation`; `aqueous_extraction_separation`; `homogenisation_heat_treatment` | intermediate transfers and losses | batch sheet, tank level, inline meter, scale, and loss-event records | batch id; input and output masses; tank heel; sample; spill; reject; rework; moisture or solids; timestamps | reconcile each linked batch across transfer points and retain unexplained difference | kg | each batch or production run | all batches represented by the dataset | declared site and included lines | aggregate only after batch reconciliation; divide period totals by net conforming output | meter or scale calibration; signed batch records; reconciliation report |
| `cp_water_records` | `aqueous_extraction_separation`; `formulation_standardisation` | ingredient, extraction, cooling, and process water | dedicated meters, batch additions, tank records, and site water balance | source; meter; purpose; volume; temperature; density if converted; reuse origin and destination | meter by use where available; otherwise documented allocation from reconciled site balance | m3 or kg | continuous, batch, or billing interval | full production period, including start-up and shutdown | all included production and utility areas | separate incorporated, process, reused, evaporated, and discharged water; avoid double counting reused streams | meter calibration; batch sheet; utility bill; water-balance reconciliation |
| `cp_recipe_batch_records` | `formulation_standardisation` | recipe inputs and formulated output | approved recipe, material issue, batch sheet, laboratory result, and release record | product code; batch; ingredient lot and quantity; water; aid; rework; protein or solids; output; reject | reconcile approved recipe with actual issued quantities and measured batch output | kg | each batch | all represented product batches | all included formulations and lines | aggregate by product subtype only after retaining formulation-specific totals | approved recipe; lot genealogy; laboratory certificate; batch release |
| `cp_treatment_records` | `homogenisation_heat_treatment` | treatment feed, output, and operating condition | flow meter, batch record, time-temperature logger, pressure record, and release test | batch; feed and output mass; homogenisation setting; temperature; hold time; cooling; rework; reject | link continuous or batch treatment records to product lots and transfer quantities | kg and process-specific units | each run with continuous critical-parameter logging where applicable | all represented treatment runs | each treatment line and declared route | aggregate only runs with matched feed, output, and release status | calibrated instruments; logger completeness; release authorisation |
| `cp_energy_records` | `aqueous_extraction_separation`; `homogenisation_heat_treatment`; `filling_packaging_storage`; `sanitation_utilities_wastewater` | electricity, fuel, steam, heat, refrigeration, and shared utilities | meter, invoice, fuel issue, boiler, refrigeration, and equipment operating records | carrier; meter; quantity; period; equipment or area; operating hours; conversion factor; heating-value basis; allocation driver | use dedicated meters first; otherwise calculate from verified operating data or allocate shared totals with documented driver | kWh, MJ, kg, or m3 | continuous, shift, batch, or billing interval | full production period including non-production support loads | all included process and utility areas | reconcile carrier totals to invoices and stocks; prevent double counting across processes | meter calibration; invoice; stock balance; calculation sheet; allocation review |
| `cp_packaging_release_records` | `filling_packaging_storage` | packaging inputs, packed output, and filling losses | packaging issue and return, bill of materials, line count, checkweigher, scrap, and release records | component; material; packaging level; unit mass; issued and returned units; good packs; rejects; nominal and measured net fill | reconcile packaging issue with returned stock, conforming packs, and scrap; determine net beverage mass from validated fill records | kg and units | each packaging run | all represented packaging runs and storage through release | all included filling lines and packaging levels | sum net conforming beverage mass only; keep packaging mass separate | packaging specification; scale or checkweigher calibration; line reconciliation; release record |
| `cp_coproduct_records` | `aqueous_extraction_separation` | okara and recovered soy solids | scale, moisture test, transfer, sales, recipient, and dispatch records | output id; wet mass; tare; moisture or dry matter; destination; recipient acceptance; price if economic allocation is used | weigh each transfer or dispatch and link analytical and destination evidence | kg | each transfer or dispatch | full production period | all separation lines and co-product destinations | aggregate by consistent state and destination; convert basis only with measured moisture | calibrated scale; laboratory result; dispatch and recipient record |
| `cp_sanitation_records` | `sanitation_utilities_wastewater` | cleaning water, chemicals, recovery, and sanitation cycles | CIP recipe and cycle log, chemical issue, conductivity, turbidity, pH, temperature, flow, and recovery record | circuit; cycle; water; chemical; concentration; time; temperature; conductivity; turbidity; pH; recovered quantity | capture automated logs or signed manual records and link each cycle to equipment and production period | m3, kg, and process-specific units | each cleaning cycle | all sanitation cycles attributable to represented production | all included circuits and open-cleaning areas | allocate shared cycles by documented causal driver and preserve cycle totals | instrument calibration; recipe approval; cycle-completion record; recovery log |
| `cp_wastewater_records` | `aqueous_extraction_separation`; `sanitation_utilities_wastewater` | wastewater and waterborne emissions | flow meter, sampling, laboratory, transfer, treatment, and discharge records | stream; volume; sampling time; pH; temperature; COD, BOD, TSS, nitrogen, phosphorus, oils or other measured substances; treatment; destination | monitor flow at relevant transfer and discharge points and pair representative concentrations with matched volume | m3 and kg substance | continuous flow where available and sampling at declared frequency | full production period, including cleaning and non-routine discharges | all included drains, treatment units, and discharge points | calculate substance mass from matched volume and concentration; keep off-site transfer separate from direct discharge | meter calibration; chain of custody; laboratory method and result; permit or transfer record |
| `cp_residue_waste_records` | all process ids | rejects, residues, packaging scrap, sludge, and other waste | container weights, waste log, manifest, transfer, recovery, and disposal records | material; source process; gross and tare mass; moisture; hazard status; destination; recovery or disposal operation | weigh at collection or dispatch and reconcile internal transfers to final destination | kg | each container or dispatch | full production period | all included process and waste-handling areas | aggregate only equivalent material states and destinations; avoid counting internal transfer twice | calibrated scale; waste manifest; contractor receipt; recovery evidence |
| `cp_direct_emissions` | `soy_receiving_preparation`; `homogenisation_heat_treatment`; `sanitation_utilities_wastewater` | direct emissions to air and water | continuous monitor, stack test, leak log, fuel record, refrigerant service record, wastewater result, and factor calculation | source; substance; measured concentration or factor; flow or activity; period; event type; calculation | use measured release where available; otherwise calculate from collected activity and documented factor | kg | monitoring interval, event, or calculation period | full production period including routine and relevant non-routine operation | all included direct-emission sources | sum source-specific releases and normalise by reference output; keep generic upstream emissions out | calibration; test report; maintenance or leak record; factor source and calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | All inventory rows | normalised amount = included-period flow amount ÷ included-period net conforming soy milk mass | reconciled flow total; net conforming reference output | flow amount per 1 kg net soy milk | `us-epa-lca-2006` |
| `calc_net_reference_output` | Finished soy milk | net conforming output = released beverage net mass; packaging, rejects, retained samples, unshipped loss, and rework still inside the system are excluded | release records; fill mass; bulk loadout; rejects; samples; rework | kg net conforming soy milk | `codex-cxs-322r-2015`; `eu-jrc-fdm-bref-2019` |
| `calc_batch_mass_balance` | Each production process and linked batch | unexplained difference = total mass inputs − product outputs − co-product outputs − measured waste and direct releases − documented stock or hold-up change | batch input, output, reject, rework, stock, sample, spill, evaporation, and residue records | mass-balance difference and completeness flag | `us-epa-lca-2006` |
| `calc_water_balance` | Production, sanitation, and wastewater | water input = incorporated water + wastewater transfer or discharge + evaporation + exported moisture + closing hold-up − opening hold-up, with reused internal water shown on both matched transfer sides but counted once in net withdrawal | water meters; recipe water; wastewater flow; product and co-product moisture; reuse; evaporation; tank inventory | reconciled water withdrawal, use, reuse, and discharge per reference flow | `eu-jrc-fdm-bref-2019` |
| `calc_energy_by_carrier` | All energy-consuming processes | carrier use = metered quantity or verified operating load × time; convert only with documented factor and reconcile totals with invoices and stock change | meters; invoices; stock; load; operating time; conversion and heating-value basis | carrier-specific energy or fuel per reference flow | `us-epa-lca-2006` |
| `calc_packaging_balance` | Filling and packaging | packaging consumed = opening stock + receipts − closing stock − verified returns; reconcile with conforming packs and measured scrap by material | packaging inventory, receipts, returns, unit mass, good units, scrap | packaging input and scrap mass per reference flow | `eu-jrc-fdm-bref-2019` |
| `calc_wastewater_substance` | Direct waterborne emission | substance mass = matched discharge volume × measured concentration, with unit conversion and sampling representativeness documented | discharge volume; concentration; sampling interval; laboratory result | kg substance per reference flow | `eu-jrc-fdm-bref-2019` |
| `calc_allocation_factor` | Unavoidable shared burden | calculate factor from the selected causal physical relationship; if none is defensible, calculate from the declared alternative relationship and retain a sensitivity case | separately measured outputs; causal driver or price and period; shared burden | documented allocation factor summing to one across functions | `us-epa-lca-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Product and reference flow | Retain product code, CPC 24423 classification rationale, Codex subtype, recipe, lot genealogy, release status, required qualifiers, and Tiangong reference-flow UUID. | product specification; recipe; lot and release record; classification review |
| `dq_measurement_control` | Measured foreground records | Identify instrument or source record, calibration or verification status, resolution, units, collection frequency, missing periods, corrections, and responsible facility. | calibration certificate; meter register; signed batch or utility record |
| `dq_temporal_coverage` | Dataset period | Cover a declared production period representative of the reported product and include start-up, shutdown, cleaning, rework, and non-routine losses within that period; disclose excluded periods and seasonality. | production calendar; batch list; meter and sanitation completeness report |
| `dq_technological_geographic_scope` | Site and production route | Match the recorded facility, whole-bean or derivative route, formulation, heat treatment, packaging line, utilities, and geography; do not merge materially different routes without separate results or justified weighting. | site and line description; route-specific production totals; weighting calculation |
| `dq_completeness_reconciliation` | Materials, energy, water, products, co-products, waste, and emissions | Reconcile material, water, energy, packaging, and waste totals; list all known gaps and explain the treatment of unexplained balances instead of silently cutting them off. | balance worksheets; invoice and stock reconciliation; gap register |
| `dq_coproduct_destination` | Co-products and recovered materials | Support product or waste classification, state, moisture basis, destination, and allocation with recipient, transfer, and analytical evidence for the same reporting period. | scale and moisture result; dispatch or internal transfer; recipient acceptance; allocation worksheet |
| `dq_wastewater_quality` | Wastewater and waterborne emissions | Match monitored flow and concentration in time and location, retain sampling and analytical method, and distinguish transfer to treatment from direct environmental discharge. | flow record; sampling plan; chain of custody; laboratory result; treatment or discharge record |
| `dq_quality_indicators` | All primary and secondary data | Assess and disclose precision, completeness, temporal and geographical representativeness, technological representativeness, consistency, and reproducibility in relation to intended downstream use. | data-quality assessment and reviewer trace |
| `dq_source_traceability` | Calculations and external rules | Preserve source identifiers, formulas, conversion factors, versions or dates, and input records so every projected amount can be reproduced without authoring logs in the PCR. | calculation workbook or machine-readable calculation record; source register |

## 9. Validation Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference output must be exactly 1 kg net Soy milk `b0bd96e4-7b19-4d9c-8d80-ea47b97bbde3` using Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg; packaging mass must be excluded. | `unsd-cpc-3-2025`; `codex-cxs-322r-2015` |
| `validate_product_scope` | Product identity | The dataset must describe a finished non-fermented soy beverage within CPC 24423 and declare Codex subtype, soy input form, formulation, protein basis, treatment, packaging, storage condition, geography, and period; excluded soy products and other plant milks fail scope. | `unsd-cpc-3-2025`; `codex-cxs-322r-2015` |
| `validate_process_route` | Process map | Each required process must have included activity or an explicit route-specific explanation; aqueous extraction may be not operated only for a declared soy-derivative route with an upstream dataset, and actual treatment and packaging configurations must be stated. | `codex-cxs-322r-2015` |
| `validate_inventory_completeness` | Foreground inventory | The package must contain or explicitly justify all known soy and ingredient inputs, incorporated and process water, energy carriers, packaging, reference product, co-products, rework, losses, residues, wastewater, and direct emissions for the same boundary and period. | `eu-jrc-fdm-bref-2019`; `us-epa-lca-2006` |
| `validate_internal_transfers` | Intermediate and recovered flows | Every internal product, rework, recovered water, or cleaning solution output must have a matched receiving input; internal circulation must not create net product or avoided-burden credit. | `eu-jrc-fdm-bref-2019` |
| `validate_mass_water_balances` | Batch and site balances | Material and water balances must be reproducible from collected records; unexplained differences, evaporation assumptions, stock changes, and reused streams must be disclosed and must not conceal missing inventory. | `eu-jrc-fdm-bref-2019`; `us-epa-lca-2006` |
| `validate_energy_reconciliation` | Energy inventory | Energy must be separated by carrier and reconciled with meters, invoices, fuel stocks, or verified calculations; purchased energy and on-site fuel use must not be double counted. | `us-epa-lca-2006` |
| `validate_coproduct_allocation` | Co-products and shared burdens | Co-product status and destination evidence are required; allocation must follow avoidance, physical relationship, then documented alternative relationship, with factors summing to one and sensitivity disclosed where an alternative relationship is used. | `us-epa-lca-2006` |
| `validate_wastewater_boundary` | Wastewater | Wastewater sent to treatment must remain a waste flow; only monitored releases after the included final treatment boundary may be elementary flows, calculated from matched flow and concentration. | `eu-jrc-fdm-bref-2019` |
| `validate_data_quality` | Dataset evidence | Required collection protocols, calibration or verification evidence, temporal and site coverage, gap disclosure, quality indicators, formulas, factors, and source links must be present and reproducible. | `us-epa-lca-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for finished soy milk, publishable as a unit-process dataset or aggregated production dataset after review |
| downstream_use | Supports `secondary_dataset` and `background_dataset` use in product systems requiring CPC 24423 soy milk at the plant gate, and supports downstream `process` and `lifecyclemodel` projections |
| allowed_use | Attributional LCI and LCA modelling for soy-milk supply where product subtype, formulation, treatment, packaging, geography, period, boundary, and allocation are compatible |
| excluded_use | Food-safety or nutrition certification; unqualified comparison of soy milk with dairy or other plant beverages; fermented soy products, tofu or curd, soy ingredients, or non-soy plant milks; substitution or consequential claims without a separately justified model |
| required_metadata | canonical PCR id; CPC 24423; Tiangong reference-flow UUID; all required qualifiers; site and geography; reporting period; technology and route; foreground boundary; included packaging levels; upstream dataset links; allocation method; co-product destinations; data-quality assessment; review status |
| required_quality_disclosure | Primary versus calculated or secondary data; meter and calibration status; temporal, geographical, and technological representativeness; precision, completeness, consistency, and reproducibility; balance differences; proxy data; exclusions; allocation sensitivity; wastewater treatment boundary; unresolved UUIDs or data gaps |
| update_trigger | Change in soy input form, recipe or Codex subtype; material change in protein or solids basis; new extraction, separation, homogenisation, heat-treatment, filling, packaging, sanitation, utility, or wastewater technology; changed co-product destination or allocation; changed site or geography; reporting period no longer representative; corrected flow identity or source rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `standard` | United Nations Statistics Division, Central Product Classification (CPC), Version 3.0, code 24423 “Soy milk”, official CPC resources and structure, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-10) | Classification identity and exclusion of adjacent non-animal milks and other beverage categories |
| `codex-cxs-322r-2015` | `standard` | FAO and WHO Codex Alimentarius Commission, CXS 322R-2015, Regional Standard for Non-Fermented Soybean Products (Asia), adopted 2015 and amended 2025, https://openknowledge.fao.org/handle/20.500.14283/cd8959en (retrieved 2026-08-10) | Non-fermented soybean-product scope, beverage subtypes, soybean or soy-derivative and water basis, physical extraction, optional ingredients, composition and quality declarations, processing and net-weight requirements |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-10) | Manufacturing boundary, water and energy records, cleaning-in-place, product and residue separation or recovery, packaging separation, wastewater monitoring, and direct-discharge distinction |
| `us-epa-lca-2006` | `official_guidance` | United States Environmental Protection Agency, Life Cycle Assessment: Principles and Practice, EPA/600/R-06/060, May 2006, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1000L86.TXT (retrieved 2026-08-10) | LCI boundary and completeness, allocation hierarchy, foreground data collection, data sources, calculation traceability, and precision, completeness, representativeness, consistency, and reproducibility requirements |
