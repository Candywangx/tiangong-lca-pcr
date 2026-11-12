---
pcr_id: pcr.constructions-and-construction-services.construction-services.heating-equipment-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Class I wall-mounted electric panel heater installation services

## 1. Scope and Applicability

This PCR covers first installation of a packaged Class I wall-mounted resistive electric panel convector at an existing prepared wall and suitable isolated fixed electrical connection point. The service includes incoming condition checks, use of the matched manufacturer bracket, substrate-compatible fixing, upright mounting and retention checks, fixed electrical connection by a competent electrician, protective-earth and required electrical verification, initial control setup, limited functional heat test, cleanup and signed handover. The installed appliance and actual added components are upstream inputs to this service; disclose that boundary to avoid adding them twice in a construction model.

This scope is restricted to Class I appliances requiring protective earth; Class II appliances are excluded. The Dimplex PLXE Series C Issue 7 manual provides an illustrative model within that Class I route, not a universal appliance specification. Its pages 3 and 7 require an earth connection and suitable fixed wiring; pages 8-9 describe the supplied H-frame, fixings, hooks and locked clips; page 10 describes first-power setup and possible initial odour. Use the actual model's current instructions and preserve equivalent evidence. New branch circuits, supply upgrades, hydronic distribution, boilers, heat pumps, freestanding heaters, repair/replacement of existing heaters, and normal heating use after handover are excluded. A missing compliant supply or adequate wall is a scope failure, not an omitted installation operation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.heating-equipment-installation-services |
| classification_refs | cpc:3.0:54631; Heating equipment installation services; proposed narrower relation, subject to semantic acceptance |
| covered_products | First fixed Class I wall installation and tested handover of a packaged resistive electric panel convector |
| excluded_products | New circuits and supply remediation; hydronic systems; boilers; heat pumps; freestanding appliances; normal use; replacement/repair service |
| representative_product | Class I panel convector supplied with manufacturer-matched H-frame and fitted supply lead; Dimplex PLXE Series C is illustrative |
| production_route | Verify prepared interfaces; inspect package; mark and drill actual fixing holes if needed; secure H-frame; engage hooks and locking clips; fixed electrical connection; electrically verify; initialize controls; limited heat test; signed acceptance |
| market_state | Installed, connected, tested and accepted service at site handover; neither an appliance at factory gate nor delivered lifetime heat |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted first installation of one Class I wall-mounted resistive electric panel convector |
| How much | One accepted installation of one declared appliance |
| How well | Matched H-frame secured to declared substrate; correct orientation, retention and model clearances; suitable isolated supply and protective earth; actual recorded electrical and functional heat-test acceptance; controls initialized; signed handover |
| How long or cycle | One installation job including its attributable corrective work and limited commissioning, ending at acceptance; no heating service-life output |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted Class I wall-mounted electric panel heater installation at tested handover |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | manufacturer/model/serial; rated electrical input; supplied-bracket and component coverage; wall/substrate; fixing schedule and hole/preprepared-hole state; model orientation/clearances; supply voltage/connection/isolation/earth; test criteria/results and actual heat-test interval; controller setup; site/date/acceptance; upstream delivery and component burden coverage |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Use one accepted installation of the same declared appliance configuration; failed or pending installations are excluded from the accepted denominator. |
| electricity_record | site_electricity | Energy | kWh | Record actual installation and commissioning electricity; nameplate W or kW is a rating and cannot substitute for consumed kWh. |
| component_measurement | `fixings_connections_screw`; `fixings_connections_anchor`; `fixings_connections_terminal`; `fixings_connections_connector_box`; `packaging_waste_protective_film`; actual exchanges required by `refine_drilling_debris`; `electrical_waste_heater` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain measured material-specific mass and calibrated weighing or traceable item-to-mass evidence; do not use whole appliance mass for added fixings. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing accepted wall/substrate and suitably rated isolated fixed supply/connection point; packaged heater and additional components at their declared supply gates |
| starting_condition_role | Prior site interfaces plus incoming product gates; wall and new circuit construction are not claimed by this installation record |
| product_classification_scope | Only the defined narrower Class I resistive panel-heater installation service within heating-equipment installation |
| recursive_input_rule | An input same-category subcontract installation service must replace its evidenced work package; either use that service or its disaggregated inventories, never both for the same physical work |
| upstream_dataset_requirement | Match actual heater package, supplied bracket/lead, added parts, electricity, travel/freight and declared tool service; link waste to its receiving treatment with documented boundary ownership |
| disclosure | Declare wall/supply readiness, drilling state, component/package and delivery coverage, regional electricity, tests and rejected-unit routes, tool/travel attribution and missing direct-release characterization |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers first installation of a packaged Class I wall-mounted resistive electric panel convector at an existing prepared wall and suitable isolated fixed electrical connection point. The service includes incoming condition checks, use of the matched manufacturer bracket, substrate-compatible fixing, upright mounting and retention checks, fixed electrical connection by a competent electrician, protective-earth and required electrical verification, initial control setup, limited functional heat test, cleanup and signed handover. The installed appliance and actual added components are upstream inputs to this service; disclose that boundary to avoid adding them twice in a construction model. This scope is restricted to Class I appliances requiring protective earth; Class II appliances are excluded. The Dimplex PLXE Series C Issue 7 manual provides an illustrative model within that Class I route, not a universal appliance specification. Its pages 3 and 7 require an earth connection and suitable fixed wiring; pages 8-9 describe the supplied H-frame, fixings, hooks and locked clips; page 10 describes first-power setup and possible initial odour. Use the actual model's current instructions and preserve equivalent evidence. New branch circuits, supply upgrades, hydronic distribution, boilers, heat pumps, freestanding heaters, repair/replacement of existing heaters, and normal heating use after handover are excluded. A missing compliant supply or adequate wall is a scope failure, not an omitted installation operation. |  |
| start_interfaces | install_test_handover | Reject scope if suitable wall or fixed supply is absent. Record interface evidence; do not hide new circuit, wall strengthening or predrilling work as zero. | `dimplex-plxe-series-c-issue7` |
| mount_connect | install_test_handover | Include actual heater package and separate added fastening/connection roles; use matched bracket, orientation, clearances, hook engagement and locks, competent fixed connection and protective earth for the documented Class I route. | `dimplex-plxe-series-c-issue7` |
| commissioning_gate | install_test_handover | Include installation electricity, control initialization, electrical verification, limited heat test and corrective work before signed acceptance; exclude routine heating after handover. Record actual pass criteria and results, not a claimed lifetime heating performance. |  |
| direct_releases | actual exchanges required by `refine_airborne_drilling_release`; actual exchanges required by `refine_initial_heat_release` | Include characterized releases from actual drilling and first heat-up. Possible odour requires disclosure and characterization; unknown emissions are incomplete coverage, not a zero or a generic VOC. |  |
| logistics_tools | material_transport; installer_travel; `tool_access_drill`; `tool_access_extraction`; `tool_access_lifting`; `tool_access_electrical_test` | Include attributable delivery, installer visits and reusable equipment service when incurred and owned by this boundary; disclose upstream inclusion, visit sharing and provider coverage to prevent duplication. |  |

