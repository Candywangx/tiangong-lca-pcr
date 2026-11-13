---
pcr_id: pcr.constructions-and-construction-services.construction-services.other-electrical-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Indoor Cat 6 UTP permanent-link installation services

## 1. Scope and Applicability

First installation of a fixed indoor four-pair Cat 6 UTP solid-copper permanent link from one existing patch-panel carrier port to one existing work-area outlet carrier. Dry manual cable placement uses an accepted prepared accessible pathway; both ends receive compatible tool-free insulation-displacement jack assemblies. The installer labels, tests the permanent link, corrects defects and hands over the accepted link with its actual configuration and test file. Leviton Atlas-X1 61UJK illustrates the jack interface, without making a brand a category requirement. [leviton-atlasx1-utp]

Exclude new trays, ducts, penetrations, racks, panel/outlet carriers and building works; old-link removal; shielded, fibre, coaxial, outdoor or inter-building routes; splices, consolidation points and plug-terminated MPTL; equipment/patch cords; active devices, network configuration, PoE load testing and operation. A separately purchased pathway or carrier construction service is an upstream interface, not a hidden installation input. Work needing chemical pulling aids, drilling or different termination technology requires a reviewed scope change.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.other-electrical-installation-services |
| classification_refs | CPC 3.0 54619, Other electrical installation services; narrower |
| covered_products | First installation of a fixed indoor four-pair Cat 6 UTP solid-copper permanent link from one existing patch-panel carrier port to one existing work-area outlet carrier. Dry manual cable placement uses an accepted prepared accessible pathway; both ends receive compatible tool-free insulation-displacement jack assemblies. The installer labels, tests the permanent link, corrects defects and hands over the accepted link with its actual configuration and test file. Leviton Atlas-X1 61UJK illustrates the jack interface, without making a brand a category requirement. [leviton-atlasx1-utp] |
| excluded_products | Exclude new trays, ducts, penetrations, racks, panel/outlet carriers and building works; old-link removal; shielded, fibre, coaxial, outdoor or inter-building routes; splices, consolidation points and plug-terminated MPTL; equipment/patch cords; active devices, network configuration, PoE load testing and operation. A separately purchased pathway or carrier construction service is an upstream interface, not a hidden installation input. Work needing chemical pulling aids, drilling or different termination technology requires a reviewed scope change. |
| representative_product | A fixed Cat 6 UTP four-pair link with two compatible tool-free IDC jacks on prepared carriers |
| production_route | Receive matched cable, jacks and accessories; accept prepared pathway/carriers and disconnected interfaces; dry-place cable without exceeding its actual bend/tension limits; terminate both jacks with declared pair pattern; mount and label; certify using the selected Cat 6 permanent-link limits and suitable adapters; repair/retest; accept and issue the as-built/test record. |
| market_state | Accepted indoor Cat 6 UTP permanent link at installer handover |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted indoor Cat 6 UTP permanent link at installer handover |
| How much | One accepted complete same-configuration link; actual D independently established before normalization |
| How well | Selected Cat 6 permanent-link limits passed, original test evidence retained, defects closed and signed handover |
| How long or cycle | One receipt-to-acceptance job, including actual corrective work and retests; separately indexed resource-life and reporting periods |
| reference_flow_link | `accepted_link` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted indoor Cat 6 UTP permanent link at installer handover |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Link identifier and end ports; actual cable manufacturer/model, four-pair solid-copper construction, jacket/fire rating and installed physical length including retained slack; exact jack models and pair pattern; carrier/pathway readiness and ownership; installation date; test standard and edition, permanent-link limit set, cable velocity setting, certifier/adapter identities and calibration; complete original results, repairs, retests and signed acceptance. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Use cp_acceptance to count D actual unique accepted complete links of the same disclosed configuration. D must be positive. A cable metre, connector, test run or passed pair is not a link. The output amount is 1 Item(s); there is no service-mass conversion. |
| material_mass | copper_data_cable, cat6_utp_jacks, `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier`, `incoming_packaging_carton`; `incoming_packaging_bag`, actual exchanges required by `refine_usable_material_returns`, `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_materials records input net mass; cp_releases records returned product and waste net mass. Use calibrated weighing or traceable exact-SKU count/length-to-net-mass evidence. Installed cable length includes retained slack and termination insertion; electrical test length is not automatically physical consumed length. Do not use gross shipping mass or sum unlike materials into one exchange. |
| electricity_basis | installation_electricity | Energy | kWh | Record actual external charger/test/tool electricity under cp_energy, including corrections and retests before acceptance. Preserve provider, voltage and meter boundary. Battery Ah, tester run-time and net calorific value are not electricity. A kWh unit-group row alone does not verify an Energy property. |
| resource_basis | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger`, `contracted_support_test`; `contracted_support_access` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | cp_resources distinguishes a lifecycle fraction of an exact owned asset from a real complete purchased service event. Genuine hourly hire requires compatible Duration support and a separately reviewed exchange; do not rename hours to Item(s). Test adapters and reusable leads are tool assets, not installed patch cords. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted existing accessible path and carrier ports; communications interfaces disconnected; actual supplies received |
| starting_condition_role | Declared prerequisite outside foreground construction responsibility |
| product_classification_scope | Premises telecommunications wiring; narrower subset of CPC3.0 54619, excluding cableTV, alarms and utility network construction |
| recursive_input_rule | Declare prior state/gate of any same-category input; do not recount an already-installed link |
| upstream_dataset_requirement | Exact compatible supplied component and resource packets with manufacture, delivery, packaging and provider-capital inclusions declared |
| disclosure | Link identifier and end ports; actual cable manufacturer/model, four-pair solid-copper construction, jacket/fire rating and installed physical length including retained slack; exact jack models and pair pattern; carrier/pathway readiness and ownership; installation date; test standard and edition, permanent-link limit set, cable velocity setting, certifier/adapter identities and calibration; complete original results, repairs, retests and signed acceptance. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `scope_eligibility` | First installation of a fixed indoor four-pair Cat 6 UTP solid-copper permanent link from one existing patch-panel carrier port to one existing work-area outlet carrier. Dry manual cable placement uses an accepted prepared accessible pathway; both ends receive compatible tool-free insulation-displacement jack assemblies. The installer labels, tests the permanent link, corrects defects and hands over the accepted link with its actual configuration and test file. Leviton Atlas-X1 61UJK illustrates the jack interface, without making a brand a category requirement. [leviton-atlasx1-utp] Exclude new trays, ducts, penetrations, racks, panel/outlet carriers and building works; old-link removal; shielded, fibre, coaxial, outdoor or inter-building routes; splices, consolidation points and plug-terminated MPTL; equipment/patch cords; active devices, network configuration, PoE load testing and operation. A separately purchased pathway or carrier construction service is an upstream interface, not a hidden installation input. Work needing chemical pulling aids, drilling or different termination technology requires a reviewed scope change. | `leviton-atlasx1-utp` |
| prepared_interface | Begin with accepted existing pathway and carriers and disconnected communications interfaces, plus receipt of installer-responsible supplies. Record the actual interface owner and readiness evidence; readiness is neither a product exchange nor avoided construction credit. |  |
| supply_boundary | Use component upstream packages carrying manufacture and actual delivery with explicit packaging inclusion. Track incoming packaging physically even when its manufacture is embedded upstream; add a separate burden only for a documented exclusion. Supplied jack wire managers and bundled fixings are counted once. |  |
| same_category_input | A purchased already-installed permanent link is not raw cable. Declare its existing state, prior gate and all upstream work; do not recursively count the same installation as a new first-installed output. Refurbishment or inherited in-scope work requires separate scope review. |  |
| integration_and_rejects | install_certify owns cable placement, pair termination, mounting, labelling, permanent-link testing and signed handover. A failed wire map or performance test stays a rejected in-node state; keep its original issue, repair/replacement and retest event linked to this node. No accepted output until all required tests pass and defects close. |  |
| resource_and_periods | Identify each owned cutter, stripper, certifier, adapter and charger across acquisition, use/reporting periods, calibration/maintenance, replacement and retirement. Enumerate every benefiting job/node and period in its resource packet, including jobs outside this dataset. Purchased providers own their equipment lifecycle. Keep original resource and job periods even if receipt and acceptance occur in different reporting periods. Later networking, maintenance and operational electricity are excluded. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_certify | Install and certify permanent link | required | All in-scope first installations | Independent integration: cable, two jack assemblies and permanent accessories; actual dry manual placement, termination, labels, rejected-state correction and test/handover responsibility | One accepted complete same-configuration link; actual positive D |

