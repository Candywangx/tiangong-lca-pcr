---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.clams-cockles-and-ark-shells-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Clams, cockles and ark shells, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers food-grade clams, cockles and ark shells, whether in shell or not, placed on the market after exactly one declared primary preservation route: `frozen`, `smoked`, `dried`, `salted`, or `brine`. It also covers flour, meal and pellets made from these molluscs when fit for human consumption. The five route values are mutually exclusive applicability choices; a data package shall not stack their inventories. A product receiving more than one primary preservation treatment requires a reviewed extension rather than automatic combination under this PCR.

The PCR excludes live, fresh or chilled products; products otherwise prepared or preserved; inedible flour, meal or pellets; dead or unfit products; and downstream distribution, retail, preparation, consumption and end-of-life. The foreground gate is the qualified saleable product released from the processing facility after applicable packaging and controlled holding.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.clams-cockles-and-ark-shells-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21265 (exact scope reference) |
| covered_products | Food-grade clams, cockles and ark shells, in shell or shucked, frozen, smoked, dried, salted or in brine; edible flour, meal and pellets made from these molluscs |
| excluded_products | Live, fresh or chilled molluscs; otherwise prepared or preserved products; inedible flour, meal or pellets; dead or unfit molluscs |
| representative_product | Generic qualified saleable CPC 21265 product, with species or commercial group, presentation and primary preservation route declared |
| production_route | Exactly one of `frozen`, `smoked`, `dried`, `salted`, or `brine`; combined primary routes require separate review |
| market_state | Qualified saleable product at the processing-facility gate, after applicable immediate packaging and controlled holding |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified saleable food product of clams, cockles or ark shells within the declared presentation and one primary preservation route |
| How much | 1 kg product content on the declared saleable mass basis; immediate packaging is excluded |
| How well | Conforming to the producer's release specification and applicable food-safety controls, with route, presentation and mass-condition qualifiers reported |
| How long or cycle | One production and release cycle ending at the processing-facility gate; no use-duration service is represented |
| reference_flow_link | Output `reference_product` from `packaging_holding_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Clams, cockles and ark shells, frozen, smoked, dried, salted or in brine `7a159b9e-de7a-4ef0-906e-8f2e8615d6cd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or commercial group; in-shell, shucked, or flour/meal/pellet presentation; exactly one primary route; cooked state where smoking includes cooking; reference mass basis; final moisture condition; salt or brine condition when applicable; glaze and deglazed mass when frozen and glazed; drained-mass or net-contents basis and packing-medium fraction when in brine; facility geography; production period; technology |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Set the quantitative reference to exactly 1 kg of qualified saleable product content at facility release; exclude immediate packaging mass. |
| `presentation_mass_basis` | In-shell, shucked and comminuted presentations | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | For an in-shell product, shell mass remains in the product content mass; for a shucked or flour/meal/pellet product, use only the marketed content. Report edible-part fraction separately when relevant and do not compare presentations without conversion. |
| `frozen_glaze_basis` | Frozen glazed product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross frozen mass, glaze mass and deglazed product mass using the facility's documented control method. Use deglazed product mass as the reference basis unless the applicable market specification defines another basis, which shall be disclosed. |
| `brine_mass_basis` | Product in brine or other packing medium | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use drained mass when the marketed specification declares drained mass; otherwise use net contents and report product and packing-medium fractions. Do not mix drained-mass and net-contents datasets. |
| `moisture_salt_condition` | Dried, salted, smoked or brined product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report final moisture and salt concentration on the declared test basis. Normalize on the as-sold basis unless a dry-matter conversion is explicitly required and the measured conversion is disclosed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live, raw or previously chilled/frozen bivalve input received at the processing facility with lot identity, origin, harvest or supplier status, incoming mass, shell presentation and temperature or condition recorded |
| starting_condition_role | Upstream product input to foreground receipt, preparation and preservation |
| product_classification_scope | The exact generic CPC 3.0 subclass 21265 semantic scope, independent of species and facility |
| recursive_input_rule | If a purchased input is itself a CPC 21265 preserved product, record it once as an upstream product flow with its own dataset and do not recreate its preservation inventory inside this foreground system; disclose its route and mass basis. |
| upstream_dataset_requirement | Link representative upstream datasets for cultivation or wild harvest, landing, prior handling, ingredients, energy carriers and packaging production through their delivered inputs; disclose proxies. |
| disclosure | Declare source area or supplier, traceability lot, incoming state, shell presentation, prior treatment, selected primary route, facility gate, geography, period, technology, packaging and controlled-holding conditions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Foreground processing | Include receipt, sorting and cleaning, the one selected preservation route, immediate packaging, applicable in-facility controlled holding, utilities, process water, ingredients, rejects, wastewater, direct releases and treatment until product release. | eu-pef-2021-2279, codex-cxc-52-2003 |
| `boundary_route_exclusivity` | Preservation route | Include exactly one of `frozen`, `smoked`, `dried`, `salted`, or `brine`; route-inapplicable inputs and operations shall be absent rather than zero-filled as if performed. | unsd-cpc-3-0-21265 |
| `boundary_upstream_downstream` | Linked life-cycle stages | Model cultivation or wild harvest, landing and delivered upstream materials with linked datasets. Exclude post-gate distribution, retail, preparation, consumption and end-of-life from this foreground dataset, while preserving them for a downstream life-cycle model. | eu-pef-2021-2279 |
| `boundary_shellfish_control` | Received bivalves and release | Retain lot traceability and evidence of applicable growing-area, harvest, purification or approved processing controls; maintain conditions that prevent contamination and uncontrolled microbial growth through release. | codex-cxc-52-2003 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving and preparation | required | All datasets | Foreground receipt, traceability, sorting, washing and presentation preparation | kg accepted prepared bivalve material |
| `primary_preservation` | Primary preservation | required | Execute exactly one declared route | Foreground freezing, smoking, drying, salting or brining | kg preserved product leaving the selected route |
| `packaging_holding_release` | Packaging, controlled holding and release | required | All datasets; route-specific holding controls apply only when required | Foreground immediate packaging, in-facility holding and product release | 1 kg qualified saleable reference product |

