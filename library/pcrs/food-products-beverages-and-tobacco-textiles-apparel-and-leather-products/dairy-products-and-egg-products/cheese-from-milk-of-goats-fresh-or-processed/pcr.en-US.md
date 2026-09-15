---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-goats-fresh-or-processed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cheese from milk of goats, fresh or processed

## 1. Scope and Applicability

This PCR applies to cheese whose milk-derived constituents originate exclusively from goats and which leaves the reporting dairy as fresh or unripened cheese, ripened cheese, or processed cheese. It covers the declared factory route from goat milk received at the dairy gate through milk preparation, curd manufacture, route-specific finishing, packaging, cold storage, and on-site sanitation and effluent handling.

The foreground data package shall identify the animal species of every milk, cheese, whey, cream, milk-fat, milk-protein, and other dairy input. A product containing any milk-derived constituent from sheep, cattle, buffalo, or another animal is outside this PCR. A mixed-goat-and-sheep or other mixed-species product shall be reclassified and shall not be represented by this reference flow, even when goat milk is the majority input.

The product state shall be declared as `fresh_unripened`, `ripened`, or `processed_cheese`. The data package shall additionally state whether the cheese is brined, whether free brine is included in the reference mass, all characterizing non-dairy ingredients and processing additives, and the packaging state at the declared gate. Codex product descriptions and quality provisions are used only to identify the applicable cheese state and required disclosures; they do not provide default recipes, yields, energy use, water use, salt content, or LCI amounts.

Goat husbandry and milk production before receipt at the dairy are represented by linked upstream datasets. Retail, use, and end-of-life stages are outside this factory-gate foreground boundary unless the study explicitly extends the system and reports those modules separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-goats-fresh-or-processed |
| classification_refs | CPC 3.0 `22254`, Cheese from milk of goats, fresh or processed |
| covered_products | Cheese made only from goat-derived milk and dairy constituents, including fresh or unripened cheese, ripened cheese, curd and whey-cheese products classified here, and processed cheese whose dairy constituents are exclusively goat-derived |
| excluded_products | Sheep-milk cheese; cattle-milk cheese; buffalo-milk cheese; cheese from other animals; every mixed-species milk or cheese product; non-dairy cheese analogues; products for which animal origin cannot be verified |
| representative_product | Saleable goat-milk cheese in the declared fresh, ripened, or processed state at the dairy gate |
| production_route | Receipt of goat milk or an explicitly governed same-category goat-cheese input; preparation; coagulation and whey separation where applicable; state-specific salting, brining, ripening, or processing; packaging and cold storage |
| market_state | Factory-gate product with declared product state, brine convention, ingredient formulation, physical form, heat-treatment route, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Goat-milk cheese supplied in the declared fresh or unripened, ripened, or processed state |
| How much | 1 kg net cheese product at the dairy gate |
| How well | Conforms to the declared product specification and applicable cheese description; animal-origin evidence confirms that every dairy constituent is goat-derived |
| How long or cycle | One production lot through release from the dairy; ripening or cold-storage duration is recorded when applicable |
| reference_flow_link | Net saleable output of `packaging_cold_storage_dispatch`, reconciled to the declared mass and brine convention |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cheese from milk of goats, fresh or processed `e321b953-83b8-4428-9cce-3ac3aee6aae3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exclusive goat-dairy origin; product state (`fresh_unripened`, `ripened`, or `processed_cheese`); cheese or commercial type; physical form; heat-treatment and milk-preparation route; brine state and reference-mass convention; characterizing ingredients and processing additives; packaging state; net-mass basis; production geography; production-lot period; declared gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference amount as net saleable cheese mass. Exclude packaging. For cheese marketed in brine, declare and consistently apply either drained-cheese mass or cheese-plus-free-brine mass; do not combine the conventions. |
| `goat_origin_mass` | all dairy inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass and animal origin by received lot. Dairy input from any non-goat species makes the dataset non-conforming to this PCR and requires reclassification. |
| `ingredient_mass_basis` | salt, cultures, coagulants, emulsifying salts, additives, and characterizing ingredients | Mass | kg | Record actual batch additions and identify whether each amount is as-purchased product mass, active constituent mass, solution mass, or dry-solids mass. Do not infer a recipe from a Codex permission or product-quality limit. |
| `water_and_brine_separation` | process water, formulated brine, retained brine, and spent brine | Volume or Mass | m3 or kg | Keep process water, brine make-up, brine retained in the declared product, and spent brine as separate records. Record salt concentration and density when converting between mass and volume. |
| `energy_carrier_separation` | electricity, fuels, steam, hot water, and refrigeration | Energy or Mass | kWh, MJ, or carrier-specific unit | Preserve metered units and energy-carrier identity. Convert only with a documented factor and do not apply an industry-average energy intensity as a site value. |
| `packaging_mass_separation` | primary, secondary, and transport packaging | Mass | kg | Record packaging by material and component, normalized to 1 kg net cheese. Packaging mass is not part of the reference product mass. |
| `lot_normalization` | all foreground flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | per 1 kg reference product | Normalize only after reconciling the lot-specific saleable cheese output, route-specific work in progress, co-products, wastes, and inventory changes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Goat milk received at the dairy gate, with supplier, animal-species declaration, lot mass, composition or solids information used by the site, temperature or preservation state, and acceptance status recorded |
| starting_condition_role | Factory-gate input that fixes exclusive goat origin and links pre-dairy burdens to an upstream milk dataset |
| product_classification_scope | Cheese from goat milk only; the product state may be fresh or unripened, ripened, or processed, but mixed-species dairy products are outside scope |
| recursive_input_rule | Purchased goat cheese or another same-category goat-cheese intermediate used in processed cheese remains an explicit product input; do not recursively decompose it in the foreground process, and require a compatible upstream dataset so its burdens are counted once |
| upstream_dataset_requirement | Supplier-specific or otherwise representative datasets for goat milk, same-category goat-cheese inputs, ingredients, energy carriers, water supply, packaging, transport to the dairy when included, and externally treated wastes or wastewater |
| disclosure | Declare goat-origin evidence, product state, route, lot period, facility, mass convention, brine state, ingredients and additives, packaging state, included processes, upstream dataset choices, cut-offs, and allocation decisions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all datasets | Include all on-site operations from accepted goat milk or governed same-category goat-cheese input through release of the declared saleable cheese, including utilities, refrigeration, cleaning, losses, by-products, waste, and on-site effluent handling. | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `boundary_goat_origin` | dairy raw materials and intermediates | Verify exclusive goat origin for every dairy constituent. Any sheep milk or sheep-derived ingredient, any other non-goat dairy input, or any mixed-species input requires reclassification and cannot be hidden by allocation. | `unsd-cpc-3-22254`; `codex-cxs-206-1999` |
| `boundary_product_state` | reference product | Declare `fresh_unripened`, `ripened`, or `processed_cheese`, and include only the route operations actually performed. A Codex compositional or quality provision is not an LCI quantity. | `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `boundary_brine_ingredients_packaging` | reference product and finishing route | Declare brine state, reference-mass convention, characterizing ingredients and processing additives, and packaging state; model their actual recorded inputs and outputs separately. | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `boundary_upstream_links` | purchased inputs and off-site services | Link excluded upstream production and off-site treatment to explicit datasets. Do not replace supplier or site records with BAT performance levels or generic recipes. | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `boundary_cutoff_disclosure` | all inventory flows | Apply no unreported mass, energy, water, packaging, brine, waste, or emission cut-off. If the study applies a cut-off under its governing programme, identify the omitted flow, amount or estimate, justification, and expected influence. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| goat_milk_intake_and_preparation | Goat milk intake and preparation | required |  | foreground receipt, storage, testing, standardization, and heat treatment actually performed | kg prepared goat milk transferred to cheese making |
| curd_formation_and_drainage | Curd formation and drainage | required |  | foreground coagulation, cutting, heating, draining, moulding, and pressing actually performed | kg curd transferred to finishing |
| route_specific_finishing | Route-specific finishing | required |  | foreground fresh-cheese finishing, salting or brining, ripening, or processed-cheese operations actually performed | kg finished goat cheese transferred to packaging |
| packaging_cold_storage_dispatch | Packaging, cold storage, and dispatch | required |  | foreground packaging state, refrigeration, storage, and release at the dairy gate | kg net saleable reference product |
| sanitation_and_effluent | Sanitation and effluent handling | required |  | foreground cleaning-in-place or other sanitation and on-site wastewater or waste handling | reporting-period services allocated to the modelled lots |

