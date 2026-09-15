---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.base-metals-or-silver-clad-with-gold-not-further-worked-than-semi-manufactured
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Base metals or silver, clad with gold, not further worked than semi-manufactured

## 1. Scope and Applicability

This PCR covers factory-gate production of semi-manufactured base metal or silver having a wrought gold covering affixed to one or more surfaces by soldering, brazing, welding, hot rolling, or a similar mechanical means. It also covers base metal inlaid with gold when the product remains semi-manufactured. The category boundary follows the official CPC 3.0 identity and the legal meaning of metal clad with precious metal. Gold-plated, electroplated, vapour-deposited, painted, or otherwise thin-coated metal is outside this PCR because plating is not cladding. Finished jewellery, components with an article-specific function, gold-clad scrap, and metal clad with silver or platinum are also excluded.

The representative route is continuous roll bonding of copper strip and gold strip, including surface preparation, stacking, pressure rolling, route-specific thermal treatment, gauge finishing, surface finishing, slitting, inspection, and handling of process wastes. A foreground data package may represent another covered substrate or another legally qualifying cladding route, but it must name every actual material, energy, waste, and elementary exchange as its own atomic row. Upstream production of purchased metals, chemicals, fuels, electricity, and water is represented by linked datasets; downstream article manufacture, use, and end-of-life are outside the foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.base-metals-or-silver-clad-with-gold-not-further-worked-than-semi-manufactured |
| classification_refs | CPC 3.0: 41340 |
| covered_products | Semi-manufactured base-metal or silver strip, sheet, plate, rod, wire, or comparable wrought form with a gold covering mechanically or metallurgically affixed to one or more surfaces; qualifying base metal inlaid with gold |
| excluded_products | Electroplated or otherwise merely plated/coated metal; solid or alloyed gold without a distinct substrate; metal clad with silver or platinum; finished articles and jewellery; gold-clad waste and scrap |
| representative_product | Gold-clad copper strip produced by solid-state roll bonding and delivered as inspected semi-manufactured coil or cut strip |
| production_route | Surface preparation, stacking, roll bonding, route-specific heat treatment, finish rolling, surface finishing, slitting, inspection, and packing; other qualifying soldered, brazed, welded, hot-rolled, or similar mechanical routes require explicit route disclosure |
| market_state | Dry, solid, unassembled semi-manufactured product at the factory gate, with declared substrate, gold layer, geometry, and delivery form |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production and delivery of a semi-manufactured base-metal or silver product with a mechanically or metallurgically affixed gold layer |
| How much | 1 kg net mass of conforming product at the factory gate |
| How well | Conforms to the declared substrate specification, gold purity or alloy, gold-layer location and thickness, dimensions, bond-integrity criterion, surface finish, and acceptance test |
| How long or cycle | One production batch delivered at the factory gate; no service life is assigned because the product is an intermediate material |
| reference_flow_link | `cddd034b-762c-49e3-af56-109b23cfc982` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product |
| Reference product flow | Base metals or silver, clad with gold, not further worked than semi-manufactured `cddd034b-762c-49e3-af56-109b23cfc982` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | substrate metal and alloy; gold purity or alloy; gold mass and mass fraction; clad faces and layer thickness; product form and dimensions; bonding route; heat-treatment state; surface finish; bond-integrity and dimensional acceptance criteria; recycled content by metal; production site and geography; reporting period; factory-gate delivery form |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted product after removing packaging, reel, pallet, and other tare; normalize all inventory exchanges to 1 kg net conforming output. |
| `metal_input_mass` | copper substrate, gold strip, and gold-clad scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record metal masses on the same dry mass basis; separately report gold mass and substrate-metal mass so composition and metal balance can be checked. |
| `gas_volume_basis` | gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report the metered volume and the temperature, pressure, and dry/wet reference conditions; convert only with a documented factor. |
| `electricity_energy_basis` | alternating current | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter reading and conversion factor when electricity is collected in kWh; use 3.6 MJ per kWh only as an exact unit conversion, not as an energy-performance estimate. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground system boundary | Include all on-site operations from receipt of substrate metal and gold cladding stock through surface preparation, cladding or roll bonding, thermal treatment when used, finish rolling, surface finishing, slitting, inspection, internal handling, and release of the semi-manufactured product at the factory gate. | `nist-clad-metals-1983` |
| `sb_cladding_identity` | product identity | Include only products whose gold covering is affixed by soldering, brazing, welding, hot rolling, or similar mechanical means, including qualifying inlay; exclude plated or coated products that do not meet this definition. | `eu-cn-2020-1577-ch71` |
| `sb_upstream_inputs` | purchased inputs | Link representative upstream datasets for every purchased metal, chemical, fuel, electricity, oxygen, water, and lubricant crossing the foreground boundary; do not include those upstream emissions again as direct foreground elementary flows. | `eu-pef-2021-2279` |
| `sb_direct_releases` | direct site outputs | Record each direct waste and elementary release separately at the point it leaves the foreground process; do not combine scrap, used oil, wastewater, or air emissions into umbrella rows. | `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | downstream life cycle | Exclude downstream conversion into jewellery or components, product use, maintenance, and end-of-life unless the study explicitly expands the boundary and reports those stages separately. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased copper strip and gold strip are the representative starting materials; the actual substrate metal, alloy, surface condition, dimensions, gold purity, gold form, recycled content, supplier geography, and delivery state must be declared. |
| starting_condition_role | Defines the first foreground transformation and prevents upstream mining, refining, alloying, or strip production from being silently treated as on-site cladding operations. |
| product_classification_scope | Base metals or silver clad with gold, not further worked than semi-manufactured; CPC 3.0 code 41340 is mapping context rather than canonical PCR identity. |
| recursive_input_rule | If an input is already a product within this same gold-clad category, record it once as a separately identified purchased product input with its own upstream dataset and declared starting condition; do not recursively recreate its cladding inventory inside the foreground process. |
| upstream_dataset_requirement | Every purchased input requires a geographically, technologically, temporally, and materially representative upstream dataset or an explicit documented data gap. |
| disclosure | Disclose substrate and gold specifications, bonding route, heat source, cleaning and lubricant systems, production and waste-treatment geography, reporting period, allocation choices, data gaps, and any operations performed off site. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `gold_cladding_and_finishing` | Surface preparation, gold cladding, and semi-finishing | `required` | Always required; route-specific exchanges are recorded only when the declared technology uses them. | Foreground production from purchased substrate and gold stock to inspected semi-manufactured gold-clad product | 1 kg net conforming product output |

The cards below describe a representative copper-strip roll-bonding route. If the declared product uses silver or another base-metal substrate, or uses another qualifying cladding technology, replace or add the actual substrate and route-specific exchanges as separate atomic rows; never rename a row as a material or utility collection.

### Process: Surface preparation, gold cladding, and semi-finishing (`gold_cladding_and_finishing`)

#### Inputs

##### Product flows

###### Copper substrate strip (`in_copper_strip`)

Uncoated copper strip is the representative substrate entering surface preparation. A non-copper product must use a new atomic row naming the actual substrate metal or alloy.

- Selected flow: Red copper strip and sheet
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass accepted into the batch, net of packaging and unrecoverable supplier tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_metal_balance`
- Sources: `nist-clad-metals-1983`

