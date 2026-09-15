---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-meat-cuts-salted-dried-or-smoked-bacon-and-ham
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pig meat, cuts, salted, dried or smoked (bacon and ham)

## 1. Scope and Applicability

This PCR covers factory-gate production of market-ready pig meat cuts preserved by salting, drying, or smoking, including bacon and ham. The foreground boundary begins when chilled or frozen pig meat cuts are received and ends after packaging and declared refrigerated storage. It covers trimming; exactly one declared curing method (`dry_cure`, `brine_injection`, or `brine_immersion`); route-dependent tumbling, cooking, smoking, drying or ripening, and slicing; cooling or chilling; packaging; refrigeration; sanitation; and on-site wastewater treatment when present.

The PCR excludes pig rearing, slaughter and primary carcass cutting before receipt; sausages, comminuted meat, complete meals, canned meat, and products preserved by methods outside the CPC 21181 boundary; distribution beyond the factory gate; retail, consumer cooking, and end-of-life. A cooked-ham route is included only when the product remains a salted, dried, or smoked pig cut within this category. Every data package shall declare one real production route; mutually exclusive curing routes and optional preservation operations shall not be stacked into a synthetic default route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-meat-cuts-salted-dried-or-smoked-bacon-and-ham |
| classification_refs | CPC 3.0: 21181, exact scope reference |
| covered_products | Whole-muscle or cut pig meat preserved by salting, drying, or smoking, including bacon, wet-cured ham, dry-cured ham, and other qualifying cured pig cuts |
| excluded_products | Fresh or only frozen pig meat; sausages and comminuted products; canned meat; complete prepared meals; non-pig meat; products not preserved by salting, drying, or smoking |
| representative_product | Packaged chilled bacon or ham manufactured from received pig meat cuts by one declared curing method and the applicable downstream route |
| production_route | Receive and trim; declare exactly one of dry cure, brine injection, or brine immersion; include tumbling only when used; include cooking only for cooked ham; include smoking only for a smoked route; include drying or ripening only for a dried route; cool or chill; slice only when applicable; package and refrigerate |
| market_state | Packaged, labelled, chilled or otherwise stored under the declared product specification at the factory gate; ready-to-eat or not-ready-to-eat status shall be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a market-ready pig meat cut preserved by salting, drying, or smoking, with declared safety, composition, and route attributes |
| How much | 1 kg net mass of product, excluding packaging, at the end of declared factory-gate refrigerated storage |
| How well | Conforming to the declared bacon, ham, or other pig-cut specification and to the declared curing, cooking, smoking, drying, slicing, packaging, and storage conditions |
| How long or cycle | One production batch through the declared factory-gate storage duration; storage duration and temperature shall be reported |
| reference_flow_link | The reference product output row `packaged_refrigerated_product` realizes the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Pig meat, cuts, salted, dried or smoked (bacon and ham) — Tiangong UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; pig cut; `curing_method` exactly one of `dry_cure`, `brine_injection`, or `brine_immersion`; `cooking_status`; `smoking_status` and smoke source; `drying_ripening_status`; `slicing_status`; ready-to-eat status; recipe ingredient list; packaging component list; refrigeration temperature and duration; production geography; reference period; technology |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass after cooling, packaging operations, and the declared factory-gate storage period; exclude packaging mass. |
| `mass_balance_basis` | Pork, ingredients, products, co-products, rejects, wastes, wastewater, sludge, smoke material, refrigerants, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass at the point each exchange crosses its process boundary and normalize to 1 kg reference product. Do not convert dry matter, salt content, or water content to wet mass without retaining the conversion record. |
| `energy_carrier_separation` | Electricity, steam, purchased heat, and natural gas | Energy or mass appropriate to the purchased carrier | kWh, MJ, or kg | Preserve the invoiced or metered unit and convert only with a documented factor. Electricity, steam, purchased heat, and every fuel remain separate exchanges. |
| `ingredient_identity` | Every recipe ingredient | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the mass of each chemically or physically specific ingredient separately; active nitrite or nitrate mass shall not be confused with formulated curing-salt mass. |
| `refrigerant_balance` | Each refrigerant | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calculate leakage separately for each declared refrigerant from charge, additions, recovery, and ending inventory; never report a combined refrigerant flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Chilled or frozen pig meat cuts received at the processing establishment gate, with received mass, temperature, cut identity, supplier lot, and prior preservation state documented |
| starting_condition_role | Upstream product input; pig production, slaughter, and primary carcass cutting are represented by linked upstream datasets and are not repeated in this foreground |
| product_classification_scope | Pig meat cuts whose market identity is established by salting, drying, or smoking within CPC 3.0 subclass 21181, including bacon and ham |
| recursive_input_rule | If a received input is already a salted, dried, or smoked pig cut in the same category, record it as a direct product input and stop category recursion at receipt; disclose its prior processing and exclude overlapping foreground steps |
| upstream_dataset_requirement | Link supplier-specific or representative upstream datasets for received pig meat cuts, ingredients, utilities, fuels, smoke material, cleaning agents, packaging, and waste treatment without double counting foreground operations |
| disclosure | Declare cut, received state, exactly one curing method, every applicable optional route step, cooking and ready-to-eat status, smoke source, drying or ripening conditions, slicing, packaging components, refrigeration conditions, co-product destinations, wastewater route, and all data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_cuts` | foreground_start | Start at documented receipt of pig meat cuts; exclude animal production, slaughter, and primary cutting but link their upstream datasets. | `unsd-cpc-3-0`; `eu-commission-pef-2021-2279` |
| `boundary_route_exclusivity` | curing_and_preservation_route | Declare exactly one curing method. Cooking applies only to cooked ham, smoking only to smoked product, drying or ripening only to dried product, and slicing only to sliced product. | `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`; `usda-fsis-rte-salt-cured-dried-2023` |
| `boundary_support_operations` | foreground_support | Include allocated facility utilities, sanitation, refrigeration, packaging, wastewater handling, and on-site treatment needed by the declared batch. | `eu-jrc-fdm-bref-2019`; `eu-commission-pef-2021-2279` |
| `boundary_no_route_averaging` | dataset_representativeness | Do not average mutually exclusive dry-cure, injection, immersion, cooked, smoked, or dried routes into one default inventory unless a production-weighted market-average dataset explicitly reports the route shares. | `eu-commission-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_trimming` | Receipt and trimming | `required` | Always | Foreground material preparation | kg received pig meat cuts |
| `dry_curing` | Dry curing | `conditional` | Include only when `curing_method = dry_cure` | Foreground curing | kg trimmed pig meat entering dry cure |
| `brine_curing` | Brine preparation and injection or immersion | `conditional` | Include only when `curing_method = brine_injection` or `brine_immersion`; declare which one | Foreground curing | kg trimmed pig meat entering brine cure |
| `tumbling` | Tumbling or massaging | `conditional` | Include only when actually applied, normally after brine curing | Foreground conditioning | kg brine-cured pig meat tumbled |
| `cooking` | Cooking | `conditional` | Include only for cooked ham | Foreground heat treatment | kg cured pig meat entering cooking |
| `smoking` | Smoking | `conditional` | Include only for a declared smoked route | Foreground smoke treatment | kg cured or cooked pig meat entering smoking |
| `drying_ripening` | Drying and ripening | `conditional` | Include only for a declared dried or ripened route | Foreground preservation | kg cured pig meat entering drying or ripening |
| `cooling_chilling` | Cooling and chilling | `required` | Apply the actual post-treatment cooling or chilled conditioning route | Foreground temperature control | kg product entering cooling or chilling |
| `slicing` | Slicing | `conditional` | Include only for sliced product | Foreground finishing | kg chilled product entering slicing |
| `packaging` | Packaging and labelling | `required` | Always; include only the actual component set | Foreground finishing | kg net product packaged |
| `refrigerated_storage` | Refrigerated storage | `required` | Always for the declared factory-gate chilled storage period | Foreground storage | kg packaged product and storage duration |
| `facility_utilities` | Facility utilities and direct combustion | `required` | Allocate actual utilities to the declared route by meters or documented physical drivers | Foreground support | 1 kg reference product |
| `facility_sanitation` | Cleaning and disinfection | `required` | Include batch-allocated and period-allocated sanitation | Foreground support | 1 kg reference product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include only when wastewater is treated on site; otherwise record wastewater leaving the boundary | Foreground support | kg wastewater treated |

### Process: Receipt and trimming (`receipt_trimming`)

#### Inputs

##### Product flows

###### Received pig meat cuts (`received_pig_meat_cuts`)

This atomic exchange records the quantity of Received pig meat cuts crossing this process boundary.

- Selected flow: Chilled or frozen pig meat cuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh accepted supplier lots at receipt, net of transport packaging and pallets
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_trimming`
- Sources: `unsd-cpc-3-0`; `fao-who-codex-cxc-58-2005`

