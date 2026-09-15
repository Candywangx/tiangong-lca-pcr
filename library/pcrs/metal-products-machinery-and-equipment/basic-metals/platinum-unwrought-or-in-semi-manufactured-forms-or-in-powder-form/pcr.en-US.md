---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.platinum-unwrought-or-in-semi-manufactured-forms-or-in-powder-form
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Platinum, unwrought or in semi-manufactured forms, or in powder form

## 1. Scope and Applicability

This PCR applies to the production of saleable platinum metal leaving the producing facility in an unwrought form, a semi-manufactured form, or powder form. It supports a foreground refinery-and-finishing dataset whose declared starting condition is an assayed platinum-bearing refinery feed lot. Primary and secondary feed routes are eligible only when their upstream histories and burden treatment are disclosed.

The boundary includes feed receipt, homogenisation, sampling and assay; applicable thermal pretreatment or melting; hydrometallurgical or pyrometallurgical concentration and separation; final reduction or pyrolysis to metal; purification; internal precious-metal recycle; wastewater and residue management; and the forming operation needed for the declared market form. It ends when the released platinum product leaves the factory gate.

Platinum ores and concentrates sold without refinery conversion, platinum compounds, catalysts and catalyst articles, jewellery, fabricated end-use articles, waste and scrap, and palladium, rhodium, ruthenium, iridium, osmium, gold, silver, or base-metal products are outside the reference-product boundary. Co-produced metals remain reportable co-products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.platinum-unwrought-or-in-semi-manufactured-forms-or-in-powder-form |
| classification_refs | CPC 3.0 `41330` — Platinum, unwrought or in semi-manufactured forms, or in powder form |
| covered_products | Platinum metal released as unwrought metal, metal sponge, powder, or a declared semi-manufactured form such as plate, sheet, strip, rod, wire, tube, or foil |
| excluded_products | Ores and concentrates; platinum compounds; catalysts and fabricated catalyst articles; jewellery and finished articles; waste and scrap; mixed PGM products without separately quantified platinum |
| representative_product | Saleable platinum metal with declared platinum mass fraction and declared physical form |
| production_route | Precious-metal refining followed by route-appropriate reduction, melting, powder finishing, or semi-manufacturing; primary and secondary feed histories are declared separately |
| market_state | Factory-gate, saleable platinum in the declared unwrought, semi-manufactured, or powder state; purity, dimensions or particle specification, and packaging condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of saleable platinum metal in one declared covered physical form |
| How much | 1 kg net platinum product at the factory gate |
| How well | Conforms to the producer's declared platinum mass fraction and form-specific release specification; no universal purity is inferred |
| How long or cycle | One completed production campaign or accounting period represented by contemporaneous foreground records |
| reference_flow_link | The reference amount is the measured net mass of the released platinum product represented by inventory row `platinum_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Platinum, unwrought or in semi-manufactured forms, or in powder form — UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | platinum mass fraction and assay method; physical form; dimensions or particle-size specification when applicable; primary, secondary, or mixed feed route; feed origin and burden treatment; facility geography; refining and finishing technology; production period; allocation method; internal recycle treatment; factory-gate packaging condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalised inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net released product mass. Preserve measured values before normalising all foreground exchanges to 1 kg of released platinum product. |
| `platinum_content_basis` | feed, product, residues, and co-products | Mass and reported platinum mass fraction | kg and kg Pt/kg material | Record wet or dry basis, sampling method, assay method, and uncertainty. Do not substitute total PGM content for platinum content. |
| `solution_concentration_basis` | hydrochloric acid and other aqueous reagents | Mass and solution concentration | kg solution and mass fraction | Report purchased or make-up solution mass and concentration separately; do not report active-acid mass as solution mass. Recovered internal acid is not a new technosphere input. |
| `gas_volume_basis` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature, absolute pressure, and dry/wet basis for gas volume; retain the metered volume and any conversion factor. |
| `electricity_energy_basis` | purchased electricity | Energy | kWh | Record meter-delivered electricity in kWh and declare voltage level, grid geography, contractual supply, and on-site generation treatment. Do not use a voltage-transformation service or cable flow as electricity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | An identified, weighed, homogenised or otherwise representatively sampled, and assayed platinum-bearing refinery feed lot received at the foreground facility |
| starting_condition_role | Foreground refinery input; its upstream production or collection and preprocessing is represented by linked upstream datasets or an explicitly justified secondary-material cut-off |
| product_classification_scope | Saleable platinum metal in unwrought, semi-manufactured, or powder form; route and physical form do not create separate canonical PCR identities |
| recursive_input_rule | If a covered platinum product re-enters as feed, record it once as a product input with its upstream dataset and model only the incremental foreground refining or forming; do not recursively expand the same PCR inside the foreground process |
| upstream_dataset_requirement | Primary feed requires traceable upstream mining, concentration, smelting, and base-metal-refining datasets as applicable. Secondary feed requires collection and preprocessing datasets unless a declared cut-off convention legitimately assigns it zero incoming burden. |
| disclosure | Declare feed category and origin, platinum and co-metal assays, primary/secondary share, cut-off convention, included unit operations, internal recycle loops, abatement and wastewater treatment, finishing form, geography, technology, period, and exclusions |

### System Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_boundary` | foreground refinery-and-finishing system | Include all attributable foreground material, energy, water, waste, and direct-emission exchanges from receipt of the declared assayed feed to released platinum at the factory gate. | `eu-nfm-bat-conclusions-2016`; `ipa-pgm-lca-2017-2022-update` |
| `sb_route_disclosure` | primary, secondary, or mixed feed | Preserve primary and secondary feed histories as explicit metadata and do not average unlike upstream burden conventions without reporting the shares and calculation. | `ipa-pgm-lca-2017-2022-update` |
| `sb_recycle_loops` | acid, chlorine, water, precious-metal, and residue loops | Count make-up inputs and net outputs crossing the foreground boundary. Report internally recovered and recirculated quantities separately and do not count them as new external inputs. | `eu-nfm-bat-conclusions-2016` |
| `sb_forming_condition` | semi-manufactured or powder output | Include the forming, powder preparation, melting, casting, rolling, drawing, extrusion, annealing, or finishing operations performed before the declared factory-gate product is released; mark absent operations not applicable. | `eu-nfm-bat-conclusions-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `platinum_refining_and_finishing` | Platinum refining and finishing | required | Always included; individual route-conditioned exchanges are recorded only when they cross the declared foreground boundary | Foreground production from assayed refinery feed through released platinum form | 1 kg released platinum product |

### Process: Platinum refining and finishing (`platinum_refining_and_finishing`)

This integrated process avoids multiplying proprietary and repeatedly cycled refinery stages into artificial route-by-form combinations. Unit-operation records must still identify feed preparation, sampling and assay, dissolution or smelting, separation and purification, final metal recovery, internal recycle, effluent treatment, and product-form finishing when each operation occurs.

#### Inputs

##### Product flows

###### Assayed platinum-bearing refinery feed lot (`pt_refinery_feed`)

The received physical feed lot crosses the foreground refinery boundary once. Its state, origin, dry matter, platinum assay, other valuable-metal assays, and upstream dataset are recorded for the actual campaign.

- Selected flow: Assayed platinum-bearing refinery feed lot — UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measure received mass and determine dry mass and platinum content from representative sampling and assay; keep each materially distinct feed lot as a separate exchange record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_mass_assay`
- Sources: `eu-nfm-bat-conclusions-2016`

