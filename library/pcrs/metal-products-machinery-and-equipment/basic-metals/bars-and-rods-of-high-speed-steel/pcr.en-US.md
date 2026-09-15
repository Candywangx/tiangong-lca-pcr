---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-high-speed-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bars and rods of high-speed steel

## 1. Scope and Applicability

This PCR applies to mill-gate bars and rods whose steel grade is declared as high-speed steel. It covers the foreground conversion of a received high-speed-steel billet by reheating and hot working, together with the heat treatment, straightening, descaling, surface conditioning, cutting and inspection actually applied before the product leaves the producing site. The producer shall declare whether the delivered form is straight bar or rod/coil and shall identify the high-speed-steel grade, dimensions, hot-working technology and delivery condition.

The PCR excludes ordinary alloy-steel bars and rods that expressly exclude high-speed steel, silico-manganese-steel products, non-alloy-steel bars and rods, wire, hollow drill bars, flat-rolled high-speed-steel products, finished cutting tools and downstream fabrication into components. Primary steelmaking and casting before the received high-speed-steel billet are outside the foreground boundary and require an upstream dataset. Packaging, customer transport, use and end-of-life are outside the declared product system unless a study expands the scope and reports them separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-high-speed-steel |
| classification_refs | CPC 3.0: 41271, Bars and rods of high-speed steel |
| covered_products | Straight bars and rod or coiled-rod forms of declared high-speed-steel grades, in the as-hot-worked or producer-applied heat-treated and surface-finished delivery condition |
| excluded_products | Non-alloy-steel bars or rods; ordinary alloy-steel bars or rods that exclude high-speed steel; silico-manganese-steel products; wire; hollow drill bars; flat-rolled products; finished tools and fabricated components |
| representative_product | One mill-gate high-speed-steel bar or rod product lot conforming to its declared grade, dimensions and delivery condition |
| production_route | Received high-speed-steel billet is reheated and hot-worked by the declared rolling, forging, hot-drawing or extrusion route; only the heat treatment and surface-finishing operations actually used are included |
| market_state | Solid steel bar or rod at the producing-site gate, sold by net mass; straight or coiled form, surface condition and heat-treatment condition are declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | High-speed-steel bar or rod supplied at the producing-site gate for downstream manufacture |
| How much | 1 kg net product mass |
| How well | Conforming to the purchaser-declared high-speed-steel grade, dimensions, form, surface condition and delivery condition |
| How long or cycle | One completed production and dispatch lot; no use-phase service life is represented |
| reference_flow_link | 1 kg of conforming mill-gate product output equals 1 kg of the reference flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Bars and rods of high-speed steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | high-speed-steel grade and applicable grade specification; straight bar or rod/coil form; nominal dimensions and dimensional tolerance; hot-working technology; heat-treatment condition; surface condition; billet source and billet production route; production site and geography; reference period; net-mass and packaging exclusion |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. The missing Tiangong reference-product UUID remains an explicit review issue; it shall not be replaced by a neighboring alloy, silico-manganese, non-alloy or flat-steel flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and steel-bearing product or waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry mass at the stated delivery condition; exclude pallets, straps, wrapping and other packaging. Preserve lot-level weighing records and normalize to 1 kg conforming product. |
| `gas_volume_basis` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State metering temperature, pressure and wet/dry basis. Convert supplier or meter volumes to one declared reference condition before aggregation; do not mix normal, standard and actual cubic metres without conversion. |
| `electricity_energy_basis` | Purchased electricity | Energy | MJ | Preserve the metered electrical-energy basis and convert kWh to MJ using 1 kWh = 3.6 MJ. Declare voltage level, supplier or grid mix, geography and whether on-site generation is included. |
| `water_mass_basis` | Process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net make-up process water crossing the foreground boundary. If metered by volume, convert with a measured or documented density and retain the conversion basis; separately disclose recycled internal water. |
| `sodium_hydroxide_active_mass` | Sodium hydroxide used in alkaline cleaning | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report active NaOH mass. For purchased solution, calculate active mass from delivered solution mass and lot-specific concentration; water in the solution shall not be double-counted as process-water make-up. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_start_end` | Billet-to-mill-gate foreground system | Start when a grade-identified high-speed-steel billet crosses the producing-site boundary. End when conforming bars or rods are weighed at the mill gate after all producer-applied conditioning. Include reheating, hot working, cooling, internal handling, applicable heat treatment and surface conditioning, utilities, separated wastes and direct emissions. | `eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017` |
| `sb_upstream_billet` | Received high-speed-steel billet | Primary steelmaking, alloying, refining and casting are represented by an upstream billet dataset with compatible grade, route, geography, period and recycled-content method; do not reconstruct those burdens from a generic non-alloy billet. | `worldsteel-lci-methodology-2017` |
| `sb_route_conditionals` | Route-conditioned operations | Include oxygen enrichment only when supplied industrial oxygen is used, alkaline cleaning only when performed, and heat treatment or surface finishing only when applied to the reference product. Mark an atomic row not applicable only from production records; do not average absent routes into a zero quantity. | `eu-2022-2110-ferrous-metals-processing` |
| `sb_excluded_downstream` | Scope exclusions | Exclude packaging, outbound customer transport, customer machining, tool manufacture, use and end-of-life from this foreground dataset. If a study adds one of these stages, report it as a separate process without changing this reference flow. | `worldsteel-lci-methodology-2017` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Grade-identified high-speed-steel billet received at the producing site, before reheating for bar or rod hot working |
| starting_condition_role | Upstream product input and foreground conversion starting point |
| product_classification_scope | CPC 3.0 code 41271 is classification context; canonical identity remains high-speed-steel bars and rods at the declared mill-gate delivery condition |
| recursive_input_rule | If off-site bars or rods of the same canonical category are used as feedstock, record their purchased mass as a separate upstream product input and disclose the reuse or rerolling route; do not recursively expand this PCR inside the same foreground process |
| upstream_dataset_requirement | Use an upstream high-speed-steel billet dataset compatible with declared grade, steelmaking and casting route, geography, time period, recycled-content or end-of-life allocation convention and delivery condition |
| disclosure | Declare billet grade and source, hot-working technology, included conditioning steps, product form and dimensions, site and geography, reference period, energy and water supply, internal recycling, exported recovered materials, waste treatment and direct-emission measurement basis |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `billet_to_bar_rod` | Billet reheating, hot working and mill-gate finishing | `required` | Always required; individual oxygen, alkaline-cleaning, heat-treatment and finishing exchanges apply only when supported by production records | Foreground conversion of high-speed-steel billet into conforming bar or rod | 1 kg conforming mill-gate high-speed-steel bar or rod |

### Process: Billet reheating, hot working and mill-gate finishing (`billet_to_bar_rod`)

This aggregated foreground process represents the actual site route from received high-speed-steel billet through hot working and all producer-applied finishing. Route-conditioned rows remain atomic and are included only when the stated operation occurs.

#### Inputs

##### Product flows

###### Grade-identified high-speed-steel billet (`dr_hss_billet`)

The billet is the steel-bearing starting product for the foreground conversion. Record only billet mass that crosses the foreground boundary for the declared grade and production lot.

- Selected flow: High-speed steel billet
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled billet charged to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `worldsteel-lci-methodology-2017`

###### Natural gas for billet reheating or producer-applied heat treatment (`dr_natural_gas`)

Record gaseous natural gas delivered to burners that serve the foreground process. Do not include upstream gas-supply emissions as direct foreground emissions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural gas allocated to the declared product lot from furnace-level or justified site-level records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_metering`
- Sources: `eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017`

