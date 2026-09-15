---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.compression-ignition-internal-combustion-piston-engines-of-a-kind-used-for-the-propulsi-9c3f4844
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Compression-ignition internal combustion piston engines, of a kind used for the propulsion of vehicles other than railway or tramway rolling stock

## 1. Scope and Applicability

This PCR governs foreground manufacturing data packages for new compression-ignition internal combustion piston engines supplied for propulsion of road and other non-rail vehicles. It covers component manufacture and machining performed by the engine producer, assembly and finishing, and factory acceptance testing through the manufacturer gate. Purchased materials, components, electricity, heat, water, fuels, and chemicals remain visible product inputs linked to upstream datasets.

It does not cover spark-ignition engines, railway or tramway propulsion engines, aircraft engines, marine or stationary engines, parts sold separately, remanufacturing, vehicle integration, vehicle operation, maintenance, or end-of-life. A producer shall disclose outsourced operations and shall not claim cradle-to-gate completeness when an upstream input lacks a valid linked dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.compression-ignition-internal-combustion-piston-engines-of-a-kind-used-for-the-propulsi-9c3f4844 |
| classification_refs | CPC 3.0: 43123 (exact category identity) |
| covered_products | New compression-ignition piston engines designed for propulsion of road or other non-rail vehicles, delivered as complete factory-tested engines |
| excluded_products | Spark-ignition engines; railway or tramway propulsion engines; aircraft, marine, or stationary engines; engine parts sold separately; remanufactured engines |
| representative_product | A complete diesel-cycle vehicle-propulsion engine at the engine manufacturer's gate |
| production_route | Component manufacture or machining, engine assembly and finishing, and factory acceptance testing; outsourced stages are disclosed and linked |
| market_state | New, complete, factory-tested engine before vehicle installation; dry or wet mass state must be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a new, complete, factory-tested compression-ignition piston engine suitable for non-rail vehicle propulsion |
| How much | 1 kg of complete engine mass at the engine manufacturer's gate |
| How well | Meets the declared engine-family specification, rated power and speed, applicable emission stage, and declared accessory and aftertreatment configuration |
| How long or cycle | One production and factory-acceptance cycle; engine service life is outside this gate-to-gate reference |
| reference_flow_link | `reference_engine_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Compression-ignition vehicle-propulsion piston engine |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | engine model or family; displacement; rated power and rated speed; applicable emission stage and market; dry or wet mass state; included turbocharger, fuel system, controls, aftertreatment, starter, alternator, and other accessories; manufacturing geography and reference period; new rather than remanufactured state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | complete engine reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the delivered engine in the declared dry or wet state; normalize every exchange to 1 kg of that same state. |
| `material_mass` | material, chemical, fuel, scrap, waste oil, wastewater, coating waste, and gaseous or particulate emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated mass records; conversions from volume require recorded density, temperature, and concentration where material. |
| `energy_quantity` | electricity and purchased heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Convert metered kWh to MJ using 3.6 MJ per kWh and preserve the meter boundary; do not convert purchased heat to fuel without evidence. |
| `exhaust_test_basis` | acceptance-test emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Aggregate measured mass over the declared test cycle and allocate only to engines actually tested; disclose cycle, sampling location, detection limits, and any below-detection treatment. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground engine manufacturing | Include producer-controlled component manufacture or machining, assembly, finishing, acceptance testing, internal material movement, rework, and treatment of foreground wastes through the manufacturer gate. | `rouhento-2018-diesel-engine-lca` |
| `boundary_upstream_links` | purchased inputs | Keep every purchased material, component, energy carrier, water, fuel, and chemical as an explicit product input linked to a geographically and technologically appropriate upstream dataset. | `jrc-2025-ef-method-key-aspects` |
| `boundary_outsourced_operations` | outsourced manufacturing | Include outsourced operations through explicit service or intermediate-product links and disclose their geography and data quality; do not silently omit them. | `jrc-2025-ef-method-key-aspects` |
| `boundary_exclusions` | downstream life cycle | Exclude vehicle assembly, engine operation, maintenance, replacement, vehicle use, and end-of-life unless a separate downstream model explicitly adds them without altering this manufacturing inventory. | `un-cpc-3-0-structure-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material, component, energy, water, fuel, and chemical inputs received at the engine-manufacturing boundary, with upstream datasets linked separately |
| starting_condition_role | Defines the foreground gate and prevents upstream production from being embedded as untraceable totals |
| product_classification_scope | Complete CPC 43123 engines only; parts and same-category intermediate engines remain separate inputs until incorporated |
| recursive_input_rule | If a CPC 43123 engine is incorporated as an input, record it as a distinct product input with supplier, mass state, and upstream dataset rather than recursively applying this PCR inside the same process |
| upstream_dataset_requirement | Each purchased input requires a representative upstream dataset or an explicit documented data gap |
| disclosure | Declare producer-controlled versus outsourced stages, dry or wet reference state, included engine accessories, test share, allocation, cut-offs, geography, technology, and reference period |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_manufacturing` | Component manufacture and machining | required | Include producer-controlled casting, forming, heat treatment, machining, and cleaning; represent outsourced components as linked purchased inputs | Converts metal feedstocks into engine components | Per 1 kg complete engine output |
| `assembly_and_finishing` | Engine assembly and finishing | required | Include mechanical assembly, washing, coating, drying, fluid filling, rust protection, rework, and internal handling actually performed | Produces a finished engine ready for test | Per 1 kg complete engine output |
| `factory_acceptance_test` | Factory acceptance test | required | Include the documented routine or sampled engine test and allocate sampled-test burdens over the represented production lot | Confirms engine conformity and produces the reference output | Per 1 kg complete engine output |

### Process: Component manufacture and machining (`component_manufacturing`)

#### Inputs

##### Product flows

###### Cast iron feedstock (`cast_iron`)

Record the cast iron incorporated into producer-made blocks, heads, housings, or other cast components from purchasing and stock records.

- Selected flow: Cast iron
- Flow property / unit: Mass / kg
- Amount rule: Net purchased mass entering included component manufacture, corrected for stock change and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Alloy steel feedstock (`alloy_steel`)

Record alloy steel incorporated into producer-made shafts, gears, fasteners, or other machined components.

- Selected flow: Alloy steel
- Flow property / unit: Mass / kg
- Amount rule: Net purchased mass entering included component manufacture, corrected for stock change and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Aluminium alloy (`aluminium_alloy`)

Record aluminium alloy feedstock used in producer-made cast or machined engine components.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: Net purchased mass entering included component manufacture, corrected for stock change and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Cutting fluid (`cutting_fluid`)

Record make-up cutting fluid crossing the boundary into machining, not recirculated internal volume.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Purchased make-up plus opening inventory minus closing inventory, excluding recovered internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_consumables`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Electricity (`component_electricity`)

