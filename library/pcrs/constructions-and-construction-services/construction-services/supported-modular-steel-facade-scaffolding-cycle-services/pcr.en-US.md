---
pcr_id: pcr.constructions-and-construction-services.construction-services.supported-modular-steel-facade-scaffolding-cycle-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Supported modular steel facade scaffolding cycle services


## 1. Scope and Applicability

This PCR governs a stationary, rigid-supported modular galvanized-steel facade access scaffold as one actual configuration episode. The service starts with issue of the actual kit and ends only after erection, inspected handover, actual availability closure, dismantling, assessed return/repair/discard and owned site restoration are reconciled. Height, loading, deck and tie arrangements and dates characterize the service; area alone is insufficient.

Exclude rental without erection/dismantling, suspended, mobile and mast-climbing scaffolds, falsework/shoring, permanent access structures and the trade executed by users from the platform. A materially changed configuration requires a new cohort and scope review. Ordinary manufacturer-compatible cleaning and evidenced minor upkeep are included when owned; structural welding or independently owned component-repair technology requires further review. PERI and OSHA evidence supports these responsibilities and distinctions, not universal input rates. The CPC 2.1 note is historical boundary context only.


## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.supported-modular-steel-facade-scaffolding-cycle-services |
| classification_refs | CPC 3.0 54570 Scaffolding services; narrower |
| covered_products | Complete stable-configuration supported modular galvanized-steel facade access scaffolding episodes |
| excluded_products | Rental alone; suspended/mobile/mast-climbing systems; falsework/shoring; permanent access; user trade; unreviewed structural repair |
| representative_product | An actual supported modular galvanized-steel facade scaffold kit over its declared accepted elevation and complete episode |
| production_route | Kit issue/owned transport → erection/joining/tying → inspection/handover → actual availability/unavailability → dismantling → cleaning/assessment/return/repair/discard and owned restoration |
| market_state | Accepted complete scaffolding cycle service with actual configuration, dates and custody/fate closure |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supported modular galvanized-steel facade scaffolding cycle service |
| How much | 1 m2 |
| How well | Unique accepted facade elevation under the declared height, loading class, platform/deck/tie design, substrate and inspection gate |
| How long or cycle | One actual stable-configuration episode: dated issue, inspected handover, all available/unavailable intervals, dismantling and assessed return/repair/discard/restoration closure |
| reference_flow_link | `reference_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Supported modular galvanized-steel facade scaffolding cycle service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | configuration and kit IDs; surveyed unique elevation A and polygons; height; loading class; deck/lift pattern; ties/anchors and substrate release; handover date; actual availability/unavailability intervals and duration; dismantling and return/repair/discard closure; owned restoration; provider and asset coverage |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| unique_elevation | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure A from disjoint accepted facade-elevation polygons of the same stable configuration and closed episode. Exclude unserved gaps, overlap, ground-plan area and repeated deck/lift areas. A must be positive and independently surveyed under cp_scaffold_cycle_material. |
| concrete_numerators | all inventory rows | Mass / Area / Energy / Duration | native unit to kg, m2, kWh or h | Keep each concrete SKU, current state, substance and receiver separate. Use traceable count-to-mass, volume-to-mass or other same-state bridges where needed; divide each attributable episode numerator by A once. Mixed totals are QA rather than exchange identities. |
| time_qualifier | reference product; asset services | Duration | h | Actual dates, availability and unavailability intervals, height, loading and deck/tie layout are required qualifiers. Do not replace the area reference with area multiplied by time. Resolve standalone time support before binding hour exchanges; no default day or shift. |
| energy_integrity | electricity | Energy | kWh | Preserve metered electrical energy and its supply boundary; verify the compatible flow property independently. Do not substitute net calorific value for Energy or equipment useful work for metered use. |


## 5. System Boundary


### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Released existing building/substrate attachment interface, actual kit at issue with condition/custody records, and actual design/configuration and service ownership |
| starting_condition_role | existing_asset_context |
| product_classification_scope | Supported modular galvanized-steel facade scaffolding cycle; narrower context within CPC 3.0 54570, not the whole leaf |
| recursive_input_rule | A separately purchased same-category service is an explicit upstream service with its actual gate and coverage; do not silently unfold or duplicate it inside this episode. Review genuine separate responsibility/handoffs. |
| upstream_dataset_requirement | Use compatible material/service and reusable-asset datasets matching concrete identity, state, geography, technology, provider coverage and actual use. Missing coverage or owned-asset lifetime/capacity is a gap. |
| disclosure | Disclose starting asset/substrate state, ownership, all actual phases/users, external handoffs, geometry cohorts, actual dates, omitted/unresolved quantities and denominator acceptance |


### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR governs a stationary, rigid-supported modular galvanized-steel facade access scaffold as one actual configuration episode. The service starts with issue of the actual kit and ends only after erection, inspected handover, actual availability closure, dismantling, assessed return/repair/discard and owned site restoration are reconciled. Height, loading, deck and tie arrangements and dates characterize the service; area alone is insufficient. Exclude rental without erection/dismantling, suspended, mobile and mast-climbing scaffolds, falsework/shoring, permanent access structures and the trade executed by users from the platform. A materially changed configuration requires a new cohort and scope review. Ordinary manufacturer-compatible cleaning and evidenced minor upkeep are included when owned; structural welding or independently owned component-repair technology requires further review. PERI and OSHA evidence supports these responsibilities and distinctions, not universal input rates. The CPC 2.1 note is historical boundary context only. |  |
| cycle_responsibility | scaffold_cycle | Maintain one event-linked responsibility across kit issue and owned transport, erection/joining/tying and inspection, handover, all actual available/unavailable intervals, dismantling, cleaning/assessment, return/repair/discard decisions and owned site restoration. The erected state is an observed gate inside this node, not another product output. | peri-instructions; cycle-normalization-method |
| components_and_joining | scaffold_cycle | Inventory standards, ledgers, decks, braces, access, guardrails, ties and base supports by actual kit IDs and condition. Observe system-compatible connections and actual support/attachment design. Distinguish reusable kit from consumed replacements, boards, anchors and enclosures; never infer component density or labour rate from area. | peri-instructions; osha-scaffold |
| existing_interface | scaffold_cycle | Declare released substrate/building attachment interface and kit condition at issue. Existing building, substrate and stock are context and asset observations. New consumed attachments and owned restoration remain attributable actual burdens. A genuinely separate material-state or repair handoff requires explicit transfer and boundary review. | peri-instructions; cycle-normalization-method |
| maintenance_limit | scaffold_cycle | Include actual manufacturer-compatible ordinary cleaning, lubrication and evidenced minor maintenance within contractual responsibility. Provider-covered repair stays covered once. Independently owned structural/component welding or a different repair technology requires scope review. User-trade production is outside this service, although its separately evidenced deposited matter is recorded for cleaning closure. | peri-instructions; compatible-pool-ledger-method |
| cohort_and_fates | scaffold_cycle | Retain actual failed inspection, unavailable scaffold, altered geometry, damaged/quarantined components, wear, approved maintenance, return and discard states with dated events. Geometry changes open a separate cohort and review. Unknown component fates prevent complete-cycle acceptance; loss or theft does not prove waste. | peri-instructions; compatible-pool-ledger-method |


## 6. Process Inventory Structure


### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| scaffold_cycle | Supported modular steel facade scaffolding cycle services | required | actual complete episode and declared responsibility | single accountable foreground service node; phase gates are observations | reference_service; 1 m2 |


Reusable kit retains distinct issued, erected, used and return-assessment states. Record actual joining, tying and dismantling from the project design and compatible system requirements without invented performance values. Defective, unaccepted, quarantined, repair-pending or unreturned states do not establish accepted final service; review a genuine independent handoff before changing the node. The conditional roles below are resolved from actual events into zero, one or multiple evidenced concrete exchanges, never bound by a conceptual umbrella.


### Process: Scaffolding cycle (`scaffold_cycle`)


#### Inputs


##### Product flows


###### Reusable scaffold-kit occupation service (`kit_occupation_service`)

Record the actual kit asset and covered occupation interval, including its attributable unavailable time. Physical issued and returned kit mass is a stock observation, not newly purchased steel. The same kit cannot also be auxiliary hired equipment. Range evidence need: kit IDs, dated issue/return and availability records, all users, provider coverage or evidenced owned-asset capacity and use are needed to derive hours; no shift or reuse count is presumed.

- Selected flow: Reusable scaffold-kit occupation service

- Flow property / unit: Duration / h

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_asset`

