---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-meat-whether-or-not-minced-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish meat, whether or not minced, frozen

## 1. Scope and Applicability

This PCR covers the foreground manufacture of frozen fish meat, whether minced or not, from received fish, fish portions, or fish flesh through preparation, optional mincing, freezing, optional glazing, packaging, and frozen storage to the declared processing-facility gate. The data producer shall declare species, source production system, received form and temperature state, whether the product is minced, whether glaze is present, packaging format, geography, technology, and the frozen-storage period represented.

It excludes frozen fish fillets classified separately, whole frozen fish, fish livers and roes, surimi and formulated fish preparations, cooked, smoked, dried, salted, or otherwise preserved fish, and crustacean, mollusc, or other aquatic-invertebrate products. Fishing or aquaculture, landing, and manufacture of received upstream fish inputs are represented by upstream datasets rather than silently absorbed into this foreground process.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-meat-whether-or-not-minced-frozen |
| classification_refs | CPC 3.0: 21223, Fish meat, whether or not minced, frozen (exact mapping context) |
| covered_products | Unseasoned frozen fish meat, flesh pieces, blocks, portions, or minced fish flesh that are neither fish fillets nor otherwise preserved |
| excluded_products | Frozen fish fillets; whole frozen fish; fish livers and roes; surimi or formulated preparations; cooked, smoked, dried, salted, marinated, canned, or otherwise preserved fish; crustaceans, molluscs, and other aquatic invertebrates |
| representative_product | Unseasoned frozen boneless fish flesh, minced or non-minced as declared, optionally glazed and packaged |
| production_route | Receipt of fish or fish flesh; chilled holding where used; trimming/deboning/skin removal and size reduction; optional mincing; forming or block loading where used; freezing; optional glazing; packaging; frozen storage; dispatch at the processing-facility gate |
| market_state | Frozen product at the processing-facility gate, with product form, glaze status, packaging, and storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Frozen fish meat supplied in the declared minced or non-minced form |
| How much | 1 kg net mass of frozen fish meat |
| How well | Conforming to the declared species, product form, composition, glaze status, packaging, market specification, and applicable food-safety controls |
| How long or cycle | One production lot through the declared frozen-storage period to the processing-facility dispatch gate |
| reference_flow_link | `frozen_fish_meat_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product mass, excluding transport packaging and excluding external ice glaze from fish-meat mass |
| Reference product flow | Frozen Fish `bbae8c72-d732-4f53-bdd5-aff8a0f39d48` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; wild-caught or aquaculture origin and upstream dataset; minced or non-minced form; boning and skin status; additives or ingredients, if any; glaze presence and glaze fraction; packaging format and included packaging layers; freezing technology; frozen-storage temperature-control regime and duration; production geography and period; facility-gate condition |

When constructing a foreground data package, all `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or equivalent data-package fields. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net fish-meat mass. Exclude external ice glaze and transport packaging from the fish-meat reference mass; report their masses separately. |
| `glaze_mass_separation` | Glazed product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure gross frozen mass and glaze mass with a documented method, then calculate net fish-meat mass without treating glaze as product yield. |
| `energy_consistency` | Electricity and fuels | Energy property declared by the selected exact flow | kWh, MJ, or another declared convertible energy unit | Preserve metered units and conversion factors; convert only with a disclosed factor and do not mix delivered electricity with fuel energy. |
| `storage_time_basis` | Frozen storage | Mass and elapsed time | kg and day | Record storage energy against throughput and the declared storage duration; do not compare storage results without normalizing or disclosing duration. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fish, fish portions, or fish flesh received at the processing facility, with species, origin, upstream dataset, received form, mass, temperature state, and any prior processing declared |
| starting_condition_role | Upstream product input to the foreground frozen-fish-meat manufacturing system |
| product_classification_scope | Frozen fish meat, whether minced or not; excludes separately classified frozen fillets and other preserved or formulated fish products |
| recursive_input_rule | A same-category frozen fish-meat input shall be represented by a separate upstream dataset and identified as reprocessing or blending input; its production shall not be recursively rebuilt inside this foreground system. |
| upstream_dataset_requirement | Use traceable datasets for fishing or aquaculture and any upstream slaughter, heading, filleting, deboning, or chilling already embodied in the received input; disclose exclusions and proxy use. |
| disclosure | Declare included operations, fish species and source, received condition, product form, glaze and packaging scope, freezing technology, storage period, temperature-control regime, co-products, waste routes, allocation choices, data period, geography, and omitted flows. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_facility_gate` | foreground_system | Include receipt, handling, preparation, optional mincing and forming, freezing, optional glazing, packaging, frozen storage, on-site utilities, cleaning, wastewater and residue handling, and refrigerant recharge attributable to the declared product until facility dispatch. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_cold_chain` | freezing_and_storage | Include the freezing operation and every on-site frozen holding or transfer stage needed to maintain the declared product condition; disclose storage duration and the monitored control regime. | `codex-cxc-52-2003` |
| `sb_upstream_traceability` | received_fish_inputs | Link received fish and fish-flesh inputs to upstream datasets representing their actual production and prior processing; do not substitute unreported cut-offs for missing upstream burdens. | `eu-pef-2021-2279` |
| `sb_food_safety_controls` | processing_and_storage | Retain applicable hazard-control, hygiene, time/temperature, foreign-material, packaging-integrity, and corrective-action records as foreground quality evidence. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `reception_preparation` | Receipt and preparation of fish flesh | `required` | Always | Foreground receipt, sorting, trimming, deboning, skin removal, washing where used, and mass separation | kg prepared fish flesh |
| `mincing_forming` | Mincing and forming | `conditional` | Include when the declared product is minced, comminuted, formed, or block-loaded in a separately measured step | Foreground size reduction and product forming | kg formed fish meat |
| `freezing_glazing` | Freezing and optional glazing | `required` | Always; glazing rows apply only when glaze is used | Foreground freezing, temperature control, and glaze application | kg net frozen fish meat |
| `packaging_storage` | Packaging and frozen storage | `required` | Always; packaging rows reflect the declared packaging scope | Foreground packaging, frozen storage, internal handling, and facility-gate dispatch | kg reference product |