Shared infrastructure disclosure: when visits, meter periods or reusable tool services cross job periods, record the shared asset/service id, this installation node and every other consuming job, the common period and the evidenced attribution driver. The provider owns equipment life-cycle inventory; this node records attributable access service. No tool lifetime is invented. Reconcile all job shares to the single shared total.


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_test_handover | Receive, wall mount, connect, test and hand over | required | Defined first-installation route with accepted prepared interfaces | Integrate appliance/H-frame with added fastening and connection roles; verify, rework within this node, or route rejected units to intact return or waste exit; accept only after test and signed handover | 1 Item(s) accepted installation |

One process owns the whole installation job. Corrections to drilling, bracket retention, connection or setup loop within `install_test_handover` and retain all consumed resources. Unresolved electrical or mounting failures remain work in progress; intact supplier returns and discarded electrical waste leave by distinct rows. The heat test establishes the recorded commissioning gate, not delivered building heating performance.
Shared service linkage: `cp_resources` identifies each reusable tool or meter service and its consuming installation jobs; `cp_transport` identifies shared visits and every consuming job/period. Only the share owned by this reference installation is recorded here.


### Process: Receive, wall mount, connect, test and hand over (`install_test_handover`)

#### Inputs

##### Product flows

###### Packaged Class I resistive panel convector with matched H-frame and fitted supply lead (`heater_package`)

