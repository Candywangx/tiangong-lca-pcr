---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-crustaceans-frozen-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other crustaceans, frozen, dried, salted or in brine

## 1. Scope and Applicability

This PCR applies to edible crustaceans other than shrimps and prawns that leave the reporting facility frozen, dried, dry-salted, or preserved in brine. It covers whole animals, sections, tails, claws, and picked meat, whether raw or cooked, when the declared product remains within that preservation scope.

The foreground boundary begins with accepted crustacean raw material at the processing-facility gate and ends with 1 kg net mass of packaged preserved product ready for dispatch. Harvest or aquaculture, inbound transport, distribution after dispatch, retail, preparation by the user, consumption, and end-of-life of packaging are outside this foreground boundary and require separate datasets when included in a study.

The foreground data package shall declare exactly which preservation route or measured product mix it represents. Frozen, dried, dry-salted, and brined production shall not be combined through an unconditional average. Canned, smoked-only, fermented, fresh/chilled-only, live, and shrimp or prawn products are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-crustaceans-frozen-dried-salted-or-in-brine` |
| classification_refs | CPC 3.0: 21259, exact classification reference |
| covered_products | Edible non-shrimp and non-prawn crustaceans preserved by freezing, drying, dry salting, or brining; whole, portioned, or meat forms; raw or cooked as declared |
| excluded_products | Shrimps and prawns; live or fresh/chilled-only crustaceans; canned, smoked-only, or fermented products; molluscs and other aquatic invertebrates; mixed seafood products without separable crustacean inventory |
| representative_product | Packaged preserved other-crustacean product at the processing-facility gate |
| production_route | Receipt and primary preparation, one explicitly declared preservation route, then packing and route-appropriate storage |
| market_state | Frozen, dried, dry-salted, or in brine; raw/cooked status and whole/portion/meat form declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible other-crustacean product preserved by the declared route and ready for dispatch |
| How much | 1 kg net product mass, excluding packaging and free draining liquid unless that liquid is sold as part of the declared product |
| How well | Species or commercial group, anatomical form, raw/cooked state, preservation route, food-safety acceptance basis, and route-specific condition are declared |
| How long or cycle | One production lot through facility dispatch; storage duration within the foreground boundary is declared |
| reference_flow_link | The reference product output `final_reference_product` from `packing_and_storage` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other crustaceans, frozen, dried, salted or in brine `ecae55b8-a320-44e8-9ea2-98d7ff34e4e3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or commercial group; wild-caught or farmed origin when known; whole/section/meat form; raw or cooked state; exact preservation route; glazing share for frozen product; final moisture basis for dried product; salt addition and dry-salted or brined state; whether brine is included in sale mass; packaging format; dispatch temperature; foreground storage duration |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1 kg net edible product at dispatch. Exclude packaging and separately draining brine; disclose and subtract ice glaze not sold as product mass. |
| `route_condition_basis` | Frozen, dried, dry-salted, or brined product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass at the declared dispatch condition and report glaze, moisture, and salt/brine basis needed to compare lots. Do not convert between preservation states without measured mass and condition data. |
| `energy_unit_consistency` | Electricity and thermal energy | Energy | kWh for electricity; MJ for thermal energy | Preserve metered units and document conversion factors. Allocate shared utility meters only through a documented calculation rule. |
| `mass_balance_basis` | Raw material, product, residues, water retained, and salt retained | Mass | kg | Reconcile input and output masses per lot; separately disclose evaporated water, drained liquid, wastewater, and unmeasured loss rather than forcing closure into product yield. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted edible-grade crustacean raw material at the facility gate, with species/group, origin, incoming form, raw/cooked state, temperature, and prior preservation disclosed |
| starting_condition_role | Upstream product input to the foreground preparation process |
| product_classification_scope | Other crustaceans preserved by freezing, drying, dry salting, or brining; shrimp and prawn products are outside scope |
| recursive_input_rule | If an input is already a product within this PCR scope, record it once as a technosphere input with an upstream dataset and do not reconstruct its prior preservation recursively inside the foreground boundary |
| upstream_dataset_requirement | Use a geographically and technologically representative harvest/aquaculture and inbound-supply dataset for received crustaceans, or disclose a proxy and its limitations |
| disclosure | Declare the actual route, incoming and outgoing product condition, cooking or shell removal, facility geography, storage duration, packaging, co-products, waste treatment, and any excluded on-site operation |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | foreground_processes | Include receipt, primary preparation, the declared preservation operation, packing, route-appropriate on-site storage, on-site water and energy, direct refrigerant loss, and wastes or effluents to the point they leave the facility. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_route_condition` | preservation_route | Include only operations actually used for the declared lot: freezing and frozen storage, drying and any associated heating, dry salting, or brining. A multi-route result requires measured route shares and separate route inventories before aggregation. | `codex-cxc-52-2003`; `fao-seafood-safety-quality-2003` |
| `boundary_food_safety_controls` | reception_and_processing | Include resources and losses caused by potable-water/clean-ice use, temperature control, sanitation, product rejection, and documented hazard controls when they occur in the foreground system. | `codex-cxc-52-2003`; `fao-seafood-safety-quality-2003` |
| `boundary_exclusions` | life_cycle_model | Model harvest/aquaculture, inbound transport, post-dispatch distribution, retail, use, and end-of-life in separate linked datasets; do not silently omit them from a cradle-to-grave study. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `reception_and_preparation` | Reception and primary preparation | required | All covered products | Foreground receipt, washing as used, grading, cooking as used, shell removal or cutting, and separation of rejects/residues | kg accepted crustacean input and kg prepared crustacean output |
| `declared_preservation` | Declared preservation route | required | Exactly one route or a measured product mix: freezing, drying, dry salting, or brining | Foreground route-specific preservation | kg preserved bulk product |
| `packing_and_storage` | Packing and route-appropriate storage | required | All covered products; cold storage applies only to the frozen route | Foreground packing, storage, and dispatch preparation | 1 kg net reference product |

### Process: Reception and primary preparation (`reception_and_preparation`)

#### Inputs

##### Product flows

###### Accepted crustacean raw material (`accepted_crustacean_input`)

Record the measured incoming mass that enters preparation.

- Selected flow: Other crustacean raw material; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured accepted lot mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_balance`
- Sources:
- Range: Provisional raw-material input QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg net reference product
  - Basis: broad candidate-stage range spanning meat, whole-product, and dried routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`preparation_water`)