### Process: Goat milk intake and preparation (`goat_milk_intake_and_preparation`)

#### Inputs

##### Product flows

###### Received raw goat milk (`received_goat_milk`)

Record Raw milk of goats as one atomic exchange under the declared process and route.

- Selected flow: Raw milk of goats `2c001731-6bd5-4e32-b3cf-15f4c67d4038`
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass by lot, with composition or solids data used by the facility and inventory changes recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_lots`
- Sources: `codex-cxs-206-1999`
- Range: Site-and-lot observed envelope; no cross-site default
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized accepted-milk amount calculated from included lots
  - Upper: maximum normalized accepted-milk amount calculated from included lots
  - Unit: kg/kg net saleable cheese
  - Basis: included facility and product-state lots only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation electricity, low voltage (`intake_preparation_electricity_low_voltage`)

Applicable only when Alternating current, low-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation electricity, medium voltage (`intake_preparation_electricity_medium_voltage`)

Applicable only when Alternating current, medium-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation electricity, high voltage (`intake_preparation_electricity_high_voltage`)

Applicable only when Alternating current, high-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation on-site photovoltaic electricity (`intake_preparation_electricity_onsite_pv`)

Applicable only to metered on-site photovoltaic electricity consumed by this process; exclude exports and do not duplicate grid electricity.

- Selected flow: Alternating Current, photovoltaic electricity generation, monocrystalline silicon `a43f59bc-4263-40de-af1e-d067f0b792d2`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation industrial steam (`intake_preparation_steam`)

Applicable only when Heat, steam supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Heat, steam `fb513738-b5b1-46d6-8820-ae4009a097be`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation purchased hot water (`intake_preparation_hot_water`)

Applicable only when Hot water for industrial process heat supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Hot water for industrial process heat
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation natural gas (`intake_preparation_natural_gas`)

Applicable only when natural gas in the gaseous state supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation diesel oil (`intake_preparation_diesel`)

Applicable only when Diesel oil supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation liquefied petroleum gas (`intake_preparation_lpg`)

Applicable only when Liquefied petroleum gas supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation heavy fuel oil (`intake_preparation_heavy_fuel_oil`)

Applicable only when Heavy fuel oil supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation biogas (`intake_preparation_biogas`)

Applicable only when Biogas supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Biogas `246d7fec-59ef-4032-8539-e47632b60a23`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation biomass briquette fuel (`intake_preparation_biomass_briquette`)

Applicable only when Biomass briquette fuel supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Biomass briquette fuel `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation compressed air (`intake_preparation_compressed_air`)

Applicable only when Compressed air is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation tap water (`intake_preparation_tap_water`)

Applicable only when Tap water is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation deionized water (`intake_preparation_deionized_water`)

Applicable only when Water (desalinated; deionized) is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Water (desalinated; deionized) `c707e768-2a44-4b33-8218-e8dcdb345132`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation refrigerant R134a make-up (`intake_preparation_refrigerant_r134a`)

Applicable only when equipment serving this process uses Refrigerant, R134a; record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation refrigerant R404A make-up (`intake_preparation_refrigerant_r404a`)

Applicable only when equipment serving this process uses Refrigerant, R404A; record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation refrigerant R717 make-up (`intake_preparation_refrigerant_r717`)

Applicable only when equipment serving this process uses Refrigerant R717 (ammonia); record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant R717 (ammonia)
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Intake and preparation refrigerant R744 make-up (`intake_preparation_refrigerant_r744`)

Applicable only when equipment serving this process uses Refrigerant R744 (carbon dioxide); record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant R744 (carbon dioxide)
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to intake, storage, cooling, separation, standardization, and heat treatment actually performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier; no generic intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier and route at the reporting facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared goat milk (`prepared_goat_milk`)

Record Prepared goat milk as one atomic exchange under the declared process and route.

- Selected flow: Prepared goat milk
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass by batch, reconciled with intake, recovered fractions, losses, and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per batch transferred to `curd_formation_and_drainage`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_lots`
- Range: Batch-observed transfer envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum measured transfer mass among included comparable batches
  - Upper: maximum measured transfer mass among included comparable batches
  - Unit: kg/batch
  - Basis: declared batch size and preparation route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Rejected raw goat milk (`rejected_raw_goat_milk`)

Applicable only when Rejected raw goat milk is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Rejected raw goat milk
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected or lost mass by disposition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-lot observed loss envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized loss calculated from included lots
  - Upper: maximum normalized loss calculated from included lots
  - Unit: kg/kg net saleable cheese
  - Basis: included facility and route lots
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Goat-milk preparation loss (`goat_milk_preparation_loss`)

Applicable only when Goat-milk preparation loss is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat-milk preparation loss
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected or lost mass by disposition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-lot observed loss envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized loss calculated from included lots
  - Upper: maximum normalized loss calculated from included lots
  - Unit: kg/kg net saleable cheese
  - Basis: included facility and route lots
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Elementary flows

### Process: Curd formation and drainage (`curd_formation_and_drainage`)

#### Inputs

##### Product flows

###### Prepared goat milk transferred to cheese making (`prepared_goat_milk_input`)

Record Prepared goat milk as one atomic exchange under the declared process and route.

- Selected flow: Prepared goat milk
- Flow property / unit: Mass / kg
- Amount rule: Measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per curd-making batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_lots`

###### Cheese starter culture (`curd_starter_culture`)

Applicable only when Starter culture is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Starter culture `e9ab7eca-5240-43cb-84d1-069af92d1b03`
- Flow property / unit: Mass / kg
- Amount rule: Batch issue or dosing records for every addition, separating solution mass, dry solids, and active constituent where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_additives`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`
- Range: Product-and-batch observed addition envelope; no standard-derived recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized amount calculated from included same-formulation batches
  - Upper: maximum normalized amount calculated from included same-formulation batches
  - Unit: kg/kg net saleable cheese
  - Basis: same declared formulation and addition-mass convention
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Rennet coagulant (`curd_rennet`)

Applicable only when Rennet is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Rennet `0cc2c20e-9c7d-4d03-b8b8-f347cd39bed4`
- Flow property / unit: Mass / kg
- Amount rule: Batch issue or dosing records for every addition, separating solution mass, dry solids, and active constituent where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_additives`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`
- Range: Product-and-batch observed addition envelope; no standard-derived recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized amount calculated from included same-formulation batches
  - Upper: maximum normalized amount calculated from included same-formulation batches
  - Unit: kg/kg net saleable cheese
  - Basis: same declared formulation and addition-mass convention
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Food-grade salt for curd making (`curd_food_grade_salt`)