Record every Class I appliance entering this job, including its manufacturer-matched bracket and supplied lead. A bracket already included in the supplier package is not a second upstream appliance input. Identify model, rating, serial number, supplied components and receipt state.

- Selected flow: Packaged Class I resistive panel convector with matched H-frame and fitted supply lead
- Flow property / unit: Number of items / Item(s)
- Amount rule: Count appliances issued to the installation, including replacements; reconcile accepted unit, intact supplier returns and discarded units.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: supplier receipt and reject records must establish appliances consumed per accepted installation; the manual does not establish a generic replacement rate.

###### Separately supplied heater fixing screw (`fixings_connections_screw`)

Record only this independently identified separately supplied heater fixing screw at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied heater fixing screw
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied heater substrate anchor (`fixings_connections_anchor`)

Record only this independently identified separately supplied heater substrate anchor at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied heater substrate anchor
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fixed-connection terminal (`fixings_connections_terminal`)

Record only this independently identified separately supplied fixed-connection terminal at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fixed-connection terminal
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fixed-connection box (`fixings_connections_connector_box`)

Record only this independently identified separately supplied fixed-connection box at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fixed-connection box
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Installation tools and commissioning electricity (`site_electricity`)

Include actual drilling, extraction, electrical testing, controls initialization and limited heat-test electricity attributable to this job. No household heating after handover is included.

- Selected flow: Installation tools and commissioning electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record metered or traceably submetered installation and heat-test electricity; separate heating-mode test interval and rework consumption. Do not multiply nameplate rating by an assumed test duration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: measured tool and commissioning records are required; manufacturer rated power is neither consumed electricity nor a supported generic kWh interval.

###### Attributable appliance and component freight (`material_transport`)

Conditional on delivery or movement owned by this service boundary. Identify actual carrier, mode, loaded mass, distance, legs and supplier-gate coverage; avoid adding delivery already in upstream datasets.

- Selected flow: Attributable appliance and component freight
- Flow property / unit: Mass*distance / t*km
- Amount rule: Record attributable freight service from actual consignment mass and route records in t*km, retaining empty-leg treatment and upstream-delivery coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: job route, mass and carrier records are required; no representative mileage or load factor is imposed.

###### Attributable installer travel service (`installer_travel`)

Conditional on installer travel incurred for this job. Retain mode, passengers, origin, destination and shared-visit allocation separately from material freight.

- Selected flow: Attributable installer travel service
- Flow property / unit: Number of persons*distance / person*km
- Amount rule: Record actual attributable passenger transport in person*km; shared visits need an explicit ownership and attribution record.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: actual itinerary and shared-visit records must establish travel; do not infer a standard trip from the classification.

###### Complete drill-use service excluding separately owned operation (`tool_access_drill`)

Record only this independently identified complete drill-use service excluding separately owned operation at its actual state and supply or receiving gate. Only actual complete drill-use dataset referenced to h, with real provider/tool scope and lifecycle coverage; no material or fee conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete drill-use service excluding separately owned operation
- Flow property / unit: Duration / h
- Amount rule: Record actual attributable drill-use hours by tool/provider and task/period with matching included resources; normalize once by accepted installation count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete dust-extraction equipment-use service (`tool_access_extraction`)

Record only this independently identified complete dust-extraction equipment-use service at its actual state and supply or receiving gate. Only actual complete extraction-service h reference and matching equipment/resource scope. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete dust-extraction equipment-use service
- Flow property / unit: Duration / h
- Amount rule: Record actual extraction-equipment hours separately from drill hours and included energy; normalize once by accepted installations.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete lifting-equipment-use service (`tool_access_lifting`)

Record only this independently identified complete lifting-equipment-use service at its actual state and supply or receiving gate. Only actual complete lifting service with real h reference within job boundary. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete lifting-equipment-use service
- Flow property / unit: Duration / h
- Amount rule: Record actual lifting-equipment service hours by exact equipment/provider; normalize once by accepted installations.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete electrical-test equipment-use service (`tool_access_electrical_test`)

