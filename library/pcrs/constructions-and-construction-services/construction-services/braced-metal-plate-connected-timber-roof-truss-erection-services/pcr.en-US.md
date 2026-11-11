---
pcr_id: pcr.braced-metal-plate-connected-timber-roof-truss-erection-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Braced metal-plate-connected timber roof-truss erection services

## 1. Scope and Applicability

This PCR covers first erection of a declared factory-made metal-plate-connected timber roof-truss set on accepted existing bearing structures. The output is the complete qualified erection-stage service: the specified trusses positioned and connected, required permanent individual-member restraints and bracing installed, and temporary system stability documented and retained where needed. It is neither one loose factory truss nor complete roof-building performance. CPC 3.0 54522 includes truss framing; this PCR covers a narrower timber-truss route, excluding stick framing and metal trusses (`un-cpc3-2025`).

The actual truss design drawings, placement documents, current jobsite package, accepted bearing interfaces and engineer-approved erection, temporary-stability and permanent-bracing plans are mandatory foreground evidence. SBCA's public 2023 article establishes the installation sequence; its numerical prescriptions are not universal design values. The current BCSI landing page identifies the revised 2025 edition; citing that page does not establish access to the full guide. Record the editions and applicability of instructions actually used (`sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages`).

Exclude factory manufacture; site cutting, notching or drilling of trusses; unapproved repairs; floor trusses; wall/bearing construction; roof sheathing, diaphragm construction, covering and waterproofing; MEP loading; building use and demolition. Suspect trusses are quarantined for manufacturer/engineer disposition. Authorized structural repair requires a separate reviewed boundary. Pre-sized specified braces and connectors are installed in this route; an independent site-fabrication operation requires boundary review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.braced-metal-plate-connected-timber-roof-truss-erection-services |
| classification_refs | CPC 3.0 54522 — Roof framing services; proposed narrower mapping |
| covered_products | First erection-stage service for the actual complete factory metal-plate-connected timber roof-truss set, including specified bearing connections and permanent individual-member restraints/braces, with documented temporary stability |
| excluded_products | Stick framing; steel or floor trusses; truss manufacture or modification; host construction; full roof/diaphragm or weatherproofing; building operation |
| representative_product | An identified roof-truss package delivered factory assembled, erected to its placement plan and handed over with all required braces and any necessary temporary restraint retained |
| production_route | Review actual current documents and host readiness; receive and inspect finished trusses; arrange lifting/access and temporary stability; place and anchor; install permanent restraints/braces; correct placement/fixings without truss modification; inspect and transfer responsibility |
| market_state | Site-specific completed erection-stage construction service; later diaphragm completion is separately declared and must not be assumed at this gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified first erection of the actual complete declared timber roof-truss set at the braced erection-stage handover |
| How much | 1 Item(s); one complete set/package, with every specified truss ID and layout declared |
| How well | Accepted bearings; specified truss locations, connections and permanent member bracing complete; no unresolved damage or unapproved alteration; temporary system stability and custody documented; signed inspection and handover |
| How long or cycle | One erection work package from receipt through signed erection-stage handover. Record erection dates, retained-bracing continuation until the later stability gate, replacements and removal events; no building service-life claim |
| reference_flow_link | `erected_roof_truss_set` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Braced timber roof-truss set erection-stage service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Project/site and set/package ID; truss IDs/count and factory supply gate; timber species/grade/treatment and design geometry; actual span/pitch/spacing/layout; bearing types/locations/connections; design and placement document revisions; applicable current jobsite instructions; engineer-approved lifting/temporary/permanent bracing plans; permanent member-bracing schedule; retained temporary supports and later diaphragm dependency; erection and continuation periods; inspection/defect closure; custody, later removal owner and burden allocation; geographic/temporal resource supply |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `counted_set_reference` | reference product | Number of items | Item(s) | One accepted complete set is 1 Item(s). Individual truss count is a qualifier and input quantity, never the reference set count; no conversion from roof area, timber mass or one truss is allowed without explicit set records. |
| `material_mass_evidence` | roof_trusses; `permanent_bracing_restraint`; `permanent_bracing_bracing`; `permanent_bracing_reinforcement`; `bearing_connectors_hanger`; `bearing_connectors_bearing_connection`; `transport_packaging_wrapping`; `transport_packaging_strap`; `transport_packaging_dunnage`; `reusable_returns_timber_bracing`; `reusable_returns_hanger`; `erection_waste_truss`; `erection_waste_timber_bracing` | Mass | kg | Retain actual counted pieces and material-specific measured/supplier net masses. Geometry does not supply timber density or moisture correction; any count-to-mass conversion needs actual configuration-specific records. Keep mixed materials and waste destinations separate. |
| `service_unit_evidence` | temporary_stability_service; `lifting_access_service_crane`; `lifting_access_service_hoisting`; `lifting_access_service_access`; logistics; installation_energy; actual exchanges required by `refine_direct_fuel` | Actual service property | h; t*km; kWh; kg | Preserve the measured service/fuel/energy units and provider boundary. Hours cannot replace fuel or asset manufacture. Any conversion requires the actual factor, unit and measured basis; never infer fuel from lift count or nominal capacity. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-complete identified timber trusses and specified installation components at their declared supply gate, with existing bearings accepted for the actual package and lifting access available |
| starting_condition_role | Foreground erection boundary; host readiness is a documented interface, not a zero-burden substitute for construction in a whole-building model |
| product_classification_scope | Narrower timber-truss erection subset of CPC 3.0 54522; separate from roof coverings under 54530 |
| recursive_input_rule | Record factory trusses as component products, not as this erection service. If a previously erected set or subcontracted erection service enters the package, disclose its completed scope and prevent repeating the same erection or resource burden; a relocation is outside first erection. |
| upstream_dataset_requirement | Use actual supply-gate truss/component and resource datasets with declared packaging, freight, energy and temporary-asset coverage. Include upstream manufacture through these inputs; do not recreate factory production in the site node. |
| disclosure | Declare supplied-kit coverage, excluded host/diaphragm work, physical state and responsibilities at the erection gate, all shared consumers and periods, and temporary-support production/use/removal coverage and later owner. Unresolved stability or service coverage blocks a completed dataset. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers first erection of a declared factory-made metal-plate-connected timber roof-truss set on accepted existing bearing structures. The output is the complete qualified erection-stage service: the specified trusses positioned and connected, required permanent individual-member restraints and bracing installed, and temporary system stability documented and retained where needed. It is neither one loose factory truss nor complete roof-building performance. CPC 3.0 54522 includes truss framing; this PCR covers a narrower timber-truss route, excluding stick framing and metal trusses (`un-cpc3-2025`). The actual truss design drawings, placement documents, current jobsite package, accepted bearing interfaces and engineer-approved erection, temporary-stability and permanent-bracing plans are mandatory foreground evidence. SBCA's public 2023 article establishes the installation sequence; its numerical prescriptions are not universal design values. The current BCSI landing page identifies the revised 2025 edition; citing that page does not establish access to the full guide. Record the editions and applicability of instructions actually used (`sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages`). Exclude factory manufacture; site cutting, notching or drilling of trusses; unapproved repairs; floor trusses; wall/bearing construction; roof sheathing, diaphragm construction, covering and waterproofing; MEP loading; building use and demolition. Suspect trusses are quarantined for manufacturer/engineer disposition. Authorized structural repair requires a separate reviewed boundary. Pre-sized specified braces and connectors are installed in this route; an independent site-fabrication operation requires boundary review. | `un-cpc3-2025`; `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `document_and_host_gate` | roof_truss_erection | Before erection, reconcile actual truss design/placement/jobsite documents, approved erection/bracing plans and accepted bearings; resolve conflicts through the responsible designer/manufacturer. Record project-specific applicability rather than importing public article dimensions or tolerances. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `erection_components` | roof_truss_erection | Own finished trusses, additional bearing fasteners/hangers, permanent brace/restraint members and their fixings, temporary-stability service, lifting/access, installation energy, freight, actual auxiliary consumption, packaging and correction losses. Identify which items are already in the supplied kit to avoid counting them twice. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `erection_gate` | erected_roof_truss_set | Handover requires every specified truss positioned, securely connected at its accepted bearings, required permanent individual-member restraints/bracing installed, closed inspection findings and signed responsibility transfer. This is an erection-stage gate; do not claim complete roof load, weather, fire or thermal performance. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `retained_temporary_stability` | temporary_stability_service | Where a later diaphragm is needed, retain required temporary restraint. Index erection, post-handover continuation, later stability confirmation and authorized removal/return; name custody and removal owner at each change. A bounded service must include or explicitly link asset production, installation, maintenance/use, replacement, removal, return transport and end-of-use treatment; it cannot erase these burdens. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `external_repair_boundary` | roof_truss_erection | Placement/connection corrections loop within this node with their full resource burdens. Damaged, unsuitable or altered trusses remain quarantined; return or characterize their waste exit. Cutting/notching/drilling trusses and structural repair are not admitted operations in this PCR. | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `resource_and_release_boundary` | roof_truss_erection | For crane, access, temporary bracing and freight, identify full provider coverage and every actual consumer/period, including other work packages. If the provider includes operation fuel/emissions, do not add the same operation again. For directly controlled equipment collect fuel, energy and characterized direct releases separately; no unmeasured zero assumption. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `roof_truss_erection` | Roof-truss placement, anchoring and braced erection-stage handover | required | Actual first erection of the declared factory timber roof-truss set on accepted bearings | Integrate finished trusses, bearing connectors and permanent braces; install/retain temporary stability; own erection corrections and disposition exits | 1 Item(s) accepted complete erection-stage set |

