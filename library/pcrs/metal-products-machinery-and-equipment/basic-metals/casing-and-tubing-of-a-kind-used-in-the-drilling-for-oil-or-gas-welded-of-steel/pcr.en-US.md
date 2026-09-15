---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.casing-and-tubing-of-a-kind-used-in-the-drilling-for-oil-or-gas-welded-of-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Casing and tubing, of a kind used in the drilling for oil or gas, welded, of steel

## 1. Scope and Applicability

This PCR applies to factory-gate production of welded steel casing and tubing made for oil or gas well drilling and production service. It covers electric-resistance-welded or high-frequency-welded pipe made from hot-rolled steel coil, including forming, longitudinal seam welding, sizing, required heat treatment, end finishing, testing, marking, specified protective coating, and shipment preparation performed by or for the reporting manufacturer.

The reference product may be casing or tubing, plain-end or supplied with a declared connection and coupling. The foreground data package shall identify the pipe kind, steel grade, dimensions, delivery condition, connection, coupling, coating, test regime, manufacturing site, and governing specification edition. API 5CT establishes the product and delivery-condition context; it does not replace site records for the inventory.

Excluded reference products are seamless casing, seamless tubing, drill pipe, line pipe, generic structural or mechanical welded tube, pup joints, coupling stock sold separately, and non-steel tubulars. Steelmaking upstream of purchased coil is represented by supplier-specific or geographically and technologically representative upstream datasets. Transport from the factory gate, well-site handling, installation, use, workover, and end-of-life are outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.casing-and-tubing-of-a-kind-used-in-the-drilling-for-oil-or-gas-welded-of-steel |
| classification_refs | CPC 3.0: 41286, exact classification context |
| covered_products | Welded steel casing and welded steel tubing intended for oil or gas wells; plain-end, threaded, or threaded-and-coupled delivery states when declared |
| excluded_products | Seamless casing or tubing; drill pipe; line pipe; general-purpose welded tube; pup joints and coupling stock sold as separate reference products; non-steel tubulars |
| representative_product | Electric-resistance-welded steel casing or tubing meeting the declared grade, dimensional, connection, testing, and delivery requirements |
| production_route | Hot-rolled steel coil or skelp slitting and edge preparation; roll forming; electric-resistance or high-frequency longitudinal seam welding; bead removal; seam heat treatment; sizing and cutting; conditional full-body heat treatment; straightening, end finishing, testing, marking, coating, and shipment preparation |
| market_state | Conforming finished pipe at the manufacturing factory gate; net product mass includes an attached coupling when supplied and excludes removable shipment packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Welded steel casing or tubing that provides the declared wellbore structural or flow-conduit function |
| How much | 1,000 kg net mass of conforming factory-gate product |
| How well | Meets the declared steel grade, dimensions, delivery condition, connection/end finish, coupling state, coating, inspection, and hydrostatic-test requirements |
| How long or cycle | One delivered production lot at the factory gate; in-well service life is not represented |
| reference_flow_link | `ref_welded_casing_tubing` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Casing and tubing, of a kind used in the drilling for oil or gas, welded, of steel `978eed2c-cf59-47ff-a661-c7b865b56140` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | casing or tubing; steel grade and material specification; outside diameter; wall thickness; ordered length range; ERW/HFW welding technology; heat-treatment delivery condition; plain-end or connection type; coupling included or excluded from product mass; coating and marking state; hydrostatic and non-destructive test regime; manufacturing site and country; production reference period; governing standard and edition; shipment-packaging scope |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1,000 kg net mass of conforming pipe. Include an attached coupling only when it is part of the declared delivered product; exclude pallets, dunnage, straps, and removable protectors from reference mass and report them as separate inputs. |
| `weighing_basis` | Coil, product, scrap, chemicals, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer calibrated scale records. When invoice mass or theoretical linear mass is used, disclose the method, dimensional inputs, density convention, and reconciliation to shipped net mass. |
| `electricity_energy` | Purchased alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity by process where available. Convert kWh to MJ using 1 kWh = 3.6 MJ and retain the original meter unit and conversion record. |
| `gas_volume_conditions` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature, pressure, and whether the meter reports standard or actual volume. Do not combine natural gas with other fuels. |
| `water_mass_conversion` | Process and test water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record make-up water crossing the foreground boundary. If a volume meter is used, retain volume and density/reference-condition information used for conversion; do not count recirculated water repeatedly. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | Include operations from receipt of hot-rolled steel coil or skelp through ERW/HFW forming and welding, required heat treatment, finishing, inspection, testing, marking, declared coating, and shipment preparation to the factory gate. | cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `boundary_upstream_inputs` | purchased_materials_and_energy | Link every purchased material, electricity, fuel, water, treatment service, and packaging input to an upstream dataset matched to its declared geography, technology, and product state. Steelmaking is upstream of the coil input and shall not be recreated inside the pipe-mill foreground process unless physically integrated and separately measured. | eu-2022-2110-fmp-bat |
| `boundary_conditional_operations` | heat_treatment_connections_coating_packaging | Include full-body heat treatment, upsetting, threading, coupling, protective varnish, and shipment-protection exchanges only when the declared grade, connection, order, or shipment state requires the individual operation or material. | api-5ct-11, cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `boundary_internal_transfers` | intermediate_pipe_states | Do not create product exchanges for green pipe or other intermediate pipe states transferred wholly inside the same foreground system. If an intermediate is purchased from or sold to another facility, model the actual product transfer as a separate dataset and disclose the split. | cbsa-octg3-2021 |
| `boundary_downstream_exclusion` | downstream_life_cycle | Exclude outbound distribution after the manufacturing factory gate, well construction, in-well use, maintenance, workover, and end-of-life. | un-cpc-3-0-2025 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Hot-rolled steel coil or skelp received at the welded-pipe manufacturing site, with grade, width, thickness, supplier, production route, and upstream dataset declared |
| starting_condition_role | Purchased principal steel feedstock entering the foreground ERW/HFW pipe-manufacturing system |
| product_classification_scope | Welded steel casing and tubing for oil or gas wells; not seamless OCTG, line pipe, drill pipe, or generic welded tube |
| recursive_input_rule | Purchased finished casing or tubing in this same category is recorded as a separate upstream product dataset and its mass is disclosed; it is not relabelled as hot-rolled coil. Same-site rework that never leaves the foreground boundary is an internal transfer and is not counted as a new input. |
| upstream_dataset_requirement | Supplier-specific coil data are preferred; otherwise use a dataset matched to steel grade family, steelmaking route, rolling technology, geography, and reference year. All other purchased inputs require product-state and geography matching. |
| disclosure | Declare coil source and grade; ERW/HFW technology; site integration; heat-treatment route; connection and coupling state; coating; testing; packaging; scrap destination; water recirculation; wastewater treatment; energy supply; allocation; and any excluded operation |

