---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cold-water-shrimps-and-prawns-frozen-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cold-water shrimps and prawns, frozen, dried, salted or in brine

## 1. Scope and Applicability

This PCR supports gate-to-gate foreground data packages for cold-water shrimps and prawns preserved by one declared route: freezing, drying, salting, or brining. It covers receipt of raw shrimp at the processing site, preparation, the route-specific preservation operation, packaging, and on-site storage through the packaged-product factory gate. Capture or farming, feed, vessels, landing, and inbound transport are represented by upstream datasets and are not re-inventoried here.

Each data package shall model exactly one actual preservation route. Route mixtures or portfolio averages are outside this PCR unless the study defines, weights, and discloses a separate scenario. Canned, fermented, breaded, battered, ready-meal, and warm-water shrimp products are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cold-water-shrimps-and-prawns-frozen-dried-salted-or-in-brine |
| classification_refs | UNSD CPC 3.0: 21255, exact classification reference |
| covered_products | Cold-water shrimps and prawns sold frozen, dried, salted, or in brine; raw, partially cooked, or cooked only when declared |
| excluded_products | Live or fresh unpreserved shrimp; warm-water shrimp; canned, fermented, smoked-only, breaded, battered, or composite prepared foods |
| representative_product | Packaged cold-water shrimp or prawn preserved by one declared route |
| production_route | Raw shrimp receipt and preparation -> exactly one of freezing, drying, salting, or brining -> packaging and route-appropriate storage |
| market_state | Packaged preserved food at the processor factory gate; frozen, dried, salted, or brined state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Preserved cold-water shrimps or prawns delivered at the processor factory gate |
| How much | 1 kg net mass of shrimp product |
| How well | Fit for the declared market specification and preservation route, with product form and food-safety controls documented |
| How long or cycle | One production lot through factory-gate release; shelf life is disclosed but no use duration is credited |
| reference_flow_link | Net packaged-product output from `pack_store` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product mass, excluding packaging, frozen glaze, and free brine or draining liquid |
| Reference product flow | Cold-water shrimps and prawns, frozen, dried, salted or in brine `49df5af0-c626-4914-acf6-3ed9640172e9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | preservation route (exactly one of frozen, dried, salted, brined); species or commercial designation; raw/partially cooked/cooked state; peeled/unpeeled and head-on/head-off form; glaze presence and deglazing basis for frozen product; salt or brine formulation for salted/brined product; drying endpoint or moisture specification for dried product; net-mass method; storage temperature and duration; geographic and temporal production scope |

When constructing a foreground data package, every required qualifier shall be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1 kg net shrimp product; exclude packaging, glaze, and free brine/draining liquid from reference mass. |
| `wet_mass_balance` | Each foreground process | Mass | kg | Record input and output wet masses on one consistent weighing basis and separately record product, removed solids, wastewater, retained salt or water, and evaporated water where applicable. |
| `energy_units` | Electricity and thermal energy | Energy | kWh for electricity; MJ for fuels or heat | Preserve measured units and conversion factors; do not combine electricity and thermal energy without an explicit conversion and separate source datasets. |
| `route_conditioning` | Route-specific quantities | Route-declared property | declared unit | Apply freezing, drying, salt, brine, glaze, cold-storage, and drying-energy rows only when the corresponding route or operation is declared. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw cold-water shrimp or prawn received at the processing site, with supplier, origin, product form, temperature, and received mass recorded |
| starting_condition_role | Upstream product input to the foreground processing system |
| product_classification_scope | Preserved cold-water shrimp and prawn products semantically matching CPC 3.0 code 21255 |
| recursive_input_rule | If an input is already a preserved product in this same PCR category, record it once as an upstream product input with its own dataset and do not recursively reconstruct its preservation processes. |
| upstream_dataset_requirement | Require supplier-, fishery-, aquaculture-, energy-, water-, salt-, packaging-, refrigerant-, transport-, and waste-treatment datasets as applicable; disclose unresolved proxies. |
| disclosure | Declare preservation route, origin and production system of raw shrimp, preparation/cooking state, product form, yield, storage regime, allocation, excluded operations, data period, and all proxies. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | All datasets | Include receipt, preparation, actual route preservation, packaging, on-site utilities, cleaning, wastewater and solid-residue handling, and storage through factory-gate release; represent pre-receipt production and post-gate distribution with linked datasets when in study scope. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_route_gate` | Preservation | Select exactly one actual route and include only its operations and controls; do not unconditionally mix freezing, drying, salting, or brining. | `codex-cxc-52-2003`; `codex-cxs-92-1981` |
| `boundary_food_safety` | Water, handling, preservation, and storage | Retain records demonstrating route-appropriate hygiene, potable water or clean seawater where it contacts product, time-temperature or drying/salt controls, and release disposition; these controls do not replace measured LCI quantities. | `codex-cxc-52-2003`; `codex-cxs-92-1981` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare` | Receive and prepare raw shrimp | required | All routes; include only actual washing, grading, peeling, heading, deveining, cooking, and cooling operations | Establish raw input and prepared-product mass balance | kg prepared shrimp output |
| `preserve_route` | Route-specific preservation | required | Exactly one of freezing, drying, salting, or brining; optional glazing or cooking only if performed | Apply preservation and route controls without route averaging | kg preserved shrimp output |
| `pack_store` | Package and store for release | required | Packaging and route-appropriate on-site storage until factory-gate release | Produce the reference product and record packaging/cold or dry storage | 1 kg net reference product |

### Process: Receive and prepare raw shrimp (`receive_prepare`)

#### Inputs

##### Product flows

###### Raw cold-water shrimp received (`raw_shrimp_input`)

This product input crosses the foreground boundary at processor receipt and establishes lot identity and mass.

- Selected flow: Raw cold-water shrimp or prawn (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Weighed received mass by lot and product form
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_preparation`
- Sources: `codex-cxc-52-2003`

