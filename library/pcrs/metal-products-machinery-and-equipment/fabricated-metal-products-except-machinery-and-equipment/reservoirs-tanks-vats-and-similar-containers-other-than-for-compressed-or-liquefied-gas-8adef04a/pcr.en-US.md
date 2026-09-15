---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.reservoirs-tanks-vats-and-similar-containers-other-than-for-compressed-or-liquefied-gas-8adef04a
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Reservoirs, tanks, vats and similar containers (other than for compressed or liquefied gas), of iron, steel or aluminium, of a capacity exceeding 300 litres, not fitted with mechanical or thermal equipment

## 1. Scope and Applicability

This PCR covers the factory-gate production of finished passive reservoirs, tanks, vats, and similar containers made of iron, steel, or aluminium, with a capacity greater than 300 litres, that are not designed for compressed or liquefied gas and are not fitted with mechanical or thermal equipment. It covers shop fabrication from purchased metal products through cutting, forming, joining, conditional surface finishing, inspection, and release for dispatch.

The PCR excludes containers of 300 litres or less; cylinders and other containers for compressed or liquefied gas; boilers, heat exchangers, agitated or mechanically equipped vessels; pumps, valves, external piping, foundations, site erection, installation, use, maintenance, and end-of-life. Integral passive nozzles, manways, stiffeners, supports, and factory-applied protective finishes are included when delivered as part of the product. Product design, material grade, nominal capacity, pressure basis, finish, and factory test state shall be declared. The official CPC source fixes the category boundary but does not supply inventory quantities (`un-cpc-3-0-structure-2025`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.reservoirs-tanks-vats-and-similar-containers-other-than-for-compressed-or-liquefied-gas-8adef04a |
| classification_refs | CPC 3.0: 42210 (exact classification context; mapping acceptance remains a separate repository decision) |
| covered_products | Finished passive iron, steel, or aluminium reservoirs, tanks, vats, and similar containers with capacity greater than 300 L, including delivered integral passive fittings and protective finish |
| excluded_products | Containers ≤300 L; compressed- or liquefied-gas containers; vessels fitted with mechanical or thermal equipment; boilers; heat exchangers; stand-alone pumps, valves, piping, foundations, and site installation |
| representative_product | A fully fabricated, inspected, factory-gate steel or aluminium storage/process tank exceeding 300 L, supplied without mechanical or thermal equipment |
| production_route | Purchased plate or sheet receipt; cutting and forming; welding/joining; route-specific surface preparation and coating; inspection and factory release |
| market_state | Finished dry container at the manufacturing gate; material grade, alloy, nominal capacity, wall thickness, coating/lining state, integral fittings, test state, geography, and production year declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a finished passive large metal reservoir, tank, vat, or similar container ready to leave the manufacturing gate |
| How much | 1 kg net mass of conforming finished product, excluding temporary transport fixtures and test water |
| How well | Capacity greater than 300 L; iron, steel, or aluminium construction; not for compressed or liquefied gas; no fitted mechanical or thermal equipment; declared grade, capacity, finish, fittings, and inspection state |
| How long or cycle | One factory-gate product delivery; no service life is represented, and any downstream use-stage duration must be modelled separately |
| reference_flow_link | The mass of conforming `finished_tank_output` released by `inspection_dispatch`, normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished large metal reservoir, tank, vat, or similar container |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | base metal and grade; primary/secondary material route where known; nominal capacity (>300 L); wall thickness and product mass; intended contained medium; confirmation that compressed/liquefied-gas service is excluded; confirmation that mechanical/thermal equipment is absent; coating or lining system and cured state; integral fittings; factory test method and result; manufacturing geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The reference-product UUID remains unresolved and must not be replaced by an uncoated intermediate container-body UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | `finished_tank_output` and all normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass of one conforming finished product after draining test water and excluding temporary transport fixtures; normalize all rows to 1 kg of this mass. |
| `electricity_energy` | `forming_electricity`, `joining_electricity`, `finishing_electricity`, `inspection_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 3.6 MJ/kWh; disclose voltage level, grid/on-site supply split, and allocation of shared meters. |
| `gas_reference_conditions` | `welding_argon` | Volume | m3 | Record delivered argon at the supplier or meter reference temperature and pressure; do not combine argon with carbon dioxide or another shielding gas, and disclose any conversion from cylinder mass. |
| `water_mass_basis` | `surface_treatment_water`, `hydrotest_water`, and related wastewater rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record makeup water crossing the foreground boundary; if measured as volume, apply a documented density and reference condition, and distinguish reused internal water from new input. |
| `coating_as_supplied_mass` | `epoxy_coating` | Mass | kg | Record the as-supplied formulated coating mass and separately disclose solids fraction, mixed components, solvent/water content, and cured coating retained on the product; do not report only dry film mass as purchased coating. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel plate or aluminium plate and other purchased consumables received at the manufacturing gate, with supplier identity, grade, mass, and delivery state documented |
| starting_condition_role | Foreground gate-to-gate starting point for fabrication; upstream production of purchased materials and energy is represented by linked upstream datasets, not re-created inside the foreground process |
| product_classification_scope | Passive iron, steel, or aluminium containers greater than 300 L, excluding compressed/liquefied-gas service and fitted mechanical or thermal equipment |
| recursive_input_rule | A purchased same-category container incorporated into another delivered container is recorded once as a product input with its own upstream dataset and declared product state; its fabrication is not recursively expanded in this foreground package |
| upstream_dataset_requirement | Link supplier- and route-representative datasets for metal plate, electricity, process water, sodium hydroxide, welding consumables, shielding gas, coating, and any other actual purchased input; disclose geography, technology, recycled content, and temporal representativeness |
| disclosure | Declare included shop operations, outsourced operations, shared-utility allocation, scrap destination, surface-treatment route, coating system, test-water reuse, emission controls, excluded capital goods, and any transport or installation brought into scope |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include purchased-input receipt, cutting/forming, welding/joining, route-specific surface finishing, inspection, on-site waste or emission control, and release of the finished product through the manufacturing gate. | `un-cpc-3-0-structure-2025`; `us-ecfr-40-cfr-63-subpart-xxxxxx` |
| `boundary_conditional_finishing` | surface treatment and coating | Include aqueous treatment, cleaning, coating application, curing, and equipment cleaning only when performed for the declared product; record each chemical, coating, waste, and emitted substance as a separate exchange. | `eu-jrc-stm-bref-2006`; `us-ecfr-40-cfr-63-subpart-xxxxxx` |
| `boundary_outsourced_operations` | outsourced fabrication | Include an outsourced operation by its supplier process dataset and the product or service crossing the reporting boundary; avoid double counting its direct energy, chemicals, wastes, or emissions at the reporting factory. | `eu-commission-recommendation-2021-2279` |
| `boundary_exclusions` | downstream and non-product activities | Exclude installation, foundations, external piping, use, maintenance, decommissioning, and end-of-life from this factory-gate profile unless the study explicitly expands the boundary and reports them separately. | `un-cpc-3-0-structure-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_forming` | Material preparation, cutting, and forming | `required` | Always; include only the declared steel and/or aluminium material rows | Foreground fabrication | Per kg conforming finished product |
| `joining_assembly` | Welding, joining, and assembly | `required` | Always; activate each consumable and shielding-gas row only for the documented joining route | Foreground assembly | Per kg conforming finished product |
| `surface_finishing` | Surface preparation and protective finishing | `conditional` | Include when chemical cleaning, aqueous treatment, or factory-applied coating/lining is performed | Foreground finishing | Per kg conforming finished product and declared treated area |
| `inspection_dispatch` | Inspection, testing, draining, and factory release | `required` | Always; hydrostatic-test water rows apply only when a water test is performed | Foreground quality release | 1 kg net conforming finished product |

### Process: Material preparation, cutting, and forming (`material_preparation_forming`)

#### Inputs

##### Product flows

###### Steel plate input (`steel_plate_input`)

Record purchased steel plate crossing the factory boundary when the declared product contains iron or steel. The row is not applicable to a wholly aluminium product; alloy, grade, thickness, coating state, supplier, and recycled content remain product-specific qualifiers.

- Selected flow: Steel plate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted plate mass issued to the product order, net of returned unused stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_scrap`
- Sources:

###### Aluminium plate input (`aluminium_plate_input`)

Record purchased aluminium plate crossing the factory boundary when the declared product contains aluminium. The row is not applicable to a wholly iron/steel product; alloy, temper, thickness, supplier, recycled content, and surface state remain product-specific qualifiers.

- Selected flow: Aluminium plate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted aluminium plate mass issued to the product order, net of returned unused stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_scrap`
- Sources:

###### Forming electricity (`forming_electricity`)

Record electrical energy used for cutting, rolling, bending, pressing, machining, grinding, and associated local extraction in this process.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured process-meter electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `us-ecfr-40-cfr-63-subpart-xxxxxx`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated steel fabrication scrap (`steel_fabrication_scrap`)

Record steel offcuts, swarf, and rejected steel pieces leaving the process as one segregated waste stream. Keep aluminium scrap in its separate row and disclose internal return to stock rather than counting it as waste.

- Selected flow: Steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the product order to internal recycling storage or an external waste recipient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_scrap`
- Sources:

###### Segregated aluminium fabrication scrap (`aluminium_fabrication_scrap`)

Record aluminium offcuts, swarf, and rejected aluminium pieces leaving the process as one segregated waste stream. Keep steel scrap in its separate row and disclose internal return to stock rather than counting it as waste.

- Selected flow: Aluminium fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the product order to internal recycling storage or an external waste recipient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_scrap`
- Sources:

##### Elementary flows

### Process: Welding, joining, and assembly (`joining_assembly`)

#### Inputs

##### Product flows

###### Flux-cored welding wire (`flux_cored_wire`)

Record flux-cored wire only when the flux-cored arc welding route is used. Electrode grade and base-metal compatibility shall match the documented weld procedure.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus unopened returns, supported by purchasing or weld-shop stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_inputs`
- Sources: `us-epa-ap42-12-19-welding-1995`

###### Covered welding electrode (`covered_welding_electrode`)

Record covered welding electrodes only when shielded metal arc welding is used. Do not combine this exchange with wire, flux, or another electrode class.

- Selected flow: Covered welding electrode
- Flow property / unit: Mass / kg
- Amount rule: issued electrode mass minus unopened returns for the product order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_inputs`
- Sources: `us-epa-ap42-12-19-welding-1995`

###### Argon shielding gas (`welding_argon`)

Record gaseous argon only when it crosses the boundary as a separately supplied shielding gas. Carbon dioxide and other gases, when used, shall be added as separate atomic exchanges rather than merged into this row.

- Selected flow: Gaseous argon
- Flow property / unit: Volume / m3
- Amount rule: metered or cylinder-inventory argon consumption at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_inputs`
- Sources: `us-epa-ap42-12-19-welding-1995`

###### Joining electricity (`joining_electricity`)

Record electricity for welding power sources, positioning, local extraction, and joining-related equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured joining-area electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `us-epa-ap42-12-19-welding-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Welding PM10 to air (`welding_pm10`)

Record total PM10 released after the documented capture and control system. Select an elementary-flow UUID only after declaring whether the release is close to ground or through a stack and whether the site is urban or non-urban.

- Selected flow: Welding particles (PM10) to air
- Flow property / unit: Mass / kg
- Amount rule: measured controlled release or a documented facility calculation using electrode consumption, welding process, electrode type, base metal, operating conditions, capture efficiency, and control efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_welding_emissions`
- Sources: `us-epa-ap42-12-19-welding-1995`

### Process: Surface preparation and protective finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Finishing electricity (`finishing_electricity`)

Record electricity used by surface-preparation, bath circulation, ventilation, coating application, and curing equipment when this process is included.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured finishing-line electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-stm-bref-2006`; `us-ecfr-40-cfr-63-subpart-xxxxxx`

###### Surface-treatment process water (`surface_treatment_water`)

Record fresh or purchased process water entering cleaning, rinsing, or aqueous chemical treatment. Internal recirculation is disclosed but is not counted repeatedly as an external input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured makeup-water mass entering the included surface-treatment operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide only when it is purchased and consumed in the declared alkaline cleaning or treatment bath. Report active sodium hydroxide mass and disclose solution concentration and bath-replenishment basis.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: calculated active sodium hydroxide mass from measured solution additions and documented concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_finishing`
- Sources: `eu-jrc-stm-bref-2006`

###### Epoxy coating (`epoxy_coating`)

Record one formulated epoxy coating product when a factory-applied epoxy system is used. A primer, topcoat, thinner, or curing agent that crosses the boundary separately shall be represented as its own atomic exchange in the completed data package.

- Selected flow: Formulated epoxy coating
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied coating mass issued to the product order minus documented recoverable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `us-ecfr-40-cfr-63-subpart-xxxxxx`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Metal-surface-treatment wastewater (`surface_treatment_wastewater`)

Record wastewater leaving surface cleaning, rinsing, or aqueous treatment as a characterized waste flow after internal reuse and any on-site treatment. Do not merge it with sanitary sewage or hydrostatic-test drainage.

- Selected flow: Metal-surface-treatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharged or transferred wastewater mass, with treatment state and receiving boundary declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

### Process: Inspection, testing, draining, and factory release (`inspection_dispatch`)

#### Inputs

##### Product flows

###### Hydrostatic-test water (`hydrotest_water`)

Record new process water supplied for a hydrostatic leak or integrity test only when that test is performed. Reused water is tracked in the test record and counted only when it first crosses the foreground boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured makeup-water mass charged to the test, excluding internally reused water already counted
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_release`
- Sources:

###### Inspection electricity (`inspection_electricity`)

Record electricity used by inspection, non-destructive testing, test pumps, draining, and product-release equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured inspection-area electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished large metal reservoir, tank, vat, or similar container (`finished_tank_output`)

Record only conforming finished product released at the manufacturing gate. The product is dry, exceeds 300 L capacity, is not for compressed or liquefied gas, and has no fitted mechanical or thermal equipment.

- Selected flow: Finished large metal reservoir, tank, vat, or similar container
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming finished product released by quality control
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_release`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Drained hydrostatic-test wastewater (`hydrotest_wastewater`)

Record test water that leaves the foreground system after use and is not internally reused. Declare water quality, any additives, treatment state, and whether it is discharged or transferred.

- Selected flow: Drained hydrostatic-test wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured drained mass leaving the foreground boundary after subtracting documented reuse and retained water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_release`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared fabrication and utility systems | Avoid allocation by separately metering or otherwise subdividing product orders, process lines, and utility systems whenever technically feasible. | `eu-commission-recommendation-2021-2279` |
| `allocation_shared_records` | unavoidable shared energy, water, and consumables | When subdivision is not feasible, apply a documented causal driver such as machine time, weld length, treated area, bath loading, or measured product mass; do not default to revenue without demonstrating the absence of a physical driver. | `eu-commission-recommendation-2021-2279` |
| `allocation_scrap` | steel and aluminium scrap | Report measured scrap as a waste output at the point it leaves the foreground process. Do not subtract an avoided-primary-material credit from the foreground inventory; model recycling or treatment consistently in the downstream system and disclose the chosen convention. | `eu-commission-recommendation-2021-2279` |
| `allocation_nonconforming_products` | rework and rejects | Assign rework inputs and unrecovered reject burdens to the production order that generated them when traceable; otherwise use the same documented causal allocation driver as the shared process. | `eu-commission-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_scrap` | `material_preparation_forming` | metal inputs and segregated scrap outputs | receiving, issue, return, weighbridge, and waste-transfer records | order_id; material; grade/alloy; supplier; batch; gross_mass; returned_mass; scrap_mass; destination | Calibrated scale, stock ledger, and order reconciliation | kg | Each receipt, issue, return, and transfer | At least one representative production year; state shorter campaign coverage | All included production lines and outsourced forming declared | Sum accepted issued mass net of returns and sum segregated scrap by metal; divide by conforming output mass | Calibration records, purchase documents, material certificates, stock reconciliation, waste transfer notes |
| `cp_process_energy` | all processes | process electricity | utility meter and production log | meter_id; start_reading; end_reading; unit; process_id; order_id; operating_time; allocation_driver; voltage; grid_or_onsite | Dedicated meter preferred; otherwise reconciled submeter or shared-meter allocation | kWh and MJ | Per batch/order or monthly with production reconciliation | Same representative period as output | All included site operations; outsourced energy excluded from site totals | Convert kWh to MJ and allocate by measured causal driver; divide by conforming output mass | Meter calibration, invoices, interval data, allocation worksheet |
| `cp_welding_inputs` | `joining_assembly` | welding wire, covered electrode, and argon | stores issue/return, cylinder, and welding procedure records | order_id; process_type; consumable_grade; issued_mass; returned_mass; gas_id; gas_volume_or_mass; reference_conditions; weld_length | Weighed issue/return and gas meter or cylinder inventory reconciliation | kg and m3 | Each order or shift | Same representative period as output | All included welding cells and declared outsourced joining | Net each atomic consumable separately; convert gas only with documented reference conditions; divide by conforming output mass | Purchase record, weld procedure, material certificate, scale/meter calibration, cylinder reconciliation |
| `cp_welding_emissions` | `joining_assembly` | controlled PM10 release | monitoring or engineering-calculation record | process_type; electrode_type; base_metal; current; voltage; electrode_consumed; capture_efficiency; control_efficiency; measured_PM10; release_compartment | Direct monitoring preferred; otherwise documented approved calculation matched to actual process and controls | kg | Each monitored campaign or calculation period | Representative operating modes in the reporting year | Every included welding release point | Determine post-control PM10 and divide by conforming output mass; no default compartment is assigned | Monitoring report, method detection limits, equipment settings, control inspection, calculation source and uncertainty |
| `cp_surface_finishing` | `surface_finishing` | water, sodium hydroxide, coating, and wastewater | meter, bath-addition, coating issue/return, concentration, and discharge records | order_id; route; treated_area; water_in; water_reused; solution_added; NaOH_concentration; coating_issued; coating_returned; solids_fraction; wastewater_out; treatment_state | Calibrated meters/scales, bath log, supplier formulation, and discharge/transfer measurement | kg and m2 | Each batch/order, with bath additions and discharge events | Same representative period as finished output | Every included preparation, bath, coating, curing, and on-site treatment operation | Keep each chemical/coating atomic; calculate active NaOH; subtract only documented internal reuse/returns; divide by output mass | Meter/scale calibration, batch sheet, safety/technical data sheet, bath analysis, wastewater record |
| `cp_inspection_release` | `inspection_dispatch` | test water, test drainage, inspection electricity, and finished product | test sheet, water meter, electricity record, and release certificate | order_id; nominal_capacity; test_method; water_charged; water_reused; water_drained; additives; inspection_energy; dry_product_mass; pass_fail; release_date | Calibrated meters/scales and signed quality-release record | kg, kWh, and MJ | Each finished product or production lot | Full reporting period | All products represented by the dataset | Count only new water input and water leaving the boundary; normalize all accepted records by released dry product mass | Test procedure, meter/scale calibration, inspection result, nonconformance log, release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period or order amount / conforming dry finished-product mass | atomic flow amount; `dry_product_mass` | amount per 1 kg `finished_tank_output` | `eu-commission-recommendation-2021-2279` |
| `calc_electricity_conversion` | electricity rows | electricity_MJ = electricity_kWh × 3.6 | metered electricity_kWh | MJ electricity |  |
| `calc_active_sodium_hydroxide` | `sodium_hydroxide` | active_NaOH_mass = solution_mass × measured mass fraction of NaOH | solution_mass; NaOH_concentration | kg active sodium hydroxide | `eu-jrc-stm-bref-2006` |
| `calc_welding_pm10` | `welding_pm10` | Use measured post-control PM10; when measurement is unavailable, apply a documented factor valid for the actual process/electrode/base metal/conditions, then multiply by consumed electrode and by (1 − capture efficiency × control efficiency) | measured_PM10 or factor; electrode_consumed; process settings; capture_efficiency; control_efficiency | kg PM10 released to the declared air compartment | `us-epa-ap42-12-19-welding-1995` |
| `calc_water_reconciliation` | surface-treatment and hydrostatic-test water | external wastewater must be reconciled to new water input, retained water, evaporation, off-site transfer, and documented internal reuse without double counting circulation | water_in; water_reused; water_retained; water_evaporated; water_transferred; wastewater_out | reconciled kg water inputs and waste outputs | `eu-jrc-stm-bref-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Verify >300 L capacity, metal type/grade, excluded gas service, absence of fitted mechanical/thermal equipment, dry product mass, finish, integral fittings, and release status for every represented product family. | Drawings, bill of materials, material certificates, inspection and release records; `un-cpc-3-0-structure-2025` |
| `dq_temporal_geographic` | all foreground and upstream data | Foreground records shall cover a representative production period and identify site and geography; upstream datasets shall disclose temporal, geographic, and technological representativeness. | Record-period reconciliation and upstream dataset metadata; `eu-commission-recommendation-2021-2279` |
| `dq_completeness` | all included processes | Reconcile purchasing/issue/return, utility, scrap, wastewater, emission-control, test, reject, and finished-output records; explain exclusions and missing periods. | Mass/energy reconciliation, meter coverage, waste manifests, monitoring reports, nonconformance records |
| `dq_route_specificity` | welding and finishing | Preserve actual welding process/electrode/gas, base metal, treated area, chemical concentration, coating formulation, water reuse, and control technology; do not apply generic factors without a documented match and uncertainty. | Weld procedures, supplier data, bath logs, coating technical data, control records; `us-epa-ap42-12-19-welding-1995`; `eu-jrc-stm-bref-2006` |
| `dq_instrument_quality` | measured foreground data | Retain instrument identity, calibration status, reading resolution, units, missing-data treatment, and responsible reviewer for meters, scales, and emission measurements. | Calibration certificates, raw readings, QA sign-off, and corrective-action records; `us-ecfr-40-cfr-63-subpart-xxxxxx` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Fail validation if capacity is not greater than 300 L, compressed/liquefied-gas service is included, mechanical/thermal equipment is fitted, metal construction is not declared, or the output is an unfinished container body. | `un-cpc-3-0-structure-2025` |
| `validate_reference_mass` | reference flow | Require exactly 1 kg net conforming dry finished-product mass as normalization; test water, temporary fixtures, rejected products, and off-site installation items must not be included in the reference mass. |  |
| `validate_atomic_inventory` | process inventory | Require every actual material, electricity, water, gas, coating component, waste stream, and elementary emission to be represented as an atomic exchange; flag merged utilities, merged chemicals, merged waste, or merged emissions. | `eu-commission-recommendation-2021-2279` |
| `validate_mass_water_records` | metal and water balances | Require reconciliation of steel/aluminium input to finished product, segregated scrap, rejects, and stock returns, and reconcile new water to reuse, retained water, loss, transfer, and wastewater. Investigate rather than silently balancing unexplained differences. | `eu-jrc-stm-bref-2006` |
| `validate_welding_emissions` | `welding_pm10` | Require actual welding process, electrode, base metal, operating conditions, capture/control, calculation or monitoring method, and release compartment; fail UUID completeness when the selected elementary-flow compartment does not match the declared release. | `us-epa-ap42-12-19-welding-1995`; `us-ecfr-40-cfr-63-subpart-xxxxxx` |
| `validate_allocation` | shared processes and scrap | Require subdivision or a documented causal allocation driver, consistent scrap recycling convention, and sensitivity disclosure where allocation materially affects results. | `eu-commission-recommendation-2021-2279` |
| `validate_unresolved_identity` | UUID-empty rows | Treat every UUID-empty row listed in manifest review metadata as unresolved; do not promote a generic, proxy, wrong-property, wrong-compartment, or wrong-product-state candidate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-manufacturing dataset for one declared large passive metal container product or a documented representative product family |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, UUID closure, upstream-link review, and external range-evidence review appropriate to the intended database |
| allowed_use | Factory-gate product comparisons and lifecycle models where the product identity, material route, capacity, finishing route, geography, production period, allocation, and linked upstream datasets are compatible |
| excluded_use | Pressure-gas containers; containers ≤300 L; equipped tanks; use-stage storage service; installation; end-of-life; comparisons that ignore capacity, material grade, finish, service conditions, or unresolved UUIDs |
| required_metadata | PCR id and version when published; product drawing/BOM identity; metal/alloy and recycled content; capacity; dry mass; wall thickness; finish/lining; integral fittings; test method; process routes; site/geography; reporting period; upstream datasets; allocation; cut-offs; data owner; review status |
| required_quality_disclosure | Meter and scale coverage; representativeness; shared-meter allocation; supplier-data gaps; mass/water reconciliation; welding-emission method and compartment; surface-treatment route; wastewater state; scrap treatment convention; uncertainty; unresolved UUID and range-evidence needs |
| update_trigger | Material/alloy or capacity-family change; new forming/joining/finishing technology; coating/lining change; major supplier or electricity mix change; altered test-water reuse or emission controls; site/geography change; allocation change; material inventory revision; UUID resolution; or new two-source compatible range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, *CPC Ver. 3.0 Structure*, 30 June 2025, row 42210. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; retained bytes verified as SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official product identity, material scope, >300 L threshold, and exclusions |
| `us-ecfr-40-cfr-63-subpart-xxxxxx` | `standard` | U.S. Environmental Protection Agency, 40 CFR Part 63, Subpart XXXXXX, *National Emission Standards for Hazardous Air Pollutants Area Source Standards for Nine Metal Fabrication and Finishing Source Categories*. https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-63/subpart-XXXXXX (retrieved 2026-09-05) | Fabricated-plate-work operations, machining, grinding/polishing, welding, spray-painting preparation/application/curing/cleaning, particulate controls, and records |
| `us-epa-ap42-12-19-welding-1995` | `method_factor` | U.S. Environmental Protection Agency, *AP-42 Section 12.19 Electric Arc Welding*, January 1995. https://www.epa.gov/sites/default/files/2020-11/documents/c12s19.pdf (retrieved 2026-09-05) | Welding process decomposition, electrode and shielding-gas dependence, PM10 identity, calculation inputs, controls, and uncertainty disclosure; no default factor or range is adopted |
| `eu-jrc-stm-bref-2006` | `official_guidance` | European Commission, Joint Research Centre, *Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*, August 2006. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-05) | Conditional aqueous chemical/electrolytic surface-treatment decomposition, water-based processing, corrosion-protection purpose, associated activities, and environmental records; no external range is adopted |
| `eu-commission-recommendation-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, corrected 23 May 2022. https://eur-lex.europa.eu/eli/reco/2021/2279/corrigendum/2022-05-23/oj/eng (retrieved 2026-09-05) | Subdivision/allocation hierarchy, inventory normalization, data quality, consistency, completeness, representativeness, and model disclosure |
