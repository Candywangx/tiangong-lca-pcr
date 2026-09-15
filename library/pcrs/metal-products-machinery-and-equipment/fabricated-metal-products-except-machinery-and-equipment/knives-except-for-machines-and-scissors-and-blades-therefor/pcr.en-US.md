---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.knives-except-for-machines-and-scissors-and-blades-therefor
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Knives (except for machines) and scissors, and blades therefor

## 1. Scope and Applicability

This PCR governs foreground data packages for the factory-gate production of knives other than machine knives, scissors, and finished or replacement blades made for those products. It covers complete products and blades sold separately, including stamping or cutting, route-specific forging, heat treatment, grinding, sharpening, polishing, cleaning, route-specific handle or pivot assembly, inspection, and packaging that crosses the factory gate.

Machine knives and cutting blades, saw blades, razors and razor blades, spoons, forks and similar flatware, manicure or pedicure instruments, upstream steelmaking, distribution, use, maintenance, and end-of-life are outside the default boundary. A data package shall identify whether it represents a knife, scissors, or blade-only product and shall not aggregate materially different products unless their mass and foreground burdens remain separately traceable.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.knives-except-for-machines-and-scissors-and-blades-therefor |
| classification_refs | CPC 3.0: 42913 |
| covered_products | Non-machine knives; scissors; finished knife blades; finished scissors blades; replacement blades made for these products |
| excluded_products | Machine knives and machine cutting blades; saw blades; razors and razor blades; table flatware classified separately; manicure or pedicure instruments; manufacturing services on customer-owned inputs |
| representative_product | A saleable finished knife, pair of scissors, or blade-only product that meets the declared dimensional, material, hardness, sharpness, finish, and assembly specification |
| production_route | Blade-grade steel receipt; blanking, cutting, or conditional forging; heat treatment; grinding, sharpening, polishing, and cleaning; conditional handle or pivot assembly; inspection; conditional packaging; factory-gate release |
| market_state | Finished, inspected product or replacement blade at the factory gate, with included packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished non-machine knife, pair of scissors, or corresponding blade that provides the declared cutting function |
| How much | 1 kg of saleable product at the factory gate |
| How well | Conforming to the declared product type, alloy, hardness or heat-treatment state, dimensions, edge geometry, sharpness test, surface finish, assembly configuration, and defect acceptance criteria |
| How long or cycle | One factory-gate product delivery; service life is reported as a qualifier when the dataset is used for functional comparisons |
| reference_flow_link | reference_product_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Knives (except for machines) and scissors, and blades therefor `b0a74999-fb7f-40ee-9dbe-41016e49a00e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form: knife, scissors, or blade-only; product mass and item count; blade alloy and grade; heat-treatment state and declared hardness method/result; dimensions and edge geometry; sharpness or cutting-performance test; surface finish or coating; handle and pivot materials when present; packaging included; manufacturing geography; technology and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net saleable product mass at factory gate. Measure packaging separately and do not include packaging mass in the 1 kg reference product. |
| `item_mass_conversion` | Production records available only as item counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using a product-specific mean mass from a documented representative sample; retain count, sample size, measured masses, and sampling period. |
| `electricity_energy_conversion` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered kWh record and convert to MJ using 1 kWh = 3.6 MJ; do not mix purchased electricity with fuel energy. |
| `gas_volume_conditions` | Natural-gas and industrial-oxygen rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report the metered volume and the reference temperature and pressure; convert supplier-normalized volumes only with the documented supplier or meter convention. |
| `solution_active_mass` | Sodium-hydroxide solution | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report delivered solution mass and concentration separately; the selected flow amount is dry sodium-hydroxide mass calculated from those foreground records. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Foreground manufacturing | Include directly controlled material receipt, blank forming, conditional forging or thermal cutting, heat treatment, grinding, sharpening, polishing, cleaning, conditional assembly, inspection, and included packaging through factory-gate release. | `eu-jrc-sf-bref`; `us-epa-metal-finishing-1992` |
| `boundary_upstream_inputs` | Purchased products and energy | Keep each purchased product or energy carrier as an explicit input and link it to an upstream dataset matching material grade or composition, product state, geography, technology, and delivery boundary. |  |
| `boundary_waste_and_emissions` | Foreground releases | Record steel scrap, captured grinding dust, spent abrasive, rinse wastewater, and direct combustion emissions as separate exchanges when generated; do not hide them in a yield factor or treatment service. | `us-epa-metal-finishing-1992` |
| `boundary_default_exclusions` | Outside default system | Exclude capital goods, employee travel, distribution after the factory gate, use, maintenance, and end-of-life unless the study goal explicitly extends the system and reports those additions separately. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Blade-grade steel sheet, strip, or documented semifinished blank and all purchased components are received at the reporting facility; supplier state, alloy, dimensions, and included upstream datasets are declared. |
| starting_condition_role | Factory-gate foreground entry point for blade forming and finishing |
| product_classification_scope | CPC 3.0 subclass 42913 as mapping context; canonical scope is limited by the covered and excluded product descriptions above |
| recursive_input_rule | A purchased unfinished or finished product within this same canonical category remains an explicit product input; do not recursively apply this PCR to manufacture it inside the same foreground package. |
| upstream_dataset_requirement | Every purchased material, component, energy carrier, and packaging flow requires a compatible upstream dataset or a disclosed data gap; proxy substitutions require justification and sensitivity review. |
| disclosure | Declare product form, blade material, received stock state, blank-forming route, heat source, finishing route, wet or dry cleaning, assembly configuration, packaging inclusion, geography, technology, reporting period, and all foreground exclusions. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_preparation_and_blanking` | Stock preparation and blank forming | required | Always; select only the blade-material and cutting exchanges actually used | Foreground blade-stock receipt, cutting, stamping, or blank preparation | kg accepted blank leaving the process |
| `heat_treatment` | Heat treatment | required | Always; record the actual gas-fired, electric, or combined route | Foreground hardening, tempering, and route-specific thermal treatment | kg heat-treated blank |
| `grinding_polishing_and_cleaning` | Grinding, sharpening, polishing, and cleaning | required | Always; water and alkali rows apply only to wet or aqueous routes | Foreground edge formation, surface finishing, and cleaning | kg finished blade component |
| `handle_and_pivot_assembly` | Handle and pivot assembly | conditional | Include for complete products with molded polypropylene handles or other assembled components; exclude for blade-only products | Foreground component manufacture and assembly | kg assembled product |
| `packaging` | Packaging | conditional | Include only packaging supplied with the factory-gate product | Foreground packing | kg packed product, with product and packaging masses separate |
| `final_inspection_and_release` | Final inspection and factory-gate release | required | Always | Foreground acceptance and quantitative reference | kg accepted saleable product |

