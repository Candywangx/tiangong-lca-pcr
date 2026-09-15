---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-copper-of-a-thickness-exceeding-0-15-mm
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Plates, sheets and strip, of copper, of a thickness exceeding 0.15 mm

## 1. Scope and Applicability

This PCR covers gate-to-gate fabrication of copper and copper-alloy plate, sheet, and strip whose finished thickness exceeds 0.15 mm. The declared starting condition is a received cast slab suitable for flat rolling. The foreground boundary includes slab preparation and preheating, hot rolling and surface milling when used, cold rolling when used, intermediate or final annealing, pickling and rinsing when used, drying, levelling, slitting or cutting, internal material recirculation, and on-site treatment directly serving these operations.

The PCR excludes copper foil at or below 0.15 mm, copper wire, rod, bar, profiles, tubes and fittings, coated or laminated products whose non-copper layer changes product identity, upstream mining, concentrating, smelting, refining and off-site slab casting, and downstream component manufacture, packaging, distribution, use and end-of-life. A dataset shall declare copper grade or alloy designation, plate/sheet/strip form, thickness, width, temper, surface finish, rolling and annealing route, pickling route, recycled-content claim if any, geography, technology, and reporting period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-copper-of-a-thickness-exceeding-0-15-mm |
| classification_refs | CPC 3.0: 41514 (exact classification context) |
| covered_products | Uncoated copper or copper-alloy plate, sheet, and strip with finished thickness greater than 0.15 mm, fabricated from a declared cast slab starting condition |
| excluded_products | Copper foil at or below 0.15 mm; wire, rod, bar, profiles, tubes and fittings; coated or laminated products with materially different identity; upstream refined copper and slab production; downstream fabricated components |
| representative_product | Red copper strip and sheet exceeding 0.15 mm, delivered at the fabrication-site gate in the declared temper and finish |
| production_route | Slab preheating and hot rolling, followed as applicable by milling, cold rolling, annealing, pickling/rinsing/drying, levelling, slitting or cutting |
| market_state | Saleable plate, sheet, or strip; unpackaged at the fabrication-site gate; alloy, temper, dimensions, surface condition and edge condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable copper or copper-alloy plate, sheet, or strip with finished thickness greater than 0.15 mm |
| How much | 1,000 kg net saleable product |
| How well | Conforming to the declared alloy/grade, thickness, width, temper, surface finish, flatness and edge condition |
| How long or cycle | One production campaign and reporting period sufficient to represent normal operation; no use-duration function is assigned |
| reference_flow_link | The measured net mass of conforming final product leaving the foreground fabrication boundary |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Red Copper Strip and Sheet `73ddbcd1-2f64-4406-93cd-0e9ba320cc1e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | copper grade or alloy designation; plate, sheet, or strip form; finished thickness greater than 0.15 mm; width and length or coil form; temper; surface finish; edge condition; rolling route; annealing atmosphere; pickling route; recycled-content accounting method; production geography; technology; reporting period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. The Tiangong reference product is representative; its UUID does not replace the required declaration of the actual alloy, dimensions, temper, and finish.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all solid copper-bearing inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry mass on calibrated scales; normalize all inventory results to 1,000 kg of conforming final product and exclude packaging mass. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity quantity and conversion basis; if the source record is in kWh, convert using 1 kWh = 3.6 MJ and retain both values. |
| `gas_volume` | Purchased gaseous natural gas and protective-atmosphere gases | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at declared reference temperature and pressure; retain supplier energy content or composition separately when used for calculations. |
| `water_and_solution_mass` | Process water, acids, alkali, rolling oil and liquid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; when volume is converted to mass, record density, concentration, temperature, source and calculation. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_at_cast_slab` | foreground_start | Begin the foreground system with a received cast copper or copper-alloy slab suitable for flat rolling; represent mining, refining and off-site slab production with upstream datasets. | `eu-jrc-nfm-bref-2017` |
| `sb_include_fabrication_operations` | foreground_operations | Include all site operations required to convert the received slab into conforming plate, sheet or strip, including applicable preheating, rolling, milling, annealing, pickling, rinsing, drying, levelling, slitting, cutting, internal recirculation and directly serving treatment. | `eu-jrc-nfm-bref-2017` |
| `sb_route_specific_exchanges` | conditional_operations | Include each gas, chemical, water and waste exchange only when the declared equipment and surface-treatment route uses or generates that exchange; do not substitute an aggregated utility or waste category. | `eu-jrc-nfm-bref-2017` |
| `sb_exclude_downstream_stages` | downstream_scope | Exclude packaging, distribution, component fabrication, use and end-of-life unless the study explicitly extends the system and reports those stages separately. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cast copper or copper-alloy slab received at the flat-product fabrication site, with grade/alloy, mass, dimensions, supplier, geography and upstream dataset declared |
| starting_condition_role | Upstream product input and physical starting point for gate-to-gate flat rolling and finishing |
| product_classification_scope | Copper and copper-alloy plate, sheet and strip with finished thickness greater than 0.15 mm; CPC 3.0 code 41514 is classification context, not canonical PCR identity |
| recursive_input_rule | If an input is already a plate, sheet or strip within this same product category, record its measured mass as a separate upstream product input with its own dataset and exclude that upstream quantity from the cast-slab row; do not recursively apply this foreground fabrication inventory to it. |
| upstream_dataset_requirement | Use supplier-specific or representative upstream datasets for the declared cast slab, purchased energy, gases, water and chemicals; disclose geography, technology, recycled-content accounting and data vintage. |
| disclosure | Declare starting-product grade/alloy and dimensions, whether hot rolling, cold rolling, annealing, pickling and on-site treatment occur, all internal recycling loops, exported scrap treatment, allocation choices, and any boundary extension. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `flat_copper_product_fabrication` | Flat copper product rolling, annealing and finishing | required | Always; individual route-specific exchanges are recorded only when the declared production route uses or generates them | Foreground conversion of received cast slab to conforming plate, sheet or strip | 1,000 kg net saleable product |

