---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.gold-including-gold-plated-with-platinum-unwrought-or-in-semi-manufactured-forms-or-in-739283c7
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gold (including gold plated with platinum), unwrought or in semi-manufactured forms, or in powder form

## 1. Scope and Applicability

This PCR applies to foreground production of gold at the refinery or metal-forming gate when the saleable output is unwrought gold, gold powder, a semi-manufactured gold form, or gold plated with platinum within CPC 41320. The foreground boundary begins with received, assayed gold-bearing refinery feed and ends with the mass-accounted gold product in its declared saleable form. It covers primary/intermediate doré feed and secondary gold-scrap feed as distinct conditional inputs, and requires the actual refining and forming route to be declared.

Mining, ore beneficiation, mine-site leaching, scrap collection before refinery acceptance, finished jewellery, coins, electronic components, and downstream use are outside the foreground process. Their burdens are represented by upstream datasets when included in the study scope. Gold ores and concentrates, waste gold, base metals or silver clad with gold, and finished articles are not reference products under this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.gold-including-gold-plated-with-platinum-unwrought-or-in-semi-manufactured-forms-or-in-739283c7 |
| classification_refs | CPC 3.0: 41320 |
| covered_products | Unwrought gold; gold powder; semi-manufactured gold forms; gold plated with platinum, where gold remains the classified product |
| excluded_products | Gold ores and concentrates; waste and scrap of gold; base metals or silver clad with gold; finished jewellery, coins, electronic parts, and other finished articles |
| representative_product | Mass-accounted saleable gold in the declared form and fineness |
| production_route | Refining of assayed doré or accepted gold scrap by the declared pyrometallurgical, electrorefining, hydrochloric-acid/chlorine, aqua-regia, precipitation, melting, casting, granulation, powder, or forming sequence actually used |
| market_state | At the refinery or forming facility gate, unpackaged, with form, fineness, alloy/platinum-plating status, and moisture or surface-treatment basis declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a declared saleable gold form within CPC 41320 |
| How much | 1 kg net gold product at the facility gate |
| How well | Conforming to the producer's declared fineness, physical form, dimensions or particle specification, alloy status, and platinum-plating status |
| How long or cycle | One production lot or campaign represented by the reporting period; no use duration is assigned |
| reference_flow_link | The output row `output_gold` is the quantitative reference |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Gold `4ceb691b-15cf-4775-b55e-06a0370973a7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | final physical form; gold fineness and assay method; alloy composition; platinum-plating presence and coating basis; production route; primary/intermediate or recycled feed route; facility geography; reporting period; net-mass boundary; packaging exclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-accounted material rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass excluding packaging. State whether powder moisture, surface coating, or retained process liquid is included; normalize every inventory amount to 1 kg of the declared reference product. |
| `contained_gold_accounting` | Doré, scrap, product, residue, and co-product metal accounting | Mass and assay fraction | kg Au | Calculate contained gold from measured lot mass, dry-matter correction where relevant, and representative assay. Preserve gross mass and assay records; do not substitute nominal fineness for measured assay. |
| `gas_reference_conditions` | Natural gas and industrial oxygen | Volume | m3 | Record meter reference temperature, pressure, dry/wet basis, and standard condition. Convert volume only when those conditions and the conversion method are documented. |
| `electricity_energy_basis` | Alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain the original meter unit and billing interval. When converting kWh to MJ, apply the exact SI relation 1 kWh = 3.6 MJ and retain both values. |

## 5. System Boundary

The foreground system contains feed acceptance and assay; only the preparation, melting, dissolution, refining, electrorefining, precipitation, casting, granulation, powder production, or semi-manufacturing operations actually used; off-gas capture and treatment; internal wastewater transfer and treatment attributable to the product; and final product assay and weighing. Buildings and capital equipment are outside the default foreground inventory unless explicitly included.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received gold-bearing feed has crossed the facility gate and has a unique lot identity, measured mass, representative gold assay, physical-state description, supplier/source route, and waste-or-product legal status. |
| starting_condition_role | Foreground gate input; upstream production, collection, and transport are represented separately when required by the declared study boundary. |
| product_classification_scope | Saleable outputs within CPC 3.0 code 41320 only. |
| recursive_input_rule | A purchased or transferred gold input already within CPC 41320 is recorded with its own upstream dataset and is not recursively re-produced inside this foreground process. Internal rework is recorded once in the mass balance and is not a new external input. |
| upstream_dataset_requirement | Link doré, gold scrap under the chosen recycling system model, electricity, fuels, oxygen, water, and each reagent to geography-, technology-, concentration-, and delivery-appropriate upstream datasets when constructing cradle-to-gate results. |
| disclosure | Declare feed route and legal status, supplier/source geography, assay and dry-mass basis, refining/forming technology, included environmental-control operations, recycling allocation approach, co-products, internal recycling, cut-offs, product form/fineness, and whether upstream transport is included. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_operation_selection | Include only operations actually used to transform accepted feed into the declared gold product; record route-specific reagents and emissions as conditional atomic exchanges. | `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020` |
| `boundary_rule_2` | environmental_controls | Include attributable off-gas capture/scrubbing and wastewater neutralization or treatment; do not report untreated generation and treated release as the same exchange. | `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020` |
| `boundary_rule_3` | upstream_and_recycling_boundary | Keep physical foreground collection from accepted feed to saleable product distinct from upstream datasets and the declared recycling system model. | `fritz-gold-scrap-recycling-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `gold_refining_and_forming` | Gold feed preparation, refining, environmental control, and final forming | required |  | Foreground production from accepted refinery feed to saleable gold product | 1 kg `output_gold` |

