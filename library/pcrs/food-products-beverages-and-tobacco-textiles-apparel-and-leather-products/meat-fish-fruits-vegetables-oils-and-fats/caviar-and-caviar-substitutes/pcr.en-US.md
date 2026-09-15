---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.caviar-and-caviar-substitutes
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Caviar and caviar substitutes

## 1. Scope and Applicability

This PCR applies to packaged, edible caviar made from sturgeon eggs and packaged caviar substitutes made from the eggs of other fish. It covers foreground processing from receipt of chilled sturgeon ovaries or eggs, or species-declared non-sturgeon roe, through separation, washing, draining, salting or formulation, grading, filling, optional pasteurization, maturation, and cold storage at the factory gate.

The foreground boundary starts with received roe material. Aquaculture or capture, feed production, fish husbandry, harvesting, slaughter, ovary extraction performed by a supplier, inbound transport, distribution, retail, consumption, and consumer packaging disposal are outside the foreground boundary. Their burdens shall be linked through documented upstream or downstream datasets when included in the study scope. A dataset that starts with whole fish shall add the omitted slaughter and ovary-recovery operations and separately quantify all co-products and wastes.

The category excludes fresh untreated roe, frozen untreated roe, cooked or smoked roe classified outside the prepared caviar category, plant-based spherical analogues without fish eggs, and prepared dishes in which caviar or roe is only an ingredient.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.caviar-and-caviar-substitutes |
| classification_refs | CPC 3.0: 21243, Caviar and caviar substitutes |
| covered_products | Granular sturgeon caviar treated with food-grade salt; salted and formulated caviar substitutes made from declared fish species such as lumpfish, cod, herring, or salmon roe; fresh, matured, pasteurized, or otherwise legally preserved packaged forms within the category |
| excluded_products | Fresh or frozen untreated fish roe; cooked or smoked roe outside this category; fish-roe dishes; non-fish plant or alginate analogues; upstream live-fish production as a standalone product |
| representative_product | Packaged salted granular fish roe represented by a sturgeon-caviar route and a lumpfish-roe caviar-substitute route |
| production_route | Chilled roe receipt and holding; egg separation where needed; washing and draining; salt or formulation addition; grading; filling and sealing; optional pasteurization; maturation and cold storage |
| market_state | Ready-to-eat packaged product at the factory gate under a declared preservation and temperature regime |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Ready-to-eat caviar or fish-roe caviar substitute supplied in a sealed retail or wholesale container |
| How much | 1 kg net product mass, excluding all packaging |
| How well | Conforming to the declared fish species, roe state, formulation, preservation route, food-safety specification, and market specification |
| How long or cycle | One production lot released at the factory gate; shelf-life and storage conditions are declared attributes rather than an additional service duration |
| reference_flow_link | Net mass of conforming packaged product released from cold storage |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Caviar or caviar substitute |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type: sturgeon caviar or caviar substitute; fish common and scientific name; farmed or wild origin; ovulated or non-ovulated roe where applicable; received roe state; ingredient and additive formulation; salt specification; preservation route; pasteurization status; primary-container material and size; net mass; production lot; storage temperature regime; allocation method applied upstream and in the foreground |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. For a substitute species other than lumpfish, replace the lumpfish-specific candidate cards with separate species-specific atomic exchanges; do not relabel a lumpfish flow as generic fish roe.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report drained or filled net product mass excluding the primary container, closure, label, and secondary packaging. |
| `ingredient_mass` | Roe, salt, additives, and cleaning chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each named material separately on an as-used mass basis; do not combine ingredients or additives into a formulation total. |
| `packaging_mass` | Each packaging component | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert piece counts to component mass using lot-specific tare measurements and preserve the count and tare evidence. |
| `water_mass` | Process, packaging-cleaning, and sanitation water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use metered mass or convert metered volume using the measured or documented density and temperature basis. |
| `energy_separation` | Electricity, purchased steam, and fuels | Energy | kWh or MJ | Preserve carrier-specific records and conversion factors; never aggregate electricity, steam, natural gas, and liquefied petroleum gas into one energy row. |
| `waste_mass_balance` | Product, rejects, residues, wastewater, and sludge | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile input and output mass at lot or campaign level and disclose evaporation, retained water, unmeasured losses, and inventory closure. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_roe_to_factory_gate` | foreground_system | Include chilled roe receipt and holding, separation, washing, draining, formulation, grading, packaging, optional pasteurization, maturation, cold storage, sanitation, foreground wastewater and solid-waste generation, and direct emissions. | `codex-cxc-52-2003`; `codex-gsfa-09-3-3` |
| `boundary_upstream_supply` | upstream_inputs | Link species- and route-representative upstream datasets for aquaculture or capture, fish feed where relevant, harvest, supplier slaughter and ovary extraction, ingredients, packaging, electricity, fuels, steam, water, refrigerants, and inbound transport; do not represent these burdens as zero. | `eu-pef-2021-2279`; `dudu-georgescu-2024-sturgeon` |
| `boundary_optional_operations` | conditional_processes | Include pasteurization, repackaging, freezing, or on-site effluent treatment only when the declared product route performs that operation; otherwise document it as not applicable. | `codex-cxs-291-2010`; `codex-cxc-52-2003` |
| `boundary_downstream_exclusion` | downstream_stages | Exclude distribution, retail, use, and consumer end-of-life from this factory-gate dataset; a broader study shall add them as separate processes with the declared cold-chain and packaging end-of-life scenarios. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Chilled sturgeon ovary or eggs, or species-declared non-sturgeon roe, received at the processing facility with supplier mass, temperature, origin, and lot records |
| starting_condition_role | Foreground gate at roe-material receipt; the upstream roe-supply dataset carries farming or capture, harvest, slaughter and ovary extraction when those occur off site |
| product_classification_scope | Prepared caviar and caviar substitutes corresponding to CPC 3.0 subclass 21243 |
| recursive_input_rule | If purchased caviar or a caviar substitute is used as an input for blending or repackaging, record it as a separate product input with an upstream dataset and do not recursively rebuild it inside the same foreground process |
| upstream_dataset_requirement | Species, geography, production system, roe state, co-product treatment, temporal period, and supplier boundary shall be representative and disclosed; missing upstream slaughter or ovary-recovery burdens make the package incomplete |
| disclosure | Declare whether the starting material is an intact ovary, separated eggs, salted roe, or another intermediate; declare all prior processing, cold-chain state, supplier allocation, rejected-material treatment, and data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `roe_receipt_cold_holding` | Roe receipt and cold holding | required | Always | Foreground raw-material receipt and temperature-controlled holding | kg received roe material |
| `egg_separation_washing` | Egg separation, washing, and draining | required | Always; separation work may be zero only for verified pre-separated eggs | Foreground preparation | kg clean drained eggs |
| `formulation_grading` | Salting, formulation, and grading | required | Always | Foreground product formulation | kg formulated roe |
| `filling_preservation` | Filling, packaging, and preservation | required | Always; pasteurization utilities apply only to pasteurized product | Foreground packaging and conditional preservation | kg packaged product |
| `finished_cold_storage` | Maturation and finished-product cold storage | required | Always | Foreground temperature-controlled holding and release | kg conforming product released |
| `sanitation_effluent` | Sanitation and effluent handling | required | Always; sludge applies when generated on site | Shared foreground support process | kg reference product supported |

### Process: Roe receipt and cold holding (`roe_receipt_cold_holding`)

#### Inputs

##### Product flows

###### Received chilled sturgeon ovary (`received_sturgeon_ovary`)

Record Chilled sturgeon ovary at this process boundary and quantify it using the stated amount rule: Supplier delivery mass accepted into the sturgeon-caviar route.

- Selected flow: Chilled sturgeon ovary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Supplier delivery mass accepted into the sturgeon-caviar route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxs-291-2010`; `codex-cxc-52-2003`

