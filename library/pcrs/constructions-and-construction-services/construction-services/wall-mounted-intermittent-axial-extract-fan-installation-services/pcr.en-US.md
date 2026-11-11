---
pcr_id: pcr.constructions-and-construction-services.construction-services.wall-mounted-intermittent-axial-extract-fan-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wall-mounted intermittent axial extract fan installation services

## 1. Scope and Applicability

Scope is restricted to Class II double-insulated fans; Class I fans requiring earthing are excluded.

This PCR covers first installation of a packaged basic intermittent axial extract fan on an accepted preexisting wall sleeve and exterior grille, using an accepted existing isolated fixed electrical supply. The representative route is the Vent-Axia VASF100B basic model: two installer-selected speeds and remote or light-switch operation. The representative manual constrains that example, not every fan sold under this category. An equivalent model requires its own installation evidence and compatible qualifiers. [vent-axia-494229j0626, pp. 3–6]

Included work comprises receipt and unpacking, substrate-compatible backplate fixing, actual fixing-hole drilling or an inspected preprepared-hole route, local connection materials, speed selection, cover engagement, electrical verification, limited functional and delivered-extraction testing, correction of failed work, cleanup, attributable site resources and signed handover. Declare the project extraction acceptance criterion before testing. The reference is an installed service meeting that criterion, with no whole-building airflow or room ventilation guarantee.