#### Outputs

##### Product flows

###### Trimmed pig meat cut (`trimmed_pig_meat_cut`)

This atomic exchange records the quantity of Trimmed pig meat cut crossing this process boundary.

- Selected flow: Trimmed pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh trimmed cuts released to the declared curing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_trimming`
- Sources: `fao-who-codex-cxc-58-2005`

###### Edible pork fat trimmings (`edible_pork_fat_trimmings`)

This atomic exchange records the quantity of Edible pork fat trimmings crossing this process boundary.

- Selected flow: Edible pork fat trimmings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh separately when sold or transferred as an edible co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_trimming`
- Sources: `eu-commission-pef-2021-2279`

###### Edible pork skin trimmings (`edible_pork_skin_trimmings`)

This atomic exchange records the quantity of Edible pork skin trimmings crossing this process boundary.

- Selected flow: Edible pork skin trimmings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh separately when sold or transferred as an edible co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_trimming`
- Sources: `eu-commission-pef-2021-2279`

##### Waste flows

###### Inedible meat trimmings (`inedible_meat_trimmings`)

This atomic exchange records the quantity of Inedible meat trimmings crossing this process boundary.

- Selected flow: Inedible pig meat trimmings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh material directed to waste or animal by-product treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_trimming`
- Sources: `fao-who-codex-cxc-58-2005`

###### Rejected received pig meat (`rejected_received_pig_meat`)

This atomic exchange records the quantity of Rejected received pig meat crossing this process boundary.

- Selected flow: Rejected pig meat cuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected or condemned received meat by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_trimming`
- Sources: `fao-who-codex-cxc-58-2005`

### Process: Dry curing (`dry_curing`)

#### Inputs

##### Product flows

###### Pig meat entering dry cure (`dry_cure_meat_input`)

This atomic exchange records the quantity of Pig meat entering dry cure crossing this process boundary.

- Selected flow: Trimmed pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh trimmed pig meat loaded to dry curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-rte-salt-cured-dried-2023`

###### Sodium chloride for dry cure (`dry_cure_sodium_chloride`)

This atomic exchange records the quantity of Sodium chloride for dry cure crossing this process boundary.

- Selected flow: Sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual sodium chloride mass applied to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-rte-salt-cured-dried-2023`

###### Sodium nitrite for dry cure (`dry_cure_sodium_nitrite`)

This atomic exchange records the quantity of Sodium nitrite for dry cure crossing this process boundary.

- Selected flow: Sodium nitrite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record active sodium nitrite mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### Sodium nitrate for dry cure (`dry_cure_sodium_nitrate`)

This atomic exchange records the quantity of Sodium nitrate for dry cure crossing this process boundary.

- Selected flow: Sodium nitrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record active sodium nitrate mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-hams-food-safety`; `usda-fsis-rte-salt-cured-dried-2023`

###### Sucrose for dry cure (`dry_cure_sucrose`)

This atomic exchange records the quantity of Sucrose for dry cure crossing this process boundary.

- Selected flow: Sucrose
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record sucrose mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### Black pepper for dry cure (`dry_cure_black_pepper`)

This atomic exchange records the quantity of Black pepper for dry cure crossing this process boundary.

- Selected flow: Black pepper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record black pepper mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-bacon-food-safety`; `fao-who-codex-cxc-58-2005`

###### Garlic for dry cure (`dry_cure_garlic`)

This atomic exchange records the quantity of Garlic for dry cure crossing this process boundary.

- Selected flow: Garlic
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record garlic mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `fao-who-codex-cxc-58-2005`

###### Sodium ascorbate for dry cure (`dry_cure_sodium_ascorbate`)

This atomic exchange records the quantity of Sodium ascorbate for dry cure crossing this process boundary.

- Selected flow: Sodium ascorbate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record sodium ascorbate mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-hams-food-safety`

###### Sodium phosphate for dry cure (`dry_cure_sodium_phosphate`)

This atomic exchange records the quantity of Sodium phosphate for dry cure crossing this process boundary.

- Selected flow: Sodium phosphate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record sodium phosphate mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-hams-food-safety`

#### Outputs

##### Product flows

###### Dry-cured pig meat cut (`dry_cured_pig_meat_cut`)

This atomic exchange records the quantity of Dry-cured pig meat cut crossing this process boundary.

- Selected flow: Dry-cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh product leaving dry curing after the declared equalization or cure hold
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `usda-fsis-rte-salt-cured-dried-2023`

##### Waste flows

###### Spent dry-cure mixture (`spent_dry_cure_mixture`)

This atomic exchange records the quantity of Spent dry-cure mixture crossing this process boundary.

- Selected flow: Spent dry-cure mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh unused or removed dry-cure mixture sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `eu-jrc-fdm-bref-2019`

###### Dry-cure purge (`dry_cure_purge`)

This atomic exchange records the quantity of Dry-cure purge crossing this process boundary.

- Selected flow: Dry-cure meat purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect and weigh liquid purge separately from removed dry cure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `eu-jrc-fdm-bref-2019`

###### Off-specification dry-cured meat (`off_spec_dry_cured_meat`)

This atomic exchange records the quantity of Off-specification dry-cured meat crossing this process boundary.

- Selected flow: Off-specification dry-cured pig meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected dry-cured product by final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_curing`
- Sources: `fao-who-codex-cxc-58-2005`

### Process: Brine preparation and injection or immersion (`brine_curing`)

#### Inputs

##### Product flows

###### Pig meat entering brine cure (`brine_cure_meat_input`)

This atomic exchange records the quantity of Pig meat entering brine cure crossing this process boundary.

- Selected flow: Trimmed pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh trimmed pig meat loaded to the declared injection or immersion route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### Brine water (`brine_water`)

This atomic exchange records the quantity of Brine water crossing this process boundary.