###### Gold cladding strip (`in_gold_strip`)

Wrought gold strip entering the bond stack is recorded separately from the substrate. Its purity or alloy, thickness, width, and recycled content are required foreground qualifiers.

- Selected flow: Gold strip, semi-manufactured
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass issued to the batch, corrected for returned unused strip
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_metal_balance`
- Sources: `eu-cn-2020-1577-ch71`; `nist-clad-metals-1983`

###### Alternating current (`in_alternating_current`)

Electricity consumed by cleaning equipment, rolling mills, pumps, ventilation, inspection, and other directly attributable foreground equipment is metered or allocated from a reconciled submeter.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to the batch, converted from kWh with the documented exact unit conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

###### Gaseous natural gas for thermal treatment (`in_natural_gas`)

Record natural gas only when a directly fired preheating, annealing, or stress-relief operation is inside the foreground boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gaseous natural-gas volume attributable to included thermal treatment, with reference conditions retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `nist-clad-metals-1983`

###### Industrial oxygen for oxygen-assisted heating (`in_industrial_oxygen`)

Record oxygen only when the declared direct-heating technology supplies industrial oxygen separately to the burner or furnace.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered oxygen volume attributable to the included oxygen-assisted heating operation, with purity and reference conditions retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

###### Process water for aqueous surface cleaning (`in_process_water`)

Record water only when aqueous cleaning or rinsing is used before bonding or after finishing; report separately from closed-loop recirculation that does not cross the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: make-up and once-through process-water mass crossing the foreground boundary, excluding internally recirculated volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`in_sodium_hydroxide`)

Record sodium hydroxide only when an alkaline surface-cleaning bath is used. Report pure NaOH equivalent and retain the supplied solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased or prepared sodium-hydroxide mass charged to the included cleaning operation, expressed as pure NaOH equivalent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources:

###### Rolling lubricating oil (`in_rolling_lubricant`)

Record fresh rolling lubricant only when it is consumed or lost from the foreground lubricant circuit; internally recirculated inventory is not counted again.

- Selected flow: Rolling lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: fresh lubricant make-up plus batch-attributable lubricant loss, net of recovered oil returned to the same circuit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming gold-clad semi-manufactured product (`out_reference_product`)

Accepted product is the quantitative reference. Rejected material and packaging are excluded from its net mass.

- Selected flow: Base metals or silver, clad with gold, not further worked than semi-manufactured `cddd034b-762c-49e3-af56-109b23cfc982`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of product passing the declared dimensional, bond-integrity, composition, and surface-finish acceptance criteria
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_metal_balance`
- Sources: `un-cpc-3-0-2025`; `eu-cn-2020-1577-ch71`