One node owns receipt, handling, sequential lifting/placement, fastening/bracing, inspections and local placement/fixing corrections. These operations produce one independently handed-over service, not artificial intermediate products. The site operator does not fabricate trusses. Suspect components leave this node through `rejected_truss_returns` or `erection_waste_truss`; `erection_waste_timber_bracing`; genuine unused materials/packaging use `reusable_returns_timber_bracing`; `reusable_returns_hanger`. Temporary-asset returns already covered by their service stay inside that service boundary.


### Process: Roof-truss placement, anchoring and braced erection-stage handover (`roof_truss_erection`)

#### Inputs

##### Product flows

###### Factory metal-plate-connected timber roof trusses at supply gate (`roof_trusses`)

Record each finished truss design ID delivered for this set, including replacement pieces. Factory connector plates and factory timber belong to this finished-product input and must not be added again as raw materials.

- Selected flow: Factory metal-plate-connected timber roof trusses at supply gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Actual delivered truss counts by design ID, reconciled to installed, returned, discarded and retained-stock states; all attributable replacement supply remains included.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`

Range evidence need: Obtain the actual package schedule, dispatch/receipt and replacement records; no universal truss count, factory yield or mass-per-truss range is established.

###### Separately supplied pre-sized permanent timber restraint member (`permanent_bracing_restraint`)

Record only this independently identified separately supplied pre-sized permanent timber restraint member at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied pre-sized permanent timber restraint member
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`; `sbca-bcsi-current`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied pre-sized permanent timber bracing member (`permanent_bracing_bracing`)