Record potable or otherwise food-suitable water crossing the foreground boundary for washing, cooking, thawing, or sanitation allocated to the lot.

- Selected flow: Process water; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured water use or allocated meter record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-water QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net reference product
  - Basis: broad replaceable candidate-stage screening range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ice used in handling (`handling_ice`)

Record purchased or on-site-produced food-suitable ice actually used for the lot; avoid double counting water and ice production.

- Selected flow: Ice; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured ice charged to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional ice-use QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg net reference product
  - Basis: broad replaceable candidate-stage screening range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared crustacean intermediate (`prepared_crustacean_output`)

Calculate the prepared mass transferred to the declared preservation route from lot records.

- Selected flow: Prepared crustacean intermediate; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_balance`
- Sources:
- Range: Provisional preparation-yield QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1
  - Unit: kg/kg accepted crustacean input
  - Basis: prepared-output mass fraction of accepted input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shells, rejects, and other preparation residues (`preparation_residues`)

Separate measured edible rejects, shells, viscera, and other residues by destination; reclassify a sold output as a co-product.

- Selected flow: Crustacean preparation residue; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by treatment or sale destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted crustacean input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_balance`
- Sources:
- Range: Provisional residue-fraction QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.9
  - Unit: kg/kg accepted crustacean input
  - Basis: broad replaceable range for whole, portioned, and meat forms
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, including allocated sanitation water, without subtracting pollutants that require separate elementary or treatment records.