- Sources: `cycle-normalization-method`; `asset-attribution-method`


###### Consumed new scaffold standard (`replacement_kit_products_standard`)

One actual independently identified consumed new scaffold standard. This is a conditional independent object supported within the original replacement_kit_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components.

- Selected flow: Consumed new scaffold standard
- Flow property / unit: Mass / kg
- Amount rule: actual_replacement_kit_products_standard_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed new scaffold ledger (`replacement_kit_products_ledger`)

One actual independently identified consumed new scaffold ledger. This is a conditional independent object supported within the original replacement_kit_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components.

- Selected flow: Consumed new scaffold ledger
- Flow property / unit: Mass / kg
- Amount rule: actual_replacement_kit_products_ledger_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed new scaffold deck (`replacement_kit_products_deck`)

One actual independently identified consumed new scaffold deck. This is a conditional independent object supported within the original replacement_kit_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components.

- Selected flow: Consumed new scaffold deck
- Flow property / unit: Mass / kg
- Amount rule: actual_replacement_kit_products_deck_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed new scaffold brace (`replacement_kit_products_brace`)

One actual independently identified consumed new scaffold brace. This is a conditional independent object supported within the original replacement_kit_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components.

- Selected flow: Consumed new scaffold brace
- Flow property / unit: Mass / kg
- Amount rule: actual_replacement_kit_products_brace_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed new scaffold access component (`replacement_kit_products_access`)

One actual independently identified consumed new scaffold access component. This is a conditional independent object supported within the original replacement_kit_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components.

- Selected flow: Consumed new scaffold access component
- Flow property / unit: Mass / kg
- Amount rule: actual_replacement_kit_products_access_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed new scaffold guardrail (`replacement_kit_products_guardrail`)

One actual independently identified consumed new scaffold guardrail. This is a conditional independent object supported within the original replacement_kit_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components.

- Selected flow: Consumed new scaffold guardrail
- Flow property / unit: Mass / kg
- Amount rule: actual_replacement_kit_products_guardrail_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed new scaffold tie (`replacement_kit_products_tie`)

One actual independently identified consumed new scaffold tie. This is a conditional independent object supported within the original replacement_kit_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components.

- Selected flow: Consumed new scaffold tie
- Flow property / unit: Mass / kg
- Amount rule: actual_replacement_kit_products_tie_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed new scaffold base support (`replacement_kit_products_base`)

One actual independently identified consumed new scaffold base support. This is a conditional independent object supported within the original replacement_kit_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components.

- Selected flow: Consumed new scaffold base support
- Flow property / unit: Mass / kg
- Amount rule: actual_replacement_kit_products_base_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Consumed nonreturning sole board (`consumed_sole_boards_board`)

One actual independently identified consumed nonreturning sole board. This is a conditional independent object supported within the original consumed_sole_boards scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Include only nonreturning support products consumed under the actual foundation arrangement. Reusable boards remain in the kit or auxiliary asset ledger.

- Selected flow: Consumed nonreturning sole board
- Flow property / unit: Mass / kg
- Amount rule: actual_consumed_sole_boards_board_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Consumed attachment anchor (`consumed_anchors_ties_anchor`)

One actual independently identified consumed attachment anchor. This is a conditional independent object supported within the original consumed_anchors_ties scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate each consumed attachment SKU from reusable ties and from the pre-existing building.

- Selected flow: Consumed attachment anchor
- Flow property / unit: Mass / kg
- Amount rule: actual_consumed_anchors_ties_anchor_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed nonreusable tie (`consumed_anchors_ties_tie`)

One actual independently identified consumed nonreusable tie. This is a conditional independent object supported within the original consumed_anchors_ties scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate each consumed attachment SKU from reusable ties and from the pre-existing building.

- Selected flow: Consumed nonreusable tie
- Flow property / unit: Mass / kg
- Amount rule: actual_consumed_anchors_ties_tie_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed attachment product (`consumed_anchors_ties_attachment`)

One actual independently identified consumed attachment product. This is a conditional independent object supported within the original consumed_anchors_ties scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate each consumed attachment SKU from reusable ties and from the pre-existing building.

- Selected flow: Consumed attachment product
- Flow property / unit: Mass / kg
- Amount rule: actual_consumed_anchors_ties_attachment_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Consumed protective sheet (`protective_sheet_net_products_sheet`)

One actual independently identified consumed protective sheet. This is a conditional independent object supported within the original protective_sheet_net_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record concrete sheet/net products only to the extent consumed by this configuration episode; reusable enclosure belongs to assets.

- Selected flow: Consumed protective sheet
- Flow property / unit: Mass / kg
- Amount rule: actual_protective_sheet_net_products_sheet_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed protective net (`protective_sheet_net_products_net`)

One actual independently identified consumed protective net. This is a conditional independent object supported within the original protective_sheet_net_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record concrete sheet/net products only to the extent consumed by this configuration episode; reusable enclosure belongs to assets.

- Selected flow: Consumed protective net
- Flow property / unit: Mass / kg
- Amount rule: actual_protective_sheet_net_products_net_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Ordinary maintenance cleaner formulation (`cleaning_maintenance_products_cleaner`)

One actual independently identified ordinary maintenance cleaner formulation. This is a conditional independent object supported within the original cleaning_maintenance_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual cleaners, lubricants, abrasives and cloth by formulation and SKU during manufacturer-compatible ordinary upkeep. Water, fuel, electricity and packaging have separate roles. This row does not authorize structural welding or an unresearched component-repair route.

- Selected flow: Ordinary maintenance cleaner formulation
- Flow property / unit: Mass / kg
- Amount rule: actual_cleaning_maintenance_products_cleaner_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Ordinary maintenance lubricant formulation (`cleaning_maintenance_products_lubricant`)

One actual independently identified ordinary maintenance lubricant formulation. This is a conditional independent object supported within the original cleaning_maintenance_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual cleaners, lubricants, abrasives and cloth by formulation and SKU during manufacturer-compatible ordinary upkeep. Water, fuel, electricity and packaging have separate roles. This row does not authorize structural welding or an unresearched component-repair route.

- Selected flow: Ordinary maintenance lubricant formulation
- Flow property / unit: Mass / kg
- Amount rule: actual_cleaning_maintenance_products_lubricant_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Ordinary maintenance abrasive (`cleaning_maintenance_products_abrasive`)

One actual independently identified ordinary maintenance abrasive. This is a conditional independent object supported within the original cleaning_maintenance_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual cleaners, lubricants, abrasives and cloth by formulation and SKU during manufacturer-compatible ordinary upkeep. Water, fuel, electricity and packaging have separate roles. This row does not authorize structural welding or an unresearched component-repair route.

- Selected flow: Ordinary maintenance abrasive
- Flow property / unit: Mass / kg
- Amount rule: actual_cleaning_maintenance_products_abrasive_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Ordinary maintenance cloth (`cleaning_maintenance_products_cloth`)

One actual independently identified ordinary maintenance cloth. This is a conditional independent object supported within the original cleaning_maintenance_products scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual cleaners, lubricants, abrasives and cloth by formulation and SKU during manufacturer-compatible ordinary upkeep. Water, fuel, electricity and packaging have separate roles. This row does not authorize structural welding or an unresearched component-repair route.

- Selected flow: Ordinary maintenance cloth
- Flow property / unit: Mass / kg
- Amount rule: actual_cleaning_maintenance_products_cloth_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Diesel fuel (`diesel_fuel`)

