---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.hydraulic-turbines-and-water-wheels
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hydraulic turbines and water wheels

## 1. Scope and Applicability

This PCR covers manufacture of finished hydraulic turbines and water wheels that convert the energy of flowing or falling water into rotary mechanical power. Covered designs include impulse and reaction turbines, cross-flow turbines, hydrodynamic screw turbines, and traditional water wheels when delivered as finished hydraulic prime movers.

The foreground boundary begins when purchased semifinished metallic components, declared composite components, and manufacturing consumables enter the reporting manufacturer's control. It includes applicable machining, forming, welding, joining, cleaning, surface protection, assembly, factory hydraulic testing, inspection, and preparation for dispatch, and ends with the finished product ready to leave the factory gate. Supplier production of purchased inputs is represented by upstream datasets.

Electrical generators, governing or regulating equipment sold separately, bearings or other spare parts sold separately, penstocks, gates, civil works, powerhouse construction, site transport, installation, commissioning at the hydropower site, electricity generation during use, maintenance, and end-of-life treatment are excluded. If a sales contract bundles any excluded item with the hydraulic turbine or water wheel, report that item as a separate product system or a separately measured process; do not silently absorb it into this reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.hydraulic-turbines-and-water-wheels |
| classification_refs | CPC 3.0: 43142, Hydraulic turbines and water wheels (exact) |
| covered_products | Finished hydraulic turbines and water wheels, including impulse, reaction, cross-flow, hydrodynamic screw, and traditional wheel designs supplied as hydraulic prime movers |
| excluded_products | Separately supplied generators, governors and regulators, parts and spares, pumps, wind and steam turbines, complete hydropower plants, civil works, and installation services |
| representative_product | A finished, inspected hydraulic turbine or water wheel ready for dispatch from the manufacturing site |
| production_route | Product-specific fabrication and assembly using purchased components; applicable conventional machining, forming, welding, surface protection, additive or composite manufacture, and factory water testing must be declared |
| market_state | New finished equipment at the manufacturer's gate, unpacked product mass excluding separately modelled transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of finished equipment that converts specified water head and flow into rotary mechanical shaft power |
| How much | 1,000 kg of finished hydraulic turbine or water wheel |
| How well | Conforms to the purchase specification and acceptance records for turbine or wheel type, rated head, rated flow, rated speed, rated mechanical power, hydraulic efficiency or other guaranteed performance, material grades, and completeness of supply |
| How long or cycle | One production lot as delivered at the factory gate; service life and use-stage electricity generation are not credited in the reference amount |
| reference_flow_link | 1,000 kg of the finished reference product output `reference_hydraulic_turbine` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Hydraulic turbine or water wheel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type; impulse, reaction, cross-flow, screw, or wheel technology; model and configuration; rated head; rated flow; rated speed; rated mechanical power; guaranteed performance or acceptance criterion; principal material grades and product form; total finished mass; completeness of supply; coating system; factory-test status; manufacturing geography; production period |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Finished hydraulic turbine or water wheel | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net finished product mass from a calibrated shipping scale or a reconciled as-built bill of materials. Exclude separately modelled transport packaging and loose installation tools. Normalize all inventory exchanges to 1,000 kg. |
| `energy_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered energy quantity and conversion basis. Convert kWh to MJ with 1 kWh = 3.6 MJ; do not relabel electrical energy as fuel mass. |
| `gas_reference_conditions` | Gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the metering reference temperature and pressure. If the source record uses normal or standard cubic metres, retain that convention and its conversion rather than treating unlike reference conditions as equal. |
| `water_mass_conversion` | Process water and process wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records. When converting measured volume to mass, document temperature, density, and whether recirculated water is excluded; record only net water crossing the foreground boundary. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased semifinished components, declared composite components, consumables, fuels, electricity, and water at the reporting manufacturer's receiving boundary |
| starting_condition_role | Upstream supplied inputs entering foreground hydraulic-turbine or water-wheel manufacture |
| product_classification_scope | Finished hydraulic turbines and water wheels; separately supplied parts, governors or regulators, generators, civil works, and plant-level systems are outside this product boundary |
| recursive_input_rule | If a finished hydraulic turbine or water wheel is purchased and incorporated without transformation, record it as an upstream product input with its own supplier dataset and disclose the incorporated mass; do not expand the same category recursively inside the foreground process |
| upstream_dataset_requirement | Use geographically, technologically, and temporally representative upstream datasets for each purchased material, component, energy carrier, chemical, water supply, and waste-treatment service |
| disclosure | Declare the product technology, supplied completeness, material route, fabrication processes, coating route, factory-test route, manufacturing sites, temporal coverage, and all exclusions or supplier-data substitutions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground manufacturing system | Include all applicable operations under the manufacturer's control from receiving through fabrication, assembly, inspection, factory testing, and preparation of the finished product for dispatch. Use upstream datasets for purchased inputs. | `us-doe-wpto-accomplishments-2020` |
| `sb_route_disclosure` | technology and test routes | Declare whether conventional steel fabrication, additive manufacture, composite manufacture, surface coating, fuel-fired heat, oxygen-assisted cutting, and factory hydraulic testing apply. Include every applicable route and record non-applicability explicitly. | `us-doe-wpto-accomplishments-2020` |
| `sb_excluded_systems` | generator, site and use-stage systems | Exclude separately supplied generator and governing equipment, civil works, transport to site, installation, use-stage generation, maintenance, and end-of-life unless the study adds them as separately measured systems. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication_assembly` | Component fabrication, assembly, inspection, and dispatch | required | Always included for the reporting manufacturer | Core foreground production | 1,000 kg finished hydraulic turbine or water wheel |
| `fuel_fired_heat` | Fuel-fired heat treatment or curing | conditional | Include when natural gas is combusted on site for heat treatment, preheating, drying, or curing attributable to the production lot | Conditional foreground thermal operation | Natural gas consumed for the reference-product lot |
| `oxygen_assisted_cutting` | Oxygen-assisted thermal cutting | conditional | Include when purchased industrial oxygen is used in thermal cutting attributable to the production lot | Conditional foreground cutting operation | Oxygen consumed for the reference-product lot |
| `aqueous_cleaning_testing` | Aqueous cleaning and factory hydraulic testing | conditional | Include when water or aqueous cleaning chemicals cross the foreground boundary for cleaning or factory water testing | Conditional foreground cleaning and test operation | Net make-up water and chemical use for the reference-product lot |
| `surface_coating` | Anticorrosion surface coating | conditional | Include when an anticorrosion coating system is applied under the reporting manufacturer's control | Conditional foreground finishing operation | Coating products issued to the reference-product lot |