###### Hydrochloric acid solution, 30% (`hydrochloric_acid_30`)

Purchased or externally supplied 30% hydrochloric acid solution is recorded when used as refinery make-up acid. Internally recovered acid is reported in the recycle ledger rather than counted again as an input.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum weighed or invoiced 30% solution entering the campaign boundary; record actual concentration and convert only with documented solution mass fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-nfm-bat-conclusions-2016`

###### Chlorine gas (`chlorine_gas`)

Externally supplied chlorine is recorded for hydrochloric-acid/chlorine dissolution or dry chlorination when that route is used. Recovered chlorine in a closed loop is not counted as a new input.

- Selected flow: Chlorine `1fb2c22c-c189-4e2a-9a9f-810b59c37325`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure make-up chlorine crossing the facility process boundary for the represented campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-nfm-bat-conclusions-2016`

###### Sodium hydroxide (`sodium_hydroxide`)

Externally supplied sodium hydroxide is recorded when used for feed treatment, neutralisation, or wastewater treatment attributable to the represented campaign. Solution concentration and supply state remain foreground qualifiers.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum purchased or make-up sodium hydroxide product mass entering included operations and report solution concentration where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reagent_records`
- Sources: `eu-nfm-bat-conclusions-2016`

###### Process water (`process_water`)

Make-up process water crossing the boundary is recorded for dissolution, washing, scrubbing, product finishing, and attributable wastewater treatment. Recirculated water is disclosed separately without double counting.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter or otherwise reconcile make-up process water entering included operations; disclose source, quality, and density conversion if volume records are converted to mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-nfm-bat-conclusions-2016`; `ipa-pgm-lca-2017-2022-update`