###### Purchased electricity for rolling, drives, pumps and finishing (`dr_electricity`)

Record delivered electrical energy consumed by the foreground equipment. Use the actual voltage level and supplier or grid geography rather than a cable or voltage-transformation service flow.

- Selected flow: Medium-voltage alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Metered electricity for the foreground process, or a documented allocation from site meters when submetering is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Industrial oxygen for oxygen-enriched combustion (`dr_industrial_oxygen`)

Include this row only when purchased or on-site-generated industrial oxygen crosses the selected furnace boundary for oxygen-enriched combustion. Ambient combustion air is not this product flow.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered oxygen supplied to applicable foreground burners; otherwise mark the row not applicable with supporting furnace records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output when oxygen enrichment is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Process water make-up for descaling and cooling (`dr_process_water`)

Record net make-up water delivered to the foreground descaling and cooling circuits. Internal recirculation is disclosed but is not counted repeatedly as an input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water minus documented transfers to processes outside this foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_metering`
- Sources: `eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017`

###### Sodium hydroxide for route-applied alkaline cleaning (`dr_sodium_hydroxide`)

Include sodium hydroxide only when the declared product route uses a NaOH-based alkaline-cleaning bath. Record active chemical mass and separately characterize the solution water through the water records.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg active NaOH
- Amount rule: Delivered solution mass multiplied by lot-specific NaOH mass fraction, adjusted for opening and closing bath inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output when NaOH cleaning is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-2022-2110-ferrous-metals-processing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming high-speed-steel bars and rods (`pr_hss_bars_rods`)

This is the reference product output after every producer-applied operation in the declared delivery condition. Keep the UUID empty until an exact public state-100 flow for this product category is verified.

- Selected flow: Bars and rods of high-speed steel
- Flow property / unit: Mass / kg
- Amount rule: 1 kg reference product output; retain the measured lot output before normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg conforming mill-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Rolling mill scale separated from the product and water circuit (`wr_mill_scale`)

Record mill scale removed during reheating, hot working, descaling or scale-bearing water treatment. Declare whether it is internally recycled, exported for recovery or sent to waste treatment.

- Selected flow: Mill scale `763bdad1-b443-428a-89b6-371a6807fc6c`
- Flow property / unit: Mass / kg
- Amount rule: Weighed separated mill scale, adjusted for opening and closing storage inventory and assigned to the declared product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017`