### Process: Component fabrication, assembly, inspection, and dispatch (`component_fabrication_assembly`)

#### Inputs

##### Product flows

###### Low-alloy steel semifinished components (`low_alloy_steel_components`)

Record purchased low-alloy steel castings, forgings, plate fabrications, shafts, or other semifinished load-bearing components as one chemically and physically declared steel product input. Report grade and product form in the data package; do not combine stainless steel or non-steel materials in this row.

- Selected flow: Low-alloy steel semifinished components
- Flow property / unit: Mass / kg
- Amount rule: received mass incorporated in or processed for the reference-product lot, net of documented supplier returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `us-doe-wpto-accomplishments-2020`

###### Stainless steel semifinished components (`stainless_steel_components`)

Record stainless steel blades, runners, shafts, fasteners, plate fabrications, or other semifinished components separately from low-alloy steel. The verified DOE case identifies 316L stainless steel as a turbine-blade route; the actual grade and form remain product-specific foreground facts.

- Selected flow: Stainless steel semifinished components
- Flow property / unit: Mass / kg
- Amount rule: received stainless-steel mass incorporated in or processed for the reference-product lot, net of documented supplier returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `us-doe-wpto-accomplishments-2020`

###### Purchased electricity (`electricity`)

Record electricity crossing the manufacturing-site boundary and attributable to machining, forming, welding, assembly, inspection, material handling, and other core operations. Disclose grid mix, voltage, geography, losses, on-site generation treatment, and allocation from shared meters.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity or documented allocation from site meters to the reference-product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources:

#### Outputs

##### Product flows

###### Finished reference product (`reference_hydraulic_turbine`)

Record the finished, inspected hydraulic turbine or water wheel at the factory gate. The unresolved Tiangong product UUID must remain empty until a task-bound public state-100 identity is confirmed; no generic machinery proxy is permitted.