### Process: Stock preparation and blank forming (`stock_preparation_and_blanking`)

#### Inputs

##### Product flows

###### Stainless blade-stock sheet (`blade_stainless_steel_sheet`)

Record one declared stainless-steel grade only when stainless sheet or strip is the blade stock. The UUID remains unresolved because no exact state-100 stainless-steel sheet candidate passed the identity audit.

- Selected flow: Stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Weighed received stainless blade stock consumed by accepted and rejected blanks, net of documented returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_and_blanking_records`
- Sources:

###### Carbon-steel blade-stock sheet (`blade_carbon_steel_sheet`)

Record one declared carbon-steel grade only when carbon-steel sheet or strip is the blade stock. Do not combine this row with stainless stock.

- Selected flow: Carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Weighed received carbon-steel blade stock consumed by accepted and rejected blanks, net of documented returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_and_blanking_records`
- Sources:

###### Blanking electricity (`blanking_electricity`)

Record electricity metered or defensibly allocated to stock preparation, stamping, cutting, trimming, and route-specific forging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity for the process, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted blank leaving the process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_and_blanking_records`
- Sources:

###### Laser-cutting oxygen (`blanking_oxygen`)

Record oxygen only when it crosses the boundary as purchased industrial oxygen for laser or thermal cutting; exclude compressed air and oxygen not consumed by the declared route.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or supplier-recorded industrial oxygen used for accepted and rejected blanks
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted blank leaving the process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_and_blanking_records`
- Sources:

#### Outputs

##### Waste flows