Include actual diesel burned by owned equipment or separately metered duties attributable to this episode, including attributable idle, tests and rework. Exclude fuel already covered by a provider service. Range evidence need: equipment and interval logs plus calibrated stock or meter reconciliation; useful lifting work cannot substitute for consumed fuel mass.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_utility`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

- Binding: `fixed`


###### Attributed electricity supply (`electricity`)

Identify actual supply geography, voltage and meter boundary before choosing a concrete exchange. Range evidence need: meter topology, complete intervals, all consumers and device duty records. Record measured kWh; an energy unit group does not establish a compatible flow property and net calorific value must not be relabelled as generic Energy.

- Selected flow: Attributed electricity supply

- Flow property / unit: Energy / kWh

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_utility`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


###### Supplied cleaning and process water (`water_supplied`)

Record water delivered across the technosphere boundary, separately from direct abstraction. Range evidence need: actual wet operations, calibrated draws, recirculation and returns, with measured water-only fates. Internal recirculation does not create repeated incoming water; do not infer a universal water demand from scaffold area.

- Selected flow: Supplied cleaning and process water

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_utility`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


###### Distinct hired lifting equipment hour service (`hired_equipment_services_lifting`)

One actual independently identified distinct hired lifting equipment hour service. This is a conditional independent object supported within the original hired_equipment_services scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each actual auxiliary equipment asset and service coverage; exclude the scaffold kit itself.

- Selected flow: Distinct hired lifting equipment hour service
- Flow property / unit: Duration / h
- Amount rule: actual_hired_equipment_services_lifting_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed h; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_asset and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_asset`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Distinct hired access equipment hour service (`hired_equipment_services_access`)

One actual independently identified distinct hired access equipment hour service. This is a conditional independent object supported within the original hired_equipment_services scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each actual auxiliary equipment asset and service coverage; exclude the scaffold kit itself.

- Selected flow: Distinct hired access equipment hour service
- Flow property / unit: Duration / h
- Amount rule: actual_hired_equipment_services_access_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed h; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_asset and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_asset`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Distinct hired logistics equipment hour service (`hired_equipment_services_logistics`)

One actual independently identified distinct hired logistics equipment hour service. This is a conditional independent object supported within the original hired_equipment_services scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Identify each actual auxiliary equipment asset and service coverage; exclude the scaffold kit itself.

- Selected flow: Distinct hired logistics equipment hour service
- Flow property / unit: Duration / h
- Amount rule: actual_hired_equipment_services_logistics_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed h; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_asset and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_asset`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.



##### Waste flows


##### Elementary flows


###### Direct freshwater abstraction (`direct_freshwater_abstraction`)

Record actual freshwater withdrawal from its specified environmental medium only when the episode directly abstracts it. Range evidence need: source identity, separately metered withdrawal and the wet-operation demand. Do not record the same water again as supplied water; withdrawals and discharges require their respective source and receiving compartments.

- Selected flow: Direct freshwater abstraction

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


#### Outputs


##### Product flows


###### Supported modular galvanized-steel facade scaffolding cycle service (`reference_service`)

The sole final service covers one stable configuration from issue through erection and inspected handover, actual availability closure, dismantling, assessed component return/repair/discard and owned site restoration. Independently measure positive unique accepted elevation A; the normalized output is A/A. An open episode, unresolved return fate or unaccepted assembly does not establish this gate.

- Selected flow: Supported modular galvanized-steel facade scaffolding cycle service

- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2

- Amount rule: 1 m2

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

- Range: Final reference self-normalization

  - Range role: `qa_guardrail`

  - Lower: 1

  - Upper: 1

  - Unit: m2

  - Basis: per reference flow

  - Basis kind: `reference_flow`

  - Evidence kind: `calculated_from_collection`

  - Sources: `cycle-normalization-method`


###### Usable outward return of consumed nonreturning sole board (`usable_material_exits_consumed_sole_boards_board`)

One actual usable outward custody portion of consumed nonreturning sole board. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of consumed nonreturning sole board
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_consumed_sole_boards_board_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of consumed attachment anchor (`usable_material_exits_consumed_anchors_ties_anchor`)

One actual usable outward custody portion of consumed attachment anchor. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of consumed attachment anchor
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_consumed_anchors_ties_anchor_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of consumed nonreusable tie (`usable_material_exits_consumed_anchors_ties_tie`)

One actual usable outward custody portion of consumed nonreusable tie. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of consumed nonreusable tie
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_consumed_anchors_ties_tie_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of consumed attachment product (`usable_material_exits_consumed_anchors_ties_attachment`)

One actual usable outward custody portion of consumed attachment product. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of consumed attachment product
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_consumed_anchors_ties_attachment_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of consumed protective sheet (`usable_material_exits_protective_sheet_net_products_sheet`)

One actual usable outward custody portion of consumed protective sheet. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of consumed protective sheet
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_protective_sheet_net_products_sheet_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of consumed protective net (`usable_material_exits_protective_sheet_net_products_net`)

One actual usable outward custody portion of consumed protective net. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of consumed protective net
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_protective_sheet_net_products_net_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of ordinary maintenance cleaner formulation (`usable_material_exits_cleaning_maintenance_products_cleaner`)

One actual usable outward custody portion of ordinary maintenance cleaner formulation. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of ordinary maintenance cleaner formulation
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_cleaning_maintenance_products_cleaner_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of ordinary maintenance lubricant formulation (`usable_material_exits_cleaning_maintenance_products_lubricant`)

One actual usable outward custody portion of ordinary maintenance lubricant formulation. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of ordinary maintenance lubricant formulation
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_cleaning_maintenance_products_lubricant_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of ordinary maintenance abrasive (`usable_material_exits_cleaning_maintenance_products_abrasive`)

One actual usable outward custody portion of ordinary maintenance abrasive. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of ordinary maintenance abrasive
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_cleaning_maintenance_products_abrasive_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of ordinary maintenance cloth (`usable_material_exits_cleaning_maintenance_products_cloth`)

One actual usable outward custody portion of ordinary maintenance cloth. This is a conditional independent object supported within the original usable_material_exits scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return.

- Selected flow: Usable outward return of ordinary maintenance cloth
- Flow property / unit: Mass / kg
- Amount rule: actual_usable_material_exits_cleaning_maintenance_products_cloth_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.



##### Waste flows


###### Actual discarded consumed new scaffold standard (`discarded_kit_waste_replacement_kit_products_standard`)

One actual discarded state of consumed new scaffold standard. This is a conditional independent object supported within the original discarded_kit_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced.

- Selected flow: Actual discarded consumed new scaffold standard
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_kit_waste_replacement_kit_products_standard_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual discarded consumed new scaffold ledger (`discarded_kit_waste_replacement_kit_products_ledger`)

One actual discarded state of consumed new scaffold ledger. This is a conditional independent object supported within the original discarded_kit_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced.

- Selected flow: Actual discarded consumed new scaffold ledger
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_kit_waste_replacement_kit_products_ledger_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual discarded consumed new scaffold deck (`discarded_kit_waste_replacement_kit_products_deck`)

One actual discarded state of consumed new scaffold deck. This is a conditional independent object supported within the original discarded_kit_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced.

- Selected flow: Actual discarded consumed new scaffold deck
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_kit_waste_replacement_kit_products_deck_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual discarded consumed new scaffold brace (`discarded_kit_waste_replacement_kit_products_brace`)

One actual discarded state of consumed new scaffold brace. This is a conditional independent object supported within the original discarded_kit_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced.

- Selected flow: Actual discarded consumed new scaffold brace
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_kit_waste_replacement_kit_products_brace_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual discarded consumed new scaffold access component (`discarded_kit_waste_replacement_kit_products_access`)

One actual discarded state of consumed new scaffold access component. This is a conditional independent object supported within the original discarded_kit_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced.

- Selected flow: Actual discarded consumed new scaffold access component
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_kit_waste_replacement_kit_products_access_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual discarded consumed new scaffold guardrail (`discarded_kit_waste_replacement_kit_products_guardrail`)

One actual discarded state of consumed new scaffold guardrail. This is a conditional independent object supported within the original discarded_kit_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced.

- Selected flow: Actual discarded consumed new scaffold guardrail
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_kit_waste_replacement_kit_products_guardrail_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual discarded consumed new scaffold tie (`discarded_kit_waste_replacement_kit_products_tie`)