- Selected flow: Potable process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter or weigh water added to the curing brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-hams-food-safety`; `fao-who-codex-cxc-58-2005`

###### Sodium chloride in brine (`brine_sodium_chloride`)

This atomic exchange records the quantity of Sodium chloride in brine crossing this process boundary.

- Selected flow: Sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual sodium chloride mass added to brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### Sodium nitrite in brine (`brine_sodium_nitrite`)

This atomic exchange records the quantity of Sodium nitrite in brine crossing this process boundary.

- Selected flow: Sodium nitrite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record active sodium nitrite mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### Sodium nitrate in brine (`brine_sodium_nitrate`)

This atomic exchange records the quantity of Sodium nitrate in brine crossing this process boundary.

- Selected flow: Sodium nitrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record active sodium nitrate mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-hams-food-safety`

###### Sucrose in brine (`brine_sucrose`)

This atomic exchange records the quantity of Sucrose in brine crossing this process boundary.

- Selected flow: Sucrose
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record sucrose mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### Black pepper in brine (`brine_black_pepper`)

This atomic exchange records the quantity of Black pepper in brine crossing this process boundary.

- Selected flow: Black pepper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record black pepper mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-bacon-food-safety`; `fao-who-codex-cxc-58-2005`

###### Garlic in brine (`brine_garlic`)

This atomic exchange records the quantity of Garlic in brine crossing this process boundary.

- Selected flow: Garlic
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record garlic mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `fao-who-codex-cxc-58-2005`

###### Sodium ascorbate in brine (`brine_sodium_ascorbate`)

This atomic exchange records the quantity of Sodium ascorbate in brine crossing this process boundary.

- Selected flow: Sodium ascorbate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record sodium ascorbate mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### Sodium phosphate in brine (`brine_sodium_phosphate`)

This atomic exchange records the quantity of Sodium phosphate in brine crossing this process boundary.

- Selected flow: Sodium phosphate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record sodium phosphate mass when declared in the formulation; otherwise mark this atomic row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-hams-food-safety`

#### Outputs

##### Product flows

###### Brine-cured pig meat cut (`brine_cured_pig_meat_cut`)

This atomic exchange records the quantity of Brine-cured pig meat cut crossing this process boundary.

- Selected flow: Brine-cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh cured meat after the declared injection or immersion hold and draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-hams-food-safety`

##### Waste flows

###### Spent curing brine (`spent_curing_brine`)

This atomic exchange records the quantity of Spent curing brine crossing this process boundary.

- Selected flow: Spent curing brine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter or weigh brine discarded from injection or immersion systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `eu-jrc-fdm-bref-2019`

###### Brine-cure purge (`brine_cure_purge`)

This atomic exchange records the quantity of Brine-cure purge crossing this process boundary.

- Selected flow: Brine-cure meat purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect and weigh purge released during draining and cure hold
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `usda-fsis-bacon-food-safety`; `eu-jrc-fdm-bref-2019`

###### Off-specification brine-cured meat (`off_spec_brine_cured_meat`)

This atomic exchange records the quantity of Off-specification brine-cured meat crossing this process boundary.

- Selected flow: Off-specification brine-cured pig meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected brine-cured product by final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_curing`
- Sources: `fao-who-codex-cxc-58-2005`

### Process: Tumbling or massaging (`tumbling`)

#### Inputs

##### Product flows

###### Brine-cured meat entering tumbling (`tumbling_meat_input`)

This atomic exchange records the quantity of Brine-cured meat entering tumbling crossing this process boundary.

- Selected flow: Brine-cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh meat loaded into the tumbler
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tumbling`
- Sources: `usda-fsis-hams-food-safety`; `petit-et-al-2021-cooked-ham-lca`

#### Outputs

##### Product flows

###### Tumbled brine-cured pig meat (`tumbled_pig_meat`)

This atomic exchange records the quantity of Tumbled brine-cured pig meat crossing this process boundary.

- Selected flow: Tumbled brine-cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh product discharged from tumbling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tumbling`
- Sources: `usda-fsis-hams-food-safety`

##### Waste flows

###### Tumbling purge (`tumbling_purge`)

This atomic exchange records the quantity of Tumbling purge crossing this process boundary.

- Selected flow: Tumbling meat purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect and weigh purge remaining in the tumbler or discharged to drainage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tumbling`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Cooking (`cooking`)

#### Inputs

##### Product flows

###### Cured meat entering cooking (`cooking_meat_input`)

This atomic exchange records the quantity of Cured meat entering cooking crossing this process boundary.

- Selected flow: Cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh cured pig meat loaded to the cooker or oven
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking`
- Sources: `fao-who-codex-cxc-58-2005`; `petit-et-al-2021-cooked-ham-lca`

#### Outputs

##### Product flows

###### Cooked cured ham (`cooked_cured_ham`)

This atomic exchange records the quantity of Cooked cured ham crossing this process boundary.

- Selected flow: Cooked cured pig ham
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh product after cooking and before cooling; retain time-temperature records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking`
- Sources: `fao-who-codex-cxc-58-2005`; `petit-et-al-2021-cooked-ham-lca`

##### Waste flows

###### Cooking drip loss (`cooking_drip_loss`)

This atomic exchange records the quantity of Cooking drip loss crossing this process boundary.

- Selected flow: Cooked-meat drip loss
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect and weigh liquid and fat drip removed from the cooker
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking`
- Sources: `eu-jrc-fdm-bref-2019`

###### Off-specification cooked ham (`off_spec_cooked_ham`)

This atomic exchange records the quantity of Off-specification cooked ham crossing this process boundary.

- Selected flow: Off-specification cooked cured ham
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected cooked ham by final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking`
- Sources: `fao-who-codex-cxc-58-2005`

### Process: Smoking (`smoking`)

#### Inputs

##### Product flows

###### Meat entering smoking (`smoking_meat_input`)

This atomic exchange records the quantity of Meat entering smoking crossing this process boundary.

- Selected flow: Cured pig meat cut for smoking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh cured or cooked pig meat loaded to the smokehouse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `usda-fsis-bacon-food-safety`; `fao-who-codex-cxc-68-2009`

###### Hardwood chips (`smoking_hardwood_chips`)

This atomic exchange records the quantity of Hardwood chips crossing this process boundary.

- Selected flow: Hardwood chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh hardwood chips charged to smoke generation; declare wood species
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009`

###### Hardwood sawdust (`smoking_hardwood_sawdust`)

This atomic exchange records the quantity of Hardwood sawdust crossing this process boundary.

- Selected flow: Hardwood sawdust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh hardwood sawdust charged to smoke generation; declare wood species; otherwise mark this row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009`

#### Outputs

##### Product flows

###### Smoked pig meat cut (`smoked_pig_meat_cut`)

This atomic exchange records the quantity of Smoked pig meat cut crossing this process boundary.

- Selected flow: Smoked cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh product leaving the smokehouse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `usda-fsis-bacon-food-safety`; `fao-who-codex-cxc-68-2009`

##### Waste flows

###### Smoke-generator wood ash (`smoke_generator_wood_ash`)

This atomic exchange records the quantity of Smoke-generator wood ash crossing this process boundary.

- Selected flow: Hardwood ash from smoke generation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh ash removed from the smoke generator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `fao-who-codex-cxc-68-2009`

###### Smoke-scrubber wastewater (`smoke_scrubber_wastewater`)

This atomic exchange records the quantity of Smoke-scrubber wastewater crossing this process boundary.

- Selected flow: Smoke-scrubber wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter wastewater leaving smoke-gas treatment when a wet scrubber is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`

###### Off-specification smoked meat (`off_spec_smoked_meat`)

This atomic exchange records the quantity of Off-specification smoked meat crossing this process boundary.