###### Received lumpfish roe (`received_lumpfish_roe`)

Record Chilled or thawed lumpfish roe at this process boundary and quantify it using the stated amount rule: Supplier delivery mass accepted into the representative substitute route.

- Selected flow: Chilled or thawed lumpfish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Supplier delivery mass accepted into the representative substitute route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-gsfa-09-3-3`

###### Receipt electricity (`receipt_electricity`)

Record Electricity, facility supply at this process boundary and quantify it using the stated amount rule: Metered electricity for receipt-room cooling, pumps, handling, and holding equipment.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for receipt-room cooling, pumps, handling, and holding equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter`
- Sources: `eu-pef-2021-2279`

###### R-134a refrigerant make-up at receipt (`receipt_r134a_makeup`)

Record Refrigerant R-134a at this process boundary and quantify it using the stated amount rule: Maintenance-record make-up assigned to receipt and raw-material holding equipment when R-134a is used.

- Selected flow: Refrigerant R-134a
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Maintenance-record make-up assigned to receipt and raw-material holding equipment when R-134a is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

###### R-404A refrigerant make-up at receipt (`receipt_r404a_makeup`)

Record Refrigerant R-404A at this process boundary and quantify it using the stated amount rule: Maintenance-record make-up assigned to receipt and raw-material holding equipment when R-404A is used.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Maintenance-record make-up assigned to receipt and raw-material holding equipment when R-404A is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Held sturgeon ovary (`held_sturgeon_ovary`)

Record Temperature-controlled sturgeon ovary at this process boundary and quantify it using the stated amount rule: Accepted sturgeon ovary transferred to separation.

- Selected flow: Temperature-controlled sturgeon ovary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Accepted sturgeon ovary transferred to separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg receipt-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

###### Held lumpfish roe (`held_lumpfish_roe`)

Record Temperature-controlled lumpfish roe at this process boundary and quantify it using the stated amount rule: Accepted lumpfish roe transferred to separation.

- Selected flow: Temperature-controlled lumpfish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Accepted lumpfish roe transferred to separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg receipt-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

##### Waste flows

###### Rejected sturgeon ovary (`rejected_sturgeon_ovary`)

Record Rejected sturgeon ovary at this process boundary and quantify it using the stated amount rule: Weighed rejected sturgeon ovary sent to the declared treatment.

- Selected flow: Rejected sturgeon ovary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected sturgeon ovary sent to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Rejected lumpfish roe (`rejected_lumpfish_roe`)

Record Rejected lumpfish roe at this process boundary and quantify it using the stated amount rule: Weighed rejected lumpfish roe sent to the declared treatment.

- Selected flow: Rejected lumpfish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected lumpfish roe sent to the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

###### R-134a emission at receipt (`receipt_r134a_emission`)

Record 1,1,1,2-Tetrafluoroethane (HFC-134a), to air at this process boundary and quantify it using the stated amount rule: Refrigerant inventory loss assigned to receipt and raw-material holding equipment.

- Selected flow: 1,1,1,2-Tetrafluoroethane (HFC-134a), to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Refrigerant inventory loss assigned to receipt and raw-material holding equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### R-404A emission at receipt (`receipt_r404a_emission`)

Record Refrigerant R-404A, to air at this process boundary and quantify it using the stated amount rule: Refrigerant inventory loss assigned to receipt and raw-material holding equipment.

- Selected flow: Refrigerant R-404A, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Refrigerant inventory loss assigned to receipt and raw-material holding equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

### Process: Egg separation, washing, and draining (`egg_separation_washing`)

#### Inputs

##### Product flows

###### Sturgeon ovary for separation (`separation_sturgeon_ovary`)

Record Temperature-controlled sturgeon ovary at this process boundary and quantify it using the stated amount rule: Transfer mass entering cutting and sieving.

