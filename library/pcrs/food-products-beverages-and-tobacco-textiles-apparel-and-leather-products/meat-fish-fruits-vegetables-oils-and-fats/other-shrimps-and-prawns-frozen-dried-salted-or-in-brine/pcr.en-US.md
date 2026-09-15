---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-shrimps-and-prawns-frozen-dried-salted-or-in-brine
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other shrimps and prawns, frozen, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers CPC 3.0 subclass 21256: other shrimps and prawns, whether in shell or not, preserved by exactly one declared route—frozen, dried, salted, or in brine—and supplied as a conforming saleable product at the processing-facility gate. The dataset shall declare species, raw or cooked state, shell/head/peel presentation, preservation route, packing medium, moisture or salt condition when applicable, and storage condition.

Live, fresh, or chilled products are excluded. Cooked, smoked, marinated, canned, breaded, pasteurized, sterilized, or otherwise processed products are excluded. Smoking is therefore an out-of-scope route and shall not be stacked with freezing, drying, salting, or brining under this PCR. A frozen product that was cooked before freezing is also outside CPC 21256 even though CXS 92-1981 has a broader product-standard scope.

The Tiangong product flow `Processed South American White Shrimp` (`e7d7c254-044d-4a15-9d72-2e2a871bb67b`) is a narrower representative within CPC 21256. It is not a generic category flow and its UUID does not cover every species, presentation, or preservation route in CPC 21256. Use it only when the concrete foreground product is semantically consistent with processed South American white shrimp; otherwise retain this PCR scope but obtain a reviewed product-flow identity that matches the represented product before publication.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-shrimps-and-prawns-frozen-dried-salted-or-in-brine` |
| classification_refs | CPC 3.0 `21256` |
| covered_products | Other non-cold-water shrimps and prawns, shell-on or peeled, raw and preserved by one declared route: frozen, dried, salted, or in brine. |
| excluded_products | Live, fresh, chilled, cooked, smoked, marinated, canned, breaded, pasteurized, sterilized, or otherwise processed crustaceans; cold-water shrimps and prawns classified separately. |
| representative_product | Conforming saleable preserved shrimp or prawn. The selected Tiangong flow represents processed South American white shrimp only and is narrower than the PCR category. |
| production_route | Receive and prepare raw shrimp; apply exactly one of freezing, drying, salting, or brining; package and store under the route-specific condition. |
| market_state | Raw preserved product at the processing-facility gate, with presentation, preservation route, packing medium, and temperature/moisture/salt condition declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a conforming saleable CPC 21256 shrimp or prawn product at the processing-facility gate. |
| How much | 1 kg net product, excluding packaging and measured under the applicable route-specific mass condition. |
| How well | Species, presentation, raw state, mutually exclusive preservation route, packing medium, and applicable glaze, drained-mass, moisture, salt, and storage qualifiers are declared. |
| How long or cycle | One production lot delivered at the declared facility gate; no service duration is claimed. |
| reference_flow_link | `saleable_preserved_shrimp` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg conforming saleable product |
| Reference product flow | Processed South American White Shrimp `e7d7c254-044d-4a15-9d72-2e2a871bb67b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and scientific name where available; South American white shrimp applicability or alternative reviewed flow identity; shell/head/peel presentation; raw state; preservation route; packing medium; packaging excluded; frozen deglazed net mass and storage temperature when frozen; moisture content when dried; salt content when salted; draining method and drained mass when in brine; edible fraction if reported |

