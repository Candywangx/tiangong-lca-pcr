---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.spoons-forks-ladles-skimmers-cake-servers-fish-knives-butter-knives-sugar-tongs-and-sim-0d956b6b
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Spoons, forks, ladles, skimmers, cake-servers, fish-knives, butter-knives, sugar tongs and similar kitchen or table ware

## 1. Scope and Applicability

This PCR covers mass-based factory-gate foreground data for finished base-metal implements used to eat, serve, portion, skim, or handle food at a kitchen or table. Covered articles include spoons, forks, ladles, skimmers, cake-servers, fish-knives, butter-knives, sugar tongs, and functionally similar ware, whether sold singly or in sets. The representative route is integrated stainless-steel cutlery manufacture from purchased cold-rolled strip through blanking, forming, heat treatment when required, grinding, polishing, cleaning, optional passivation or coating, inspection, and packing.

The foreground starts with purchased metal stock accepted at the manufacturing site and ends with conforming ware and included sales or transport packaging ready to leave the factory gate. Upstream production of metal stock, electricity, fuels, water, chemicals, abrasives, and packaging is represented by supplier-specific upstream datasets. Inbound transport before receipt, distribution after the factory gate, use, washing during use, repair, and end-of-life are outside this PCR unless a study explicitly extends the boundary and reports those stages separately.