Applicable only when Salt is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass / kg
- Amount rule: Batch issue or dosing records for every addition, separating solution mass, dry solids, and active constituent where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_additives`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`
- Range: Product-and-batch observed addition envelope; no standard-derived recipe
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized amount calculated from included same-formulation batches
  - Upper: maximum normalized amount calculated from included same-formulation batches
  - Unit: kg/kg net saleable cheese
  - Basis: same declared formulation and addition-mass convention
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making electricity, low voltage (`curd_making_electricity_low_voltage`)

Applicable only when Alternating current, low-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making electricity, medium voltage (`curd_making_electricity_medium_voltage`)

Applicable only when Alternating current, medium-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making electricity, high voltage (`curd_making_electricity_high_voltage`)

Applicable only when Alternating current, high-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making on-site photovoltaic electricity (`curd_making_electricity_onsite_pv`)

Applicable only to metered on-site photovoltaic electricity consumed by this process; exclude exports and do not duplicate grid electricity.

- Selected flow: Alternating Current, photovoltaic electricity generation, monocrystalline silicon `a43f59bc-4263-40de-af1e-d067f0b792d2`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making industrial steam (`curd_making_steam`)

Applicable only when Heat, steam supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Heat, steam `fb513738-b5b1-46d6-8820-ae4009a097be`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making purchased hot water (`curd_making_hot_water`)

Applicable only when Hot water for industrial process heat supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Hot water for industrial process heat
- Flow property / unit: Energy / MJ
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making natural gas (`curd_making_natural_gas`)

Applicable only when natural gas in the gaseous state supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making diesel oil (`curd_making_diesel`)

Applicable only when Diesel oil supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making liquefied petroleum gas (`curd_making_lpg`)

Applicable only when Liquefied petroleum gas supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass / kg
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making heavy fuel oil (`curd_making_heavy_fuel_oil`)

Applicable only when Heavy fuel oil supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making biogas (`curd_making_biogas`)

Applicable only when Biogas supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Biogas `246d7fec-59ef-4032-8539-e47632b60a23`
- Flow property / unit: Volume / m3
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making biomass briquette fuel (`curd_making_biomass_briquette`)

Applicable only when Biomass briquette fuel supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Biomass briquette fuel `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- Flow property / unit: Mass / kg
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making compressed air (`curd_making_compressed_air`)

Applicable only when Compressed air is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making tap water (`curd_making_tap_water`)

Applicable only when Tap water is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Curd-making deionized water (`curd_making_deionized_water`)

Applicable only when Water (desalinated; deionized) is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Water (desalinated; deionized) `c707e768-2a44-4b33-8218-e8dcdb345132`
- Flow property / unit: Volume / m3
- Amount rule: Metered use or documented allocation from facility meters for the modelled batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-period observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same carrier, facility, and product route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Goat-cheese curd (`goat_cheese_curd`)

Record Goat-cheese curd as one atomic exchange under the declared process and route.

- Selected flow: Goat-cheese curd
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per curd-making batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_lots`

###### Recovered goat whey (`goat_whey_coproduct`)

Applicable only when Goat whey is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat whey
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass and destination by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-route observed co-product envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized output calculated from included comparable batches
  - Upper: maximum normalized output calculated from included comparable batches
  - Unit: kg/kg net saleable cheese
  - Basis: same co-product identity and disposition route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Recovered goat cream (`goat_cream_coproduct`)

Applicable only when Goat cream is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat cream
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass and destination by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-route observed co-product envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized output calculated from included comparable batches
  - Upper: maximum normalized output calculated from included comparable batches
  - Unit: kg/kg net saleable cheese
  - Basis: same co-product identity and disposition route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Recovered goat-cheese curd fines (`recovered_goat_cheese_curd_fines`)

Applicable only when Goat-cheese curd fines is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat-cheese curd fines
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass and destination by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-route observed co-product envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized output calculated from included comparable batches
  - Upper: maximum normalized output calculated from included comparable batches
  - Unit: kg/kg net saleable cheese
  - Basis: same co-product identity and disposition route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Goat-cheese curd fines waste (`goat_cheese_curd_fines_waste`)

Applicable only when Goat-cheese curd fines waste is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat-cheese curd fines waste
- Flow property / unit: Mass / kg
- Amount rule: Measured loss by batch and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-lot observed loss envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized loss calculated from included lots
  - Upper: maximum normalized loss calculated from included lots
  - Unit: kg/kg net saleable cheese
  - Basis: included facility and route lots
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Goat-cheese product loss (`goat_cheese_product_loss`)

Applicable only when Goat-cheese product loss is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat-cheese product loss
- Flow property / unit: Mass / kg
- Amount rule: Measured loss by batch and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-lot observed loss envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized loss calculated from included lots
  - Upper: maximum normalized loss calculated from included lots
  - Unit: kg/kg net saleable cheese
  - Basis: included facility and route lots
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Elementary flows

### Process: Route-specific finishing (`route_specific_finishing`)

#### Inputs

##### Product flows

###### Goat-cheese curd input to finishing (`finishing_goat_cheese_curd_input`)

Applicable only when Goat-cheese curd is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat-cheese curd
- Flow property / unit: Mass / kg
- Amount rule: Measured batch input mass by product identity and source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_lots`

###### Goat-milk cheese input to processed-cheese route (`processed_cheese_goat_cheese_input`)

Applicable only when Cheese from milk of goats, fresh or processed is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Cheese from milk of goats, fresh or processed `e321b953-83b8-4428-9cce-3ac3aee6aae3`
- Flow property / unit: Mass / kg
- Amount rule: Measured batch input mass by product identity and source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_material_lots`

###### Food-grade dry salt for finishing (`finishing_food_grade_salt`)

Applicable only when Salt is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass / kg
- Amount rule: Batch issue, dosing, brine make-up, and concentration records using the declared mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_additives`
- Sources: `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`
- Range: Product-and-batch observed addition envelope; no Codex limit used as LCI
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized amount calculated from included same-formulation batches
  - Upper: maximum normalized amount calculated from included same-formulation batches
  - Unit: kg/kg net saleable cheese
  - Basis: same formulation, brine convention, and addition-mass basis
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Food-grade sodium-chloride brine (`finishing_food_grade_brine`)

Applicable only when Food-grade sodium-chloride brine is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Food-grade sodium-chloride brine
- Flow property / unit: Mass / kg
- Amount rule: Batch issue, dosing, brine make-up, and concentration records using the declared mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_additives`
- Sources: `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`
- Range: Product-and-batch observed addition envelope; no Codex limit used as LCI
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized amount calculated from included same-formulation batches
  - Upper: maximum normalized amount calculated from included same-formulation batches
  - Unit: kg/kg net saleable cheese
  - Basis: same formulation, brine convention, and addition-mass basis
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sodium citrate emulsifying salt (`finishing_sodium_citrate`)

Applicable only when Sodium citrate is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Sodium citrate
- Flow property / unit: Mass / kg
- Amount rule: Batch issue, dosing, brine make-up, and concentration records using the declared mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_additives`
- Sources: `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`
- Range: Product-and-batch observed addition envelope; no Codex limit used as LCI
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized amount calculated from included same-formulation batches
  - Upper: maximum normalized amount calculated from included same-formulation batches
  - Unit: kg/kg net saleable cheese
  - Basis: same formulation, brine convention, and addition-mass basis
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Disodium phosphate emulsifying salt (`finishing_disodium_phosphate`)

Applicable only when Disodium phosphate is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Disodium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Batch issue, dosing, brine make-up, and concentration records using the declared mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredients_and_additives`
- Sources: `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`
- Range: Product-and-batch observed addition envelope; no Codex limit used as LCI
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized amount calculated from included same-formulation batches
  - Upper: maximum normalized amount calculated from included same-formulation batches
  - Unit: kg/kg net saleable cheese
  - Basis: same formulation, brine convention, and addition-mass basis
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening electricity, low voltage (`finishing_ripening_electricity_low_voltage`)

