---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.reaction-engines-other-than-turbo-jets
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Reaction engines other than turbo-jets

## 1. Scope and Applicability

This PCR covers the factory-gate production of complete thrust-producing reaction engines classified as CPC 43133
that are not turbo-jets and are supplied as finished engines or motors. The foreground boundary begins with received
materials and purchased components and includes
fabrication, joining, precision cleaning, assembly, acceptance testing, and the shipping package applied at the
manufacturing site.

Turbo-jets and turbo-propellers, piston aircraft engines, other gas turbines, separately supplied engine parts,
aircraft or spacecraft integration, operational propellant carried for use, in-service maintenance, use-stage
operation, launch or flight, and end-of-life are excluded. A dataset shall state the reaction-engine technology and
propellant or working-fluid system; this label controls which
conditional exchanges and tests apply without changing the canonical category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.reaction-engines-other-than-turbo-jets |
| classification_refs | CPC 3.0: 43133, Reaction engines other than turbo-jets (exact) |
| covered_products | Complete non-turbojet reaction engines or motors supplied as finished thrust-producing units within CPC 43133 |
| excluded_products | Turbo-jets; turbo-propellers; piston aircraft engines; stationary gas turbines; separately supplied parts; complete aircraft, spacecraft, missiles, or launch vehicles |
| representative_product | A finished, dry, acceptance-tested non-turbojet reaction engine at the manufacturing factory gate |
| production_route | Received material and component control; machining, forming or joining; precision cleaning; assembly; route-specific acceptance testing; protective shipping packaging |
| market_state | Finished dry engine, without operational propellant unless propellant is an inseparable sold constituent; protected for shipment at factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a finished non-turbojet reaction engine capable of the declared thrust-producing function |
| How much | 1 kg accepted dry engine mass at the manufacturing factory gate |
| How well | Conforms to the declared engine configuration, material and cleanliness specifications, and acceptance criteria |
| How long or cycle | One factory-gate delivery; declared design life, duty cycle, starts, or impulse capability is disclosed but the use stage is outside this production inventory |
| reference_flow_link | The accepted dry product output is normalized to the reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Reaction engines other than turbo-jets `f425fe92-1cdd-45c2-9695-3486a06fbf2c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | engine technology; model and configuration; dry-mass definition; propellant inclusion state; rated thrust or impulse basis; acceptance-test status; cleanliness class; production site and geography; reporting period; shipping-package inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset
metadata, process notes, the reference flow comment, the product description, or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the accepted engine after draining temporary test fluids and before external shipping packaging; disclose any inseparable sold propellant, igniter, actuator, controller, or insulation included in dry mass. |
| `material_mass` | material, cleaning chemical, packaging, scrap, and aqueous waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass crossing the foreground boundary; do not substitute purchase value, nominal stock size, or gross container mass. |
| `utility_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Record delivered electrical energy in MJ; when meters report kWh, multiply the measured kWh by 3.6 and retain the original meter reading. |
| `test_gas_volume` | gaseous natural-gas and industrial-oxygen test rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gas volume at the declared temperature and absolute pressure; do not combine gases or mix standard and actual volumes without a documented conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components accepted at the manufacturing site, with supplier identity, supplied state, mass, and upstream dataset declared |
| starting_condition_role | Cradle-to-gate starting inventory for the reaction-engine manufacturing foreground |
| product_classification_scope | Complete CPC 43133 reaction engines other than turbo-jets; separately supplied parts and excluded engine classes remain outside scope |
| recursive_input_rule | A purchased complete CPC 43133 engine used in the foreground is recorded once as a same-category product input with its upstream dataset and is not recursively decomposed unless the producer has non-overlapping primary records |
| upstream_dataset_requirement | Every purchased material, component, utility, gas, chemical, and package shall link to a geography-, technology-, and state-appropriate upstream dataset |
| disclosure | Declare engine technology, material and component supply states, site geography, test sequence and media, direct test emissions, dry-mass convention, packaging, cut-offs, and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | manufacturing foreground | Include received-material control, fabrication, joining, precision cleaning, assembly, acceptance testing, and factory-applied shipping protection through release of the accepted dry engine at the factory gate. | `nasa-jsc-manufacturing-assembly-integration`; `nasa-wstf-development-qualification-acceptance` |
| `boundary_test_media` | acceptance testing | Add every actual propellant, oxidizer, pressurant, purge gas, cleaning liquid, and direct exhaust species as its own atomic exchange when it crosses the foreground boundary; the listed natural-gas and oxygen rows apply only to that declared route. | `ecss-e-st-35-10c-2009` |
| `boundary_cleanliness` | precision cleaning | Include cleaning media, rejected baths, rinses, drying energy, and cleanliness verification that occur at the manufacturing site; preserve product-specific cleanliness criteria. | `ecss-e-st-35-06c-rev2-2020`; `nasa-jsc-manufacturing-assembly-integration` |
| `boundary_exclusions` | downstream stages | Exclude installation in a vehicle, distribution after the factory gate, operational propellant loaded outside manufacturing, launch or flight, maintenance, and end-of-life unless a study explicitly extends the boundary and reports those stages separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `engine_manufacture` | Component fabrication, cleaning, assembly, and packaging | required | Always included for a finished factory-gate engine; individual material and cleaning rows apply only when used | foreground production | 1 kg accepted dry reaction engine output |
| `acceptance_testing` | Engine acceptance and qualification testing | required | Include the actual release test sequence; hot-fire media and emissions apply only when that route is performed at the reporting site | foreground quality assurance | Test campaign attributable to 1 kg accepted dry reaction engine output |