This PCR excludes knives primarily classified as ordinary cutting knives, machine knives, hand tools, manicure or pedicure instruments, non-metal tableware, cookware vessels, and manufacturing services performed on customer-owned inputs. Precious-metal plating, polymer or wood handles, dedicated thermal hardening, and alternative cleaning or passivation systems are route qualifiers, not permission to mix unlike product states in one foreground result.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.spoons-forks-ladles-skimmers-cake-servers-fish-knives-butter-knives-sugar-tongs-and-sim-0d956b6b |
| classification_refs | CPC 3.0 42916 (exact classification context) |
| covered_products | Finished base-metal spoons, forks, ladles, skimmers, cake-servers, fish-knives, butter-knives, sugar tongs, and similar kitchen or table implements |
| excluded_products | Ordinary cutting knives; machine knives; hand tools; manicure or pedicure instruments; cookware vessels; tableware made wholly of wood, plastics, ceramics, or glass; customer-owned-input manufacturing services |
| representative_product | Saleable stainless-steel spoon, fork, serving implement, or table-knife article, individually or in a declared set |
| production_route | Purchased cold-rolled stainless-steel strip → blanking and forming → route-specific heat treatment → grinding/polishing → cleaning and optional passivation/coating → inspection and packing |
| market_state | Finished, dry, clean, saleable ware at the factory gate; alloy grade, article mix, finish, handle material, coating, packaging, and pieces per kilogram declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide finished base-metal implements for eating, serving, portioning, skimming, or handling food at a kitchen or table |
| How much | 1 kg net mass of conforming finished ware, excluding removable packaging but including integral handles and coatings |
| How well | Meets the declared product specification for article type, alloy grade, finish, dimensions, food-contact suitability, and inspection acceptance |
| How long or cycle | One factory-gate delivery of finished ware; service life and use cycles are not asserted by this factory-gate reference flow |
| reference_flow_link | The reference product output `finished_cutlery` is normalized to 1 kg net conforming ware |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming finished ware |
| Reference product flow | Finished base-metal kitchen or table ware |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article or set composition; pieces per kilogram; alloy designation and recycled-content claim basis; integral handle material; finish and roughness class where specified; heat-treatment route; passivation or coating route; food-contact specification; included packaging; manufacturing geography; data period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh conforming dry ware after final cleaning and inspection. Include integral handles and coatings; exclude removable sales and transport packaging. Normalize every inventory amount to 1 kg of this net product mass. |
| `set_or_count_conversion` | Records kept as pieces, dozens, or sets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using measured net mass from the same product family and reporting period; retain article mix, sample size, mean mass, and variability. Do not apply a generic spoon or set mass. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity before normalization. When source records are in kWh, convert with 1 kWh = 3.6 MJ and disclose voltage, grid geography, and loss boundary. |
| `gas_reference_conditions` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at the supplier or meter reference temperature and pressure; record those conditions and the lower or higher heating-value basis used by any accompanying energy or emission calculation. |
| `solution_as_supplied` | Sodium hydroxide and nitric acid | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record solution mass as supplied and separately declare active-substance concentration. Do not equate solution mass with dry chemical mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased cold-rolled stainless-steel strip and other declared inputs accepted at the cutlery manufacturing site |
| starting_condition_role | Foreground entry condition for fabrication; upstream production and pre-gate transport are represented outside the foreground process |
| product_classification_scope | Finished base-metal kitchen or table implements within the semantic boundary stated in Sections 1 and 2 |
| recursive_input_rule | A same-category finished or semi-finished ware input crossing the site boundary is recorded once as a purchased product input with its own upstream dataset; do not recreate its prior manufacturing inside this foreground process |
| upstream_dataset_requirement | Use geography-, technology-, grade-, and supplier-appropriate upstream datasets for metal stock, electricity, natural gas, water, chemicals, abrasives, packaging, and external treatment services |
| disclosure | Declare alloy and product mix, integrated versus outsourced operations, heat source, cleaning/passivation/coating route, wastewater and dust-control boundary, scrap destination, packaging included, geography, period, and any excluded operation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | integrated_cutlery_manufacture | Include on-site blanking or forging, forming, trimming, route-specific heat treatment, grinding, polishing, cleaning, passivation or coating when used, inspection, packing, on-site utilities, wastes, and direct emissions through factory-gate release. | `unido-ethiopia-cutlery-project-1986`; `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `boundary_outsourced_operations` | externally performed heat treatment, polishing, coating, passivation, or wastewater treatment | Record the purchased service or the shipped intermediate and returned product consistently, and prevent double counting of the provider's energy, materials, wastes, and emissions in the foreground. | `eu-jrc-surface-treatment-metals-2006` |
| `boundary_upstream_inputs` | purchased materials and utilities | Link every purchased input to an upstream dataset that matches the declared grade, formulation, delivery state, geography, and supply boundary. | `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `boundary_downstream_exclusion` | distribution, use, and end-of-life | Exclude post-gate distribution, consumer or institutional washing, use, repair, and end-of-life from this factory-gate result unless a separately reported extended scenario is requested. | [] |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_cutlery_manufacture` | Integrated cutlery forming, finishing, cleaning, and packing | `required` | Always; mark individual heat, chemical, waste, emission, and packaging rows not applicable only when records demonstrate that the route is absent | Foreground production from accepted metal stock to finished ware at the factory gate | 1 kg net conforming finished ware |

### Process: Integrated cutlery forming, finishing, cleaning, and packing (`integrated_cutlery_manufacture`)

This process combines the common operations without duplicating inventories for every spoon, fork, knife, serving implement, alloy, finish, or package. Product-specific and route-specific differences are declared through qualifiers and row inclusion conditions.

#### Inputs

##### Product flows

###### Purchased stainless-steel stock (`raw_stainless_steel`)

Record the accepted cold-rolled stainless-steel strip by grade and delivery state. A sheet- or rod-based route requires a separately identified atomic stock row in the foreground instance.

- Selected flow: Cold-rolled stainless-steel strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted stock issued to the declared product campaign, net of supplier packaging retained outside the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `unido-ethiopia-cutlery-project-1986`; `us-epa-fabricated-metal-products-1995`

###### Purchased electricity (`electricity`)

Record electricity consumed by presses, forming and trimming machines, grinding and polishing equipment, cleaning systems, pumps, dust control, packing, and attributable auxiliary equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Metered or defensibly sub-metered purchased electricity attributable to the product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-surface-treatment-metals-2006`

###### Natural gas for on-site heat (`natural_gas`)

Record gaseous natural gas only when it is burned on site for forging, annealing, hardening, tempering, bath heating, or drying.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered natural gas attributable to the product campaign at declared reference conditions; mark not applicable for wholly electric or externally heated routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-surface-treatment-metals-2006`

###### Process water (`process_water`)

Record water supplied for aqueous cleaning, rinsing, bath make-up, cooling make-up, or other direct process uses; exclude sanitary water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered direct process-water input, with density conversion documented when the source meter reports volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-surface-treatment-metals-2006`

###### Cutting fluid (`cutting_fluid`)