### Process: Gold feed preparation, refining, environmental control, and final forming (`gold_refining_and_forming`)

#### Inputs

##### Product flows

###### Doré bullion refinery feed (`feed_dore_bullion`)

Doré bullion is recorded when it enters the foreground gate as a product input. Include it only for lots supplied as doré; preserve measured mass, gold/silver assay, impurity profile, source route, and supplier dataset link.

- Selected flow: Doré bullion `51a53db0-358c-463b-96b3-691fc1e4b654`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted doré lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_assay`
- Sources: `eu-jrc-nfm-bref-2017`

###### Alternating-current electricity (`input_electricity`)

Record metered alternating-current electricity consumed by included production and environmental-control equipment.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity consumption allocated to included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### Gaseous natural gas (`input_natural_gas`)

Record gaseous natural gas when used in included furnaces, dryers, or thermal environmental-control operations.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured delivered gas at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `fritz-gold-scrap-recycling-2020`

###### Industrial oxygen (`input_industrial_oxygen`)

Record industrial oxygen only when used in cupellation, oxy-fuel melting, oxidation, or another included refining operation.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: measured oxygen delivered at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water (`input_process_water`)

Record process water supplied for dissolution, washing, granulation, electrolyte makeup, scrubbing, or attributable wastewater treatment. Keep fresh and internally recycled water separate.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh process-water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### Hydrochloric acid solution (`input_hydrochloric_acid`)

Record hydrochloric acid solution only for a route that consumes it. Supplied concentration and product state are mandatory qualifiers; the UUID remains unresolved until an exact concentration-specific identity is selected.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass / kg solution
- Amount rule: measured mass of supplied hydrochloric acid solution and recorded concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### Nitric acid (`input_nitric_acid`)

Record nitric acid only when aqua regia or another included nitric-acid operation is used; retain supplied concentration and grade.

- Selected flow: Nitric acid `bf883501-c052-414e-8e21-e6f53cc257ba`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of supplied nitric acid with concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### Sodium hydroxide (`input_sodium_hydroxide`)

Record sodium hydroxide consumed in off-gas scrubbing, wastewater neutralization, cyanide destruction where applicable, or another included operation; retain supplied concentration and state.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of supplied sodium hydroxide product or solution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### Quicklime (`input_quicklime`)

Record quicklime only when consumed in attributable wastewater neutralization. Do not substitute generic lime or a volume-only loose-product identity.

- Selected flow: Quicklime
- Flow property / unit: Mass / kg
- Amount rule: measured mass of quicklime consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `fritz-gold-scrap-recycling-2020`

###### Sulfur dioxide (`input_sulfur_dioxide`)

Record sulfur dioxide only when used to precipitate gold from solution; retain purity and supply state.

- Selected flow: sulfur dioxide `fdbae35b-dde5-45ff-9834-f61e1cdf32e4`
- Flow property / unit: Mass / kg
- Amount rule: measured mass supplied to gold precipitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_reagent_records`
- Sources: `fritz-gold-scrap-recycling-2020`

###### Chlorine gas (`input_chlorine`)

Record chlorine only when used in Miller refining, hydrochloric-acid/chlorine dissolution, or an included electrolyte operation.

