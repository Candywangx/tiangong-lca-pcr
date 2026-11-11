---
pcr_id: pcr.constructions-and-construction-services.construction-services.mechanically-fitted-arc-resistant-csst-natural-gas-branch-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mechanically fitted arc-resistant CSST natural-gas branch rough-in installation services

## 1. Scope and Applicability

This PCR covers first indoor rough-in installation of one actual designed natural-gas branch using black arc-resistant jacketed CSST and its compatible manufacturer mechanical fittings. It ends at isolated capped, pressure-tested and inspected handover before concealment. The route is routing/cutting/end preparation, mechanical assembly, supports/strike protection, applicable bonding interface, testing, correction/retest and signed transfer. Manufacturer-specific numerical design and test instructions are selected for the actual configuration and jurisdiction, not generalized here. [omegaflex-tracpipe-2026]

Exclude live fuel-gas introduction, purging, appliance connection/combustion/commissioning, line-pressure regulator commissioning, external distribution, underground/direct-burial work, yellow-jacket intermix, LPG, medical gases and heating/ventilation equipment installation. The accepted starting host and authorized design are prerequisites; new branch-attributable alterations, protection and bonding work cannot disappear behind those prerequisites. UN CPC 54640 covers gas-conducting installations; the proposed category is narrower and does not claim whole-leaf coverage. [un-cpc3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.mechanically-fitted-arc-resistant-csst-natural-gas-branch-installation-services |
| classification_refs | cpc:3.0:54640; proposed narrower boundary |
| covered_products | First indoor mechanically fitted black arc-resistant CSST natural-gas branch rough-in installation, isolated and capped at handover |
| excluded_products | Live gas/purge/appliance commissioning; external/underground network; LPG/medical gas; yellow-jacket mixed systems; heating or ventilation installation; regulator commissioning |
| representative_product | One declared complete branch from specified upstream isolation boundary to specified capped outlet, using actual TracPipe AP or equivalent evidenced compatible AR system |
| production_route | Accepted design/host; route/cut; mechanically fit; support/protect; complete applicable bonding interface; isolate/cap; pressure-test and inspect; correct/retest; hand over |
| market_state | Signed accepted rough-in installation service before concealment; no operating appliance or ready-to-use gas service claim |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted isolated pressure-tested indoor natural-gas CSST branch rough-in installation service |
| How much | 1 complete declared circuit; 1 Item(s) |
| How well | Actual approved design/gas/pressure/capacity; compatible system and fitting revision; undamaged supported protected installation; verified applicable bonding; accepted authorized pressure test/rough-in inspection with outlets capped and fuel gas absent |
| How long or cycle | One initial installation and all corrections/retests through signed rough-in handover. Reusable provision is separately linked to its manufacture/provision, use/upkeep, replacement and termination periods; no building operating lifetime or later gas commissioning |
| reference_flow_link | `accepted_branch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted isolated pressure-tested indoor natural-gas CSST branch rough-in installation service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | branch id/endpoints; actual indoor route/segment lengths/diameters; manufacturer/system/jacket/fitting revisions; design gas/pressure/capacity; applicable jurisdiction and approved design; support/protection/bonding scope; host alterations; installer qualifications; test medium/protocol/conditions/results; inspection and handover date; custody and remaining commissioning owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Only one complete uniquely identified accepted branch is 1 Item(s). Metres, fittings, outlets and repeated tests are configuration/activity evidence, not additional reference outputs; do not compare different branch configurations as equivalent without disclosure. |
| composite_mass | jacketed_csst | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep jacketed finished composite mass distinct from bare steel and packaging. Actual diameter-specific mass per length or calibrated composite weighing is required; length alone does not establish kg. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Approved actual indoor route/design and accepted host; upstream source isolated from fuel gas, downstream appliances absent/disconnected; supplied compatible system components at declared supply gates |
| starting_condition_role | Host/design/isolation prerequisites with documented ownership; unchanged building stock excluded, new installation-attributable modification included |
| product_classification_scope | Gas-conducting branch rough-in service within CPC54640; excludes heating/ventilation and later operational work |
| recursive_input_rule | Do not recurse into the same installation service for internal branch handoffs or corrections. Purchased subcontract work has declared scope and one upstream burden owner. |
| upstream_dataset_requirement | Actual finished jacketed CSST, fittings, support/protection/bonding and consumables with supplier manufacturing/packaging coverage; actual tool/test/transport provision and electricity; unresolved identities resolved before final exchange production |
| disclosure | Actual design, host, route, supplied states, material custody, test and bonding scope, provider exclusions, shared assets/periods and remaining commissioning responsibilities |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers first indoor rough-in installation of one actual designed natural-gas branch using black arc-resistant jacketed CSST and its compatible manufacturer mechanical fittings. It ends at isolated capped, pressure-tested and inspected handover before concealment. The route is routing/cutting/end preparation, mechanical assembly, supports/strike protection, applicable bonding interface, testing, correction/retest and signed transfer. Manufacturer-specific numerical design and test instructions are selected for the actual configuration and jurisdiction, not generalized here. [omegaflex-tracpipe-2026] Exclude live fuel-gas introduction, purging, appliance connection/combustion/commissioning, line-pressure regulator commissioning, external distribution, underground/direct-burial work, yellow-jacket intermix, LPG, medical gases and heating/ventilation equipment installation. The accepted starting host and authorized design are prerequisites; new branch-attributable alterations, protection and bonding work cannot disappear behind those prerequisites. UN CPC 54640 covers gas-conducting installations; the proposed category is narrower and does not claim whole-leaf coverage. [un-cpc3-2025] | `un-cpc3-2025`; `omegaflex-tracpipe-2026` |
| rough_in_gate | all processes | End only after authorized accessible rough-in inspection and pressure test, applicable verified bonding and protection, closed defects, capped isolation and signed custody. No fuel gas, purge or appliance connection is credited. | omegaflex-tracpipe-2026 |
| complete_provision | all processes | Include actual component manufacture/supply, embedded cutting/fitting losses, protection/bonding work, correction/retest, consumables, water, energy, logistics and bounded reusable asset production/maintenance/termination coverage once. Record provider-included packaging/services and uncovered shares. | omegaflex-tracpipe-2026 |
| shared_scope | all processes | Link shared access and tools to branch_assembly and rough_in_test consumers and service periods; gauges/compressor may also serve later jobs. Document complete service/capital-cycle coverage and removal owner. Do not invent lifetime operation or reuse counts. | omegaflex-tracpipe-2026 |
| medium_convention | rough_in_test | Actual authorized medium and supply convention are mandatory: ambient_air_intake is a conditional elementary input for onsite compression; actual exchanges required by `refine_test_medium` is conditional external product supply. Never count the same medium under both conventions. Pair either input with actual release, retained/recovered stock, waste or real product-return custody; compressor provision/energy counted once. | omegaflex-tracpipe-2026 |
| asset_periods | `assembly_provision_cutting`; `assembly_provision_access`; `assembly_provision_delivery`; `assembly_provision_crew_transport`; test_provision | Separately index actual asset manufacture/provision, job use/upkeep, later service jobs/periods, replacement and termination/removal. Link branch_assembly and rough_in_test activity and the accepted output to its initial job period. Declare each phase owner and allocated burden; unknown replacement/terminal coverage blocks final dataset completion. | omegaflex-tracpipe-2026 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| branch_assembly | Route, mechanically fit, support and protect the branch | required | Always; conditional material/service exchanges follow actual work | Assemble independent jacketed tubing, fittings/caps, supports/protection and applicable bonding; output unaccepted isolated branch to rough_in_test; receive failed branches for correction | Actual unique assembled branches by transfer id |
| rough_in_test | Isolated rough-in pressure test, corrections and handover | required | Always; all failed cycles and retests remain attributable | Receive assembled branch; isolate/cap, pressure-test/inspect, route failures back to branch_assembly; output accepted branch only after signed gate | 1 Item(s) accepted complete branch |

Branch cutting, jacket stripping and fitting-seat formation remain embedded assembly operations; no independent fabricated-member handoff is evidenced. No separate gas production, chemical reaction, energy-conversion or recovery node is assumed. Rejected/damaged tubing is repaired/replaced only under actual compatible procedures; failed test states never count as final output. Internal correction-loop transfer ids retain quantities and burdens without new branch credit.

### Process: Route, mechanically fit, support and protect the branch (`branch_assembly`)

#### Inputs

##### Product flows

###### Actual black arc-resistant jacketed CSST at supplier handover (`jacketed_csst`)

Finished manufacturer-qualified jacketed corrugated stainless steel tubing enters the installation boundary, recorded by actual product revision, diameter, length and composite mass. Do not substitute bare stainless steel tube or discard the jacket burden.

- Selected flow: Actual black arc-resistant jacketed CSST at supplier handover
- Flow property / unit: Mass / kg
- Amount rule: Actual gross issued mass attributable to the reference branch, retaining separate unused stock and outward returns.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Collect supplier or measured composite mass per length for the actual diameter/jacket, issued length, installation offcuts and batch variation; the guide has no universal kg per branch.

###### Complete compatible CSST mechanical fitting (`compatible_fittings_fitting`)

Record only this independently identified complete compatible csst mechanical fitting at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete compatible CSST mechanical fitting
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete compatible CSST transition fitting (`compatible_fittings_transition`)

Record only this independently identified complete compatible csst transition fitting at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete compatible CSST transition fitting
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied compatible CSST termination mount (`compatible_fittings_termination_mount`)

Record only this independently identified separately supplied compatible csst termination mount at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible CSST termination mount
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied compatible CSST end cap (`compatible_fittings_end_cap`)

Record only this independently identified separately supplied compatible csst end cap at its actual state and supply or receiving gate. Actual independently supplied end cap product in its real state; reusable provider-covered temporary/test cap not new permanent consumption. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible CSST end cap
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied compatible CSST support (`support_protection_support`)

Record only this independently identified separately supplied compatible csst support at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible CSST support
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied listed CSST strike-protection plate (`support_protection_strike_plate`)

Record only this independently identified separately supplied listed csst strike-protection plate at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied listed CSST strike-protection plate
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied CSST protective sleeve (`support_protection_sleeve`)

Record only this independently identified separately supplied csst protective sleeve at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied CSST protective sleeve
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied CSST protective conduit (`support_protection_conduit`)

Record only this independently identified separately supplied csst protective conduit at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied CSST protective conduit
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied CSST bonding clamp (`bonding_materials_clamp`)

Record only this independently identified separately supplied csst bonding clamp at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied CSST bonding clamp
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied CSST bonding conductor (`bonding_materials_conductor`)

Record only this independently identified separately supplied csst bonding conductor at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied CSST bonding conductor
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied CSST bonding connector (`bonding_materials_connector`)

Record only this independently identified separately supplied csst bonding connector at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied CSST bonding connector
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied compatible pipe-thread sealant formulation (`assembly_consumables_thread_sealant`)

Record only this independently identified separately supplied compatible pipe-thread sealant formulation at its actual state and supply or receiving gate. Actual approved pipe-thread application only; no implied sealant on CSST sealing seat. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible pipe-thread sealant formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied approved CSST jacket repair tape (`assembly_consumables_jacket_repair_tape`)

Record only this independently identified separately supplied approved csst jacket repair tape at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied approved CSST jacket repair tape
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied consumed CSST cutter blade (`assembly_consumables_cutter_blade`)

Record only this independently identified separately supplied consumed csst cutter blade at its actual state and supply or receiving gate. Actual separate new blade issue/consumption outside provider maintenance, with stock/return/wear records; no entire reusable tool per job. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied consumed CSST cutter blade
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied consumed CSST cutter wheel (`assembly_consumables_cutter_wheel`)

Record only this independently identified separately supplied consumed csst cutter wheel at its actual state and supply or receiving gate. Actual independently supplied wheel and real issue/stock/return/wear, not alternative amount assigned from blade total. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied consumed CSST cutter wheel
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded cutting-tool provision event (`assembly_provision_cutting`)

Record only this independently identified complete bounded cutting-tool provision event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded cutting-tool provision event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded work-access provision event (`assembly_provision_access`)

Record only this independently identified complete bounded work-access provision event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded work-access provision event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded CSST component delivery event (`assembly_provision_delivery`)

Record only this independently identified complete bounded csst component delivery event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded CSST component delivery event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded CSST installer transport event (`assembly_provision_crew_transport`)

Record only this independently identified complete bounded csst installer transport event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded CSST installer transport event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual assembly tool charging or direct electricity (`assembly_electricity`)

Conditional electricity for powered installation tools and actual charging crosses the boundary separately where not already covered by provider provision. Geography, supplier mix and voltage/use state follow actual metering and invoices.

- Selected flow: Actual assembly tool charging or direct electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual metered or traceably allocated assembly electricity including charging losses; substantiate manual-only zero and provider coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Obtain meter/charger records, charge-state change, actual job allocation and provider scope; no assumed kWh per branch and Energy support must be resolved for final exchanges.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled isolated capped CSST branch awaiting rough-in test (`assembled_branch`)

Internal handoff to rough_in_test preserves the actual branch identifier, endpoints and installed configuration. This is an unaccepted intermediate with no gas introduction, not the reference output or a separately sold appliance-ready system.

- Selected flow: Assembled isolated capped CSST branch awaiting rough-in test
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual number of identifiable branch handoffs; exclude repeated correction-loop transfers from new completed branch credit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_gate`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Use actual transfer and defect records; do not force intermediate counts to accepted-output counts when a branch is rejected or carried unfinished.

###### Usable unchanged jacketed CSST returned outward (`usable_returns_csst`)

Record only this independently identified usable unchanged jacketed csst returned outward at its actual state and supply or receiving gate. Actual usable original tubing SKU/state/recipient in matching kg; closing stock not outward, no old jacket constituent duplicate. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged jacketed CSST returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

###### Collected unusable jacketed CSST composite waste (`assembly_waste_csst`)

Record only this independently identified collected unusable jacketed csst composite waste at its actual state and supply or receiving gate. Actual independently dispatched composite tubing offcuts/defects with jacket retained, no separate steel/jacket double count. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Collected unusable jacketed CSST composite waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

### Process: Isolated rough-in pressure test, corrections and handover (`rough_in_test`)

#### Inputs

##### Product flows

###### Assembled isolated capped CSST branch awaiting rough-in test (`test_branch`)

Internal receipt from assembled_branch uses the same transfer and branch identifiers, state and count. Failed tests route the branch back to branch_assembly for documented correction and retest; no new upstream branch supply is invented on each loop.

- Selected flow: Assembled isolated capped CSST branch awaiting rough-in test
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual received branch count by unique handoff identifier, reconciled with assembly output and unaccepted work in progress.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_gate`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Actual paired custody/transfer and defect logs are required; accepted final counts are not a substitute for intermediate tracking.

###### Purchased complete compatible leak-check formulation (`leak_solution_purchased_formulation`)

Record only this independently identified purchased complete compatible leak-check formulation at its actual state and supply or receiving gate. Only externally supplied complete diluted formulation at actual purchased concentration; actual onsite-prepared solution is not a second upstream purchased mixture. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Purchased complete compatible leak-check formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual rinse and test-cleanup water (`rinse_water`)

Water used to rinse leak-check solution and clean the actual work enters at its provider/supply gate. Drying consumables are separately identified within test provision/material records; no water requirement is silently dropped from the rinse/dry procedure.

- Selected flow: Actual rinse and test-cleanup water
- Flow property / unit: Mass / kg
- Amount rule: Actual gross supplied water mass or traceable volume with state-specific density, excluding already included solution dilution water; reconcile use, real outward returns if any and retained stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Collect metered/weighed water, actual temperature/density conversion and task-specific use; no assumed rinse volume.

###### Bounded testing instruments, compressor, drying consumables and access provision (`test_provision`)

Actual testing service packages cover calibrated gauges/test apparatus, compressor where used, temporary caps handling, drying consumables, transport/access and their declared reusable production, maintenance and end-of-service shares. Shared access/tools link to assembly consumers with one burden owner.

- Selected flow: Bounded testing instruments, compressor, drying consumables and access provision
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual provider package quantity with physical activity and complete scope, attributing only test share; separately resolve uncovered material/service exchanges and their supported units.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Need calibration certificates, service/consumer periods, actual operation/standby, drying consumption and provider coverage; no invented compressor power, cap lifetime or service equivalence.

###### Actual test compressor or instrument electricity (`test_electricity`)

Conditional electricity for actual test apparatus/compressor and charging is separately measured when outside a provider package. Include repeated tests and standby attributable to this branch.

- Selected flow: Actual test compressor or instrument electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual metered or documented allocated test electricity, with provider-included portions excluded from duplicate upstream charging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_resources`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Require actual test-cycle meter/activity evidence and equipment load with uncertainty if estimated; no generic kWh and final Energy support remains to verify.

##### Waste flows

##### Elementary flows

###### Actual ambient-air intake for onsite test-medium compression (`ambient_air_intake`)

Conditional atmospheric intake applies only when actual authorized test medium is onsite compressed ambient air. Identify actual intake substance/composition and environment convention; record it at the atmospheric boundary, with compressor service/energy in test_provision/test_electricity once. Do not simultaneously record the same medium as supplied actual exchanges required by `refine_test_medium`.

- Selected flow: Actual ambient-air intake for onsite test-medium compression
- Flow property / unit: Mass / kg
- Amount rule: Actual substance-specific atmospheric mass intake from traceable meter or validated composition/state/volume calculation for all actual cycles; pair with actual exchanges required by `refine_test_releases`, retention/recovery and custody balance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Actual authorized onsite-air use, composition, intake conditions, isolated volume, conversion and metering uncertainty are required; no universal atmospheric-air factor, pressure or mass.

#### Outputs

##### Product flows

###### Accepted isolated pressure-tested indoor natural-gas CSST branch rough-in installation service (`accepted_branch`)

The actual complete branch has compatible undamaged assembly, supports/protection, applicable verified bonding, isolated capped outlets, passed authorized pressure testing and accessible rough-in inspection before concealment. Signed handover assigns the later gas introduction, purging, appliance connection and commissioning to a named responsible scope outside this gate.

- Selected flow: Accepted isolated pressure-tested indoor natural-gas CSST branch rough-in installation service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_gate`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: One complete qualified circuit is a reference definition, not an empirical efficiency range. Actual signed branch register, configuration and accepted/rejected counts are required; pressure, duration and capacity remain actual design/test facts.

##### Waste flows

###### Collected CSST test-cleaning washwater mixture (`test_waste_washwater`)

Record only this independently identified collected csst test-cleaning washwater mixture at its actual state and supply or receiving gate. Actual whole collected rinse/cleaning fluid to treatment receiver; not direct environmental release. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Collected CSST test-cleaning washwater mixture
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately collected CSST leak-check residue waste (`test_waste_loose_leak_residue`)

Record only this independently identified separately collected csst leak-check residue waste at its actual state and supply or receiving gate. Actual loose separately dispatched formulation residue, not contained in washwater or wipe. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately collected CSST leak-check residue waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Contaminated CSST test-cleaning wipe waste (`test_waste_wipe`)

Record only this independently identified contaminated csst test-cleaning wipe waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated CSST test-cleaning wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`
- Sources: `omegaflex-tracpipe-2026`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| one_service_output | all processes | One intended service output only; offcuts, usable returns and waste are not assumed co-products. Retain all correction/retest burdens with the eventual accepted branch; unresolved failures remain unfinished/rejected, not accepted. No avoided steel/gas production, recycling or operating savings credit. | omegaflex-tracpipe-2026 |
| shared_attribution | `assembly_provision_cutting`; `assembly_provision_access`; `assembly_provision_delivery`; `assembly_provision_crew_transport`; test_provision; electricity | Use actual asset/service scope and complete consumer/activity logs to attribute burdens by causal time/use, transport activity or directly metered electricity for the declared service period. Reconcile allocated shares to the source total across both nodes and other jobs; apply once, never add a second component burden already included in a provider package. | omegaflex-tracpipe-2026 |
| custody_balance | material and residual rows | Reconcile opening stock plus gross receipts with installed stock, actual outward usable returns, dispatched waste, measured consumption/releases and retained closing stock. Closing stock carries declared burden forward and is not an outward exchange. Never net a return then count it again. Document treatment and reusable cap/cylinder custody without invented recovery credits. | omegaflex-tracpipe-2026 |
| period_attribution | `assembly_provision_cutting`; `assembly_provision_access`; `assembly_provision_delivery`; `assembly_provision_crew_transport`; test_provision | For each actual asset identify provision/manufacture period, each use/upkeep period and consumer, replacement event and termination/removal duty. Assign production and terminal shares with actual complete service-life/use evidence, separately charge job use and upkeep, and reconcile all periods/consumers to source totals. Record provider-covered phases; do not charge full production again on each job, shift an unowned terminal duty out of the ledger or double count a replacement. The accepted first branch cycle remains the product denominator; no universal lifetime or annualization. | omegaflex-tracpipe-2026 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly_materials | branch_assembly | Components, consumables, usable returns and waste | Material issue/stock/custody record | branch_id; part_id; system_revision; diameter; gross_receipt; opening_stock; issued_length; composite_mass; installed_mass; return_mass; waste_mass; closing_stock; receiver; provider_coverage; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Trace actual approved bill of materials and batch/supplier masses; calibrate weighing; pair gross issues with installation/offcuts/returns/retained stock. Normalize actual gross lot-attributable inputs and separately record real outward usable returns and retained-stock carried-forward burden. Consumption is a disposition, never a second net-input convention. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m; Item(s) | Each issue, installation, correction and outward transfer | Initial receipt through final branch handover including corrections | Actual branch site, supplier and receiver | per reference flow | Bills, calibrated scales or traceable part masses; composition and custody; separate packaging coverage; balance residual and uncertainty |
| cp_assembly_resources | branch_assembly | Shared tools/access/logistics, energy and characterized releases | Meter, task and provider activity log | branch_id; task_id; asset_id; service_scope; consumer_id; service_period; provision_period; use_period; upkeep_period; replacement_event; terminal_period; phase_owner; phase_burden; attribution_decision; use_time; life_activity; maintenance; removal_owner; meter_start; meter_end; supplier; load; distance; empty_leg; substance; medium; released_mass; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Measure job electricity and physical service use; retain complete all-consumer and period totals; link manufacture/provision, use/upkeep, replacement and termination to actual periods and responsible owners; allocate causal share to branch_assembly without double counting test or supplier coverage; collect actual release method and medium. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kWh; Item(s); kg; h; km | Each task, charge, transport leg and release event | Declared provider service period and complete installation cycle | Actual branch and provider operations | per reference flow | Meters/activity logs, supplier scope, complete consumer allocation, actual lifetime/service evidence and release detection/uncertainty |
| cp_assembly_gate | branch_assembly | Untested internal branch transfer and corrections | Branch/configuration transfer register | branch_id; transfer_id; endpoints; segment_length; diameter; fitting_revision; support_protection; bonding_record; qualified_installer; defect_id; transfer_count; custody_time | Record unique isolated capped assembly and actual configuration; pair transfer_id with test receipt; carry failures/corrections and unfinished stock; reconcile each eventual accepted branch without counting repeated loops as new production. | Item(s); m | Each initial handoff and correction loop | Assembly through completed test handover | One actual declared indoor branch | per reference flow | Approved design, part compatibility, installer qualification, route photos, applicable bonding acceptance and paired signed transfers |
| cp_test_materials | rough_in_test | Medium, leak solution, rinse water, wastes and releases | Test material/custody and physical balance log | branch_id; cycle_id; medium_identity; composition; source_gate; isolated_volume; volume_unit; absolute_pressure; pressure_unit; temperature; temperature_unit; meter; delivered_mass; solution_id; concentration; rinse_mass; residual_mass; recovered_mass; waste_mass; substance; receiving_medium; receiver; outward_product_return; provider_internal_residual; retained_stock; intake_convention; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Meter or validate actual medium mass from documented conditions and composition; retain all cycles, leaks/corrections and disposition; measure solution/rinse and actual residues; distinguish supplied versus ambient_air_intake elementary input versus actual exchanges required by `refine_test_medium` external product input; pair real outward actual exchanges required by `refine_test_usable_returns` and retained stock/provider-internal residual separately from environmental and waste custody; normalize complete attributable cycle quantities to this accepted reference branch. Retain the actual protocol volume, absolute-pressure and temperature units with each measured value and every state conversion; document gauge-to-absolute and temperature-scale conversion when applicable. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; actual volume_unit; actual absolute pressure_unit; actual temperature_unit | Each test, retest, rinse, collection and release | First test preparation through final depressurization/cleanup and custody | Actual branch, supply and receiver | per reference flow | Authorized test protocol; calibration; density/state/model evidence; composition/SDS; complete mass/disposition balance and uncertainty |
| cp_test_resources | rough_in_test | Test apparatus, drying, access and electricity | Provider service, calibration and meter log | branch_id; cycle_id; asset_id; calibration; service_scope; consumer_id; service_period; provision_period; use_period; upkeep_period; replacement_event; terminal_period; phase_owner; phase_burden; attribution_decision; use_time; life_activity; maintenance; drying_material; removal_owner; electricity; supplier; transport_leg; uncertainty | Read actual test instruments/compressor energy and drying consumption; retain manufacture/provision, use/upkeep, replacement and terminal period/event ownership and shared consumer totals, separate included service electricity/materials and allocate actual rough_in_test share once. | Item(s); kWh; kg; h; km | Each setup/test/retest/cleanup and shared-service statement | Complete testing cycle and declared provider service period | Actual site, provider and other documented consumers | per reference flow | Calibration/service invoices, metered activity, complete allocation reconciliation and scope/drying/removal evidence |
| cp_test_gate | rough_in_test | Internal receipt, test acceptance and final output | Signed test, inspection and custody register | branch_id; transfer_id; received_count; design_gas; design_pressure; design_capacity; jurisdiction; fitting_revision; medium; test_protocol; test_pressure; pressure_unit; test_duration; duration_unit; result; defect_id; retest_id; inspection; bonding; capped_isolated; accepted_count; commissioning_owner | Match receipt to assembled_branch; verify actual qualified installation, isolation/caps, approved test conditions, accessible inspection and applicable bonding. Close failures through branch_assembly and retest; count each complete qualified accepted circuit once and assign later commissioning to a named external scope. Retain the actual authorized protocol pressure and duration units with the measured test settings/results; do not infer a pressure or time default. | Item(s); actual pressure_unit; actual duration_unit | Each receipt/test/retest and final signed handover | Initial test receipt through final rough-in acceptance | One specified complete indoor branch | per reference flow | Approved design/jurisdiction and current applicable guide, qualified installer, calibration, test/inspection signatures, closed defect chain and custody |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| reference_attribution | all inventory rows | Record actual attributable exchange quantity per reference flow. For a pooled job retain accepted branch identifiers and a causal allocation supported by actual configuration/activity; do not divide blindly among unequal circuits. | actual exchanges; unique accepted branch register; cp_assembly_gate; cp_test_gate; allocation evidence | exchange quantity per qualified reference circuit | omegaflex-tracpipe-2026 |
| material_reconciliation | material and residual rows | Reconcile opening stock plus gross receipts against installed material, outward returns, dispatched waste, actual consumed/released quantity and retained stock; investigate residual against measurement uncertainty. Do not add internal transfers to external receipts. | cp_assembly_materials; cp_test_materials | audited material disposition and carried-forward burden | omegaflex-tracpipe-2026 |
| test_medium_balance | actual exchanges required by `refine_test_medium`; ambient_air_intake; actual exchanges required by `refine_test_usable_returns`; actual exchanges required by `refine_test_releases` | Use traceable actual meter mass or justified conditions/composition conversion; reconcile medium input/intake with retained, recovered, waste-custody and substance-specific environmental disposition for every cycle. Retain absolute pressure and actual state evidence, not a universal ideal-gas factor. | cp_test_materials; actual authorized medium and conversion method | actual medium mass and disposition by substance/compartment | omegaflex-tracpipe-2026 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_configuration | all rows | Declare actual material/service identity, supplier/state and units; actual test medium and release species/compartments; resolve concrete UUID and support before final process exchanges. | Part records, provider scopes, composition and verified detail/support rows |
| full_cycle | all processes | Include all initial installation, failed tests, corrections/retests, cleanup, logistics and reusable provision/removal responsibilities; unfinished work is explicitly reconciled. | Dated task/defect/custody log and complete consumer totals |
| measurement_uncertainty | all rows | Report calibration/resolution, sampling, supplier mass variability, stock/balance residual, allocated shares and state conversion uncertainty. Missing evidence is a gap, not a numerical zero or arbitrary range. | Meter/scale certificates, bills, physical balances and documented uncertainty |
| version_jurisdiction | rough_in gate | Use actual current applicable system/fitting instructions and qualified approved jurisdiction design; July2026 guide examples do not establish universal pressure, duration, spacing or capacity. | Dated guide/revision, approved plans, qualification, actual protocol/inspection and bonding record |
| `refine_compatible_fittings` | `compatible_fittings_fitting`; `compatible_fittings_transition`; `compatible_fittings_termination_mount`; `compatible_fittings_end_cap` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Declare zero, one or multiple actual fittings, transitions, termination mounts and caps individually by part number and connection role. Temporary debris closures and pressure-test caps have explicit provision and removal ownership; do not charge a reusable cap as permanently consumed. Range evidence need: Require actual bill of materials, fitting family, mass per part and returned quantities; no universal fitting count, mass or torque is an inventory default. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other part numbers/functions and reusable temporary debris/test caps require exact supply/complete-life/native-unit/period/removal ownership; no whole cap consumed every attempt. | `cp_assembly_materials`; actual independent records and identity/unit evidence |
| `refine_support_protection` | `support_protection_support`; `support_protection_strike_plate`; `support_protection_sleeve`; `support_protection_conduit` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record size-compatible supports, listed strike plates, sleeves or conduit where the actual route and approved instructions require them. Structural members providing support are disclosed as host conditions; new branch-attributable alterations and protection are included. Range evidence need: Actual route geometry, threatened locations, support type and applicable fitting/system instructions establish quantities; no generic spacing or protection length is imposed. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Different actual route/design-required SKUs and uncovered host alterations require actual own records; existing host structural support not new supplied material. | `cp_assembly_materials`; actual independent records and identity/unit evidence |
| `refine_bonding_materials` | `bonding_materials_clamp`; `bonding_materials_conductor`; `bonding_materials_connector` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional actual clamps, conductors and connectors required at the branch bonding interface. A qualified assessment records existing verified interface coverage or new work and provider ownership. Arc-resistant jacketing is not a blanket exemption from bonding. Range evidence need: Obtain actual jurisdiction/system requirements, qualified bonding record, conductor and clamp identities/lengths/masses; no universal conductor quantity or exemption. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other bonding work/SKUs and provider ownership require qualified existing/new-interface assessment; arc-resistant jacket no blanket bonding exemption. | `cp_assembly_materials`; actual independent records and identity/unit evidence |
| `refine_assembly_consumables` | `assembly_consumables_thread_sealant`; `assembly_consumables_jacket_repair_tape`; `assembly_consumables_cutter_blade`; `assembly_consumables_cutter_wheel` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional actual pipe-thread sealant, approved jacket repair tape, cutter blade/wheel wear, cleaning and protective consumables are separated by composition and purpose. Follow the chosen fitting instructions: sealant for a pipe-thread connection does not imply sealant on its CSST sealing seat. Gross issue is the input convention for consumables also: a real usable return is recorded once in `usable_returns_csst`, and retained stock is only the carried-forward balance. Range evidence need: Collect exact fitting-specific procedure, formulation receipts/use or measured wear, actual repair incidence and retained stock; no assumed sealant dose or loss fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual cleaning/protection or other formulations/products require exact identity/quantity; retain gross-issue and real usable-return convention once, closing stock not output. | `cp_assembly_materials`; actual independent records and identity/unit evidence |
| `refine_assembly_provision` | `assembly_provision_cutting`; `assembly_provision_access`; `assembly_provision_delivery`; `assembly_provision_crew_transport` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual documented service packages provide cutting/hand tools, shared access, delivery and worker/material transport. Each package declares its actual physical drivers, consumers, service period, capital provision, maintenance and termination/removal coverage. Separate uncovered tool production or transport legs; do not convert kilometres or tool-hours into an invented item equivalence. Range evidence need: Require provider bill/scope, asset service life and complete job/consumer log, actual loaded/empty legs and masses/distances or activity evidence; no default lifetime or freight factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual hand-tool/material-transport functions, actual provider configurations or h/km/person*km/t*km references require exact unique native property/unit, not counted-event conversion. A genuine complete provider package contains its included functions/resources once; component delivery and material freight for same physical event not both charged. Retain all consumers/period/capital/maintenance/termination coverage. | `cp_assembly_resources`; actual independent records and identity/unit evidence |
| `refine_usable_returns` | `usable_returns_csst` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Only physical usable tubing/components returned to a supplier or other declared custodian cross this output boundary. Retained closing stock is a balance with carried-forward burden, not an outward product exchange. This includes real usable consumable returns from gross issues, not only piping components. Range evidence need: Need return receipts and actual composition, condition, mass and custody; no assumed resale, recovered-product substitution or return rate. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual fittings/support/bonding/consumable returns require exact original SKU/state/recipient/native property/unit and gross-issue burden bridge; no second deduction or fabricated recovery. | `cp_assembly_materials`; actual independent records and identity/unit evidence |
| `refine_assembly_waste` | `assembly_waste_csst` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Separate CSST composite offcuts, removed defects, spent consumables and supplier packaging by real composition, waste status and receiving contractor. Reworked components remain within branch_assembly; offsite treatment is outside the installation handoff unless explicitly included once. Range evidence need: Require measured or documented masses, actual segregation, custody and treatment coverage; no generic scrap rate or recycling credit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other removed fittings, spent consumables and packaging material/hazard/receiver identities require independent actual roster; reworked components internal and offsite treatment included only once where expressly owned. | `cp_assembly_materials`; actual independent records and identity/unit evidence |
| `refine_assembly_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional individual substances and receiving media are required only for actual measured or defensibly modelled direct releases. Do not classify solid offcuts as emissions or infer methane from the natural-gas design designation of a pre-gas isolated branch. Range evidence need: Identify actual substance/species, medium, method detection limit and uncertainty before quantification/binding; no generic VOC, dust or methane default. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_assembly_resources`; actual independent records and identity/unit evidence |
| `refine_test_medium` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional externally supplied authorized pressure-test medium enters as a product at the actual supplier gate. Record actual composition and cylinder/compressor service coverage. When compression occurs onsite from ambient air, use ambient_air_intake instead of this product input for the same medium, with compressor provision/energy once. Do not assume which authorized medium is used. Range evidence need: Need approved test protocol, isolated volume, absolute pressure, temperature, composition and real-gas/conversion method or meter evidence; no universal pressure, duration or gas mass. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual supplied gas/medium identity and unique unit, cylinder/compressor coverage; onsite ambient-air compression uses actual intake instead of same supplied-medium product, no assumed nitrogen/air or methane. | `cp_test_materials`; actual independent records and identity/unit evidence |
| `refine_leak_solution` | `leak_solution_purchased_formulation` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record the actual compatible leak-check formulation at its purchased or prepared concentration. Distinguish purchased diluted product from separately mixed water/stock; count each preparation ingredient once. Range evidence need: Require supplier composition/concentration and gross issue/stock records or weighed use; guide recommendation establishes compatibility, not kg per test. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual onsite preparation water and stock formulations require separate receipt/recipe/quantity/native-unit identities; actual water identical to rinse supply may be aggregated once by same SKU with independent duty records, never duplicated. Preserve as-prepared concentration and each ingredient once. | `cp_test_materials`; actual independent records and identity/unit evidence |
| `refine_test_usable_returns` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional real outward transfer of reusable medium or usable solution/material to a named custodian is a product return with quantity, quality and carried burden declared. Provider-internal cylinder residual covered within the supplied service is not another outward exchange; retained onsite stock is a balance, not output. No avoided production or invented recovered co-product credit. Range evidence need: Need actual signed return/custody receipts, condition/composition, mass and supplied-service coverage; no assumed return percentage or product credit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual outward usable medium/formulation/SKU/native quantity/quality/custodian and carried-burden bridge; provider-internal cylinder residual and retained stock not outputs, no recovery credit. | `cp_test_materials`; actual independent records and identity/unit evidence |
| `refine_test_waste` | `test_waste_washwater`; `test_waste_loose_leak_residue`; `test_waste_wipe` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual collected rinse/washwater, leak-check residue, wipes and rejected test consumables leave for named waste custody. Separate wastewater sent to treatment from direct environmental releases, and permanent installed stock from waste. Range evidence need: Need collection/weighing or wastewater volume/density and composition records with receiver evidence; no default washwater composition or discharge fate. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other rejected test consumables, different chemistry/hazard/receiver states require exact independent identities; installed stock not waste, captured carrier includes contents once. | `cp_test_materials`; actual independent records and identity/unit evidence |
| `refine_test_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Declare actual released test-medium substances and receiving compartments or retained/recovered medium after depressurization. Supplied compressed medium is paired with its real disposition; never use generic gas labels or assume fuel-gas methane in this pre-gas boundary. Range evidence need: Require actual medium composition, vent/receiver route, residual/recovered quantities, conditions and uncertainty; compressed ambient-air intake/discharge requires an explicit elementary-flow convention, not an invented supplied-gas identity. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_test_materials`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_branch | Reject accepted credit unless the complete declared branch is isolated/capped and pre-gas, compatible and undamaged, supported/protected, applicable bonding verified, authorized test and accessible inspection passed, defects/retests closed and signed handover recorded. | omegaflex-tracpipe-2026 |
| transfer_rework | assembled_branch; test_branch | Pair internal transfer quantities and ids; link every failed pressure test to correction in branch_assembly and subsequent retest. No failed branch, duplicate loop or unfinished stock may inflate accepted output. | omegaflex-tracpipe-2026 |
| inventory_coverage | all inventory rows | Check every conditional card against actual tasks; expand umbrella materials/providers/substances into real exchanges. Gross materials, returns, closing stock, waste/washwater, medium disposition, energy and tool/transport scope reconcile once with uncertainty; blank evidence is not zero. | omegaflex-tracpipe-2026 |
| bonding_test_specificity | all processes | Require actual jurisdiction/system/fitting-specific protection, bonding and test evidence. AR jacket does not waive applicable bonding; no generic numerical pressure/time/support spacing, methane leakage, sealant dose or actual operational performance is inferred. | omegaflex-tracpipe-2026 |
| scope_classification | reference product | Use only the declared narrower gas-conducting rough-in category; no heat/ventilation installation, live-gas commissioning or full CPC54640 coverage assertion. | un-cpc3-2025 |
| period_completeness | `assembly_provision_cutting`; `assembly_provision_access`; `assembly_provision_delivery`; `assembly_provision_crew_transport`; test_provision | Verify manufacture/provision-use/upkeep-replacement-termination period links and ownership, causal allocation across actual jobs/consumers, complete phase totals and no double attribution. Missing service-life/replacement/terminal evidence blocks finalization and cannot be hidden behind initial branch handover. | omegaflex-tracpipe-2026 |
| medium_typing | actual exchanges required by `refine_test_medium`; ambient_air_intake; actual exchanges required by `refine_test_usable_returns`; actual exchanges required by `refine_test_releases` | Choose actual evidenced external product supply or onsite atmospheric elementary intake for each medium quantity, with compressor service/energy once. Pair disposition and substance/medium identity; real usable product returns have custody and burden evidence, whereas provider-internal cylinder residual is no second output. | omegaflex-tracpipe-2026 |
| `atomization_compatible_fittings_complete` | `compatible_fittings_fitting`; `compatible_fittings_transition`; `compatible_fittings_termination_mount`; `compatible_fittings_end_cap` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_compatible_fittings` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_support_protection_complete` | `support_protection_support`; `support_protection_strike_plate`; `support_protection_sleeve`; `support_protection_conduit` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_support_protection` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_bonding_materials_complete` | `bonding_materials_clamp`; `bonding_materials_conductor`; `bonding_materials_connector` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_bonding_materials` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_assembly_consumables_complete` | `assembly_consumables_thread_sealant`; `assembly_consumables_jacket_repair_tape`; `assembly_consumables_cutter_blade`; `assembly_consumables_cutter_wheel` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_assembly_consumables` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_assembly_provision_complete` | `assembly_provision_cutting`; `assembly_provision_access`; `assembly_provision_delivery`; `assembly_provision_crew_transport` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_assembly_provision` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_usable_returns_complete` | `usable_returns_csst` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_usable_returns` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_assembly_waste_complete` | `assembly_waste_csst` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_assembly_waste` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_assembly_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_assembly_releases` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_test_medium_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_test_medium` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_leak_solution_complete` | `leak_solution_purchased_formulation` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_leak_solution` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_test_usable_returns_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_test_usable_returns` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_test_waste_complete` | `test_waste_washwater`; `test_waste_loose_leak_residue`; `test_waste_wipe` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_test_waste` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `atomization_test_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_test_releases` with actual records; unresolved required expansion blocks the dataset. | `omegaflex-tracpipe-2026` |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections after concrete exchange verification |
| allowed_use | Declared indoor AR-CSST natural-gas branch rough-in configuration at isolated accepted gate with complete measured provision and scope |
| excluded_use | Live gas supply/purge/appliance commissioning; underground/external networks; yellow-jacket mixed systems; heating/ventilation equipment; whole-building operational gas performance; unconstrained per-metre comparison |
| required_metadata | All required reference qualifiers, route and component IDs, supply/host boundaries, actual jurisdiction/version, test/inspection/bonding acceptance, custody, provider/shared allocation and physical denominator |
| required_quality_disclosure | Measured versus allocated/modelled quantities, source coverage, conditional-card omissions with evidence, uncertainty/balance residuals, unresolved identities/supports and remaining commissioning scope |
| update_trigger | Changed route/configuration/system or fitting instruction, jurisdiction/design/test protocol, supply identity, service coverage, actual evidence or verified UUID |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version3.0 explanatory notes, 30June2025, printed295: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Gas-fitting installation category and heating/ventilation exclusions; narrower semantic boundary |
| omegaflex-tracpipe-2026 | handbook | OmegaFlex, TracPipe System Flexible Gas Piping Design Guide & Installation Instructions, FGP-001US07/26 July2026, cover/brand update and sections1.0,4.1-4.4,4.10,5.1-5.3,6.0-6.1: https://tracpipe.com/wp-content/uploads/FGP-001US-DI-USA-Guide-Rev-0425-with-LINKS-1.pdf | Qualified compatible assembly, cutting/fitting/protection/bonding, rough-in pressure-test/inspection, correction, compatible leak solution and rinse/dry; actual version is July2026 despite retained URL filename |
