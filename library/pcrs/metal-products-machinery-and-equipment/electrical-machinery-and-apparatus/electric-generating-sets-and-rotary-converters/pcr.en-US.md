---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-generating-sets-and-rotary-converters
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Electric generating sets and rotary converters

## 1. Scope and Applicability

This PCR covers factory-gate production of complete electric generating sets and rotary converters in CPC 3.0 subclass 46114, which the official explanatory notes define through HS 2022 heading 8502. It covers prime-mover generating sets, wind-powered generating sets, other complete generating sets, and electromechanical rotary converters as saleable equipment. The Chinese title follows official Chinese statistical terminology.

The foreground begins with purchased materials, components, fuels, utilities, and packaging received at the manufacturing site and ends with one complete product passing factory acceptance. Installation, downstream distribution, operation, maintenance, and end-of-life are excluded. Stand-alone motors, generators or alternators, photovoltaic generators, static converters, transformers, parts, and generation services are excluded.

The verified Cummins generator-set EPD confirms that configurations vary by rated power, frequency, load profile, and design, and identifies component supply, assembly, energy, water, emissions, and packaging as production-stage elements. Its case values are not category-wide ranges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-generating-sets-and-rotary-converters |
| classification_refs | CPC 3.0: 46114 (exact classification context) |
| covered_products | complete electric generating sets driven by a declared prime mover; wind-powered generating sets; other complete generating sets; complete electromechanical rotary converters |
| excluded_products | stand-alone motors; generators or alternators; photovoltaic generators; static converters; transformers; separately supplied parts; electricity-generation services |
| representative_product | one complete factory-tested generating set or rotary converter in its declared saleable configuration |
| production_route | material/component receipt; on-site fabrication, winding, and surface preparation where performed; assembly; filling; acceptance testing; supplied shipment packaging |
| market_state | complete, factory-tested saleable equipment at the manufacturing gate, with packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | manufacture of a complete electric generating set or rotary converter capable of its declared electrical function |
| How much | one complete saleable item |
| How well | meeting declared rated active/apparent power, voltage, frequency, duty or conversion configuration, and acceptance criteria |
| How long or cycle | one manufacturing lot and final acceptance event; service life is declared when supporting use-phase comparison |
| reference_flow_link | accepted output row `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Electric generating set or rotary converter (Tiangong UUID unresolved) |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | product subtype; prime mover or conversion configuration; rated kW and kVA; input/output voltage; frequency; power factor; duty or operating regime; cooling and enclosure; dry mass; acceptance criterion; site and year; packaging state; service life when used for service comparison |

Every required qualifier must be stated in dataset metadata, product description, process notes, or an equivalent field. Missing qualifiers prevent comparison between materially different configurations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only a complete product passing the declared acceptance test; a motor, alternator, engine, rotor, or subassembly is not a reference item. |
| `product_mass_reconciliation` | BOM, finished product, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record dry product and packaging masses separately and reconcile inputs, retained mass, returns, waste, and work in progress on consistent bases. |
| `electricity_energy_conversion` | manufacturing electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter data and convert kWh with exactly 3.6 MJ/kWh; keep exported test electricity separate. |
| `gas_volume_reference` | natural gas and oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature, pressure, dry/wet basis, and correction; retain composition or carbon content for emission calculations. |
| `water_mass_conversion` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When measured by volume, retain raw volume and document density and reference conditions used to calculate kg. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include purchased materials/components and upstream datasets, on-site fabrication/winding, cleaning/coating, assembly, filling, testing, direct emissions, wastes, and supplied packaging when applicable. | `cummins-qsk95-epd-2026` |
| `boundary_excluded_stages` | downstream stages | Exclude post-gate distribution, customer-site installation/commissioning, operation, maintenance, and end-of-life unless separately extended. | `cummins-qsk95-epd-2026` |
| `boundary_additional_atomic_flows` | product-specific inventory | Add every additional material, component, fuel, chemical, packaging item, waste, and elementary emission as its own exchange; never aggregate them as other materials, utilities, or wastes. |  |
| `boundary_supplier_linking` | purchased products | Link each purchased input to a dataset representative of identity, state, geography, technology, and time; supplier-controlled production remains upstream unless primary records support another boundary. |  |
| `boundary_direct_test_emissions` | fuel-fired factory testing | Include test fuel and direct combustion emissions only when fuel is burned inside the foreground; exclude upstream emissions represented by fuel-supply datasets. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | purchased materials, components, fuels, utilities, and packaging received at the manufacturing site |
| starting_condition_role | foreground manufacturing gate input |
| product_classification_scope | complete CPC 3.0 subclass 46114 products, not stand-alone parts or generation services |
| recursive_input_rule | keep a complete CPC 46114 input visible and link an independently produced upstream dataset rather than recursively expanding this PCR |
| upstream_dataset_requirement | match identity, state, geography, technology, and time; disclose proxies and test sensitivity |
| disclosure | product subtype, configuration, site, year, make-or-buy boundary, test duty, packaging state, exclusions, and proxies |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_manufacturing_assembly_test` | Final manufacturing, assembly, factory testing, and shipment packaging | required | Include for every product; each card applies only when that atomic exchange crosses the boundary. | foreground production | one complete accepted item at the factory gate |

