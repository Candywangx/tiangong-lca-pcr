---
pcr_id: pcr.constructions-and-construction-services.construction-services.passive-outdoor-terrestrial-tv-antenna-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Passive outdoor terrestrial TV antenna installation services

## 1. Scope and Applicability

This PCR covers first installation of a fixed passive outdoor directional antenna for residential terrestrial television reception. The accepted configuration comprises the antenna and matching balun, actual mast/mount, a continuous coax lead-in to one receiver interface, and installation-specific mast and coax grounding or bonding to a declared suitable existing building grounding interface. Aiming, documented acceptance testing and installer handover complete the service. The technical design and locally applicable requirements govern actual work; representative manufacturer guidance supplies route evidence rather than a universal installation layout.

Satellite dishes, indoor antennas, cable-TV supply networks, multiple-outlet distribution, amplifiers, rotators, towers, new lightning-protection systems, new earth electrodes, painting, removal of earlier equipment and subsequent reception/maintenance services are excluded. A reception distance, channel count or lifetime guarantee is not the output. An incompatible site condition or expanded design requires a separately reviewed scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.passive-outdoor-terrestrial-tv-antenna-installation-services |
| classification_refs | cpc:3.0:54614; narrower subset only |
| covered_products | Accepted first-installed passive outdoor directional residential terrestrial-TV antenna configuration and single receiver lead-in |
| excluded_products | Satellite, indoor, powered or rotating reception; distribution networks; whole lightning protection and later operation |
| representative_product | Channel Master Advantage 30-series illustrates passive antenna assembly, supplied balun, mast fixing and aiming; actual compatible model governs, without a brand requirement |
| production_route | Receipt and interface verification; antenna assembly; mast and antenna fixing; coax routing/termination/weatherproofing; design-required mast/coax bonding; aiming/testing; correction and retest; accepted handover |
| market_state | Complete site installation at signed installer handover, with actual configuration and tested endpoint |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One complete accepted installation of the disclosed configuration at installer handover |
| How much | 1 Item(s); D is the independently counted positive number of actual complete accepted installations before normalization |
| How well | Declared model, substrate/mount, single lead-in, separate mast/coax bonding design and receiving endpoint satisfy the recorded acceptance criterion; materially different configurations require separate packages or demonstrated equivalence |
| How long or cycle | One receipt-to-acceptance job cycle, including failed work and corrections/retests. Resource acquisition, service/reporting periods, maintenance/replacement and retirement are separately indexed; no operating-year service is claimed |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted passive outdoor directional residential terrestrial-TV antenna installation |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Actual antenna and balun model/inclusions; passive fixed directional state; mast/mount geometry and substrate; coax SKU/length/route and single receiver endpoint; weatherproofing products; separate mast/coax bonding design and existing grounding interface; jurisdiction/design; target transmitter, actual reception test and acceptance criterion; site/date; signed handover |