- Selected flow: Temperature-controlled sturgeon ovary
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Transfer mass entering cutting and sieving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-cxc-52-2003`

###### Lumpfish roe for washing (`separation_lumpfish_roe`)

Record Temperature-controlled lumpfish roe at this process boundary and quantify it using the stated amount rule: Transfer mass entering washing and draining.

- Selected flow: Temperature-controlled lumpfish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Transfer mass entering washing and draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `codex-gsfa-09-3-3`

###### Separation and washing water (`separation_water`)

Record Potable process water at this process boundary and quantify it using the stated amount rule: Metered cold water used for ovary preparation, egg washing, and equipment rinsing assigned to this process.

- Selected flow: Potable process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered cold water used for ovary preparation, egg washing, and equipment rinsing assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `codex-cxc-52-2003`

###### Salt used in separation water (`separation_salt`)

Record Food-grade sodium chloride at this process boundary and quantify it using the stated amount rule: Weighed salt added to cold wash water when that route is used.

- Selected flow: Food-grade sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed salt added to cold wash water when that route is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `codex-cxc-52-2003`

###### Separation electricity (`separation_electricity`)

Record Electricity, facility supply at this process boundary and quantify it using the stated amount rule: Metered electricity for sieves, pumps, chilled-room operation, and draining equipment.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for sieves, pumps, chilled-room operation, and draining equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Clean drained sturgeon eggs (`clean_sturgeon_eggs`)

Record Clean drained sturgeon eggs at this process boundary and quantify it using the stated amount rule: Weighed eggs released to salting and grading.

- Selected flow: Clean drained sturgeon eggs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed eggs released to salting and grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

###### Clean drained lumpfish eggs (`clean_lumpfish_eggs`)

Record Clean drained lumpfish eggs at this process boundary and quantify it using the stated amount rule: Weighed eggs released to formulation and grading.

- Selected flow: Clean drained lumpfish eggs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed eggs released to formulation and grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

##### Waste flows

###### Ovarian membrane waste (`ovarian_membrane_waste`)

Record Sturgeon ovarian membrane at this process boundary and quantify it using the stated amount rule: Weighed connective tissue removed during cutting and sieving.

- Selected flow: Sturgeon ovarian membrane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed connective tissue removed during cutting and sieving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `codex-cxc-52-2003`

###### Fatty tissue waste (`fatty_tissue_waste`)

Record Sturgeon ovarian fatty tissue at this process boundary and quantify it using the stated amount rule: Weighed fatty tissue removed from sturgeon eggs.

- Selected flow: Sturgeon ovarian fatty tissue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed fatty tissue removed from sturgeon eggs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `codex-cxc-52-2003`

###### Blood-clot waste (`blood_clot_waste`)

Record Fish blood clots at this process boundary and quantify it using the stated amount rule: Weighed blood clots removed during washing and inspection.

- Selected flow: Fish blood clots
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed blood clots removed during washing and inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `codex-cxc-52-2003`

###### Broken roe waste (`broken_roe_waste`)

Record Broken fish eggs at this process boundary and quantify it using the stated amount rule: Weighed broken or quality-rejected eggs removed during separation and draining.

- Selected flow: Broken fish eggs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed broken or quality-rejected eggs removed during separation and draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Roe-washing wastewater (`roe_washing_wastewater`)

Record Roe-processing wastewater at this process boundary and quantify it using the stated amount rule: Metered or mass-balance-calculated wastewater leaving separation and washing.

- Selected flow: Roe-processing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or mass-balance-calculated wastewater leaving separation and washing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg clean drained eggs
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_balance`

##### Elementary flows

### Process: Salting, formulation, and grading (`formulation_grading`)

#### Inputs

##### Product flows

###### Sturgeon eggs for formulation (`formulation_sturgeon_eggs`)

Record Clean drained sturgeon eggs at this process boundary and quantify it using the stated amount rule: Transfer mass entering salting and grading.

- Selected flow: Clean drained sturgeon eggs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Transfer mass entering salting and grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Lumpfish eggs for formulation (`formulation_lumpfish_eggs`)

Record Clean drained lumpfish eggs at this process boundary and quantify it using the stated amount rule: Transfer mass entering substitute formulation and grading.

- Selected flow: Clean drained lumpfish eggs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Transfer mass entering substitute formulation and grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Formulation salt (`formulation_salt`)

Record Food-grade sodium chloride at this process boundary and quantify it using the stated amount rule: Calibrated-scale mass added to the specific formulation lot.

- Selected flow: Food-grade sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calibrated-scale mass added to the specific formulation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `codex-cxs-291-2010`; `codex-cxc-52-2003`

###### Sodium benzoate (`formulation_sodium_benzoate`)

Record Sodium benzoate at this process boundary and quantify it using the stated amount rule: Calibrated-scale mass used only when the declared substitute formulation and applicable law permit it.

- Selected flow: Sodium benzoate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calibrated-scale mass used only when the declared substitute formulation and applicable law permit it
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `codex-gsfa-09-3-3`

###### Potassium sorbate (`formulation_potassium_sorbate`)

Record Potassium sorbate at this process boundary and quantify it using the stated amount rule: Calibrated-scale mass used only when the declared substitute formulation and applicable law permit it.

- Selected flow: Potassium sorbate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calibrated-scale mass used only when the declared substitute formulation and applicable law permit it
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `codex-gsfa-09-3-3`

###### Allura Red AC (`formulation_allura_red`)

Record Allura Red AC at this process boundary and quantify it using the stated amount rule: Calibrated-scale mass used only for a legally permitted declared substitute formulation.

- Selected flow: Allura Red AC
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calibrated-scale mass used only for a legally permitted declared substitute formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `codex-gsfa-09-3-3`

###### Brilliant Blue FCF (`formulation_brilliant_blue`)

Record Brilliant Blue FCF at this process boundary and quantify it using the stated amount rule: Calibrated-scale mass used only for a legally permitted declared substitute formulation.

- Selected flow: Brilliant Blue FCF
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calibrated-scale mass used only for a legally permitted declared substitute formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `codex-gsfa-09-3-3`

###### Formulation electricity (`formulation_electricity`)

Record Electricity, facility supply at this process boundary and quantify it using the stated amount rule: Metered electricity for chilled-room conditioning, scales, mixers, and grading equipment.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for chilled-room conditioning, scales, mixers, and grading equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formulated sturgeon caviar (`formulated_sturgeon_caviar`)

Record Salted sturgeon caviar before filling at this process boundary and quantify it using the stated amount rule: Weighed conforming formulated output transferred to filling.

- Selected flow: Salted sturgeon caviar before filling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed conforming formulated output transferred to filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

###### Formulated lumpfish caviar substitute (`formulated_lumpfish_substitute`)

Record Formulated lumpfish caviar substitute before filling at this process boundary and quantify it using the stated amount rule: Weighed conforming formulated output transferred to filling.

- Selected flow: Formulated lumpfish caviar substitute before filling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed conforming formulated output transferred to filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

##### Waste flows

###### Formulation residue (`formulation_residue`)

Record Rejected formulated fish roe at this process boundary and quantify it using the stated amount rule: Weighed spills, retained mixer residue, and quality-rejected formulated roe.

- Selected flow: Rejected formulated fish roe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed spills, retained mixer residue, and quality-rejected formulated roe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Excess formulation brine (`excess_brine`)

Record Spent sodium-chloride brine at this process boundary and quantify it using the stated amount rule: Weighed or mass-balance-calculated liquid drained from formulated roe.