### Process: Final manufacturing, assembly, factory testing, and shipment packaging (`final_manufacturing_assembly_test`)

#### Inputs

##### Product flows

###### Steel base frame (`steel_base_frame`)

Record the steel base frame received or fabricated for the item; add other steel articles separately.

- Selected flow: Steel base frame (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured installed mass; attributable fabrication loss is recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources:

###### Aluminium enclosure panel (`aluminium_enclosure_panel`)

Record aluminium enclosure panels only when present; do not substitute a mixed-metal enclosure.

- Selected flow: Aluminium enclosure panel (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-declared installed panel mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources:

###### Insulated winding conductor (`magnet_wire`)

Apply when magnet wire crosses the site boundary or is issued to on-site winding.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: issue mass minus documented returned unused wire
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources:

###### Electrical insulation resin (`epoxy_resin`)

Apply when epoxy resin is used for impregnation, casting, bonding, or insulation inside the boundary.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Amount rule: batch issue minus recoverable return, assigned to accepted batch output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources:

###### Manufacturing electricity (`electricity`)

Include fabrication, winding, surface preparation, assembly, auxiliaries, and testing; net separately metered exported test electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered use assigned by direct submetering or a causal driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources:

###### Process water (`process_water`)

Apply to cleaning, cooling make-up, hydrostatic testing, or another declared process; exclude sanitary water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered attributable use, with documented volume-to-mass conversion when needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources:

###### Oxygen for thermal cutting (`industrial_oxygen`)

Apply only when an oxygen-consuming operation occurs inside the boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: corrected meter or delivery volume assigned to accepted units processed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Apply only to foreground alkaline cleaning; report sodium-hydroxide mass, not total solution mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased or make-up sodium-hydroxide mass assigned to accepted units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources:

###### Natural gas for heat or factory testing (`natural_gas`)

Apply when gas is burned on site for attributable heat or testing; distinguish uses in raw records.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: corrected metered volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_fuels`
- Sources:

###### Diesel fuel for factory testing (`diesel_fuel`)

Apply when diesel is burned during attributable factory testing; exclude customer operation.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts minus closing stock, returns, and unrelated issues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_fuels`
- Sources:

###### Lubricating oil installed or used in testing (`lubricating_oil`)

Keep retained fill and drained waste distinguishable.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: issue mass minus unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources:

###### Wooden shipping pallet (`wooden_pallet`)

Apply only when supplied across the gate; add films, crates, desiccants, and fasteners separately.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass supplied with the item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete accepted reference product (`reference_product`)

Record only a complete product passing acceptance; the category-wide Tiangong UUID is unresolved.

- Selected flow: Electric generating set or rotary converter (Tiangong UUID unresolved)
- Flow property / unit: Number of items / Item(s)
- Amount rule: exactly one complete accepted item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: one PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_acceptance`
- Sources:

##### Waste flows

###### Drained lubricating oil (`waste_lubricating_oil`)

Apply only to oil leaving tests, flushing, or rejected fills as waste; retained fill is not waste.

- Selected flow: Waste lubricating oil `9c1267ee-ba26-4c53-9643-89ae0c5764c4`
- Flow property / unit: Mass / kg
- Amount rule: measured net container or manifest mass assigned to the test lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from natural gas (`fossil_co2_natural_gas`)

Include only direct on-site emissions; upstream supply emissions remain in the gas dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from collected gas, composition/carbon content, and oxidation under `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fuels`
- Sources:

###### Fossil carbon dioxide from diesel (`fossil_co2_diesel`)

Include only direct on-site test emissions; upstream supply emissions remain in the fuel dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from diesel mass, carbon content, and oxidation under `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete accepted reference item
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fuels`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared manufacturing and testing | First avoid allocation by direct metering, lot segregation, subdivision, or system expansion. | `eu-pef-method-2021` |
| `allocation_physical_driver` | residual shared burdens | If subdivision is impossible, use a documented causal driver such as machine time, test time, metered energy, or processed mass. | `eu-pef-method-2021` |
| `allocation_other_relationship` | absence of a physical relationship | Use another relationship only after documenting why prior options are infeasible; disclose factors and sensitivity. | `eu-pef-method-2021` |
| `allocation_scrap` | recyclable production scrap | Report scrap as waste linked to receiving treatment; do not subtract avoided primary-material credit inside this gate inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_packaging` | `final_manufacturing_assembly_test` | installed material and packaging | BOM and supplier record | configuration; identity; issue, return, installed, and packaging mass | reconciled ERP bill, scale, supplier specification | kg/item | each configuration | representative year | site and suppliers | sum separate article masses per accepted item | released BOM; calibration; supplier declaration |
| `cp_material_issue` | `final_manufacturing_assembly_test` | chemical and fill material | issue/return record | identity; grade; opening; receipts; issues; returns; closing; accepted units | stock reconciliation and batch tickets | kg/item | batch or monthly | representative year | foreground site | opening plus receipts minus closing, returns, unrelated issues | reconciliation; specification |
| `cp_site_utilities` | `final_manufacturing_assembly_test` | electricity, water, oxygen | meter or delivery record | meter; readings; unit; conditions; correction; downtime; units; driver | submetering or meter balance | MJ/item; kg/item; m3/item | batch or monthly | representative year | foreground site | subtract unrelated use and assign by meter or causal driver | calibration; invoice; meter map |
| `cp_test_fuels` | `final_manufacturing_assembly_test` | test fuel and direct CO2 | test log, issue record, fuel specification | serial; duration; load; fuel; conditions; composition/carbon; oxidation; exported electricity | test-cell meter and stock balance | kg/item; m3/item; kg CO2/item | each test | representative year | test cells | sum attributable fuel and calculate each CO2 flow separately | calibration; test log; specification |
| `cp_product_acceptance` | `final_manufacturing_assembly_test` | complete product | acceptance/release record | serial; subtype; configuration; ratings; duty; mass; result; packaging | controlled acceptance record | Item(s) | every item | representative year | manufacturing site | count only released passing items | signed certificate; release; calibration |
| `cp_waste_records` | `final_manufacturing_assembly_test` | waste oil | weighing and manifest | identity; tare/gross; period; lot; destination; treatment | weighing and manifest reconciliation | kg/item | each shipment | representative year | foreground site | net mass assigned to causal lots without credit | calibration; manifest; container log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_item_normalization` | all rows | attributable amount / represented accepted-item count | amount; accepted items; allocation driver | flow quantity per item |  |
| `calc_electricity_mj` | electricity | corrected kWh × 3.6 | meter kWh | MJ/item |  |
| `calc_water_mass` | volumetric water | corrected volume × documented density | volume; density; conditions | kg/item |  |
| `calc_direct_fossil_co2` | on-site combustion | fuel mass × fossil carbon fraction × oxidation × 44/12; gas conversion uses composition and conditions | fuel mass/volume; density/composition; carbon; oxidation | kg fossil CO2/item |  |
| `calc_material_reconciliation` | materials and losses | input = retained product + returns + waste + emissions + closing work in progress | BOM; issue/return; product/packaging; waste; work in progress | difference and completeness flag |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain serial/model and all qualifiers; never average unlike products without configuration-specific normalization. | acceptance certificate and specification; `cummins-qsk95-epd-2026` |
| `dq_temporal` | foreground records | Use a representative continuous year or disclose shorter coverage and variability; date every record. | meter, ERP, test, and manifest records |
| `dq_completeness` | BOM and site inventory | Reconcile at least 99% of dry product and supplied packaging mass; list each exclusion with mass and justification. | signed mass-balance review and exclusion register |
| `dq_metering` | utilities and test fuels | Document boundary, calibration, corrections, conditions, downtime, rework, failed tests, exported electricity, and shared services. | calibration, meter map, reconciliation |
| `dq_supplier_data` | purchased inputs | Prefer current supplier data; otherwise disclose representativeness and test material proxies. | supplier metadata and proxy review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Confirm one accepted item and all subtype, electrical, duty/configuration, mass, site, year, and packaging qualifiers. | `cummins-qsk95-epd-2026` |
| `validate_inventory_atomicity` | inventory | Reject combined labels; each row has one identity, property, unit, direction, amount rule, and condition. |  |
| `validate_boundary` | system boundary | Confirm upstream links, foreground operations, test emissions, packaging, and exclusions follow the gate without double counting. | `cummins-qsk95-epd-2026` |
| `validate_mass_balance` | materials and packaging | Apply `calc_material_reconciliation`; investigate differences and disclose exclusions. |  |
| `validate_allocation` | shared site data | Confirm subdivision was attempted first and residual drivers, factors, and sensitivity are documented. | `eu-pef-method-2021` |
| `validate_uuid_resolution` | unresolved flows | Keep `reference_product`, `steel_base_frame`, and `aluminium_enclosure_panel` UUIDs empty until exact public state-100 matches are confirmed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing inventory data package for one complete electric generating set or rotary converter |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | modelling with compatible configuration, function, gate, geography, technology, and time |
| excluded_use | direct comparison of unlike ratings, duties, service lives, technologies, converter functions, or boundaries; use-phase claims without a downstream model |
| required_metadata | PCR id/version; subtype; configuration; ratings; duty; dry mass; site/year; make-or-buy boundary; test duty; allocation; packaging; unresolved UUIDs; sources/proxies |
| required_quality_disclosure | temporal, meter, mass-balance and allocation coverage; failed-test/rework treatment; supplier representativeness; exclusions; range needs; sensitivity |
| update_trigger | material change in design, rating, site, energy/fuel, supplier mix, test, packaging, allocation, data age, or resolved identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-04) | category identity and HS 2022 heading 8502 boundary |
| `china-nbs-statistical-product-classification-2010` | official_guidance | National Bureau of Statistics of China, Statistical Product Classification Catalogue; https://www.stats.gov.cn/sj/tjbz/tjypflml/2010/39.html (retrieved 2026-09-04) | professional Chinese terminology |
| `cummins-qsk95-epd-2026` | dataset | Cummins Inc., Environmental Product Declaration: Cummins QSK95 Series Open Diesel Generator Set, EPD-IES-0025774, 2026-03-31; https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/10fb072a-4359-48aa-b53e-08ddf1520762/Documents (retrieved 2026-09-04) | configuration, process decomposition, boundary and quality context; not range inference |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, section 4.5; https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-04) | allocation hierarchy |