Declare every qualifier in the foreground package. Count D from signed complete installations rather than from purchased antennas, visits or tests. Missing acceptance or configuration equivalence prevents normalization.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Use actual independent complete-installation acceptance count D > 0; the final normalized output is 1 Item(s). |
| `material_mass` | mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net supply, return, waste and identified release masses with calibrated records. Count/length-to-mass conversion requires matching SKU and state evidence, not a heterogeneous installation weight. Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. |
| `metered_energy` | installation_electricity | Energy | kWh | Preserve actual meter-based electricity and its consumer boundary; power rating, battery Ah, NCV and duration do not measure electrical energy. Exact support identity remains unresolved. |
| `counted_resource` | `owned_equipment_attribution_charger`; `owned_equipment_attribution_rf_tester`; `owned_equipment_attribution_electrical_tester`; `hired_support_service_transport`; `hired_support_service_access`; `hired_support_service_test` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | A reusable asset fraction addresses one identified asset lifecycle packet; a hired event must be a genuine complete contracted service. Actual hourly hire requires Duration support and review. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials received and mounting substrate, safe access/power-line clearance, receiver endpoint and suitable existing building grounding interface verified for the actual design. Existing-condition acceptance is readiness, not a new product input or credit. |
| starting_condition_role | Explicit prepared interface at which installer integration responsibility starts |
| product_classification_scope | Selected passive residential terrestrial reception installation is narrower than cpc:3.0:54614; the subclass also covers other antenna/cable/lightning services |
| recursive_input_rule | If a same-category prior installation is purchased, record its actual state and upstream boundary and isolate only genuine new installer work. An unresolved recursive overlap blocks acceptance; do not trace indefinitely or double count the earlier service. |
| upstream_dataset_requirement | Use matching component and service packets with manufacture, inbound delivery, packaging and provider capital inclusions explicitly stated. Include each actual upstream burden once. |
| disclosure | Site/interface approvals, installer supply and handover responsibility, job/period scope, received material custody, actual resource ownership and upstream inclusions/exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers first installation of a fixed passive outdoor directional antenna for residential terrestrial television reception. The accepted configuration comprises the antenna and matching balun, actual mast/mount, a continuous coax lead-in to one receiver interface, and installation-specific mast and coax grounding or bonding to a declared suitable existing building grounding interface. Aiming, documented acceptance testing and installer handover complete the service. The technical design and locally applicable requirements govern actual work; representative manufacturer guidance supplies route evidence rather than a universal installation layout. Satellite dishes, indoor antennas, cable-TV supply networks, multiple-outlet distribution, amplifiers, rotators, towers, new lightning-protection systems, new earth electrodes, painting, removal of earlier equipment and subsequent reception/maintenance services are excluded. A reception distance, channel count or lifetime guarantee is not the output. An incompatible site condition or expanded design requires a separately reviewed scope. |  |
| `installer_gate` | install_accept | Own material receipt, assembly/fixing, lead-in termination and weatherproofing, design-required separate mast/coax bonding, aiming, testing, correction/retest and signed handover. The existing grounding system is an interface; new earth electrodes and whole lightning-protection construction are outside scope. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `component_boundary` | component inputs and packaging | Reconcile antenna-included balun/hardware against separate mast, coax, connectors and bonding supplies. Keep physical incoming packaging in the custody ledger even if manufacture is embedded upstream; separately burden only an upstream exclusion. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `resource_boundary` | owned equipment and hired service | Identify actual installer-owned tools, chargers, testers and access equipment and all consumers over each resource lifecycle packet. Contract providers own their asset lifecycle. Distinguish acquisition, service/reporting, maintenance/replacement and termination periods and document missing remaining-use evidence. |  |
| `rework_boundary` | failed work and material exits | A failed aim, fixing or reception test is an unaccepted state within install_accept until corrected/retested. Trace actual repair loop or usable return, downgrade/recovery/discard exit to its originating job and node; an unreviewed downgrade has no accepted output identity. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `posthandover` | receiver operation and later service | End at accepted handover; do not incorporate operational reception electricity, later maintenance or marketing reception guarantees. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `install_accept` | Install, aim, test and accept passive outdoor antenna | required | Every included job | Integrate independent antenna, mount, coax and bonding roles into the declared accepted installation; own correction/retest and original-event-linked exits | D actual accepted complete installations; normalized output 1 Item(s) |

The sole node owns joining and installation, access and test support. These are responsibilities within one physical service, not fictitious phase outputs. Foreground evidence determines zero, one or multiple concrete exchanges for conditional umbrella cards. Expand actual SKU/state/receiver or substance/air-compartment streams before binding; a mixed material or generic VOC/dust name cannot receive one UUID. Absence requires explicit activity and custody evidence, while missing records remain a gap.

### Process: Install, aim, test and accept passive outdoor antenna (`install_accept`)

#### Inputs

##### Product flows

###### Passive directional terrestrial-TV antenna assembly (`antenna`)

Receive the actual VHF/UHF antenna assembly before mounting. Record factory-included clamps, bolts and matching balun inside this supply packet; no powered amplifier or rotator belongs to this identity.