- Selected flow: Spent sodium-chloride brine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or mass-balance-calculated liquid drained from formulated roe
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_balance`

##### Elementary flows

### Process: Filling, packaging, and preservation (`filling_preservation`)

#### Inputs

##### Product flows

###### Sturgeon caviar for packaging (`packaging_sturgeon_caviar`)

Record Salted sturgeon caviar before filling at this process boundary and quantify it using the stated amount rule: Transfer mass entering the filling line.

- Selected flow: Salted sturgeon caviar before filling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Transfer mass entering the filling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Lumpfish substitute for packaging (`packaging_lumpfish_substitute`)

Record Formulated lumpfish caviar substitute before filling at this process boundary and quantify it using the stated amount rule: Transfer mass entering the filling line.

- Selected flow: Formulated lumpfish caviar substitute before filling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Transfer mass entering the filling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Lacquered steel tin (`packaging_steel_tin`)

Record Food-grade lacquered steel tin at this process boundary and quantify it using the stated amount rule: Issued count multiplied by measured component tare mass for the steel-tin route.

- Selected flow: Food-grade lacquered steel tin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued count multiplied by measured component tare mass for the steel-tin route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`
- Sources: `codex-cxs-291-2010`

###### Glass jar (`packaging_glass_jar`)

Record Food-grade glass jar at this process boundary and quantify it using the stated amount rule: Issued count multiplied by measured component tare mass for the glass-jar route.

- Selected flow: Food-grade glass jar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued count multiplied by measured component tare mass for the glass-jar route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`
- Sources: `codex-cxs-291-2010`

###### Polypropylene jar (`packaging_pp_jar`)

Record Food-grade polypropylene jar at this process boundary and quantify it using the stated amount rule: Issued count multiplied by measured component tare mass for the plastic-container route.

- Selected flow: Food-grade polypropylene jar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued count multiplied by measured component tare mass for the plastic-container route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`
- Sources: `eu-caviar-aquitaine-2024`

###### Steel lid (`packaging_steel_lid`)

Record Food-grade coated steel lid at this process boundary and quantify it using the stated amount rule: Issued count multiplied by measured lid tare mass.

- Selected flow: Food-grade coated steel lid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued count multiplied by measured lid tare mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`

###### Polypropylene closure (`packaging_pp_closure`)

Record Food-grade polypropylene closure at this process boundary and quantify it using the stated amount rule: Issued count multiplied by measured closure tare mass for the applicable jar route.

- Selected flow: Food-grade polypropylene closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued count multiplied by measured closure tare mass for the applicable jar route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`

###### Paper label (`packaging_paper_label`)

Record Printed paper label at this process boundary and quantify it using the stated amount rule: Applied count multiplied by measured label mass.

- Selected flow: Printed paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Applied count multiplied by measured label mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`

###### Corrugated-board carton (`packaging_corrugated_carton`)

Record Corrugated-board shipping carton at this process boundary and quantify it using the stated amount rule: Issued carton count multiplied by measured carton tare mass and allocated to packed units.

- Selected flow: Corrugated-board shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued carton count multiplied by measured carton tare mass and allocated to packed units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`

###### Polyethylene stretch film (`packaging_pe_film`)

Record Polyethylene stretch film at this process boundary and quantify it using the stated amount rule: Roll inventory loss or direct mass issued to packed lots.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Roll inventory loss or direct mass issued to packed lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`

###### Packaging-cleaning water (`packaging_water`)

Record Potable process water at this process boundary and quantify it using the stated amount rule: Metered water used to clean permitted reusable or pre-cleaned packaging components.

- Selected flow: Potable process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered water used to clean permitted reusable or pre-cleaned packaging components
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `codex-cxc-52-2003`

###### Packaging electricity (`packaging_electricity`)

Record Electricity, facility supply at this process boundary and quantify it using the stated amount rule: Metered electricity for filling, vacuum sealing, coding, weighing, and package handling.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for filling, vacuum sealing, coding, weighing, and package handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter`

###### Purchased steam for pasteurization (`pasteurization_steam`)

Record Purchased steam at this process boundary and quantify it using the stated amount rule: Metered purchased steam used only by the pasteurized route.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam used only by the pasteurized route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter`
- Sources: `codex-cxc-52-2003`

###### Natural gas for pasteurization (`pasteurization_natural_gas`)

Record Natural gas at this process boundary and quantify it using the stated amount rule: Metered natural-gas energy used by an on-site pasteurization boiler when this route applies.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy used by an on-site pasteurization boiler when this route applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_meter`

###### Liquefied petroleum gas for pasteurization (`pasteurization_lpg`)

Record Liquefied petroleum gas at this process boundary and quantify it using the stated amount rule: Weighed or invoiced liquefied petroleum gas used by an on-site pasteurization boiler when this route applies.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or invoiced liquefied petroleum gas used by an on-site pasteurization boiler when this route applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged sturgeon caviar (`packaged_sturgeon_caviar`)

Record Packaged sturgeon caviar at this process boundary and quantify it using the stated amount rule: Net product mass sealed and transferred to maturation or cold storage.

- Selected flow: Packaged sturgeon caviar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net product mass sealed and transferred to maturation or cold storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

###### Packaged lumpfish caviar substitute (`packaged_lumpfish_substitute`)

Record Packaged lumpfish caviar substitute at this process boundary and quantify it using the stated amount rule: Net product mass sealed and transferred to maturation or cold storage.

- Selected flow: Packaged lumpfish caviar substitute
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net product mass sealed and transferred to maturation or cold storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

##### Waste flows

###### Broken glass packaging (`packaging_broken_glass`)

Record Waste packaging glass at this process boundary and quantify it using the stated amount rule: Weighed broken or rejected glass jars.

- Selected flow: Waste packaging glass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed broken or rejected glass jars
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Steel packaging scrap (`packaging_steel_scrap`)

Record Waste steel packaging at this process boundary and quantify it using the stated amount rule: Weighed rejected tins and steel lids.

- Selected flow: Waste steel packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected tins and steel lids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Polypropylene packaging scrap (`packaging_pp_scrap`)

Record Waste polypropylene packaging at this process boundary and quantify it using the stated amount rule: Weighed rejected polypropylene jars and closures.

- Selected flow: Waste polypropylene packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected polypropylene jars and closures
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Waste paper labels (`packaging_paper_waste`)