### Process: Flat copper product rolling, annealing and finishing (`flat_copper_product_fabrication`)

#### Inputs

##### Product flows

###### Cast copper slab feedstock (`cast_copper_slab_input`)

Record the received cast slab that enters preheating or rolling. The row is one solid copper-bearing feedstock exchange; grade/alloy and dimensions are mandatory qualifiers.

- Selected flow: Cast copper slab
- Flow property / unit: Mass / kg
- Amount rule: measured net mass accepted into the production campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-nfm-bref-2017`

###### Purchased electricity (`electricity_input`)

Record electricity crossing the site boundary for drives, rolling mills, furnaces, pumps, ventilation, treatment, and finishing; retain the site submetering allocation.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered purchased electricity allocated to the product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Gaseous natural gas (`natural_gas_input`)

Record purchased gaseous natural gas only when it is consumed by preheating, annealing, drying, protective-gas generation, or other directly serving foreground equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered foreground natural-gas volume at declared reference conditions; zero is permitted only with documented non-use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Gaseous nitrogen for annealing (`gaseous_nitrogen_input`)

Record purchased gaseous elemental nitrogen when the declared annealing route uses nitrogen alone or in a protective-gas mixture. Do not use this row for liquid nitrogen delivered to the site.

- Selected flow: Gaseous nitrogen
- Flow property / unit: Volume / m3
- Amount rule: metered purchased gaseous nitrogen at declared reference conditions; not applicable when the route does not use purchased nitrogen
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Gaseous hydrogen for annealing (`gaseous_hydrogen_input`)

Record purchased gaseous elemental hydrogen when the declared reducing-atmosphere annealing route uses it. Keep hydrogen generated on site and its precursor inputs in separately disclosed processes.

- Selected flow: Gaseous hydrogen
- Flow property / unit: Volume / m3
- Amount rule: metered purchased gaseous hydrogen at declared reference conditions; not applicable when the route does not use purchased hydrogen
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Cold-rolling oil make-up (`cold_rolling_oil_input`)

Record the mass of cold-rolling oil added to the rolling-oil circuit. Exclude internally recirculated oil from gross input and retain formulation and water content in supporting records.

- Selected flow: cold rolling oil `a9417245-6f45-4df3-8f04-227ed8a1be58`
- Flow property / unit: Mass / kg
- Amount rule: purchased or externally supplied cold-rolling-oil make-up issued to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water (`process_water_input`)

Record net process water supplied for roll cooling, applicable pickling and rinsing, brushing, and directly serving treatment after deducting documented closed-loop recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered net make-up process water crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sulfuric acid for pickling (`sulfuric_acid_input`)

Record sulfuric acid make-up when the declared surface-treatment route uses a sulfuric-acid pickling bath. Record delivered acid mass and concentration without including recycled bath solution as a new input.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: purchased sulfuric-acid solution mass and concentration issued to the foreground pickling route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sodium hydroxide for neutralization (`sodium_hydroxide_input`)

Record sodium hydroxide only when it is consumed by on-site neutralization of pickling or rinse streams directly serving the foreground line; retain delivered concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased sodium-hydroxide solution mass and concentration issued to directly serving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

No waste flow enters the declared foreground process. Any externally received secondary material belongs to the upstream slab-production dataset and shall not be merged into the cast-slab input.

##### Elementary flows

No elementary input is prescribed. If the site directly abstracts water or other natural resources, add each measured elementary input as a separate site-specific exchange.

#### Outputs

##### Product flows

###### Conforming copper plate, sheet, or strip (`final_product_output`)

Record only net saleable product that meets the declared thickness, alloy/grade, temper, dimensions, surface and edge specifications.

- Selected flow: Red Copper Strip and Sheet `73ddbcd1-2f64-4406-93cd-0e9ba320cc1e`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming product; the normalized result is exactly 1,000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `un-cpc-3-0-2025`

##### Waste flows

###### Copper edge trim and offcuts (`copper_offcuts_output`)

Record segregated metallic copper or copper-alloy edge trim and offcuts leaving the process for internal or external recovery. Retain alloy, contamination, destination and whether an internal loop was excluded from gross exchange totals.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of segregated copper trim and offcuts leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Spent cold-rolling oil (`spent_cold_rolling_oil_output`)

Record spent cold-rolling oil removed from the rolling-oil circuit and transferred for treatment or recovery. Do not combine it with cutting oil, solvent, or aqueous pickling waste.

- Selected flow: Spent cold-rolling oil
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from the circuit after deducting documented internal recovery and return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Spent sulfuric-acid copper pickling solution (`spent_sulfuric_acid_output`)

Record spent sulfuric-acid solution containing dissolved copper when it leaves the bath for on-site or off-site recovery or treatment. Do not combine it with rinse water, sludge, or another acid.

- Selected flow: Spent sulfuric-acid copper pickling solution
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass with acid concentration and dissolved-copper content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide_output`)

