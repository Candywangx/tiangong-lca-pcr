---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bismuth-antimony-manganese-chromium-and-articles-thereof-including-waste-and-scrap-of-b-b58e25dd
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bismuth, antimony, manganese, chromium and articles thereof; including waste and scrap of bismuth or manganese

## 1. Scope and Applicability

This PCR applies to foreground data packages for bismuth, antimony, manganese or chromium metal and articles whose material identity remains one of those metals. It also covers bismuth or manganese waste and scrap when that material is the declared reference product. The product metal, physical form, purity or grade, production route, primary or secondary feed share, geography, reporting period and plant-gate condition shall be declared.

The category does not include ferro-manganese, ferro-chromium, metal compounds sold as chemicals, ores or concentrates sold without production of a covered metal product, antimony or chromium waste and scrap, cermets, or downstream products classified by their function. Mining and mine-site beneficiation, external transport before receipt or after dispatch, use and end of life are outside the foreground gate unless the study explicitly extends the boundary. The official CPC structure and explanatory notes establish the classification boundary; the non-ferrous-metals BREF establishes the primary/secondary production and plant-dispatch process framing (`un-cpc-3-0-2025`, `eu-jrc-nfm-bref-2017`).

Because the official category combines dissimilar metals, routes and forms, the reference model below uses unwrought bismuth recovered from a bismuth-rich lead-refining intermediate. A data package for antimony, manganese, chromium, a fabricated article, or marketable bismuth/manganese scrap shall retain these measurement, boundary, allocation and quality rules but shall replace the representative output with one concrete product flow and add the route-specific atomic exchanges. It shall not use bismuth inventory values as proxies.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bismuth-antimony-manganese-chromium-and-articles-thereof-including-waste-and-scrap-of-b-b58e25dd |
| classification_refs | CPC 3.0: 41603 (exact classification context) |
| covered_products | Bismuth, antimony, manganese or chromium metal; articles predominantly of one of those metals; bismuth waste and scrap; manganese waste and scrap |
| excluded_products | Ferro-manganese; ferro-chromium; metal ores and concentrates sold as such; compounds sold as chemicals; antimony or chromium waste and scrap; cermets; functionally classified downstream products |
| representative_product | Unwrought bismuth metal recovered from a bismuth-rich lead-refining intermediate and dispatched at the producing plant gate |
| production_route | Representative: receipt of bismuth crust, recovery and refining, casting and dispatch; covered alternatives require their own declared pyrometallurgical, hydrometallurgical, electrolytic, remelting or forming route |
| market_state | Net saleable mass at the plant gate, with metal identity, form, purity or grade, moisture or contamination basis where relevant, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared bismuth, antimony, manganese or chromium metal product, article, or eligible bismuth/manganese scrap product that meets the stated specification |
| How much | 1 kg net saleable product |
| How well | Meets the declared chemical composition, purity or grade, form, dimensions where applicable, and acceptance specification at the plant gate |
| How long or cycle | One production lot or reporting-period production normalized to the reference mass; no use-duration function is credited |
| reference_flow_link | The reference product is the net conforming output after internal returns, rejects and off-spec material have been removed from saleable output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Bismuth metal, unwrought |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | selected metal; product form; chemical composition; purity or grade; primary and secondary feed shares; production and refining route; geography; reporting period; plant-gate boundary; net mass basis; moisture or contamination basis for scrap; packaging inclusion |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. Missing qualifiers make the reference flow incomplete. The unresolved representative product UUID shall not be replaced by a mixed scrap, metal compound, ferroalloy or other proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net conforming product mass at the declared plant-gate state; exclude internal returns and material not dispatched as the reference product. |
| `scrap_mass_basis` | Bismuth or manganese scrap as reference product or input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether moisture, coatings, attachments and non-metal contamination are included, and keep the same basis in input, output and allocation calculations. |
| `gas_reference_conditions` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare temperature, absolute pressure and dry/wet basis for metered gas volume; convert all records to the same stated reference conditions before normalization. |
| `electricity_energy` | Purchased and on-site electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert to MJ using one documented conversion; state voltage level, supply mix, losses and whether on-site generation is included. |
| `solution_mass` | Process water, sulfuric acid and sodium hydroxide | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered solution mass and concentration separately; report pure-substance equivalents only as additional calculated fields, not as replacements for delivered mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Bismuth-rich lead-refining crust or another explicitly named primary or secondary metal-bearing feed received at the foreground facility gate |
| starting_condition_role | Purchased or transferred feed entering the first foreground preparation, recovery or refining operation |
| product_classification_scope | Bismuth, antimony, manganese or chromium metal and articles thereof, plus bismuth or manganese waste and scrap; related ferroalloys and antimony/chromium scrap are outside this identity |
| recursive_input_rule | A covered metal or eligible bismuth/manganese scrap crossing the foreground gate is recorded once as a concrete product input with an upstream dataset; material recirculated within the same foreground system is an internal transfer and is not counted again as purchased input or co-product |
| upstream_dataset_requirement | Every purchased metal-bearing feed, reagent, fuel, electricity supply, oxygen and process-water supply shall link to a geographically and technologically appropriate upstream dataset or carry an explicit unresolved-data disclosure |
| disclosure | Declare the selected metal and product form, feed origin, primary/secondary shares, route stages, integrated upstream or downstream operations, pollution-control boundary, internal recycling, external treatment, transport boundary and omitted processes |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_boundary` | foreground metal production | Include directly controlled feed preparation, recovery or extraction, refining, casting, route-integrated forming, internal recycling, pollution control and dispatch preparation from received feed to net conforming product; disclose every integrated or omitted stage. | `eu-jrc-nfm-bref-2017` |
| `sb_upstream_inputs` | purchased inputs | Keep mining, mine-site beneficiation and production of purchased materials outside the foreground gate, but represent each purchased input with a suitable upstream dataset. | `eu-jrc-nfm-bref-2017` |
| `sb_direct_emissions` | foreground releases | Record measured direct releases from handling, thermal or electrolytic recovery, refining, casting, product handling and abatement; do not substitute upstream electricity emissions for direct stack or fugitive releases. | `us-epa-ap42-ferroalloy` |
| `sb_alternative_routes` | non-representative covered products | A route for antimony, manganese, chromium, a fabricated article, or eligible scrap is conforming only when the data package adds its concrete feed, reagent, energy, residue and direct-emission exchanges; the representative bismuth cards are not default values for another route. | `un-cpc-3-0-2025`, `us-epa-ap42-ferroalloy` |
| `sb_recursive_inputs` | same-category inputs and internal returns | Record same-category materials crossing the facility gate once with their upstream dataset; keep internal returns as internal transfers and avoid a recursive product-category loop or double counting. | `eu-commission-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bismuth_recovery_refining` | Representative bismuth recovery, refining and casting | required | Required for the representative unwrought-bismuth dataset | Foreground production and pollution control | Per 1 kg net conforming unwrought bismuth metal at plant gate |
| `alternative_metal_route` | Alternative antimony, manganese or chromium production | conditional | Include instead of the representative process when one of these metals is the reference product | Product-specific foreground production | Per 1 kg net conforming declared metal product at plant gate |
| `article_forming` | Forming or fabrication of a covered metal article | conditional | Include when the reference product is a wrought or fabricated article and the operation is inside the plant gate | Route-integrated forming | Per 1 kg net conforming article at plant gate |
| `scrap_product_preparation` | Preparation of marketable bismuth or manganese scrap | conditional | Include when eligible scrap, rather than recovered metal, is the reference product | Sorting, cleaning and preparation | Per 1 kg net saleable scrap on the declared contamination basis |

### Process: Representative bismuth recovery, refining and casting (`bismuth_recovery_refining`)

#### Inputs

##### Product flows

###### Bismuth-rich lead-refining crust (`input_bismuth_crust`)

Record the weighed bismuth-rich crust or equivalent bismuth recovery intermediate received by the integrated process. Its origin, bismuth content, moisture and co-contained metals shall be reported.

- Selected flow: Bismuth crust from lead refining
- Flow property / unit: Mass / kg
- Amount rule: measured received mass allocated to the reporting-period bismuth production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Sulfuric acid used in leaching (`input_sulfuric_acid`)

Record sulfuric acid only when it crosses the foreground boundary for a declared hydrometallurgical leaching step. Concentration and delivered solution state remain foreground qualifiers.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered sulfuric acid solution consumed by the included process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Sodium hydroxide used in solution treatment (`input_sodium_hydroxide`)

Record sodium hydroxide only when the declared route uses it for pH adjustment, impurity removal or wastewater treatment inside the foreground boundary. Record concentration separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered sodium hydroxide solution consumed by the included process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Industrial oxygen used in oxidative refining (`input_industrial_oxygen`)

Record supplied industrial oxygen only when it is metered into an included oxidative-refining or abatement operation. Purity, pressure and reference conditions shall be declared.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered oxygen volume converted to the declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_volume_records`
- Sources:

###### Electricity supplied to the process (`input_electricity`)

Record electrical energy crossing the foreground boundary for preparation, recovery, refining, casting and pollution control. Disclose on-site generation and avoid double counting electricity embedded in purchased supplies.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered purchased plus qualifying on-site electrical energy consumed by the included process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources:

###### Natural gas supplied to thermal operations (`input_natural_gas`)

Record gaseous natural gas only when it is burned in an included furnace, holding, casting, drying or abatement operation. Supply composition and metering reference conditions shall be declared.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume converted to the declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_volume_records`
- Sources:

###### Process water supplied to the process (`input_process_water`)

Record process water crossing the foreground boundary for leaching, washing, cooling makeup or pollution control. Closed-loop recirculation is an internal transfer and is not counted repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh process-water input net of internally recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_mass_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net conforming unwrought bismuth metal (`output_bismuth_metal`)

Record only saleable unwrought bismuth meeting the declared composition and grade. Internal returns, off-spec metal and co-produced metals are separate mass-balance outputs.

- Selected flow: Bismuth metal, unwrought
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming bismuth mass dispatched or transferred as finished product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

##### Waste flows

###### Bismuth-refining slag (`output_bismuth_refining_slag`)

Record the weighed slag leaving bismuth recovery or refining as one waste flow. Report bismuth content, other regulated metals, treatment route and whether any fraction is internally returned.

- Selected flow: Bismuth-refining slag
- Flow property / unit: Mass / kg
- Amount rule: measured slag mass leaving the foreground system for recovery, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass_records`
- Sources:

###### Captured bismuth-refining dust (`output_bismuth_refining_dust`)

Record captured bismuth-bearing dust from handling, furnace, casting or gas-cleaning operations separately from direct particulate emissions. Report composition and destination.

- Selected flow: Captured bismuth-refining dust
- Flow property / unit: Mass / kg
- Amount rule: measured captured dust mass leaving the foreground system for recovery, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass_records`
- Sources:

###### Bismuth-refining wastewater (`output_bismuth_refining_wastewater`)

Record wastewater transferred across the foreground boundary after the last included internal treatment step. Keep wastewater volume, suspended solids and dissolved-metal analytical results in supporting records.

- Selected flow: Bismuth-refining wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide (`output_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide released by included natural-gas combustion or other fossil-carbon oxidation. Exclude upstream electricity-generation emissions and biogenic carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct fossil carbon-dioxide release or a documented calculation from foreground fuel and carbon records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming unwrought bismuth metal at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | separately metered recovery, refining, forming and treatment operations | Subdivide the foreground system and assign directly measured inputs, outputs and emissions to the process that causes them before applying any allocation. | `eu-commission-pef-2021` |
| `allocation_physical_relation` | unavoidable multi-output operations | If subdivision or system expansion is not feasible, use a demonstrated causal physical relationship, such as a process-specific recoverable-metal balance; document the relationship, data and sensitivity. Do not default automatically to gross mass or market value. | `eu-commission-pef-2021` |
| `allocation_other_relation` | multi-output operations without a defensible physical relationship | If another relationship is required, disclose and justify it, preserve total assigned burdens, and report a sensitivity result for the principal alternative. | `eu-commission-pef-2021` |
| `allocation_internal_returns` | internal scrap, dust, slag or metal returned within the foreground boundary | Treat an internal return as an internal transfer: do not create an avoided-product credit, new purchased input or co-product output for the same circulation. | `eu-commission-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `bismuth_recovery_refining` | Bismuth-bearing feed, process chemicals and net product | calibrated scales, tank receipts, stock records and laboratory certificates | opening stock; receipts; transfers; closing stock; solution concentration; moisture; bismuth content; net product mass; grade | reconcile transaction records and calibrated measurements to one production period | kg | each receipt or batch, aggregated monthly | full declared reporting period | all included process areas and storage | opening stock + receipts - closing stock - documented transfers, normalized by net conforming output | calibration certificates, invoices, stock reconciliation and laboratory certificates |
| `cp_gas_volume_records` | `bismuth_recovery_refining` | Natural gas and industrial oxygen | custody-transfer or submeter records | meter start/end; temperature; absolute pressure; dry/wet basis; gas identity; allocation key | read meters and convert to declared reference conditions | m3 | continuous or each batch, aggregated monthly | full declared reporting period | all included furnaces, refining vessels and abatement units | sum corrected volume assigned to included operations, normalized by net conforming output | meter calibration, gas specification and reference-condition calculation |
| `cp_electricity_records` | `bismuth_recovery_refining` | Electricity | revenue meter and process submeter records | meter start/end; voltage level; purchased supply; on-site generation; export; losses; allocation key | reconcile facility and process meters | MJ | continuous, aggregated monthly | full declared reporting period | all included preparation, recovery, refining, casting and control operations | purchased + included on-site generation - exports - excluded uses, normalized by net conforming output | meter calibration, utility invoices and reconciliation |
| `cp_water_mass_records` | `bismuth_recovery_refining` | Fresh process-water input | water meter and tank records | meter start/end; source; density basis; recirculated water; discharge | meter fresh makeup separately from internal circulation and convert volume to mass using documented density | kg | continuous or daily, aggregated monthly | full declared reporting period | all included process and control operations | fresh input only, normalized by net conforming output | meter calibration, density record and water balance |
| `cp_residue_mass_records` | `bismuth_recovery_refining` | Slag and captured dust | calibrated scale tickets and laboratory records | gross/tare mass; moisture; bismuth content; other metals; destination; internal return | weigh each shipment or batch and reconcile internal returns | kg | each batch or shipment | full declared reporting period | all included recovery, refining, casting and abatement operations | mass leaving the boundary only, normalized by net conforming output | scale calibration, waste manifests and analyses |
| `cp_wastewater_records` | `bismuth_recovery_refining` | Bismuth-refining wastewater | discharge meter, tank and analytical records | volume or mass; density; treatment stage; suspended solids; dissolved metals; destination | meter the final boundary transfer and retain representative analyses | kg | continuous or each discharge, aggregated monthly | full declared reporting period | final included wastewater-treatment boundary | mass leaving the boundary, normalized by net conforming output | meter calibration, sampling plan, laboratory results and transfer records |
| `cp_direct_emission_records` | `bismuth_recovery_refining` | Direct fossil carbon dioxide | stack measurement or foreground fuel-and-carbon records | measured CO2; fuel volume; fuel carbon content; oxidation basis; excluded upstream emissions | prefer direct measurement; otherwise calculate with a documented carbon balance and reconcile fuel use | kg | campaign or continuous measurement, aggregated to reporting period | representative operation over the declared reporting period | all included direct combustion and oxidation sources | sum direct fossil CO2 only, normalized by net conforming output | monitoring report, laboratory carbon analysis, calculation and uncertainty record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory exchange | normalized amount = reporting-period exchange amount / reporting-period net conforming reference-product mass | reconciled exchange amount; net conforming output mass | exchange per 1 kg reference product | `eu-commission-pef-2021` |
| `calc_mass_reconciliation` | metal-bearing inputs and outputs | Reconcile metal-bearing feed, product, internal return, co-products, residues and measured losses on the same moisture and composition basis; investigate and disclose material imbalance rather than forcing closure. | measured masses; moisture; metal assays; stock changes; transfers | documented total-mass and bismuth-mass reconciliation | `eu-jrc-nfm-bref-2017` |
| `calc_solution_reporting` | sulfuric acid and sodium hydroxide solutions | pure substance mass = delivered solution mass × measured mass fraction; retain both delivered solution mass and pure-substance result. | delivered solution mass; concentration certificate or analysis | kg delivered solution and kg pure substance per reference flow | |
| `calc_gas_conditions` | natural gas and industrial oxygen | Convert metered gas volume to the declared reference temperature, absolute pressure and moisture basis using the documented equation and compressibility assumption. | metered volume; temperature; pressure; moisture; compressibility | m3 at declared reference conditions per reference flow | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain a product or scrap specification, chemical analysis, form description, grade, net-mass basis and acceptance record for the reported product. | certificate of analysis, product specification, scale record and dispatch record |
| `dq_route_identity` | foreground system | Name the metal, feed origin, route stages, technology, primary/secondary shares, integrated operations and excluded operations; alternative products shall not inherit the bismuth representative inventory. | process flow diagram, operating description and boundary register |
| `dq_temporal_representativeness` | all foreground records | Cover the declared production period and ordinary operating states; identify shutdown, startup, maintenance, campaign and abnormal-operation data and justify exclusions. | dated meter, batch, laboratory and production records |
| `dq_completeness` | inventory | Reconcile all significant purchased materials, energy, water, net products, co-products, residues, wastewater and measured direct emissions, with every exchange represented by one concrete flow. | mass and energy reconciliation, source register and unresolved-data log |
| `dq_measurement` | meters, scales and analyses | Use calibrated instruments and documented sampling methods; report conversions, detection limits, missing-data treatment and uncertainty material to the result. | calibration certificates, sampling plans, laboratory QA and calculation sheets |
| `dq_upstream_links` | purchased inputs and external treatment | Use geography-, technology- and state-appropriate datasets or disclose each unresolved upstream link and its expected significance. | dataset mapping register and supplier records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference flow | Reject a package that omits the selected metal, product form, composition, grade, route, primary/secondary share, geography, reporting period, gate or net-mass basis. | `un-cpc-3-0-2025` |
| `validation_reference_mass` | normalization | Confirm that every reported exchange is normalized to 1 kg of net conforming reference product and that internal returns and off-spec product are excluded from the denominator. | |
| `validation_atomic_inventory` | inventory rows | Reject collection labels, combined utilities, unspecified fuels, unspecified chemicals, grouped wastes or grouped emissions; each exchange shall be one concrete product, waste or elementary flow with its own applicability condition. | |
| `validation_uuid_semantics` | Tiangong identities | A UUID is acceptable only when its public state, English and Chinese names, flow type, classification, property, unit group, product state and process role match the selected exchange; unresolved exact identities remain blank and disclosed. | |
| `validation_route_completeness` | alternative products and routes | Reject use of the representative bismuth inventory for antimony, manganese, chromium, articles or scrap unless the package replaces it with concrete route-specific feed, reagent, energy, residue, wastewater and direct-emission exchanges. | `us-epa-ap42-ferroalloy`, `eu-jrc-nfm-bref-2017` |
| `validation_boundary_allocation` | boundary and multi-output operations | Confirm that included and excluded operations, upstream links, internal recycling, external treatment and the allocation hierarchy are documented and that assigned burdens are conserved. | `eu-commission-pef-2021` |
| `validation_ranges` | quantitative QA | No external typical range is prescribed by this authored PCR; validate values against reconciled foreground records and do not invent a range from one study, one scenario or incompatible product states. | |
| `validation_bilingual` | bilingual data package guidance | Confirm that Chinese UUID-bearing names use the directly read Tiangong Chinese baseName and that row ids, UUIDs, controlled values and rule ids match the English rendering. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for one explicitly declared covered metal product, article or eligible scrap product |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Plant-gate modelling of the declared product and route after all required qualifiers, atomic exchanges, upstream links, allocation choices and data-quality evidence have been supplied |
| excluded_use | Category-average comparison across the four metals; proxying one metal or route with another; ferro-manganese or ferro-chromium; antimony or chromium scrap; unqualified metal compounds; downstream fabrication, use or end-of-life not explicitly added to the boundary |
| required_metadata | PCR id and version; product metal and form; composition and grade; feed origins and primary/secondary shares; process route and technology; geography; reporting period; plant-gate state; reference conditions; upstream dataset mapping; allocation method; internal recycling; treatment destinations; unresolved identities and range-evidence needs |
| required_quality_disclosure | Record coverage, instrument calibration, sampling and laboratory QA, mass/energy reconciliation, data gaps, estimation methods, uncertainty, representativeness limitations and sensitivity to allocation |
| update_trigger | Change in product metal or form, feed origin or primary/secondary share, route technology, integrated operations, energy or water supply, pollution control, allocation relation, treatment destination, geography, product specification, or a material change in foreground performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Ver. 3.0 Structure and Explanatory Notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official category identity and separation from ferro-manganese, ferro-chromium, and antimony/chromium scrap |
| `eu-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | Cusano et al., Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries, EUR 28648 EN, JRC107041, 2017, doi:10.2760/8224, https://publications.jrc.ec.europa.eu/repository/bitstream/JRC107041/kjna28648enn.pdf | Primary/secondary metal-production boundary, preparation-to-dispatch stages, bismuth recovery context, pollution control and mass reconciliation |
| `us-epa-ap42-ferroalloy` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, AP-42 Background Report, Section 12.4, Ferroalloy Production, https://www.epa.gov/sites/production/files/2020-11/documents/b12s04.pdf | Manganese/chromium electrolytic route stages and direct-emission inventory expectations |
| `eu-commission-pef-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, Annex I, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Functional-unit normalization, allocation hierarchy, data collection, quality and reporting rules |