### Process: Component fabrication, cleaning, assembly, and packaging (`engine_manufacture`)

#### Inputs

##### Product flows

###### Stainless-steel stock (`stainless_steel_input`)

Record stainless steel consumed in engine parts and tooling losses attributable to saleable production when the
declared bill of materials contains stainless steel.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net stainless-steel input from accepted material issues less documented return to stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Aluminium-magnesium alloy stock (`aluminium_magnesium_alloy_input`)

Record this alloy only when the bill of materials identifies aluminium-magnesium alloy bar, rod, or profile stock.

- Selected flow: Aluminium Magnesium Alloy `ab57ae32-8ffe-47fe-9550-53381391a038`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net aluminium-magnesium alloy input from accepted material issues less documented return to stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Titanium plate stock (`titanium_plate_input`)

Record titanium plate only when it is issued to the declared engine configuration.

- Selected flow: Titanium Plate `f32fc628-252f-40fe-8f8d-fd0efb955e92`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net titanium-plate input from accepted material issues less documented return to stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Manufacturing electricity (`manufacturing_electricity`)

Record electricity for machining, joining, cleaning, drying, assembly, environmental control, and attributable
factory support within this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or allocated delivered electricity for the reporting-period manufacturing output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_electricity`
- Sources:

###### Process water for precision cleaning (`process_water_input`)

Record process water that enters precision cleaning or rinsing. Do not use this row for a distinct recirculating
cooling-water flow.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured cleaning and rinse-water mass, or measured volume converted with documented density and temperature
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_inputs`
- Sources:

###### Sodium hydroxide cleaning chemical (`sodium_hydroxide_input`)

Record sodium hydroxide only when it is delivered into an alkaline cleaning bath; declare supplied state and
concentration and report pure-product-equivalent mass separately from carrier water.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchased sodium-hydroxide product mass multiplied by declared mass fraction used in production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_inputs`
- Sources:

###### Wooden shipping crate (`wooden_shipping_crate`)

Record the mass of a wooden crate newly supplied with the engine; reusable crates are amortized over documented
uses. No exact TianGong flow UUID was confirmed.

- Selected flow: Wooden shipping crate
- Flow property / unit: Mass / kg
- Amount rule: Net crate mass allocated to shipped accepted engines
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_crate`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reaction engine (`reference_product`)