Applicable only when Alternating current, low-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kWh/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening electricity, medium voltage (`finishing_ripening_electricity_medium_voltage`)

Applicable only when Alternating current, medium-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kWh/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening electricity, high voltage (`finishing_ripening_electricity_high_voltage`)

Applicable only when Alternating current, high-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kWh/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening on-site photovoltaic electricity (`finishing_ripening_electricity_onsite_pv`)

Applicable only to metered on-site photovoltaic electricity consumed by this process; exclude exports and do not duplicate grid electricity.

- Selected flow: Alternating Current, photovoltaic electricity generation, monocrystalline silicon `a43f59bc-4263-40de-af1e-d067f0b792d2`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kWh/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening industrial steam (`finishing_ripening_steam`)

Applicable only when Heat, steam supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Heat, steam `fb513738-b5b1-46d6-8820-ae4009a097be`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: MJ/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening purchased hot water (`finishing_ripening_hot_water`)

Applicable only when Hot water for industrial process heat supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Hot water for industrial process heat
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: MJ/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening natural gas (`finishing_ripening_natural_gas`)

Applicable only when natural gas in the gaseous state supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: m3/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening diesel oil (`finishing_ripening_diesel`)

Applicable only when Diesel oil supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: MJ/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening liquefied petroleum gas (`finishing_ripening_lpg`)

Applicable only when Liquefied petroleum gas supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening heavy fuel oil (`finishing_ripening_heavy_fuel_oil`)

Applicable only when Heavy fuel oil supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening biogas (`finishing_ripening_biogas`)

Applicable only when Biogas supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Biogas `246d7fec-59ef-4032-8539-e47632b60a23`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: m3/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening biomass briquette fuel (`finishing_ripening_biomass_briquette`)

Applicable only when Biomass briquette fuel supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Biomass briquette fuel `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening compressed air (`finishing_ripening_compressed_air`)

Applicable only when Compressed air is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: m3/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening tap water (`finishing_ripening_tap_water`)

Applicable only when Tap water is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: m3/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening deionized water (`finishing_ripening_deionized_water`)

Applicable only when Water (desalinated; deionized) is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Water (desalinated; deionized) `c707e768-2a44-4b33-8218-e8dcdb345132`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: m3/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening refrigerant R134a make-up (`finishing_ripening_refrigerant_r134a`)

Applicable only when equipment serving this process uses Refrigerant, R134a; record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening refrigerant R404A make-up (`finishing_ripening_refrigerant_r404a`)

Applicable only when equipment serving this process uses Refrigerant, R404A; record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening refrigerant R717 make-up (`finishing_ripening_refrigerant_r717`)

Applicable only when equipment serving this process uses Refrigerant R717 (ammonia); record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant R717 (ammonia)
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Finishing and ripening refrigerant R744 make-up (`finishing_ripening_refrigerant_r744`)

Applicable only when equipment serving this process uses Refrigerant R744 (carbon dioxide); record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant R744 (carbon dioxide)
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to the declared fresh, ripened, or processed route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, route, and duration observed envelope by carrier
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included lots
  - Upper: maximum normalized carrier use calculated from comparable included lots
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, product state, route, and ripening-duration class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished goat-milk cheese (`finished_goat_cheese`)

Record Cheese from milk of goats, fresh or processed as one atomic exchange under the declared process and route.

- Selected flow: Cheese from milk of goats, fresh or processed `e321b953-83b8-4428-9cce-3ac3aee6aae3`
- Flow property / unit: Mass / kg
- Amount rule: Measured net transfer mass by finished-product lot before packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finished-product lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_release`

##### Waste flows

###### Spent food-grade brine (`spent_food_grade_brine`)

Applicable only when High-concentration saline wastewater is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Spent food-grade brine
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge, removal, or inventory loss by lot and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-route observed residue envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized residue calculated from included comparable lots
  - Upper: maximum normalized residue calculated from included comparable lots
  - Unit: kg/kg net saleable cheese
  - Basis: same residue identity and finishing route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Cheese surface-treatment residue (`cheese_surface_treatment_residue`)

Applicable only when Cheese surface-treatment residue is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Cheese surface-treatment residue
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge, removal, or inventory loss by lot and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-route observed residue envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized residue calculated from included comparable lots
  - Upper: maximum normalized residue calculated from included comparable lots
  - Unit: kg/kg net saleable cheese
  - Basis: same residue identity and finishing route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Off-specification goat-milk cheese (`off_spec_goat_cheese`)

Applicable only when Off-specification goat-milk cheese is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Off-specification goat-milk cheese
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge, removal, or inventory loss by lot and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-route observed residue envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized residue calculated from included comparable lots
  - Upper: maximum normalized residue calculated from included comparable lots
  - Unit: kg/kg net saleable cheese
  - Basis: same residue identity and finishing route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Goat-cheese trimming loss (`goat_cheese_trimming_loss`)

Applicable only when Goat-cheese trimming loss is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat-cheese trimming loss
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge, removal, or inventory loss by lot and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-route observed residue envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized residue calculated from included comparable lots
  - Upper: maximum normalized residue calculated from included comparable lots
  - Unit: kg/kg net saleable cheese
  - Basis: same residue identity and finishing route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Goat-cheese ripening loss (`goat_cheese_ripening_loss`)

Applicable only when Goat-cheese ripening loss is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Goat-cheese ripening loss
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge, removal, or inventory loss by lot and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-route observed residue envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized residue calculated from included comparable lots
  - Upper: maximum normalized residue calculated from included comparable lots
  - Unit: kg/kg net saleable cheese
  - Basis: same residue identity and finishing route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Elementary flows

### Process: Packaging, cold storage, and dispatch (`packaging_cold_storage_dispatch`)

#### Inputs

##### Product flows

###### Finished goat-milk cheese for packing (`finished_goat_cheese_input`)

Record Cheese from milk of goats, fresh or processed as one atomic exchange under the declared process and route.

