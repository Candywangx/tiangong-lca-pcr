---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-metallic-magnets
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Permanent metallic magnets

## 1. Scope and Applicability

This PCR governs foreground data packages for finished permanent magnet bodies whose hard-magnetic phase is metallic, specifically conventional sintered NdFeB, sintered SmCo, and cast or sintered Alnico magnets. The product is assessed at the manufacturer's gate after dimensional finishing, any declared surface treatment, magnetization, inspection, and rejection accounting.

Permanent ceramic or ferrite magnets, electromagnets, soft-magnetic components, polymer-bonded magnets, magnetic assemblies containing housings or other functional parts, and unmagnetized alloy or powder sold as feedstock are outside this boundary. The foreground begins when a route-specific, ready-to-form magnetic alloy or magnet powder is received; upstream production of that feedstock and all other purchased inputs remains required through linked upstream datasets. The dataset must declare alloy family, route, product grade, coating state, magnetization state, geometry, and production geography.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-metallic-magnets |
| classification_refs | CPC 3.0: 46931, Permanent metallic magnets |
| covered_products | Finished sintered NdFeB magnets; finished sintered SmCo magnets; finished cast or sintered Alnico magnets |
| excluded_products | Permanent ceramic or ferrite magnets; electromagnets; soft-magnetic cores; polymer-bonded magnets; magnet assemblies; unmagnetized magnetic alloy and powder sold as feedstock |
| representative_product | Magnetized, dimensionally finished permanent metallic magnet body at the manufacturer's gate |
| production_route | Route-qualified manufacture from ready-to-form NdFeB magnet powder, SmCo magnet alloy or powder, or Alnico magnet alloy, followed by forming or casting, heat treatment, machining, conditional surface treatment, magnetization, and inspection |
| market_state | Finished and accepted magnet body, coated or uncoated as declared, excluding transport packaging and any assembly hardware |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished permanent metallic magnet body that maintains a magnetic field without continuous external electrical excitation |
| How much | 1 kg net mass of accepted magnet product |
| How well | Conforms to the declared alloy family, grade or composition specification, magnetic-property test, dimensions and tolerances, coating specification, magnetization direction and pole configuration |
| How long or cycle | One delivered product at the manufacturer's gate; service life is not asserted by this cradle-to-gate reference |
| reference_flow_link | Net accepted product mass after all manufacturing rejects, machining losses, and coating additions have been accounted for |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Magnet `0286ac90-a513-4ed7-9f8e-c2df707e5dbb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | metallic magnet alloy family; grade or declared composition; sintered or cast route; virgin, recycled, or blended feedstock share; product geometry and dimensions; net product mass; coating material and thickness or uncoated state; magnetization direction and pole configuration; magnetic acceptance test and result; manufacturing site and geography; reporting period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The generic Tiangong product-flow identity is usable only with these qualifiers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_product_mass` | Reference product and solid material exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine the reference amount from the net mass of accepted finished magnets, excluding transport packaging, fixtures, and assembly hardware. Record coating mass within the finished product and separately as an input. |
| `energy_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered energy record and convert kWh to MJ using 1 kWh = 3.6 MJ; do not convert electricity to a fuel mass. |
| `gas_reference_conditions` | Hydrogen and natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gas volume with temperature, pressure, and dry or wet basis; normalize only when the stated reference conditions and conversion are retained. |
| `water_conversion` | Process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer measured mass. If volume is metered, retain the volume and density used to calculate mass and reconcile intake, recirculation, evaporation, incorporation, and discharge. |
| `direct_fossil_co2` | On-site combustion carbon dioxide | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calculate or measure only emissions physically released within the foreground boundary; exclude upstream electricity and fuel-supply emissions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ready-to-form NdFeB magnet powder, SmCo magnet alloy or powder, or Alnico magnet alloy received at the manufacturing site gate with composition, supplier, recycled content, and physical state declared |
| starting_condition_role | Foreground entry point for forming or casting, heat treatment, machining, conditional surface treatment, magnetization, inspection, and reject accounting |
| product_classification_scope | Finished permanent metallic magnet bodies corresponding to CPC 3.0 subclass 46931; ceramic or ferrite magnets and magnet assemblies are excluded |
| recursive_input_rule | A finished permanent metallic magnet reintroduced as feedstock must be recorded as a distinct recovered-magnet input with its prior life and preparation boundary disclosed; it must not be treated as the reference product recursively |
| upstream_dataset_requirement | Link composition- and geography-representative upstream datasets for each purchased magnetic alloy or powder, gas, electricity, water, coating material, chemical, and waste-treatment service |
| disclosure | Declare feedstock family and state, all included unit operations, forming or casting and heat-treatment technologies, machining method, surface treatment, magnetization and inspection route, scrap recovery, abatement, site geography, reporting period, and any excluded operation |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_material` | foreground_start | Begin foreground collection at receipt of one declared ready-to-form magnetic alloy or magnet powder; connect its upstream production rather than omitting it. | `cui-et-al-2022-permanent-magnet-manufacturing` |
| `boundary_required_operations` | manufacturing_operations | Include all site operations used to convert that feedstock into accepted magnets: material conditioning, forming or casting, heat treatment or sintering, machining, conditional surface treatment, magnetization, inspection, internal recycling, and reject handling. | `cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing` |
| `boundary_direct_exchanges` | foreground_environment | Include site energy and water use, material inputs, wastes, wastewater, and direct elementary emissions; do not copy upstream emissions from linked supplies into the foreground process. | `netl-2014-ndfeb-magnet-manufacturing` |
| `boundary_route_disclosure` | route_variation | Mark each conditional flow not applicable only when production records demonstrate that its route or treatment is absent. | `cui-et-al-2022-permanent-magnet-manufacturing` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `magnet_manufacturing` | Permanent metallic magnet manufacturing | required | Always; unit-operation records must distinguish the applicable forming or casting, heat-treatment, machining, coating, magnetization, and inspection steps | Foreground conversion of route-specific magnetic feedstock to accepted finished magnets | 1 kg net accepted permanent metallic magnet output |