## 6. Process Inventory Structure

Only exchanges that cross the declared foreground-system boundary are listed. Intermediate pipe moved between the listed process stages inside one reporting system is not duplicated as an input or output.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `erw_forming_welding` | Coil preparation, roll forming, ERW/HFW welding, bead removal, seam heat treatment, sizing, and cutting | required | Always included for the covered welded product | Foreground pipe formation | Per 1,000 kg conforming factory-gate product |
| `grade_heat_treatment` | Full-body grade heat treatment and quenching | conditional | Include when the declared grade or delivery condition requires normalizing, quenching and tempering, or another separately metered full-body treatment | Foreground metallurgical conditioning | Per 1,000 kg conforming product receiving the treatment |
| `finishing_testing` | Straightening, facing, conditional threading/coupling, inspection, hydrostatic testing, marking, and conditional coating | required | Always include finishing and test operations; apply conditional material rows only when used | Foreground finishing and quality assurance | Per 1,000 kg conforming factory-gate product |
| `shipment_preparation` | Bundling and removable shipment protection | conditional | Include each listed material only when it is supplied with the factory-gate product | Foreground shipment preparation | Per 1,000 kg conforming factory-gate product; packaging excluded from reference mass |

### Process: Coil preparation, roll forming, and ERW/HFW welding (`erw_forming_welding`)