- Selected flow: Chlorine `1fb2c22c-c189-4e2a-9a9f-810b59c37325`
- Flow property / unit: Mass / kg
- Amount rule: measured mass supplied to included operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_reagent_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Gold scrap refinery feed (`feed_gold_scrap`)

Record accepted waste and scrap of gold or gold-clad metal only for the secondary route. Preserve legal status, source category, measured mass, gold assay, non-gold composition, and recycling system model.

- Selected flow: Waste and scrap of gold or gold-clad metal
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted gold-scrap lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_assay`
- Sources: `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

##### Elementary flows

No elementary input is prescribed. Any directly withdrawn resource must be added as its own measured elementary-flow row.

#### Outputs

##### Product flows

###### Reference gold product (`output_gold`)

Record the saleable product after final assay and weighing. Form, fineness, dimensions or particle specification, alloy composition, and platinum-plating status must match the declared reference product.

- Selected flow: Gold `4ceb691b-15cf-4775-b55e-06a0370973a7`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming saleable gold product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_and_assay`
- Sources: `un-cpc-3-0-structure-2025`; `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

##### Waste flows

###### Refinery wastewater transferred for treatment (`output_wastewater`)

Record one measured wastewater stream transferred from included operations to treatment. Retain pH, mass or density conversion, dissolved/suspended metals, chloride/nitrate content, destination, and pre/post-treatment state.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of the defined refinery wastewater stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### Metal-hydroxide sludge from wastewater neutralization (`output_metal_hydroxide_sludge`)

Record dewatered metal-hydroxide sludge generated by neutralizing and filtering attributable gold-refinery wastewater. Keep it separate from anode sludge, petroleum-refinery sludge, and recoverable intermediates.

- Selected flow: Metal-hydroxide sludge from gold-refinery wastewater treatment
- Flow property / unit: Mass / kg wet sludge
- Amount rule: measured wet mass with dry-matter fraction and destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `fritz-gold-scrap-recycling-2020`

##### Elementary flows

###### Fossil carbon dioxide to air (`emission_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide from combustion within included operations. Exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated direct fossil CO2 from measured fuel use and documented carbon/oxidation basis, or measured stack mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `fritz-gold-scrap-recycling-2020`

###### Hydrogen chloride to air (`emission_hydrogen_chloride_to_air`)

Record measured post-abatement hydrogen chloride released from included refinery stacks when chloride operations apply.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured post-abatement stack release integrated over the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emission_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Chlorine to air (`emission_chlorine_to_air`)

Record measured post-abatement chlorine when chlorine operations apply. Select a UUID only after the actual air compartment is established.

- Selected flow: Chlorine emitted to air
- Flow property / unit: Mass / kg
- Amount rule: measured post-abatement stack release integrated over the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emission_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nitrogen dioxide to air (`emission_nitrogen_dioxide_to_air`)

Record nitrogen-oxide monitoring as nitrogen dioxide mass only when the method reports that basis. Do not substitute nitrite.

