---
pcr_id: pcr.constructions-and-construction-services.construction-services.lift-and-escalator-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Screw-driven vertical platform lift installation and acceptance services

## 1. Scope and Applicability

This PCR covers first installation and acceptance of one fixed, unenclosed, two-landing ACME screw-driven wheelchair vertical-platform lift in a documented self-supporting-width configuration. The authorized mechanic integrates the supplied tower/platform with the ramp, guards, landing gate, controls, interlocks, anchors and declared final electrical connection. The accepted installation is the output; later passenger journeys and maintenance are outside this construction-stage service. It is suitable for indoor or outdoor projects only where the actual model and jurisdiction permit.

Exclude hydraulic or traction lifts, escalators and travelators, mobile lifts, wide wall-supported configurations, factory enclosures, constructed hoistways and pits, onsite lift manufacture, general building construction and subsequent routine operation. Required job-specific concrete pad and dedicated supply preparation must be explicitly owned and quantified upstream; their new construction cannot be treated as an unburdened existing host. If no accepted bounded preparatory handoff exists, include that preparation in the foreground package with measured work and appropriate additional processes before using this PCR. The route must fail applicability if its actual support/configuration requires an excluded structure. [`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.lift-and-escalator-installation-services |
| classification_refs | CPC 3.0 54691; narrower scope than all lift/escalator installation |
| covered_products | Fixed unenclosed two-landing self-supporting-width screw-platform lift installation, commissioned at declared pad and dedicated supply interfaces |
| excluded_products | Hydraulic/traction equipment; escalators/travelators; mobile/enclosed/pit/hoistway or wide wall-supported configurations; later lift operation or maintenance |
| representative_product | Savaria Multilift standard unenclosed fixed screw-drive configuration, qualified against actual current site-specific drawings |
| production_route | Factory kit receipt; interface acceptance; authorized site assembly/anchoring/final connection; commissioning, correction/retest and inspection; owner handover |
| market_state | Completed accepted installation service at its documented first commissioning gate; not a sold generic machine or passenger transport |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete accepted fixed unenclosed two-landing screw-driven wheelchair vertical-platform lift installation |
| How much | 1 Item(s) |
| How well | Actual manufacturer/model/serial and drawing revision; verified self-supporting width, travel, rated load and access arrangement; pad/anchor/fascia/gate and dedicated supply interfaces accepted; authorized commissioning and required jurisdiction inspection passed; corrections closed |
| How long or cycle | One first-installation job from job-attributable receipt/mobilization and preparatory handoffs through signed handover, including delays, corrections and retests. Reusable equipment is attributed over documented complete-life periods across this and other jobs; no assumed lift operating lifetime or passenger cycle count. |
| reference_flow_link | `accepted_lift_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted fixed unenclosed two-landing screw-driven wheelchair vertical-platform lift installation |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Manufacturer/model/serial; actual site-specific drawing and authorized instruction revisions; jurisdiction and approval; self-supporting width; travel/rated load/access; platform/ramp/guards and gate/interlock schedule; pad/foundation/anchor/fascia interfaces; supply endpoint/electrical ratings and connection owner; kit bill of supply; actual commissioning/inspection criteria and results; handover date/installer; upstream preparation ownership; asset attribution periods |

Count identifies the accepted job and its configuration. It does not make installations with different travel, access, foundation, supply or safety requirements equivalent. Planning and owner documents are route evidence, not substitutes for current authorized site-specific installation and test instructions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One accepted complete installation is 1 Item(s); collect cp_acceptance. Unaccepted assemblies and repeated tests are not additional accepted outputs. |
| `preserve_physical_units` | all inventory rows | Actual exchange-specific property | Actual physical unit | Keep electricity in kWh, freight in tkm, asset use in h, and each material in its measured kg or verified count. Verify the compatible property/unit-group chain for every final concrete exchange; missing support is a disclosed gap, never a conversion to item count. |
| `configuration_and_test_units` | cp_acceptance; cp_interfaces | Actual recorded characteristic | Actual unit and tolerance | Record geometry/travel in stated mm or m, load in stated kg, electrical quantities in V/A/Hz, alignment/anchor and test requirements in their authorized units, durations in h or min, with actual tolerances and acceptance source. Do not apply nominal planning dimensions, power ratings or cycle limits as universal settings. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-made screw-lift kit delivered for the accepted job; actual concrete pad and dedicated electrical supply termination with named providers, quantities, approval and separate bounded upstream datasets where newly constructed |
| starting_condition_role | Purchased equipment and explicitly owned upstream preparatory services; an accepted existing pad/supply may be an existing host only with evidence of pre-existence and actual attribution disclosure |
| product_classification_scope | Installation of the selected screw-platform route, narrower than the CPC installation leaf |
| recursive_input_rule | A purchased service in this same installation category must have a nonoverlapping supplier gate and explicit burden coverage. Do not recursively add a complete installation service as an input to its own complete output. |
| upstream_dataset_requirement | Link the complete kit and each actual extra component, pad/supply work and bounded equipment/freight provision to compatible upstream datasets. Any supplier-included service/material/packaging or capital burden has one owner only. New pad/supply construction needs measured provider scope; absence blocks completeness. |
| disclosure | Declare pad and electrical handoff endpoints and responsibility, pre-existing versus new work, actual drawings and permits, kit composition, all equipment/provider coverage and complete-life periods, excluded passenger service/maintenance and remaining site responsibilities. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers first installation and acceptance of one fixed, unenclosed, two-landing ACME screw-driven wheelchair vertical-platform lift in a documented self-supporting-width configuration. The authorized mechanic integrates the supplied tower/platform with the ramp, guards, landing gate, controls, interlocks, anchors and declared final electrical connection. The accepted installation is the output; later passenger journeys and maintenance are outside this construction-stage service. It is suitable for indoor or outdoor projects only where the actual model and jurisdiction permit. Exclude hydraulic or traction lifts, escalators and travelators, mobile lifts, wide wall-supported configurations, factory enclosures, constructed hoistways and pits, onsite lift manufacture, general building construction and subsequent routine operation. Required job-specific concrete pad and dedicated supply preparation must be explicitly owned and quantified upstream; their new construction cannot be treated as an unburdened existing host. If no accepted bounded preparatory handoff exists, include that preparation in the foreground package with measured work and appropriate additional processes before using this PCR. The route must fail applicability if its actual support/configuration requires an excluded structure. [`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`] | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `installation_gate` | lift_installation | Include authorized alignment/anchoring, platform/ramp/guards, job-required landing gate and controls/interlocks, fascia/pinch-point protection, final connection, commissioning electricity, required functional/safety checks, jurisdiction inspection, correction/retest and owner records/training. The actual authorized instructions and inspector acceptance define tests and pass limits; owner-use descriptions alone are not a complete commissioning protocol. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `preparatory_work_owner` | pad_work; supply_work | Record job-specific foundation/pad and dedicated electrical preparation as separate upstream accepted services with provider, measured quantities, exact endpoints and gate. Include their upstream burdens once. Existing host treatment requires positive pre-existence evidence; new work with no bounded owner must be brought into foreground measured scope, not omitted. Exclude arbitrary whole-building burdens. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `kit_and_extras` | factory_lift_kit; `anchors_anchor`; `connection_components_fascia`; `connection_components_gate`; `connection_components_lock`; `connection_components_control`; `connection_components_cable`; `connection_components_conduit`; `connection_components_connector`; `consumables_lubricant`; `consumables_cleaner` | Reconcile the actual factory bill of supply: tower/screw/motor/platform, ramp/guards/underpan, gates/controls/interlocks/options and factory lubricant belong to the kit where supplied. Add only separately supplied anchors, fascia/gate parts, wiring/connection components and actual extra lubricant/cleaner. No hydraulic oil is implied by screw drive. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `asset_periods` | `equipment_provision_lifting`; `equipment_provision_access`; `equipment_provision_testing` | Identify each reusable lifting/access/installation/test asset and its owner, consuming jobs/nodes and reporting periods. Account for production, deployment/use, maintenance/replacement and eventual removal/end of life through an actual bounded provider dataset or documented complete-life attribution. Explicitly cover omitted provider phases separately; a hire-hour invoice alone cannot erase capital burdens. |  |
| `physical_custody` | all inventory rows | Inventory gross job receipts and issues by actual identity, real outward usable returns, retained closing stock with carried-forward burden, waste and characterized releases. Closing stock is a balance state, not an outward product. Expand each variable card into zero, one or multiple real identities; never sum unlike materials, services or pollutants as one flow. | |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `lift_installation` | Fixed screw-platform lift assembly, connection and commissioning | required | Actual fixed unenclosed two-landing self-supporting-width route and accepted pad/supply handoffs; authorized installation and actual commissioning requirements available | Independent assembly/integration of kit, anchoring and connection roles into one accepted commissioned installation. Receipt/document checks remain inside this node. Nonconforming assemblies loop here for correction/retest or leave by actual return/waste custody; failed states are never accepted output. | 1 Item(s) accepted installation |


### Process: Fixed screw-platform lift assembly, connection and commissioning (`lift_installation`)

#### Inputs

##### Product flows

###### Complete factory screw-driven wheelchair platform-lift kit at job supply gate (`factory_lift_kit`)

The actual complete kit crosses the job boundary from its supplier. Identify model/serial/options and the bill of supply; independently supplied extras are separate. It is not raw metal, a hydraulic elevator or a lift operating service. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Selected flow: Complete factory screw-driven wheelchair platform-lift kit at job supply gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record gross kits supplied and actually issued to this job by configuration, including replacements; reconcile real returned kits and closing stock without netting returns twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Obtain job kit/replacement/return records by serial and complete-kit boundary; 1 accepted installation does not prove exactly 1 gross kit was consumed.

###### Separately supplied compatible platform-lift anchor (`anchors_anchor`)

Record only this independently identified separately supplied compatible platform-lift anchor at its actual state and supply or receiving gate. Actual approved separately supplied anchor SKU outside complete factory lift kit; includes its supplied integral parts once. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible platform-lift anchor
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied lift fascia panel (`connection_components_fascia`)

Record only this independently identified separately supplied lift fascia panel at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied lift fascia panel
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied lift gate assembly (`connection_components_gate`)

Record only this independently identified separately supplied lift gate assembly at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied lift gate assembly
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied lift lock assembly (`connection_components_lock`)

Record only this independently identified separately supplied lift lock assembly at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied lift lock assembly
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied lift control assembly (`connection_components_control`)

Record only this independently identified separately supplied lift control assembly at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied lift control assembly
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied lift connection cable (`connection_components_cable`)

Record only this independently identified separately supplied lift connection cable at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied lift connection cable
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied lift cable conduit (`connection_components_conduit`)

Record only this independently identified separately supplied lift cable conduit at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied lift cable conduit
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied lift connection connector (`connection_components_connector`)

Record only this independently identified separately supplied lift connection connector at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied lift connection connector
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied installation lubricant formulation (`consumables_lubricant`)

Record only this independently identified separately supplied installation lubricant formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied installation lubricant formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied installation cleaning formulation (`consumables_cleaner`)

Record only this independently identified separately supplied installation cleaning formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied installation cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately attributable lift wood packaging (`packaging_wood`)

Record only this independently identified actual separately attributable lift wood packaging at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual separately attributable lift wood packaging
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately attributable lift cardboard packaging (`packaging_cardboard`)

Record only this independently identified actual separately attributable lift cardboard packaging at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual separately attributable lift cardboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately attributable lift plastic packaging (`packaging_plastic`)

Record only this independently identified actual separately attributable lift plastic packaging at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual separately attributable lift plastic packaging
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Accepted job-specific concrete pad preparation service (`pad_work`)

Use only for a real separately owned new or modified pad handoff, not a documentation mirror. The provider service includes measured actual excavation/subbase/reinforcement/concrete/insulation where required, plant, waste and acceptance to the job-defined boundary. Pre-existing pad evidence is recorded without pretending new work is free. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Selected flow: Accepted job-specific concrete pad preparation service
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record actual attributable accepted bounded pad-work service quantity and underlying measured work; zero new work requires pre-existence evidence. If no adequate upstream handoff exists, model measured preparatory work explicitly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_interfaces`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Actual foundation design, provider work quantities and accepted interface are needed; nominal outdoor slab drawings are not a universal volume/mass range.

###### Accepted job-specific dedicated electrical supply preparation service (`supply_work`)

Use only for the separately owned upstream dedicated supply/disconnect/termination preparation with defined endpoint; in-scope final lift connection remains the installation responsibility. New cable/duct/protection work and its plant/waste cannot disappear. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Selected flow: Accepted job-specific dedicated electrical supply preparation service
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record actual accepted supply-work service and underlying measured cable/protection/route quantities, identifying final connection ownership; zero new work needs existing-interface evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_interfaces`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: Require actual electrical design and measured provider bill of work; conflicting nominal public ratings cannot establish the actual service quantity or rating.

###### Complete installation-lifting equipment service (`equipment_provision_lifting`)

Record only this independently identified complete installation-lifting equipment service at its actual state and supply or receiving gate. Actual exact lifting equipment/provider with lifecycle-complete h reference or evidenced compatible whole-life-per-hour service. Whole kit not passenger operation. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `asset_share`; retain the explicit original formula below.

- Selected flow: Complete installation-lifting equipment service
- Flow property / unit: Duration / h
- Amount rule: For this exact actual lifting, access or test equipment function, final exchange quantity h per reference flow = independently recorded job service hours / accepted_count for the same accepted lift configuration. Activate only a compatible complete-life service referenced to h. For an owned-resource per-hour view, matching upstream burden per h = complete-life burden / evidenced total service hours across all consumers and periods; multiplying by this job h share gives the original whole-life attribution exactly once. Do not multiply the h quantity by a whole-asset fraction again or combine this service view with a Count asset-equivalent view. Record provider energy and maintenance inclusions before separate charges.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete installation work-access equipment service (`equipment_provision_access`)

Record only this independently identified complete installation work-access equipment service at its actual state and supply or receiving gate. Actual exact access equipment service with compatible complete-life h reference and all-consumer scope. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `asset_share`; retain the explicit original formula below.

- Selected flow: Complete installation work-access equipment service
- Flow property / unit: Duration / h
- Amount rule: For this exact actual lifting, access or test equipment function, final exchange quantity h per reference flow = independently recorded job service hours / accepted_count for the same accepted lift configuration. Activate only a compatible complete-life service referenced to h. For an owned-resource per-hour view, matching upstream burden per h = complete-life burden / evidenced total service hours across all consumers and periods; multiplying by this job h share gives the original whole-life attribution exactly once. Do not multiply the h quantity by a whole-asset fraction again or combine this service view with a Count asset-equivalent view. Record provider energy and maintenance inclusions before separate charges.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete lift-commissioning test-equipment service (`equipment_provision_testing`)

Record only this independently identified complete lift-commissioning test-equipment service at its actual state and supply or receiving gate. Actual exact test equipment with compatible complete-life h reference, original/corrective tests inside gate. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `asset_share`; retain the explicit original formula below.

- Selected flow: Complete lift-commissioning test-equipment service
- Flow property / unit: Duration / h
- Amount rule: For this exact actual lifting, access or test equipment function, final exchange quantity h per reference flow = independently recorded job service hours / accepted_count for the same accepted lift configuration. Activate only a compatible complete-life service referenced to h. For an owned-resource per-hour view, matching upstream burden per h = complete-life burden / evidenced total service hours across all consumers and periods; multiplying by this job h share gives the original whole-life attribution exactly once. Do not multiply the h quantity by a whole-asset fraction again or combine this service view with a Count asset-equivalent view. Record provider energy and maintenance inclusions before separate charges.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual job-attributable inbound and return freight services (`freight`)

Expand actual freight legs/provider/mode by transported kit, material or residual/return custody. Include mobilization/demobilization where not already included in equipment or supplier provision.

- Selected flow: Actual job-attributable inbound and return freight services
- Flow property / unit: mass*distance / t*km
- Amount rule: Use actual load tonnes and travelled km for each leg, accounting for actual shared-load/return allocation and supplier inclusion; keep tkm service units and verification gaps explicit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_logistics`

Range evidence need: Need actual dispatch mass, route distance, mode/load allocation and return trips; no universal travel distance or empty-return factor.

###### Installation and commissioning electricity supplied to the job (`electricity`)

Separately meter actual lift commissioning/test electricity, tool charging and electrically powered handling where in scope. Keep later passenger operation outside; avoid charges already included by a bounded provider.

- Selected flow: Installation and commissioning electricity supplied to the job
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable kWh from job meters/submeters or documented actual equipment runtime and measured demand, including failed tests and retests; disaggregate circuits and provider coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter/charging/test logs and metering uncertainty; motor nameplate power and advertised installation duration are not a consumption range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fixed unenclosed two-landing screw-driven wheelchair vertical-platform lift installation (`accepted_lift_installation`)

The true final service crosses to the owner only after the authorized installer accepts assembly/anchoring/interfaces, actual safety and functional commissioning and required jurisdiction inspection pass, all corrections/retests close, and records/training/maintenance duties are handed over. Lift acceptance alone does not establish whole-building accessibility compliance. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols.

- Selected flow: Accepted fixed unenclosed two-landing screw-driven wheelchair vertical-platform lift installation
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

Range evidence need: The exact amount defines the reference unit, not an empirical yield range. Collect actual accepted job count, configuration and signed commissioning/inspection/handover records; no default failure rate.

###### Usable complete factory screw-driven lift kit returned outward (`usable_kit_return_kit`)

Record only this independently identified usable complete factory screw-driven lift kit returned outward at its actual state and supply or receiving gate. Only actual complete original counted kit accepted outward by supplier/custodian, matching SKU/Item(s); internal correction and closing stock not exits. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable complete factory screw-driven lift kit returned outward
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count only the actual outward transfer of this complete usable product in Item(s), accepted by its named recipient at the documented handover. Match the original supplied SKU/configuration, usable state and selected Count/Item(s) reference; retain receipt/return IDs and upstream burden custody without a second return deduction. Closing stock, internal correction and discarded waste do not enter this product quantity. Normalize the attributable outward count once by the original accepted-service denominator; kg is an auxiliary measurement, not a second exchanged view.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_custody`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `accepted_job_burdens` | lift_installation | Attribute direct installation, replacement/correction and failed/repeated-test burdens to the accepted job. Do not produce an accepted output until defects and required inspections close. A terminated/unaccepted job retains a separately disclosed failed-job disposition; it is never silently discarded or counted as a second accepted service. | |
| `asset_complete_life_attribution` | `equipment_provision_lifting`; `equipment_provision_access`; `equipment_provision_testing` | For each shared reusable asset enumerate production/acquisition, deployment/use, maintenance/replacement and removal/end-of-life phases, all consuming jobs/nodes and reporting periods. Prefer actual service-meter hours as the causal allocation basis; justify another basis where hours do not represent wear/service. Reconcile attributed shares over the complete service denominator, record period-specific decisions and uncertainty, and avoid multiplying a full-life burden once in each year. Unresolved replacement or termination coverage blocks finalization. |  |
| `provider_and_energy_ownership` | all inputs | Reconcile provider coverage with direct material/energy/freight/asset rows. One supplied kit or bounded service cannot carry the same component, tool energy, packaging or capital burden a second time. Pad and supply burdens use the actual bounded handoff quantity with no unrelated whole-building allocation. | |
| `returns_and_recovery` | `usable_kit_return_kit`; actual exchanges required by `refine_usable_material_return`; actual exchanges required by `refine_installation_waste` | Use actual gross physical custody and consistent burden transfer. Retained stock carries disclosed burden forward and is not an output. Usable outward returns transfer their recorded burden once; waste follows its real treatment. Retain installation/correction/test burdens on this job; no automatic displaced-production/recycling credit or arbitrary negative input. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | lift_installation | Kit, actual extras, consumables and packaging | receipt/issue/weighing | job_id; date; supplier; identity; serial; specification; supplied_state; kit_inclusion; gross_receipt; actual_issue; installed_quantity; return_quantity; closing_stock; unit; measurement_uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile supplier bill of supply and serials with gross receipts, job issues, calibrated weighing or traceable supplier masses for each distinct identity. Retain closing stock with its burden owner. Normalize only job-attributable quantities by accepted installation count of the same configuration. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); kg | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Invoices, calibrated scale records/supplier masses, drawings, signed job issue/custody reconciliation; no mixed-identity sum |
| cp_interfaces | lift_installation | Pad and dedicated electrical preparatory handoffs | design/quantity/acceptance | job_id; interface_id; provider; owner; existing_or_new; boundary_endpoint; drawing_revision; measured_work; quantity; unit; electrical_rating; tolerance; acceptance_source; acceptance_result; final_connection_owner; upstream_dataset_coverage | Verify actual foundation/supply design and completed work at exact endpoints; record physical work quantities and separately owned upstream dataset coverage. Existing host needs pre-existence evidence. Normalize real job-specific services by accepted installation count; do not replace missing new works with zero. | Actual mm; m; m3; kg; V; A; Hz; service Item(s) | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Approved current site-specific drawings, concrete/pad/anchor and electrical signoff, measured bills of work, provider scope and boundary check |
| cp_assets | lift_installation | Reusable equipment complete-life shares | asset/service/period ledger | job_id; asset_id; owner; provider_scope; phase; period_id; consuming_job; consuming_node; use_hours; total_service_hours; replacement_event; termination_event; capital_burden; excluded_coverage; attribution_basis; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Record actual asset-use hours for installation/lifting/access/test apparatus and all relevant consuming jobs/periods; verify production, use, replacements and eventual removal coverage. Apply documented complete-life service share with period-specific ownership, then divide job-attributed burden by accepted job count. A provider gap needs separately accounted coverage. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h; actual upstream burden units | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Meter/logbooks, provider boundaries, complete-life register, replacement/end-of-life evidence, share reconciliation and uncertainty |
| cp_logistics | lift_installation | Real freight legs and mobilization | dispatch/route records | job_id; leg_id; provider; mode; origin; destination; load_identity; load_mass_t; distance_km; shared_load_basis; return_custody; supplier_included; allocation_uncertainty | Use actual dispatch masses and route km for each leg, including real return/mobilization legs. Attribute shared load using documented causal share and check supplier/provider inclusion; divide attributable tkm by accepted installation count. | t; km; tkm | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Waybills, measured mass, route evidence, provider coverage and no double counted return leg |
| cp_energy | lift_installation | Commissioning, tool and handling energy/fuel | meter/fuel records | job_id; date; equipment_or_circuit; task; test_id; failed_or_repeat; meter_start; meter_end; runtime_h; measured_demand_kW; fuel_identity; fuel_mass_kg; fuel_volume; fuel_volume_unit; density; density_unit; temperature; temperature_unit; unit; provider_inclusion; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; fuel_opening_kg; fuel_receipts_kg; fuel_closing_kg; fuel_usable_outward_return_kg; fuel_unburned_waste_kg; whole_uncontained_fuel_kg; fuel_supplied_attributed_kg; fuel_burned_kg; unexplained_fuel_difference_kg; fuel_measurement_basis; fuel_ledger_id | Submeter commissioning and tool/handling circuits or document actual runtime with measured demand. Keep later passenger use outside. Reconcile measured actual fuel and any evidenced same-state density conversion; retain unused/returned fuel separately in the fuel ledger, outside actual exchanges required by `refine_usable_material_return`, include correction/retest and exclude covered provider energy; divide job-attributable amounts by accepted count. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. Preserve the legacy fuel_mass_kg observation with its declared fuel_measurement_basis; do not silently equate it to supply or burn. In a bounded mass ledger, S = fuel_opening_kg + fuel_receipts_kg - fuel_closing_kg - fuel_usable_outward_return_kg is attributable upstream supply and retains nonreturned unburned waste/releases; B is independently measured burn or S minus all evidenced disjoint unburned fates. Unknown fate/unexplained difference remains a gap, not presumed B. Link fuel_ledger_id and count the actual provider boundary once. | kWh; kg; actual source volume unit | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Meter calibration/readings, test/task timestamps, fuel record/density evidence, uncertainty and circuit/provider scope |
| cp_acceptance | lift_installation | Actual final accepted service gate | installation/test/inspection/handover | job_id; model; serial; configuration; drawing_revision; authorized_instruction_revision; jurisdiction; installer_authorization; travel; platform_width; geometry_unit; rated_load; load_unit; supply_voltage_V; supply_current_A; supply_frequency_Hz; geometry_tolerance; load_tolerance; supply_tolerance; tolerance_source; pad_anchor_fascia_signoff; gate_interlock_guard_record; test_method; test_load; test_load_unit; test_duration; test_duration_unit; test_tolerance; pass_limit_source; actual_result; defect_id; correction; retest_result; inspection; owner_handover; accepted_count | Authorized mechanic records the actual installation, configured safety functions and authorized test protocol/results with all applicable units/tolerances; retain required inspector acceptance, defect closure, owner instruction/records and future maintenance responsibility. Count only signed accepted jobs matching this scope, then normalize to 1 Item(s). | Item(s); actual test/geometry/electrical units | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Authorization, current job drawings/instructions, signed tests and required inspection, corrected defect records and owner handover |
| cp_custody | lift_installation | Usable returns, closing stock and waste | transfer/stock/disposal | job_id; source_identity; source_receipt; defect_id; correction_task; disposition; usability; recipient; transfer_id; gross_outward_quantity; closing_stock_quantity; carried_burden_owner; waste_class; treatment; unit; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Weigh/count real outward returns and waste by actual identity and custody document; distinguish internal rework and retained stock. Reconcile gross receipt with installed use, actual outward return, waste and closing stock. Normalize attributed outward quantities by accepted installation count; retain burden-transfer method. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); kg | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Signed return/usability acceptance, weights, closing-stock ledger, waste carrier/treatment record and defect linkage |
| cp_releases | lift_installation | Actual species and receiving compartment | monitoring or task-specific factor | job_id; task; substance_or_particle_class; receiving_compartment; activity; activity_unit; factor_source; factor_unit; captured_fraction; release_mass_kg; uncertainty; zero_screen_evidence; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; fuel_ledger_id; fuel_burned_kg; species_factor_activity_basis; species_factor_composition_scope | Screen actual tasks first; characterize each real pollutant/medium and measure kg or apply a supported task-specific substance factor to measured activity. Record capture and avoid treating collected waste as emitted. Normalize attributable release by accepted count; unknown identity remains a gap. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. For a direct fuel-species factor based on fuel actually burned, link B=fuel_burned_kg from the same actual fuel_ledger_id, not S or an unexplained stock difference. Use the factor activity unit and its included composition/oxidation scope once; independently measured species need no second fuel-factor or composition multiplier. Other actual activity-based methods retain their declared activity basis and applicability. Exclude provider-covered releases. | kg; actual factor/activity units | Each event/reading and job closeout | Complete first-installation job including corrections/retests; asset histories span all relevant periods | Actual installation site and named upstream providers/assets | per reference flow | Monitoring/calibration or traceable factor with applicability, species/compartment/capture evidence and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `job_normalization` | all inventory rows | For each actual identity, divide its documented job-attributable physical amount or burden by the number of accepted installations with the same configuration; keep gross receipts, outward returns, waste and closing stock independently reconciled. The final reference output is 1 Item(s). | Actual records; accepted_count; cp_acceptance | Amount per reference flow | |
| `asset_share` | `equipment_provision_lifting`; `equipment_provision_access`; `equipment_provision_testing` | Attribute the separately owned complete-life asset burden using this job actual service hours divided by evidenced total service hours across every consuming job and period; reconcile shares and phases, then normalize to the accepted installation. Justify and disclose any alternate causal basis. | cp_assets; actual phase burdens; complete-life service denominator | Job-attributed asset burden per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_identity` | reference output and kit | Verify fixed/unenclosed/two-landing ACME screw route and self-supporting width against actual model/site drawings; nominal public guide and conflicting public ratings are not actual design acceptance. | Current authorized job drawing, model/serial, bill of supply, jurisdiction and installer authorization |
| `quantity_and_custody` | all inventory rows | Preserve actual physical units, measurement method/calibration and uncertainty, receipt/issue/return/stock/waste balances by identity; zero needs positive evidence. Missing value or Range evidence is a data gap, not zero. | Linked protocols and complete job ledger |
| `asset_and_provider_coverage` | assets; pad; supply; freight; energy | Audit single ownership and all relevant phases/periods; disclose service denominator, replacements/termination and gaps, no twice-counted supplier coverage. | Provider scope and measured interfaces; full-life asset/custody reconciliation |
| `acceptance_and_temporal_coverage` | accepted_lift_installation | Cover receipt/mobilization through correction/retest/inspection/handover dates; no unresolved defects in accepted count and no later passenger energy or maintenance. | Signed cp_acceptance and aligned task/test records |
| `concrete_identity_and_ranges` | all exchange cards | Resolve each actual exchange to a verified concrete UUID and compatible support chain before final TIDAS production; retain configuration/provider/geography/state and measurement fit. Collect the card-specific Range evidence needs; this candidate supplies no generic material/energy/lifetime defaults. | Actual flow detail/support evidence; metered/weight/task data and uncertainty |
| `refine_anchors` | `anchors_anchor` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual separately supplied anchors/fixings join the self-supporting base to the accepted pad. Expand by actual material, anchor specification and supplied state; omit components already included in the kit. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols. Range evidence need: Actual anchor schedule, component masses and issue/replacement records are required; planning anchor layouts supply no universal kg or count factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual fixing functions, material/specification/SKUs or real complete separately bought anchor sets need their own complete supply identity/oneunit and independent quantity; no invented anchor kit. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_connection_components` | `connection_components_fascia`; `connection_components_gate`; `connection_components_lock`; `connection_components_control`; `connection_components_cable`; `connection_components_conduit`; `connection_components_connector` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand the actual separate fascia panels, gate/lock/control parts, cable/conduit/connectors and final connection hardware by distinct material/product identity and state. These form one role family, not one aggregate material flow. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols. Range evidence need: Require actual drawings, bill of supply and component masses; no common mass range or mixed-material sum is valid. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual further final-connection hardware/functions/SKUs require own identities and quantities; complete kit/gate/control packets include internal constituents once. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_consumables` | `consumables_lubricant`; `consumables_cleaner` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Include only documented extra lubricant/cleaner or other joining consumable used before this handover. Expand actual formulations and concentrations; factory filling remains in the kit. A screw-driven route does not create a hydraulic-oil input. Manufacturer sources support the equipment/task/interface context only; quantities, gross custody and LCA attribution are established by the stated foreground protocols. Range evidence need: Actual authorized task, product composition and measured consumption/returns are needed; later scheduled grease use is outside this job. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other joining consumables need exact formulation/state/native unit; factory fill included in kit, screw drive no inferred hydraulic oil. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_packaging` | `packaging_wood`; `packaging_cardboard`; `packaging_plastic` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand actual wood/cardboard/plastic or reusable packaging by identity and ownership. Record physical packaging for custody balance; do not add another upstream material burden when supplier-kit coverage already includes it. Range evidence need: Need actual packaging receipt/weights, supplier inclusion and reuse records rather than a generic packaging fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual reusable containers/other mixed packaging or separately owned identities need exact custody/life-unit records; supplier-kit included manufacture physical audit only, no second burden. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_equipment_provision` | `equipment_provision_lifting`; `equipment_provision_access`; `equipment_provision_testing` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record each actual reusable apparatus separately with bounded provider coverage or owned complete-life production/use/replacement/removal attribution. Identify this installation and other consuming jobs/periods; do not include lifetime passenger-lift operation. Range evidence need: Need asset IDs, metered/logged hours, service-life records, replacement/end-of-life scope and uncertainty; no assumed lifetime, utilization or hire-hour burden factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual installation apparatus functions/models and true Count/other native references require exact independent refinement. For compatible owned per-hour view, use actual job h per accepted lift and complete-life burden per total evidenced service h once; do not apply whole-asset fraction again to h quantity. All consuming jobs/phases/periods, replacements/termination coverage and shared ownership retained. | `cp_assets`; actual independent records and identity/unit evidence |
| `refine_fuel` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional actual fuel for combustion equipment serving this job, expanded by supplied fuel identity and composition. No fuel is inferred merely from the presence of reusable equipment. This upstream product requirement records attributable supplied fuel, including nonreturned unburned waste or release, separately from actual fuel burned; unused/returned fuel is reconciled separately in the fuel ledger and is excluded from actual exchanges required by `refine_usable_material_return` so it cannot be counted twice. Range evidence need: Need actual equipment fuel records and conversion uncertainty, or evidenced zero combustion use; no generic diesel factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Each actual carrier/grade supply in one native unit, fuel ledger actual stock/usable return/outlets, nonreturned unburned waste/loss retains upstream supply burden; burned activity independently known, no inferred combustion from apparatus presence and no duplicate unused fuel return family. | `cp_energy`; actual independent records and identity/unit evidence |
| `refine_usable_kit_return` | `usable_kit_return_kit` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record real outward return to supplier/another identified custodian only for complete counted kits or traceable counted components with compatible identities. Internal correction/retest stays within lift_installation; closing stock never leaves as a fictitious product. Range evidence need: Need actual return authorization, physical transfer and product usability evidence; no assumed return fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual loose returned components require original supply/state/native-unit and carried-burden evidence; no Count return of a kg-supplied unchanged component. Independently new actual Count supplies require their own complete identity and registration, not a second kit-BOM purchase. | `cp_custody`; actual independent records and identity/unit evidence |
| `refine_usable_material_return` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand each actual usable surplus material/packaging identity and recipient. This product custody exit is separate from waste; rejected parts require documented usability before product classification. Consumed-fuel input uses its separate ledger; unused fuel is excluded from this return family. Range evidence need: Require actual weights and custody/quality acceptance; neither retained stock nor claimed avoided production supplies a return estimate. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual outward usable original product/SKU/native unit/recipient and upstream burden bridge; fuel governed separate ledger, closing stock/internal correction not product exit. | `cp_custody`; actual independent records and identity/unit evidence |
| `refine_installation_waste` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand discarded damaged components, offcuts, nonreturnable packaging and contaminated consumables by actual composition/hazard state and treatment destination. Rejected assembly state originates in lift_installation; record correction here or actual disposal exit, retaining its burdens. Range evidence need: Need waste weights, characterization, transfer/treatment records and actual reject dispositions; no fixed scrap or recovery yield. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual segregated solid waste, contaminated carriers, packaging, failed/new and historic origins by independent dispatch; retain native-volume effluent separately when it occurs. | `cp_custody`; actual independent records and identity/unit evidence |
| `refine_direct_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Only actual releases across the environment boundary belong here, each expanded by substance/species or particle class and receiving air/water/soil compartment. Captured drilling dust or spent cleaner sent offsite is waste. No hydraulic leak, generic VOC sum or upstream electricity emission is presumed. Range evidence need: Need task-specific monitoring or supported species/compartment factors and measured activity; unknown pollution identity is a collection gap rather than a broad flow UUID. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_releases`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_fit` | reference product | Reject routes requiring hydraulic/traction/mobile/enclosed/hoistway/pit or wide wall-supported treatment. Check actual project route, current authorized drawings and support/supply interfaces before producing a dataset. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `gate_complete` | accepted_lift_installation | Require authorized installer, accepted pad/supply/anchor/fascia/guard/gate/interlock configuration, actual safety/functional test and required jurisdiction inspection records, closed corrections/retests and signed owner handover. Missing commissioning criteria or an unresolved defect blocks accepted output; no claim of whole-building accessibility compliance. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `units_balance_identity` | all inventory rows | Verify 1 Item(s) final output and identical reference denominator; linked node-specific protocols, physical units and compatible support chain; each actual component/provider/waste/pollutant identity; gross balances with real returns and non-output closing stock. No fixed UUID based only on name similarity. | |
| `shared_period_and_rework` | `equipment_provision_lifting`; `equipment_provision_access`; `equipment_provision_testing`; actual exchanges required by `refine_installation_waste` | Require all shared consuming jobs/nodes and periods, complete-life phase coverage, actual denominator and single ownership. Unresolved replacement/termination/coverage blocks finalization. Link rejected assemblies to lift_installation correction/retest or actual usable return/waste exit, retaining their burdens and excluding rejects from accepted output. |  |
| `boundary_completeness` | pad_work; supply_work; all inputs | Require measured newly constructed pad/supply work with explicit bounded owner or inclusion, evidence for existing-host zero new work, kit-vs-extra reconciliation and no duplicate provider/material/energy/packaging/freight burdens. Disclose every unavailable quantity, Range and identity; absence is not zero. | |
| `atomization_anchors_complete` | `anchors_anchor` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_anchors` with actual records; unresolved required expansion blocks the dataset. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `atomization_connection_components_complete` | `connection_components_fascia`; `connection_components_gate`; `connection_components_lock`; `connection_components_control`; `connection_components_cable`; `connection_components_conduit`; `connection_components_connector` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_connection_components` with actual records; unresolved required expansion blocks the dataset. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `atomization_consumables_complete` | `consumables_lubricant`; `consumables_cleaner` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_consumables` with actual records; unresolved required expansion blocks the dataset. | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `atomization_packaging_complete` | `packaging_wood`; `packaging_cardboard`; `packaging_plastic` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_packaging` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_equipment_provision_complete` | `equipment_provision_lifting`; `equipment_provision_access`; `equipment_provision_testing` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_equipment_provision` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_fuel_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_fuel` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_usable_kit_return_complete` | `usable_kit_return_kit` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_usable_kit_return` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_usable_material_return_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_usable_material_return` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_installation_waste_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_installation_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_direct_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_direct_releases` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction-stage installation service package, with process/lifecyclemodel projections retaining the same actual interfaces and acceptance gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matching fixed unenclosed two-landing self-supporting-width screw-platform lift installation at its commissioned handover gate |
| excluded_use | Hydraulic/traction/escalator, mobile/enclosed/hoistway/pit/wall-supported route; whole-building accessibility certification; passenger transport, lifetime lift operation or maintenance |
| required_metadata | Reference qualifiers; model/serial/configuration; current authorized instruction/drawing revisions; actual permit/jurisdiction/test limits; dates; boundaries and owners; upstream kit/pad/supply/provider coverage; actual asset phases/periods and service denominator; custody/defect closure |
| required_quality_disclosure | Unresolved identities/supports and Range evidence, measured quantities/calibration/uncertainty, missing provider/capital or new-work coverage, rework/retest and waste/returns/stock balances; no finalization with unresolved material gaps |
| update_trigger | Changed model/configuration/drive or site interface; changed authorized drawing/instruction or jurisdiction; new supply/kit scope; measured activity or asset-life evidence; updated exact UUID/support verification |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations CPC 3.0 Explanatory Notes, 30 June 2025, printed p.296; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC lift/escalator installation scope; maintenance is a separate category |
| savaria-multilift-current | handbook | Savaria Multilift official product page, accessed 2026-10-16; https://www.savaria.com/wheelchair-lifts/products/multilift-vpl?lang=en | Current fixed screw route, concrete anchoring/fascia/electrical preparation and configuration distinctions; no default quantities |
| savaria-multilift-planning-2020 | handbook | Savaria Multilift Public Planning Guide, Part No.000790, 25-m08-2020, pp.3–9; https://files.savaria.com/wp-content/uploads/2026/01/Multilift-Public-Planning-Guide.pdf | Nominal-only guide and mandatory site-specific drawings; tower/platform/screw, self-supporting-width restriction, pad/anchor/landing gate interfaces; no universal design quantities |
| savaria-multilift-owner-2024 | handbook | Savaria Multilift Owner’s Manual, Part No.000609, 30-m01-2024, pp.2,6–9; https://files.savaria.com/wp-content/uploads/2026/01/Multilift-Owners-Manual.pdf | Authorized mechanic and installation records/owner responsibility, gates/underpan/emergency/lock operation; actual commissioning instructions must come from authorized job evidence |
