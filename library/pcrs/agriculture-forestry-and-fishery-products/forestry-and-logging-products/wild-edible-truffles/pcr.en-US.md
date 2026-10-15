---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-truffles
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wild edible truffles

## 1. Scope and Applicability

This PCR covers fresh whole edible hypogeal truffle fruiting bodies gathered from untended terrestrial sources and supplied at a declared primary handover. Intended cultivation, inoculated orchards, irrigation or substrate/host management for truffle production are outside scope even when commercially called wild. Source tenure or access rights alone do not prove untended origin. Species/edible-use acceptance must be evidenced; this PCR does not certify food safety or ready-to-eat use. Frozen, dried, brined, cooked, sliced/prepared or extracted products and ordinary epigeal mushrooms are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-truffles |
| classification_refs | cpc:3.0:03233 (narrower) |
| covered_products | Species-qualified fresh whole wild edible truffles at primary handover |
| excluded_products | Cultivated/inoculated-orchard goods; managed truffle production; epigeal mushrooms; processed or preserved states; soil and packaging in edible mass |
| representative_product | One declared accepted fresh wild truffle species and grade |
| production_route | Actual targeted search/extraction; conditional cleaning/grading; conditional fresh holding/cooling; primary packaging and acceptance |
| market_state | Fresh whole, measured net at the actual primary gate, not retail-ready processing |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted fresh whole wild edible truffle fruiting bodies |
| How much | 1 kg net fresh mass |
| How well | Declare species, wild/untended proof, edible-use acceptance, grade, moisture, foreign-matter exclusion, actual gate and intended downstream use |
| How long or cycle | One declared collection site-season and primary lot through actual handover; report search trips including unsuccessful trips, hold periods and asset service periods |
| reference_flow_link | `fresh_truffles_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fresh whole wild edible truffles at primary handover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; edible-use acceptance; untended source proof; site-season; grade/maturity; moisture; soil/foreign matter exclusion; net/tare method; actual primary gate; conditioning/holding state; intended use |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted net fresh whole fruiting bodies on a calibrated scale using cp_handover; exclude tare, soil, foreign matter and rejected goods. Do not convert to dry matter without separately measured moisture. |
| `native_service_units` | service and energy rows | Actual exchange property | Native unit | Preserve native supplier quantities, including MJ/kWh, service hours, mass-distance or asset shares; document conversions separately. Service-hour screens do not justify replacing tonne-kilometres or multiplying dissimilar units. |
| `foreign_mass` | truffle and incidental matter rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Maintain paired gross/net/soil/tare records and wet-state ledger; water or soil gained or removed cannot be silently counted as edible truffle yield. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | all Ranges and actual exchanges | compatible property of each actual exchange | native unit of each actual exchange | All reasoned_estimate Ranges are provisional review prompts for this candidate method, not measured distributions, allowable losses, default quantities or emission factors. Never clip, backfill or force actual records to fit them; investigate state, units, boundary, stocks and evidence when exceeded. Before completing a data package, determine actual quantities and uncertainty from traceable measurements or applicable reviewed quantitative sources. Retain missing amounts, factors and flow identities as gaps that block completeness claims; passing a range screen is not evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untended fruiting bodies in their natural source for self-gathering, or documented already gathered purchased fresh feed |
| starting_condition_role | Natural source to collector interface, or upstream technosphere handover; declared per source portion |
| product_classification_scope | Fresh-primary truffle subset of CPC 03233; not all states or cultivation |
| recursive_input_rule | Purchased already gathered same-category feed is a product input linked to non-overlapping upstream dataset; never regenerate its search/removal burden or truncate to zero |
| upstream_dataset_requirement | Require matching wild origin, species/state/gate and documented prior removal/preparation/transport; report missing evidence rather than infer an orchard proxy |
| disclosure | List all source sites/collectors, periods, actual node activations/bypasses, purchased fractions and inclusive suppliers; final acceptance always applies |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `source_ownership` | collection | Targeted search/extraction owns harvesting and natural removal together; do not invent managed biological production or add removal again at cleaning. Soil disturbance is documented separately from actually exported foreign matter. | `fao-truffle-harvesting` |
| `conditional_route` | all nodes | Use actual lot events to activate cleaning/grading or fresh holding/cooling. Record the input/output state and handover when bypassed. Unknown intervention is not a bypass. Pack only actual materials and reuse; downstream distribution and consumer processing remain outside the primary gate. | `fao-fresh-fungi-handling` |
| `owned_ledgers` | shared services | Declare batch/trip/season mode, each run/changeover, failed trips, source-site contributions, shared vehicles/tools/animal assistance/cold-room consumers and service periods. Record replacement and termination events. Inclusive purchased services own embedded feed, energy, care and emissions; direct ledgers cover only nonincluded responsibilities. | `fao-truffle-harvesting` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collection` | Targeted search, extraction and source handover | `conditional` | Actual self-gathering of untended truffle fruiting bodies; bypass for already gathered purchased feed | Own search/extraction and natural removal once, before primary preparation | per 1 kg reference flow |
| `conditioning` | Primary cleaning and grade separation | `conditional` | Actual soil removal, cleaning or grade separation before fresh handover | Raw collected to prepared fresh grade, with destination ownership | per 1 kg reference flow |
| `holding` | Fresh holding and actual cooling | `conditional` | Actual holding/cooling before primary handover, without freezing or drying | Retain the fresh state and record actual residence conditions | per 1 kg reference flow |
| `handover` | Primary packaging and net acceptance | `required` | Every accepted reference lot; packaging only when actually used | Net accepted fresh whole fruiting bodies at actual primary gate | per 1 kg reference flow |