The accepted dry engine is the reference product after the declared manufacturing and acceptance-test sequence.

- Selected flow: Reaction engines other than turbo-jets `f425fe92-1cdd-45c2-9695-3486a06fbf2c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured accepted dry engine mass normalized to 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources:

##### Waste flows

###### Machining metal scrap (`machining_metal_scrap`)

Record metal chips and offcuts leaving machining as one measured waste stream; disclose alloy segregation,
contamination, and destination.

- Selected flow: Metal scrap from machining `616bb9e9-a954-475e-b1b8-a73f659ff694`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured net machining-scrap mass transferred out of the foreground process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_machining_scrap`
- Sources:

###### Spent sodium-hydroxide cleaning solution (`spent_sodium_hydroxide_cleaning_solution`)

Record a discharged bath containing sodium hydroxide and removed soil as a distinct waste. Do not merge it with
other wastewater. No exact TianGong flow UUID was confirmed.

- Selected flow: Spent sodium-hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Measured discharged solution mass attributable to engine production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_cleaning_solution`
- Sources:

##### Elementary flows

### Process: Engine acceptance and qualification testing (`acceptance_testing`)

#### Inputs

##### Product flows

###### Acceptance-test electricity (`test_electricity`)

Record delivered electricity for instrumentation, pumps, controls, ventilation, and test-stand operation attributable
to the accepted production units.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered test-stand electricity attributed to accepted engines in the test campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_electricity`
- Sources:

###### Gaseous natural gas test fuel (`test_natural_gas`)

Record gaseous natural gas only for a declared acceptance-test route that meters this fuel. Do not use it as a proxy
for methane, hydrogen, kerosene, or another test fuel.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered natural-gas volume corrected to the declared reference temperature and absolute pressure
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fluids`
- Sources:

###### Industrial oxygen test oxidizer (`test_industrial_oxygen`)

Record industrial oxygen only when gaseous oxygen crosses the acceptance-test boundary; disclose purity, pressure,
reference conditions, and whether supply is purchased or generated on site.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered gaseous-oxygen volume corrected to the declared reference temperature and absolute pressure
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fluids`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas testing (`test_fossil_carbon_dioxide`)