One actual discarded state of consumed new scaffold tie. This is a conditional independent object supported within the original discarded_kit_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced.

- Selected flow: Actual discarded consumed new scaffold tie
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_kit_waste_replacement_kit_products_tie_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Actual discarded consumed new scaffold base support (`discarded_kit_waste_replacement_kit_products_base`)

One actual discarded state of consumed new scaffold base support. This is a conditional independent object supported within the original discarded_kit_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced.

- Selected flow: Actual discarded consumed new scaffold base support
- Flow property / unit: Mass / kg
- Amount rule: actual_discarded_kit_waste_replacement_kit_products_base_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Discarded sole-board waste (`support_sheet_residue_waste_board`)

One actual independently identified discarded sole-board waste. This is a conditional independent object supported within the original support_sheet_residue_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual discarded board, anchor, tie, sheet and net material by identity, state and receiver.

- Selected flow: Discarded sole-board waste
- Flow property / unit: Mass / kg
- Amount rule: actual_support_sheet_residue_waste_board_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded consumed anchor (`support_sheet_residue_waste_anchor`)

One actual independently identified discarded consumed anchor. This is a conditional independent object supported within the original support_sheet_residue_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual discarded board, anchor, tie, sheet and net material by identity, state and receiver.

- Selected flow: Discarded consumed anchor
- Flow property / unit: Mass / kg
- Amount rule: actual_support_sheet_residue_waste_anchor_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded consumed tie (`support_sheet_residue_waste_tie`)

One actual independently identified discarded consumed tie. This is a conditional independent object supported within the original support_sheet_residue_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual discarded board, anchor, tie, sheet and net material by identity, state and receiver.

- Selected flow: Discarded consumed tie
- Flow property / unit: Mass / kg
- Amount rule: actual_support_sheet_residue_waste_tie_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded protective sheet (`support_sheet_residue_waste_sheet`)

One actual independently identified discarded protective sheet. This is a conditional independent object supported within the original support_sheet_residue_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual discarded board, anchor, tie, sheet and net material by identity, state and receiver.

- Selected flow: Discarded protective sheet
- Flow property / unit: Mass / kg
- Amount rule: actual_support_sheet_residue_waste_sheet_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded protective net (`support_sheet_residue_waste_net`)

One actual independently identified discarded protective net. This is a conditional independent object supported within the original support_sheet_residue_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual discarded board, anchor, tie, sheet and net material by identity, state and receiver.

- Selected flow: Discarded protective net
- Flow property / unit: Mass / kg
- Amount rule: actual_support_sheet_residue_waste_net_quantity is this child's independently measured, exclusively attributed physical numerator for its identity/current-state/receiver in the same stable configuration and completely closed episode, fixed kg; divide once by independently surveyed accepted elevation A. Retain original cp_scaffold_cycle_material and original role boundary: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules. Consumptive inputs use actual episode consumption, never whole issued existing-kit mass; new replacement manufacture and kit-service manufacture require exclusive adjustment. Usable exits need actual availability and receiver evidence; used-kit return is not unused product return. Waste needs a positive measured discard decision and receiver; lost/unreturned stock is not waste. Hour services use actual contracted occupation/use intervals and original complete-consumer residual causal allocation, including attributable idle/unavailable/rework periods; labour hours, default shifts and parent totals are not substitutes. Unknown state, unit, attribution or support blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_scaffold_cycle_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Removed dry deposits from used scaffold (`removed_deposit_waste`)

Treat deposits arriving with issued kit or accumulating from outside user operations as independently observed incoming matter. Range evidence need: those additions and composition/moisture, cleaning-added solids and removed dry mass with actual waste receiver. A kit issue-minus-return deficit is not a deposit input; reconcile deposits separately from consumed kit and avoid repeating slurry-borne solids.