- Selected flow: Cheese from milk of goats, fresh or processed `e321b953-83b8-4428-9cce-3ac3aee6aae3`
- Flow property / unit: Mass / kg
- Amount rule: Measured input mass by packing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_release`

###### Polyethylene film package component (`packaging_polyethylene_film`)

Applicable only when Polyethylene film is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill of materials reconciled to issued and returned components and saleable units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Range: Product-and-period observed packaging envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized component mass calculated from included packing records
  - Upper: maximum normalized component mass calculated from included packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and packaging material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Polypropylene cheese container (`packaging_polypropylene_container`)

Applicable only when Polypropylene cheese container is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Polypropylene cheese container
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill of materials reconciled to issued and returned components and saleable units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Range: Product-and-period observed packaging envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized component mass calculated from included packing records
  - Upper: maximum normalized component mass calculated from included packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and packaging material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Aluminium foil package component (`packaging_aluminium_foil`)

Applicable only when Aluminum foil is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill of materials reconciled to issued and returned components and saleable units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Range: Product-and-period observed packaging envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized component mass calculated from included packing records
  - Upper: maximum normalized component mass calculated from included packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and packaging material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Corrugated board box (`packaging_corrugated_box`)

Applicable only when corrugated board boxes is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill of materials reconciled to issued and returned components and saleable units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Range: Product-and-period observed packaging envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized component mass calculated from included packing records
  - Upper: maximum normalized component mass calculated from included packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and packaging material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Wood pallet (`packaging_wood_pallet`)

Applicable only when Pallets, box pallets and other load boards, of wood, pallet collars of wood is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill of materials reconciled to issued and returned components and saleable units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Range: Product-and-period observed packaging envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized component mass calculated from included packing records
  - Upper: maximum normalized component mass calculated from included packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and packaging material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Paper packaging label (`packaging_paper_label`)

Applicable only when Packaging label, paper is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Packaging label, paper `d5890643-6859-42b5-9e05-556b072c6a8c`
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill of materials reconciled to issued and returned components and saleable units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Range: Product-and-period observed packaging envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized component mass calculated from included packing records
  - Upper: maximum normalized component mass calculated from included packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and packaging material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing and cold-storage electricity, low voltage (`packing_cold_storage_electricity_low_voltage`)

Applicable only when Alternating current, low-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing and cold-storage electricity, medium voltage (`packing_cold_storage_electricity_medium_voltage`)

Applicable only when Alternating current, medium-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing and cold-storage electricity, high voltage (`packing_cold_storage_electricity_high_voltage`)

Applicable only when Alternating current, high-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing and cold-storage on-site photovoltaic electricity (`packing_cold_storage_electricity_onsite_pv`)

Applicable only to metered on-site photovoltaic electricity consumed by this process; exclude exports and do not duplicate grid electricity.

- Selected flow: Alternating Current, photovoltaic electricity generation, monocrystalline silicon `a43f59bc-4263-40de-af1e-d067f0b792d2`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing compressed air (`packing_cold_storage_compressed_air`)

Applicable only when Compressed air is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing and cold-storage refrigerant R134a make-up (`packing_cold_storage_refrigerant_r134a`)

Applicable only when equipment serving this process uses Refrigerant, R134a; record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing and cold-storage refrigerant R404A make-up (`packing_cold_storage_refrigerant_r404a`)

Applicable only when equipment serving this process uses Refrigerant, R404A; record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing and cold-storage refrigerant R717 make-up (`packing_cold_storage_refrigerant_r717`)

Applicable only when equipment serving this process uses Refrigerant R717 (ammonia); record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant R717 (ammonia)
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Packing and cold-storage refrigerant R744 make-up (`packing_cold_storage_refrigerant_r744`)

Applicable only when equipment serving this process uses Refrigerant R744 (carbon dioxide); record make-up from stock and service records without treating the purchase as an emission.

- Selected flow: Refrigerant R744 (carbon dioxide)
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled use assigned to included packing lines and cold-storage periods
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Site, storage-duration, and carrier observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized carrier use calculated from comparable included periods
  - Upper: maximum normalized carrier use calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same facility, storage temperature, duration class, and carrier
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable goat-milk cheese reference product (`reference_goat_cheese`)

Record Cheese from milk of goats, fresh or processed as one atomic exchange under the declared process and route.

- Selected flow: Cheese from milk of goats, fresh or processed `e321b953-83b8-4428-9cce-3ac3aee6aae3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net saleable cheese on the declared brine convention, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Polyethylene-film packaging scrap (`polyethylene_film_packaging_scrap`)

Applicable only when Polyethylene-film packaging scrap is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Polyethylene-film packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects by material and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-package observed reject envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized reject amount calculated from comparable packing records
  - Upper: maximum normalized reject amount calculated from comparable packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and reject identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Polypropylene packaging scrap (`polypropylene_packaging_scrap`)

Applicable only when Polypropylene Wastes is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects by material and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-package observed reject envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized reject amount calculated from comparable packing records
  - Upper: maximum normalized reject amount calculated from comparable packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and reject identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Aluminium-foil packaging scrap (`aluminium_foil_packaging_scrap`)

Applicable only when Aluminium scrap, new, loose is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Aluminium scrap, new, loose `0f5a6a98-22cc-4549-af43-6ed44014e5de`
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects by material and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-package observed reject envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized reject amount calculated from comparable packing records
  - Upper: maximum normalized reject amount calculated from comparable packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and reject identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Corrugated-box packaging waste (`corrugated_box_packaging_waste`)

Applicable only when Packaging waste, cardboard is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects by material and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-package observed reject envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized reject amount calculated from comparable packing records
  - Upper: maximum normalized reject amount calculated from comparable packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and reject identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Paper-label packaging waste (`paper_label_packaging_waste`)

Applicable only when Packaging waste, paper is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects by material and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-package observed reject envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized reject amount calculated from comparable packing records
  - Upper: maximum normalized reject amount calculated from comparable packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and reject identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Unsaleable packed goat-milk cheese (`unsaleable_packed_goat_cheese`)

Applicable only when Unsaleable goat-milk cheese is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Unsaleable goat-milk cheese
- Flow property / unit: Mass / kg
- Amount rule: Measured rejects by material and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproduct_and_waste`
- Range: Site-and-package observed reject envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized reject amount calculated from comparable packing records
  - Upper: maximum normalized reject amount calculated from comparable packing records
  - Unit: kg/kg net saleable cheese
  - Basis: same package configuration and reject identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Elementary flows

###### HFC-134a emission to air (`hfc134a_emission_to_air`)

Applicable only when HFC-134a is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance for equipment serving included operations and periods
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-fdm-bat-2019`
- Range: Installation-and-period observed emission envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from comparable included periods
  - Upper: maximum normalized emission calculated from comparable included periods
  - Unit: kg HFC-134a/kg net saleable cheese
  - Basis: same installation and refrigerant identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### R404A emission to air (`r404a_emission_to_air`)

Applicable only when Refrigerant R404A to air is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance for equipment serving included operations and periods
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-fdm-bat-2019`
- Range: Installation-and-period observed emission envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from comparable included periods
  - Upper: maximum normalized emission calculated from comparable included periods
  - Unit: kg R404A/kg net saleable cheese
  - Basis: same installation and refrigerant identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Ammonia refrigerant emission to air (`ammonia_refrigerant_emission_to_air`)

Applicable only when ammonia is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance for equipment serving included operations and periods
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-fdm-bat-2019`
- Range: Installation-and-period observed emission envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from comparable included periods
  - Upper: maximum normalized emission calculated from comparable included periods
  - Unit: kg ammonia/kg net saleable cheese
  - Basis: same installation and refrigerant identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### R744 carbon-dioxide emission to air (`r744_carbon_dioxide_emission_to_air`)