Exclude construction of a core penetration, new sleeve, external grille, new branch circuit or new isolation point; long duct systems, heat recovery, air conditioning, continuous-running fans, timer/humidity variants, later maintenance and ordinary ventilation use. If the starting interfaces fail acceptance or require new construction, stop this route and describe the extra service under a separately reviewed boundary. Do not relabel the work to retain this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.wall-mounted-intermittent-axial-extract-fan-installation-services |
| classification_refs | CPC 3.0 54632 — Ventilation and air-conditioning equipment installation services; proposed narrower relation, subject to individual mapping review |
| covered_products | First wall installation and handover of a basic intermittent axial extract fan on verified existing interfaces; Class II double-insulated models only |
| excluded_products | Air-conditioning systems; duct networks; heat-recovery units; new penetration/sleeve/grille construction; timer/humidity/continuous variants; operational ventilation service; Class I earthed fans |
| representative_product | Vent-Axia VASF100B basic fixed-speed-selectable wall extract fan installation; no generic bill of materials or flow rate is inferred |
| production_route | Receipt → inspect interfaces → remove cover → mark/drill/plug and secure backplate → fixed connection and isolated speed selection → refit retained cover → electrical and extraction verification → correction if needed → signed handover |
| market_state | One first-installed, tested and accepted fan installation service at handover; appliance manufacture is an upstream input |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted tested wall-mounted intermittent axial extract fan installation service |
| How much | 1 Item(s) |
| How well | Secure fixing and cover retention, free impeller/shutter, compatible Class II fixed connection, selected speed, documented electrical verification and actual delivered extraction meeting the declared project criterion |
| How long or cycle | One installation and acceptance campaign through signed handover; record actual tests and rectification, with no assumed operating life or test duration |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted tested wall-mounted intermittent axial extract fan installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual basic intermittent model and appliance identifier; supply voltage/frequency and Class II design; speed selection; wall/substrate and fixing schedule; sleeve dimensions/length/slope and exterior guard acceptance; existing supply/isolation and cable compatibility; installed orientation and cover retention; electrical test scope/results; measured extraction test method, conditions, delivered flow and project criterion; installation date/site; drilling or inspected preprepared holes; failed-work and rework disposition; handover record |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | reference product | Number of items | Item(s) | Count only fan installations passing all declared gates; different models, speed states, interfaces and extraction criteria require disaggregated records, not assumed equivalence. |
| energy_record | installation_electricity | Energy | kWh | Preserve measured electrical energy and actual test/installation time. Rated power or rated air flow alone cannot determine energy or delivered extraction; record any unit conversion and measurement uncertainty. |
| material_conversion | `fastening_components_screw`; `fastening_components_wall_plug`; `connection_components_cable`; `ancillary_consumables_water`; `ancillary_consumables_dust_bag`; actual exchanges required by `refine_site_fuel` | Mass | kg | Convert dimensions, counts or fuel volumes only using traceable actual-product mass or density evidence and declared conditions; do not equate one appliance with one kilogram. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing accepted sleeve, exterior guard, suitable wall substrate and compliant isolated fixed supply/connection point; purchased fan and separately added components at declared upstream supply gate |
| starting_condition_role | Prior constructed interfaces are fixed boundary inputs to the service description, not newly produced sleeve/grille/circuit exchanges |
| product_classification_scope | Narrow installation subset of CPC 3.0 54632; classification does not establish material or service flow identity |
| recursive_input_rule | A purchased fan-installation service in the same category is an upstream service input with a declared gate and non-overlapping work schedule. Do not expand and charge that same work again as own foreground installation. |
| upstream_dataset_requirement | Use state-, model-, geography-, supply-gate- and unit-compatible datasets for the appliance, actual components, electricity, freight and waste handling. Declare manufacture/delivery/packaging coverage and gaps; a missing dataset does not erase the input. |
| disclosure | Identify all accepted prior interfaces and excluded construction, actual drilling route, resource attribution, capital-tool treatment, data gaps, waste destinations and the handover gate. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | Scope is restricted to Class II double-insulated fans; Class I fans requiring earthing are excluded. This PCR covers first installation of a packaged basic intermittent axial extract fan on an accepted preexisting wall sleeve and exterior grille, using an accepted existing isolated fixed electrical supply. The representative route is the Vent-Axia VASF100B basic model: two installer-selected speeds and remote or light-switch operation. The representative manual constrains that example, not every fan sold under this category. An equivalent model requires its own installation evidence and compatible qualifiers. [vent-axia-494229j0626, pp. 3–6] Included work comprises receipt and unpacking, substrate-compatible backplate fixing, actual fixing-hole drilling or an inspected preprepared-hole route, local connection materials, speed selection, cover engagement, electrical verification, limited functional and delivered-extraction testing, correction of failed work, cleanup, attributable site resources and signed handover. Declare the project extraction acceptance criterion before testing. The reference is an installed service meeting that criterion, with no whole-building airflow or room ventilation guarantee. Exclude construction of a core penetration, new sleeve, external grille, new branch circuit or new isolation point; long duct systems, heat recovery, air conditioning, continuous-running fans, timer/humidity variants, later maintenance and ordinary ventilation use. If the starting interfaces fail acceptance or require new construction, stop this route and describe the extra service under a separately reviewed boundary. Do not relabel the work to retain this PCR. | `vent-axia-494229j0626` |
| existing_interfaces | fan_installation | Inspect and record sleeve length/slope, external guard suitability and supply compatibility before work. The representative manual requires an outward downward sleeve slope and a wall-kit duct length of at least 100 mm from fan backplate to inside external grille. These are example-specific interface checks, not a universal sleeve construction inventory. | `vent-axia-494229j0626` |
| class_ii_connection | fan_installation | For the representative 220–240 V 50 Hz Class II fan, use fixed wiring and rear cable entry; it must not be earthed. Verify the actual 0.75–1.5 mm² supply-cord compatibility and appropriate basic-model wiring diagram. Perform connection and speed selection while isolated; apply the actual model instructions when different. | `vent-axia-494229j0626` |
| complete_installation | fan_installation | Include actual marking/drilling/plugging/screwing and electrical/extraction verification, electricity and cleanup. With preprepared fixing holes retain inspection evidence; do not silently remove drilling or its debris. Declare separately supplied component roles and avoid counting integral parts twice. | `vent-axia-494229j0626` |
| gate_exclusions | fan_installation | Close the service only after secure mounting, free impeller and shutters, all cover clips engaged, correct fixed connection, selected speed and recorded actual electrical and extraction acceptance. The manual gives mounting/wiring checks; the producer declares the project extraction test method and criterion. Post-handover ventilation electricity and existing interface construction are outside this dataset. | `vent-axia-494229j0626` |
| resource_scope | fan_installation | Under cp_energy and cp_transport include attributable transport, task power, consumed materials and waste handling. Declare portable-tool capital manufacture/lifetime treatment and any exclusion; operational tool energy and wear consumables remain included. Do not claim complete capital coverage where it is excluded. Identify shared vehicles, tools, charging and site services, enumerate fan_installation and every other actual consuming job/node with its relevant period, and retain a unique resource-event identifier. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fan_installation | Fan fixing, connection, verification and handover | required | First basic intermittent wall fan on accepted existing interfaces | Integrate fan/backplate, substrate fixings and local connection components; verify installed state and extraction; correct failures internally or record product return/waste exit | `accepted_installation`: 1 Item(s) |


