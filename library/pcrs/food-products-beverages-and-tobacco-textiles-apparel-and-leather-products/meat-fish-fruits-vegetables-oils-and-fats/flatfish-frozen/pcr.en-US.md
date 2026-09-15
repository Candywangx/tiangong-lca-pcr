---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flatfish-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flatfish, frozen

## 1. Scope and Applicability

This PCR covers foreground processing of flatfish received for manufacture as frozen uneviscerated or eviscerated finfish, with or without the head, through receipt, preparation, freezing, optional glazing, packaging, frozen storage, and dispatch at the processing-facility gate. The data package shall declare species or species group, wild-caught or aquaculture origin, upstream dataset, received state, evisceration and head presentation, glaze, packaging, freezing route, production geography and period, and the frozen-storage period represented.

It excludes live, fresh, or chilled flatfish; frozen fish fillets; frozen fish meat whether or not minced; fish livers and roes; brine-frozen fish intended for further processing; formulated, coated, cooked, smoked, dried, salted, canned, or otherwise preserved products; and non-flatfish. Fishing, aquaculture, landing, and any prior processing embodied in the received input require separate upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flatfish-frozen |
| classification_refs | CPC 3.0: 21213, Flatfish, frozen (exact mapping context) |
| covered_products | Frozen flatfish presented as uneviscerated or eviscerated finfish, head-on or headless, including declared glazing and packaging |
| excluded_products | Live, fresh, or chilled flatfish; fish fillets; fish meat whether or not minced; fish livers and roes; brine-frozen fish intended for further processing; formulated, coated, cooked, smoked, dried, salted, canned, or otherwise preserved fish; non-flatfish |
| representative_product | Packaged eviscerated frozen flatfish, with head and glaze status declared, supplied for human consumption |
| production_route | Receipt and inspection; sorting and optional washing, evisceration, heading, trimming, and grading; freezing; optional glazing; packaging; frozen storage; facility-gate dispatch |
| market_state | Frozen flatfish at the processing-facility gate with species, presentation, glaze, packaging, and storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply frozen flatfish in the declared uneviscerated or eviscerated, head-on or headless presentation |
| How much | 1 kg net mass of frozen flatfish |
| How well | Conforming to the declared species, presentation, glaze, packaging, market specification, and applicable food-safety controls |
| How long or cycle | One production lot through the declared on-site frozen-storage period to facility-gate dispatch |
| reference_flow_link | `frozen_flatfish_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product mass, excluding transport packaging and excluding external ice glaze from flatfish mass |
| Reference product flow | Flatfish, frozen `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; wild-caught or aquaculture origin and upstream dataset; received form and temperature state; uneviscerated or eviscerated; head-on or headless; other trimming or grading; glaze presence and mass; packaging format and included layers; freezing technology; frozen-storage control regime and duration; production geography and period; facility-gate condition |

