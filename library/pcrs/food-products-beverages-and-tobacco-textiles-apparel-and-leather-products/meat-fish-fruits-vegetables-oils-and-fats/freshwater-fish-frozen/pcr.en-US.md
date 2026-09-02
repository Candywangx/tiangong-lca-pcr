---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.freshwater-fish-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Freshwater fish, frozen

## 1. Scope and Applicability

This PCR covers foreground processing of freshwater fish from receipt at a freezing facility through preparation, freezing, optional glazing, packaging, and frozen storage to the declared facility gate. Covered product forms are whole, drawn, gutted, headed, scaled, or otherwise dressed freshwater fish that remain fish rather than fillets or separated fish meat. The data producer shall declare species, wild or farmed origin, received form and temperature state, dressing state, glaze status and mass basis, packaging format, freezing technology, storage temperature and duration, geography, and reporting period.

The PCR excludes live, fresh, or chilled fish; frozen fish fillets; separated fish meat whether minced or not; fish livers and roes; breaded, cooked, smoked, dried, salted, fermented, canned, or otherwise prepared products; marine fish; crustaceans, molluscs, and other aquatic invertebrates. Fishing, aquaculture, landing, and production of received fish are represented by upstream datasets. Distribution after the declared facility gate, retail, preparation, consumption, and end-of-life are outside this foreground boundary unless separately added.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.freshwater-fish-frozen |
| classification_refs | CPC 3.0: 21211 Freshwater fish, frozen (`exact`) |
| covered_products | Frozen freshwater fish in whole, drawn, gutted, headed, scaled, or otherwise dressed form, excluding fillets and separated meat |
| excluded_products | Live, fresh, or chilled fish; frozen fish fillets; frozen fish meat whether minced or not; fish livers and roes; formulated or otherwise preserved fish products; marine fish; crustaceans, molluscs, and other aquatic invertebrates |
| representative_product | Packaged frozen freshwater fish, with species, origin, dressing state, glaze status, and packaging declared |
| production_route | Receipt of freshwater fish; inspection and preparation; freezing; optional glazing; packaging; frozen storage; dispatch at facility gate |
| market_state | Frozen product at the declared processing-facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply frozen freshwater fish in the declared species, origin, and dressing state |
| How much | 1 kg net mass of frozen freshwater fish |
| How well | Product remains within the declared frozen condition and meets the producer's documented acceptance and food-safety specifications |
| How long or cycle | One production lot through receipt, preparation, freezing, optional glazing, packaging, and frozen storage to facility-gate dispatch |
| reference_flow_link | One declared output row `frozen_freshwater_fish_reference` normalized to 1 kg net product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Freshwater fish, frozen `1c2a109f-6b9a-47eb-88a7-232025a03c81` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; wild or farmed origin; upstream source geography; whole or declared dressing state; received condition; freezing technology; glaze status and whether glaze is included in the declared net mass; packaging format and packaging inclusion; storage temperature; frozen-storage duration; facility geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net frozen fish, excluding packaging. Declare whether separately removable glaze is included in or excluded from the net fish mass and use the same convention for all normalized inventory rows. |
| `mass_balance_basis` | fish, water, glaze, packaging, residues, and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured masses to kg and reconcile lot inputs, retained product, removable glaze where separately measured, residues, wastewater transfer, and inventory change on one documented wet-mass basis. |
| `energy_normalization` | electricity and fuels | energy quantity appropriate to the metered carrier | kWh or declared carrier unit | Preserve metered carrier units, document conversion factors, and normalize consumption to 1 kg reference product without substituting a mass property for energy. |
| `storage_time_basis` | frozen storage | elapsed time | day | Record lot-weighted frozen-storage duration from entry into frozen storage to facility-gate dispatch and disclose any shared-storage allocation. |

## 5. System Boundary