- Selected flow: Nitrogen dioxide emitted to air
- Flow property / unit: Mass / kg NO2
- Amount rule: measured post-abatement nitrogen dioxide release integrated over the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference gold product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emission_records`
- Sources: `eu-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | separately_metered_operations | Avoid allocation by subdividing and directly assigning measured inputs, wastes, and emissions to the operation and lot that produced them. | `fritz-gold-scrap-recycling-2020` |
| `allocation_rule_2` | inseparable_multi_output_operations | When gold and other valuable metals are inseparable at the measurement point, report mass allocation and economic allocation based on documented contemporaneous net values as sensitivity cases; identify the primary case and retain masses, assays, prices, currency, date, and calculations. | `fritz-gold-scrap-recycling-2020` |
| `allocation_rule_3` | internal_recovery_and_rework | Return internally recovered gold-bearing residues to the mass balance once without treating them as a new external input or avoided product. Exported material receives a separate verified product or waste flow. | `eu-jrc-nfm-bref-2017` |
| `allocation_rule_4` | recycled_feed | Declare the recycling system model for gold scrap and keep upstream collection or avoided-primary-production credit outside the physical foreground inventory unless the boundary is explicitly expanded. | `fritz-gold-scrap-recycling-2020` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_and_assay` | `gold_refining_and_forming` | accepted feed, product, and contained-gold balance | scale record and laboratory assay | lot_id; time; gross_mass; tare_mass; net_mass; dry_fraction; Au_assay; other_assays; assay_method; sample_id; form; disposition | Calibrated weighing and documented representative sampling/assay for each lot | kg; mass fraction | Every lot | Full reporting period | Receiving, intermediate, and dispatch points | Calculate contained metal by lot before period aggregation | Scale calibration; sampling plan; laboratory QA/QC; chain of custody; reconciliation |
| `cp_energy_and_fuel_records` | `gold_refining_and_forming` | electricity, natural gas, and direct fossil CO2 | meter, invoice, and fuel specification | meter_id; readings; unit; time; allocation_driver; gas_conditions; carbon_factor; oxidation_basis | Read calibrated meters, reconcile invoices, and assign only included operations | MJ; kWh; m3 | At least monthly and at campaign change | Full reporting period | Included production and control equipment | Sum each carrier, subtract documented exports, normalize to product, and calculate direct CO2 separately | Calibration; invoices; reconciliation; fuel specification |
| `cp_gas_reagent_records` | `gold_refining_and_forming` | oxygen, sulfur dioxide, and chlorine | flow meter, tank/cylinder issue, or invoice | identity; purity; state; mass_or_volume; reference_conditions; issue_quantity; operation; lot_id | Reconcile delivery and issue records to operation and campaign | kg; m3 | Each delivery or issue | Full reporting period | Included refining operations | Sum each gas separately by consuming route | Calibration; supplier certificate; stock reconciliation |
| `cp_water_records` | `gold_refining_and_forming` | fresh process water | water meter and transfer record | meter_id; source; readings; unit; density; operation; recycled_return | Meter fresh water separately from recycled water | kg; m3 | At least monthly | Full reporting period | Included supply points | Convert volume only with documented density; prevent recycled-water double count | Calibration; water balance; invoice or abstraction record |
| `cp_reagent_records` | `gold_refining_and_forming` | liquid and solid reagents | purchase, stock, batch, and dosing records | identity; concentration; grade; state; opening_stock; receipts; closing_stock; issued; returns; operation; lot_id | Reconcile stock change and dosing for each chemical separately | kg product; kg active | Each batch with monthly reconciliation | Full reporting period | Reagent stores and dosing points | Use opening plus receipts minus closing minus returns; report product and active basis separately | Supplier certificate; stock reconciliation; calibrated dosing record |
| `cp_waste_records` | `gold_refining_and_forming` | wastewater and hydroxide sludge | meter/scale, analysis, and transfer manifest | stream_id; stage; mass_or_volume; density; pH; dry_fraction; metals; anions; destination; waste_code; date | Meter each defined stream and retain representative analysis and transfer evidence | kg; m3; mass fraction | Each transfer or continuous total | Full reporting period | Attributable treatment transfers | Aggregate each stream by treatment state and destination; prevent pre/post-treatment double count | Calibration; laboratory QA/QC; manifest; treatment log |
| `cp_stack_emission_records` | `gold_refining_and_forming` | post-abatement HCl, chlorine, and NO2 | monitor or stack test plus operating log | source_id; pollutant; concentration; flow; reference_conditions; correction; duration; method; detection_limit; hours; abatement_status | Pair concentration with dry-gas flow and operating time using the applicable method | kg; mg/Nm3; Nm3/h | Permit frequency or continuous | Representative operating states in the reporting period | Each attributable emission point | Calculate mass by source and sum only like substances on the same chemical basis | Calibration; accredited report; detection-limit rule; operating logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | contained gold by lot | contained_Au_kg = net_mass_kg × dry_matter_fraction × Au_assay_mass_fraction | lot mass, dry fraction, assay | kg contained Au | `mass-balance-identity` |
| `calc_rule_2` | normalized inventory | normalized_exchange = reporting_period_exchange ÷ conforming_output_gold_kg | period exchange and product mass | exchange per 1 kg gold | `mass-balance-identity` |
| `calc_rule_3` | stock-reconciled reagent use | reagent_use = opening_stock + receipts - closing_stock - documented_returns | stock and issue records | kg product and active substance | `mass-balance-identity` |
| `calc_rule_4` | direct fossil carbon dioxide | Calculate from measured fuel using documented carbon content and oxidation basis; exclude biogenic and upstream fuel-cycle emissions. | fuel quantity, energy basis, carbon factor, oxidation basis | kg fossil CO2 | `mass-balance-identity` |
| `calc_rule_5` | measured stack release | pollutant_mass = concentration × dry-gas flow × operating duration under consistent reference conditions and documented below-detection treatment | concentration, gas flow, duration, correction | kg pollutant | `eu-jrc-nfm-bref-2017` |
| `calc_rule_6` | gold mass-balance closure | closure = (contained_Au_inputs - contained_Au_outputs_and_documented_losses) ÷ contained_Au_inputs; investigate rather than force discrepancies outside the approved control limit | assayed inputs, products, residues, work-in-progress change, losses | dimensionless reconciliation | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_1` | product and feed identity | Preserve lot-level form, assay, fineness, impurity/alloy profile, source route, legal status, and chain of custody; do not merge doré and scrap routes before route-level reporting. | Weighing, assay, supplier declaration, and lot genealogy |
| `dq_2` | completeness | Cover all included operations and all applicable atomic rows for the reporting period; explain every missing or zero route-specific row. | Signed process-map and ledger/utility reconciliation |
| `dq_3` | temporal and geographic representativeness | Use one coherent period, normally at least 12 consecutive months unless a complete campaign is more representative; identify facility and upstream dataset geographies. | Reporting calendar, production log, and metadata |
| `dq_4` | metrology and laboratory quality | Use calibrated instruments and documented sampling, detection limits, laboratory QA/QC, and uncertainty for assay and emissions. | Calibration, sampling plans, control charts, accredited reports |
| `dq_5` | technology and controls | Declare route, operating state, abatement, wastewater treatment, internal recycling, and exceptional events represented. | Process flow diagram, batch sheets, control logs, incident records |
| `dq_6` | allocation transparency | Retain unallocated measurements and all mass/economic allocation inputs for reproduction and sensitivity comparison. | Allocation workbook, masses/assays, price sources, dates |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_product | Confirm `output_gold` equals 1 kg after normalization and that form, fineness, alloy composition, and platinum-plating status are within the category. | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | inventory_identity | Confirm each card is one atomic exchange; UUID rows match the stated identity/property/unit and official Chinese name; unresolved rows remain UUID-empty. |  |
| `validation_rule_3` | route_consistency | Reject a route-specific reagent or emission without the corresponding declared operation, or an operation whose applicable measured inputs, wastes, or releases are omitted without explanation. | `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020` |
| `validation_rule_4` | mass_and_assay_balance | Recalculate contained-gold inputs, outputs, work-in-progress change, residues, and measured losses; investigate rather than force discrepancies. | `mass-balance-identity` |
| `validation_rule_5` | environmental_control_state | Confirm wastewater identifies treatment state/destination and air releases are post-abatement with actual compartment and monitoring basis. | `eu-jrc-nfm-bref-2017` |
| `validation_rule_6` | data_provenance | Confirm every normalized amount traces to the named protocol and same-period records, with conversions and allocation reproducible. |  |
| `validation_rule_7` | range_use | Do not apply an external empirical range until at least two independent, original-text-verified, boundary-compatible sources support synthesis for the route and product state. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset eligible as a secondary_dataset or background_dataset after review |
| downstream_use | Product, process, and lifecyclemodel records for declared gold forms and route-specific cradle-to-gate studies |
| allowed_use | Use for the represented facility, feed route, technology, product form/fineness, geography, period, allocation case, and boundary |
| excluded_use | Not a generic mine-to-gold dataset or proxy for finished jewellery/electronics/coins, another recycling model, or another refining route without review |
| required_metadata | PCR id/version; product form/fineness; alloy/plating status; feed route/legal status; geography; period; process route; boundary; upstream datasets; recycling model; allocation; UUID resolutions; owner/review status |
| required_quality_disclosure | Coverage; mass/assay reconciliation; metrology; representativeness; cut-offs; allocation sensitivity; unresolved UUIDs; uncertainty; abnormal events; environmental-control state |
| update_trigger | Change in feed route, technology, controls, product form/fineness, allocation, geography, supplier mix, or period; material correction; resolution of open UUID or range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 41320 identity and market forms |
| `eu-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, 2017, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf (retrieved 2026-09-04) | Feedstocks, gold routes, reagents, controls, emissions and wastewater monitoring |
| `fritz-gold-scrap-recycling-2020` | Literature (`literature`) | Fritz, B.; Aichele, C.; Schmidt, M. Environmental impact of high-value gold scrap recycling. International Journal of Life Cycle Assessment 25, 1930-1941 (2020). https://doi.org/10.1007/s11367-020-01809-6 (retrieved 2026-09-04) | Recycled-gold boundary, aqua-regia process, reagents, wastewater/sludge, foreground collection, and allocation |