Record the cutting fluid consumed in blanking, trimming, drilling, machining, or edge finishing, with formulation and dilution declared.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or issued cutting-fluid mass minus verified closing inventory and separately recovered unused fluid
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_records`
- Sources: `us-epa-fabricated-metal-products-1995`

###### White fused alumina polishing abrasive (`white_fused_alumina`)

Record white fused alumina when it is used as the grinding or polishing abrasive; declare grit, grade, carrier, and whether media are reusable.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or issued white fused alumina consumed in the campaign, corrected for closing inventory and recovered reusable media
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_records`
- Sources: `unido-ethiopia-cutlery-project-1986`; `us-epa-fabricated-metal-products-1995`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide only when an alkaline cleaning bath or wastewater-neutralization step uses it; declare solution concentration and function.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: As-supplied solution mass issued to the product campaign, corrected for inventory change and returned unused solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_records`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006`

###### Nitric acid for passivation (`nitric_acid`)

Record nitric acid only when the stainless-steel route uses nitric-acid pickling or passivation; declare concentration, bath-life accounting, and function.

- Selected flow: Nitric acid `bf883501-c052-414e-8e21-e6f53cc257ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: As-supplied nitric-acid mass issued to the campaign, including bath make-up and replenishment and excluding verified closing usable inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_records`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006`

###### Corrugated board shipping boxes (`corrugated_board_boxes`)

Record corrugated board boxes only when they leave the factory with the declared product. Other packaging components require separate atomic rows in the foreground instance.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass of corrugated board boxes issued to and leaving with the conforming product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `unido-ethiopia-cutlery-project-1986`

##### Waste flows

No waste flow is accepted as an input to the representative route. If a facility uses recovered secondary material crossing the site boundary, record its exact product or waste identity and upstream treatment boundary as a separate foreground-instance row.

##### Elementary flows

No elementary resource input is prescribed. Purchased water, energy, and metal stock are product flows with upstream datasets.

#### Outputs

##### Product flows

###### Finished kitchen or table ware (`finished_cutlery`)

Record only conforming saleable articles that meet the declared specification and inspection acceptance criteria.

- Selected flow: Finished base-metal kitchen or table ware
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Set to 1 kg after normalizing measured net conforming output from the declared product campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_waste_mass_records`
- Sources: `un-cpc-3-0-2025`; `unido-ethiopia-cutlery-project-1986`

##### Waste flows

###### Stainless-steel blanking and trimming scrap (`stainless_steel_scrap`)

Record stainless-steel skeletons, offcuts, flash, prong-trimming scrap, and other separately collected metal scrap leaving the foreground, with alloy grade and destination declared.

- Selected flow: Stainless-steel offcuts and skeleton scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stainless-steel scrap leaving the process, net of verified closed-loop return within the same foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste_mass_records`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Waste cutting oil (`waste_cutting_oil`)

Record waste cutting oil leaving the site only for oil-based cutting-fluid routes; declare water content, contamination, recovery, and treatment destination.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured waste cutting oil transferred off site or into a separately modelled on-site treatment process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste_mass_records`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Metal-finishing cleaning and rinse wastewater (`metal_finishing_wastewater`)

Record the combined liquid wastewater leaving aqueous cleaning, rinsing, pickling, passivation, or coating operations before external treatment; do not combine it with sludge.

- Selected flow: Metal-finishing cleaning and rinse wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered wastewater mass, or volume converted with contemporaneous measured density, crossing to external treatment or discharge
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006`

###### Metal-bearing wastewater-treatment sludge (`metal_bearing_sludge`)

Record dewatered sludge only when wastewater is treated within the foreground boundary; declare dry-matter fraction, dominant metals, and destination.

- Selected flow: Metal-bearing surface-treatment wastewater sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured wet sludge mass leaving on-site treatment, accompanied by measured dry-matter fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste_mass_records`
- Sources: `eu-jrc-surface-treatment-metals-2006`

###### Waste polishing media (`waste_polishing_media`)

Record spent polishing media leaving the process, including used abrasive compound or media captured by dust-control equipment; declare composition and metal contamination.

- Selected flow: Waste polishing media `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured waste polishing media transferred off site, net of verified reusable media returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste_mass_records`
- Sources: `unido-ethiopia-cutlery-project-1986`; `eu-jrc-surface-treatment-metals-2006`

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_co2`)

Record fossil carbon dioxide emitted directly from on-site natural-gas combustion. Do not add upstream power- or fuel-supply emissions here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Site-measured or site-calculated direct fossil CO2 using the documented fuel composition, carbon content, oxidation basis, and applicable monitoring method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-jrc-surface-treatment-metals-2006`

