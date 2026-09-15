---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-internal-combustion-piston-engines-of-a-cylinder-capacity-381d092a
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Spark-ignition reciprocating internal combustion piston engines, of a cylinder capacity exceeding 1000 cc

## 1. Scope and Applicability

This PCR governs cradle-to-factory-gate data production for one complete, newly manufactured spark-ignition reciprocating internal combustion piston engine for a motor vehicle when total swept cylinder capacity exceeds 1000 cc. The foreground package covers material and component supply, component casting or forming where performed for the reported engine, machining, aqueous cleaning, final assembly, production testing, and transfer of the accepted engine to the manufacturer's factory gate. Supplier processes may be linked upstream rather than repeated in the foreground, but their material and component burdens remain inside the product system.

The PCR excludes aircraft engines, rotary engines, engines of 1000 cc or less, compression-ignition engines, incomplete engine parts sold separately, remanufactured engines, installation in a vehicle, vehicle operation, maintenance, replacement, and end-of-life. Packaging and outbound distribution are excluded unless the declared product state explicitly includes them. A concrete dataset shall state which castings, machining, cleaning, assembly and hot-test operations are performed on site and which are represented by supplier datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-internal-combustion-piston-engines-of-a-cylinder-capacity-381d092a |
| classification_refs | CPC 3.0: 43122, exact classification context |
| covered_products | Complete new spark-ignition reciprocating piston engines for motor vehicles with total cylinder capacity greater than 1000 cc |
| excluded_products | Engines at or below 1000 cc; compression-ignition, rotary or aircraft engines; incomplete parts; remanufactured engines; complete vehicles |
| representative_product | An assembled and production-accepted gasoline-compatible reciprocating piston engine above 1000 cc at the engine manufacturer's factory gate |
| production_route | Supplied materials and components; casting/forming where applicable; machining; cleaning; assembly; cold test and, where applied, hot test |
| market_state | New complete engine, dry or filled state explicitly declared, accepted for installation in a motor vehicle |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete, production-accepted spark-ignition reciprocating piston engine above 1000 cc for installation in a motor vehicle |
| How much | 1 kg net engine mass at the factory gate; the number of complete engines represented shall also be reported |
| How well | Conforming to the declared engine family or model specification and the manufacturer's production acceptance criteria |
| How long or cycle | One manufacturing cycle through factory-gate acceptance; service life and vehicle use are outside this PCR |
| reference_flow_link | The reference flow is the measured net mass of accepted complete engines; one engine count is converted to kg using the same batch's measured net engine mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Spark-ignition reciprocating internal combustion piston engines, of a cylinder capacity exceeding 1000 cc `573e22c4-3de9-4b1e-a339-0e5a453d1457` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | engine family and model; total cylinder capacity in cc; spark-ignition and reciprocating configuration; cylinder count; aspiration; rated power; compatible test fuel; dry or filled mass basis; included accessories and emission-control components; manufacturing geography and reference year; supplier-versus-site process boundary; cold-test and hot-test status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | Reference product and mass-normalized rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the net mass of accepted complete engines at the declared dry or filled state. Exclude shipping packaging and transport fixtures unless they are explicitly part of the sold product. |
| `measurement_count_to_mass` | Engine count records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert engine count to mass with measured net batch mass divided by accepted engine count; retain both raw values and do not use a generic nominal engine mass. |
| `measurement_energy` | Electricity rows | Net calorific value / energy | MJ | Preserve metered energy and convert kWh to MJ using 1 kWh = 3.6 MJ. Do not convert demand, capacity or rated power into energy. |
| `measurement_gas_volume` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature, pressure and whether volume is normal, standard or actual. Use supplier or measured factors for any mass or energy conversion. |
| `measurement_bom_mass` | Material inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile net material input, incorporated material and separately measured scrap on a consistent wet/dry and recycled-content basis; do not infer material mass from cost. |

## 5. System Boundary