###### Spent alkaline cleaning liquor (`wr_waste_alkaline_liquor`)

Include this waste only when a NaOH-based cleaning bath is discharged from the foreground route. Report wet waste mass and retain composition and treatment records.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg wet liquor
- Amount rule: Weighed or volume-and-density-calculated liquor sent to on-site or off-site treatment, adjusted for bath inventory changes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output when alkaline cleaning is used
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-2022-2110-ferrous-metals-processing`

##### Elementary flows

###### Direct fossil carbon dioxide from foreground fuel combustion (`er_carbon_dioxide_fossil`)

Record fossil carbon dioxide emitted directly from natural-gas combustion in foreground furnaces. Exclude upstream electricity-generation emissions and biogenic carbon dioxide from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site-measured direct fossil CO2 or a separately documented fuel-carbon calculation reconciled to the natural-gas record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming high-speed-steel bar or rod output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `worldsteel-lci-methodology-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | Shared equipment and site utilities | Avoid allocation by submetering or subdividing reheating, hot-working, treatment and finishing operations. If shared-meter allocation is unavoidable, use a documented causal driver such as furnace occupancy, machine time or processed mass and test sensitivity for materially different grades. | `worldsteel-lci-methodology-2017` |
| `al_internal_recirculation` | Internally returned steel or scale-bearing material | Record internal recovery as output from the generating operation and input to the receiving operation, then report the net boundary-crossing balance; do not claim an external avoided burden for internal circulation. | `worldsteel-lci-methodology-2017` |
| `al_exported_scale` | Mill scale exported for recovery | Treat exported mill scale as a co-product only when a documented market use and substitution function exist. Apply transparent system expansion for the identified substituted product; otherwise retain it as waste and include its treatment without an avoided-product credit. | `worldsteel-lci-methodology-2017` |
| `al_recycling_consistency` | Upstream billet and downstream study | Preserve and disclose the billet dataset's recycling convention. Do not add a second recycled-content burden or end-of-life credit inside this billet-to-gate foreground process. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `billet_to_bar_rod` | Billet, product, sodium hydroxide, mill scale and spent alkaline liquor | Calibrated scale tickets, batch sheets, purchase records, bath records and storage inventory | lot_id; grade; input_mass_kg; output_mass_kg; solution_mass_kg; concentration_mass_fraction; waste_mass_kg; opening_inventory_kg; closing_inventory_kg | Reconcile physical receipts, issues, returns, product weights and waste dispatches by grade and lot | kg | Each lot; aggregate monthly and annually | Prefer one representative year; justify any shorter period and cover all declared operating modes | Producing site and named foreground line | Sum boundary-crossing quantities plus closing inventory minus opening inventory, assign only documented shared quantities, then divide by conforming product mass | Scale calibration; stock reconciliation; certificates; bath analyses; waste transfer records; exception log |
| `cp_gas_metering` | `billet_to_bar_rod` | Natural gas and industrial oxygen | Calibrated furnace or supply meters and supplier statements | timestamp; meter_id; gas_identity; volume; temperature; pressure; wet_dry_basis; product_lot; furnace_status | Read meters at lot or campaign boundaries and reconcile to supplier totals; normalize to one declared volume reference condition | m3 | Continuous or each shift; reconcile monthly | Same representative period as product output and all applicable furnace modes | Producing site and applicable furnaces | Sum normalized gas volume assigned by measured furnace operation or documented causal allocation, then divide by conforming product mass | Meter calibration; supplier reconciliation; furnace log; allocation rationale |
| `cp_energy_metering` | `billet_to_bar_rod` | Purchased electricity | Revenue, submeter or equipment-meter records | timestamp; meter_id; kWh; voltage_level; supplier_or_grid; product_lot; equipment_status | Prefer process submeters; otherwise reconcile site purchases and allocate with documented equipment load, time or processed mass | kWh and MJ | Continuous or each shift; reconcile monthly | Same representative period as product output and all declared route states | Producing site and foreground equipment | Subtract documented exports and out-of-scope uses, convert kWh to MJ, allocate only residual shared use, then divide by conforming product mass | Meter calibration; invoice reconciliation; load study; grid or supplier evidence |
| `cp_water_metering` | `billet_to_bar_rod` | Process-water make-up | Calibrated make-up meters, tank records and water-balance records | timestamp; meter_id; source; volume_or_mass; temperature; density; recycle_flow; discharge_flow; product_lot | Meter net water crossing the foreground boundary and reconcile make-up, recycle, evaporation and discharge | kg | Continuous or daily; reconcile monthly | Same representative period as product output, including shutdown and maintenance effects where material | Producing site and descaling or cooling circuits | Convert volume using documented density when needed, subtract out-of-scope transfers, and divide net make-up by conforming product mass | Meter calibration; annual water balance; maintenance log; reconciliation variance |
| `cp_direct_air_emissions` | `billet_to_bar_rod` | Direct fossil carbon dioxide | Stack monitoring, regulated emissions report or fuel-carbon inventory | source_id; timestamp; fossil_CO2_kg; measurement_method; natural_gas_volume; carbon_factor; oxidation_factor; product_lot | Use source-specific monitoring where available; otherwise retain a transparent fuel-carbon calculation and reconcile it to the gas meter | kg | Continuous, campaign or reporting-period basis; reconcile annually | Same representative period and foreground combustion sources as the natural-gas record | Producing site and foreground furnaces only | Sum direct fossil CO2 from included sources, exclude upstream electricity and off-site supply emissions, then divide by conforming product mass | Monitoring QA/QC; calculation workbook; fuel certificate; regulatory or inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | All mass-based inventory rows | Normalized amount = attributed boundary-crossing row mass / conforming reference-product mass | attributed row mass; conforming product mass | kg per 1 kg reference product | `worldsteel-lci-methodology-2017` |
| `calc_active_naoh` | `dr_sodium_hydroxide` | Active NaOH mass = delivered solution mass × measured NaOH mass fraction + opening active inventory − closing active inventory | solution mass; concentration; opening bath inventory; closing bath inventory | kg active NaOH per 1 kg reference product |  |
| `calc_waste_liquor_mass` | `wr_waste_alkaline_liquor` | Wet liquor mass = measured mass, or discharged volume × measured density; reconcile the result with bath make-up and inventory change | waste mass or volume; density; opening and closing bath inventory | kg wet liquor per 1 kg reference product | `eu-2022-2110-ferrous-metals-processing` |
| `calc_energy_conversion` | `dr_electricity` | Electrical energy in MJ = metered kWh × 3.6 | metered electricity in kWh | MJ per 1 kg reference product |  |
| `calc_metallic_balance` | Steel-bearing input and outputs | Reconcile high-speed-steel billet mass with conforming product, retained work in process, internal return, mill scale and other separately identified steel-bearing outputs; investigate unexplained loss rather than assigning it to a generic waste flow | billet; product; work in process; internal return; mill scale; other identified steel-bearing outputs | steel-bearing mass-balance closure and variance | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and billet | Retain grade certificates, order specifications and lot traceability that demonstrate high-speed-steel identity and distinguish straight bar from rod/coil, dimensions, heat-treatment state and surface condition. | Mill certificate; purchase specification; product order; lot genealogy |
| `dq_technology_geography` | Foreground and upstream data | Declare the actual hot-working and finishing technology and production geography. Use geographically and technologically representative upstream billet, electricity, gas, oxygen, water and treatment datasets. | Process map; supplier records; dataset metadata; representativeness review |
| `dq_temporal_coverage` | Foreground records | Use a representative year where practical. If less than six months is used, justify it and demonstrate coverage of grade mix, campaign changes, shutdowns and all route-conditioned operations. | Dated records; production schedule; coverage assessment; exception log |
| `dq_completeness` | Inventory | Reconcile meters and material records to the same site, period and product denominator. Separately report each included atomic exchange and document exclusions; do not hide unresolved loss in a generic waste, utility or emission row. | Reconciliation workbook; mass and energy balances; exclusion register; meter map |
| `dq_conditional_routes` | Oxygen enrichment and alkaline cleaning | A conditional row may be marked not applicable only when furnace, bath and production records demonstrate that the operation did not occur for the represented product and period. | Furnace specification and logs; bath records; routing sheets |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | Reference product | Fail conformance if grade evidence does not establish high-speed steel, if product form is not bar or rod, or if the reference flow lacks grade, form, dimensions, delivery condition, site, period or net-mass qualifiers. | `un-cpc-3-0-structure-2025` |
| `val_reference_amount` | Reference flow | Verify that the normalized conforming product output is exactly 1 kg and that packaging mass is excluded. |  |
| `val_boundary` | Foreground system | Verify that the dataset begins with a grade-compatible high-speed-steel billet, includes every actual producer-applied route step and direct foreground exchange, and does not double-count upstream billet, electricity-supply or downstream fabrication burdens. | `worldsteel-lci-methodology-2017` |
| `val_mass_balance` | Steel-bearing inventory | Require a documented steel-bearing mass balance and investigation of unexplained variance; mill scale, internal returns, work in process and any other real steel-bearing output shall be recorded separately. | `worldsteel-lci-methodology-2017` |
| `val_meter_reconciliation` | Energy, gases and water | Verify meter calibration, common temporal coverage, supplier or site reconciliation, conversion factors and the allocation of shared use to the declared product. | `eu-2022-2110-ferrous-metals-processing`; `worldsteel-lci-methodology-2017` |
| `val_conditional_exchange` | Oxygen, sodium hydroxide and waste alkaline liquor | Verify that each conditional exchange is included only when its specific operation occurred and that input, inventory-change and waste records are mutually consistent. | `eu-2022-2110-ferrous-metals-processing` |
| `val_uuid_integrity` | UUID-bearing rows | Verify every UUID by direct public state-100 read for semantic identity, flow type, property and unit group. Reject proxies and keep the three declared unresolved UUID rows empty until exact records are confirmed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate foreground production dataset that may become a secondary_dataset or background_dataset after independent methodology and translation review |
| downstream_use | Cradle-to-gate models for high-speed-steel bars or rods and downstream products that consume the declared grade, form and delivery condition |
| allowed_use | Product systems whose billet input, hot-working route, finishing state, geography, period, allocation convention and required qualifiers are compatible with this dataset |
| excluded_use | Generic non-alloy or ordinary alloy steel; silico-manganese steel; wire; flat products; finished tools; a different grade or delivery condition without documented representativeness; use as a cradle-to-gate dataset when the upstream billet is absent |
| required_metadata | canonical PCR id; product grade and specification; straight bar or rod/coil form; dimensions and tolerances; delivery and surface condition; upstream billet dataset and recycling convention; hot-working and finishing route; site and geography; reference period; data owners; allocation and substitution choices; UUID resolution status |
| required_quality_disclosure | Record coverage and completeness; calibration and reconciliation results; mass-balance variance; submetering and shared-use allocation; upstream-data representativeness; conditional-route applicability; internal recycling; mill-scale destination; waste treatment; direct-emission method; unresolved UUIDs and range evidence needs |
| update_trigger | New product grade family or forming route; changed billet source, furnace fuel, electricity supply, oxygen enrichment, water circuit, cleaning chemistry, waste treatment or allocation convention; material equipment change; expired representativeness period; resolution of a UUID or range-evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 Structure, 30 June 2025, code 41271, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official classification identity and distinction from neighboring steel-product subclasses |
| `eu-2022-2110-ferrous-metals-processing` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2110 of 11 October 2022 establishing BAT conclusions for the ferrous metals processing industry, ELI http://data.europa.eu/eli/dec_impl/2022/2110/oj (verified 2026-09-04) | Hot-rolling boundary, bar and rod rolling, route-conditioned surface treatment, water accounting, material efficiency and validation |
| `worldsteel-lci-methodology-2017` | Handbook (`handbook`) | World Steel Association, Life Cycle Inventory Methodology Report, 2017, https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (verified 2026-09-04) | Steel-product system boundary, bar and rod process chain, technology/geography/time representativeness, inventory completeness, recycling and co-product treatment |