Applicable only when carbon dioxide is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-9c12-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass balance for equipment serving included operations and periods
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-fdm-bat-2019`
- Range: Installation-and-period observed emission envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from comparable included periods
  - Upper: maximum normalized emission calculated from comparable included periods
  - Unit: kg carbon dioxide/kg net saleable cheese
  - Basis: same installation and refrigerant identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

### Process: Sanitation and effluent handling (`sanitation_and_effluent`)

#### Inputs

##### Product flows

###### Sanitation tap water (`sanitation_tap_water`)

Applicable only when Tap water is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation deionized water (`sanitation_deionized_water`)

Applicable only when Water (desalinated; deionized) is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Water (desalinated; deionized) `c707e768-2a44-4b33-8218-e8dcdb345132`
- Flow property / unit: Volume / m3
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation sodium hydroxide, 30% solution (`sanitation_sodium_hydroxide_30pct`)

Applicable only when Sodium hydroxide（30%） is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Sodium hydroxide（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- Flow property / unit: Mass / kg
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation nitric acid, 50% solution (`sanitation_nitric_acid_50pct`)

Applicable only when Nitric acid, 50% aqueous solution is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- Flow property / unit: Mass / kg
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation peracetic acid (`sanitation_peracetic_acid`)

Applicable only when Peracetic acid is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation sodium hypochlorite (`sanitation_sodium_hypochlorite`)

Applicable only when Sodium hypochlorite is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Sodium hypochlorite `28c4ca0f-c924-4d2a-93dd-b9ac93009d25`
- Flow property / unit: Mass / kg
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation electricity, low voltage (`sanitation_electricity_low_voltage`)

Applicable only when Alternating current, low-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation electricity, medium voltage (`sanitation_electricity_medium_voltage`)

Applicable only when Alternating current, medium-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation electricity, high voltage (`sanitation_electricity_high_voltage`)

Applicable only when Alternating current, high-voltage grid supply crosses the foreground boundary for this process. Low-, medium-, and high-voltage grid cards are mutually exclusive for a given meter and supply quantity.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation on-site photovoltaic electricity (`sanitation_electricity_onsite_pv`)

Applicable only to metered on-site photovoltaic electricity consumed by this process; exclude exports and do not duplicate grid electricity.

- Selected flow: Alternating Current, photovoltaic electricity generation, monocrystalline silicon `a43f59bc-4263-40de-af1e-d067f0b792d2`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kWh/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation industrial steam (`sanitation_steam`)

Applicable only when Heat, steam supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Heat, steam `fb513738-b5b1-46d6-8820-ae4009a097be`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation purchased hot water (`sanitation_hot_water`)

Applicable only when Hot water for industrial process heat supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Hot water for industrial process heat
- Flow property / unit: Energy / MJ
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation natural gas (`sanitation_natural_gas`)

Applicable only when natural gas in the gaseous state supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation diesel oil (`sanitation_diesel`)

Applicable only when Diesel oil supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: MJ/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation liquefied petroleum gas (`sanitation_lpg`)

Applicable only when Liquefied petroleum gas supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass / kg
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation heavy fuel oil (`sanitation_heavy_fuel_oil`)

Applicable only when Heavy fuel oil supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation biogas (`sanitation_biogas`)

Applicable only when Biogas supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Biogas `246d7fec-59ef-4032-8539-e47632b60a23`
- Flow property / unit: Volume / m3
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation biomass briquette fuel (`sanitation_biomass_briquette`)

Applicable only when Biomass briquette fuel supplies this process. Purchased heat and on-site fuel cards are mutually exclusive for the same delivered heat quantity; parallel supplies remain separate.

- Selected flow: Biomass briquette fuel `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- Flow property / unit: Mass / kg
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Sanitation compressed air (`sanitation_compressed_air`)

Applicable only when Compressed air is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Metered, dosing, purchase, and stock-change records allocated from sanitation circuits to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019`
- Range: Site, circuit, and period observed envelope by input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized input calculated from comparable included periods
  - Upper: maximum normalized input calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same sanitation circuit, input identity, and facility
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Dairy-process wastewater sent to on-site treatment (`dairy_wastewater_onsite_treatment`)

Applicable only to Dairy-process wastewater sent to on-site treatment. The on-site and municipal treatment-route cards are mutually exclusive for the same wastewater volume.

- Selected flow: Dairy-process wastewater sent to on-site treatment
- Flow property / unit: Volume / m3
- Amount rule: Metered effluent volume, measured residual mass, and route-specific transfer records for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-treatment-route observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized output calculated from comparable included periods
  - Upper: maximum normalized output calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same wastewater or residual identity and treatment route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Dairy-process wastewater sent to municipal treatment (`dairy_wastewater_municipal_treatment`)

Applicable only to Dairy-process wastewater sent to municipal treatment. The on-site and municipal treatment-route cards are mutually exclusive for the same wastewater volume.

- Selected flow: Dairy-process wastewater sent to municipal treatment
- Flow property / unit: Volume / m3
- Amount rule: Metered effluent volume, measured residual mass, and route-specific transfer records for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-treatment-route observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized output calculated from comparable included periods
  - Upper: maximum normalized output calculated from comparable included periods
  - Unit: m3/kg net saleable cheese
  - Basis: same wastewater or residual identity and treatment route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Dairy wastewater-treatment sludge (`dairy_wastewater_treatment_sludge`)

Applicable only when Dairy wastewater-treatment sludge is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Dairy wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Metered effluent volume, measured residual mass, and route-specific transfer records for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site-and-treatment-route observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized output calculated from comparable included periods
  - Upper: maximum normalized output calculated from comparable included periods
  - Unit: kg/kg net saleable cheese
  - Basis: same wastewater or residual identity and treatment route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Elementary flows

###### Chemical oxygen demand to water (`chemical_oxygen_demand_to_water`)

Applicable only when Chemical Oxygen Demand is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Chemical Oxygen Demand `e57fc631-2c77-457a-aa30-be79e357792b`
- Flow property / unit: Mass / kg
- Amount rule: Discharged water volume multiplied by representative measured pollutant concentration, with sampling and non-detect handling documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site, outfall, pollutant, and period observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from included valid samples and flows
  - Upper: maximum normalized emission calculated from included valid samples and flows
  - Unit: kg COD/kg net saleable cheese
  - Basis: same outfall, pollutant, analytical method, and reporting period class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Biological oxygen demand to fresh water (`biological_oxygen_demand_to_fresh_water`)

Applicable only when biological oxygen demand is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Discharged water volume multiplied by representative measured pollutant concentration, with sampling and non-detect handling documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site, outfall, pollutant, and period observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from included valid samples and flows
  - Upper: maximum normalized emission calculated from included valid samples and flows
  - Unit: kg BOD/kg net saleable cheese
  - Basis: same outfall, pollutant, analytical method, and reporting period class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Total nitrogen to fresh water (`total_nitrogen_to_fresh_water`)

Applicable only when nitrogen, total (excluding N2) is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass / kg
- Amount rule: Discharged water volume multiplied by representative measured pollutant concentration, with sampling and non-detect handling documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site, outfall, pollutant, and period observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from included valid samples and flows
  - Upper: maximum normalized emission calculated from included valid samples and flows
  - Unit: kg total nitrogen/kg net saleable cheese
  - Basis: same outfall, pollutant, analytical method, and reporting period class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Total phosphorus to fresh water (`total_phosphorus_to_fresh_water`)

Applicable only when phosphorus, total is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass / kg
- Amount rule: Discharged water volume multiplied by representative measured pollutant concentration, with sampling and non-detect handling documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site, outfall, pollutant, and period observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from included valid samples and flows
  - Upper: maximum normalized emission calculated from included valid samples and flows
  - Unit: kg total phosphorus/kg net saleable cheese
  - Basis: same outfall, pollutant, analytical method, and reporting period class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Ammonium to fresh water (`ammonium_to_fresh_water`)

Applicable only when ammonium is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: ammonium `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Discharged water volume multiplied by representative measured pollutant concentration, with sampling and non-detect handling documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site, outfall, pollutant, and period observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from included valid samples and flows
  - Upper: maximum normalized emission calculated from included valid samples and flows
  - Unit: kg ammonium/kg net saleable cheese
  - Basis: same outfall, pollutant, analytical method, and reporting period class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

###### Chloride to fresh water (`chloride_to_fresh_water`)

Applicable only when Chloride to fresh water is present in the declared route, formulation, package configuration, waste disposition, or measured discharge; keep its amount separate from every adjacent card.

