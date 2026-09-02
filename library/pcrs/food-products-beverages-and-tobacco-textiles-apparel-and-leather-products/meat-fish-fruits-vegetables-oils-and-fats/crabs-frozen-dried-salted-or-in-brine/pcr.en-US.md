---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crabs-frozen-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Crabs, frozen, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers uncooked crabs, in shell or not, preserved for sale by exactly one declared route: freezing, drying, dry-salting, or holding in brine. It covers foreground operations from receipt at the preserving facility through packaged product at the factory gate. Live, fresh or merely chilled crabs, and cooked, smoked, canned, seasoned, or otherwise processed crab products are excluded. Capture or aquaculture, landing, and inbound transport are represented by upstream datasets and are not re-created inside the preserving foreground.

Route-specific operations are conditional. A dataset shall not add freezing, drying, salting, or brining inventories that did not occur, and shall not average mutually exclusive routes into one product unless a documented sequential route actually uses them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crabs-frozen-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21251, Crabs, frozen, dried, salted or in brine (`unsd-cpc-3-0`) |
| covered_products | Uncooked crabs, whether in shell or not, preserved by freezing, drying, dry-salting, or brine |
| excluded_products | Live, fresh, or chilled crabs; cooked, smoked, canned, seasoned, or otherwise processed crab products; lobsters, shrimps, prawns, and other non-crab crustaceans |
| representative_product | Packaged uncooked crab preserved by one declared route and ready to leave the preserving facility |
| production_route | Raw-crab receipt and preparation; one declared preservation route; route-appropriate storage; packaging and factory-gate dispatch |
| market_state | Frozen, dried, dry-salted, or in brine; shell state and preservation route declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of preserved uncooked crab at the preserving facility gate |
| How much | 1 kg net mass of the declared crab product |
| How well | Conforms to the declared preservation route, shell state, product specification, and applicable food-safety controls |
| How long or cycle | One production lot through factory-gate release; storage duration declared |
| reference_flow_link | The reference product flow below realizes the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Crabs, frozen, dried, salted or in brine `43cd42a0-2692-4f75-b26d-223ae1ddc8f3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | preservation route; crab species or commercial grouping; shell state; raw/uncooked state; origin and upstream dataset reference; incoming state; glaze applied and glaze mass if any; brine present and brine formulation/mass if any; legal net-mass convention; product moisture or salt specification where relevant; storage temperature and duration; packaging format; facility, geography, and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all results to 1 kg measured net mass of the declared crab product at factory-gate release. Exclude packaging. Record glaze and free covering brine separately and disclose whether either is included in the legally declared net quantity. |
| `route_mass_accounting` | Crab and preservation media | Mass | kg | Record incoming crab, route product, glaze, salt, added water or brine, residuals, and wastewater as separate measured or calculated masses; do not infer crab mass from gross packaged mass. |
| `energy_units` | Electricity and thermal energy | Energy | kWh and MJ | Keep metered electricity and fuel or thermal energy distinct. Document conversions and lower/higher heating-value basis where fuels are converted to MJ. |
| `refrigerant_balance` | Refrigeration systems | Mass | kg | Calculate refrigerant loss from documented charge, top-up, recovery, and closing inventory records; do not equate electricity use with refrigerant emissions. |

## 5. System Boundary

The foreground begins when raw or previously chilled/frozen crab and auxiliary materials are accepted by the preserving facility. It ends when the declared preserved crab is packaged and released at the factory gate. Include preparation, the actual preservation route, route-appropriate storage, packaging, water and ice, salt or brine ingredients, electricity and thermal energy, refrigerant losses, product loss, residues, wastewater, and on-site treatment directly attributable to the lot. Upstream production and transport of crab and other product inputs require linked datasets. Distribution, retail, use, and end-of-life after the factory gate are outside this foreground.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crab received at the preserving facility, with species/grouping, shell state, raw or previously frozen/chilled condition, supplier/landing origin, receipt mass, receipt temperature, and upstream dataset reference declared |
| starting_condition_role | Foreground entry condition for preservation; upstream capture/aquaculture, landing, and inbound transport remain represented by linked upstream datasets |
| product_classification_scope | Uncooked crabs in CPC 3.0 subclass 21251 and the semantic scope stated in this PCR |
| recursive_input_rule | If a received input is already a product in this PCR category, record it once as an upstream product input with its preservation state and upstream dataset; do not recreate its prior preservation inventory in the current foreground |
| upstream_dataset_requirement | Require traceable upstream datasets for crab and material or energy inputs; disclose substitutions, geography, time period, technology, and unresolved gaps |
| disclosure | Declare actual route sequence, shell state, incoming and final product states, yield, glaze/brine treatment, storage conditions and duration, packaging, excluded operations, allocation, data gaps, and provisional estimates |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_facility_gate` | All datasets | Include all attributable foreground operations from receipt through packaged factory-gate release and link upstream datasets for crab and other product inputs. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_route_exclusivity` | Preservation route | Include only the actual declared route steps; do not combine mutually exclusive freezing, drying, dry-salting, and brining inventories without a documented sequential route. | `codex-cxc-52-2003` |
| `sb_losses_and_controls` | All included processes | Include product losses, residues, wastewater, on-site treatment, route-control energy, and measured refrigerant losses when they occur. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_food_safety_records` | Preservation and storage | Retain route-specific time, temperature, salt/brine concentration, drying, hygiene, and corrective-action records required by the facility HACCP or equivalent food-safety plan. | `codex-cxc-52-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | Raw-crab receipt and preparation | required | Always; include only preparation actually performed | Establish accepted input, removal of non-product material, washing and chilling records | kg prepared crab output |
| `route_preservation` | Declared preservation route | required | Exactly one principal route: freezing, drying, dry-salting, or brining; add sequential steps only when actually used | Produce the declared preserved state | kg preserved crab output |
| `route_storage` | Route-appropriate product storage | required | Frozen storage for frozen product; controlled dry or chilled storage as required by the declared dried, salted, or brined product | Maintain declared state until packaging/release | kg stored preserved crab output and storage duration |
| `packaging_dispatch` | Packaging and factory-gate release | required | Always | Package, label, weigh, and release reference product | 1 kg net reference product |

### Process: Raw-crab receipt and preparation (`receipt_preparation`)

#### Inputs

##### Product flows

###### Received crab (`received_crab`)

Record supplier or landing mass and the declared incoming state as the upstream product input.

- Selected flow: Crabs, raw or previously chilled/frozen
- Flow property / unit: Mass / kg
- Amount rule: measured accepted lot mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`
- Sources: `unsd-cpc-3-0`