- Selected flow: Off-specification smoked pig meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected smoked product by final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `fao-who-codex-cxc-58-2005`

##### Elementary flows

###### Fine particulate matter to air (`smoke_pm2_5_to_air`)

This atomic exchange records the quantity of Fine particulate matter to air crossing this process boundary.

- Selected flow: Particulate matter, aerodynamic diameter less than 2.5 micrometres, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use stack measurement or a documented smokehouse-specific calculation; record control-device status
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`

###### Carbon monoxide to air (`smoke_carbon_monoxide_to_air`)

This atomic exchange records the quantity of Carbon monoxide to air crossing this process boundary.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use stack measurement or a documented smokehouse-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`

###### Acrolein to air (`smoke_acrolein_to_air`)

This atomic exchange records the quantity of Acrolein to air crossing this process boundary.

- Selected flow: Acrolein, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report measured acrolein emissions when monitored; otherwise disclose the unquantified emission gap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`

###### Acetaldehyde to air (`smoke_acetaldehyde_to_air`)

This atomic exchange records the quantity of Acetaldehyde to air crossing this process boundary.

- Selected flow: Acetaldehyde, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report measured acetaldehyde emissions when monitored; otherwise disclose the unquantified emission gap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`

###### Formaldehyde to air (`smoke_formaldehyde_to_air`)

This atomic exchange records the quantity of Formaldehyde to air crossing this process boundary.

- Selected flow: Formaldehyde, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use stack measurement or a documented smokehouse-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009`

###### Acetic acid to air (`smoke_acetic_acid_to_air`)

This atomic exchange records the quantity of Acetic acid to air crossing this process boundary.

- Selected flow: Acetic acid, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use stack measurement or a documented smokehouse-specific calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`

###### Nitrogen oxides to air (`smoke_nitrogen_oxides_to_air`)

This atomic exchange records the quantity of Nitrogen oxides to air crossing this process boundary.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report measured nitrogen oxides or calculate from fuel and a cited facility-applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoking`
- Sources: `us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009`

###### Sulfur oxides to air (`smoke_sulfur_oxides_to_air`)

This atomic exchange records the quantity of Sulfur oxides to air crossing this process boundary.

- Selected flow: Sulfur oxides, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report measured sulfur oxides or calculate from fuel sulfur and a cited facility-applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_smoking`
- Sources: `fao-who-codex-cxc-68-2009`

###### Benzo[a]pyrene to air (`smoke_benzo_a_pyrene_to_air`)

This atomic exchange records the quantity of Benzo[a]pyrene to air crossing this process boundary.

- Selected flow: Benzo[a]pyrene, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Report measured benzo[a]pyrene when monitored as an individual PAH; otherwise disclose the unquantified emission gap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking`
- Sources: `fao-who-codex-cxc-68-2009`

### Process: Drying and ripening (`drying_ripening`)

#### Inputs

##### Product flows

###### Cured meat entering drying or ripening (`drying_meat_input`)

This atomic exchange records the quantity of Cured meat entering drying or ripening crossing this process boundary.

- Selected flow: Cured pig meat cut for drying
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh cured pig meat entering the drying or ripening room
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_ripening`
- Sources: `usda-fsis-rte-salt-cured-dried-2023`; `fao-who-codex-cxc-58-2005`

#### Outputs

##### Product flows

###### Dried or ripened pig meat cut (`dried_ripened_pig_meat_cut`)

This atomic exchange records the quantity of Dried or ripened pig meat cut crossing this process boundary.

- Selected flow: Dried or ripened cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh product leaving drying or ripening and retain time, temperature, humidity, and product-criterion records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_ripening`
- Sources: `usda-fsis-rte-salt-cured-dried-2023`; `fao-who-codex-cxc-58-2005`

##### Waste flows

###### Off-specification dried meat (`off_spec_dried_meat`)

This atomic exchange records the quantity of Off-specification dried meat crossing this process boundary.

- Selected flow: Off-specification dried cured pig meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected dried or ripened product by final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_ripening`
- Sources: `fao-who-codex-cxc-58-2005`

### Process: Cooling and chilling (`cooling_chilling`)

#### Inputs

##### Product flows

###### Product entering cooling or chilling (`cooling_product_input`)

This atomic exchange records the quantity of Product entering cooling or chilling crossing this process boundary.

- Selected flow: Treated pig meat cut before cooling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh product entering the declared cooling or chilled-conditioning step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_chilling`
- Sources: `fao-who-codex-cxc-58-2005`; `usda-fsis-bacon-food-safety`

#### Outputs

##### Product flows

###### Cooled or chilled pig meat cut (`cooled_chilled_pig_meat_cut`)

This atomic exchange records the quantity of Cooled or chilled pig meat cut crossing this process boundary.

- Selected flow: Cooled or chilled cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh product released after the validated cooling or chilling profile and retain time-temperature records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_chilling`
- Sources: `fao-who-codex-cxc-58-2005`; `usda-fsis-bacon-food-safety`

### Process: Slicing (`slicing`)

#### Inputs

##### Product flows

###### Chilled product entering slicing (`slicing_product_input`)

This atomic exchange records the quantity of Chilled product entering slicing crossing this process boundary.

- Selected flow: Chilled cured pig meat cut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh chilled whole or block product loaded to slicing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slicing`
- Sources: `usda-fsis-bacon-food-safety`; `beigbeder-et-al-2022-dry-cured-ham-packaging`

#### Outputs

##### Product flows

###### Sliced cured pig meat (`sliced_cured_pig_meat`)

This atomic exchange records the quantity of Sliced cured pig meat crossing this process boundary.

- Selected flow: Sliced cured pig meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh saleable sliced product released to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slicing`
- Sources: `beigbeder-et-al-2022-dry-cured-ham-packaging`

###### Edible slicing offcuts (`edible_slicing_offcuts`)

This atomic exchange records the quantity of Edible slicing offcuts crossing this process boundary.

- Selected flow: Edible cured-pork slicing offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh separately when transferred for edible use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slicing`
- Sources: `eu-commission-pef-2021-2279`

##### Waste flows

###### Off-specification sliced meat (`off_spec_sliced_meat`)

This atomic exchange records the quantity of Off-specification sliced meat crossing this process boundary.

- Selected flow: Off-specification sliced cured pig meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected slices by final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slicing`
- Sources: `fao-who-codex-cxc-58-2005`

### Process: Packaging and labelling (`packaging`)

#### Inputs

##### Product flows

###### Product entering packaging (`packaging_product_input`)

This atomic exchange records the quantity of Product entering packaging crossing this process boundary.

- Selected flow: Cured pig meat product before packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh net product entering the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-codex-cxc-58-2005`

###### Polyamide-polyethylene vacuum pouch (`pa_pe_vacuum_pouch`)

This atomic exchange records the quantity of Polyamide-polyethylene vacuum pouch crossing this process boundary.

- Selected flow: Polyamide-polyethylene multilayer vacuum pouch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh pouches consumed for conforming packs; otherwise mark this row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `pauer-et-al-2020-bacon-packaging`

###### Amorphous PET forming tray (`apet_forming_tray`)

This atomic exchange records the quantity of Amorphous PET forming tray crossing this process boundary.

- Selected flow: Amorphous polyethylene terephthalate forming tray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh trays consumed for conforming packs; otherwise mark this row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `pauer-et-al-2020-bacon-packaging`; `beigbeder-et-al-2022-dry-cured-ham-packaging`

###### Polyethylene sealing film (`polyethylene_sealing_film`)

This atomic exchange records the quantity of Polyethylene sealing film crossing this process boundary.

- Selected flow: Polyethylene sealing film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh sealing film consumed for conforming packs; otherwise mark this row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `pauer-et-al-2020-bacon-packaging`; `beigbeder-et-al-2022-dry-cured-ham-packaging`

###### Corrugated board shipping carton (`corrugated_board_carton`)

This atomic exchange records the quantity of Corrugated board shipping carton crossing this process boundary.

- Selected flow: Corrugated board shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh cartons allocated to the packaged reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-commission-pef-2021-2279`