- Selected flow: Passive directional terrestrial-TV antenna assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable supplied antenna mass / D; reconcile included accessories against the job BOM.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Quantity evidence gap: Matching SKU net weighing, accessory inclusion and accepted-configuration records are needed before any inventory bounds can be justified.

###### Separately supplied antenna mast (`mast_mount_hardware_mast`)

Record only this independently identified separately supplied antenna mast at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied antenna mast
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied antenna mounting bracket (`mast_mount_hardware_bracket`)

Record only this independently identified separately supplied antenna mounting bracket at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied antenna mounting bracket
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied mounting U-bolt (`mast_mount_hardware_u_bolt`)

Record only this independently identified separately supplied mounting u-bolt at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied mounting U-bolt
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied substrate anchor (`mast_mount_hardware_anchor`)

Record only this independently identified separately supplied substrate anchor at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied substrate anchor
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied 75-ohm coaxial cable (`coax_balun_connectors_coax`)

Record only this independently identified separately supplied 75-ohm coaxial cable at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied 75-ohm coaxial cable
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied coaxial connector (`coax_balun_connectors_connector`)

Record only this independently identified separately supplied coaxial connector at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied coaxial connector
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Additional antenna balun outside antenna packet (`coax_balun_connectors_extra_balun`)

Record only this independently identified additional antenna balun outside antenna packet at its actual state and supply or receiving gate. Only actual additional separately supplied balun; antenna-included balun is not this input. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Additional antenna balun outside antenna packet
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied receiver endpoint fitting (`coax_balun_connectors_receiver_fitting`)

Record only this independently identified separately supplied receiver endpoint fitting at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied receiver endpoint fitting
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied bonding conductor (`bonding_components_conductor`)

Record only this independently identified separately supplied bonding conductor at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied bonding conductor
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied bonding clamp (`bonding_components_clamp`)

Record only this independently identified separately supplied bonding clamp at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied bonding clamp
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied coaxial grounding block (`bonding_components_coax_ground_block`)

Record only this independently identified separately supplied coaxial grounding block at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied coaxial grounding block
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned external charger asset equivalent (`owned_equipment_attribution_charger`)

Record only this independently identified owned external charger asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned external charger asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply resource_share and the original whole-life attribution method to this exact asset: a_rj = A_rj / sum(A_rk) across all benefiting jobs in its complete life; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain actual lifecycle packet, compatible positive all-consumer denominator, periods and observed/evidenced remaining use; do not count a new whole asset for each installation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned RF tester asset equivalent (`owned_equipment_attribution_rf_tester`)

Record only this independently identified owned rf tester asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned RF tester asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply resource_share and the original whole-life attribution method to this exact asset: a_rj = A_rj / sum(A_rk) across all benefiting jobs in its complete life; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain actual lifecycle packet, compatible positive all-consumer denominator, periods and observed/evidenced remaining use; do not count a new whole asset for each installation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned electrical tester asset equivalent (`owned_equipment_attribution_electrical_tester`)

Record only this independently identified owned electrical tester asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Owned electrical tester asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply resource_share and the original whole-life attribution method to this exact asset: a_rj = A_rj / sum(A_rk) across all benefiting jobs in its complete life; exchange quantity = a_rj / D Item(s), burden = B_r * a_rj / D once. Retain actual lifecycle packet, compatible positive all-consumer denominator, periods and observed/evidenced remaining use; do not count a new whole asset for each installation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual pre-handover tool, charger and test electricity (`installation_electricity`)

Record externally supplied electricity within the actual installer meter boundary, with provider/voltage/site and any shared consumers. Keep charging and testing inclusions explicit; operational receiver use after handover is excluded. Energy support remains unresolved and capacity, NCV or operating duration is not a substitute.

- Selected flow: Actual pre-handover tool, charger and test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered pre-handover kWh / D.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

Quantity evidence gap: Actual meter coverage, shared-load allocation and matched job activity are needed; manufacturer antenna specifications do not establish electricity bounds.

###### Complete contracted antenna-installation transport event (`hired_support_service_transport`)