### Process: Fan fixing, connection, verification and handover (`fan_installation`)

#### Inputs

##### Product flows

###### Basic intermittent axial extract fan appliance at installation supply gate (`fan_appliance`)

Packaged fan, its backplate, cover, impeller and supplied integral parts enter the installation foreground. Identify the actual model and supplied contents; do not add separately supplied parts twice.

- Selected flow: Basic intermittent axial extract fan appliance at installation supply gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record issued fan appliances, including replacements consumed during rectification, reconciled to stock returns and accepted installations.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `vent-axia-494229j0626`

Range evidence need: Actual SKU and supplied-content issue/return counts, replacement records and accepted cohort are needed before any yield or appliance-input range. No numeric Range is asserted.

###### Separately supplied fan fixing screw (`fastening_components_screw`)

Record only this independently identified separately supplied fan fixing screw at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fan fixing screw
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `vent-axia-494229j0626`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fan fixing wall plug (`fastening_components_wall_plug`)

Record only this independently identified separately supplied fan fixing wall plug at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fan fixing wall plug
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `vent-axia-494229j0626`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied local fan connection cable (`connection_components_cable`)

Record only this independently identified separately supplied local fan connection cable at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied local fan connection cable
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `vent-axia-494229j0626`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fan-installation cleaning water (`ancillary_consumables_water`)

Record only this independently identified separately supplied fan-installation cleaning water at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fan-installation cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied dust-collection bag (`ancillary_consumables_dust_bag`)

Record only this independently identified separately supplied dust-collection bag at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied dust-collection bag
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Electricity supplied for fixing, electrical verification and fan extraction tests (`installation_electricity`)

Include actual drilling, powered dust collection, charging attributable to these tasks, test instruments and fan test operation. The nameplate rating is not consumption; daily ventilation operation is outside this handover service.

- Selected flow: Electricity supplied for fixing, electrical verification and fan extraction tests
- Flow property / unit: Energy / kWh
- Amount rule: Use task or allocated meter readings; if direct metering is unavailable retain measured operating power and actual run time by device, calculation and uncertainty.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Task metering or measured device power, actual drilling/charging/testing runtimes and allocation records are needed; neither rated power nor an assumed test duration supports an energy interval. No numeric Range is asserted.

###### Attributable equipment and material transport service to installation site (`transport_service`)

Conditional purchased freight carrying the fan, fixings or equipment is recorded by actual vehicle/service and route. Include attributable delivery and return legs; crew transport requiring a different service unit is disclosed and modelled separately in its actual unit.

- Selected flow: Attributable equipment and material transport service to installation site
- Flow property / unit: mass*distance / t*km
- Amount rule: Collect actual mass carried and distance by leg, allocated to this installation cohort; retain actual service-unit conversion and upstream dataset coverage. Do not double count supplier delivery already included upstream.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: Actual route legs, carried mass, vehicle/service units, crew travel and allocated shares are needed; no generic freight distance or load range is asserted. No numeric Range is asserted.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Usable complete fan appliance returned outward (`returned_components_fan`)