- Selected flow: Removed dry deposits from used scaffold

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`



###### Oily maintenance and cleaning waste (`oily_consumable_waste`)

Identify the actual waste mixture and receiver, separating oil/fluid, cloth or absorber, water and contaminants. Range evidence need: independently measured constituent availability and waste-state mass. Oil input alone cannot bound wet oily cloth mass; do not count the same spent cleaner or carrier in another solid or slurry waste exit.

- Selected flow: Oily maintenance and cleaning waste

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


###### Collected wastewater and cleaning slurry (`collected_wastewater_slurry`)

Represent actual collected liquid waste sent to an identified treatment receiver, retaining its current solids and water composition. Range evidence need: source water, chemicals and entrained solids, measured capture and constituent analyses. Do not treat a mixture mass as water-only, or also report captured solids as dry waste or direct environmental releases.

- Selected flow: Collected wastewater and cleaning slurry

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_material`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`


##### Elementary flows


###### Carbon dioxide (fossil), to air unspecified (`fossil_co2_air`)

Record actual fossil CO2 from the attributable combustion using measured emissions or a documented applicable method and independent fossil-carbon consumption. This identity represents air unspecified only. The carbon upper constraint is not a fuel-to-CO2 factor and does not assert complete oxidation; preserve carbon in other products or pollutants separately.

- Selected flow: Carbon dioxide (fossil), to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `carbon-oxidation-identity`

- Binding: `fixed`

- Range: CO2 upper constraint per independently measured fossil carbon burned

  - Range role: `qa_guardrail`

  - Lower: 0

  - Upper: 3.6666666666666667

  - Unit: kg CO2/kg fossil carbon burned

  - Basis: per kg independently measured fossil carbon burned; 44/12 constraint

  - Basis kind: `fuel_inventory`

  - Evidence kind: `method_formula`

  - Sources: `carbon-oxidation-identity`





###### Water vapour, to air unspecified (`water_vapour_air`)

Use this air-unspecified H2O identity only for independently supported actual evaporation from owned wet operations. Range evidence need: independently measured available water-only pools and an evaporation measurement/model with uncertainty. A water closure residual is a data gap, not vapour; zero also needs evidence, and a more specific compartment needs its own identity.

- Selected flow: Water vapour, to air unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Each concrete identity/state/receiver has its independently measured or evidenced calculated episode numerator divided once by accepted A, following section 8 cycle numerator rules

- Value mode: `calculated_value`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `reference_flow`

- Evidence kind: `calculated_from_collection`

- Collection protocol: `cp_scaffold_cycle_release`

- Sources: `cycle-normalization-method`; `compatible-pool-ledger-method`

- Binding: `fixed`



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| direct_episode | scaffold_cycle | Attribute direct events to the actual configuration and phase first; all erection, idle, unavailable, test, dismantling and ordinary rework burdens belonging to this episode remain in its numerator. Repeated inspections or use periods do not create additional accepted area. | cycle-normalization-method |
| shared_consumers | scaffold_cycle | Enumerate every real kit, auxiliary equipment and meter consumer and relevant period, including outside consumers. Subdivide actual measured use first; allocate only the remaining shared burden by a documented causal capacity/use basis with exclusive shares and uncertainty. Reconcile the whole provider/meter total before dividing this episode share by A. | asset-attribution-method |
| asset_coverage | scaffold_cycle | Keep scaffold-kit occupation and auxiliary hired equipment mutually exclusive for each actual asset. Count provider-included manufacture, fuel and maintenance once. For self-owned assets require evidenced service capacity/lifetime, actual use, wear, repair and damage/retirement attribution, or declare a gap. No assumed reuse count and no full new-kit manufacture per deployment. | asset-attribution-method |
| replacement_and_return | scaffold_cycle | Avoid charging the same replacement manufacture both as consumed product and unadjusted kit-service manufacture. Used kit return records its worn/cleaned/repair state and is not unused input return. Product/waste exits retain real recipients; return or recycling alone supplies no automatic substitution credit. | asset-attribution-method; compatible-pool-ledger-method |
| rejected_cycle | scaffold_cycle | Link failed inspection, repeat joining, cleaning, quarantine, approved repair and exit decisions to the originating kit/configuration. Retain their actual burdens and unresolved fates. A partial handover, changed cohort or open return ledger cannot be allocated into a fictitious completed service output. | cycle-normalization-method; compatible-pool-ledger-method |


## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols below are compact node-owned event ledgers. Raw quantities are retained before attribution or conversion; their aggregation delivers the normalized amount per reference flow using the section 8 methods. Each actual exchange retains its own identity/state/receiver numerator, while aggregate totals serve reconciliation only.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_scaffold_cycle_material | scaffold_cycle | configuration geometry; materials; product and waste exits | phase-indexed foreground event record | event/lot/configuration ID; process/phase/time; owner; role; actual identity/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence; uncertainty; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Survey disjoint accepted elevation polygons independently and reconcile handover and closure. Weigh each concrete material/current state and dispatch; retain counts and traceable same-state conversion when direct weighing is unavailable. Observe outside deposits and constituent moisture independently; identify actual receiver and phase. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg; m2 | each event and interval boundary | full issue-to-return episode, including unavailability and rework | declared site/configuration and responsible off-site cleaning/return duties | per reference flow | survey and acceptance records; scale calibration; component/SKU and dispatch documents; moisture/constituent evidence |
| cp_scaffold_cycle_utility | scaffold_cycle | fuel; electricity; supplied water | phase-indexed foreground event record | event/lot/configuration ID; process/phase/time; owner; role; actual identity/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence; uncertainty | Read calibrated fuel/utility meters and opening/closing stocks over the entire owned duty, idle, test and rework intervals. Record supply identity and meter topology; reconcile every consumer and provider-covered quantities before episode attribution. Convert native units only using an independently evidenced same-state bridge. | kg; kWh | each event and interval boundary | full issue-to-return episode, including unavailability and rework | declared site/configuration and responsible off-site cleaning/return duties | per reference flow | meter calibration and readings; supply documents; equipment/phase log; allocation reconciliation |
| cp_scaffold_cycle_asset | scaffold_cycle | kit occupation; distinct auxiliary services; asset observations | phase-indexed foreground event record | event/lot/configuration ID; process/phase/time; owner; role; actual identity/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence; uncertainty; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Follow asset and component IDs from issue through handover, actual available/unavailable periods, dismantling and assessed return/repair/retirement. Record every user, provider boundary and actual occupation/use intervals. For self-owned attribution collect actual lifetime/capacity, use, wear and damage evidence rather than assuming cycles. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | h; kg observations | each event and interval boundary | full issue-to-return episode, including unavailability and rework | declared site/configuration and responsible off-site cleaning/return duties | per reference flow | custody and condition ledger; dated user/availability log; provider contract; evidenced owned-asset attribution |
| cp_scaffold_cycle_release | scaffold_cycle | abstraction; substance/compartment releases | phase-indexed foreground event record | event/lot/configuration ID; process/phase/time; owner; role; actual identity/current state; native amount/unit; measured same-state bridge; receiver/medium; evidence; uncertainty; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Measure actual abstraction and releases by source/substance/compartment; use documented applicable emission or evaporation models only with observed activity, composition and uncertainty. Preserve raw concentration/flow and capture records; separate direct discharge from treatment waste and fossil carbon from water pools. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg | each event and interval boundary | full issue-to-return episode, including unavailability and rework | declared site/configuration and responsible off-site cleaning/return duties | per reference flow | sampling and analytical QA; meter/model provenance; activity and composition records; capture/receiver evidence |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_area | reference_service | A = sum of disjoint accepted facade-elevation polygon areas for the stable configuration. Remove unserved gaps and duplicate overlap; do not sum decks, lifts, repeated days or ground plan. | survey; configuration; gate; cp_scaffold_cycle_material | A | cycle-normalization-method |
| cycle_numerators | all inventory rows | For each concrete identity/state/receiver j, N_j = attributed episode quantity in its declared numerator unit, after measured same-state conversion and exclusive attribution; E_j = N_j / A. Retain distinct j values; heterogeneous totals only test ledger completeness. | N_j; A; cp_scaffold_cycle_material; cp_scaffold_cycle_utility; cp_scaffold_cycle_asset; cp_scaffold_cycle_release | E_j | cycle-normalization-method; asset-attribution-method |
| final_area_output | reference_service | Final output = A / A = 1 m2 for the complete accepted cycle, with actual duration and configuration qualifiers retained. No other observation self-normalizes into a final product. | A; closed gate; cp_scaffold_cycle_material | 1 m2 | cycle-normalization-method |
| exclusive_attribution | all inventory rows | Attribute independently metered events first. Partition only the residual shared provider/meter burden among all evidenced consumers by actual causal use/capacity; preserve exhaustive exclusive shares and uncertainty. Provider-included and separately recorded quantities must be reconciled before calculating E_j. | consumer/phase register; provider coverage; cp_scaffold_cycle_asset; cp_scaffold_cycle_utility | attributed N_j | asset-attribution-method |
| compatible_closure | all inventory rows | For each compatible material/state/constituent pool, opening stock + observed external additions = closing stock + independently measured retained, returned, discarded and released constituents + residual. Evaluate uncertainty in residual; do not generate a balancing exchange. Keep used kit state and external deposits distinct. | state/constituent ledgers; cp_scaffold_cycle_material; cp_scaffold_cycle_release | closure findings | compatible-pool-ledger-method |
| water_only_closure | water_supplied; direct_freshwater_abstraction; collected_wastewater_slurry; water_vapour_air; atomic_specific_direct_water_releases | Reconcile independently observed water-only inputs and opening water against water-only closing/retained/returned content, collected liquid waste, supported evaporation and direct releases. Internal recirculation cancels; solids and chemicals are separate constituents. Residual does not establish evaporation. | water-only measurements; cp_scaffold_cycle_utility; cp_scaffold_cycle_release; cp_scaffold_cycle_material | water closure findings | compatible-pool-ledger-method |
| fossil_carbon_constraint | fossil_co2_air | For independently measured fossil carbon burned C_f, fossil CO2 <= C_f * 44 / 12. Record actual CO2 by applicable measurement/model; account separately for carbon in other species and residual uncertainty. This upper constraint does not assume complete oxidation and is not kg CO2 per kg diesel. | C_f; actual emission evidence; cp_scaffold_cycle_utility; cp_scaffold_cycle_release | fossil-carbon QA | carbon-oxidation-identity |
| atomic_child_normalization | replacement_kit_products_standard; replacement_kit_products_ledger; replacement_kit_products_deck; replacement_kit_products_brace; replacement_kit_products_access; replacement_kit_products_guardrail; replacement_kit_products_tie; replacement_kit_products_base; consumed_sole_boards_board; consumed_anchors_ties_anchor; consumed_anchors_ties_tie; consumed_anchors_ties_attachment; protective_sheet_net_products_sheet; protective_sheet_net_products_net; cleaning_maintenance_products_cleaner; cleaning_maintenance_products_lubricant; cleaning_maintenance_products_abrasive; cleaning_maintenance_products_cloth; hired_equipment_services_lifting; hired_equipment_services_access; hired_equipment_services_logistics; usable_material_exits_consumed_sole_boards_board; usable_material_exits_consumed_anchors_ties_anchor; usable_material_exits_consumed_anchors_ties_tie; usable_material_exits_consumed_anchors_ties_attachment; usable_material_exits_protective_sheet_net_products_sheet; usable_material_exits_protective_sheet_net_products_net; usable_material_exits_cleaning_maintenance_products_cleaner; usable_material_exits_cleaning_maintenance_products_lubricant; usable_material_exits_cleaning_maintenance_products_abrasive; usable_material_exits_cleaning_maintenance_products_cloth; discarded_kit_waste_replacement_kit_products_standard; discarded_kit_waste_replacement_kit_products_ledger; discarded_kit_waste_replacement_kit_products_deck; discarded_kit_waste_replacement_kit_products_brace; discarded_kit_waste_replacement_kit_products_access; discarded_kit_waste_replacement_kit_products_guardrail; discarded_kit_waste_replacement_kit_products_tie; discarded_kit_waste_replacement_kit_products_base; support_sheet_residue_waste_board; support_sheet_residue_waste_anchor; support_sheet_residue_waste_tie; support_sheet_residue_waste_sheet; support_sheet_residue_waste_net | Record independent_physical_quantity separately by atomic_flow_row_id; actual_<row_id>_quantity is its named alias only, never a copied family amount. Materials retain original CP per-identity/state gross/net stock and outward-return conventions; transfers use actual paired custody quantity; usable exits and wastes use independent actual fate quantities. Number-of-items owned asset equivalents use this PCR original job_driver/full_life_driver complete-life fraction including manufacture, maintenance, replacement and end of life, with every consumer and a positive complete denominator. Duration/h service children instead use actual attributable job hours with the matching complete-life burden per hour; never multiply hours by the fraction again. Purchased services use only actual complete physical tasks whose real contract defines Item(s), with original actual attribution; hours, days and prices cannot become event counts. atomic_child_intensity = independent_physical_quantity / A, where A is positive unique surveyed accepted facade-elevation area in m2 of one stable configuration and fully closed scaffold episode under the original acceptance rule; A=0 blocks normalization. Non-exchange parent role ledgers and original CP operands retain their stock, transfer, closure and ownership functions, without adding a second exchange or changing the method. | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; A; cp_scaffold_cycle_material; cp_scaffold_cycle_asset; cp_scaffold_cycle_release | atomic_child_intensity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration_gate | reference_service | Retain configuration/kit IDs, surveyed elevation polygons and positive A, height, loading class, deck/lift and tie pattern, substrate release, handover and dismantling/return/restoration records, actual dated availability and unavailability and responsible parties. Changed geometry requires a separately reviewed cohort. | survey, design and closed acceptance journal |
| actual_condition | all inventory rows | Each conditional card needs actual yes/no/unresolved occurrence and evidence. Instantiate each concrete material, SKU, state, species and receiver separately with its own native observation, conversion and N_j/A; unresolved occurrence cannot be set to zero. | event evidence and concrete exchange register |
| temporal_asset_coverage | scaffold_cycle | Connect all phase events, inputs, assets, exits, deposits and maintenance to actual dates and IDs. Enumerate all kit/equipment/meter consumers and period shares. Retain provider coverage or evidenced owned lifetime/capacity, actual use, wear, damage, repair and retirement; disclose missing evidence. | phase ledger; contracts; asset condition and attribution reconciliation |
| reject_and_fate | scaffold_cycle | Identify unready or altered scaffold, failed inspections and defective/quarantined components. Link repeat work and actual ordinary maintenance, external repair, usable return, retention or documented discard to the originating episode. Open return/fate is incomplete; lost/stolen stock is not waste. Used kit is not an unused return. | inspection and custody/fate records; positive discard/receiver evidence |
| compatible_constituents | all inventory rows | Preserve independent incoming/use-period deposits and actual moisture, contamination and constituent bridges. Close each compatible material/state pool; do not equate whole wet mixture to its dry constituent. Separate water-only and fossil-carbon accounts; do not add O2 or fabricate dust, waste, vapour or other balancing flows. | independent measurements; compositional analyses; uncertainty and residual report |
| range_evidence | all inventory rows | Retain the individual evidence needs for every current card without a numerical range and its retired original role. Collect independent actual quantity, state/species/receiver, conversions and uncertainty before assessing applicable physical constraints; add no arbitrary broad bounds. New children inherit no parent interval, source consumption factor or family-sum threshold. Unchanged reference_service and fossil_co2_air retain their supported normalization/fossil-carbon constraints and original limited meanings. | row-specific collection and physical-QA assessment; supported normalization/carbon ranges |
| identity_support | all inventory rows | Confirm actual flow identity and compatible support independently before final exchange creation. Keep Area and Mass support distinct from unresolved Energy and standalone Duration support. Identity confirmation is separate from quantity, range, actual activation and engineering acceptance. | identity/support verification and actual foreground evidence |
| atomic_replacement_kit_products | scaffold_cycle; cp_scaffold_cycle_material | Former replacement_kit_products is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Identify each new replacement SKU actually consumed by the episode, and its destination in the component ledger. Exclude mere deployment of existing reusable components. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_consumed_sole_boards | scaffold_cycle; cp_scaffold_cycle_material | Former consumed_sole_boards is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Include only nonreturning support products consumed under the actual foundation arrangement. Reusable boards remain in the kit or auxiliary asset ledger. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_consumed_anchors_ties | scaffold_cycle; cp_scaffold_cycle_material | Former consumed_anchors_ties is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate each consumed attachment SKU from reusable ties and from the pre-existing building. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_protective_sheet_net_products | scaffold_cycle; cp_scaffold_cycle_material | Former protective_sheet_net_products is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record concrete sheet/net products only to the extent consumed by this configuration episode; reusable enclosure belongs to assets. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_cleaning_maintenance_products | scaffold_cycle; cp_scaffold_cycle_material | Former cleaning_maintenance_products is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate actual cleaners, lubricants, abrasives and cloth by formulation and SKU during manufacturer-compatible ordinary upkeep. Water, fuel, electricity and packaging have separate roles. This row does not authorize structural welding or an unresearched component-repair route. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_hired_equipment_services | scaffold_cycle; cp_scaffold_cycle_asset | Former hired_equipment_services is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Identify each actual auxiliary equipment asset and service coverage; exclude the scaffold kit itself. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_asset; actual_child_register; parent_ledger_id |
| atomic_packaging_received | scaffold_cycle; cp_scaffold_cycle_material | Former packaging_received is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Identify each actual packaging material and current state on receipt, separate from its contents and reusable scaffold stock. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_usable_material_exits | scaffold_cycle; cp_scaffold_cycle_material | Former usable_material_exits is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record a product exit only for concrete material with independently evidenced availability, current state and actual receiver. Used reusable kit returning to stock is an asset-state event, not an intact-unused consumable return. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_returnable_packaging_exit | scaffold_cycle; cp_scaffold_cycle_material | Former returnable_packaging_exit is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record each reusable packaging product leaving custody in its measured current state. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_discarded_kit_waste | scaffold_cycle; cp_scaffold_cycle_material | Former discarded_kit_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Activate only for a positive quantity whose component identity, discard decision, waste status and receiving party are evidenced. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_support_sheet_residue_waste | scaffold_cycle; cp_scaffold_cycle_material | Former support_sheet_residue_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate actual discarded board, anchor, tie, sheet and net material by identity, state and receiver. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_packaging_waste | scaffold_cycle; cp_scaffold_cycle_material | Former packaging_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record actual packaging waste for each material/state/receiver after unpacking. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_material; actual_child_register; parent_ledger_id |
| atomic_other_engine_species_air | scaffold_cycle; cp_scaffold_cycle_release | Former other_engine_species_air is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Instantiate each actual reported substance and air compartment separately; an umbrella species label has no fixed exchange identity. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_release; actual_child_register; parent_ledger_id |
| atomic_physical_particulate_air | scaffold_cycle; cp_scaffold_cycle_release | Former physical_particulate_air is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record only supported uncaptured particles from the owned operation, by size/composition and air compartment. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_release; actual_child_register; parent_ledger_id |
| atomic_volatile_species_air | scaffold_cycle; cp_scaffold_cycle_release | Former volatile_species_air is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Identify the emitted constituent and receiving air compartment from the actual coating or maintenance formulation and operation. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_release; actual_child_register; parent_ledger_id |
| atomic_specific_direct_water_releases | scaffold_cycle; cp_scaffold_cycle_release | Former specific_direct_water_releases is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record each actual direct release by substance and receiving water compartment; collected treatment waste is not a direct release. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_scaffold_cycle_release; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | scaffold_cycle | Legacy roles are non-exchange stock, activity, fate or closure keys in the original CP. Independent child exchanges carry quantities; atomic_ requirements retain mandatory remaining-roster refinement and finalization blocks. Original raw fields, helpers and native-unit operands retain their responsibilities and reconcile by child identity and compatible unit, never adding parent totals or unlike units. Source-table Applies-to migration: replacement_kit_products => replacement_kit_products_standard, replacement_kit_products_ledger, replacement_kit_products_deck, replacement_kit_products_brace, replacement_kit_products_access, replacement_kit_products_guardrail, replacement_kit_products_tie, replacement_kit_products_base, atomic_replacement_kit_products; consumed_sole_boards => consumed_sole_boards_board, atomic_consumed_sole_boards; consumed_anchors_ties => consumed_anchors_ties_anchor, consumed_anchors_ties_tie, consumed_anchors_ties_attachment, atomic_consumed_anchors_ties; protective_sheet_net_products => protective_sheet_net_products_sheet, protective_sheet_net_products_net, atomic_protective_sheet_net_products; cleaning_maintenance_products => cleaning_maintenance_products_cleaner, cleaning_maintenance_products_lubricant, cleaning_maintenance_products_abrasive, cleaning_maintenance_products_cloth, atomic_cleaning_maintenance_products; hired_equipment_services => hired_equipment_services_lifting, hired_equipment_services_access, hired_equipment_services_logistics, atomic_hired_equipment_services; packaging_received => atomic_packaging_received; usable_material_exits => usable_material_exits_consumed_sole_boards_board, usable_material_exits_consumed_anchors_ties_anchor, usable_material_exits_consumed_anchors_ties_tie, usable_material_exits_consumed_anchors_ties_attachment, usable_material_exits_protective_sheet_net_products_sheet, usable_material_exits_protective_sheet_net_products_net, usable_material_exits_cleaning_maintenance_products_cleaner, usable_material_exits_cleaning_maintenance_products_lubricant, usable_material_exits_cleaning_maintenance_products_abrasive, usable_material_exits_cleaning_maintenance_products_cloth, atomic_usable_material_exits; returnable_packaging_exit => atomic_returnable_packaging_exit; discarded_kit_waste => discarded_kit_waste_replacement_kit_products_standard, discarded_kit_waste_replacement_kit_products_ledger, discarded_kit_waste_replacement_kit_products_deck, discarded_kit_waste_replacement_kit_products_brace, discarded_kit_waste_replacement_kit_products_access, discarded_kit_waste_replacement_kit_products_guardrail, discarded_kit_waste_replacement_kit_products_tie, discarded_kit_waste_replacement_kit_products_base, atomic_discarded_kit_waste; support_sheet_residue_waste => support_sheet_residue_waste_board, support_sheet_residue_waste_anchor, support_sheet_residue_waste_tie, support_sheet_residue_waste_sheet, support_sheet_residue_waste_net, atomic_support_sheet_residue_waste; packaging_waste => atomic_packaging_waste; other_engine_species_air => atomic_other_engine_species_air; physical_particulate_air => atomic_physical_particulate_air; volatile_species_air => atomic_volatile_species_air; specific_direct_water_releases => atomic_specific_direct_water_releases | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | scaffold_cycle | The following routes each child to its original role, node, unique unit and method CP. Independently apply that original role measurement, stock, source/fate, rework, share, conversion and normalization method to each actual identity/state child. Retain the original helper/selector role parameter as legacy_parent_role, but supply quantity operands from this child independent records; ROW_UNIT(child_row_id) is the explicit unit below. Reconcile stocks/transfers only within the same identity/state and compatible native unit, grouping different materials, media, states and units separately. Parent totals are non-exchange diagnostics, never copied as child operands or summed across unlike units. Unsupported original-helper applicability or missing actual conversion, denominator or evidence blocks finalization; field records cannot choose a new method. Original role-named formula operands remain ledger names rather than duplicate exchanges. A cross-unit legacy role executes by this mapping and actual child unit instead of inheriting a wrong fixed unit. Routing: replacement_kit_products_standard => role=replacement_kit_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; replacement_kit_products_ledger => role=replacement_kit_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; replacement_kit_products_deck => role=replacement_kit_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; replacement_kit_products_brace => role=replacement_kit_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; replacement_kit_products_access => role=replacement_kit_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; replacement_kit_products_guardrail => role=replacement_kit_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; replacement_kit_products_tie => role=replacement_kit_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; replacement_kit_products_base => role=replacement_kit_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; consumed_sole_boards_board => role=consumed_sole_boards, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; consumed_anchors_ties_anchor => role=consumed_anchors_ties, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; consumed_anchors_ties_tie => role=consumed_anchors_ties, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; consumed_anchors_ties_attachment => role=consumed_anchors_ties, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; protective_sheet_net_products_sheet => role=protective_sheet_net_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; protective_sheet_net_products_net => role=protective_sheet_net_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; cleaning_maintenance_products_cleaner => role=cleaning_maintenance_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; cleaning_maintenance_products_lubricant => role=cleaning_maintenance_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; cleaning_maintenance_products_abrasive => role=cleaning_maintenance_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; cleaning_maintenance_products_cloth => role=cleaning_maintenance_products, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; hired_equipment_services_lifting => role=hired_equipment_services, node=scaffold_cycle, property=Duration, unit=h, CP=cp_scaffold_cycle_asset; hired_equipment_services_access => role=hired_equipment_services, node=scaffold_cycle, property=Duration, unit=h, CP=cp_scaffold_cycle_asset; hired_equipment_services_logistics => role=hired_equipment_services, node=scaffold_cycle, property=Duration, unit=h, CP=cp_scaffold_cycle_asset; usable_material_exits_consumed_sole_boards_board => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_consumed_anchors_ties_anchor => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_consumed_anchors_ties_tie => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_consumed_anchors_ties_attachment => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_protective_sheet_net_products_sheet => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_protective_sheet_net_products_net => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_cleaning_maintenance_products_cleaner => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_cleaning_maintenance_products_lubricant => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_cleaning_maintenance_products_abrasive => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; usable_material_exits_cleaning_maintenance_products_cloth => role=usable_material_exits, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; discarded_kit_waste_replacement_kit_products_standard => role=discarded_kit_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; discarded_kit_waste_replacement_kit_products_ledger => role=discarded_kit_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; discarded_kit_waste_replacement_kit_products_deck => role=discarded_kit_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; discarded_kit_waste_replacement_kit_products_brace => role=discarded_kit_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; discarded_kit_waste_replacement_kit_products_access => role=discarded_kit_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; discarded_kit_waste_replacement_kit_products_guardrail => role=discarded_kit_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; discarded_kit_waste_replacement_kit_products_tie => role=discarded_kit_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; discarded_kit_waste_replacement_kit_products_base => role=discarded_kit_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; support_sheet_residue_waste_board => role=support_sheet_residue_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; support_sheet_residue_waste_anchor => role=support_sheet_residue_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; support_sheet_residue_waste_tie => role=support_sheet_residue_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; support_sheet_residue_waste_sheet => role=support_sheet_residue_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material; support_sheet_residue_waste_net => role=support_sheet_residue_waste, node=scaffold_cycle, property=Mass, unit=kg, CP=cp_scaffold_cycle_material | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| atomic_scaffold_role_ownership | scaffold_cycle | Each actual component/event has one compatible role among existing reusable-kit observation, newly consumed replacement, nonreusable building attachment, usable exit or actual discard. replacement_kit_products children count only actual new episode replacement consumption under reviewed attribution, never the deployed mass of existing standards/ledgers/decks as new manufacture. Exclude corresponding manufacture from unadjusted kit-service coverage; no duplicate. consumed_anchors_ties is only actual nonreusable consumed attachment and cannot repeat that same replacement component. Original kit occupation hours and auxiliary hired equipment remain exclusive, with original manufacture/maintenance/fuel/removal ownership retained; unreconciled coverage blocks completion. | actual_child_register; component_id; configuration_id; phase_id; replacement_attribution; adjusted_kit_service_coverage; one_burden_owner_evidence |
| atomic_range_noninheritance | replacement_kit_products_standard; replacement_kit_products_ledger; replacement_kit_products_deck; replacement_kit_products_brace; replacement_kit_products_access; replacement_kit_products_guardrail; replacement_kit_products_tie; replacement_kit_products_base; consumed_sole_boards_board; consumed_anchors_ties_anchor; consumed_anchors_ties_tie; consumed_anchors_ties_attachment; protective_sheet_net_products_sheet; protective_sheet_net_products_net; cleaning_maintenance_products_cleaner; cleaning_maintenance_products_lubricant; cleaning_maintenance_products_abrasive; cleaning_maintenance_products_cloth; hired_equipment_services_lifting; hired_equipment_services_access; hired_equipment_services_logistics; usable_material_exits_consumed_sole_boards_board; usable_material_exits_consumed_anchors_ties_anchor; usable_material_exits_consumed_anchors_ties_tie; usable_material_exits_consumed_anchors_ties_attachment; usable_material_exits_protective_sheet_net_products_sheet; usable_material_exits_protective_sheet_net_products_net; usable_material_exits_cleaning_maintenance_products_cleaner; usable_material_exits_cleaning_maintenance_products_lubricant; usable_material_exits_cleaning_maintenance_products_abrasive; usable_material_exits_cleaning_maintenance_products_cloth; discarded_kit_waste_replacement_kit_products_standard; discarded_kit_waste_replacement_kit_products_ledger; discarded_kit_waste_replacement_kit_products_deck; discarded_kit_waste_replacement_kit_products_brace; discarded_kit_waste_replacement_kit_products_access; discarded_kit_waste_replacement_kit_products_guardrail; discarded_kit_waste_replacement_kit_products_tie; discarded_kit_waste_replacement_kit_products_base; support_sheet_residue_waste_board; support_sheet_residue_waste_anchor; support_sheet_residue_waste_tie; support_sheet_residue_waste_sheet; support_sheet_residue_waste_net | Retired parent numerical ranges, per-exchange screening instructions and rationales are retained only in implementation audit, applying to neither new child exchanges nor parent-family sums and never proportionally allocated. Each new child has independent evidence needs for actual quantity, identity/state, measurement/conversion, uncertainty and comparable independent observations. Add its own interval only after review confirms applicability to this independent object; never validate a batch with its own maximum. Original ranges of unchanged semantically compatible atomic objects retain their original status. | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | reference_service | Require positive independently measured A, inspected handover, dated availability closure, dismantling and reconciled component return/repair/discard plus owned restoration. Count each accepted elevation once; verify all required qualifiers and separate changed geometry. | cycle-normalization-method |
| identity_and_activation | all inventory rows | Resolve each instantiated concrete identity, state, property, unit and receiver before final exchange delivery. Report actual occurrence as yes/no/unresolved with evidence; no evidence is not zero. A verified UUID does not prove quantity or activation. Use unspecified-air fixed identities only for that compartment. | compatible-pool-ledger-method |
| phase_and_asset_coverage | scaffold_cycle | Check phase event continuity, kit/component identities and every shared consumer/period. Verify one owner and no duplicate kit, manufacture, maintenance, fuel or meter burden. Check failed/reworked states against their actual fate and prohibit unaccepted service in the denominator. | asset-attribution-method; cycle-normalization-method |
| physical_qa | all inventory rows | Reconcile compatible material/current-state/constituent pools with opening and closing stocks and separately observed additions. Test water-only and fuel-carbon constraints separately. Never balance fuel kg against CO2 kg or invent oxygen, waste, dust, vapour or other exchanges from residuals. | compatible-pool-ledger-method; carbon-oxidation-identity |
| range_and_gaps | all inventory rows | Retain the two supported unchanged reference_service/fossil_co2_air ranges and every current card independent evidence needs; the former count of 25 rows is no longer a current inventory claim. Assess physical constraints using measured inputs and exclusive fates; disclose range/state/support/asset-attribution gaps and block unsupported final quantities without invented bounds. | cycle-normalization-method; compatible-pool-ledger-method |
| report_completeness | foreground dataset | Report accepted input, performed and skipped checks, findings, uncertainty and completeness. An automated structural pass does not certify engineering compliance, final UUID readiness or closure of an incomplete cycle. | cycle-normalization-method |
| close_atomic_replacement_kit_products | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_replacement_kit_products is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_consumed_sole_boards | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_consumed_sole_boards is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_consumed_anchors_ties | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_consumed_anchors_ties is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_protective_sheet_net_products | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_protective_sheet_net_products is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_cleaning_maintenance_products | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_cleaning_maintenance_products is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_hired_equipment_services | scaffold_cycle; cp_scaffold_cycle_asset | Block final foreground completion until every actual object in atomic_hired_equipment_services is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_packaging_received | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_packaging_received is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_usable_material_exits | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_usable_material_exits is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_returnable_packaging_exit | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_returnable_packaging_exit is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_discarded_kit_waste | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_discarded_kit_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_support_sheet_residue_waste | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_support_sheet_residue_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_packaging_waste | scaffold_cycle; cp_scaffold_cycle_material | Block final foreground completion until every actual object in atomic_packaging_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_other_engine_species_air | scaffold_cycle; cp_scaffold_cycle_release | Block final foreground completion until every actual object in atomic_other_engine_species_air is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_physical_particulate_air | scaffold_cycle; cp_scaffold_cycle_release | Block final foreground completion until every actual object in atomic_physical_particulate_air is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_volatile_species_air | scaffold_cycle; cp_scaffold_cycle_release | Block final foreground completion until every actual object in atomic_volatile_species_air is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_specific_direct_water_releases | scaffold_cycle; cp_scaffold_cycle_release | Block final foreground completion until every actual object in atomic_specific_direct_water_releases is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | Verify actual source/receipt evidence, original physical quantities/units and ownership for the same material/state/event/gate. Traceable reuse of the same signed measurement is allowed; copied parent totals, overwritten receipts and forced unknown equality are prohibited. Unexplained differences without uncertainty, actual loss or state-transition responsibility evidence block completion; verify exactly one normalization per card. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground scaffolding-cycle data package with process/lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible supported modular galvanized-steel facade scaffold episodes with explicit area, configuration, actual duration and asset/provider coverage |
| excluded_use | Engineering safety certification; rental alone; other scaffold systems; user-trade inventory; unqualified area-day comparison; incomplete cycles |
| required_metadata | Site/geography; actual configuration/kit IDs; positive A and polygons; height/load/decks/ties/substrate; phase dates and actual availability duration; handover/closure; concrete identities; asset/provider and meter coverage |
| required_quality_disclosure | Performed/skipped checks and completeness; unresolved identities, support, ranges, fates and owned-asset attribution; measured conversions, factor/model applicability, uncertainty and closure residuals |
| update_trigger | Configuration/geometry, load/deck/tie, source/technology, ownership/provider coverage, duration/cohort, maintenance/fate evidence or identity/method changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| peri-instructions | handbook | PERI UP Scaffolding Kit, Core components, Assembly instructions, Version 2.2, pp. 8, 10, 12–14. https://www.peri.ie/dam/jcr%3A8e2c13f7-1dd2-337d-a227-cb3329355256/peri-up-scaffolding-kit-core-components-instructions-for-assembly-and-use.pdf | Manufacturer-specific cleaning/maintenance, component condition, support/anchoring, transport, marking and inspected handover. No universal lifespan, reuse count, consumption rate or safety threshold is adopted. |
| osha-scaffold | official_guidance | US OSHA, Scaffolding eTool, General Requirements, Scaffold Platform Construction and Criteria for Supported Scaffolds. https://www.osha.gov/etools/scaffolding/general-requirements | Rigid-supported distinction and support/bracing/platform context. US safety guidance does not provide an LCA inventory rate or replace actual local design and acceptance. |
| unsd-cpc21-scaffold | official_guidance | UNSD, CPC Version 2.1, 54570 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/54570 | Historical context for erection/dismantling and associated rental versus rental alone. Explicitly not a CPC 3.0 explanatory note. |
| cycle-normalization-method | method_factor | PCR normative method defined in sections 3, 4 and 8: unique accepted facade elevation and complete-episode normalization. | Author-defined collection/normalization contract, not an external publication or empirical rate. |
| asset-attribution-method | method_factor | PCR normative method defined in sections 7 and 8: exclusive event/provider/asset attribution. | Author-defined attribution and coverage method; real lifetime/capacity/use evidence remains necessary. |
| compatible-pool-ledger-method | method_factor | PCR normative method defined in sections 6 and 8: compatible current-state/constituent closure. | Author-defined physical QA and independent deposit/water accounting; residuals remain findings. |
| carbon-oxidation-identity | method_factor | Normative carbon accounting identity defined in section 8: fossil-carbon CO2 mass upper constraint 44/12. | Molecular mass constraint only; no empirical fuel factor, complete oxidation or invented external publication. |