#### Inputs

##### Product flows

###### Principal hot-rolled coil feedstock (`erw_hot_rolled_coil`)

Record flat-rolled hot-rolled steel coil or skelp received for the covered pipe, including grade, width, thickness, supplier, and upstream steel dataset.

- Selected flow: steel hot rolled coil `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of coil or skelp consumed, adjusted for stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_erw_production_records`
- Sources: cbsa-octg3-2021, jfe-speciality-pipe-tube

###### Forming and welding electricity (`erw_electricity`)

Record alternating-current electricity metered or allocated to coil handling, edge preparation, roll forming, welding, bead removal, seam annealing, sizing, cutting, and associated extraction.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-metered electricity, or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_erw_production_records`
- Sources: jfe-speciality-pipe-tube, eu-2022-2110-fmp-bat

###### Forming and cooling make-up water (`erw_process_water`)

Record make-up process water crossing the boundary for weld cooling and other direct pipe-forming uses; exclude water recirculated inside the system.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water supplied to the process circuit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_erw_production_records`
- Sources: jfe-speciality-pipe-tube, eu-2022-2110-fmp-bat

###### Cutting fluid for edge preparation and cutting (`erw_cutting_fluid`)

Record fresh cutting fluid added for edge milling and cut-off operations; state formulation, supplied concentration, and whether the circuit is recirculated.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: fresh cutting-fluid make-up crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_erw_production_records`
- Sources: jfe-speciality-pipe-tube

##### Waste flows

No waste flow enters this process from outside the foreground system.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

Intermediate green pipe remains inside the foreground system and is not represented as an external product exchange.

##### Waste flows

###### Edge trim, weld bead, and crop steel scrap (`erw_steel_scrap`)

Record segregated ferrous scrap leaving the foreground system from slitting, edge preparation, bead cutting, sizing, and cut-off.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing scrap mass, net of internal same-site remelt or rework that stays inside the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_erw_production_records`
- Sources: jfe-speciality-pipe-tube

##### Elementary flows

No direct elementary output is prescribed here. Report measured welding fume or other direct releases as separate chemically specific elementary flows when they cross the boundary.

### Process: Full-body grade heat treatment and quenching (`grade_heat_treatment`)

#### Inputs

##### Product flows

###### Furnace natural gas (`ht_natural_gas`)

Include only for a separately identified natural-gas-fired grade heat-treatment route; do not combine it with other fuels.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume consumed by the applicable heat-treatment furnaces
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming product receiving full-body heat treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: cbsa-octg3-2021, eu-2022-2110-fmp-bat

###### Heat-treatment electricity (`ht_electricity`)

Record electricity for furnace drives, induction equipment when used, quench circulation, pumps, cooling, and extraction within the conditional heat-treatment process.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-metered electricity, or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming product receiving full-body heat treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: cbsa-octg3-2021, eu-2022-2110-fmp-bat

###### Quench make-up water (`ht_quench_water`)

Record only water crossing the boundary as make-up to the quench and cooling circuit; retain blowdown separately if it leaves as waste.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured quench-circuit make-up water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming product receiving water quenching
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: eu-2022-2110-fmp-bat

When a purchased quench medium other than water is used, add each actual chemically specific medium as a separate foreground input with its supplied state, concentration, and mass; do not relabel it as process water.

##### Waste flows

No waste flow enters this process from outside the foreground system.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

Heat-treated pipe remains inside the foreground system and is not represented as an external product exchange.

##### Waste flows

###### Iron-oxide mill scale (`ht_mill_scale`)

