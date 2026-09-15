---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-man-made-filaments-multiple-or-cabled-other-than-sewing-thread-high-tenacity-ya-0a2734ab
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Yarn of man-made filaments, multiple or cabled (other than sewing thread, high tenacity yarn of polyamides, polyesters or viscose rayon), not put up for retail sale

## 1. Scope and Applicability

This PCR applies to factory-gate foreground data packages for multiple, folded, plied, or cabled yarn made by combining man-made continuous-filament yarns. It covers industrial yarn not put up for retail sale. It excludes sewing thread, high-tenacity yarn of polyamides, polyesters, or viscose rayon, retail-sale yarn, staple-fibre yarn, monofilament sold as such, and textured yarn when texturing rather than plying or cabling defines the product.

The minimum foreground boundary begins with purchased qualifying filament yarn on production packages and ends with net qualifying multiple or cabled yarn after assembly winding, twisting or cabling, and take-up winding. Polymer production, filament formation, dyeing, chemical finishing, use, and end-of-life are outside this minimum boundary. If any excluded operation is performed in the reporting facility and is inseparable from the product lot, it must be added as a separately identified foreground process with its own atomic exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-man-made-filaments-multiple-or-cabled-other-than-sewing-thread-high-tenacity-ya-0a2734ab |
| classification_refs | CPC 3.0: 26421 |
| covered_products | Multiple, folded, plied, or cabled yarn of synthetic or artificial continuous filaments, other than the explicit exclusions |
| excluded_products | Sewing thread; high-tenacity yarn of polyamides, polyesters, or viscose rayon; yarn put up for retail sale; staple-fibre yarn; monofilament sold as such; products whose defining operation is texturing rather than plying or cabling |
| representative_product | Factory-gate polyester-filament two-ply yarn, wound for bulk industrial transfer and reported as net yarn mass |
| production_route | Assembly winding or direct creeling of qualifying filament yarn, twisting or cabling, and take-up winding |
| market_state | Finished industrial yarn at the producing facility gate, not put up for retail sale, net of reusable carriers and external transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of qualifying multiple or cabled man-made filament yarn ready for downstream textile conversion |
| How much | 1,000 kg net yarn mass |
| How well | Conforming to CPC 26421 with declared filament material, number of component ends, ply or cable construction, twist direction and twist level, linear density, and package form |
| How long or cycle | One completed production lot at the factory gate; no use-stage service duration is assigned |
| reference_flow_link | Net mass of the qualifying output flow from `doubling_twisting_winding` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net yarn mass |
| Reference product flow | Yarn of man-made filaments, multiple or cabled (other than sewing thread, high tenacity yarn of polyamides, polyesters or viscose rayon), not put up for retail sale `d3526e15-e0a8-4d96-8688-2738fd9d20ba` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | filament polymer or material; number of component ends; ply or cable construction; S or Z twist direction; twist level; linear density; high-tenacity exclusion confirmation; non-retail market state; net-mass basis; production geography and reporting period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and yarn material exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net yarn mass excluding reusable carriers and external transport packaging; state the conditioning basis used for weighing. |
| `electricity_energy` | Medium-voltage electricity input | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert verified meter readings to MJ using a disclosed conversion and retain the original electricity-meter unit. |
| `twist_linear_density` | Product identity and lot records | Declared engineering measurements | turns/m and tex or dtex | Record twist direction, twist level, and linear density using the same test or production-control basis for the reported lot. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualifying single or already-plied man-made filament yarn received on production packages, with material identity and upstream dataset reference declared |
| starting_condition_role | Purchased product input to the foreground doubling, twisting, cabling, and winding operation |
| product_classification_scope | CPC 26421 output; CPC 35520 synthetic filament yarn and CPC 35550 artificial filament yarn are common upstream input scopes |
| recursive_input_rule | Any purchased yarn already classified within CPC 26421 remains a visible product input and links to a separate upstream dataset; it is not absorbed into the foreground output identity. |
| upstream_dataset_requirement | Every purchased filament-yarn input requires a supplier-specific or representative upstream production dataset with matching polymer, yarn state, and geography. |
| disclosure | Declare input polymer, package state, component-end count, machinery route, process ownership, lot coverage, excluded wet or thermal operations, and whether reusable carriers cross the reporting boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground_system_boundary | Include directly controlled assembly winding or creeling, twisting or cabling, take-up winding, in-process inspection, electricity use, qualifying output, and yarn waste handling for the reported lot. | `kim-et-al-2025-twisting-process`; `eu-textiles-bat-2022` |
| `boundary_upstream_inputs` | purchased_filament_yarn | Keep each purchased filament yarn as an atomic product input linked to an upstream dataset; do not reconstruct polymer or filament production inside this foreground process. | `unsd-cpc-3-0-26421` |
| `boundary_excluded_operations` | excluded_operations | Exclude dyeing, chemical finishing, external transport packaging, distribution, use, and end-of-life unless the study explicitly extends the boundary and inventories each added operation separately. | `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `doubling_twisting_winding` | Assembly winding, twisting or cabling, and take-up winding | `required` | Always required for the qualifying foreground product | Foreground production | 1,000 kg net qualifying yarn output |

### Process: Assembly winding, twisting or cabling, and take-up winding (`doubling_twisting_winding`)

#### Inputs

##### Product flows

###### Polyester filament yarn input (`input_polyester_filament`)

Record purchased polyester filament yarn when it enters the reported lot as a component yarn.

- Selected flow: Polyester Filament `30173859-61d4-4518-ba9e-6846b8491c1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Foreground net mass entering the lot, reconciled against output and polyester yarn waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net qualifying yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`

###### Nylon 6 filament yarn input (`input_nylon6_filament`)

Record ordinary-strength Nylon 6 filament yarn when it enters the reported lot; high-tenacity polyamide yarn is outside this PCR.

- Selected flow: Nylon 6 filament yarn, non-high-tenacity
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Foreground net mass entering the lot, reconciled against output and Nylon 6 yarn waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net qualifying yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`