Record only this independently identified usable complete fan appliance returned outward at its actual state and supply or receiving gate. Actual whole unused or documented repairable fan product accepted by named recipient, matching original complete appliance SKU/Item(s); failed awaiting-repair job not accepted service. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable complete fan appliance returned outward
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count only the actual outward transfer of this complete usable product in Item(s), accepted by its named recipient at the documented handover. Match the original supplied SKU/configuration, usable state and selected Count/Item(s) reference; retain receipt/return IDs and upstream burden custody without a second return deduction. Closing stock, internal correction and discarded waste do not enter this product quantity. Normalize the attributable outward count once by the original accepted-service denominator; kg is an auxiliary measurement, not a second exchanged view.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Accepted tested wall-mounted intermittent axial extract fan installation service (`accepted_installation`)

One secured basic intermittent fan is fixed and connected on the accepted existing sleeve/grille/supply interface, its selected speed and free impeller/shutter motion are verified, and its actual electrical and extraction tests meet the declared project acceptance criteria before signed handover.

- Selected flow: Accepted tested wall-mounted intermittent axial extract fan installation service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `vent-axia-494229j0626`

Range review: exactly one accepted service is the normalization definition. No empirical installation-yield range is asserted; cp_acceptance retains failed jobs and retests.

##### Waste flows

###### Separated fan shipment carton waste (`packaging_waste_carton`)

Record only this independently identified separated fan shipment carton waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separated fan shipment carton waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separated fan shipment plastic packaging waste (`packaging_waste_plastic`)

Record only this independently identified separated fan shipment plastic packaging waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separated fan shipment plastic packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Captured fixing-hole drilling debris at site collection gate (`drilling_debris`)

Actual substrate debris and collected dust from new fixing holes leave to identified waste handling. Existing preprepared holes may remove drilling, but only an inspected job record can establish this; no new sleeve core hole is allowed.

- Selected flow: Captured fixing-hole drilling debris at site collection gate
- Flow property / unit: Mass / kg
- Amount rule: Measure collected debris by substrate and destination; retain hole number/diameter/depth, extraction method, collection effectiveness evidence and any uncollected fraction assessment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Actual substrate, fixing-hole number/diameter/depth, preprepared-hole status, captured mass and collection effectiveness are needed; no core-hole or generic dust factor is substituted. No numeric Range is asserted.

###### Discarded local fan-connection cable offcut (`rejected_waste_cable_offcut`)