### Process: Receipt and preparation of fish flesh (`reception_preparation`)

#### Inputs

##### Product flows

###### Received fish or fish-flesh input (`received_fish_input`)

Record every received fish input by species, origin, prior-processing state, and upstream dataset; aggregate only materially equivalent inputs.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured received mass allocated to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish-meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Range: Provisional raw-material mass-balance QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg received fish or fish flesh/kg net reference product
  - Basis: per 1 kg net frozen fish-meat reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water and ice (`preparation_water_ice`)

Record metered or otherwise reconciled water and ice entering washing, chilling, and preparation; do not count external ice glaze here.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured water plus purchased or manufactured ice assigned to the preparation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish flesh
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice`
- Range: Provisional preparation water-and-ice QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water and ice/kg prepared fish flesh
  - Basis: per 1 kg prepared fish flesh
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared fish flesh (`prepared_fish_flesh`)

Calculate prepared flesh from measured output mass before optional mincing or freezing.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured prepared fish-flesh mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Range: Provisional prepared-yield QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 1
  - Unit: kg prepared fish flesh/kg received fish or fish flesh
  - Basis: mass ratio to received fish or fish-flesh input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Trimmings, skin, bone, rejects, and other separated material (`preparation_residues`)

Separate saleable co-products from waste and record each destination; do not combine wastewater with solid residues.

- Selected flow: Exact Tiangong waste or co-product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured separated material by destination and regulatory status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg received fish or fish flesh
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass`
- Range: Provisional residue mass-balance QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg separated material/kg received fish or fish flesh
  - Basis: mass ratio to received fish or fish-flesh input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Mincing and forming (`mincing_forming`)

#### Inputs

##### Product flows

###### Prepared fish flesh for mincing or forming (`mincing_input`)

