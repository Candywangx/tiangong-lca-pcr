---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.dishwashing-machines-except-household-type
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dishwashing machines, except household type

## 1. Scope and Applicability

This PCR applies to the factory-gate production of complete dishwashing machines whose declared principal intended use is commercial, industrial, or institutional rather than household use. Covered configurations include undercounter, stationary-rack door or hood, pot/pan/utensil, glasswashing, rack-conveyor, and flight-type machines. The foreground boundary begins with purchased materials, components, utilities, and packaging at the manufacturing site and ends with a conforming packed machine at the factory gate.

Household dishwashers, laboratory glassware washers, medical-device washers, bottle or container washing machines, detergents and rinse agents sold separately, spare parts sold separately, installation, distribution beyond the factory gate, operation, maintenance, and end-of-life are excluded. A downstream lifecycle model may add those stages as separately documented datasets. Machine type, sanitation method, heat-recovery or heat-pump configuration, rated throughput, total machine mass, electrical supply, intended-use statement, and factory-gate geography shall be declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.dishwashing-machines-except-household-type |
| classification_refs | CPC 3.0: 43935, exact |
| covered_products | Complete non-household dishwashing machines for commercial, industrial, or institutional warewashing, including stationary-rack and conveyor configurations |
| excluded_products | Household dishwashers; laboratory and medical-device washers; bottle/container washing machinery; separately sold detergents, rinse agents, and parts |
| representative_product | A complete electrically controlled commercial warewashing machine with declared machine type, sanitation method, rated throughput, and factory-gate mass |
| production_route | Sheet-metal fabrication and welding; conditional surface cleaning; purchased-component assembly; conditional refrigerant charging; factory acceptance testing; final packaging |
| market_state | New, conforming, drained after testing, and packed at the factory gate; installed refrigerant and all shipped accessories included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate production of a complete non-household dishwashing machine that performs the declared commercial, industrial, or institutional warewashing function |
| How much | 1 kg of conforming complete machine mass at the factory gate |
| How well | Machine type, sanitation method, rated throughput, load or rack basis, heat-recovery configuration, electrical supply, and applicable conformance claims are declared |
| How long or cycle | Manufacturing result only; declared design life and rated lifetime cycles or operating hours are reported for downstream use-stage modelling but do not change the factory-gate reference amount |
| reference_flow_link | One complete machine equals its measured net factory-gate product mass in kg; multiply this dataset by that mass to represent one machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Dishwashing machines, except household type `d0b59cdb-1ced-4142-ad04-b9d6cbee1411` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and product-family identifier; principal intended use; machine type; stationary-rack or conveyor configuration; sanitation method; rated throughput and its basis; rack or belt dimensions where applicable; electrical supply; integral or external booster-heater boundary; heat-recovery and heat-pump configuration; refrigerant identity and factory charge when applicable; net machine mass; included accessories; manufacturing site and geography; production period; factory-gate packaging state; declared service life or rated lifetime duty |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the complete conforming machine in its declared factory-gate state. Exclude external transport packaging only when that exclusion is consistently applied to the product mass and packaging inventory. |
| `material_mass` | Purchased materials, components, chemicals, refrigerant, packaging, scrap, and wastewater recorded by mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated scales, purchase receipts reconciled to stock change, or engineering BOM masses verified against batch totals; report wet/dry state and concentration where material identity depends on them. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter records; convert kWh to MJ by multiplying by 3.6 and disclose voltage level, grid geography, renewable contract treatment, and allocation of shared loads. |
| `gas_volume` | Industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the gas reference temperature and pressure, purity, delivery form, and whether invoice volume or corrected meter volume is used. |
| `water_mass` | Process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records. If volume is converted to mass, record the measured or supplier-declared density and reference conditions; do not silently assume a density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, discrete components, process chemicals, utilities, refrigerant, and packaging cross the manufacturing-site gate with supplier identity, delivered state, quantity, and upstream dataset reference recorded |
| starting_condition_role | Cradle-to-gate foreground manufacturing starting condition |
| product_classification_scope | Complete dishwashing machines intended principally for non-household commercial, industrial, or institutional use |
| recursive_input_rule | A purchased complete machine in the same product category is recorded as a separate product input with its own upstream dataset and is not decomposed again inside this foreground system |
| upstream_dataset_requirement | Every purchased input shall reference a geographically and technologically representative upstream dataset or be disclosed as a data gap; supplier-specific data are preferred for major materials and components |
| disclosure | Declare manufacturing site, production period, product family, machine configuration, allocation basis, cut-off decisions, purchased-versus-made component boundary, surface-treatment route, refrigerant route, test protocol, packaging state, and excluded lifecycle stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | Foreground production boundary | Include attributable fabrication, welding, on-site surface cleaning when performed, assembly, factory refrigerant charging when performed, acceptance testing, packaging, generated scrap, cleaning wastewater, and purchased electricity through the packed factory gate. |  |
| `sb_upstream_inputs` | Purchased materials, components, utilities, and packaging | Link each purchased input to an upstream supply dataset at the delivered manufacturing-site boundary; do not substitute a generic complete-machine dataset for disclosed component inputs. |  |
| `sb_same_category_recursion` | Purchased complete non-household dishwashing machines | Stop recursive decomposition at the purchased complete-machine boundary and record that machine as a separate same-category technosphere input with its own upstream dataset. |  |
| `sb_conditional_routes` | Surface cleaning and refrigerant charging | Include each conditional process only when performed by or attributed to the reporting site; otherwise mark its atomic rows not applicable and disclose the supplier or product configuration that makes the route absent. | `swedish-procurement-professional-dishwashers` |
| `sb_use_stage` | Operation and downstream lifecycle | Exclude installation, operation, maintenance, distribution beyond the factory gate, and end-of-life from this foreground manufacturing dataset. Report declared water and energy performance fields so a separate use-stage dataset can be constructed without treating specification limits as manufacturing inventory. | `us-epa-energy-star-commercial-dishwashers-v3-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_fabrication` | Metal forming and welding | required | Always for site-attributed formation or joining of the machine frame, tank, panels, or supports | Foreground fabrication | Net kg of conforming factory-gate product |
| `surface_cleaning` | On-site alkaline surface cleaning | conditional | Include only when sodium-hydroxide-based cleaning is performed or attributed at the reporting site | Foreground surface preparation | Net kg of conforming factory-gate product |
| `component_assembly` | Component and subassembly integration | required | Always for final assembly of purchased and fabricated parts | Foreground assembly | Net kg of conforming factory-gate product |
| `refrigerant_charging` | R404A heat-pump charging | conditional | Include only when the shipped model contains an on-site factory charge of R404A; other refrigerants require their own reviewed atomic flow row | Foreground charging | Net kg of conforming factory-gate product |
| `factory_testing` | Factory acceptance and leak/function testing | required | Always for released conforming machines; record the actual test protocol | Foreground quality assurance | Net kg of conforming factory-gate product |
| `final_packaging` | Final packaging and factory-gate release | required | Always for the declared packed factory-gate state | Foreground packaging and reference-product release | Net kg of conforming factory-gate product |