###### Preparation water and ice (`prep_water_ice`)

Record water and ice that cross the boundary to contact, wash, cool, or otherwise support the lot.

- Selected flow: Potable process water and/or clean ice (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Metered or purchase-balanced water and ice contacting or supporting the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_preparation`
- Sources: `codex-cxc-52-2003`; `codex-cxs-92-1981`
- Range: Provisional water-and-ice QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared shrimp output
  - Basis: broad replaceable screening interval
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation energy (`prep_energy`)

Record electricity and thermal energy attributable to the actual preparation operations.

- Selected flow: Electricity and/or thermal energy, recorded separately (UUIDs pending review)
- Flow property / unit: Energy / kWh electricity and MJ thermal energy
- Amount rule: Metered, invoiced, or equipment-runtime-derived energy for preparation and any declared cooking/cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_preparation`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared shrimp intermediate (`prepared_shrimp_output`)

This intermediate transfers the measured prepared mass to the declared preservation route.

- Selected flow: Prepared cold-water shrimp intermediate (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass transferred to preservation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_preparation`

##### Waste flows

###### Preparation residues (`prep_residues`)

Record separated solids by composition and actual economic or waste disposition.

- Selected flow: Heads, shells, rejected shrimp, and other separated solids by actual disposition (UUIDs pending review)
- Flow property / unit: Mass / kg
- Amount rule: Weigh or mass-balance each materially different residue and record sale, recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_preparation`

###### Preparation wastewater (`prep_wastewater`)

Record liquid discharge crossing to on-site or external treatment with its measured quantity and destination.

- Selected flow: Process wastewater by treatment route (UUID pending review)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered discharge or water balance, with treatment destination and relevant load data retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_and_preparation`

##### Elementary flows

### Process: Route-specific preservation (`preserve_route`)

#### Inputs

##### Product flows

###### Prepared shrimp supplied to preservation (`prepared_shrimp_input`)

This input is the measured link from preparation into the selected preservation route.

- Selected flow: Prepared cold-water shrimp intermediate (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass from `receive_prepare`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg preserved shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`

###### Preservation electricity and heat (`preservation_energy`)

Record only electricity and heat used by the declared route and keep energy carriers separate.

- Selected flow: Electricity, fuel, steam, or heat used by the declared route, kept as separate flows (UUIDs pending review)
- Flow property / unit: Energy / kWh electricity and MJ thermal energy
- Amount rule: Metered or equipment-runtime-derived energy for freezing, drying, brine preparation, pumping, heating, cooling, and route-specific storage within this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`
- Range: Provisional route-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/kg preserved shrimp output for electricity; thermal energy remains separately recorded in MJ
  - Basis: broad replaceable screening interval; never a route-average default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route water, ice, salt, and brine ingredients (`preservation_materials`)

Record each material actually entering the declared preservation operation, including recirculation and purge accounting.

- Selected flow: Water, ice, food-grade salt, and other declared brine ingredients, each recorded separately (UUIDs pending review)
- Flow property / unit: Mass / kg
- Amount rule: Record only materials actually used by the declared route; distinguish retained material, recirculation, purge, and discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg preserved shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`
- Sources: `codex-cxc-52-2003`; `codex-cxs-92-1981`
- Range: Provisional salt-input QA screen for salted or brined routes
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg salt/kg preserved shrimp output
  - Basis: broad replaceable screening interval; not applicable to routes without salt addition
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved shrimp intermediate (`preserved_shrimp_output`)

This output carries the route-specific preserved mass from its verified endpoint to final packing.

- Selected flow: Frozen, dried, salted, or brined cold-water shrimp intermediate matching the declared route (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Weighed output after route endpoint and before final packaging; separately record glaze or free brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: quantitative reference of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`
- Sources: `codex-cxc-52-2003`; `codex-cxs-92-1981`

##### Waste flows

###### Preservation wastewater and spent brine (`preservation_wastewater`)

Record route-specific liquid wastes and their treatment destinations without mixing incompatible discharge types.

- Selected flow: Wastewater, thaw/cooling water, spent brine, or cleaning discharge by actual route (UUIDs pending review)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered or balanced quantity with treatment route; characterize salt or relevant load when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg preserved shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`

###### Preservation solids and product loss (`preservation_residues`)

Record solids and product losses that leave preservation by their actual recovery or treatment destination.

- Selected flow: Route-specific rejects, fines, breakage, or other product loss by disposition (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balanced residue, with destination recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg preserved shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_route`

##### Elementary flows

###### Refrigerant released (`preservation_refrigerant_release`)

Record species-specific refrigerant loss to air attributable to preservation equipment when refrigeration is used.

- Selected flow: Refrigerant species released to air (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Species-specific annual recharge or leak record allocated to the equipment load and lot; zero only with documented no-refrigeration route or verified no loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg preserved shrimp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_route`

### Process: Package and store for release (`pack_store`)

#### Inputs

##### Product flows

###### Preserved shrimp supplied to packing (`preserved_shrimp_input`)

This input is the measured route-specific intermediate entering final packing and storage.

- Selected flow: Preserved cold-water shrimp intermediate matching the declared route (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass from `preserve_route`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`

###### Primary and secondary packaging (`packaging_input`)

Record each packaging component crossing into the packaged-product system by material and mass.

- Selected flow: Each packaging material and component, recorded separately (UUIDs pending review)
- Flow property / unit: Mass / kg
- Amount rule: Bill-of-materials or purchase-and-production balance, excluding reusable assets unless their use share is modelled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`
- Range: Provisional packaging QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg packaging/kg net reference product
  - Basis: broad replaceable screening interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packing and storage electricity (`packing_storage_energy`)

Record electricity for packing and on-site storage and allocate shared storage by load and duration.

- Selected flow: Electricity for packing and route-appropriate cold, dry, or ambient storage (UUID pending review)
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity allocated by equipment load, storage volume or mass, and recorded storage duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_storage`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net preserved cold-water shrimp product (`reference_product_output`)

This factory-gate output realizes the 1 kg net-mass reference flow after packaging and free liquid are excluded.

- Selected flow: Cold-water shrimps and prawns, frozen, dried, salted or in brine `49df5af0-c626-4914-acf6-3ed9640172e9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed at 1 kg net product, excluding packaging, glaze, and free brine/draining liquid
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_and_storage`
- Sources: `codex-cxs-92-1981`

##### Waste flows

###### Packaging and product rejects (`packing_waste`)

Record packaging scrap and rejected food separately by material and actual destination.

- Selected flow: Packaging scrap and rejected product by material and destination (UUIDs pending review)
- Flow property / unit: Mass / kg
- Amount rule: Weighed or production-balanced quantity; keep food and packaging waste separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`

##### Elementary flows

###### Storage refrigerant released (`storage_refrigerant_release`)

Record species-specific refrigerant loss to air attributable to on-site storage equipment when refrigeration is used.

- Selected flow: Refrigerant species released to air (UUID pending review)
- Flow property / unit: Mass / kg
- Amount rule: Species-specific recharge or leak record allocated by load and storage duration; record zero only when refrigeration is not used or no loss is verified
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_storage`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output preparation and preservation | First subdivide metered processes or use a physically causal assignment so separately measured product lines and routes receive their own inputs and emissions. | `eu-pef-2021-2279` |
| `allocation_residues` | Heads, shells, undersized shrimp, and other recovered materials | Classify each output by actual disposition. Waste receives its treatment burden and no avoided-product credit inside the foreground inventory; a marketable co-product receives an explicit allocation after subdivision is exhausted. | `eu-pef-2021-2279` |
| `allocation_fallback` | Unavoidable joint inputs and emissions | Prefer a documented physical relationship such as wet mass, dry matter, or another causal parameter. If no defensible physical relation exists, use economic allocation with contemporaneous prices and disclose shares, price period, sensitivity, and excluded flows. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_and_preparation` | `receive_prepare` | Lot identity, received/prepared mass, water, ice, energy, residues, wastewater | Weigh tickets, meters, invoices, batch and sanitation records | lot_id; species; origin; raw_or_cooked_state; product_form; receipt_temperature; received_mass; prepared_mass; water_mass; ice_mass; electricity; thermal_energy; residue_mass_by_destination; wastewater_quantity | Calibrated scales and meters; reconcile purchases and batch logs | kg; m3; kWh; MJ; degC | Every lot for mass and identity; meter/invoice interval allocated to lots | Representative operating period, normally 12 months, with seasonality disclosed | All foreground lines and utilities serving the product | Sum by process and route, allocate shared utilities by measured driver, normalize to prepared output | Calibration, invoices, lot traceability, meter coverage, mass-balance closure |
| `cp_preservation_route` | `preserve_route` | Route materials, energy, controls, output, losses, wastewater, refrigerant | Batch recipes, control logs, meters, scales, maintenance and discharge records | route; input_mass; output_mass; water; ice; salt; brine_ingredients; electricity; fuel_or_heat; time_temperature_or_drying_endpoint; glaze_mass; spent_brine; wastewater; solids; refrigerant_species; refrigerant_recharge | Record actual route per lot; meter or calculate from documented equipment runtime; reconcile material and refrigerant balances | kg; m3; kWh; MJ; degC; h | Every lot for route and mass; continuous or batch controls; annual refrigerant reconciliation | Representative operating period, normally 12 months, stratified by route | Each route and technology line; no cross-route averaging | Aggregate within one declared route only; normalize to preserved output | Route logs, calibrated controls, recipes, invoices, maintenance logs, release records |
| `cp_packaging_and_storage` | `pack_store` | Net mass, glaze/free liquid, packaging, energy, duration, rejects, refrigerant | Pack weights, BOM, meters, warehouse and maintenance logs | lot_id; gross_mass; packaging_mass; glaze_or_free_liquid_mass; net_product_mass; packaging_by_material; electricity; storage_temperature; storage_duration; rejects; refrigerant_species; refrigerant_recharge | Determine net mass by documented deglazing or draining method; reconcile packaging and warehouse energy | kg; kWh; degC; day | Every lot for net mass and BOM; continuous temperature; invoice/meter interval for energy | Representative operating period, normally 12 months | All packaging lines and on-site storage used before release | Normalize packaging and rejects to net product; allocate storage energy and leakage by load and duration | Scale calibration, BOM, deglazing/draining method, temperature logs, meter coverage, maintenance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Reference product | net product mass = gross packed mass - packaging mass - glaze mass - free brine/draining liquid mass | gross_mass; packaging_mass; glaze_or_free_liquid_mass | net_product_mass | `codex-cxs-92-1981` |
| `calc_process_yield` | `receive_prepare`; `preserve_route` | yield = measured product output / measured product input; report separately by route and product form | input_mass; output_mass | process_yield |  |
| `calc_inventory_normalization` | All flows | normalized amount = attributable flow quantity / net reference-product mass | attributable flow quantity; net_product_mass | amount per 1 kg reference flow | `eu-pef-2021-2279` |
| `calc_refrigerant_release` | Refrigerated preservation and storage | species-specific release = attributable recharge or reconciled loss / net reference-product mass | refrigerant_species; recharge_or_loss; allocation_driver; net_product_mass | kg refrigerant per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Raw and final product | Retain lot, species/commercial designation, origin and production system, preservation route, product form, cooking state, and supplier-to-output traceability. | Lot and supplier records; `unsd-cpc-3-0`; `codex-cxc-52-2003` |
| `dq_mass_completeness` | All processes | Reconcile wet-mass inputs and outputs and explain material imbalance, moisture removal/addition, glaze, retained salt, wastewater, and residues. | Calibrated weights, batch balance, deglazing/draining method |
| `dq_route_separation` | Preservation | Keep route, technology, energy, material, yield, and control records separate; do not average frozen, dried, salted, and brined production. | Batch route and equipment records |
| `dq_representativeness` | Foreground dataset | Document data period, seasonal coverage, geography, technology, capacity utilization, site coverage, allocation drivers, proxies, and exclusions; justify any period shorter than a representative annual cycle. | Data inventory and quality assessment; `eu-pef-2021-2279` |
| `dq_food_safety_records` | Product-contact water and preservation controls | Retain evidence of potable water or clean seawater and route-appropriate hygiene, endpoint, temperature, drying, salt/brine, and storage controls. | HACCP/control and release records; `codex-cxc-52-2003`; `codex-cxs-92-1981` |
| `dq_estimate_replacement` | Reasoned-estimate ranges | Treat candidate ranges only as QA flags. Replace them with reviewed external evidence or foreground records before active status; explain any retained outlier rather than clipping it. | Review record and underlying primary data |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Reference product | Fail if the reference flow UUID, Mass property UUID, mass unit-group UUID, kg unit, CPC/product meaning, or canonical PCR identity differs from this PCR. | `unsd-cpc-3-0` |
| `validation_route` | Dataset scope | Fail if exactly one route is not declared, if route-inapplicable flows are included without explanation, or if multiple routes are averaged without an explicit weighted scenario. | `codex-cxc-52-2003`; `codex-cxs-92-1981` |
| `validation_reference_mass` | Reference amount | Fail if 1 kg is not net shrimp product mass or includes packaging, frozen glaze, or free brine/draining liquid. | `codex-cxs-92-1981` |
| `validation_inventory` | Foreground inventory | Fail if any required process is absent or if product inputs/outputs, water/ice, route energy/materials, packaging, residues, wastewater, storage, and refrigerant are omitted without an applicability statement. | `eu-pef-2021-2279` |
| `validation_allocation` | Multi-output processes | Fail if co-product/waste disposition or allocation method, driver, shares, price period where relevant, and sensitivity are not disclosed. | `eu-pef-2021-2279` |
| `validation_controls` | Frozen and other declared routes | For frozen product, fail if quick-freezing and -18 degC or colder storage evidence is absent; for every route, fail if applicable product-contact water, hygiene, endpoint, and storage controls are undocumented. | `codex-cxc-52-2003`; `codex-cxs-92-1981` |
| `validation_quality` | Data package | Fail if collection coverage, mass-balance closure, data period, geography, technology, site coverage, proxies, exclusions, and estimate status are not disclosed. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared preservation route |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product- and route-matched LCA process or lifecyclemodel studies with compatible reference mass, boundary, geography, technology, and period |
| excluded_use | Undeclared route mixes; substitution for fresh, warm-water, canned, breaded, fermented, or composite shrimp products; nutritional or food-safety certification |
| required_metadata | PCR id and version; product and route qualifiers; reference-flow UUID; site/geography; period; technology; product form; origin/production system; yield; allocation; source datasets; collection coverage |
| required_quality_disclosure | Mass-balance closure; meter and lot coverage; route separation; proxy and estimate list; data gaps; uncertainty/outliers; refrigerant method; excluded operations; food-safety control evidence status |
| update_trigger | Material change in route, product form, supplier/origin mix, technology, energy system, packaging, storage, allocation, regulation, source evidence, UUID identity, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure and introduction, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-11) | Classification reference and product-category identity |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-11) | Fishery-product process boundary, handling, hygiene, route controls, and records |
| `codex-cxs-92-1981` | standard | Codex Alimentarius, CXS 92-1981, Standard for Quick-Frozen Shrimps or Prawns, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B92-1981%252FCXS_092e.pdf (retrieved 2026-08-11) | Frozen-route definition, product-contact water, quick-freezing, -18 degC storage, glazing, net mass, and product description |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj | System boundary, allocation hierarchy, inventory completeness, normalization, and data-quality disclosure |