All cards use actual recorded amounts. Every nonreference Range is a deliberately broad provisional reasoned screening estimate, not a default, a legal limit, a measured yield or an enforcing ceiling. Values outside a screen prompt review but are not rejected automatically. Zero requires evidence of actual absence; missing/unknown data remain a gap. Service screens are only hours for a service-time exchange; other service units need their own declared evidence, never a guessed conversion.

### Process: Targeted search, extraction and source handover (`collection`)

#### Inputs

##### Product flows

###### Electricity at the equipment supply point (`collection_energy_electricity`)

**Collection scope and applicability for collection_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

One energy umbrella for actual fuels, electricity or supplied heat; keep original carrier/provider/state, unit and conversion evidence. Purchased service energy must not be added a second time. Unknown carrier use cannot be set to zero.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_collection` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`collection_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_collection` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Purchased heat at the process inlet (`collection_energy_heat`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Purchased heat at the process inlet
- Flow property / unit: Energy / MJ
- Amount rule: Collect raw quantities for this identity under `cp_collection` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

##### Waste flows

##### Elementary flows

###### Untended fresh truffle fruiting bodies removed from nature (`collection_natural_truffles`)

Mass of actual targeted edible fruiting bodies at removal, excluding soil and mycelium left in place. Natural-source removal is accounted once with search/extraction; legal land ownership does not decide this environmental/technosphere interface. Purchased already gathered feed has upstream removal and must not be charged again. No automatic fungal growth carbon credit.

- Selected flow: Untended fresh truffle fruiting bodies removed from nature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual incidental soil removed with the truffles (`collection_incidental_soil`)

Only measured incidental mineral/organic foreign matter physically crossing from the source accompanies the collected load. Record its composition and moisture; excavated soil left within the source is disturbance evidence, not an invented exported flow.

- Selected flow: Actual incidental soil removed with the truffles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Fresh wild truffles as collected at source handover (`collected_truffles`)

Species-qualified fresh collected load handed to conditioning, holding or primary acceptance; separately weigh truffle fruiting bodies and attached foreign matter so gross load is never mistaken for edible reference mass. Targeted extraction is distinct from adjacent cleaning and from intentional cultivation.

- Selected flow: Fresh wild truffles as collected at source handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual collected soil returned to the source environment (`collection_soil_return`)

Record only a documented physical return of previously measured incidental soil, with source and destination. It is not automatic harmlessness, waste-treatment credit, land-restoration credit or a generic emission substance. Do not also count the same soil in collection_waste.

- Selected flow: Actual collected soil returned to the source environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary cleaning and grade separation (`conditioning`)

#### Inputs

##### Product flows

###### Tap water (`conditioning_materials_water`)

Only for actual supplied tap water used in pre-gate truffle cleaning; dry cleaning does not require this input. Record delivered water mass; convert metered volume using documented density. Do not count direct natural-water withdrawal or supplier-included water again.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual material mass consumed at this node, excluding returns and upstream-service inclusions; apply documented period/output attribution once and divide by the matched final accepted reference-output mass. Preserve raw quantities and do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning`
- Sources: `truffle-cleaning-wrapping`

No numerical range is inherited from the former group. Collect actual quantity and uncertainty; lack of applicable range evidence does not justify a default or zero.

###### Cellulose paper towel (`conditioning_materials_paper_towel`)

Only for actual pre-gate drying or fresh wrapping at this node. Record paper grade, contact suitability and replacement use; do not introduce a prescribed replacement interval or count the same sheet at successive nodes.