Record only directly measured fossil carbon dioxide discharged from the natural-gas test route. Upstream emissions
embedded in electricity, gas, or oxygen datasets are not repeated here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured direct fossil-carbon-dioxide mass discharged during attributable natural-gas acceptance testing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted dry reaction engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fossil_co2`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared manufacturing and test operations | Prefer direct metering or subdivision by engine model, work order, machine hour, test firing, or accepted dry mass before allocation. |  |
| `allocation_shared_facility` | residual shared utilities and support activities | Allocate only the residual unmetered share using a documented causal driver; disclose the driver and test sensitivity when the residual materially affects results. |  |
| `allocation_scrap` | machining metal scrap | Keep input-material burdens with the engine product and report scrap at the measured factory-gate waste amount; do not claim an avoided-burden credit unless the governing LCA study method requires it and the credit is reported separately. |  |
| `allocation_rework` | rejected or reworked units | Attribute rework, retest, and scrapped-unit burdens to the accepted output of the same reporting period; do not omit failed tests from the production yield. | `nasa-wstf-development-qualification-acceptance` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `engine_manufacture` | stainless steel, aluminium-magnesium alloy, and titanium plate inputs | receiving and material-issue records | flow UUID; material designation; grade; stock form; lot; issued mass; returned mass; supplier; upstream dataset | reconcile accepted receipts, work-order issues, and returns to stock | kg | each lot and work order | full reporting period | all production areas serving the declared engine | sum net issued mass by atomic material and divide by accepted dry output mass | purchase record; material certificate; calibrated scale record; work-order trace |
| `cp_manufacturing_electricity` | `engine_manufacture` | manufacturing electricity | electricity meter and allocation record | meter id; opening and closing reading; kWh; machine or area; allocation driver; downtime; accepted output mass | use submeter first; allocate residual facility consumption with documented causal driver | kWh and MJ | continuous meter, aggregated monthly | full reporting period | manufacturing, cleaning, assembly, and attributable support | convert kWh to MJ, subtract excluded loads, then divide by accepted dry output mass | meter calibration; utility invoice; load map; allocation worksheet |
| `cp_cleaning_inputs` | `engine_manufacture` | process water and sodium hydroxide | bath make-up, rinse meter, and chemical issue records | water mass or volume; temperature; density; sodium-hydroxide product mass; concentration; bath id; engine work orders | meter water and weigh chemical additions; link batches to cleaned engine hardware | kg and m3 | each bath make-up, addition, and discharge | full reporting period | all in-scope precision-cleaning lines | calculate water mass and pure-product-equivalent sodium hydroxide; divide attributable totals by accepted dry output mass | calibrated meter or scale; chemical certificate; bath log; work-order trace |
| `cp_packaging_crate` | `engine_manufacture` | wooden shipping crate | packaging bill and reuse log | crate id; tare mass; engine id; new or reused status; prior and expected uses | weigh the crate and record each documented use | kg | each shipment | full reporting period | factory-gate packaging | allocate new-crate mass once or amortize reusable-crate mass over documented uses; divide by shipped accepted dry mass | scale calibration; packing list; reuse log |
| `cp_machining_scrap` | `engine_manufacture` | machining metal scrap | scrap container and dispatch records | container id; tare and gross mass; alloy segregation; contamination; work orders; destination | weigh each outbound scrap container and link to production work orders | kg | each dispatch | full reporting period | all in-scope machining areas | subtract tare, sum attributable net scrap, and divide by accepted dry output mass | calibrated scale; dispatch note; segregation log |
| `cp_spent_cleaning_solution` | `engine_manufacture` | spent sodium-hydroxide cleaning solution | bath discharge record | bath id; solution mass or volume; density; sodium-hydroxide concentration; contamination; destination; work orders | weigh discharge or convert measured volume with documented density | kg | each discharge | full reporting period | in-scope alkaline cleaning lines | calculate attributable discharged mass and divide by accepted dry output mass | discharge log; meter or scale calibration; waste transfer record; bath analysis |
| `cp_product_output` | `engine_manufacture` | accepted dry reaction engine | final inspection and weighing record | engine id; model; configuration; dry-mass inclusions; gross mass; removable test fluid; packaging tare; acceptance status | calibrated final weighing after drainage and before external shipping package | kg | every accepted engine | full reporting period | all declared production sites | sum accepted dry mass; exclude rejected units from output but retain their burdens | calibrated scale record; configuration baseline; acceptance release |
| `cp_test_electricity` | `acceptance_testing` | acceptance-test electricity | test-stand meter record | test id; engine id; meter readings; kWh; auxiliary loads; accepted or failed result | submeter the test stand and its attributable auxiliaries | kWh and MJ | every test | full reporting period | all in-scope test stands | sum all attributable tests including failures and retests; convert to MJ and divide by accepted dry output mass | meter calibration; test log; engine serial trace |
| `cp_test_fluids` | `acceptance_testing` | gaseous natural gas and industrial oxygen | calibrated flow-meter and supply record | gas identity; purity or composition; meter id; measured volume; temperature; absolute pressure; test id; engine id | meter each gas separately and correct to the declared reference conditions | m3 | every test | full reporting period | all in-scope test stands | sum corrected volume by atomic gas including failed tests and divide by accepted dry output mass | meter calibration; gas certificate; test log; pressure and temperature record |
| `cp_test_fossil_co2` | `acceptance_testing` | direct fossil carbon dioxide | exhaust measurement record | test id; engine id; CO2 concentration; exhaust flow; temperature; pressure; duration; calibration gases | integrate calibrated concentration and exhaust-flow measurements over each test | kg | every natural-gas test | full reporting period | natural-gas test exhaust boundary | sum measured direct fossil CO2 including failed tests and divide by accepted dry output mass | analyzer and flow calibration; raw time series; test log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_by_dry_mass` | every manufacturing and test exchange | normalized amount = reporting-period exchange amount / reporting-period accepted dry reaction-engine mass | atomic exchange total; accepted dry output mass | exchange amount per 1 kg reference product |  |
| `convert_electricity` | electricity meter records | delivered electricity MJ = measured kWh × 3.6 | measured kWh | MJ electricity |  |
| `convert_water_mass` | process-water records | water mass = measured water volume × documented density at the measured temperature; use direct weighed mass when available | water volume or weighed mass; density; temperature | kg process water |  |
| `net_material_issue` | material inputs | net material input = accepted issued mass − documented return-to-stock mass; scrap remains a separate output | issued mass; returned mass | kg atomic material input |  |
| `correct_test_gas_volume` | natural gas and industrial oxygen | correct each measured gas volume to the dataset's declared reference temperature and absolute pressure without combining gas identities | measured volume; temperature; absolute pressure; compressibility method when material | m3 of each gas at declared conditions | `ecss-e-st-35-10c-2009` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all inventory rows | Preserve the selected TianGong UUID and exact flow identity; unresolved crate and spent-cleaning-solution rows remain explicit and may not be replaced by generic packaging or wastewater. | finalized UUID-search receipts; bill of materials; waste description |
| `dq_completeness` | foreground inventory | Reconcile every bill-of-material item, utility meter, cleaning batch, test campaign, rejected unit, package, waste transfer, and direct test emission to the reporting period; add omitted exchanges as atomic rows. | completeness reconciliation signed by data owner |
| `dq_temporal` | reporting period | Use one representative production period that includes all accepted units, failures, rework, and tests; disclose low-volume or campaign-production effects. | production, test, meter, and shipment date coverage |
| `dq_cleanliness` | cleaning and assembly | Retain the applicable cleanliness specification, cleaning batch record, verification result, and post-test re-cleaning record. | cleanliness certificate and inspection record supported by `ecss-e-st-35-06c-rev2-2020` |
| `dq_test_traceability` | acceptance testing | Link every fluid, energy, test result, retest, and directly measured emission to engine serial numbers and the declared acceptance sequence. | test procedure, raw test log, calibration record, and release decision supported by `nasa-wstf-development-qualification-acceptance` |
| `dq_upstream` | purchased inputs | Select upstream datasets matching material grade or product state, supplier geography, production technology, gas reference conditions, and electricity grid; disclose proxies. | supplier certificate and documented upstream-dataset selection |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Confirm the product flow UUID, CPC 43133 identity, accepted dry-mass measurement, and all required qualifiers before dataset release. | `un-cpc-3-0-structure-2025` |
| `validate_atomic_inventory` | all inventory rows | Reject collection labels or combined flows; each reported material, utility, cleaning chemical, test fluid, package, waste, and elementary emission shall be one atomic exchange. |  |
| `validate_mass_reconciliation` | manufacturing process | Reconcile material issues, return to stock, accepted dry product, machining scrap, cleaning waste, rejected hardware, and inventory changes; explain any material residual. |  |
| `validate_test_route` | acceptance testing | Natural gas, industrial oxygen, and fossil carbon dioxide rows may be nonzero only for a documented compatible test route; add separately identified flows for every other test medium or direct emission. | `ecss-e-st-35-10c-2009`; `nasa-wstf-development-qualification-acceptance` |
| `validate_direct_emissions` | test exhaust | Confirm direct fossil carbon dioxide is measured at the foreground exhaust boundary and does not repeat upstream emissions embedded in purchased-input datasets. |  |
| `validate_cleanliness_records` | cleaning and assembly | Confirm that cleaning requirements, verification results, and any post-test re-cleaning are present for the declared engine configuration. | `ecss-e-st-35-06c-rev2-2020` |
| `validate_unresolved` | unresolved flow identities and ranges | Keep the wooden-crate and spent-cleaning-solution UUID gaps and all range-evidence needs open until exact identity or independent compatible evidence is reviewed; do not invent proxies or numeric ranges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset eligible for publication as a secondary_dataset or background_dataset after review |
| downstream_use | cradle-to-gate product-footprint models for non-turbojet reaction engines and separately disclosed aircraft or spacecraft system models |
| allowed_use | comparisons or aggregation only when engine technology, dry-mass convention, configuration, acceptance-test boundary, geography, and data quality are compatible |
| excluded_use | direct substitution for turbo-jets, turbo-propellers, piston engines, separate parts, complete vehicles, operational propellant supply, use-stage thrust or impulse, maintenance, or end-of-life |
| required_metadata | canonical PCR id; engine technology and model; configuration; CPC identity; dry-mass inclusions; rated thrust or impulse basis; production site and period; test sequence and media; cleanliness class; packaging state; allocation; cut-offs; unresolved identities; data-quality rating |
| required_quality_disclosure | primary-record share; meter and scale coverage; bill-of-material completeness; upstream dataset representativeness; failures and rework; test traceability; direct-emission measurement; unresolved UUID and range-evidence needs |
| update_trigger | material change in engine technology, configuration, bill of materials, manufacturing site, cleaning route, acceptance-test sequence or media, dry-mass definition, allocation method, upstream datasets, or resolution of an open identity or range-evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | CPC 43133 identity, hierarchy, and exclusion from adjacent engine subclasses |
| `prc-customs-rcep-origin-rules-2022` | Official guidance (`official_guidance`) | General Administration of Customs of the People's Republic of China, Announcement No. 129 of 2022, RCEP product-specific rules of origin, Annex 1, HS 8412.10, official copy at https://www.tid.gov.hk/en/tradecircular/files/2022/ci2022998a.pdf (retrieved 2026-09-05) | Professional Chinese terminology cross-check for non-turbojet reaction engines |
| `nasa-jsc-manufacturing-assembly-integration` | Official guidance (`official_guidance`) | NASA Johnson Space Center, Manufacturing, Assembly & Integration, https://www.nasa.gov/reference/jsc-manufacturing-assembly-integration/ (retrieved 2026-09-05) | Fabrication, materials, precision cleaning, assembly, packaging protection, acceptance testing, and quality-record process decomposition |
| `nasa-wstf-development-qualification-acceptance` | Official guidance (`official_guidance`) | NASA White Sands Test Facility, Development, Qualification, and Acceptance, updated 15 October 2023, https://www.nasa.gov/centers-and-facilities/white-sands/development-qualification-and-acceptance/ (retrieved 2026-09-05) | Engine hardware fabrication, system assembly, qualification, acceptance testing, and traceability requirements |
| `ecss-e-st-35-06c-rev2-2020` | Standard (`standard`) | European Cooperation for Space Standardization, ECSS-E-ST-35-06C Rev.2, Cleanliness requirements for spacecraft propulsion hardware, 7 April 2020, https://ecss.nl/standard/ecss-e-st-35-06c-rev-2-cleanliness-requirements-for-spacecraft-propulsion-hardware-7-april-2020/ (retrieved 2026-09-05) | Cleaning, cleanliness verification, contamination-control boundary, and evidence requirements |
| `ecss-e-st-35-10c-2009` | Standard (`standard`) | European Cooperation for Space Standardization, ECSS-E-ST-35-10C, Compatibility testing for liquid propulsion systems, 6 March 2009, https://ecss.nl/standard/ecss-e-st-35-10c-compatibility-testing-for-liquid-propulsion-systems/ (retrieved 2026-09-05) | Atomic test-media boundary, reference-condition disclosure, and compatibility-test traceability |