Record solid iron-oxide scale removed from pipe after full-body heat treatment when it leaves the foreground system.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing dry or as-received scale mass, with moisture basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming product receiving full-body heat treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: eu-2022-2110-fmp-bat

##### Elementary flows

###### Fossil carbon dioxide from furnace fuel (`ht_carbon_dioxide_fossil`)

Record direct fossil carbon dioxide from fuel combustion in the heat-treatment process. Upstream electricity emissions are excluded from this direct row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated fossil-fuel carbon balance under `calc_direct_combustion_emissions`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming product receiving fuel-fired full-body heat treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_emission_records`
- Sources: eu-2022-2110-fmp-bat

###### Nitrogen oxides from heat-treatment furnace (`ht_nitrogen_oxides`)

Record direct stack nitrogen oxides from the heat-treatment furnace on the measurement convention used by the facility; state whether results are expressed as NO2 equivalent.

- Selected flow: Nitrogen oxides `191b44d4-90c9-465a-8802-93a651b4fd52`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculation from monitored concentration and dry-normal gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming product receiving fuel-fired full-body heat treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_emission_records`
- Sources: eu-2022-2110-fmp-bat

###### Carbon monoxide from heat-treatment furnace (`ht_carbon_monoxide`)

Record direct stack carbon monoxide from the heat-treatment furnace as a separate elementary exchange.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculation from monitored concentration and dry-normal gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming product receiving fuel-fired full-body heat treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_emission_records`
- Sources: eu-2022-2110-fmp-bat

### Process: Finishing, inspection, and testing (`finishing_testing`)

#### Inputs

##### Product flows

###### Finishing and testing electricity (`fin_electricity`)

Record electricity for straightening, facing, threading, non-destructive testing, hydrostatic testing, handling, marking, coating equipment, and local extraction.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-metered electricity, or documented allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: jfe-speciality-pipe-tube, cbsa-octg3-2021

###### Hydrostatic-test and finishing water (`fin_process_water`)

Record make-up process water used for hydrostatic testing and direct finishing operations; exclude recirculation within the test circuit.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: jfe-speciality-pipe-tube

###### Cutting fluid for facing and threading (`fin_cutting_fluid`)

Record fresh cutting fluid added for end facing, beveling, or threading; include only operations performed inside the foreground boundary.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: fresh cutting-fluid make-up crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: cbsa-octg3-2021

###### Steel casing or tubing coupling (`fin_steel_coupling`)

Include only when a separately manufactured steel coupling is attached to and sold with the reference product; exclude coupling stock sold as a separate reference product.

- Selected flow: Steel casing or tubing coupling
- Flow property / unit: Mass / kg
- Amount rule: measured mass of purchased couplings attached to shipped product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product, with coupling inclusion in reference mass declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: api-5ct-11, cbsa-octg3-2021

###### Mill-applied protective varnish (`fin_protective_varnish`)

Include only when a liquid protective varnish is physically applied before shipment. Declare the actual resin, carrier, solids content, and curing system; a different coating material requires its own chemically specific foreground exchange.

- Selected flow: Mill-applied protective varnish for steel pipe
- Flow property / unit: Mass / kg
- Amount rule: coating issued to the line minus documented recoverable return, normalized to conforming coated product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming product receiving this coating
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: jfe-speciality-pipe-tube

###### Industrial marking ink (`fin_marking_ink`)

Include only ink physically applied for permanent product marking; declare its formulation and supplied state, and do not combine it with protective varnish.

- Selected flow: Industrial steel-product marking ink
- Flow property / unit: Mass / kg
- Amount rule: measured ink issued to marking equipment minus recoverable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg marked conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: jfe-speciality-pipe-tube

##### Waste flows

No waste flow enters this process from outside the foreground system.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Conforming welded casing or tubing (`ref_welded_casing_tubing`)

This is the reference product at the manufacturing factory gate, after all declared finishing, inspection, testing, marking, coating, and coupling operations.

- Selected flow: Casing and tubing, of a kind used in the drilling for oil or gas, welded, of steel `978eed2c-cf59-47ff-a661-c7b865b56140`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net conforming product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: un-cpc-3-0-2025, api-5ct-11

##### Waste flows

###### Off-specification pipe and finishing steel scrap (`fin_steel_scrap`)

Record off-specification pipe, facing cuttings, and thread-cutting steel scrap that leaves the foreground system as ferrous scrap.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing ferrous scrap mass from finishing and rejection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: jfe-speciality-pipe-tube

###### Spent cutting fluid (`fin_spent_cutting_fluid`)

Record spent cutting fluid removed from facing or threading circuits and sent outside the foreground system; do not combine it with aqueous test water.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed for external recovery or treatment, with water content declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: eu-2022-2110-fmp-bat

###### Spent hydrostatic-test water (`fin_spent_hydrotest_water`)

Record aqueous hydrostatic-test water discharged or sent to external treatment after its final use; do not count water recirculated inside the test circuit.

- Selected flow: Spent hydrostatic-test water from steel-pipe testing
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass leaving the foreground system, with oil and solids condition declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: eu-2022-2110-fmp-bat

##### Elementary flows

Direct volatile-organic-compound releases from coating or marking are not represented by a generic collection row. When measured, report each available chemically specific elementary flow or the directly verified facility reporting flow as a separate exchange.

### Process: Shipment preparation (`shipment_preparation`)

#### Inputs

##### Product flows

###### Steel packaging strap (`ship_steel_strapping`)

Include only steel strap that leaves the factory gate around a product bundle.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of steel strap supplied with shipped bundles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product; excluded from reference-product net mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shipment_records`
- Sources: cbsa-octg3-2021