###### Preparation water (`preparation_water`)

Record potable water crossing the process boundary for washing or preparation.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured or allocated meter volume converted using documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional water-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg prepared crab output
  - Basis: per kg prepared crab output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation ice (`preparation_ice`)

Record purchased or on-site produced ice used to hold product condition.

- Selected flow: Ice
- Flow property / unit: Mass / kg
- Amount rule: measured issue or production mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional ice-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg prepared crab output
  - Basis: per kg prepared crab output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared crab (`prepared_crab`)

Calculate prepared crab mass from measured batch outputs before preservation.

- Selected flow: Prepared uncooked crab
- Flow property / unit: Mass / kg
- Amount rule: measured output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`

##### Waste flows

###### Preparation residuals (`preparation_residuals`)

Record shells, damaged product, rejected material, and other residuals separately by destination and waste/co-product status.

- Selected flow: Crab preparation residuals
- Flow property / unit: Mass / kg
- Amount rule: measured residual mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_wastewater`

###### Preparation wastewater (`preparation_wastewater`)

Record discharged water and its treatment destination; characterize relevant load where monitored.

- Selected flow: Wastewater from seafood preparation
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or documented water-balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals_wastewater`

##### Elementary flows

### Process: Declared preservation route (`route_preservation`)

#### Inputs

##### Product flows

###### Prepared crab input (`preservation_crab_input`)

Carry the measured prepared crab into the declared route without duplicating upstream preparation.

- Selected flow: Prepared uncooked crab
- Flow property / unit: Mass / kg
- Amount rule: transferred batch mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg preserved crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`

###### Salt input (`preservation_salt`)

Record food-grade salt only for dry-salted or brined routes, including salt used to prepare brine.

- Selected flow: Sodium chloride, food grade
- Flow property / unit: Mass / kg
- Amount rule: measured salt issued minus documented recovered unused salt; zero for routes without salt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_materials_controls`
- Sources: `codex-cxc-52-2003`
- Range: Provisional salt-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg preserved crab output
  - Basis: per kg preserved crab output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation water (`preservation_water`)

Record water used for brine, glazing, or route cleaning separately by purpose; zero where absent.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated from batch recipe and meters
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_materials_controls`
- Sources: `codex-cxc-52-2003`