Record Waste paper labels at this process boundary and quantify it using the stated amount rule: Weighed or count-and-tare-calculated rejected labels.

- Selected flow: Waste paper labels
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or count-and-tare-calculated rejected labels
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_mass`

###### Waste corrugated board (`packaging_cardboard_waste`)

Record Waste corrugated board at this process boundary and quantify it using the stated amount rule: Weighed rejected or damaged cartons.

- Selected flow: Waste corrugated board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected or damaged cartons
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Waste polyethylene film (`packaging_pe_film_waste`)

Record Waste polyethylene film at this process boundary and quantify it using the stated amount rule: Weighed rejected film and roll ends.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed rejected film and roll ends
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Rejected packaged roe product (`rejected_packaged_product`)

Record Rejected packaged fish-roe product at this process boundary and quantify it using the stated amount rule: Net product mass rejected during filling, sealing, pasteurization, or package inspection.

- Selected flow: Rejected packaged fish-roe product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net product mass rejected during filling, sealing, pasteurization, or package inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Packaging-cleaning wastewater (`packaging_wastewater`)

Record Packaging-cleaning wastewater at this process boundary and quantify it using the stated amount rule: Metered or mass-balance-calculated water discharged from packaging cleaning and pasteurization cooling.

- Selected flow: Packaging-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or mass-balance-calculated water discharged from packaging cleaning and pasteurization cooling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_balance`

##### Elementary flows

###### Fossil carbon dioxide from on-site fuel combustion (`combustion_co2_fossil`)

Record Carbon dioxide, fossil, to air at this process boundary and quantify it using the stated amount rule: Measured stack release or fuel-specific calculation from collected natural-gas or LPG use.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel-specific calculation from collected natural-gas or LPG use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`

###### Methane from on-site fuel combustion (`combustion_ch4`)

Record Methane, to air at this process boundary and quantify it using the stated amount rule: Measured stack release or fuel- and technology-specific calculation.

- Selected flow: Methane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel- and technology-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`

###### Nitrous oxide from on-site fuel combustion (`combustion_n2o`)

Record Nitrous oxide, to air at this process boundary and quantify it using the stated amount rule: Measured stack release or fuel- and technology-specific calculation.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel- and technology-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`

###### Nitrogen oxides from on-site fuel combustion (`combustion_nox`)

Record Nitrogen oxides, to air at this process boundary and quantify it using the stated amount rule: Measured stack release or fuel- and technology-specific calculation.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel- and technology-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`

###### Carbon monoxide from on-site fuel combustion (`combustion_co`)

Record Carbon monoxide, to air at this process boundary and quantify it using the stated amount rule: Measured stack release or fuel- and technology-specific calculation.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel- and technology-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`

###### Particulate matter from on-site fuel combustion (`combustion_particulate`)

Record Particulate matter, to air at this process boundary and quantify it using the stated amount rule: Measured stack release or fuel- and technology-specific calculation with particle-size definition disclosed.

- Selected flow: Particulate matter, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel- and technology-specific calculation with particle-size definition disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pasteurized packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`

### Process: Maturation and finished-product cold storage (`finished_cold_storage`)

#### Inputs

##### Product flows

###### Packaged sturgeon caviar for cold storage (`storage_sturgeon_caviar`)

Record Packaged sturgeon caviar at this process boundary and quantify it using the stated amount rule: Net mass entering maturation and cold storage.

- Selected flow: Packaged sturgeon caviar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass entering maturation and cold storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Packaged lumpfish substitute for cold storage (`storage_lumpfish_substitute`)

Record Packaged lumpfish caviar substitute at this process boundary and quantify it using the stated amount rule: Net mass entering maturation and cold storage.

- Selected flow: Packaged lumpfish caviar substitute
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass entering maturation and cold storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Finished-storage electricity (`storage_electricity`)

Record Electricity, facility supply at this process boundary and quantify it using the stated amount rule: Metered cold-store electricity allocated by occupied volume-time, pallet-time, or measured submetering.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered cold-store electricity allocated by occupied volume-time, pallet-time, or measured submetering
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_storage`
- Sources: `codex-cxs-291-2010`; `codex-cxc-52-2003`

###### R-134a refrigerant make-up in finished storage (`storage_r134a_makeup`)

Record Refrigerant R-134a at this process boundary and quantify it using the stated amount rule: Maintenance-record make-up assigned to finished-product equipment when R-134a is used.

- Selected flow: Refrigerant R-134a
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Maintenance-record make-up assigned to finished-product equipment when R-134a is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

###### R-404A refrigerant make-up in finished storage (`storage_r404a_makeup`)

Record Refrigerant R-404A at this process boundary and quantify it using the stated amount rule: Maintenance-record make-up assigned to finished-product equipment when R-404A is used.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Maintenance-record make-up assigned to finished-product equipment when R-404A is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference caviar or caviar substitute (`reference_product_caviar_or_substitute`)

Record Caviar or caviar substitute at this process boundary and quantify it using the stated amount rule: Net mass of the conforming route-specific product released from cold storage; the declared product type and fish species determine whether the exchange is sturgeon caviar or a caviar substitute.

- Selected flow: Caviar or caviar substitute
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass of the conforming route-specific product released from cold storage; record exactly one declared product route per dataset
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`

##### Waste flows

###### Rejected stored sturgeon caviar (`storage_rejected_sturgeon_caviar`)

Record Rejected stored sturgeon caviar at this process boundary and quantify it using the stated amount rule: Net mass rejected during maturation, storage, or release inspection.

- Selected flow: Rejected stored sturgeon caviar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass rejected during maturation, storage, or release inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Rejected stored lumpfish substitute (`storage_rejected_lumpfish_substitute`)

Record Rejected stored lumpfish caviar substitute at this process boundary and quantify it using the stated amount rule: Net mass rejected during maturation, storage, or release inspection.

- Selected flow: Rejected stored lumpfish caviar substitute
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass rejected during maturation, storage, or release inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

###### R-134a emission in finished storage (`storage_r134a_emission`)

Record 1,1,1,2-Tetrafluoroethane (HFC-134a), to air at this process boundary and quantify it using the stated amount rule: Refrigerant inventory loss assigned to finished-product cold storage.

- Selected flow: 1,1,1,2-Tetrafluoroethane (HFC-134a), to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Refrigerant inventory loss assigned to finished-product cold storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

###### R-404A emission in finished storage (`storage_r404a_emission`)