The foreground system starts when received freshwater fish crosses the freezing facility boundary. It includes acceptance control, unloading, washing and dressing when performed, freezing, optional glazing, packaging, frozen storage, internal handling, sanitation attributable to included operations, wastewater and residue transfers, refrigerant loss, and treatment activities operated inside the facility. Capital goods are excluded from the default foreground inventory unless material to the declared study or required by an applicable downstream method.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Freshwater fish received at the processing facility with species, wild or farmed origin, supplier/source geography, received form, received mass, temperature state, and upstream dataset reference declared |
| starting_condition_role | Upstream product input and auditable start of foreground frozen-fish processing |
| product_classification_scope | Frozen freshwater fish that remain whole or dressed fish; excludes separately classified frozen fillets, fish meat, livers and roes, and other prepared products |
| recursive_input_rule | A same-category frozen freshwater fish input used for re-freezing, repacking, or blending shall be represented by a separate upstream dataset and identified as such; its previous production shall not be recursively reconstructed inside this foreground system. |
| upstream_dataset_requirement | Link every received fish source to a representative fishing or aquaculture and landing/supply dataset, preserving wild/farmed origin, species, geography, technology, and temporal representativeness. |
| disclosure | Declare included preparation steps, glaze convention, packaging boundary, freezing and storage technology, storage duration, shared-service allocation, excluded operations, and all cut-offs. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_fish_to_gate` | all datasets | Include all attributable foreground operations from receipt of freshwater fish through facility-gate dispatch of the frozen reference product. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream_link` | received fish and other purchased products | Represent production before facility receipt with separate upstream datasets; do not omit it or rebuild it as an undocumented foreground estimate. | `eu-pef-2021-2279` |
| `boundary_cold_chain` | freezing and storage | Include measured freezing, temperature control, frozen storage, refrigerant losses, and internal handling through the declared gate; disclose duration and temperature basis. | `codex-cxc-52-2003` |
| `boundary_cutoff_disclosure` | all excluded flows or operations | Identify and justify exclusions using a materiality assessment; never use lack of data alone as the reason to omit a potentially material flow. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving and preparation | `required` | Always; individual dressing operations apply only when performed at the reporting facility | Foreground acceptance, washing, dressing, and preparation | kg prepared fish transferred to freezing |
| `freezing_glazing` | Freezing and optional glazing | `required` | Always; glazing flows apply only when glaze is used | Foreground freezing, temperature control, and glaze application | kg frozen fish transferred to packaging |
| `packaging_storage` | Packaging and frozen storage | `required` | Always; unpackaged bulk dispatch shall record zero packaging and explain the format | Foreground packing, frozen storage, and facility-gate dispatch | 1 kg net frozen freshwater fish reference product |

### Process: Receiving and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Received freshwater fish (`received_freshwater_fish`)

Received freshwater fish crosses the foreground boundary from a separately modelled fishing or aquaculture supply chain. Record supplier lots without substituting the frozen reference-flow UUID for the upstream state.