The product system is cradle-to-factory-gate. Primary and secondary material production and production of purchased engine components are represented through qualified upstream datasets. The foreground records site operations for the reported engine family, including applicable casting or forming, machining, cleaning, assembly and production testing. Capital equipment, engine installation, vehicle use, maintenance and end-of-life are outside the default boundary.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | Complete engine product system | Include raw-material recovery, material processing, engine-component production, engine assembly and the treatment of wastes generated before factory-gate acceptance. Link qualified upstream datasets for purchased materials and components. | `argonne-anl-22-27-vehicle-production`; `mrozik-2020-si-engine-materials` |
| `boundary_site_route` | Foreground site operations | Include only casting, heat treatment, machining and aqueous cleaning operations actually performed for the declared engine; disclose supplier datasets for operations performed elsewhere. | `usphs-1970-automotive-solid-wastes` |
| `boundary_production_test` | Cold and hot production tests | Include all electricity, test fuel, rejected engine disposition and direct elementary emissions from production testing. Gasoline and hot-test combustion emissions apply only when a fuelled hot test occurs. | `argonne-anl-22-27-vehicle-production` |
| `boundary_no_double_count` | Linked suppliers and site operations | Do not count the same component-making, fuel-combustion or waste-treatment burden in both a supplier dataset and the foreground stage. |  |
| `boundary_exclusions` | Default PCR boundary | Exclude factory capital goods, worker commuting, engine installation, vehicle assembly, distribution, use, maintenance and end-of-life unless the study goal explicitly expands the boundary and reports those results separately. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified primary or secondary materials and purchased engine components at the point they enter the product system, with supplier production represented by upstream datasets |
| starting_condition_role | Cradle-to-gate product-system input and foreground/supplier boundary declaration |
| product_classification_scope | Complete CPC 43122 engine only; same-category complete-engine inputs are not silently embedded |
| recursive_input_rule | If a complete CPC 43122 engine enters as an input, record it as a separate product flow and stop recursive expansion at its qualified upstream dataset; do not relabel it as parts or raw material |
| upstream_dataset_requirement | Use geographically and technologically representative datasets for each purchased material and component; disclose recycled content, allocation method, production geography, reference year and data gaps |
| disclosure | Declare engine model/family, mass state, cylinder capacity, included accessories, supplier-versus-site operations, casting and cleaning routes, test route, rejected-engine treatment and all exclusions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture` | Material supply and engine-component manufacture | required | Required for every dataset; supplier operations may be linked upstream, while site operations are collected directly | Material composition, casting/forming, machining and cleaning before final assembly | Inputs and outputs per kg accepted complete engine |
| `assembly_and_test` | Final engine assembly and production test | required | Required for every dataset; fuelled hot-test rows apply only when a hot test is performed | Assembly, acceptance testing and release of the complete reference product | Inputs and outputs per kg accepted complete engine |

### Process: Material supply and engine-component manufacture (`component_manufacture`)

#### Inputs

##### Product flows

###### Aluminium-alloy material (`cm_aluminium_alloy`)

Record the mass of aluminium alloy incorporated in cast or wrought engine components, including measured process losses when those component-making operations are inside the product system.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: calculated aluminium-alloy input from the product-specific bill of materials plus separately measured aluminium process loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted complete engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_material_ledger`
- Sources: `argonne-anl-22-27-vehicle-production`; `mrozik-2020-si-engine-materials`

###### Alloy-steel bars and rods (`cm_alloy_steel`)

Record the mass of not-further-worked alloy-steel bars or rods entering component manufacture; grade and delivered form remain product-specific qualifiers.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: calculated alloy-steel bar and rod input from purchase records and the product-specific bill of materials
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted complete engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_material_ledger`
- Sources: `argonne-anl-22-27-vehicle-production`; `mrozik-2020-si-engine-materials`

###### Grey cast iron (`cm_cast_iron`)

Record grey cast iron entering blocks, heads, camshafts or other engine components as one mass flow. The Tiangong identity remains unresolved because ranked candidates were not publicly readable at state 100.

- Selected flow: Grey cast iron
- Flow property / unit: Mass / kg
- Amount rule: calculated grey-cast-iron input from purchase records and the product-specific bill of materials
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted complete engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_material_ledger`
- Sources: `mrozik-2020-si-engine-materials`; `usphs-1970-automotive-solid-wastes`

###### Nitrile-rubber material (`cm_nitrile_rubber`)

Record nitrile rubber only when it is present in the declared engine's seals, hoses or moulded components; other elastomers require their own atomic rows in the completed dataset.

- Selected flow: Nitrile Rubber `ad250520-feb6-401a-9159-1f25c0fd7980`
- Flow property / unit: Mass / kg
- Amount rule: calculated nitrile-rubber input from the product-specific bill of materials
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted complete engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_material_ledger`
- Sources: `argonne-anl-22-27-vehicle-production`

###### Cutting fluid (`cm_cutting_fluid`)

Record fresh cutting fluid make-up crossing into engine-component machining; recovered recirculating stock is not counted again on every circulation.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh cutting-fluid additions minus returned unopened material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_consumables`
- Sources: `usphs-1970-automotive-solid-wastes`