###### Purchased electricity (`purchased_electricity`)

Meter-delivered electricity is recorded as one energy exchange. Voltage, grid geography, contractual supply, and on-site generation are qualifiers rather than separate unverified flow identities.

- Selected flow: Purchased alternating-current electricity — UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Sum revenue-grade meter readings attributable to included operations, net of documented exported electricity and excluding electricity already embedded in upstream datasets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `eu-nfm-bat-conclusions-2016`; `ipa-pgm-lca-2017-2022-update`

###### Gaseous natural gas (`gaseous_natural_gas`)

Gaseous natural gas is recorded when combusted in included drying, thermal pretreatment, reduction support, melting, annealing, or finishing operations. Supply conditions and lower heating value are retained.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Record calibrated metered volume at stated reference conditions for the represented campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-nfm-bat-conclusions-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released platinum product (`platinum_product`)

The released reference product is one declared physical form and one release specification. Different saleable forms or specifications are separate dataset variants, not aggregated exchanges.

- Selected flow: Platinum, unwrought or in semi-manufactured forms, or in powder form — UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure net released product mass and assay; normalise the completed inventory to exactly 1 kg of this output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release`
- Sources: `un-cpc-3-structure-2025`; `ipa-pgm-lca-2017-2022-update`

##### Waste flows

###### Platinum-bearing hydroxide filter cake (`platinum_filter_cake`)

The weighed hydroxide filter cake leaving wastewater treatment for external recovery or disposal is recorded separately from internally recycled precious-metal residue. Its retained platinum and other regulated metal concentrations are assayed.

- Selected flow: Platinum-bearing hydroxide filter cake — UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh cake leaving the foreground boundary, determine dry matter and platinum concentration, and record destination and recovery status.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `eu-nfm-bat-conclusions-2016`

###### Acidic chloride-bearing refinery wastewater (`acidic_chloride_wastewater`)

Net acidic chloride-bearing wastewater sent to external treatment or discharge after included on-site treatment is one aqueous waste exchange. Internally recirculated leach liquor and water are excluded from this net output.

- Selected flow: Acidic chloride-bearing platinum-refinery wastewater — UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Meter net wastewater crossing the foreground boundary and retain pH, chloride, suspended-solids, platinum, and other regulated-metal analyses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-nfm-bat-conclusions-2016`

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide`)

Direct fossil carbon dioxide from on-site combustion of gaseous natural gas in included operations is calculated separately from upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate fossil CO2 from campaign natural-gas consumption and documented carbon content or supplier emission factor; reconcile with direct emissions monitoring when available.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released platinum product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-nfm-bat-conclusions-2016`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | separately metered operations and campaigns | Avoid allocation by subdividing campaign, unit-operation, and product-form records wherever technically feasible. | `eu-nfm-bat-conclusions-2016` |
| `allocation_precious_metals` | joint precious-metal refinery burdens that cannot be subdivided | Allocate remaining shared precious-metal-refinery burdens by recovered mass of each separately assayed saleable precious metal, and disclose the factors and sensitivity to an economic alternative. | `ipa-pgm-lca-2017-2022-update` |
| `allocation_base_and_precious_metals` | unresolved joint production of base and precious metals | Use the verified upstream supplier dataset method. If foreground joint burdens cannot be subdivided, apply economic allocation to recovered metal content with documented prices, period, currency, and sensitivity; do not mix methods silently. | `ipa-pgm-lca-2017-2022-update` |
| `allocation_internal_recovery` | internal solutions, residues, filter cakes, and off-spec metal | Treat material returned within the foreground boundary as internal recycle without avoided-product credit. Recognise a co-product or waste only when it crosses the boundary, has a measured quantity, and has a documented destination. | `eu-nfm-bat-conclusions-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_mass_assay` | `platinum_refining_and_finishing` | assayed refinery feed | weighbridge/batch ticket and laboratory assay | lot id; origin; route; gross, tare and net mass; moisture; Pt and co-metal assays; sampling and assay methods; uncertainty; upstream dataset id | Calibrated weighing plus representative sampling and documented laboratory assay | kg; kg Pt/kg dry feed | Every received lot | Same campaigns and period as product output | All included refinery feeds | Keep distinct feed lots; aggregate mass and contained metal only after dry-basis conversion and route tagging | Calibration records; chain of custody; duplicate or certified-reference assay checks |
| `cp_reagent_records` | `platinum_refining_and_finishing` | hydrochloric acid, chlorine, and sodium hydroxide make-up | tank, scale, flowmeter, batch, and invoice records | reagent id; concentration/purity; opening and closing stock; receipts; returns; recovered-loop quantity; allocation key | Reconcile calibrated storage and dosing records with purchases and production batches | kg product | Each batch; monthly reconciliation | Full represented period | All included operations | External input = opening stock + receipts - closing stock - documented returns; internal recycle reported separately | Meter/scale calibration; supplier certificate; inventory reconciliation |
| `cp_water_records` | `platinum_refining_and_finishing` | process-water make-up | water meter and balance | source; quality; meter readings; density; recirculation; discharge | Calibrated make-up meters reconciled to recirculation and wastewater records | kg or m3 with conversion | Continuous or each batch; monthly reconciliation | Full represented period | All included water systems | Count only make-up crossing the boundary; retain measured volume and documented density for mass conversion | Meter calibration; water balance; laboratory quality results |
| `cp_electricity_records` | `platinum_refining_and_finishing` | purchased electricity | revenue/submeter records | meter id; import; export; voltage; grid geography; contract; on-site generation; operation allocation | Revenue meters and calibrated submeters; documented allocation for shared loads | kWh | Continuous; monthly reconciliation | Full represented period | All included operations | Sum imported electricity attributable to included operations minus documented export; do not net unrelated site loads | Utility invoices; meter calibration; submeter coverage and reconciliation |
| `cp_fuel_records` | `platinum_refining_and_finishing` | gaseous natural gas and direct fossil CO2 | custody-transfer meter, fuel certificate, and emissions calculation | gas volume; temperature; pressure; moisture; heating value; carbon content; meter id; operation; monitoring result | Calibrated metering at stated reference conditions; calculate CO2 from documented carbon data and reconcile with monitoring | m3 gas; kg CO2 | Continuous or each batch; monthly reconciliation | Full represented period | Included fuel-burning equipment only | Aggregate condition-corrected volume; allocate shared equipment by defensible operating records; calculate direct fossil CO2 consistently | Meter calibration; supplier certificate; calculation sheet; emissions-monitor reconciliation |
| `cp_product_release` | `platinum_refining_and_finishing` | released platinum product | final scale, batch release, and assay records | product lot; net mass; Pt assay; physical form; dimensions/particle specification; off-spec return; packaging tare | Calibrated final weighing and documented product-release assay | kg product; kg Pt/kg product | Every released lot | Same campaigns and period as inputs | All covered product lots in one declared dataset variant | Sum conforming net released mass; exclude packaging tare and returned or off-spec material; normalise to 1 kg | Scale calibration; certificate of analysis; release specification; lot traceability |
| `cp_residue_records` | `platinum_refining_and_finishing` | platinum-bearing hydroxide filter cake | waste manifest, scale, and laboratory analysis | mass; moisture; Pt and regulated-metal concentrations; destination; recovery/disposal status | Weigh each shipment or container and sample using a documented heterogeneous-solid protocol | kg wet and dry cake; kg Pt/kg dry cake | Each shipment or batch | Full represented period | All filter cake crossing the boundary | Aggregate destination-specific dry and wet masses; keep internal returns outside the output | Scale calibration; chain of custody; laboratory QA/QC; waste manifest |
| `cp_wastewater_records` | `platinum_refining_and_finishing` | acidic chloride-bearing wastewater | flowmeter and composite sample | flow; density; pH; chloride; suspended solids; Pt and regulated metals; treatment stage; destination | Calibrated net-flow measurement plus flow-proportional composite sampling | kg or m3; concentration units | Continuous flow; composite per permit or batch | Full represented period | Net wastewater crossing the foreground boundary | Convert volume to mass only with measured/documented density; calculate loads from matched flow and concentration periods | Flowmeter calibration; laboratory QA/QC; treatment and discharge records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise_reference` | every inventory exchange | Normalised amount = campaign exchange amount / net kg of conforming released platinum product. | Campaign exchange quantity; `cp_product_release` net product mass | Exchange per 1 kg reference product |  |
| `calc_dry_feed_platinum` | `pt_refinery_feed` | Dry feed mass = net wet mass × (1 - moisture fraction); contained Pt = dry feed mass × dry-basis Pt mass fraction. | Weighing, moisture, and assay records from `cp_feed_mass_assay` | kg dry feed and kg contained Pt |  |
| `calc_solution_mass` | aqueous reagent records | Keep solution product mass as the exchange; active reagent mass = solution mass × measured mass fraction is an additional calculation and must not replace the product exchange. | Reagent mass and concentration from `cp_reagent_records` | kg solution and kg active substance |  |
| `calc_direct_fossil_co2` | `fossil_carbon_dioxide` | Calculate CO2 from measured fuel and documented carbon content or supplier factor; keep factor identity, oxidation assumption, and monitoring reconciliation. | Natural-gas record and carbon data from `cp_fuel_records` | kg fossil CO2 | `eu-nfm-bat-conclusions-2016` |
| `calc_precious_metal_allocation` | inseparable joint precious-metal-refinery burdens | Allocation factor for metal i = recovered saleable mass of metal i / total recovered saleable mass of jointly processed precious metals. | Assayed released masses for all joint precious-metal co-products | Product-specific allocation factors summing to 1 | `ipa-pgm-lca-2017-2022-update` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and feed | Preserve lot-to-lot traceability, physical form, purity, feed origin, route, and Tiangong UUID status; do not substitute a wire-only UUID for the broader reference product. | Release certificates, feed tickets, assay records, and unresolved-UUID review metadata |
| `dq_temporal` | all foreground records | Use a common representative period, normally at least 12 consecutive months or a complete documented campaign set covering seasonal and maintenance variation; explain shorter periods. | Meter, inventory, production, maintenance, and batch coverage records |
| `dq_completeness` | material, energy, water, waste, and direct emissions | Reconcile all included operations and identify every additional reagent, fuel, waste, or direct elementary flow as its own atomic exchange before publication. | Mass/metal balances, utility reconciliation, waste manifests, emissions inventory, and completeness checklist |
| `dq_assay` | Pt-bearing feeds, products, co-products, and residues | Use representative sampling, documented assay methods, units, detection limits, and uncertainty; retain duplicate or reference-material QA results where available. | Sampling plans, laboratory reports, QA/QC records, and certificates of analysis |
| `dq_geography_technology` | upstream datasets and utilities | Match geography, technology, product state, concentration, and delivery boundary; disclose any proxy and do not assign an unverified UUID. | Supplier dataset metadata, contracts, process description, and UUID audit record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_product` | reference flow and `platinum_product` | Verify exactly 1 kg net released platinum product after normalisation, with declared platinum assay and covered physical form; reject mixed-PGM mass as the platinum reference amount. | `un-cpc-3-structure-2025` |
| `val_inventory_reconciliation` | foreground inventory | Require all 11 prescribed atomic rows to be either UUID-matched or explicitly unresolved and applicable rows to carry foreground quantities; add separate audited rows for any additional actual reagent, fuel, waste, or direct emission. | `eu-nfm-bat-conclusions-2016` |
| `val_mass_metal_balance` | feeds, product, co-products, residues, and wastewater | Reconcile total mass and contained platinum across input, released products, internal stocks/recycle, residues, and measured losses; document uncertainty and investigation of material imbalance. | `eu-nfm-bat-conclusions-2016` |
| `val_no_double_counting` | internal loops and upstream datasets | Verify that recovered acid, chlorine, water, solutions, residues, and platinum are not counted as new inputs and that upstream burdens are not duplicated in the foreground inventory. | `eu-nfm-bat-conclusions-2016` |
| `val_allocation` | multi-metal campaigns | Verify subdivision was attempted first, all allocation factors sum to 1 for the allocated burden, co-product quantities and assays are measured, and sensitivity and method disclosures are present. | `ipa-pgm-lca-2017-2022-update` |
| `val_waste_emissions` | wastewater, filter cake, and direct fossil CO2 | Verify wastewater and filter cake destinations and compositions, distinguish internal recovery from boundary outputs, and exclude upstream electricity emissions from direct fossil CO2. | `eu-nfm-bat-conclusions-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review; candidate foreground packages remain authoring inputs |
| downstream_use | Product-system modelling requiring platinum at the factory gate, with route, form, purity, geography, technology, period, and allocation matched to the study |
| allowed_use | Use for the declared primary, secondary, or mixed feed route and declared released product form after UUID gaps, data-quality evidence, and boundary compatibility are reviewed |
| excluded_use | Direct representation of ore or concentrate, platinum compounds, catalysts, jewellery, fabricated end-use articles, scrap treatment alone, or another PGM; unsupported extrapolation between primary and secondary routes |
| required_metadata | PCR id; product form and purity; product and feed assays; feed route and origin; secondary cut-off convention; system boundary; geography; technology; period; allocation; UUID status; source and collection protocol versions |
| required_quality_disclosure | Record coverage, meter and scale calibration, sampling and assay QA/QC, mass and platinum balance, allocation sensitivity, proxy datasets, unresolved UUIDs, and unresolved range-evidence needs |
| update_trigger | Material change in feed mix, burden convention, refinery or finishing technology, energy or water supply, recovery efficiency, product specification, allocation, abatement, wastewater treatment, geography, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-04, SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | Exact CPC 41330 classification identity and English title; independence key `unsd-cpc-3.0-structure-2025` |
| `china-mof-research-goods-list-2026` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, *免税科研货物清单* (Duty-free scientific research goods list), item 151 / heading 7110, https://m.mof.gov.cn/zcfb/202601/P020260114634207037460.pdf, 2026, retrieved 2026-09-04, SHA-256 `844ae4413404a9727f8cb805c2ebbfef8959afc2e44db43d421ed9da0ab6b350` | Verification of professional Chinese product-state terminology “铂，未锻造、半制成或粉末状”; independence key `china-mof-tax-free-research-goods-list-2026` |
| `eu-nfm-bat-conclusions-2016` | Official guidance (`official_guidance`) | European Commission, *Commission Implementing Decision (EU) 2016/1032 establishing best available techniques (BAT) conclusions for the non-ferrous metals industries*, Official Journal L 174, 30 June 2016, official full-text XHTML, https://publications.europa.eu/resource/cellar/174bd664-3e84-11e6-af30-01aa75ed71a1.0006.03/DOC_1, retrieved 2026-09-04, SHA-256 `1a752d504bcfdbf68ca521d73ab48fa511de01b750923089f1591f95dfa06699` | Original-text non-ferrous and precious-metal process scope; material selection and mixing; pretreatment, smelting/melting, leaching and hydrometallurgical stages; energy management; wastewater measurement, reuse, segregation, treatment, and monitoring; and HCl/Cl2 controls; independence key `eu-commission-implementing-decision-2016-1032` |
| `ipa-pgm-lca-2017-2022-update` | Literature (`literature`) | International Platinum Group Metals Association, *The Life Cycle Assessment of Platinum Group Metals (PGMs): Reference Year 2017 & 2022 Update*, 2022, https://ipa-news.com/assets/pdfs/2022-06-21-lca-fact-sheet-2022-ipa.pdf, retrieved 2026-09-04 | Original-text cradle-to-gate boundary, separate primary/secondary route treatment, 1 kg platinum functional-unit precedent, and mass/economic allocation practice; independence key `ipa-sphera-pgm-lca-2017-2022-update` |