- Selected flow: Received freshwater fish, declared live/fresh/chilled or partially frozen state (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass of each received lot normalized to final reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen freshwater fish reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_received_fish`
- Sources: `unsd-cpc-3-0-21211`; `codex-cxc-52-2003`
- Range: Broad replaceable received-fish screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg reference product
  - Basis: received fish mass per 1 kg net frozen reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and sanitation water (`preparation_water`)

Record water supplied for washing, dressing, equipment cleaning, and sanitation when attributable to the included preparation operations.

- Selected flow: Process water (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or otherwise documented attributable water supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxc-52-2003`
- Range: Broad replaceable preparation-water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg prepared fish
  - Basis: supplied preparation and sanitation water per kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared freshwater fish intermediate (`prepared_fish_intermediate`)

Calculate the mass of accepted fish transferred to freezing after declared dressing and draining operations.

- Selected flow: Prepared freshwater fish intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass or lot mass balance calculated from received fish, retained fish, residues, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepared_transfer`
- Sources: `codex-cxc-52-2003`; `reference-mass-identity`
- Range: Broad replaceable prepared-fish yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 1.1
  - Unit: kg/kg received fish
  - Basis: prepared fish transferred per kg accepted received fish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Fish residues and rejected material (`preparation_residues`)

Record heads, viscera, scales, trimmings, spoiled fish, and other rejected material by actual destination; by-products sold as products shall be reclassified and handled under allocation rules.

- Selected flow: Fish-processing residue or destination-specific waste (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured residue and reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `codex-cxc-52-2003`
- Range: Broad replaceable residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg prepared fish
  - Basis: residues and rejects per kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater transferred to on-site or off-site treatment, avoiding double counting with water retained in product, residues, or inventory.

- Selected flow: Wastewater to declared treatment route (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered wastewater or defensible water balance by treatment destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `reference-mass-identity`
- Range: Broad replaceable wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg prepared fish
  - Basis: wastewater sent to treatment per kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Freezing and optional glazing (`freezing_glazing`)

#### Inputs

##### Product flows

###### Prepared freshwater fish input (`prepared_fish_to_freezing`)

Record the prepared intermediate transferred from `receiving_preparation` and preserve lot identity.

- Selected flow: Prepared freshwater fish intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass reconciled to the upstream process output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg frozen fish transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepared_transfer`
- Sources: `reference-mass-identity`
- Range: Broad replaceable freezing-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: kg/kg frozen fish transferred
  - Basis: prepared fish input per kg frozen fish transferred to packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing electricity (`freezing_electricity`)

Record metered electricity for freezing equipment and attributable auxiliary loads, excluding separately recorded frozen-storage electricity.

- Selected flow: Electricity, declared grid or supplier mix (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh (UUID unresolved)
- Amount rule: metered electricity allocated to freezing and normalized to frozen output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen fish transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-2021-2279`
- Range: Broad replaceable freezing-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg frozen fish transferred
  - Basis: freezing electricity per kg frozen fish transferred to packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

Record glazing water only when glaze is applied; declare whether glaze is included in the commercial product mass and reference-mass convention.

- Selected flow: Potable glazing water (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured water supplied less separately measured non-retained water, or direct glaze mass measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg frozen fish transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_records`
- Sources: `codex-cxc-52-2003`
- Range: Broad replaceable glaze screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg frozen fish transferred
  - Basis: retained glaze water per kg frozen fish transferred to packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant makeup (`freezing_refrigerant_makeup`)

Record refrigerant purchases or charge additions attributable to freezing equipment when a direct leakage record is unavailable.

- Selected flow: Facility-specific refrigerant (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured make-up mass allocated to freezing equipment and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen fish transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`
- Range: Broad replaceable refrigerant-makeup screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg frozen fish transferred
  - Basis: refrigerant makeup allocated per kg frozen fish transferred to packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen fish intermediate (`frozen_fish_intermediate`)

Record frozen fish transferred to packing before packaging is added and reconcile it with prepared fish, retained glaze, rejects, and inventory change.

- Selected flow: Frozen freshwater fish intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass on the declared glaze convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg frozen fish transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_transfer`
- Sources: `codex-cxc-52-2003`; `reference-mass-identity`
- Range: Frozen-transfer mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.2
  - Unit: kg/kg declared frozen transfer output
  - Basis: recorded frozen intermediate per kg declared frozen transfer output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Refrigerant emitted to air (`freezing_refrigerant_emission`)

Calculate refrigerant emitted from service and inventory records for the declared freezing equipment; distinguish recovered, destroyed, transferred, and emitted quantities.

- Selected flow: Facility-specific refrigerant emission to air (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculated refrigerant loss allocated to freezing equipment and normalized to frozen output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen fish transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`; `reference-mass-identity`
- Range: Broad replaceable direct-refrigerant-emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg frozen fish transferred
  - Basis: refrigerant emitted to air per kg frozen fish transferred to packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and frozen storage (`packaging_storage`)

#### Inputs

##### Product flows

###### Frozen fish received for packing (`frozen_fish_to_packaging`)

Record the frozen intermediate transferred from `freezing_glazing` using the same glaze and net-mass convention.

- Selected flow: Frozen freshwater fish intermediate (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass reconciled to the upstream process output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen freshwater fish reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_transfer`
- Sources: `reference-mass-identity`
- Range: Broad replaceable packing-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg reference product
  - Basis: frozen intermediate input per kg net frozen reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging by material and actual mass; disclose whether reusable transport packaging is modelled per trip or by lifetime allocation.

- Selected flow: Material-specific packaging products (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or bill-of-material packaging mass issued to the product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen freshwater fish reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Broad replaceable packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: packaging material issued per kg net frozen reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-storage electricity (`storage_electricity`)

Record metered electricity for cold storage and attributable auxiliary loads over the declared lot-weighted storage duration.

- Selected flow: Electricity, declared grid or supplier mix (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh (UUID unresolved)
- Amount rule: metered storage electricity allocated by documented causal driver and normalized to dispatched reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen freshwater fish reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`
- Sources: `eu-pef-2021-2279`
- Range: Broad replaceable frozen-storage electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg reference product
  - Basis: allocated frozen-storage electricity per kg net frozen reference product for the declared duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen freshwater fish reference product (`frozen_freshwater_fish_reference`)

This is the single declared reference output at facility-gate dispatch.

- Selected flow: Freshwater fish, frozen `1c2a109f-6b9a-47eb-88a7-232025a03c81`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net frozen freshwater fish
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `reference-mass-identity`
- Range: Fixed reference-mass identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: declared reference-flow output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-mass-identity`

##### Waste flows

###### Packaging scrap and rejected packs (`packaging_waste`)

Record packaging scrap, damaged packaging, and rejected packed product by material and treatment destination; do not include post-consumer packaging waste inside the facility-gate boundary.

- Selected flow: Material-specific packaging waste (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured packaging waste transferred to each treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen freshwater fish reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Broad replaceable packaging-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: packaging waste per kg net frozen reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared processes and multi-output operations | Subdivide metered operations or use direct causal assignment before applying allocation. Preserve separate records where a process or utility can be measured independently. | `eu-pef-2021-2279` |
| `allocation_physical` | fish products, saleable by-products, residues, utilities, and shared storage | When allocation cannot be avoided, use a documented physical relationship that reflects the causal use of resources or generation of outputs; mass is not automatic when another physical driver is more causal. | `eu-pef-2021-2279` |
| `allocation_other_relation` | multi-output operation lacking a defensible physical relation | Use another documented relationship, including economic allocation only where physical causality is not defensible; record values, currency, price period, geography, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste_reclassification` | residues and rejected fish | Treat a flow as a co-product only when it has a documented product function and destination; otherwise model the declared waste treatment without assigning an invented credit. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_fish` | `receiving_preparation` | received freshwater fish | receiving record | lot_id; supplier; species; wild_or_farmed; source_geography; received_form; temperature_state; gross_mass; accepted_mass; receipt_time | calibrated scale and acceptance log | kg; °C; timestamp | each lot | full reporting period | all included receiving points | sum accepted mass by declared product and origin; retain excluded-lot records | scale calibration; supplier document; lot traceability; temperature record |
| `cp_water_records` | `receiving_preparation` | process and sanitation water | meter or utility record | meter_id; opening_reading; closing_reading; period; shared_users; allocation_driver | dedicated meter or reconciled facility water balance | kg or m3 with measured conversion basis | meter interval and at least monthly | full reporting period | included preparation and sanitation areas | subtract unrelated use and allocate shared use by documented causal driver | meter calibration; utility invoice; reconciliation |
| `cp_prepared_transfer` | `receiving_preparation` | prepared fish transfer | batch mass-balance record | lot_id; accepted_mass; transfer_mass; residue_mass; wastewater_mass; inventory_change; timestamp | calibrated scale and batch reconciliation | kg | each batch | full reporting period | all included preparation lines | sum transfer mass and reconcile unexplained difference by lot | scale calibration; signed batch sheet; balance exception log |
| `cp_residue_records` | `receiving_preparation` | residues and rejects | waste or by-product dispatch record | lot_id; material_type; mass; destination; product_or_waste_status; dispatch_reference | calibrated scale and destination document | kg | each transfer | full reporting period | all included preparation lines | sum separately by material, status, and destination | scale calibration; invoice or waste transfer note |
| `cp_wastewater_records` | `receiving_preparation` | wastewater to treatment | meter or water-balance record | meter_reading; water_input; retained_water; residue_water; discharge_or_transfer; treatment_route | dedicated meter or reconciled water balance | kg or m3 with measured conversion basis | meter interval and at least monthly | full reporting period | all included process drains | sum by treatment route and reconcile to attributable water input | meter calibration; sampling or transfer record; reconciliation |
| `cp_energy_records` | `freezing_glazing` | freezing electricity | electricity meter record | meter_id; opening_reading; closing_reading; period; frozen_output; shared_loads; allocation_driver | dedicated submeter or documented allocation from facility meter | kWh | meter interval and at least monthly | full reporting period | included freezing equipment and auxiliaries | subtract separately metered loads and divide attributable kWh by frozen transfer output | meter calibration; invoice; allocation worksheet |
| `cp_glaze_records` | `freezing_glazing` | retained glaze | batch mass record | lot_id; pre_glaze_mass; post_glaze_mass; supplied_water; nonretained_water; glaze_convention | calibrated scale and batch water record | kg | each glazed batch | full reporting period | all glazing lines | retained glaze = post-glaze mass - pre-glaze mass, cross-checked against water balance | scale calibration; batch record; glaze convention approval |
| `cp_refrigerant_records` | `freezing_glazing` | refrigerant makeup and emission | equipment service and inventory record | equipment_id; refrigerant_type; opening_charge; additions; recoveries; transfers; closing_charge; service_date; process_assignment | service log and refrigerant inventory reconciliation | kg | each service event and annual reconciliation | full reporting period | all included freezing and storage equipment, separately assigned where possible | loss = opening charge + additions - recoveries - transfers - closing charge; allocate only shared equipment | technician record; purchase record; charge reconciliation |
| `cp_frozen_transfer` | `freezing_glazing` | frozen intermediate transfer | batch transfer record | lot_id; prefreeze_mass; retained_glaze; reject_mass; frozen_transfer_mass; inventory_change; temperature; timestamp | calibrated scale and transfer log | kg; °C; timestamp | each batch | full reporting period | all freezing lines | sum transfers on declared glaze basis and reconcile batch balance | scale calibration; lot traceability; temperature record |
| `cp_packaging_records` | `packaging_storage` | packaging input and waste | bill of material and issue record | packaging_material; issued_mass; returned_mass; scrap_mass; packed_output; reusable_cycles | scale, procurement record, and production issue record | kg; count where converted by measured unit mass | each lot and reporting-period reconciliation | full reporting period | all included packing lines | net packaging input = issued - returned; separate scrap and reusable allocation | supplier specification; scale calibration; reconciliation |
| `cp_storage_records` | `packaging_storage` | frozen storage and dispatch | meter and warehouse record | meter_id; electricity; lot_id; entry_time; dispatch_time; stored_mass; storage_temperature; shared_users; allocation_driver | electricity meter plus warehouse management record | kWh; kg; °C; timestamp | meter interval and each lot movement | full reporting period | all included frozen rooms and dispatch points | allocate shared electricity by documented causal driver and calculate lot-weighted storage days | meter calibration; temperature log; inventory reconciliation; dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributable reporting-period amount / net frozen freshwater fish reference output | attributable amount; net reference output | amount per 1 kg reference product | `reference-mass-identity`; `eu-pef-2021-2279` |
| `calc_preparation_balance` | `receiving_preparation` | accepted fish + attributable water = prepared transfer + residues + wastewater transfer + retained water + inventory change + documented balance difference | accepted mass; water; transfer; residues; wastewater; inventory change | reconciled preparation mass balance | `reference-mass-identity`; `codex-cxc-52-2003` |
| `calc_glaze_mass` | glazed product only | retained glaze mass = post-glaze mass - pre-glaze mass; cross-check against supplied and non-retained water | pre-glaze mass; post-glaze mass; water records | kg retained glaze and declared inclusion in product mass | `reference-mass-identity`; `codex-cxc-52-2003` |
| `calc_refrigerant_loss` | freezing and storage equipment | loss = opening charge + additions - recoveries - transfers - closing charge; allocate shared loss by documented equipment driver | charge and service inventory; equipment assignment | kg refrigerant emitted by process | `reference-mass-identity`; `eu-pef-2021-2279` |
| `calc_storage_duration` | frozen storage | lot-weighted storage days = sum(lot mass × elapsed days) / sum(dispatched lot mass) | entry time; dispatch time; lot mass | day | `reference-mass-identity` |
| `calc_packaging_mass` | packaging | net packaging input = issued mass - returned unused mass; reusable packaging burden uses documented lifetime cycles and losses | issue, return, scrap, reuse-cycle, and output records | kg packaging and kg scrap per reference product | `reference-mass-identity`; `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and received fish | Preserve species or species group, wild/farmed origin, source geography, dressing state, glaze convention, packaging, and lot traceability; do not substitute a fillet, fish-meat, or marine-fish identity. | product specification; supplier record; lot record; `unsd-cpc-3-0-21211`; `codex-cxs-190-1995` |
| `dq_measurement` | mass, energy, water, temperature, and time | Use calibrated or verified measurement systems; document conversions, shared-meter allocation, missing readings, and balance exceptions. | calibration record; meter record; calculation worksheet; `eu-pef-2021-2279` |
| `dq_temporal` | all foreground activity | Cover a representative operating period including seasonal production and storage variation, or disclose limitations and justify extrapolation. | reporting-period completeness record; production schedule; `eu-pef-2021-2279` |
| `dq_completeness` | all included processes | Reconcile production, inventory, utilities, packaging, residues, wastewater, refrigerant, and dispatch records; investigate material unexplained differences. | mass and energy reconciliation; exception log; `eu-pef-2021-2279` |
| `dq_representativeness` | downstream use | Assess technological, geographical, temporal, and product representativeness against the declared frozen-fish system and disclose deviations. | representativeness assessment; metadata record; `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm exactly one reference output uses UUID `1c2a109f-6b9a-47eb-88a7-232025a03c81`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and amount 1 kg. | `reference-mass-identity` |
| `validate_scope_identity` | product metadata | Confirm freshwater species or species group, wild/farmed origin, whole or dressing state, glaze convention, packaging, and upstream dataset are declared, and reject fillet, separated fish-meat, liver/roe, marine-fish, or other preserved-product substitutions. | `unsd-cpc-3-0-21211`; `codex-cxs-190-1995` |
| `validate_process_coverage` | process map and inventory | Confirm receipt/preparation, freezing, optional glazing where used, packaging, frozen storage, sanitation, residues, wastewater, refrigerant, and dispatch are recorded or explicitly justified as not applicable. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validate_mass_balance` | each lot and reporting period | Reconcile fish, retained glaze, packaging, residues, wastewater, and inventory change on the declared mass basis; flag unexplained differences for review rather than forcing balance. | `reference-mass-identity`; `eu-pef-2021-2279` |
| `validate_energy_and_cold_storage` | freezing and storage | Confirm freezing and storage energy are not double counted, storage duration and temperature are declared, and shared loads use a documented allocation driver. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validate_provisional_ranges` | all `reasoned_estimate` ranges | Treat broad provisional ranges as screening aids only; a value outside them requires investigation, not automatic rejection, and reviewed evidence shall replace them before publication-critical use. |  |
| `validate_allocation` | multi-output and shared operations | Confirm subdivision or direct assignment was attempted first and every remaining allocation method, factor, and sensitivity is disclosed. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for processing freshwater fish into frozen whole or dressed fish at the declared facility gate |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for product LCAs and lifecycle models when the declared qualifiers and representativeness conditions are met |
| allowed_use | Frozen freshwater fish studies with representative species, origin, dressing state, upstream production, facility technology, glaze convention, packaging, storage duration, geography, time period, and allocation |
| excluded_use | Direct representation of fishing or aquaculture; live/fresh/chilled fish; frozen fillets or separated fish meat; marine fish; other preserved products; downstream distribution, retail, cooking, consumption, or end-of-life without additional datasets |
| required_metadata | PCR id; dataset version; reference-flow UUID; species; wild/farmed origin; upstream dataset; received and final product state; dressing state; glaze convention; packaging; facility geography; technology; storage temperature and duration; reporting period; allocation; cut-offs; data sources |
| required_quality_disclosure | Primary-data share; measurement and calibration coverage; mass/energy reconciliation; missing-data treatment; technological, geographical, and temporal representativeness; allocation sensitivity; unresolved UUIDs; replacement status of provisional ranges |
| update_trigger | Material change in species mix, origin, dressing or glaze convention, freezing/storage technology, packaging, facility, energy supply, refrigerant, allocation, reporting period, official classification scope, source guidance, or verified Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21211` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, subclass 21211 Freshwater fish, frozen, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Product-category scope, included freshwater-fish forms, and exclusions for fillets and fish meat |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (retrieved 2026-08-11) | Process decomposition, receiving and hygiene controls, freezing, glazing, packaging, storage, temperature records, and traceability |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius, Standard for Quick-Frozen Fish Fillets, CXS 190-1995, https://www.fao.org/input/download/standards/115/CXS_190e.pdf (retrieved 2026-08-11) | Definition used only to distinguish and exclude fish fillets from this whole/dressed-fish PCR; not used to extend fillet requirements to CPC 21211 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | System-boundary completeness, materiality, allocation hierarchy, packaging and energy modelling, data quality, representativeness, and disclosure |
| `reference-mass-identity` | `method_factor` | PCR reference-flow and conservation identity: all attributable inventory quantities are normalized to the declared 1 kg net reference output and mass balances preserve measured inputs, outputs, and inventory change | Reference normalization, mass balances, glaze, packaging, storage-duration, and refrigerant-inventory calculations |