When constructing a foreground data package, all `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or equivalent fields. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to 1 kg net flatfish mass. Exclude external glaze and packaging from product mass and report them separately. |
| `presentation_mass_separation` | prepared and frozen product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep gross received mass, removed viscera/head/trimmings, retained fish mass, glaze, tare, and packaging as separate measured or calculated quantities. |
| `energy_consistency` | electricity and fuels | energy property declared for the exact selected flow | kWh, MJ, or declared convertible unit | Preserve original meter and invoice units, document conversion factors, and do not combine delivered electricity with fuel energy without explicit conversion. |
| `storage_time_basis` | frozen storage | mass and elapsed time | kg and day | Record frozen-storage energy against throughput and the declared storage duration; disclose the driver used for shared cold-store allocation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Flatfish received at the processing facility with species, origin, upstream dataset, received mass, presentation, temperature state, and prior processing declared |
| starting_condition_role | Upstream product input to foreground frozen-flatfish processing |
| product_classification_scope | Frozen flatfish within CPC 3.0 subclass 21213 and parent class 2121, which excludes fish fillets and fish meat |
| recursive_input_rule | A same-category frozen-flatfish input shall use a separate upstream dataset and be identified as repacking, reprocessing, or blending input; its production shall not be recursively rebuilt in this foreground system. |
| upstream_dataset_requirement | Link each received flatfish input to traceable fishing or aquaculture, landing, and prior-processing datasets; disclose proxy use and any upstream gap. |
| disclosure | Declare species, origin, received state, preparation, freezing and glazing route, packaging scope, storage duration and control regime, co-products and wastes, allocation, utilities, geography, data period, and exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_facility_gate` | foreground_system | Include receipt, preparation, freezing, optional glazing, packaging, on-site frozen storage, internal handling, cleaning, wastewater and residue handling, and attributable refrigeration losses through facility-gate dispatch. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_product_form` | product_scope | Limit the reference product to uneviscerated or eviscerated finfish, with or without the head; exclude fillets, fish meat, livers and roes, and brine-frozen fish intended for further processing. | `unsd-cpc-v3-21213`; `codex-cxs-36-1981` |
| `sb_cold_chain` | freezing_and_storage | Include the freezing operation and all on-site frozen holding and transfers required to maintain the declared condition; retain monitored control and corrective-action records. | `codex-cxc-52-2003`; `codex-cxs-36-1981` |
| `sb_upstream_traceability` | received_flatfish | Represent fishing or aquaculture, landing, and prior processing through upstream datasets rather than undocumented foreground cut-offs. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `reception_preparation` | Receipt and preparation | `required` | Always | Foreground receipt, inspection, sorting, washing when used, and declared evisceration, heading, trimming, and grading | kg prepared flatfish |
| `freezing_glazing` | Freezing and optional glazing | `required` | Always; glazing rows apply only when glaze is used | Foreground freezing, temperature control, glaze application, and refrigeration | kg net frozen flatfish |
| `packaging_storage` | Packaging, frozen storage, and dispatch | `required` | Always; packaging rows follow the declared packaging scope | Foreground packaging, frozen storage, internal handling, and facility-gate dispatch | kg reference product |

### Process: Receipt and preparation (`reception_preparation`)

#### Inputs

##### Product flows

###### Received flatfish (`received_flatfish`)

Record each input by species or species group, origin, production system, received presentation and temperature state, and upstream dataset.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured gross received mass allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen-flatfish reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Range: Provisional received-flatfish mass-balance QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 4
  - Unit: kg received flatfish/kg net reference product
  - Basis: per 1 kg net frozen-flatfish reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water and ice (`preparation_water_ice`)

Record water and ice used for washing, handling, and temperature control, excluding optional glazing water.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled water and ice assigned to the preparation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared flatfish
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice`
- Range: Provisional preparation water-and-ice QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water and ice/kg prepared flatfish
  - Basis: per 1 kg prepared flatfish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared flatfish (`prepared_flatfish`)

Record flatfish transferred to freezing after the declared preparation steps.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured prepared flatfish mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Range: Provisional preparation-yield QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.25
  - Upper: 1
  - Unit: kg prepared flatfish/kg received flatfish
  - Basis: mass ratio to received flatfish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed viscera, heads, trimmings, and rejects (`preparation_residues`)

Record each separated material by physical form, destination, and co-product or waste status; keep saleable co-products distinct from waste.

- Selected flow: Exact Tiangong waste or co-product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured separated mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg received flatfish
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater`
- Range: Provisional preparation-residue QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.75
  - Unit: kg separated material/kg received flatfish
  - Basis: mass ratio to received flatfish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater discharged to treatment or another destination separately from solid residues.

- Selected flow: Exact Tiangong waste flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated water balance assigned to the preparation lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared flatfish
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_wastewater`
- Range: Provisional wastewater QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg wastewater/kg prepared flatfish
  - Basis: per 1 kg prepared flatfish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Freezing and optional glazing (`freezing_glazing`)

#### Inputs

##### Product flows

###### Prepared flatfish entering freezing (`freezing_input`)

Record the measured lot transferred into the freezer.

- Selected flow: Exact Tiangong product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per freezing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Electricity for freezing (`freezing_electricity`)

Record freezer, compressor, pump, fan, and attributable auxiliary electricity by sub-meter or documented shared-meter calculation.

- Selected flow: Exact Tiangong electricity product flow pending geography review
- Flow property / unit: Energy / kWh
- Amount rule: measured or calculated electricity use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen flatfish
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_storage`
- Range: Provisional freezing-electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh/kg net frozen flatfish
  - Basis: per 1 kg net frozen flatfish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

Include only when glaze is applied; measure supplied water and retained glaze separately.

- Selected flow: Exact Tiangong water product flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured glazing water supplied and retained glaze mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen flatfish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice`
- Range: Provisional glazing-water QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg supplied glazing water/kg net frozen flatfish
  - Basis: per 1 kg net frozen flatfish
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Net frozen flatfish (`frozen_flatfish_reference`)

Record the frozen product before packaging and keep retained glaze outside net fish mass.