Record fossil carbon dioxide emitted directly from foreground combustion or carbon-bearing protective-gas generation. Exclude upstream emissions embodied in purchased electricity, fuels, gases, chemicals and slab datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from metered foreground fossil-fuel consumption and measured or supplier-validated carbon content, with oxidation assumptions disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable plate, sheet, or strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_co2_calculation`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_foreground_operations | Prefer process subdivision and direct metering for product campaigns, rolling lines, furnaces and treatment units before applying allocation. |  |
| `allocation_internal_recycling` | internal_copper_and_oil_loops | Exclude internally recirculated copper, rolling oil, acid and water from gross boundary exchanges; record only make-up inputs and materials that leave the foreground boundary, and disclose loop losses. | `eu-jrc-nfm-bref-2017` |
| `allocation_multiple_products` | multiple_saleable_products | When one campaign yields more than one saleable plate, sheet or strip product and direct subdivision is impracticable, allocate shared burdens by net conforming product mass unless a documented causal relation justifies another basis; disclose products, masses and sensitivity. |  |
| `allocation_exported_scrap` | exported_copper_scrap | Record exported copper trim and offcuts as a waste output at measured mass without an avoided-burden credit inside this gate-to-gate foreground dataset; any downstream recycling allocation or substitution belongs to the consuming lifecycle model and shall be disclosed. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `flat_copper_product_fabrication` | cast slab input and conforming product output | scale record and production order | timestamp; batch; alloy/grade; dimensions; gross mass; tare; net mass; product disposition | calibrated inbound/outbound or process scales reconciled to production orders | kg | each lot or coil | representative campaign and at least the declared reporting period | all in-scope lines and products | sum accepted slab and conforming product masses, then normalize to 1,000 kg product | calibration certificates; tare checks; order reconciliation; rejected-product log |
| `cp_energy_records` | `flat_copper_product_fabrication` | purchased electricity | revenue meter, submeter and invoice | meter id; opening/closing readings; kWh; line; equipment; operating hours; allocation key | reconcile site invoice with line and major-equipment submeters | kWh and MJ | continuous or shift readings, aggregated monthly | full reporting period including representative production and downtime | all directly serving rolling, furnace, pumping, ventilation, treatment and finishing equipment | subtract excluded loads and allocate residual shared loads by documented causal driver | meter calibration; invoice reconciliation; submeter coverage statement |
| `cp_gas_records` | `flat_copper_product_fabrication` | natural gas, gaseous nitrogen and gaseous hydrogen | flow meter and supplier record | gas identity; meter id; volume; temperature; pressure; energy content or purity; equipment; batch | reconcile calibrated line meters with supplier invoices and tank/pipe balance | m3 at declared reference conditions | continuous or per campaign | full reporting period | all in-scope furnaces, dryers and protective-atmosphere systems | sum each gas separately and normalize by conforming product mass | calibration; supplier certificate; reference-condition conversion; leak and balance check |
| `cp_consumable_records` | `flat_copper_product_fabrication` | cold-rolling oil, sulfuric acid and sodium hydroxide | inventory issue, purchase and bath-management record | chemical identity; formulation; concentration; issued mass; returned mass; tank level; line; batch | reconcile stores issues and tank changes with line logs; exclude documented recirculation | kg solution or product as delivered | each issue and bath change | full reporting period | all in-scope rolling, pickling and directly serving treatment systems | net external make-up by substance, normalized by conforming product mass | supplier specification; concentration analysis; tank calibration; stock reconciliation |
| `cp_water_records` | `flat_copper_product_fabrication` | net process water | water meter and water-balance record | source; meter id; volume or mass; density if converted; use area; recirculated volume; discharge | calibrated meters and documented water balance by use area | kg, with source volume retained | continuous or daily | full reporting period | roll cooling, surface treatment, rinsing, brushing and directly serving treatment | external make-up less documented out-of-scope use; do not subtract water leaving in waste unless required by the site balance | meter calibration; water-balance closure; density and conversion record |
| `cp_output_records` | `flat_copper_product_fabrication` | copper scrap, spent rolling oil and spent pickling solution | scale ticket, waste manifest and transfer analysis | identity; mass; alloy or composition; acid concentration; dissolved copper; oil/water content; destination; recovery route | weigh each container or transfer and reconcile with handler documentation | kg | each transfer | full reporting period | all in-scope generation points and storage | sum each waste separately after excluding documented internal return | scale calibration; manifest; laboratory analysis; receiver and recovery evidence |
| `cp_direct_co2_calculation` | `flat_copper_product_fabrication` | direct fossil carbon dioxide | fuel meter, supplier composition and calculation record | fuel volume or mass; carbon content; reference conditions; oxidation assumption; equipment; period | calculate fossil carbon dioxide from collected fuel carbon entering direct foreground combustion or gas generation | kg CO2 | monthly and reporting-period total | full reporting period | all in-scope direct fossil combustion and on-site carbon-bearing protective-gas generation | sum source-specific calculated emissions and normalize by conforming product mass | metering evidence; supplier certificate or measured carbon content; formula version; reviewer check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = campaign exchange amount × 1,000 / campaign net mass of conforming final product | campaign exchange amount; net conforming product mass | amount per 1,000 kg reference product |  |
| `calc_volume_to_mass` | water and delivered liquid solutions when only volume is measured | mass = measured volume × density at the recorded temperature; keep concentration on an as-delivered basis | volume; density; temperature; concentration | kg solution or water |  |
| `calc_direct_fossil_co2` | `fossil_carbon_dioxide_output` | convert measured fossil-fuel carbon entering direct foreground equipment to carbon dioxide using the documented carbon balance and oxidation assumption; do not include upstream supply-chain emissions | fuel quantity; carbon content; oxidation assumption; molecular mass conversion | kg direct fossil CO2 |  |
| `calc_copper_mass_balance` | copper-bearing inputs and outputs | reconcile cast-slab copper-bearing mass with conforming product, exported scrap, measured treatment residues and inventory change; investigate unexplained imbalance | slab mass; product mass; scrap mass; measured residues; work-in-process change | campaign copper-bearing mass-balance closure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and cast slab | Declare grade/alloy, form, thickness, dimensions, temper, surface, edge condition and product disposition; separate nonconforming and foil output. | production order; inspection certificate; material certificate; dimensional test record |
| `dq_temporal_coverage` | all foreground exchanges | Cover a representative production period that includes routine start-up, steady production, product changes, maintenance and downtime, or disclose and justify every exclusion. | reporting calendar; line logs; maintenance and downtime records |
| `dq_metering` | energy, gas, water and mass records | Use calibrated meters or reconciled supplier records; document estimation only for measured gaps and report its share. | calibration certificates; invoices; reconciliation and gap log |
| `dq_completeness` | process inventory | Account separately for every applicable atomic exchange in this PCR and disclose any confirmed non-applicable row; do not replace rows with aggregated utilities, chemicals, wastes or air emissions. | completed inventory checklist; non-applicability evidence; mass and energy reconciliation |
| `dq_route_disclosure` | system boundary | Declare hot/cold rolling, furnace fuel, annealing atmosphere, pickling chemistry, water recirculation, oil/acid recovery, scrap routing and directly serving treatment. | process flow diagram; equipment list; operating procedure; waste route documentation |
| `dq_uncertainty` | calculated and allocated values | Retain raw values, formulas, allocation keys, uncertainty or data-gap notes, and a reviewer-reproducible calculation workbook or equivalent record. | calculation file; version history; independent check |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference_flow | Fail validation if net product thickness is not greater than 0.15 mm or if grade/alloy, product form, dimensions, temper, surface finish, edge condition, geography, technology or reporting period is absent. | `un-cpc-3-0-2025` |
| `val_inventory_atomicity` | process_inventory | Fail validation when one inventory row combines multiple utilities, gases, chemicals, wastes or emissions, or when a selected flow is a collection or future selector instead of one concrete exchange. |  |
| `val_mass_normalization` | inventory_amounts | Recalculate every amount to 1,000 kg net conforming product and verify unit conversions, excluded packaging, and separate treatment of nonconforming product and scrap. |  |
| `val_route_completeness` | conditional_exchanges | For each gas, acid, alkali and waste row, require either a measured amount or documented route-specific non-applicability; verify declared equipment against process and purchasing records. | `eu-jrc-nfm-bref-2017` |
| `val_copper_balance` | copper_bearing_flows | Require a documented copper-bearing mass balance across slab input, conforming product, copper scrap, residues and inventory change; investigate and disclose unexplained imbalance. |  |
| `val_direct_co2` | direct_emissions | Verify direct fossil carbon dioxide against metered fossil-fuel carbon and exclude upstream emissions from purchased electricity, fuels, gases, chemicals and slab datasets. |  |
| `val_uuid_and_locale` | tiangong_identity | Require state-100 Tiangong UUIDs to match flow type, property and unit group, and require the official Tiangong Chinese baseName in the Chinese rendering; keep audited unresolved rows UUID-empty. |  |
| `val_source_and_range_status` | evidence | Verify every cited source against original text; treat all missing external ranges listed in manifest review metadata as unresolved evidence needs and never infer a range from one case or unverified metadata. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground dataset for flat copper and copper-alloy plate, sheet, or strip fabrication |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and resolution of product-specific upstream links and material evidence gaps |
| allowed_use | Product carbon footprint and LCA models that need a disclosed flat-copper-product fabrication stage consistent with the declared slab starting condition and product qualifiers |
| excluded_use | Copper mining, smelting, refining or slab-production datasets; foil at or below 0.15 mm; wire, rod, tube or fabricated component production; undisclosed cradle-to-gate claims; generic substitution across alloy, temper or surface routes without sensitivity review |
| required_metadata | canonical PCR id; product UUID; grade/alloy; product form; thickness; dimensions; temper; surface and edge condition; slab dataset; rolling/annealing/pickling route; geography; technology; reporting period; allocation; data sources; unresolved identity and range status |
| required_quality_disclosure | primary-data share; meter and scale coverage; temporal representativeness; missing-data estimation; mass-balance closure; allocation sensitivity; internal recycling treatment; upstream dataset choices; unresolved Tiangong identities and range-evidence needs |
| update_trigger | Change in alloy or product form, thickness side of the 0.15 mm boundary, rolling or furnace technology, annealing atmosphere, pickling chemistry, recovery route, site geography, allocation method, upstream slab dataset, or material change in measured energy, water, yield, waste or direct emissions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | dataset | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, [official CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv), retrieved 2026-09-04 | Original-text verification of CPC 41514 identity and the thickness boundary separating the product from copper foil |
| `eu-jrc-nfm-bref-2017` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries*, JRC107041, 2017, [official PDF](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf), retrieved 2026-09-04 | Original-text verification of cast slab/cake starting material; hot and cold rolling, annealing, pickling, rinsing, drying and finishing; rolling oil, protective gases, water, acid, alkali, scrap and recovery/treatment roles |