Record only this independently identified complete electrical-test equipment-use service at its actual state and supply or receiving gate. Only actual complete electrical-test equipment service with matching h reference and life coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete electrical-test equipment-use service
- Flow property / unit: Duration / h
- Amount rule: Record actual electrical-test equipment service hours including repeat tests; normalize once by accepted installations.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted Class I wall-mounted electric panel heater installation at tested handover (`accepted_installation`)

The only reference output is the installation of one identified Class I upright resistive panel convector on its matched secured H-frame, connected to existing suitable isolated fixed supply, with protective-earth/electrical verification, control setup and limited functional heat test completed. Record signed acceptance.

- Selected flow: Accepted Class I wall-mounted electric panel heater installation at tested handover
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `dimplex-plxe-series-c-issue7`

Range decision: the reference definition is exactly one accepted installation; configuration equivalence must be demonstrated rather than introducing a statistical yield interval.

###### Intact uninstalled or rejected heater returned to supplier (`returned_heater`)

Conditional intact return with retained product status, traceable serial number, reason and recipient. Failed units held pending repair are not accepted installations; in-job corrective work remains in this process.

- Selected flow: Intact uninstalled or rejected heater returned to supplier
- Flow property / unit: Number of items / Item(s)
- Amount rule: Count intact appliances leaving to supplier, retaining their issue/return ids, transport ownership and burden disposition; do not count the same unit as discarded waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: real return records determine zero or positive count; no generic intact-return fraction is supported.

##### Waste flows

###### Discarded removed heater protective film (`packaging_waste_protective_film`)