Record prepared fish flesh transferred into the conditional mincing or forming operation.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mincing or forming lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Electricity for mincing and forming (`mincing_electricity`)

Record sub-metered electricity or calculate it from reconciled equipment runtime and power data.

- Selected flow: Exact Tiangong electricity product flow pending geography review
- Flow property / unit: Energy / kWh
- Amount rule: measured or calculated electricity use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg formed fish meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Range: Provisional mincing-and-forming electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg formed fish meat
  - Basis: per 1 kg formed fish meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Minced or formed fish meat (`formed_fish_meat`)

Record the product mass transferred to freezing and disclose any formulation ingredients separately.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured formed fish-meat mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mincing or forming lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

### Process: Freezing and optional glazing (`freezing_glazing`)

#### Inputs

##### Product flows

###### Fish meat entering freezing (`freezing_input`)

Record prepared or formed fish meat entering the freezer by product lot.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per freezing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Electricity for freezing (`freezing_electricity`)

Record freezer, compressor, pump, fan, and attributable auxiliary electricity using sub-metering or a documented allocation from a shared meter.

- Selected flow: Exact Tiangong electricity product flow pending geography review
- Flow property / unit: Energy / kWh
- Amount rule: measured or calculated electricity use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Range: Provisional freezing electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh/kg net frozen fish meat
  - Basis: per 1 kg net frozen fish meat
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

Include only when glaze is applied; collect water supplied and determine retained glaze separately from water not retained on product.

- Selected flow: Exact Tiangong water product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured glazing water supplied and retained glaze mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish meat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice`
- Range: Provisional glazing-water QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg supplied water/kg net frozen fish meat
  - Basis: per 1 kg net frozen fish meat
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant recharge attributable to freezing (`freezing_refrigerant`)

Record refrigerant recharge by substance and calculate the portion attributable to the freezing system and declared product; do not invent a direct emission flow UUID.

- Selected flow: Exact Tiangong refrigerant product flow pending substance review
- Flow property / unit: Mass / kg
- Amount rule: calculated attributable refrigerant recharge from service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish meat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Range: Provisional refrigerant-recharge QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg refrigerant/kg net frozen fish meat
  - Basis: per 1 kg net frozen fish meat
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Net frozen fish meat (`frozen_fish_meat_reference`)

This row is the quantitative reference and records net fish-meat mass separately from glaze and packaging.

- Selected flow: Frozen Fish `bbae8c72-d732-4f53-bdd5-aff8a0f39d48`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net frozen fish meat
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Freezing rejects, drip, and non-retained glaze water (`freezing_rejects`)

Record product rejects and water losses separately by physical form and destination when records permit.

- Selected flow: Exact Tiangong waste flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured rejected material and non-retained water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish meat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_mass`
- Range: Provisional freezing-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg rejects and non-retained water/kg net frozen fish meat
  - Basis: per 1 kg net frozen fish meat
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and frozen storage (`packaging_storage`)

#### Inputs

##### Product flows

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging separately by material and include only layers inside the declared packaging scope.

- Selected flow: Exact Tiangong packaging product flows pending material review
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issued minus reconciled unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish meat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional packaging-mass QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg packaging/kg net frozen fish meat
  - Basis: per 1 kg net frozen fish meat
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for frozen storage and internal handling (`storage_electricity`)

Record cold-store and internal-handling electricity and allocate shared meters using a disclosed physical driver that includes storage duration.

- Selected flow: Exact Tiangong electricity product flow pending geography review
- Flow property / unit: Energy / kWh
- Amount rule: calculated electricity from meter data, product throughput, occupied capacity where relevant, and storage duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product for the declared frozen-storage period
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Range: Provisional frozen-storage electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh/kg reference product per declared storage cycle
  - Basis: per 1 kg reference product for the declared frozen-storage period
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Packaged frozen fish meat at dispatch (`packaged_frozen_fish_meat`)