##### Waste flows

###### Segregated gold-clad trim scrap (`out_gold_clad_scrap`)

Record edge trim, offcuts, and rejected clad pieces as this waste only when they retain a gold layer and leave the foreground process for recovery or treatment.

- Selected flow: Waste and scrap of metal clad with gold
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of segregated gold-clad trim, offcuts, and rejected pieces leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_metal_balance`
- Sources: `nist-clad-metals-1983`

###### Used lubricating oil (`out_used_lubricating_oil`)

Spent rolling lubricant removed from the circuit and transferred for recovery, treatment, or disposal is recorded separately from fresh make-up oil.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of used lubricating oil leaving the foreground boundary, net of free water when separately measured
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_records`
- Sources:

###### Wastewater from cleaning (`out_cleaning_wastewater`)

Record aqueous cleaning and rinse wastewater when it leaves the cladding process for on-site treatment, off-site treatment, or documented discharge. Retain alkalinity, dissolved-metal concentrations, and destination as qualifiers.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving the foreground process, with separately added water and removed bath inventory reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide from on-site fuel combustion (`out_fossil_carbon_dioxide`)

Record only carbon dioxide directly released by foreground combustion of fossil fuel. Electricity-related or other upstream carbon dioxide remains in linked upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-measured or site-calculated direct fossil carbon-dioxide mass attributable to included combustion, using documented fuel carbon and oxidation data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming gold-clad product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | shared foreground operations | Avoid allocation by submetering or subdividing cleaning, rolling, thermal treatment, finishing, and waste handling whenever inputs and releases can be directly assigned to the declared gold-clad product. | `eu-pef-2021-2279` |
| `alloc_physical_second` | unavoidable multifunctionality | When subdivision or system expansion is not feasible, use a documented causal physical relationship relevant to the shared operation; do not default to total mass when gold-clad and other outputs cause materially different burdens. | `eu-pef-2021-2279` |
| `alloc_economic_last` | residual shared burdens | Use economic allocation only when no defensible physical relationship exists; use contemporaneous factory-gate values for all co-products, disclose price sources and averaging period, and test sensitivity because gold content can dominate value. | `eu-pef-2021-2279` |
| `alloc_scrap_status` | gold-clad trim and used materials | Classify each outgoing material as waste or co-product according to its actual control, destination, and market status. Do not assign an avoided-burden credit inside this factory-gate PCR unless an explicitly expanded system and substitution evidence are reported. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_metal_balance` | `gold_cladding_and_finishing` | copper substrate, gold strip, accepted product, and gold-clad scrap | weighbridge, calibrated scale, material issue, return, and acceptance records | batch_id; material_id; alloy_or_purity; gross_mass; tare_mass; returned_mass; accepted_mass; scrap_mass; gold_layer_spec; calibration_id | Reconcile supplier receipt, batch issue/return, product acceptance, and segregated scrap records on one dry mass basis. | kg | each batch | all batches in the reporting period | all included lines at the declared site | Sum net input and output masses by batch, then divide reporting-period totals by net accepted product mass. | scale calibration; material certificates; batch traveller; acceptance and scrap tickets |
| `cp_energy_meters` | `gold_cladding_and_finishing` | alternating current, natural gas, and industrial oxygen | utility meter, submeter, invoice, and production log | meter_id; opening_reading; closing_reading; unit; reference_conditions; batch_or_period; downtime; shared_load_basis | Prefer dedicated meters; otherwise reconcile site totals and allocate only the directly attributable share using documented operating data. | MJ for electricity; m3 for gases | meter interval and each production campaign | representative reporting period of at least 12 months or the full shorter campaign | all included foreground equipment | Subtract non-production and excluded loads, reconcile to invoices, and normalize attributable totals by accepted product mass. | meter calibration; invoice reconciliation; operating-hour and production logs |
| `cp_cleaning_records` | `gold_cladding_and_finishing` | process water, sodium hydroxide, and cleaning wastewater | tank batch sheet, chemical issue, water meter, concentration test, and effluent record | bath_id; water_makeup; NaOH_solution_mass; NaOH_concentration; rinse_water; wastewater_mass; pH; dissolved_metals; destination | Record every bath make-up, replenishment, dump, and rinse; calculate pure NaOH equivalent from solution mass and measured concentration. | kg | each bath event and meter interval | all cleaning events in the reporting period | all included cleaning and rinse stations | Reconcile water and bath inventories, aggregate by period, and normalize by accepted product mass. | meter calibration; concentration analysis; pH and dissolved-metal results; waste transfer or discharge record |
| `cp_lubricant_records` | `gold_cladding_and_finishing` | fresh rolling oil and used lubricating oil | stores issue, tank inventory, recovery return, and waste transfer record | lubricant_id; formulation; opening_stock; additions; recovered_return; closing_stock; used_oil_mass; free_water; destination | Perform a lubricant stock balance and separately weigh used oil leaving the site. | kg | each addition/removal and monthly stock close | all lubricant events in the reporting period | included rolling and finishing mills | Fresh consumption equals opening stock plus additions minus closing stock and separately recovered return; normalize fresh and used outputs independently. | tank calibration; purchase issue; recovery and waste transfer records |
| `cp_direct_emissions` | `gold_cladding_and_finishing` | direct fossil carbon dioxide | fuel meter, fuel composition certificate, stack measurement, or approved site mass-balance record | fuel_volume_or_mass; reference_conditions; carbon_content; fossil_fraction; oxidation_fraction; measured_CO2; method_id | Prefer representative stack measurement; otherwise calculate from collected fuel and supplier-specific carbon data with the equation and factors retained. | kg CO2 | each test campaign or reporting-period calculation | representative operating modes over the reporting period | all included direct combustion units | Aggregate only direct fossil CO2 from included equipment and normalize by accepted product mass. | laboratory or analyser QA; fuel certificate; meter calibration; calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | accepted product | Net reference-product mass = accepted gross mass - packaging, reel, pallet, and other measured tare. | accepted gross mass; tare mass | `out_reference_product` net kg | |
| `calc_pure_naoh` | sodium hydroxide input | Pure NaOH equivalent = solution mass × measured NaOH mass fraction; retain both raw values. | NaOH solution mass; measured concentration | `in_sodium_hydroxide` kg pure NaOH | |
| `calc_inventory_normalization` | every inventory row | Normalized amount = reporting-period attributable amount ÷ reporting-period net conforming product mass. | attributable row amount; net conforming product mass | row amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_metal_balance` | substrate, gold, product, and metal-bearing outputs | Reconcile separately measured substrate-metal and gold inputs against their masses in accepted product, segregated scrap, wastewater, and any additional separately named metal-bearing output; report closure and unresolved difference without forcing balance. | metal input masses; product composition; scrap composition; wastewater metal analyses; other named metal outputs | substrate-metal and gold mass-balance closure | |
| `calc_direct_fossil_co2` | direct fossil carbon dioxide | Use representative measured CO2, or calculate fossil CO2 from collected fuel quantity, carbon content, fossil fraction, and oxidation fraction; retain the site equation and all factors. | collected fuel; carbon content; fossil fraction; oxidation fraction or stack measurement | `out_fossil_carbon_dioxide` kg | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and metal inputs | Retain purchase and product specifications that identify substrate alloy, gold purity or alloy, layer location and thickness, product form, dimensions, bond route, and delivery state. | supplier certificate; internal specification; batch traveller; inspection report |
| `dq_mass_completeness` | metal mass balance | Cover every batch in the reporting period and reconcile copper or actual substrate metal and gold separately; explain each unclosed difference and excluded metal-bearing stream. | calibrated scale records; material issue and return records; product and scrap composition tests |
| `dq_temporal_representativeness` | all foreground exchanges | Use a continuous representative period that captures normal product mix, start-up, shutdown, maintenance, and route variation; justify any period shorter than 12 months. | production calendar; meter coverage; downtime and maintenance logs |
| `dq_technology_geography` | foreground site and upstream links | Declare site, country or grid region, bonding technology, heat source, cleaning system, lubricant system, and waste destinations; select upstream datasets matching these facts or disclose mismatch. | site metadata; process flow diagram; supplier and utility records; dataset representativeness review |
| `dq_measurement_quality` | meters, scales, analyses, and calculations | Retain calibration status, detection limits where relevant, sampling plans, conversion factors, estimation flags, and calculation review for each material exchange. | calibration certificates; laboratory QA/QC; calculation workbook or reproducible record |
| `dq_primary_data_priority` | most relevant foreground processes | Use site-specific primary data for the cladding and finishing process and for major metal, energy, water, waste, and direct-emission exchanges; document any proxy and its expected influence. | primary-data register and data-quality assessment consistent with `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_boundary` | product classification | Confirm the output has a base-metal or silver substrate and a gold covering affixed by a qualifying mechanical or metallurgical cladding means, remains semi-manufactured, and is not merely plated or coated. | `un-cpc-3-0-2025`; `eu-cn-2020-1577-ch71` |
| `val_reference_flow` | quantitative reference | Confirm the reference amount is exactly 1 kg net conforming product and every required qualifier is populated. | |
| `val_atomic_inventory` | inventory structure | Confirm every selected flow is one atomic product, waste, or elementary exchange; reject collection labels, combined utilities, combined wastes, and unnamed route alternatives. | |
| `val_uuid_identity` | Tiangong references | Confirm every populated UUID resolves at public state code 100 with matching English and Chinese names, flow type, classification, property, and unit group; keep unresolved rows empty and documented. | |
| `val_mass_balance` | copper or actual substrate metal and gold | Check separate substrate-metal and gold closures using inputs, accepted product composition, segregated scrap, wastewater analyses, and every additional named metal-bearing output; investigate rather than erase differences. | |
| `val_energy_emissions` | energy and direct emissions | Reconcile electricity, fuel, and oxygen records to included equipment and reporting period; ensure direct fossil CO2 excludes upstream electricity and fuel-supply emissions. | |
| `val_allocation` | multifunctional operations | Confirm subdivision was attempted first and every residual physical or economic allocation basis, dataset, period, and sensitivity is disclosed. | `eu-pef-2021-2279` |
| `val_bilingual_alignment` | bilingual PCR use | Confirm English and Chinese files contain the same process ids, row ids, controlled values, rule ids, UUIDs, and source ids. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for factory-gate semi-manufactured gold-clad base metal or silver |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-level or component-level LCA in which the declared substrate, gold layer, product form, route, site, geography, reporting period, and factory-gate boundary are representative |
| excluded_use | Gold electroplating or other non-clad coatings; solid gold products; finished jewellery or components without added downstream processes; undisclosed substrate or gold layer; attribution to a different route or geography without representativeness review |
| required_metadata | canonical PCR id; product UUID; substrate and gold specifications; product form and dimensions; bonding and heat-treatment route; site and geography; reporting period; reference flow; upstream dataset choices; allocation method; recycled content; waste destinations |
| required_quality_disclosure | primary-data coverage; meter and scale calibration; gold and substrate-metal balance closure; data gaps and proxies; temporal, technological, and geographic representativeness; uncertainty and allocation sensitivity |
| update_trigger | Change in substrate or gold specification, cladding or heat-treatment technology, product form, site, energy system, cleaning or lubricant system, waste route, allocation basis, upstream dataset representativeness, or a material shift in measured inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, code 41340. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official product classification identity and title |
| `eu-cn-2020-1577-ch71` | Official guidance (`official_guidance`) | European Commission, Commission Implementing Regulation (EU) 2020/1577, Combined Nomenclature 2021, Chapter 71 notes 6-7 and heading 7109. https://eur-lex.europa.eu/eli/reg_impl/2020/1577/oj/eng/pdf (retrieved 2026-09-04) | Original-text definition of metal clad with precious metal, distinction from plating, and category boundary |
| `nist-clad-metals-1983` | Literature (`literature`) | J. T. Skelly, “Clad Metals - Material Conservation Through Design for Corrosion Control and High Performance,” in Technical Aspects of Critical Materials Use by the Steel Industry, Volume I, NBSIR 83-2679-1, 1983, pp. P39-1 to P39-2. https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir83-2679-1.pdf (retrieved 2026-09-04) | Original-text process decomposition for cleaning, continuous cold roll bonding, thermal treatment, finish rolling, annealing, polishing, and slitting; distinction between clad and plated metal |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Recommendation (EU) 2021/2279, Annex I, Environmental Footprint methods, especially sections 4.5 and data-quality provisions. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-04) | System-boundary disclosure, allocation hierarchy, foreground data quality, and representativeness rules |