### Process: Receiving and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Received bivalve material (`received_bivalves`)

Record all live, raw or previously chilled/frozen bivalve material crossing the facility gate, including shell and prior-treatment state.

- Selected flow: Received clams, cockles or ark shells
- Flow property / unit: Mass / kg
- Amount rule: measured lot input mass; the provisional range applies only as a same-route, same-presentation QA screen and is replaced when complete reporting-period lot mass balances are available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualified saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_traceability_mass`
- Sources: `codex-cxc-52-2003`
- Range: Provisional received-material screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg/kg qualified saleable product
  - Basis: same declared route and presentation only; replace with reporting-period mass balance before reviewed use
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record metered or otherwise reconciled water entering washing, de-sanding, shucking support and hygiene operations.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water use allocated to accepted preparation output; the provisional range is replaced when route-line submetering or reconciled batch records cover the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted prepared bivalve material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_waste_balance`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg accepted prepared material
  - Basis: applies only to water crossing this process boundary; replace with metered or reconciled foreground records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared bivalve material (`prepared_bivalves`)

Calculate accepted material from measured incoming, reject, removed-shell and transfer masses, preserving presentation identity.

- Selected flow: Prepared clams, cockles or ark shells
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output reconciled by `calc_preparation_mass_balance`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_traceability_mass`
- Sources:

##### Waste flows

###### Rejected material and removed shells (`preparation_rejects_shells`)

Record rejected organisms, debris and shells removed from products marketed without shell; classify a separately sold output as a co-product instead of waste.

- Selected flow: Bivalve preparation rejects and shells
- Flow property / unit: Mass / kg
- Amount rule: measured destination-specific mass; the provisional range is replaced when complete batch or reporting-period mass balances are available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg received bivalve material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_waste_balance`
- Sources:
- Range: Provisional reject and removed-shell fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.95
  - Unit: kg/kg received bivalve material
  - Basis: route- and presentation-specific screen; replace with measured destination-specific mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving the foreground process before any linked treatment dataset.