###### Post-industrial steel cutting scrap (`post_industrial_steel_scrap`)

Record segregated steel skeletons, trim, offcuts, and rejected blanks that leave foreground control as scrap; declare alloy grade and destination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap leaving the process, net of documented internal remelting or direct reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted blank leaving the process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_and_blanking_records`
- Sources:

### Process: Heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Natural gas for heat treatment (`heat_treatment_natural_gas`)

Record natural gas only for a gas-fired furnace or directly fired auxiliary equipment within the foreground heat-treatment process.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg heat-treated blank
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `eu-jrc-sf-bref`

###### Electricity for heat treatment (`heat_treatment_electricity`)

Record electricity for electric furnaces, controls, circulation, and directly attributable heat-treatment auxiliaries. This row may coexist with gas when both are consumed.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg heat-treated blank
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `eu-jrc-sf-bref`

#### Outputs

##### Elementary flows

###### Direct fossil carbon dioxide from heat treatment (`heat_treatment_fossil_co2`)

Record only direct fossil CO2 from foreground natural-gas combustion. Do not copy upstream electricity emissions into this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Directly measured emission or calculated from collected fuel quantity, supplier composition or site carbon content, and documented oxidation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg heat-treated blank
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_records`
- Sources:

### Process: Grinding, sharpening, polishing, and cleaning (`grinding_polishing_and_cleaning`)

#### Inputs

##### Product flows

###### White fused alumina abrasive (`white_fused_alumina`)

Record purchased white fused alumina consumed as grinding or polishing abrasive; declare grit, bond or carrier, and whether recovered media re-enters the process.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass / kg
- Amount rule: Purchased abrasive issued to the process minus measured unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished blade component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-metal-finishing-1992`

###### Finishing electricity (`finishing_electricity`)

Record electricity for grinding, sharpening, polishing, dust collection, wet-process circulation, and directly attributable cleaning equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered process electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished blade component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-metal-finishing-1992`

###### Wet-finishing process water (`finishing_process_water`)

Record water supplied for wet grinding, aqueous cleaning, and rinsing only when those operations occur; do not include once-through cooling water in this row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered water entering wet finishing, cleaning, and rinse stages, with reused internal water counted once at boundary entry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished blade component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-metal-finishing-1992`

###### Sodium hydroxide for aqueous cleaning (`finishing_sodium_hydroxide`)

Record dry sodium-hydroxide mass only when an alkaline cleaning bath containing sodium hydroxide is used.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Delivered solution mass multiplied by recorded sodium-hydroxide mass fraction, less documented unused return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished blade component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-metal-finishing-1992`

#### Outputs

##### Waste flows

###### Captured steel-bearing grinding dust (`steel_grinding_dust`)

Record captured dry dust containing steel removed during grinding and sharpening. Keep this separate from fugitive particulate emissions and spent abrasive.

- Selected flow: Steel-bearing grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed captured dust leaving foreground control, corrected only by a documented moisture measurement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished blade component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-metal-finishing-1992`

###### Spent aluminium-oxide abrasive (`spent_aluminium_oxide_abrasive`)

Record spent aluminium-oxide grinding or polishing media that leaves foreground control; do not combine it with captured steel dust.

- Selected flow: Spent aluminium-oxide abrasive
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent aluminium-oxide abrasive leaving the process, net of measured internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished blade component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-metal-finishing-1992`

###### Metal-finishing rinse wastewater (`metal_finishing_rinse_wastewater`)

Record wastewater discharged from wet grinding, cleaning, or rinsing as one aqueous waste flow, with flow quantity and composition retained in the foreground record.