###### Polypropylene thread protector (`ship_polypropylene_thread_protector`)

Include only a polypropylene protector fitted to a threaded pipe end or coupling for shipment; record protectors of another polymer as separate material-specific exchanges.

- Selected flow: Polypropylene casing or tubing thread protector
- Flow property / unit: Mass / kg
- Amount rule: measured or item-count-derived mass of polypropylene protectors supplied with product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg threaded conforming product; excluded from reference-product net mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shipment_records`
- Sources: api-5ct-11, cbsa-octg3-2021

###### Kiln-dried softwood dunnage (`ship_softwood_dunnage`)

Include only kiln-dried softwood blocks, runners, or spacers that accompany the product beyond the factory gate; reusable internal supports are excluded.

- Selected flow: Kiln-dried softwood shipping dunnage
- Flow property / unit: Mass / kg
- Amount rule: measured or item-count-derived dry mass of dunnage supplied with product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming factory-gate product; excluded from reference-product net mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shipment_records`
- Sources: cbsa-octg3-2021

##### Waste flows

No waste flow enters this process from outside the foreground system.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

No additional product flow is created: removable shipment protection accompanies the reference product but is excluded from its net mass.

##### Waste flows

Record packaging offcuts as separate material-specific waste exchanges when they leave the foreground system; no generic packaging-waste row is permitted.

##### Elementary flows