### Process: Permanent metallic magnet manufacturing (`magnet_manufacturing`)

#### Inputs

##### Product flows

###### NdFeB magnet powder feedstock (`ndfeb_magnet_powder`)

Record NdFeB magnet powder received for a sintered or other powder-forming NdFeB route. Do not use this row for SmCo, Alnico, or finished recovered magnets.

- Selected flow: NdFeB magnet powder, approximately 200 µm `f1334ecc-c198-46fa-b1e8-d7bdc75262b9`
- Flow property / unit: Mass / kg
- Amount rule: Meter or calculate dry powder charged to included manufacturing operations, net of separately recorded returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing`

###### SmCo magnet alloy or powder feedstock (`smco_magnet_alloy`)

Record the declared SmCo5 or Sm2Co17-family magnetic alloy or powder supplied to the SmCo route. Composition and physical state are mandatory foreground qualifiers.

- Selected flow: SmCo magnet alloy or powder
- Flow property / unit: Mass / kg
- Amount rule: Meter or calculate dry SmCo magnetic feedstock charged to included manufacturing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`

###### Alnico magnet alloy feedstock (`alnico_magnet_alloy`)

Record Alnico alloy supplied to casting or powder-forming operations. The grade and whether the route is cast or sintered must be declared.

- Selected flow: Alnico magnet alloy
- Flow property / unit: Mass / kg
- Amount rule: Meter or calculate Alnico alloy charged to included manufacturing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`

###### Hydrogen for decrepitation (`hydrogen_gas`)

Record industrial hydrogen crossing the site boundary when hydrogen decrepitation or another included hydrogen treatment is used.

- Selected flow: Industrial hydrogen gas
- Flow property / unit: Volume / m3
- Amount rule: Meter hydrogen supplied to the applicable treatment, with reference conditions and purge disposition retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_and_energy_records`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing`

###### Purchased electrical energy (`electricity`)

Record electricity delivered to the included conditioning, forming, furnace, machining, surface-treatment, magnetization, inspection, and pollution-control equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sum revenue-meter and submeter records for included operations and reconcile the allocated site total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_and_energy_records`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing`

###### Natural gas for on-site thermal equipment (`natural_gas`)

Record gaseous natural gas only when it is combusted or otherwise consumed in included site thermal equipment; electricity or another fuel remains a separate exchange.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Meter delivered natural gas for included operations and retain reference conditions and lower-heating-value data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_and_energy_records`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`

###### Process water (`process_water`)

Record process water supplied for cooling, machining, cleaning, or surface treatment without combining it with wastewater output.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Meter make-up water crossing the site boundary and reconcile reuse, evaporation, incorporation, and discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `netl-2014-ndfeb-magnet-manufacturing`

###### Nickel metal for coating (`nickel_metal`)

Record high-purity nickel metal crossing the process boundary when nickel electroplating is applied. Coating stack and thickness must be declared.

- Selected flow: Nickel metal (＞99.9% Ni) `8a1cacfb-0b44-404e-93e0-01a9b7a4403c`
- Flow property / unit: Mass / kg
- Amount rule: Measure nickel consumed from anodes or verified bath balance, net of recoverable returned nickel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `netl-2014-ndfeb-magnet-manufacturing`

###### Sodium hydroxide for surface treatment (`sodium_hydroxide`)

Record sodium hydroxide supplied to cleaning or nickel-plating bath preparation when that chemistry is used.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Calculate pure NaOH mass from purchased solution mass and verified concentration, adjusted for inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `netl-2014-ndfeb-magnet-manufacturing`

###### Sulfuric acid for surface treatment (`sulfuric_acid`)

Record sulfuric acid supplied to cleaning, activation, or nickel-plating operations when that chemistry is used.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Calculate pure H2SO4 mass from purchased solution mass and verified concentration, adjusted for inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `netl-2014-ndfeb-magnet-manufacturing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted permanent metallic magnet (`reference_product`)