- Selected flow: Metal-finishing rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass or volume converted using measured density; subtract only documented water internally reused before the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished blade component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-metal-finishing-1992`

### Process: Handle and pivot assembly (`handle_and_pivot_assembly`)

#### Inputs

##### Product flows

###### Polypropylene handle resin (`polypropylene_handle_resin`)

Record polypropylene granulate only when it is molded into a handle within the foreground. Purchased finished handles require their own concrete product row in the resulting data package and are not represented by this resin row.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Weighed granulate issued to handle molding minus measured clean regrind returned internally
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

### Process: Packaging (`packaging`)

#### Inputs

##### Product flows

###### Corrugated board box (`corrugated_board_box`)

Record corrugated board boxes only when they accompany the product across the factory gate; dimensions, board grade, and recycled content remain required foreground qualifiers.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Weighed boxes consumed for the declared reference-product shipments, net of unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

### Process: Final inspection and factory-gate release (`final_inspection_and_release`)

#### Outputs

##### Product flows

###### Accepted reference product (`reference_product_output`)

Record only accepted saleable product at factory gate. Rejected products remain in the process records and their material destinations are reported separately.

- Selected flow: Knives (except for machines) and scissors, and blades therefor `b0a74999-fb7f-40ee-9dbe-41016e49a00e`
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass of accepted saleable products, excluding packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared lines, furnaces, finishing equipment, and assembly | Subdivide by product, batch, and process and use directly metered or time-resolved records before applying allocation. |  |
| `allocation_physical_fallback` | Residual shared foreground burdens | If subdivision is not practicable, use a documented physical relationship that reflects causality, such as machine time, furnace occupancy, or accepted product mass; justify the choice and report a sensitivity case when an alternative could change conclusions. |  |
| `allocation_scrap_no_hidden_credit` | Post-industrial steel scrap and other wastes | Report waste mass and destination explicitly. Do not subtract a recycling credit or avoided burden inside the foreground inventory; any recycling allocation beyond the factory gate belongs to the declared downstream system model. |  |
| `allocation_rework` | Rework and rejected product | Assign rework energy and material losses to the product batch that caused them; do not count internally reworked material as both waste output and new external input. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock_and_blanking_records` | `stock_preparation_and_blanking` | Blade stock, electricity, oxygen, and steel scrap | Weigh tickets, stock issue/return records, meters, supplier invoices, and scrap dispatch records | alloy grade; stock form; opening stock; receipts; issues; returns; accepted blank mass; rejected blank mass; electricity kWh; oxygen m3 and reference conditions; scrap mass and destination | Reconcile stock ledger and calibrated meters to batch and accepted blank output | kg; kWh; m3 | Per batch with monthly reconciliation | At least one representative reporting year or the declared production campaign | All foreground blank-forming equipment and attributable auxiliaries | Sum external inputs and outputs, remove internal returns, convert electricity to MJ, and normalize to accepted blank mass | Calibration records; stock reconciliation; supplier documents; scrap receipts; batch traceability |
| `cp_heat_treatment_records` | `heat_treatment` | Furnace energy and direct fossil CO2 | Gas and electricity meters, furnace logs, batch records, and fuel composition records | batch mass; alloy; treatment schedule; furnace id; gas volume and reference conditions; electricity kWh; fuel carbon content or supplier composition; oxidation basis | Read dedicated meters or allocate shared meters by documented furnace occupancy and load | kg; m3; kWh; kg CO2 | Per furnace batch with monthly meter reconciliation | At least one representative reporting year or the declared campaign | All foreground heat-treatment furnaces and directly attributable auxiliaries | Convert electricity to MJ; normalize fuel and energy to heat-treated mass; calculate CO2 only with documented collected factors | Meter calibration; furnace logs; supplier fuel specification; allocation worksheet |
| `cp_finishing_records` | `grinding_polishing_and_cleaning` | Abrasive, electricity, water, sodium hydroxide, dust, spent abrasive, and wastewater | Material issue records, electricity and water meters, bath make-up logs, waste weights, and discharge meters | abrasive issued and returned; electricity kWh; water input; sodium-hydroxide solution mass and concentration; dust mass and moisture; spent abrasive mass; wastewater volume, density, and composition | Reconcile material issues, meters, bath logs, and dispatched waste to finished blade mass | kg; kWh; m3 | Per batch for materials and wastes; continuous or shift readings for meters; monthly reconciliation | At least one representative reporting year or the declared campaign | All foreground grinding, polishing, cleaning, rinse, and collection equipment | Count boundary entries once, subtract documented internal reuse, convert units, and normalize to finished blade mass | Meter calibration; bath analysis; waste manifests; laboratory results; mass-balance check |
| `cp_assembly_records` | `handle_and_pivot_assembly` | Polypropylene handle resin | Material issue/return records and production batch records | resin grade; additives; recycled content; issued mass; clean regrind return; reject mass; assembled product mass | Weigh resin issued and internal clean return by product batch | kg | Per batch with monthly stock reconciliation | At least one representative reporting year or the declared campaign | Foreground handle molding and assembly | Net external resin input normalized to accepted assembled product mass | Scale calibration; resin lot traceability; stock reconciliation |
| `cp_packaging_records` | `packaging` | Corrugated board box | Packaging purchase, stock issue, return, and shipment records | box specification; board grade; recycled content; opening stock; receipts; issues; unused returns; shipment product mass | Reconcile packaging stock to shipments of the declared product | kg | Per shipment with monthly reconciliation | At least one representative reporting year or the declared campaign | Packaging supplied across the factory gate | Net box mass normalized to unpackaged accepted product mass | Supplier specification; stock reconciliation; shipment records |
| `cp_release_records` | `final_inspection_and_release` | Accepted reference product | Calibrated scales, item counts, inspection logs, and release records | product form; product code; item count; net product mass; sample mean item mass if used; alloy; hardness result; edge test; dimensions; finish; packaging mass; accepted and rejected quantities | Weigh accepted product net of packaging and link results to inspection acceptance | kg; item | Per released batch | At least one representative reporting year or the declared campaign | All declared products released from the reporting facility | Sum accepted net product mass and normalize every inventory exchange to 1 kg | Scale calibration; inspection method; batch release approval; count-to-mass sampling record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | Normalized amount = net exchange amount divided by accepted net reference-product mass; multiply by 1 kg. | Net exchange amount; accepted net reference-product mass | Exchange amount per 1 kg reference product |  |
| `calc_item_to_mass` | Count-based product records | Product mass = accepted item count multiplied by the documented product-specific mean item mass. | Accepted item count; sampled item masses | kg accepted reference product |  |
| `calc_electricity_mj` | Electricity rows | Electricity in MJ = metered electricity in kWh multiplied by 3.6 MJ/kWh. | Metered kWh | MJ electricity |  |
| `calc_sodium_hydroxide_dry_mass` | Sodium-hydroxide row | Dry sodium-hydroxide mass = delivered solution mass multiplied by measured or supplier-declared sodium-hydroxide mass fraction. | Solution mass; sodium-hydroxide mass fraction | kg sodium hydroxide | `us-epa-metal-finishing-1992` |
| `calc_direct_fossil_co2` | Direct fossil carbon dioxide | Calculate only when direct measurement is unavailable: fossil CO2 = collected fuel quantity multiplied by documented site or supplier carbon content and oxidation term, with all unit conversions retained. | Natural-gas quantity; reference conditions; supplier composition or site carbon content; oxidation record | kg direct fossil CO2 |  |
| `calc_steel_mass_balance` | Blade-stock transformation | On a consistent dry-metal basis, reconcile external steel input with accepted product metal, steel scrap, captured steel-bearing dust, rejected work in progress, and stock change; investigate rather than force-close unexplained differences. | Steel inputs; product metal mass; steel scrap; captured dust; rejected work in progress; stock change | Steel mass-balance residual | `us-epa-metal-finishing-1992` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Preserve product form, product code, blade alloy, heat-treatment state, dimensions, edge geometry, finish, handle and pivot configuration, and packaging inclusion for every aggregated batch. | Product specification, bill of materials, batch traveller, and release record |
| `dq_meter_and_scale_control` | Measured mass, electricity, gas, oxygen, water, and wastewater | Use calibrated or verified devices; record calibration status, reading interval, allocation method for shared meters, and missing-data treatment. | Calibration certificate, meter log, and allocation worksheet |
| `dq_temporal_representativeness` | All foreground data | Cover at least one representative reporting year or a declared campaign that captures planned product and operating variability; disclose shutdowns, abnormal batches, and substitutions. | Production calendar, batch list, and representativeness assessment |
| `dq_completeness` | Material, energy, waste, and direct-emission inventory | Reconcile purchased inputs, internal returns, accepted output, rejects, and dispatched wastes; document every excluded exchange and its reason without using an unreported cut-off. | Stock reconciliation, steel mass balance, waste records, and exclusion register |
| `dq_supplier_and_background_match` | Upstream datasets | Match material grade or composition, product state, geography, technology, and delivery boundary; disclose proxy use and its influence. | Supplier specification, dataset metadata, and proxy sensitivity note |
| `dq_wet_finishing_composition` | Cleaning baths and wastewater | Retain bath concentration, water reuse, discharge quantity, density basis, and measured wastewater composition needed to select treatment and emission datasets. | Bath log, laboratory report, discharge meter, and waste manifest |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm that the product is within the covered non-machine knife, scissors, or blade boundary and that all required qualifiers are present. | `un-cpc-3-0-structure-2025`; `un-cpc-1-1-chinese-2002` |
| `validate_reference_mass` | Quantitative reference | Confirm that accepted net product mass excluding packaging equals the declared reference amount and that count-to-mass conversion, if used, is product specific. |  |
| `validate_route_applicability` | Conditional rows and processes | Confirm that each conditional exchange is included only when the declared technology, material, wet process, assembly, or packaging route applies; absent rows require an explicit not-applicable statement in the produced data package. |  |
| `validate_atomic_inventory` | Process inventory | Confirm that every exchange is one physical, chemical, waste, or energy flow and that electricity, fuels, materials, wastes, wastewater, and emissions are not combined into umbrella rows. |  |
| `validate_uuid_semantics` | UUID-bearing flows | Confirm state-100 identity, flow type, classification, property, unit group, product state, geography, technology, and general comment before publication; unresolved UUID rows remain explicit review items. |  |
| `validate_steel_balance` | Steel transformation | Review the steel mass-balance residual against measurement uncertainty and investigate unexplained differences; do not force the balance by changing measured waste or output. | `us-epa-metal-finishing-1992` |
| `validate_no_upstream_double_count` | Electricity and direct emissions | Confirm that direct fossil CO2 includes only foreground combustion and that upstream electricity or fuel emissions remain in their supplying datasets. |  |
| `validate_allocation_and_disclosure` | Shared operations and wastes | Confirm subdivision was attempted first, residual allocation follows a justified physical relationship, waste destinations are explicit, and recycling credits are not hidden in foreground amounts. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared knife, scissors, or corresponding blade product |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product carbon-footprint or LCA models that require factory-gate production of a product matching the declared form, alloy, performance, assembly, geography, technology, period, and packaging scope |
| excluded_use | Machine knives, saw blades, razors, flatware, unidentified mixed products, service-life comparisons without equivalent performance and lifetime evidence, or datasets that omit material grade and route |
| required_metadata | Canonical PCR id; product form and code; item count and net mass; alloy and grade; received stock state; forming route; heat source and treatment state; dimensions; hardness and test method; edge and sharpness test; surface finish or coating; handle and pivot materials; packaging scope; geography; technology; reporting period; allocation; exclusions; upstream dataset identities |
| required_quality_disclosure | Temporal and technological representativeness; meter and scale control; shared-meter allocation; product aggregation; steel mass-balance residual; wet-finishing composition; unresolved UUIDs; missing-data treatment; supplier/background match; waste destinations; proxy sensitivity |
| update_trigger | Change in product boundary, alloy family, forming or heat-treatment technology, finishing or cleaning route, handle system, packaging scope, geography, allocation, upstream dataset selection, or a foreground change material to reported results |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Current product-classification identity and hierarchy |
| `un-cpc-1-1-chinese-2002` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, ST/ESA/STAT/SER.M/77/VER.1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-04) | Verified professional Chinese title terminology for the unchanged 42913 identity |
| `eu-jrc-sf-bref` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry (retrieved 2026-09-04) | Conditional forging, machining, finishing, and heat-treatment process decomposition |
| `us-epa-metal-finishing-1992` | official_guidance | U.S. Environmental Protection Agency, Guides to Pollution Prevention: The Metal Finishing Industry, EPA/625/R-92/011, October 1992, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30004KLA.TXT (retrieved 2026-09-04) | Grinding, polishing, chemical cleaning, rinse-water, spent-bath, abrasive-residue, and waste-stream separation rules |