The reference mass is product mass, not edible-only mass. Shell and other integral presentation parts remain in the reference mass when sold with the product; edible fraction is disclosed separately. Secondary and tertiary packaging are never part of the 1 kg reference flow. Frozen glazed product is normalized to net mass exclusive of glaze. Brined product is normalized to drained product mass using the declared draining procedure; packing brine is inventoried separately. Dried and salted products are weighed at the declared sale moisture and salt condition. Cross-route comparisons require matching these qualifiers or an explicit, disclosed conversion to a common dry-matter or edible-product basis.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all results to 1 kg saleable product; exclude packaging and route-specific packing medium unless it is explicitly part of the product definition. |
| `frozen_deglazed_mass` | frozen route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use deglazed net product mass, disclose glaze water separately, and record frozen storage temperature; CXS 92-1981 requires net contents exclusive of glaze and identifies -18 °C or colder for quick-frozen storage. |
| `brined_drained_mass` | brine route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use drained product mass after a documented draining method and time; inventory supplied and discharged brine separately and disclose salt concentration. |
| `dried_salted_condition` | dried or salted route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure at sale condition and declare moisture content for dried product and salt content for salted product; do not silently convert between wet, dry, or salt-adjusted mass. |
| `presentation_mass` | shell-on, headed, peeled, or other presentation | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Include integral sold presentation parts in product mass and report edible fraction separately when used; compare only like presentations unless the conversion is explicit. |
| `packaging_mass` | packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure packaging as a separate product input by material; it shall not be included in the 1 kg reference product. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground processing | Include receiving, sorting, washing, trimming or peeling when performed, the one declared preservation route, packaging, route-required on-site storage, directly used utilities, rejects, wastewater or spent brine, and directly controlled waste handling through transfer from the facility. | `codex-cxc-52-2003`; `eu-pef-2021` |
| `exclusive_preservation_route` | preservation route | Model exactly one included route—frozen, dried, salted, or in brine. Do not cumulate route candidates. Smoking and cooking move the product outside CPC 21256. | `unsd-cpc-3-0`; `codex-cxs-92-1981` |
| `upstream_linkage` | purchased inputs | Link raw shrimp, water, energy carriers, salt or prepared brine, packaging, and treatment services to geographically and technologically appropriate upstream datasets; do not omit them merely because production occurs outside the foreground facility. | `eu-pef-2021` |
| `downstream_exclusion` | downstream stages | Exclude distribution beyond the facility gate, retail, consumer preparation, use, and end-of-life unless the declared study scope extends them; disclose every extension separately. | `eu-pef-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw, uncooked other shrimp or prawn received at the processing facility, with origin, species, presentation, temperature, and received mass declared. |
| starting_condition_role | Foreground entry point; aquaculture or wild-catch production and inbound transport are represented by linked upstream datasets rather than re-authored here. |
| product_classification_scope | CPC 3.0 21256 only: frozen, dried, salted, or brined other shrimps and prawns. |
| recursive_input_rule | If an input is already a CPC 21256 preserved shrimp product, record it as a visible upstream product input and include only additional operations actually performed; do not recursively claim the same preservation step. |
| upstream_dataset_requirement | Require source-route, geography, technology, reference mass condition, and temporal coverage suitable for received shrimp and every material or energy input. |
| disclosure | Declare included process steps, excluded upstream/downstream stages, one preservation route, raw state, mass condition, yield basis, waste destinations, and any proxy dataset. |

## 6. Process Inventory Structure

Use the following ranges only as broad candidate-stage screening aids when stronger evidence is unavailable. They apply to the declared route and actual facility technology, are not allowed or typical conformance intervals, and never replace foreground measurements. Replace each `reasoned_estimate` range when a reviewed source-backed range becomes available or after at least three representative production batches provide traceable records; investigate values outside the provisional screen rather than automatically rejecting them.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving and preparation | required | Always; record only preparation steps actually performed. | Foreground raw-material receipt, sorting, washing, and presentation preparation. | kg prepared raw shrimp output |
| `route_preservation` | Declared preservation route | required | Exactly one route is declared: frozen, dried, salted, or in brine. | Foreground preservation; route candidates are mutually exclusive. | kg preserved shrimp output at declared condition |
| `packaging_storage` | Packaging and route-specific storage | required | Storage utilities apply only when required by the declared product state and residence time. | Foreground packaging and facility-gate product preparation. | 1 kg saleable reference product |

### Process: Receiving and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Received raw shrimp or prawn (`received_raw_shrimp`)

Record the weighed, uncooked raw shrimp entering the facility, including declared species, origin, presentation, temperature, and upstream dataset.

- Selected flow: Raw shrimp or prawn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received batch mass allocated to the reference product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional raw-material screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg saleable product
  - Basis: declared presentation and one preservation route; replace with traceable batch yields
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record metered potable water or clean seawater used for washing, thawing when applicable, and preparation; exclude water not used by this product lot through documented allocation.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or invoice-reconciled water attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_preservation_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg saleable product
  - Basis: facility preparation water; replace with representative metering
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared raw shrimp (`prepared_raw_shrimp`)

Record the measured raw shrimp transferred to the declared preservation route at its actual shell/head/peel presentation.

- Selected flow: Prepared raw shrimp or prawn
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving and preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional preparation-yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 1
  - Unit: kg/kg received raw shrimp
  - Basis: declared presentation; replace with batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shell, head, offal, and rejected material (`preparation_organic_residues`)

Record each destination separately and distinguish saleable co-product, by-product, and waste status.

- Selected flow: Shrimp preparation organic residues
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated residue mass by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional organic-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4
  - Unit: kg/kg saleable product
  - Basis: declared shell/head/peel presentation; replace with batch mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater transferred to on-site or external treatment, net of documented internal reuse.

- Selected flow: Wastewater from shrimp preparation
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or water-balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_preservation_records`
- Range: Provisional preparation-wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg saleable product
  - Basis: preparation water balance; replace with representative discharge records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Declared preservation route (`route_preservation`)