### Process: Install and certify permanent link (`install_certify`)

Conditional cards require actual zero/one/multiple separate exchanges by SKU, state and receiver. Missing records never establish zero. Dry manual work includes no assumed drilling, chemicals, combustion or direct emissions; unexpected activities/releases require explicit scope/inventory review before completion, not silent omission. Failed terminations loop inside install_certify and may exit only through recorded usable return or actual waste.

#### Inputs

##### Product flows

###### Four-pair Cat 6 UTP solid-copper cable supplied for installation (`copper_data_cable`)

Use the actual cable SKU, conductor construction and jacket/fire rating. Trace the complete issued cable quantity, retained slack and stripped ends; preserve matching stock and upstream delivery boundary. CCA, screened cable and factory patch cords are different identities.

Range evidence need: Exact-SKU net mass per physical length, actual issued/installed/stock/waste lengths and like-configuration link lengths; no universal kg per link.

- Selected flow: Four-pair Cat 6 UTP solid-copper cable supplied for installation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied cable net mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

###### Matched Cat 6 UTP tool-free jack assemblies (`cat6_utp_jacks`)

Record the actual compatible jack model at each end, including its supplied wire manager once. Pair ordering, preparation and closure follow delivered-model instructions. A jack product is not an installed tested link. [leviton-atlasx1-utp]