###### Artificial filament yarn input (`input_artificial_filament`)

Record purchased artificial filament yarn when it enters the reported lot as a component yarn.

- Selected flow: Artificial filament yarn (except sewing thread and multiple or cabled yarn), not put up for retail sale `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Foreground net mass entering the lot, reconciled against output and artificial filament yarn waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net qualifying yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`

###### Grid-supplied medium-voltage alternating current (`input_medium_voltage_electricity`)

Record metered electricity supplied to the twisting and winding machinery and directly supporting equipment within the process boundary.

- Selected flow: Alternating current, 1-35 kV, consumption mix at user `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Foreground submeter or reconciled facility-meter consumption for the reported lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net qualifying yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualifying multiple or cabled man-made filament yarn (`output_multiple_cabled_yarn`)

Record only output that satisfies the product identity and all exclusions in this PCR.

- Selected flow: Yarn of man-made filaments, multiple or cabled (other than sewing thread, high tenacity yarn of polyamides, polyesters or viscose rayon), not put up for retail sale `d3526e15-e0a8-4d96-8688-2738fd9d20ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Foreground net mass of accepted qualifying yarn output; use this measurement as the normalization denominator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net qualifying yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`

##### Waste flows

###### Waste polyester filament yarn (`waste_polyester_filament_yarn`)

Record polyester filament yarn removed as breaks, start-up loss, off-specification yarn, or winding waste.

- Selected flow: Waste polyester filament yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Foreground segregated waste mass leaving the process or transferred to on-site recovery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net qualifying yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`

###### Waste Nylon 6 filament yarn (`waste_nylon6_filament_yarn`)

Record ordinary-strength Nylon 6 filament yarn removed as breaks, start-up loss, off-specification yarn, or winding waste.