Record only finished magnet bodies that pass the declared dimensional, coating, magnetization, and magnetic-property acceptance criteria.

- Selected flow: Magnet `0286ac90-a513-4ed7-9f8e-c2df707e5dbb`
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass of accepted finished magnets released at the manufacturer gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_quality_records`
- Sources: `un-cpc-3-0-structure-2025`; `cui-et-al-2022-permanent-magnet-manufacturing`

##### Waste flows

###### NdFeB magnet material loss (`ndfeb_material_loss`)

Record NdFeB grinding swarf, slicing loss, powder loss, and rejected NdFeB material leaving the foreground as one measured waste material stream; destination and any internal return are reported separately.

- Selected flow: NdFeB magnet material loss `8744667e-6800-4d35-823a-d1c0ef727ab9`
- Flow property / unit: Mass / kg
- Amount rule: Reconcile measured NdFeB waste dispatched off site against input, accepted output, inventory change, and internal recycling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing`

###### SmCo magnet material loss (`smco_material_loss`)

Record SmCo grinding swarf, powder loss, and rejected SmCo material leaving the foreground as a concrete SmCo waste stream.

- Selected flow: SmCo magnet material loss
- Flow property / unit: Mass / kg
- Amount rule: Reconcile measured SmCo waste dispatched off site against input, accepted output, inventory change, and internal recycling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`

###### Alnico magnet material loss (`alnico_material_loss`)

Record Alnico casting gates, risers, grinding swarf, and rejected Alnico material leaving the foreground as a concrete Alnico waste stream.

- Selected flow: Alnico magnet material loss
- Flow property / unit: Mass / kg
- Amount rule: Reconcile measured Alnico waste dispatched off site against input, accepted output, inventory change, and internal recycling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`

###### Nickel-plating wastewater (`nickel_plating_wastewater`)

Record aqueous wastewater discharged from nickel-plating, rinsing, or associated bath treatment as a distinct waste flow; do not combine it with solid sludge or direct water emissions.