- Selected flow: Flatfish, frozen `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net frozen flatfish
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Freezing rejects and non-retained glazing water (`freezing_rejects`)

Record rejected fish and non-retained glazing water separately by destination where records permit.

- Selected flow: Exact Tiangong waste flow pending review
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled rejected mass and non-retained water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen flatfish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater`
- Range: Provisional freezing-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg rejects and non-retained water/kg net frozen flatfish
  - Basis: per 1 kg net frozen flatfish
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant loss to air (`freezing_refrigerant_loss`)

Calculate loss by named refrigerant from service, recharge, recovery, and charge-balance records; do not use an unspecified refrigerant aggregate.

- Selected flow: Exact Tiangong elementary flow pending refrigerant-specific review
- Flow property / unit: Mass / kg
- Amount rule: calculated attributable refrigerant loss by substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen flatfish
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Range: Provisional refrigerant-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg refrigerant/kg net frozen flatfish
  - Basis: per 1 kg net frozen flatfish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging, frozen storage, and dispatch (`packaging_storage`)

#### Inputs

##### Product flows

###### Frozen flatfish entering packaging (`packaging_input`)

Record net frozen product transferred to packaging.

- Selected flow: Flatfish, frozen `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net transfer mass excluding glaze and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging separately by material and include only layers within the declared scope.

- Selected flow: Exact Tiangong packaging product flows pending material review
- Flow property / unit: Mass / kg
- Amount rule: packaging issued minus reconciled unused returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen-flatfish reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Range: Provisional packaging-mass QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg packaging/kg net reference product
  - Basis: per 1 kg net frozen-flatfish reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for frozen storage and handling (`storage_electricity`)

Record cold-store and internal-handling electricity and allocate shared meters using a disclosed physical driver that includes storage duration.

- Selected flow: Exact Tiangong electricity product flow pending geography review
- Flow property / unit: Energy / kWh
- Amount rule: calculated use from meter records, throughput or occupied capacity, and storage duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product for the declared storage period
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_storage`
- Range: Provisional frozen-storage electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh/kg reference product per declared storage cycle
  - Basis: per 1 kg reference product for the declared storage period
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Packaged frozen flatfish at dispatch (`dispatched_frozen_flatfish`)

Record the dispatched product and reconcile it to exactly 1 kg net flatfish without adding glaze or packaging to the reference mass.