###### Preservation electricity (`preservation_electricity`)

Record route equipment electricity, including freezing or drying auxiliaries actually used.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered or documented equipment allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional electricity-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kWh/kg preserved crab output
  - Basis: per kg preserved crab output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation thermal energy (`preservation_thermal_energy`)

Record fuel or supplied heat for drying or other actual route heating; zero when absent.

- Selected flow: Thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: metered heat or fuel quantity converted with documented heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional thermal-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg preserved crab output
  - Basis: per kg preserved crab output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved crab (`preserved_crab`)

Record output after the declared route and keep glaze, free brine, moisture, and salt accounting explicit.

- Selected flow: Crabs, frozen, dried, salted or in brine
- Flow property / unit: Mass / kg
- Amount rule: measured preserved-product mass before storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Preservation residuals and wastewater (`preservation_residuals_wastewater`)

Record rejected crab, spent brine or salt, cleaning wastewater, and route residues separately by material and destination in the foreground records.

- Selected flow: Preservation residuals and wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge and residual mass, disaggregated in source records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg preserved crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_wastewater`
- Range: Provisional combined discharge QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg/kg preserved crab output
  - Basis: per kg preserved crab output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Route-appropriate product storage (`route_storage`)

#### Inputs

##### Product flows

###### Preserved crab entering storage (`storage_crab_input`)

Record preserved crab transferred to route-appropriate storage.

- Selected flow: Crabs, frozen, dried, salted or in brine
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg stored preserved crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`

###### Storage electricity (`storage_electricity`)

Record electricity allocated from metered storage energy using occupancy, mass-time, or another disclosed causal driver.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered storage electricity allocated by documented mass-time or causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stored product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigeration`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stored preserved crab (`stored_preserved_crab`)

Record release mass after route-appropriate storage and separately record storage losses.

- Selected flow: Crabs, frozen, dried, salted or in brine
- Flow property / unit: Mass / kg
- Amount rule: measured storage-release mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`

##### Waste flows

##### Elementary flows

###### Refrigerant loss (`refrigerant_loss`)

Record refrigerant species and calculated loss only for equipment serving the included route or storage.

- Selected flow: Refrigerant emission, species-specific
- Flow property / unit: Mass / kg
- Amount rule: documented refrigerant balance allocated by disclosed causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stored product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigeration`

### Process: Packaging and factory-gate release (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Stored crab input (`packaging_crab_input`)

Record the preserved product transferred into final packaging.

- Selected flow: Crabs, frozen, dried, salted or in brine
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass`

###### Packaging materials (`packaging_materials`)

Record each primary, secondary, and tertiary packaging material separately in source records.

- Selected flow: Packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: measured issue minus returned unused material, disaggregated by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net reference product
  - Basis: per kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Factory-gate reference product (`reference_product_output`)

This is the sole quantitative reference output; packaging is excluded from its net mass.