No direct elementary output is prescribed for this process.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_processes | Avoid allocation by process metering and subdivision of forming/welding, grade heat treatment, finishing/testing, and shipment preparation wherever records allow. | eu-2022-2110-fmp-bat |
| `allocation_shared_energy` | shared_energy_and_utilities | For unavoidable shared meters, allocate by a documented causal driver such as machine time, furnace charge mass, test time, or treated product mass. Use mass allocation only when no more causal driver exists and disclose the affected exchanges and fraction. | eu-2022-2110-fmp-bat |
| `allocation_steel_scrap` | ferrous_scrap_outputs | Report steel scrap as a waste output at the measured mass. Do not subtract an avoided-primary-steel credit inside the foreground inventory; any recycling model, substitution credit, or end-of-life allocation is an external scenario and shall be disclosed separately. | eu-2022-2110-fmp-bat |
| `allocation_offspec_rework` | internal_rework | Material returned to an operation without leaving the foreground system is an internal transfer. Count only net purchased inputs, net conforming product, and wastes or products that cross the boundary. | cbsa-octg3-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_erw_production_records` | `erw_forming_welding` | coil, electricity, water, cutting fluid, and steel scrap | scale, meter, stock, purchase, and waste-dispatch records | lot id; coil mass and grade; opening/closing stock; electricity; make-up water; cutting-fluid additions; scrap mass; conforming output mass | calibrated scales and submeters; otherwise documented reconciliation to site meters and inventory records | kg; MJ | per production lot with monthly reconciliation | at least 12 consecutive representative months, or the complete shorter campaign with justification | all equipment and support loads inside the declared forming/welding boundary | sum net boundary-crossing quantities and normalize under `calc_reference_normalization` | calibration, invoices, meter exports, stock reconciliation, and scrap dispatch tickets |
| `cp_heat_treatment_records` | `grade_heat_treatment` | natural gas, electricity, quench water, quenchant, and scale | meter, batch, chemical-addition, and waste records | heat-treatment lot; grade; route; treated mass; fuel volume and conditions; electricity; water; quenchant additions; scale mass and moisture | dedicated meters and batch logs; documented allocation only when dedicated meters are unavailable | kg; m3; MJ | per furnace batch with monthly reconciliation | same reference period as product data | every included furnace and quench circuit | aggregate only treated lots and normalize to treated conforming output | meter calibration, furnace logs, material issues, and waste tickets |
| `cp_heat_emission_records` | `grade_heat_treatment` | direct fossil CO2, nitrogen oxides, and carbon monoxide | stack test, continuous monitor, fuel analysis, and gas-flow records | source id; operating hours; concentration; reference oxygen; dry/wet basis; temperature; pressure; gas flow; fuel carbon; treated mass | direct monitored mass preferred; otherwise calculate from monitored concentration and normalized gas flow or a documented fuel carbon balance | kg; mg/Nm3; Nm3; kg C | each monitoring event with period integration | same reference period as heat-treatment activity | all included fuel-fired heat-treatment stacks | integrate mass over included operation and normalize to treated conforming output | analyzer calibration, sampling report, laboratory certificate, and calculation workbook |
| `cp_finishing_records` | `finishing_testing` | electricity, test water, cutting fluid, coupling, lacquer, ink, product, and wastes | meter, scale, purchase, issue, inspection, and waste records | lot id; product kind; grade; dimensions; connection; coupling mass; coating; test status; input issues; water make-up/discharge; scrap and spent-fluid mass; conforming net mass | calibrated scales/meters and production/quality records | kg; MJ | per lot with monthly reconciliation | same reference period as forming/welding data | all finishing and test operations in scope, including outsourced operations attributed to the product | sum by declared product family and normalize to conforming factory-gate net mass | calibration, inspection and hydrotest records, material certificates, purchase/issue records, and waste tickets |
| `cp_shipment_records` | `shipment_preparation` | steel strap, polypropylene protectors, and softwood dunnage | issue, bill-of-material, item-count, and shipment records | shipment id; product net mass; material type; item count; unit mass; issued mass; returned mass | weigh representative items and reconcile issued quantities to shipment records | kg; item | per shipment with monthly reconciliation | same reference period as product data | packaging supplied beyond the factory gate only | calculate net supplied mass and normalize to product net mass | weighing record, material specification, bill of materials, and shipment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all non-reference inventory rows | normalized amount = 1,000 × period boundary-crossing amount / period conforming reference-product net mass | period flow amount; period conforming net product mass | flow amount per 1,000 kg reference product | eu-2022-2110-fmp-bat |
| `calc_electricity_conversion` | electricity records | electricity MJ = metered kWh × 3.6; retain original kWh and meter period | metered kWh | electricity in MJ |  |
| `calc_direct_combustion_emissions` | heat-treatment fossil CO2, nitrogen oxides, and carbon monoxide | Prefer directly integrated monitored mass. Otherwise concentration-based mass = dry-normal concentration × dry-normal gas volume with unit conversion; fossil CO2 may alternatively use a documented fuel-carbon balance corrected for non-CO2 carbon. | concentration; gas flow; time; reference conditions; fuel carbon where applicable; treated output mass | kg pollutant per 1,000 kg treated conforming product | eu-2022-2110-fmp-bat |
| `calc_shipment_component_mass` | thread protectors and softwood dunnage | supplied mass = item count × verified mean unit mass; reweigh when component design or material changes | item count; sampled unit mass; returned items | kg supplied material per 1,000 kg reference product | api-5ct-11 |
| `calc_mass_reconciliation` | principal steel and ferrous outputs | Reconcile opening stock + purchased coil + other included steel components with closing stock + conforming product steel mass + exported steel scrap + documented inventory change. Explain unresolved imbalance without forcing closure. | coil and coupling inputs; stock changes; conforming product; steel scrap; internal transfers | documented steel mass-balance residual | cbsa-octg3-2021, jfe-speciality-pipe-tube |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain product kind, grade, dimensions, welded technology, heat treatment, connection, coupling, coating, marking, test status, governing specification edition, and net-mass convention for every included product family. | Product specification, mill test certificate, order, and inspection record; api-5ct-11 |
| `dq_technology_scope` | process boundary | Identify which operations are onsite, outsourced, or absent and whether data represent ERW or HFW equipment, seam annealing, full-body heat treatment, threading, coupling, coating, and bundling. | Process flow diagram, equipment list, supplier record, and cbsa-octg3-2021/jfe-speciality-pipe-tube comparison |
| `dq_temporal_representativeness` | all foreground records | Use a common representative period of at least 12 consecutive months where production is continuous; justify a shorter complete campaign and disclose shutdowns, trials, and abnormal lots. | Dated meter, production, purchase, stock, and waste records |
| `dq_completeness` | all boundary exchanges | Reconcile principal material, energy, water, fuel, chemicals, packaging, wastes, and direct monitored emissions against the process-flow and environmental-stream inventories; do not hide an exchange inside a plural utility or waste row. | Reconciliation workbook and process-chemical/wastewater/waste-gas inventory following eu-2022-2110-fmp-bat |
| `dq_meter_and_scale_quality` | measured amounts | Record instrument id, calibration status, resolution, coverage, missing-data treatment, and allocation method for every material meter or scale. | Calibration certificates, meter exports, scale tickets, and gap log |
| `dq_upstream_matching` | upstream datasets | Match coil to grade family, steelmaking/rolling route, geography, and year; match electricity, gas, water, chemicals, treatment, and packaging to supply geography and product state. | Supplier primary data or documented dataset-selection matrix |
| `dq_uuid_traceability` | TianGong identities | Use only directly verified public state-100 UUIDs. Keep UUID-empty rows explicit until an exact identity is verified; never substitute a proxy. | Finalized hybrid-search receipts and manifest unresolved register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | Confirm exactly 1,000 kg net conforming product, the CPC 41286 TianGong reference UUID, and every required qualifier. Verify coupling inclusion and packaging exclusion from reference mass. | un-cpc-3-0-2025, api-5ct-11 |
| `validate_welded_route` | product_and_process_identity | Reject datasets for seamless casing/tubing, line pipe, drill pipe, general welded tube, or a route that does not form and longitudinally weld flat-rolled steel feedstock. | un-cpc-3-0-2025, cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `validate_process_completeness` | foreground_inventory | Check the declared process flow against coil preparation, forming/welding, conditional heat treatment, finishing/testing, conditional coating/coupling, and shipment preparation; explain every absent conditional stage. | cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `validate_atomic_exchanges` | inventory_rows | Confirm every inventory row is one physical, chemical, waste, or energy exchange and that electricity, natural gas, water, cutting fluid, coating, packaging components, wastes, and each direct emission remain separate. | eu-2022-2110-fmp-bat |
| `validate_mass_balance` | steel_mass_reconciliation | Review the steel mass-balance residual and supporting stock changes. Do not force the balance by changing the fixed reference flow or silently netting scrap credits. | cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `validate_water_and_energy` | meters_and_recirculation | Confirm electricity is converted consistently, natural-gas reference conditions are declared, make-up water is not confused with recirculated water, and water discharge is not double counted. | eu-2022-2110-fmp-bat |
| `validate_uuid_and_language` | bilingual_identity | Confirm every UUID-bearing Chinese flow display uses the exact TianGong Chinese baseName and every UUID-empty row appears in manifest review metadata. |  |
| `validate_range_evidence` | quantitative_ranges | Reject an externally inferred range unless at least two independent original sources have compatible factory-gate boundary, functional unit, and product state and the synthesis explains geographic and technological differences. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate secondary dataset for welded steel oil/gas well casing or tubing production |
| downstream_use | `secondary_dataset`; may serve as a `background_dataset` only for a matching declared product, route, geography, grade/delivery condition, and time period |
| allowed_use | Foreground data-package construction; product and process LCI; cradle-to-gate or broader life-cycle models when the reference product and boundary are matched |
| excluded_use | Seamless OCTG, line pipe, drill pipe, generic welded tube, unqualified global average, installed well service, or automatic substitution across different grade, connection, heat-treatment, coating, or packaging states |
| required_metadata | All reference-flow qualifiers; site and country; reference year; coil steel route and supplier geography; ERW/HFW technology; included operations; grade heat treatment; connection/coupling; coating; test regime; packaging; water recirculation; emissions method; allocation; upstream datasets; UUID status |
| required_quality_disclosure | Primary-data share and period; metering and calibration; allocation fractions; steel mass-balance residual; missing records; outsourced operations; representativeness limits; unresolved UUIDs; unresolved range evidence; exclusions and deviations |
| update_trigger | Change in principal steel route or supplier geography; ERW/HFW line technology; furnace fuel or heat-treatment route; product grade mix; connection/coating/packaging state; water or emission controls; allocation; reference year; governing standard edition; or any change exceeding the study's significance threshold |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division. CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04). | Exact CPC 41286 classification identity and exclusions from adjacent product categories |
| `api-5ct-11` | `standard` | American Petroleum Institute. API Specification 5CT, Casing and Tubing, 11th edition, official publication announcement. https://www.api.org/products-and-services/standards/important-standards-announcements/spec5ct-tradepress (verified 2026-09-04). | Product qualification metadata, end finish, automated inspection, and thread-protector context |
| `cbsa-octg3-2021` | `official_guidance` | Canada Border Services Agency. Oil country tubular goods 3, 2021 investigations - Statement of Reasons - Initiation of an investigation, Production process. https://www.cbsa-asfc.gc.ca/sima-lmsi/i-e/octg32021/octg32021-in-eng.html (verified 2026-09-04). | Original-text ERW OCTG route: slitting hot-rolled coil, roll forming, resistance welding, cutting, conditional heat treatment, finishing, threading, coupling, testing, coating, marking, and bundling |
| `jfe-speciality-pipe-tube` | `handbook` | JFE Steel Corporation. Speciality Pipe and Tube, ERW Pipe Process Equipment and Manufacturing Flowchart. https://www.jfe-steel.co.jp/en/products/pipes/catalog/e1e-011.pdf (retrieved and visually verified 2026-09-04). | ERW process decomposition, seam welding, bead removal, post-annealing, cooling, sizing, cutting, hydrostatic and ultrasonic testing, threading, inspection, marking, mill-standard varnish coating, and shipping |
| `eu-2022-2110-fmp-bat` | `official_guidance` | European Commission. Commission Implementing Decision (EU) 2022/2110 establishing BAT conclusions for the ferrous metals processing industry. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110 (verified 2026-09-04). | Process-chemical, wastewater, waste-gas, water, energy, material-efficiency, and emissions monitoring and data-quality rules; not used as an ERW OCTG numeric range |