Record Refrigerant R-404A, to air at this process boundary and quantify it using the stated amount rule: Refrigerant inventory loss assigned to finished-product cold storage.

- Selected flow: Refrigerant R-404A, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Refrigerant inventory loss assigned to finished-product cold storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`

### Process: Sanitation and effluent handling (`sanitation_effluent`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

Record Potable process water at this process boundary and quantify it using the stated amount rule: Metered water used for cleaning and sanitation and not already assigned to another process.

- Selected flow: Potable process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered water used for cleaning and sanitation and not already assigned to another process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `codex-cxc-52-2003`

###### Sanitation electricity (`sanitation_electricity`)

Record Electricity, facility supply at this process boundary and quantify it using the stated amount rule: Metered electricity for cleaning pumps, foamers, and effluent handling.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for cleaning pumps, foamers, and effluent handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meter`

###### Sodium hydroxide cleaner (`sanitation_sodium_hydroxide`)

Record Sodium hydroxide at this process boundary and quantify it using the stated amount rule: Active-ingredient mass issued for alkaline cleaning.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Active-ingredient mass issued for alkaline cleaning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_chemical`

###### Sodium hypochlorite disinfectant (`sanitation_sodium_hypochlorite`)

Record Sodium hypochlorite at this process boundary and quantify it using the stated amount rule: Active-ingredient mass issued when hypochlorite sanitation is used.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Active-ingredient mass issued when hypochlorite sanitation is used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_chemical`

###### Peracetic acid disinfectant (`sanitation_peracetic_acid`)

Record Peracetic acid at this process boundary and quantify it using the stated amount rule: Active-ingredient mass issued when peracetic-acid sanitation is used.

- Selected flow: Peracetic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Active-ingredient mass issued when peracetic-acid sanitation is used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_chemical`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater`)

Record Food-processing sanitation wastewater at this process boundary and quantify it using the stated amount rule: Metered or mass-balance-calculated sanitation effluent sent to the declared treatment.