### Process: Metal forming and welding (`metal_fabrication`)

#### Inputs

##### Product flows

###### Flat-rolled stainless steel input (`stainless_steel_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: Measured or BOM-reconciled mass consumed in conforming products plus attributable fabrication loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Cold-rolled carbon-steel sheet input (`carbon_steel_sheet_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Cold-rolled carbon-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured or BOM-reconciled mass consumed in conforming products plus attributable fabrication loss; Tiangong UUID unresolved
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Fabrication electricity (`fabrication_electricity`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered fabrication electricity or causally allocated shared-meter electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_records`
- Sources:

###### Welding oxygen (`industrial_oxygen_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Corrected meter or invoice volume attributable to welding and cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gas_records`
- Sources:

###### Carbon-dioxide shielding gas (`carbon_dioxide_shielding_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Cylinder stock-change or invoice mass attributable to carbon-dioxide shielding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gas_records`
- Sources:

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap leaving the fabrication process, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

### Process: On-site alkaline surface cleaning (`surface_cleaning`)

#### Inputs

##### Product flows

###### Surface-cleaning process water (`surface_process_water`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered water supplied to the attributed surface-cleaning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Sources:

###### Surface-cleaning sodium hydroxide (`surface_sodium_hydroxide`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Measured sodium-hydroxide product mass added; solution concentration and product state declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Surface-cleaning electricity (`surface_electricity`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered cleaning-line electricity or causally allocated shared-meter electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_records`
- Sources:

#### Outputs

##### Waste flows

###### Surface-cleaning wastewater (`surface_cleaning_wastewater`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Measured wastewater transferred to sewer or treatment after surface cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Sources:

### Process: Component and subassembly integration (`component_assembly`)

#### Inputs

##### Product flows

###### Copper tubing (`copper_tubing_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: Purchased and installed tubing mass, reconciled to stock change and scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Polypropylene granulate (`polypropylene_granulate_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Resin mass consumed for product-attributed moulded components, including measured moulding loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Electric motor (`electric_motor_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: BOM-verified mass of purchased motors installed in conforming products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Liquid pump (`liquid_pump_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: BOM-verified mass of purchased liquid pumps installed in conforming products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Electronic control unit (`electronic_control_unit_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Electronic control unit `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- Flow property / unit: Mass / kg
- Amount rule: BOM-verified mass of purchased electronic control units installed in conforming products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Assembly electricity (`assembly_electricity`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered assembly electricity or causally allocated shared-meter electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_records`
- Sources:

### Process: R404A heat-pump charging (`refrigerant_charging`)

#### Inputs

##### Product flows

###### Factory charge of R404A (`r404a_refrigerant_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net refrigerant transferred into conforming products, reconciled to cylinder stock change and recovered refrigerant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_charge_records`
- Sources:

###### Refrigerant-charging electricity (`refrigerant_charging_electricity`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered charging-station electricity or causally allocated shared-meter electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_records`
- Sources:

### Process: Factory acceptance and leak/function testing (`factory_testing`)

#### Inputs

##### Product flows

###### Factory-test process water (`test_process_water`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered water supplied during product-attributed factory testing, including documented refill and flush water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test_records`
- Sources:

###### Factory-test electricity (`test_electricity`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity consumed by the tested machine and attributable test equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test_records`
- Sources:

#### Outputs

##### Waste flows

###### Drained factory-test wastewater (`test_cleaning_wastewater`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Measured test water discharged to sewer or treatment after leak and function testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test_records`
- Sources:

### Process: Final packaging and factory-gate release (`final_packaging`)

#### Inputs

##### Product flows

###### Corrugated-board box (`corrugated_board_box_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass of corrugated-board boxes installed on shipped conforming products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Low-density polyethylene film (`ldpe_film_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass of PE-LD film installed on shipped conforming products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Wooden pallet (`wooden_pallet_input`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Attributable pallet mass installed on shipped products after declared reuse allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Packaging electricity (`packaging_electricity`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered packaging-line electricity or causally allocated shared-meter electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy_records`
- Sources:

#### Outputs

##### Product flows

###### Conforming packed non-household dishwashing machine (`reference_product_output`)

This atomic exchange crosses the foreground process boundary; obtain its attributable quantity from the collection protocol below and normalize it to the reference product mass.

- Selected flow: Dishwashing machines, except household type `d0b59cdb-1ced-4142-ad04-b9d6cbee1411`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of conforming released product; equals 1 kg after normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_product_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Multi-model lines and shared processes | Prefer physical subdivision and process submetering. Assign directly measured material, component, utility, waste, test, and packaging records to the product family that caused them. |  |
| `allocation_shared_loads` | Unavoidable shared electricity, water, labour-cell equipment, and facility records | Use a documented causal driver such as machine-hours, test-hours, material mass processed, or number of equivalent operations. Product mass or unit count may be used only when shown to represent resource causality; disclose the driver and sensitivity. |  |
| `allocation_scrap` | Post-industrial steel scrap | Record scrap at the mass crossing the foreground boundary. Do not subtract an avoided-production credit inside this foreground inventory; any recycling allocation or substitution credit belongs to the declared downstream system model and shall be disclosed separately. |  |
| `allocation_rework` | Reworked and rejected machines | Attribute rework inputs and unrecovered reject losses to the conforming production batch. Exclude only materials demonstrably returned to the same process without crossing the boundary, while preserving mass balance. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `metal_fabrication`, `surface_cleaning`, `component_assembly` | Purchased material, chemical, and component inputs | BOM, purchase receipt, stock ledger, scale record | item identity; grade or concentration; supplier; delivered mass; opening/closing stock; product-family assignment; scrap or loss | Reconcile BOM and purchase/stock records to batch consumption; weigh representative components when supplier mass is absent | kg | Each batch with monthly reconciliation | At least 12 representative months or the full shorter production period | Reporting manufacturing site and attributed suppliers | Sum attributable consumption and divide by conforming product mass | Calibrated scale records, supplier certificates, stock reconciliation, signed BOM revision |
| `cp_process_energy_records` | all foreground processes | Purchased electricity | Submeter, utility meter, equipment log | meter id; opening/closing reading; kWh; process; operating hours; shared-load driver; grid contract | Prefer process submetering; otherwise allocate the smallest shared meter with a causal driver | kWh and MJ | Per batch or shift; monthly reconciliation | At least 12 representative months or the full shorter production period | Reporting manufacturing site | Convert kWh to MJ, sum attributable energy, and divide by conforming product mass | Meter calibration, invoices, allocation worksheet, outage/anomaly log |
| `cp_process_gas_records` | `metal_fabrication` | Welding and cutting gases | Corrected meter, cylinder ledger, invoice | gas identity; purity; cylinder mass or corrected volume; opening/closing stock; temperature/pressure basis; process assignment | Reconcile cylinder or bulk-gas stock change to attributed fabrication operations | kg or m3 | Each cylinder change or batch | Same period as production inventory | Reporting manufacturing site | Sum attributable gas by identity and normalize to conforming product mass | Invoice, cylinder certificate, scale or corrected-meter record |
| `cp_waste_records` | `metal_fabrication` | Post-industrial steel scrap | Scale ticket and waste transfer record | waste identity; alloy segregation; gross/tare/net mass; date; destination; treatment; internal reuse | Weigh each outbound load and subtract only documented internal reuse before boundary crossing | kg | Each shipment | Same period as production inventory | Reporting manufacturing site | Sum net boundary-crossing scrap and normalize to conforming product mass | Calibrated scale ticket, transfer manifest, recycler receipt |
| `cp_water_wastewater_records` | `surface_cleaning` | Process water and cleaning wastewater | Submeter, tank record, treatment transfer record | source; meter reading; mass or volume; density if converted; discharge route; treatment; composition indicators | Meter input and output separately where feasible; reconcile storage change and retained water | kg or m3 | Per batch or daily | Same period as surface-cleaning inventory | Reporting manufacturing site | Convert with recorded density when needed, sum attributable mass, and normalize | Meter calibration, laboratory or treatment record, transfer manifest |
| `cp_refrigerant_charge_records` | `refrigerant_charging` | R404A factory charge | Charging-station scale and cylinder ledger | refrigerant identity; cylinder opening/closing mass; charge setpoint; recovered mass; rejects; serial or batch link | Weigh cylinder before and after charging and reconcile recovery and rejected units | kg | Each charge or batch | Same period as applicable model production | Reporting manufacturing site | Net charged mass in conforming products divided by conforming product mass | Calibrated charging scale, refrigerant certificate, leak-test and recovery log |
| `cp_factory_test_records` | `factory_testing` | Test water, electricity, and discharged wastewater | Product test log and dedicated meter | serial/batch; test protocol; water input; electricity; wastewater output; repeats; failures; retained water | Record each acceptance test and all repeats; include attributable test-equipment energy | kg, kWh, MJ | Each tested machine | Same period as production inventory | Reporting manufacturing site | Sum all tests for conforming batch, including failed/repeated tests, and normalize | Test-system calibration, signed release record, meter records |
| `cp_packaging_records` | `final_packaging` | Corrugated box, PE-LD film, and wooden pallet | Packaging BOM, scale record, purchase/stock ledger | packaging identity; mass; units used; reuse count; damage loss; product-family assignment | Weigh each packaging component or verify supplier unit mass and reconcile stock | kg | Each packaging configuration with batch reconciliation | Same period as shipped production | Reporting manufacturing site | Sum installed packaging mass after declared pallet reuse allocation and normalize | Scale record, supplier specification, packaging BOM, stock reconciliation |
| `cp_finished_product_records` | `final_packaging` | Reference product output | Calibrated finished-goods scale and release record | model; serial/batch; net machine mass; included accessories; residual test water state; packaging state; conformity status | Weigh released conforming machines in the declared reference state | kg | Each model/batch; representative per-unit weighing only when variability is controlled | Same period as all foreground inputs | Reporting manufacturing site | Sum conforming net machine mass; use as denominator for all normalized exchanges | Scale calibration, release certificate, variance record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory exchange | normalized amount = attributable exchange quantity / conforming net product mass | Attributable exchange quantity; conforming product mass from `cp_finished_product_records` | Exchange per 1 kg reference product |  |
| `calc_electricity_conversion` | Electricity rows | electricity_MJ = metered_kWh × 3.6; do not round before batch aggregation | Metered kWh | MJ of purchased electricity |  |
| `calc_water_mass` | Water and wastewater records originally measured by volume | mass = measured volume × recorded density at stated reference conditions | Volume; density; temperature/pressure where relevant | kg water or wastewater |  |
| `calc_material_balance` | Metal fabrication and assembly | received attributable mass = installed product mass + boundary-crossing scrap + other specifically identified losses ± inventory change, within documented measurement uncertainty | BOM/stock mass; finished mass; scrap; identified losses; stock change | Reconciled material consumption |  |
| `calc_refrigerant_charge` | R404A charging | net charge = cylinder mass decrease − recovered mass − documented non-product transfers; reconcile to serial/batch charge records | Cylinder scale, recovery log, charge log | kg R404A installed in conforming products |  |
| `calc_packaging_reuse` | Reusable wooden pallets | attributable pallet mass = pallet mass / verified expected uses; report the reuse assumption and sensitivity, or assign full mass when reuse is unverified | Pallet mass; verified reuse count | kg attributable wooden pallet |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product family and reference flow | Preserve CPC 43935 non-household intended-use boundary and declare the exact model/configuration represented. | Declaration of conformity or equivalent intended-use statement, product specification, model list |
| `dq_completeness` | Foreground inventory | Cover at least 95% of measured foreground mass and energy by identified atomic rows; disclose the identity and estimated magnitude of every omitted exchange and do not use an umbrella flow to reach completeness. | Mass/energy reconciliation and data-gap register |
| `dq_temporal` | Production records | Use at least 12 representative months where available; for shorter production periods, cover the full period and explain seasonality, ramp-up, and abnormal operations. | Dated records and representativeness assessment |
| `dq_measurement` | Metered and weighed quantities | Use in-calibration instruments or document correction, uncertainty, and fallback reconciliation. | Calibration certificates, invoices, stock and meter reconciliation |
| `dq_supplier_data` | Major materials and components | Prefer supplier- and geography-specific upstream datasets; document technology and recycled-content assumptions for stainless steel, carbon steel, copper, polypropylene, motors, pumps, and controls. | Supplier declarations, dataset metadata, procurement records |
| `dq_conditional_routes` | Surface cleaning and R404A charging | Demonstrate inclusion with site records or exclusion with product/process configuration evidence; do not report zero solely because a record is missing. | Process map, chemical ledger, refrigerant charge log, supplier documentation |
| `dq_use_metadata` | Downstream use-stage readiness | Report machine type, sanitation method, rated throughput, rack/belt basis, energy and water performance fields, and test-method identity without treating conformance limits as measured manufacturing amounts. | Product specification and applicable performance test report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_category_identity` | Product identity | Fail if the represented product is household-type, a laboratory or medical-device washer, bottle/container washing machinery, a detergent, or a separately sold part; verify intended non-household use and the complete-machine factory-gate state. | `un-cpc-3-0-structure-2025`, `jrc-eu-professional-dishwasher-boundary-2015` |
| `val_reference_mass` | Functional unit and reference flow | Require the exact reference-product UUID, mass property UUID, mass unit-group UUID, kg reference unit, measured conforming product mass, and all required qualifiers. |  |
| `val_inventory_atomicity` | Process inventory | Fail any selected flow that combines materials, utilities, fuels, packaging, wastes, or emissions; every reported exchange must retain one row id, one direction, and one flow type. |  |
| `val_material_balance` | Metal fabrication and assembly | Require a documented mass reconciliation for major purchased materials, installed mass, post-industrial steel scrap, other identified losses, and stock change within stated uncertainty. |  |
| `val_energy_and_water` | Electricity, water, and wastewater | Require meter period, allocation basis, conversion records, and matching production denominator; reject specification limits as substitutes for foreground manufacturing records. | `us-epa-energy-star-commercial-dishwashers-v3-2020` |
| `val_conditional_processes` | Surface cleaning and R404A charging | Require site/product evidence for inclusion or exclusion. If included, require all atomic input/output rows and their collection protocols; if a different refrigerant is installed, this R404A row is not applicable and a separately audited refrigerant row is required. | `swedish-procurement-professional-dishwashers` |
| `val_upstream_links` | Purchased inputs | Require an upstream dataset or explicit data gap for each purchased material, component, utility, refrigerant, and packaging flow, with geography and technology disclosed. |  |
| `val_allocation` | Shared processes and recycling | Require causal allocation evidence and a sensitivity check for material shared loads; prohibit hidden avoided-production credit for scrap inside the foreground inventory. |  |
| `val_bilingual_alignment` | English and Chinese PCR renderings | Require identical ordered process ids, row ids, UUIDs, controlled values, source ids, and system-boundary/allocation/validation rule ids in both renderings. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for one declared non-household dishwashing-machine model or homogeneous product family |
| downstream_use | May be published as a secondary_dataset or background_dataset for machinery supply in product LCAs and lifecycle models when configuration, geography, time, and boundary are representative |
| allowed_use | Cradle-to-gate machinery production; supplier comparison with matched reference state and allocation; downstream models that add installation, distribution, operation, maintenance, and end-of-life separately |
| excluded_use | Household dishwasher production; detergent production; direct representation of operation or cleaning service; use of one product-family dataset for materially different machine types without representativeness review |
| required_metadata | PCR id and version; model/product family; intended use; machine and sanitation type; rated throughput basis; reference-product UUID; mass; site and geography; period; technology; surface-cleaning route; heat-recovery/heat-pump and refrigerant configuration; packaging state; allocation; upstream dataset versions; cut-offs; data gaps |
| required_quality_disclosure | Foreground coverage; measurement and allocation methods; calibration status; temporal coverage; supplier-data share; mass balance; conditional-route evidence; uncertainty; unresolved carbon-steel flow UUID; missing empirical range evidence |
| update_trigger | Material change in model BOM, machine type, sanitation or heating technology, refrigerant, manufacturing site, energy supply, surface treatment, test protocol, packaging, allocation, supplier datasets, or a change exceeding the declared uncertainty threshold |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official CPC 43935 product identity and exclusion of household type |
| `jrc-eu-professional-dishwasher-boundary-2015` | official_guidance | European Commission Joint Research Centre, Revision of European Ecolabel Criteria for the six detergent product groups, Draft Technical Report, 2015, https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/contentype/product_group_documents/1581681262/ELS-DP_D2_0915.pdf (retrieved 2026-09-06) | Professional-versus-household intended-use boundary and commercial/industrial function |
| `us-epa-energy-star-commercial-dishwashers-v3-2020` | standard | U.S. EPA ENERGY STAR Program Requirements Product Specification for Commercial Dishwashers, Eligibility Criteria Version 3.0, 2020, https://www.energystar.gov/sites/default/files/Commercial%20Dishwashers%20Final%20Version%203.0%20Specification_0.pdf (retrieved 2026-09-06) | Machine-type and sanitation taxonomy; throughput, water, and energy metadata and validation |
| `swedish-procurement-professional-dishwashers` | official_guidance | Swedish National Agency for Public Procurement, Sustainability criteria for Professional dishwashers, https://www.upphandlingsmyndigheten.se/en/criteria/building-and-property/professional-kitchen/professional-dishwashers/ (retrieved 2026-09-06) | Covered professional machine types, use-stage energy/water relevance, and conditional heat-pump configuration |
