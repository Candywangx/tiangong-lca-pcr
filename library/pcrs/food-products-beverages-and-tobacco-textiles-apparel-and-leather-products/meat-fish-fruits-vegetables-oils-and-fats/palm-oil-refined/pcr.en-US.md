---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-refined
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Palm oil, refined

## 1. Scope and Applicability

This PCR governs foreground data packages for bulk refined palm oil produced from crude palm oil at a refinery. It covers physical refining to refined, bleached and deodorised (RBD) palm oil and chemical refining to neutralised, bleached and deodorised (NBD) palm oil when the route is explicitly declared. The representative route is conventional physical refining because it produces RBD palm oil and palm fatty acid distillate (PFAD), and it is the route documented by the category-specific refinery evidence.

The foreground boundary starts with crude palm oil received at the refinery inlet and ends with conforming bulk refined palm oil in refinery storage, ready for dispatch. Inbound crude-palm-oil transport may be included as a conditional foreground process. Oil-palm cultivation, palm-oil milling, fractionation into palm olein or palm stearin, retail packaging, distribution, use, biodiesel conversion, and end-of-life are outside the default foreground boundary. Upstream crude palm oil and other purchased inputs remain linked product inputs and require appropriate upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-refined` |
| classification_refs | CPC 3.0:21652 Palm oil, refined |
| covered_products | Bulk refined palm oil derived from the fleshy mesocarp oil of Elaeis guineensis, including RBD palm oil from physical refining and NBD palm oil from chemical refining when the route and grade are declared |
| excluded_products | Crude palm oil; palm-kernel oil; palm olein, palm stearin, palm superolein, and other fractionated products; blended cooking oils; margarine and formulated fats; biodiesel; packaged retail products |
| representative_product | Bulk refined, bleached and deodorised palm oil at the refinery gate |
| production_route | Crude palm oil receipt and storage, degumming, bleaching and filtration, physical deacidification/deodorisation or declared chemical neutralisation/deodorisation, cooling, polishing filtration, and bulk storage |
| market_state | Bulk finished product at refinery gate, normally semi-solid at room temperature; edible or technical grade must be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of bulk refined palm oil from crude palm oil at a refinery |
| How much | 1,000 kg of conforming refined palm oil |
| How well | The declared physical or chemical refining route, product grade, specification, geography, and bulk state are met; edible product claims must identify the applicable food specification, such as Codex CXS 210-1999 |
| How long or cycle | One production batch or the declared reporting period, normalised to 1,000 kg of conforming output; no use duration is assigned |
| reference_flow_link | The reference product output of `palm_oil_refining`, before fractionation or retail packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Palm oil, refined `029b6008-a809-4d77-8612-47451f7c98fa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | refining_route; product_grade; applicable_product_specification; production_geography; reporting_period; bulk_or_packaged_state; fractionation_status; allocation_basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference refined palm oil output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Set the quantitative reference to exactly 1,000 kg of conforming bulk refined palm oil and scale all foreground quantities to that mass. |
| `material_mass_conversion` | Crude palm oil, refining aids, co-products, and solid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured masses to kg using documented conversion factors; do not infer mass from volume without a recorded density and measurement condition. |
| `energy_carrier_separation` | Purchased electricity, steam, and boiler fuels | Declared carrier property | kWh, MJ, kg, or m3 as applicable | Keep purchased electricity, purchased steam, and each boiler fuel as separate flows in their measured units; record any energy conversion factor and heating-value basis used. |
| `water_volume` | Process water and wastewater | Declared volume property | m3 | Convert metered litres to m3 with 1,000 L = 1 m3 and retain the original meter readings. |
| `transport_service` | Inbound crude palm oil transport when included | Transport service | tkm | Calculate tonne-kilometres from transported crude-palm-oil mass in tonnes multiplied by loaded distance in kilometres; separately disclose empty return travel when modelled. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_operations` | Foreground palm oil refinery | Include crude palm oil receipt and storage, degumming, bleaching and spent-earth removal, route-specific deacidification or neutralisation, deodorisation, cooling, polishing filtration, bulk storage, utilities, direct emissions, wastewater, wastes, and co-products. | `mpob-yung-2020-refining-lca` |
| `boundary_inbound_transport` | Crude palm oil delivery | Include inbound transport when controlled by the refinery or included in the declared study scope; otherwise disclose its exclusion and retain the upstream delivery condition. | `mpob-yung-2020-refining-lca` |
| `boundary_upstream_linkage` | Purchased crude palm oil and other product inputs | Keep upstream production outside the foreground refinery process but link every purchased input to a geographically and temporally appropriate upstream dataset. | `mpob-yung-2020-refining-lca` |
| `boundary_route_specificity` | Physical and chemical refining | Declare the route. Physical refining must represent PFAD from deodorisation; chemical refining must represent caustic neutralisation and its soapstock or palm-acid-oil route when present. | `mpob-yung-2020-refining-lca` |
| `boundary_downstream_exclusions` | Fractionation and downstream stages | Exclude fractionation, retail packaging, distribution, use, biodiesel conversion, and end-of-life from the default foreground system; add them only as explicitly separate processes for an expanded study scope. | `mpob-yung-2020-refining-lca` |
| `boundary_completeness` | Foreground inventory | Do not omit crude palm oil, electricity, steam or boiler fuel, refining aids, refined oil, route-specific co-products, spent bleaching earth, wastewater, or direct fuel-combustion emissions. Disclose and justify any other omitted flow and assess its materiality. | `mpob-yung-2020-refining-lca` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crude palm oil is received at the refinery inlet with supplier, origin, delivery condition, mass, grade, and transport inclusion status declared. |
| starting_condition_role | Upstream product input to the foreground refining system |
| product_classification_scope | Refined palm oil before fractionation, blending, formulation, or retail packaging |
| recursive_input_rule | Any refined palm oil entering the foreground system remains an explicit product input linked to a separate upstream dataset; it must not be merged into the reference output or recursively re-modelled as its own production. |
| upstream_dataset_requirement | Crude palm oil and other purchased product inputs require upstream datasets matching declared geography, technology, time, and delivery condition; cultivation and milling burdens must not be silently treated as zero. |
| disclosure | Declare physical or chemical refining, edible or technical grade, product specification, crude-palm-oil origin, inbound transport treatment, boiler-fuel mix, wastewater treatment, co-product status, allocation basis, reporting period, and whether any fractionation or packaging is added. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cpo_inbound_transport` | Inbound transport of crude palm oil | `conditional` | Include when controlled by the refinery or selected by the declared study scope | Delivery of crude palm oil from mill or supplier to refinery inlet | tkm of crude palm oil delivered |
| `palm_oil_refining` | Crude palm oil refining to bulk refined palm oil | `required` | Always | Receipt, degumming, bleaching, route-specific deacidification or neutralisation, deodorisation, cooling, filtration, and bulk storage | 1,000 kg conforming refined palm oil output |
| `wastewater_treatment` | Treatment of refinery wastewater | `conditional` | Include when operated or controlled by the refinery; otherwise link wastewater to an external treatment dataset | Treatment of aqueous effluent before discharge or transfer | m3 wastewater treated |
| `fractionation` | Fractionation of refined palm oil | `excluded_by_default` | Add only for an explicitly expanded scope; it produces distinct palm olein and palm stearin products | Downstream separation of liquid and solid fractions | Not applicable to this PCR reference flow |