Record only this independently identified separately supplied pre-sized permanent timber bracing member at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied pre-sized permanent timber bracing member
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`; `sbca-bcsi-current`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied pre-sized timber reinforcement member (`permanent_bracing_reinforcement`)

Record only this independently identified separately supplied pre-sized timber reinforcement member at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied pre-sized timber reinforcement member
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`; `sbca-bcsi-current`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied approved roof-truss hanger (`bearing_connectors_hanger`)

Record only this independently identified separately supplied approved roof-truss hanger at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied approved roof-truss hanger
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied complete roof-truss bearing connector (`bearing_connectors_bearing_connection`)

Record only this independently identified separately supplied complete roof-truss bearing connector at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied complete roof-truss bearing connector
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `sbca-installation-2023`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Bounded temporary roof-truss restraint and bracing service (`temporary_stability_service`)

This conditional umbrella identifies the actual temporary restraint/bracing system and service provider or owner. Disaggregate each actual system. Coverage includes capital materials/assets and installation, retention, maintenance, replacement, authorized removal and return/end-of-use burdens; the h unit only records the declared service interval.

- Selected flow: Bounded temporary roof-truss restraint and bracing service
- Flow property / unit: Duration / h
- Amount rule: Actual allocated service-hours and underlying system quantities/resources for the erection period and the separately indexed retained-support continuation; include linked future removal obligations and disclose unresolved provider coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `sbca-installation-2023`; `sbca-bcsi-current`

Range evidence need: Obtain actual approved temporary-bracing plan, member/asset inventory, dates, all consumers, ownership and removal/return records; neither a default duration nor zero asset burden can be inferred.

###### Complete bounded roof-truss crane service (`lifting_access_service_crane`)

Record only this independently identified complete bounded roof-truss crane service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded roof-truss crane service
- Flow property / unit: Duration / h
- Amount rule: Independently record this actual function provider/configuration service hours and all consumers for the actual period, exclude resources demonstrably already included, then normalize once by this PCR original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `sbca-installation-2023`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded roof-truss hoisting service (`lifting_access_service_hoisting`)

Record only this independently identified complete bounded roof-truss hoisting service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded roof-truss hoisting service
- Flow property / unit: Duration / h
- Amount rule: Independently record this actual function provider/configuration service hours and all consumers for the actual period, exclude resources demonstrably already included, then normalize once by this PCR original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `sbca-installation-2023`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded roof-truss work-access service (`lifting_access_service_access`)

Record only this independently identified complete bounded roof-truss work-access service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded roof-truss work-access service
- Flow property / unit: Duration / h
- Amount rule: Independently record this actual function provider/configuration service hours and all consumers for the actual period, exclude resources demonstrably already included, then normalize once by this PCR original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `sbca-installation-2023`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual component and residual freight service (`logistics`)

Record actual transport legs for trusses, additional components, packaging and residual/return movements not included upstream or in a bounded service. Keep payloads, mode and provider boundaries distinct.