###### Component-manufacturing electricity (`cm_electricity`)

Record purchased and on-site-generated electricity consumed by applicable casting, machining, cleaning and component-handling operations, net of exported electricity.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated causally to the declared engine family and converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_energy`
- Sources: `argonne-anl-22-27-vehicle-production`

###### Gaseous natural gas (`cm_natural_gas`)

Record gaseous natural gas when it crosses the boundary for on-site metal melting, heat treatment, space/process heating or other engine-component operations.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume at declared reference conditions allocated to the applicable engine operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_fuel`
- Sources: `usphs-1970-automotive-solid-wastes`

###### Process water (`cm_process_water`)

Record process water supplied to machining-fluid make-up, part washing and other engine-component operations; cooling water is a distinct flow and shall not be merged into this row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered process-water input allocated to the declared component operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `usphs-1970-automotive-solid-wastes`

###### Sodium hydroxide (`cm_sodium_hydroxide`)

Record sodium hydroxide only when an alkaline aqueous cleaning bath or make-up solution is used for engine components; disclose supplied concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: mass of pure sodium hydroxide calculated from purchased solution mass and documented concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `usphs-1970-automotive-solid-wastes`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater from component cleaning (`cm_cleaning_wastewater`)

Record aqueous wastewater leaving engine-part cleaning, before or after on-site treatment as declared. Retained bath, hauled waste liquid and sewer discharge are not merged without a mass-balance conversion.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured cleaning wastewater transferred to the declared treatment or discharge boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_waste`
- Sources: `usphs-1970-automotive-solid-wastes`

###### Spent foundry moulding sand (`cm_spent_foundry_sand`)

Record spent foundry moulding sand only when sand casting of engine components is inside the declared boundary. Keep it separate from blasting abrasive and furnace slag.

- Selected flow: Spent foundry moulding sand
- Flow property / unit: Mass / kg
- Amount rule: measured spent moulding sand transferred off site or to on-site recovery, net of internally recirculated sand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_waste`
- Sources: `usphs-1970-automotive-solid-wastes`

##### Elementary flows

###### Fossil carbon dioxide from component manufacture (`cm_fossil_co2`)