### Process: Inbound transport of crude palm oil (`cpo_inbound_transport`)

#### Inputs

##### Product flows

###### Crude palm oil transport service (`cpo_transport_service`)

Record the loaded movement that brings crude palm oil to the refinery when this process is in scope.

- Selected flow: Freight transport service by the actual mode
- Flow property / unit: Transport service / tkm
- Amount rule: transported CPO mass in tonnes multiplied by loaded distance in kilometres
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cpo_transport`
- Sources: `mpob-yung-2020-refining-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Crude palm oil refining to bulk refined palm oil (`palm_oil_refining`)

#### Inputs

##### Product flows

###### Crude palm oil feed (`crude_palm_oil_feed`)

Record all crude palm oil crossing the refinery gate for the reporting period, reconciled for opening and closing tank stocks.

- Selected flow: Palm oil, crude `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted CPO mass adjusted for inventory change and normalised to conforming refined palm oil output; compare the result with the MPOB multi-refinery benchmark of 1.055 kg CPO per kg RBD palm oil without substituting that benchmark for foreground data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `mpob-yung-2020-refining-lca`

###### Refining aids (`refining_aids`)

Record each refining aid separately, including phosphoric or citric acid, bleaching earth or clay, caustic soda for chemical refining, and any other route-specific chemical.

- Selected flow: Route-specific refining aid
- Flow property / unit: Mass / kg
- Amount rule: measured issue or dosing quantity by named material; do not aggregate different substances into one mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `mpob-yung-2020-refining-lca`

###### Purchased electricity (`purchased_electricity`)

Record metered electricity used by refining, pumps, vacuum systems, cooling, filtration, storage, and allocated common utilities.

- Selected flow: Electricity supply matching the declared grid and voltage
- Flow property / unit: Energy / kWh
- Amount rule: meter readings or documented sub-meter allocation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_water`
- Sources: `mpob-yung-2020-refining-lca`