###### Graphic paper label (`graphic_paper_label`)

This atomic exchange records the quantity of Graphic paper label crossing this process boundary.

- Selected flow: Graphic paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh labels allocated to the packaged reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `pauer-et-al-2020-bacon-packaging`

#### Outputs

##### Product flows

###### Packaged cured pig meat (`packaged_cured_pig_meat`)

This atomic exchange records the quantity of Packaged cured pig meat crossing this process boundary.

- Selected flow: Packaged cured pig meat product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg net product
- Amount rule: Weigh conforming net product after packaging, excluding packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-codex-cxc-58-2005`

##### Waste flows

###### PA-PE film packaging waste (`pa_pe_film_waste`)

This atomic exchange records the quantity of PA-PE film packaging waste crossing this process boundary.

- Selected flow: Polyamide-polyethylene film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh pouch and film trim waste separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `pauer-et-al-2020-bacon-packaging`

###### PET tray waste (`pet_tray_waste`)

This atomic exchange records the quantity of PET tray waste crossing this process boundary.

- Selected flow: Polyethylene terephthalate tray waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected or damaged tray material separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `beigbeder-et-al-2022-dry-cured-ham-packaging`

###### Polyethylene film waste (`polyethylene_film_waste`)

This atomic exchange records the quantity of Polyethylene film waste crossing this process boundary.

- Selected flow: Polyethylene film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh sealing-film trim and rejected film separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `beigbeder-et-al-2022-dry-cured-ham-packaging`

###### Corrugated board waste (`corrugated_board_waste`)

This atomic exchange records the quantity of Corrugated board waste crossing this process boundary.

- Selected flow: Corrugated board waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh damaged cartons and board trim separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-commission-pef-2021-2279`

###### Paper label waste (`paper_label_waste`)

This atomic exchange records the quantity of Paper label waste crossing this process boundary.

- Selected flow: Graphic paper label waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh rejected labels and paper backing waste separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `pauer-et-al-2020-bacon-packaging`

###### Off-specification packaged product (`off_spec_packaged_product`)

This atomic exchange records the quantity of Off-specification packaged product crossing this process boundary.

- Selected flow: Off-specification packaged cured pig meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg net product
- Amount rule: Weigh rejected packaged product and record whether product and packaging are separated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-codex-cxc-58-2005`

### Process: Refrigerated storage (`refrigerated_storage`)

#### Inputs

##### Product flows

###### Packaged product entering storage (`storage_product_input`)

This atomic exchange records the quantity of Packaged product entering storage crossing this process boundary.

- Selected flow: Packaged cured pig meat product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg net product
- Amount rule: Weigh packaged product placed in factory-gate refrigerated storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerated_storage`
- Sources: `fao-who-codex-cxc-58-2005`

#### Outputs

##### Product flows

###### Packaged refrigerated reference product (`packaged_refrigerated_product`)

This atomic exchange records the quantity of Packaged refrigerated reference product crossing this process boundary.

- Selected flow: Pig meat, cuts, salted, dried or smoked (bacon and ham) — Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg net product
- Amount rule: Fixed reference output of 1 kg net conforming product after the declared storage period
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `unsd-cpc-3-0`; `mass-balance-identity`

### Process: Facility utilities and direct combustion (`facility_utilities`)

#### Inputs

##### Product flows

###### Grid electricity (`facility_grid_electricity`)

This atomic exchange records the quantity of Grid electricity crossing this process boundary.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Meter electricity and allocate to the declared route using process submetering or documented physical drivers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`; `petit-et-al-2021-cooked-ham-lca`

###### Purchased steam (`facility_purchased_steam`)

This atomic exchange records the quantity of Purchased steam crossing this process boundary.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Meter or calculate purchased steam delivered to the declared route; otherwise mark this row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

###### Purchased industrial heat (`facility_purchased_heat`)

This atomic exchange records the quantity of Purchased industrial heat crossing this process boundary.

- Selected flow: Purchased industrial heat
- Flow property / unit: Energy / MJ
- Amount rule: Meter purchased heat delivered to the declared route; otherwise mark this row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

###### Natural gas (`facility_natural_gas`)

This atomic exchange records the quantity of Natural gas crossing this process boundary.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Meter natural gas combusted on site for the declared route; add one separate atomic row for every other fuel actually used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`; `eu-jrc-fdm-bref-2019`

###### Utility process water (`facility_process_water`)

This atomic exchange records the quantity of Utility process water crossing this process boundary.

- Selected flow: Potable process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter process water not already recorded as recipe or sanitation water and allocate by route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-commission-pef-2021-2279`

###### Ammonia refrigerant make-up (`facility_ammonia_refrigerant`)

This atomic exchange records the quantity of Ammonia refrigerant make-up crossing this process boundary.

- Selected flow: Ammonia refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate make-up attributable to the declared route from refrigerant service and inventory records; otherwise mark this row not applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

###### R-404A refrigerant make-up (`facility_r404a_refrigerant`)

This atomic exchange records the quantity of R-404A refrigerant make-up crossing this process boundary.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate make-up attributable to the declared route from refrigerant service and inventory records; otherwise mark this row not applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide from on-site fuel (`facility_fossil_co2_to_air`)

This atomic exchange records the quantity of Fossil carbon dioxide from on-site fuel crossing this process boundary.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from each on-site fuel record and a cited fuel-specific factor, excluding purchased energy combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

###### Carbon monoxide from on-site fuel (`facility_carbon_monoxide_to_air`)

This atomic exchange records the quantity of Carbon monoxide from on-site fuel crossing this process boundary.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use stack measurement or calculate from each on-site fuel record and a cited fuel-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

###### Nitrogen oxides from on-site fuel (`facility_nitrogen_oxides_to_air`)

This atomic exchange records the quantity of Nitrogen oxides from on-site fuel crossing this process boundary.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use stack measurement or calculate from each on-site fuel record and a cited fuel-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

###### Ammonia refrigerant leakage (`ammonia_refrigerant_leakage`)

This atomic exchange records the quantity of Ammonia refrigerant leakage crossing this process boundary.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate route-attributable ammonia leakage from the refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

###### R-404A refrigerant leakage (`r404a_refrigerant_leakage`)

This atomic exchange records the quantity of R-404A refrigerant leakage crossing this process boundary.

- Selected flow: Refrigerant R-404A, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate route-attributable R-404A leakage from the refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_facility_utilities`
- Sources: `eu-commission-pef-2021-2279`

### Process: Cleaning and disinfection (`facility_sanitation`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

This atomic exchange records the quantity of Sanitation water crossing this process boundary.

- Selected flow: Potable cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter water used for pre-rinse, detergent rinse, disinfection, and final rinse and allocate to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `eu-jrc-fdm-bref-2019`; `fao-who-codex-cxc-58-2005`