Record metered electricity for included component operations and their allocated auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity converted to MJ and allocated using documented equipment time or production mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_water`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Process Water (`component_process_water`)

Record process water supplied to producer-controlled machining and parts cleaning in this process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoiced water entering this process, converted to mass with documented density when measured by volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_water`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Heat (`component_heat`)

Record purchased heat delivered to included heat treatment or component operations; direct on-site fuels must be recorded as their own atomic inputs instead.

- Selected flow: Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered purchased heat attributable to the process, net of documented return energy where the supplier bill uses that basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_water`
- Sources: `rouhento-2018-diesel-engine-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap for recycling (`steel_scrap`)

Record segregated ferrous machining and forming scrap transferred for recycling.

- Selected flow: Steel scrap, for recycling `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound ferrous scrap attributed to included engine production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_wastes`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Aluminium Scrap (`aluminium_scrap`)

Record segregated aluminium machining or casting scrap transferred from the foreground system.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound aluminium scrap attributed to included engine production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_wastes`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Waste cutting oil (`waste_cutting_oil`)

Record spent cutting oil removed from the recirculating machining system for external treatment.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or manifest-recorded spent cutting oil leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_wastes`
- Sources: `rouhento-2018-diesel-engine-lca`

##### Elementary flows

### Process: Engine assembly and finishing (`assembly_and_finishing`)