- Selected flow: Preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated water balance; replace the provisional range when discharge metering or a reconciled water balance covers the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted prepared bivalve material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_waste_balance`
- Sources:
- Range: Provisional preparation-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg accepted prepared material
  - Basis: applies only to wastewater crossing this process boundary; replace with metered or reconciled records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Primary preservation (`primary_preservation`)

#### Inputs

##### Product flows

###### Prepared bivalve input (`prepared_bivalve_input`)

Transfer only the accepted prepared material assigned to the declared route.

- Selected flow: Prepared clams, cockles or ark shells
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs_energy`
- Sources:

###### Route electricity (`route_electricity`)

Record electricity used by the selected freezing, smoking, drying, salting or brining route; do not combine route records.

- Selected flow: Electricity, delivered
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for the declared route; the provisional range is only a within-route screen and is replaced when route-line meters or reconciled energy records cover the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs_energy`
- Sources:
- Range: Provisional route-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg preserved route output
  - Basis: use only within the same declared route and technology; not for cross-route comparison; replace with metered or reconciled records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt or brine ingredients (`route_salt_brine`)

Record salt, water and other brine ingredients only for the `salted` or `brine` route, separated by ingredient in the implemented inventory.

- Selected flow: Salt or brine ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured ingredient issue less documented return; absent for other routes; replace the provisional range when formulation and batch-issue records cover the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg salted or brined route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs_energy`
- Sources:
- Range: Provisional salt-or-brine-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg salted or brined route output
  - Basis: applies only to the selected `salted` or `brine` route; replace with formulation and batch-issue records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smoking medium (`route_smoking_medium`)

Record smoke-generating material or smoke preparation only for the `smoked` route, with energy fuels retained as separate carrier rows.

- Selected flow: Smoking medium
- Flow property / unit: Mass / kg
- Amount rule: measured consumption assigned to smoked output; absent for other routes; replace the provisional range when batch issue and return records cover the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg smoked route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_inputs_energy`
- Sources: `codex-cxc-52-2003`
- Range: Provisional smoking-medium screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg smoked route output
  - Basis: applies only to the selected `smoked` route and declared medium; replace with batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`route_glazing_water`)

Record water retained as protective glaze only for a glazed `frozen` route; keep other process water separate.

- Selected flow: Glazing water
- Flow property / unit: Mass / kg
- Amount rule: measured glaze addition reconciled to gross and deglazed mass; absent when unglazed or on other routes; replace the provisional range when glaze checks cover every represented product family
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg deglazed frozen route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_condition_mass`
- Sources:
- Range: Provisional glaze-fraction screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg deglazed frozen product
  - Basis: applies only to glazed frozen product; replace with documented gross/deglazed checks
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved bivalve product (`preserved_bivalves`)

Record the output of the single declared route with route-specific moisture, salt, glaze or packing-medium condition.

- Selected flow: Preserved clams, cockles or ark shells
- Flow property / unit: Mass / kg
- Amount rule: measured route output reconciled by `calc_route_yield`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_condition_mass`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Spent brine and route wastewater (`route_brine_wastewater`)

Record spent brine and process wastewater only when generated by the selected route, before linked treatment.

- Selected flow: Spent brine or route wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or reconciled route water and salt balance; absent when not generated; replace the provisional range when route-specific discharge records cover the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_waste_balance`
- Sources:
- Range: Provisional spent-brine-and-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg preserved route output
  - Basis: applies only when the selected route generates this flow; replace with discharge records or a reconciled route balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Packaging, controlled holding and release (`packaging_holding_release`)

#### Inputs

##### Product flows

###### Preserved product input (`preserved_product_input`)

Record preserved product entering final conditioning and release without mixing route or presentation records.