- Selected flow: Hydraulic turbine or water wheel
- Flow property / unit: Mass / kg
- Amount rule: net finished product mass ready for dispatch, normalized to exactly 1,000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-2025`

##### Waste flows

###### Segregated steel scrap (`steel_scrap`)

Record weighed steel offcuts, chips, turnings, and rejected steel parts leaving the foreground system for recycling or treatment as a concrete steel-scrap waste. Keep stainless-steel segregation in the raw records when practiced and disclose any coolant contamination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed steel scrap leaving the foreground system, net of documented internal remelting or reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_scrap`
- Sources:

##### Elementary flows

### Process: Fuel-fired heat treatment or curing (`fuel_fired_heat`)

#### Inputs

##### Product flows

###### Natural gas combusted on site (`natural_gas`)

Record gaseous natural gas only when it is combusted under the manufacturer's control for attributable heat treatment, preheating, drying, or curing. Supplier geography, composition, delivery pressure, technology, and reference conditions remain foreground qualifiers.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or invoice-reconciled natural gas consumed by applicable fuel-fired operations for the reference-product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_records`
- Sources:

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide`)

Record only fossil carbon dioxide directly emitted by on-site natural-gas combustion in the conditional thermal operation. Upstream electricity and fuel-supply emissions remain in background datasets and must not be duplicated here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: natural-gas quantity multiplied by a documented fuel-composition or jurisdictional combustion factor, adjusted for measured oxidation where applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_emission_calculation`
- Sources:

### Process: Oxygen-assisted thermal cutting (`oxygen_assisted_cutting`)

#### Inputs

##### Product flows

###### Industrial oxygen (`industrial_oxygen`)

Record purchased industrial oxygen only when used for thermal cutting under the manufacturer's control. Purity, pressure, metering reference conditions, supply geography, and on-site generation treatment must be declared.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered, cylinder-inventory, or supplier-record volume consumed for the reference-product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oxygen_records`
- Sources:

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Aqueous cleaning and factory hydraulic testing (`aqueous_cleaning_testing`)

#### Inputs

##### Product flows

###### Process-water make-up (`process_water`)

Record net process water entering cleaning or factory hydraulic-test operations. Exclude recirculated water that does not cross the foreground boundary and document water source, quality, geography, density conversion, and test-loop make-up boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up and cleaning water entering the foreground system, net of documented recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `us-doe-wpto-accomplishments-2020`

###### Sodium hydroxide cleaning chemical (`sodium_hydroxide`)

Record sodium hydroxide only when an aqueous cleaning formulation containing it crosses the foreground boundary. Report supplied concentration and calculate dry NaOH-equivalent mass without combining other cleaning chemicals in this row.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased solution mass multiplied by declared sodium-hydroxide mass fraction, net of documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg NaOH equivalent per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources:

#### Outputs

##### Product flows

##### Waste flows

###### Process wastewater (`process_wastewater`)

Record process wastewater discharged from cleaning or factory hydraulic testing after subtracting documented recirculation and evaporation. Do not combine it with solid residues, oils, or unrelated sanitary wastewater.

- Selected flow: Process wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass, or discharge volume converted with documented density, attributable to the reference-product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources:

##### Elementary flows

### Process: Anticorrosion surface coating (`surface_coating`)

#### Inputs

##### Product flows

###### Anticorrosion coating system (`anticorrosion_coating`)

Record the applied anticorrosion coating system as one declared formulated product input only when coating occurs under the manufacturer's control. State resin family, curing mechanism, solids content, primer/topcoat scope, and whether the quantity is as supplied or dry film; separately add other chemically distinct coating products when they cross the boundary.