Record the dispatched reference product and reconcile it to the quantitative-reference row without adding packaging or glaze to net fish-meat mass.

- Selected flow: Frozen Fish `bbae8c72-d732-4f53-bdd5-aff8a0f39d48`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured dispatched net fish-meat mass, normalized to 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional_foreground_processes | First avoid allocation by collecting separate process data, subdividing operations, or expanding the product system when a defensible substituted function is known. | `eu-pef-2021-2279` |
| `allocation_physical` | joint_products_and_co-products | When avoidance is not feasible, allocate inputs and outputs using a documented causal physical relationship. Mass may be used only when it represents that relationship; do not assign burdens by mass automatically. | `eu-pef-2021-2279` |
| `allocation_economic` | residual_multifunctionality | Use economic allocation only when no defensible causal physical relationship can be established; use a representative price period and report a sensitivity case for material co-products. | `eu-pef-2021-2279` |
| `allocation_waste_status` | trimmings_skin_bone_rejects_and_recovered_material | Record whether each separated material is a co-product, recyclable material, animal-feed input, treatment input, or waste under the declared jurisdiction, and disclose any credit, avoided product, or burden transfer. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `reception_preparation`; `mincing_forming`; `freezing_glazing`; `packaging_storage` | received, intermediate, net reference, glaze, and dispatched masses | calibrated scale, batch, production, or inventory records | timestamp; lot_id; species; origin; product_form; gross_mass; tare_mass; glaze_mass; net_mass; reject_mass; destination | reconcile scales and lot records, keeping gross, tare, glaze, and net fish mass distinct | kg | each lot and monthly reconciliation | declared production period covering representative operating conditions | all facilities and lines in the dataset | sum equivalent flows by lot and normalize to 1 kg net reference product | scale calibration; lot traceability; reconciliation record; operator review |
| `cp_water_ice` | `reception_preparation`; `freezing_glazing` | preparation water, ice, and glazing water | meters, ice-production logs, purchase records, and glaze tests | meter_start; meter_end; ice_mass; purchased_water; glaze_test_gross; glaze_test_net; lot_id | reconcile supplied water and ice to lots or allocate shared supply by a disclosed physical driver | kg or m3 with density/conversion record | each shift or lot and monthly reconciliation | same period as product mass records | all relevant preparation and glazing operations | subtract unrelated use and normalize to the applicable process output | meter checks; invoice reconciliation; glaze-test record |
| `cp_energy` | `mincing_forming`; `freezing_glazing`; `packaging_storage` | electricity and fuel use | sub-meters, utility meters, invoices, equipment runtime, rated power, and storage logs | meter_start; meter_end; fuel_quantity; equipment_id; runtime; rated_power; throughput; storage_days; occupied_capacity | prefer sub-metering; otherwise calculate and allocate shared utilities with a documented physical driver | kWh, MJ, or declared fuel unit | continuous, shift, or monthly | same period as production and storage records | all included equipment and shared utilities | reconcile to invoices and normalize to process output or reference product and declared storage duration | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_residue_mass` | `reception_preparation`; `freezing_glazing` | solid residues, rejects, wastewater-associated solids, and destinations | scales, bins, manifests, sales, treatment, or disposal records | material_type; mass; moisture_state; destination; regulatory_status; revenue; lot_id | weigh by destination or reconcile container counts with verified unit mass | kg | each removal and monthly reconciliation | same period as production records | all included residue and reject points | aggregate by material and destination; reconcile with mass balance | scale checks; manifests; sales or treatment records |
| `cp_packaging` | `packaging_storage` | primary, secondary, and tertiary packaging | bills of materials, issue/return records, and supplier specifications | material; layer; units_issued; units_returned; unit_mass; recycled_content; supplier_id | calculate used packaging from reconciled units and verified unit mass | kg | each product format and monthly reconciliation | same period as dispatched product | all packaging lines and included packaging layers | aggregate by material and normalize to 1 kg net product | supplier specification; unit-mass check; inventory reconciliation |
| `cp_refrigerant` | `freezing_glazing`; `packaging_storage` | refrigerant recharge and attributable loss | service, purchase, charge, recovery, and leak-repair records | refrigerant_name; opening_charge; added_mass; recovered_mass; closing_charge; service_date; equipment_id; operating_driver | calculate mass balance by substance and attribute shared systems using documented operating drivers | kg | each service event and annual reconciliation | period overlapping the production dataset | all refrigeration systems serving included operations | aggregate net recharge by substance and allocate to included product | technician record; purchase record; charge reconciliation; leak-repair evidence |
| `cp_cold_chain_quality` | `freezing_glazing`; `packaging_storage` | freezing and frozen-storage control | validated sensors, batch records, alarms, corrective actions, and packaging checks | lot_id; timestamp; process_stage; product_temperature_or_validated_proxy; set_point; alarm; corrective_action; package_integrity | retain continuous monitoring where available and lot-linked checks under the facility food-safety plan | declared temperature unit and time | continuous or each lot as applicable | entire included freezing and storage period | all included freezers, cold rooms, and transfer stages | report excursions and affected mass separately; do not average away non-conformance | sensor calibration; HACCP record; alarm history; corrective-action closure; package inspection |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | reference product | net fish-meat mass = gross frozen product mass - external glaze mass; packaging is excluded independently | gross frozen mass; glaze mass; packaging mass | kg net frozen fish meat | `codex-cxs-190-1995` |
| `calc_normalized_inventory` | all inventory rows | normalized amount = included period amount / dispatched net fish-meat mass | reconciled flow amount; dispatched net mass | amount per kg reference product | `eu-pef-2021-2279` |
| `calc_process_yield` | preparation, mincing, and freezing | yield = measured net output mass / measured input mass for the same reconciled lot or period | input mass; output mass; lot or period link | kg/kg process yield |  |
| `calc_mass_balance` | each process and complete foreground system | reconcile measured inputs with net product, separated co-products, waste, retained glaze, wastewater-associated outputs, and documented inventory change; investigate unexplained imbalance | input, output, waste, glaze, water, and inventory-change records | mass-balance residual and explanation |  |
| `calc_shared_energy` | shared utilities | allocate shared energy using a documented physical driver such as metered runtime, throughput, refrigeration load, occupied capacity, and storage duration; retain allocation factors | shared meter; driver quantities; included output | energy per process output or reference product | `eu-pef-2021-2279` |
| `calc_refrigerant_recharge` | refrigeration systems | net recharge = added refrigerant - recovered refrigerant - documented closing-charge increase, evaluated by named substance and attributed with a disclosed physical driver | service and charge records; operating driver | kg refrigerant attributable to included operations |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | all product and material records | Preserve species or species group, origin production system, upstream dataset, received form, minced/non-minced form, glaze status, additives, and packaging format at the level needed to avoid combining materially different products. | lot traceability, supplier specification, product specification, and upstream dataset references; `cpc-v3-21223`; `codex-cxc-52-2003` |
| `dq_temporal_representativeness` | foreground activity data | Use a declared period representative of operating seasons, production mix, and storage duration; disclose shutdowns, abnormal lots, missing months, and extrapolation. | dated meter, production, storage, and utility records; `eu-pef-2021-2279` |
| `dq_technology_geography` | processes and utilities | Identify freezing, mincing, glazing, packaging, refrigeration, and wastewater technologies and use geography-specific electricity, water, fuel, treatment, and upstream fish datasets where available. | equipment register, site records, supplier data, and dataset metadata; `eu-pef-2021-2279` |
| `dq_completeness` | foreground system | Reconcile product, major materials, water/ice, energy, packaging, refrigerant, residues, wastewater, and co-products; list every excluded flow and justification rather than applying an undocumented cut-off. | mass/energy reconciliation, exclusion log, and source-to-row matrix; `eu-pef-2021-2279` |
| `dq_food_safety_quality` | freezing and frozen storage | Retain records showing that applicable hazard-control, hygiene, freezing, temperature-control, package-integrity, and corrective-action requirements were applied throughout the included product cycle. | HACCP plan and records, monitoring logs, calibration, alarms, inspections, and corrective actions; `codex-cxc-52-2003`; `codex-cxs-190-1995` when applicable |
| `dq_estimate_replacement` | provisional QA ranges | Treat every `reasoned_estimate` range as a screening flag only; replace it with representative foreground or reviewed source-backed evidence before using it as a publication-critical allowed range. | review record and replacement source or representative dataset |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Require product-flow UUID `bbae8c72-d732-4f53-bdd5-aff8a0f39d48`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg net fish-meat reference mass. |  |
| `validate_scope_qualifiers` | dataset_identity | Reject guidance as incomplete when species/origin, upstream dataset, product form, minced status, glaze, packaging scope, freezing technology, storage regime and duration, geography, or data period are missing. | `cpc-v3-21223`; `codex-cxc-52-2003` |
| `validate_process_coverage` | process_inventory | Require every required process and each applicable conditional process, including the complete on-site frozen chain, or a documented zero/not-applicable statement supported by facility evidence. | `codex-cxc-52-2003` |
| `validate_mass_reconciliation` | mass_balance | Require lot- or period-consistent reconciliation of received input, net product, glaze, co-products, residues, rejects, wastewater-associated material, and inventory change; flag unexplained residuals for review. |  |
| `validate_allocation` | multifunctionality | Require allocation avoidance evidence or the selected physical/economic method, factors, co-product status, price period when relevant, and sensitivity disclosure. | `eu-pef-2021-2279` |
| `validate_cold_chain_quality` | food_safety_and_quality | Require linked control records for freezing, storage, package integrity, excursions, and corrective actions under applicable requirements; do not infer compliance from an average temperature alone. | `codex-cxc-52-2003`; `codex-cxs-190-1995` when applicable |
| `validate_data_quality` | foreground_dataset | Require temporal, technological, geographical, completeness, traceability, calibration, and uncertainty/estimate disclosures, including identification of every provisional range used. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for frozen fish-meat manufacturing at the processing-facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA of declared frozen fish meat when species/origin, upstream production, product form, facility technology, glaze, packaging, storage duration, geography, time period, and allocation are representative |
| excluded_use | Direct representation of fishing or aquaculture, whole frozen fish, separately classified frozen fillets, livers or roes, surimi/formulated products, other preservation routes, downstream distribution, retail, cooking, consumption, or end-of-life without added datasets |
| required_metadata | PCR id and version context; product-flow UUID; species/origin; upstream datasets; minced status; product and packaging form; glaze fraction; additives; included operations; freezing and refrigeration technology; storage regime/duration; geography; data period; allocation method; co-product/waste status; cut-offs/proxies; data owner and review status |
| required_quality_disclosure | Source-to-row traceability; measurement and calculation methods; calibration and reconciliation; temporal, technological, and geographical representativeness; mass balance; food-safety control evidence; allocation sensitivity; missing data; provisional estimates; uncertainty and limitations |
| update_trigger | Material change in fish source or species mix, received form, product specification, mincing/freezing/glazing technology, refrigerant, energy supply, packaging, storage duration, allocation/co-product route, regulation, facility configuration, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-v3-21223` | `official_guidance` | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21223, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-11) | Product-category identity and exclusions from adjacent CPC product forms |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (retrieved 2026-08-11) | Process decomposition, hygienic handling, freezing and frozen-storage controls, hazard-control records, packaging, and quality requirements |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius, Standard for Quick Frozen Fish Fillets, CXS 190-1995, https://workspace.fao.org/sites/codex/Standards/CXS%20190-1995/CXS_190e.pdf (retrieved 2026-08-11) | Conditional benchmark for net contents, glaze separation, and product-quality controls when the declared non-minced form is technically subject to this standard; not used to expand scope to CPC 21222 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Life-cycle boundary completeness, normalization, multifunctionality and allocation hierarchy, representativeness, data quality, and disclosure |