- Selected flow: Nickel-plating wastewater
- Flow property / unit: Mass / kg
- Amount rule: Meter wastewater sent to on-site or off-site treatment and reconcile it with the surface-treatment water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `netl-2014-ndfeb-magnet-manufacturing`

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide`)

Record fossil carbon dioxide emitted from on-site natural-gas combustion used by included manufacturing equipment. Upstream grid and fuel-supply emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from metered foreground natural-gas consumption and a disclosed carbon-content or emission-factor method, or use a quality-controlled direct measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `cui-et-al-2022-permanent-magnet-manufacturing`

###### Direct particulate matter at PM2.5 (`pm25_to_air`)

Record controlled and fugitive PM2.5 released directly from included powder handling, furnace, machining, and surface-treatment operations after abatement.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use stack testing, continuous or periodic monitoring, or an approved site calculation based on measured activity and abatement performance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted permanent metallic magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `netl-2014-ndfeb-magnet-manufacturing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_site_operations | Subdivide metered production lines, furnaces, machining cells, coating lines, and abatement equipment by product family or campaign before applying allocation. |  |
| `allocation_physical_driver` | residual_shared_inputs | When subdivision is not feasible, allocate shared electricity, gas, water, and consumables using a documented causal physical driver such as equipment time, furnace charge mass, treated surface area, or measured throughput; do not default to product mass when it is not causal. |  |
| `allocation_scrap_treatment` | magnet_material_loss | Treat off-site material loss as waste at the foreground boundary. Do not credit avoided virgin material; if an expanded recycling system is modelled, disclose the substitution method and keep it outside the uncredited foreground result. | `cui-et-al-2022-permanent-magnet-manufacturing` |
| `allocation_rejects` | internal_recycling | Return internally recycled powder, gates, risers, or swarf to the mass balance without counting a second external input or output; disclose internal recovery rate and losses. | `cui-et-al-2022-permanent-magnet-manufacturing` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `magnet_manufacturing` | Route-specific magnetic feedstock and material loss | Weigh tickets, batch sheets, inventory and waste dispatch records | alloy_family; grade; physical_state; supplier; recycled_content; opening_inventory_kg; receipts_kg; charge_kg; accepted_output_kg; internal_return_kg; off_site_loss_kg; closing_inventory_kg | Calibrated scales and lot-level material reconciliation | kg | Each lot or campaign, aggregated monthly | At least 12 representative months or the complete campaign for campaign production | All included lines at the declared site | Sum external inputs and outputs; keep internal returns non-duplicative; normalize by accepted product mass | Scale calibration, signed batch records, inventory reconciliation, waste transfer records, and unresolved balance explanation |
| `cp_gas_and_energy_records` | `magnet_manufacturing` | Electricity, natural gas, and hydrogen | Utility meters, invoices, equipment submeters, and batch logs | meter_id; opening_reading; closing_reading; unit; temperature; pressure; gas_basis; lower_heating_value; operation; lot_or_campaign; allocation_driver | Reconcile site invoices to included equipment and allocate only residual shared consumption | MJ; m3 | Monthly and by batch where submetered | Same period as product output, normally at least 12 representative months | Included production and abatement equipment | Convert electricity using 3.6 MJ/kWh; normalize metered consumption by accepted output after documented allocation | Meter calibration, invoice reconciliation, submeter coverage, conversion record, and allocation worksheet |
| `cp_water_balance` | `magnet_manufacturing` | Process water and nickel-plating wastewater | Intake and discharge meters, tank logs, treatment records, and water-quality records | intake_mass_or_volume; density; recirculated_water; evaporation; product_incorporation; wastewater_mass_or_volume; destination; nickel_concentration; sludge_mass | Reconcile water intake, reuse, losses, and wastewater discharge for included operations | kg; m3 | Monthly, with coating batches linked when applicable | Same period as product output | All included cooling, machining, cleaning, coating, and treatment systems | Convert volume with disclosed density; report make-up water and wastewater separately; normalize by accepted output | Meter calibration, laboratory analyses, treatment manifests, and closure of the water balance |
| `cp_surface_treatment_records` | `magnet_manufacturing` | Nickel, sodium hydroxide, and sulfuric acid | Purchase, bath make-up, concentration, anode, drag-out, and inventory records | coating_system; coated_area_m2; thickness; chemical_name; solution_mass; concentration; anode_mass_change; opening_inventory; additions; returns; closing_inventory | Reconcile each chemical and metal separately by coating campaign | kg; m2; µm | Each coating batch, aggregated monthly | Same period as coated product output | Included surface-treatment line | Calculate pure chemical mass from solution mass and concentration; normalize by accepted magnet mass while retaining treated area | Concentration certificates, bath analyses, calibrated balances, coating-thickness tests, and inventory reconciliation |
| `cp_product_and_quality_records` | `magnet_manufacturing` | Accepted permanent metallic magnet | Final weigh, inspection, and release records | alloy_family; grade; route; dimensions; coating; magnetization_direction; pole_configuration; mass_kg; magnetic_test_method; test_result; accepted_or_rejected | Calibrated final weighing and documented dimensional and magnetic acceptance testing | kg | Each production lot | Same period as inventory records | All reference-product lots | Sum accepted net product mass only; exclude packaging and rejects | Scale calibration, inspection report, test-equipment calibration, and release authorization |
| `cp_direct_emissions` | `magnet_manufacturing` | Direct fossil CO2 and PM2.5 | Fuel records, stack tests, monitoring data, abatement logs, and approved calculation sheets | emission_source; fuel_volume; fuel_carbon_content; factor; stack_flow; concentration; test_duration; abatement_status; operating_hours | Source-specific measurement or calculation using collected foreground activity data | kg | Per required test schedule and monthly calculation | Same period as product output | Every included direct emission source | Sum source emissions after abatement and normalize by accepted product mass; exclude upstream supply emissions | Laboratory accreditation, monitor calibration, factor source, calculation review, and abnormal-event log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory exchange | normalized amount = period exchange amount / net accepted product mass in the same period | exchange amount; accepted product mass | exchange per kg reference product |  |
| `calc_material_balance` | Each magnetic material family | balance gap = opening inventory + external receipts - accepted output - off-site material loss - closing inventory; internal returns are not counted as external exchanges | opening inventory; receipts; accepted output; off-site loss; closing inventory; internal returns | family-specific mass-balance gap and reconciliation status |  |
| `calc_pure_chemical` | Sodium hydroxide and sulfuric acid | pure chemical mass = supplied solution mass × verified mass fraction, adjusted for opening and closing solution inventory attributable to the reporting period | solution mass; concentration; opening inventory; closing inventory | kg pure chemical | `netl-2014-ndfeb-magnet-manufacturing` |
| `calc_fossil_co2` | Direct natural-gas combustion | calculate fossil CO2 from metered gas and a disclosed carbon-content or emission-factor method; keep factor identity, oxidation assumption, and reference conditions | gas volume; reference conditions; lower heating value or carbon content; factor; oxidation assumption | kg fossil CO2 released directly |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Every lot must identify alloy family, grade or composition, route, geometry, coating, magnetization state, and acceptance result. | Product specification, batch record, inspection report, and magnetic test result |
| `dq_temporal_alignment` | All foreground records | Inputs, outputs, waste, and emissions must cover the same production period; explain shutdowns, trials, abnormal events, and inventory carryover. | Dated meter, batch, inventory, treatment, and output records |
| `dq_mass_balance` | Magnetic materials and water | Reconcile family-specific material and site water balances; investigate rather than hide unexplained gaps. | Signed reconciliation worksheet and corrective-action record |
| `dq_route_coverage` | Conditional flows | A conditional row may be marked not applicable only with evidence that the relevant route, fuel, coating, or emission source was absent. | Process flow diagram, equipment list, formulation, and production record |
| `dq_upstream_representativeness` | Linked datasets | Upstream alloy or powder datasets must match material family, composition or grade, recycled content, technology, and geography as closely as practicable; document proxies. | Supplier declaration, dataset metadata, and proxy justification |
| `dq_uuid_gaps` | UUID-empty rows | Preserve the exact concrete flow name and qualifiers until an exact public Tiangong state-100 flow is confirmed; do not substitute a broader or differently classified UUID. | UUID review record and foreground flow specification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_product` | reference_flow | Confirm that the output is a finished, magnetized metallic magnet body, equals 1 kg net accepted mass after normalization, and carries every required qualifier. | `un-cpc-3-0-structure-2025` |
| `validate_category_exclusions` | product_scope | Reject datasets for ferrite or ceramic magnets, electromagnets, bonded composite magnets, magnet assemblies, or feedstock sold before final magnet manufacture. | `un-cpc-3-0-structure-2025`; `cui-et-al-2022-permanent-magnet-manufacturing` |
| `validate_route_inventory` | process_inventory | Verify that the declared route is consistent with the selected magnetic feedstock, included unit operations, conditional gases and coating chemicals, waste identities, and accepted product state. | `cui-et-al-2022-permanent-magnet-manufacturing`; `netl-2014-ndfeb-magnet-manufacturing` |
| `validate_mass_and_water_balance` | completeness | Require reconciled material-family and water balances, with internal recycling non-duplicative and all unexplained gaps disclosed. |  |
| `validate_direct_emissions` | elementary_flows | Confirm that fossil CO2 and PM2.5 rows contain only direct foreground releases and do not duplicate emissions embedded in electricity, gas, material, or treatment datasets. |  |
| `validate_evidence_and_uuid_status` | evidence | Confirm that every value derives from its declared collection protocol or calculation and that UUID-empty flows remain explicitly unresolved rather than receiving proxy UUIDs. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for finished permanent metallic magnet manufacture from declared ready-to-form magnetic feedstock |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Cradle-to-gate product footprints, component inventories, and lifecycle models that preserve alloy family, route, geography, product state, coating, and data-quality metadata |
| excluded_use | Ceramic or ferrite magnets; electromagnets; bonded composite magnets; complete magnet assemblies; use-phase performance or lifetime claims; substitution among NdFeB, SmCo, and Alnico without functional equivalence analysis |
| required_metadata | PCR id and version; alloy family and grade or composition; feedstock state and recycled content; route and unit operations; site and geography; reporting period; accepted output mass; coating; magnetization; magnetic test; allocation; upstream dataset identities; unresolved UUIDs |
| required_quality_disclosure | Meter and scale coverage; temporal coverage; material and water balance closure; conditional-row evidence; allocation basis; upstream proxies; emission method; rejected lots; missing data; uncertainty; unresolved range and UUID evidence needs |
| update_trigger | Change in alloy family or grade, feedstock source or recycled content, forming or heat-treatment technology, machining yield, coating system, energy supply, abatement, site, allocation method, or evidence sufficient to resolve a UUID or quantitative range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official identity of CPC 46931 and its separation from permanent ceramic or ferrite magnets |
| `cui-et-al-2022-permanent-magnet-manufacturing` | Literature (`literature`) | Cui, J. et al. (2022), Manufacturing Processes for Permanent Magnets: Part I—Sintering and Casting, JOM 74, 1279–1295, https://doi.org/10.1007/s11837-022-05156-9 | Metallic magnet family boundary; conventional NdFeB, SmCo, and Alnico route decomposition; machining and loss relevance |
| `netl-2014-ndfeb-magnet-manufacturing` | Dataset (`dataset`) | U.S. DOE National Energy Technology Laboratory (2014), NETL Life Cycle Inventory Data – Process Documentation File: NdFeB Permanent Magnet Manufacturing, https://www.netl.doe.gov/projects/files/DF_Stage1_O_NdFeB_Magnet_Manufacturing-2014-01.pdf (retrieved 2026-09-04) | NdFeB process sequence; atomic input, waste, and emission candidates; manufacturer-gate collection fields |