- Selected flow: Anticorrosion coating system
- Flow property / unit: Mass / kg
- Amount rule: mass issued to the reference-product lot minus unopened returns, with applied and residual fractions documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished hydraulic turbine or water wheel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `us-doe-wpto-accomplishments-2020`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision` | shared manufacturing operations | First avoid allocation by separately metering or subdividing machining cells, furnaces, test loops, coating booths, and waste streams for the reference-product lot. | `ghg-protocol-product-standard-2011` |
| `alloc_physical_relation` | residual shared inputs and outputs | When subdivision is impracticable, allocate shared electricity, fuels, water, consumables, and wastes using a documented causal physical driver such as machine hours, furnace occupancy, treated surface area, test duration, or measured mass. Use economic allocation only when no defensible physical relation exists and disclose the sensitivity. | `ghg-protocol-product-standard-2011` |
| `alloc_recycling_boundary` | steel scrap and recyclable residues | Record recyclable steel scrap as a waste output at the factory gate and disclose the recycling approach. Do not credit avoided primary production inside this foreground process unless the downstream study applies one consistent, explicitly documented recycling method. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `component_fabrication_assembly` | Low-alloy and stainless steel inputs | receiving records and as-built bill of materials | supplier item; heat or grade; product form; received mass; returned mass; incorporated mass; lot identifier | Reconcile purchase receipts and calibrated receiving weights to the released as-built bill of materials | kg | Each production lot | Complete lot from first receipt through dispatch | All reporting-manufacturer sites processing the lot | Sum each steel type separately, subtract documented supplier returns, then normalize by finished product mass | Purchase documents; material certificates; calibrated-scale records; released bill of materials; reconciliation sign-off |
| `cp_electricity_records` | `component_fabrication_assembly` | Purchased electricity | meter and allocation record | meter start and end; kWh; voltage; grid or on-site source; machine hours; allocation driver; lot identifier | Read dedicated meters where available; otherwise allocate site or cell meters using documented machine-hour or operating-time drivers | kWh and MJ | At least monthly and for each production lot | Representative production period covering the lot | Every manufacturing site in the foreground boundary | Convert kWh to MJ, allocate consistently, sum all sites, and normalize by finished product mass | Meter identifiers; invoices; calibration or verification record; allocation worksheet |
| `cp_product_mass` | `component_fabrication_assembly` | Finished reference product | shipping-scale and dispatch record | product identifier; serial number; configuration; gross mass; excluded packaging mass; net product mass; calibration status | Weigh the finished product or reconcile an as-built mass statement to calibrated component weights | kg | Each finished unit or dispatch lot | At factory-gate release | Final assembly and dispatch sites | Sum net finished units and normalize all exchanges to exactly 1,000 kg | Scale certificate; dispatch note; as-built mass statement; acceptance release |
| `cp_steel_scrap` | `component_fabrication_assembly` | Segregated steel scrap | waste-scale and transfer record | waste type; steel grade class; container tare; gross mass; contamination; destination; lot allocation | Weigh segregated scrap containers and reconcile transfers to production lots | kg | Each transfer, aggregated by lot | Same period as material inputs | All fabrication sites | Subtract tare, exclude internal reuse, allocate shared containers by documented physical driver, and normalize by finished product mass | Scale record; waste transfer note; recycling receipt; mass-balance reconciliation |
| `cp_natural_gas_records` | `fuel_fired_heat` | Natural gas input | gas-meter and invoice record | meter start and end; volume; reference temperature and pressure; equipment; operating hours; lot allocation | Read dedicated equipment meters or allocate verified site meters using burner operating time and rated flow | m3 | Each applicable lot, reconciled monthly | Full applicable heat-treatment or curing period | All sites combusting gas for the lot | Convert volumes to one declared reference condition, sum applicable equipment, and normalize by finished product mass | Meter or invoice; burner log; reference-condition statement; allocation worksheet |
| `cp_fuel_emission_calculation` | `fuel_fired_heat` | Direct fossil carbon dioxide | calculated emission record | normalized natural-gas quantity; gas composition or selected factor; factor source; oxidation assumption | Multiply collected fuel quantity by a documented supplier-specific or jurisdictional fossil-CO2 factor using consistent units | kg CO2 | Each applicable lot | Same period as natural-gas records | All included combustion sources | Sum source-level fossil CO2 and normalize by finished product mass; exclude upstream fuel emissions | Calculation worksheet; factor publication or supplier analysis; reviewer sign-off |
| `cp_oxygen_records` | `oxygen_assisted_cutting` | Industrial oxygen input | meter, cylinder, or supplier record | delivered volume; returned inventory; pressure; reference conditions; purity; lot allocation | Use flowmeter records or reconcile full and returned cylinder inventories | m3 | Each applicable lot | Full cutting period for the lot | All sites using oxygen-assisted cutting | Convert to the declared reference condition, subtract returns, and normalize by finished product mass | Meter calibration; cylinder tickets; supplier certificate; cutting log |
| `cp_water_records` | `aqueous_cleaning_testing` | Process-water make-up | water-meter and test-loop record | inlet meter; make-up volume; recirculated volume; discharge; evaporation estimate; density; lot identifier | Read dedicated inlet and make-up meters; reconcile the test-loop balance | kg or m3 | Each cleaning or hydraulic-test campaign | Full applicable campaign | All cleaning and test-loop sites | Count only net boundary-crossing water, convert volume to mass with documented density, and normalize by finished product mass | Meter identifiers; calibration checks; test log; water-balance worksheet |
| `cp_cleaning_chemical_records` | `aqueous_cleaning_testing` | Sodium hydroxide input | chemical issue and formulation record | solution mass; NaOH concentration; returned mass; batch; application; lot identifier | Reconcile weighed chemical issues and returns with supplier concentration certificates | kg solution and kg NaOH equivalent | Each applicable batch | Full cleaning campaign | All sites using sodium hydroxide | Multiply net solution mass by certified mass fraction, sum by lot, and normalize by finished product mass | Purchase and issue records; safety data sheet or certificate of analysis; formulation sheet |
| `cp_wastewater_records` | `aqueous_cleaning_testing` | Process wastewater output | discharge meter or tank-transfer record | discharge volume or mass; density; source operation; recirculation; destination; lot allocation | Read discharge meters or weigh transferred tanks and exclude unrelated sanitary flows | kg or m3 | Each discharge, aggregated by lot | Same period as water and chemical inputs | All included cleaning and test operations | Convert to mass where needed, subtract recirculated water, allocate shared discharges by documented water balance, and normalize by finished product mass | Meter or weigh record; treatment manifest; water balance; sampling record when available |
| `cp_coating_records` | `surface_coating` | Anticorrosion coating input | coating issue and return record | product name; resin family; component masses; solids content; issued mass; unopened return; residue; coated area; lot identifier | Weigh or reconcile issued coating kits, unopened returns, and residues by product | kg as supplied | Each coating batch | Full applicable coating campaign | All included coating sites | Report each declared coating product separately; calculate net issued mass and normalize by finished product mass | Purchase and issue records; technical data sheet; batch sheet; residue reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | all inventory rows | normalized amount = lot amount × 1,000 kg / net finished product mass of the same lot | lot exchange amount; net finished product mass | exchange amount per 1,000 kg finished product |  |
| `calc_electricity_mj` | purchased electricity | electricity in MJ = metered kWh × 3.6 MJ/kWh | metered electricity in kWh | purchased electricity in MJ |  |
| `calc_naoh_equivalent` | sodium hydroxide solution | NaOH-equivalent mass = net solution mass × certified NaOH mass fraction | issued solution mass; returned solution mass; certified concentration | kg NaOH equivalent |  |
| `calc_direct_fossil_co2` | on-site natural-gas combustion | direct fossil CO2 = normalized fuel quantity × documented compatible fossil-CO2 factor; preserve the factor basis and unit conversions | normalized natural-gas quantity; gas analysis or cited combustion factor; oxidation assumption | kg fossil CO2 per 1,000 kg finished product |  |
| `calc_mass_balance` | product, metals, coating and wastes | unexplained mass difference = total mass inputs − finished product mass − measured waste outputs − documented emissions or retained inventories; investigate rather than forcing the balance to zero | material receipts; product mass; waste weights; emissions; inventory changes | mass-balance reconciliation and unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Record product type, model, configuration, rated hydraulic conditions, rated mechanical output, principal material grades, supplied completeness, finished mass, and factory-test status for every dataset. | Released drawings or specification; bill of materials; acceptance and dispatch records |
| `dq_temporal_scope` | all foreground data | Use records covering the complete production lot. If a reporting period contains multiple products, document the allocation driver and demonstrate that inventory changes at both ends are addressed. | Dated meter, production, inventory, and dispatch records |
| `dq_site_completeness` | multi-site manufacture | Include every reporting-manufacturer site that performs an operation for the lot, or disclose the omitted site and provide an upstream supplier dataset for its transferred component. | Site routing, transfer notes, supplier datasets, completeness checklist |
| `dq_measurement` | mass, energy, gas, oxygen, and water | Retain meter or scale identity, unit, calibration or verification status, reference conditions where applicable, and conversion calculations. | Calibration certificates; meter logs; scale records; conversion worksheet |
| `dq_flow_identity` | all inventory exchanges | Use one concrete flow per row. Preserve confirmed Tiangong UUIDs and official Chinese base names; keep unresolved UUIDs empty and prohibit semantic proxies. | UUID audit record; bilingual row comparison; unresolved-flow register |
| `dq_source_representativeness` | upstream datasets | Document supplier, geography, technology, product state, temporal coverage, and substitutions for upstream materials, energy, water, and treatment. | Supplier declarations; dataset metadata; substitution justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow and product metadata | Confirm that the output is a finished hydraulic turbine or water wheel, the net reference amount is exactly 1,000 kg, all required qualifiers are present, and excluded bundled systems are separately reported. | `un-cpc-3-0-2025` |
| `val_process_applicability` | conditional manufacturing routes | Reconcile route declarations with process records. A declared applicable route must have its atomic inputs and outputs; a non-applicable route must have explicit evidence and zero attributed exchanges. | `us-doe-wpto-accomplishments-2020` |
| `val_mass_energy_reconciliation` | foreground inventory | Reconcile product mass against grade-resolved material inputs, steel scrap, wastewater, coating residues, and inventory changes; reconcile electricity, fuel, oxygen, and water records to meters or invoices. Investigate unexplained differences without creating balancing flows. |  |
| `val_allocation_consistency` | shared processes and recycling | Verify that subdivision was attempted first, physical allocation drivers are causal and consistently applied, and any economic allocation or recycling credit is separately disclosed with sensitivity. | `ghg-protocol-product-standard-2011` |
| `val_uuid_status` | reference product and inventory flow identity | Confirm every populated UUID by public state-100 direct read and match English and Chinese base name, flow type, classification, property, unit group, product state, geography, technology, and general comment. UUID-empty rows must remain in the unresolved register and must not be replaced by a proxy. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground manufacturing dataset for a finished hydraulic turbine or water wheel, suitable for publication as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Component of cradle-to-gate or cradle-to-grave product systems for hydropower equipment, hydropower plants, refurbishment comparisons, procurement, and design studies |
| allowed_use | Use when product technology, rated hydraulic conditions, principal materials, supplied completeness, manufacturing geography, time period, coating route, and factory-test route are representative or explicitly adjusted |
| excluded_use | Do not use as a complete hydropower-plant dataset, an electricity-generation dataset, a separately supplied generator or governor dataset, a spare-part dataset, or a universal proxy across materially different turbine technologies without documented adjustment |
| required_metadata | PCR id and version state; product type and model; rated head, flow, speed, mechanical power, and guaranteed performance; finished mass; principal materials; supplied completeness; manufacturing sites and period; route applicability; coating and test status; allocation and recycling method; unresolved identities and data substitutions |
| required_quality_disclosure | Foreground coverage and allocation; meter and scale quality; mass and energy reconciliation; upstream dataset representativeness; treatment destinations; data gaps; UUID audit status; uncertainty and sensitivity for material substitutions or shared-process allocation |
| update_trigger | New product technology or principal material; material change in supplied completeness, manufacturing route, factory-test route, site, grid or fuel supply; changed allocation or recycling method; more representative supplier data; resolution of a UUID or range-evidence gap; or records outside the declared temporal validity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-05 | Exact official product-classification identity and distinction from separately classified parts |
| `us-doe-wpto-accomplishments-2020` | Official guidance (`official_guidance`) | U.S. Department of Energy, Water Power Technologies Office, 2019–2020 Accomplishments Report, pages 42–45, https://www.energy.gov/sites/prod/files/2021/01/f82/2019-2020-wpto-accomplishments-report.pdf, retrieved 2026-09-05 | Turbine manufacturing-route decomposition, stainless-steel and conventional steel cases, forming, welding, grinding, painting, additive and composite manufacture, and factory water testing |
| `ghg-protocol-product-standard-2011` | Standard (`standard`) | World Resources Institute and World Business Council for Sustainable Development, Product Life Cycle Accounting and Reporting Standard, 2011, chapter 9, https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf, retrieved 2026-09-05 | Allocation hierarchy, physical allocation, consistency, and recycling-method disclosure |