Only the rows for the one declared route are active. Do not add freezing, drying, salting, and brining inputs together.

#### Inputs

##### Product flows

###### Prepared raw shrimp input (`preservation_shrimp_input`)

Record the prepared raw shrimp received from `receiving_preparation` without double counting an upstream CPC 21256 product.

- Selected flow: Prepared raw shrimp or prawn
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Freezing and frozen-holding electricity (`freezing_electricity`)

Include only for the frozen route and record refrigeration, freezing, glazing-system, and attributable in-facility frozen-holding electricity through the facility gate.

- Selected flow: Electricity supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen saleable product and declared holding time
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_preservation_records`
- Sources: `codex-cxs-92-1981`
- Range: Provisional frozen-route electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh/kg frozen product
  - Basis: freezing plus declared facility holding; replace with submetered route data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying energy (`drying_energy`)

Include only for the dried route; record delivered heat, fuel, and electricity as separate actual carriers when data are available.

- Selected flow: Process energy for drying
- Flow property / unit: Energy / MJ
- Amount rule: metered carrier use converted without hiding carrier identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg dried saleable product at declared moisture content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_preservation_records`
- Range: Provisional dried-route energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 50
  - Unit: MJ/kg dried product
  - Basis: drying energy at declared final moisture; replace with metered carrier records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Food-grade salt (`salting_salt`)

Include only for the salted route; record actual food-grade salt addition and recovered or discharged salt separately.

- Selected flow: Food-grade salt
- Flow property / unit: Mass / kg
- Amount rule: weighed salt charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg salted saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_preservation_records`
- Range: Provisional salted-route salt screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1
  - Unit: kg/kg salted product
  - Basis: declared salt condition; replace with batch formulation and salt-content records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Prepared brine (`brining_solution`)

Include only for the brine route; record supplied brine mass and salt concentration, including make-up water and salt through linked upstream flows.

- Selected flow: Food-grade brine solution
- Flow property / unit: Mass / kg
- Amount rule: measured brine charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg drained brined saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_preservation_records`
- Range: Provisional brine-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 10
  - Unit: kg/kg drained brined product
  - Basis: declared brine concentration and draining method; replace with batch formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Preserved shrimp at declared condition (`preserved_shrimp_output`)

Record the preserved product at the route-specific measurement condition before final packaging.

- Selected flow: Preserved shrimp or prawn
- Flow property / unit: Mass / kg
- Amount rule: measured deglazed, sale-moisture, sale-salt, or drained mass as applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_condition`
- Sources: `codex-cxs-92-1981`

##### Waste flows

###### Spent brine and preservation wastewater (`spent_brine_wastewater`)

Include for brining, salting, glazing, thawing, or cleaning only when generated; record destination and net out only documented internal reuse.

- Selected flow: Spent brine or preservation wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or material-balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_preservation_records`
- Range: Provisional spent-brine and wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg saleable product
  - Basis: declared route and reuse; replace with discharge and formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and route-specific storage (`packaging_storage`)

#### Inputs

##### Product flows

###### Preserved shrimp input (`packaging_product_input`)

Record the route-conditioned product transferred from `route_preservation`.

- Selected flow: Preserved shrimp or prawn
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and allocated tertiary packaging separately by material; none is part of the 1 kg reference product.

- Selected flow: Packaging material by material type
- Flow property / unit: Mass / kg
- Amount rule: weighed packaging issue or bill-of-materials calculation reconciled to packed units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg saleable product
  - Basis: declared packaging configuration; replace with bill-of-materials records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route-required storage electricity (`storage_electricity`)

Record only storage electricity required before the facility gate, normalized by actual residence time and storage loading; frozen storage shall maintain the declared frozen condition.