Range evidence need: Matching model assembly mass, actual issued/replaced/returned quantities and documented bundled parts; packaging mass is separate.

- Selected flow: Matched Cat 6 UTP tool-free jack assemblies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied jack assembly net mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`

###### Separately supplied cable tie (`permanent_accessories_tie`)

Record only this independently identified separately supplied cable tie at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied cable tie
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied cable clip (`permanent_accessories_clip`)

Record only this independently identified separately supplied cable clip at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied cable clip
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied permanent link identifier (`permanent_accessories_identifier`)

Record only this independently identified separately supplied permanent link identifier at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied permanent link identifier
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Cable or jack shipment carton (`incoming_packaging_carton`)

Record only this independently identified cable or jack shipment carton at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Cable or jack shipment carton
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Cable or jack shipment bag (`incoming_packaging_bag`)

Record only this independently identified cable or jack shipment bag at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Cable or jack shipment bag
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned cable stripper asset equivalent (`owned_tools_and_certifier_stripper`)

Record only this independently identified owned cable stripper asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned cable stripper asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method to this exact resource: a_rj = A_rj / sum_k(A_rk) over every job in the same complete resource-life packet; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain compatible actual drivers, positive complete denominator and period-specific ownership; no one-whole-tool purchase per link.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned cable cutter asset equivalent (`owned_tools_and_certifier_cutter`)

Record only this independently identified owned cable cutter asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned cable cutter asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method to this exact resource: a_rj = A_rj / sum_k(A_rk) over every job in the same complete resource-life packet; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain compatible actual drivers, positive complete denominator and period-specific ownership; no one-whole-tool purchase per link.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned permanent-link certifier asset equivalent (`owned_tools_and_certifier_certifier`)

Record only this independently identified owned permanent-link certifier asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned permanent-link certifier asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method to this exact resource: a_rj = A_rj / sum_k(A_rk) over every job in the same complete resource-life packet; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain compatible actual drivers, positive complete denominator and period-specific ownership; no one-whole-tool purchase per link.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned permanent-link adapter asset equivalent (`owned_tools_and_certifier_adapter`)

Record only this independently identified owned permanent-link adapter asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned permanent-link adapter asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method to this exact resource: a_rj = A_rj / sum_k(A_rk) over every job in the same complete resource-life packet; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain compatible actual drivers, positive complete denominator and period-specific ownership; no one-whole-tool purchase per link.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned reusable test-lead asset equivalent (`owned_tools_and_certifier_test_lead`)

Record only this independently identified owned reusable test-lead asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned reusable test-lead asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method to this exact resource: a_rj = A_rj / sum_k(A_rk) over every job in the same complete resource-life packet; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain compatible actual drivers, positive complete denominator and period-specific ownership; no one-whole-tool purchase per link.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned charger asset equivalent (`owned_tools_and_certifier_charger`)

Record only this independently identified owned charger asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned charger asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method to this exact resource: a_rj = A_rj / sum_k(A_rk) over every job in the same complete resource-life packet; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain compatible actual drivers, positive complete denominator and period-specific ownership; no one-whole-tool purchase per link.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual external installation and test electricity (`installation_electricity`)

Conditional: external electricity for tools, certifier charging and original/corrective tests before handover. Expand actual provider/voltage/technology supply identity and distinguish provider-embedded electricity. A battery is an asset/component, not electricity.

Range evidence need: Metered job and charger/test evidence, complete sharing denominator and exact supply; Energy support still needs verification.

- Selected flow: Actual external installation and test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable external electricity / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

###### Complete contracted permanent-link testing event (`contracted_support_test`)

Record only this independently identified complete contracted permanent-link testing event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete contracted permanent-link testing event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete contracted installation access event (`contracted_support_access`)

Record only this independently identified complete contracted installation access event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete contracted installation access event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted indoor Cat 6 UTP permanent link at installer handover (`accepted_link`)

Complete labelled permanent link between the two declared jack interfaces, with accepted Cat 6 permanent-link test evidence, defects closed and signed installer handover. It excludes active devices and equipment cords. Count the link once, not its pairs, jacks or retests.

Range evidence need: Definition requires independently observed D and actual matched configuration/test acceptance; it is not an assumed yield or numerical quantity prior.

- Selected flow: Accepted indoor Cat 6 UTP permanent link at installer handover
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

##### Waste flows

###### Discarded insulated conductor offcut (`installation_waste_insulated_conductor_offcut`)

Record only this independently identified discarded insulated conductor offcut at its actual state and supply or receiving gate. Actual independently discarded composite insulated-conductor offcut; do not add its contained copper/polymer again. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Discarded insulated conductor offcut
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately discarded jacket offcut (`installation_waste_separated_jacket_offcut`)

Record only this independently identified separately discarded jacket offcut at its actual state and supply or receiving gate. Actual jacket physically separated from conductor stream and independently dispatched. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately discarded jacket offcut
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately discarded cable filler offcut (`installation_waste_separated_filler_offcut`)

Record only this independently identified separately discarded cable filler offcut at its actual state and supply or receiving gate. Actual filler separately collected and dispatched; no guessed composite share. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately discarded cable filler offcut
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| failed_work | Retain failed tests, discarded ends and corrective labour/resources with the original link job; no burden transfer to a hypothetical good link, avoided-production credit or intended co-product from returns. Recovery or waste treatment starts at the declared actual receiver and must not be counted twice. |  |
| resource_share | For each resource r use recorded causal physical activity A_rj and a_rj = A_rj / sum_k(A_rk) across every benefiting job k in the same resource-life packet. Use one documented activity basis and positive total; shares sum to 1 across the complete packet. Attribute B_r * a_rj / D lifecycle burden and a_rj / D Item(s) of the exact owned asset. Missing lifetime, remaining use or other consumers is an evidence gap, not a default lifetime or equal link-count split. |  |
| period_closure | Index original manufacture/acquisition, each use period, calibration/repair, replacement and retirement separately. Link all input, output, asset and defect events to job and period. Document each period-specific decision and reconcile packet totals once; a replacement event is not an automatic new whole certifier per link. |  |
| purchased_service | Record actual purchased test/access/support events with their contractual reference and inclusion schedule. Reconcile provider-owned capital and embedded fuel, delivery and electricity before adding any separate foreground consumption. A provider test event and the same internally performed test cannot both own the same burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_certify | Accepted link and test evidence | installation acceptance record | job/link/end-port IDs; configuration and physical cable length; actual D; standard edition/limits; NVP; certifier/adapter serial/calibration; original pass/fail files; repairs/retests; acceptance date/signature | Independently count unique fully accepted links from signed records; reconcile each to original permanent-link test files, selected limits and complete defect closure. A simple continuity check or channel test is not the selected acceptance test. | Item(s) | Every link and every original/corrective test | Receipt through signed acceptance with original reporting dates | One declared indoor job and disclosed same-configuration group | per reference flow | Signed as-built/end-port map, complete native results including failed attempts, selected test setup and calibration evidence; Aggregation detail: Independent accepted D; per reference flow |
| cp_materials | install_certify | Supply and installation inputs | SKU custody and measurement record | shipment/job/SKU; manufacturer/model/material; net mass; delivered and used lengths/counts; exact-SKU conversion; installed slack; opening/closing stock; bundled parts; upstream delivery/packaging inclusion; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh separately by matching SKU or use traceable same-SKU net-mass-per-length/item evidence. Reconcile the actual cable reel and both terminations with installed length, retained ends, waste and stock; do not substitute electrical test length for measured consumption. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Every shipment, issue and stock event | All materials attributable to receipt-to-acceptance job | Exact installation job and supplying records | per reference flow | Calibrated scale or matching conversion evidence; supplier inclusion schedule; event-level stock closure; Aggregation detail: Actual attributable supplied net mass; per reference flow |
| cp_energy | install_certify | External electricity | meter and charger record | meter start/end kWh; date; provider/voltage; exact charger/tester; activities for all shared users; embedded service energy; corrections/retests | Measure attributable electricity at declared external supply boundary, including charging for this job. Reconcile shared consumer activities and service inclusions; missing metering remains a gap, not zero or battery capacity. | kWh | Every relevant charging/test interval | Actual pre-acceptance intervals, retaining original dates | Declared job plus all sharing consumers | per reference flow | Meter trace/calibration and complete shared-use allocation/inclusion ledger; Aggregation detail: Actual attributable external electricity; per reference flow |
| cp_resources | install_certify | Owned resources and purchased support | resource-life and contract event ledger | asset/model/serial/owner; acquisition/use/maintenance/replacement/retirement dates; complete lifecycle packet B_r; every consuming job/node/period; physical activity A_rj; future-use gap; contract event/reference/inclusions; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Link exact reusable tools, certifier, adapters and chargers to all actual consumers and lifecycle periods. Record causal activity and actual complete purchased service events separately; verify provider asset ownership and energy inclusions. Do not assume lifespan. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s) | Every resource period and contract event | Full resource packet and original job periods; disclose unknown remaining use | All consuming jobs/nodes, including those outside the reported site | per reference flow | Ownership, serial, activity and inclusion records; complete consumer/period/share closure with gaps explicit; Aggregation detail: Attributable exact asset fraction or genuine whole service events; per reference flow |
| cp_releases | install_certify | Usable returns and waste | exit and receiver ticket | original job/issue/defect ID; material/SKU; actual mass and state; reusable versus waste classification; receiver and date; authorised treatment boundary; retained/captured/emitted distinction; closure residual; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh each actual unchanged usable return separately from each actual waste material/state/receiver stream. Link rejected terminations and cable ends to original in-node correction events. Investigate residual mass; do not label it an air emission or zero. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Every return, rejection and disposal event | All original installation and corrective exits through handover | Declared job and each actual receiver | per reference flow | Traceable original-issue/defect link, weighing, custody and receiver evidence; Aggregation detail: Actual attributable usable-return or waste net mass; per reference flow |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_job | all inventory rows | q_i = attributable collected numerator_i / D; D is the independently accepted same-configuration link count from cp_acceptance. Keep every numerator measured independently, including failed work. | numerator_i; D; cp_acceptance | q_i |  |
| owned_resource_share | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger` | a_rj = A_rj / sum_k(A_rk); sum over all jobs k in the same complete resource-life packet. Attributed asset = a_rj / D Item(s); burden = B_r * a_rj / D. Preserve each period-specific ownership decision. | A_rj; A_rk; B_r; D; cp_resources | attributed asset quantity and lifecycle burden |  |
| material_closure | copper_data_cable, cat6_utp_jacks, `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier`, `incoming_packaging_carton`; `incoming_packaging_bag`, actual exchanges required by `refine_usable_material_returns`, `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | opening stock + receipts = retained installed material + closing stock + usable returns + actual waste + identified releases + unexplained residual, checked per matching material/SKU and job. Report measured tolerance and unresolved residual separately; unlike masses are diagnostics only. | cp_materials; cp_releases | SKU custody closure and residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| range_copper_data_cable | copper_data_cable | Range evidence need: Exact-SKU net mass per physical length, actual issued/installed/stock/waste lengths and like-configuration link lengths; no universal kg per link. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_cat6_utp_jacks | cat6_utp_jacks | Range evidence need: Matching model assembly mass, actual issued/replaced/returned quantities and documented bundled parts; packaging mass is separate. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_permanent_accessories | `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier` | Range evidence need: Actual retained SKU schedule and supply/return/waste counts with matching net masses. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_incoming_packaging | `incoming_packaging_carton`; `incoming_packaging_bag` | Range evidence need: Matching shipment material mass, reuse/custody history and upstream inclusion evidence. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_owned_tools_and_certifier | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger` | Range evidence need: Complete resource-life packet, causal use across all jobs/periods, replacements and remaining-use evidence; no generic lifespan. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_installation_electricity | installation_electricity | Range evidence need: Metered job and charger/test evidence, complete sharing denominator and exact supply; Energy support still needs verification. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_contracted_support | `contracted_support_test`; `contracted_support_access` | Range evidence need: Original contract event reference, scope/inclusions, quantities and shared activity; hourly hire needs Duration support. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_usable_material_returns | actual exchanges required by `refine_usable_material_returns` | Range evidence need: Matching return tickets, original issue/stock linkage, retained usability and net mass. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_installation_waste | `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | Range evidence need: Original cut/defect/packaging events, material-state separation, actual tickets/net masses and treatment boundary. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| range_accepted_link | accepted_link | Range evidence need: Definition requires independently observed D and actual matched configuration/test acceptance; it is not an assumed yield or numerical quantity prior. | Actual matching configuration/measurement records; absence remains explicit gap, not default quantity |
| configuration_group | all inventory rows | Keep job/site/time and physical length, cable/jack configuration and acceptance scope aligned; split materially unlike groups unless actual equivalence is demonstrated | As-built, matched BOM, original test and all raw numerator/D records |
| support_chain | all inventory rows | Keep Energy and actual hourly Duration support gaps distinct from verified Mass/kg and count/Item(s); never use a near-match UUID | Concrete detail and exact property/unit reference chain |
| `refine_permanent_accessories` | `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional: each actual tie, clip, identifier and separately supplied compatible fixing retained in the selected link; expand separate SKUs and materials. Existing carriers are excluded. Do not repeat jack-bundled items or assume a fixed accessory count. Range evidence need: Actual retained SKU schedule and supply/return/waste counts with matching net masses. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual separate fixing SKUs require unique property/unit and independent quantities. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_incoming_packaging` | `incoming_packaging_carton`; `incoming_packaging_bag` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional: each actual reel, carton, bag or protective material. Record custody and whether its manufacture/delivery is already in the supplied upstream package. For returnable reusable reels record full actual physical receipt/return mass; a separate matched upstream resource-life packet supplies the burden share. Do not scale custody mass by that share or charge a whole new reel each job. Range evidence need: Matching shipment material mass, reuse/custody history and upstream inclusion evidence. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual reel and other protective-material identities/state; reusable reel full physical receipt/return and separate compatible complete-life upstream burden attribution must be recorded, never scale custody mass by life share or buy a new reel per job. Embedded upstream packaging is physical audit only, not duplicate supply burden. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_owned_tools_and_certifier` | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional: each actually owned stripper/cutter, certifier, permanent-link adapter, reusable test lead or charger. Expand exact asset models/serials and all consumers/periods. Attributed manufacture and maintenance come from the complete resource packet; do not treat reusable test leads as permanent installed components. Range evidence need: Complete resource-life packet, causal use across all jobs/periods, replacements and remaining-use evidence; no generic lifespan. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Distinct actual stripper and cutter models, other assets or incompatible native service references require separate exact records. Whole-asset equivalents require compatible all-consumer full-life drivers, acquisition/maintenance/replacements/EOL; no charged fee or hours-to-Count conversion. | `cp_resources`; actual independent records and identity/unit evidence |
| `refine_contracted_support` | `contracted_support_test`; `contracted_support_access` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional: each genuinely purchased complete test, access or other support event with a disclosed contractual configuration and reference. Provider owns its equipment lifecycle; check embedded delivery/energy and avoid duplicating internal test resources. Hours are not counted events. Range evidence need: Original contract event reference, scope/inclusions, quantities and shared activity; hourly hire needs Duration support. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual support functions and services with another native reference require exact function/provider/unit refinement; retain provider equipment/energy/delivery boundary once. | `cp_resources`; actual independent records and identity/unit evidence |
| `refine_usable_material_returns` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional: each actual usable unused cable/component or usable reusable reel/packaging returned with original SKU identity, condition and receiver. Reconcile unused stock first; no automatic avoided-production credit. Failed unusable material is waste, not this product output. Range evidence need: Matching return tickets, original issue/stock linkage, retained usability and net mass. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual SKU/state/receiver matched to original receipt and original native reference; usable outward transfer only, no retained stock or failed product and no credit. | `cp_releases`; actual independent records and identity/unit evidence |
| `refine_installation_waste` | `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional: separately expand actual trimmed insulated conductors, jacket/filler offcuts, rejected components, spent packs and other waste. Identify composite cable versus separated copper/polymer and actual hazardous status/authorised receiver. Do not presume recycling or call measured closure residual airborne dust. Range evidence need: Original cut/defect/packaging events, material-state separation, actual tickets/net masses and treatment boundary. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Rejected components, spent packaging and any other actual waste material/state/receiver require actual dispatch identities; no air emission from unexplained residual. | `cp_releases`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| link_gate | foreground_dataset_conformance | Require declared endpoints/configuration, accessible existing pathway/carriers, correct matched cable/jacks and original permanent-link test result for every actual accepted link. Record selected standard edition/limit set, velocity setting, adapter and certifier calibration. Retain failures and retests; channel or continuity-only tests cannot establish this gate. | fluke-permanent-link-testing |
| reference_integrity | foreground_dataset_conformance | Final output, reference name and accepted_link association must denote the same complete service and Number of items / Item(s) basis. D is independently observed; incomplete or rejected links do not enter D. Group or split materially different lengths/configurations with explicit equivalence evidence; never equate all counted links by count alone. |  |
| custody_and_sources | foreground_dataset_conformance | Expand conditional cards into each actual SKU/material/state/receiver exchange, with its own verified concrete identity and net quantity. Check supplier delivery/packaging inclusions, stock/returns/waste and replacement events. Zero requires affirmative no-activity evidence; an unaccounted residual is a gap. A source about termination does not prove resource life, emission factor or waste range. |  |
| resource_closure | foreground_dataset_conformance | Reconcile every owned resource, purchased provider, consuming job/node, reporting/use period and replacement/retirement event. Require positive causal-activity totals, complete shares and no duplicate capital or energy. Unknown future use or Duration/Energy support blocks final exchange binding. |  |
| identity_and_range | foreground_dataset_conformance | Verify selected concrete flow detail and property-to-unit-group reference chain before downstream exchange creation. Preserve material/jacket, gate, direction and destination; no name-only or NCV substitution. Range evidence must match actual configuration and normalization denominator. Checker success verifies declared relationships, not physical values, UUID resolution or publication readiness. |  |
| `atomization_permanent_accessories_complete` | `permanent_accessories_tie`; `permanent_accessories_clip`; `permanent_accessories_identifier` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_permanent_accessories` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_incoming_packaging_complete` | `incoming_packaging_carton`; `incoming_packaging_bag` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_incoming_packaging` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_owned_tools_and_certifier_complete` | `owned_tools_and_certifier_stripper`; `owned_tools_and_certifier_cutter`; `owned_tools_and_certifier_certifier`; `owned_tools_and_certifier_adapter`; `owned_tools_and_certifier_test_lead`; `owned_tools_and_certifier_charger` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_owned_tools_and_certifier` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_contracted_support_complete` | `contracted_support_test`; `contracted_support_access` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_contracted_support` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_usable_material_returns_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_usable_material_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_installation_waste_complete` | `installation_waste_insulated_conductor_offcut`; `installation_waste_separated_jacket_offcut`; `installation_waste_separated_filler_offcut` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_installation_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground installation data package |
| downstream_use | process and lifecyclemodel projections; secondary_dataset or background_dataset only with compatible boundary |
| allowed_use | Same disclosed fixed indoor Cat 6 UTP solid-copper, two-tool-free-jack permanent-link installation, physical length/configuration and acceptance gate |
| excluded_use | Exclude new trays, ducts, penetrations, racks, panel/outlet carriers and building works; old-link removal; shielded, fibre, coaxial, outdoor or inter-building routes; splices, consolidation points and plug-terminated MPTL; equipment/patch cords; active devices, network configuration, PoE load testing and operation. A separately purchased pathway or carrier construction service is an upstream interface, not a hidden installation input. Work needing chemical pulling aids, drilling or different termination technology requires a reviewed scope change. |
| required_metadata | Link identifier and end ports; actual cable manufacturer/model, four-pair solid-copper construction, jacket/fire rating and installed physical length including retained slack; exact jack models and pair pattern; carrier/pathway readiness and ownership; installation date; test standard and edition, permanent-link limit set, cable velocity setting, certifier/adapter identities and calibration; complete original results, repairs, retests and signed acceptance. |
| required_quality_disclosure | Actual numerator/D records; all method/source and matching-SKU conversion evidence; complete owned/provider resource and period packets; supply inclusion and custody closure; identity/support, quantity/Range and remaining-life gaps |
| update_trigger | Changed cable/jack configuration, path or interface responsibility, termination/test limit set, contract/service ownership, stronger quantity/resource or identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-54619 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 explanatory notes, PDF293–294: telecommunications wiring inclusion and adjacent exclusions; classification context only |
| leviton-atlasx1-utp | handbook | https://leviton.com/content/dam/leviton/network-solutions/product_documents/instruction_sheet/Leviton_IST_5EUJK_61UJK_6AUJK_AtlasX1_UTP_Jacks.pdf | PK-A3036-10-02-0D, PDF1–2: illustrative matched UTP jack, supplied wire manager, hand-tool termination and carrier interface; not quantity or asset-life evidence |
| fluke-permanent-link-testing | handbook | https://www.flukenetworks.com/blog/cabling-chronicles/top-10-cable-testing-mistakes | June5,2025, sections1,2,4,6: selected test setup and original results; permanent-link versus channel gate; no universal installed material/energy amounts |