- Selected flow: Wastewater; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or water-balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_records`
- Sources:
- Range: Provisional preparation-wastewater QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net reference product
  - Basis: broad replaceable candidate-stage screening range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Declared preservation route (`declared_preservation`)

#### Inputs

##### Product flows

###### Prepared crustacean input (`prepared_crustacean_input`)

Transfer the prepared intermediate without duplicating upstream burdens.

- Selected flow: Prepared crustacean intermediate; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: equal to `prepared_crustacean_output` transferred to this route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_balance`
- Sources:

###### Preservation electricity (`preservation_electricity`)

Record metered or allocated electricity for freezing, drying fans, brine circulation, pumping, and route-specific equipment actually used.

- Selected flow: Electricity; Tiangong UUID pending review
- Flow property / unit: Energy / kWh
- Amount rule: metered or documented allocation of route electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_input_records`
- Sources:
- Range: Provisional preservation-electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh/kg preserved bulk product
  - Basis: broad replaceable range across declared routes and technologies
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy for cooking or drying (`preservation_thermal_energy`)

Include only when the declared route cooks the product or uses supplied heat for drying.

- Selected flow: Thermal energy; Tiangong UUID pending review
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel/steam/heat use converted to delivered thermal energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_input_records`
- Sources:
- Range: Provisional thermal-energy QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg preserved bulk product
  - Basis: broad replaceable range; zero only when no cooking or thermal drying occurs
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt input (`preservation_salt`)

Include food-grade salt only for dry salting or brining and record retained and discharged salt through the lot balance.

- Selected flow: Sodium chloride; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured salt charged to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_input_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional salt-input QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net reference product
  - Basis: broad replaceable range; must be zero for routes without added salt
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brining water (`brining_water`)

Include only for the brined route and distinguish fresh make-up water from recirculated brine.

- Selected flow: Process water; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured fresh water charged to brine preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_input_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional brining-water QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net reference product
  - Basis: broad replaceable range; must be zero outside the brined route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved bulk crustacean product (`preserved_bulk_output`)

Record product mass after the declared preservation route and before final packing.

- Selected flow: Preserved other-crustacean bulk product; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured preserved bulk transfer mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_balance`
- Sources:
- Range: Provisional preserved-bulk transfer QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg net reference product
  - Basis: broad replaceable allowance for packing loss and excluded free liquid
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent brine and preservation wastewater (`spent_brine_wastewater`)

Record spent brine, thaw/cook liquor, cleaning discharge, and other route wastewater separately where treatment differs.

- Selected flow: Saline wastewater or process wastewater; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or water-and-salt balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_effluent_records`
- Sources:
- Range: Provisional route-wastewater QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net reference product
  - Basis: broad replaceable range, with saline and non-saline streams distinguished
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refrigerant loss during freezing (`freezing_refrigerant_loss`)

Include only for freezing equipment within the foreground boundary; identify the refrigerant and avoid counting maintenance charge as an emission.

- Selected flow: Refrigerant emission to air; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: annual or event-based refrigerant loss allocated to the declared frozen-product throughput
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigeration_records`
- Sources:
- Range: Provisional refrigerant-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg frozen bulk product
  - Basis: broad replaceable candidate-stage screening range
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packing and route-appropriate storage (`packing_and_storage`)

#### Inputs

##### Product flows

###### Preserved bulk product input (`preserved_bulk_input`)

Transfer the route-specific preserved bulk product to packing without mixing undeclared preservation states.

- Selected flow: Preserved other-crustacean bulk product; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: equal to `preserved_bulk_output` transferred to packing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_balance`
- Sources:

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material by mass, including liners, cartons, labels, and route-specific barrier packaging.