- Selected flow: Cellulose paper towel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual material mass consumed at this node, excluding returns and upstream-service inclusions; apply documented period/output attribution once and divide by the matched final accepted reference-output mass. Preserve raw quantities and do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_conditioning`
- Sources: `truffle-cleaning-wrapping`

No numerical range is inherited from the former group. Collect actual quantity and uncertainty; lack of applicable range evidence does not justify a default or zero.

###### Electricity at the equipment supply point (`conditioning_energy_electricity`)

**Collection scope and applicability for conditioning_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

One energy umbrella for actual fuels, electricity or supplied heat; keep original carrier/provider/state, unit and conversion evidence. Purchased service energy must not be added a second time. Unknown carrier use cannot be set to zero.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_conditioning` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`conditioning_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_conditioning` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Purchased heat at the process inlet (`conditioning_energy_heat`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Purchased heat at the process inlet
- Flow property / unit: Energy / MJ
- Amount rule: Collect raw quantities for this identity under `cp_conditioning` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

###### Raw collected fresh wild truffle feed (`conditioning_feed`)

Receive measured source-handover or purchased already gathered fresh loads. Supplier origin, soil/tare separation and upstream coverage are required; batch returns to recleaning retain their original burden and are identified separately.

- Selected flow: Raw collected fresh wild truffle feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh cleaned and graded wild truffles (`conditioned_truffles`)

Whole accepted fresh grade transferred to holding or primary handover; actual cleaning may be dry or use water and is not universal. Record the grade acceptance basis, species, moisture and receiving lot. Unaccepted material cannot be assumed accepted by a grade label.

- Selected flow: Fresh cleaned and graded wild truffles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-fresh-fungi-handling`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual intended other-grade truffle goods at conditioning exit (`conditioning_other_goods`)

Declare every actual independent intended grade, buyer/use and handover, including lower fresh grades sold elsewhere or feed to a disclosed downstream processed product. A grade continuing internally to the same final reference is not sold a second time. Damaged/spoiled goods without an intended use belong to waste.

- Selected flow: Actual intended other-grade truffle goods at conditioning exit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

###### Actual removed soil returned to a declared environment (`conditioning_soil_return`)

Weigh identified incoming foreign matter removed in cleaning and actually returned to the environment; retain receiving location and medium. Track collection_soil_return separately by event so each soil portion has only one exit. Slurry sent to treatment is conditioning_waste, not an environmental return.

- Selected flow: Actual removed soil returned to a declared environment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Fresh holding and actual cooling (`holding`)

#### Inputs

##### Product flows

###### Cellulose paper towel (`holding_materials_paper_towel`)

Only for actual pre-gate drying or fresh wrapping at this node. Record paper grade, contact suitability and replacement use; do not introduce a prescribed replacement interval or count the same sheet at successive nodes.

- Selected flow: Cellulose paper towel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual material mass consumed at this node, excluding returns and upstream-service inclusions; apply documented period/output attribution once and divide by the matched final accepted reference-output mass. Preserve raw quantities and do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_holding`
- Sources: `truffle-cleaning-wrapping`

No numerical range is inherited from the former group. Collect actual quantity and uncertainty; lack of applicable range evidence does not justify a default or zero.

###### Electricity at the equipment supply point (`holding_energy_electricity`)

**Collection scope and applicability for holding_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

One energy umbrella for actual fuels, electricity or supplied heat; keep original carrier/provider/state, unit and conversion evidence. Purchased service energy must not be added a second time. Unknown carrier use cannot be set to zero.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_holding` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`holding_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_holding` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Purchased heat at the process inlet (`holding_energy_heat`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Purchased heat at the process inlet
- Flow property / unit: Energy / MJ
- Amount rule: Collect raw quantities for this identity under `cp_holding` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

###### Fresh wild truffles received for holding (`holding_feed`)

Actual measured fresh lot from collection or conditioning, or purchased equivalent; link sender/recipient, net state, grade and period. Bypass is permitted only when no holding/cooling occurred.

- Selected flow: Fresh wild truffles received for holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh wild truffles after actual holding (`held_truffles`)

Usable fresh whole grade exits to primary acceptance, with residence time and actual cooling/ambient conditions. No generic shelf-life, temperature, weight-loss rate, freezing, chemical preservation or drying is imposed. Opening/closing stocks and spoilage are separate.

- Selected flow: Fresh wild truffles after actual holding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-fresh-fungi-handling`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual intended other-grade truffle goods at holding exit (`holding_other_goods`)

Use actual quality/destination records for intended other goods that leave holding independently; identify buyer or downstream processor and preserve preceding burdens. Not all lost freshness creates a saleable output.

- Selected flow: Actual intended other-grade truffle goods at holding exit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_holding`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Primary packaging and net acceptance (`handover`)

#### Inputs

##### Product flows

###### corrugated board boxes (`handover_materials_box`)

Only for actual corrugated boxes at this node. This selected identity specifies 16.6% primary and 83.4% recycled fibre: use it only with compatible supplier evidence; otherwise resolve a different box identity without assuming this composition. Exclude package tare from edible product mass and count supplier-included or reused boxes only once.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record actual material mass consumed at this node, excluding returns and upstream-service inclusions; apply documented period/output attribution once and divide by the matched final accepted reference-output mass. Preserve raw quantities and do not normalize an already normalized amount again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_handover`
- Sources: `produce-cardboard-containers`

No numerical range is inherited from the former group. Collect actual quantity and uncertainty; lack of applicable range evidence does not justify a default or zero.

###### Electricity at the equipment supply point (`handover_energy_electricity`)

**Collection scope and applicability for handover_energy.** The following concrete identities have separate cards and apply only when use or generation is evidenced inside the original process scope. They are not mandatory inputs or a default recipe. Document non-use; missing records are not zero. Add a separate concrete card for any other actual material instead of substituting one of these names or UUIDs. Preserve attribution and boundaries and avoid double counting components included in outsourced services.

One energy umbrella for actual fuels, electricity or supplied heat; keep original carrier/provider/state, unit and conversion evidence. Purchased service energy must not be added a second time. Unknown carrier use cannot be set to zero.

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Collect raw quantities for this identity under `cp_handover` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

This binding is alternating current at the use point with supply technology, voltage and provider unspecified. Confirm actual AC supply; DC requires a different identity. The database reference is 1 MJ: preserve meter kWh and convert once using 1 kWh = 3.6 MJ when linking reference quantities. Internal generation links to its foreground generator, without an additional purchased-electricity burden.

###### Diesel fuel supplied to equipment (`handover_energy_diesel`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the product UUID does not establish actual use or upstream-provider compatibility. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect raw quantities for this identity under `cp_handover` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

Use this product identity only when the actual formulation and grade are compatible. Retain supplier composition and mass records; do not substitute nutrient mass, dilute solution mass or service activity for the product mass. The UUID alone supplies neither a dose nor an emission factor.

###### Purchased heat at the process inlet (`handover_energy_heat`)

Confirm identity, grade, state and unit from equipment, supplier and contemporaneous measurements; the UUID remains unverified. Retain the electricity supply point, fuel grade, density and heating-value basis. Distinguish purchased heat from on-site fuel conversion without counting its input fuel again.

- Selected flow: Purchased heat at the process inlet
- Flow property / unit: Energy / MJ
- Amount rule: Collect raw quantities for this identity under `cp_handover` and calculate the exchange per declared reference flow using the original attribution rules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`; `fao-agricultural-energy`

###### Fresh wild truffle lot presented for primary acceptance (`handover_feed`)

Measured incoming fresh whole lot from the actual previous node or documented purchased feed, with species, source and previous burden linkage. Record packaging and foreign matter separately; do not force feed quantity to the final 1 kg quantity.

- Selected flow: Fresh wild truffle lot presented for primary acceptance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-truffle-harvesting`

- Range: Provisional reasoned screen, not a default or enforcing ceiling
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh whole wild edible truffles at primary handover (`fresh_truffles_handover`)

Net accepted species-qualified fresh whole hypogeal truffle fruiting bodies delivered at the actual primary gatherer/preparer gate. Exclude attached soil, external packaging, tools and unaccepted fruiting bodies; final acceptance is required even if cleaning, holding or packaging was bypassed.

- Selected flow: Fresh whole wild edible truffles at primary handover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `fao-fresh-fungi-handling`

- Range: Reference normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_attribution` | all intended outputs | Enumerate reference and every independently intended grade/species/downstream-use output with actual handover. First subdivide separately measured trip/node services; next use a demonstrated causal physical driver (e.g. search time, load-distance, cooling occupancy) for joint burdens; only when no physical driver is defensible use disclosed revenue shares from the same site-season. Record quantities, prices/period and uncertainty. No automatic substitution credit. |  |
| `trip_period_asset` | shared services | Attribute unsuccessful trips to the declared site-season effort serving actual intended products; do not divide by zero-output trips or drop them. Link asset/feed/training/care burdens to actual consuming nodes and service periods, including replacements and termination, and retain unique event keys. Sum each burden once over outputs and periods. |  |
| `reject_loops` | all rejects and returns | Off-spec/spoiled goods exit as actual other intended goods or actual waste; record producing node and recipient. Recleaning returns link handover/holding to conditioning with retained burdens and incremental inputs only. Do not count each passage as newly removed or accepted output. Waste disposal receives its actual attributable burden, never an automatic zero or recovered credit. |  |


Concrete cards do not inherit numerical ranges from the former aggregate card. Determine quantities from original records, stock/meter reconciliation and the declared reference flow; no default quantity or numeric screen is supplied without evidence matching the identity, unit, period and boundary. Missing range evidence is a quality disclosure, not zero use or proof of completeness.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Material and service identification requirements

Identify each actual material or independently supplied service from supplier and activity records; record composition/specification, quantity, unit, node and period separately. Add one concrete exchange per identity before dataset completion; these requirements are not a single exchange. Reconcile with existing cards and inclusive services to avoid duplication. Allocate reusable assets over evidenced use and preserve physical quantities; normalize once to the matched final reference output. Missing identity or use evidence is a completeness gap, not zero use. Conditional examples below are not an exhaustive bill of materials and do not prescribe use or amounts.

| requirement_id | collection_protocol_id | Required scope |
| --- | --- | --- |
| `collection_materials_identification` | `cp_collection` | actual collection tools, carrying containers and supplies; for truffles include animal feed/care only when animal assistance occurred |
| `conditioning_materials_identification` | `cp_conditioning` | actual cleaning water, named cleaning formulations and handling supplies; no universal washing or chemical use is assumed |
| `holding_materials_identification` | `cp_holding` | actual fresh-holding hygiene supplies, cooling media and storage materials, excluding drying, freezing and chemical-preservation routes |
| `handover_materials_identification` | `cp_handover` | actual protective containers, wrapping, labels and acceptance hygiene supplies; keep package tare separate from edible net mass |


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_collection` | collection | Every actual card and net reference mass | Paired mass/activity ledger | event_id; node; collector; site; species; wild-origin evidence; trip including failed; lot; grade; gross; tare; soil; accepted_net_mass; opening/closing stocks; returns; recipient/use; actual energy/material/service/provider/native_unit; inclusive supplier scope; animal assistance/feed/training/care/travel; asset/service period/replacement/termination; named emission substance/particle/compartment; measured quantity or activity and factor source | Weigh accepted net fresh whole fruiting bodies on calibrated scales after separate soil/tare determination. Pair dispatch and receipt records for every node; record unsuccessful searches, residence times and actual cooling, service invoices/meters/feed records, unique asset events and named emissions via measurement or documented activity-factor method. Reconcile species/source proof with acceptance. `collection_services_specific_input`: One collection-service umbrella records actual access/search/extraction, attributable approach and collected-load transfer, tools/vehicles and reusable collection assets. Actual trained-animal assistance includes attributable training, care and travel only when used, with observed service periods, replacement/termination and feed/provider-inclusion linkage. Record service-native units; h is only a service-time screen, not a tonne-kilometre conversion. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `collection_emissions_specific_emission`: Conditional direct-emission umbrella: require actual substance or particle size, receiving compartment, activity and measurement or factor method. Report combustion, service leaks or identified product moisture/respiration only when attributable and established; an unexplained mass deficit is not a pollutant or automatically water vapour. Do not duplicate emissions embedded in inclusive supplier services. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero. This is a mandatory emission-identification requirement, not an aggregate elementary exchange. Identify every applicable substance and actual receiving compartment separately, with compatible units, measured activity or justified calculation method, parameter applicability and uncertainty. Preserve the original operation, period, allocation and final-reference normalization. Reconcile direct and indirect pathways and upstream coverage once; do not substitute total nitrogen, total combustion emissions or a generic pollutant for a named compound. Separately document actual environmental returns, with their material and destination, if relevant. Before dataset completeness create each required specific exchange, confirm a compatible UUID or explicitly retain its unresolved identity. Missing records do not establish zero or inapplicability. `fao-truffle-harvesting` `collection_other_goods_specific_output`: Only actual intended nonreference truffle grades or species sharing the declared trip leave with their state, use, recipient and measured amount. Record the joint-search burden decision; unrelated shared-trip products have their own non-overlapping system and service share. Do not invent other goods, classify disposed incidental matter as saleable output, or count collected_truffles again as an independent sale. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `fao-truffle-harvesting` `collection_waste_specific_output`: Actual rejected/damaged fruiting bodies, incidental matter sent to treatment and spent collection/animal-service materials leave to named external recipients. State identity, wet mass and event. Soil actually returned to nature belongs to collection_soil_return, not this waste exit; intended other truffle goods and retained stock are separate. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_collection. Unknown is a data gap, not zero. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `fao-truffle-harvesting` | kg; MJ; h; actual native unit | Every trip/lot/event, including bypass evidence | Declared site-season plus actual storage and asset periods | Every source, preparing site and shared consumer | per 1 kg reference flow | Scale calibration; paired tickets; origin/species acceptance; site/trip register; meter/invoice/service-factor records; stock reconciliation |
| `cp_conditioning` | conditioning | Every actual card and net reference mass | Paired mass/activity ledger | event_id; node; collector; site; species; wild-origin evidence; trip including failed; lot; grade; gross; tare; soil; accepted_net_mass; opening/closing stocks; returns; recipient/use; actual energy/material/service/provider/native_unit; inclusive supplier scope; animal assistance/feed/training/care/travel; asset/service period/replacement/termination; named emission substance/particle/compartment; measured quantity or activity and factor source | Weigh accepted net fresh whole fruiting bodies on calibrated scales after separate soil/tare determination. Pair dispatch and receipt records for every node; record unsuccessful searches, residence times and actual cooling, service invoices/meters/feed records, unique asset events and named emissions via measurement or documented activity-factor method. Reconcile species/source proof with acceptance. `conditioning_services_specific_input`: One conditioning-service umbrella records actual cleaning/grading, relevant lot transfer and allocated brushes, sorting space, scales or reusable assets. Preserve native service units and provider inclusions; internal cleaning returns incur only incremental work and retain original lot burdens. h is only a service-time exchange screen. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `conditioning_emissions_specific_emission`: Conditional direct-emission umbrella: require actual substance or particle size, receiving compartment, activity and measurement or factor method. Report combustion, service leaks or identified product moisture/respiration only when attributable and established; an unexplained mass deficit is not a pollutant or automatically water vapour. Do not duplicate emissions embedded in inclusive supplier services. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero. This is a mandatory emission-identification requirement, not an aggregate elementary exchange. Identify every applicable substance and actual receiving compartment separately, with compatible units, measured activity or justified calculation method, parameter applicability and uncertainty. Preserve the original operation, period, allocation and final-reference normalization. Reconcile direct and indirect pathways and upstream coverage once; do not substitute total nitrogen, total combustion emissions or a generic pollutant for a named compound. Separately document actual environmental returns, with their material and destination, if relevant. Before dataset completeness create each required specific exchange, confirm a compatible UUID or explicitly retain its unresolved identity. Missing records do not establish zero or inapplicability. `fao-truffle-harvesting` `conditioning_waste_specific_output`: Record actual cleaning effluent, removed soil sent for treatment, rejected/spoiled truffles and cleaning/grading consumables at external exits. Declare liquid composition/wet state and recipient. Intended lower grades are other goods, soil returned to nature is a separate physical return, and recleaning is an internal loop. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_conditioning. Unknown is a data gap, not zero. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `fao-truffle-harvesting` | kg; MJ; h; actual native unit | Every trip/lot/event, including bypass evidence | Declared site-season plus actual storage and asset periods | Every source, preparing site and shared consumer | per 1 kg reference flow | Scale calibration; paired tickets; origin/species acceptance; site/trip register; meter/invoice/service-factor records; stock reconciliation |
| `cp_holding` | holding | Every actual card and net reference mass | Paired mass/activity ledger | event_id; node; collector; site; species; wild-origin evidence; trip including failed; lot; grade; gross; tare; soil; accepted_net_mass; opening/closing stocks; returns; recipient/use; actual energy/material/service/provider/native_unit; inclusive supplier scope; animal assistance/feed/training/care/travel; asset/service period/replacement/termination; named emission substance/particle/compartment; measured quantity or activity and factor source | Weigh accepted net fresh whole fruiting bodies on calibrated scales after separate soil/tare determination. Pair dispatch and receipt records for every node; record unsuccessful searches, residence times and actual cooling, service invoices/meters/feed records, unique asset events and named emissions via measurement or documented activity-factor method. Reconcile species/source proof with acceptance. `holding_services_specific_input`: One fresh-holding-service umbrella records actual ambient/cold-room occupancy, cooling/hygiene operations and allocated storage assets. Retain residence, actual conditions and shared-room consumers/service periods; no duplicate inclusive cooling energy/materials. h is only a service-time screen; capacity-time services retain real native units. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `holding_emissions_specific_emission`: Conditional direct-emission umbrella: require actual substance or particle size, receiving compartment, activity and measurement or factor method. Report combustion, service leaks or identified product moisture/respiration only when attributable and established; an unexplained mass deficit is not a pollutant or automatically water vapour. Do not duplicate emissions embedded in inclusive supplier services. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero. This is a mandatory emission-identification requirement, not an aggregate elementary exchange. Identify every applicable substance and actual receiving compartment separately, with compatible units, measured activity or justified calculation method, parameter applicability and uncertainty. Preserve the original operation, period, allocation and final-reference normalization. Reconcile direct and indirect pathways and upstream coverage once; do not substitute total nitrogen, total combustion emissions or a generic pollutant for a named compound. Separately document actual environmental returns, with their material and destination, if relevant. Before dataset completeness create each required specific exchange, confirm a compatible UUID or explicitly retain its unresolved identity. Missing records do not establish zero or inapplicability. `fao-truffle-harvesting` `holding_waste_specific_output`: Actual spoiled/rejected fruiting bodies and discarded hygiene/cooling/storage materials leave to documented recipients. Distinguish retained stocks, independently intended other-grade goods and linked return to conditioning. Do not infer waste quantity from unmeasured moisture or respiration by subtraction. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_holding. Unknown is a data gap, not zero. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `fao-truffle-harvesting` | kg; MJ; h; actual native unit | Every trip/lot/event, including bypass evidence | Declared site-season plus actual storage and asset periods | Every source, preparing site and shared consumer | per 1 kg reference flow | Scale calibration; paired tickets; origin/species acceptance; site/trip register; meter/invoice/service-factor records; stock reconciliation |
| `cp_handover` | handover | Every actual card and net reference mass | Paired mass/activity ledger | event_id; node; collector; site; species; wild-origin evidence; trip including failed; lot; grade; gross; tare; soil; accepted_net_mass; opening/closing stocks; returns; recipient/use; actual energy/material/service/provider/native_unit; inclusive supplier scope; animal assistance/feed/training/care/travel; asset/service period/replacement/termination; named emission substance/particle/compartment; measured quantity or activity and factor source | Weigh accepted net fresh whole fruiting bodies on calibrated scales after separate soil/tare determination. Pair dispatch and receipt records for every node; record unsuccessful searches, residence times and actual cooling, service invoices/meters/feed records, unique asset events and named emissions via measurement or documented activity-factor method. Reconcile species/source proof with acceptance. `handover_services_specific_input`: One primary-handover-service umbrella records actual packaging, net weighing/acceptance, bounded gate transfer and reusable packing/weighing assets. Record package reuse and actual consumers/service periods. Distribution after the primary gate is excluded. Preserve native units and provider scope; h is only a service-time screen. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero. Identify the actual input for this operation from supplier specifications, equipment and primary records. This is a mandatory collection requirement, not an exchange. Before dataset completeness, represent each used material, formulated product, carrier or independently purchased service by one physically specific card with its native quantity/property; confirm a compatible UUID, or retain an explicit unresolved identity and do not claim a fully linked dataset. Do not substitute a conditional example for an unknown actual input, invent a recipe, omit required use or infer zero from missing records. Attribute shared use, reusable assets and inclusive services once; preserve the original stage/period and measured throughput link to final reference output. The former aggregate range is not a component limit or consumption default. `handover_emissions_specific_emission`: Conditional direct-emission umbrella: require actual substance or particle size, receiving compartment, activity and measurement or factor method. Report combustion, service leaks or identified product moisture/respiration only when attributable and established; an unexplained mass deficit is not a pollutant or automatically water vapour. Do not duplicate emissions embedded in inclusive supplier services. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero. This is a mandatory emission-identification requirement, not an aggregate elementary exchange. Identify every applicable substance and actual receiving compartment separately, with compatible units, measured activity or justified calculation method, parameter applicability and uncertainty. Preserve the original operation, period, allocation and final-reference normalization. Reconcile direct and indirect pathways and upstream coverage once; do not substitute total nitrogen, total combustion emissions or a generic pollutant for a named compound. Separately document actual environmental returns, with their material and destination, if relevant. Before dataset completeness create each required specific exchange, confirm a compatible UUID or explicitly retain its unresolved identity. Missing records do not establish zero or inapplicability. `fao-truffle-harvesting` `handover_other_goods_specific_output`: Independently intended nonreference accepted grade or downstream-use feed leaves the primary gate with its own buyer/use and burden share. Internal grade transfers represented by earlier cards are not additional final goods. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `fao-truffle-harvesting` `handover_waste_specific_output`: Actual acceptance rejects, damaged packaging and hygiene wastes exit the primary boundary to named recipients. Reusable packages remain stock/service assets until actual retirement. Intended other goods and actual return to conditioning have distinct routes and retain preceding burdens. Measure the attributable amount, retaining actual identity and destination; divide by the accepted net reference mass using cp_handover. Unknown is a data gap, not zero. This is a mandatory output-identification requirement, not an aggregate exchange. Preserve every actual co-product, reject, packaging waste and treatment stream in this operation. Before dataset completeness create separate cards for physically distinct streams, with actual material/state, quantity, destination and Product/Waste role. A genuinely mixed waste stream may remain one physically defined mixture with measured composition; do not invent separation or count its components again. Keep unlike units separate, retain the original allocation and reference normalization, and reconcile the output balance. Identify actual functions before co-product allocation; waste does not acquire a co-product share merely by having mass. Confirm a compatible UUID or explicitly retain its unresolved identity. Missing records never establish zero or exclusion. `fao-truffle-harvesting` | kg; MJ; h; actual native unit | Every trip/lot/event, including bypass evidence | Declared site-season plus actual storage and asset periods | Every source, preparing site and shared consumer | per 1 kg reference flow | Scale calibration; paired tickets; origin/species acceptance; site/trip register; meter/invoice/service-factor records; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `ledger_normalization` | all inventory rows | For each actual exchange divide its attributable recorded quantity by accepted net fresh truffle mass in kg. Retain native numerator units and allocation shares; final reference output is 1 kg. Reconcile opening stocks plus inputs with fresh goods, other goods, waste, named measured emissions and closing stocks without inventing missing material. | cp_collection; cp_conditioning; cp_holding; cp_handover | Exchange quantity per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `source_species` | all product lots | Evidence untended origin, accepted edible species/part and actual state/gate; ambiguous cultivation or unsafe/unidentified species blocks concrete dataset finalization. | cp_handover |
| `site_coverage` | all source sites and periods | Enumerate every collector/source/preparer and site-season contribution. Aggregate attributable numerator totals over compatible accepted net reference totals; document representativeness and exclusions. Never average intensities equally across unequal sites or omit failed efforts. | cp_handover |
| `identity_quality` | all concrete exchanges | Verify concrete identity, property/unit/provider/destination separately; energy/service units and unresolved conditional identities require actual supplier evidence. No screen substitutes for observations or unknowns. | cp_handover |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_check` | fresh_truffles_handover | Reference name/link/state/gate and net calibrated mass must agree; the final output is 1 kg per 1 kg reference flow and no internal feed is fixed to this quantity. |  |
| `route_check` | all nodes | Verify actual node activations, bypass records, all incoming/outgoing handoffs, species/site origin and batches/periods. All rejected states require their producing-node route, recipient or retained stock; returns are linked to conditioning and cannot count twice as acceptance. |  |
| `closure_check` | all inventories | Reconcile wet truffle/soil/tare balances and stocks, actual output sets and attributed source-site/period/asset shares. Check inclusive supplier boundaries, failed trips, animal service duties and unique event ownership. Unknown mass deficit/absence is a disclosed gap, not a guessed emission, yield or zero. |  |
| `identity_range_check` | all cards | Every concrete exchange requires verified exact identity and support units; each Range has matching unit/basis/evidence. Provisional screens are non-enforcing, zero requires actual absence proof, and unknown state or unresolved support prevents final concrete use. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared fresh whole wild truffle primary-route process/lifecyclemodel projection |
| excluded_use | Cultivated/inoculated orchard goods, processed states, unknown species/origin/gate, safety certification or automatic natural carbon credits |
| required_metadata | PCR identity/version; species; site-season; wild proof; grade; net/tare/soil/moisture; primary gate; route activation; suppliers; batches and failed trips; periods; output/asset attribution |
| required_quality_disclosure | Observed quantities and gaps; exact identities/support; scope of inclusive services; site/period completeness; ranges remain provisional and non-default |
| update_trigger | Changed source management, species/state/gate, service technology, output markets, measured evidence or identity support |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-wild-truffles` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03233 | Untended product classification context; not quantity defaults |
| `fao-truffle-harvesting` | official_guidance | https://www.fao.org/4/y5489e/y5489e07.htm | Targeted underground extraction, conditional trained assistance, source distinction; not current legal advice or universal practice |
| `fao-fresh-fungi-handling` | official_guidance | https://www.fao.org/4/y5489e/y5489e09.htm | Fresh handling and state distinction; no universal temperature/yield/shelf-life transferred |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | conditional concrete identities and method context; does not establish site use or quantities |
| `produce-cardboard-containers` | official_guidance | FAO, Prevention of post-harvest food losses, section 6.5.3. https://www.fao.org/4/t0073e/T0073E03.HTM | Conditional cardboard container identity; actual food-contact suitability, grade, fibre composition, use and reuse require records. |
| `truffle-cleaning-wrapping` | handbook | TruffleHunter, Truffle Care Guide and FAQ. https://www.trufflehunter.co.uk/pages/truffle-care-guide ; https://www.trufflehunter.co.uk/pages/faq | Supplier example of water cleaning and paper wrapping only when performed before this PCR gate; no storage temperature, duration or downstream consumer activity is prescribed. |