- Selected flow: Electricity supplied to storage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity allocated by storage occupancy and time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg saleable product and declared facility residence time
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`
- Sources: `codex-cxs-92-1981`
- Range: Provisional facility-storage electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg saleable product
  - Basis: declared temperature, loading, and residence time; replace with submetered storage records
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Saleable preserved shrimp reference product (`saleable_preserved_shrimp`)

This is the reference output. It is the product alone, exclusive of packaging, glaze, and brine packing medium under the applicable measurement rules.

- Selected flow: Processed South American White Shrimp `e7d7c254-044d-4a15-9d72-2e2a871bb67b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg conforming saleable product under the declared route-specific mass condition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | separable routes and batches | First avoid allocation by separating preservation routes, batches, meters, and independently measured preparation or packaging steps. | `eu-pef-2021` |
| `physical_allocation` | unavoidable joint production | When subdivision is not possible, use a documented physical causal relationship that reflects how inputs and emissions change with the co-product output; mass alone is not automatically causal. | `eu-pef-2021` |
| `economic_fallback` | valuable co-products without defensible physical causality | Use economic allocation only as a documented fallback, based on consistent prices and a declared time/geography basis; disclose a sensitivity result when allocation materially affects conclusions. | `eu-pef-2021` |
| `waste_and_residue_status` | shells, heads, offal, rejects, and recovered salt or brine | Declare legal and market status, destination, and any revenue. Do not credit waste as a co-product without evidence that it leaves the system for a useful function. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `receiving_preparation`; `route_preservation`; `packaging_storage` | raw, intermediate, product, reject, and residue masses | calibrated scale records and batch ledger | batch_id; species; origin; presentation; route; received_mass; transfer_mass; product_mass; residue_mass; destination | direct weighing at receipt and transfer points | kg | every batch | minimum three representative batches; preferably twelve months | each facility and line | sum by batch, reconcile inputs and outputs, then divide by route-conditioned reference output | scale calibration; signed batch ledger; reconciliation explanation |
| `cp_utility_preservation_records` | `receiving_preparation`; `route_preservation` | water, electricity, heat/fuel, salt/brine, wastewater, and spent brine | meters, invoices, formulation sheets, and discharge logs | batch_id; meter_start; meter_end; carrier; quantity; salt_mass; brine_mass; concentration; discharge_mass; reuse_mass | submeter where possible; otherwise documented allocation from facility totals | native carrier units, kg, kWh, MJ | each batch or monthly with production reconciliation | representative operating period covering route variability | each facility and preservation line | subtract documented reuse, allocate only shared totals, and normalize to route-conditioned reference output | meter calibration; invoices; formulation sheets; allocation record |
| `cp_product_condition` | `route_preservation` | reference-mass condition and product quality | product specification and laboratory or production records | species; raw_state; presentation; route; gross_mass; packaging_mass; glaze_mass; deglazed_mass; draining_method; drained_mass; moisture_content; salt_content; storage_temperature | route-appropriate weighing and documented test method | kg, %, °C | every lot or validated sampling plan | same lots as inventory records | each product specification and line | select the applicable route-specific net mass and retain all qualifiers | approved specification; test report; sampling record |
| `cp_packaging_records` | `packaging_storage` | packaging by material | bill of materials and packaging issue records | packaging_type; material; unit_mass; units_used; returned_units; product_mass | weigh representative units and reconcile issued quantities | kg | each packaging configuration and change | current configuration | each packing line | net packaging mass divided by saleable product mass | supplier specification; scale calibration; reconciliation |
| `cp_storage_records` | `packaging_storage` | route-required storage electricity | electricity meter and occupancy log | meter_start; meter_end; storage_temperature; product_mass; occupancy; residence_time | submetering or documented load/occupancy calculation | kWh, kg, h | monthly and for material operating changes | representative seasonal period | each storage system | allocate by documented occupancy and time, then normalize to product mass | meter record; temperature log; occupancy record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | saleable product | Reference mass = gross packed mass − packaging mass − glaze mass for frozen glazed product − separable packing brine; use documented drained mass for the brine route. | gross_mass; packaging_mass; glaze_mass; drained_mass; route | kg reference product | `codex-cxs-92-1981` |
| `calc_route_yield` | each declared route | Route yield = route-conditioned saleable product mass / received raw shrimp mass; retain presentation, moisture, salt, glaze, and draining qualifiers with the result. | product_mass; received_mass; qualifiers | kg/kg and qualifier set |  |
| `calc_wastewater` | water and brine balance | Wastewater or spent brine = supplied water/brine − water retained in product − measured evaporation − documented reuse − separately recovered streams; report uncertainty when terms are estimated. | supplied_water; supplied_brine; retained_water; evaporation; reuse; recovered_streams | kg discharge |  |
| `calc_storage_energy` | facility storage | Storage electricity per kg = allocated storage electricity / saleable product mass, with temperature, occupancy basis, and residence time retained. | storage_electricity; product_mass; storage_temperature; occupancy; residence_time | kWh/kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_scope` | product identity | Trace species, origin, raw state, presentation, CPC scope, and preservation route; demonstrate South American white shrimp compatibility when using the selected Tiangong flow or document a reviewed alternative flow. | product specification; supplier record; flow review record |
| `dq_route_separation` | process inventory | Keep frozen, dried, salted, and brined route records separate; do not average mutually exclusive routes into one foreground dataset. | batch route field; separate meters or allocation record |
| `dq_mass_condition` | reference flow | Retain gross, packaging, glaze/deglazed, drained, moisture, salt, edible-fraction, and storage-condition evidence only as applicable to the selected route and presentation. | protocol `cp_product_condition` records |
| `dq_completeness` | foreground boundary | Reconcile all major material, energy, product, co-product, residue, wastewater, brine, and packaging flows; explain every material imbalance and proxy. | mass/energy reconciliation; proxy register; data-gap log |
| `dq_temporal_technology` | representativeness | Use records representative of current facility technology and seasonal operating conditions; update after material changes in product, route, equipment, energy supply, yield, or waste destination. | coverage summary; change log; equipment and supplier records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_route` | product and route | The product shall be raw CPC 21256 shrimp or prawn preserved by exactly one of frozen, dried, salted, or brined routes; cooked and smoked products fail this PCR scope. | `unsd-cpc-3-0`; `codex-cxs-92-1981` |
| `validate_flow_semantics` | reference flow UUID | Use `e7d7c254-044d-4a15-9d72-2e2a871bb67b` only for a product semantically consistent with processed South American white shrimp; the UUID alone never proves coverage of all CPC 21256 products. |  |
| `validate_reference_mass` | reference flow | Confirm exactly 1 kg net saleable product, packaging excluded, with the applicable deglazed, drained, moisture, salt, presentation, and edible-fraction qualifiers recorded. | `codex-cxs-92-1981` |
| `validate_route_inventory` | process inventory | Rows for non-selected preservation routes shall be zero or absent; all material and energy rows applicable to the selected route shall be present and linked to records. |  |
| `validate_mass_balance` | batch and process outputs | Reconcile received mass to product, co-products, residues, retained packing medium, wastewater, and measured losses at each process; investigate and disclose unexplained imbalance. | `eu-pef-2021` |
| `validate_reasoned_estimates` | provisional ranges | Identify every `reasoned_estimate` as provisional, record its applicability, and replace it when reviewed source evidence or at least three representative batches become available; it shall not become a publication-critical allowed range without review. |  |
| `validate_allocation` | multifunctionality | Document subdivision, allocation basis, prices or physical causality, co-product status, and sensitivity when allocation materially changes the result. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for one product, facility, presentation, and mutually exclusive preservation route. |
| downstream_use | May be reviewed and published as a `secondary_dataset` or `background_dataset`, and projected to `process` and `lifecyclemodel` entities. |
| allowed_use | Route-matched modelling of raw frozen, dried, salted, or brined other shrimp/prawn products when reference-mass and product-flow semantics match. |
| excluded_use | Generic representation of all CPC 21256 products from the selected white-shrimp UUID; cooked or smoked products; cross-route comparison without a common disclosed mass basis; use of provisional ranges as verified performance. |
| required_metadata | PCR id; CPC code; product-flow UUID and semantic limitation; species; origin; raw state; presentation; preservation route; facility and geography; reference-mass condition; packaging; storage; temporal coverage; allocation; upstream datasets; waste destinations. |
| required_quality_disclosure | Completeness and reconciliation results; meter and scale coverage; proxy use; allocation sensitivity; mass-condition tests; route separation; uncertainty; remaining `reasoned_estimate` values and replacement plan. |
| update_trigger | Change in species or product-flow identity, presentation, preservation route, facility technology, energy supply, storage condition, packaging, yield, allocation, waste destination, applicable CPC/Codex/PEF guidance, or availability of stronger evidence replacing a reasoned estimate. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21256 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11). | Product scope, included preservation routes, and exclusion of live/fresh/chilled, cooked, smoked, and otherwise processed products. |
| `codex-cxc-52-2003` | Official guidance (`official_guidance`) | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf (retrieved 2026-08-11). | Receiving, preparation, process-control, hygiene, water, handling, and records context for fishery-product processing. |
| `codex-cxs-92-1981` | Standard (`standard`) | Codex Alimentarius, CXS 92-1981, Standard for Quick-Frozen Shrimps or Prawns, amended 2024, https://workspace.fao.org/sites/codex/Standards/CXS%2092-1981/CXS_092e.pdf (retrieved 2026-08-11). | Frozen-route product definition, raw/cooked-state declaration, -18 °C condition, glaze-water quality, net content exclusive of glaze, presentation, and storage labelling. |
| `eu-pef-2021` | Official guidance (`official_guidance`) | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11). | Life-cycle inventory completeness, system-boundary disclosure, multifunctionality hierarchy, data quality, and update requirements. |