Record only this independently identified discarded local fan-connection cable offcut at its actual state and supply or receiving gate. Actual independently discarded complete insulated cable offcut, no separated copper/polymer duplicate. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Discarded local fan-connection cable offcut
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | fan_installation | The intended output is the accepted installation service; product returns and waste are not accepted services or automatic co-products. Retain all attributable failed-work and retest burdens in the declared cohort. No recovery or avoided-product credit is inferred. |  |
| shared_resources | fan_installation | Prefer task-specific measurements. Under cp_energy and cp_transport allocate shared job resources from documented activity drivers across all actual consumers, reconcile their shares to the whole job and disclose the selected driver and sensitivity. Do not charge the same meter interval, freight leg or tool burden twice. For each shared asset/service list fan_installation and every other actual consumer, record their service periods/jobs and measured driver, allocation rationale, denominator, share and evidence; if no sharing occurs record the single-consumer fact. |  |
| reject_paths | fan_installation | Link each failed fan or mounting/connection defect to its installation. Internal correction loops remain in this node; unused/repairable product exits use `returned_components_fan`; discarded material uses `rejected_waste_cable_offcut` and its actual route. Retain correction inputs/energy; unresolved failures cannot enter accepted_installation. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | fan_installation | Appliance, fixing, connection, consumable inputs and product returns | Issue/return records and measurements | job_id; model; appliance_id; component_id; material; issued_count; returned_count; measured_mass; cable_length; mass_per_length; density; conversion_conditions; integrated_parts; defect_state; destination; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile delivery, issue, installation and return records; weigh actual components or retain traceable supplier conversion; split each material identity and gate. Aggregation and attribution method: Attributable quantities per reference flow; separately retain issued, installed, returned and discarded quantities. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); kg; declared source units | Each installation or attributable job event | Full installation campaign including corrections and retests | Declared installation site and job cohort | per reference flow | Receipts, stock movements, scale calibration, product sheets, conversion evidence and supplier return record |
| cp_energy | fan_installation | Task electricity and actual conditional site fuel | Meter, activity and allocation records | job_id; device; task; meter_start; meter_end; electricity_kWh; measured_power; runtime; fuel_identity; fuel_mass; fuel_volume; density; conversion_conditions; activity_driver; job_total; allocated_share; tool_capital_policy; resource_event_id; consumer_node_or_job; service_period; allocation_denominator; allocation_rationale; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Meter actual drilling/dust collection/charging/testing where possible; retain measured-power/runtime estimates and fuel records, allocation across all consumers and uncertainty. Aggregation and attribution method: Attributable task energy and fuel per reference flow; reconcile whole-job totals and disclose exclusions. For each shared resource event enumerate every actual consuming node/job and relevant period; retain allocation denominator, rationale and evidence and reconcile all shares. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kWh; kg; declared source units | Each installation or attributable job event | Full installation campaign including corrections and retests | Declared installation site and job cohort | per reference flow | Meter calibration, timestamps, equipment log, fuel receipts, density reference and allocation reconciliation |
| cp_transport | fan_installation | Attributable delivery, return and crew transport | Route and consignment records | job_id; leg_id; service_type; carried_mass; distance; vehicle; actual_service_unit; consumer_list; allocation_driver; upstream_delivery_coverage; return_leg; resource_event_id; consumer_node_or_job; service_period; allocation_denominator; allocation_rationale | Collect actual origin/destination, mass and route by leg. Document mass-distance freight calculation and actual-unit crew transport separately; reconcile shared legs and upstream coverage. Aggregation and attribution method: Attributable transport per reference flow; no duplicate upstream and own-transport energy. For each shared resource event enumerate every actual consuming node/job and relevant period; retain allocation denominator, rationale and evidence and reconcile all shares. | t*km; actual service unit | Each installation or attributable job event | Full installation campaign including corrections and retests | Declared installation site and job cohort | per reference flow | Consignment record, route evidence, vehicle/service dataset and allocation worksheet |
| cp_waste | fan_installation | Packaging, captured debris and rejected materials | Segregated weighing and destination records | job_id; material; source_card; waste_mass; reused_mass; hole_count; hole_diameter; hole_depth; substrate; drilling_state; collection_method; destination; treatment; defect; transfer_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh separated material; inspect preprepared holes or actual drilling records; reconcile captured and uncollected fractions with emissions assessment and receipt at collection gate. Aggregation and attribution method: Separated attributable waste per reference flow, with actual recovery/disposal route and no automatic credit. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each installation or attributable job event | Full installation campaign including corrections and retests | Declared installation site and job cohort | per reference flow | Scale calibration, hole/cleanup record, collection ticket and destination evidence |
| cp_emissions | fan_installation | Conditional actual direct releases | Measurement or defensible activity/factor records | job_id; activity; pollutant; species; particle_size_basis; receiving_medium; emission_mass; control; measurement_method; activity_amount; factor_value; factor_unit; factor_source; uncertainty; capture_fraction; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Establish actual substance and medium before binding; measure or apply an activity-specific defensible factor with retained source and uncertainty. Distinguish collected solids from release; document absence or unresolved evidence. Aggregation and attribution method: Identified attributable release per reference flow; no measured amount means a gap, not a zero. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each installation or attributable job event | Full installation campaign including corrections and retests | Declared installation site and job cohort | per reference flow | Sampling/control record or exact factor evidence, activity reconciliation and release destination |
| cp_acceptance | fan_installation | Final service output and acceptance denominator | Inspection, test and handover records | job_id; site; date; appliance_id; model; speed; sleeve_length; sleeve_slope; guard; substrate; fixings; supply; class; wiring; isolation; impeller; shutter; clips; electrical_test_scope; electrical_results; extraction_method; delivered_flow; flow_unit; test_conditions; project_criterion; pass_fail; rectification; accepted_count; signature | Inspect accepted interfaces and secure installation, record actual electrical checks and extraction at selected speed against prior project criterion, then reconcile corrections and obtain signed handover. Aggregation and attribution method: Accepted installations per reference flow; failed or unsigned jobs remain excluded. | Item(s); actual test units | Each installation or attributable job event | Full installation campaign including corrections and retests | Declared installation site and job cohort | per reference flow | Photographs, interface record, competent electrical test record, calibrated flow instrument/results and signed handover |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_attribution | all inventory rows | For each actual exchange, retain the whole-job quantity and the documented attributable share; divide the attributable total by accepted installations in the same disclosed campaign. Do not dilute failed jobs through a different cohort or include unresolved acceptance in the denominator. | cp_materials; cp_energy; cp_transport; cp_waste; cp_emissions; cp_acceptance | Quantity per reference flow with allocation and uncertainty schedule |  |
| electrical_consumption | installation_electricity | Prefer the change in actual energy-meter reading. An estimate uses measured operating power and recorded task duration with explicit compatible unit conversion; disclose method, standby/charging coverage and uncertainty. Nameplate power alone is insufficient. | cp_energy | Attributable installation and test electricity |  |
| component_reconciliation | fan_appliance; `fastening_components_screw`; `fastening_components_wall_plug`; `connection_components_cable`; `ancillary_consumables_water`; `ancillary_consumables_dust_bag`; `returned_components_fan`; `packaging_waste_carton`; `packaging_waste_plastic`; drilling_debris; `rejected_waste_cable_offcut` | Reconcile incoming quantities, installed quantities, product returns, waste and stock changes by actual material or appliance identity; keep generated substrate debris separate from purchased-component balance. | cp_materials; cp_waste; cp_acceptance | Traceable component/return/reject schedule and explained discrepancies |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration_trace | all inventory rows | Preserve actual configuration, time/site, material identity and gate, instrument/source and compatible upstream datasets. Split materially different fans and installation conditions. | cp_materials; cp_acceptance |
| completeness | all inventory rows | Record all actual required and conditional operations. Unknown material, emission, waste destination or resource attribution is disclosed as a gap. Missing measurements do not justify zero or generic defaults. | cp_materials; cp_energy; cp_transport; cp_waste; cp_emissions |
| range_evidence | all inventory rows | No transferable quantitative Range is asserted. Appliance/fixing masses, power-time, transport, waste and extraction depend on the actual installation. Collect evidence for empirical ranges before claiming defaults; record the missing range evidence and assess sensitivity. The exact final service count is a normalization definition, not a yield prior. | Actual measurements, representative cohorts and uncertainty assessment |
| acceptance_quality | accepted_installation | Retain delivered-extraction method, selected-speed state, measurement conditions and prior project criterion. A manufacturer-rated flow is not the installed delivered flow. Preserve failed results and retests. | cp_acceptance; vent-axia-494229j0626 |
| `refine_fastening_components` | `fastening_components_screw`; `fastening_components_wall_plug` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual screws, plugs and any approved fixing accessories join the backplate to the accepted wall. Retain material and dimensions by component; this conditional umbrella is expanded into the actual distinct exchanges. Range evidence need: Actual substrate, fixing SKU, dimensions, quantity and weighed or documented unit masses are needed; no generic fixing BOM or mass interval is supported. No numeric Range is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other approved actual fixing accessories require exact material/specification/SKU and independently measured quantity, exclude fan packet internal parts. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_connection_components` | `connection_components_cable` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual local connection components and cable, when required within the declared fan connection interface, enter the installation. Existing fixed supply and isolation remain prior interfaces; no new circuit is included. Range evidence need: Actual conductor/connector specification, added length and traceable mass-per-length or weighing are needed; the example cable cross-section is not a component mass range. No numeric Range is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other local connection components require concrete function/SKU/property/unit; no new circuit or duplicate existing fixed supply/isolation. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_ancillary_consumables` | `ancillary_consumables_water`; `ancillary_consumables_dust_bag` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional actual cleaning water, dust-collection bags and other consumed installation materials are separate concrete exchanges by identity. Record zero only when documented absent; do not infer chemicals from a generic installation label. Range evidence need: Actual cleaning-water, collection-bag and other consumed-product identities and weighed quantities are needed; their occurrence is job dependent. No numeric Range is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual consumed materials require actual identity, independent quantity and one unit; no guessed chemicals. Whole prewetted products include water once. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_site_fuel` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional fuel for installer-operated vehicles, generators or other actual site equipment is identified separately by fuel and use. Purchased transport-service fuel remains inside its upstream service dataset. Range evidence need: Actual equipment/vehicle activity, fuel identity, measured quantity and fuel-specific density/conditions are needed; no fuel-use or density interval is transferred between fuels. No numeric Range is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual installer-owned fuel supplies by carrier and unique unit; retain upstream nonreturned unburned waste/loss burden, separate burned activity and disjoint stock/return/waste/release; purchased freight provider fuel not duplicate. | `cp_energy`; actual independent records and identity/unit evidence |
| `refine_returned_components` | `returned_components_fan` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual reusable packaging and unused or repairable fan appliances, cable, fixings or other materials leave for identified reuse, stores or supplier return as products, separated by actual identity. A defective assembly awaiting repair cannot enter acceptance; discarded material belongs in rejected waste. Range evidence need: Weighed product-return mass by component or reusable packaging identity and traceable count/length conversions are needed; unused-return fractions cannot be assumed. No numeric Range is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual returned cable/fixing/packaging/other products need exact inbound matching identity/state/native property/unit and quantity; stock/internal corrections not exits, discarded waste separate. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_packaging_waste` | `packaging_waste_carton`; `packaging_waste_plastic` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual carton, plastic or other packaging removed from fan and ancillary products leaves for its declared collection/treatment route. Reusable packaging returned as a product is recorded separately in the foreground schedule. Range evidence need: Actual unpacked SKU, packaging material, separated mass, reuse/return and collection destinations are needed; no packaging-waste fraction is inferred. No numeric Range is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual mixed/composite/contaminated packaging or receiver differences require independent identities; usable packaging returns not waste, no guessed mixed-total shares. | `cp_waste`; actual independent records and identity/unit evidence |
| `refine_rejected_waste` | `rejected_waste_cable_offcut` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Broken fan parts, cut cable, damaged fixings and spent cleanup materials are linked to the installation node and their actual disposal or recovery destinations. In-place correction is an internal loop, whose extra inputs, energy and waste remain in this node. Range evidence need: Actual defect/cutting/cleanup records and segregated mass/destination for discarded materials are needed, distinct from usable returns; no default reject fraction is supported. No numeric Range is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual broken fan-part, damaged fixing and spent cleanup-product states/receivers need independent exact identities and quantities; original/rework event burden remains this node. | `cp_waste`; actual independent records and identity/unit evidence |
| `refine_direct_emissions` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional uncollected drilling particles and any actual onsite fuel-combustion or other installation releases require substance/species, particle-size basis where relevant and receiving medium before a concrete exchange is selected. Captured debris is waste, never an air emission. Range evidence need: Actual release activity, pollutant/species, particle-size basis, receiving medium, controls and measured or defensible activity-factor evidence are needed before emission intervals; missing evidence remains a gap. No numeric Range is asserted. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_emissions`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | fan_installation | Reject use of this route if new core/sleeve/grille/circuit construction is hidden, variants are substituted without review, existing interfaces are unverified or the handover state differs. | `vent-axia-494229j0626` |
| acceptance_gate | accepted_installation | Require all qualifiers, secure fixings/cover clips, free impeller and shutter, correct isolated connection/speed setup and documented electrical and delivered-extraction acceptance. Class II representative fan must not acquire a Class I earth-connection requirement. Missing project criterion or actual extraction result makes acceptance incomplete. | `vent-axia-494229j0626` |
| inventory_gate | all inventory rows | Require actual resource, conditional-operation, waste/return/reject and emission coverage linked to node-specific protocols; inspect drilling or prior-hole evidence and retained failed-work burdens. Resolve actual concrete flow/property/unit identities before final exchanges; do not bind heterogeneous umbrella rows to a convenient near match. |  |
| attribution_gate | all inventory rows | Reconcile accepted-count denominator, job resource shares, upstream coverage, return paths and waste destinations; no duplicate transport/fuel, captured-debris emission or accepted-count credit for failed work. Disclose Range evidence gaps and capital/tool exclusions. Shared assets/services require all actual consuming nodes/jobs, periods and complete attribution evidence. |  |
| bilingual_projection | all inventory rows | Require aligned English/Chinese rules, cards, source attribution, qualifiers, measurement basis and literal constants, and a current deterministic canonical-Markdown structured projection. |  |
| `atomization_fastening_components_complete` | `fastening_components_screw`; `fastening_components_wall_plug` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_fastening_components` with actual records; unresolved required expansion blocks the dataset. | `vent-axia-494229j0626` |
| `atomization_connection_components_complete` | `connection_components_cable` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_connection_components` with actual records; unresolved required expansion blocks the dataset. | `vent-axia-494229j0626` |
| `atomization_ancillary_consumables_complete` | `ancillary_consumables_water`; `ancillary_consumables_dust_bag` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_ancillary_consumables` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_site_fuel_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_site_fuel` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_returned_components_complete` | `returned_components_fan` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_returned_components` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_packaging_waste_complete` | `packaging_waste_carton`; `packaging_waste_plastic` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_packaging_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_rejected_waste_complete` | `rejected_waste_cable_offcut` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_rejected_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_direct_emissions_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_direct_emissions` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for a bounded first-installation service; process and lifecyclemodel are downstream projections |
| downstream_use | secondary_dataset; background_dataset only with declared compatibility and quality limitations |
| allowed_use | Compare or supply equivalent basic intermittent wall-fan installation services with matching configuration, starting interfaces and acceptance criteria |
| excluded_use | Whole-building ventilation performance; ordinary fan operation; appliance-manufacture-only datasets; new core/sleeve/circuit construction; air conditioning, heat recovery or unreviewed variants |
| required_metadata | actual basic intermittent model and appliance identifier; supply voltage/frequency and Class II design; speed selection; wall/substrate and fixing schedule; sleeve dimensions/length/slope and exterior guard acceptance; existing supply/isolation and cable compatibility; installed orientation and cover retention; electrical test scope/results; measured extraction test method, conditions, delivered flow and project criterion; installation date/site; drilling or inspected preprepared holes; failed-work and rework disposition; handover record; upstream coverage; component/transport/resource/waste schedules; normalization cohort |
| required_quality_disclosure | Measured versus estimated resources; actual extraction evidence; unresolved UUIDs and support identities; missing empirical ranges; emissions gaps; allocation drivers and sensitivity; tool-capital policy; exclusions; translation/projection state |
| update_trigger | Changed fan variant, electrical class, fixing/substrate or sleeve interface, test/acceptance method, upstream gate, material route, waste/rework treatment or new evidence affecting quantity/identity |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| vent-axia-494229j0626 | handbook | Vent-Axia Silent Fan installation instructions, document 494229J0626, pp. 3–6. https://asset.eezybridge.com/nc/ba7b9546-29dd-40c4-87a7-885627281b87/494229.pdf | Representative mounting and sleeve/guard interface; fixed Class II wiring; basic VASF100B model and speed setup; impeller/shutter and cover retention checks. Does not supply generic installation material masses, energy, achieved extraction or project acceptance criteria. |