- Selected flow: Preserved clams, cockles or ark shells
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per release lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_holding_release`
- Sources:

###### Immediate packaging (`immediate_packaging`)

Record each primary and secondary packaging material crossing the facility boundary; packaging is inventory input but not part of the 1 kg reference mass.

- Selected flow: Immediate packaging material
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material or measured packaging issue less documented return; replace the provisional range when packaging specifications cover all represented formats
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualified saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_holding_release`
- Sources: `eu-pef-2021-2279`
- Range: Provisional immediate-packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg qualified saleable product
  - Basis: includes only immediate packaging in the declared format; replace with bill-of-material or issue records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Controlled-holding electricity (`holding_electricity`)

Record electricity for frozen storage or other specified in-facility temperature/humidity holding through release; absent where no controlled holding is required.

- Selected flow: Electricity, delivered
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity using actual holding duration; the provisional range is replaced when equipment meters and lot residence-time records cover the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualified saleable reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_holding_release`
- Sources: `codex-cxc-52-2003`
- Range: Provisional controlled-holding electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg qualified saleable product
  - Basis: applies only to declared in-facility controlled holding and its actual duration; replace with metered and residence-time records
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified saleable reference product (`reference_product`)

This is the exact generic Tiangong CPC 21265 product flow on the declared route, presentation and saleable mass basis.

- Selected flow: Clams, cockles and ark shells, frozen, smoked, dried, salted or in brine `7a159b9e-de7a-4ef0-906e-8f2e8615d6cd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg qualified saleable product content excluding immediate packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-21265`

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record offcuts, damaged packs and other packaging material not incorporated into released units, by material and destination.

- Selected flow: Packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled packaging issue minus packaged output; replace the provisional range when material-specific issue and scrap records cover the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg immediate packaging input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_holding_release`
- Sources:
- Range: Provisional packaging-scrap fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg/kg immediate packaging input
  - Basis: material-specific screen; replace with reconciled issue and scrap records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Route, product and line burdens | First avoid allocation through route-specific records, process subdivision and direct measurement. Never average the five mutually exclusive preservation routes into one foreground result. | eu-pef-2021-2279 |