###### Sodium hydroxide cleaner (`sodium_hydroxide_cleaner`)

This atomic exchange records the quantity of Sodium hydroxide cleaner crossing this process boundary.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record active sodium hydroxide mass in alkaline cleaner consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nitric acid cleaner (`nitric_acid_cleaner`)

This atomic exchange records the quantity of Nitric acid cleaner crossing this process boundary.

- Selected flow: Nitric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record active nitric acid mass in acid cleaner consumed; otherwise mark this row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sodium hypochlorite disinfectant (`sodium_hypochlorite_disinfectant`)

This atomic exchange records the quantity of Sodium hypochlorite disinfectant crossing this process boundary.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record active sodium hypochlorite mass in disinfectant consumed; otherwise mark this row not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `eu-jrc-fdm-bref-2019`; `fao-who-codex-cxc-58-2005`

#### Outputs

##### Waste flows

###### Meat-processing cleaning wastewater (`cleaning_wastewater`)

This atomic exchange records the quantity of Meat-processing cleaning wastewater crossing this process boundary.

- Selected flow: Meat-processing cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter sanitation wastewater sent to on-site treatment, sewer, or off-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `eu-jrc-fdm-bref-2019`

###### Screened meat solids from cleaning (`screened_meat_solids`)

This atomic exchange records the quantity of Screened meat solids from cleaning crossing this process boundary.

- Selected flow: Screened meat solids from cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh solids removed before wastewater discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_facility_sanitation`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Waste flows

###### Combined meat-processing wastewater to treatment (`wastewater_to_onsite_treatment`)

This atomic exchange records the quantity of Combined meat-processing wastewater to treatment crossing this process boundary.

- Selected flow: Meat-processing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter wastewater entering the on-site treatment plant, including separately recorded brine, purge, scrubber, and cleaning streams
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`

#### Outputs

##### Waste flows

###### Wastewater treatment sludge (`wastewater_treatment_sludge`)

This atomic exchange records the quantity of Wastewater treatment sludge crossing this process boundary.

- Selected flow: Meat-processing wastewater treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh dewatered sludge and record dry-matter content and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`

###### Treated wastewater to sewer (`treated_wastewater_to_sewer`)

This atomic exchange records the quantity of Treated wastewater to sewer crossing this process boundary.

- Selected flow: Treated meat-processing wastewater to sewer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter treated effluent transferred to a downstream sewer or off-site treatment; use elementary output rows instead for direct environmental discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

This atomic exchange records the quantity of Chemical oxygen demand to water crossing this process boundary.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate discharged COD from measured effluent concentration and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total nitrogen to water (`total_nitrogen_to_water`)

This atomic exchange records the quantity of Total nitrogen to water crossing this process boundary.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate discharged total nitrogen from measured effluent concentration and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total phosphorus to water (`total_phosphorus_to_water`)

This atomic exchange records the quantity of Total phosphorus to water crossing this process boundary.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate discharged total phosphorus from measured effluent concentration and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`

###### Chloride to water (`chloride_to_water`)

This atomic exchange records the quantity of Chloride to water crossing this process boundary.