#### Inputs

##### Product flows

###### Liquid Detergent (`liquid_detergent`)

Record liquid detergent supplied for aqueous washing of engine components or assembled engines.

- Selected flow: Liquid Detergent `c1214ed0-28a4-4273-a8c9-a4f29351747a`
- Flow property / unit: Mass / kg
- Amount rule: Purchased make-up corrected for stock change and dilution water recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Industrial Maintenance Coatings (`industrial_maintenance_coating`)

Record protective coating solids and carrier as the purchased coating product crossing the finishing boundary.

- Selected flow: Industrial Maintenance Coatings `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- Flow property / unit: Mass / kg
- Amount rule: Coating issued to the line minus documented recoverable return, with formulation and solids fraction declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Rust-preventive oil (`rust_preventive_oil`)

Record oil applied specifically for temporary corrosion protection before shipment.

- Selected flow: Rust-preventive oil
- Flow property / unit: Mass / kg
- Amount rule: Issued mass minus recoverable return; record zero only when absence is documented for the represented product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources: `rouhento-2018-diesel-engine-lca`

###### lubricating oil (`lubricating_oil`)

Record lubricating oil filled into the engine before factory testing and shipment.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Net filled mass including test top-up, less separately measured recovered oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fluid_filling`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Coolant (`coolant`)

Record coolant filled into the engine or its closed factory-test circuit when it crosses the process boundary.

- Selected flow: Coolant `92c6fd56-f8a2-45ed-bb52-c4238cf8927c`
- Flow property / unit: Mass / kg
- Amount rule: Net new coolant make-up; exclude internally recirculated inventory and declare formulation and concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fluid_filling`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Electricity (`assembly_electricity`)

Record metered electricity for assembly, washing, coating, drying, handling, and allocated auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity converted to MJ and allocated using documented equipment time or production mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_water`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Process Water (`assembly_process_water`)

Record water supplied for washing, coating preparation, and finishing operations, excluding closed-loop recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoiced water entering assembly and finishing, converted to mass with documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_water`
- Sources: `rouhento-2018-diesel-engine-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Oily industrial wastewater (`oily_industrial_wastewater`)

Record aqueous effluent contaminated by oil from washing or finishing when it leaves for treatment.

- Selected flow: Oily industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass attributable to engine production, with oil concentration and treatment destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Waste paint (`waste_paint`)

Record coating residue collected from mixing, application, overspray capture, or equipment cleaning for external treatment.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or manifest-recorded waste paint leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `rouhento-2018-diesel-engine-lca`

##### Elementary flows

### Process: Factory acceptance test (`factory_acceptance_test`)

#### Inputs

##### Product flows

###### Diesel fuel (`test_diesel_fuel`)

Record diesel fuel combusted during routine or sampled factory acceptance tests.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Test-cell fuel-meter difference over represented test cycles, allocated across the documented production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_test`
- Sources: `rouhento-2018-diesel-engine-lca`

###### Electricity (`test_electricity`)

Record electricity for test-cell equipment, controls, ventilation, pumps, and allocated auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered test-cell electricity converted to MJ and allocated across the represented production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_test`
- Sources: `rouhento-2018-diesel-engine-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete compression-ignition vehicle-propulsion engine (`reference_engine_output`)

Record the complete conforming engine at the manufacturer gate in the declared dry or wet state.

- Selected flow: Compression-ignition vehicle-propulsion piston engine
- Flow property / unit: Mass / kg
- Amount rule: Fixed normalization output of 1 kg, scaled from the weighed conforming engine mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`test_carbon_dioxide_fossil`)

Record fossil carbon dioxide emitted from test-engine exhaust during the represented acceptance-test cycles.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured exhaust mass over represented cycles, or a declared carbon balance from measured fuel carbon when direct measurement is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_emissions`
- Sources: `eu-reg-582-2011-consolidated-2021`

###### carbon monoxide (fossil) (`test_carbon_monoxide_fossil`)