###### Uncaptured polishing particulate to air (`particulate_air`)

Record particulate matter emitted to air from grinding or polishing after accounting for captured material reported as waste. Declare particle-size information and metal composition when measured.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack and fugitive particulate or a documented site calculation based on measured operating data and control-device performance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished ware
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-jrc-surface-treatment-metals-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | mixed products, alloy grades, finishes, or production lines | Prefer sub-metering, batch records, material issue records, machine time, bath loading, and direct waste measurements to avoid allocation between unlike products or routes. | `eu-jrc-surface-treatment-metals-2006` |
| `allocation_common_operations` | shared presses, furnaces, polishing lines, cleaning baths, utilities, and pollution control | Allocate a shared operation by the causal physical driver recorded for that operation, such as machine time, treated mass, surface area, bath loading, or metered energy. Document the selected driver and reconciliation to site totals. | `eu-jrc-surface-treatment-metals-2006` |
| `allocation_scrap` | stainless-steel scrap leaving the foreground | Report scrap mass, alloy grade, and destination separately. Apply the study's declared recycling model consistently; do not credit avoided primary steel inside the foreground unless that system model explicitly requires it. | `us-epa-fabricated-metal-products-1995` |
| `allocation_economic_exception` | inseparable co-products without a defensible physical driver | Economic allocation may be used only after subdivision and physical causality are shown impracticable; disclose prices, geography, averaging period, currency basis, and sensitivity. | [] |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `integrated_cutlery_manufacture` | purchased metal, cutting fluid, abrasive, chemicals, and packaging | receiving, issue, return, formulation, concentration, and inventory records | item identity; supplier; grade/formulation; concentration; opening stock; receipts; issues; returns; closing stock; mass; batch; product family | Calibrated scales plus reconciled inventory records; preserve supplier documents and formulation or safety data | kg | Each receipt and issue; reconcile monthly | At least 12 representative consecutive months or the full shorter production campaign | All foreground stores and lines serving the declared product | Consumption = opening stock + receipts - returns - closing stock; allocate shared consumption only by a documented causal driver | Scale calibration; purchase and issue records; supplier specification; inventory reconciliation; anomaly log |
| `cp_energy_records` | `integrated_cutlery_manufacture` | electricity and natural gas | utility meter, sub-meter, invoice, furnace, and operating-hour records | meter id; opening/closing reading; kWh; m3; reference temperature/pressure; fuel composition; equipment; operating hours; batch; product mass | Prefer calibrated sub-meters; otherwise reconcile equipment-level estimates to site meters and disclose allocation | kWh; MJ; m3 | Continuous or per shift; reconcile monthly | Same period as product output | All attributable production and pollution-control equipment | Convert kWh to MJ; normalize reconciled attributable energy to net conforming output | Meter calibration; invoices; reconciliation; downtime and allocation records |
| `cp_water_records` | `integrated_cutlery_manufacture` | process water | water meter, bath make-up, rinse, blowdown, and density records | meter id; volume; mass; density; use point; batch; recirculation; discharge link | Meter direct process water; exclude sanitary water; document volume-to-mass conversion | kg; m3 | Continuous or per batch; reconcile monthly | Same period as product output | Cleaning, rinsing, bath make-up, and direct process cooling systems | Sum net process-water input after documented reuse and normalize to net conforming output | Meter calibration; water balance; density evidence; reuse log |
| `cp_product_and_waste_mass_records` | `integrated_cutlery_manufacture` | conforming product, stainless scrap, waste cutting oil, sludge, and waste polishing media | production count and mass, reject, waste manifest, container tare, dry-matter, and destination records | article type; count; gross/net/tare mass; alloy; waste identity; dry matter; destination; batch; date | Calibrated scales and reconciled production and waste-dispatch records | kg | Each batch and dispatch; reconcile monthly | Same period as inputs | All foreground lines and on-site waste handling | Subtract tare, prevent double counting of internally recycled material, and normalize net outward flows to net conforming output | Scale calibration; inspection acceptance; waste manifests; destination receipts; mass-balance reconciliation |
| `cp_wastewater_records` | `integrated_cutlery_manufacture` | metal-finishing cleaning and rinse wastewater | effluent meter, batch dump, density, composition, and destination records | source bath; volume; density; mass; pH; key metals; treatment boundary; destination; date | Meter each continuous stream and batch discharge; convert volume with contemporaneous density | kg; m3 | Continuous and each batch dump; reconcile monthly | Same period as wet operations | All cleaning, rinsing, pickling, passivation, coating, and on-site treatment interfaces | Combine only streams with the same waste identity and boundary; normalize mass crossing the declared boundary | Meter calibration; laboratory results; transfer manifests; water balance |
| `cp_direct_emission_records` | `integrated_cutlery_manufacture` | direct fossil CO2 and polishing particulate | stack test, continuous monitor, fuel carbon balance, dust-capture, and operating records | pollutant; source; measured concentration or mass; gas flow; fuel use; carbon content; oxidation basis; control efficiency; captured dust; operating time; method id | Use applicable site monitoring methods and measured operating data; reconcile captured dust to waste records | kg | Per monitoring plan and each material route change; aggregate monthly | Same period as product output | All on-site combustion and grinding/polishing emission points | Calculate only with documented equations and site inputs; prevent overlap between captured waste and emitted particulate | Method identifier; calibration; laboratory report; fuel certificate; control-device inspection; calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Normalized amount = attributable campaign amount / net mass of conforming dry finished ware | Attributable row amount; `finished_cutlery` net mass | Amount per 1 kg reference product | [] |
| `calc_material_consumption` | cutting fluid, white fused alumina, sodium hydroxide, and nitric acid | Consumption = opening usable inventory + receipts - returns - closing usable inventory; report as-supplied mass and concentration separately | Inventory and issue records | Net consumed mass by material | `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `calc_electricity_conversion` | purchased electricity | Electricity in MJ = metered kWh × 3.6 | Metered kWh | MJ of purchased electricity | [] |
| `calc_metal_mass_balance` | stainless-steel stock, finished product, stainless scrap, metal in wastes, and inventory change | Reconcile input metal mass with conforming product, separately measured scrap, metal-bearing wastes, test pieces, and work-in-progress change; investigate rather than allocate unexplained loss | Mass records by alloy and campaign | Mass-balance discrepancy and completeness finding | `us-epa-fabricated-metal-products-1995` |
| `calc_wastewater_mass` | metal-finishing wastewater | Wastewater mass = measured volume × contemporaneous measured density when a mass meter is unavailable | Wastewater volume; density | kg wastewater crossing the declared boundary | `eu-jrc-surface-treatment-metals-2006` |
| `calc_direct_emissions` | fossil CO2 and particulate | Apply the documented site monitoring or calculation method only to measured site inputs; identify the method, factors, control efficiency, and uncertainty and exclude upstream supply emissions | Fuel composition and use or measured stack data; captured-dust records; operating data | kg direct emission by named elementary flow | `eu-jrc-surface-treatment-metals-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare article mix, pieces per kilogram, alloy, handle, coating/passivation, finish, food-contact specification, package, geography, and period; do not combine materially different product states without subdivision. | Product specification; bill of materials; inspection and packing records |
| `dq_measurement_traceability` | all measured inputs and outputs | Preserve meter or scale identifiers, calibration status, raw readings, unit conversions, allocation drivers, and reconciliation workbooks. | Calibration certificates; raw logs; signed reconciliation |
| `dq_temporal_representativeness` | foreground dataset | Cover at least 12 representative consecutive months or the full shorter production campaign and disclose shutdowns, atypical batches, and seasonality. | Production calendar; meter and batch coverage report |
| `dq_mass_balance` | metal and wet-process systems | Reconcile metal inputs and outputs and separately reconcile process-water input, wastewater, evaporation or carry-out estimates, and inventory changes; explain material discrepancies. | Mass and water-balance workbooks; corrective-action record |
| `dq_route_completeness` | conditional rows | A row may be not applicable only with evidence that its technology or material route is absent; zero, below-detection, and not measured are distinct states. | Process flow diagram; recipe; equipment list; laboratory report |
| `dq_upstream_matching` | purchased product flows | Select upstream datasets matching material grade/formulation, delivery state, geography, technology, and reference conditions; disclose proxies. | Supplier declaration; upstream dataset metadata; proxy log |
| `dq_uuid_gaps` | unresolved flow identities | Retain exact semantic row names and do not substitute approximate Tiangong UUIDs. Resolve the five recorded identity gaps before publication or document a governed new-flow decision. | UUID audit record; review decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_amount` | reference flow | Confirm exactly 1 kg net conforming dry finished ware, with removable packaging excluded and pieces per kilogram declared. | [] |
| `validate_identity_qualifiers` | product identity | Reject a package missing article mix, alloy grade, finish, handle/coating route, packaging scope, manufacturing geography, or data period. | [] |
| `validate_boundary` | foreground boundary | Confirm that all on-site forming, thermal, grinding/polishing, wet finishing, inspection, packing, pollution-control, waste, and direct-emission operations are included or explicitly absent, and that upstream and downstream stages are not double counted. | `unido-ethiopia-cutlery-project-1986`; `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `validate_atomic_rows` | process inventory | Confirm each row is one physical, chemical, waste, or energy exchange with the stated direction and flow type; require separate foreground-instance rows for any additional coating metal, handle material, packaging component, chemical, fuel, waste, or emission. | [] |
| `validate_uuid_alignment` | Tiangong-bearing rows | Confirm state-100 UUID identity, English and Chinese base names, flow type, property, and unit; unresolved rows must remain UUID-empty and listed in manifest review metadata. | [] |
| `validate_balance` | metal and wet-process records | Require explained metal and water-balance discrepancies and prevent double counting between internally recycled scrap, dispatched waste, captured dust, wastewater, sludge, and elementary emissions. | `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `validate_allocation` | shared operations | Confirm subdivision was attempted first, every remaining allocation uses a documented causal driver, and allocated totals reconcile to measured site totals. | [] |
| `validate_range_status` | all important flows | Treat all amounts as foreground requirements. No external empirical range is authorized until at least two independent, original-text-verified, boundary-compatible sources support a reasoned synthesis; do not infer a range from a single case or duplicate scenario. | [] |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a completed, reviewed foreground data package |
| downstream_use | Product-level process datasets and lifecycle models requiring factory-gate burdens for the declared kitchen or table ware product |
| allowed_use | Use for the declared article mix, alloy, manufacturing route, finish, packaging scope, geography, and period, or after transparent technology and geography adjustment |
| excluded_use | Do not use as a generic proxy for ordinary cutting knives, hand tools, cookware, non-metal tableware, precious-metal ware, customer-owned-input manufacturing services, use-phase washing, or end-of-life without separate justification |
| required_metadata | Canonical PCR id; CPC context; article mix and pieces per kilogram; alloy and recycled-content basis; handle/coating/passivation; route and outsourced steps; packaging; geography; period; reference flow; allocation; upstream datasets; unresolved-flow status |
| required_quality_disclosure | Data coverage; meter and scale calibration; mass and water balances; allocation drivers; treatment boundary; direct-emission method; scrap and waste destinations; proxy use; uncertainty; cut-offs; deviations |
| update_trigger | Material change in product mix, alloy or supplier, heat-treatment or finishing technology, coating/passivation, packaging, energy or water supply, wastewater/dust control, allocation driver, geography, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 42916 classification identity and English title |
| `unido-ethiopia-cutlery-project-1986` | `official_guidance` | United Nations Industrial Development Organization, *Ethiopia: Handicraft and Small Scale Industry Project, Second Phase, Terminal Report*, DP/ID/SER.B/540, 1986. https://downloads.unido.org/ot/48/09/4809611/15001-20000_15053.pdf | Product-specific boundary, common materials, forging/forming, trimming, grinding, polishing, buffing, sharpening, and handle attachment |
| `us-epa-fabricated-metal-products-1995` | `official_guidance` | U.S. Environmental Protection Agency, *Profile of the Fabricated Metal Products Industry*, Sector Notebook Project, EPA/310-R-95-007, September 1995. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004B8N.TXT | Fabrication, shearing, forming, machining, surface preparation, inputs, scrap, wastewater, wastes, and emissions |
| `eu-jrc-surface-treatment-metals-2006` | `official_guidance` | European Commission Joint Research Centre, *Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*, August 2006. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf | Conditional surface-treatment boundary, water and energy use, cleaning/passivation, wastewater, sludge, spent solutions, dust, and monitoring context |