- Selected flow: Actual component and residual freight service
- Flow property / unit: mass*distance / t*km
- Amount rule: Actual consignment mass and loaded distance by leg, with allocated empty-return/mobilization coverage where applicable; exclude freight already covered by upstream/provider datasets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_logistics`

Range evidence need: Obtain actual payload, route, distance and vehicle/service records; no typical distance or load factor is justified for an unspecified site.

###### Actual electricity supplied to erection equipment (`installation_energy`)

Record directly controlled fastening/drilling tools, compressor, charging and other installation electricity when used and not covered in a provider service. Exclude factory energy already in truss inputs.

- Selected flow: Actual electricity supplied to erection equipment
- Flow property / unit: Energy / kWh
- Amount rule: Metered or traceably allocated actual electricity by supply and equipment/period, including correction activity and shared compressor/charging use.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Obtain actual meter/charging/compressor records and shared-consumer allocation; an unspecified grid, compressor efficiency or energy-per-truss is not a numerical range.

###### Actually supplied erection-equipment lubricant formulation (`ancillary_materials_lubricant`)

Record only this independently identified actually supplied erection-equipment lubricant formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied erection-equipment lubricant formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual roof-truss shipment wrapping product (`transport_packaging_wrapping`)

Record only this independently identified actual roof-truss shipment wrapping product at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual roof-truss shipment wrapping product
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual roof-truss shipment packaging strap (`transport_packaging_strap`)

Record only this independently identified actual roof-truss shipment packaging strap at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual roof-truss shipment packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual roof-truss shipment dunnage product (`transport_packaging_dunnage`)

Record only this independently identified actual roof-truss shipment dunnage product at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual roof-truss shipment dunnage product
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Braced timber roof-truss set erection-stage service (`erected_roof_truss_set`)

The sole reference output is the actual complete specified set accepted at the qualified braced erection-stage gate. Later diaphragm dependency, retained supports and responsibility transfer remain declared in this service identity.

- Selected flow: Braced timber roof-truss set erection-stage service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `sbca-installation-2023`

Range evidence need: The exact 1 Item(s) defines the complete accepted set; it is not a yield prior. Actual set completeness and inspection evidence are needed, and different geometries/packages are not automatically equivalent.

###### Usable unchanged timber bracing member returned outward (`reusable_returns_timber_bracing`)

Record only this independently identified usable unchanged timber bracing member returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged timber bracing member returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unchanged roof-truss hanger returned outward (`reusable_returns_hanger`)

Record only this independently identified usable unchanged roof-truss hanger returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged roof-truss hanger returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Quarantined roof trusses returned for disposition (`rejected_truss_returns`)

Conditional product-output umbrella only when the receiving manufacturer or other identified custodian accepts the actual trusses for further use or authorized disposition as products. Include defect state and transfer record; waste-status trusses use the waste card instead.

- Selected flow: Quarantined roof trusses returned for disposition
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Actual returned count by truss ID with disposition, recipient and matching receipt; prevent those pieces from entering the accepted-set count or being counted again as waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`
- Sources: `sbca-installation-2023`

Range evidence need: Actual damage/inspection and manufacturer/engineer disposition plus return records determine quantities and product/waste classification; no reject fraction is established.

##### Waste flows

###### Complete discarded metal-plate-connected timber truss waste (`erection_waste_truss`)

Record only this independently identified complete discarded metal-plate-connected timber truss waste at its actual state and supply or receiving gate. Actual complete truss waste includes retained timber/metal plates once, not separate raw constituents. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete discarded metal-plate-connected timber truss waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately discarded timber bracing-member waste (`erection_waste_timber_bracing`)