| `allocation_coproduct` | Saleable shell, meat, meal or other co-products | Where subdivision is not feasible, use a documented physical causal relationship; use economic allocation only when no defensible physical relationship exists, and report the method, factor basis, prices and sensitivity. | eu-pef-2021-2279 |
| `allocation_waste_credit` | Rejects, shells, spent brine and packaging waste | Treat an output as waste when the holder discards or pays for its management. Do not assign an avoided-burden credit inside this foreground dataset unless a separate consequential or circularity scenario is explicitly selected and documented. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_traceability_mass` | `receiving_preparation` | received and accepted bivalve masses | receiving lot and calibrated scale records | lot_id; supplier; source_area; harvest_or_supplier_status; species_or_group; incoming_state; shell_presentation; prior_treatment; receipt_temperature; gross_mass; tare_mass; accepted_mass; reject_mass | weigh each lot and link records to traceability documentation | kg; deg C where recorded | each received lot | complete represented production period, normally 12 consecutive months or a justified seasonal campaign | all source suppliers and facility receiving points represented | sum net mass by route, presentation and destination; no cross-route averaging | scale calibration; lot reconciliation; traceability and applicable harvest/processing control evidence |
| `cp_water_waste_balance` | `receiving_preparation`; `primary_preservation` | water, wastewater, rejects and spent brine | meter, batch, tank and waste destination records | meter_start; meter_end; batch_water; retained_water; discharge_mass_or_volume; salt_mass; reject_mass; waste_destination | meter where available, otherwise reconciled batch balance with conversion evidence | kg; m3 with measured density where converted | each batch or at least monthly meter interval | complete represented production period | all included lines and discharge points | allocate only by documented causal driver, then normalize to relevant process output | meter calibration; tank calibration; balance closure; destination receipts |
| `cp_route_inputs_energy` | `primary_preservation` | route inputs, electricity, fuels and smoking media | route batch sheets, meters, invoices and material issue/return records | route; batch_id; input_mass; output_mass; ingredient_mass; electricity_kwh; fuel_quantity; smoking_medium_issue; returned_quantity; operating_time | segregate records by exactly one route and reconcile invoices to meters or batch issues | kg; kWh; carrier-specific unit | each batch with monthly reconciliation | complete represented production period or justified route campaign | each included route line and technology | subtract documented returns; allocate shared utilities by measured operating driver; normalize to route output | meter calibration; invoice reconciliation; formulation and batch authorization |
| `cp_product_condition_mass` | `primary_preservation`; `packaging_holding_release` | moisture, salt, glaze, packing medium and saleable mass condition | laboratory, QA and check-weigh records | route; presentation; cooked_state; moisture_value_and_basis; salt_value_and_basis; gross_frozen_mass; deglazed_mass; glaze_mass; net_contents; drained_mass; packing_medium_mass; release_status | use documented facility methods and calibrated balances; keep test basis with result | kg; mass fraction; percent as declared | each release lot or statistically justified lot plan | complete represented product families and period | every route-presentation-mass-basis combination | calculate separate averages for each declared combination; do not pool incompatible bases | method identifier; laboratory or QA record; calibration; sample plan |
| `cp_packaging_holding_release` | `packaging_holding_release` | packaging, holding energy, duration, scrap and released product | bill of material, packaging issue, storage meter, inventory movement and release records | packaging_material; packaging_issue; returned_packaging; scrap_mass; storage_zone; meter_reading; entry_time; release_time; released_content_mass; release_specification | reconcile material issue and storage energy to released lots and actual residence time | kg; kWh; hour or day | each lot with monthly reconciliation | complete represented production period | all packaging formats and in-facility controlled storage zones | normalize material and allocated holding energy to released product content mass | specification revision; meter and scale calibration; issue-return reconciliation; release authorization |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | Reference product | Select the declared mass basis: in-shell or marketed shucked content; deglazed mass for glazed frozen product unless another market basis is disclosed; drained mass for brined product when that is the marketed basis, otherwise net contents with packing-medium fraction. Exclude immediate packaging. | release mass; presentation; gross and deglazed mass; drained mass; net contents; packing-medium mass; release specification | kg qualified saleable product content | codex-cxc-52-2003 |
| `calc_preparation_mass_balance` | Receiving and preparation | accepted prepared mass = received net mass - rejects - removed shell - other documented losses, with any retained water separately reported | received net mass; rejects; removed shell; other losses; retained water | kg accepted prepared material and balance closure |  |
| `calc_route_yield` | Primary preservation | route yield = preserved route output mass / prepared route input mass; calculate separately for each route, presentation and moisture/salt condition | prepared input mass; preserved output mass; route and condition qualifiers | route-specific mass yield |  |
| `calc_specific_inventory` | All foreground inputs and outputs | specific amount = reconciled amount assigned to the process / corresponding process output or PCR reference mass stated on the row | collected amount; allocation driver; process output; reference mass | row amount on declared basis | eu-pef-2021-2279 |
| `calc_holding_energy` | Controlled holding | lot holding electricity = zone electricity x documented lot occupancy driver / total zone occupancy driver; retain actual holding duration and do not assign storage to lots that bypass it | zone electricity; entry and release time; mass or pallet occupancy driver | kWh per kg released content for applicable lots | eu-pef-2021-2279 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Received and released product | Preserve lot-level source, species or commercial group, incoming state, route, presentation and release identity, together with applicable harvest, growing-area, purification or approved processing evidence. | receiving records, supplier documents, traceability link and release record; `codex-cxc-52-2003` |
| `dq_route_separation` | All inventory | Maintain separate batch or allocation records for each mutually exclusive route and each incompatible mass basis; report shared-utility allocation drivers. | route batch sheets, meters and allocation workbook |
| `dq_temporal_coverage` | Foreground activity data | Represent normally 12 consecutive months; a shorter seasonal campaign is allowed only when it covers the complete production season and its representativeness is justified. | date-stamped source records and representativeness statement |
| `dq_mass_condition` | Reference flow | Retain measured or specified moisture, salt, glaze, drained-mass or net-contents data wherever applicable; never infer cross-route equivalence from equal wet mass. | QA tests, check-weighs and release specification |
| `dq_completeness` | Foreground boundary | Reconcile product, water, salt/brine, energy, packaging, waste and direct-release records; disclose missing flows, proxies and excluded operations. | mass/energy reconciliation and completeness checklist; `eu-pef-2021-2279` |
| `dq_reasoned_estimates` | All provisional ranges | Treat every `reasoned_estimate` range only as a candidate-stage QA screen, not as a measured default or publication-critical allowed range. Replace it when the row-specific trigger stated in the Amount rule or Basis is met; until then disclose use, route, condition and uncertainty. | estimate register linked to foreground collection gaps and replacement evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference flow | Require product-flow UUID `7a159b9e-de7a-4ef0-906e-8f2e8615d6cd`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg and reference amount exactly 1. | unsd-cpc-3-0-21265 |
| `validate_scope_route` | Product category | Require a covered presentation and exactly one route token from `frozen`, `smoked`, `dried`, `salted`, or `brine`; reject live/fresh/chilled, otherwise-preserved, inedible or unfit products and unreviewed combined routes. | unsd-cpc-3-0-21265 |
| `validate_mass_basis` | Reference product | Require packaging exclusion and all applicable in-shell/shucked, moisture, salt, glaze/deglazed, drained-mass/net-contents and packing-medium declarations before accepting the 1 kg reference. | codex-cxc-52-2003 |
| `validate_processes` | Process map | Require all three process inventories and confirm that route-inapplicable preservation rows are absent; require additional carrier, refrigerant, ingredient, emission or waste rows whenever they actually cross the foreground boundary. | eu-pef-2021-2279 |
| `validate_traceability_control` | Bivalve receipt and release | Require lot linkage and evidence of applicable source-area, harvest, purification or approved processing controls, plus controlled storage and handling conditions. | codex-cxc-52-2003 |
| `validate_inventory_records` | Foreground amounts | Require collection protocol links for collected or calculated rows, compatible normalization bases, route-separated calculations and disclosure of proxies or missing records. | eu-pef-2021-2279 |
| `validate_allocation` | Shared processes and outputs | Require subdivision or direct measurement first; where allocation remains, require the selected causal or economic basis, factors, data period and sensitivity disclosure. | eu-pef-2021-2279 |
| `validate_reasoned_estimates` | Provisional QA ranges | Flag every used `reasoned_estimate` as temporary and route/condition-specific; fail reviewed use if a replacement trigger has been met but the range has not been replaced by foreground or source-backed evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground processing dataset for one declared CPC 21265 product route, presentation and saleable mass basis |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Attributional modelling of the represented route, technology, geography, period, presentation and mass condition; connection to documented upstream cultivation or harvest datasets and downstream distribution or life-cycle models |
| excluded_use | Live, fresh or chilled molluscs; other prepared or preserved products; unfit products; route-average substitution; unreviewed multi-route products; comparisons across in-shell/shucked, wet/dry, glazed/deglazed or drained/net-content bases without explicit conversion |
| required_metadata | Species or commercial group; origin and traceability basis; incoming state; shell presentation; exactly one route; cooked state; final moisture and salt condition; glaze and deglazed mass; drained-mass or net-contents basis and packing-medium fraction; packaging; facility geography; production period; technology; holding condition; upstream dataset links |
| required_quality_disclosure | Temporal and site coverage; meter and scale calibration; mass and energy balance closure; route separation; allocation method; rejected lots; waste destinations; proxies; missing flows; all `reasoned_estimate` uses and replacement status |
| update_trigger | Change in route, species/presentation mix, mass-basis specification, food-safety control, formulation, technology, packaging, holding regime, allocation basis, source requirement or upstream dataset; or availability of foreground/source evidence that replaces a provisional estimate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21265` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21265, `CPC_Ver_3.0_Structure_30Jun2025.csv`, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Exact generic product scope, inclusions, exclusions and mutually exclusive route vocabulary |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf (accessed 2026-08-11) | Bivalve traceability, source-area and harvest controls, hygienic processing, packaging, storage and route-control requirements |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj (accessed 2026-08-11) | Functional unit, system boundary, inventory completeness, allocation hierarchy, data quality and life-cycle dataset use |