- Selected flow: Crabs, frozen, dried, salted or in brine `43cd42a0-2692-4f75-b26d-223ae1ddc8f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg measured net product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging waste (`packaging_waste`)

Record trim, rejects, and damaged packaging separately by material and destination.

- Selected flow: Packaging waste, material-specific
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | Shared processes and mutually exclusive routes | Prefer process subdivision and route-specific metering. Do not allocate a blended facility inventory while separable route records are available. | `eu-pef-2021-2279` |
| `alloc_residual_status` | Shells, rejected crab, spent salt/brine, and other outputs | Classify each output as product, co-product, recyclable material, or waste using documented ownership, intended use, treatment, and economic value. Waste treatment burdens remain with the process that generates the waste. | `eu-pef-2021-2279` |
| `alloc_fallback` | Unavoidable multi-output process | After subdivision and other justified avoidance are exhausted, use a documented physical causal relation; if none can be justified, use economic allocation with contemporaneous prices and sensitivity analysis. | `eu-pef-2021-2279` |
| `alloc_disclosure` | All allocated inventories | Report allocation driver, quantities, prices or physical parameters, period, resulting factors, treatment of zero-value outputs, and sensitivity result. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass` | `receipt_preparation`; `route_preservation`; `route_storage`; `packaging_dispatch` | Crab inputs, transfers, outputs, glaze/free-brine mass, and losses | Scale tickets and batch records | batch_id; route; species/grouping; shell_state; incoming_state; gross_mass; tare; net_crab_mass; glaze_mass; free_brine_mass; output_mass; timestamp; scale_id | Calibrated scales and reconciled batch records | kg | Each lot and transfer | Representative continuous 12-month period or complete seasonal campaign | All facilities and lines in scope | Sum by homogeneous route and normalize to released net reference-product mass | Calibration certificates, signed batch records, and reconciliation |
| `cp_utilities` | `receipt_preparation`; `route_preservation` | Water, ice, electricity, fuel, and supplied heat | Meter, invoice, and equipment log | meter_id; opening; closing; unit; period; batch_id; equipment; runtime; allocation_driver; heating_value_basis | Submeter first; otherwise documented causal allocation from facility meters | kg; m3; kWh; MJ; fuel unit | Per batch where metered, otherwise at least monthly | Same representative period as production | All included equipment | Convert units explicitly, allocate by causal driver, and normalize to process output | Meter calibration, invoices, runtime logs, and allocation workbook |
| `cp_route_materials_controls` | `route_preservation` | Salt, brine, glaze, route time/temperature, drying, and concentration controls | Recipe, issue, sensor, and HACCP records | route; salt_mass; water_mass; brine_mass; concentration; glaze_mass; start_time; end_time; temperature_series; drying_condition; corrective_action | Weigh ingredients and retain validated control records for the actual route | kg; concentration unit; °C; h | Each batch | Complete study period | Each route and line | Keep routes separate; calculate recipe inputs and summarize validated controls by batch | Calibrated instruments, approved recipe, HACCP verification, and corrective-action log |
| `cp_residuals_wastewater` | `receipt_preparation`; `route_preservation` | Residuals, rejects, spent brine/salt, wastewater, and treatment | Weights, discharge meter, manifests, and analyses | stream_id; material; mass_or_volume; destination; waste_or_coproduct_status; treatment; water_quality_parameter; result; period | Direct weighing/metering; documented water balance only where direct measurement is unavailable | kg; m3; parameter-specific | Each batch or shipment; wastewater at least monthly | Same representative period as production | All included discharge points | Sum by stream and destination; normalize to process output | Waste manifests, meter checks, laboratory reports, and balance reconciliation |
| `cp_storage_refrigeration` | `route_storage` | Storage energy, duration, conditions, refrigerant charge/top-up/recovery/loss | Meter, warehouse, temperature, and maintenance records | storage_zone; product_mass; entry_time; exit_time; temperature_series; electricity; refrigerant_species; opening_charge; top_up; recovered; closing_charge; service_event | Meter storage energy; calculate mass-time; reconcile refrigerant balance | kWh; kg; kg·day; °C | Continuous temperature; monthly energy; every service event | Same representative period as production | Every included storage zone and refrigeration system | Allocate energy and refrigerant balance by disclosed causal driver, preferably mass-time and equipment service | Meter checks, temperature logs, inventory records, and service certificates |
| `cp_packaging` | `packaging_dispatch` | Packaging inputs and packaging waste | Bill of materials, issue, return, and waste records | material_id; material_type; issued_mass; returned_mass; packed_units; net_product_mass; waste_mass; recycled_content | Reconcile material issues and returns by packaging format | kg | Each format and production period | Same representative period as production | All packaging lines in scope | Net used packaging and waste by material per kg net reference product | Supplier specification, inventory reconciliation, and scale checks |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | Every inventory row | normalized amount = attributable row amount / released net reference-product mass | Attributable row quantity; released net product kg | Row amount per 1 kg reference product |  |
| `calc_route_yield` | Each declared route | route yield = released net reference-product mass / accepted crab input mass; also report intermediate preparation and preservation yields | Accepted crab; prepared crab; preserved crab; stored crab; released net product | Route and stage yields | `codex-cxc-52-2003` |
| `calc_water_balance` | Preparation and preservation | wastewater estimate = metered water and ice inputs + water in materials - water retained in product - measured evaporation - other documented outputs; use only when discharge is not directly metered | Water, ice, brine, product moisture, evaporation, outputs | Calculated wastewater mass |  |
| `calc_refrigerant_balance` | Included refrigeration | loss = opening charge + top-ups - recovered refrigerant - closing charge, bounded at zero and reconciled to service records before allocation | Species-specific charge, top-up, recovery, closing inventory | Species-specific refrigerant loss |  |
| `calc_allocation` | Unavoidable shared or multi-output inventory | Apply `alloc_subdivision_first`, then the documented physical causal factor, or economic factor only when physical causality is not justified; factors shall sum to one | Shared inventory; output quantities; causal parameter or prices | Allocated inventory and factors | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and route | Preserve lot, species/grouping, shell state, actual route, incoming state, origin, and upstream dataset links. | Traceability and supplier records; `unsd-cpc-3-0` |
| `dq_measurement` | Mass, utilities, temperature, concentration, and refrigerant | Use calibrated or verified instruments; retain units, conversion factors, missing-data treatment, and meter allocation. | Calibration, meter, recipe, laboratory, and maintenance records |
| `dq_temporal` | Foreground activity | Cover a representative continuous 12 months or a complete seasonal campaign and disclose abnormal or excluded periods. | Production calendar and completeness report; `eu-pef-2021-2279` |
| `dq_completeness` | All included processes | Reconcile crab mass and account for water, ice, salt/brine, energy, packaging, residuals, wastewater, storage, and refrigerant losses where applicable. | Mass/utility balances and gap register; `eu-pef-2021-2279` |
| `dq_route_separation` | Multi-route facilities | Keep route and technology records separate or document causal allocation; never use an unexplained blended average. | Route production records and allocation workbook |
| `dq_estimate_replacement` | Provisional QA ranges | Treat every `reasoned_estimate` range only as a screening flag, not a default inventory value; replace or justify it with reviewed route/site evidence before activation. | Review record and replacement evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | Reference product | Confirm CPC scope, uncooked crab identity, shell state, actual preservation route, and all required qualifiers; reject excluded cooked, smoked, canned, or merely fresh/chilled products. | `unsd-cpc-3-0` |
| `val_reference_mass` | Reference flow | Confirm exactly one quantitative reference output of 1 kg net product mass using the specified product-flow, Mass-property, and unit-group UUIDs; packaging shall be excluded and glaze/free-brine treatment disclosed. |  |
| `val_route` | Process map and inventory | Confirm the actual route is declared and only applicable route operations, materials, controls, storage, and emissions are included. | `codex-cxc-52-2003` |
| `val_mass_balance` | Each process and lot | Reconcile input, product output, retained water/salt, residual, wastewater, evaporation, and storage loss; investigate material imbalance rather than forcing closure. |  |
| `val_inventory_completeness` | Foreground boundary | Confirm all four process roles are represented and applicable water, ice, salt/brine, energy, packaging, wastewater, residual, on-site treatment, and refrigerant records are present or explicitly zero/not applicable. | `eu-pef-2021-2279` |
| `val_food_safety_controls` | Preservation and storage | Confirm route-specific time, temperature, concentration, drying, hygiene, monitoring, and corrective-action evidence is retained; this PCR does not replace a facility-specific HACCP plan. | `codex-cxc-52-2003` |
| `val_allocation` | Shared and multi-output processes | Confirm subdivision was attempted first and any remaining physical or economic allocation is documented with factors summing to one and sensitivity where required. | `eu-pef-2021-2279` |
| `val_provisional_ranges` | All reasoned estimates | Flag values outside provisional QA ranges and all uses of a provisional range as a default; a flag requires review and does not by itself prove non-conformance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for preserved uncooked crab at the preserving facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Route-, geography-, technology-, and time-representative process or lifecycle models that preserve the declared qualifiers and boundary |
| excluded_use | Live/fresh/chilled, cooked, smoked, canned, or other crab products; another preservation route; undisclosed route blends; geographies or technologies without representativeness review |
| required_metadata | PCR id/version; product and route qualifiers; facility/geography; reference period; upstream dataset links; process map; storage duration/conditions; packaging; allocation; data-quality assessment |
| required_quality_disclosure | Primary-data coverage; mass and utility reconciliation; missing data; provisional estimates; instrument quality; allocation and sensitivity; excluded operations; route and seasonal representativeness |
| update_trigger | Material change in route, recipe, equipment, energy supply, refrigerant, yield, packaging, supplier/origin, allocation, regulation, evidence, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21251 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Product-category scope, inclusions, and exclusions |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/4/a1553e/a1553e00.pdf (retrieved 2026-08-11) | Facility process decomposition; freezing, salting/brining, drying, storage, packaging, hygiene, monitoring, and food-safety control records |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Boundary completeness, company-specific data quality, multifunctionality hierarchy, allocation disclosure, and review requirements |