Record only this independently identified discarded removed heater protective film at its actual state and supply or receiving gate. Actual independently discarded protective film identified by material/state/receiver; film inside a whole packaging dispatch not counted again. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Discarded removed heater protective film
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`
- Sources: `dimplex-plxe-series-c-issue7`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete discarded Class I panel heater waste (`electrical_waste_heater`)

Record only this independently identified complete discarded class i panel heater waste at its actual state and supply or receiving gate. Actual damaged/unrepairable whole appliance dispatched to authorized electrical-waste receiver, including retained internal parts once; intact usable return not waste. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete discarded Class I panel heater waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | accepted_installation | Attribute the installation-job inventory to accepted installations of the same configuration. There is no saleable heat co-product from the short test; do not credit incidental room warming. |  |
| reject_burdens | returned_heater; actual exchanges required by `refine_usable_material_returns`; `electrical_waste_heater`; install_test_handover | Retain corrective-work resources, failed commissioning and replacement handling attributable to the accepted job. Record intact supplier/material-return burden ownership and any supplier credit explicitly; no automatic avoided-production or recycling credit. Never count failed/pending units as accepted outputs. |  |
| shared_visit | material_transport; installer_travel; `tool_access_drill`; `tool_access_extraction`; `tool_access_lifting`; `tool_access_electrical_test`; site_electricity | Use job-resolved records first. If visits, meter periods or equipment are shared, identify all consumers, period and an evidenced physical driver; reconcile totals and count each burden once. Record material attribution uncertainty instead of applying an arbitrary equal split. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | install_test_handover | heater package and separately supplied component inputs | receipt and issue reconciliation | job_id; model; serial; package_BOM; substrate; fixing_schedule; issued_items; issued_mass; usable_return_exit_id; replacement_id; upstream_coverage; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Inspect supplier package and approved instructions; reconcile gross issue records and separately weighed usable return exits; weigh separate material parts or retain traceable manufacturer part mass; distinguish prior supply interface; Aggregation procedure: per reference flow; sum gross actual job-owned component inputs; keep usable returned materials as separate exits without net subtraction or duplicated supplied bracket/lead Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); kg | every receipt, issue and return | complete installation job including corrections | identified site and job | per reference flow | supplier BOM and delivery note; scale calibration; substrate/fixing record |
| cp_resources | install_test_handover | site electricity and conditional tool access | meter and equipment service log | job_id; meter_id; start_reading; end_reading; test_start; test_end; test_mode; tool_id; access_hours; shared_consumers; attribution_driver; provider_coverage; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Read traceable meters for job/test; separate other loads; log tool use and provider boundary; retain allocation evidence for shared periods; Aggregation procedure: per reference flow; aggregate attributable measured job electricity and provider-owned equipment hours once Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kWh; h | each tool/test event and corrective event | arrival through signed handover | identified site, meter and equipment | per reference flow | meter accuracy; readings; test log; provider/service-boundary record |
| cp_transport | install_test_handover | conditional freight and installer travel across declared shared job/visit periods | dispatch and travel log | job_id; movement_id; mode; origin; destination; distance; consignment_mass; passengers; shared_jobs; attribution_driver; upstream_delivery | Reconcile carrier notes and actual itineraries; distinguish material freight from personnel movement; retain shared-visit driver and empty-leg ownership; Aggregation procedure: per reference flow; sum attributable mode-specific services after checking upstream coverage | t*km; person*km | each movement | complete installation and corrective visits | actual route to identified site | per reference flow | carrier note; route record; passenger/consignment log; allocation reconciliation |
| cp_acceptance | install_test_handover | accepted reference output and job starting conditions | inspection and signed test record | job_id; model; serial; substrate; preprepared_holes; bracket; fixings; orientation; clearances; supply; isolation; earth_test; electrical_tests; heat_test; control_setup; acceptance; timestamp | Competent installer records applicable manufacturer and project acceptance criteria, interface readiness, electrical and functional test results and signed handover; unresolved failure is not accepted; Aggregation procedure: per reference flow; exactly one accepted installation | Item(s) | each installation and retest | complete job to acceptance | same model/configuration/site as inventory | per reference flow | signed installation/test sheet; photographs; competent electrician record |
| cp_exits | install_test_handover | intact appliance/material returns, packaging, drilling debris and electrical waste | return and waste transfer record | job_id; exit_id; serial_or_material; state; quantity; mass; recipient; treatment; upstream_coverage; rework_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Separate intact product return from waste; weigh actual waste by material; link exit to receiver and producing job; reconcile captured debris and airborne release separately; Aggregation procedure: per reference flow; sum physical exits once with traced ownership; rework stays within node Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); kg | every exit and correction | complete job including returns | identified installation and receiving route | per reference flow | return acceptance; calibrated mass evidence; waste transfer/receiver record |
| cp_releases | install_test_handover | conditional drilling and initial heat-up air releases | characterization and missing-data disclosure | job_id; drilling_state; substrate; species; particle_basis; air_compartment; capture; test_interval; release_quantity; method; detection_limit; missing_characterization; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | For actual drilling obtain substance/particle and capture-specific evidence; for first heat-up seek defensible product-specific substance/quantity evidence; record uncertainty and missing coverage without inventing a VOC or zero; Aggregation procedure: per reference flow; aggregate characterized emissions by substance and compartment; retain unquantified potential releases as incomplete coverage Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each drilling/initial heat-test scenario | installation drilling and limited heat-test only | actual substrate/product and indoor receiving environment | per reference flow | method validation; measurement report; detection limits; documented no-drilling condition; disclosure of gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | all inventory rows | Aggregate actual job-owned quantities per reference flow; use accepted service count of the same configuration for a multi-installation job, after recording resource attribution and failed/pending states. Do not merge different heater models as equivalent without evidence. | cp_components; cp_resources; cp_transport; cp_acceptance; cp_exits; cp_releases | inventory per reference flow |  |
| receipt_exit_reconcile | heater_package; returned_heater; `electrical_waste_heater` | Reconcile physical appliance receipts, accepted installed serials, intact supplier returns, discarded units and remaining job stock; retain rework within the same job and prevent duplicate input/output treatment. | cp_components; cp_acceptance; cp_exits | serial-resolved appliance reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all inventory rows | Keep heater type, model, package coverage, wall substrate, fastening and supply conditions aligned; the manufacturer example is not a universal BOM. | cp_components; cp_acceptance; `dimplex-plxe-series-c-issue7` |
| resource_coverage | site_electricity; material_transport; installer_travel; `tool_access_drill`; `tool_access_extraction`; `tool_access_lifting`; `tool_access_electrical_test` | Cover job and corrective events; separate installation and normal-use energy; disclose supplier gates and shared-event attribution. | cp_resources; cp_transport |
| release_coverage | actual exchanges required by `refine_airborne_drilling_release`; actual exchanges required by `refine_initial_heat_release` | Unknown pollutant identity or amount remains a direct-emission completeness gap. Do not equate odour to a substance or claim zero without valid evidence. | cp_releases; `dimplex-plxe-series-c-issue7` |
| acceptance_trace | accepted_installation; returned_heater; `electrical_waste_heater` | Signed acceptance, reject path and quantities must reconcile; unaccepted jobs cannot silently disappear from resources or accepted denominator. | cp_acceptance; cp_exits |
| `refine_fixings_connections` | `fixings_connections_screw`; `fixings_connections_anchor`; `fixings_connections_terminal`; `fixings_connections_connector_box` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record actual separately supplied screws, anchors, connection terminals, connector boxes or other permitted connection consumables. Split the conditional umbrella into actual materials and identities; do not invent a universal kit. Existing fused spur and fixed wiring are declared prior interfaces. Range evidence need: actual substrate and supplier-approved fastening/connection schedule determine quantities; four bracket holes in this example do not determine every model BOM. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other permitted actual consumables/SKUs need identities and independent quantity; existing fused spur/fixed wiring prior interface, no universal kit or bracket-hole count proxy. | `cp_components`; actual independent records and identity/unit evidence |
| `refine_tool_access` | `tool_access_drill`; `tool_access_extraction`; `tool_access_lifting`; `tool_access_electrical_test` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional on reusable drill, extraction, lifting or electrical-test equipment whose service burden is included. Identify tool/provider and service boundary; consumables already included in the provider dataset are not duplicated. Range evidence need: actual tools and operating records determine access duration; no universal lifetime or hours-per-heater estimate is supported. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Any other actual equipment/function or different native reference needs independent exact identity/property/unit; included consumables/energy not charged again. | `cp_resources`; actual independent records and identity/unit evidence |
| `refine_usable_material_returns` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional product exit for intact reusable packaging or unused suitable fixing/connection parts returned to supplier or controlled stock. Split by actual material, usable state and recipient. This is neither heater appliance count nor waste. Range evidence need: usable state, material and measured return records determine actual mass; no universal return/reuse fraction or automatic avoided-production credit is supported. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual outward usable SKU/state/recipient matched to original native property/unit; no retained stock, no heater count or waste and no avoided-production credit. | `cp_exits`; actual independent records and identity/unit evidence |
| `refine_packaging_waste` | `packaging_waste_protective_film` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record packaging and removed protective film by actual material and licensed or project-approved destination. Intact reusable packages crossing back to supplier or stock leave by actual exchanges required by `refine_usable_material_returns` and are excluded from waste. Range evidence need: weigh actual packaging for the chosen model; the manual gives no packaging mass or recycling fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other packaging material/composite and receiver roster; reusable intact returns and retained stock excluded, no guessed proportions or recovery. | `cp_exits`; actual independent records and identity/unit evidence |
| `refine_drilling_debris` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional on actual new fixing holes or consumable losses. Record wall substrate, captured fraction, extraction method and waste destination; verified preprepared holes may make drilling absent. Range evidence need: hole/substrate and collection evidence must establish debris quantities; no generic concrete or gypsum mass is assumed. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual captured drilling residue by substrate/composite/state/receiver and each spent consumable; actual preprepared holes may establish no drilling, not assumed zero. | `cp_exits`; actual independent records and identity/unit evidence |
| `refine_electrical_waste` | `electrical_waste_heater` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional damaged or unrepairable appliances/components sent to an authorized electrical-waste route. Intact supplier returns remain product flows; waste must not be relabelled as an installed output. Range evidence need: measured waste and failure records are required; no default defect or recovery rate is supported. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual separately discarded electrical components require exact complete component/SKU/state and receiver; no default failure rate, no internal BOM duplicate. | `cp_exits`; actual independent records and identity/unit evidence |
| `refine_airborne_drilling_release` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional on drilling. The actual substrate, emitted substance or particle-size basis, receiving-air compartment, extraction and capture efficiency must be established before creating concrete elementary exchanges. Captured solid debris remains waste. Range evidence need: substrate, particle-size/species and capture evidence are unresolved until foreground characterization; a universal dust interval would misstate identity and exposure. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_releases`; actual independent records and identity/unit evidence |
| `refine_initial_heat_release` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: The manufacturer reports possible initial heat-up odour but identifies no chemical substance, emission factor or quantity. Retain the potential commissioning release as a characterization requirement; odour alone is not a VOC identity or proof of zero release. Range evidence need: neither substance nor quantity is specified by the manual; no generic VOC, arbitrary mass range or zero may replace the missing evidence. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual initial-heat-up species/receiving indoor air compartment/quantity evidence; retain potential characterization obligation, no generic VOC, assumed emission or zero. | `cp_releases`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_check | install_test_handover | Verify declared prepared wall and isolated supply; reject new circuit/heating-network or repair/replacement route from this category. |  |
| mount_test_check | accepted_installation | Require component, bracket retention, orientation, model clearance, protective-earth/electrical test, actual limited heat test, initialized controls and signed handover records. Manufacturer ratings are not measured consumption or achieved heating output. |  |
| quantity_check | all inventory rows | Reference output is 1 Item(s); each quantity uses per reference flow basis and its own linked installation-node protocol. Check receipt, return, waste and job resource reconciliations and declared sharing. |  |
| reject_route_check | returned_heater; actual exchanges required by `refine_usable_material_returns`; `electrical_waste_heater`; install_test_handover | Trace failed/pending states to in-node corrective work, intact return, authorized waste exit or disclosed work in progress. Exclude unresolved rejects from accepted output and retain attributable burdens. |  |
| release_check | actual exchanges required by `refine_airborne_drilling_release`; actual exchanges required by `refine_initial_heat_release` | Check actual drilling state, emitted identity/particle basis and receiving medium; require valid commissioning substance evidence or mark direct emissions incomplete. No arbitrary zero or generic VOC identity is acceptable. |  |
| identity_check | all inventory rows | Resolve each actual exchange to a verified concrete flow, property and unit before final process publication. Conditional umbrella roles must split using actual records; semantically useful unresolved candidate cards do not prove final exchange coverage. |  |
| `atomization_fixings_connections_complete` | `fixings_connections_screw`; `fixings_connections_anchor`; `fixings_connections_terminal`; `fixings_connections_connector_box` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_fixings_connections` with actual records; unresolved required expansion blocks the dataset. | `dimplex-plxe-series-c-issue7` |
| `atomization_tool_access_complete` | `tool_access_drill`; `tool_access_extraction`; `tool_access_lifting`; `tool_access_electrical_test` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_tool_access` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_usable_material_returns_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_usable_material_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_packaging_waste_complete` | `packaging_waste_protective_film` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_packaging_waste` with actual records; unresolved required expansion blocks the dataset. | `dimplex-plxe-series-c-issue7` |
| `atomization_drilling_debris_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_drilling_debris` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_electrical_waste_complete` | `electrical_waste_heater` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_electrical_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_airborne_drilling_release_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_airborne_drilling_release` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_initial_heat_release_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_initial_heat_release` with actual records; unresolved required expansion blocks the dataset. | `dimplex-plxe-series-c-issue7` |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation-service inventory with supplied appliance and added-part upstream inputs; process and lifecyclemodel are downstream projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Specified first-installation service as a declared site or regional background work package; compatible construction modelling with explicit component ownership |
| excluded_use | Bare appliance manufacturing; branch circuit works; hydronic/heat-pump installation; replacement/repair; lifetime building heat; untested installation or generic electrical product service |
| required_metadata | Model/serial and rating; bracket and BOM coverage; wall/substrate/fixing/holes; supply/isolation/earth; test criteria/results/interval; controller setup; site/time/accepted count; incoming gates/logistics; reject routes; attribution |
| required_quality_disclosure | Unresolved exchange/support identities; all Range evidence needs; missing first-heat emission characterization; drilling emissions evidence; measurement and shared-event uncertainties; upstream component and delivery coverage |
| update_trigger | Change of model, package, wall/fixing/supply, acceptance or commissioning route, supplier gate, geography/electricity, reject route or newly available direct-release evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| dimplex-plxe-series-c-issue7 | handbook | Glen Dimplex, PLXE Series C long manual, Issue 7, PDF pp. 3, 7-10. https://www.dimplex.co.uk/sites/g/files/emiian551/files/media_import/medias/docus/13/PLXE%20-%20Series%20C%20Long%20Manual%20-%20Issue%207%20%283%29.pdf | Documented Class I earth/fixed supply route; H-frame and mounting/locking; model-dependent clearances; first-power setup; possible initial heat-up odour without pollutant identity or quantity |