Record fossil carbon monoxide emitted from test-engine exhaust during the represented acceptance-test cycles.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Analyzer-derived mass integrated over the represented test cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_emissions`
- Sources: `eu-reg-582-2011-consolidated-2021`

###### Nitrogen oxides to air (`nitrogen_oxides_to_air`)

Record nitrogen oxides emitted from test-engine exhaust using the declared regulatory or factory test convention.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Analyzer-derived mass integrated over represented cycles; declare whether reported as NO2 equivalent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_emissions`
- Sources: `eu-reg-582-2011-consolidated-2021`

###### Particulate matter, particle size unspecified (`particulate_matter_to_air`)

Record measured particulate matter mass emitted from test-engine exhaust; do not substitute particle number without a documented conversion method.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Filter- or instrument-derived particulate mass integrated over represented test cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_emissions`
- Sources: `eu-reg-582-2011-consolidated-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | separable engine models, lines, or process steps | First subdivide meters, batches, lines, test cells, rework, and waste records wherever technically feasible. | `jrc-2025-ef-method-key-aspects` |
| `allocation_physical` | unavoidable shared burdens | When subdivision is not feasible, allocate using a causal physical driver such as machine time, test duration, metered energy, processed mass, or engine count; document the driver and calculation. | `jrc-2025-ef-method-key-aspects` |
| `allocation_recycling` | metal scrap and recovered materials | Record scrap as a waste output at the foreground boundary and apply the chosen downstream recycling method consistently outside this inventory; do not subtract avoided primary production from foreground input quantities. | `jrc-2025-ef-method-key-aspects` |
| `allocation_test_sampling` | sampled acceptance tests | Allocate sampled-test fuel, electricity, and emissions across the exact production lot represented by the sampling plan, preserving rejected-engine and retest burdens. | `rouhento-2018-diesel-engine-lca` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | component_manufacturing | metal feedstocks | purchase, stock, recipe, and scrap records | material grade; opening stock; receipts; closing stock; scrap; engine model; conforming output mass | Reconcile material ledger to production orders and weigh representative components | kg | monthly or batch | At least 12 representative months or full campaign | All included component areas | Sum net material by grade and divide by conforming reference-product mass | invoices; stock ledger; scales; bill of material; reconciliation |
| `cp_machining_consumables` | component_manufacturing | cutting fluid | issue and tank inventory records | product; concentration; opening inventory; additions; closing inventory; recovered quantity | Reconcile purchased make-up and tank inventory; exclude internal recirculation | kg | batch or monthly | Same period as production | Included machining systems | Net make-up divided by conforming output mass | purchase records; tank logs; concentration tests |
| `cp_energy_water` | component_manufacturing; assembly_and_finishing | electricity, heat, and process water | meters and invoices | meter id; start/end reading; unit; time; area; allocation driver; production mass | Read calibrated submeters; use invoices only with documented allocation | MJ; kg | shift, batch, or monthly | Same representative period for numerator and output | All included production and auxiliary areas | Sum by process, convert units, subtract documented non-engine loads, normalize by output mass | meter calibration; invoices; allocation worksheet |
| `cp_manufacturing_wastes` | component_manufacturing | segregated scrap and spent cutting oil | scales and waste manifests | waste identity; mass; date; origin; destination; recovery or treatment route | Weigh each outbound waste stream and reconcile storage change | kg | shipment and monthly | Same period as production | Included component areas | Outbound plus closing inventory minus opening inventory, normalized by output mass | weighbridge tickets; manifests; waste-store ledger |
| `cp_finishing_materials` | assembly_and_finishing | detergent, coating, and rust-preventive oil | issue, return, and formulation records | product; issued mass; returned mass; concentration; solids fraction; engine family | Reconcile line issues and returns; record water separately | kg | batch or monthly | Same period as production | Included washing and coating lines | Net issued product divided by conforming output mass | formulation sheet; issue logs; purchase records |
| `cp_fluid_filling` | assembly_and_finishing | lubricating oil and coolant | fill-station meters and inventory | fluid identity; formulation; concentration; fill; recovery; top-up; engine serial | Meter new fluid crossing the boundary and exclude closed-loop inventory | kg | engine or batch | Same period as production | Included fill and test circuits | Net new fluid divided by conforming output mass | calibrated dispenser; serial records; inventory reconciliation |
| `cp_finishing_wastes` | assembly_and_finishing | oily wastewater and waste paint | effluent meters, sampling, scales, and manifests | mass or volume; density; oil concentration; paint residue mass; destination | Meter discharge and weigh residues; reconcile holding-tank inventory | kg | discharge or shipment | Same period as production | Included washing and finishing areas | Net boundary output divided by conforming output mass | meter calibration; laboratory report; manifest; tank ledger |
| `cp_acceptance_test` | factory_acceptance_test | test fuel and electricity | test-cell meters and logs | engine serial; model; cycle; duration; fuel readings; electricity readings; lot represented | Link calibrated meters to each test and sampling plan | kg; MJ | each test | Same period as represented production | All included test cells and auxiliaries | Sum tests, include retests, allocate over represented lot, normalize by output mass | test log; meter calibration; sampling plan |
| `cp_reference_product` | factory_acceptance_test | conforming engine output | production and weighing records | engine serial; dry or wet state; included accessories; measured mass; conformity status | Weigh conforming engines and reconcile production count | kg | each model or representative batch | Same period as inventory | Manufacturer gate | Sum conforming engine mass; exclude rejected output but retain its burdens | calibrated scale; bill of material; conformity record |
| `cp_test_emissions` | factory_acceptance_test | exhaust emissions | analyzer and particulate measurement files | engine serial; cycle; pollutant; concentration or mass; exhaust flow; detection limit; calibration; lot represented | Integrate calibrated measurements over each test cycle and link to the sampling plan | kg | each measured test | Same period as represented production | Test-cell exhaust boundary | Sum measured mass including retests, allocate over represented lot, normalize by output mass | raw analyzer file; filter record; calibration; test report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every exchange | normalized exchange = period exchange / conforming complete-engine mass for the identical period and declared mass state | period exchange; conforming engine mass | kg, MJ, or kg emission per kg reference product | `jrc-2025-ef-method-key-aspects` |
| `calc_electricity_conversion` | electricity | electricity_MJ = metered_kWh × 3.6 | metered kWh | MJ electricity | `jrc-2025-ef-method-key-aspects` |
| `calc_stock_reconciliation` | materials, chemicals, fluids, and stored wastes | boundary amount = purchases or generation + opening inventory - closing inventory - documented recoverable return | invoices; opening and closing stock; returns | net boundary mass | `jrc-2025-ef-method-key-aspects` |
| `calc_test_allocation` | sampled acceptance test | allocated test amount = total included test amount / total conforming engine mass represented by the documented sampling plan | test totals; represented lot; output mass | test exchange per kg engine | `rouhento-2018-diesel-engine-lca` |
| `calc_exhaust_mass` | gaseous and particulate exhaust | integrate validated analyzer or filter mass over the test cycle; if concentration and exhaust flow are used, preserve time alignment, dry/wet correction, and reference conditions | calibrated measurement series; exhaust flow; cycle duration | pollutant mass per represented production lot | `eu-reg-582-2011-consolidated-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal_alignment` | all foreground exchanges | Numerators and conforming engine output shall cover the same representative period; disclose shutdowns, ramp-up, and abnormal production. | dated records and period reconciliation |
| `dq_technology_geography` | all inputs and processes | Declare engine family, manufacturing technology, site geography, supplier geography where known, and upstream dataset representativeness. | dataset metadata and supplier records |
| `dq_meter_traceability` | metered energy, water, fluids, and emissions | Identify meters and analyzers, calibration status, resolution, missing-data treatment, and allocation to included equipment. | calibration certificates and raw logs |
| `dq_mass_balance` | materials and wastes | Reconcile material inputs, product incorporation, stock change, scrap, waste, and documented losses; investigate material discrepancies. | signed mass-balance worksheet |
| `dq_cutoff_disclosure` | all exchanges | Avoid cut-offs; any unquantified input or output requires identity, reason, expected direction of bias, and improvement plan. | data-gap register |
| `dq_verification` | complete data package | An independent reviewer shall trace sampled values from published normalized exchanges back to raw records and calculations. | verification log and sampled audit trail |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | The product shall be a new complete CPC 43123 compression-ignition piston engine for non-rail vehicle propulsion, with all required qualifiers declared. | `un-cpc-3-0-structure-2025` |
| `validation_reference_mass` | reference flow | The output `reference_engine_output` shall equal 1 kg after normalization and use the same declared dry or wet state as every denominator. | `jrc-2025-ef-method-key-aspects` |
| `validation_inventory_atomicity` | process inventory | Every exchange shall represent one atomic material, chemical, energy, waste, or emission flow; combined utilities, fuels, wastes, or emission groups are nonconforming. | `jrc-2025-ef-method-key-aspects` |
| `validation_boundary_completeness` | system boundary | All producer-controlled and outsourced manufacturing stages shall be included or explicitly disclosed with upstream links and quantified data gaps. | `jrc-2025-ef-method-key-aspects` |
| `validation_test_traceability` | factory acceptance test | Fuel, electricity, emission measurements, sampling plan, retests, and represented production mass shall reconcile by engine serial or lot. | `eu-reg-582-2011-consolidated-2021` |
| `validation_allocation` | shared burdens | Subdivision attempts, chosen physical driver, allocation calculation, and sensitivity to material alternatives shall be documented. | `jrc-2025-ef-method-key-aspects` |
| `validation_no_unverified_ranges` | all exchanges | Site-specific collection remains mandatory unless a reviewed range with compatible boundary, functional unit, product state, and at least two independent original sources is added later. | `jrc-2025-ef-method-key-aspects` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for one declared compression-ignition vehicle-engine family and manufacturing configuration |
| downstream_use | Projection to Tiangong flow, process, and lifecyclemodel records and connection to upstream material and energy datasets |
| allowed_use | Manufacturer-gate comparisons and downstream vehicle models when reference state, engine specification, geography, technology, time, and boundary are compatible |
| excluded_use | Direct representation of stationary, rail, aircraft, marine, spark-ignition, remanufactured, use-phase, maintenance, or end-of-life systems |
| required_metadata | PCR id and version; engine family and model; displacement; rated power and speed; emission stage and market; dry or wet state; included accessories and aftertreatment; site geography; reference period; process ownership; upstream datasets; test sampling; allocation |
| required_quality_disclosure | Primary-data share; meter and analyzer calibration; temporal coverage; data gaps; cut-offs; mass-balance closure; allocation; upstream representativeness; uncertainty and verification status |
| update_trigger | Material change in engine design, mass state, emission stage, manufacturing route, site, supplier mix, energy mix, test practice, allocation, or a data source outside the declared validity period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact CPC 43123 product-category identity and exclusion of rail or tramway propulsion engines |
| `rouhento-2018-diesel-engine-lca` | literature | Rouhento, Manufacturing of a Non-road Diesel Engine from the Life Cycle Perspective, Tampere University of Technology, 2018, https://urn.fi/URN:NBN:fi:tty-201808142130 | Original-text manufacturing-stage decomposition and identification of machining, assembly, washing, painting, drying, testing, fluids, energy, water, and waste exchanges |
| `eu-reg-582-2011-consolidated-2021` | standard | European Commission, Regulation (EU) No 582/2011, consolidated text 1 January 2021, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02011R0582-20210101 | Original-text factory-test exhaust measurement context and pollutant coverage for compression-ignition engines |
| `jrc-2025-ef-method-key-aspects` | official_guidance | European Commission Joint Research Centre, Key aspects of the product and organisation environmental footprint methods, JRC129907, https://publications.jrc.ec.europa.eu/repository/bitstream/JRC129907/JRC129907_01.pdf | Original-text functional-unit dimensions, data-quality and verification expectations, cut-off avoidance, and allocation hierarchy |