- Selected flow: Chloride, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate discharged chloride from measured effluent concentration and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all_shared_operations | First subdivide route-specific processing and directly metered utilities, sanitation, refrigeration, packaging, waste, and emissions. Do not allocate excluded or non-applicable routes to the reference product. | `eu-commission-pef-2021-2279` |
| `allocation_physical_driver` | shared_facility_inputs | When subdivision is not possible, allocate shared electricity, steam, heat, natural gas, water, sanitation, and storage using a documented physical driver that reflects causality, such as submetered operating time, equipment load, product mass-time, or occupied refrigerated volume-time. | `eu-commission-pef-2021-2279` |
| `allocation_trimming_coproducts` | edible_pork_fat_trimmings_and_edible_pork_skin_trimmings | Keep saleable edible fat and skin as separate co-product outputs. Prefer process subdivision; if residual burdens remain, document the physical relationship or other justified allocation basis and disclose factors. Do not treat saleable co-products as zero-burden waste. | `eu-commission-pef-2021-2279` |
| `allocation_rework_and_rejects` | off_specification_product | Return rework to the originating process without creating avoided product; track repeated inputs and losses. Assign treatment burdens and credits only to the documented final destination of rejected material. | `fao-who-codex-cxc-58-2005`; `eu-commission-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_trimming` | `receipt_trimming` | received meat, trimmed product, co-products, trimmings, rejects | weighbridge, scale, lot disposition | lot_id; cut; received_state; gross_mass; tare; accepted_mass; trimmed_mass; each output mass; destination | Calibrated scales reconciled to lot and disposition records | kg | Every lot or batch | Representative production year, including seasonal products | All sites in dataset scope | Sum each atomic exchange; normalize to reference output; reconcile input to outputs and recorded loss | Calibration certificates; supplier lots; disposition records; mass-balance reconciliation |
| `cp_dry_curing` | `dry_curing` | meat, each dry ingredient, cured output, purge, spent cure, reject | recipe issue, scale, batch sheet | batch_id; ingredient_identity; active_concentration; issued_mass; returned_mass; meat_in; product_out; purge; spent_cure; reject; cure_time; cure_temperature | Calibrated weighing and batch reconciliation | kg | Every batch | Representative production year | Every dry-cure line and site | Sum each ingredient and output separately; normalize by reference output | Approved formula; scale calibration; batch sheet; cure-control records |
| `cp_brine_curing` | `brine_curing` | meat, water, each brine ingredient, cured output, spent brine, purge, reject | brine make-up, injector or immersion log, scales, meter | batch_id; curing_method; water_mass; each ingredient identity and active mass; meat_in; injection_or_immersion_mass; product_out; spent_brine; purge; reject; hold_time; temperature | Meter and calibrated scales; reconcile prepared, retained, recovered, and discarded brine | kg | Every batch | Representative production year | Every brine line and site | Keep injection and immersion routes separate; normalize atomic exchanges to reference output | Approved recipe; meter and scale calibration; equipment and hold records |
| `cp_tumbling` | `tumbling` | tumbled meat and purge | batch scale and tumbler log | batch_id; meat_in; meat_out; purge; duration; duty_cycle; temperature | Calibrated weighing and equipment log | kg | Every batch | Representative production year | Every tumbler used | Reconcile mass in, product out, and purge; normalize to reference output | Scale calibration; tumbler batch record |
| `cp_cooking` | `cooking` | cooked product, drip, reject | cooker batch sheet and scales | batch_id; meat_in; product_out; drip; reject; equipment_id; time_temperature_profile; core_temperature | Calibrated weighing and validated time-temperature recording | kg | Every batch | Representative production year | Every cooker or oven | Reconcile mass and retain route-specific thermal record | Scale and temperature calibration; validated cooking schedule |
| `cp_smoking` | `smoking` | meat, each smoke material, ash, scrubber wastewater, reject, each air emission | batch sheet, scales, stack test, control-device log | batch_id; meat_in; meat_out; wood_species; chips_mass; sawdust_mass; ash_mass; wastewater_mass; reject; pollutant_identity; concentration; gas_flow; test_duration; control_status | Calibrated weighing; stack measurement or documented pollutant-specific calculation | kg | Each batch for materials; representative tests and required monitoring for emissions | Representative production year and operating/control states | Every smokehouse | Calculate each pollutant separately; do not use a combined VOC or PAH exchange; normalize to reference output | Stack-test report; laboratory QA; control-device log; scale calibration |
| `cp_drying_ripening` | `drying_ripening` | dried product and reject | batch scales and room control records | batch_id; product_in; product_out; reject; time; temperature; relative_humidity; target_product_criterion | Calibrated weighing and continuous room monitoring | kg | Every batch | Representative production year | Every drying or ripening room | Reconcile mass and preserve declared route conditions | Scale and sensor calibration; validated product criterion |
| `cp_cooling_chilling` | `cooling_chilling` | product before and after cooling | batch scale and time-temperature logger | batch_id; product_in; product_out; start_time; end_time; product_temperature_profile; room_temperature | Calibrated weighing and continuous temperature recording | kg | Every batch | Representative production year | Every cooling or chilling system | Normalize product mass and retain route-specific cooling profile | Scale and temperature calibration; cooling validation |
| `cp_slicing` | `slicing` | sliced output, edible offcuts, reject | line scale and production log | batch_id; product_in; sliced_output; edible_offcuts; reject; disposition | Calibrated line scales and mass reconciliation | kg | Every batch | Representative production year | Every slicing line | Reconcile product, co-product, and reject by row_id | Scale calibration; production and disposition records |
| `cp_packaging` | `packaging` | net product, each packaging component, each packaging waste, reject | bill of materials, issue records, scales, line counters | batch_id; net_product; component_identity; component_mass; issued_count; unit_mass; returned_count; each waste mass; reject_mass | Product-specific bill of materials reconciled to issues and waste | kg | Every packaging campaign | Representative production year | Every packaging line and format | Keep each polymer, tray, carton, and label separate; normalize to net reference product | Supplier specifications; BOM; count-to-mass check; waste records |
| `cp_refrigerated_storage` | `refrigerated_storage` | stored product and storage service | stock, temperature, volume and time logs | lot_id; net_product_mass; entry_time; exit_time; temperature_profile; occupied_volume | Inventory reconciliation and continuous temperature logging | kg and day | Every lot | Representative production year | Every factory-gate cold store | Normalize product output; allocate shared storage by documented mass-time or volume-time | Inventory records; calibrated temperature loggers; storage allocation worksheet |
| `cp_facility_utilities` | `facility_utilities` | each energy carrier, fuel, water, refrigerant, and direct emission | meters, invoices, tank and refrigerant logs, stack data | meter_id; process_id; start_reading; end_reading; carrier; fuel_identity; energy_content; water; refrigerant_identity; charge; addition; recovery; ending_inventory; pollutant; factor_source | Prefer process submetering; reconcile invoices and inventories; calculate each emission separately | kWh, MJ, or kg | Continuous or each billing/service period | Representative production year | All facilities and route equipment | Subtract non-production and excluded routes; allocate with documented physical driver; normalize to reference output | Meter calibration; invoices; fuel and refrigerant reconciliation; emission calculation record |
| `cp_facility_sanitation` | `facility_sanitation` | water, each cleaning or disinfecting chemical, wastewater, screened solids | chemical issue, active concentration, water and effluent meter, solids scale | sanitation_event; area_or_equipment; water; chemical_identity; product_concentration; active_fraction; issued_mass; wastewater; screened_solids | Meter and weigh each chemical as active substance; allocate campaign and period sanitation | kg | Every sanitation event or shift | Representative production year | All included process areas | Keep each chemical atomic; allocate by documented sanitation driver; normalize to reference output | Sanitation SOP; concentration certificate; meter and scale calibration |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | wastewater, sludge, treated effluent, COD, nitrogen, phosphorus, chloride | influent and effluent meter, composite sample, sludge scale | flow_volume; density; sludge_wet_mass; sludge_dry_matter; COD; total_nitrogen; total_phosphorus; chloride; discharge_route | Flow-proportional composite sampling and accredited analysis; calibrated flow meter | kg | Flow continuously; composite samples at permit or representative frequency | Representative production year | Every on-site treatment plant | Concentration times flow for each pollutant; normalize to reference output; distinguish sewer transfer from direct discharge | Laboratory accreditation; chain of custody; meter calibration; discharge records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all_inventory_rows | normalized amount = route-attributable amount / net kg of conforming reference product after declared storage | atomic exchange amount; `packaged_refrigerated_product` net mass | amount per 1 kg reference product | `eu-commission-pef-2021-2279` |
| `calc_mass_reconciliation` | each_material_process | input mass = product outputs + co-products + wastes + measured purge or drip + documented inventory change; investigate residuals rather than assigning them to an invented flow | all mass rows for the batch | batch mass-balance residual and completeness finding | `mass-balance-identity` |
| `calc_active_ingredient` | nitrite_nitrate_ascorbate_phosphate_and_cleaners | active substance mass = formulated product mass × documented active fraction | issued product mass; supplier active fraction | active ingredient mass | `eu-commission-pef-2021-2279` |
| `calc_refrigerant_leak` | each_refrigerant | leakage = beginning charge + additions − recovered amount − ending charge − documented transfers; allocate the result using the refrigeration service driver | refrigerant inventory and service records | kg of one named refrigerant to air | `eu-commission-pef-2021-2279` |
| `calc_effluent_load` | each_direct_water_pollutant | discharged load = measured concentration × direct-discharge volume, with unit and density conversion documented | pollutant concentration; discharge volume | kg pollutant to water | `eu-jrc-fdm-bref-2019`; `eu-commission-pef-2021-2279` |
| `calc_smoke_emission` | each_smoke_pollutant | pollutant mass = measured stack concentration × dry gas flow × test duration, or activity data × one documented smokehouse-specific factor; never apply one factor to a different pollutant or control state | pollutant-specific stack or activity record | kg of one named pollutant to air | `us-epa-ap42-meat-smokehouses-1995`; `eu-commission-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | product and process map | Document one curing method and the actual cooking, smoking, drying, slicing, packaging, and refrigeration route; no mutually exclusive process may be silently averaged in. | Batch route declaration, recipe, equipment records, product specification |
| `dq_atomic_bill_of_materials` | ingredients, utilities, fuels, refrigerants, packaging, wastes, emissions | The bill of materials and inventory shall contain one row per specific exchange. Add a new atomic row for every declared ingredient, fuel, refrigerant, packaging component, waste, or emission not already represented. | Product-specific BOM, supplier specification, direct-read flow review |
| `dq_mass_completeness` | each batch and annual aggregation | Reconcile received meat, ingredients retained in product, product outputs, co-products, purge, drip, rejects, wastes, and inventory changes; investigate material residuals. | Batch mass balances and annual reconciliation |
| `dq_temporal_coverage` | foreground records | Cover a representative continuous 12-month period or justify a shorter campaign for seasonal or infrequent products; disclose abnormal production and shutdowns. | Date-stamped records and representativeness statement |
| `dq_measurement` | meters, scales, laboratory data | Use calibrated equipment and retain method, frequency, detection limit, missing-data treatment, and uncertainty for measured utilities and emissions. | Calibration, laboratory QA, maintenance, and missing-data logs |
| `dq_source_and_factor` | calculated values | Retain the exact source, version, applicability, unit conversion, and control state for every external factor; a source used only for process decomposition cannot supply an amount. | Calculation workbook and original source |
| `dq_range_evidence` | all important flows | Do not author an empirical range from a single case or one point. A future inferred range requires at least two independent verified originals with compatible boundary, unit, and normalization basis. | Range evidence review; unresolved-range register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Confirm 1 kg net reference product, Mass UUID, Units of mass UUID, kg, and all required qualifiers; fail if a narrower bacon-only, ham-only, or broader processed-meat UUID is substituted for unresolved CPC 21181 identity. | `unsd-cpc-3-0` |
| `validate_route_exclusivity` | process_map | Require exactly one of `dry_cure`, `brine_injection`, or `brine_immersion`. Reject cooking outside cooked ham, smoking outside a smoked route, drying or ripening outside a dried route, or slicing outside a sliced product route. | `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`; `usda-fsis-rte-salt-cured-dried-2023` |
| `validate_atomic_inventory` | process_inventory | Reject any combined ingredient, energy-carrier, fuel, refrigerant, packaging, waste, wastewater, sludge, or emission collection row; every selected flow must resolve to one Tiangong flow before publication. | `eu-commission-pef-2021-2279` |
| `validate_recipe_completeness` | curing | Match every declared recipe ingredient to one input row and active mass record, including salt, nitrite, nitrate, sugar, each spice, ascorbate, phosphate, and any additional ingredient. | `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`; `fao-who-codex-cxc-58-2005` |
| `validate_smoke_inventory` | smoking | For natural-smoke routes require smoke-material identity and assess PM2.5, carbon monoxide, acrolein, acetaldehyde, formaldehyde, acetic acid, nitrogen oxides, sulfur oxides, and benzo[a]pyrene individually; record measurement, calculation, not-applicable basis, or disclosed data gap for each. | `us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009` |
| `validate_mass_balance` | each_material_process | Check batch and annual mass-balance residuals and trace all co-products, purge, drip, rejects, wastewater, sludge, and packaging waste to destinations. | `mass-balance-identity`; `eu-commission-pef-2021-2279` |
| `validate_data_quality` | foreground_dataset | Verify route, technological, geographical, and temporal representativeness; calibrated measurement; documented allocation; source applicability; and separation of foreground records from external evidence. | `eu-commission-pef-2021-2279`; `fao-who-codex-cxc-58-2005` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a completed, reviewed foreground data package |
| downstream_use | Process and lifecycle-model construction for pig meat cuts preserved by the declared salted, dried, or smoked route at the factory gate |
| allowed_use | The represented product form, pig cut, curing method, conditional process route, recipe, packaging, geography, technology, reference period, and storage condition |
| excluded_use | Unrepresented curing or preservation routes; fresh pig meat; sausages or comminuted products; non-pig meat; consumer cooking; distribution; substitution of unresolved or approximate UUIDs |
| required_metadata | PCR id and version; product and route qualifiers; reference flow; geography; reference period; technology; site coverage; allocation drivers; upstream links; data sources; UUID resolution status |
| required_quality_disclosure | Data coverage and gaps; mass-balance residuals; meter and laboratory quality; source and factor applicability; route shares if averaged; co-product treatment; wastewater route; emission and refrigerant gaps; absence of qualified ranges |
| update_trigger | Change in product scope, curing method, recipe, cooking, smoking or drying technology, packaging, refrigeration system, wastewater route, allocation driver, geography, representative period, regulation, or confirmed Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `standard` | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory notes, CPC 21181, https://unstats.un.org/unsd/classifications/Econ/CPC (accessed 2026-08-24) | Product category scope and exclusions |
| `fao-who-codex-cxc-58-2005` | `standard` | FAO/WHO Codex Alimentarius, CXC 58-2005, Code of Hygienic Practice for Meat, https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf (accessed 2026-08-24) | Meat-processing boundary, hygiene, sanitation, temperature control, cooking, smoking, drying, curing, packaging, storage, rejects, and validation records |
| `fao-who-codex-cxc-68-2009` | `standard` | FAO/WHO Codex Alimentarius, CXC 68-2009, Code of Practice for the Reduction of Contamination of Food with PAH from Smoking and Direct Drying Processes, https://workspace.fao.org/sites/codex/Standards/CXC%2068-2009/CXC_068e.pdf (accessed 2026-08-24) | Smoke-material disclosure, smoking controls, and identity of combustion contaminants |
| `usda-fsis-bacon-food-safety` | `official_guidance` | USDA Food Safety and Inspection Service, Bacon and Food Safety, https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat-catfish/bacon-and-food-safety (accessed 2026-08-24) | Bacon trimming, dry curing, pumping, immersion, ingredients, heat processing, smoking, chilling, slicing, and packaging route decomposition |
| `usda-fsis-hams-food-safety` | `official_guidance` | USDA Food Safety and Inspection Service, Hams and Food Safety, https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat-catfish/hams-and-food-safety (accessed 2026-08-24) | Ham wet and dry curing, injection, tumbling, ingredients, cooking, smoking, drying, and product-state declarations |
| `usda-fsis-rte-salt-cured-dried-2023` | `official_guidance` | USDA FSIS-GD-2023-0002, Ready-to-Eat Fermented, Salt-Cured, and Dried Products Guideline, https://fsistraining.fsis.usda.gov/pluginfile.php/34201/mod_resource/content/1/FSIS%20Ready-to-Eat%20Fermented%2C%20Salt-Cured%2C%20and%20Dried%20Products%20Guideline%20.pdf (accessed 2026-08-24) | Dry-cured ham process decomposition, curing, equalization, drying controls, product criteria, and scientific-support limitations |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, EUR 29978 EN, doi:10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (accessed 2026-08-24) | Meat-processing utilities, cleaning sequence, cleaning chemicals, water, wastewater, solids, pollution control, and environmental data collection |
| `us-epa-ap42-meat-smokehouses-1995` | `method_factor` | US EPA AP-42, Section 9.5.2 Meat Smokehouses, September 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s05-2.pdf (accessed 2026-08-24) | Smokehouse process and pollutant identity; pollutant-specific measurement or calculation design; no AP-42 value is adopted as a PCR range |
| `eu-commission-pef-2021-2279` | `standard` | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj (accessed 2026-08-24) | Functional unit, company-specific inputs and outputs, bill of materials, direct emissions, allocation, data quality, completeness, and documentation |
| `petit-et-al-2021-cooked-ham-lca` | `literature` | Petit, G. et al. (2021), Comparing Innovative Versus Conventional Ham Processes via Environmental Life Cycle Assessment Supplemented with the Assessment of Nitrite Impacts on Human Health, Applied Sciences 11(1), 451, doi:10.3390/app11010451 | Peer-reviewed cooked-ham manufacturing and LCI process decomposition; not quantitative range evidence |
| `pauer-et-al-2020-bacon-packaging` | `literature` | Pauer, E. et al. (2020), Sustainability of flexible multilayer packaging: Environmental impacts and recyclability of packaging for bacon in block, Cleaner Environmental Systems 1, 100001, doi:10.1016/j.cesys.2020.100001 | Peer-reviewed bacon packaging component and packaging-process decomposition; not quantitative range evidence |
| `beigbeder-et-al-2022-dry-cured-ham-packaging` | `literature` | Beigbeder, J., Allal, A., and Robert, N. (2022), Ex-ante life cycle assessment of a partially reusable packaging system for dry-cured ham slices, Clean Technologies and Recycling 2(3), 119-135, doi:10.3934/ctr.2022007 | Peer-reviewed dry-cured ham slicing and tray/film thermosealing decomposition; not quantitative range evidence |
| `mass-balance-identity` | `method_factor` | Conservation of mass applied to batch and annual foreground reconciliation | Reference normalization, process yield reconciliation, and completeness checks |