- Selected flow: Waste Nylon 6 filament yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Foreground segregated waste mass leaving the process or transferred to on-site recovery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net qualifying yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`

###### Waste artificial filament yarn (`waste_artificial_filament_yarn`)

Record artificial filament yarn removed as breaks, start-up loss, off-specification yarn, or winding waste.

- Selected flow: Waste artificial filament yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Foreground segregated waste mass leaving the process or transferred to on-site recovery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net qualifying yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_mass_balance`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_lots` | mixed_product_production | Subdivide production by product lot, machine, and reporting period before applying allocation. |  |
| `allocation_shared_electricity` | shared_electricity | When direct submetering is unavailable, allocate shared electricity using documented machine operating time and measured load; retain raw meter and production records. | `eu-textiles-bat-2022` |
| `allocation_yarn_waste` | yarn_waste | Keep burdens of generated yarn waste with the foreground process up to the waste handover point; do not credit avoided virgin production inside this foreground inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_mass_balance` | `doubling_twisting_winding` | filament-yarn inputs, qualifying yarn output, and polymer-specific yarn wastes | weighbridge, scale, lot ledger, and quality-release records | timestamp; lot_id; material_identity; polymer; high_tenacity_flag; input_mass; accepted_output_mass; waste_mass; carrier_tare; disposition | Weigh each input, accepted output, and segregated waste stream on calibrated equipment; subtract documented carrier tare and link every record to the lot. | kg | each lot and each waste handover | entire reporting period | all included lines and shifts | sum net masses by row_id and lot, then normalize with `calc_normalize_reference_mass` | calibration records; tare records; lot genealogy; quality-release status; waste transfer records |
| `cp_electricity_meter` | `doubling_twisting_winding` | `input_medium_voltage_electricity` | electricity submeter or reconciled facility meter | meter_id; timestamp_start; timestamp_end; opening_reading; closing_reading; original_unit; machine_runtime; measured_load; lot_id | Read the dedicated submeter for each lot; when shared, reconcile facility readings and allocate only with documented operating time and measured load. | original meter unit and MJ | each lot or meter interval | entire reporting period | all included twisting, winding, and directly supporting equipment | subtract opening from closing readings, remove documented out-of-boundary use, allocate shared use, convert to MJ, and normalize | meter identity; meter calibration or verification; reconciliation; allocation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | all inventory exchanges | normalization factor = 1,000 kg / measured net qualifying output kg; multiply each measured exchange by the factor | measured exchange; measured net qualifying output | exchange per 1,000 kg reference product |  |
| `calc_yarn_mass_reconciliation` | yarn material balance | Reconcile each polymer-specific yarn input against accepted yarn output, segregated yarn waste, and documented work-in-progress change; disclose any residual without forcing it to zero. | net input mass; accepted output mass; waste mass; work-in-progress change | disclosed mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain evidence for polymer or material, component-end count, ply or cable construction, twist direction and level, linear density, high-tenacity exclusion, and non-retail market state. | product specification; lot release; test or production-control record |
| `dq_completeness` | process inventory | Include every actual material, electricity, waste, and elementary exchange within the declared process boundary as a separate atomic row; add a specific row when an actual exchange is not represented above. | input-output inventory; purchase records; meters; waste records; emission records |
| `dq_temporal_site_scope` | foreground records | Cover the complete declared reporting period and every included line and shift; disclose exclusions, shutdowns, abnormal operations, and data gaps. | production calendar; meter interval coverage; lot register; gap log |
| `dq_identity_resolution` | Tiangong references | Use only verified state_code 100 UUIDs whose type, name, classification, property, and unit semantics match the exchange; leave unresolved UUIDs blank and preserve the specific flow name. | Tiangong identity verification and manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_product | The output uses UUID `d3526e15-e0a8-4d96-8688-2738fd9d20ba`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, and the declared CPC 26421 scope. | `unsd-cpc-3-0-26421` |
| `validate_exclusions` | product_lot | Records confirm that the product is not sewing thread, not high-tenacity polyamide, polyester, or viscose rayon yarn, and not put up for retail sale. | `unsd-cpc-3-0-26421` |
| `validate_normalization` | inventory | Every exchange is normalized to exactly 1,000 kg measured net qualifying output using `calc_normalize_reference_mass`, while raw foreground values remain retained. |  |
| `validate_atomic_inventory` | inventory | Every selected flow names one concrete product, electricity supply, waste, or elementary flow; combined categories and selector instructions are absent. | `eu-textiles-bat-2022` |
| `validate_mass_reconciliation` | yarn_material_balance | Polymer-specific yarn inputs, accepted output, yarn wastes, and work-in-progress changes are reconciled and any residual is disclosed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for multiple or cabled man-made filament yarn |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed for representativeness |
| allowed_use | Product carbon footprinting, process LCA, and downstream textile models requiring a CPC 26421 factory-gate yarn input |
| excluded_use | Sewing thread, high-tenacity excluded yarns, retail-sale yarn, staple-fibre yarn, monofilament, or textured-yarn production represented only by false-twist texturing |
| required_metadata | PCR id; geography; reporting period; technology; polymer or material; component-end count; ply or cable construction; twist direction and level; linear density; package state; net-mass basis; upstream input dataset links; allocation method |
| required_quality_disclosure | Meter and scale coverage; calibration; lot coverage; mass-balance residual; unresolved UUIDs; exclusions; abnormal operations; data gaps; allocation and conversion methods |
| update_trigger | Change in polymer input, ply or cable construction, twisting technology, electricity supply, site, allocation basis, output specification, or a material data gap or UUID resolution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-26421` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 26421, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Product scope, reference identity, and exclusions |
| `kim-et-al-2025-twisting-process` | `literature` | Kim, H., Rho, S., and Jeong, W. (2025), Manufacturing and characterization of conductive threads based on twisting process for applying smartwear, Fashion and Textiles 12:4, https://doi.org/10.1186/s40691-024-00406-7 | Evidence that multiple PET filament ends are combined by sequential twisting operations; process decomposition only, no amount ranges |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508, BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-12) | Transferable input-output inventory, material, energy, waste, and data-quality recording principles; no numerical BAT level is applied to yarn manufacture |