- Selected flow: Chloride to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Discharged water volume multiplied by representative measured pollutant concentration, with sampling and non-detect handling documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_and_residuals`
- Sources: `eu-fdm-bat-2019`
- Range: Site, outfall, pollutant, and period observed envelope
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: minimum normalized emission calculated from included valid samples and flows
  - Upper: maximum normalized emission calculated from included valid samples and flows
  - Unit: kg chloride/kg net saleable cheese
  - Basis: same outfall, pollutant, analytical method, and reporting period class
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | fresh, ripened, and processed product routes | Subdivide by product state, line, batch, and separately metered operation before allocating shared burdens. Do not average fresh, ripened, and processed routes unless the reporting dataset explicitly represents that production mix. | `eu-pef-2021-2279` |
| `allocation_direct_measurement` | directly attributable inputs and outputs | Assign goat milk, same-category cheese inputs, ingredients, brine, packaging, product losses, and route-specific utilities directly from batch or line records wherever possible. | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_dairy_outputs` | whey, cream, and other useful dairy outputs | Classify each output from its documented destination. If it is a co-product, apply the hierarchy required by the governing study method after subdivision and disclose the selected physical, economic, or other causal relation with site-period data. If it is waste, assign treatment without co-product credit. | `eu-pef-2021-2279` |
| `allocation_shared_services` | shared refrigeration, steam, water, sanitation, and effluent systems | Use submetered or engineering-causal allocation based on the service driver supported by facility records. If neither is available, disclose the fallback basis and test its influence; do not prescribe a universal mass or economic factor. | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_no_species_blending` | mixed-species dairy inputs | Allocation cannot convert a mixed-species product into goat-milk cheese. Any non-goat dairy constituent makes this PCR inapplicable and requires reclassification. | `unsd-cpc-3-22254`; `codex-cxs-206-1999` |
| `allocation_brine_and_packaging` | brine and packaging | Keep packaging outside the reference mass. Assign brine production and loss according to measured use and the declared drained-cheese or cheese-plus-free-brine convention, without double counting retained brine. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dairy_material_lots` | goat_milk_intake_and_preparation; curd_formation_and_drainage; route_specific_finishing | dairy material receipt and transfer | supplier declaration, intake ticket, batch sheet, tank or scale record | lot id; supplier; animal species; material identity; mass; composition or solids basis used; acceptance; source and destination; timestamp | calibrated tank, weighbridge, or scale plus lot reconciliation | kg | each receipt and batch transfer | all included lots in the reporting period | reporting dairy and included lines | sum like-for-like material records, reconcile stock change, then normalize to released reference product | calibration records, supplier animal-origin declaration, batch genealogy, and reconciliation sign-off |
| `cp_process_utilities` | all production processes | water, electricity, heat, refrigeration, and other utilities | meters, submeters, invoices, fuel and refrigerant stock records | meter id; carrier; opening and closing reading; purchase; stock change; process or line; operating time; allocation driver | calibrated meter where available; otherwise documented engineering allocation from facility totals | carrier-specific unit | continuous, batch, shift, or invoice period | representative period covering included production | reporting dairy and identified utility systems | calculate net carrier use by period, subtract excluded uses, allocate causally, and normalize to released product | meter calibration, invoice reconciliation, allocation worksheet, and coverage statement |
| `cp_ingredients_and_additives` | curd_formation_and_drainage; route_specific_finishing | cultures, coagulants, salt, brine, additives, and characterizing ingredients | formulation, batch issue, dosing, stock, and brine-control records | material id; supplier; lot; animal origin for dairy-derived inputs; issued mass or volume; concentration; density; active or solution basis; return; batch id | calibrated dosing system, scale, volume meter, and stock reconciliation | kg or m3 | each batch and replenishment | all included lots | reporting dairy and included lines | sum net additions by material and declared basis; convert only with recorded concentration or density | formulation approval, calibration, lot traceability, and stock reconciliation |
| `cp_byproduct_and_waste` | all production processes | co-products, rejects, cheese losses, spent brine, and solid waste | scale, tank, waste manifest, transfer, sales, and destination records | output identity; mass or volume; moisture or solids basis where used; destination; classification as product or waste; timestamp; batch or period | measured transfer or calibrated container and inventory reconciliation | kg or m3 | each transfer or batch; at least each reporting period | all included production and sanitation periods | reporting dairy and each destination route | aggregate separately by material identity and destination, reconcile stock change, and normalize to released product | scale or meter calibration, transfer documents, destination evidence, and mass-balance review |
| `cp_finished_product_release` | route_specific_finishing; packaging_cold_storage_dispatch | finished and saleable goat cheese | batch, packing, warehouse, and release records | product id; product state; goat-origin confirmation; batch; net mass; brine convention; ingredients; physical form; package configuration; storage duration; release status | calibrated checkweigher, scale, or tank plus warehouse reconciliation | kg | each finishing and packing lot | all released lots in reporting period | reporting dairy | sum released net mass using one declared brine convention and exclude packaging mass | scale calibration, label or specification, release certificate, and batch genealogy |
| `cp_packaging_bom` | packaging_cold_storage_dispatch | packaging materials | packaging bill of materials, issue, return, and scrap records | component id; material; unit mass; units issued; returns; scrap; packed product id; lot | verified component weights and material issue reconciliation | kg | each package configuration and reporting period | all included packing lots | reporting dairy and packing lines | net component mass equals issued minus returned and separately recorded scrap; normalize to net released cheese | supplier specification, sampled component weights, issue records, and reconciliation |
| `cp_refrigerant_balance` | packaging_cold_storage_dispatch | refrigerant input and emission | equipment register, service log, purchase, recovery, and stock records | equipment id; refrigerant identity; charge; additions; recovered mass; opening and closing stock; service date; operating scope | installation-specific refrigerant mass balance | kg | each service event and annual or reporting-period reconciliation | period aligned with included cheese production | refrigeration equipment serving included operations | additions plus opening stock minus recovery, transfers, and closing stock; allocate only equipment serving the included scope | technician records, invoices, recovery documentation, and equipment register |
| `cp_sanitation_records` | sanitation_and_effluent | cleaning water, chemicals, and energy | cleaning-in-place cycle log, dosing, meter, and stock records | circuit; cycle; water volume; chemical identity and concentration; dose; temperature; duration; energy carrier; linked production line | automated cycle log and calibrated meters or documented stock reconciliation | kg, m3, kWh, or MJ | each cleaning cycle | all cycles serving included production | reporting dairy and included sanitation circuits | aggregate by circuit and input, exclude unrelated production, then allocate by documented causal service | cycle completion log, dosing calibration, meter calibration, and sanitation schedule |
| `cp_effluent_and_residuals` | sanitation_and_effluent | wastewater, direct water emissions, and treatment residuals | flow meter, sampling, laboratory, sludge, and transfer records | outfall or route; volume; sample time; pollutant; concentration; analytical method; non-detect rule; residual mass; destination | calibrated flow measurement and representative sampling under applicable facility controls | m3, concentration unit, or kg | continuous flow where available and scheduled sampling or each transfer | period aligned with included production and representative operating conditions | reporting dairy, each outfall, and each treatment route | calculate pollutant mass from matched flow and concentration; aggregate residuals by route; normalize to released product | meter calibration, chain of custody, laboratory quality control, sampling plan, and treatment records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground amounts | normalized amount = included process amount / released net cheese mass under the declared brine convention | applicable collection protocol; `cp_finished_product_release` | flow amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_material_balance` | each batch and reporting period | reconcile opening inventory + receipts with transfers + released product + co-products + wastes + closing inventory; investigate material residuals rather than assigning them silently | `cp_dairy_material_lots`; `cp_ingredients_and_additives`; `cp_byproduct_and_waste`; `cp_finished_product_release` | documented material-balance reconciliation | `eu-fdm-bat-2019` |
| `calc_brine_basis` | brined products | calculate retained and spent brine separately from make-up and replenishment records; map retained brine to the reference mass only according to the declared mass convention | `cp_ingredients_and_additives`; `cp_finished_product_release`; `cp_byproduct_and_waste` | brine input, retained amount, and spent-brine output without double counting |  |
| `calc_packaging_mass` | packaging | component mass = verified unit mass × net units consumed; sum by material and exclude all packaging from reference cheese mass | `cp_packaging_bom`; `cp_finished_product_release` | kg packaging material per 1 kg reference product |  |
| `calc_refrigerant_emission` | refrigeration equipment | direct emission = opening refrigerant stock + purchases + additions received - closing stock - recovered or transferred refrigerant, restricted to included equipment and reconciled periods | `cp_refrigerant_balance`; `cp_finished_product_release` | kg refrigerant emitted per 1 kg reference product | `eu-fdm-bat-2019` |
| `calc_water_pollutant_mass` | direct discharge after on-site treatment | pollutant mass = matched discharged-water volume × representative measured concentration, applying the documented unit conversion and non-detect rule | `cp_effluent_and_residuals`; `cp_finished_product_release` | kg pollutant per 1 kg reference product | `eu-fdm-bat-2019` |
| `calc_observed_envelope` | site-specific QA ranges | lower and upper bounds are the minimum and maximum normalized observations from comparable included batches or periods after data-quality screening; report sample count and coverage | applicable collection protocol; `cp_finished_product_release` | site-specific observed QA envelope, not a cross-site default |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_goat_origin` | all dairy materials | Animal species shall be traceable to each material lot; missing evidence or any non-goat dairy constituent makes the dataset non-conforming. | supplier declarations, specifications, labels, receiving records, and batch genealogy |
| `dq_product_state` | reference product and route | The fresh or unripened, ripened, or processed state shall match the recorded operations, ingredients, ripening duration where applicable, and release specification. | product specification, batch route, ingredient issue, and release records |
| `dq_brine_mass_basis` | brined product | The record shall identify brine make-up, retained brine, spent brine, and whether the reference mass is drained cheese or cheese plus free brine. | brine logs, concentration or density records, fill records, net-mass test, and calculation worksheet |
| `dq_completeness` | foreground inventory | Coverage shall include all modelled lots and all relevant shifts, cleaning cycles, storage periods, utility systems, co-products, wastes, and direct releases, with gaps quantified and justified. | coverage matrix, meter and invoice reconciliation, production totals, and gap log |
| `dq_measurement` | measured and calculated values | Measurement devices, conversions, allocation drivers, sampling methods, and laboratory results shall have current quality evidence appropriate to the reporting period. | calibration, method, chain-of-custody, laboratory QC, and calculation review records |
| `dq_temporal_geographic_technology` | representativeness | The reporting period, facility geography, production technology, product state, package configuration, and cold-storage conditions shall represent the dataset claim. | production schedule, facility description, route declaration, and representativeness assessment |
| `dq_external_datasets` | upstream and treatment links | Dataset identity, geography, technology, time, allocation, and substitution choices shall be disclosed; goat-milk datasets shall not be substituted with sheep- or generic mixed-milk data without an explicit non-conformance statement and reclassification. | dataset metadata and selection rationale |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm UUID `e321b953-83b8-4428-9cce-3ac3aee6aae3`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg, with no dataset version stored. |  |
| `validate_goat_only` | all dairy inputs | Fail validation if animal origin is absent, if sheep or another non-goat dairy constituent occurs, or if a mixed-species product is represented without reclassification. | `unsd-cpc-3-22254`; `codex-cxs-206-1999` |
| `validate_state_route` | product state and process map | Require exactly one declared product state and verify that the included process records support that fresh or unripened, ripened, or processed route. | `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `validate_brine_ingredients_packaging` | reference qualifiers | Require the brine state and mass convention, characterizing ingredients and additives, and packaging state; reject packaging included in reference cheese mass or inconsistent drained and free-brine mass bases. | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `validate_no_standard_as_lci` | all quantities | Confirm that Codex product-quality or compositional provisions and EU BAT performance information were not copied as site yield, energy, water, recipe, salt, emission, or waste quantities. Values without direct quantitative evidence shall come from identified site or batch records. | `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |
| `validate_mass_reconciliation` | material flows | Reconcile dairy inputs, ingredients, brine, reference product, co-products, wastes, and inventory changes for each applicable batch and reporting period; investigate unexplained residuals. | `eu-fdm-bat-2019` |
| `validate_allocation` | multifunctional and shared processes | Verify subdivision was attempted first, the selected allocation driver is supported by site-period evidence, and co-product or waste classification matches documented destination. | `eu-pef-2021-2279` |
| `validate_temporal_coverage` | foreground data | Verify that utilities, sanitation, storage, effluent, product, co-product, and waste records cover the same included production period or have a documented reconciliation. | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `validate_observed_ranges` | QA envelopes | Confirm every non-numeric observed range was calculated only from comparable site or batch records and includes sample count, period, product state, and route; do not use it as a cross-site allowed range or default. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process foreground dataset suitable, after review, for publication as a `secondary_dataset` or `background_dataset` |
| downstream_use | process and lifecyclemodel construction for goat-milk cheese with matching state, route, brine convention, formulation, packaging, geography, technology, and gate |
| allowed_use | Factory-gate datasets for exclusively goat-derived fresh or unripened, ripened, or processed cheese when all required qualifiers and foreground records are present |
| excluded_use | Sheep-milk cheese; cattle-, buffalo-, other-animal-, or mixed-species cheese; non-dairy analogues; unverified animal origin; a different brine mass convention; a route or package state not represented by the data |
| required_metadata | canonical PCR id; reference UUIDs; product state; cheese type and physical form; exclusive goat-origin evidence; preparation and heat-treatment route; brine state and mass convention; ingredients and additives; packaging; geography; technology; lot and reporting period; gate; upstream datasets; allocation; cut-offs |
| required_quality_disclosure | protocol coverage; measured versus calculated values; observed-range sample counts; calibration and laboratory evidence; mass-balance residuals; meter and invoice reconciliation; missing data; allocation sensitivity; dataset representativeness and uncertainty |
| update_trigger | Change in animal origin, product state, formulation, brining, ripening or processing route, package configuration, facility technology, utility or treatment system, allocation, upstream datasets, reference-mass convention, or material data-quality coverage |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-22254` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 22254, Cheese from milk of goats, fresh or processed, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-12) | Classification context, goat-milk product scope, and exclusion of other animal species; not used for LCI quantities |
| `codex-cxs-206-1999` | standard | Codex Alimentarius, CXS 206-1999, General Standard for the Use of Dairy Terms, amended 2022, https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf (retrieved 2026-08-12) | Dairy-term and animal-origin declarations and characterizing-ingredient disclosure; not a recipe or LCI source |
| `codex-cxs-283-1978` | standard | Codex Alimentarius, CXS 283-1978, General Standard for Cheese, amended 2024, https://workspace.fao.org/sites/codex/Standards/CXS%20283-1978/CXS_283e.pdf (retrieved 2026-08-12) | Cheese identity and declaration of ripening and brine state; compositional and quality provisions are not LCI values |
| `codex-cxs-221-2001` | standard | Codex Alimentarius, CXS 221-2001, Group Standard for Unripened Cheese including Fresh Cheese, amended 2022, https://workspace.fao.org/sites/codex/Standards/CXS%20221-2001/CXS_221e.pdf (retrieved 2026-08-12) | Fresh or unripened product-state applicability and possible ingredient categories; not a recipe or LCI source |
| `eu-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Functional unit, reference flow, system boundary, inventory, data quality, multifunctionality, and disclosure principles |
| `eu-fdm-bat-2019` | official_guidance | European Commission, Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Process and environmental inventory coverage, monitoring, resource records, sanitation, refrigeration, wastewater, and mass-balance data needs; BAT levels are not default LCI values |