Record direct fossil carbon dioxide released by on-site combustion of fossil natural gas in component operations. Upstream electricity emissions remain in the electricity dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or fuel-carbon-balance calculation for fossil natural gas consumed by component operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_direct_emissions`
- Sources:

### Process: Final engine assembly and production test (`assembly_and_test`)

#### Inputs

##### Product flows

###### Assembly-and-test electricity (`at_electricity`)

Record electricity used for final assembly tools, handling, leak checks, cold tests and production-test equipment, separately from component-manufacturing electricity where meters permit.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered assembly-and-test electricity allocated causally to accepted and rejected engines of the declared family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `argonne-anl-22-27-vehicle-production`

###### Gasoline for fuelled hot testing (`at_gasoline`)

Record finished gasoline only when the production route includes a fuelled hot test. Fuel returned unchanged to storage is excluded from net consumption; grade and fossil/biogenic content are disclosed.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass / kg
- Amount rule: measured gasoline issued to hot tests minus measured recoverable returned fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_test_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete engine (`at_reference_engine`)

Record only complete engines that pass the declared production acceptance gate. Rejected engines and rework-in-process do not enter the reference-product quantity until accepted.

- Selected flow: Spark-ignition reciprocating internal combustion piston engines, of a cylinder capacity exceeding 1000 cc `573e22c4-3de9-4b1e-a339-0e5a453d1457`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted complete engines at the declared dry or filled state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted complete engine reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from hot testing (`at_fossil_co2`)

Record direct fossil carbon dioxide emitted during fuelled engine hot tests. This row is not applicable for cold-test-only production and excludes upstream gasoline production emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: direct measurement or carbon-balance calculation from the fossil fraction of net gasoline consumed in hot tests
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted complete engine from the same production period
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hot_test_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Multi-stage or multi-product plants | Subdivide and meter component manufacture, assembly and testing before allocation whenever technically feasible. |  |
| `allocation_causal_driver` | Shared electricity, fuel, water and consumables | Allocate shared quantities using a documented causal driver such as machine-hours, test-minutes, metered cell consumption or processed mass; use engine count only when resource use per engine is demonstrably uniform. |  |
| `allocation_scrap` | Recyclable metal and other recovered material | Record each recovered material as its own physical output and disclose the recycling allocation convention. Do not subtract scrap revenue or an avoided-burden credit from foreground consumption without a declared study method. | `usphs-1970-automotive-solid-wastes` |
| `allocation_rework_rejects` | Rework and rejected engines | Assign rework inputs and treatment burdens to the production period that generated them. Include the mass of accepted engines only in the reference-product denominator. |  |
| `allocation_supplier_boundary` | Purchased components | Do not allocate or repeat burdens already contained in a linked supplier dataset; disclose any truncation or substitution used for missing supplier data. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_material_ledger` | `component_manufacture` | Each named material input | Product BOM, purchase and scrap records | material grade; supplied mass; incorporated mass; scrap mass; recycled content; component supplier; engine family; accepted engine mass | Reconcile product BOM with weighed receipts, supplier declarations and scrap ledgers | kg | Per engineering revision and monthly reconciliation | Representative production period, normally at least 12 months | All reporting sites and material suppliers in scope | Sum each chemically or physically distinct material, include measured process loss, then divide by accepted engine mass | Approved BOM revision; weighbridge or invoice records; supplier declarations; reconciliation sign-off |
| `cp_component_consumables` | `component_manufacture` | Cutting fluid | Purchase, stock and issue records | opening stock; purchases; additions; returns; closing stock; concentration; production line | Tank or store mass balance, excluding internal recirculation | kg | Monthly | Same period as reference output | All machining cells in scope | Net fresh make-up divided by accepted engine mass | Calibrated scales or supplier invoices; tank reconciliation |
| `cp_component_energy` | `component_manufacture` | Electricity | Meter readings and production logs | opening and closing meter; submeter values; exported electricity; machine-hours; accepted and rejected engine mass | Calibrated meter or reconciled utility invoice with causal allocation | kWh and MJ | Continuous or monthly | Same period as reference output | All component operations in scope | Net electricity times 3.6, divided by accepted engine mass | Meter calibration; invoice reconciliation; allocation worksheet |
| `cp_component_fuel` | `component_manufacture` | Gaseous natural gas | Meter and supplier records | gas volume; temperature; pressure; reference condition; operation; engine family; accepted engine mass | Calibrated meter reconciled to supplier statement | m3 | Continuous or monthly | Same period as reference output | All combustion units serving component operations | Net volume at declared conditions divided by accepted engine mass | Meter calibration; supplier bill; allocation worksheet |
| `cp_cleaning_records` | `component_manufacture` | Process water and sodium hydroxide | Meter, batch sheet and chemical issue records | water mass or volume; solution mass; NaOH concentration; bath additions; bath returns; engine family; accepted engine mass | Meter water and calculate pure NaOH from documented solution concentration | kg | Per batch and monthly | Same period as reference output | Each applicable cleaning line | Sum net water and pure NaOH separately, then divide by accepted engine mass | Meter calibration; batch sheets; chemical certificate and concentration calculation |
| `cp_component_waste` | `component_manufacture` | Each named waste output | Waste transfer and internal recovery records | waste identity; wet/dry basis; mass; destination; hazardous status; internal recovery; engine family | Weigh each waste stream at the transfer boundary and reconcile internal recirculation | kg | Per shipment and monthly | Same period as reference output | All component operations in scope | Net external transfer of each waste divided by accepted engine mass | Weighbridge tickets; manifests; treatment receipts; moisture statement |
| `cp_component_direct_emissions` | `component_manufacture` | Fossil carbon dioxide | Stack measurement or fuel carbon-balance record | fuel quantity; carbon content; fossil fraction; oxidation factor; measured CO2; operating period | Use direct calibrated measurement when available, otherwise documented carbon balance | kg | Per campaign or monthly calculation | Same period as reference output | All on-site fossil combustion serving component operations | Fossil CO2 divided by accepted engine mass | Calibration and laboratory certificates or auditable carbon-balance worksheet |
| `cp_assembly_energy` | `assembly_and_test` | Electricity | Assembly/test submeters and production logs | meter readings; test minutes; line hours; accepted and rejected engine mass | Calibrated submeter or utility reconciliation with causal allocation | kWh and MJ | Continuous or monthly | Same period as reference output | Assembly and production-test cells | Net electricity times 3.6, divided by accepted engine mass | Meter calibration; production and allocation records |
| `cp_hot_test_fuel` | `assembly_and_test` | Gasoline | Fuel issue, return and hot-test records | issued mass; returned mass; grade; fossil fraction; engine family; test count; accepted and rejected engine mass | Weighed tank or calibrated fuel meter, reconciled to stock | kg | Per test or shift | Same period as reference output | All fuelled production-test stands | Net issued minus returned gasoline, divided by accepted engine mass | Meter calibration; stock reconciliation; test log |
| `cp_hot_test_emissions` | `assembly_and_test` | Fossil carbon dioxide | Exhaust measurement or fuel carbon-balance record | measured CO2; fuel carbon content; fossil fraction; net fuel; oxidation factor; test count | Direct exhaust measurement or documented carbon balance | kg | Per representative test campaign or monthly | Same period as reference output | All fuelled production-test stands | Fossil CO2 divided by accepted engine mass; zero only when no fuelled test occurs | Analyzer calibration and test reports or auditable carbon-balance worksheet |
| `cp_reference_product` | `assembly_and_test` | Accepted complete engine | Final inspection, scale and production records | engine model; serial or batch; cylinder capacity; dry/filled state; net mass; accepted count; rejected count; included accessories | Calibrated scale linked to final acceptance status | kg and item | Each batch or continuous | Same period as all foreground inputs | All final engine lines in scope | Sum accepted net mass; retain count and rejected mass separately | Scale calibration; acceptance log; configuration record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_intensity` | Each BOM material row | (incorporated material mass + process loss inside the boundary) / accepted complete-engine mass | BOM, purchases, supplier declarations, material-specific scrap, accepted engine mass | kg material per kg accepted engine | `argonne-anl-22-27-vehicle-production`; `mrozik-2020-si-engine-materials` |
| `calc_energy_intensity` | Electricity rows | (metered imports + on-site generation consumed - exports) × 3.6 / accepted complete-engine mass | kWh meter records, allocation driver, accepted engine mass | MJ electricity per kg accepted engine |  |
| `calc_solution_active_mass` | Sodium hydroxide | supplied solution mass × measured or certified NaOH mass fraction / accepted complete-engine mass | solution mass, concentration, accepted engine mass | kg NaOH per kg accepted engine |  |
| `calc_waste_intensity` | Each waste row | externally transferred waste mass, excluding verified internal recirculation, / accepted complete-engine mass | transfer weights, recovery records, accepted engine mass | kg waste per kg accepted engine | `usphs-1970-automotive-solid-wastes` |
| `calc_fossil_co2` | Direct fossil carbon dioxide | Use calibrated direct measurement, or net fuel × carbon mass fraction × fossil fraction × oxidation factor × 44/12; do not add upstream fuel emissions | fuel and carbon records or direct measurement, accepted engine mass | kg fossil CO2 per kg accepted engine |  |
| `calc_reference_flow` | Reference product | accepted net engine mass / accepted net engine mass | accepted engine mass and count | 1 kg reference product with associated engine count |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Demonstrate spark ignition, reciprocating configuration, motor-vehicle application and total cylinder capacity above 1000 cc for every included engine family. | Engineering specification, configuration record and final acceptance log |
| `dq_bom_completeness` | Material and component supply | Represent every physically or chemically distinct material or purchased component contributing at least 1% of net engine mass, plus every hazardous or high-impact material regardless of share, as its own atomic flow or qualified supplier dataset. Reconcile represented mass to net engine mass and explain the residual. | Approved BOM, supplier declarations and mass-reconciliation worksheet |
| `dq_temporal` | All foreground rows | Use one consistent representative production period, normally at least 12 consecutive months; disclose start/end dates, shutdowns, model changes and abnormal campaigns. | Dated meters, invoices, production logs and change-control records |
| `dq_geography_technology` | Upstream and foreground data | Match production geography, electricity supply, material route, recycled content, casting technology, cleaning chemistry and test route to the declared engine. | Dataset metadata, supplier declarations and route map |
| `dq_meter_reconciliation` | Energy, water, fuel and waste | Reconcile submeters to facility totals and document allocation drivers, calibration status, missing intervals and estimation. | Calibration certificates and signed reconciliation worksheet |
| `dq_no_umbrella_flows` | Completed inventory | Add route-specific materials, fuels, chemicals, wastes and emissions as separate atomic rows; do not replace them with combined utility, material, waste or emission categories. | Inventory review against purchase, meter, BOM and waste ledgers |
| `dq_uncertainty` | Calculated and allocated rows | Disclose measurement uncertainty, allocation shares, missing supplier data and all substitutions. | Calculation workbook, uncertainty record and data-gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Product identity and reference flow | Reject a dataset unless the reference product is a complete CPC 43122 engine above 1000 cc and reference mass, engine count, dry/filled state and included accessories are declared. | `un-cpc-3-0-structure-2025` |
| `validation_boundary` | System boundary | Confirm that material/component supply, applicable component operations, assembly and production testing are included once, and that supplier-versus-site responsibilities and exclusions are disclosed. | `argonne-anl-22-27-vehicle-production`; `usphs-1970-automotive-solid-wastes` |
| `validation_inventory_atomicity` | Process inventory | Confirm that each row is one product, waste or elementary exchange with one applicable property and unit; reject combined materials, utilities, fuels, wastes or emissions. |  |
| `validation_bom_balance` | Material inputs | Reconcile incorporated material plus separately measured losses to accepted engine mass; investigate and disclose any unexplained residual exceeding the dataset's stated uncertainty. | `mrozik-2020-si-engine-materials` |
| `validation_energy_units` | Electricity and gaseous fuel | Verify kWh-to-MJ conversion, gas reference conditions and the absence of power-to-energy substitution. |  |
| `validation_route_conditions` | Conditional operations and rows | Mark natural gas, sodium hydroxide, spent foundry sand, gasoline and direct combustion emissions not applicable only with route evidence that the corresponding operation did not occur. |  |
| `validation_combustion_double_count` | Direct fossil CO2 | Confirm direct site and hot-test fossil CO2 excludes upstream electricity and fuel-supply emissions and is linked to the same foreground fuel record. |  |
| `validation_data_quality` | All rows | Confirm temporal alignment, meter reconciliation, supplier representativeness, calibration evidence and explicit data-gap disclosure. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-factory-gate secondary dataset or background dataset for one complete new CPC 43122 engine |
| downstream_use | Vehicle production LCA, powertrain comparison, engine-component supply modelling and lifecyclemodel assembly when reference-product qualifiers match |
| allowed_use | Use after matching engine capacity, configuration, mass state, included accessories, geography, technology, production year and test route |
| excluded_use | Aircraft or rotary engines; engines at or below 1000 cc; compression-ignition engines; remanufactured engines; parts-only products; use-phase fuel consumption or exhaust modelling |
| required_metadata | PCR id and version; engine family/model; cylinder capacity; mass and count; dry/filled state; included accessories; geography; reference period; supplier-versus-site boundary; material routes and recycled content; casting, cleaning and test routes; allocation and recycling methods |
| required_quality_disclosure | Foreground coverage; BOM mass closure; meter and scale calibration; temporal coverage; supplier data quality; allocation drivers; UUID gaps; range-evidence gaps; uncertainty and substitutions |
| update_trigger | Engineering change affecting mass or materials; new engine family; capacity or fuel-compatibility change; supplier or plant change; casting/cleaning/test-route change; electricity or fuel change; allocation-method change; data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 43122 identity and classification path |
| `argonne-anl-22-27-vehicle-production` | Official guidance (`official_guidance`) | Kelly et al., Cradle-to-Grave Lifecycle Analysis of U.S. Light-Duty Vehicle-Fuel Pathways, ANL-22/27, Argonne National Laboratory, June 2022, https://www.osti.gov/biblio/1875764 | Cradle-to-gate vehicle-production stages, major material categories, component manufacture and assembly system boundary |
| `mrozik-2020-si-engine-materials` | Literature (`literature`) | M. Mrozik, Ecological comparative assessment of selected materials used for the construction of spark ignition engines, Combustion Engines 183(4), 2020, https://doi.org/10.19206/CE-2020-402 | Product-specific SI-engine material composition, BOM collection and material sensitivity for 1396-1796 cm3 engines |
| `usphs-1970-automotive-solid-wastes` | Official guidance (`official_guidance`) | Ralph Stone and Company, Inc., Solid Wastes in the Automotive Industry, SW-20C, U.S. Public Health Service, 1970, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101VAUL.TXT | Engine casting, finish machining and assembly sequence; separate foundry-sand and metal-machining waste identification |
| `prc-2018-engine-terminology` | Official guidance (`official_guidance`) | State Council of the People's Republic of China, List 2 of products subject to additional tariffs on U.S. goods, 2018, https://www.gov.cn/xinwen/2018-08/08/5312624/files/a2e1f243401141ecabbe93fa983a6937.pdf | Professional Chinese terminology for 点燃往复式活塞内燃发动机 and 气缸容量（排气量）超过1000毫升 |