Record only this independently identified separately discarded timber bracing-member waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately discarded timber bracing-member waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_accepted_service` | roof_truss_erection | There is one intended accepted erection service. Do not allocate to the existing bearing structure or later roof covering as a co-product. Rejected trusses, waste and returns are not accepted erection output; retain all attributable failed-attempt and replacement burdens. |  |
| `local_corrections_and_exits` | roof_truss_erection | Local repositioning/refastening repeats within this node. Link each correction to the original event and retain its extra materials, power and equipment. Link quarantine to product return or waste exit with actual receiver/status. Retained stock is reconciled separately; gross inputs, stock and returns must not be netted twice. No default recycling or biogenic-carbon credit is awarded. | `sbca-installation-2023` |
| `shared_resource_attribution` | temporary_stability_service; `lifting_access_service_crane`; `lifting_access_service_hoisting`; `lifting_access_service_access`; logistics; installation_energy; actual exchanges required by `refine_direct_fuel` | Identify asset/service IDs, roof_truss_erection and every other consuming work package or reporting period. Prefer separately metered activity and directly attributable trips; split inseparable common burdens by a documented causal driver suited to the actual resource, retaining the whole consumer denominator, standby/mobilization treatment and sensitivity. Record rejected alternatives and inventory coverage; do not divide by this PCR output alone when other consumers exist. |  |
| `support_phase_attribution` | temporary_stability_service | Index P1 erection to signed gate, P2 retained support pending the separately owned diaphragm/stability gate, and P3 authorized removal/return/end-of-use. Attach each asset, replacement, maintenance, transport and removal event to its actual phase and consumer. Allocate production and termination burdens once across the documented service cycle; phase shares and receiving dataset responsibilities must reconcile to that whole cycle. Provider ownership does not remove burdens. Missing termination owner or service coverage blocks finalization. | `sbca-bcsi-current` |
| `provider_and_direct_operations` | `lifting_access_service_crane`; `lifting_access_service_hoisting`; `lifting_access_service_access`; temporary_stability_service; logistics; installation_energy; actual exchanges required by `refine_direct_fuel`; actual exchanges required by `refine_direct_releases` | For each actual provider boundary, choose service-inclusive inventory or underlying disaggregated operation. Explicitly mark which fuel, electricity, asset and release burdens are included and which require separate exchanges. Counting service duration alone is insufficient. Material returns already included inside a service must not appear again as separate return outputs. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_components` | `roof_truss_erection` | component receipts, use, replacements and stock | material ledger | set_id; truss/design_id; supplier_gate; kit_coverage; material/specification; piece_count; net_mass; moisture_basis; receipts; replacement; installed; returned; closing_stock; period; event_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile supplier schedule and delivery tickets to installation count/BOM, calibrated weighing or actual item-specific mass records; keep species/grade/treatment/coating and material types distinct. Attribute receipts/use/stock to this set and correction events before normalizing to accepted complete sets. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); kg | each receipt, issue, correction and stock closure | P1 erection plus actual replacement events | actual site, package and suppliers | per reference flow | Traceable schedule, weighing/calibration, receipts, stock reconciliation and approved connection/brace documents; no generic density. |
| `cp_services` | `roof_truss_erection` | temporary stability, lifting and access | service and asset ledger | set_id; asset/provider_id; approved_plan; component_inventory; coverage; all_consumers; P1/P2/P3; start/end; hours; operating/standby; mobilization; maintenance; replacement; custody; removal_owner; removal/return_event; driver; total_denominator; allocation_share; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile crane/access logs and approved temporary-bracing records with provider inventory coverage. Record every consumer and phase, actual period-specific causal driver and full denominator, including later roof work. Obtain production/use/removal/transport/end-of-use coverage or explicit linked inventories; unresolved future events remain disclosed obligations and prevent a completed package. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h; underlying material/energy/service units | each service period, custody transfer and termination event | P1 erection, P2 retention, P3 authorized removal and return | actual site plus every shared consumer/provider | per reference flow | Plan acceptance, provider primary inventory, complete consumer denominator and phase ledger; shares sum to the bounded cycle, removals authorized only after documented later stability. |
| `cp_logistics` | `roof_truss_erection` | component, residual and return freight | consignment ledger | set_id; transfer_id; material; net_payload; origin/destination; mode; vehicle/provider; distance; empty_return; included_upstream; shared_consumers; period | Collect actual weigh/dispatch and route records for each leg. Calculate actual payload-distance activity, attribute inseparable shared legs with complete payload/consumer data, and reconcile provider/upstream coverage before normalizing to accepted sets. | t*km | each physical transport leg | P1 and attributable P2/P3 legs | actual source-site-receiver routes | per reference flow | Payload and route evidence, allocation records, matched transfer IDs and transport coverage without duplicated trips. |
| `cp_resources` | `roof_truss_erection` | direct electricity and fuel | meter and fuel ledger | set_id; equipment; provider_coverage; supply/fuel_identity; opening_stock; delivered; closing_stock; meter_start/end; charging; operating_period; all_consumers; allocation_driver; factor/unit; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Use actual electricity meters/charging and consumed fuel stock reconciliation. Distinguish fuel and electricity, include compressor/tools and correction events, and allocate shared operation using measured consumption or documented causal use with complete denominator; record factors for any actual conversion. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kWh; kg; original measured units | each meter/refuelling period and stock closure | P1 and any directly owned P2/P3 operation | actual site equipment and supplies | per reference flow | Meter calibration, receipts, stocks, equipment logs, conversion evidence and confirmation that provider inputs omit these direct operations. |
| `cp_residuals` | `roof_truss_erection` | packaging, usable returns, rejected trusses, waste and stock | material disposition ledger | set_id; event_id; transfer_id; material/truss_id; count; net_mass; opening/closing_stock; received; installed; product/waste_status; defect; manufacturer_disposition; receiver; route; capture; phase; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Track incoming packaging and each residual by material and state. Reconcile usable return dispatch to receiving custody; quarantine rejected trusses until written disposition; use waste tickets for discarded material. Keep retained stock and service-internal asset returns separate, with gross supply and stock/return adjustment made once. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; Item(s) | each receipt, rejection, return, waste transfer and stock closure | P1 with attributable continuation/removal residuals linked to P2/P3 | actual site, suppliers and named receivers | per reference flow | Weighing/counts, matched receiver evidence, status/defect decisions, waste treatment and material closure; no assumed recovery credit. |
| `cp_acceptance` | `roof_truss_erection` | complete accepted erection-stage set | documented acceptance record | set_id; truss_ids/count; span/pitch/spacing/layout; bearing_acceptance; design/placement_revision; instruction_edition; approved_lift/temporary/permanent_plans; connection/brace_completion; temporary_support_list; later_stability_dependency; P1/P2/P3; custody/removal_owner; inspection; defect_closure; accepted_complete_set_count | Compare actual installed truss IDs, bearing connections and permanent member bracing to approved documents. Inspect and close defects, record retained temporary stability and downstream responsibilities, then obtain signed erection-stage handover; count only complete qualified sets. The reference remains one declared set rather than individual trusses or area. | Item(s) | one complete set at signed gate and each change to retained-support obligations | P1 signed gate with explicit P2/P3 responsibility linkage | actual declared set at its site | per reference flow | Signed designer/installer/receiver documents as applicable, inspection and closure evidence; incomplete or unsafe sets are not accepted. |
| `cp_releases` | `roof_truss_erection` | direct characterized releases | measurement or activity-factor record | set_id; equipment/source; provider_coverage; substance; medium; particle_size/basis; activity; factor/source/date; control/capture; measurement; uncertainty; period; allocation; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | For directly controlled actual operation obtain calibrated sampling or a justified source-specific factor applied to measured activity. Record each substance and compartment separately and attributable phase/consumer; distinguish captured waste and provider-included emissions, and document uncertainty or unmeasured gaps. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each measurement or equipment/activity period | actual direct P1 and attributable P2/P3 operation | actual site receiving compartment | per reference flow | Measurement QA or actual applicable factor reference with technology/fuel/controls and uncertainty; generic pollutant names cannot select concrete identities. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_complete_set` | all inventory rows | Aggregate actual attributable material, resource, residual and service quantities for the declared complete package; where one measured campaign covers several accepted sets, retain each configuration and allocate with its actual records before expressing quantities per reference flow. Do not divide individual truss counts into a new reference product. | actual records; accepted complete set ledger; allocation evidence | per reference flow inventory quantities |  |
| `component_closure` | roof_trusses; `permanent_bracing_restraint`; `permanent_bracing_bracing`; `permanent_bracing_reinforcement`; `bearing_connectors_hanger`; `bearing_connectors_bearing_connection`; `transport_packaging_wrapping`; `transport_packaging_strap`; `transport_packaging_dunnage`; `reusable_returns_timber_bracing`; `reusable_returns_hanger`; rejected_truss_returns; `erection_waste_truss`; `erection_waste_timber_bracing` | Reconcile opening stock plus receipts to installed/consumed quantities, genuine product returns, characterized waste and closing stock by actual material or truss ID. Record unresolved balance gaps and correction supply explicitly; do not use an output service count as a material mass. | cp_components; cp_residuals | material-specific count/mass reconciliation |  |
| `shared_cycle_closure` | temporary_stability_service; `lifting_access_service_crane`; `lifting_access_service_hoisting`; `lifting_access_service_access`; logistics; installation_energy; actual exchanges required by `refine_direct_fuel` | For each event/resource, apply its evidenced allocation share to the full covered inventory, not just billed hours. Reconcile all consumer and P1/P2/P3 shares to the complete resource/service boundary, then retain each accepted set attribution once. | cp_services; cp_logistics; cp_resources; all-consumer and phase ledger | complete allocated underlying burden with service activity |  |
| `release_calculation` | actual exchanges required by `refine_direct_releases` | Use measured released mass or actual measured activity with a source-specific documented factor, retaining unit conversion, capture assumptions and uncertainty. List the actual external factor reference in the constructed dataset; do not invent a factor in this PCR. | cp_releases; actual activity/factor or measurements | substance- and compartment-specific released mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `actual_design_and_gate` | reference product | Preserve actual set identity, design/placement revisions, accepted host interfaces, document applicability and signed gate. No unresolved defect may be hidden in accepted output. | cp_acceptance; actual project/manufacturer/engineer records |
| `supply_and_quantity_quality` | all component and residual cards | Retain material identity and state, actual gross/stock/return amounts, net mass/count evidence, moisture basis and uncertainty. Candidate numerical ranges require independently reviewed comparable evidence; a batch maximum cannot validate itself. | cp_components; cp_residuals |
| `phase_and_service_completeness` | temporary_stability_service; `lifting_access_service_crane`; `lifting_access_service_hoisting`; `lifting_access_service_access` | Declare P1/P2/P3 dates/owners and full service coverage; reconcile capital materials, maintenance/use, replacements and termination once across all consumers. Unconfirmed later removal is a gap rather than zero. | cp_services; provider inventory; responsibility transfer |
| `resource_release_quality` | installation_energy; actual exchanges required by `refine_direct_fuel`; actual exchanges required by `refine_direct_releases`; logistics | Use actual supply, fuel, technology/mode and receiving media; retain meter/stock/distance evidence and applicable factors. Disclose unmeasured resources/releases and provider exclusions. | cp_resources; cp_releases; cp_logistics |
| `identity_and_range_gaps` | all cards | Resolve each concrete exchange identity, support property/unit and actual-evidence Range needs before final TIDAS publication. A conditional umbrella becomes zero, one or several exchanges from foreground evidence; absence of evidence is not zero. | actual lookup/support verification and foreground collection package |
| `refine_permanent_bracing` | `permanent_bracing_restraint`; `permanent_bracing_bracing`; `permanent_bracing_reinforcement` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Include the actual members and reinforcements installed at this erection gate. Separate components supplied in the truss kit from additional purchases; no site transformation of trusses is permitted. Range evidence need: Actual engineer-approved brace schedule, pieces and measured/supplier masses are needed; no generic brace spacing, timber density, loss fraction or force capacity is supplied. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual different design/grade/SKU members require own records; a physical member serving several roles is counted once, kit-included members not bought again, no site transformation of trusses. | `cp_components`; actual independent records and identity/unit evidence |
| `refine_bearing_connectors` | `bearing_connectors_hanger`; `bearing_connectors_bearing_connection` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record actual hangers, bearing connections, brace fixings and fasteners not already included in the factory product or other service input. Split material and corrosion-protection identities using actual purchase and installation records. Range evidence need: Obtain actual approved connection schedule and item-specific mass evidence; no standard nail count, anchor capacity or generic steel substitution is valid. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual brace-fixing and other fastener functions/SKUs/material/corrosion-protection identities need separate records; factory product/provider included components not duplicated. | `cp_components`; actual independent records and identity/unit evidence |
| `refine_lifting_access_service` | `lifting_access_service_crane`; `lifting_access_service_hoisting`; `lifting_access_service_access` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Identify actual crane/rigging, hoisting and access systems serving the erection. For each provider disclose included mobilization, equipment production/maintenance, operation and demobilization; separate direct-operation inputs only when absent from that service. Range evidence need: Obtain actual lift plan and equipment/service logs, provider coverage and whole-period consumer denominator; no fuel-per-lift or capacity/time defaults are specified. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual separate rigging provision/functions and different native references require concrete unit/scope; a complete crane service including rigging/hoisting is one provider boundary, not duplicate internal activities. Mobilization, capital/maintenance, operation and demobilization ownership all retained. | `cp_services`; actual independent records and identity/unit evidence |
| `refine_direct_fuel` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella for actual combustion fuel identities crossing the site boundary. Use this card only for operation not already included in crane/access/logistics services; keep fuel types and supply forms separate. Range evidence need: Obtain actual equipment, fuel specification, consumed quantities and provider exclusions; fuel identity, density and consumption cannot be inferred from lifting requirements. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Each actual carrier/grade/native unit and equipment/event outside provider-inclusive crane/access/freight coverage; upstream nonreturned unburned loss remains supplied fuel burden, combustion activity independent. | `cp_resources`; actual independent records and identity/unit evidence |
| `refine_ancillary_materials` | `ancillary_materials_lubricant` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella for genuinely consumed supplementary materials such as equipment lubricants when attributable and absent from provider inputs. No coating, adhesive, truss repair chemical or water-consuming route is presumed. Range evidence need: Actual purchase/use/stock records and material identity are needed; a zero, one or multiple exchange outcome depends on the job and cannot use a generic chemical factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual supplementary consumable functions/SKUs require actual identity/quantity; no presumed coating/adhesive/truss-repair chemical/water-consuming route, no provider duplicate. | `cp_components`; actual independent records and identity/unit evidence |
| `refine_transport_packaging` | `transport_packaging_wrapping`; `transport_packaging_strap`; `transport_packaging_dunnage` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Identify actual wrapping, straps, dunnage and reusable packaging at the declared supply gate. Activate a separate burden-bearing input only for separately supplied packaging or the portion not covered by the upstream product dataset. Supplier-included packaging still requires physical custody/exit records, without a second upstream material-production burden. Reusable temporary-bracing assets remain in their service. Range evidence need: Obtain supplier packaging declarations and site counts/weighing with actual custody; no universal packaging intensity or return rate is established. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual reusable containers/other packaging and different material/ownership references require exact custody/life records; upstream-embedded manufacture physical ledger only, reusable temporary-bracing assets stay service. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_reusable_returns` | `reusable_returns_timber_bracing`; `reusable_returns_hanger` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional product-output umbrella for genuine unused connectors/braces and reusable packaging leaving to a named supplier or store. Record separate materials and destinations; retained site stock is a ledger state rather than an invented exit. Do not place rejected trusses here. Range evidence need: Obtain actual return acceptance, custody and mass records; no default reusable fraction or avoided-production credit is assumed. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other connectors/restraints/reinforcements/packaging require original SKU/state/native unit/recipient, stock not outward and rejected truss separate Count product/waste state. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_erection_waste` | `erection_waste_truss`; `erection_waste_timber_bracing` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional waste-output umbrella for actual discarded connectors, braces, damaged trusses and packaging; segregate by material, hazardous status and receiving treatment. Retain failed-attempt and correction burdens. This route does not assume truss-cutting sawdust. Range evidence need: Obtain actual waste tickets, segregation and treatment evidence; no generic installation loss or recycling yield is imposed. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual discarded connectors, other members/packaging and material/hazard/receiver distinctions need independent identities; no presumed truss-cutting sawdust, failed/corrective work burdens retained. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_direct_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional elementary-output umbrella for actual directly operated equipment combustion species and measured installation particles or other releases. Establish substance, receiving medium and particle class/basis before selecting each concrete flow; provider-included releases are not repeated. Range evidence need: Obtain actual equipment/fuel/emission-factor or sampling evidence and receiving medium; no generic VOC, particulate or exhaust quantity is fabricated. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_releases`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator retains original configuration strata, accepted state/gate and actual causal attribution; no unlike jobs/branches/routes treated as equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_completeness` | erected_roof_truss_set | Require 1 Item(s), the real output link and identical complete-set meaning in both languages. Match each truss to the approved package and signed erection gate; exclude unresolved rejects from accepted output. | `un-cpc3-2025`; `sbca-installation-2023` |
| `structural_handover` | roof_truss_erection | Verify actual bearing acceptance, placement/connection records, permanent member restraints/bracing, retained temporary stability, construction-stage restrictions, inspection closure and named responsibility transfer; do not infer finished diaphragm/roof performance. | `sbca-installation-2023`; `sbca-bcsi-current` |
| `reject_path_and_balance` | all material and residual cards | Reconcile each material state and defect event to installed output, stock, genuine usable return, rejected product return or waste. Require receiver/status and transfer IDs; retain correction burdens and prevent double subtraction or rejected-set acceptance. |  |
| `shared_phase_coverage` | temporary_stability_service; `lifting_access_service_crane`; `lifting_access_service_hoisting`; `lifting_access_service_access`; logistics; installation_energy; actual exchanges required by `refine_direct_fuel`; actual exchanges required by `refine_direct_releases` | Require complete all-consumer and P1/P2/P3 ledgers, actual causal allocations and full service coverage. Verify replacement/termination owner, authorized support removal gate and matching receiving dataset responsibility; unresolved phase/asset/removal coverage blocks completion. Count provider-included and direct operation once. |  |
| `actual_identity_quantity` | all inventory rows | Require actual identity/property/unit compatibility and traceable linked node-specific protocols. Each Range evidence need must be closed by actual evidence or disclosed as unresolved; fixed reference quantity is a definition, not a yield range. Check every actual conditional material/waste/substance separately and reject fabricated default fuel, density, loss, fastener, emission or carbon-credit values. |  |
| `atomization_permanent_bracing_complete` | `permanent_bracing_restraint`; `permanent_bracing_bracing`; `permanent_bracing_reinforcement` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_permanent_bracing` with actual records; unresolved required expansion blocks the dataset. | `sbca-installation-2023`; `sbca-bcsi-current` |
| `atomization_bearing_connectors_complete` | `bearing_connectors_hanger`; `bearing_connectors_bearing_connection` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_bearing_connectors` with actual records; unresolved required expansion blocks the dataset. | `sbca-installation-2023` |
| `atomization_lifting_access_service_complete` | `lifting_access_service_crane`; `lifting_access_service_hoisting`; `lifting_access_service_access` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_lifting_access_service` with actual records; unresolved required expansion blocks the dataset. | `sbca-installation-2023` |
| `atomization_direct_fuel_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_direct_fuel` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_ancillary_materials_complete` | `ancillary_materials_lubricant` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_ancillary_materials` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_transport_packaging_complete` | `transport_packaging_wrapping`; `transport_packaging_strap`; `transport_packaging_dunnage` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_transport_packaging` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_reusable_returns_complete` | `reusable_returns_timber_bracing`; `reusable_returns_hanger` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_reusable_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_erection_waste_complete` | `erection_waste_truss`; `erection_waste_timber_bracing` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_erection_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_direct_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_direct_releases` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground site erection data package, with process and lifecyclemodel projections and actual component/resource background links |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Model first erection of the declared matching timber roof-truss set at its qualified braced erection-stage gate, with disclosed later stability obligations |
| excluded_use | Generic roof area, one factory truss, complete building/roof structural or weather performance, floor/metal trusses, relocation, manufacturing or structural repair |
| required_metadata | All required reference qualifiers; node and set ID; supply-kit and provider boundaries; component/resource geography and dates; P1/P2/P3 owners/events; all-consumer allocation; receiver/stock/waste paths; actual source versions and exchange identities |
| required_quality_disclosure | Identity and support gaps; unresolved Range evidence; measurements and uncertainty; exclusions; shared/capital/service/termination coverage; actual later diaphragm dependency and support-removal responsibility |
| update_trigger | Changed design/package or host interface; current instruction applicability; truss/bracing/connection specification; damaged/altered components; service/provider allocation or phase owner; resource/factor identity; revised stability gate or removal plan |


## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, printed p. 291, 54522 and adjacent 54530. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope and narrower roof-truss route; roof-covering separation |
| `sbca-installation-2023` | extension_guidance | Structural Building Components Association, BCSI Guides Truss Installation Process, Pt 2, 8 August 2023. https://www.sbcacomponents.com/media/bcsi-guides-truss-installation-process-pt-2 | Qualitative pre-review, bearing/placement/anchoring, temporary stability, permanent member-bracing and inspection sequence; no universal numerical design values adopted |
| `sbca-bcsi-current` | extension_guidance | Structural Building Components Association, Building Component Safety Information Guide landing page, revised BCSI-2025, accessed 15 October 2026. https://www.sbcacomponents.com/bcsi | Current edition context and distinction of temporary/permanent restraint and bracing; full paid guide not claimed read |
| `sbca-jobsite-packages` | extension_guidance | Structural Building Components Association, Jobsite Packages, accessed 15 October 2026. https://www.sbcacomponents.com/jobsite-packages | Job-specific installation/safety package and truss design/project-document requirement; actual package applicability remains foreground evidence |