###### Steam and boiler fuels (`thermal_energy_inputs`)

Record purchased steam and every fuel used to produce refinery steam separately; do not double count boiler fuel and purchased steam.

- Selected flow: Purchased steam or named boiler fuel
- Flow property / unit: Declared carrier property / MJ, kg, or m3 as measured
- Amount rule: measured purchase, tank balance, or calibrated flow-meter quantity by carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_water`
- Sources: `mpob-yung-2020-refining-lca`

###### Process water (`process_water`)

Record freshwater and other supplied water used for steam generation, washing, cooling make-up, and route-specific refining operations.

- Selected flow: Water supply matching the actual source
- Flow property / unit: Volume / m3
- Amount rule: metered withdrawal or documented tank balance by water source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_water`
- Sources: `mpob-yung-2020-refining-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined palm oil reference product (`refined_palm_oil_output`)

Record only conforming bulk refined palm oil before fractionation or retail packaging as the reference product.

- Selected flow: Palm oil, refined `029b6008-a809-4d77-8612-47451f7c98fa`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1,000 kg after rejection, rework, and tank-stock adjustments
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-210-1999`; `mpob-yung-2020-refining-lca`

###### Physical-refining co-product PFAD (`pfad_output`)

Record PFAD separated during physical deacidification and deodorisation when it leaves the process for sale, recovery, transfer, or further use.

- Selected flow: Palm fatty acid distillate `3c7cf631-4a11-4b19-a183-b19aa396dab3`
- Flow property / unit: Mass / kg
- Amount rule: measured PFAD tank, weighbridge, or dispatch mass adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_wastes`
- Sources: `mpob-yung-2020-refining-lca`

###### Chemical-refining co-products (`chemical_route_coproducts`)

For chemical refining, separately record soapstock and palm acid oil when generated, recovered, sold, or transferred.

- Selected flow: Soapstock or palm acid oil matching the actual material
- Flow property / unit: Mass / kg
- Amount rule: measured output by named co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_wastes`
- Sources: `mpob-yung-2020-refining-lca`

##### Waste flows

###### Spent bleaching earth and filter residues (`spent_bleaching_earth`)

Record spent bleaching earth and other filter residues with oil recovery, sale, treatment, or disposal destination distinguished.

- Selected flow: Spent bleaching earth or named filter residue
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass adjusted for storage change and recovered oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_wastes`
- Sources: `mpob-yung-2020-refining-lca`

###### Refinery wastewater (`refinery_wastewater`)

Record wastewater sent to onsite or external treatment; keep volume and measured quality parameters such as BOD and COD with the receiving treatment route.

- Selected flow: Wastewater to the declared treatment route
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume after internal recycle and before the selected treatment process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_and_wastes`
- Sources: `mpob-yung-2020-refining-lca`

##### Elementary flows

###### Direct boiler and process emissions (`direct_refinery_emissions`)

Calculate direct emissions from measured fuel use and controlled emission factors or stack measurements; keep biogenic and fossil carbon flows separate.

- Selected flow: Substance-specific elementary emission to the correct compartment
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or measured fuel quantity multiplied by a documented carrier-, technology-, and geography-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming refined palm oil output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_water`
- Sources: `mpob-yung-2020-refining-lca`

### Process: Treatment of refinery wastewater (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater treatment services and inputs (`wastewater_treatment_inputs`)

Record purchased treatment services, electricity, chemicals, and other inputs when wastewater treatment is within the foreground boundary.

- Selected flow: Treatment input or service matching the actual system
- Flow property / unit: Property and unit appropriate to each input
- Amount rule: measured or invoiced quantity assigned to refinery wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 refinery wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `mpob-yung-2020-refining-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treatment sludge and residual wastes (`wastewater_treatment_residues`)

Record sludge and other treatment residues by measured mass and destination.