- Selected flow: Food-processing sanitation wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or mass-balance-calculated sanitation effluent sent to the declared treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_balance`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record Food-processing wastewater sludge at this process boundary and quantify it using the stated amount rule: Wet mass and solids content of sludge removed by on-site pretreatment when generated.

- Selected flow: Food-processing wastewater sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Wet mass and solids content of sludge removed by on-site pretreatment when generated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Empty cleaning-chemical containers (`chemical_container_waste`)

Record Waste high-density polyethylene chemical container at this process boundary and quantify it using the stated amount rule: Weighed empty high-density polyethylene containers attributable to cleaning chemicals.

- Selected flow: Waste high-density polyethylene chemical container
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed empty high-density polyethylene containers attributable to cleaning chemicals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_foreground_operations | Avoid allocation by submetering or subdividing species, formulation, package format, pasteurization route, storage zone, sanitation campaign, and waste handling whenever separately operated or measured. | `eu-pef-2021-2279` |
| `allocation_physical_shared_utilities` | shared_utilities | When subdivision is not possible, allocate electricity, water, sanitation, and cold-storage services using a documented causal physical driver such as equipment time, cleaned area, occupied volume-time, or product mass; justify the chosen driver. | `eu-pef-2021-2279` |
| `allocation_upstream_roe_supply` | supplier_roe_dataset | The upstream roe dataset shall disclose treatment of fish meat, heads, viscera, skin, frames or cartilage, swim bladders, and other recovered fractions. Prefer subdivision; if inseparable co-products have material market value, disclose the economic-allocation prices, reference period, geography, and sensitivity. | `dudu-georgescu-2024-sturgeon`; `eu-pef-2021-2279` |
| `allocation_recycling_no_automatic_credit` | wastes_and_recovered_materials | Record each waste or recovered material at the foreground boundary. Do not award avoided-product or recycling credits unless the downstream substitution, quality, market, and allocation convention are explicitly modelled and disclosed. | `eu-pef-2021-2279` |
| `allocation_mass_balance` | all_processes | Preserve unallocated physical mass balances before applying any allocation and report allocation factors so that the foreground inventory can be reconstructed. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | all production processes | Each named roe or intermediate product | Scale and lot record | date; lot_id; species; material_state; gross_mass; tare_mass; net_mass; destination_process | Calibrated scale reconciled to lot movement | kg | Every lot and transfer | Full reporting period | All included lines | Sum net mass by species, route, and process; normalize only after yield reconciliation | Calibration certificate; supplier lot record; transfer record |
| `cp_ingredient_mass` | `egg_separation_washing`; `formulation_grading` | Each named salt or additive | Batch formulation record | batch_id; ingredient_name; supplier_lot; gross_mass; tare_mass; net_mass; active_fraction; legal_authorization | Calibrated scale and formulation sign-off | kg | Every batch | Full reporting period | All formulations | Sum active or as-used mass separately for each named ingredient | Scale calibration; recipe approval; certificate of analysis |
| `cp_output_mass` | all production processes | Each named conforming product output | Release and transfer record | lot_id; product_name; species; package_route; gross_mass; tare_mass; net_mass; release_status | Calibrated scale | kg | Every lot | Full reporting period | All included products | Sum released net mass by route; rejected mass remains outside the denominator | Calibration certificate; release record; net-content check |
| `cp_utility_meter` | all production processes | Electricity or purchased steam | Meter or invoice | meter_id; carrier; start_reading; end_reading; unit; timestamp; process_assignment; downtime | Submeter preferred; otherwise invoice reconciled to a documented driver | kWh or MJ | Continuous or each invoice period | Full reporting period | All included equipment and shared services | Difference readings, subtract documented non-PCR loads, allocate with disclosed driver | Meter calibration; invoice; allocation worksheet |
| `cp_water_meter` | `egg_separation_washing`; `filling_preservation`; `sanitation_effluent` | Potable process water | Water meter | meter_id; start_reading; end_reading; unit; temperature; process_assignment | Submeter or calibrated batch vessel | kg or m3 | Each batch or daily | Full reporting period | All included water points | Convert volume to mass with declared density; avoid double counting between process and sanitation | Meter calibration; water-quality record; conversion record |
| `cp_packaging_mass` | `filling_preservation` | Each named packaging component | Issue, count, and tare record | component_id; material; supplier_lot; count_issued; count_rejected; mean_tare_mass; measured_total_mass | Count plus representative tare weighing, or direct warehouse mass | kg | Each packaging lot | Full reporting period | All primary, closure, label, and secondary components | Calculate component mass separately and reconcile issued, packed, and rejected counts | Tare sample record; specification; warehouse issue record |
| `cp_fuel_meter` | `filling_preservation` | Each named on-site fuel | Meter, tank, or invoice | fuel_name; quantity; unit; lower_heating_value; start_stock; receipts; end_stock; equipment | Meter or stock balance reconciled to invoices | kg, m3, or MJ | Each batch and monthly reconciliation | Full reporting period | All pasteurization boilers | Calculate use separately by fuel; preserve heating-value source | Meter or tank calibration; invoice; stock reconciliation |
| `cp_refrigerant_balance` | `roe_receipt_cold_holding`; `finished_cold_storage` | Each named refrigerant input and emission | Refrigerant maintenance log | refrigerant_name; equipment_id; opening_charge; additions; recoveries; closing_charge; service_date; process_assignment | Equipment-level inventory balance | kg | Each service event and annual reconciliation | Full reporting period plus opening and closing inventories | All included refrigeration equipment | Loss equals opening plus additions minus recovery and closing; allocate only with equipment-specific service basis | Technician log; cylinder weights; equipment register |
| `cp_waste_mass` | all production processes | Each named solid, organic, packaging, sludge, or rejected-product waste | Waste scale and consignment record | waste_name; source_process; gross_mass; tare_mass; net_mass; moisture_or_solids; destination; treatment | Calibrated scale or verified container count and tare | kg | Each dispatch or batch | Full reporting period | All included waste destinations | Sum each waste identity separately; do not net against co-products or recycling receipts | Scale calibration; consignment note; treatment receipt |
| `cp_wastewater_balance` | `egg_separation_washing`; `formulation_grading`; `filling_preservation`; `sanitation_effluent` | Each named wastewater or brine stream | Effluent meter and mass balance | stream_name; meter_reading; batch_water_input; retained_water; sampled_solids; salinity; destination | Effluent meter preferred; otherwise water-input mass balance | kg or m3 | Continuous, daily, or every batch | Full reporting period | All included discharge points | Calculate each stream separately; reconcile to water input and disclose unmeasured evaporation or carry-over | Meter calibration; laboratory result; discharge record |
| `cp_cleaning_chemical` | `sanitation_effluent` | Each named cleaner or disinfectant | Chemical issue and dilution record | chemical_name; concentrate_mass; active_fraction; dilution_water; application_area; batch_id | Warehouse issue plus concentration record | kg active ingredient | Each sanitation event | Full reporting period | All included sanitation zones | Multiply concentrate mass by certified active fraction and keep each chemical separate | Safety data sheet; certificate of analysis; sanitation log |
| `cp_combustion_emissions` | `filling_preservation` | Each named direct combustion emission | Stack test or calculation worksheet | fuel_name; fuel_use; heating_value; emission_name; factor; factor_source; control_technology; measured_concentration; flue_flow | Validated stack measurement preferred; otherwise declared jurisdiction- or supplier-approved factor | kg | Each test and monthly calculation | Full reporting period | All included combustion units | Calculate each emission separately by fuel and unit; retain factor version and measurement basis | Stack-test report; fuel analysis; factor publication; calculation review |
| `cp_cold_storage` | `finished_cold_storage` | Electricity and stored-product service | Cold-store meter and occupancy log | meter_reading; room_id; temperature_log; product_mass; occupied_volume; entry_time; release_time | Submeter plus warehouse management record | kWh and kg-hour or m3-hour | Continuous and every lot movement | Full reporting period | All included cold rooms | Assign direct room loads, then allocate shared load by documented occupied volume-time or pallet-time | Meter calibration; temperature logger; warehouse record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period amount attributable to the route / conforming net product mass released for that route | route-specific period amount; released net mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_packaging_mass` | packaging components | component mass = packed component count × measured mean tare mass; rejected component mass is reported separately | count; tare sample; reject count | kg component and kg component waste | `codex-cxc-52-2003` |
| `calc_refrigerant_loss` | refrigerant emissions | loss = opening charge + additions - recovered mass - closing charge; negative or implausible balances require investigation | charge inventory; additions; recoveries | kg refrigerant emitted by named refrigerant | `eu-pef-2021-2279` |
| `calc_wastewater` | wastewater streams | discharge mass = metered discharge, or water inputs minus documented retained water and evaporation; do not merge brine with sanitation wastewater | water meter; product mass change; discharge meter | kg of each named wastewater stream | `eu-pef-2021-2279` |
| `calc_combustion_emission` | each direct combustion emission | emission = fuel use × declared fuel- and technology-specific factor, unless a validated stack result is used | fuel use; heating value if required; factor or stack result | kg of one named elementary emission | `eu-pef-2021-2279` |
| `calc_mass_balance` | each production lot | input mass = conforming output + each co-product or waste output + wastewater-borne or evaporated mass + documented inventory change and residual | all mass records | closure percentage and unresolved mass | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | roe and final product | Record common and scientific species name, farmed or wild origin, supplier, lot, ovulated status where applicable, and whether the receipt is intact ovary, separated eggs, salted roe, or another intermediate. | Supplier specification; traceability record; receiving inspection |
| `dq_temporal` | all foreground data | Use a continuous period representative of normal operations and covering seasonal production, maturation, and cold-storage effects; disclose shutdowns and exceptional lots. | Dated meter, batch, warehouse, and maintenance records |
| `dq_completeness` | all inventory | Include every material, packaging component, energy carrier, fuel, refrigerant, water stream, cleaner, waste, wastewater, sludge, and direct emission actually used or generated; zero and not-applicable values require evidence. | Completeness checklist; purchase-to-use reconciliation; mass and energy balances |
| `dq_route_separation` | caviar and substitute routes | Keep species, formulation, package format, pasteurization, and cold-storage routes separate until a documented allocation step. | Batch routing; submetering; allocation worksheet |
| `dq_upstream` | received roe supply | Supplier data shall include the upstream fish-production system, harvest, slaughter or egg-recovery boundary, co-products, allocation, geography, year, and transport to the foreground gate. | Supplier LCI or audited primary-data questionnaire |
| `dq_measurement` | meters and scales | Maintain calibration status, units, conversion factors, sampling methods, and uncertainty or precision information for every primary measurement. | Calibration certificates; sampling plan; calculation review |
| `dq_waste_destination` | wastes and wastewater | Record the physical identity, wet or dry basis, destination, treatment technology, and whether a material is sold, donated, recycled, rendered, treated, or disposed. | Consignment note; treatment receipt; sales record |
| `dq_representativeness` | foreground and upstream datasets | Assess technological, geographical, time-related representativeness, precision, completeness, methodological consistency, documentation, nomenclature, and review status. | Data-quality assessment and review record consistent with the EF method |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | Confirm that the denominator is 1 kg net conforming product excluding packaging and that every required qualifier is present. | `codex-cxs-291-2010`; `codex-gsfa-09-3-3` |
| `validate_species_scope` | product_identity | Confirm that caviar is made from declared sturgeon eggs and that every substitute names its actual non-sturgeon fish species; reject generic or plant-based analogues from this PCR. | `codex-cxs-291-2010`; `codex-gsfa-09-3-3`; `unsd-cpc-v3-21243` |
| `validate_process_route` | process_map | Reconcile the facility flow diagram to receipt, separation or verified pre-separation, washing, draining, formulation, filling, preservation, maturation, cold storage, sanitation, and effluent handling; explain every omitted or added step. | `codex-cxc-52-2003` |
| `validate_atomic_inventory` | process_inventory | Reject any selected flow that combines multiple materials, packaging components, utilities, fuels, refrigerants, wastes, wastewater streams, or emissions; each card shall represent one exchange. | `eu-pef-2021-2279` |
| `validate_formulation` | formulation | Reconcile every named ingredient and additive to the approved lot formulation and applicable legal authorization; do not infer additive use from a permitted-additive list. | `codex-cxs-291-2010`; `codex-gsfa-09-3-3` |
| `validate_temperature_and_preservation` | cold_chain | Verify lot temperature logs, preservation route, pasteurization records when applicable, maturation records, shelf-life specification, and corrective actions against the declared product specification. | `codex-cxs-291-2010`; `codex-cxc-52-2003` |
| `validate_mass_balance` | each_process_and_period | Require a documented mass balance for roe inputs, ingredients, conforming product, rejects, residues, brine, wastewater, sludge, and inventory change; investigate unexplained loss before release. | `eu-pef-2021-2279` |
| `validate_upstream_completeness` | received_roe | Fail completeness when farming or capture, feed where relevant, harvest, supplier slaughter or egg recovery, co-products, allocation, or inbound cold-chain burdens are omitted without a declared cut-off justification. | `dudu-georgescu-2024-sturgeon`; `eu-pef-2021-2279` |
| `validate_allocation` | multifunctional_processes | Confirm subdivision was attempted first, allocation drivers are causal and documented, upstream co-product treatment is disclosed, and results can be reconstructed before and after allocation. | `eu-pef-2021-2279` |
| `validate_data_quality` | dataset | Confirm completeness, methodological consistency, technology, geography, time, precision, documentation, nomenclature, and review evidence; disclose every unresolved flow UUID and range-evidence gap. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for packaged caviar or one species-specific caviar substitute route |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product LCA, environmental-footprint studies, supply-chain inventories, process improvement, and comparative work only when species, quality, route, package, preservation, geography, allocation, and boundary are compatible |
| excluded_use | Claims about animal welfare, legality, food safety certification, biodiversity, nutritional superiority, or product equivalence; substitution across species or preservation routes without documented comparability; use as an upstream aquaculture dataset |
| required_metadata | PCR id and version; product and scientific species name; caviar or substitute status; roe origin and state; supplier boundary; formulation; additives; preservation and pasteurization status; package components; net mass; geography; technology; reporting period; cold-storage duration; allocation; cut-offs; data sources; unresolved identities |
| required_quality_disclosure | Primary-data share; meter and scale coverage; mass-balance closure; seasonal and capacity representativeness; upstream roe-data quality; allocation sensitivity; refrigerant method; wastewater and waste destinations; additive authorization; uncertainty and unresolved evidence |
| update_trigger | Change in fish species or origin, upstream production system, formulation, additive authorization, package format, pasteurization or cold-storage technology, refrigerant, energy supply, wastewater treatment, allocation, supplier boundary, or a material shift in yield or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-21243` | official_guidance | United Nations Statistics Division. Central Product Classification Version 3.0, subclass 21243, “Caviar and caviar substitutes.” https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf (retrieved 2026-08-24). | Classification scope and identity |
| `codex-cxs-291-2010` | standard | Codex Alimentarius. CXS 291-2010, Standard for Sturgeon Caviar, revised 2024. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B291-2010%252FCXS_291e.pdf (retrieved 2026-08-24). | Sturgeon-caviar definition, raw material, salt, packaging, preservation, temperature control, labelling, and conformance |
| `codex-cxc-52-2003` | official_guidance | FAO and WHO. Code of Practice for Fish and Fishery Products, CXC 52-2003, 2020 edition, ISBN 978-92-4-001317-9. https://www.who.int/publications/i/item/9789240013179 (retrieved 2026-08-24). | Verified Section 20 process decomposition, sanitation, washing, ingredient handling, filling, maturation, pasteurization, cold storage, and records |
| `codex-gsfa-09-3-3` | official_guidance | Codex Alimentarius GSFA Online. Food Category 09.3.3, Salmon substitutes, caviar, and other fish roe products. https://www.fao.org/gsfaonline/foods/details.html?id=162 (retrieved 2026-08-24). | Substitute-product scope, representative species, washing, salting, formulation, colouring, preservation, packaging, and permitted-additive context |
| `eu-caviar-aquitaine-2024` | official_guidance | European Commission. Publication of an application for registration of “Caviar d’Aquitaine,” 2024/C 6592. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52024XC06592 (retrieved 2026-08-24). | Commercial production sequence, immediate primary packaging, and metal, glass, or plastic container routes |
| `dudu-georgescu-2024-sturgeon` | literature | Dudu, A.; Georgescu, S.E. “Exploring the Multifaceted Potential of Endangered Sturgeon: Caviar, Meat and By-Product Benefits.” Animals 14(16), 2425 (2024). https://doi.org/10.3390/ani14162425. | Full-text verification of sturgeon production context and distinct meat, head, viscera, skin, bone or cartilage, and swim-bladder co-product or by-product identities; no quantitative range inferred |
| `eu-pef-2021-2279` | official_guidance | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-24). | Functional unit, system boundary, company-specific data, allocation, cut-off disclosure, data quality, validation, and life-cycle inventory rules |