Record only this independently identified complete contracted antenna-installation transport event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete contracted antenna-installation transport event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete contracted antenna-installation access event (`hired_support_service_access`)

Record only this independently identified complete contracted antenna-installation access event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete contracted antenna-installation access event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete contracted antenna-installation test event (`hired_support_service_test`)

Record only this independently identified complete contracted antenna-installation test event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete contracted antenna-installation test event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted passive outdoor directional residential terrestrial-TV antenna installation (`accepted_installation`)

The output is the installed antenna, mast/mount, one coax receiver connection and approved mast/coax bonding scope after aiming, actual test, correction/retest and signed handover. Count actual complete accepted installations of the declared equivalent configuration independently as D; components, visits, tests and unfinished jobs are not outputs.

- Selected flow: Accepted passive outdoor directional residential terrestrial-TV antenna installation
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Sources: `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

Quantity evidence gap: Reference normalization is a definition after independent acceptance counting, not a productivity or reception-performance bound.

##### Waste flows

###### Contaminated weatherproofing-product container waste (`contaminated_solid_waste_container`)

Record only this independently identified contaminated weatherproofing-product container waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated weatherproofing-product container waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Contaminated weatherproofing wipe waste (`contaminated_solid_waste_wipe`)

Record only this independently identified contaminated weatherproofing wipe waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated weatherproofing wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately collected sealing-residue waste (`contaminated_solid_waste_sealing_residue`)

Record only this independently identified separately collected sealing-residue waste at its actual state and supply or receiving gate. Only actual loose residue independently dispatched; residue inside a contaminated wipe/container is included there once. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately collected sealing-residue waste
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

No intended co-product is assumed. Keep failed assembly, aiming, tests and corrections with the original installation burden; neither unchanged returns nor discarded parts receive an avoided-production credit. Record every actual reject state and destination, including in-node repair, actual usable return, recovery/discard or a separately reviewed downgrade. Unfinished or failed installations never enter D.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `job_specific` | job materials and corrective work | Assign traceable job-specific supplies, losses, energy and test/retest to that job. Shared actual costs require a documented causal pool; do not allocate by accepted count where physical activities differ. |  |
| `resource_share` | shared equipment and contracted event pools | For resource r and job j, a_rj = A_rj / sum(A_rk) over all benefiting jobs k in the same defined lifecycle/resource packet. Use a consistent causal activity basis, complete consumer coverage, positive denominator and sum(a_rj) = 1. Attribute a_rj / D Item(s) and burden B_r * a_rj / D; uncertain remaining use prevents a final unsupported fraction. |  |
| `period_ownership` | all resource and event packets | Index acquisition/manufacture, each service/reporting period, maintenance, replacement and retirement/termination. Link every input, asset, output and event to period and job and retain the period-specific attribution decision/evidence. A replacement is its own actual event packet. Reconcile each source pool and resource owner once, including other jobs; never duplicate provider capital or annualize without resource evidence. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `install_accept` | accepted installation and job configuration | job acceptance record | job/configuration id; site/date; model/BOM; substrate/mount; coax route/endpoint; mast/coax bonding interface/design; target transmitter; test criterion/results; correction/retest; signed acceptance; actual D | Audit actual completed job and signed test/handover records; independently count complete accepted same-configuration installations | Item(s) | Every job and correction/retest | Whole receipt-to-handover job; explicit reporting period | Actual installation site and declared receiver interface | per reference flow | Competent acceptance, dated test records, positive D and justified configuration equivalence |
| `cp_materials` | `install_accept` | supplies, packaging and usable returns | shipment and material custody ledger | job/period; shipment/SKU/material/state; inclusion/BOM; net mass; actual count/length; matching mass factor; opening/closing stock; installed amount; return/receiver; supplier delivery/packaging boundary; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Calibrated weighing or traceable matching-SKU conversion; reconcile receipts/issues, installation, stock and recipient-confirmed returns with original events Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each receipt, issue, installation and return | All job receipts and stock movements in stated periods | Installer custody and actual job site | per reference flow | Calibration; SKU/state conversion provenance; upstream inclusion ledger; receiver tickets |
| `cp_energy` | `install_accept` | installation electricity | meter and shared-load activity record | job/period; provider/voltage/site; meter boundary; start/end kWh; tool/test/charger activity; all shared consumers; provider inclusions | Read actual meter or validated submeter; match charging/tests and shared consumers to the same job/period and causal boundary | kWh | Every relevant meter interval and shared activity | All included pre-handover electricity intervals | Actual supply/meter boundary | per reference flow | Meter validity; load-coverage checks; no power/capacity proxy; disclosed exact support gap |
| `cp_services` | `install_accept` | owned assets and hired whole support events | resource lifecycle and contract ledger | resource model/serial/owner; job/node/period consumers; acquisition/manufacture; actual service activity; maintenance/replacement; retirement; remaining-use uncertainty; actual whole-event contract reference; delivery/energy/capital inclusions; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Read exact resource and contract packets; enumerate all consumers across jobs/nodes and periods; verify actual causal activity and nonduplicated burden ownership Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); actual physical activity units retained | Each resource use, contract event and lifecycle change | Whole resource lifecycle packet plus indexed service/reporting periods | Current installer and all benefiting consumer jobs/nodes | per reference flow | Complete consumer denominator; positive activity; share closure; provider boundaries; unresolved life/Duration disclosure |
| `cp_releases` | `install_accept` | waste and identified emissions | event and destination release record | job/period; originating issue/rework id; material/chemistry; state/hazard; receiver/ticket; captured/retained mass; emitted species/particle fraction/air compartment; formulation/SDS; actual task; method uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh and confirm actual receiver streams; measure or justify constituent/particulate releases from actual task and product evidence; separate retained, captured and emitted material Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each waste exit or release-producing activity | All relevant original/rework events through handover | Actual work location and receiver or receiving-air compartment | per reference flow | Destination tickets; method and uncertainty; species/size/medium support; material balance residual disclosure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_actual` | all non-reference inventory rows | q_i = n_i / D; n_i is the independently retained actual attributable numerator for the concrete exchange; D is positive actual complete acceptance count. Never backsolve n_i from the reference output. | n_i; D; cp_acceptance; corresponding material/energy/service/release protocol | q_i per reference flow |  |
| `sku_mass` | mass inventory rows | Use measured net kg; when only count or length exists, multiply actual quantity by a traceable matching SKU/state mass factor and preserve its uncertainty. A heterogeneous total is a diagnostic rather than a concrete exchange. | cp_materials; cp_releases; matched conversion evidence | actual kg numerator |  |
| `custody_closure` | identifiable material source pools | Opening stock + receipts = retained installed material + closing stock + usable returns + actual waste + identified releases + disclosed residual. Reconcile each material/source pool, never assign the residual to dust or fill missing data with zero. | cp_materials; cp_releases; original-event and receiver ledger | material pool closure and unresolved residual |  |
| `asset_attribution` | `owned_equipment_attribution_charger`; `owned_equipment_attribution_rf_tester`; `owned_equipment_attribution_electrical_tester`; shared `hired_support_service_transport`; `hired_support_service_access`; `hired_support_service_test` | Apply resource_share to each exact resource pool, retaining A_rj, all A_rk, B_r, consumer/node/period indexing and ownership; divide the attributable actual packet quantity by D. No service-to-mass equivalence exists. | cp_services; cp_acceptance; exact activity and lifecycle evidence | resource fraction or genuine event per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_quality` | accepted output | Document every reference qualifier and configuration equivalence. Product point specifications apply only to the matching model and are not universal service amounts or reception guarantees. | cp_acceptance; manufacturer model instructions |
| `custody_quality` | materials and exits | Retain exact identity, units, calibrated quantities, event/receiver and upstream manufacture/delivery/packaging inclusions; report stock and mass-balance residuals. | cp_materials; cp_releases |
| `resource_quality` | assets and shared services | Complete consumer/period indexing and causal allocation with replacement/termination ownership. Unknown remaining life or incomplete consumers remain explicit finalization blockers. | cp_services; resource_share; period_ownership |
| `conditional_quality` | conditional umbrella exchanges | Require actual activity/custody proof for an absent flow; missing supply, electricity, waste or release evidence is a gap. Actual SKU/species/medium and support must be verified before binding. | All actual protocols; no zero imputation |
| `quantity_quality` | all inventories | Collect actual temporal/site coverage, conversion provenance and uncertainty. Manufacturer sources supply no universal installation Range; preserve card-specific evidence needs rather than inventing bounds. | Calibrations; matched source packets; declared gaps |
| `refine_mast_mount_hardware` | `mast_mount_hardware_mast`; `mast_mount_hardware_bracket`; `mast_mount_hardware_u_bolt`; `mast_mount_hardware_anchor` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand the actual mast, brackets, U-bolts, anchors and fixings into their own material/SKU exchanges. The accepted substrate and mount geometry control the supply; subtract nothing by guess and do not repeat antenna-bundled hardware. Quantity evidence gap: Actual mounting design, per-SKU conversion and issue/return records are needed; no universal mount mass is supplied. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual fixing SKUs and actual substrate/design-specific material/grade require separate measurement; never duplicate antenna bundled hardware. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_coax_balun_connectors` | `coax_balun_connectors_coax`; `coax_balun_connectors_connector`; `coax_balun_connectors_extra_balun`; `coax_balun_connectors_receiver_fitting` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand the actual 75-ohm continuous coax SKU, connectors and receiver fitting for the single declared receiver endpoint. A balun is a separate input only if it is genuinely additional to the antenna packet; record the original inclusion explicitly. Quantity evidence gap: Cable route/length, termination waste and model-specific mass evidence are missing from universal sources and must be collected. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Distinct actual connector models/receiving-interface parts must be separately identified; same cable metres/kg are one physical supply with auxiliary conversion, not two flows. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_bonding_components` | `bonding_components_conductor`; `bonding_components_clamp`; `bonding_components_coax_ground_block` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand each actual conductor, clamp and coax grounding block or protective fitting required by the approved design. Document mast/support bonding and coax-entry bonding separately to the suitable existing building grounding interface. This is not a new earth electrode or a whole lightning-protection system. Quantity evidence gap: Site-approved interface/design, actual conductor and fitting SKUs and net supply records must establish any bounds. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual approved protective fittings and different conductor/clamp SKUs require exact product records; mast and coax bonding duties do not duplicate the same issued conductor. No new earth electrode or whole lightning-protection system. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_weatherproofing_materials` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Where the installed method uses sealing or weatherproofing, expand each actual product with formulation/SDS and application point. Separate retained material, containers and losses; application does not imply complete evaporation. Quantity evidence gap: Product-specific issue, retained mass and SDS constituent evidence are needed; no generic use or emission interval is supported. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual separate complete weatherproofing formulation/SKU and application gate; retained, container and actual release fates, no all-supply evaporation. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_incoming_packaging` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Keep the physical packaging receipt in custody accounting for every antenna/component shipment. Expand by actual material. If its manufacture is embedded in landed component supply, do not add that burden again; a separate burden requires evidence that the upstream packet excludes it. Quantity evidence gap: Shipment-specific weights and supplier packaging boundary disclosures must replace any assumed packaging percentage. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual packaging custody receipt by material/SKU; retain physical mass if supplier-included, separately charge only uncovered upstream burden, treat durable containers through compatible resource life. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_owned_equipment_attribution` | `owned_equipment_attribution_charger`; `owned_equipment_attribution_rf_tester`; `owned_equipment_attribution_electrical_tester` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand every used tool, external charger, RF/electrical tester and access asset by exact model/serial. Its lifecycle packet spans acquisition, service/reporting periods, actual maintenance/replacement and retirement; all benefiting jobs/nodes and periods must be listed, including those outside this package. Quantity evidence gap: Exact resource life and all-consumer activity evidence are required; no generic lifetime, remaining-use assumption or fixed per-job asset fraction is available. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. An actual multitype tool/access roster still requires exact model and lifecycle packet; each independent model separate. No lifecycle allocation without actual all-consumer drivers, observed history/remainder/maintenance/replacements/retirement/EOL. Installation tool functions and access-asset types are not a finite single-object roster; require their own actual function/model before a card. | `cp_services`; actual independent records and identity/unit evidence |
| `refine_hired_support_service` | `hired_support_service_transport`; `hired_support_service_access`; `hired_support_service_test` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand each genuinely purchased complete transport, access or testing event with its contracted reference and configuration. The provider owns its asset lifecycle; disclose included fuel/electricity and inbound delivery. Hourly hire needs real Duration support and review rather than conversion into a fictional event. Quantity evidence gap: Actual contracts, service reference and burden-inclusion records are needed before a service envelope can be stated. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Hourly hire and other actual service references need their own exact identity/property/unit, not event conversion; disclose provider lifecycle/energy/delivery scope. | `cp_services`; actual independent records and identity/unit evidence |
| `refine_unused_product_return` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record only actual usable unchanged supplies leaving installer custody. Preserve source SKU and receipt-to-return identifiers and receiver; an internal stock movement is not this boundary exit. No avoided manufacture credit is inferred. Quantity evidence gap: Original issue and receiver-confirmed return evidence must justify the quantity and any bounds. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual usable outward product transfer by matching original SKU/receipt/native unit; retained stock and credit excluded. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_installation_waste` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand packaging, offcuts and removed failed components by material, physical state, hazard and authorised receiving route. Link each discard or recovery to the original install_accept issue/rework event; electronics or battery rejects require their actual identity and lifecycle owner. Do not merge heterogeneous waste into one concrete flow. Quantity evidence gap: Event-linked weighing and destination tickets are needed; unrecorded loss is not zero waste. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual segregated solid waste, contaminated carriers, packaging, failed/new and historic origins by independent dispatch; retain native-volume effluent separately when it occurs. | `cp_releases`; actual independent records and identity/unit evidence |
| `refine_contaminated_solid_waste` | `contaminated_solid_waste_container`; `contaminated_solid_waste_wipe`; `contaminated_solid_waste_sealing_residue` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Where actually produced, expand chemistry, physical state, hazardous status and receiving route for contaminated containers, wipes and sealing residues. Separate clean packaging already owned by actual exchanges required by `refine_installation_waste` and material retained at joints. Quantity evidence gap: Actual material/SDS, residual weighing and receiver classification are required to establish waste bounds. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Different actual chemistry/hazard/receiver records require separate stream identities; no duplicate retained sealant or clean packaging. | `cp_releases`; actual independent records and identity/unit evidence |
| `refine_airborne_particulate` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Activate only with evidence of drilling/mounting and actual airborne release. Expand the reported substance and particle-size fraction with receiving-air compartment; captured dust is waste and retained substrate is neither an emission nor unexplained loss assigned to air. Quantity evidence gap: Task/capture records and measured or justified species/size release evidence are needed; generic dust is not an identity or emission factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_releases`; actual independent records and identity/unit evidence |
| `refine_weatherproofing_constituent_to_air` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Where an actual product releases an identified constituent, record species, formulation/SDS, application conditions, mass-balance or measurement and receiving-air compartment. Neither an unspecified VOC label nor total supplied sealant mass supports a concrete emission. Quantity evidence gap: Species-specific content and release evidence must separate retained, captured, wasted and airborne fractions; no 100 percent emission assumption is supported. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_releases`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `acceptance_gate` | reference and install_accept | Verify actual scope/interfaces, all qualifiers, positive independent D, signed complete output and correction/retest closure. Match reference link/name/property/unit to accepted_installation and require explicit 1 Item(s). Failed/unfinished work stays outside D. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `stream_gate` | inventory and material exits | Check every actual SKU/state/receiver stream, material-pool custody closure and original reject/rework/exit linkage. Separate retained weatherproofing, captured waste and identified airborne species/size/medium; generic dust/VOC is insufficient. Missing evidence is inconclusive, not zero. |  |
| `resource_gate` | resource and period packets | Check all consuming jobs/nodes and periods, actual activity denominators and share closure, period-specific decisions and replacement/termination evidence. Reconcile acquisition, provider capital, delivery, packaging and shared energy once; unresolved remaining use blocks finalization. |  |
| `binding_gate` | reference and concrete exchanges | Verify exact identity and compatible support chain before each final exchange. Register unresolved identities separately; confirm bilingual semantics, source/protocol/calculation links and projection fingerprints. Report performed/skipped checks, findings and completeness distinctly; a mechanical check does not establish publication readiness or resolved UUIDs. |  |
| `atomization_mast_mount_hardware_complete` | `mast_mount_hardware_mast`; `mast_mount_hardware_bracket`; `mast_mount_hardware_u_bolt`; `mast_mount_hardware_anchor` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_mast_mount_hardware` with actual records; unresolved required expansion blocks the dataset. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `atomization_coax_balun_connectors_complete` | `coax_balun_connectors_coax`; `coax_balun_connectors_connector`; `coax_balun_connectors_extra_balun`; `coax_balun_connectors_receiver_fitting` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_coax_balun_connectors` with actual records; unresolved required expansion blocks the dataset. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `atomization_bonding_components_complete` | `bonding_components_conductor`; `bonding_components_clamp`; `bonding_components_coax_ground_block` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_bonding_components` with actual records; unresolved required expansion blocks the dataset. | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `atomization_weatherproofing_materials_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_weatherproofing_materials` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_incoming_packaging_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_incoming_packaging` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_owned_equipment_attribution_complete` | `owned_equipment_attribution_charger`; `owned_equipment_attribution_rf_tester`; `owned_equipment_attribution_electrical_tester` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_owned_equipment_attribution` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_hired_support_service_complete` | `hired_support_service_transport`; `hired_support_service_access`; `hired_support_service_test` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_hired_support_service` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_unused_product_return_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_unused_product_return` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_installation_waste_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_installation_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_contaminated_solid_waste_complete` | `contaminated_solid_waste_container`; `contaminated_solid_waste_wipe`; `contaminated_solid_waste_sealing_residue` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_contaminated_solid_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_airborne_particulate_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_airborne_particulate` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_weatherproofing_constituent_to_air_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_weatherproofing_constituent_to_air` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation data package for downstream process and lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset, only with compatible configuration, scope and installer handover gate |
| allowed_use | Matched passive residential terrestrial antenna installation and its actual component/service interfaces |
| excluded_use | Operational reception electricity, long-term reception/lifetime claims, later maintenance, satellite/powered/distribution routes or whole-building/whole-lightning-protection equivalence |
| required_metadata | Site/time; actual model/BOM and configuration; accepted D; interface/design; test/acceptance and corrections; upstream datasets; inventories/protocols; ownership, consumer and period attribution |
| required_quality_disclosure | Identity/support gaps; missing inventory Range evidence; meter/calibration/conversion uncertainty; custody residuals; remaining-use and allocation uncertainty; actual performed/skipped validation |
| update_trigger | Changed model, mounting/interface, lead-in, BOM, design, acceptance method, route or stronger actual quantity/identity evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-explanatory-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 scope: selected passive terrestrial route is a narrower subset of antenna installation including other residential antennas/cable-TV/lightning conductors |
| channelmaster-advantage-installation | handbook | https://downloads.channelmaster.com/Sheets/30%20Series%20UG.pdf | Representative assembly, included hardware/balun versus separate mast/coax, mounting, clearance, grounding and aiming/test responsibilities |
| channelmaster-advantage-support | handbook | https://www.channelmaster.com/blogs/product-support/advantage-45 | Separate mast/support and coax-entry bonding responsibilities, actual local design and reception assessment |
| channelmaster-advantage-product | handbook | https://www.channelmaster.com/products/advantage-45-outdoor-tv-antenna-cm-3016 | Representative passive configuration and package inclusions; product mass/range marketing is not whole-installation inventory evidence |