- Selected flow: Flatfish, frozen `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured dispatched net mass normalized to 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record packaging scrap by material and destination.

- Selected flow: Exact Tiangong waste flows pending material review
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled packaging scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional packaging-scrap QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg packaging scrap/kg reference product
  - Basis: per 1 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional_foreground_processes | First avoid allocation by collecting separate process data, subdividing operations, or applying a defensible system-expansion approach. | `eu-pef-2021-2279` |
| `allocation_physical` | joint_products_and_co-products | When avoidance is not feasible, use a documented causal physical relationship. Use mass only when it represents that relationship and disclose factors. | `eu-pef-2021-2279` |
| `allocation_economic` | residual_multifunctionality | Use economic allocation only when no defensible causal physical relationship is available; document the representative price period and test material co-product sensitivity. | `eu-pef-2021-2279` |
| `allocation_status` | heads_viscera_trimmings_rejects_and_recovered_material | Declare whether each separated material is a co-product, animal-feed input, recovered material, treatment input, or waste under the applicable jurisdiction, and disclose credits or burden transfers. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `reception_preparation`; `freezing_glazing`; `packaging_storage` | received, prepared, frozen, glaze, tare, and dispatched masses | calibrated scale, lot, production, or inventory records | timestamp; lot_id; species; origin; presentation; gross_mass; tare_mass; removed_mass; glaze_mass; net_mass | reconcile lot-linked scales while keeping fish, glaze, tare, and packaging distinct | kg | each lot with periodic reconciliation | declared representative production period | every included facility and line | sum materially equivalent lots and normalize to net reference mass | calibration; lot traceability; reconciliation; operator review |
| `cp_water_ice` | `reception_preparation`; `freezing_glazing` | preparation water, ice, and glazing water | meters, ice logs, purchase records, and glaze tests | meter_start; meter_end; ice_mass; supplied_water; retained_glaze; lot_id | reconcile supplied water and ice to operations using a disclosed physical driver | kg or m3 with conversion record | each shift or lot with periodic reconciliation | same period as product mass | every included preparation and glazing operation | subtract unrelated use and normalize to process output or reference product | meter check; invoice reconciliation; glaze test |
| `cp_energy_storage` | `freezing_glazing`; `packaging_storage` | freezing, storage, and handling energy | sub-meters, utility meters, invoices, equipment runtime, and storage logs | meter_start; meter_end; equipment_id; runtime; rated_power; throughput; storage_days; occupied_capacity | prefer sub-metering; otherwise use documented physical allocation | kWh, MJ, or declared fuel unit | continuous, shift, or periodic | same period as production and storage | all included equipment and shared utilities | reconcile to invoices and normalize to process output or storage basis | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_residue_wastewater` | `reception_preparation`; `freezing_glazing` | residues, rejects, wastewater, and destinations | scales, bins, meters, manifests, sales, treatment, or disposal records | material_type; mass; water_volume; destination; regulatory_status; revenue; lot_id | weigh or meter by destination and reconcile with material and water balances | kg or m3 with conversion record | each removal or discharge with periodic reconciliation | same period as production | all included residue and discharge points | aggregate by material and destination without mixing co-products and waste | scale/meter check; manifest; sales or treatment record |
| `cp_packaging` | `packaging_storage` | packaging used and scrap | bill of materials, issue/return, supplier, and scrap records | material; layer; units_issued; units_returned; unit_mass; scrap_mass; destination | calculate used packaging from reconciled units and verified unit mass | kg | each format with periodic reconciliation | same period as dispatch | all packaging lines and included layers | aggregate by material and normalize to net product mass | supplier specification; unit-mass check; inventory reconciliation |
| `cp_refrigerant` | `freezing_glazing`; `packaging_storage` | refrigerant loss by substance | service, purchase, recharge, recovery, charge, and repair records | refrigerant_name; added_mass; recovered_mass; opening_charge; closing_charge; service_date; equipment_id; operating_driver | calculate substance-specific balance and attribute shared systems with a disclosed physical driver | kg | each service event with period reconciliation | period overlapping the production dataset | all refrigeration systems serving included operations | aggregate attributable loss by named substance | technician record; purchase record; charge balance; repair closure |
| `cp_cold_chain_quality` | `freezing_glazing`; `packaging_storage` | freezing and frozen-storage control | validated sensors, lot records, alarms, corrective actions, and package checks | lot_id; timestamp; process_stage; product_temperature_or_validated_proxy; set_point; alarm; action; package_integrity | retain continuous monitoring where available and lot-linked checks under the food-safety plan | declared temperature unit and time | continuous or each lot as applicable | entire included freezing and storage cycle | all included freezers, cold rooms, and transfers | report excursions and affected mass separately | sensor calibration; HACCP record; alarm history; action closure; inspection |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | reference product | net flatfish mass = gross frozen product mass - external glaze mass; exclude packaging independently | gross frozen mass; glaze mass; packaging mass | kg net frozen flatfish | `codex-cxs-36-1981`; `codex-cxs-190-1995` |
| `calc_normalized_inventory` | all inventory rows | normalized amount = included-period amount / dispatched net flatfish mass | reconciled flow amount; dispatched net mass | amount per kg reference product | `eu-pef-2021-2279` |
| `calc_process_yield` | preparation and freezing | yield = measured net output mass / measured input mass for the same lot or reconciled period | input mass; output mass; lot or period link | kg/kg process yield |  |
| `calc_mass_balance` | each process and foreground system | reconcile flatfish, removed material, product, glaze, wastewater-associated material, waste, and inventory change; investigate unexplained residuals | input, output, waste, water, glaze, and inventory-change records | balance residual and explanation |  |
| `calc_shared_energy` | shared utilities | allocate shared energy using a documented physical driver such as runtime, throughput, refrigeration load, occupied capacity, and storage duration | shared meter; driver quantities; included output | energy per process output or reference product | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | refrigeration systems | attributable loss = added refrigerant - recovered refrigerant - documented charge increase, by named substance and disclosed allocation driver | service and charge records; operating driver | kg refrigerant attributable to included operations |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | product and material records | Preserve species or species group, origin, upstream dataset, uneviscerated/eviscerated and head-on/headless presentation, glaze, and packaging at the level needed to avoid mixing materially different products. | lot traceability, supplier and product specifications, upstream datasets; `unsd-cpc-v3-21213`; `codex-cxs-36-1981` |
| `dq_temporal_representativeness` | foreground activity data | Use a declared period representative of production and storage conditions; disclose seasonality, shutdowns, abnormal lots, missing periods, and extrapolation. | dated production, meter, storage, and utility records; `eu-pef-2021-2279` |
| `dq_technology_geography` | processes and utilities | Identify preparation, freezing, glazing, packaging, refrigeration, and wastewater technologies and use geography-appropriate utility and upstream datasets. | equipment register, site records, supplier data, dataset metadata; `eu-pef-2021-2279` |
| `dq_completeness` | foreground system | Reconcile major materials, water/ice, energy, packaging, refrigerant, residues, wastewater, co-products, and product; list every exclusion and justification. | material/energy reconciliation and exclusion log; `eu-pef-2021-2279` |
| `dq_food_safety_quality` | receipt through dispatch | Retain applicable hygiene, hazard-control, freezing, frozen-storage, glaze-water, package-integrity, excursion, and corrective-action evidence. | food-safety plan, monitoring, calibration, alarms, inspection, and action records; `codex-cxc-52-2003`; `codex-cxs-36-1981` |
| `dq_estimate_replacement` | provisional ranges | Treat every `reasoned_estimate` range as a screening flag only and replace or explicitly review it before publication-critical use. | review record and representative foreground or source-backed replacement evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Require product-flow UUID `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg net reference mass. |  |
| `validate_scope_qualifiers` | dataset_identity | Treat the dataset as incomplete when species/origin, upstream dataset, product presentation, glaze, packaging, freezing route, storage regime/duration, geography, or data period is missing. | `unsd-cpc-v3-21213`; `codex-cxs-36-1981` |
| `validate_process_coverage` | process_inventory | Require every required process and the complete on-site frozen chain, or a documented zero/not-applicable statement supported by facility evidence. | `codex-cxc-52-2003`; `codex-cxs-36-1981` |
| `validate_mass_reconciliation` | mass_balance | Require lot- or period-consistent reconciliation of received flatfish, prepared and net product, glaze, co-products, residues, rejects, wastewater-associated material, and inventory change; flag unexplained residuals. |  |
| `validate_allocation` | multifunctionality | Require evidence of allocation avoidance or the selected physical/economic method, factors, material status, price period when relevant, and sensitivity disclosure. | `eu-pef-2021-2279` |
| `validate_cold_chain_quality` | food_safety_and_quality | Require linked freezing, storage, package-integrity, excursion, and corrective-action records under applicable requirements; do not infer conformity from an average temperature alone. | `codex-cxc-52-2003`; `codex-cxs-36-1981` |
| `validate_data_quality` | foreground_dataset | Require temporal, technological, geographical, completeness, traceability, calibration, missing-data, uncertainty, and provisional-estimate disclosures. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for frozen-flatfish processing at the processing-facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA of declared frozen flatfish when species/origin, upstream production, presentation, facility technology, glaze, packaging, storage duration, geography, data period, and allocation are representative |
| excluded_use | Direct representation of fishing or aquaculture, live/fresh/chilled flatfish, fillets, fish meat, livers or roes, brine-frozen inputs for further processing, other preservation routes, downstream distribution, retail, cooking, consumption, or end-of-life without added datasets |
| required_metadata | PCR id and version context; product-flow UUID; species/origin; upstream datasets; received and dispatched presentation; glaze; packaging scope; included operations; freezing and refrigeration technology; storage regime and duration; geography; data period; allocation; co-product/waste status; exclusions/proxies; data owner and review status |
| required_quality_disclosure | Source-to-row traceability; measurement and calculation methods; calibration and reconciliation; temporal, technological, and geographical representativeness; mass balance; food-safety evidence; allocation sensitivity; missing data; provisional estimates; uncertainty and limitations |
| update_trigger | Material change in flatfish species or source, received presentation, product specification, preparation/freezing/glazing technology, refrigerant, energy supply, packaging, storage duration, allocation or co-product route, regulation, facility configuration, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-21213` | `official_guidance` | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21213, Flatfish, frozen, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-11) | Product-category identity and exclusion of fish fillets and fish meat through the CPC hierarchy |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/4/i2382e/i2382e.pdf (retrieved 2026-08-11) | Process decomposition, hygienic handling, freezing and storage controls, hazard-control records, and quality evidence |
| `codex-cxs-36-1981` | `standard` | Codex Alimentarius, Standard for Quick-Frozen Finfish, Uneviscerated and Eviscerated, CXS 36-1981, https://workspace.fao.org/sites/codex/Standards/CXS%2036-1981/CXS_036e.pdf (retrieved 2026-08-11) | Product-form boundary, freezing and deep-frozen condition, glazing-water quality, net contents excluding glaze, labelling, and storage controls |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius, Standard for Quick-Frozen Fish Fillets, CXS 190-1995, https://workspace.fao.org/sites/codex/Standards/CXS%20190-1995/CXS_190e.pdf (retrieved 2026-08-11) | Cross-category corroboration for quick-freezing, glaze exclusion from net contents, and frozen-chain quality only; not authority for this PCR product scope |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Boundary completeness, normalization, multifunctionality and allocation hierarchy, representativeness, data quality, and disclosure |