- Selected flow: Packaging material by material type; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material mass less measured unused return, normalized to packed net product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional packaging-mass QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg net reference product
  - Basis: broad replaceable candidate-stage screening range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage electricity (`storage_electricity`)

Record electricity for route-appropriate on-site storage over the declared duration; cold storage is conditional on the frozen route.

- Selected flow: Electricity; Tiangong UUID pending review
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated storage electricity for declared throughput and duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product over declared foreground storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigeration_records`
- Sources:
- Range: Provisional storage-electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg net reference product
  - Basis: broad replaceable range over the declared foreground storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged reference product (`final_reference_product`)

This is the quantitative reference output after excluding packaging and any non-sale free liquid or glaze from net product mass.

- Selected flow: Other crustaceans, frozen, dried, salted or in brine `ecae55b8-a320-44e8-9ea2-98d7ff34e4e3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record measured foreground packing scrap by material and destination.

- Selected flow: Packaging waste by material type; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: packaging issued minus packaging incorporated and returned
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional packaging-scrap QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net reference product
  - Basis: broad replaceable candidate-stage screening range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refrigerant loss during frozen storage (`storage_refrigerant_loss`)

Include only for frozen-route storage within the foreground boundary.

- Selected flow: Refrigerant emission to air; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: annual or event-based refrigerant loss allocated by frozen storage throughput and duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen reference product over declared storage
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigeration_records`
- Sources:
- Range: Provisional storage-refrigerant QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg frozen reference product
  - Basis: broad replaceable candidate-stage screening range
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_processes | Avoid allocation by separately metering route, product form, cooking, preparation, packing, and storage operations whenever technically feasible. | `eu-pef-2021-2279` |
| `allocation_joint_outputs` | marketable_co_products | When subdivision is not feasible, apply a documented physical relation that reflects the underlying process. If no defensible physical relation exists and economic allocation is used, record price basis, reference period, currency, route, and a sensitivity result. | `eu-pef-2021-2279` |
| `allocation_residue_status` | shells_rejects_and_liquids | Outputs sent to treatment remain wastes and receive treatment burdens without avoided-product credit unless a consequential study explicitly requires it. A sold or internally used material is a co-product and shall be included in the allocation decision. | `eu-pef-2021-2279` |
| `allocation_route_separation` | multi_route_facilities | Allocate shared utilities using measured drivers such as equipment meter, operating time, throughput, storage volume-time, or another documented causal driver before aggregating separately calculated route results. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_balance` | `reception_and_preparation; declared_preservation; packing_and_storage` | raw, intermediate, final, residue, and free-liquid masses | weigh tickets and batch records | lot_id; route; product_form; incoming_mass; prepared_mass; preserved_mass; packed_net_mass; glaze_mass; free_liquid_mass; residue_mass | calibrated scales and reconciled batch records | kg | each lot | representative production period, normally at least 12 months or disclosed shorter campaign | each reporting facility and route | sum by lot and route, then divide by eligible net reference-product mass | scale calibration, lot traceability, and signed mass-balance review |
| `cp_water_ice_records` | `reception_and_preparation` | water and ice | meters, invoices, and batch charge logs | meter_start; meter_end; ice_mass; allocation_driver; sanitation_share | direct measurement preferred; documented causal allocation otherwise | kg | each lot or meter period | same period as product data | each facility | subtract non-production use and allocate to route/product using documented driver | meter checks, invoices, and allocation worksheet |
| `cp_route_input_records` | `declared_preservation` | electricity, thermal energy, salt, and brining water | meters, fuel/steam records, and formulation sheets | route; equipment; electricity; fuel_or_heat; conversion_factor; salt_charge; fresh_water; recirculated_brine | route meter or batch formulation record | kWh; MJ; kg | each lot or meter period | same period as product data | each facility and preservation route | aggregate only within the declared route and normalize to preserved output | meter calibration, invoices, formulation approval, and unit-conversion record |
| `cp_waste_effluent_records` | `reception_and_preparation; declared_preservation` | residues, wastewater, spent brine, and treatment destination | scales, discharge meters, manifests, and balance calculations | stream_id; saline_status; mass_or_volume; density; treatment; sale_status; destination | direct measurement preferred; documented balance where unavailable | kg | each lot or reporting period | same period as product data | each facility and stream | keep treatment destinations and saline/non-saline streams separate | manifests, meter records, sampling plan, and balance reconciliation |
| `cp_packaging_records` | `packing_and_storage` | packaging incorporated and scrap | bill of materials, purchase records, and scrap weights | material; units_issued; unit_mass; returned_units; scrap_mass; packed_net_mass | specification mass verified by sample weighing | kg | packaging run | same period as product data | each product format and facility | calculate incorporated mass by material per net product mass | current specifications, sample weights, and stock reconciliation |
| `cp_storage_refrigeration_records` | `declared_preservation; packing_and_storage` | storage electricity, duration, and refrigerant loss | meters, warehouse logs, refrigerant service records | route; storage_temperature; entry_time; dispatch_time; electricity; refrigerant_type; charge_added; recovered_mass; throughput | meter and service-log calculation | kWh; h or day; kg | monthly and each service event | same period as product data | each facility | allocate by measured zone meter or documented mass-volume-time driver | meter record, temperature log, service invoice, and leak calculation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = eligible lot or period amount / net kg of conforming reference product; exclude packaging, separately draining brine, and disclosed glaze from denominator | collected flow amount; packed net mass; glaze/free-liquid status | amount per 1 kg net reference product | `eu-pef-2021-2279` |
| `calc_mass_balance` | each production lot | reconcile received material, added water/ice/salt retained, intermediates, product, residues, discharged liquid, evaporated water, and documented unmeasured difference | `cp_lot_mass_balance`; `cp_water_ice_records`; `cp_waste_effluent_records` | lot mass-balance statement and yield | `codex-cxc-52-2003` |
| `calc_route_separation` | multi-route facilities | calculate each preservation route independently; aggregate only using measured net-product route shares for the declared reporting period | route inventory; route net output | explicitly weighted product mix | `eu-pef-2021-2279` |
| `calc_shared_utilities` | shared meters and storage | allocated utility = shared total × documented causal driver share; disclose driver and unallocated remainder | meter total; route operating time, throughput, or storage mass-volume-time | route-specific utility amount | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and raw material | Retain species/commercial group, origin, form, raw/cooked state, preservation route, lot, and dispatch condition; do not substitute shrimp/prawn or mollusc data without a disclosed proxy review. | classification record, supplier specification, lot traceability, and `unsd-cpc-3-0-2025` |
| `dq_route_and_food_safety` | preparation and preservation | Retain route-specific time-temperature, salting/brining or drying-control records and food-safety release evidence appropriate to the product; a failed or rejected lot is not conforming reference output. | HACCP or equivalent control records and `codex-cxc-52-2003`; `fao-seafood-safety-quality-2003` |
| `dq_temporal_coverage` | foreground activity data | Use a representative period covering seasonal and operational variability, normally 12 consecutive months; disclose a shorter seasonal campaign and justify representativeness. | dated meters, invoices, production logs, and `eu-pef-2021-2279` |
| `dq_completeness` | foreground inventory | Cover at least 95% of measured foreground input and output mass and all known environmentally relevant energy, refrigerant, saline-effluent, and waste streams; list exclusions and assess their significance. | mass balance, exclusion log, and `eu-pef-2021-2279` |
| `dq_measurement` | foreground records | Prefer calibrated measurement; document estimates, meter allocation, density conversions, missing-data treatment, and uncertainty. | calibration records, worksheets, and meter/invoice reconciliation |
| `dq_provisional_ranges` | reasoned_estimate ranges | Treat every provisional range as a screening flag, not a default publication value; replace it with foreground data or reviewed source evidence before activation unless methodology review explicitly accepts it. | review record and source replacement log |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | Confirm exactly 1 kg net product uses product flow `ecae55b8-a320-44e8-9ea2-98d7ff34e4e3`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| `validate_route_declaration` | product_and_process_map | Confirm preservation route, raw/cooked state, form, glaze/moisture/salt/brine basis, dispatch temperature, and storage duration are declared; reject unconditional mixing of routes. | `unsd-cpc-3-0-2025`; `codex-cxc-52-2003` |
| `validate_conditional_inputs` | declared_preservation | Confirm freezing and frozen-storage records occur only for frozen product, thermal drying only when used, salt only when added, and brining water/spent brine only for the brined route. | `codex-cxc-52-2003` |
| `validate_mass_balance` | each lot | Confirm raw, intermediate, product, residue, retained water/salt, wastewater/free liquid, evaporation, and unmeasured loss are reconciled without counting packaging as product. | `codex-cxc-52-2003` |
| `validate_allocation` | co_products_and_shared_operations | Confirm subdivision was attempted first and every remaining allocation has a causal driver, co-product/waste decision, and sensitivity when economic allocation is used. | `eu-pef-2021-2279` |
| `validate_food_safety_release` | conforming_output | Confirm the lot has the route-specific acceptance and food-safety control evidence required for its declared market state; rejected product is recorded as waste or rework, not reference output. | `codex-cxc-52-2003`; `fao-seafood-safety-quality-2003` |
| `validate_provisional_estimates` | inventory_ranges | Flag every `reasoned_estimate` as unresolved for methodology review and confirm it is not represented as measured, source-backed, or mandatory. |  |
| `validate_uuid_gaps` | non_reference_flows | Confirm unresolved non-reference Tiangong UUIDs remain explicit review items and are not replaced by unverified approximate flows. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Facility-gate foreground production dataset for a declared preserved other-crustacean product |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product and facility comparisons only when route, species/group, product form, dispatch condition, geography, technology, allocation, and storage basis are sufficiently comparable; may be linked with separate upstream and downstream datasets |
| excluded_use | Unqualified average across frozen, dried, dry-salted, and brined routes; proxy for shrimp/prawn, mollusc, canned, smoked-only, fermented, fresh/chilled, harvest/aquaculture, distribution, retail, cooking, or consumption |
| required_metadata | PCR id; facility and geography; reporting period; species/commercial group and origin; product form; raw/cooked state; declared route; glaze, moisture, salt/brine and net-mass basis; technology; storage duration/temperature; packaging; allocation; upstream datasets; waste treatment; data owners and review state |
| required_quality_disclosure | Primary-data share and period; meter coverage and allocation drivers; mass-balance difference; route shares; missing data and proxies; reasoned estimates; non-reference UUID gaps; food-safety release basis; uncertainty and exclusions |
| update_trigger | Material change in species mix, raw-material origin, product form, preservation technology or route share, energy/refrigerant system, formulation, yield, packaging, storage, allocation, regulation/food-safety control, or data older than the organization’s review interval |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory materials, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-11) | Classification scope and distinction of CPC 21259 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official Codex text listing and current English text, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-11) | Facility process decomposition, water/ice and hygiene controls, preservation-route controls, temperature handling, rejection and food-safety validation |
| `fao-seafood-safety-quality-2003` | official_guidance | FAO Fisheries Technical Paper 444, Assessment and Management of Seafood Safety and Quality, ISBN 92-5-104954-8, https://www.fao.org/4/y4743e/y4743e00.htm (retrieved 2026-08-11) | Seafood hazard-control evidence for fresh/frozen crustaceans and dried, salted, or lightly preserved products; traceability and food-safety quality records |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | System boundary completeness, foreground data quality, subdivision and allocation hierarchy, temporal representativeness, and transparent aggregation |