- Selected flow: Treatment residue matching the actual material
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass adjusted for storage change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 refinery wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `mpob-yung-2020-refining-lca`

##### Elementary flows

###### Treated-water emissions (`treated_water_emissions`)

Record measured pollutant loads discharged to water after treatment using concentration and flow data for the same period.

- Selected flow: Substance-specific elementary emission to water
- Flow property / unit: Mass / kg
- Amount rule: matched-period treated-water volume multiplied by measured discharge concentration, with unit conversion documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 refinery wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `mpob-yung-2020-refining-lca`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_separable` | Separately metered processes and product campaigns | Prefer subdivision or direct measurement so burdens are assigned to the process or product that causes them before applying allocation. | `mpob-yung-2020-refining-lca` |
| `allocation_pfads_economic` | RBD palm oil and PFAD from physical refining | When PFAD is a marketable co-product and subdivision is not possible, allocate shared refining burdens by the contemporaneous economic value of RBD palm oil and PFAD using masses and representative prices from the same declared period and market. | `mpob-yung-2020-refining-lca` |
| `allocation_chemical_route` | Soapstock, palm acid oil, and other chemical-refining outputs | Classify each output as co-product, internally recovered material, or waste from documented destination and market evidence; apply the same economic-allocation rule to marketable co-products and assign treatment burdens to wastes. | `mpob-yung-2020-refining-lca` |
| `allocation_internal_recovery` | Internally recycled oil or material | Do not allocate burdens to an internally recycled flow as a separate product; keep recovery operations and any displaced fresh input visible in the foreground mass balance. | `mpob-yung-2020-refining-lca` |
| `allocation_price_evidence` | Economic allocation | Retain product masses, price sources, currency, price basis, averaging period, and calculation. Do not reuse the historical 96.2:3.8 RBD-palm-oil:PFAD ratio without demonstrating that its market period represents the study. | `mpob-yung-2020-refining-lca` |
| `allocation_sensitivity` | Material multi-output results | Report a mass-allocation sensitivity when the allocation choice materially affects interpretation, and disclose the result beside the primary economic-allocation result. | `mpob-yung-2020-refining-lca` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cpo_transport` | `cpo_inbound_transport` | crude palm oil delivery | weighbridge and logistics records | shipment_mass_t; origin; destination; loaded_distance_km; mode; vehicle_class; empty_return | Match shipment-level weighbridge tickets to route or carrier records | t; km | Per shipment | Same reporting period as refinery output | All included CPO deliveries | Sum shipment mass times loaded distance; treat empty returns separately | Weighbridge tickets, carrier invoices, route evidence, and reconciliation to CPO receipts |
| `cp_material_balance` | `palm_oil_refining` | crude palm oil and refining aids | weighbridge, tank, invoice, and dosing records | opening_stock; receipts; issues_or_dosing; returns; closing_stock; rejected_or_reworked_mass; material_identity | Reconcile calibrated meters, tank measurements, weighbridge tickets, invoices, and batch dosing logs | kg by material | Per batch with monthly reconciliation | Complete declared reporting period and representative operating conditions | All refinery lines and storage tanks serving the declared product | Consumption equals opening stock plus receipts minus closing stock minus documented transfers; normalise by conforming output | Calibration records, stock reconciliation, supplier identity, batch logs, and exception records |
| `cp_energy_and_water` | `palm_oil_refining` | electricity, steam, boiler fuel, water, and direct emissions | meter, purchase, tank, boiler, and stack records | meter_readings; purchases; stocks; carrier_identity; heating_value; steam_import; water_source; emission_measurement_or_factor | Use calibrated sub-meters where available; otherwise document allocation of common utilities from plant totals | kWh; MJ; kg; m3; emission kg | Continuous or per shift, aggregated monthly | Same reporting period as product output | All utility systems serving the declared refinery process | Reconcile purchases and stocks, prevent steam/fuel double counting, and normalise by conforming output | Meter calibration, invoices, boiler logs, fuel analysis, factor provenance, and reconciliation |
| `cp_outputs_and_wastes` | `palm_oil_refining` | refined oil, co-products, wastes, and wastewater | tank, weighbridge, dispatch, waste-transfer, and laboratory records | opening_stock; production; dispatch; closing_stock; destination; market_status; wastewater_volume; BOD; COD | Reconcile production and dispatch records with tanks and waste manifests; sample wastewater using the applicable site method | kg; m3; mg/L | Per batch or shipment; wastewater per permit or operating plan | Same reporting period as material and utility inputs | All output tanks and waste routes for the declared product | Sum net output after stock change by named product or waste and preserve destination | Calibrated scales or tanks, sales records, waste manifests, sample chain of custody, and laboratory reports |
| `cp_wastewater_treatment` | `wastewater_treatment` | treatment inputs, residues, and treated-water emissions | treatment meter, chemical, sludge, and laboratory records | influent_volume; effluent_volume; chemical_use; energy_use; sludge_mass; analyte; concentration; sampling_time | Match influent, effluent, chemical, energy, sludge, and laboratory records for the same treatment period | m3; kg; kWh; mg/L | Continuous or per treatment batch; sampling per permit | Same reporting period as refinery wastewater | Onsite system or documented external treatment route | Calculate loads from matched flow and concentration; normalise treatment inventory per m3 treated | Meter calibration, treatment log, laboratory QA/QC, waste transfer record, and mass/load reconciliation |
| `cp_product_quality` | `palm_oil_refining` | refined palm oil conformity | batch certificate and laboratory results | batch_id; route; grade; specification; test_method; result; acceptance_status; rework_or_rejection | Sample and test each declared product according to the applicable specification and site quality plan | specification-dependent | Per batch or lot | Entire reporting period | Every lot counted as conforming output | Only accepted output enters the reference amount; rejected or reworked oil remains in the mass balance | Certificate of analysis, test method, laboratory QA/QC, and release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | Every refinery inventory quantity | normalised_quantity = reporting_period_quantity / conforming_refined_palm_oil_kg * 1000 | reporting-period flow quantity; conforming refined palm oil output in kg | Flow quantity per 1,000 kg reference product | `mpob-yung-2020-refining-lca` |
| `calc_cpo_transport` | Inbound transport | tkm = CPO shipment mass in tonnes * loaded distance in kilometres | shipment_mass_t; loaded_distance_km | tkm per shipment and per reference flow | `mpob-yung-2020-refining-lca` |
| `calc_wastewater_load` | Pollutant discharged to water | load_kg = treated_water_volume_m3 * concentration_mg_per_L / 1000 | matched treated-water volume; analyte concentration | kg pollutant discharged | `mpob-yung-2020-refining-lca` |
| `calc_economic_allocation` | Shared refining burdens for marketable co-products | allocation_share_i = mass_i * representative_price_i / sum(mass_j * representative_price_j) for all marketable co-products j | co-product masses; representative prices; price period; currency and basis | Allocation share for each marketable co-product | `mpob-yung-2020-refining-lca` |
| `calc_mass_balance` | Refinery material balance | balance_gap = total_mass_inputs - total_mass_outputs - net_inventory_change, with separately documented evaporation or measurement terms where material | measured material inputs; products; co-products; wastes; stock changes | Mass-balance gap and reconciliation statement | `mpob-yung-2020-refining-lca` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference output | Demonstrate refined palm oil identity, route, grade, specification, bulk state, and exclusion of fractionated products; edible claims must identify the applicable specification. | Batch release and certificate of analysis; `codex-cxs-210-1999` |
| `dq_temporal_alignment` | All foreground flows | Inputs, outputs, stock changes, utilities, wastes, and prices must cover the same declared period; disclose shutdowns, abnormal campaigns, missing months, and seasonal limitations. | Reporting calendar, completeness matrix, and exception log; `mpob-yung-2020-refining-lca` |
| `dq_site_coverage` | Facility data | Include every line, tank, utility, and controlled waste route serving the declared product or document an allocation from complete facility totals. | Process map, meter map, tank list, and site reconciliation |
| `dq_mass_completeness` | Material inventory | Reconcile crude palm oil, refined oil, co-products, refining aids, solid residues, wastewater, rework, and inventory changes; investigate material balance gaps before publication. | Signed mass-balance worksheet and source-record cross-check |
| `dq_utility_completeness` | Energy and water | Keep electricity, steam, each boiler fuel, water source, and direct combustion emissions visible; prevent double counting of steam and its generating fuel. | Meter and fuel reconciliation, boiler log, and calculation workbook |
| `dq_allocation_evidence` | Multi-output process | Preserve current mass and market evidence for economic allocation and provide the required sensitivity when material. | Price references, product quantities, allocation workbook, and sensitivity result; `mpob-yung-2020-refining-lca` |
| `dq_background_match` | Linked upstream datasets | Match geography, technology, time, grade, delivery condition, electricity mix, fuels, water source, chemicals, transport, and waste treatment as closely as available; disclose material mismatches. | Dataset metadata and mismatch register |
| `dq_traceability` | Foreground dataset | Every normalised value must trace to a source record, collection protocol, conversion, and calculation version. | Record identifiers, calculation workbook, reviewer sign-off, and retained QA evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference output must use Palm oil, refined `029b6008-a809-4d77-8612-47451f7c98fa`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and exactly 1,000 kg. | `codex-cxs-210-1999` |
| `validate_required_qualifiers` | Dataset identity | All required qualifiers must be present and must identify the refining route, grade, specification, geography, time, bulk state, fractionation status, and allocation basis. | `codex-cxs-210-1999`; `mpob-yung-2020-refining-lca` |
| `validate_route_inventory` | Process inventory | Physical refining must include degumming, bleaching, spent bleaching earth, deodorisation, PFAD, electricity, thermal energy, water, wastewater, and direct emissions; chemical refining must replace the FFA-removal and co-product rules with its documented caustic-neutralisation route. | `mpob-yung-2020-refining-lca` |
| `validate_boundary_links` | System boundary | Upstream crude palm oil and every purchased input must have an upstream dataset or an explicit unresolved gap; fractionation and packaging must not be silently included in the reference process. | `mpob-yung-2020-refining-lca` |
| `validate_mass_balance` | Material balance | The normalised material balance must include stock changes, rework, co-products, wastes, and documented measurement terms, and every unexplained gap must be reported as a finding. | `mpob-yung-2020-refining-lca` |
| `validate_allocation` | Co-products | PFAD and any other marketable co-product must have documented status and allocation; economic allocation must use representative study-period evidence and must not copy a historical ratio without justification. | `mpob-yung-2020-refining-lca` |
| `validate_foreground_evidence` | Data production | Every foreground-record or calculated value must link to its collection protocol and retained source evidence for the declared period. | `mpob-yung-2020-refining-lca` |
| `validate_completeness` | Publication readiness | Validation must report accepted inputs, checks performed, checks skipped, findings, and completeness; missing identity, unresolved mass balance, missing required flow, unsupported allocation, or absent source record is an error or an inconclusive result. | `mpob-yung-2020-refining-lca` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground refinery data package and unit-process dataset for bulk refined palm oil production |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Attributional product systems requiring declared bulk refined palm oil at refinery gate; linkage to matching upstream CPO and downstream users; regionalised studies when geography and technology are represented |
| excluded_use | Direct representation of crude palm oil, palm-kernel oil, fractionated palm olein or stearin, blended or packaged cooking oil, biodiesel, or a refinery route and geography not disclosed by the dataset |
| required_metadata | PCR id and version; Tiangong reference flow UUID; process UUID when available; refining route; grade and specification; geography; reporting period; technology; bulk state; fractionation status; CPO origin and delivery condition; transport scope; boiler-fuel mix; wastewater route; allocation basis; source ids; collection protocol ids |
| required_quality_disclosure | Site and line coverage; temporal coverage; meter and stock reconciliation; mass-balance result; product conformity; background-data mismatches; co-product status and price evidence; allocation sensitivity; missing or estimated records; wastewater and direct-emission calculation methods |
| update_trigger | Material change in refinery route, product grade or specification, reference flow identity, CPO supply geography, energy or fuel system, wastewater treatment, co-product market status, allocation evidence, reporting period, or external method evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | Codex Alimentarius, Standard for Named Vegetable Oils, CXS 210-1999, amended 2024 and corrected 2026, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B210-1999%252FCXS_210e.pdf (retrieved 2026-08-10) | Palm-oil product identity, edible-product scope, specification disclosure, and product conformity |
| `mpob-yung-2020-refining-lca` | `literature` | Yung, C. L.; Subramaniam, V.; Yusoff, S. Life Cycle Assessment for Palm Oil Refining and Fractionation. Journal of Oil Palm Research. DOI: 10.21894/jopr.2020.0029. https://jopr.mpob.gov.my/wp-content/uploads/2020/06/joprinpress2020-chee.pdf (retrieved 2026-08-10) | Functional unit, physical-refining process decomposition, gate-to-gate boundary, inventory coverage, foreground collection practice, co-product allocation, quantitative benchmark context, data quality, and validation rules |
